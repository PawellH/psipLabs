function ex4_1(elem) {
    elem.classList.remove("cl5");
    elem.classList.add("cl2");
}
function ex4_2(elem) {
    elem.classList.add("cl5");
    elem.classList.remove("cl2");
}
function ex5(elem) {
    elem.classList.add("cl3");
}
function ex6(elem) {
    elem.classList.add("cl4");
}
function ex7(elem) {
    elem.style.color = "yellow";
}
function ex8(elem) {
    elem.style.backgroundColor = "red";
}
function ex9(elem) {
    elem.style.fontStyle ="italic";
}
//ex10:
let result = 0;
function checkButtonIsNinber(element) {
    return element.classList.contains("button-number");// classList - классы элемента, contains ("c1") - является ли элемент потомок класса c1 (true/false)
}
function addValue(event) {
    const clickedElement = event.target; //ссылка на объект инициализатора события
    if (checkButtonIsNinber(clickedElement)) {
        const numberValue = Number(clickedElement.innerHTML);//Number(n) - конверт n в число, innerHTML - получает контент вложенный в тег html в виде строки
        result += numberValue;
    }
}
function displayResult() {
    alert(`Результат: ${result}`);
    result = 0;
}
//ex11:
function ex11(){
    var name = prompt("Введите своё имя");// текст модального окна
    if ((name != null) && (name != "") && (name != '')) {
        document.getElementById("name").innerHTML = "Привет, " + name;
    } else {
        document.getElementById("name").innerHTML = "Привет, незнакомец";
    }
}
//ex12:
function enlargeFontSize(element) {
    const fontSize = window.getComputedStyle(element).getPropertyValue('font-size');
    const initialFontSize = element.getAttribute("initial-font-size");
    if (!initialFontSize) {
        element.setAttribute("initial-font-size", fontSize); 
    }
    const fontSizeNumber = parseFloat(fontSize);
    if (!fontSizeNumber) {
        return;
    }
    const updatedFontSizeNumber = fontSizeNumber * 1.5;
    element.style.fontSize = `${updatedFontSizeNumber}px`;
}

function setInitialFontSize(element) {
    const initialFontSize = element.getAttribute("initial-font-size");
    if (!initialFontSize) {
        return;
    }
    element.style.fontSize = initialFontSize;
}
