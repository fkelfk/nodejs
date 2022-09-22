// Users.findOne('zero', (err, user) => {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(user);
//     Users.update('zero', 'nero', (err, updatedUser) => {
//         if (err) {
//             return console.error(err);
//         }
//         console.log(updatedUser)
//         Users.remove('nero', (err, removedUser) => {
//             if (err) {
//                 return console.error(err);
//             }
//             console.log(removedUser);
//         });
//     });
// });
// console.log('end?')

Users.findOne('zero')
    .then((user) => {
        console.log(user);
        return Users.update('zero', 'nero');
    })
    .then((updatedUser) => {
        console.log(updatedUser);
        return Users.remove('nero');
    })
    .then((removedUser)=> {
        console.log(removedUser);
    });
    .catch((err)=> {
        console.error(err);
    });
console.log('end?')
