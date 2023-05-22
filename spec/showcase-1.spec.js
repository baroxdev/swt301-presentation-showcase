describe('Add and Minus', function () {
  const cal = new Calculator();
  it('one add one is two', function () {
    expect(cal.add(1, 1)).toBe(2);
  });

  it('Two add two is four', function () {
    expect(cal.add(2, 2)).toBe(4);
  });

  it('Five minus two is three', function () {
    expect(cal.minus(5, 2)).toBe(3);
  });
});

describe('Multiply and divide', function () {
  var cal = new Calculator();
  it('Five Multiply two is ten', function () {
    expect(cal.multiply(5, 2)).toBe(10);
  });

  it('Six divide two is three', function () {
    expect(cal.divide(6, 2)).toBe(3);
  });
});
