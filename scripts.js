
let character = document.getElementById("character");
let block = document.getElementById("block");
let score = document.getElementById("score");
let bestScore = document.getElementById("bestScore");
let punteggio=0;
let best=0;

document.addEventListener("keypress",()=>{
    jump();
    block.style.animation="block 1s infinite linear"
})

function jump() {
    character.classList.add("animate");
    setTimeout(()=>{
        character.classList.remove("animate")
        count();
    },500)
}

let checkDead = setInterval(()=>{
    let characterPosition = parseInt(window.getComputedStyle(character).
    getPropertyValue("top"));
    let blockPosition = parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));
    if(characterPosition>=124 && blockPosition<20 && blockPosition>-23) {
        block.style.animation = "none";
        alert("HAI PERSO! XD");
        punteggio = 0;
    }
},10)

function count() {
    punteggio = punteggio+1;
    console.log(punteggio);
    score.innerText = "Score:"+punteggio;
    if(punteggio>best){
        bestScore.innerText = "Best score:"+punteggio;
        best = punteggio;
    }
}




