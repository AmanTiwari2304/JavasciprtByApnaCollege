let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async() =>{
    let country = document.querySelector("input").value
    let collArr = await getCollege(country);
    show(collArr);
})
function show(collArr) {
    let list = document.querySelector("#list")
    list.innerText = ""
    for (col of collArr) {
      let li = document.createElement("li")
      li.innerText = col.name;
      list.appendChild(li);
    }
}

async function getCollege(country) {
    try {
      let res =  await axios.get(url + country);
      return res.data;
    } catch (error) {
        console.log("error : ",error);
        return [];
    }
}