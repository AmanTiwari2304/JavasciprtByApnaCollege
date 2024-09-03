//filter out even elements
let arr = [1,2,3,4,5,6,7,8,9];
console.log(arr);

function fun(ele){
    if(ele%2!=0) return true;
    else return false; 
}
brr = arr.filter(fun);
console.log(brr);

crr = arr.filter(function (ele){
    if(ele%2==0) return true;
    else return false; });
console.log(crr);

//just add condition here it will return value
drr = arr.filter(ele => ele<5 );
console.log(drr);