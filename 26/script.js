//Задание 1
function changeRadio(event) {
  const { target } = event;
  if (target?.parentElement.id === "div1") {
    let activeLabel = null;
    switch (target.tagName.toLowerCase()) {
      case "input":
        activeLabel = document.querySelector(`label[for='${target.id}']`);
        break;
      default:
        activeLabel = target;
        break;
    }
    const labels = document.querySelectorAll("#div1 > label");
    [...labels].forEach(label => {
      label.style.color = "";
    })
    activeLabel.style.color = "red";
  }
}

//Задание 2
function createList() {
  const listsContainer = document.querySelector("#listDiv");
  const listContainer = document.createElement("div");

  const list = document.createElement(`${checkIsNewListOrdered() ? "ol": "ul"}`);
  listContainer.appendChild(list);

  const actions = document.createElement("div");

  const addToStartButton = document.createElement("button");
  addToStartButton.addEventListener("click", () => addNewItemToList(list, true));
  addToStartButton.innerHTML = "Добавить в начало списка";
  actions.appendChild(addToStartButton);

  const addToEndButton = document.createElement("button");
  addToEndButton.addEventListener("click", () => addNewItemToList(list));
  addToEndButton.innerHTML = "Добавить в конец списка";
  actions.appendChild(addToEndButton);

  const changeColorButton = document.createElement("button");
  changeColorButton.addEventListener("click", () => changeColor(list))
  changeColorButton.innerHTML = "Изменить цвет списка";
  actions.appendChild(changeColorButton);

  listContainer.appendChild(actions);
  listsContainer.appendChild(listContainer);
}

function checkIsNewListOrdered() {
  const newList = document.querySelector("#new-list");
  const checkedElement = newList.querySelector(":checked");
  return checkedElement.value === "ordered"
}

function addNewItemToList(list, shouldAddToStart) {
  const newItemText = prompt("Новый пункт списка:");
  const newItem = document.createElement("li");
  newItem.innerText = newItemText;
  if (shouldAddToStart) {
    list.prepend(newItem);
  } else {
    list.appendChild(newItem);
  }
}

function changeColor(list) {
  [...list.children].forEach((child, index) => {
    if (!checkIsNumberEven(index)) {
      child.style.color = "lime"
    } else {
      child.style.color = "black";
    }
  })
}
function checkIsNumberEven(number) {
  return number % 2;
}

//Задание 3
let flag = false;
function changeStyle() {
  const styleSheets = [...document.querySelectorAll("head > link[rel=stylesheet]")];
  const lightStylesheet = styleSheets.find(stylesheet => {
    return stylesheet.title === "light"
  });
  const darkStylesheet = styleSheets.find(stylesheet => {
    return stylesheet.title === "dark"
  });
  if(flag === true) {
    lightStylesheet.disabled = false;
    darkStylesheet.disabled = true;
    flag = false;
  }
  else{
    lightStylesheet.disabled = true;
    darkStylesheet.disabled = false;
    flag = true;
  }
}

