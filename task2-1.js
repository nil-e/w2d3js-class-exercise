// using while
// function sumRange (n) {
//     let i=0;
//     let sum=0;
//     while (i<=n) {
//         sum += i;
//         i++;
//     }
//     return console.log(sum);
// }

// using do-while
// function sumRange (n) {
//     let i=0;
//     let sum=0;
//     do {
//         sum += i;
//         i += 1;
//       } while (i<=n);
//     return console.log(sum);
// }

//using reduce
// function sumRange (n) {
//    return makeArray(n);
// }

// function makeArray (n) {
//     let myArr=[];
//     for (let i=0; i<=n, i++) {
//         myArr[i]=i;
//     }
// }

myArr = [1,2,3,4];
let sum = myArr.reduce((accumulator ,item) => {
    return accumulator += item;
  }, 0)

console.log(sum);