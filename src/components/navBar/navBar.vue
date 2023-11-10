<template>
  <div class="navBar">
    <div class="navLeft" v-if = 'isShow'>
      <img src="../../assets/img/Navigation-bar/left.png" alt="none" class="none">
    </div>
    <div class="navLeft" v-if = '!isShow'></div>
    <div class="nav">
      <img src="../../assets/img/Navigation-bar/one.png" alt="none" class="none">
      <img src="../../assets/img/Navigation-bar/two.png" alt="ntwo" class="ntwo">
      <img src="../../assets/img/Navigation-bar/three.png" alt="nthree" class="nthree">
      <img src="../../assets/img/Navigation-bar/four.png" alt="nfour" class="nfour">
    </div>
  </div>
</template>

<script setup>
defineProps({
  isShow: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>

.navBar {
  display: flex;
}
.navLeft {
  display: flex;
  width: 222px;
  height: 72px;
  position: relative;
  top: 80px;
  left: 96px;
}
.nav {
  width: 800px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  top: 80px;
  left: 800px;
  .none {
    width: 92.77px;
    height: 53.71px;
  }
  .ntwo {
    width: 165.19px;
    height: 37.26px;
  }
  .nthree {
    width: 181.26px;
    height: 40.78px;
  }
  .nfour {
    width: 99.87px;
    height: 41.23px;
  }  
}
</style>
