
// Users.findOne('zero')
//     .then((user) => {
//         console.log(user);
//         return Users.update('zero', 'nero');
//     })
//     .then((updatedUser) => {
//         console.log(updatedUser);
//         return Users.remove('nero');
//     })
//     .then((removedUser)=> {
//         console.log(removedUser);
//     });
//     .catch((err)=> {
//         console.error(err);
//     });
// console.log('end?')

async () => {
    try {
    const user = await Users.findOne('zero');
    const updatedUser = await Users.update('zero', 'nero');
    const removedUser = await Users.remove('nero');
    console.log('end?');
    } catch (err) {
        console.error(err);
    }
}
