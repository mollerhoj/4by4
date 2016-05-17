module.exports = class Referee {
  countTokenKind(space, tokenKind) {
    let count = 0;
    for(let x = 0; x < space.length; x++) {
      if (space[x] == tokenKind) {
        count += 1;
      }
    }
    return count;
  }

  winner(board) {
    let spaces = board.spaces();
    for(let i = 0; i < spaces.length; i++) {
      let space = spaces[i];
      let winner = this.winnerSpace(space);
      if (winner != 0) {
        return winner;
      }
    }
    return 0;
  }

  winnerSpace(space) {
    let Xcount = this.countTokenKind(space,'X');
    let Ocount = this.countTokenKind(space,'O');

    if (Xcount == 4) {
      return -1;
    }

    if (Ocount == 4) {
      return 1;
    }
    return 0;
  }

  scoreBoard(board) {
    let spaces = board.spaces();
    let score = 0;
    for(let i = 0; i < spaces.length; i++) {
      let space = spaces[i];
      score += this.scoreSpace(space);
    }
    return score;
  }

  scoreSpace(space) {
    let Xcount = this.countTokenKind(space,'X');
    let Ocount = this.countTokenKind(space,'O');

    if (Xcount > 0 && Ocount > 0) {
      return 0;
    }

    if (Xcount > 0) {
      return -(Math.pow(10, Xcount));
    }

    if (Ocount > 0) {
      return (Math.pow(10, Ocount));;
    }

    return 0;
  }
}
