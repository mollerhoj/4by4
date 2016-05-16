module.exports = class Board {

  constructor() {
    let matrix = null;
  }

  buildEmpty(height, width) {
    let matrix = Array(height);
    for(let y = 0; y < height; y++) {
      matrix[y] = Array(width);
      for(let x = 0; x < width; x++) {
        matrix[y][x] = '.';
      }
    }
    this.matrix = matrix;
  }

  setMatrix(matrix) {
    return new Board();
  }

  render() {
    let str = "";
    for(let y = 0; y < this.matrix.length; y++) {
      let row = this.matrix[y];
      for(let x = 0; x < row.length; x++) {
        str += row[x];
      }
      str += "\n"
    }
    return str;
  }
}
