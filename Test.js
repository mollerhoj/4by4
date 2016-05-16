module.exports = class Test {
  assertEqual(a, b) {
    if (a != b) {
      throw 'test faild, ' + a + ' not equal to ' + b;
    }
  }
}
