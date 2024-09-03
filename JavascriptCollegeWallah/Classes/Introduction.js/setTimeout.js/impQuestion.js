//print 1 to 10 but with delay of 1 sec after each number gets printed.

for(let i=1;i<=10;i++){
    setTimeout(() => {
        console.log(i)
    },i*1000);//1000=>1second
}

//print 10 to 1 but with delay of half sec after each number gets printed.

for(let i=1;i<=10;i++){
    setTimeout(() => {
        console.log(11-i)
    }, i*500);
}