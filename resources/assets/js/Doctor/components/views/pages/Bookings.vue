<template>
    <div class="animated fadeIn">
        <spinner v-if="loading"></spinner>
        <b-row>
            <b-col sm="12">
                <b-card no-body>
                    <b-card-header>
                        <strong>Bookings</strong>
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
                                <th>Phone</th>
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
                                    <td>{{booking.patient.name}}</td>
                                    <td>{{booking.patient.phone}}</td>
                                    <td>
                                        {{booking.slot.tokenNo}}
                                    </td>
                                    <td>
                                        <template v-if="booking.status === getConstant('ACTIVE_BOOKING_STATUS')">
                                            <b-badge variant="success"
                                                     v-b-tooltip.hover title="Active Booking"
                                            >
                                                Active
                                            </b-badge>
                                            <b-badge @click="deleteBooking(booking.id)" variant="danger"
                                                     v-b-tooltip.hover title="Delete Booking">
                                                <i class="fa fa-trash-o"></i>
                                            </b-badge>
                                            <b-badge @click="editBooking(booking.id)" variant="info"
                                                     v-b-tooltip.hover title="Edit Booking">
                                                <i class="fa fa-pencil-square-o"></i>
                                            </b-badge>
                                        </template>
                                        <b-badge v-else-if="booking.status === getConstant('DELETED_BOOKING_STATUS')"
                                                 variant="danger">
                                            Deleted
                                        </b-badge>
                                        <b-badge v-else
                                                 variant="danger">
                                            Past
                                        </b-badge>

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
    import {spinner, dateTimeFormatter} from '../../../mixins/helper';
    import ListCount from '../../shared/PaginationListCount';
    import Pagination from '../../shared/Pagination';
    import moment from 'moment';
    import List from 'vue-suggestion-list';
    import {getConstants} from '../../../constants/constantsMixins';
    import alerts from '../../../shared/alert';
    import {BOOKING_NOT_FOUNT, DELETE_BOOKING_WARNING} from '../../../constants/messages';

    export default {
        name: "Bookings",
        mixins: [spinner, dateTimeFormatter, getConstants],
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
                    date: moment().format('YYYY-MM-DD'),
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
                    this.filter.doctor = this.doctors[0].value;
                    this.getClinics(this.filter.doctor);
                    this.getBookingDetails({url: 'get-staff-bookings', data: this.filter});
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
            deleteBooking(id) {
                alerts({
                    options: {
                        title: "Are you sure?",
                        text: DELETE_BOOKING_WARNING,
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    },
                    callback: true,
                }).then(() => {
                    submit({
                        type: 'post',
                        url: 'delete-staff-booking',
                        data: {id: id}
                    }).then(({data}) => {
                        this.getBookingDetails({url: 'get-staff-bookings', data: this.filter});
                    }).catch(response => {
                        alerts({
                            options: {
                                title: "Not Found!",
                                text: BOOKING_NOT_FOUNT,
                                icon: "warning",
                                buttons: true,
                            }
                        });
                    });
                });
            },
            editBooking(id) {
                alert(id);
            }
        },
        watch: {
            filter: {
                handler(val, oldVal) {
                    this.getBookingDetails({url: 'get-staff-bookings', data: this.filter});
                },
                deep: true
            }
        },
        created() {
            this.getBookingsFilterData();
        }
    }
</script>

<style scoped>
    .badge.badge-danger,
    .badge.badge-info{
        cursor: pointer;
    }
</style>