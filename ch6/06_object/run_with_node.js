// load dependencies
require("./code/load")("code/mountains.js", 
                       "code/chapter/06_object.js", 
                       "code/vector.js",
                       "code/stretch.js");

//console.log("\n" + drawTable(dataTable(MOUNTAINS)) + "\n");

// Your code here.
console.log("\n --- A Vector Type --- \n\n")


console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5


// Your code here.
console.log("\n\n --- Another Cell --- \n\n")

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]

console.log("\n\n --- ? --- \n\n")
