
import subtract, { PI, add , PId} from "./utils.js";
import * as UTILS from "./utils.js";

console.log(PI);
console.log(add(1,2));
console.log(PId);
console.log(subtract(5,3));

console.log(UTILS.PI);
console.log(UTILS.add(1,2));
console.log(UTILS.PId);


//console.log(UTILS.subtract(5,3)); --> default exports can not be accessed like this 


//Query selector 

let element = document.querySelector('div');
console.log(element);
console.log("This is inner text",element.innerText);
element.style.color = 'red';

let elementByClass = document.querySelector('.class');
console.log(elementByClass);
console.log("This is inner text for element fetched by class",elementByClass.innerText);

let elementAll = document.querySelectorAll('div');
console.log(elementAll);
//elementAll is a node list so first we need to convert this in to array 
let elementsArray = Array.from(elementAll);
elementsArray.forEach((el) => {
  el.style.color = 'green';
});


// In LWC document.querySelector becomes 
// this.temmplate.querySelector();