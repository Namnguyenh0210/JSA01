// bai 2
let arr1 = [ 0,2,4,6,8]
let arr2 = [ 1,3,5,7]

// duyet 2 mang tren va hien thi ra man hinh nhung so lon hon 3

console.log(arr1.filter(item => item > 3));

console.log(arr2.filter(item => item > 3));
// filter dung de loc khi co dieu kien
// map dung de hien thi 

//ghep 2 mang ke tren lai thanh 1 arr:

// let arr = [...arr1, ... arr2] // mang de dung gop
// arr.filter(item => item > 3);
console.log(arr.sort((a,b)=> b-a));// dung de sap xep ( a-b thi tăng dần) còn (b-a thi giảm dần)

// let object = {
//     name : " nanana",
//     age : "232",
//     add : "dsadasda",
// }

// let obj = {...object, phone :" 312321312"}
// console.log(obj);


// BTVN B1
arr1 = [1,2,3,5]
console.log(arr1.filter(item => item > 0));

arr2 = [1,2,3,5]
let arr = arr2