function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

var context = null;

function withContext(newContext, body) {
  var oldContext = context;
  context = newContext;
  var result = body();
  context = oldContext;
  return result;
}

function withContext(newContext, body) {
  var oldContext = context;
  context = newContext;
  try {
    return body();
  } finally {
    context = oldContext;
  }
}

function InputError(message) {
  this.message = message;
  this.stack = (new Error()).stack;
}
InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = "InputError";

function promptDirection(question) {
  var result = prompt(question, "");
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new InputError("Invalid direction: " + result);
}



console.log("My chapter 8 exercise solutions: \nRetry:\n");

function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  // Your code here.
  do {
    try {
      return primitiveMultiply(a,b);
    } 
    catch (ex) {
      if (ex instanceof(MultiplicatorUnitFailure)) {
        // console.log("MultiplicatorUnitFailure");
      }
      else {
        throw ex;
      }
    }
  } while (true);
}

console.log(reliableMultiply(8, 8));
// → 64

console.log("\nThe Locked Box\n");

var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: ["hi", "guys", "hows", "about", "some", "dummy", "data?"],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  // Your code here.
  var locked = box.locked;
  try {
    if (locked) {
      box.unlock();
    }
    return body();
  }
  finally {
    if (locked) {
      box.lock();
    }
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e.message); // e.message to leave out the stack trace
}
console.log(box.locked);
// → true

withBoxUnlocked(function() {
  console.log(box.content);  // hey, I want to see the content!
});