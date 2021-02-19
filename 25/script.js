//Задание 2
function getNextTextareaColor(currentColor) {
  const colors = ["red", "blue"];
  const iColor = colors.findIndex((colorToSwitch) => {
    return colorToSwitch === currentColor;
  });
  const newIColor = iColor + 1;
  const newICyclColor = newIColor % colors.length;
  return colors[newICyclColor];
}

window.onload = function() {
  //Задание 2 с button
  const button = document.querySelector("form > button");
  const textarea = document.querySelector("form > textarea");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    textarea.value = "текстовое поле";
     button.addEventListener("click", (event) => {
      event.preventDefault();
      textarea.style.color = getNextTextareaColor(textarea.style.color);
    })
  }, { once: true })

  //Задание 3 с button-reset
  const inputReset = document.querySelector("input[type=reset]");
  inputReset.addEventListener("click", () => {
    const inputString = prompt("Введите строку для сравнения");
    alert(inputString === textarea.value);
  });

  //Задание 4 с button-submit
  const inputSubmit = document.querySelector("input[type=submit]");
  inputSubmit.addEventListener("dblclick", () => {
    const radioButtons = document.querySelector("#radio-buttons :checked")?.parentElement;
    const checkboxes = [...document.querySelectorAll("#checkboxes :checked")].map(element => {
      return element?.parentElement;
    });
    const selectEl = document.querySelector("#countries :checked:not(:disabled)")?.parentElement;
    const formElements = [radioButtons, ...checkboxes, selectEl];
    
    const result = document.getElementById("result");
    if (radioButtons && checkboxes.length > 0
      && selectEl) {
        result.innerHTML = formElements.map(checkedElement => {
          return checkedElement.outerHTML;
        }).join("");
      } else {
        if (!radioButtons) {
          result.innerHTML += `Выберите бургер: ${document.querySelector("#radio-buttons").outerHTML}`;
        }
        if (checkboxes.length === 0) {
          result.innerHTML += `Выберите картошечку: ${document.querySelector("#checkboxes").outerHTML}`;
        }
        if (!selectEl) {
          result.innerHTML += `Выберите напиток: ${document.querySelector("#countries").outerHTML}`;
        }
      }
      result.style.border="1px solid black";
      result.style.backgroundColor="red";
  });

  //Задание 5
  button.addEventListener("click", () => {
    const clickEvent = new Event("click")
    inputSubmit.dispatchEvent(clickEvent);
  })
}
