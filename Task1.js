const prompt=require("prompt-sync")({sigint:true});

//Method to calculate BMI
calculateBMI=( weight, height)=>{    
    var Height_sqr=height*height;
    var BMI=weight/Height_sqr;
    return BMI;
}

//Manual Inputs
const weight=prompt('Enter the Weight (KG) : ');
const height=prompt('Enter the height (Meters) : ');

//function call
console.log(calculateBMI(weight,height).toFixed(2));