<template>
  <div id="app">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
      rel="stylesheet"
    />
    <div class="page-heading">
      <h1 id="title">Welcome to</h1>
      <h2 id="description">Daily-Does-It Tracker App</h2>
    </div>
    <todo-summary />
    <todo-list />
    <new-todo />
    <app-description />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import NewTodo from "./components/NewTodo.vue";
import TodoSummary from "./components/TodoSummary.vue";
import AppDescription from "./components/AppDescription.vue";

export default {
  name: "app",
  components: {
    TodoList,
    NewTodo,
    TodoSummary,
    AppDescription,
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

body {
  background-image: url(../images/wooden-desk-1.jpg);
  background-size: cover;
  background-attachment: fixed;
}

.page-heading {
  font-size: 16px;
  background-color: #f0f0f0;
  border: 2px solid #000000;
  border-radius: 20px;
  display: inline-block;
  text-align: center;
  margin-bottom: 5em;
  padding: 15px 30px;
}

#title {
  font-weight: 600;
  font-size: 60px;
  margin: 0;
}

#description {
  font-size: 50px;
  margin: 0;
}
</style>
