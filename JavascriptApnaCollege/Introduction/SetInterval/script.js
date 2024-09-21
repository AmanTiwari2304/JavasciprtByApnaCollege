//Set interval :- It is same as setTimeout but it will return the same value after the every interval 

let ida =  setInterval( () => {
    console.log("Apna College");
},2000);
clearInterval(ida);


let id2 =  setInterval( () => {
    console.log("Hello World");
},3000);


setTimeout(() => {
clearInterval(id2);
console.log("Interval cleared");
},10*1000)

clearInterval(id2);
console.log("Interval cleared");

//"This" with arrow functions:-

const student = {
    name: "aman",
    marks: 95,
    prop : this,//global scope
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);//parent's scope -> window 
        return this.marks;
    }
}