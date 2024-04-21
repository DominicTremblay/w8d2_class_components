class Pet {
  constructor(name, age, breed, color) {
    this._name = name;
    this._age = age;
    this._breed = breed;
    this._color = color;
  }

  displayPet() {
    console.log(`Name: ${this._name}, Age: ${this._age}`);
  }
}

class Dog extends Pet {
  constructor(name, age, breed, color) {
    super(name, age, breed, color);
    this._superpower = 'Powerful Sense of Smell';
  }

  get superpower() {
    return this._superpower;
  }

  set superpower(superpower) {
    this._superpower = superpower;
  }

  displayPet() {
    console.log(`Name: ${this._name}, Age: ${this._age}`);
    console.log(`Superpower: ${this._superpower}`);
  }

  bark() {
    console.log(`${this._name} says Woof!`);
  }
}

class Cat extends Pet {
  constructor(name, age, breed, color) {
    super(name, age, breed, color);
    this._superpower = 'Night Vision';
  }

  get superpower() {
    return this._superpower;
  }

  set superpower(superpower) {
    this._superpower = superpower;
  }

  displayPet() {
    console.log(`Name: ${this._name}, Age: ${this._age}`);
    console.log(`Superpower: ${this._superpower}`);
  }

  meow() {
    console.log(`${this._name} says Meow!`);
  }
}

const dog = new Dog('Buddy', 3, 'Labrador', 'Golden');
const cat = new Cat('Whiskers', 5, 'Persian', 'Gray');

dog.displayPet();
cat.displayPet();

dog.bark();
cat.meow();

cat.superpower = 'agility'
console.log(cat.superpower)