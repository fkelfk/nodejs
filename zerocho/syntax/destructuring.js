// objects

// var candyMachine = {
//     status: {
//         name: 'node',
//         count: 5,
//     },
//     getCandy: function() {
//         this.status.count --;
//         return this.status.count;
//     }
// };

// var status = candyMachine.status

// var getCandy = candyMachine.getCandy

// console.log(candyMachine.getCandy())


const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    }
};

const status = candyMachine.status;
const getCandy = candyMachine.getCandy;

const { status, getCandy } = candyMachine;

console.log(status)
console.log(candyMachine.status)

//array

var array = ['nodejs', {}, 10 , true];

var node = array[0];
var obj = array[1];
var bool = array[array.length -1];

const array = ['nodejs', {}, 10, true];
const [node, obj, ,bool] = array;


// rest
const [node, obj, ...bool] = array;

const m = (x, y) => console.log(x, y)

console.log(m(5, 6, 7 ,8, 9))

const n = (x, ...y) => console.log(x, y)

console.log(n(5, 6, 7 ,8, 9))

