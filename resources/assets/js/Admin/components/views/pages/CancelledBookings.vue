<template>
    <div class="animated fadeIn">
        <spinner v-if="loading"></spinner>
        <b-row>
            <b-col sm="12">
                <b-card no-body>
                    <b-card-header>
                        <strong>Bookings Cancelled By Doctor</strong>
                    </b-card-header>
                    <b-card-body>
                        <b-row>
                            <b-col sm="4">
                                <b-form-group
                                        label="Select Date"
                                        label-for="date"
                                >
                                    <input type="date" v-model="filter.date" class="form-control" id="date"
                                           placeholder="Date"/>
                                </b-form-group>
                            </b-col>
                            <b-col sm="4">
                                <b-form-group
                                        label="Doctor"
                                        label-for="doctor"
                                >
                                    <b-form-select v-model="filter.doctor"
                                                   :options="doctors"
                                                   id="doctor"
                                                   @change="getClinics($event)"
                                    ></b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col sm="4">
                                <b-form-group
                                        label="Clinic"
                                        label-for="doctor"
                                >
                                    <b-form-select v-model="filter.clinic"
                                                   :options="clinics"
                                                   id="clinic"
                                    ></b-form-select>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <list-count :data="bookings"></list-count>
                        <table class="table table-hover table-bordered">
                            <thead>
                            <tr>
                                <th>Sl.no</th>
                                <th>Patient</th>
                                <th>Doctor</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th>Token</th>
                                <th>Options</th>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-if="bookings.data.length">
                                <tr v-for="(booking,index) in bookings.data">
                                    <td>
                                        {{ (bookings.meta.current_page * bookings.meta.per_page) -
                                        bookings.meta.per_page + index + 1}}
                                    </td>
                                    <td>
                                        <router-link
                                                :to="{ name: 'patientDetails', params: { id: booking.patient.id }}">
                                            {{booking.patient.name}}
                                        </router-link>
                                    </td>
                                    <td>{{booking.doctor_details.name}}</td>
                                    <td>{{booking.patient.phone}}</td>
                                    <td>{{booking.slot.date | date }}</td>
                                    <td>
                                        {{booking.slot.tokenNo}}
                                        ( {{booking.slot.startTime | time}} - {{booking.slot.endTime | time}} )
                                    </td>
                                    <td>
                                        <b-button @click="markAsInformed(booking.id)" variant="success">Mark As
                                            Informed
                                        </b-button>
                                    </td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="7" class="text-center">
                                    No bookings to show, Try changing filters
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="text-center margin-top-30">
                            <pagination :form-data="filter" :data="bookings"
                                        @pagination-change-page="getBookingDetails"></pagination>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
  import submit from '../../../http/http';
  import {filters, spinner} from '../../../mixins/helper';
  import ListCount from '../../shared/PaginationListCount';
  import Pagination from '../../shared/Pagination';
  import List from 'vue-suggestion-list';
  import {getConstants} from '../../../constants/constantsMixins';
  import alerts from '../../../shared/alert';
  import {BOOKING_NOT_FOUNT, DELETE_BOOKING_WARNING} from '../../../constants/messages';

  export default {
    name: "CancelledBookings",
    mixins: [spinner, getConstants, filters],
    components: {
      ListCount,
      Pagination,
      List
    },
    data() {
      return {
        value: '',
        items: [
          {option: 'First', value: 1},
          {option: 'Two', value: 2},
          {option: 'Three', value: 3}
        ],
        bookings: {data: []},
        doctors: [],
        clinics: [],
        filter: {
          doctor: '',
          date: '',
          clinic: ''
        }
      };
    },
    methods: {
      getBookingsFilterData() {
        submit({
          type: 'get',
          url: 'get-staff-bookings-filter-data',
        }).then(({data}) => {
          this.doctors = data.data.doctors;
        }).catch(response => {

        });
      },
      getBookingDetails({url, data}) {
        submit({
          type: 'get',
          url: url,
          data: data
        }).then(({data}) => {
          this.bookings = data;
        });
      },
      getClinics(value) {
        submit({
          type: 'get',
          url: 'get-staff-booking-clinics',
          data: {id: value}
        }).then(({data}) => {
          this.clinics = data.data.clinics.length > 0 ? data.data.clinics : [{
            text: 'No clinics added',
            value: '0',
            disabled: true
          }];
        });
      },
      markAsInformed(id) {
        submit({
          type: 'post',
          url: 'change-booking-status',
          data: {id}
        }).then(() => {
          this.getBookingDetails({url: 'get-cancelled-bookings', data: this.filter});
        }).catch(() => {
          this.getBookingDetails({url: 'get-cancelled-bookings', data: this.filter});
        });
      }
    },
    watch: {
      filter: {
        handler(val, oldVal) {
          this.getBookingDetails({url: 'get-cancelled-bookings', data: this.filter});
        },
        deep: true
      }
    },
    created() {
      this.getBookingsFilterData();
      this.getBookingDetails({url: 'get-cancelled-bookings', data: this.filter});
    }
  }
</script>

<style scoped>

</style>