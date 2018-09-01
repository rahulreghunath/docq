<template>
    <div class="animated fadeIn">
        <spinner v-if="loading" class="spinner"></spinner>
        <b-row>
            <b-col sm="12">
                <b-form @submit.prevent="addDoctor">
                    <b-card>
                        <div slot="header">
                            <strong>Add Doctor Qualifications</strong>
                        </div>
                        <b-row>
                            <b-col sm="4">
                                <b-form-group
                                        label="Enter Name"
                                        label-for="name"
                                        :invalid-feedback="form.errors.get('name')"
                                        :state="form.has('name')"
                                >
                                    <b-form-input id="name" placeholder="Name"
                                                  :state="form.has('name')"
                                                  v-model.trim="form.name"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col sm="4">
                                <b-form-group
                                        label="Enter Age"
                                        label-for="age"
                                        :invalid-feedback="form.errors.get('age')"
                                        :state="form.has('age')"
                                >
                                    <b-form-input id="age" placeholder="Age"
                                                  :state="form.has('age')"
                                                  v-model.trim="form.age"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col sm="4">
                                <b-form-group
                                        label="Gender"
                                        label-for="gender"
                                        :invalid-feedback="form.errors.get('gender')"
                                        :state="form.has('gender')"
                                >
                                    <b-form-select v-model="form.gender"
                                                   :state="form.has('gender')"
                                                   :options="genders"
                                                   id="gender"
                                    ></b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col sm="4">
                                <b-form-group
                                        label="Enter Location"
                                        label-for="location"
                                        :invalid-feedback="form.errors.get('location')"
                                        :state="form.has('location')"
                                >
                                    <b-form-input id="location" placeholder="Location"
                                                  :state="form.has('location')"
                                                  v-model.trim="form.location"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col sm="4">
                                <b-form-group
                                        label="Enter Address"
                                        label-for="address"
                                        :invalid-feedback="form.errors.get('address')"
                                        :state="form.has('address')"
                                >
                                    <b-form-input id="address" placeholder="Address"
                                                  :state="form.has('address')"
                                                  v-model.trim="form.address"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col sm="4">
                                <b-form-group
                                        label="Enter Pin Code"
                                        label-for="pin"
                                        :invalid-feedback="form.errors.get('pin')"
                                        :state="form.has('pin')"
                                >
                                    <b-form-input id="pin" placeholder="Pin"
                                                  :state="form.has('pin')"
                                                  v-model.trim="form.pin"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col sm="4">
                                <b-form-group
                                        label="Enter Phone Number"
                                        label-for="phone"
                                        :invalid-feedback="form.errors.get('phone')"
                                        :state="form.has('phone')"
                                >
                                    <b-form-input id="pin" placeholder="Phone"
                                                  :state="form.has('phone')"
                                                  v-model.trim="form.phone"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col sm="4">
                                <b-form-group
                                        label="Enter Email"
                                        label-for="email"
                                        :invalid-feedback="form.errors.get('email')"
                                        :state="form.has('email')"
                                >
                                    <b-form-input id="pin" placeholder="Email"
                                                  :state="form.has('email')"
                                                  v-model.trim="form.email"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col sm="4">
                                <b-form-group
                                        label="Specialisation"
                                        label-for="specialisation"
                                        :invalid-feedback="form.errors.get('specialisation')"
                                        :state="form.has('specialisation')"
                                >
                                    <b-form-select id="specialisation" v-model="form.specialisation"
                                                   :state="form.has('specialisation')"
                                                   :options="specialisations"
                                    ></b-form-select>
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
        </b-row>
    </div>
</template>

<script>
    import Form from '../../../shared/form';
    import submit from '../../../http/http';
    import {spinner} from "../../../mixins/helper";

    export default {
        name: "AddDoctor",
        mixins: [spinner],
        data() {
            return {
                form: new Form({
                    name: '',
                    age: '',
                    location: '',
                    address: '',
                    pin: '',
                    phone: '',
                    email: '',
                    gender: '',
                    specialisation: '',
                }),
                genders: [
                    {value: 'male', text: 'Male'},
                    {value: 'female', text: 'Female'},
                ],
                specialisations: [],
            };
        },
        methods: {
            addDoctor() {
                submit({
                    type: 'post',
                    url: 'add-doctor',
                    data: this.form,
                    form: true
                });
            },
            getFormDetails() {
                submit({
                    type: 'get',
                    url: 'get-doctor-form-details'
                }).then(({data}) => {
                    this.specialisations = data.data.specialisations;
                });
            }
        },
        created() {
            this.getFormDetails();
        }
    }
</script>

<style scoped>

</style>