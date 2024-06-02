console.log("Welcome to Tic tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"

// Function to change the turn
const changeTurn = () =>{
    return turn ==="X"?"0": "X"
}

// Function to check for a win
const checkWin = ()=>{

}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = document.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText == ' '){
            boxtext.innerText = turn;
            changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName("turn")[0].innerText = "Turn for "+ turn;
        }
    })
})