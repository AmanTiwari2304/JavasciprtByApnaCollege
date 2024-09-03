// console.log(document);
// console.dir(document);
// console.dir(document.head);
// console.dir(document.body);
// console.log(document.head);

// document.getElementById("heading")

// let firstEl = document.querySelector("h3");
// console.dir(firstEl);

// console.dir(document.body.firstChild);

// let div = document.querySelector("div");
// console.dir(div)

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "This is your Aman Tiwari";//concatination

let divs = document.querySelectorAll(".box")

let idx = 1;
for (div of divs) {
  div.innerText = `new unique value ${idx}`;
  idx++
}

// console.log(divs[0]);
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";