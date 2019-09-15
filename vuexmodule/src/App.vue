<template>
  <div id="app">
    {{ $store.state.ModuleA }}
    {{ $store.state.ModuleB }}
    {{ $store.state.data }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
  },
})
export default class App extends Vue {
  public created(): void {
    console.log(this.$store)
    this.$store.dispatch('setRootData', 'test')
    this.$store.dispatch('ModuleA/setRootData', 'test!!') // ModuleA/ 가 네임스페이스
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
