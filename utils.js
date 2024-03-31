//Normal Export

export const PI = 3.14;

const PI_Data = 3.149;

export function add(a , b) {
  console.log(a + b);
}

//Export to gether 
//export {PI, add};

//Export with alias
export {
  PI_Data as PId
};

//export with default 
export default function subtract(a, b) {
  console.log(a - b);
}