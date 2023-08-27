// const coding = ["js", "ruby", "java", "pyhton"];

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// } )

// // console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Direct return if no scope{} is open

// const newNums2 = myNums.filter( (num) => num > 4
// )

//Explicit return because {} is open
// const newNums = myNums.filter( (num) => {
//    return num > 4;
// })

const newNums = []

myNums.forEach( (num) => {
    if(num > 3){
        newNums.push(num);
    }
} )


console.log(newNums);