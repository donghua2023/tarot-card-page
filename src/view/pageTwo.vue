<template>
  <div class="two">
      <navBar :isShow="false"></navBar>
    </div>
</template>

<script setup>
import navBar from '@/components/navBar/navBar.vue'
</script>

<style src="@/assets/css/two.css"></style>
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