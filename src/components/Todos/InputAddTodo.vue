<template>
  <v-form>
    <v-text-field
      id="id"
      v-model="newTaskTitle"
      name="name"
      placeholder="Your new Task"
      append-icon="mdi-bookmark-plus-outline"
      hide-details
      clearable
      solo
      @keyup.enter="addNewTask"
      @click:append="addNewTask"
    />
  </v-form>
</template>
<script>
export default {
      data()  {
      return {
        newTaskTitle: '',
      }
    },
      methods: {
      addNewTask() {
        this.$store.dispatch('addTask', this.newTaskTitle)
        this.newTaskTitle = ''
      },
      }
}
</script>