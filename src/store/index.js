import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { name: 'Go for a morning run', done: false, category: 'Home' }
    ]
  },
  mutations: {
    ADD_NEW_TODO(state, todo) {
      state.todos.push(todo);
    },
    FLIP_DONE(state, todo) {
      todo.done = ! todo.done;
    }
  },
  actions: {
  },
  modules: {
  },
})
