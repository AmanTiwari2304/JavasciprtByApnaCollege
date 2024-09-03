// arr = [4,"aman",3.45,true];//all the data type in a single array 
// console.log(arr);

// brr = [[1,3,5,7],[2,4,6,8,5]];//multiple array in single array
// console.log(brr);

// arr = [4,"aman",3.45,true,[1,4,3,5,2]]; 
// for(let i=0;i<arr.length;i++){
// console.log(i,arr[i]);}

brr = [2,4,3,5,7];

console.log(brr);
// for(let i=0;i<brr.length;i++){
//     brr[i] *= 2;  //This will simpilymultiple the array
// }
// console.log(brr);

for (let ele of brr) {//forof and press enter 
    ele *= 2;
    console.log(ele);
}
console.log(brr);

//The differance between for loop and forof loop is :
//if the of for loop is get change then the change value is going to seen always
//but n forof loop the value of array will remain constant after appling changes their and we can not print index here with value
