// 设计稿基准宽度
const baseWidth = 1920;
const baseHeight = 1080;

// 基准大小
const baseSize = 192; // 以设计稿宽度的1/10（基础分辨率 1920 * 1080）

// 设置 rem 函数
function setRem() {
  let scale; 
  // 判断横竖屏状态
  if (window.innerWidth < window.innerHeight) {
    // 竖屏
    scale = window.innerWidth / baseHeight;
  } else {
    // 横屏
    scale = window.innerWidth / baseWidth;
  }
  // 限制最大缩放比例为2倍
  scale = Math.min(scale, 2); 
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = `${baseSize * scale}px`;
}

// 初始化
setRem();

// 监听窗口大小变化，重新设置 rem
window.onresize = () => {
  setRem();
};
