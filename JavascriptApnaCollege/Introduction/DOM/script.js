let changeInHeading = document.querySelector("h1");
changeInHeading.innerText = "Krish"

let changeInH2 = document.querySelectorAll("h2");
changeInH2.innerText = "Ritik";

//Selection of element by class :-
let changeInClass = document.getElementsByClassName("oldImg")[1];
console.log(changeInClass);
console.dir(changeInClass);

//Query selectors 
//Allow us to use any CSS selector 

document.querySelector("p");//selects first p element 
document.querySelector("#myId");//select first element with id = myId
document.querySelector(".myClass");//select first element with class = myclass
document.querySelectorAll("p");//select all p elements 

//Manupulating Style 
let links = document.querySelectorAll(".box a");

for (link of links){
    link.style.color = "green";
}
//we do not use too frequently this property of manupulating style
//Because it return the value to inline css not the outline css


//Manupulating Style Using classList
let heading = document.querySelector('h1');
heading.classList.add('green');//now h1 will get all the properties of class green 

heading.classList.add('underline');
heading.classList.remove('green');//this will remove the properties of class green 
heading.classList.contains('green');//this will return a boolean value.this is used to check if class exists
//Toggle means switching between two things off to on & on to off
heading.classList.toggle('green');//it will toggle between add and remove 

//Adding Element 
//appendChild  //Append means adding at last  
let newP = document.createElement('p');
newP.innerText = "Hi ,I am a new p";
let box = document.querySelector('.box');
box.appendChild(newP);

let btn = document.createElement('button');
btn.innerText = "Click me !";
box.appendChild(btn)

//Append : This is used to add new thing is previous appendChild
newP.append(" This is new text ")

//Prepend : Adding at starting
let paraStart = document.createElement('h2');
paraStart.innerText = "This is box heading with prepend";
box.prepend(paraStart);

//InsertAdjacentElement
let para = document.querySelector('p');
let newBtn = document.createElement('button');
newBtn.innerText = "SimpleButton !";
para.insertAdjacentElement('afterbegin',newBtn);
para.insertAdjacentElement('beforebegin',newBtn);
para.insertAdjacentElement('afterend',newBtn);
para.insertAdjacentElement('beforeend',newBtn);

//Remove : Select the object and use .remove to remove the object 
//like appendChild we have removeChild and like append we have removed


//Practice Question 
let redpara = document.createElement('p');
redpara.innerText = "Hey I'm red";
para.appendChild(redpara);
redpara.classList.add('red');

let h2 = document.querySelector('h2')
let bluepara = document.createElement('h2');
bluepara.innerText = " I'm a blue h3";
h2.appendChild(bluepara);
bluepara.classList.add('blue');

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div ";
para2.innerText = "Me too";

div.append(h1);
div.append(para2);
div.classList.add("thirdclass");

document.querySelector("body").append(div);

