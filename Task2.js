const prompt=require("prompt-sync")({sigint:true});

//Method to swap numbers
swapNumbers=( a, b)=>{    
    a = a + b;
    b = a - b;   
    a = a - b;
    console.log('The Fist number is now : ',a);
    console.log('The Second number is now : ',b);
}

//Manual Inputs
var a=parseInt( prompt('Enter the First Number : '));
var b=parseInt(prompt('Enter the Second Number : '));

//function call
swapNumbers(a,b);