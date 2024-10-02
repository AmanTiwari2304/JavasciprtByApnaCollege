let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();//PreventDefault prevent you to go default page it will held you on same page.

    //let user = this.element[0]; //by using this we can remove the query selector
    //let pass = this.element[1];
    
    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`)
});

//Change Event : The change event occurs when the value of an element has been changed (only work on <input>,<textarea>,and <select> element)
//For bigger changes
user.addEventListener("change",function (){
    console.log("change event");
    console.log("final value = " , this.value);
});

//Input Event : the input event fires when the value of an <input>,<select>,or <textarea> element has been changed.
user.addEventListener("input",function (){
    console.log("input event");
    console.log("final value = " , this.value);
});