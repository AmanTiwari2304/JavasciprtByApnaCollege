//Example of CallbackHell

function savetoDB (data,success,failure){
    let internetSpeed = Math.floor(Math.random()*10) + 1 ;
    if(internetSpeed > 4){
        success();
    }else{
        failure();
    };
};

savetoDB(
    "Aman Tiwari",
    () => {
        console.log("success: your data is saved ");
        savetoDB(
            "Apna College",
            () => {
                console.log("success2 : second data is also saved ");
                savetoDB(
                    "Hello World",
                    () => {
                        console.log("success3 : third one is also saved");
                    },
                    () => {
                        console.log("failure : weak connection ")
                    }
                )
            },
            () => {
                console.log("failure : weak connection")
            }
        )
    },
    () => {
        console.log("failure : weak connection")
    }
)