// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

let smallestNumber = array[i];
let largestNumber = array[i];

for (i = 0; i < array.length; i++){
    if (array[i] < smallestNumber){ 
        smallestNumber = array[i]
    }
    if (array[i] > largestNumber){
        largestNumber = array[i]
    }
}

console.log(smallestNumber + ", " + largestNumber)