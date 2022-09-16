import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const resource_url = "https://jsonplaceholder.typicode.com/todos/";

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
  },
  mutations: {
    GET_TASKS (state, tasks) {
      state.tasks = tasks
    },
    NEW_TASK (state, newTask) {
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
  },
  actions: {
    async getTasks ({ commit }) {
      try {
        const response = await axios.get(resource_url);
        commit('GET_TASKS', response.data.slice(0,10));
        console.log(response.data)
      }
      catch (error) {
        alert(error)
        console.log(error)
      } 
    },
    async addTask ({ commit }, newTaskTitle) {
      let newTask = {
        userId: 1,
        id: Date.now(),
        title: newTaskTitle,
        completed: false,
      }
      try {
        const response = await axios.post(resource_url, newTask);
        console.log(newTask)
        commit('NEW_TASK', response.data)
      }
      catch (error) {
        alert(error)
        console.log(error)
      } 
    },
    async completedTask ({state, commit}, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
      try {
        const response = await axios.patch(`${resource_url}${id}`, {
          completed: !task.completed
        });
        commit('COMPLETED_TASK', id);
        console.log(response.data)
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },
    async removeTask ({ commit }, id) {
      try {
        const response = await axios.delete(`${resource_url}${id}`);
        commit('REMOVE_TASK', id);
        console.log(response.data)
      }
      catch (error) {
        alert(error)
        console.log(error)
      } 
    },
    async updateTask ({ commit }, updateTask) {
      try {
        const response = await axios.put(`${resource_url}${updateTask.id}`, {
          title: updateTask.title
        });
        commit('UPDATE_TASK', updateTask);
        console.log( updateTask)
      }
      catch (error) {
        alert(error)
        console.log(error)
      } 
    },
  },
  modules: {
  }
})
