let Board = require('./Board.js');

module.exports = class BoardTest {
  canBeBuiltEmpty() {
    let board = new Board();
    board.buildEmpty(3,3);
    let expected = "...\n...\n...\n";
    this.assertEqual(board.render(),expected);
  }

  canReturnHeight() {
    let board = new Board();
    board.buildEmpty(3,2);
    this.assertEqual(board.height(),3);
  }

  canReturnWidth() {
    let board = new Board();
    board.buildEmpty(3,2);
    this.assertEqual(board.width(),2);
  }

  canDropToken() {
    let board = new Board();
    board.buildEmpty(3,3);
    board.dropToken('X', 1);
    this.assertEqual(board.render(),"...\n...\n.X.\n");
    board.dropToken('O', 1);
    this.assertEqual(board.render(),"...\n.O.\n.X.\n");
  }

  test() {
    this.canBeBuiltEmpty();
    this.canReturnHeight();
    this.canReturnWidth();
    this.canDropToken();
  }

  assertEqual(a, b) {
    if (a != b) {
      throw 'test faild, ' + a + ' not equal to ' + b;
    }
  }
}
