let dayNumber;
const arr = [1,2];
//1
function enterNumbers() {
    const number1 = prompt("Enter num 1") || 0;
    const number2 = prompt("Enter num 2") || 0;
    alert(Number(number1) + Number(number2));
}
//2.1
function enterDay() {
  const localDayNumber = prompt("День:");
  dayNumber = localDayNumber;
}
//2.2
function getDayOfWeek() {
  const daysNumbersObject = {
    1: "ПН",
    2: "ВТ",
    3: "СР",
    4: "ЧТ",
    5: "ПТ",
    6: "CБ",
    7: "ВС"
  }
  alert(`День недели: ${daysNumbersObject[dayNumber]}`);
  return daysNumbersObject[dayNumber];
}
//3
function addNumberToArr() {
  const element = prompt("Новый элемент:");
  arr.push(Number(element));
  const avg = findAverage(arr);
  const doesArrayContainAverage = checkDoesArrayContainAverage(arr, avg);
  alert(`Элемент массива равен ср.знач: ${doesArrayContainAverage}`)
}
function findAverage(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] !== undefined){
        sum += array[i];
    } 
  }    
  return sum / array.length;
}
function checkDoesArrayContainAverage(array, average) {
  return array.includes(average);
}
//4)
function reverseString(str){
  const reversedString = [...str].reverse().join("");
  alert(`reverseString: ${reversedString}`);
} 
//5)
const display = (fio, age) => {
  if (age < 18) {
    alert(`Привет, ${fio}.`);
  } else if (age < 30) {
    alert(`Как поживаете, ${fio}?`);
  } else if (age < 40) {
    alert(`Добрый день, ${fio}.`);
  } else if (age > 40) {
    alert(`Как себя чувствуете, ${fio}?`);
  }
}
function displayGreetings(fio, age, callback) {
  callback(fio, age);
}

//1)
//enterNumbers()

//2)
//enterDay()
//getDayOfWeek()

//3)
addNumberToArr()

//4)
//reverseString("Привет")

//5)
//displayGreetings("Гончаров П.В.", 19, display)
