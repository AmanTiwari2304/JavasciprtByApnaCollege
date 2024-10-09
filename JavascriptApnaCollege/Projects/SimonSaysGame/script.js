let gameSeq = [];
let userSeq = [];

let btns = ["box1","box2","box3","box4"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress",function() {
    if (started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(boxStyle) {
    box-style.classList.add("flash");
    setTimeout(function () {
        box-style.classList.remove("flash");
    },250);
}

function userFlash(boxStyle) {
    box-style.classList.add("userflash");
    setTimeout(function () {
        box-style.classList.remove("userflash");
    },250);S

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randBox = btns[randIdx];
    let randBtn = document.querySelector(`#${randBox}`);
    gameSeq.push(randBox);
    console.log(gameSeq);
    gameFlash(randBtn);
};

function btnPress() {
    console.log(this)
    let btn = this;
    userFlash(btn);

    
}

let allBtns = document.querySelectorAll(".boxStyle");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
};