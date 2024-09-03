let x = document.getElementById("ele1");
let y = document.getElementById("ele2");
let z = document.getElementById("ele3");

x.addEventListener("click",function(){
    x.style.color = "yellow";
    x.style.backgroundColor = "red";
})


y.addEventListener("mouseenter",function(){
    y.style.color = "white";
    y.style.backgroundColor = "orange";
})

y.addEventListener("mouseleave",function(){
    y.style.color = "black";
    y.style.backgroundColor = "white";
})

z.addEventListener("click",function(){
    x.style.color = "white";
    x.style.backgroundColor = "Green";
    x.innerHTML = "Bulbasaur"
})

z.addEventListener("mouseenter",function(){
    z.style.color = "black";
    z.style.backgroundColor = "purple";
})