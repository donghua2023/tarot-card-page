<template>
  <div class="three">
    <navBar></navBar>
    <div class="content" @click.stop="contentClick">
      <div class="fuhao fuhaoL" @click.stop="leftClick">{{ "<" }}</div>
      <div class="cardBox">
        <div class="cardItem" v-for="(item, index) in imgList" :key="index">
          <img
            :src="getImageUrl(item)"
            alt="卡片"
            class="img"
            :class="{ active: imgNum === index, blure: imgNum !== index }"
            @click.stop="onClick(index)"
          />
        </div>
      </div>
      <div class="fuhao fuhaoR" @click="rightClick">
        {{ ">" }}
      </div>
    </div>
    <div>
      <img src="@/assets/img/three/bottomFlower.png" alt="bottomFlower" class="img" />
    </div>
    <div class="bottomBtn">
      <img
        src="@/assets/img/three/one.png"
        alt="one"
        class="img"
        @click="imgClick('1')"
      />
      <img
        src="@/assets/img/three/two.png"
        alt="two"
        class="img"
        @click="imgClick('2')"
      />
      <img
        src="@/assets/img/three/three.png"
        alt="three"
        class="img"
        @click="imgClick('3')"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useNavBarStore from "@/store/navBar.js";

const imgList = ref([
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
  "/src/assets/img/four/card.png",
]);

import navBar from "@/components/navBar/navBar.vue";

const navBarStore = useNavBarStore();
const router = useRouter();
const imgClick = (v) => {
  navBarStore.numChange(v);
  router.push("/team");
};
const imgNum = ref(null);
const onClick = (i) => {
  imgNum.value = i;
};
const contentClick = () => {
  imgNum.value = 200;
};

function getImageUrl(name) {
  return new URL(`${name}`, import.meta.url).href;
}
const leftClick = () => {
  const img = imgList.value.pop();
  imgList.value.unshift(img);
};
const rightClick = () => {
  const img = imgList.value.shift();
  imgList.value.unshift(img);
};
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
