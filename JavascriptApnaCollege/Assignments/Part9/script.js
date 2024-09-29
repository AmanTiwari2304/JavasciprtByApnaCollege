//Question 1
let input = document.createElement("input");
let button = document.createElement("button");

button.innerText = "Click me"

let body = document.querySelector("body")
body.append(input)
body.append(button)

//Question 2
input.setAttribute("placeholder","username");
button.setAttribute("id","btn");

//Question 3
let btn1 = document.querySelector("btn");
btn.style.backgroundColor = "blue";
btn.style.color = "white";

//Question 4
let h1 = document.createElement("h1");
body.append(h1);
h1.innerText = "DOM Practice";
h1.style.textDecoration = "underline";
h1.style.color = "purple";

//Question 5
let p = document.createElement("p");
body.append(p);
p.innerHTML = "Apna College <b> Delta </b> Practice";