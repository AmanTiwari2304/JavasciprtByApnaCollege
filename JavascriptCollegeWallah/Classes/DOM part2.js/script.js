// let div = document.querySelector("div");
// console.log("div");

// let id = div.getAttribute("id");
// console.log("id");


let newBtn = document.createElement("botton");
newBtn.innerText = "click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn)