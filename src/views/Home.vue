<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Lauren msg="This is a string written in the Home.vue file"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Lauren from '@/components/LaurensComponent.vue';

export default {
  name: 'home',
  components: {
    Lauren,
  },
};
</script>
