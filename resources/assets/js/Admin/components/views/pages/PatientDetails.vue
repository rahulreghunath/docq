<template>
    <div class="animated fadeIn">
        <spinner v-if="loading"></spinner>
        <b-row>
            <b-col sm="12">
                <b-card no-body>
                    <b-card-header>
                        <strong>Patient</strong>
                        <div class="pull-right">
                            <b-badge @click="$modal.show('edit-patient')" title="Edit Patient"
                                     class="cursor-pointer pd-badge r-margin-5"><i class="fa fa-pencil"></i> Edit
                            </b-badge>
                            <b-badge title="Delete Patient" variant="danger"
                                     class="pull-right pd-badge  cursor-pointer"><i class="fa fa-trash"></i> Delete
                            </b-badge>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <table class="table table-hover table-bordered patient-table">
                            <tbody>
                            <tr>
                                <th class="bg-info">Name</th>
                                <td>{{echo(patient.name)}}</td>
                            </tr>
                            <tr>
                                <th class="bg-info">Age</th>
                                <td>{{echo(patient.age)}}</td>
                            </tr>
                            <tr>
                                <th class="bg-info">Gender</th>
                                <td>{{echo(patient.gender)}}</td>
                            </tr>
                            <tr>
                                <th class="bg-info">Address</th>
                                <td>{{`${echo(patient.address)} ${echo(patient.location)} (${echo(patient.pin)})`
                                    }}
                                </td>
                            </tr>
                            <tr>
                                <th class="bg-info">Phone</th>
                                <td>{{echo(patient.phone)}}</td>
                            </tr>
                            <tr>
                                <th class="bg-info">Email</th>
                                <td>{{echo(patient.email)}}</td>
                            </tr>
                            <tr>
                                <th class="bg-info">Consulting Doctors</th>
                                <td>{{echo(patient.email)}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <modal name="edit-patient" :clickToClose="false" :resizable="true" :adaptive="true" width="50%"
               height="auto" :scrollable="true">
            <b-form @submit.prevent="editPatient">
                <div class="vue-modal-header">
                    <button type="button" @click="$modal.hide('edit-patient')" class="close">&times;</button>
                    <h4 class="title">Edit Patient</h4>
                </div>
                <div class="modal-body">
                    <b-row>
                        <b-col sm="6">
                            <b-form-group
                                    label="Name"
                                    label-for="name"
                                    :invalid-feedback="editForm.errors.get('name')"
                                    :state="editForm.has('name')"
                            >
                                <b-form-input id="name" placeholder="Patient Name"
                                              :state="editForm.has('name')"
                                              v-model.trim="editForm.name"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group
                                    label="Age"
                                    label-for="age"
                                    :invalid-feedback="editForm.errors.get('age')"
                                    :state="editForm.has('age')"
                            >
                                <b-form-input id="age" placeholder="Patient Age"
                                              :state="editForm.has('age')"
                                              v-model.trim="editForm.age"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group
                                    label="Gender"
                                    label-for="gender"
                                    :invalid-feedback="editForm.errors.get('gender')"
                                    :state="editForm.has('gender')"
                            >
                                <b-form-select
                                        id="weekDay" v-model="editForm.gender"
                                        :state="editForm.has('gender')"
                                        :options="genders"
                                ></b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group
                                    label="Address"
                                    label-for="address"
                                    :invalid-feedback="editForm.errors.get('address')"
                                    :state="editForm.has('address')"
                            >
                                <b-form-input id="addres" placeholder="Address"
                                              :state="editForm.has('address')"
                                              v-model.trim="editForm.address"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group
                                    label="Location"
                                    label-for="location"
                                    :invalid-feedback="editForm.errors.get('location')"
                                    :state="editForm.has('location')"
                            >
                                <b-form-input id="location" placeholder="Location"
                                              :state="editForm.has('location')"
                                              v-model.trim="editForm.location"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group
                                    label="Pin Code"
                                    label-for="pin"
                                    :invalid-feedback="editForm.errors.get('pin')"
                                    :state="editForm.has('pin')"
                            >
                                <b-form-input id="location" placeholder="Pin Code"
                                              :state="editForm.has('pin')"
                                              v-model.trim="editForm.pin"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group
                                    label="Phone"
                                    label-for="phone"
                                    :invalid-feedback="editForm.errors.get('phone')"
                                    :state="editForm.has('phone')"
                            >
                                <b-form-input id="phone" placeholder="Phone Number"
                                              :state="editForm.has('phone')"
                                              v-model.trim="editForm.phone"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group
                                    label="Email"
                                    label-for="email"
                                    :invalid-feedback="editForm.errors.get('email')"
                                    :state="editForm.has('email')"
                            >
                                <b-form-input id="location" placeholder="Email"
                                              :state="editForm.has('email')"
                                              v-model.trim="editForm.email"></b-form-input>
                            </b-form-group>
                        </b-col>

                    </b-row>
                </div>
                <div class="vue-modal-footer text-right">
                    <b-button type="submit" size="sm" variant="primary"><i
                            class="fa fa-check"></i>
                        Save
                    </b-button>
                    <b-button type="reset" @click="$modal.hide('edit-patient')" size="sm" variant="danger"><i
                            class="fa fa-ban"></i>
                        Cancel
                    </b-button>
                </div>
            </b-form>
        </modal>
    </div>
</template>

<script>
  import {dateTimeFormatter, display, spinner} from '../../../mixins/helper';
  import submit from '../../../http/http';
  import Form from '../../../shared/form';
  import ListCount from '../../shared/PaginationListCount';
  import Pagination from '../../shared/Pagination';
  import {getConstants} from '../../../constants/constantsMixins';

  export default {
    name: 'PatientDetails',
    mixins: [spinner, dateTimeFormatter, display, getConstants],
    components: {
      ListCount,
      Pagination,
    },
    data() {
      return {
        patient: {},
        slot: {},
        booking: {},
        editForm: new Form({
          id:'',
          name: '',
          gender: '',
          age: '',
          location: '',
          address: '',
          pin: '',
          email: '',
          phone: '',
        }),
        genders: [
          {value: 'male', text: 'Male'},
          {value: 'female', text: 'Female'},
        ]
      };
    },
    methods: {
      getPatientDetails() {
        submit({
          type: 'get',
          url: 'get-patient',
          data: {patientId: this.patientId},
        })
          .then(({data}) => {
            data = data.data;
            this.patient = data.patient;
            this.editForm.id = this.patient.id;
            this.editForm.name = this.patient.name;
            this.editForm.age = this.patient.age;
            this.editForm.gender = this.patient.gender;
            this.editForm.address = this.patient.address;
            this.editForm.email = this.patient.email;
            this.editForm.phone = this.patient.phone;
            this.editForm.pin = this.patient.pin;
            this.editForm.location = this.patient.location;
          });
      },
      editPatient() {
        submit({
          type: 'post',
          url: 'post-staff-booking-patient',
          data: this.editForm,
          form: true,
          clearExcept:['name','email','id','age','gender','address','location','phone','pin']
        }).then(({data}) => {
          this.patient = data.data.patient;
          this.$modal.hide('edit-patient');
        });
      },
    },
    computed: {
      patientId() {
        return this.$route.params.id;
      },
    },
    mounted() {
      this.getPatientDetails();
    },
  }
  ;
</script>

<style scoped lang="scss">
    .patient-table {
        margin: 0;
    }

    .patient-box {
        padding: 0;

    }

    .card-body {
        padding: 0;
    }

    .pd-badge {
        padding: 4px;
        font-size: 12px;
    }
</style>
