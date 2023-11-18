<template>
  <div class="container">
    <img src="@/assets/img/hudie.png" alt="蝴蝶" class="img" @mouseover="flapWings" @mouseout="stopFlapping" @click="imgClick" ref="butterflyRef">
    <img :src="thatImg" alt="文字" class="textImg" @mouseenter="changeImage" @mouseleave="resetImage">
  </div>
</template>

<script setup>
import {ref} from 'vue'
const butterflyRef = ref();

import { useRouter } from 'vue-router';
const thatImg = ref('')
thatImg.value = getImageUrl('../assets/img/text.png')
const flapWings = () => {
  const butterfly = document.querySelector('.img');
  butterfly.style.transform = 'scaleX(-1)';
  butterfly.style.transform = 'scaleX(0.4)';
  thatImg.value = getImageUrl('../assets/img/textLight.png')
}
const stopFlapping = ()=> {
  const butterfly = document.querySelector('.img');
  butterfly.style.transform = 'scaleX(1)';
  thatImg.value = getImageUrl('../assets/img/text.png')
}

const router = useRouter()
const imgClick = () => {
  const butterfly = butterflyRef.value;
  butterfly.style.transition = "top 1.5s";
  butterfly.style.top = "-150px";
  router.push('/index')
}
function getImageUrl(name) {
  return new URL(`${name}`, import.meta.url).href;
}

const changeImage = ()=> {
  thatImg.value = getImageUrl('../assets/img/textLight.png')
}
const resetImage = ()=> {
  thatImg.value = getImageUrl('../assets/img/text.png')
}


</script>

<style scoped>
.container {
  width: 1920px;
  height: 100vh;
  background: url('@/assets/img/one/bigBg.png') center no-repeat;
  background-size: 100% 100vh;
  background-color: #000000!important;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  .img {
    display: block;
    width: 264.39px;
    height: 175.25px;
    position: relative;
    top: 600px;
    transition: transform 2s;
  }
  .textImg {
    z-index: 9999;
    width: 149px;
    height: 60px;
    position: relative;
    top: 650px;
    transition: filter 0.3s; /* 添加过渡效果 */
  }
  .textImg:hover {
    filter: brightness(250%);
  }
  .img:hover {
    filter: brightness(150%); /* 设置亮度 */
  }
}
</style>