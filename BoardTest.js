let Board = require('./Board.js');

module.exports = class BoardTest {
  canBeBuiltEmpty() {
    let board = new Board();
    board.buildEmpty(3,3);
    let expected = "...\n...\n...\n";
    this.assertEqual(board.render(),expected);
  }

  test() {
    this.canBeBuiltEmpty();
  }

  assertEqual(a, b) {
    if (a != b) {
      throw 'test faild, ' + a + ' not equal to ' + b;
    }
  }
}
