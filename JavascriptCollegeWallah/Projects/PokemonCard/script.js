let main = document.getElementById("main")
let arr = ["https://i.pinimg.com/236x/44/0c/a9/440ca9f70eb5d6f3c7b1891c0ce922b2.jpg",
    "https://i.pinimg.com/236x/35/e0/be/35e0be005797f7c07dc54ed77d829789.jpg",
    "https://i.pinimg.com/236x/85/b3/d1/85b3d11ce6fa02fae323fc4c5f50473a.jpg",
    "https://i.pinimg.com/564x/c1/8e/89/c18e89fdba5f50bad220f2c5fdff58da.jpg",
    "https://i.pinimg.com/236x/49/7f/d2/497fd2e1af869bdb3a580d60479c3796.jpg",
    "https://i.pinimg.com/564x/7a/ab/ee/7aabee64342e3b8ce3f9bd53111166c1.jpg",
    "https://i.pinimg.com/236x/fe/f0/79/fef079d717b8b2fce2efa84000435a8e.jpg",
    "https://i.pinimg.com/236x/91/a8/6b/91a86bd8a404e0dacb43124b200855ad.jpg",
    "https://i.pinimg.com/236x/95/fc/f1/95fcf13f4b4ff3a65ed8a89fc187f248.jpg"];
    let s = "";
for( let i=1;i<=40;i++){
    let r = Math.floor(Math.random()*arr.length);
    s += `<div class="card"><img src=${arr[r]}></div>`;  
}
main.innerHTML = s;  


