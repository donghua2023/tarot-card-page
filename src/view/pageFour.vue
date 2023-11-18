<template>
  <div class="four">
      <navBar></navBar>
      <div class="fourFlag" @click="fourClick">
        <img src="@/assets/img/four/leftFlag.png" alt="左边箭头" class="leftFlag">
        <img src="@/assets/img/four/text.png" alt="文字" class="text"  v-show="num === '1' ">
        <img src="@/assets/img/four/text2.png" alt="文字" class="text"  v-show="num === '2' ">
        <img src="@/assets/img/four/text3.png" alt="文字" class="text"  v-show="num === '3' ">
      </div>
      <div class="fourSlide">
        <img src="@/assets/img/four/slide.png" alt="修饰条" class="slide">
      </div>
      <div class="content">
        <template v-for="item in 12">
          <img src="@/assets/img/four/card.png" alt="卡片" class="img">
        </template>
      </div>
    </div>
</template>

<script setup>
import navBar from '@/components/navBar/navBar.vue'
import { useRouter } from 'vue-router';
import useNavBarStore from '@/store/navBar.js'
import { storeToRefs } from 'pinia'

const router = useRouter()
const fourClick = ()=> {
  router.push('/naviative')
}

const navBarStore = useNavBarStore()
const {num} = storeToRefs(navBarStore)
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
.content {
  width: 1920px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: filter 0.3s;
  .img{
    /* display: block;
    flex: 3; */
    width: 341px;
    height: 440px;
    margin: 60px;
  }
  .img:hover {
    filter: brightness(150%);
  }
}
</style>