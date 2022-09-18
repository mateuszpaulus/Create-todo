import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const apiJson = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default new Vuex.Store({
  state: {
    tasks: [],
    searchTodos: null,
  },
  getters: {
    todosFilter(state) {
      if (!state.searchTodos) {
        return state.tasks
      }
      return state.tasks.filter(task =>
        task.title.toLowerCase().includes(state.searchTodos.toLowerCase())
      )
    }
  },
  mutations: {
    SET_TASKS (state, tasks) {
      state.tasks = tasks
    },
    ADD_TASK (state, newTask) {
      state.tasks = [newTask, ...state.tasks]
    },
    COMPLETED_TASK(state, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
      task.completed = !task.completed
    },
    REMOVE_TASK (state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    UPDATE_TASK(state, updateTask) {
      let task = state.tasks.filter(task => task.id === updateTask.id)[0]
      task.title = updateTask.title
    },
    SEARCH_TODOS(state, value) {
      state.searchTodos = value
    },
  },
  actions: {
    async getTasks ({ commit }) {
      await apiJson.get('/todos')
        .then(response => {
          commit('SET_TASKS', response.data)
          console.log(response.data)
        })
        .catch(error => {
          alert(error)
        })
    },
    async createTask ({ commit }, newTask) {
      await apiJson.post('/todos', newTask)
        .then(() => {
          commit('ADD_TASK', newTask)
        })
        .catch(error => {
          throw(error)
        })
    },
    async completedTask ({state, commit}, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
      await apiJson.patch(`/todos/${id}`, {
        completed: !task.completed
      })
        .then(() => {
          commit('COMPLETED_TASK', id)
          console.log('id', id, 'completed', task.completed)
        })
        .catch(error => {
          alert(error)
        })
    },
    async removeTask ({ commit }, id) {
      await apiJson.delete(`/todos/${id}`)
        .then(() => {
          commit('REMOVE_TASK', id)
          console.log(id)
        })
        .catch(error => {
          alert(error)
        })
    },
    async updateTask ({ commit }, updateTask) {
      await apiJson.patch(`/todos/${updateTask.id}`, {
        title: updateTask.title
      })
        .then(() => {
          commit('UPDATE_TASK', updateTask)
          console.log(updateTask)
        })
        .catch(error => {
          alert(error)
        })
    },
  },
  modules: {
  }
})
