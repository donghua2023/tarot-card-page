<template>
  <div class="two" ref="containerRef">
    <navBar :isShow="false"></navBar>
  </div>
</template>

<script setup>
import navBar from '@/components/navBar/navBar.vue'
import * as THREE from 'three'
import CLOUD from 'vanta/dist/vanta.clouds.min'
import {ref, onMounted, onBeforeUnmount} from 'vue'
const containerRef = ref()

// let vantaEffect=ref(null);
// let vantaEffectStyle = ref(null);
// onMounted(() => {
//   vantaEffect.value = CLOUD({
//     el: containerRef.value,
// 		THREE: THREE,
//   });
//   vantaEffectStyle.value =  CLOUD({
// 		el: containerRef.value,
// 		/*以下为样式配置*/
// 		mouseControls: true,
// 		touchControls: true,
// 		gyroControls: false,
// 		minHeight: 200.0,
// 		minWidth: 200.0,
// 		scale: 1.0,
//     highlightColor: 0x64647a,
//     midtoneColor: 0x310606,
//     lowlightColor: 0x25547,
// 		baseColor: 0x251c1c
// 	});
// })
// onBeforeUnmount(()=>{
//   if(vantaEffect.value){
//     vantaEffect.value.destroy()
//   }
// })
</script>

<style src="@/assets/css/two.css"></style>
<style scoped>
.wanta {
  position: absolute;
  z-index: 9999; /* 设置一个比较大的z-index值 */
}
.contaiter {
  background: #000000;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>