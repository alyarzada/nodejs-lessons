// 1. Class and Inheritance:
// Create a base class representing a "Shape" with properties like name and methods like calculateArea(). Then, create two subclasses Circle and Rectangle that inherit from the base class. Each subclass should have its specific properties (e.g., radius and width/height) and implement the calculateArea() method accordingly. Finally, create instances of each subclass and demonstrate method overriding and inheritance.

class Shape {
    constructor(name) {
        this.name = name;
    }
    calculateArea() {
        return `This shape is ${this.name}`
    }
}
class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius
    }
    calculateArea() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return 2 * (this.width + this.height)
    }
}


const shapeCircle = new Circle("circle 1", 2)
console.log(shapeCircle.calculateArea());

const shapeRectangle = new Rectangle("Rectangle 1", 2, 3)
console.log(shapeRectangle.calculateArea());