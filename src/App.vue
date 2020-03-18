<template>
  <div id="app">
    <img src="./assets/logo.png">
    <CreateTodo/>
    <router-view></router-view>
  </div>
</template>

<script>
import ListTodos from './components/ListTodos'
import CreateTodo from './components/CreateTodo'
import DetailTodo from "./components/DetailTodo"
import Search from "./components/Search";
export default {
  name: 'App',
  components: {
    DetailTodo,
    ListTodos,
    CreateTodo,
    Search
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
