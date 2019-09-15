import { Module } from 'vuex';
import { RootState } from './store';

interface ModuleB {
  data: string;
}

const module: Module<ModuleB, RootState> = {
  namespaced: true,
  state: {
    data: 'moduleB',
  },
  mutations: {
    setData(state: RootState, data: string) {
      state.data = data;
    },
  },
  actions: {
    setRootData({ commit }, data: string) {
      commit('setData', data);
    },
  },
  getters: {
    data: (state: RootState) => state.data,
  },
};

export default module;
