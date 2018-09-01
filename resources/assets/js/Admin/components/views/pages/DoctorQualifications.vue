<template>
    <div class="animated fadeIn">
        <spinner class="spinner" v-if="loading"></spinner>
        <b-row>
            <b-col sm="6">
                <b-form @submit.prevent="addQualification">
                    <b-card>
                        <div slot="header">
                            <strong>Add Doctor Qualifications</strong>
                        </div>
                        <b-row>
                            <b-col sm="12">
                                <b-form-group
                                        label="Enter Qualification"
                                        label-for="qualification"
                                        :invalid-feedback="form.errors.get('qualification')"
                                        :state="form.has('qualification')"
                                >
                                    <b-form-input id="qualification" placeholder="Qualification"
                                                  :state="form.has('qualification')"
                                                  v-model.trim="form.qualification"></b-form-input>
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

            <b-col sm="6">
                <b-card no-body>
                    <b-card-header>
                        <strong>Qualifications</strong>
                    </b-card-header>
                    <b-card-body>
                        <list-count :data="qualifications"></list-count>
                        <table class="table table-hover table-bordered">
                            <thead>
                            <tr>
                                <th>Sl.no</th>
                                <th>Qualification</th>
                                <th>Options</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(specialization,index) in qualifications.data">
                                <td>{{ (qualifications.current_page * qualifications.per_page) - qualifications.per_page + index + 1}}</td>
                                <td>{{specialization.qualification_value}}</td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="text-center">
                            <pagination :data="qualifications"
                                        @pagination-change-page="getQualificationData"></pagination>
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
    import pagination from '../../shared/Pagination';
    import listCount from '../../shared/PaginationListCount';
    import {spinner} from "../../../mixins/helper";

    export default {
        name: "DoctorQualifications",
        components: {
            pagination,
            listCount,
        },
        mixins:[spinner],
        data() {
            return {
                form: new Form({
                    qualification: '',
                }),
                qualifications: [],
            }
        },
        methods: {
            addQualification() {
                submit({
                    type: 'post',
                    url: 'add-qualification',
                    data: this.form,
                    form: true
                }).then(data => this.getQualificationData({url: 'get-qualifications'}));
            },
            getQualificationData({url}) {
                submit({type: 'get', url: url}).then(({data}) => {
                    this.qualifications = data.data.qualifications;
                }).catch(data => {

                });
            }
        },
        created() {
            this.getQualificationData({url: 'get-qualifications'});

        }
    }
</script>

<style scoped>

</style>