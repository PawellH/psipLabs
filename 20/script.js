//1)способы создания объектов 
const Cafe = {
  name: "",
  adress: "",
  avgPrice: "",
  places: "",
  displayGreetings(){
    const name = prompt("Ваше имя:");
    alert(`Привет, ${name} спасибо, что посетили наше кафе по адресу ${this.adress}`);
  }
}
const cafe3 = Object.create(Cafe);

const cafe1 = {
  name: "Цiмохiн закуток",
  adress: "Минск, ул. Есенина, 6",
  avgPrice: 30,
  kitchen: 50
};

const cafe2 = new Object();
cafe2.name = "Цімохін двор";
cafe2.adress = "Минск, ул. Притыцкого, 74"
cafe2.avgPrice = 70;
cafe2.places = 30;
//2) запрет на изменение, изменение и удалние, вывод в циклах
Object.defineProperty(cafe2, "name",{
  value:"Цімохін двор",
  writable: false
});
Object.defineProperty(cafe2, "adress",{
  value: "Минск, ул. Притыцкого, 74",
  configurable: false
});
Object.defineProperty(cafe2, "avgPrice",{
  value: 70,
  enumerable: false
});
//3) Классы
class FairyTailPerson{
  constructor(fairytale){
      this.fairytale = fairytale;
  }

  displayName(){
      alert(this.fairytale);
  }
}

class Person extends FairyTailPerson{
  constructor(isPositive, fairytale){
      super(fairytale);
      this.isPositive = isPositive;
  }

  displayName(){
      alert(`${this.isPositive ? "Положительный" : "Отрицательный"} персонаж из ${this.fairytale}.`);
  }
}
const wolf = new Person(false, "Красная шапочка");
const pig1 = new Person(true, "3 поросенка");
//4)
wolf.displayName();
pig1.displayName();
