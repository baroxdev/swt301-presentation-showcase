describe('Add and Minus', function () {
  const cal = new Calculator();
  it('one add one is two', function () {
    expect(2).toBe(cal.add(1, 1));
  });

  it('Two add two is four', function () {
    expect(4).toBe(cal.add(2, 2));
  });

  it('Five minus two is three', function () {
    expect(3).toBe(cal.minus(5, 2));
  });
});

describe('Plus and divide', function () {
  var cal = new Calculator();
  it('Five plus two is ten', function () {
    expect(10).toBe(cal.multiply(5, 2));
  });

  it('Six divide two is three', function () {
    expect(3).toBe(cal.divide(6, 2));
  });
});
