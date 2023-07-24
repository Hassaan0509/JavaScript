// Task 1
function calculateBMI(weight, height){
    if(weight <=0 || height <=0 ){
        console.log("Values should be greater than zero");
        return
    }
    // formula: BMI = weight / (height * height).
    const bmi = weight / (height * height);

    return Math.round(bmi * 100) / 100;
}

let x = calculateBMI(70,1.75);
console.log("Your bmi is "+ x);

// Task 2 swap two numbers without using temp var

function swapTwoNumbers(a,b){
    // using arithmatic operation
    // console.log("Before swap: a = "+ a + " b = "+ b);
    // a = a+b;
    // b = a-b;
    // a = a-b;
    // console.log("After swap: a = "+ a + " b = "+ b);

    // using destructuring
    [a,b] = [b,a];
    console.log("After swap: a = "+ a + " b = "+ b);
}
let a = 5;
let b = 10;
swapTwoNumbers(a,b);

// Task 3 fictorial
function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n-1);
}
let n = 5;
console.log("Factorial of "+ n + " is "+ factorial(n));