let zooPets = [];
let countZoopet= 0; 
let countMammal = 0; 
let countBird = 0;

class ZooPet {  
  constructor(name, age, sound, children, isMale) {
    this.name = name;
    this.age = age;
    this.sound = sound;
    this.children = children;
    this.isMale = isMale;
    countZoopet++;
    zooPets.push(this);
  }

  showZooPetInfo() {
    console.log(`${this.name}(${this.age}): ${this.sound}`)
  }
  static getNumberZooPetsByType() {
    const numberZooPetsByType = {};
    zooPets.forEach(zooPet => {
      const existingNumberZooPetByType = numberZooPetsByType[zooPet.constructor.name];
      if(existingNumberZooPetByType !== undefined) {
        numberZooPetsByType[zooPet.constructor.name] = existingNumberZooPetByType + 1;
      } 
      else{
        numberZooPetsByType[zooPet.constructor.name] = 1;
      }  
    });
    
    return numberZooPetsByType;
  }
}
  
class Mammal extends ZooPet {
  constructor(
    name, age, sound, children, isMale,
    woolColor
  ) {
    super(name, age, sound, children, isMale);
    this.woolColor = woolColor;
    countMammal++;  
  }
}
  
class Bird extends ZooPet {
  constructor(name, age, sound, children, isMale,
    feathersColor
  ) {
    super(name, age, sound, children, isMale);
    this.feathersColor = feathersColor;
    countBird++;
  }
}
  
const seaUrchin = new ZooPet("Ежик", 20, "иии");

const childLion = new Mammal("Симба", 1, "рь-pь-рь", [], true, "оранжевый");
const dadLion = new Mammal("Муфаса", 8, "рpр-ррр", [childLion], true, "оранжевый");
const mumLion = new Mammal("Сараби", 8, "рpр", [childLion], false, "оранжевый");

const penguin1 = new Bird("Шкипер", 7, "Улыбаемся и машем, парни.", [], true, "черно-белый");
const penguin2 = new Bird("Ковальски", 7, "Не стоит недооценивать простую силу пингвиньей неотразимости.", [], true, "черно-белый");
const penguin3 = new Bird("Рико", 7, "Кабум! Кабум! Кабум!", [], true, "черно-белый");
let penguin4 = new Bird("Рядовой", 5, "Меня запеченькали!", [], true, "черно-белый");

penguin1.showZooPetInfo();
console.log(zooPets);
console.log(`countZoopet:${countZoopet - countMammal - countBird}, countMammal:${countMammal}, countBird:${countBird}`);
console.log(ZooPet.getNumberZooPetsByType());