// Getting Triangle, Square, Circle classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

// Testing for a triangle with a red background
describe("Triangle test", () => {
  test("test for a triangle with a red background", () => {
    const shape = new Triangle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<polygon points="150,5  274,172  26,172" fill="red" />'
    );
  });
});

// Testing for a square with a yellow background
describe("Square test", () => {
  test("test for a square with a yellow background", () => {
    const shape = new Square();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
      '<rect x="60" y="13" width="180" height="180" fill="yellow" />'
    );
  });
});

// Testing for a circle with a green background
describe("Circle test", () => {
  test("test for a circle with a #ca00ca background", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="90" fill="green" />'
    );
  });
});
