// //for of is only loop work with maps very good

// const arr = [1, 2, 3, 4, 5];

// for (const nums of arr) {
//     console.log(nums);
// }

// const gretting = "Hello World!";
// for (const greet of gretting) {
//     console.log(`Each charater is : ${greet}`);
// }

//Maps

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "Frace");
map.set('IN', "India");

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

//Not Work
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }