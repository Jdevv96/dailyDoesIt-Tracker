<template>
  <section class="new-todo">
    <form v-on:submit.prevent="saveTodo">
      <input type="text" placeholder="Name" v-model="newTodo.name" class="name"/>
      <select v-model="newTodo.category" class="name">
        <option value="">--- Select a category ---</option>
        <option value="Home">Home</option>
        <option value="Work">Work</option>
      </select>
      <button class="add">Add</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newTodo: {
        name: "",
        category: "",
        done: false,
      },
    };
  },
  methods: {
    saveTodo() {
      this.newTodo.done = false;
      this.$store.commit("ADD_NEW_TODO", this.newTodo);
      this.newTodo = {
        name: "",
        category: "",
        done: false,
      };
    },
  },
};
</script>

<style>
.new-todo {
  text-align: center;
  width: fit-content;
  background: transparent;
  margin: auto;
  font-family: "Roboto Condensed", sans-serif;
  border-radius: 10px;
}
input,
select,
button {
  padding: 5px 5px;
  margin: 5px;
}

.new-todo form {
  border: 2px solid black;
  border-radius: 10px;
  background-color: #f2f2f2;
  padding: 5px 10px;
}

.name {
  font-size: 16px;
}
.add {
  border-radius: 10px;
  padding: 5px 8px;
  font-size: 16px;
}

</style>