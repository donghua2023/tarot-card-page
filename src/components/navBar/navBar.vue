<template>
  <div class="navBar">
    <div class="navLeft" v-if = 'isShow'>
      <img src="@/assets/img/Navigation-bar/left.png" alt="none" class="none">
    </div>
    <div class="navLeft" v-if = '!isShow'></div>
    <div class="nav"  @mousemove.stop="onMouseMove" @mouseleave.stop="onMouseLeave">
      <img :src="isActive !== '/pageOne' ? getImageUrl('one') : getImageUrl('one_active')" alt="none" class="none" @click="imgClick('/pageOne')">
      <img :src="isActive !== '/pageTwo' ? getImageUrl('two') : getImageUrl('two_active')" alt="ntwo" class="ntwo" @click="imgClick('/pageTwo')">
      <img :src="isActive !== '/pageThree' ? getImageUrl('three') : getImageUrl('three_active')" alt="nthree" class="nthree" @click="imgClick('/pageThree')">
      <img :src="isActive !== '/pageFour' ? getImageUrl('four') : getImageUrl('four_active')" alt="nfour" class="nfour" @click="imgClick('/pageFour')">
      <div class="highlight" :style="{ left: highlightLeft + 'px', width: capsuleW + 'px' }" v-show="isLightShow"></div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import useNavBarStore from '@/store/navBar.js'
import { storeToRefs } from 'pinia'
import {ref} from 'vue'
defineProps({
  isShow: {
    type: Boolean,
    default: true
  }
})

const route = useRoute()
const router = useRouter()

const navBarStore = useNavBarStore()
navBarStore.reloadIsActive(route.path)
const { isActive } = storeToRefs(navBarStore)
const highlightLeft = ref(0)
const isLightShow = ref(false)
const capsuleW = ref(0)

const imgClick = (value) =>  {
  if(route.path === value) return
  isActive.value = value
  router.push(value)
}

const onMouseMove = (event) => {
  const nav = event.currentTarget;
  const navRect = nav.getBoundingClientRect();
  const navItems = Array.from(nav.querySelectorAll('img'));
  const navItemWidth = navRect.width / navItems.length;
  const index = Math.floor((event.clientX - navRect.left) / navItemWidth);
  if(index === 0) {
    capsuleW.value = navItems[index].width * 1.5
    highlightLeft.value = index * navItemWidth;
  } else if(index === 1) {
    capsuleW.value = navItems[index].width * 1.4
    highlightLeft.value = index * navItemWidth * 0.85;
  } else if(index === 2) {
    capsuleW.value = navItems[index].width * 1.2
    highlightLeft.value = index * navItemWidth * 1.02;
  } else if(index === 3) {
    capsuleW.value = navItems[index].width * 1.5
    highlightLeft.value = index * navItemWidth * 1.05;
  }
  isLightShow.value = true
}
const onMouseLeave = (event) => {
  highlightLeft.value = 0;
  isLightShow.value = false
}

function getImageUrl(name) {
  return new URL(`../../assets/img/Navigation-bar/${name}.png`, import.meta.url).href;
}
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
  transition: transform 0.3s ease;
  .none {
    width: 92.77px;
    height: 53.71px;
    z-index: 9999;
  }
  .ntwo {
    width: 165.19px;
    height: 37.26px;
    z-index: 9999;
  }
  .nthree {
    width: 181.26px;
    height: 40.78px;
    z-index: 9999;
  }
  .nfour {
    width: 99.87px;
    height: 41.23px;
    z-index: 9999;
  }  
}
.highlight {
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 50px;
  width: 200px; /* 胶囊宽度 */
  height: 80px; /* 胶囊高度 */
  background-color: rgba(128, 128, 128, 0.5); /* 胶囊颜色 */
  transition: transform 8s; /* 添加过渡效果 */
}
</style>
