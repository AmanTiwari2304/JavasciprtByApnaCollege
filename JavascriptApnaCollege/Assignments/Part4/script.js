//Question 1

let arr = [1,2,3,4,5,6,2,3];
let num = 2
for(let i=0; i<arr.length; i++){
    
    if (arr[i] == num) {
       arr.splice(i,1);
    } 
}
console.log(arr);

//Question 2

let givenNumber = 287252;
let count = 0;

let copy = givenNumber;

while(copy > 0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count)

//Question 3


let number = 287152;
let sum = 0;

let add = number;

while(add > 0){
    digit = copy % 10;
    sum+= digit;
    add = Math.floor(add/10);
}
console.log(sum);

//Question 4
let n = 5;
let factorial = 1;

for(let i=1; i<=n; i++){
    factorial *= i;
}
console.log(`factorial of ${n} is ${factorial}`);

//Question 5

let brr = [2,5,4,7,5,8,3,5,9];
let largest = 0;

for(let i=0; i<=brr.length; i++){
    if(largest < brr[i]){
        largest = brr[i];
    }
}

console.log(largest);