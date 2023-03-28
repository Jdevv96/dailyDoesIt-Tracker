<template>
  <div class="description-container">
    <h3>Getting Started:</h3>
    <p>Before you start: Each To-Do list task is categorized into one of two different categories, 'Work' and 'Home'. You'll want to make sure you select this when adding your task.</p>
    <ol>
        <li>Start by writing in your desired task in the name field.</li>
        <li>Select the category the task would fall under</li>
        <li>Add it to the list by clicking Add.</li>
        <li>Mark the task completed by checking the box next to it.</li>
        <li>Repeat as needed and that's it! You're on your way to increased productivity!</li>
    </ol>
    <p>The Home and Work boxes will update each time you add/remove a task to aid in tracking your daily goals.</p>
    <p>*The To-Do list tasks are reset each time the page is refreshed.*</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.description-container {
    width:600px;
    background: transparent;
    margin-top: 5em;
    font-family: 'Roboto Condensed', sans-serif;
    border-radius: 10px;
    border: 2px black solid;
    padding: 20px;
    background-color: #f2f2f2;
}

.description-container p {
    font-size: 18px;
}
</style>