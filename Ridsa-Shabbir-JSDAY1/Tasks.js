// Task # 1

const weight = 70;
const height = 1.75;

const BMI = weight / (height * weight);
console.log("BMI: ", BMI);

// Task # 2

const num1 = 5;
const num2 = 10;

console.log("numbers before swapping: num1 = ", num1, " num2 = ", num2);
[num1, num2] = [num2, num1];
console.log("numbers after swapping: num1 = ", num1, " num2 = ", num2);

// Task # 3

const num = 5;
let fac = 1;

if (num < 0) {
  console.log("give me a valid number");
} else {
  for (let i = 0; i <= num; i++) {
    fac = fac * i;
  }
}

console.log("Factorial of ", num, " is : ", fac);
