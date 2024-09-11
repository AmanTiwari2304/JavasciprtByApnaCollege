console.log("Traffic Light Rules");
let lightColor = "green";
if(lightColor == "red"){
    console.log("Please stop!")
}
if(lightColor == "yellow"){
    console.log("Please slow down your speed!")
}
if(lightColor == "green"){
    console.log("You can go")
}


console.log("Popcorn price");
let size = "L";
if(size === "XL"){
    console.log(`Price is 200 Rupees ,your popcorn size is ${size}`)
}else if(size === "L"){
    console.log(`Price is 150 Rupees ,your popcorn size is ${size}`) 
}else if(size === "M"){
    console.log(`Price is 100 Rupees ,your popcorn size is ${size}`) 
}else if(size === "S"){
    console.log(`Price is 50 Rupees ,your popcorn size is ${size}`) 
}   

console.log("nested ifelse");
console.log("Let see what is your performance:-");
let marks = 23;
if(marks >= 33){
    console.log("You have pass this exam !" )
    if (marks >= 80) {
        console.log("Your performance is outstanding, Well Done!" )
    } else {
       console.log("Your performance is good, Well Done!") 
    }
}else{
    console.log("Better luck,Try again")
}

//Practice Question
let para = "raman"
if (para[0] === "a" && para.length>3) {
    console.log("good string")
} else {
    console.log("not a good string")
    
}

let num = 12;
if ((num%3 === 0) && (num+1 == 15) || (num-1 == 11)) {
    console.log("safe");
} else {
    console.log("unsafe");
}

console.log("Switch statement");
let weekDay = 10;
switch(weekDay){
    case 1:
        console.log("Monday");
        break;
    case 2:
         console.log("Tuesday");
         break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
         console.log("Thursday");
         break;
    case 5:
       console.log("Friday");
       break;     
    case 6:
       console.log("Saturday");
       break;
    case 7:
     console.log("Sunday");
     break;
    
    default:
      console.log("Please take number between 1 & 7");
}  


console.log("Alert & Prompt");
let firstName = prompt("Enter your name : ");
console.log(firstName);

alert("How are you ?");

