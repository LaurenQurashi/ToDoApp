import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

// This is the main entry point to our work. We import the things we need and make a new
// instance of a vue object which is what our app runs on. In here is where we render our
// app and mount it in the app div which is our placeholder on the index.html file.
