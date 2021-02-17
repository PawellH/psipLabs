function getWidthWindow(){
  return alert(`Ширина окна браузера = ${window.screen.availWidth}px`);
}
function getVersionBrowser() {
  setTimeout(() => {
    alert("Версия браузера: " + navigator.appVersion);
  }, 5000);
}