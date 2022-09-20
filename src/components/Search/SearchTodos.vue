<template>
  <v-text-field
    :value="searchTodos"
    placeholder="Search Task"
    class="input-search"
    :class="{ 'closed' : searchClosed && !searchTodos }"
    hide-details
    clearable
    dense
    filled
    @input="$store.commit('SEARCH_TODOS', $event)"
    @focus="showInput"
    @blur="showInput"
  >
    <template #append>
      <v-icon>
        mdi-magnify
      </v-icon>
    </template>
  </v-text-field>
</template>
<script>
export default {
  data() {
    return {
      searchClosed: true
    }
  },
  computed: {
    searchTodos() {
      return this.$store.state.searchTodos;
    },
  },
  methods: {
    showInput() {
      this.searchClosed = !this.searchClosed
    },
  }
}
</script>
<style lang="sass" scoped>
  .input-search
    ::v-deep
      .v-input__slot
        cursor: pointer !important
        &:before, &:after
          border-color: transparent !important
      &.closed
        max-width: 40px
        .v-input__slot
          background: transparent !important
</style>