// Prototype Model

// constructor function
function Plane(color, brand) {
  this.color = color;
  this.brand = brand;
  this.drive = () => {
    console.log("Plane is flying" + " " + this.color);
  };
}

// instance of Plane
const planeOne = new Plane("blue", "airbus");
console.log(planeOne);

console.log(helicopterOne);

// invoke method
planeOne.drive();

// we will see inheritance of prototype model in next lesson..
