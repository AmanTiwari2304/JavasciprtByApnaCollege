//Question 1
let msg = "help!";
console.log(msg.trim().toUpperCase());
console.log(msg.indexOf)

//Question 2
let name = "ApnaCollege";
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna","Our"));
console.log(name.slice(4,12).replace("l","t"));

let start = ['january','july','march','august'];
console.log(start.shift());
console.log(start.shift());
console.log(start.unshift('june'));
console.log(start.unshift('july'));
console.log(start);

//Question 3
let monthName = ['january','july','march','august'];
console.log(monthName.splice(0,2,"july","june"));
console.log(monthName);


//Question 4
let language = ['c','c++','html','javascript','python','java','c#','sql'];
console.log(language);
console.log(language.reverse().indexOf("javascript"));

//Question 5
let tic_tac_toe = [["X",null,"O"],[null,"X",null],["O",null,"X"]];
console.log(tic_tac_toe);
tic_tac_toe[0][1] = "O";
console.log(tic_tac_toe);