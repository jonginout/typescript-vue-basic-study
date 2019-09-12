<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Toggle extends Vue {
    public show: boolean = false;

    public toggle(): void {
        this.show = !this.show;
    }
}
</script>
