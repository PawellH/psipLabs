function task1(event) {
  const textarea1 = document.getElementById("textarea1");
  event.preventDefault();
  setTimeout(() => {
    textarea1.dispatchEvent(new Event("focus"));
  }, 0);
  textarea1.dispatchEvent(new Event("click"));
}

window.onload = function(){
  textarea1.addEventListener("focus", () => {
    textarea1.value += "произошел фокус\n";
  });
  textarea1.addEventListener("click", () => {
    textarea1.value += "произошел клик\n";
  })
}

let arrImg = [
  "https://sun9-15.userapi.com/impg/lM-J8XmiTYg_x63Cdfk32o_EBCFytqoAZhGtog/_PkYs758MHU.jpg?size=500x500&quality=96&sign=34a62e22fd07507f370f8bbc173d6f57&type=album",
  "https://sun9-18.userapi.com/impg/iFmixUPKnOr8HykOb-ZcEZUzsAbpu5UtmTY2Mw/r-HiF-m9zEs.jpg?size=500x500&quality=96&sign=0cda884f111bb01a7819d05e1e2b9762&type=album",
  "https://sun9-63.userapi.com/impg/neVcQT6sGm9bhK8fftmCtpYpHOO3y7WZuq-j5w/FqKTmQBySMw.jpg?size=500x500&quality=96&sign=16735a2245fe2bc5bbfc215feb3b41b6&type=album",
  "https://sun9-75.userapi.com/impg/ePkirK2zICtSokmNxVDsnlw68bSJI_dB75RoLg/wxz9q3pAbcg.jpg?size=500x500&quality=96&sign=a1c2da2f984d9e9f8710c8c922b55688&type=album",
  "https://sun9-76.userapi.com/impg/0h9fbtScrSMB-uUULLr9j_RiGf8pQAfBTVP0Pw/E8yO0Z5Q10I.jpg?size=500x500&quality=96&sign=8ff21d7a09dd618c598478176a1e3c7e&type=album"
];
let iNextImg = 0;

function task2() {
  const interval = Number(document.querySelector("#interval")?.value);
  if (!interval || interval <= 0) {
    alert("Ошибка! Введите итервал равный больше нуля");
    return;
  }
  getNextImg(interval);
}

function getNextImg(interval) {
  setTimeout(() => {
    fetch(arrImg[iNextImg % arrImg.length])//получаем картинку
      .then(response => {
        return response.blob();//возвращаем обеъкт blob - путь и последовательность др. объектов
      })
      .then(imgBlob => {
        const imageSrc = URL.createObjectURL(imgBlob);//создание ссылки на объект
        const imageElement = document.querySelector("#image");
        imageElement.src = imageSrc;
        iNextImg++;
        getNextImg(interval);
      })
  }, interval * 1000)
}


