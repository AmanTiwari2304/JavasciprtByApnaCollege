function hello(){
    console.log("hello");
}
function mello(){
    console.log("mello");
}

setTimeout(hello,3*1000);//here use of hello funtion is term as callback funtion
setTimeout(mello,8*1000);