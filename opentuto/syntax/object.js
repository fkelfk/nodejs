var member = ['blockmonkey', 'egoing'];

console.log(member[0]);
console.log(member[1]);

console.log('----------------------------')

var i = 0;
while(i < member.length){
    console.log(member[i]);
    i += 1;
}

console.log('----------------------------')

var roles = {
    'student':'blockmonkey',
    'teacher':'egoing'
};

console.log(Object.keys(roles));
console.log(Object.values(roles));
console.log(roles.student);

console.log('----------------------------')

for(var name in roles){
    console.log("key :", name, "value", roles[name])
}
