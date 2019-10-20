import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
// import Vuelidate from "vuelidate";
import * as VeeValidate from 'vee-validate';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components';

Vue.use(VueMaterial);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(VueAxios, axios);
Vue.use(VeeValidate); 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
