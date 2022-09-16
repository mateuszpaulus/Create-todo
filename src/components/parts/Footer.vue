<template>
  <v-card
    class="flex elevation-0"
    tile
    flat
  >
    <v-card-title class="justify-center py-0">
      <strong class="subheading">Check us on social networks!</strong>
      <v-card-actions>
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
    </v-card-title>
    <v-card-text class=" white--text text-center">
      {{ new Date().getFullYear() }} — <strong>Amazing Todo App</strong>
    </v-card-text>
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