let s = "aman";
 console.log(s,s.length);
// for(let i=0;i<=s.length;i++){
//     console.log(s[i]);
// }

for (const char of s) {
    console.log(char);
}

//foreach loop does not work in string