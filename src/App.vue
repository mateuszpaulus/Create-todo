<template>
  <v-app>
    <v-navigation-drawer 
      v-model="drawer"
      app
      dark
    >
      <Navigation />
    </v-navigation-drawer>
    <v-app-bar
      app
      dark
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <Bar />
    </v-app-bar>
    <v-main>
      <v-container
        fluid
      >
        <router-view />
      </v-container>
    </v-main>
    <v-footer
      app
      dark
      inset
    >
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    components: {
      Navigation: () => import('@/components/parts/Navigation.vue'),
      Bar: () => import('@/components/parts/Bar.vue'),
      Footer: () => import('@/components/parts/Footer.vue')
    },
    data() { 
      return {
        drawer: null, 
      }
    },
  }
</script>
<style lang="scss" scoped>
  .v-footer {
    padding: 0;
  }
</style>