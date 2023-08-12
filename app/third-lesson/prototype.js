// base constructor
function Plane(color, brand) {
  this.color = color;
  this.brand = brand;
}

// add methods to prototype object
Plane.prototype.fly = () => {
  return `Plane is flying with a ${this.color}`;
};

// sub constructor inheriting props from Plane with apply()
function Helicopter() {
  Plane.apply(this, arguments);
  this.type = "ambulance";
}

// inheritance for methods
Helicopter.prototype = Object.create(Plane.prototype);

// override method
Helicopter.prototype.fly = () => {
  console.log("Helicopter is flying");
};

const planeOne = new Plane("white", "airbus");
const helicopterOne = new Helicopter("blue", "boiling");

console.log(helicopterOne);
console.log(planeOne);
