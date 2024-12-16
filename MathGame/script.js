const num1 = Math.floor(Math.random()*10)+1;
const num2 = Math.floor(Math.random()*10)+1;


let questions = document.getElementById("question")
const inputs = document.getElementById("input");
const form = document.getElementById("form");
const scores = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}
scores.innerHTML = `Score : ${score}`;

questions.innerHTML = `Whai is ${num1} Multiply by ${num2}`;

const multiAns = num1 * num2;

form.addEventListener("submit", () => {
    const userAns = +inputs.value
    if(userAns === multiAns){
        score++;
       updateAns();
    }else{
        score--;
        updateAns();
    }
});

function updateAns(){
    localStorage.setItem("score", JSON.stringify(score))
}