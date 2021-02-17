let resultElement = null;
let eventNames = [];

function checkIsElementsChild(node) {
  return node?.parentNode.id === "elements";
}

function addElementBorder(event) {
  const { target } = event;
  event.stopPropagation();
  if (checkIsElementsChild(target)) {
    target.style.border = "1px solid red";
    target.style.cursor = "pointer";
  }
}

function removeElementBorder(event) {
    const { target } = event;
    if (checkIsElementsChild(target)) {
      target.style.border = "";
      target.style.cursor = "";
    }
}

window.onload = function() {
  resultElement = document.querySelector("#result");
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

function addEvent() {
  eventNames = prompt("Event names:").split(",").map(eventName => {
    return eventName.trim();
  })
  alert("Choose element");
  const elements = document.querySelector("#elements");
  elements.addEventListener("mouseover", addElementBorder);
  elements.addEventListener("mouseout", removeElementBorder, { capture: true });
  const removeElementsEventListeners = (event) => {
    const { target } = event;
    if (checkIsElementsChild(target)) {
      alert("Element was chosen");
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

function writeText(element) {
  resultElement.innerHTML = element.value;
}

function task2(event) {
  event.preventDefault();
}