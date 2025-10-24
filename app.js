let gameBtn = document.querySelectorAll(".game-btn");
let resetBtn = document.querySelector(".reset-button");
let newGameBtn = document.querySelector(".new-game");
let msgContainer = document.querySelector(".msg-container");
let msgWinner = document.querySelector(".congo");

let playerO = true;

const resetGame = () =>{
  playerO = true;

  gameBtn.forEach(element => {
    element.disabled = false;
    element.innerText = "";
    msgContainer.classList.add("hide");
  });
};

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

gameBtn.forEach(element => {
  element.addEventListener("click", () => {
    if(playerO) {
      element.innerText = "O";
      playerO = false;
    } else {
      element.innerText = "X";
      playerO = true;
    }

    element.disabled = true;

    checkWinner();
  });
});

const winnerPopUp = (winner) => {
  msgWinner.innerText = `Congoo! Player ${winner}`;
  msgContainer.classList.remove("hide");
}

const checkWinner = () => {
  winPattern.forEach(element => {
    let pos2 = gameBtn[element[0]].innerText;
    let pos1 = gameBtn[element[1]].innerText;
    let pos3 = gameBtn[element[2]].innerText;
    if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
      if(pos1 === pos2 && pos2 === pos3){
        winnerPopUp(pos1);
        gameBtn.forEach(element => {
          element.disabled = true;
        })
      }
    }
  });
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);