import { Module } from 'vuex';
import { RootState } from './store';

interface ModuleA {
  data: string;
}

const module: Module<ModuleA, RootState> = {
  namespaced: true,
  state: {
    data: 'moduleA',
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
