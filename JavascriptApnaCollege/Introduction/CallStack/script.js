function one() {
    return 1;
}

function two() {
    return 2;
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();

//To see CallStack visually go to Source (near console)