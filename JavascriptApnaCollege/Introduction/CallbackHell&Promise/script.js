function savetoDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random()*10) +1 ;
        if(internetSpeed > 4){
            resolve("success : data was saved");
        }else{
            reject("failure: weak connection");
        }
    })
}

savetoDB("Aman Tiwari")
.then( (result) => {
    console.log("data 1 saved");
    console.log("result of promise : ",result);
    return savetoDB("ApnaCollege");
})
.then( (result) => {
    console.log("data 2 saved");
    console.log("result of promise : ",result);
    return savetoDB("Hello World")
})
.then( (result) => {
    console.log("data 3 saved");
    console.log("result of promise : ",result);
})
.catch( (error) => {
    console.log("Promise was rejected");
    console.log("error of promise : ", error);
});