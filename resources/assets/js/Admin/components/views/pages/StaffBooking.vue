<template>
    <div class="animated fadeIn">
        <spinner v-if="loading"></spinner>
        <b-row>
            <b-col sm="12">
                <b-form @submit.prevent="">
                    <b-card>
                        <div slot="header">
                            <strong>Add New Booking</strong>
                        </div>
                        <b-row>
                            <b-col sm="4">
                                <b-form-group
                                        label="Doctor"
                                        label-for="doctor"
                                >
                                    <b-form-select v-model="doctor"
                                                   :options="doctors"
                                                   id="doctor"
                                                   @change="getClinics($event)"
                                    ></b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col sm="4">
                                <b-form-group
                                        label="Clinic"
                                        label-for="clinic"
                                >
                                    <b-form-select v-model="clinic"
                                                   :options="clinics"
                                                   id="clinic"
                                                   @change="selectClinic($event)"
                                    ></b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col sm="4">
                                <b-form-group
                                        label="Token Number"
                                        label-for="token"
                                >
                                    <b-form-select v-model="token"
                                                   :options="tokens"
                                                   id="token"
                                    ></b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col sm="4" v-if="patient.dummy===true">
                                <b-button type="button" @click="choosePatient({url:'get-staff-booking-patients'})"
                                          size="md" variant="primary"><i
                                        class="fa fa-wheelchair-alt"></i>
                                    Choose Patient
                                </b-button>
                            </b-col>

                            <template v-else>
                                <b-col sm="6">
                                    <h4>Basic Details</h4>
                                    <table class="table table-bordered">
                                        <tr>
                                            <th>Name</th>
                                            <td>
                                                {{ patient.name }}
                                                <b-button class="pull-right" type="button"
                                                          @click="choosePatient({url: 'get-staff-booking-patients'})"
                                                          size="md" variant="primary">
                                                    <i
                                                            class="fa fa-trash-o"></i>
                                                    Change Patient
                                                </b-button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Age</th>
                                            <td>{{ patient.age }}</td>
                                        </tr>
                                        <tr>
                                            <th>Gender</th>
                                            <td>{{ patient.gender }}</td>
                                        </tr>
                                    </table>
                                </b-col>
                                <b-col sm="6">
                                    <h4>Contact Details</h4>
                                    <table class="table table-bordered">
                                        <tr>
                                            <th>Address</th>
                                            <td>
                                                {{ patient.address }}
                                                <span v-if="patient.pin.length">{{patient.pin}}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Place</th>
                                            <td>{{ patient.location }}</td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>{{ patient.phone }}</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{{ patient.email }}</td>
                                        </tr>
                                    </table>
                                </b-col>
                            </template>
                        </b-row>
                        <div slot="footer">
                            <b-button type="submit" @click="submitBooking" size="sm" variant="primary"><i
                                    class="fa fa-dot-circle-o"></i>
                                Submit
                            </b-button>
                            <b-button type="reset" size="sm" @click="" variant="danger"><i
                                    class="fa fa-ban"></i> Reset
                            </b-button>
                        </div>
                    </b-card>
                </b-form>
            </b-col>
        </b-row>
        <modal name="session-dates" :clickToClose="false" :resizable="true" :adaptive="true" width="70%"
               height="auto" :scrollable="true">
            <div class="vue-modal-header">
                <button type="button" @click="$modal.hide('session-dates')" class="close">&times;
                </button>
                <h4 class="title">Select Session</h4>
            </div>
            <div class="modal-body text-center">
                <b-row>
                    <b-col sm="12">
                        <template v-if="sessionDates.length">
                            <div class="date" @click="selectDate($event,sessionDate.id)"
                                 v-for="sessionDate in sessionDates">
                                {{sessionDate.date +' '+ sessionDate.session_title}}
                            </div>
                        </template>
                        <template v-else>
                            <h3>No Session Added</h3>
                            <div>
                                <router-link
                                        :to="{
                                            name: 'workingSessions',params: {
                                                id: doctorInfo('value'),name:doctorInfo('text')
                                            }
                                        }">
                                    Add new session
                                </router-link>
                            </div>
                        </template>
                    </b-col>
                </b-row>
            </div>
            <div class="vue-modal-footer text-right">
                <b-button type="submit" @click="$modal.hide('session-dates')" size="sm" variant="primary"><i
                        class="fa fa-check"></i>
                    Ok
                </b-button>
                <b-button type="reset" @click="$modal.hide('session-dates')" size="sm" variant="danger">
                    <i class="fa fa-ban"></i>
                    Cancel
                </b-button>
            </div>
        </modal>
        <modal name="patients" :clickToClose="false" :resizable="true" :adaptive="true" width="70%"
               height="auto" :scrollable="true">
            <div class="vue-modal-header">
                <button type="button" @click="$modal.hide('patients')" class="close">&times;
                </button>
                <h4 class="title">Choose Patient</h4>
            </div>
            <div class="modal-body text-center">
                <b-row>
                    <b-col sm="9">
                        <b-form-group>
                            <input class="form-control" placeholder="Search Patient"
                                   v-model.trim="searchKey"
                                   @keyup="searchPatient()"
                                   ref="searchBox"
                                   autofocus
                            />
                        </b-form-group>
                    </b-col>
                    <b-col sm="3" class="add-patient-btn">
                        <b-button type="button" @click="$modal.show('add-patient')" size="md" variant="warning">
                            <i class="fa fa-user-plus"></i>
                            Add New Patient
                        </b-button>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col sm="12">
                        <table class="table table-hover table-bordered">
                            <thead>
                            <tr>
                                <th>Sl.no</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Phone</th>
                            </tr>
                            </thead>
                            <tbody v-if="patients.data.length">
                            <tr @click="selectPatient(index)" class="patient-row"
                                v-for="(patient,index) in patients.data">
                                <td>{{ (patients.meta.current_page * patients.meta.per_page) -
                                    patients.meta.per_page + index + 1}}
                                </td>
                                <td>{{patient.name}}</td>
                                <td>{{ patient.address }}</td>
                                <td>{{ patient.phone}}</td>
                            </tr>
                            </tbody>
                            <tbody v-else>
                            <tr>
                                <td colspan="4" class="text-center">
                                    No Patients Found
                                </td>
                            </tr>
                            </tbody>

                        </table>
                        <div class="text-center margin-top-30">
                            <pagination :data="patients"
                                        @pagination-change-page="choosePatient"></pagination>
                        </div>
                    </b-col>
                </b-row>
            </div>
            <div class="vue-modal-footer text-right">
                <b-button type="submit" @click="$modal.hide('patients')" size="sm" variant="primary"><i
                        class="fa fa-check"></i>
                    Ok
                </b-button>
                <b-button type="reset" @click="$modal.hide('patients')" size="sm" variant="danger">
                    <i class="fa fa-ban"></i>
                    Cancel
                </b-button>
            </div>
        </modal>
        <modal name="add-patient" :clickToClose="false" :resizable="true" :adaptive="true" width="50%"
               height="auto" :scrollable="true">
            <b-form @submit.prevent="addPatient">
                <div class="vue-modal-header">
                    <button type="button" @click="closePatientModal" class="close">&times;</button>
                    <h4 class="title">Add Patient</h4>
                </div>
                <div class="modal-body">
                    <b-row>
                        <b-col sm="6">
                            <b-form-group
                                    label="Name"
                                    label-for="name"
                                    :invalid-feedback="form.errors.get('name')"
                                    :state="form.has('name')"
                            >
                                <b-form-input id="name" placeholder="Patient Name"
                                              :state="form.has('name')"
                                              v-model.trim="form.name"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group
                                    label="Age"
                                    label-for="age"
                                    :invalid-feedback="form.errors.get('age')"
                                    :state="form.has('age')"
                            >
                                <b-form-input id="age" placeholder="Patient Age"
                                              :state="form.has('age')"
                                              v-model.trim="form.age"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group
                                    label="Gender"
                                    label-for="gender"
                                    :invalid-feedback="form.errors.get('gender')"
                                    :state="form.has('gender')"
                            >
                                <b-form-select
                                        id="weekDay" v-model="form.gender"
                                        :state="form.has('gender')"
                                        :options="genders"
                                ></b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group
                                    label="Address"
                                    label-for="address"
                                    :invalid-feedback="form.errors.get('address')"
                                    :state="form.has('address')"
                            >
                                <b-form-input id="addres" placeholder="Address"
                                              :state="form.has('address')"
                                              v-model.trim="form.address"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group
                                    label="Location"
                                    label-for="location"
                                    :invalid-feedback="form.errors.get('location')"
                                    :state="form.has('location')"
                            >
                                <b-form-input id="location" placeholder="Location"
                                              :state="form.has('location')"
                                              v-model.trim="form.location"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group
                                    label="Pin Code"
                                    label-for="pin"
                                    :invalid-feedback="form.errors.get('pin')"
                                    :state="form.has('pin')"
                            >
                                <b-form-input id="location" placeholder="Pin Code"
                                              :state="form.has('pin')"
                                              v-model.trim="form.pin"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group
                                    label="Phone"
                                    label-for="phone"
                                    :invalid-feedback="form.errors.get('phone')"
                                    :state="form.has('phone')"
                            >
                                <b-form-input id="phone" placeholder="Phone Number"
                                              :state="form.has('phone')"
                                              v-model.trim="form.phone"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group
                                    label="Email"
                                    label-for="email"
                                    :invalid-feedback="form.errors.get('email')"
                                    :state="form.has('email')"
                            >
                                <b-form-input id="location" placeholder="Email"
                                              :state="form.has('email')"
                                              v-model.trim="form.email"></b-form-input>
                            </b-form-group>
                        </b-col>

                    </b-row>
                </div>
                <div class="vue-modal-footer text-right">
                    <b-button type="submit" size="sm" variant="primary"><i
                            class="fa fa-check"></i>
                        Save
                    </b-button>
                    <b-button type="reset" @click="closePatientModal" size="sm" variant="danger"><i
                            class="fa fa-ban"></i>
                        Cancel
                    </b-button>
                </div>
            </b-form>
        </modal>
    </div>
