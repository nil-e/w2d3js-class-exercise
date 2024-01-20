const usersArray = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com'
    }
  ];

function transformDataStructure (example) {
    if (example == null) {
        console.log("There is no data")
    }
    else if (!Array.isArray(example)) {
        console.log("This is not an array")
    }
    else if (example[0].id == null) {
        console.log("There is no id field")
    }
    else if (Array.isArray(example)|| example.id != null) {
        let newObject = {};
        for(let i=1; i<=example.length; i++) {
            let j= i-1;
            newObject[i] = example[j];
        }

        return newObject;
    }

    
}
let test = {1:"asda"};
let test2;
let test3 = [1,"asda"];
let test4 = [{1:"asda"},{4:"asda"}];
// console.log(transformDataStructure(usersArray));


function transformDataStructureWithReduce (example) {
    if (example == null) {
        console.log("There is no data")
    }
    else if (!Array.isArray(example)) {
        console.log("This is not an array")
    }
    else if (example[0].id == null) {
        console.log("There is no id field")
    }
    else if (Array.isArray(example)|| example.id != null) {
        let newObject = {};
        // for(let i=1; i<=example.length; i++) {
        //     let j= i-1;
        //     newObject[i] = example[j];
        // }
        let i=1;
        let sum=0;
        while(i<=example.length) {
        a = example[i];
        let sum = example.reduce((accumulator ,a) => {
    return accumulator[i] = a;
  }, {})
  console.log(sum);
  i++;
}

        return sum;
    }

    
}

console.log(transformDataStructureWithReduce(usersArray));