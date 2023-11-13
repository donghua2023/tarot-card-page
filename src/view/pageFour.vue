<template>
  <div class="four">
      <navBar></navBar>
      <div class="fourFlag">
        <img src="@/assets/img/four/leftFlag.png" alt="左边箭头" class="leftFlag">
        <img src="@/assets/img/four/text.png" alt="文字" class="text">
      </div>
      <div class="fourSlide">
        <img src="@/assets/img/four/slide.png" alt="修饰条" class="slide">
      </div>
    </div>
</template>

<script setup>
import navBar from '@/components/navBar/navBar.vue'
</script>

<style src="@/assets/css/four.css"></style>
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