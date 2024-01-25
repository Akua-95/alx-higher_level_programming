#!/usr/bin/node
class Square extends Square {
  constructor(size) {
    super(size);
  }

  charPrint(c) {
    if (c === undefined) {
      c = "X";
    }
    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
}

// Example usage:
const square1 = new Square(5);
square1.charPrint(); // Prints the square using the default character X
square1.charPrint("-"); // Prints the square using the specified character -
