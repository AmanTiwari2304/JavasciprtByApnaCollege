async function greet () {
    return "Hello" ;
}
greet()
.then( () => {
    console.log("Promise was successful");
})
.catch( (error) => {
    console.log("Promise was rejected with error: ", error);
})

//Async can also used with arrow function :-

let demo = async() => {
    return 5;
} 


//Await :- Pauses the execution of its surrounding async function until the promise is settled (Resolved or rejected);

function getNum() {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random ()*10) +1 ;
            console.log(num);
            resolve("Color changed");
        },1000);
    });
}

async function getDemo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}
getDemo();


//Change in Color with error handling:
let h1 = document.querySelector("h1");

function changeColor(color,delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*5) + 1;
            if(num > 3) {
                reject("promise rejected")
            }

            h1.style.color = color;
            console.log(`color changed to ${color} !`)
            resolve();
        }, delay);
    })
}

async function getColor() {
 try{ await changeColor("red",5000);
    await changeColor("green",3000);
    await changeColor("blue",1000);
    await changeColor("yellow",1000);
    changeColor("orange",1000);
 } catch(err){
    console.log("error caught")
    console.log(err);
 }


    let a = 5;
    console.log(a);
    console.log("new number = ",a+3);
}
getColor();