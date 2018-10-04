<template>
    <div class="animated fadeIn">
        <spinner v-if="loading"></spinner>
        <b-row>
            <b-col sm="12">
                <b-card no-body>
                    <b-card-header>
                        <strong>Bookings</strong>
                    </b-card-header>
                    <b-card-body>
                        <list-count :data="doctors"></list-count>
                        <table class="table table-hover table-bordered">
                            <thead>
                            <tr>
                                <th>Sl.no</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Specializations</th>
                                <th>Options</th>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-if="doctors.data.length">
                                <tr v-for="(doctor,index) in doctors.data">
                                    <td>
                                        {{ (doctors.meta.current_page * doctors.meta.per_page) -
                                        doctors.meta.per_page + index + 1}}
                                    </td>
                                    <td>{{doctor.name}}</td>
                                    <td>{{ doctor.phone}}</td>
                                    <td>
                                        <span v-for="specialization in doctor.doctor.specializations">
                                            {{ specialization.specialization.text }}
                                        </span>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="5" class="text-center">
                                    No Doctors in the list
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="text-center margin-top-30">
                            <pagination :data="doctors"
                                        @pagination-change-page="getBookingDetails"></pagination>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import submit from '../../../http/http';
    import {spinner} from '../../../mixins/helper';
    import ListCount from '../../shared/PaginationListCount';
    import Pagination from '../../shared/Pagination';

    export default {
        name: "Bookings",
        mixins: [spinner],
        components:{
            ListCount,
            Pagination
        },
        data() {
            return {
                doctors: {data: []}
            };
        },
        methods: {
            getBookingDetails({url}) {
                submit({
                    type: 'get',
                    url: url
                }).then(({data}) => {
                    this.doctors = data;
                });
            },
            changeCase(value){
                return kebabCase(value);
            }
        },
        created() {
            this.getBookingDetails({url: 'get-doctors-details'});
        }
    }
</script>

<style scoped>

</style>