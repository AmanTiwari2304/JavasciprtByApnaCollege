let primary =["red" ,"yellow","blue"];
let secondary = ["orange","green","violet"];

console.log(primary.indexOf("yellow"));
console.log(primary.indexOf("blue"));
console.log(primary.indexOf("pink"));

console.log(primary.includes("yellow"));
console.log(primary.includes("pink"));

//Concatication
console.log(primary.concat(secondary));
console.log(primary);
console.log(secondary.concat(primary));

//Reverse
console.log(primary.reverse());//array is mutable  
console.log(primary);

//Slice is immutable , it does not changes the original array
let colors =["red" ,"yellow","blue","orange","green","violet"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2,3));
console.log(colors.slice(-2))

//Splice is mutable ,it changes the original array
//Splice : removes/replace/add elements in place 
//Splice(start,deleteCount,item0...itemN)
console.log(colors.splice(4));
console.log(colors);
console.log(colors.splice(0,1));
console.log(colors);
console.log(colors.splice(0,1,"black","grey"));
console.log(colors);
console.log(colors.splice(2,0,"pink"));
console.log(colors);
console.log(colors.splice(3,1,"aqua",));
console.log(colors);

//Sorting
console.log(colors.sort());
let cars = ['toyota','farrari','xuv','bmw','maruti','gwagon'];
console.log(cars.sort());