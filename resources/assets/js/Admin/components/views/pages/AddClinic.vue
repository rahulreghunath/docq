<template>
    <div class="animated fadeIn">
        <spinner v-if="loading"></spinner>
        <b-row>
            <b-col sm="6">
                <b-form @submit.prevent="addClinic">
                    <b-card>
                        <div slot="header">
                            <strong>Add Clinic</strong>
                        </div>
                        <b-row>
                            <b-col sm="12">
                                <b-form-group
                                        label="Enter Clinic Name"
                                        label-for="name"
                                        :invalid-feedback="form.errors.get('clinicName')"
                                        :state="form.has('clinicName')"
                                >
                                    <b-form-input id="name" placeholder="Clinic Name"
                                                  :state="form.has('clinicName')"
                                                  v-model.trim="form.clinicName"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col sm="12">
                                <b-row>
                                    <b-col sm="8">
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
                                        <b-form-group label="&nbsp;">
                                            <b-button @click="getLocation" :variant="mapButton" class="btn-full-width">
                                                {{mapButtonLabel}}
                                            </b-button>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col sm="12">
                                <b-form-group
                                        label="Phone Number"
                                        label-for="phone"
                                        :invalid-feedback="form.errors.get('phone')"
                                        :state="form.has('phone')"
                                >
                                    <b-form-input id="phone" placeholder="Phone"
                                                  :state="form.has('phone')"
                                                  v-model.trim="form.phone"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <div>latitude:{{ form.latitude }} longitude: {{ form.longitude }}</div>
                                <small class="text-danger" v-if="form.has('latitude')===false">
                                    {{form.errors.get('latitude')}}
                                </small>
                            </b-col>
                        </b-row>

                        <div slot="footer">
                            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i>
                                Submit
                            </b-button>
                            <b-button type="reset" size="sm" @click="form.reset(['doctor'])" variant="danger"><i
                                    class="fa fa-ban"></i> Reset
                            </b-button>
                        </div>
                    </b-card>
                </b-form>

                <b-modal ref="mapModal" centered id="modallg" size="lg" title="Mark Location on Map">
                    <GmapMap
                            ref="map"
                            :center="{lat:10, lng:10}"
                            :zoom="12"
                            map-type-id="terrain"
                            style="width: 100%; height: 70%"
                    ></GmapMap>
                </b-modal>
            </b-col>
            <b-col sm="6">
                <b-card no-body>
                    <b-card-header>
                        <strong>Existing Clinics</strong>
                    </b-card-header>
                    <b-card-body>
                        <list-count :data="clinics"></list-count>
                        <table class="table table-hover table-bordered">
                            <thead>
                            <tr>
                                <th>Sl.no</th>
                                <th>Qualification</th>
                                <th>Options</th>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-if="clinics.data.length">
                                <tr v-for="(clinic,index) in clinics.data">
                                    <td>{{ (clinics.meta.current_page * clinics.meta.per_page) -
                                        clinics.meta.per_page + index + 1}}
                                    </td>
                                    <td>{{clinic.clinic_name}}</td>
                                    <td></td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="3" class="text-center">
                                    No Clinics added
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="text-center margin-top-30">
                            <pagination :form-data="{id:form.doctor}" :data="clinics"
                                        @pagination-change-page="getClinicDetails"></pagination>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Form from '../../../shared/form';
    import submit from '../../../http/http';
    import {spinner} from "../../../mixins/helper";
    import {gmapApi} from 'vue2-google-maps';
    import ListCount from '../../shared/PaginationListCount';
    import Pagination from '../../shared/Pagination';

    export default {
        name: "AddClinic",
        mixins: [spinner],
        components: {
            ListCount,
            Pagination
        },
        data() {
            return {
                form: new Form({
                    doctor: this.$route.params.id,
                    clinicName: '',
                    location: '',
                    phone: '',
                    latitude: '__',
                    longitude: '__',
                }),
                marker: null,
                geocoder: null,
                clinics: {data: []}
            };
        },
        methods: {
            addClinic() {
                submit({
                    type: 'post',
                    url: 'add-doctor-clinic',
                    data: this.form,
                    form: true,
                    clearExcept: ['doctor']
                }).then(({data}) => {
                    this.getClinicDetails({url: 'get-doctor-clinic-details', data: {id: this.form.doctor}});
                }).catch(response => {
                    if (response.status !== 422)
                        this.$router.push({name: 'addDoctor'});
                });
            },
            getClinicDetails({url, data}) {
                submit({
                    type: 'get',
                    url: url,
                    data: data
                }).then(data => this.clinics = data.data).catch(data => alert('Oops something went wrong, please try again'));
            },
            getLocation() {
                if (this.geocoder === null) {
                    this.geocoder = new this.google.maps.Geocoder();
                }

                this.$refs.map.$mapPromise.then((map) => {

                    if (this.marker === null) {
                        this.marker = new this.google.maps.Marker({
                            position: new google.maps.LatLng({lat: 12.971599, lng: 77.594563}),
                            map: map,
                            draggable: true,
                            icon: 'Admin/marker/marker-2.png'
                        });
                    }

                    this.geocoder.geocode({address: this.form.location.length === 0 ? 'Kerala' : this.form.location}, (result, status) => {
                        if (status === "OK") {
                            map.panTo(result[0].geometry.location);
                            this.marker.setPosition(result[0].geometry.location);
                            this.marker.setDraggable(true);
                            this.marker.setIcon('Admin/marker/marker-2.png');
                            customInfowindow.setContent('Drag the marker to your location');
                            customInfowindow.open(map, this.marker);
                            this.$refs.mapModal.show();
                        }
                    });

                    let customInfowindow = new this.google.maps.InfoWindow({
                        content: 'Drag the marker to your location'
                    });
                    customInfowindow.open(map, this.marker);
                    this.marker.addListener('click', e => {
                        this.form.latitude = e.latLng.lat();
                        this.form.longitude = e.latLng.lng();
                        if (this.marker.draggable) {
                            this.marker.setDraggable(false);
                            this.marker.setIcon('Admin/marker/marker-1.png');
                        }
                        else {
                            this.marker.setDraggable(true);
                            this.marker.setIcon('Admin/marker/marker-2.png');
                        }
                        customInfowindow.open(map, this.marker);
                    });
                    this.marker.addListener('drag', function (e) {
                        customInfowindow.close();
                    });
                    this.marker.addListener('dragend', () => {
                        customInfowindow.setContent('Click on the marker');
                        customInfowindow.open(map, this.marker);
                    });
                });
            }
        },
        computed: {
            google: gmapApi,
            mapButton() {
                if (this.form.latitude === '__') {
                    return 'danger';
                }
                return 'success';
            },
            mapButtonLabel() {
                if (this.form.latitude === '__') {
                    return 'Get Coordinates';
                }
                return 'Coordinates Added';
            }

        },
        created() {
            this.getClinicDetails({url: 'get-doctor-clinic-details', data: {id: this.form.doctor}});
        }
    }
</script>

<style scoped>

</style>