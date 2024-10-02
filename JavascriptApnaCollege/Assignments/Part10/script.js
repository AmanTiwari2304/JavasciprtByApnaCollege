let body = document.querySelector("body");
let btn = document.createElement("button");
btn.innerText = "Click me";
body.appendChild(btn);

btn.addEventListener("click",function(){
    btn.style.backgroundColor = "green"
});

function validateInput() {
    const inputElement = document.getElementById("nameInput");
    const headingElement = document.getElementById("nameHeading");
    
    // Only allow letters (a-z, A-Z) and spaces using regex
    const allowedCharacters = /^[a-zA-Z ]*$/;
    let inputValue = inputElement.value;

    // Remove any characters not allowed
    inputValue = inputValue.split('').filter(char => allowedCharacters.test(char)).join('');
    
    // Update the input field with only valid characters
    inputElement.value = inputValue;

    // Display the input in the heading
    headingElement.textContent = inputValue;
}
