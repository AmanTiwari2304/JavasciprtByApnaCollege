
//Use of "this"
//without use of "this" we can not access key of any object 

const student ={
    name: "aman",
    age:19,
    eng:95,
    math:93,
    phy:97,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg} `)
    }
}

//Try & Catch:-
//The try statement allow  you to define a block of code to be tested for errors while it is being executed.
//The catch statement allow you to define a block of code to be executed,if an error occurs in the try block.

console.log("hello");
console.log("hello");
//let a = 5;
try {
    console.log(a);
} catch (error) {
    console.log("caught an error... ");
    console.log(error);
}

console.log("hello2");
console.log("hello2");
console.log("hello2");