<template>
  <v-list>
    <v-list-item-group
      multiple
      flat
    >
      <draggable
        :list="tasks"
        handle=".handle"
      >
        <SingleTodo
          v-for="task in tasks"
          :key="task.id"
          :task="task"
        />
      </draggable>
    </v-list-item-group>
  </v-list>
</template>
<script>
  import draggable from "vuedraggable";
export default {  
  components: {
    SingleTodo: () => import('@/components/Todos/SingleTodo.vue'),
    draggable
  },
  computed: {
    tasks() {
      return this.$store.getters.todosFilter;
    },
  },
}
</script>