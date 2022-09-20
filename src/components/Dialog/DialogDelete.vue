<template>
  <v-row justify="center">
    <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Delete task ?
        </v-card-title>
        <v-card-text>Task will be removed !</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            text
            @click="$emit('closedialog')"
          >
            No
          </v-btn>
          <v-btn
            text
            @click="deleteTask(task.id)"
          >
            Yes
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
  methods: {
    deleteTask(id) {
      this.$store.dispatch('removeTask', id);
    },
  },
  }
</script>