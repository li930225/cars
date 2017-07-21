<template>
  <div id="app">
  	<heads></heads>
    <!--<img src="./assets/logo.png">-->    
    <router-view></router-view>
    <foots></foots>
  </div>
</template>

<script>
import head from "./components/head.vue"
import foot from "./components/foot.vue"
export default {
  name: 'app',
  components:{
  	heads:head,
  	foots:foot
  }
}
</script>

<style>

</style>
