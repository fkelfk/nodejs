// const fs = require('fs')

// setInterval(() =>{
//     console.log('시작');
//     try {
//     throw new Error('서버를 고장내주마');
//     } catch (error) {
//         console.error(error);
//     }
// }, 1000);

// setInterval(() =>{
//     console.log('시작');
//     fs.unlink('./asdfa.js', (err) => {
//         if (err) {
//             console.log('시작');
//             console.log(err);
//             console.log('끝');
//         }
//     });
// }, 1000);

process.on('uncaughtException', (err) => {
    console.error('예기치 못한 에러', err);
});

setInterval(()=>{
    throw new Error('서버를 고장내주마');   
},1000);

setTimeout(() => {
    console.log('실행됩니다');
}, 2000);