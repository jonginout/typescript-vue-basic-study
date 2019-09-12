<template>
    <section>
        <input type="checkbox" :checked="checkedValue" @change="onChangeCheckBox"/>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Model, Emit } from 'vue-property-decorator';

@Component
export default class Checkbox extends Vue {
    /**
     * 첫번째 인자는 이벤트명
     * 두번째 인자 값에 대한 타입을 명시적으로
     */
    @Model('change', {type: Boolean}) public readonly checkedValue!: boolean;

    @Emit('change')
    public onChangeCheckBox(event: Event) {
        return event.target.checked;
    }
    /*
        순수. js
        model: {
            prop: 'checkedValue',
            event: 'change'
        },
        props: {
            checkedValue: {
                type: Boolean
            }
        }
    */
}
</script>