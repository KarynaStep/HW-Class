class RangeValidator {
  constructor(from = 0, to = 10) {
    this.from = from;
    this.to = to;
  }
  getRange() {
    const arry = [this._from, this._to];
    return arry;
  }
  validate(number) {
    if (typeof number !== "number") {
      throw new TypeError("enter the number");
    }
    return this._from < number && number < this._to;
  }
  get from() {
    return this._from;
  }
  set from(from) {
    if (from > this.to) {
      throw new RangeError("from must be less than to");
    }
    if (typeof from !== "number") {
      throw new TypeError("enter the number");
    }
    this._from = from;
  }
  get to() {
    return this._to;
  }
  set to(to) {
    if (this.from > to) {
      throw new RangeError("from must be less than to");
    }
    if (typeof to !== "number") {
      throw new TypeError("enter the number");
    }
    this._to = to;
  }
}

const range = new RangeValidator(7, 15);

try {
  console.log(range.getRange());
  console.log(range.validate(8));
  range.to = 18;
  console.log(range.getRange());
} catch (error) {
  console.log(error.message);
}
