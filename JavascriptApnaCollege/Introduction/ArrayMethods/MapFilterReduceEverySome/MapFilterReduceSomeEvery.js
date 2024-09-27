//forEach
//arr.forEach(some function definition or name);

let arr = [1, 2, 3, 4, 5];

//Method1
let print = function(el) {
    console.log(el);
};
arr.forEach(print);

//Method2
arr.forEach(function (el){
    console.log(el);
});

//Method3
//Arrow Function :
arr.forEach((el) => {
  console.log(el);
});

let brr = [
    {
        name:"aman",
        marks:95,
    },
    {
        name:"krishna",
        marks:92,  
    },
    {
        name:"raghov",
        marks:90,
    }
];
brr.forEach((student) => {
    console.log(student.marks);
});

//Map: Scan each and every elements and return there repective value

let gpa = brr.map((el) => {
    return el.marks/10;
});
console.log(gpa);

//Filter : it will return the value which are fullfilling the respective conditions.
//let newArr = arr.filter(some function definition or name);

let nums = [2, 3, 4, 5, 6, 2, 7, 8, 9];
let even = nums.filter((num) => (num%2 == 0));
console.log(even) ;
let odd = nums.filter((num) => (num%2 !== 0));
console.log(odd);
let greaterThanFive = nums.filter((num) => (num > 5));
console.log(greaterThanFive);

//Every:
//Returns true if every element of array gives true for some function.Else returns false .
//It is like AND (&)
let number = [2, 3, 4, 5, 6, 2, 7, 8, 9];
number.every( (el) => (el%2 == 0));


//Some:
//Returns true if any element of array gives true for some function.
//Else returns false.
//it is like OR (||)
let number2 = [2, 3, 4, 5, 6, 2, 7, 8, 9];
number2.some( (el) => (el%2 == 0)) ;


//Reduce:
//Reduces the array to a single value 
//arr.reduce(reducer function with 2 variables for(accumulator,element));
//Accumulator collect the value which is being return form the previous accumulator and the element.
//Accumulator(Computing something) 

[1, 2, 3, 4].reduce( (res,el) => (res+el));
//Maximum number of an array with the help of loop and reduce :
//Loop:

let crr = [1, 4, 3, 5, 3, 2, 6, 7, 2, 9 ];
let max = -1;
for (let i=0; i<crr.length; i++){
    if(max < crr[i]){
        max = crr[i]
    }
};
console.log(max);

//Reduce:
let reducemax = crr.reduce( (res,el) => {
    if(res<el){
        res = el
    }
    return res;
});
console.log(reducemax);

//Default Parameter :
//Giving a default value to the arguments
function  sum(a, b=4){
    return a+b;
};
console.log(sum(3));
console.log(sum(3,6));//it will also return the true value, but the default value of b is 4 ,default value will be consider when we will not give exact value of b
//Note : Using default parameter at the starting may give undefined value ,because if we will give unsequence wise the value it may give NaN.

function sum2(a=3, b){
    return a+b;
};
console.log(sum2(1,4));//5
console.log(sum2(4));//(a=4, b=undefined) then it will give NaN