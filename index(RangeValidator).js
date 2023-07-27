class RangeValidator {
  constructor(from = 0, to = 10) {
    if (from > to) {
      throw new RangeError("from must be less than to");
    }
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
    if (this._from < number && number < this._to) {
      return true;
    }
    return false;
  }
  get from() {
    return this._from;
  }
  set from(from) {
    if (typeof from !== "number") {
      throw new TypeError("enter the number");
    }
    this._from = from;
  }
  get to() {
    return this._to;
  }
  set to(to) {
    if (typeof to !== "number") {
      throw new TypeError("enter the number");
    }
    this._to = to;
  }
}

const range = new RangeValidator(7, 15);

try {
  console.log(range.getRange());
  console.log(range.validate(9));
} catch (error) {
  console.log(error.message);
}
