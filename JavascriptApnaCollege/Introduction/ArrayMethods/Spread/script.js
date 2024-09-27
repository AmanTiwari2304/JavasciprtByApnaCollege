//Spread:
//Expands an iterable into multiple values

let arr = [1, 2, 3, 4, 5, 6 , 7, 8, 9];
console.log(...arr)
console.log(Math.min(...arr));

let source = "Apnacollege";
console.log(...source);

//Spread(Array Literals):
let newArr = [...arr];
console.log(newArr);

let chars = [..."hello"];
console.log(chars);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let nums = [...even,...odd];
console.log(nums);

//Spread (Object literals):

let data = {
    email: "ironman@gmail.com",
    password: "absc"
};
let dataCopy = { ...data, id:134};

//Rest:
//Allow a function to take an indefinte number of arguments and bundle them in an array 
function sum(...args){
    return args.reduce((sum,el) => sum + el);
}

function min(msg, ...args){
    console.log(msg);
    return args.reduce((min,el) =>{
        if(min > el){
            min = el;
        }
    });
};

//Destructuring :Storing values of array into multiple variables

let names = ["tony", "maxswell","steve","krish","mohit","russel","hardik"];
// let winner = names[0];
// let runnerup = names[1];
// let secondrunnerup = names[2]; //This is a way to store data but we can use the following method :-

let [winner, runnerup, secondrunnerup,] = names;
console.log(winner);
console.log(runnerup);
console.log(secondrunnerup);


// let [winner, runnerup, secondrunnerup,...others] = names;
// console.log(winner);
// console.log(runnerup);
// console.log(secondrunnerup);
// console.log(others);

let [...xyz] = names;
console.log(xyz)

//Destructuring (Objects):-
let student = {
    name:"karan",
    age:19,
    class:12,
    subject:["hindi","english","math","Physics","Chemistry"],
    username:"karan@123",
    password:"abcd"
};

//Basic method :-
// let username = student.username;
// let password = student.password;
// let age = student.age;

let {username,password} = student;
console.log(username);//Now we can directly access user name , we have not to write whole thing student.username .
console.log(password);

let {username : user,password : secretcode} = student;
//if now we will print by using console.log() we will get undefined value
//To get the value of user we have to do this:-
console.log(user)//it will return username