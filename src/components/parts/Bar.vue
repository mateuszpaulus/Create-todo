<template>
  <v-toolbar
    class="elevation-0 pr-0 mr-0" 
    dense
  >
    <v-toolbar-title>Todo</v-toolbar-title>
    <v-spacer />
    <SearchTodos />
  </v-toolbar>
</template>
<script>
export default {
  components: {
    SearchTodos: () => import('@/components/Search/SearchTodos.vue'),
  },
}
</script>