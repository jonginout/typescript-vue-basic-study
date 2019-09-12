import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module
export default class Store extends VuexModule {
    public count: number = 0;

    @Mutation
    public setCount(payload: number) {
        this.count = payload;
    }

    @Action
    public increase() {
        this.context.commit('setCount', this.count + 1);
    }

    @Action
    public decrease() {
        this.context.commit('setCount', this.count - 1);
    }

    get getCount() {
        return this.count;
    }
}
