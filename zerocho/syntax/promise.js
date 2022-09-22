const { rejects } = require("assert");
const { resolve } = require("path");

Promise

const plus = new Promise((resolve, reject) => {
    const a = 1;
    const b = 2;
    if (a + b > 2) {
        resolve(a + b);
    } else {
        reject(a + b);
    }
});

plus
    .then((success) => {
        console.log(success);
    })
    .catch((fail) => {
        console.log(fail);
    })

console.log(Promise)

const condition = true;
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })