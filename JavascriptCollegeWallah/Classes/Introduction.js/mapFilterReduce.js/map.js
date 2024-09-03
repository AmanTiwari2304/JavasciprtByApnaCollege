//this is a way to change a number
// let arr1 =[1,7,-3,-5,8];
// console.log(arr1);
// let brr1 =[];
// for (const ele of arr1) {
//     brr.push(Math.abs(ele));
// }
// console.log(brr1);

//this is mapfilter method it make the process easy and more effective

function twice(ele){
    return 2*ele;
}

let arr =[1,7,-3,-5,8];
console.log(arr);
let brr = arr.map(twice);
console.log(brr);

//we can put funtion direct on map
let drr = arr.map(function square(ele){
    return ele*ele;
});
console.log(drr);

//there is no need to write funtion and all
let frr = arr.map( ele => ele*ele*ele);
console.log(frr);