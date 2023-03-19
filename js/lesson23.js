const arr = [7, 9, 10, 13, 18, 23, 27, 31, 33, 43];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    sum += arr[i];
  }
}

console.log('Сума елементів масиву:', sum);

let min = arr[0];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
}

console.log('Мінімальне значення елементу масиву:', min);
console.log('Максимальне значення елементу масиву:', max);

let symbols = '';
for (let i = 1; i <= 5; i++) {
  symbols += '#';
  console.log(symbols);
}
