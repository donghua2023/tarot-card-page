<template>
  <div class="container">
    <div class="one">
      <img src="@/assets/img/indexBtn.png" alt="主页按钮" class="img">
      <img :src="isActive === '/pageOne' ? getImageUrl('btnA') : getImageUrl('btnA')" alt="A" class="imgA" @click="imgClick('/pageOne')">
      <img :src="isActive === '/pageTwo' ? getImageUrl('btnB') : getImageUrl('btnB')" alt="B" class="imgB" @click="imgClick('/pageTwo')">
      <img :src="isActive === '/pageThree' ? getImageUrl('btnC') : getImageUrl('btnC')" alt="C" class="imgC" @click="imgClick('/pageThree')">
      <img :src="isActive === '/pageFour' ? getImageUrl('btnD') : getImageUrl('btnD')" alt="D" class="imgD" @click="imgClick('/pageFour')">
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import useNavBarStore from '@/store/navBar.js'
import { storeToRefs } from 'pinia';

const route = useRoute()
const router = useRouter()
const navBarStore = useNavBarStore()
const { isActive } = storeToRefs(navBarStore)

const imgClick = (value) =>  {
  if(route.path === value) return
  isActive.value = value
  router.push(value)
}
function getImageUrl(name) {
  return new URL(`../assets/img/one/${name}.png`, import.meta.url).href;
}
</script>

<style scoped>
.contaiter {
  background-color: #000000!important;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.one {
  width: 1920px;
  height: 100vh;
  background: url('@/assets/img/one/box.png') center no-repeat;
  background-size: 1800.43px 900px;

  .img {
    width: 222px;
    height: 72px;
    margin-top: 146px;
    margin-left: 172px;
  }

  .imgA {
    position: absolute;
    width: 221.34px;
    height: 85.51px;
    left: 1326px;
    top: 322px;
    transition: filter 0.3s; /* 添加过渡效果 */
  }

  .imgB {
    position: absolute;
    width: 335.68px;
    height: 59.33px;
    left: 1326px;
    top: 476.51px;
    transition: filter 0.3s; /* 添加过渡效果 */
  }
  .imgB:hover {
    filter: brightness(250%); /* 改变亮度或其他样式以达到高亮效果 */
  }

  .imgC {
    position: absolute;
    width: 357.58px;
    height: 64.93px;
    left: 1326px;
    top: 615.83px;
    transition: filter 0.3s; /* 添加过渡效果 */
  }
  .imgC:hover {
    filter: brightness(250%); /* 改变亮度或其他样式以达到高亮效果 */
  }

  .imgD {
    position: absolute;
    width: 231.55px;
    height: 65.64px;
    left: 1326px;
    top: 754.76px;
    transition: filter 0.3s; /* 添加过渡效果 */
  }
  .imgD:hover {
    filter: brightness(250%); /* 改变亮度或其他样式以达到高亮效果 */
  }
}
</style>