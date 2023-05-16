// Shape class - define what it means to be a shape
class Shape {
    constructor() {
      this.color = "";
    }
    // Shape class takes in setColor function
    setColor(colorVar) {
      this.color = colorVar;
    }
  }
  
  // Triangle class 
  class Triangle extends Shape {
    render() {      
      return `<polygon points="150,5  274,172  26,172" fill="${this.color}" />`;
    }
  }
  
  // Square class 
  class Square extends Shape {
    render() {     
      return `<rect x="60" y="13" width="180" height="180" fill="${this.color}" />`;
    }
  }
  
  // Circle class 
  class Circle extends Shape {
    render() {    
      return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
    }
  }
  
  // Exports classes (Square, Triangle, Circle)
  module.exports = { Triangle, Square, Circle };
  