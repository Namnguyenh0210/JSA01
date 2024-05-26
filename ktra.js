// bai1
let m = [1,2,3,4,5,6,"hh", "9",80,100]

let number = m.filter(item => typeof item === 'number');
let number2 = number.map(item => Math.pow(item, 2));
console.log(number);
console.log(number2);

// bai2 
let arr = "High knowledge, high return";
let arr2 = arr.split('');
let arr3 = arr2.filter(char => char!== ' ').map(char => char.toLowerCase());
console.log(arr3);
console.log(arr2);