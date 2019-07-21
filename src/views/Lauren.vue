<template>
  <div class="lauren">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1> Welcome to my additional page!</h1>
    <p> I've never used a router before so this is pretty sick tbh </p>
  </div>
</template>

<script>
// @ is an alias to /src
import Lauren from '@/components/LaurensComponent.vue';

export default {
  name: 'lauren',
  components: {
    Lauren,
  },
};
</script>
