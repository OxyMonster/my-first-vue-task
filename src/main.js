import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
// import Vuelidate from "vuelidate";
import * as VeeValidate from 'vee-validate';


Vue.use(VueAxios, axios);
Vue.use(VeeValidate); 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
