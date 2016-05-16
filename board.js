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
    return new Board();
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
