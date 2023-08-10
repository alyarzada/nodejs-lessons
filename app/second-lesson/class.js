// Class model
class Car {
  constructor(color) {
    this.color = color;
  }

  drive() {
    console.log(`Car is driving ${this.color}`);
  }
}

// instances of Car class
const carOne = new Car("red");
const carTwo = new Car("green");

// invoke drive method
carOne.drive();

// Inheritance in Class model
class Plane extends Car {
  constructor(color, brand) {
    super(color);
    this.brand = brand;
  }

  // override drive method
  drive() {
    console.log("Plane is flying" + " " + this.color);
  }
}

// Instance of Plane class
const planeOne = new Plane("blue", "airbus");
console.log(planeOne);

// invoke drive method
planeOne.drive();
