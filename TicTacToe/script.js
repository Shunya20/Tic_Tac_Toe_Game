let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let newgamebtn = document.querySelector(".newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true; //player X, player O

const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


const resetgame= () =>{
    turnO = true;
    enablebox();
    msgcontainer.classList.add("hide");
}


boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        // console.log("You clicked.");
        if(turnO==true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();

    });
});


const disablebox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enablebox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showwinner = (winner) =>{
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
}

const checkwinner=()=>{
    for(let pattern of winpattern){

        // console.log(pattern[0],pattern[1],pattern[2]);

        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );

       let pos1 =  boxes[pattern[0]].innerText;
       let pos2 =  boxes[pattern[1]].innerText;
       let pos3 =  boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 ==  pos3){
                // console.log("winner",pos1);

                showwinner(pos1);
            }
        }
    }
};


newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

