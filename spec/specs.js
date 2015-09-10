describe('ones', function() {
  it('converts roman numerals up to 10', function() {
    expect(ones(8)).to.equal("VIII");
    expect(ones(4)).to.equal("IV");
  });
});

describe('romanNumerals', function() {
  it('converts roman numerals up to 99', function() {
    expect(romanNumerals(50)).to.equal("L");
    expect(romanNumerals(85)).to.equal("LXXXV");
  });
});

describe('romanNumerals', function() {
  it('converts roman numerals up to 999', function() {
    expect(romanNumerals(987)).to.equal("CMLXXXVII");
    expect(romanNumerals(132)).to.equal("CXXXII");
  });
});

describe('romanNumerals', function() {
  it('converts roman numerals up to 3999', function() {
    expect(romanNumerals(3987)).to.equal("MMMCMLXXXVII");
    expect(romanNumerals(5132)).to.equal("Not Roman, Dude!");
  });
});
