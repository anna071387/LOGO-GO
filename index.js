const { prompt } = require("inquirer");
const { writeFile } = require("fs");

// Generate Redme File structure linked
const { Triangle, Circle, Square } = require("./lib/shapes");
// Questions linked from utils
const questions = require("./lib/questions");
const { promisify } = require("util");

const writeFileAsync = promisify(writeFile);
// TODO: Create an array of questions for user input, all questions from read me file

function userPrompt() {
  return prompt(questions);
}
  async function init() {
  try {
    const response = await userPrompt();
      console.log(response);

  var shape;
    if (response.shapes == "Circle") {
         shape= new Circle(response.contents, response.color, response.text)
    
    } else if (response.shape == "Triangle") {
      // myCar = new Car("Ford");
      shape= new Triangle(response.contents, response.color, response.text);
    } else 
       {
      shape= new Square(response.contents, response.color, response.text);
    }
  

console.log(shape);
console.log(shape.render());


var logo=`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

     ${shape.render()}

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textcolor}" >${shape.text}</text>

      </svg>`

    await writeFileAsync("Logo.svg", logo);


      // console.log(logo);
    console.log("Successfully created .svg");
  } catch (err) {
    console.log(err);
  }}



// Function call to initialize app
init();
