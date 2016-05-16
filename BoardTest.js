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

  test() {
    this.canBeBuiltEmpty();
    this.canReturnHeight();
    this.canReturnWidth();
  }

  assertEqual(a, b) {
    if (a != b) {
      throw 'test faild, ' + a + ' not equal to ' + b;
    }
  }
}
