const prompt=require("prompt-sync")({sigint:true});

//method to calculate factorial
calculateFactorial=(num)=>{
    var factorial=num;
    for(var i=num-1;i>0;i--){
        factorial*=i;
    }
    return factorial;
}


//Manual Inputs
var a=parseInt( prompt('Enter the Number to calculate its Factorial : '));

console.log(calculateFactorial(a));
