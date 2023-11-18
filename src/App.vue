<script setup>

</script>

<template>
  <router-view  v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- <div class="contaiter">
    <div class="five">
      <navBar></navBar>
    </div>
  </div> -->
  <!-- <div class="contaiter">
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
  </div> -->
</template>

<style src="./assets/css/five.css"></style>
<style scoped>
/* .scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 1s ease;
}

.scale-slide-enter-from {
  left: -100%;
}

.scale-slide-enter-to {
  left: 0%;
}

.scale-slide-leave-from {
  transform: scale(1);
}

.scale-slide-leave-to {
  transform: scale(1.1);
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
