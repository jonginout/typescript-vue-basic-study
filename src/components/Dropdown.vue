<template>
    <section>
        <button @click="toggle">드롭다운</button>
        <ul v-show="show">
            <li>아이템1</li>
            <li>아이템2</li>
            <li>아이템3</li>
        </ul>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator';
import Toggle from '@/components/mixin/Toggle.vue';

@Component({
  components: {
    Toggle,
  },
})

                // 이미 vue를 상속받기 때문에 상속을 못하고 // Mixins으로 다중 상속한다.
export default class Dropdown extends Mixins(Toggle) {
    public show: boolean = false;

    public toggle(): void {
        this.show = !this.show;
    }
}
</script>