function setRem() {
  // 默认设计稿尺寸是750px 实现动态设置fontsize
  const width = document.documentElement.clientWidth;
  let size = (width / 750) * 100;
  //低于1200就认为是移动端
  document.documentElement.style.fontSize = (width > 1200 ? 100 : size) + "px";
}
setRem();
window.addEventListener("resize", setRem);
