//Scope:-

let sum = 54;//Global scope it can be used at any place ;

function calSum(a,b){
    let sum = a+b;//Funtion Scope,it can only used inside the function;
    console.log(sum);
};

calSum(3,4)
console.log(sum);

//Block Scope:- Variables declared inside a {} block cannot accessed from outside the block.

{
    let a = 35 ;
}

// console.log(a);
//This will give us error ,because 'a' is only define inside the curly braces it cannot be access out side the braces.



//Lexical Scope:-
//A variable defined outside a funtion can be accessible inside another function defined after the variable declaration.

function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        console.log(x);
    }
    innerFunc();
};
outerFunc();


//What will be the output ?

let greet = "hello";

function changeGreet () {
    let greet = "namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
        
    }
    innerGreet();

}

console.log(greet);
changeGreet();


//Higher Order Function :-
function multipleGreet(func,count){
    for (let i=1; i<=count; i++){
        func();
    }
}

let greeting = function(){
    console.log("hello");
}

multipleGreet(greeting , 10);

function oddOrEvenFactory(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2 == 0));
        }
        return odd;
    }
    else if(request == "even"){
        let even = function(n){
            console.log(n%2 == 0);
        }
        return even;
    }
    else{
        console.log("wrong request");
    }
}

console.log(oddOrEvenFactory("even"));

//Arrow Function :-

const add = (a,b) =>{
    console.log(a+b);
};

const pow = (a,b) => {
    return a**b;
};

//Implicit Function 
const mul = (a,b) => (a*b);