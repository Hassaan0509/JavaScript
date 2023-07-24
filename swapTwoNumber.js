
  


 function swapNumbers() {
    obj.a = obj.a + obj.b;
    obj.b = obj.a - obj.b;
    obj.a = obj.a - obj.b;
  }

 var obj = { a: 5, b: 10 };
 swapNumbers();
 console.log("Swapped numbers:", obj.a, obj.b); 

 // In te above contaxt I cannot pass the obj from function because var had function level scope If we use const let then we need to do that 
