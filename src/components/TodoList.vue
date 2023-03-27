<template>
    <section class="todo-list">
        <h1 class="todo-title">My Daily Routine</h1>
        <ul>
            <li v-for="todo in $store.state.todos" v-bind:key="todo.name"  v-bind:class="{ 'todo-completed': todo.done }">
                <input type="checkbox" v-bind:checked="todo.done" v-on:click="checkTodoBox(todo)"/>
                <span v-bind:class="{ completed: todo.done }">{{todo.name}}</span>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
  methods: {
    checkTodoBox(todo) {
        this.$store.commit('FLIP_DONE', todo);
    }
}
}
</script>

<style>
.todo-list {
    width:450px;
    background: #fff;
    margin: 50px auto;
    font-family: 'Roboto Condensed', sans-serif;
    border-radius: 10px;
}
.todo-title {
    background:#60f2f7a6;
    color:#000000;
    padding:10px;
    font-size:30px;
    text-align: center;
    margin-bottom: 0px;
    margin-top: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
ul {
    list-style-type: none;
    margin:0px;
    padding:0px;
}
li {
    font-size: 24px;
    border-bottom:1px solid #f2f2f2;
    padding:10px 20px;
}
li:last-child{
    border:0px;
}
li.todo-completed {
    text-decoration: line-through;
    color: darkgray;
}
</style>
