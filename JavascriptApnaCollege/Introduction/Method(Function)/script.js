
const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    },
};
console.log(calculator.add(4,5));
console.log(calculator.mul(4,5));
console.log(calculator.sub(9,5));


// Methods (Shorthand)
const calculation = {
    add(a,b) {
        return a+b;
    },
    sub(a,b) {
        return a-b;
    }
}