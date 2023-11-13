<template>
  <div class="three">
    <navBar></navBar>
    <div class="cardBox">
      <div class="cardItem"></div>
      <div class="cardItem"></div>
      <div class="cardItem"></div>
      <div class="cardItem"></div>
      <div class="cardItem"></div>
      <div class="cardItem"></div>
    </div>
    <div>
      <img src="@/assets/img/three/bottomFlower.png" alt="bottomFlower" class="img">
    </div>
    <div class="bottomBtn">
      <img src="@/assets/img/three/one.png" alt="one" class="img">
      <img src="@/assets/img/three/two.png" alt="two" class="img">
      <img src="@/assets/img/three/three.png" alt="three" class="img">
    </div>
  </div>
</template>

<script setup>
import navBar from '@/components/navBar/navBar.vue'
</script>

<style src="@/assets/css/three.css"></style>
<style scoped>
.contaiter {
  background: #000000;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>