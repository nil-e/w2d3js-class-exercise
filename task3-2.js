const array1 = [1, 2, 3, 4, 5];

// // Pass a function to map
const map1 = array1.map((x) => x + 1);

console.log(map1);

const map2 = array1.reduce((newList,item) => {
     newList.push(item+1);
     return  newList;
 },[]);

 console.log(map2);