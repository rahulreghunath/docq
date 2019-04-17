<template>
  <div class="animated fadeIn">
    <spinner v-if="loading"></spinner>
    <b-row>
      <b-col sm="12">
        <b-card no-body>
          <b-tabs>
            <b-tab title="Patient Details" active>

              <table class="table table-hover table-bordered patient-table">
                <tbody>
                <tr>
                  <th class="bg-info">Name</th>
                  <td>{{echo(patient.full_name)}}</td>
                </tr>
                <tr>
                  <th class="bg-info">Age</th>
                  <td>{{echo(patient.age)}}</td>
                </tr>
                <tr>
                  <th class="bg-info">Gender</th>
                  <td>{{echo(patient.gender)}}</td>
                </tr>
                <tr>
                  <th class="bg-info">Address</th>
                  <td>{{`${echo(patient.address)} ${echo(patient.location)} (${echo(patient.pin)})` }}</td>
                </tr>
                <tr>
                  <th class="bg-info">Phone</th>
                  <td>{{echo(patient.phone)}}</td>
                </tr>
                <tr>
                  <th class="bg-info">Email</th>
                  <td>{{echo(patient.email)}}</td>
                </tr>
                </tbody>
              </table>

            </b-tab>
            <b-tab title="Case Sheet">
              <list-count :data="remarks"></list-count>
              <div class="remark-panel">
                <div v-for="remark in remarks.data" class="remark-box">
                <span class="remark-date">
                  {{timestampToDate(remark.date.date)}}
                </span>
                  <span class="remark">
                  {{remark.remark}}
                </span>
                </div>
                <div class="text-center margin-top-30">
                  <pagination :data="remarks" :form-data="{ patientId: this.patientId }"
                              @pagination-change-page="getRemarks"></pagination>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import { dateTimeFormatter, display, spinner } from '../../../mixins/helper';
  import submit from '../../../http/http';
  import Form from '../../../shared/form';
  import ListCount from '../../shared/PaginationListCount';
  import Pagination from '../../shared/Pagination';
  import getConstants from '../../../constants/constantsMixins';

  export default {
    name: 'PatientDetails',
    mixins: [spinner, dateTimeFormatter, display, getConstants],
    components: {
      ListCount,
      Pagination,
    },
    data() {
      return {
        patient: {},
        slot: {},
        booking: {},
        remarks: { data: [] },
        form: new Form({
          remark: '',
          patientId: '',
        }),
      };
    },
    methods: {
      getPatientDetails() {
        submit({
          type: 'get',
          url: 'get-patient',
          data: { patientId: this.patientId },
        })
          .then(({ data }) => {
            data = data.data;
            this.patient = data.patient;
          });
      },
      getRemarks({ url, data }) {
        submit({
          type: 'get',
          url,
          data,
        })
          .then(({ data }) => {
            this.remarks = data;
          });
      },
      addPrescription() {
        submit({
          type: 'post',
          url: 'add-prescription-details',
          data: this.form,
        })
          .then(() => {
            this.$router.push({ name: 'allBookings' });
          });
      },
    },
    computed: {
      patientId() {
        return this.$route.params.id;
      },
    },
    mounted() {
      this.getPatientDetails();
      this.getRemarks({ url: 'get-remarks', data: { patientId: this.patientId } });
      this.form.patientId = this.patientId;
    },
  }
  ;
</script>

<style scoped lang="scss">
  .patient-table {
    margin: 0;
  }

  .patient-box {
    padding: 0;

  }

  .remark-box {
    border: 1px dashed #ccc;
    border-top: none;
  }

  .remark-panel:first-child {
    border-top: 1px dashed #ccc;
  }

  .remark-date, .remark {
    text-transform: capitalize;
    display: block;
  }

  .remark-date {
    padding: 5px 5px 5px 7px;
    background-color: #dcdcdc;
  }

  .remark {
    padding: 5px 5px 5px 7px;
  }
</style>
