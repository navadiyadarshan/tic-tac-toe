const boxes = document.querySelectorAll(".box");
const winMess = document.querySelector("#winnerName");
const resetBtn = document.querySelector("#resetGame");
const newBtn = document.querySelector("#newGame")
const hide = document.querySelector(".winner");
const turns = document.querySelectorAll(".turn");
const hideCongra = document.querySelector(".drawHide");
const xCount =document.querySelectorAll(".xWinCount");
const oCount =document.querySelectorAll(".oWinCount");
const drawMatchCount = document.querySelectorAll(".drawMatchCount");
const playerChoice = document.querySelector('.player-choice');
const msg = document.querySelector('#msg');

let xWinCount = 0;
let oWinCount = 0;
let drawCount = 0;

let isSinglePlayer = true;

let whoesTurn = () => {
    if(turns[1].checked == true){
        turnO = true;
        msg.innerText = 'O Turn';
    }else if(turns[2].checked == true){
        turnO = false;
        msg.innerText = 'X Turn';
    }
}

turns.forEach(turn =>{
    turn.addEventListener("click", () =>{
        whoesTurn();
        turns[1].disabled = true;
        turns[2].disabled = true;
    });
});


let winPartten = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let count = 0;

const resetGame = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
    hide.classList.add("hide");
    turns[1].disabled = false;
    turns[2].disabled = false;
    whoesTurn();
    count = 0;
    hideCongra.classList.remove("hide");
    gameDraw = true;
    msg.innerText = `Let's Play`;
}
const newGame = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
    hide.classList.add("hide");
    turns[1].disabled = false;
    turns[2].disabled = false;
    whoesTurn();
    count = 0;
    hideCongra.classList.remove("hide");
    xWinCount = 0;
    oWinCount = 0;
    drawCount = 0;
    checkCount();
    gameDraw = true;
    playerChoice.classList.remove('hide');
    msg.innerText = `Let's Play`;
}

const disableBoard = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};

const enableBoard = () => {
    boxes.forEach(box => {
        if (box.innerText === "") box.disabled = false;
    });
};

boxes.forEach((box) => {
    box.addEventListener("click", async() => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
            msg.innerText = 'X Turn';
        }else{
            box.innerText = "X";
            turnO = true;
            msg.innerText = 'O Turn';
        }
        box.disabled = true;
        turns[1].disabled = true;
        turns[2].disabled = true;
        let winner = checkWinner();

        if(isSinglePlayer &&!turnO && !winner){
            disableBoard();
            await setTimeout(botMove, (Math.floor(Math.random() *2)+0.5)*1000);
        }
    });
});

function botMove(){
    const emptyBoxes = Array.from(boxes).filter(box => box.innerText === "");
    if(emptyBoxes.length === 0) return;

    const randomBox = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    randomBox.innerText = 'X';
    randomBox.disabled = true;
    msg.innerText = 'O Turn';
    checkWinner();
    turnO = true;
    enableBoard();
}

let gameDraw = true;
const showWinner =(winner) =>{
    winMess.innerText = winner;
    hide.classList.remove("hide");
    msg.innerText = `.`;
    if(winner == "X"){
        xWinCount++;
    }else if(winner == "O"){
        oWinCount++;
    }
    checkCount();
    gameDraw = false;
}
const drawMatch =() =>{
    hide.classList.remove("hide");
    winMess.innerText = "Draw Match";
    hideCongra.classList.add("hide");
    drawCount++;
    checkCount();
}

const checkWinner = () => {
    for (let pattern of winPartten){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val){
                showWinner(pos1val);
                disabled();
                return 1;
            }
        }
    }
    if(boxes.innerText != ""){
        count++;
        dMatch();
    }
    return 0;
}

let dMatch = () =>{
    if(count == 9 && gameDraw == true){
        drawMatch();
        msg.innerText = `.`;
    }
}

const disabled = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
let checkCount = () =>{
    oCount.forEach(OC =>{
        OC.innerText = oWinCount;
    });
    xCount.forEach(XC =>{
        XC.innerText = xWinCount;
    });
    drawMatchCount.forEach(DMC =>{
        DMC.innerText = drawCount;
    })
}

document.querySelector("#multiplePlayer").addEventListener("click", () =>{
    isSinglePlayer = false;
    playerChoice.classList.add('hide');
});
document.querySelector("#singlePlayer").addEventListener("click", () =>{
    playerChoice.classList.add('hide');
    isSinglePlayer = true;
});

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", newGame);