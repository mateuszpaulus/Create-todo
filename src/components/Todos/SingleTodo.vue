<template>
  <div>
    <v-list-item
      class="rounded-lg my-1"
      :class="task.completed && 'grey lighten-2'"
      @click="completedTask(task.id)"
    >
      <template #default>
        <v-list-item-action>
          <v-checkbox
            :input-value="task.completed"
            color="dark"
          />
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title :class="task.completed && 'text-decoration-line-through'">
            {{ task.title }}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn
            icon
            @click.stop="dialogDeleteTask"
          >
            <v-icon color="grey lighten-1">
              mdi-delete-outline
            </v-icon>
          </v-btn>
        </v-list-item-action>
        <v-list-item-action>
          <v-btn
            icon
            @click.stop="dialogEditTask"
          >
            <v-icon color="grey lighten-1">
              mdi-pencil-outline
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <DialogDelete
      v-if="dialog.delete"
      :task="task"
      @closedialog="dialogDeleteTask"
    />
    <DialogEdit
      v-if="dialog.edit"
      :task="task"
      @closedialog="dialogEditTask"
    />
  </div>
</template>
<script>
export default {
  components: {
    DialogDelete: () => import('@/components/Dialog/DialogDelete.vue'),
    DialogEdit: () => import('@/components/Dialog/DialogEdit.vue'),
  },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: {
        delete: false,
        edit: false
      }
    }
  },
  methods: {
    dialogDeleteTask() {
      this.dialog.delete = !this.dialog.delete
    },
    dialogEditTask() {
      this.dialog.edit = !this.dialog.edit
    },
    completedTask(id) {
      this.$store.dispatch('completedTask', id)
    },
  }
}
</script>