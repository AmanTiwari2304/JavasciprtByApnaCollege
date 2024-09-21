//Question 1:

let arrayAverage = (arr) => {
    let sum = 0
    for(let i=0; i < arr.length; i++){
       sum  += arr[i];
    }
    return  sum/arr.length;
};
let arr = [1,2,3,4,5,6,7];
console.log(arrayAverage(arr));

//Question 2:
let even = (n) => {
    if (n%2 == 0){
        console.log("this is even")
    }else{
        console.log("this is not a even number")
    }
    
};
console.log(even(4));

//Question 3:
const object = {
    message: 'Hello , World!',

    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage,1000);

//Question 4
let length = 4;
function callback() {
    console.log(this.length);
}

const object2 = {
    length:5,
    method(callback){
        callback();
    },
};
object2.method(callback,1,2);