function logFive(sequence) {
    for (var i = 0; i < 5; i++) {
        console.log(sequence.current() || "");
        sequence.advance();
    }
}

function ArraySeq(arrInput) {
    this.arrInput = arrInput;
    this.counter = 0;
}

ArraySeq.prototype.current = function() {
  return this.arrInput[this.counter];
};

ArraySeq.prototype.advance = function() {
  this.counter++;
};

function RangeSeq(begin, end) {
    this.begin = begin;
    this.end = end;
    this.counter = 0;
}

RangeSeq.prototype.current = function() {
  if (this.begin == this.end) {
      return null;
  }
  else {
      return this.begin + this.counter;
  }
};

RangeSeq.prototype.advance = function() {
  if (this.begin < this.end) {
      this.counter++;
  }
  else {
      this.counter--;
  }
};