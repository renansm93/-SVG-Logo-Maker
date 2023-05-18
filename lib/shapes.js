class Shape {
  constructor({ logoName, textColor, logoShape, logoColor }) {
    this.logoName = logoName;

    this.textColor = textColor;

    this.logoShape = logoShape;

    this.logoColor = logoColor;
  }
}

class Triangle extends Shape {
  constructor(data) {
    super(data);
  }
  render() {
    return `<polygon points="150,5  274,172  26,172" fill="${this.logoColor}" />`;
  }
}

class Square extends Shape {
  constructor(data) {
    super(data);
    // this.data = data;
  }
  render() {
    return `<rect x="60" y="13" width="180" height="180" fill="${this.logoColor}" />`;
  }
}

class Circle extends Shape {
  constructor(data) {
    super(data);
  }
  render() {
    return `<circle cx="150" cy="100" r="90" fill="${this.logoColor}" />`;
  }
}

module.exports = { Triangle, Square, Circle };