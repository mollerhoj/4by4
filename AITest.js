let Test = require('./Test.js');
let AI = require('./AI.js');
let Board = require('./Board.js');
let Referee = require('./Referee.js');

module.exports = class AITest extends Test {

  canReturnNextMove() {
    let ai = new AI()
    let board = new Board();
    let referee = new Referee();
    board.buildEmpty(6, 7);
    ai.setReferee(referee);
    this.assertEqual(ai.nextMove(board), 3);
  }

  cutOffIfBoardFull() {
    let ai = new AI()
    let board = new Board();
    let referee = new Referee();
    board.buildEmpty(1, 1);
    ai.setReferee(referee);
    this.assertEqual(ai.cutOff(board, 0), false);
    board.dropToken('X', 0);
    this.assertEqual(ai.cutOff(board, 0), true);
  }

  cutOffIfTooDeep() {
    let ai = new AI()
    let board = new Board();
    let referee = new Referee();
    board.buildEmpty(1, 1);
    ai.setReferee(referee);
    ai.setCutDepth(3);
    this.assertEqual(ai.cutOff(board, 3), true);
  }
  
  cutOffIfWinnerFound() {
    let ai = new AI()
    let board = new Board();
    let referee = new Referee();
    board.setMatrix([['X','X','X','.', '.']]);
    ai.setReferee(referee);
    this.assertEqual(ai.cutOff(board, 0), false);
    board.dropToken('X', 3);
    this.assertEqual(ai.cutOff(board, 0), true);
  }

  test() {
    this.canReturnNextMove();
    this.cutOffIfBoardFull();
    this.cutOffIfTooDeep();
    this.cutOffIfWinnerFound();
  }
}
