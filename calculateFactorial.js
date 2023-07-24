// Calculate Factoorial 


var result = 1;
var number = 5;

(function CalculateFactorial() {
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
}());
console.log(`Factorial of ${number} is: ${result}`);