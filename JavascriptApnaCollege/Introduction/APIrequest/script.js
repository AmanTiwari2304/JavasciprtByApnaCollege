let url = "https://catfact.ninja/fact";

fetch(url)
.then((res) => {
    console.log(res);
    return res.json();
})
.then((data) => {
    console.log(data);
    return fetch(url);
})
.then((res) => {
    return res.json();
})
.then((data2) => {
    console.log(data2.fact);
})
.catch((err) => {
    console.log(err)
})


//using fetch with async-await

async function getFacts() {
    try {
        
        let res = await fetch(url)
        let data3 = await res.json();
        console.log(data3.fact) 
    } catch (error) {
        console.log("error - ",e)
    }
}

getFacts();

//Axios is a library to make HTTP requests

async function getFacts() {
    try {
        let res2 = await axios.get(url)
        console.log(res2.data.fact) 
    } catch (error) {
        console.log("error - ",e)
    }
}

getFacts();
