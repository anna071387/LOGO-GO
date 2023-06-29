// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser


// THEN I am shown a 300x200 pixel image that mat
const questions = [
  {
    type: "input",
    message: "What are the letters for your logo?",
    name: "contents",
  },
  {
    type: "input",
    message: "What is the color of the text?",
    name: "text",
    validate: function (color) {
      if (color) {
        return true;
      }
      return "Please enter a color keyword or a hexadecimal number.";
    },
  },
  {
    type: "input",
    message: "What is the color of the shape?",
    name: "color",
    validate: function (color) {
      if (color) {
        return true;
      }
      return "Please enter a color keyword or a hexadecimal number.";
    },
  },
  {
    type: "list",
    message: "What is the shape of your logo?",
    name: "shapes",
    choices: [
        {
            name: 'Triangle',
        },
        {
            name: 'Circle',
        },
        {
            name: 'Square',
        },
    ]
  }
];
module.exports = questions;
