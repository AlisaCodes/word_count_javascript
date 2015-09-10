describe('countUpBy', function() {
  it('counts up to a specific number by multiples of another number', function() {
    expect(countUpBy(30,5)).to.eql([5,10,15,20,25,30])
  });
});
