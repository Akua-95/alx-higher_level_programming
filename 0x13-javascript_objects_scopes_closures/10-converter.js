#!/usr/bin/node
exports.converter = function (base) {
  if (base > 0) {
    exports.converter(base / 2);
    process.stdout.write(Math.floor(base % 2));
  }
};
