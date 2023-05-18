// Importing Triangle, Square, Circle classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

// Unit testing -> testing for a triangle with a blue background to render
describe("Triangle test", () => {
  test("test for a triangle with a blue background", () => {
    let logoName;
    let textColor;
    let logoShape;
    let logoColor = "blue";
    const shape = new Triangle({ logoName, textColor, logoShape, logoColor });
    expect(shape.render()).toEqual(
      '<polygon points="150,5  274,172  26,172" fill="blue" />'
    );
  });
});

// Unit testing -> testing for a square with a purple background to render
describe("Square test", () => {
  test("test for a square with a purple background", () => {
    let logoName;
    let textColor;
    let logoShape;
    let logoColor = "purple";
    const shape = new Square({ logoName, textColor, logoShape, logoColor });
    expect(shape.render()).toEqual(
      '<rect x="60" y="13" width="180" height="180" fill="purple" />'
    );
  });
});

// Unit testing -> testing for a circle with a #ca00ca background to render
describe("Circle test", () => {
  test("test for a circle with a #ca00ca background", () => {
    let logoName;
    let textColor;
    let logoShape;
    let logoColor = "#ca00ca";
    const shape = new Circle({ logoName, textColor, logoShape, logoColor });
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="90" fill="#ca00ca" />'
    );
  });
});
