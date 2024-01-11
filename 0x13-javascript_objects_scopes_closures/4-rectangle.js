#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
      return {};
    }
    this.width = w;
    this.height = h;
  }

  print() {
    if (!this.width || !this.height) {
      console.log("Empty Rectangle");
    } else {
      const row = "X".repeat(this.width);
      for (let i = 0; i < this.height; i++) {
        console.log(row);
      }
    }
  }

  rotate() {
    [this.width, this.height] = [this.height, this.width];
  }

  double() {
    this.width *= 2;
    this.height *= 2;
  }
}

const rect1 = new Rectangle(5, 3);
rect1.print(); // Prints the rectangle
rect1.rotate(); // Rotates the rectangle
rect1.print(); // Prints the rotated rectangle
rect1.double(); // Doubles the dimensions of the rectangle
rect1.print(); // Prints the doubled rectangle
