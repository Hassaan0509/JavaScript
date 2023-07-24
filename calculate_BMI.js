// Write a JavaScript function to calculate the Body Mass Index (BMI) of a person. 
// The function should take two parameters, weight (in kilograms) and height (in meters), 

let  weightInKilograms = 70;
let  heightInMeter = 1.75;

let result =calculateBMI(weightInKilograms,heightInMeter);

function calculateBMI(weight,height){
    if(weight<=0&& height<=0)
    {
        console.log("Weight & Height Must be greather than zero because universal truth")
    }
    else{
              const bmi = weight / (height * height);
              return bmi.toFixed(2);
    }
}

console.log(`BMI:`+result);