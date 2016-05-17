let Test = require('./Test.js');
let Board = require('./Board.js');

module.exports = class BoardTest extends Test {
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

  canReturnColumnFull() {
    let board = new Board();
    board.setMatrix([['.','X'],['X','O']]);
    this.assertEqual(board.columnFull(0),false);
    this.assertEqual(board.columnFull(1),true);
  }

  canClone() {
    let board = new Board();
    board.setMatrix([['.','.'],['.','O']]);
    let clone = board.clone();
    clone.setMatrix([['.','.'],['.','X']]);
    this.assertEqual(board.render(),"..\n.O\n");
    this.assertEqual(clone.render(),"..\n.X\n");
  }

  canReturnAllHorizontalSpaces() {
    let board = new Board();
    board.buildEmpty(6,7);
    this.assertEqual(board.horizontalSpaces().length, 24);
  }

  canReturnAllSpacesInARow() {
    let board = new Board();
    board.buildEmpty(6,7);
    this.assertEqual(board.rowSpaces(0).length, 4);
  }

  canReturnAllVerticalSpaces() {
    let board = new Board();
    board.buildEmpty(6,7);
    this.assertEqual(board.verticalSpaces().length, 21);
  }

  canReturnAllSpacesInAColumn() {
    let board = new Board();
    board.buildEmpty(6,7);
    this.assertEqual(board.columnSpaces(0).length, 3);
  }

  canReturnAllDiagonalDownSpaces() {
    let board = new Board();
    board.buildEmpty(6,7);
    this.assertEqual(board.diagonalDownSpaces().length, 12);
  }

  canReturnAllDiagonalUpSpaces() {
    let board = new Board();
    board.buildEmpty(6,7);
    this.assertEqual(board.diagonalUpSpaces().length, 12);
  }

  canReturnAllSpaces() {
    let board = new Board();
    board.buildEmpty(6,7);
    this.assertEqual(board.spaces().length, 69);
  }

  test() {
    this.canBeBuiltEmpty();
    this.canReturnHeight();
    this.canReturnWidth();
    this.canDropToken();
    this.canReturnColumnFull();
    this.canClone();
    this.canReturnAllSpacesInARow();
    this.canReturnAllHorizontalSpaces();
    this.canReturnAllSpacesInAColumn();
    this.canReturnAllVerticalSpaces();
    this.canReturnAllDiagonalDownSpaces();
    this.canReturnAllDiagonalUpSpaces();
    this.canReturnAllSpaces();
  }
}
