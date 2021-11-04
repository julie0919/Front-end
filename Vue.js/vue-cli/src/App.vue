<template>
<!-- teamplate Root는 무조건 하나여야 하므로 하나의 div태그만 존재할 수 있다. -->
  <div>
    <!-- 기본적으로 하나의 Element안에 계속 정의해나가는 방식 -->
    <!-- v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름" -->
    <app-header 
    v-bind:propsdata="str"
    v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
// var AppHeadder = {
  // template: '<header></header>'
// }


// new Vue({
//   data: {
//     str: 'hi'
//   }
// })

export default {
  data: function () {
    return {
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader,
  },
  methods: {
    renewStr: function() {
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>