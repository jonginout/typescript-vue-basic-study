import Vue from 'vue';
import Vuex, { StoreOptions, ActionContext } from 'vuex';

import ModuleA from './moduleA.store';
import ModuleB from './moduleB.store';

Vue.use(Vuex);

export interface RootState {
  data: string;
}

const store: StoreOptions<RootState> = {
  modules: {
    ModuleA,
    ModuleB,
  },
  state: {
    data: 'root',
  },
  mutations: {
    setData(state: RootState, data: string) {
      state.data = data;
    },
  },
  actions: {
    setRootData({commit}: ActionContext<RootState, RootState>, data: string) {
      commit('setData', data);
    },
  },
  getters: {
    data: (state: RootState) => state.data,
  },
};

export default new Vuex.Store(store);
