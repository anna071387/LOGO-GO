const inquirer = require('inquirer');


class Triangle {
    constructor(text, shape, color) {
        this.text = text;
        this.shape = shape;
        this.color = color;
    }
       
  setColor(color) {
    this.color = color;
  }

  setText(text) {

  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
  }
  }


  class Circle {
    constructorconstructor(text, shape, color) {
      this.text = text;
      this.shape = shape;
      this.color = color;
  }
       
  setColor(color) {
    this.color = color;
  }

  setText(text) {
    
  }

  render() {
    return `<circle cx="25" cy="75" r="30"/>`
  }
  }

  class Square {
    constructorconstructor(text, shape, color) {
      this.text = text;
      this.shape = shape;
      this.color = color;
  }
       
  setColor(color) {
    this.color = color;
  }

  setText(text) {
    
  }

  render() {
    return `<rect x="10" y="10" width="30" height="30"/>`
  }
  }


  module.exports = {
    Triangle, Circle, Square
  }