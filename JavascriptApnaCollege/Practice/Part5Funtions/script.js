// Question 1

function dice (){
    console.log(Math.floor(Math.random()*6) + 1 )
};

dice();

//Question 2

function average( first,second,third ){
    let averageOfThree = (first+second+third)/3;
    console.log(averageOfThree);
};

average(12,13,17);
average(45,56,24);
average(48,58,65);

//Question 3

function tableOf(n){
  for(let i=1; i<=10; i++){
    let multiplication = n*i;
    console.log(multiplication);
  }
}

tableOf(9);
// tableOf(19);
// tableOf(119);

function sumupto(n){
 let count= 0;
    for(let i=1;i<=n;i++){
        count = count+i;
    }
    // console.log(count);
    return count;
    
};
// sumupto(8);
console.log(sumupto(25));


//Question 5

let str = [ "Hi"," this"," is"," your"," loved"," ones"," Aman Tiwari"];

function concat(str) {
    let result = "";

    for(let i=0;i<str.length;i++) {
        result += str[i];
    }
    return result;
}

// console.log(concat(str));

//Arrow Function:-

//Question 1:

let square = (n) =>{
    return n*n;
}
console.log(square(5));

//setTimeout & setInterval :-
// let id3 = setInterval( () => {
//  console.log("Hello World")
// },2000)

// setTimeout (() => {
//   clearInterval(id3);
//   console.log("5 times Hello world have been written ! Take Care")
// },10*1000)

//Array Methods {Map,Filter,Reduce,Every,Some,Sort}
//Question 1 : Check if all numbers in our array are multiples of 10 or not:-
let arr =  [10, 20, 30, 40, 50, 60, 70, 80];
let ans = arr.every( (el) => (el%10 == 0));
console.log(ans);

//Question 2 : Create a function to find the min number in an array.
//Loop:
let crr = [1, 4, 3, 5, 3, 2, 6, 7, 2, 9 ];
let min = 120;
for(let i=0; i<crr.length; i++){
    if (min>crr[i]) {
        min = crr[i];
    }
};
console.log(min);

//Reduce:
let res = crr.reduce( (res,el) => {
    if(res>el) {
        res = el;
    }
    return res;
});
console.log(res);