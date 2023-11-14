<template>
  <div class="contaiter">
    <div class="six">
      <navBar></navBar>
      <div class="box">
        <div class="item">
          <img src="@/assets/img/six/one.png" alt="数字" class="num">
          <div class="pic"></div>
          <img src="@/assets/img/six/text1.png" alt="文字" class="text">
        </div>
        <div class="item">
          <img src="@/assets/img/six/two.png" alt="数字" class="num">
          <div class="pic"></div>
          <img src="@/assets/img/six/text2.png" alt="文字" class="text">
        </div>
        <div class="item">
          <img src="@/assets/img/six/three.png" alt="数字" class="num">
          <div class="pic"></div>
          <img src="@/assets/img/six/text3.png" alt="文字" class="text">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import navBar from '@/components/navBar/navBar.vue'
</script>

<style src="@/assets/css/six.css"></style>
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