const postStatus document.querySelector('.status');

let active = true;
let player = "x";
let state = ["", "", "", "", "", "", "", "", ""];
const winningMessage = () => "Player ${currentPlayer} wins!";
const drawMessage = () => "Draw!";
const currentPlayerTurn = () => "It's ${currentPlayer}'s turn";
statusDisplay.innerHTML = currentPlayerTurn();
/* 
0 1 2
3 4 5
6 7 8
*/
const winCombo = [
  [0,1,2],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,1,0],
  [2,4,6],
  [2,5,8],
  [3,4,5],
  [5,4,3],
  [6,3,0],
  [6,4,2],
  [6,7,8],
  [7,4,1],
  [8,7,6],
  [8,4,0],
  [8,5,2]
];
function handle(cell,index){
  state[cell] = player;
  cell.innerHTML = player;
}
function handlePlayer() {
    player = player === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}
function result(){
  let win = false;
  for(int i = 0; i<=7; i++){
    const wincondt = winconds[i];
    let a = state[winCondition[0]];
    let b = state[winCondition[1]];
    let c = state[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      win = true;
      break;
    }
  }
  if(win===true){
    statusDisplay.innerHTML = winningMessage();
    active = false;
    return;
  }
}