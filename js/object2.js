// Конструктор Accumulator
function Accumulator(startingValue) {
  this.value = startingValue || 0; // Якщо не передано значення, то встановлюємо 0
}

Accumulator.prototype.increment = function() {
  this.value++;
};

Accumulator.prototype.decrement = function() {
  this.value--;
};

// Конструктор CancelableAccumulator
function CancelableAccumulator(startingValue) {
  Accumulator.call(this, startingValue); // Викликаємо конструктор Accumulator з передачею початкового значення

  this.originalValue = startingValue; // Зберігаємо початкове значення
}

// Наслідування Accumulator
CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

// Додатковий метод clear
CancelableAccumulator.prototype.clear = function() {
  this.value = this.originalValue; // Встановлюємо збережене значення на початкове
};

