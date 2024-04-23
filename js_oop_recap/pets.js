class Pet {
  constructor(name, breed, age, color) {
    this._name = name;
    this._breed = breed;
    this._age = age;
    this._color = color;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  displayPet() {
    console.log(
      `Name: ${this._name}, Breed: ${this._breed}, Age: ${this._age}, Color: ${this._color}`
    );
  }
}

class Dog extends Pet {
  constructor(name, breed, age, color) {
    super(name, breed, age, color);
    this._superpower = 'Amazing sense of smell';
  }

  displayPet() {
    super.displayPet();
    console.log(`Superpower: ${this._superpower}`)
  }
}

class Cat extends Pet {
  constructor(name, breed, age, color) {
    super(name, breed, age, color);
    this._superpower = 'Night Vision';
  }

  displayPet() {
    super.displayPet();
    console.log(`Superpower: ${this._superpower}`)
  }
}

const dog = new Dog('Buddy', 'Labrador', 3, 'Golden');
dog.displayPet();
const cat = new Cat('Whisky', 'Siamese', 2, 'blue')
cat.displayPet();