// 基准大小
const baseSize = 192; // 以设计稿宽度的1/10（基础分辨率 1920 * 1080）
// 设置 rem 函数
function setRem() {
  let scale = document.body.clientWidth / 1920; // 当前页面宽度相对于 1920 宽的缩放比例，可根据自己需要修改
  console.log(scale, '----')
  // 兼容横竖屏
  if (document.body.clientWidth < document.body.clientHeight) {
    //   竖屏
    scale = document.body.clientWidth / 1080;
  }
  if (document.body.clientWidth > document.body.clientHeight) {
    //   横屏
    scale = document.body.clientWidth / 1920;
  }
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = `${baseSize * Math.min(scale, 2)}px`;
}

// 初始化
setRem();
// 改变窗口时重新设置rem
window.onresize = () => {
  setRem();
};