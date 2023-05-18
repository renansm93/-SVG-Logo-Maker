// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generateSVG } = require("./lib/generateSVG");
const { Triangle, Square, Circle } = require("./lib/shapes");

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
        name: "logoName",
        message: "Please enter 1-3 characters for your logo: ",
      },
      
      {
        type: "input",
        name: "textColor",
        message: "Please enter text color keyword or a hexadecimal number as the logo's text color: ",
      },
      
      {
        type: "list",
        name: "logoShape",
        message: "Please choose logo shape: ",
        choices: ["triangle", "square", "circle"],        
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
      if (answers.logoName == "") {
        console.log("");
        console.log("Input characters for logo cannot be empty.");
        console.log("");
        init();
      } else if  (answers.logoName.length > 3) {
          console.log("");
          console.log("Logo text cannot be more than 3 characters.");
          console.log("");
          init();
      } else if  (!isCss3Color(wtextColor)) {
          console.log("");
          console.log("Please enter a valid css color keyword or hex code for text color.");
          console.log("");
          init();      
      } else if  (!isCss3Color(wlogoColor)) {
          console.log("");
          console.log("Please enter a valid css color keyword or hex code for the logo's background color.");
          console.log("");
          init();
      } else {

          const svgPath = "./logo.svg";
          let genShape = "";
    
          if (answers.logoShape === "circle") {
            genShape = new Circle(answers);
          } else if (answers.logoShape === "triangle") {  
            genShape = new Triangle(answers);
          } else {
            genShape = new Square(answers);
          }

          console.log("");
        //Generate the svg logo here.

          fs.writeFile(svgPath, generateSVG(genShape), function (err) {
            if (err) throw err;
            console.log('Generated logo.svg!');
            console.log("");
          });

         // fs.writeFile(svgPath, generateSVG(genShape), (err) =>
          //  err ? console.error(err) : console.log("Generated logo.svg")
          //);
          
      }
    })
    .catch((err) => console.error(err));
}


