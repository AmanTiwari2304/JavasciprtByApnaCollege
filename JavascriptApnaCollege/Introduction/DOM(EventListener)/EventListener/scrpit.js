let h1 = document.querySelector("h1");
let button = document.querySelector("button");
let box = document.querySelector(".box");


button.addEventListener("click",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    box.style.backgroundColor = `rgb(${r1}, ${r2}, ${r3})`;
    h1.innerText = `Rgb(${r1}, ${r2}, ${r3})`;
    h1.style.color =  `rgb(${r1}, ${r2}, ${r3})`;
});


//Use of 'this' in eventListener:
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");
let span = document.querySelector("span");

function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "aqua";
}

h2.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);
span.addEventListener("click",changeColor);

//Here by use of "this" we can easly access all the object at a time
//Otherwise we have to write same code for all the object 


//Keyboard Events:
let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log("code = ", event.code);//ArrowUp,ArrowDown,Arrowleft,ArrowRight
    if (event.code == "ArrowUp"){
        console.log("Character moves forward");
    }else if (event.code == "ArrowDown"){
        console.log("Character moves backward");
    }else if (event.code == "ArrowLeft"){
        console.log("Character moves left");
    }else if (event.code == "Arrowright"){
        console.log("Character moves right");
    }
});