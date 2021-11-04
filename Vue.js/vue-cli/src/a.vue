/* 기존
var appHeader = {
  template: '<div>header</div>',
  methods: {
    addNum: function() {

    }
  }
}
*/

<template>
  <!-- HTML -->
  <div>header</div>
</template>

<script>
export default {
  // JavaScript - 인스턴스 옵션
  methods: {
    addNum: function() {

    }
  }
}
</script>

<style>
  /* CSS */
</style>


// 화면의 영역을 나눴을 때 특정 영역에 해당하는 HTML, CSS, JavaScript를 한 파일에서 관리하겠다
==> Single File Component이자 .vue 파일이다. 