//Obejct
var person={
    name:"Aman Tiwari",//here:name is key and Aman Tiwari is value
    age:21,
    hobby:"Cricket",
    percentage :85,
    'is Married':false
};
console.log(person);
console.log(person.hobby);
console.log(person["is Married"])//it is string so use backet instade of . dot

for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        console.log(key, person[key]);
        
    }
}
