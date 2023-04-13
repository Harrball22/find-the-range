// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

let smallestNumber = 0;
let largestNumber = 0;

for (i = 0; i < array.length; i++){
    if (smallestNumber > array[i]){
        smallestNumber = array[i]
    }
    if (largestNumber < array[i]){
        largestNumber = array[i]
    }
}

console.log(smallestNumber + ", " + largestNumber)