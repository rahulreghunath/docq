<template>
    <div class="animated fadeIn">
        <spinner v-if="loading"></spinner>
        <b-row>
            <b-col sm="12">
                <b-card>
                    <div slot="header">
                        <strong>Add Doctor Image</strong>
                    </div>
                    <b-row>
                        <b-col sm="12">
                            <h4> Dr. {{ doctor.full_name}}</h4>
                        </b-col>
                        <b-col sm="12">
                            <div class="form-group">
                                <label for="image">
                                    Choose Image To Crop
                                </label>
                                <input type="file" id="image" class="form-control" @change="setImage">
                            </div>
                        </b-col>
                        <b-col sm="12" class="cropper-box">
                            <div>
                                <img ref="image" class="cropper-box"
                                     :src="imageSrc">
                            </div>
                        </b-col>
                    </b-row>
                    <div slot="footer">
                        <b-button type="submit" size="sm" @click="uploadImage" variant="primary"><i
                                class="fa fa-dot-circle-o"></i>
                            Upload
                        </b-button>
                        <b-button type="reset" @click="skipImageUpload" size="sm" variant="danger"><i
                                class="fa fa-ban"></i> Skip
                        </b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import {spinner} from "../../../mixins/helper";
    import submit from '../../../http/http';
    import Cropper from 'cropperjs';
    import 'cropperjs/dist/cropper.css';
    import alerts from '../../../shared/alert';
    import {SUCCESS_STATUS} from "../../../constants/constants";
    import {
        CHOOSE_IMAGE,
        DOCTOR_DP_UPLOAD_WARNING,
        DOCTOR_NO_DP_SELECTED_WARNING,
        SKIP_STEP
    } from "../../../constants/messages";

    export default {
        name: "AddDoctorImage",
        mixins: [spinner],
        data() {
            return {
                id: this.$route.params.id,
                doctor: '',
                croppedSrc: '',
                imageSrc: 'http://localhost:8000/Steve-Jobs-HD-Quote-Wallpapers-2.jpg',
                image: null,
                width: '',
                height: '',
                x: null,
                y: ''
            };
        },
        methods: {
            uploadImage: function () {
                if (this.image === null) {
                    alerts({
                        options: {
                            title: "Choose an image",
                            text: DOCTOR_NO_DP_SELECTED_WARNING,
                            icon: "warning",
                            button: "Ok",
                        }
                    });
                } else {

                    let form = new FormData();
                    form.append('image', this.image, this.image.name);
                    form.append('x', Math.floor(this.x));
                    form.append('y', Math.floor(this.y));
                    form.append('width', Math.floor(this.width));
                    form.append('height', Math.floor(this.height));
                    form.append('doctor', this.id);

                    alerts({
                        options: {
                            title: "Are you sure?",
                            text: DOCTOR_DP_UPLOAD_WARNING,
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                        },
                        callback: true,
                    }).then(() => {
                        submit({type: 'post', url: 'add-doctor-profile-image', data: form}).then(({data}) => {
                            if (data.status === SUCCESS_STATUS) {
                                this.$router.push({name: 'addClinic', params: {id: this.id}});
                            }
                        });
                    });
                }
            },
            setImage(e) {
                let uploadedImageType = 'image/jpeg';
                let uploadedImageName;
                let uploadedImageURL;
                let URL = window.URL;
                const image = this.$refs.image;
                this.image = e.target.files[0];

                if (/^image\/\w+/.test(this.image.type)) {
                    uploadedImageType = this.image.type;
                    uploadedImageName = this.image.name;

                    if (uploadedImageURL) {
                        URL.revokeObjectURL(uploadedImageURL);
                    }

                    image.src = uploadedImageURL = URL.createObjectURL(this.image);
                    window.cropper.destroy();
                    let vue = this;
                    window.cropper = new Cropper(image, {
                        aspectRatio: 3 / 3,
                        crop(event) {
                            vue.x = event.detail.x;
                            vue.y = event.detail.y;
                            vue.width = event.detail.width;
                            vue.height = event.detail.height;
                        }
                    });
                } else {
                    alerts({
                        options: {
                            title: "Choose an image",
                            text: CHOOSE_IMAGE,
                            icon: "warning",
                            button: "Ok",
                        }
                    });
                }
            },
            getDoctorDetails() {
                submit({type: 'get', url: 'get-doctor-basic-details-img', data: {doctor: this.id}})
                    .then(({data}) => {
                        this.doctor = data.data.doctor;
                    }).catch(({data}) => {
                    this.$router.push({name: 'addDoctor'});
                });
            },
            skipImageUpload() {
                alerts({
                    options: {
                        title: "Are you sure?",
                        text: SKIP_STEP,
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    },
                    callback: true,
                }).then(() => {
                    this.$router.push({name: 'addClinic', params: {id: this.id}});
                })
            }
        },
        mounted() {
            this.getDoctorDetails();
            const image = this.$refs.image;
            window.cropper = new Cropper(image, {
                aspectRatio: 3 / 3,
            });
        }
    }
</script>

<style scoped>
    .cropper-box {
        max-width: 100%;
        height: 600px;
    }
</style>