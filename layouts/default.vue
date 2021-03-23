<template>
  <v-app>
    <v-app-bar fixed app light color="primary">
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: "AWS Cognito and Vue/Nuxt"
    };
  },
  methods: {
    logOut() {
      this.$auth.logout();
    }
  }
};
</script>
