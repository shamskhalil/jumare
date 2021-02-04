/*
let me = {
    name: 'Shamsu',
    hairColor: 'black',

    walk: function () {
        console.log(this.name + ' is now working');
    }
};
*/

let me = new Object();
me.name = 'Shamsu';
me.hairColor = 'Black';
me.walk = function () {
    console.log(this.name + ' is now working');
};

console.log(me.name);
console.log(me.hairColor);
console.log(me.walk());

