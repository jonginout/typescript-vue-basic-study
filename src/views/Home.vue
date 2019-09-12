<template>
  <!-- https://github.com/kaorun343/vue-property-decorator#Model -->
  <div class="home">
    <!-- 컴포넌트 -->
    <message/>
    <hr>
    <!-- props, watch -->
    <children :parent-message="message" />
    <button @click="onClickChangeMessage">메시지 변경</button>
    <hr>
    <!-- emit -->
    <counter @counter="counter" />
    <hr>
    <!-- 
      provide : 자식컴포넌트에 제공할 속성들을 작성
      inject : 자식컴포넌트에서 제공한 속성들을 작성

      props나 emit과의 차이는?
      직계 부모나 자손간의 데이터 뿐 아니라
      부모의 부모의 부모의 ~~ 도 가능하다.

      데이터의 흐름을 알기가 파악하기가 힘들기 때문에 사용하는 것을 권장하지 않는다.
      다만 
      글로벌 하게 사용할 데이터면 나쁘지 않다.
    -->
    <provide-inject />
    <hr>
    <!-- 
      model

      v-model은 value를 보조 변수로 사용하고 input을 이벤트로 사용
      checkbox나 radio를 사용할때 v-model과 value를 다른 목적으로 사용하는 경우가 있는데

      이때 model을 쓰면 충돌을 피할 수 있다.
     -->
     <label>{{ checkboxText }}</label>
     <checkbox v-model="checkedValue" @change="onChangeCheckBox"/>
     <hr>
     <!-- Mixin -->
     <accordion/>
     <dropdown/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import Message from '@/components/Message.vue'; // @ = /src
import Children from '@/components/Children.vue';
import Counter from '@/components/Counter.vue';
import ProvideInject from '@/components/ProvideInject.vue';
import Checkbox from '@/components/Checkbox.vue';
import Accordion from '@/components/Accordion.vue';
import Dropdown from '@/components/Dropdown.vue';

@Component({
  components: {
    Message,
    Children,
    Counter,
    ProvideInject,
    Checkbox,
    Accordion,
    Dropdown,
  },
})
export default class Home extends Vue {
  public message: string = 'Hello World!';
  public checkedValue: boolean = false;
  public checkboxText: string = '동의하지 않습니다.';

  /**
   * 속성이 부모하고 자식이 같으면 아무런 파라미터를 안줘도 된다.
   * @Provide()
   */
  @Provide('message') public msg: string = 'provide -> hello -> inject!';

  public onClickChangeMessage() {
    this.message = 'changed!';
  }

  public counter(n: number) {
    alert(n);
  }

  public onChangeCheckBox(checked: boolean) {
    this.checkedValue = checked;
    this.checkboxText = checked ? '동의합니다' : '동의하지 않습니다.';
  }
}
</script>
