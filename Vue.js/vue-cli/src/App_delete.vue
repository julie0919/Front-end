<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <!-- 컴포넌트 명명법 종류 -->
    <!-- 파일 바로가기, Vue.js 공식 스타일 가이드 -->
    <!-- <hello-world>컴포넌트 태그 등록 방식과 같다</hello-world> -->
    <!-- 파스칼케이스 방식 -->
    <!-- <HelloWorld></HelloWorld> -->

    <!-- 진보된 패턴 -->
    <!-- <HelloWorld/> -->
  </div>
</template>

<script>
// 컴포넌트 내용을 들고와서 components에 연결해 사용한다
import HelloWorld from './components/HelloWorld.vue'

// new Vue({}) 였던 방식과 유사
export default {
  // 인스턴스 옵션 속성 or 컴포넌트 옵션 속성
  name: 'App',
  components: {
    HelloWorld,
    // 'hello-world': HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
