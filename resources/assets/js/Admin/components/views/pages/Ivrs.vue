<template>
    <div class="animated fadeIn">
        <spinner v-if="loading"></spinner>
        <b-row>
            <b-col sm="12">
                <b-card no-body>
                    <b-card-header>
                        <strong>IVRS Tokens</strong>
                        <b-button class="pull-right" @click="createToken" size="sm" variant="success">Create Access
                            Token
                        </b-button>
                    </b-card-header>
                    <b-card-body>
                        <table class="table table-hover table-bordered">
                            <thead>
                            <tr>
                                <th>Sl.no</th>
                                <th>Token</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-if="tokens.length">
                                <tr v-for="(token,index) in tokens">
                                    <td>
                                        {{ index+1 }}
                                    </td>
                                    <td triggers="click" v-b-tooltip.click title="Copied to clip board"
                                        class="copy-text" @click="select($event,token.token)">
                                        {{token.token}}
                                    </td>
                                    <td><i @click="deleteToken(index)" class="fa fa-trash"></i></td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="5" class="text-center">
                                    No tokens in the list
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
  import submit from '../../../http/http';
  import {spinner, dashCase} from '../../../mixins/helper';
  import ListCount from '../../shared/PaginationListCount';
  import Pagination from '../../shared/Pagination';
  import alerts from "../../../shared/alert";

  export default {
    name: "Ivrs",
    mixins: [spinner, dashCase],
    components: {
      ListCount,
      Pagination
    },
    data() {
      return {
        tokens: {}
      };
    },
    methods: {
      getTokenDetails({url}) {
        submit({
          type: 'get',
          url: url
        }).then(({data}) => {
          this.tokens = data.data.tokens;
        });
      },
      createToken() {
        submit({
          type: 'post',
          url: 'create-ivrs-token'
        }).then(({data}) => {
          this.getTokenDetails({url: 'get-ivrs-token'});
        });
      },
      select(e, token) {
        const el = document.createElement('textarea');
        el.value = token;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      },
      deleteToken(index) {
        alerts({
          options: {
            title: "Are you sure?",
            text: 'Access Token Will Be Removed',
            icon: "warning",
            buttons: true,
            dangerMode: true,
          },
          callback: true,
        }).then(() => {
          submit({
            type: 'post',
            url: 'delete-ivrs-token',
            data: {token: this.tokens[index].token, id: this.tokens[index].id},
          }).then(() => {
            this.getTokenDetails({url: 'get-ivrs-token'});
          });
        });
      }
    },
    created() {
      this.getTokenDetails({url: 'get-ivrs-token'});
    }
  }
</script>

<style scoped>
    .copy-text {
        word-break: break-all;
        cursor: pointer;
    }
</style>