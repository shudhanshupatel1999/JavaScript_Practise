//Forin loop should only be used for the object iteraton

const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// const programmig = ["js", "rb", "py", "cpp"];

// for (const key in programmig) {
//     console.log(programmig[key]);
// }

//For in loop will not work on for Maps

// const map = new Map();
// map.set('IN', "India");
// map.set('USA', "United States of America");
// map.set('Fr', "Frace");
// map.set('IN', "India");

// for (const key in map) {
//     console.log(key);
// }