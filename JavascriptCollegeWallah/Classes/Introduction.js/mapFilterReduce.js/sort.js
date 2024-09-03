let arr = [4,3,7,9,1];
console.log(arr);

brr = arr.sort();//assending order of sorting
console.log(brr);

crr = arr.sort( (a,b)=> b-a);//desending order
console.log(crr);

let drr = [4,3,7,-9,-1];
console.log(drr);
err = drr.sort();
console.log(err);
//ye wrong sorting deta hai negative numbers me

//Proper method of solving into assending order is:

frr = drr.sort( (a,b)=> a-b);
console.log(frr);
