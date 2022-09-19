<template>
  <v-container class="justify-center">
    <InputAddTodo />
    <ListTodos v-if="tasks.length" />
    <EmptyTodos v-else />
  </v-container>
</template>

<script>
  export default {
    components: {
      InputAddTodo: () => import('@/components/Todos/InputAddTodo.vue'),
      ListTodos: () => import('@/components/Todos/ListTodos.vue'),
      EmptyTodos: () => import('@/components/Todos/EmptyTodos.vue'),
    },
    computed: {
      tasks() {
        return this.$store.state.tasks;
      },
    },
    mounted() {
      this.$store.dispatch('getTasks');
    },
  }
</script>
