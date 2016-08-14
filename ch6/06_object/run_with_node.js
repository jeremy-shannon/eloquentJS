// load dependencies
require("./code/load")("code/mountains.js", "code/chapter/06_object.js", "code/vector.js");

//console.log("\n" + drawTable(dataTable(MOUNTAINS)) + "\n");

// Your code here.
console.log("\n --- A Vector Type --- \n\n")


console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5


