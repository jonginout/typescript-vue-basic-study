import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
// npm i vuex-module-decorators --save
// vuex-module-decorators를 사용하면 클래스 패턴으로 vuex정의 가능

@Module({ namespaced: true })
export default class ModuleA extends VuexModule {
  // 멤버 변수가 state
  public data: string = 'moduleA';

  // 메소드가 mutations
  @Mutation
  public setData(payload: string) {
    this.data = payload;
  }

  @Action
  public editData(payload: string) {
    this.context.commit('setData', payload);
  }

  // ts의 getter가 store의 getter
  get getData() {
    return this.data;
  }

}
