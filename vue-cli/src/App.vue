<template>
  <div>
<!--    <app-hedaer v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-hedaer>-->
    <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue';
  export default {
    data() {
      return {
        str: 'Header'
      }
    },
    components: {
      'app-header': AppHeader
    },
    methods: {
      renewStr() {
        this.str = 'hi';
      }
    }
  }
</script>

<style>

</style>
