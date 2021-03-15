// 1) создание класса
class Cinema {
  constructor (title, address, phone, number_halls) {
    this.title = title;
    this.address = address;
    this.phone = phone;
    this.number_halls = Number(number_halls);
  }
}
// 2) создание объекта через диалоговое окно
const title = prompt("название кинотеатра","Берестье");
const address = prompt("адрес кинотеатра","просп. Газеты Правда, 25, Минск");
const phone = prompt("телефон кинотеатра","+375 17 368-97-76");
const number_halls = prompt("количестов кинозалов кинотеатра",2);
const cinema1 = new Cinema(title,address, phone, number_halls);
// 3) преобразование в json строку
cinema1Json = JSON.stringify(cinema1);
// 5) преобразование json строки и исключение свойства !string типа
cinema1Obj = JSON.parse(cinema1Json);
//  метод возвращает массив свойств
const newCinema1Obj = Object.entries(cinema1Obj).reduce((acc, [key, value]) => {
  if (typeof(value)  === "string") {
    acc[key] = value;
  }
  return acc;
}, {});
// 6) строковую json-переменная
const jsonStr = `{
  "title": "Берестье-2",
  "address": "просп. Газеты Правда, 25, Минск",
  "phone": "+375 17 368-97-76",
  "number_halls": 2
}`;
// 4) оторбражение в html
window.onload = function() {
  document.querySelector("#divShowJson").innerHTML = cinema1Json + "<br>" + JSON.stringify(newCinema1Obj) + "<br>"+ jsonStr;
}

