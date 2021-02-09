let [number1, number2] = [0, 0];

enterName();
askNumber();

function enterName() {
  const result = prompt("Введи имя:");
  if (result) {
    alert(`Привет, ${result}.`);
    askAge1(result);
  } else {
    alert("Такого имени не существует.");
  }
}

function askAge1(name) {
  const age = prompt("Возраст:");
  if (!age) {
    return;
  }
  let askMessage = "";
  let outputMessage = "";
  if (age >= 2 && age <= 5) {
    askMessage = "Сад:"
    outputMessage = "Сад ";
  }
  if (age >= 6 && age <= 16) {
    askMessage = "Школа:"
    outputMessage = "Школа ";
  }
  if (age >= 17 && age <= 21) {
    askMessage = "Учебное заведение:"
    outputMessage = "Учебное заведение ";
  }
  if (age >= 22 && age <= 65) {
    askMessage = "Место работы:"
    outputMessage = "Место работы ";
  }
  if (age > 66) {
    outputMessage = "На заслуженном отдыхе"
  }
  if (askMessage) {
    const result = prompt(askMessage);
    if (!result) {
      return;
    }
    alert(`${name}; ${outputMessage} ${result}`);
  }
}

function enterNumbers() {
  number1 = prompt("Первое число:");
  number2 = prompt("Второе число:");
}

function multiply() {
  alert(`${number1 * number2}`);
}

function add() {
  alert(`${Number(number1) + Number(number2)}`);
}

function askNumber() {
  const number = Number(prompt("Введите число в интервале от 0 до 100"));
  debugger;
  const isValidNumber = number && number <= 100 && number >= 0;
  if (!isValidNumber) {
    return;
  }
  const range = Math.floor(number / 10);
  const rangeMessage = `Диапазон: ${range * 10}-${(range + 1) * 10}`
  alert(rangeMessage)
}