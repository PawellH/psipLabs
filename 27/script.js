class ZooPet {
  static zooPets = [];
  constructor(name, age, sound) {
    this.name = name;
    this.age = age;
    this.sound = sound;
    this.addZooPet();
  }

  addZooPet() {
    ZooPet.zooPets.push(this);
  }
  showZooPetInfo() {
    console.log(`${this.name}(${this.age}): ${this.sound}`)
  }
  static getNumberZooPetsByType() {
    const numberZooPetsByType = {};
    this.zooPets.forEach(zooPet => {
      const existingNumberZooPetByType = numberZooPetsByType[zooPet.constructor.name];
      numberZooPetsByType[zooPet.constructor.name] = existingNumberZooPetByType ? existingNumberZooPetByType + 1 : 1;
    });
    return numberZooPetsByType;
  }
}
  
class Animal extends ZooPet {
  constructor(name, age, sound, children, isMale) {
    super(name, age, sound);
    this.children = children;
    this.isMale = isMale;
  }
}

class Mammal extends Animal {
  constructor(
    name, age, sound, children, isMale,
    woolColor
  ) {
    super(name, age, sound, children, isMale);
    this.woolColor = woolColor;  
  }
}
  
class Bird extends Animal {
  constructor(name, age, sound, children, isMale,
    feathersColor
  ) {
    super(name, age, sound, children, isMale);
    this.feathersColor = feathersColor;
  }
}
  
const seaUrchin = new Animal("Ежик", 20, "иии", [], true);

const childLion = new Mammal("Симба", 1, "рь-pь-рь", [], true, "оранжевый");
const dadLion = new Mammal("Муфаса", 8, "рpр-ррр", [childLion], true, "оранжевый");
const mumLion = new Mammal("Сараби", 8, "рpр", [childLion], false, "оранжевый");

const penguin1 = new Bird("Шкипер", 7, "Улыбаемся и машем, парни.", [], true, "черно-белый");
const penguin2 = new Bird("Ковальски", 7, "Не стоит недооценивать простую силу пингвиньей неотразимости.", [], true, "черно-белый");
const penguin3 = new Bird("Рико", 7, "Кабум! Кабум! Кабум!", [], true, "черно-белый");
const penguin4 = new Bird("Шкипер", 5, "Меня запеченькали!", [], true, "черно-белый");

penguin1.showZooPetInfo();
console.log(ZooPet.zooPets);
console.log(ZooPet.getNumberZooPetsByType());