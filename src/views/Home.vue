<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Lauren msg="This is a string written in the Home.vue file"/>
    <!-- Lauren is a component and msg is a property/ prop of that component. Here we are using the data
    Lauren holds as an embedded component (meaning we can put it's data in as a HTML tag), which is
    specifying what that message is, and in the component file itself is where we output it
    in the template.-->
  </div>
</template>

<script>
// @ is an alias to /src
import Lauren from '@/components/LaurensComponent.vue';
// Here is where we import the components. This enables us to use it in the Home.vue page. The
// Lauren component exports a prop which we're allowed to use in here.

export default {
  name: 'home',
  components: {
    Lauren,
  },
};

//In order to use our embedded components like we have in the template above, we need to
// list it in our exports, so we are declaring that we are using the Lauren component. The
// name Lauren is specified in the component's file's output under name.

</script>
