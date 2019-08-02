import App from './App.vue'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import wysiwyg from "vue-wysiwyg";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "vue-wysiwyg/dist/vueWysiwyg.css"

Vue.use(axios)
Vue.use(BootstrapVue)
Vue.use(wysiwyg, {});
new Vue(App).$mount('#app')