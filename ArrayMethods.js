// Array Methods 

//1. Map()

let arr1 = [1,2,3,4,5,6,7,8,9,10];

let arr2 = arr1.map( (currItem, index, array) => {
    return currItem * 2;
});

console.log(arr1);
console.log(arr2);


//2. Filter()

let arr3 = [1,2,3,4,5,6,7,8,9,10];

let filteredValues = arr3.filter( (currItem , index, array) => {
      return currItem > 5;
});
console.log(arr3);
console.log( 'Filter',filteredValues);


//3. every()
//Check weather all the numbers in array is greater then 18 or not 
//In this method it will check every element. i.e AND condition
//It will return true or false

let arr4 = [1,2,3,4,5,6,7,8,9,10];
let isAllAdult = arr4.every((currItem, index, array) => {
   return currItem > 18;
});
console.log('Is Adult : ' , isAllAdult);


//4. some()
//Check weather all the numbers in array is greater then 18 or not 
//In this method atleast one element should satisfy the condition i.e. : OR
//It will return true or false

let arr5 = [1,2,3,4,5,6,7,8,9,10];
let isChild = arr4.some((currItem, index, array) => {
   return currItem < 8;
});
console.log('Is Child : ' , isChild);















