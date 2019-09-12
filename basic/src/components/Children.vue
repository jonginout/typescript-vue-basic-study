<template>
    <section>
        <p>{{ parentMessage }}</p>
        <p>
            <strong>{{ warn }}</strong>
        </p>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class Children extends Vue {
    /**
     * "strict": true, // undefined를 포함하지 않는 클래스 속성은 반드시 초기화 해야한다..
     * props는
     * property decorator 사용
     */
    @Prop() public parentMessage?: string;

    public warn: string = '';

    /**
     * watch는
     * method decorator 사용
     * @param property_name 속성명
     * @param watch_option 와치옵션
     * 와치옵션
     * immediate: true면 이 속성의 현재값으로 핸들러(update())를 즉시 호출하겠다,
     * deep: true이 속성이 객체일경우 이 객체의 내부 속성이 바뀌는 것 까지 감지하겠다.
     */
    @Watch('parentMessage')
    public update(value: string, oldValue: string) {
        // 메소드명은 꼭 update가 아니여도 된다.
        // 첫번째 파라미터는 현재값 / 두번째 파라미터는 변경되기 전 값
        this.warn = `변경전 : [${oldValue}] -> 변경후 : [${value}]`;
    }
}
</script>