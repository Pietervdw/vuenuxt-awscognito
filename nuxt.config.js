import colors from "vuetify/es5/util/colors";

export default {
  ssr: false,

  target: "static",

  head: {
    titleTemplate: "%s with Vue/Nuxt",
    title: "AWS Cognito",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: ["@nuxtjs/vuetify"],

  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],

  axios: {},

  auth: {
    strategies: {
      awsCognito: {
        scheme: "oauth2",
        endpoints: {
          authorization: "https://myxamarinapp.auth.us-east-1.amazoncognito.com/login",
          token: "https://myxamarinapp.auth.us-east-1.amazoncognito.com/oauth2/token",
          userInfo: "https://myxamarinapp.auth.us-east-1.amazoncognito.com/oauth2/userInfo",
          logout: "https://myxamarinapp.auth.us-east-1.amazoncognito.com/logout"
        },
        token: {
          property: "access_token",
          type: "Bearer",
          maxAge: 3600
        },
        refreshToken: {
          property: "refresh_token",
          maxAge: 60 * 60 * 24 * 30
        },
        responseType: "token",
        redirectUri: "http://localhost:3000/login",
        logoutRedirectUri: "http://localhost:3000/login",
        clientId: "4jlfe2iki0ucn32uc44clmib3d",
        scope: ["email", "openid", "profile"],
        codeChallengeMethod: "S256"
      }
    }
  },

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: "#42b883",
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {},

  router: {
    middleware: ["auth"]
  }
};
