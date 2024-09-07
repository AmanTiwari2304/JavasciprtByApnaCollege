//Question 1
console.log("Question 1");
let num = 123;
if (num % 10 === 0) {
    console.log("Good");
} else {
    console.log("Bad");
}

//Question 2
// console.log("Question 2");
// let firstName = prompt("Enter your name : ");
// let age = prompt("Enter your age : ")
// alert(`${firstName} is ${age} years old.`)
// console.log(`${firstName} is ${age} years old.`)

//Question 3
console.log("Question 3");
let quarter = 2;
switch (quarter){
    case 1:
       console.log("Months in Quarter 1 : January,February,March");
       break;
    case 2:
       console.log("Months in Quarter 2 : April,May,June");
       break;
    case 3:
        console.log("Months in Quarter 3 : July,August,September");
        break;
    case 4:
        console.log("Months in Quarter 4 : Octuber,November,December");
        break;
    default:
        alert("Please enter a number between 1 & 4");
}

//Question 4
console.log("Question 4");
let str = "Aman Tiwari"
if ((str[0] === "A" || str[0] === "a") && (str.length>5)) {
    console.log("golden string");
} else {
    console.log("not a golden string");
}

