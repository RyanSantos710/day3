var expect = chai.expect;

describe("#analyze()", function() {
  it("works for simple sentences", function() {
    var result = analyze("No woman no cry");
    // {
    //  { "no": 2 },
    //  { "woman": 1 },
    //  { "cry": 1 },
    // }
    expect(Object.keys(result).length).to.equal(3);
    expect(result["no"]).to.equal(2);
    expect(result["woman"]).to.equal(1);
    expect(result["cry"]).to.equal(1);
  });
  it("ignores punctuations", function() {
    var result = analyze("No. woman,no cry!! (NO NO)");
    expect(Object.keys(result).length).to.equal(3);
    expect(result["no"]).to.equal(4);
    expect(result["woman"]).to.equal(1);
    expect(result["cry"]).to.equal(1);
  });
});
