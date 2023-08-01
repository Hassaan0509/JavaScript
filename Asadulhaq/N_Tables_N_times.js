/*
Output:
[
  [1, 2, 3, 4, 5],
  [2, 4, 6, 8, 10],
  [3, 6, 9, 12, 15],
  [4, 8, 12, 16, 20],
  [5, 10, 15, 20, 25]
]
*/

function createMultiplicationTable(number) {

    // First create an array with the length of the number
    const length = Array.from({ length: number }, (element, index) => index + 1);

    // Then create a new array with the length of the number
    const FinalArray = length.map((element, index, array) => {
        let newArray = [];
        for (let i = 1; i <= number; i++) {
            let number = element * i;
            console.log(number);
            newArray.push(number);
        }
        return newArray;
    });

    return FinalArray;
}

console.log(createMultiplicationTable(10));
