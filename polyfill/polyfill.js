// Polyfill for Array.prototype.includes
if (!Array.prototype.includes) {
  Array.prototype.includes = function (valueToFind, fromIndex) {
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    // Convert the array-like object to an actual array
    var o = Object(this);

    // Get the length of the array
    var len = o.length >>> 0;

    if (len === 0) {
      return false;
    }

    // Start searching from the provided index or 0
    var n = fromIndex | 0;
    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    while (k < len) {
      // Check if the current element matches the value
      if (
        o[k] === valueToFind ||
        (typeof o[k] === "number" &&
          typeof valueToFind === "number" &&
          isNaN(o[k]) &&
          isNaN(valueToFind))
      ) {
        return true;
      }
      k++;
    }

    return false;
  };
}

const fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("orange")); // false