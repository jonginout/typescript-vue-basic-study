<template>
    <section>
        <p>{{ message }}</p>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Inject, Provide } from 'vue-property-decorator';

@Component
export default class ProvideInject extends Vue {
    /**
     * 부모에서 받아오는 값이라 초기화 하면 안된다.
     * !를 붙히면 값을 초기화 하지 않은게 의도된거다 라는 뜻
     * 그리고 이 값은 부모에서 받아오는 값으로 / 변경이 되면 안됨 : readonly
     * @Inject @Provide 모두 property decorator
     */
    @Inject() public readonly message!: string;
}
</script>