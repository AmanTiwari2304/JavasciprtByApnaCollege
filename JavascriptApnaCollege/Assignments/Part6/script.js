//Question 1
//Element larger than a number num

let arr = [8,6,7,5,6,2,10,8,5];
let num = 7;

function getElements(arr,num) {

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
getElements(arr,num);

//Question 2
//function to get string with all unique element 

let string1 = "abcdabcdefgggh";
function getUnique(string1) {
    let ans = "";
    for (let i=0; i<string1.length; i++){
        let currChar = string1[i];
        if (ans.indexOf(currChar) == -1){
            ans += currChar;
        }
    }
    return ans;
}
getUnique(string1)




//Question 4
let str = "Javascript";
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (
            str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u" 
        )
        {
            count++;
        }
    }
   return count;
}
console.log(countVowels(str));



//Question 5 :-
// let randomnum = function(s,e){
//     let diff  = e - s;
//     return Math.floor(Math.random()*diff) + s;
    
// };

// console.log(randomnum(5,15));

