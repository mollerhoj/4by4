let Test = require('./Test.js');
let Referee = require('./Referee.js');
let Board = require('./Board.js');

/* We define a 'Space' as four sequential positions on the board.
   A normal 6x7 board has 69 spaces. */

module.exports = class RefereeTest extends Test {
  canScoreSpace() {
    let referee = new Referee();
    this.assertEqual(referee.scoreSpace(['.','.','.','.']), 0);
    this.assertEqual(referee.scoreSpace(['.','.','X','.']), -10);
    this.assertEqual(referee.scoreSpace(['X','.','O','.']), 0);
    this.assertEqual(referee.scoreSpace(['X','.','X','.']), -100);
    this.assertEqual(referee.scoreSpace(['O','.','O','O']), 1000);
  }

  canReturnIfSpaceHasWon() {
    let referee = new Referee();
    this.assertEqual(referee.winnerSpace(['X','.','O','.']), 0);
    this.assertEqual(referee.winnerSpace(['O','O','O','O']), 1);
    this.assertEqual(referee.winnerSpace(['X','X','X','X']), -1);
  }

  canScoreBoard() {
    let board = new Board();
    board.buildEmpty(6,7);
    let referee = new Referee();
    this.assertEqual(referee.scoreBoard(board), 0);
    board.dropToken('O', 3)
    this.assertEqual(referee.scoreBoard(board), 70);
    board.dropToken('X', 3)
    this.assertEqual(referee.scoreBoard(board), -30);
  }

  canReturnWinner() {
    let board = new Board();
    board.setMatrix([['O','O','O','.']]);
    let referee = new Referee();
    this.assertEqual(referee.winner(board), 0);
    board.dropToken('O', 3)
    this.assertEqual(referee.winner(board), 1);
  }

  test() {
    this.canScoreSpace();
    this.canReturnIfSpaceHasWon();
    this.canScoreBoard();
    this.canReturnWinner();
  }
}
