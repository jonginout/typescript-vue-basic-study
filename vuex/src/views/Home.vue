<template>
  <div class="home">
    <button @click="up">증가</button>
    <button @click="down">감소</button>
    <count/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Count from '@/components/Count.vue';

@Component({
  components: {
    Count,
  },
})

export default class Home extends Vue {

  public up(): void {
    this.$store.dispatch('increase');
  }

  public down(): void {
    this.$store.dispatch('decrease');
  }

}
</script>
