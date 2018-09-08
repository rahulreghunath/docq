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
                                            <b-button @click="getLocation" variant="danger" class="btn-full-width">
                                                Location Details
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
                                latitude:{{ form.latitude }} longitude: {{ form.longitude }}
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
        </b-row>
    </div>
</template>

<script>
    import Form from '../../../shared/form';
    import submit from '../../../http/http';
    import {spinner} from "../../../mixins/helper";
    import {gmapApi} from 'vue2-google-maps'

    export default {
        name: "AddClinic",
        mixins: [spinner],
        data() {
            return {
                form: new Form({
                    doctor: this.$route.params.id,
                    clinicName: '',
                    location: '',
                    phone: '',
                    latitude: '',
                    longitude: '',
                }),
                marker: null,
                geocoder: null,
            };
        },
        methods: {
            addClinic() {
                submit({
                    type: 'post',
                    url: 'add-doctor-clinic',
                    data: this.form,
                    form: true
                }).then(({data}) => {
                    this.$router.push({name: 'addDoctor', params: {id: data.data.user}});
                });
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
        }
    }
</script>

<style scoped>

</style>