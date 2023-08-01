// Task 1
let arrayNew = [1, "2", "three", 4, "5"];

const sum = arrayNew.reduce((acc, element) => {
  let el = parseInt(element);
  return acc + (isNaN(el) ? 0 : el);
}, 0);
// console.log(sum);

// task 2

const countOccurrences = (array) => {
  let Obj = array.reduce((accumulator, element, index) => {
    let length = array.filter((currelement) => currelement === element).length;
    accumulator[element] = length;
    return accumulator;
  }, {});
  return Obj;
}

// console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]));
// Output: { apple: 3, banana: 2, orange: 1 }

// task 3
const data = {
  apples: 5,
  oranges: 3,
  bananas: 8,
  otherFruits: {
    peaches: 4,
    grapes: 10,
    kiwis: 6,
  },
};

const entries = Object.entries(data);
let Sum = 0;
for (const [key, value] of entries) {
  if (typeof value === "object") {
    for (const key in value) {
      Sum += value[key];
    }
  } else {
    Sum += value;
  }
}
// console.log(Sum)






//task 4

const products = [
  { name: "Laptop", category: "Electronics", price: 1000 },
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Shirt", category: "Clothing", price: 25 },
  { name: "Jeans", category: "Clothing", price: 50 },
  { name: "Desk", category: "Furniture", price: 200 },
];


function groupByCategory(products) {
  const Final_Output = products.reduce((acc, ele, index, array) => {
    acc[ele.category] = array.filter((arr) => arr.category === ele.category);
    return acc;
  }, {});
  return Final_Output;
}

// console.log(groupByCategory(products));


const Final_Output = products.reduce((acc, ele) => {
  if (!acc[ele.category]) {
    acc[ele.category] = [];
  }
  acc[ele.category].push(ele);
  return acc;
}, {});
// console.log(Final_Output);


// task 5
let array_new = [1, 2, 1, 4, 3, 6, 7, 5, 9, 2];
const removeDuplicates = (array) => {
  let newArray = array.reduce((acc, ele) => {
    if (!acc.includes(ele)) {
      acc.push(ele);
    }
    return acc;
  }, []);
};
