<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="contaiter">
    <div class="one">
      <img src="./assets/img/indexBtn.png" alt="主页按钮" class="img">
      <img src="./assets/img/one/btnA.png" alt="A" class="imgA">
      <img src="./assets/img/one/btnB.png" alt="B" class="imgB">
      <img src="./assets/img/one/btnC.png" alt="C" class="imgC">
      <img src="./assets/img/one/btnD.png" alt="D" class="imgD">
    </div>
  </div>
  <!-- <div class="contaiter">
    <img src="./assets/img/Frame10.png" alt="背景图片">
  </div>
  <div class="contaiter">
    <img src="./assets/img/Frame11.png" alt="背景图片">
  </div> -->
</template>

<style scoped>
.contaiter {
  background: #000000;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.one {
  width: 1920px;
  height: 1080px;
  background: url('./assets/img/one/box.png') center no-repeat;
  background-size: 1802.43px 973.42px;
  .img {
    margin-top: 146px;
    margin-left: 172px;
  }
  .imgA {

  }
  .imgB {
    
  }
  .imgC {
    
  }
  .imgD {
    
  }
}
</style>
