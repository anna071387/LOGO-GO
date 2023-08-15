const { Triangle, Circle, Square } = require("./shapes");

describe('Triangle tests', () => {
    it('should create a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe('Circle tests', () => {
    it('should create a green circle', () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="green" />');
    });
});

describe('Square tests', () => {
    it('should create a red square', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="red" />');
    });
});