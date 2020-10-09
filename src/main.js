import Vue from 'vue';
import { Plugin } from 'vue-responsive-video-background-player';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VuePrlx from 'vue-prlx'

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VuePrlx);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Plugin);

new Vue({
    render: h => h(App)
}).$mount('#app');