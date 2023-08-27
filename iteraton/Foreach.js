// const coding = ["js", "ruby", "java", "pyhton"];

// coding.forEach( function (item) {
//     console.log(item);
// } )

//Arrow Function

// coding.forEach( (item) => {
//     console.log(item);
// } )


// function printMe(item) {
//     console.log(item);
// }

// //By passing reference of the annother function with forEach

// coding.forEach(printMe);

// coding.forEach( (item, index, arr) =>{
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js",
    },
    {
        languageName: "Pythton",
        languageFileName: "py",
    },
    {
        languageName: "Ruby",
        languageFileName: "rb",
    },
]

// myCoding.forEach( (item) =>{
//     console.log(item.languageName, item.languageFileName);
// } )

for (const key in myCoding) {
    console.log(`${myCoding[key].languageName}`, `${myCoding[key].languageFileName}`);
}

console.log();
console.log();
console.log();
console.log();