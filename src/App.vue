<script setup>
import navBar from './components/navBar/navBar.vue'
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
  <div class="contaiter">
    <div class="two">
      <navBar :isShow="false"></navBar>
    </div>
  </div>
  <div class="contaiter">
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
        <img src="./assets/img/three/bottomFlower.png" alt="bottomFlower" class="img">
      </div>
      <div class="bottomBtn">
        <img src="./assets/img/three/one.png" alt="one" class="img">
        <img src="./assets/img/three/two.png" alt="two" class="img">
        <img src="./assets/img/three/three.png" alt="three" class="img">
      </div>
    </div>
  </div>
  <div class="contaiter">
    <div class="four">
      <navBar></navBar>
      <div class="fourFlag">
        <img src="./assets/img/four/leftFlag.png" alt="左边箭头" class="leftFlag">
        <img src="./assets/img/four/text.png" alt="文字" class="text">
      </div>
      <div class="fourSlide">
        <img src="./assets/img/four/slide.png" alt="修饰条" class="slide">
      </div>
    </div>
  </div>
  <!-- <div class="contaiter">
    <div class="five">
      <navBar></navBar>
    </div>
  </div> -->
  <div class="contaiter">
    <div class="six">
      <navBar></navBar>
      <div class="box">
        <div class="item">
          <img src="./assets/img/six/one.png" alt="数字" class="num">
          <div class="pic"></div>
          <img src="./assets/img/six/text1.png" alt="文字" class="text">
        </div>
        <div class="item">
          <img src="./assets/img/six/two.png" alt="数字" class="num">
          <div class="pic"></div>
          <img src="./assets/img/six/text2.png" alt="文字" class="text">
        </div>
        <div class="item">
          <img src="./assets/img/six/three.png" alt="数字" class="num">
          <div class="pic"></div>
          <img src="./assets/img/six/text3.png" alt="文字" class="text">
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./assets/css/one.css"></style>
<style src="./assets/css/two.css"></style>
<style src="./assets/css/three.css"></style>
<style src="./assets/css/four.css"></style>
<style src="./assets/css/five.css"></style>
<style src="./assets/css/six.css"></style>
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
