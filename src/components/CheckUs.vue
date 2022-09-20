<template>
  <v-card
    class="elevation-0 black--text align-center"
    tile
    flat
  >
    <v-card-title class="justify-center py-0">
      <strong class="subheading">Discover our plans on the social media</strong>
    </v-card-title>
    <v-card-text class="text-center">
      Get to know us
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn
        v-for="item in items"
        :key="item.icon"
        class=""
        :href="item.url"
        icon
        target="_blank"
      >
        <v-icon size="24px">
          {{ item.icon }}
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {icon: 'mdi-facebook', url: 'https://facebook.com/'},
          {icon: 'mdi-twitter', url: 'https://twitter.com/'},
          {icon: 'mdi-linkedin', url: 'https://linkedin.com/'},
          {icon: 'mdi-instagram', url: 'https://instagram.com/'},
        ],
      }
    },
  }
</script>