</template>

<script>
    import submit from '../../../http/http';
    import {spinner, dashCase} from "../../../mixins/helper";
    import vSelect from 'vue-select';
    import $ from "jquery";
    import Pagination from '../../shared/Pagination';
    import Form from '../../../shared/form';
    import alerts from '../../../shared/alert';
    import objFind from 'lodash/find';


    export default {
        name: "StaffBooking",
        mixins: [spinner, dashCase],
        components: {
            vSelect,
            Pagination
        },
        data() {
            return {
                doctor: '',
                clinic: '',
                date: '',
                session: '',
                doctors: [],
                tokens: [
                    {text: 'Select a Session', value: '0', disabled: true}
                ],
                token: '',
                sessionDates: {},
                sessionDate: '',
                patients: {data: []},
                patient: {id: '', pin: '', dummy: true},
                searchKey: '',
                clinics: [
                    {text: 'Select a doctor', value: '0', disabled: true}
                ],
                form: new Form({
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
            getAddBookingFormData() {
                submit({
                    type: 'get',
                    url: 'get-staff-booking-form-data',
                }).then(({data}) => {
                    this.doctors = data.data.doctors;
                }).catch(response => {

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
                }).catch(response => {

                });
            },
            selectClinic(value) {
                submit({
                    type: 'get',
                    url: 'get-staff-booking-sessions',
                    data: {clinic: value}
                }).then(({data}) => {
                    this.sessionDates = data.data.sessions;
                    this.$modal.show('session-dates');
                }).catch(response => {

                });
            },
            selectDate(e, id) {
                this.sessionDate = id;
                let dateBox = $('.date');
                dateBox.siblings().removeClass('selected');
                e.target.classList.toggle("selected");

                submit({
                    type: 'get',
                    url: 'get-staff-booking-tokens',
                    data: {day: id}
                }).then(({data}) => {
                    this.tokens = data.data.bookingSlot;
                }).catch(response => {

                });
            },
            choosePatient({url}) {
                this.getPatients({url: url}).then(data => {
                    this.patient = {id: '', pin: '', dummy: true};
                    this.$modal.show('patients');
                });
            },
            getPatients({url, key = ''}) {
                return new Promise((resolve, reject) => {
                    submit({
                        type: 'get',
                        url: url,
                        data: {key: key}
                    }).then(({data}) => {
                        this.patients = data;
                        resolve(data);
                    }).catch(response => {
                        reject(response);
                    });
                });

            },
            addPatient() {
                submit({
                    type: 'post',
                    url: 'post-staff-booking-patient',
                    data: this.form,
                    form: true
                }).then(({data}) => {
                    this.patient = data.data.patient;
                    this.$modal.hide('add-patient');
                    this.$modal.hide('patients');
                });
            },
            closePatientModal() {
                this.$modal.hide('add-patient');
                this.form.reset();
            },
            searchPatient() {
                this.getPatients({url: 'get-staff-booking-patients', key: this.searchKey});
            },
            selectPatient(index) {
                this.patient = this.patients.data[index];
                this.$modal.hide('patients');
            },
            submitBooking() {
                submit({
                    type: 'post',
                    url: 'post-staff-booking',
                    data: new Form({
                        'doctor': this.doctor,
                        'patient': this.patient.id,
                        'slot': this.token,
                    }),
                    form: true
                }).then(data => {
                    this.resetValues();

                }).catch((response) => {
                    if (response.status === 422) {
                        alerts({
                            options: {
                                title: "Booking Failed",
                                text: "Please enter all details",
                                icon: "error",
                                button: "Ok",
                            }
                        });
                    }
                });
            },
            resetValues() {
                this.doctor = '';
                this.patient = {id: '', pin: '', dummy: true};
                this.token = '';
                this.clinic = '';
            },
            doctorInfo(field) {
                try {
                    return objFind(this.doctors, value => {
                        return value.value === this.doctor;
                    })[field];
                }
                catch (e) {
                }

            }
        },
        created() {
            this.getAddBookingFormData();
        }
    }
</script>

<style scoped>
    .dropdown-toggle {
        height: 35px !important;
    }

    .date {
        display: inline-block;
        padding: 10px;
        border: 1px solid #ccc;
        margin-right: 5px;
        background-color: #5ed1d8;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 5px;
    }

    .selected {
        background-color: #4cbdd8;
        color: #000;
    }

    .patient-row {
        cursor: pointer;
    }

    .add-patient-btn {
        padding-left: 0;
    }

    .add-patient-btn button {
        width: 100%;
    }
</style>