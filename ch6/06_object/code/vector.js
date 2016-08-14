function Vector(x, y) {
    this.x = x;
    this.y = y;

}
Vector.prototype.plus = function(vector2) {
  var returnVec = new Vector(this.x + vector2.x, this.y + vector2.y);
  return returnVec;
};

Vector.prototype.minus = function(vector2) {
  var returnVec = new Vector(this.x - vector2.x, this.y - vector2.y);
  return returnVec;
}

Object.defineProperty(Vector.prototype, "length", {    
  get: function() { 
      return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
    }
});

