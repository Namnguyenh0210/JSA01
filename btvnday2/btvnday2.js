// BTVN B1
//cach1
arr1 = [1, 2, 3, 5];
console.log(arr1.filter((item) => item > 0));
//cach2
arr2 = [1, 2, 3, 5];
let arr = [...arr2];
console.log(arr);
//cach3
arr3 = arr1.map((item) => item);
console.log(arr3);

//bai2
arrA = ["helo", "Xin chào"];
arrB = ["Bonjour", "Olá"];

//cach1
let waysToSayHello = [...arrA, ...arrB];
console.log(waysToSayHello);

//cach2
let waysToSayHello2 = arrA;
for (let i = 0; i < arrB.length; i++) {
  waysToSayHello2.push(arrB[i]);
}
// cach3
arrB.map((item) => waysToSayHello.push(item));

// bai3
let arrx = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let arr7 = arrx.map((item) => item * item);
console.log(arr7);

let arr8 = arrx.filter((item) => item % 2 != 0);
console.log(arr8);

const filterRange = (arr, a, b) => {
  let sodau = arr[a];
  let socuoi = arr[b];
  return sodau < socuoi
    ? arr.filter((item) => item > sodau && item < socuoi)
    : arr.filter((item) => item > sodau && item < socuoi);
};

let arrM = [1, 9, 6, 5, 10];
console.log(filterRange(arr, 0, 3));

const filterrange = (arr, a, b) => {
  for (let i = 0; i < i.length; i++) {
    if (!((arr[i] > a && arr[i] < b) || (arr[i] > a && arr[i] < b))) {
      arr.splice(i, 1);
      i--;
    }
  }
};

let arr9 = [1, 9, 6, 5, 10];
filterrange(arr, 1, 9);
console.log(arr);
