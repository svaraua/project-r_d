let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");

// if (num1 === "" || num2 === "") {
//   alert("Помилка: обидва поля повинні бути заповнені!");
// } else {
//   num1 = Number(num1);
//   num2 = Number(num2);

//   if (num2 === 0) {
//     alert("Помилка: Друге число не може бути 0!");
//   } else {
//     const sum = num1 + num2;
//     const subtraction = num1 - num2;
//     const multiplication = num1 * num2;
//     const division = num1 / num2;

//     if (num1 < num2) {
//       const confirmMsg = "Ви впевнені, що хочете продовжити операцію?";
//       if (confirm(confirmMsg)) {
//         alert(`Сума: ${sum}\nРізниця: ${subtraction}\nДобуток: ${multiplication}\nЧастка: ${division}`);
//       }
//     } else {
//       alert(`Сума: ${sum}\nРізниця: ${subtraction}\nДобуток: ${multiplication}\nЧастка: ${division}`);
//     }
//   }
// }

function addNumbers(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return "Параметри повинні бути числами!";
  }
  return num1 + num2;
}

function subtractNumbers(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return "Параметри повинні бути числами!";
  }
  return num1 - num2;
}

function multiplyNumbers(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return "Параметри повинні бути числами!";
  }
  return num1 * num2;
}

function divideNumbers(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return "Параметри повинні бути числами!";
  }
  if (num2 === 0) {
    return "Ділення на нуль неможливе!";
  }
  return num1 / num2;
}

console.log("Сума:" + addNumbers(+num1, +num2));
console.log("Різниця:" + subtractNumbers(+num1, +num2));
console.log("Добуток:" + multiplyNumbers(+num1, +num2));
console.log("Частка:" + divideNumbers(+num1, +num2));