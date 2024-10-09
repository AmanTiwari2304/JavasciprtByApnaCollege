let url = "http://universities.hipolabs.com/search?name=india";
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let list = document.querySelector("#list");

btn.addEventListener("click", async () => {
    let state = inp.value;
    console.log("btn was click");
    let collegeArr =  await collegeList(state);
   unorderList(collegeArr);
});

function unorderList(collegeArr){
    list.innerText = " ";
    for (college of collegeArr) {
      let li = document.createElement("li")
      li.innerText = college.name;
      list.appendChild(li);
    }
}

async function collegeList() {
    try {
      let res =   await axios.get(url);
      return res.college.state-province;
    } catch (error) {
        console.log("error: ",error)
    }
}




//Country list
// btn.addEventListener("click", async() =>{
//     let country = document.querySelector("input").value
//     let collArr = await getCollege(country);
//     show(collArr);
// })
// function show(collArr) {
//     let list = document.querySelector("#list")
//     list.innerText = ""
//     for (col of collArr) {
//       let li = document.createElement("li")
//       li.innerText = col.name;
//       list.appendChild(li);
//     }
// }

// async function getCollege(country) {
//     try {
//       let res =  await axios.get(url + country);
//       return res.data;
//     } catch (error) {
//         console.log("error : ",error);
//         return [];
//     }
// }