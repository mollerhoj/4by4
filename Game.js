let Board = require('./Board.js');
let AI = require('./AI.js');
let Referee = require('./Referee.js');

let board = new Board();
board.buildEmpty(7,7);

let ai = new AI();
let referee = new Referee();
ai.setReferee(referee);



let hasTurn = 1;

while(true) {
  if (hasTurn == 1) {
    let move = 1;
    board.dropToken('X', move);
  }

  if (hasTurn == -1) {
    let move = ai.nextMove(board);
    board.dropToken('O', move);
  }

  console.log(board.render());

  if (referee.winner(board) == 1) {
    console.log("AI WON!");
    break;
  }

  if (referee.winner(board) == -1) {
    console.log("Human WON!");
    break;
  }

  hasTurn = hasTurn * (-1)
}
