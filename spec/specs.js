describe('wordOrder', function() {
  it('lists words in order by how many times the word appears', function() {
    expect(wordOrder("Alisa is Alisa Andrew Andrew Andrew")).to.eql({Andrew: 3, Alisa: 2, is: 1});
  });
});
