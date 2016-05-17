module.exports = class Test {
  assertEqual(a, b) {
    if (a != b) {
      var stack = new Error().stack;
      console.log( stack );
      throw 'test faild, ' + a + ' not equal to ' + b;
    }
  }
}
