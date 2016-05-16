module.exports = class Board {

  constructor() {
    let matrix = null;
  }

  dropToken(token, x) {
    for(let i = 0; i < this.height(); i++) {
      let y = this.height() - i - 1;
      if (this.matrix[y][x] == '.') {
        this.matrix[y][x] = token;
        break;
      }
    }
  }

  columnFull(x) {
    for(let y = 0; y < this.height(); y++) {
      if (this.matrix[y][x] == '.') {
        return false;
      }
    }
    return true;
  };

  clone() {
    let clone = new Board();
    let cloneMatrix = clone.buildEmptyMatrix(this.height(), this.width());
    for(let y = 0; y < this.height(); y++) {
      for(let x = 0; x < this.width(); x++) {
        cloneMatrix[y][x] = this.matrix[y][x];
      }
    }

    clone.setMatrix(cloneMatrix)
    return clone;
  }

  buildEmptyMatrix(height, width) {
    let matrix = Array(height);
    for(let y = 0; y < height; y++) {
      matrix[y] = Array(width);
      for(let x = 0; x < width; x++) {
        matrix[y][x] = '.';
      }
    }
    return matrix;
  }

  buildEmpty(height, width) {
    this.matrix = this.buildEmptyMatrix(height, width);
  }

  height() {
    return this.matrix.length;
  }

  width() {
    if (this.matrix.length == 0) {
      return 0;
    }
    return this.matrix[0].length;
  }

  setMatrix(matrix) {
    return this.matrix = matrix;
  }

  render() {
    let str = "";
    for(let y = 0; y < this.height(); y++) {
      let row = this.matrix[y];
      for(let x = 0; x < this.width(); x++) {
        str += row[x];
      }
      str += "\n"
    }
    return str;
  }
}
