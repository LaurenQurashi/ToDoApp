<template>
  <div id="app">
    <Header />
    <Todos v-bind:todos="todos" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Todos,
    Header,
    Footer,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Todo 1',
          completed: false,
        },
        {
          id: 2,
          title: 'Todo 2',
          completed: true,
        },
        {
          id: 3,
          title: 'Todo 3',
          completed: false,
        },
      ],
    };
  },

};
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 10px;
    padding: 5px;

  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1;
  }
</style>
