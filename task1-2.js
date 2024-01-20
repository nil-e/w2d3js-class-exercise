function deepCopy(example) {
    
    if (Array.isArray(example)) {
        let copiedVersion=[];
        for(let i=0; i<example.length;i++) {
            copiedVersion.push(example[i]);
        }  
        return copiedVersion;
    }
    else if (typeof example == "object") {
        let copiedVersion={};
        let keys =  Object.keys(example);
        let values =  Object.values(example);
        for (let i=0; i<keys.length;i++) {
            let  a = keys[i];
            let  b = values[i];
            copiedVersion[a] = b
        } 
        return copiedVersion;
    }
}
let example1 = [3,5,1];
let example2 = {abc:"hey",nini:5};
// console.log(Object.keys(example)[0]);
// console.log(Object.values(example)[0]);
// console.log(deepCopy(example1));
console.log(deepCopy(example1));
// console.log(example1.length);
// console.log(typeof example1);