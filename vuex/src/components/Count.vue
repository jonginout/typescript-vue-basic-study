<template>
    <section>
        {{ $store.getters.count }}
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Count extends Vue {

}
</script>