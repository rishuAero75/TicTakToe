// Select all elements with the class 'box'
const boxes = document.querySelectorAll(".box"); 
let reset = document.querySelector("#reset");
let newGamebtn = document.querySelector("#new_btn");
let msgcontainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");

let turnO = true; // player X, player Y

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");

};


// Iterate over each box and add a click event listener
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if(turnO){
            box.innerText ="O";
            turnO = false;
        }else{
            box.innerText ="X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();

    });
});

const disableBoxes = ()=>{
     for(let box of boxes){
        box.disabled = true;
     }
     };
const enableBoxes = ()=>{
    for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
    }
};    

const showwinner =(winner)=>{
       msg.innerText = `Congratulations , winner is ${winner} `;
       msgcontainer.classList.remove("hide");
       disableBoxes();
}
const checkWinner =()=>{
    for(patten of winpatterns){
        let pos1val = boxes[patten[0]].innerText;
        let pos2val = boxes[patten[1]].innerText;
        let pos3val = boxes[patten[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                
                showwinner(pos1val);
            

            }
            
        }
    };
};

newGamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);