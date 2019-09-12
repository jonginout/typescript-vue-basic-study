<template>
    <section>
        <p>count : {{ count }}</p>
        <button @click="add(1)">숫자증가</button>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';

@Component
export default class Counter extends Vue {
    public count: number = 0;

    /**
     * 만약 위 버튼 클릭의 핸들러 함수 이름도 counter면
     * @Emit() 파라미터가 없어도 된다.
     */
    @Emit('counter')
    public add(n: number) {
        this.count += n;
    }
    // 이거와 같다.
    // addToCount(n) {
    //   this.count += n
    //   this.$emit('add-to-count', n)
    // },
}
</script>