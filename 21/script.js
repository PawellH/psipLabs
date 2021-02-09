//1 Вывод месяцев текущей пары года
function getMonthNames() {
  const month = [
    "декабрь", "январь", "февраль", 
    "март", "аперель", "май", 
    "июнь","июль", "август", 
    "сентябрь", "октябрь", "ноябрь"
  ];
  const iMonth = Math.floor((new Date().getMonth() + 1) / 4) * 3;
  return [
    month[iMonth], month[iMonth + 1], month[iMonth + 2]
  ]
}
console.log(`Задание №1: ${getMonthNames().join(", ")}`);

//2 Вывод возраста по введенной дате рождения
function getAge(birthday) {
  var ageMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
console.log(`Задание №2: ${getAge(new Date("1940-06-26"))}`);

//3 кнопки: вывод промежутка времени между кликами
let startTime;
function startTimer() {
  if (!startTime) {
    startTime = new Date().getTime();
  }
}

function stopTimer() {
  if (!startTime) {
    return;
  }
  const duration = new Date().getTime() - startTime;
  startTime = 0;
  console.log(`Задание №3: ${duration / 1000}`);
}
//4 часть 1 вариант 3: вывод расстояния между двумя введенными координатами 
function getDistanceBetweenPoints() {
  const x1 = prompt("Введите x1:");
  const y1 = prompt("Введите y1:");
  const x2 = prompt("Введите x2:");
  const y2 = prompt("Введите y2:");
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
console.log(`Задание №4 часть 1: Растояние между точками равно ${getDistanceBetweenPoints()}`);

//4 часть 2 вариант 3: конвертация всех символов введенной строки в верхний регистр. Возвращение исходной и конвертированной строки
function getUppercaseStr(str) {
  const strUpper = str.toUpperCase();
  return console.log(`Задание №4 часть 2: исходняя строка: ${str}, полученная: ${strUpper}`);
}
const str1 = "строка4";
getUppercaseStr(str1);

//5 Через прототип расширить встроенный объект Number методом isOdd(), который возвращает true, если число нечетное
Number.prototype.isOdd = function() {
  return Boolean(this % 2);
}
const n = 7;
console.log(`Задание №5: ${n.isOdd()}`);

//6 функция, получающая в качестве параметра переменную содержащую строку и с помощью регулярного выражения проверяет,
//начинается ли содержимое этой переменной с цифры или нет.
const str2 ="1ex";
function exersice6(str) {
  if(/^\d/.test(str)) return console.log(`Задание 6: строка "${str}" начинается с цифры`)
  else return console.log(`Задание 6: строка "${str}" не начинается с цифры`);
}
exersice6(str2);

