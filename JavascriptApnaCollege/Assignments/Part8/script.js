//Question 1: 
//Square and sum the array elements using the arrow function and then find the average of the array:

let arr = [1, 2, 3, 4, 6, 8, 7, 9 ];
let square = arr.map((arr) => arr*arr);
console.log(square);

let sum = square.reduce((acc,cur) => acc+cur,0);

console.log(sum);

let average = sum/arr.length;
console.log(average);



//Question 2:-
//Create a new array using the map function whose each element is equal to the original element plus 5.

let newArr = arr.map((el) => {
    return el+5;
});
console.log(newArr);

//Question 3:-Create a new array whose elements are in uppercase of words present in the original array.

let brr = [ "a", "b", "c", "d", "e"];
let newbrr = brr.map((el) =>{
    return el.toUpperCase();
})
console.log(newbrr);


//Question 4 :-

let doubleAndReturnArgs = (crr,...args) => [
...crr,
...args.map((v) => v*2),
];

console.log(doubleAndReturnArgs([1,2,3],4,5))
console.log(doubleAndReturnArgs([5,6],2,12))

//Question 5 :-

const mergeObjects = (obj1, obj2) => ({...obj1 ,...obj2});
console.log(mergeObjects({a:1,b:2},{c:3,d:4}));
