window.onload = function() {
  //часть Задания 1
  resultElement = document.querySelector("#result");
  
  //часть Задания 2  
  const link = document.querySelector("#link");
  link.addEventListener("click", () => {
    console.log("link click");
  });
  link.addEventListener("mouseover", () => {
    console.log("link mouseover");
  });
  link.addEventListener("mouseout", () => {
    console.log("link mouseout");
  });
  link.addEventListener("blur", () => {
    console.log("link blur");
  });
  link.addEventListener("focus", () => {
    console.log("link focus");
  });
}

//Задание 1
let resultElement = null;
function task1(element) {
  resultElement.innerHTML = element.value;
}

//Задание 2
function task2(event) {
  event.preventDefault();
}

//Задание 3
let eventNames = [];
function task3() {
  eventNames = prompt("Введите имя события").split(",").map(eventName => {
    return eventName.trim();
  })
  alert("Выберите элемент");
  const elements = document.querySelector("#elements");
  elements.addEventListener("mouseover", addElementBorder);
  elements.addEventListener("mouseout", removeElementBorder, { capture: true });
  
  const removeElementsEventListeners = (event) => {
    const { target } = event;
    if (checkIsElementsChild(target)) {
      alert("Элемент выбран");
      removeElementBorder(event);
      eventNames.forEach(eventName => {
        target.addEventListener(eventName, () => {
          console.log(eventName);
        })
      });
      elements.removeEventListener("mouseover", addElementBorder);
      elements.removeEventListener("mouseout", removeElementBorder);
    }
  }
  elements.addEventListener("click", removeElementsEventListeners, { once: true });
}
function checkIsElementsChild(node) {
  return node?.parentNode.id === "elements";
}
function addElementBorder(event) {
  const { target } = event;
  event.stopPropagation();
  if (checkIsElementsChild(target)) {
    target.style.border = "2px solid black";
    target.style.backgroundColor = "skyblue";
    target.style.cursor = "pointer";
    target.style.width = "100px";
  }
}
function removeElementBorder(event) {
  const { target } = event;
  if (checkIsElementsChild(target)) {
    target.style.border = "";
    target.style.backgroundColor = "";
    target.style.cursor = "";
    target.style.width = "";
  }
}



