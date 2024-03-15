let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true //player X,  player O

// let = ["banana", "mango", "apple"];

// let arr2 = [ ["mango", "apple"], ["potato", "mashroom"], ["shirts", "pants"]];

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        // console.log("box was clicked");
        // box.innerText = "Abc";

        if(turnX){               //player O
            box.innerText = "X";
            box.classList.add("x-color");
            box.classList.remove("o-color");
            turnX = false;
        }
        else{                        //player X
            box.innerText = "O";
            box.classList.add("o-color");
            box.classList.remove("x-color");
            turnX = true;
        }

        box.disabled = true;

        checkWinner();
    })
})

const resetGame = ()=>{
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

const enableBoxes= () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxex = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratualation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxex();

}

const checkWinner = ()=>{

    for(let pattern of winPatterns){
        // console.log(pattern)
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //              boxes[pattern[1]].innerText, 
        //              boxes[pattern[2]].innerText);
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText; 
            let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                // console.log("winner", pos1val);
                showWinner(pos1val); 
            }
        }
    }

}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)