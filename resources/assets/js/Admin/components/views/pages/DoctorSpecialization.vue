<template>
    <div class="animated fadeIn">
        <spinner v-if="loading"></spinner>
        <b-row>
            <b-col sm="6">
                <b-form @submit.prevent="addSpecialization">
                    <b-card>
                        <div slot="header">
                            <strong>Add Doctor Specializations</strong>
                        </div>
                        <b-row>
                            <b-col sm="12">
                                <b-form-group
                                        label="Enter Specialization"
                                        label-for="specialisation"
                                        :invalid-feedback="form.errors.get('specialization')"
                                        :state="form.has('specialization')"
                                >
                                    <b-form-input id="specialisation" placeholder="Specialization"
                                                  :state="form.has('specialization')"
                                                  v-model.trim="form.specialization"></b-form-input>
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
                        <strong>Specializations</strong>
                    </b-card-header>
                    <b-card-body>
                        <list-count :data="specializations"></list-count>
                        <table class="table table-hover table-bordered">
                            <thead>
                            <tr>
                                <th>Sl.no</th>
                                <th>Specialization</th>
                                <th>Options</th>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-if="specializations.data.length">
                                <tr v-for="(specialization,index) in specializations.data">
                                    <td>{{ (specializations.meta.current_page * specializations.meta.per_page) -
                                        specializations.meta.per_page + index + 1}}
                                    </td>
                                    <td>{{specialization.specialization_value}}</td>
                                    <td></td>
                                </tr>
                            </template>
                            <tr class="text-center" v-else>
                                <td colspan="3">No Specialization Added</td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="text-center">
                            <pagination :data="specializations"
                                        @pagination-change-page="getSpecializationData"></pagination>
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
        name: "DoctorSpecialization",
        components: {
            pagination,
            listCount
        },
        mixins: [spinner],
        data() {
            return {
                form: new Form({
                    specialization: '',
                }),
                specializations: {data: []},
            }
        },
        methods: {
            addSpecialization() {
                submit({
                    type: 'post',
                    url: 'add-specialisation',
                    data: this.form,
                    form: true
                }).then(data => this.getSpecializationData({url: 'get-specialisations'}));
            },
            getSpecializationData({url, data = null}) {
                submit({type: 'get', url: url}).then(({data}) => {
                    this.specializations = data;
                }).catch(data => {

                });
            }
        },
        created() {
            this.getSpecializationData({url: 'get-specialisations'});

        }
    }
</script>

<style scoped>

</style>