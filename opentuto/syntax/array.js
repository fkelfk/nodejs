const { arrayBuffer } = require("stream/consumers");

// create 
var arr = ['A','B','C','D']

// read
console.log(arr[2])

// update
arr[2] = 3;

console.log(arr)

// length
console.log(arr.length);

// append
arr.push('E')

console.log(arr)

// delete
// array.splice(index, delete갯수)
arr.splice(0, 1);
console.log(arr)

arr.splice(0, 2);
console.log(arr)

//
var lotto = [1, 12, 22, 34, 37, 40];
var i = 0; 

while(i < 6){
    console.log(lotto[i]);
    i = i + 1;
};

var number = [1, 12, 22, 34, 37, 40, 55];
var i = 0;

while(i < number.length){
    console.log(number[i]);
    i += 1;
}

// sum

var number = [1, 12, 22, 34]
var i = 0;
var total = 0;
while(i < number.length){
    total = total + number[i];
    i += 1;
};
console.log(`Total : ${total}`);