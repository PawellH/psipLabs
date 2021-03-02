class Zoo {
  static pets = new Set();
  constructor(name, age, sound) {
    this.name = name;
    this.age = age;
    this.sound = sound;
    this.addPet();
  }
  
  makeSound() {
    console.log(`${this.name} (возраст: ${this.age}) звук: ${this.sound}`)
  }
  addPet() {
    Zoo.pets.add(this);
  }
  static getPetsNumberByType() {
    const petsNumberByType = {};
    this.pets.forEach(pet => {
      const existingPetNumberByType = petsNumberByType[pet.constructor.name];
      if (!existingPetNumberByType) {
        petsNumberByType[pet.constructor.name] = 1;
      } else {
        petsNumberByType[pet.constructor.name] = existingPetNumberByType + 1; 
      }
    });
    return petsNumberByType;
  }
}
  
class Animal extends Zoo {
  constructor(name, age, children, isMale, isPredator, sound) {
    super(name, age, sound);
    this.children = children;
    this.isMale = isMale;
    this.isPredator = isPredator;
    this.addPet();
  }
}

class Mammal extends Animal {
  constructor(
    name, age, children, isMale, isPredator,
    sound, woolColor, milkColor, numberOfEyes,
  ) {
    super(name, age, children, isMale, isPredator, sound);
    this.woolColor = woolColor;
    this.milkColor = milkColor;
    this.numberOfEyes = numberOfEyes;
    this.addPet();
  }
}
  
class Bird extends Animal {
  constructor(name, age, children, isMale, isPredator, sound, feathersColor) {
    super(name, age, children, isMale, isPredator, sound)
    this.feathersColor = feathersColor;
    this.addPet()
  }
}
  
const miniPig = new Animal("miniPig", 1, [], true, false, "хрью-хрью");
const dadPig = new Animal("dadPig", 7, [miniPig], true, false, "хрю-хрю");
const mumPig = new Animal("mumPig", 6, [miniPig], false, false, "хрюки-хрюки");

const lynx = new Mammal("lynx", 3, [], true, true, "рp", "серый", "белый", 2);
const wolf = new Mammal("wolf", 6, [], true, true, "ау", "серый", "серый", 2);

const bird = new Bird("голубь", 3, [], true, false, "гуру-гуру", "серый");

console.log(Zoo.pets);
console.log(Zoo.getPetsNumberByType());