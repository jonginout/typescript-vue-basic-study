<template>
    <!-- 템플릿 밑에는 하나의 DOM만 있어야 한다. -->
    <section>
        <input type="text" v-model="message">
        <p>{{ message }}</p>
    </section>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

/**
 * 이 클래스의 인스턴스를 Component로 사용하기 위해서
 * @Component 데코레이터를 붙혀준다.
 * 여기서 사용하는건 Class Decorator
 */
@Component
export default class Message extends Vue {
    public message: string = '메시지를 입력해주세요';
}

</script>