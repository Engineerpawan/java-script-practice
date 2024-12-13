const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener("click", (e) => {
        console.log(e);
        if(e.target.id==="gray"){
            body.style.backgroundColor = "grey";
        }
        else if(e.target.id==="red"){
            body.style.backgroundColor = "red";
        }
        else if(e.target.id==="blue"){
            body.style.backgroundColor = "blue";
        }
        if(e.target.id==="orange"){
            body.style.backgroundColor = "pink";
        }
    })
})