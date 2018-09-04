<template>
    <div class="animated fadeIn">
        <spinner v-if="loading"></spinner>
        <b-row>
            <b-col sm="12">
                <b-card>
                    <div slot="header">
                        <strong>Add Doctor Qualifications</strong>
                    </div>
                    <b-row>
                        <b-col sm="12">
                            <div class="form-group">
                                <input type="file" class="form-control" @change="setImage">
                            </div>
                        </b-col>
                        <b-col sm="12" class="cropper-box">
                            <img ref="image"
                                 :src="imageSrc">
                        </b-col>
                    </b-row>
                    <div slot="footer">
                        <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i>
                            Submit
                        </b-button>
                        <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
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

    export default {
        name: "AddDoctorImage",
        mixins: [spinner],
        data() {
            return {
                id: this.$route.params.id,
                croppedSrc: '',
                imageSrc: 'http://localhost:8000/Steve-Jobs-HD-Quote-Wallpapers-2.jpg'
            };
        },
        methods: {
            setImage(e) {
                let uploadedImageType = 'image/jpeg';
                let uploadedImageName = 'cropped.jpg';
                let uploadedImageURL;
                let URL = window.URL;
                const image = this.$refs.image;
                const file = e.target.files[0];

                if (/^image\/\w+/.test(file.type)) {
                    uploadedImageType = file.type;
                    uploadedImageName = file.name;

                    if (uploadedImageURL) {
                        URL.revokeObjectURL(uploadedImageURL);
                    }

                    image.src = uploadedImageURL = URL.createObjectURL(file);
                    window.cropper.destroy();
                    window.cropper = new Cropper(image, {
                        aspectRatio: 3 / 3,
                        crop(event) {
                            console.log(event.detail.x);
                            console.log(event.detail.y);
                            console.log(event.detail.width);
                            console.log(event.detail.height);
                            console.log(event.detail.rotate);
                            console.log(event.detail.scaleX);
                            console.log(event.detail.scaleY);
                        },
                    });
                    e.value = null;
                } else {
                    window.alert('Please choose an image file.');
                }
            },
            getDoctorDetails() {
                submit({type: 'get', url: 'get-doctor-basic-details-img', data: {id: this.id}})
                    .then(({data}) => {
                        console.log(data);
                    });
            }
        },
        mounted() {
            this.getDoctorDetails();
            const image = this.$refs.image;
            window.cropper = new Cropper(image, {
                aspectRatio: 3 / 3,
                crop(event) {
                    console.log(event.detail.x);
                    console.log(event.detail.y);
                    console.log(event.detail.width);
                    console.log(event.detail.height);
                    console.log(event.detail.rotate);
                    console.log(event.detail.scaleX);
                    console.log(event.detail.scaleY);
                },
            });
        }
    }
</script>

<style scoped>
    .cropper-box {
        width: 100%;
        height: 600px;
    }
</style>