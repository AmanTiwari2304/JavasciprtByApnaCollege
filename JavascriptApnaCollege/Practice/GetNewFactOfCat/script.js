let btn1 = document.querySelector("#CatFact");
let para = document.querySelector("p");

let url = "https://catfact.ninja/fact";

btn1.addEventListener("click",function(){
    console.log("btn was clicked")
    
    return catfact()
})

async function catfact() {
    try {
    let response = await axios.get(url);
    let ans = response.data.fact;
    para.innerText = ans;
    } catch (error) {
        para.innerText = "CHECK RESPONSE SOMETHING IS GOING WRONG"
    }
    
}

// let btn2 = document.querySelector("#DogImage ");
// let imgSource = document.querySelector("#Image");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn2.addEventListener("click", async function(){
//  console.log("button 2 was clicked")

//  let link =  await dogImage();
 
//  imgSource.setAttribute("src", link);
   
// });

// async function dogImage() {
// try {
//     let dogRes = await axios.get(url2);
//     return dogRes.data.message;
    
// } catch (error) {
//     console.log("error - ", error)
// }
// }

let btn2 = document.querySelector("#DogImage ");
let imgSource = document.querySelector("#Image");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn2.addEventListener("click", async function(){
 console.log("button 2 was clicked")

  await dogImage();
 
});

async function dogImage() {
try {
    let dogRes = await axios.get(url2);
    let dogAns = dogRes.data.message;
    imgSource.setAttribute("src", dogAns);
    
} catch (error) {
    console.log("error - ", error)
}
}