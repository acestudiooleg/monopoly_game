<template>
  <v-layout>
    <v-panel contextual-style="primary">
      <h1 class="panel-title"
          slot="heading"
      >
        My Account
      </h1>
      <div slot="body">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>
              First Name
            </th>
            <th>
              Last Name
            </th>
            <th>
              Email
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              {{firstName}}
            </td>
            <td>
              {{lastName}}
            </td>
            <td>
              {{email}}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div slot="footer">
        Made with love by Vivid Web
      </div>
    </v-panel>
  </v-layout>
</template>

<script>
  /* ============
   * Account Index Page
   * ============
   *
   * Page where the user can view the account information.
   */
  import { mapState } from 'vuex';
  import { get } from 'lodash/fp';

  export default {
    components: {
      VLayout: require('@/layouts/default.vue'),
      VPanel: require('@/components/panel.vue'),
    },
    computed: mapState({
      firstName: get('account.firstName'),
      lastName: get('account.lastName'),
      email: get('account.email'),
    }),
  };
</script>
