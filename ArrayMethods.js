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

let isChild = arr4.some((currItem, index, array) => {
   return currItem < 8;
});
console.log('Is Child : ' , isChild);



//5. sort()

// sorting of letters 
var names = ["salesforce" , "facebook" , "Amazon"];
console.log(names.sort());

//sorting of numbers 
var points = [3,2,8,4,8,12,54,98,23,56,235,3,56,35];
let sortedValues = points.sort( (a,b) => {
 return a-b;
});
console.log("Number sorting", sortedValues);


//6. reduce methods

let num = [32,432,23,4];
let sum = num.reduce( (total , currItem) => {
return total + currItem;
}, 0);
console.log('sum -> ', sum);


//7. forEach method

num.forEach( (currItem) => {
  console.log(currItem)
});


















