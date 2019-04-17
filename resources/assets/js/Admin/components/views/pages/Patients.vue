<template>
  <div class="animated fadeIn">
    <spinner v-if="loading"></spinner>
    <b-row>
      <b-col sm="12">
        <b-card no-body>
          <b-card-header>
            <strong>Patients</strong>
          </b-card-header>
          <b-card-body>
            <b-row>
              <b-col sm="12">
                <b-form-group
                  label-for="date"
                >
                  <b-form-input autofocus v-model.trim="filter.key"
                                placeholder="Search Name, Address or Phone"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
              </b-col>
            </b-row>
            <list-count :data="patients"></list-count>
            <table class="table table-hover table-bordered">
              <thead>
              <tr>
                <th>Sl.no</th>
                <th>Patient Name</th>
                <th>Address</th>
                <th>Phone</th>
              </tr>
              </thead>
              <tbody>
              <template v-if="patients.data.length">
                <tr @click="viewPatient(patient.id)" v-for="(patient,index) in patients.data">
                  <td>
                    {{ (patients.meta.current_page * patients.meta.per_page) -
                    patients.meta.per_page + index + 1}}
                  </td>
                  <td>{{patient.name}}</td>
                  <td>{{patient.address}}</td>
                  <td>{{patient.phone}}</td>
                </tr>
              </template>
              <tr v-else>
                <td colspan="4" class="text-center">
                  No Patients
                </td>
              </tr>
              </tbody>
            </table>
            <div class="text-center margin-top-30">
              <pagination class="text-center" :form-data="filter" :data="patients"
                          @pagination-change-page="getPatients"></pagination>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import List from 'vue-suggestion-list';
  import submit from '../../../http/http';
  import { dateTimeFormatter, spinner } from '../../../mixins/helper';
  import ListCount from '../../shared/PaginationListCount';
  import Pagination from '../../shared/Pagination';
  import getConstants from '../../../constants/constantsMixins';

  export default {
    name: 'Patients',
    mixins: [spinner, dateTimeFormatter, getConstants],
    components: {
      ListCount,
      Pagination,
      List,
    },
    data() {
      return {
        patients: { data: [] },
        filter: {
          key: '',
        },
      };
    },
    methods: {
      getPatients({ url, formData }) {
        submit({
          type: 'get',
          url,
          data: formData,
        })
          .then(({ data }) => {
            this.patients = data;
          });
      },
      viewPatient(id) {
        this.$router.push({ name: 'patientDetails', params: { id } });
      },
    },
    watch: {
      filter: {
        handler() {
          this.getPatients({ url: 'get-patients', formData: this.filter });
        },
        deep: true,
      },
    },
    mounted() {
      this.getPatients({ url: 'get-patients', formData: this.filter });
    },
  };
</script>

<style scoped>
  .badge.badge-danger,
  .badge.badge-info {
    cursor: pointer;
  }

  tr {
    cursor: pointer;
  }
</style>
