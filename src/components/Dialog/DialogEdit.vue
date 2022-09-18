<template>
  <v-row justify="center">
    <v-dialog
      :value="true"
      persistent
      max-width="490"
    >
      <v-card>
        <v-card-title class="text-h5">
          Edit task ?
        </v-card-title>
        <v-card-text>Task will be edit !</v-card-text>
        <v-card-actions class="d-block justify-center">
          <v-text-field
            id="id"
            v-model="taskTitle"
            solo
            hide-details
            placeholder="Your edit task"
            clearable
            name="name"
            @keyup.enter="editTask"
          />
        </v-card-actions>
        <v-card-actions>
          <v-spacer />
          <v-btn
            text
            @click="$emit('closedialog')"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            @click="editTask"
          >
            Edit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    props: {
      task: {
        type: Object,
        required: true,
      },
    },
    emits: ['closedialog'],
    data() {
      return {
        taskTitle: ''
      }
    },
  created() {
    this.taskTitle = this.task.title
  },
  methods: {
    editTask() {
        let updateTask = {
          id: this.task.id,
          title: this.taskTitle
        }
        this.$store.dispatch('updateTask', updateTask)
        this.$emit('closedialog')
        // this.$vuetify.goTo(0, { duration: 0 })
    }
  }
  }
</script>