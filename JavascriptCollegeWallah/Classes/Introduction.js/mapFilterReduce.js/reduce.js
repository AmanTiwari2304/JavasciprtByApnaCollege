let arr = [1,2,3,5,7,56];
console.log(arr);

let x = arr.reduce(function(a,b){
    return a+b;
})
console.log(x)

let y = arr.reduce((a,b)=> a*b)
console.log(y)