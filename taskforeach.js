// const myObj = { name: 'Hello', score: 100 };
// for(const key in myObj) {
//   console.log(`${key} : ${myObj[key]}`);
// }
const myObj = { name: 'Hello', score: 100 };
let keys = Object.keys(myObj);
keys.forEach((key) => console.log(`${key} : ${myObj[key]}`))