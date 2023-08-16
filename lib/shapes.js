 

class Triangle {
    constructor(text, shapecolor, textcolor) {
      this.text = text;
      this.shapecolor = shapecolor;
      this.textcolor = textcolor;
    }
       
  setColor(color) {
    this.color = color;
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapecolor}" />`
  }
  }


  class Circle {
    constructor(text, shapecolor, textcolor) {
      this.text = text;
      this.shapecolor = shapecolor;
      this.textcolor = textcolor;
  }
       
  setColor(color) {
    this.color = color;
  }

    render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.shapecolor}"/>`
  }
  }

  class Square {
    constructor(text, shapecolor, textcolor) {
      this.text = text;
      this.shapecolor = shapecolor;
      this.textcolor = textcolor;
  }
       
  setColor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.shapecolor}"/>`
  }
  }


  module.exports = {
    Triangle, Circle, Square
  }