#!/usr/bin/node
class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

const square1 = new Square(5);
console.log(square1.width); // Output: 5
console.log(square1.height); // Output: 5

