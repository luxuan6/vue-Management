// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import { Button, Select } from 'element-ui';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });



// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
