// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//npm package to vaild for CSS3 compatible color value.
const isCss3Color = require("is-css3-color");

// Function call to initialize app
init();

// Function that creates a matrix with the information that the user inputs
function init() {
  inquirer
    .prompt([
      
      {
        type: "input",
        name: "text",
        message: "Please enter 1-3 characters for your logo: ",
      },
      
      {
        type: "input",
        name: "textColor",
        message: "Please enter text color keyword or a hexadecimal number as the logo's text color: ",
      },
      
      {
        type: "list",
        name: "shape",
        message: "Please choose logo shape: ",
        choices: ["Triangle", "Square", "Circle"],        
      },
      
      {
        type: "input",
        name: "logoColor",
        message: "Please enter a color keyword or a hexadecimal number as the logo's background color: ",        
      },
    ])
    .then((answers) => { 
      let wtextColor = answers.textColor.toLowerCase();
      let wlogoColor = answers.logoColor.toLowerCase();

      // handling of errors that occurred during the entry of information
      if (answers.text == "") {
        console.log("");
        console.log("Input text cannot be empty");
        console.log("");
        init();
      } else if  (answers.text.length > 3) {
          console.log("");
          console.log("Logo text cannot be more than 3 characters");
          console.log("");
          init();
      } else if  (!isCss3Color(wtextColor)) {
          console.log("");
          console.log("Please enter a valid css color keyword or hex code for text color");
          console.log("");
          init();      
      } else if  (!isCss3Color(wlogoColor)) {
          console.log("");
          console.log("Please enter a valid css color keyword or hex code for the logo's background color");
          console.log("");
          init();
      } else {
          writeToFile("logo.svg", answers);
      }
    });
}

// Function to write the SVG file with the user answers
function writeToFile(fileName, answers) {
  
  let generateSVG = "";
 
  generateSVG = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g>';
  generateSVG += `${answers.shape}`;

  if (answers.shape === "Triangle") {
      generateSVG += `<polygon points="150,5  274,172  26,172" fill="${answers.logoColor}"/>`;
  } else if (answers.shape === "Square") {
      generateSVG += `<rect x="60" y="13" width="180" height="180" fill="${answers.logoColor}"/>`;
  } else {
      generateSVG += `<circle cx="150" cy="100" r="90" fill="${answers.logoColor}"/>`;
  }

  generateSVG += `<text x="150" y="114" text-anchor="middle" font-size="45" fill="${answers.textColor}">${answers.text}</text>`;
  generateSVG += "</g>";
  generateSVG += "</svg>";

  // Using file system module to generate svg file, takes in file name given in the init function, the svg string, and a ternary operator which handles logging any errors, or a "Generated logo.svg" message to the console  
  fs.writeFile(fileName, generateSVG, (err) => {
    console.log("");
    err ? console.log(err) : console.log("Generated logo.svg");
    console.log("");
  });
}

