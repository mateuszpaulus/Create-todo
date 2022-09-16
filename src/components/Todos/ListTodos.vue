<template>
  <v-list>
    <v-list-item-group
      multiple
      flat
    >
      <SingleTodo
        v-for="task in tasks"
        :key="task.id"
        :task="task"
      />
    </v-list-item-group>
  </v-list>
</template>
<script>
export default {
  components: {
    SingleTodo: () => import('@/components/Todos/SingleTodo.vue'),
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
}
</script>