/**
 * vue 인스턴스를 만드는 곳
 * 프로젝트 엔트리 포인트가 된다.
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
// #app은 public에 index.html에 있다.
