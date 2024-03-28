// Array Methods 

// Map()

let arr1 = [1,2,3,4,5,6,7,8,9,10];

let arr2 = arr1.map( (currItem, index, array) => {
    return currItem * 2;
});

console.log(arr1);
console.log(arr2);
