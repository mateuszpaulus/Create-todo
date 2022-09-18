<template>
  <v-text-field
    id="id"
    v-model="newTaskTitle"
    name="name"
    placeholder="Your new Task"
    hide-details
    clearable
    solo
    @keyup.enter="addNewTask"
  >
    <template #append>
      <v-icon
        :disabled="newTaskCheck"
        @click="addNewTask"
      >
        mdi-bookmark-plus-outline
      </v-icon>
    </template>
  </v-text-field>
</template>
<script>
export default {
  data()  {
    return {
      newTaskTitle: '',
    }
  },
  computed: {
    newTaskCheck() {
      return !this.newTaskTitle
    }
  },
  methods: {
    addNewTask() {
      if (!this.newTaskCheck){
        let newTask = {
          id: Date.now(),
          title: this.newTaskTitle,
          completed: false,
        }
        console.log(newTask)
        this.$store.dispatch('createTask', newTask)
        this.newTaskTitle = ''
      }
    }
  }
}
</script>