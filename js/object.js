function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const user = {
  name: 'Vadym',
  age: 31,
  sayHello: function() {
    return `Привіт, я ${this.name}, мені ${this.age} років`;
  }
};

console.log(user.sayHello());

const calculator = {
  num1: null,
  num2: null,
  ask: function() {
    this.num1 = Number(prompt("Введіть перше число: "));
    this.num2 = Number(prompt("Введіть друге число: "));
  },
  sum: function() {
    return this.num1 + this.num2;
  },
  mul: function() {
    return this.num1 * this.num2;
  }
};

calculator.ask();
console.log("Сума:" + calculator.sum());
console.log("Добуток:" + calculator.mul());