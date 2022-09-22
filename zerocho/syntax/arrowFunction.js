const { kMaxLength } = require("buffer");

// expression
function add1(x,y) {
    return x + y;
};

// statement
var add2 = function(x,y){
    return x + y;
};

// arrow
const add3 = (x, y) => {
    return x + y;
};

const add4 = (x, y) => x + y;
const add5 = (x, y) => (x + y);

// this
var relationship1 = {
    name: 'zero',
    friends: ['nero', 'gero', 'xero'],
    logFriends: function() {
        var that = this;
        this.friends.forEach(function(friend) {
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();

const relationship2 = {
    name: 'zero',
    friends: ['nero', 'gero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();