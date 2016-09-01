The solution in the book uses the format:

``` javascript
var weekDay = function() {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];
  return {
    name: function(number) { return names[number]; },
    number: function(name) { return names.indexOf(name); }
  };
}();

console.log(weekDay.name(weekDay.number("Sunday")));
// → Sunday
```

But my first inclination was to use the following format (including the 'exports' object):

``` javascript
(function(exports) {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];

  exports.name = function(number) {
    return names[number];
  };
  exports.number = function(name) {
    return names.indexOf(name);
  };
})(this.weekDay = {});

console.log(weekDay.name(weekDay.number("Saturday")));
// → Saturday
```

When I ran this in node it gave me a "ReferenceError: month is not defined" on the line

``` javascript
console.log(month.name(2));
```

The book states that "(Outside of a function, this refers to the global scope object.)" and I suspected that the problem had something to do with, perhaps, running in node not supplying a global scope object. So I created an index.html to see if running in a browser gives the code a global scope to which it can attach and, indeed, running in the browser produces the desired output in the console.


