<template>
    <section>
        {{ getCount }}
        <button @click="up">증가</button>
        <button @click="down">감소</button>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
// npm i vuex-class

@Component({})
export default class Count extends Vue {
    @Getter public readonly getCount!: number;

    @Action('increase') public readonly up;
    @Action('decrease') public readonly down;
}
</script>