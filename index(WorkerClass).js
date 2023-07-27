class WorkerClass {
  constructor(firstName, lastName, ratePerDay, daysWorked = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.ratePerDay = ratePerDay;
    this.daysWorked = daysWorked;
    WorkerClass.amount++;
  }
  getSalary() {
    return this._ratePerDay * this._daysWorked;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    if (typeof firstName !== "string") {
      throw new TypeError("enter the string");
    }
    if (firstName === " ") {
      throw new RangeError("enter value");
    }
    this._firstName = firstName;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    if (typeof lastName !== "string") {
      throw new TypeError("enter the string");
    }
    if (lastName === " ") {
      throw new RangeError("enter value");
    }
    this._lastName = lastName;
  }
  get ratePerDay() {
    return this._ratePerDay;
  }
  set ratePerDay(ratePerDay) {
    if (typeof ratePerDay !== "number") {
      throw new TypeError("enter the number");
    }
    if (ratePerDay === " " || ratePerDay < 0) {
      throw new RangeError("enter value greater than 0");
    }
    this._ratePerDay = ratePerDay;
  }
  get daysWorked() {
    return this._ratePerDay;
  }
  set daysWorked(daysWorked) {
    if (typeof daysWorked !== "number") {
      throw new TypeError("enter the number");
    }
    if (daysWorked === " " || daysWorked < 0 || daysWorked > 31) {
      throw new RangeError("enter value greater than 0 and and less than 31");
    }
    this._daysWorked = daysWorked;
  }

  static amount = 0;
  static createWorkerTest() {
    return new WorkerClass("noname", "noname", 10);
  }
}

try {
  const worker = new WorkerClass("Tom", "Pob", 10, 5);
  console.log(worker.firstName);
  worker.firstName = "Karl";
  console.log(worker.firstName);
  console.log(worker.getSalary());
} catch (error) {
  console.log(error.message);
}
