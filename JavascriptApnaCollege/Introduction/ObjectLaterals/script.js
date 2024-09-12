let twitterPost = {
    Username : "Aman Tiwari",
    Content : "Javascript",
    Likes : 2304,
    Reposts : 92005,
    Tags : "javascriptlearner"
};

console.log(twitterPost);
console.log(twitterPost.Reposts);
console.log(twitterPost["Reposts"]);
console.log(twitterPost["Username"]);


//Add and Delete
let student = {
    name : "Aman Tiwari",
    age : 19,
    city : "Prayagraj",
    marks : 85,
};
console.log(student);
student.city = "Delhi"
console.log(student);
student.gender = "male";
console.log(student);
delete student.marks;
console.log(student);


//ObjectInObject :-

const objectinobject = {
   id1:{
    name : "Aman Tiwari",
    age: 19,
    gender: "male",
    course: "BCA"
   },
   id2:{
    name : "Neha Tiwari",
    age: 21,
    gender: "female",
    course: "BA"
   },
   id3:{
    name : "Mona Tiwari",
    age: 23,
    gender: "female",
    course: "MA"
   },
   id4:{
    name : "Ankita Tiwari",
    age: 27,
    gender: "female",
    course: "Phd"
   },
};

console.log(objectinobject);
objectinobject.id1.salary = 3500000;
console.log(objectinobject);

//Object in Array:-
let arr = [
    {
        name : "Aman Tiwari",
        age: 19,
        gender: "male",
        course: "BCA"
       },
    {
        name : "Neha Tiwari",
        age: 21,
        gender: "female",
        course: "BA"
       },
    {
        name : "Mona Tiwari",
        age: 23,
        gender: "female",
        course: "MA"
       },
    {
        name : "Ankita Tiwari",
        age: 27,
        gender: "female",
        course: "Phd"
       }
]

console.log(arr);

console.log(arr[3].name);


//MATH :-

Math.floor(Math.random()*10);//for 0 - 9
Math.floor(Math.random()*10) +1;//for 1 -10
Math.floor(Math.random()*100) +1;//for 1 - 100
Math.floor(Math.random()*5) +1;//for 1 - 5
Math.floor(Math.random()*5) +20;// for 20 - 25


//Guessing a Number 
let   maxnum = prompt("Enter a max number upto you want to play");
let  usernum = prompt("Guess a random number");
let randomnum = Math.floor(Math.random()*maxnum) + 1; 
while(true){
    if(usernum == "quit"){
        console.log("user quit");
        break;
    }

    if (usernum == randomnum ) {
     console.log(`Congratulation ,you guess ${usernum} is same as ${randomnum} which is right ! `)
     break;
    } 
    
    else if(usernum < randomnum){
        usernum = prompt("Hint : Your guess is lessthan random number,please try again");
    }
    else{
        usernum = prompt("Hint: Your guess is morethan random number,please try again")
    }
}