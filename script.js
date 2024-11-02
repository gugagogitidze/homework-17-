// 1. Arrow Function და ორი რიცხვის დაჯამება
const add = (a, b) => a + b;
console.log(add(9, 18));

// 2. Anonymous ფუნქცია, რომელიც ორ რიცხვის სხვაობას დააბრუნებს
console.log(
  (function (a, b) {
    return a - b;
  })(8, 3)
);

// 3. Arrow Function, რომელიც შეამოწმებს, არის თუ არა რიცხვი ლუწი
const isEven = (num) => num % 2 === 0;
console.log(isEven(4));
// 4. Callback Function და გამრავლება
function multiply(a, b, callback) {
  return callback(a * b);
}
multiply(4, 5, (result) => console.log(result));

// 5. Arrow Function და რიცხვის დადებითობის შემოწმება
const isPositive = (num) => num > 0;
console.log(isPositive(3));

// 6. Anonymous ფუნქცია, რომელიც რიცხვის გაორმაგებულ მნიშვნელობას დააბრუნებს
console.log(
  (function (n) {
    return n * 2;
  })(5)
);

// 7. Callback ფუნქცია, რომელიც რიცხვის გაორმაგებულ მნიშვნელობას დააბრუნებს
function doubleNumber(num, callback) {
  return callback(num * 2);
}
doubleNumber(6, (result) => console.log(result));

// 8. Arrow Function და რიცხვის 3-ზე გაყოფის ნაშთის შემოწმება
const isDivisibleByThree = (num) => num % 3 === 0;
console.log(isDivisibleByThree(9));

// 9. Callback Function და რიცხვის ლუწობის გადამოწმება
function checkEven(num, callback) {
  return callback(num % 2 === 0);
}
checkEven(4, (result) => console.log(result));

// 10. Arrow Function და რიცხვის კუბის გამოთვლა
const cube = (num) => num * num * num;
console.log(cube(3));

// 11. Callback Function და მარტივი გამრავლება
function multiplyNumbers(a, b, callback) {
  return callback(a * b);
}
multiplyNumbers(22, 3, (result) => console.log(result));
// 12. Arrow Function და რიცხვის დადებითობის შემოწმება
const isGreaterThanZero = (num) => num > 0;
console.log(isGreaterThanZero(5));

// 13. Anonymous ფუნქცია, რომელიც რიცხვის ნახევარს დააბრუნებს
console.log(
  (function (x) {
    return x / 2;
  })(10)
);
