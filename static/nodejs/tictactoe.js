const postStatus document.querySelector('.status');

let state = ["", "", "", "", "", "", "", "", ""];
let player = "x";
let active = true;
const win = "Winner is: " + player;
const drawMessage = "Draw!";
const currentPlayerTurn = "Turn: " + player;
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
    let a = state[wincondt[0]];
    let b = state[wincondt[1]];
    let c = state[wincondt[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b === c) {
      win = true;
      break;
    }
  }
  if(win===true){
    statusDisplay.innerHTML = winningMessage();
    active = false;
    return;
  }
  var draw = !state.includes("");
  if (win == true){
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  
  }
  handlePlayer();
  
}
function click(clicked){
  const pressed_cell = clicked.target;
  const clicked_index = parseInt(pressed_cell.getAttribute('data-cell-index'));
  if(state[clicked_index] !==  "" || !active){
    return;
  }
  handle(pressed_cell,clicked_index);
  result();
  
}
function redo(){
  active = true;
  player = "x";
  state = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', click));
document.querySelector('.restart').addEventListener('click', redo);
