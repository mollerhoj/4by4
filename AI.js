module.exports = class AI {
  constructor() {
    this.referee = null;
    this.CUT_DEPTH = 3;
  }

  setCutDepth(x) {
    this.CUT_DEPTH = x;
  }

  setReferee(referee) {
    this.referee = referee;
  }

  nextMove(board) {
    return this.maxValue(board, null, Number.MIN_VALUE, Number.MAX_VALUE, 0)[1];
  }

  cutOff(board, depth) {
    if (depth >= this.CUT_DEPTH) {
      return true
    }

    if (board.isFull()) {
      return true
    }
    
    if (this.referee.winner(board) != 0) { 
      return true
    }
    return false
  }

  evaluate(board) {
    return this.referee.scoreBoard(board);
  }

  minValue(board, previousAction, a, b, depth) {
    if (this.cutOff(board, depth)) {
      return [this.evaluate(board), previousAction];
    }

    let m = Number.MAX_VALUE;
    for(let x = 0; x < board.width(); x++) {
      if (!board.columnFull(x)) {
        let newBoard = board.clone();
        newBoard.dropToken('X', x);
        let v = this.maxValue(newBoard, x, a, b, depth+1)[0];
        if (v < m) {
          m = v;
          previousAction = x;
        }

        if (m < b) {
          b = m;
        }
      }
    }

    return [m, previousAction];
  }

  maxValue(board, previousAction, a, b, depth) {
    if (this.cutOff(board, depth)) {
      return [this.evaluate(board), previousAction];
    }

    let m = Number.MIN_VALUE;
    for(let x = 0; x < board.width(); x++) {
      if (!board.columnFull(x)) {
        let newBoard = board.clone();
        newBoard.dropToken('O', x);
        let v = this.minValue(newBoard, x, a, b, depth+1)[0];

        if (v > m) {
          m = v;
          previousAction = x;
        }

        if (m > a) {
          a = m;
        }
      }
    }

    return [m, previousAction];
  }
}
