import Vue from 'vue';
import Vuex, { StoreOptions, ActionContext } from 'vuex';

import Counter from './counter';

Vue.use(Vuex);

const store = {
  modules: {
    Counter,
  },
};

export default new Vuex.Store(store);
