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
    console.log(JSON.stringify(response, null, "\t"));

    if (response.shapes == "Circle") {
      shapes = Circle;
    } else if (response.shapes == "Triangle") {
      shapes = Triangle;
    } else {
    }

    await writeFileAsync("Logo.svg", logo);

    console.log("Successfully created .svg");
  } catch (err) {
    console.log(err);
  }
}

// Function call to initialize app
init();
