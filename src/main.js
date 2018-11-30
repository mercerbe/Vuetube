import Vue from 'vue';
import App from './App';
import "vue-material/dist/vue-material.min.css";

new Vue({
  render: h => h(App),
}).$mount("#app");//same as using el:"#app" to send app to root app div in index.html