<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12" v-if="loggedIn">
        <v-card-title>Logging in.</v-card-title>
        <v-card-text
          >Logging in, please wait...
          <v-progress-circular indeterminate color="green"></v-progress-circular>
        </v-card-text>
      </v-card>
      <v-card class="elevation-12" v-else>
        <v-card-title>You're not logged in</v-card-title>
        <v-card-text>Click the button to log into your account. </v-card-text>
        <v-card-actions>
          <v-btn @click="login" color="primary">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "unauthorized",
  data() {
    return {
      loggedIn: false
    };
  },
  created() {
    this.loggedIn = this.$auth.strategy.token.get();
  },
  methods: {
    login() {
      this.$auth.loginWith("awsCognito");
    }
  }
};
</script>
