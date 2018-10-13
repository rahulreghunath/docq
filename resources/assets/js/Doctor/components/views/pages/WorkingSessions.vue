<template>
    <div class="animated fadeIn">
        <spinner v-if="loading"></spinner>
        <b-row>
            <b-col sm="4">
                <b-form @submit.prevent="addWorkingSession">
                    <b-card>
                        <div slot="header">
                            <strong>Add Doctor's Working Sessions</strong>
                        </div>
                        <b-row>
                            <b-col sm="12">
                                <b-form-group
                                        label="Clinic"
                                        label-for="clinic"
                                        :invalid-feedback="form.errors.get('clinic')"
                                        :state="form.has('clinic')"
                                >
                                    <b-form-select
                                            id="clinic" v-model="form.clinic"
                                            :state="form.has('clinic')"
                                            :options="clinics"
                                    ></b-form-select>
                                </b-form-group>
                                <b-form-group
                                        label="Week Day"
                                        label-for="weekDay"
                                        :invalid-feedback="form.errors.get('weekDay')"
                                        :state="form.has('weekDay')"
                                >
                                    <b-form-select
                                            id="weekDay" v-model="form.weekDay"
                                            :state="form.has('weekDay')"
                                            :options="weekDays"
                                    ></b-form-select>
                                </b-form-group>
                                <b-form-group
                                        label="Session Title"
                                        label-for="title"
                                        :invalid-feedback="form.errors.get('sessionTitle')"
                                        :state="form.has('sessionTitle')"
                                >
                                    <b-form-input id="title" placeholder="Session Title"
                                                  :state="form.has('sessionTitle')"
                                                  v-model.trim="form.sessionTitle"></b-form-input>
                                </b-form-group>
                                <b-form-group
                                        label="Session Starting Time"
                                        label-for="startingTime"
                                        :invalid-feedback="form.errors.get('startingTime')"
                                        :state="form.has('startingTime')"
                                >
                                    <b-form-input id="startingTime" placeholder="Session Starting Time"
                                                  type="time"
                                                  :state="form.has('startingTime')"
                                                  v-model.trim="form.startingTime"></b-form-input>
                                </b-form-group>
                                <b-form-group
                                        label="Session Ending Time"
                                        label-for="startingTime"
                                        :invalid-feedback="form.errors.get('endingTime')"
                                        :state="form.has('endingTime')"
                                >
                                    <b-form-input id="endingTime" placeholder="Session Ending Time"
                                                  type="time"
                                                  :state="form.has('endingTime')"
                                                  v-model.trim="form.endingTime"></b-form-input>
                                </b-form-group>
                                <b-form-group
                                        label="Maximum Number Patients in Session"
                                        label-for="patients"
                                        :invalid-feedback="form.errors.get('patients')"
                                        :state="form.has('patients')"
                                >
                                    <b-form-input id="patients" placeholder="Number Patients in Session"
                                                  :state="form.has('patients')"
                                                  v-model.trim="form.patients"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <div slot="footer">
                            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i>
                                Submit
                            </b-button>
                            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
                        </div>
                    </b-card>
                </b-form>
            </b-col>

            <b-col sm="8">
                <b-card no-body>
                    <b-card-header>
                        <strong>Working Sessions</strong>
                    </b-card-header>
                    <b-card-body>
                        <div v-for="(workingSession,clinicIndex) in workingSessions.data">
                            <div class="clinic-titile">{{ workingSession.clinic_name}} - {{ workingSession.location}}
                            </div>
                            <template v-if="workingSession.working_sessions.length>0">
                                <template
                                        v-for="(session,sessionIndex) in workingSession.working_sessions">
                                    <div @click="editSession(clinicIndex,sessionIndex)"
                                         :class="'working-session-block make-it-slow '"
                                         v-b-tooltip.hover title="Click to edit session">
                                        <b-badge variant="primary">{{ session.week_day.text }}</b-badge>
                                        {{ session.title }}
                                        <b-badge variant="info">
                                            {{ formatTime(session.start_time) }} to {{ formatTime(session.end_time) }}
                                        </b-badge>
                                        with maxium of
                                        <b-badge variant="success">{{ session.patients}}</b-badge>
                                        <b-badge class="pull-right" variant="success"
                                                 v-if="session.status===successStatus">
                                            Active
                                        </b-badge>
                                        <b-badge class="pull-right" variant="danger" v-else>
                                            Disabled
                                        </b-badge>
                                    </div>
                                </template>
                            </template>
                            <template v-else>
                                No Sessions added
                            </template>
                            <div v-else>
                                No Session added in the clinic
                            </div>
                        </div>
                        <div class="text-center margin-top-30">
                            <pagination :form-data="{doctor: form.id}" :data="workingSessions"
                                        @pagination-change-page="getWorkingSessions"></pagination>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <modal name="edit-session" :clickToClose="false" :resizable="true" :adaptive="true" width="70%"
                   height="auto" :scrollable="true">
                <b-form @submit.prevent="updateWorkingSession">
                    <div class="vue-modal-header">
                        <button type="button" @click="closeModal" class="close">&times;</button>
                        <h4 class="title">Edit Session</h4>
                    </div>
                    <div class="modal-body">

                        <b-row>
                            <b-col sm="6">
                                <b-form-group
                                        label="Clinic"
                                        label-for="clinic"
                                        :invalid-feedback="updateForm.errors.get('clinic')"
                                        :state="updateForm.has('clinic')"
                                >
                                    <b-form-select
                                            id="clinic" v-model="updateForm.clinic"
                                            :state="updateForm.has('clinic')"
                                            :options="clinics"
                                    ></b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col sm="6">
                                <b-form-group
                                        label="Week Day"
                                        label-for="weekDay"
                                        :invalid-feedback="updateForm.errors.get('weekDay')"
                                        :state="updateForm.has('weekDay')"
                                >
                                    <b-form-select
                                            id="weekDay" v-model="updateForm.weekDay"
                                            :state="updateForm.has('weekDay')"
                                            :options="weekDays"
                                    ></b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col sm="6">
                                <b-form-group
                                        label="Session Title"
                                        label-for="title"
                                        :invalid-feedback="updateForm.errors.get('sessionTitle')"
                                        :state="updateForm.has('sessionTitle')"
                                >
                                    <b-form-input id="title" placeholder="Session Title"
                                                  :state="updateForm.has('sessionTitle')"
                                                  v-model.trim="updateForm.sessionTitle"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col sm="6">
                                <b-form-group
                                        label="Maximum Number Patients in Session"
                                        label-for="patients"
                                        :invalid-feedback="updateForm.errors.get('patients')"
                                        :state="updateForm.has('patients')"
                                >
                                    <b-form-input id="patients" placeholder="Number Patients in Session"
                                                  :state="updateForm.has('patients')"
                                                  v-model.trim="updateForm.patients"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col sm="6">
                                <b-form-group
                                        label="Session Starting Time"
                                        label-for="startingTime"
                                        :invalid-feedback="updateForm.errors.get('startingTime')"
                                        :state="updateForm.has('startingTime')"
                                >
                                    <b-form-input id="startingTime" placeholder="Session Starting Time"
                                                  type="time"
                                                  :state="updateForm.has('startingTime')"
                                                  v-model.trim="updateForm.startingTime"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col sm="6">
                                <b-form-group
                                        label="Session Ending Time"
                                        label-for="startingTime"
                                        :invalid-feedback="updateForm.errors.get('endingTime')"
                                        :state="updateForm.has('endingTime')"
                                >
                                    <b-form-input id="endingTime" placeholder="Session Ending Time"
                                                  type="time"
                                                  :state="updateForm.has('endingTime')"
                                                  v-model.trim="updateForm.endingTime"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col sm="12">
                                <b-button @click="changeStatus" type="button" size="lg"
                                          :variant="statusVariant" v-html="statusButtonText">
                                </b-button>
                                <b-button @click="deleteSession" type="button" size="lg" variant="danger"><i
                                        class="fa fa-check"></i>
                                    Delete Session
                                </b-button>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="vue-modal-footer text-right">
                        <b-button type="submit" size="sm" variant="primary"><i
                                class="fa fa-check"></i>
                            Save
                        </b-button>
                        <b-button type="reset" @click="closeModal" size="sm" variant="danger"><i class="fa fa-ban"></i>
                            Cancel
                        </b-button>
                    </div>
                </b-form>
            </modal>
        </b-row>
    </div>
</template>

<script>
    import Form from '../../../shared/form';
    import submit from '../../../http/http';
    import pagination from '../../shared/Pagination';
    import listCount from '../../shared/PaginationListCount';
    import {spinner, dateTimeFormatter} from "../../../mixins/helper";
    import alerts from '../../../shared/alert';

    import {ACTIVE_SESSION_STATUS, DELETED_SESSION_STATUS, DISABLED_SESSION_STATUS} from "../../../constants/constants";


    export default {
        name: "WorkingSessions",
        components: {
            pagination,
            listCount,
        },
        mixins: [spinner, dateTimeFormatter],
        data() {
            return {
                form: new Form({
                    id: this.$route.params.id,//doctor_details_id
                    clinic: '',
                    weekDay: '',
                    sessionTitle: '',
                    startingTime: '',
                    endingTime: '',
                    patients: ''
                }),
                updateForm: new Form({
                    id: this.$route.params.id,//doctor_details_id
                    sessionId: '',
                    clinic: '',
                    weekDay: '',
                    sessionTitle: '',
                    startingTime: '',
                    endingTime: '',
                    patients: '',
                    status: '',
                }),
                show: true,
                clinics: [],
                weekDays: [],
                workingSessions: {data: []},
                statusVariant: '',
                statusButtonText: ''
            }
        },
        methods: {
            addWorkingSession() {
                submit({
                    type: 'post',
                    url: 'add-doctor-working-session',
                    data: this.form,
                    form: true,
                    clearExcept: ['id']
                }).then(data => this.getWorkingSessions({
                    url: 'get-doctor-working-sessions',
                    data: {doctor: this.form.id}
                }));
            },
            getFormDetails() {
                submit({
                    type: 'get',
                    url: 'get-working-session-form-details',
                    data: {doctor: this.form.id},
                }).then(({data}) => {
                    this.clinics = data.data.clinics;
                    this.weekDays = data.data.weekDays;
                }).catch(data => {

                });
            },
            getWorkingSessions({url, data}) {
                submit({
                    type: 'get',
                    url: url,
                    data: data,
                }).then(({data}) => {
                    this.workingSessions = data;
                }).catch(data => {

                });
            },
            editSession(clinicIndex, sessionIndex) {
                let session = this.workingSessions.data[clinicIndex].working_sessions[sessionIndex];

                /**
                 * Assigning current values
                 */
                this.updateForm.weekDay = session.week_day.value;
                this.updateForm.sessionTitle = session.title;
                this.updateForm.startingTime = session.start_time;
                this.updateForm.endingTime = session.end_time;
                this.updateForm.patients = session.patients;
                this.updateForm.sessionId = session.id;
                this.updateForm.status = session.status;
                this.updateForm.clinic = this.workingSessions.data[clinicIndex].id;

                this.statusVariant = session.status === ACTIVE_SESSION_STATUS ? 'danger' : 'success';
                this.statusButtonText = session.status !== ACTIVE_SESSION_STATUS ? `<i class="fa fa-check"></i>Activate` : `<i class="fa fa-thumbs-o-down"></i>Disable`;

                this.$modal.show('edit-session');

            },
            closeModal() {
                this.updateForm.reset(['id']);
                this.$modal.hide('edit-session');
            },
            updateWorkingSession() {
                submit({
                    type: 'post',
                    url: 'update-doctor-working-session',
                    data: this.updateForm,
                    form: true,
                    clearExcept: ['id']
                }).then(data => {
                    this.getWorkingSessions({
                        url: 'get-doctor-working-sessions',
                        data: {doctor: this.form.id}
                    });
                    this.$modal.hide('edit-session');
                });
            },
            isDisabled(clinicIndex, sessionIndex) {
                if (this.workingSessions.data[clinicIndex].working_sessions[sessionIndex].status !== ACTIVE_SESSION_STATUS) {
                    return 'disabled-session'
                }
            },
            changeStatus() {
                if (this.updateForm.status === ACTIVE_SESSION_STATUS) {
                    this.updateForm.status = DISABLED_SESSION_STATUS;
                    this.statusVariant = 'success';
                    this.statusButtonText = `<i class="fa fa-check"></i>Activate`;

                } else {
                    this.updateForm.status = ACTIVE_SESSION_STATUS;
                    this.statusVariant = 'danger';
                    this.statusButtonText = `<i class="fa fa-thumbs-o-down"></i>Disable`;
                }
            },
            deleteSession() {
                this.updateForm.status = DELETED_SESSION_STATUS;

                /**
                 * Checking if booking exist on slot
                 */
                this.checkSessionRelation(this.updateForm.sessionId)
                    .then(({data}) => {
                        if (data.data.bookings) {
                            alerts({
                                options: {
                                    title: "Are you sure?",
                                    text: `This doctor have ${data.data.bookings.length} patients booked for the slot,
                                                        Are you sure want to DELETE the slot?`,
                                    icon: "warning",
                                    buttons: true,
                                    dangerMode: true,
                                },
                                callback: true,
                            }).then(() => {
                                submit({
                                    type: 'post',
                                    url: 'update-doctor-working-session',
                                    data: this.updateForm,
                                    form: true,
                                    clearExcept: ['id']
                                }).then(data => {
                                    this.getWorkingSessions({
                                        url: 'get-doctor-working-sessions',
                                        data: {doctor: this.form.id}
                                    });
                                    this.$modal.hide('edit-session');
                                });
                            });
                        }

                    });
            },
            checkSessionRelation(id) {
                return new Promise((resolve, reject) => {
                    submit({
                        type: 'get',
                        url: 'check-doctor-working-session-relations',
                        data: {id: id},
                    }).then(data => resolve(data))
                        .catch(data => reject(data));
                });
            }
        },
        computed: {
            successStatus() {
                return ACTIVE_SESSION_STATUS;
            }
        },
        created() {
            this.getFormDetails();
            this.getWorkingSessions({url: 'get-doctor-working-sessions', data: {doctor: this.form.id}});

        }
    }
</script>

<style scoped>
    .clinic-titile {
        font-size: 14px;
        font-weight: bold;
        text-transform: capitalize;
        margin-bottom: 15px;
    }

    .fade-enter-active {
        transition: all .3s ease;
    }

    .fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .fade-enter, .fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }

    .working-session-block {
        padding: 8px 15px;
        border: 1px solid #ccc;
        margin-bottom: 5px;
        cursor: pointer;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
        transition: box-shadow 0.3s ease-in-out;
    }

    .working-session-block:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .disabled-session {
        background-color: #ffd3d6;
    }
</style>