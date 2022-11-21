const Cercle = require("../src/cercle.js").Cercle;
const expect = require("chai").expect;

describe("Testing the Cercle Functions", function () {
  it("1. Correct Value ?", function (done) {
    let cercle1 = new Cercle("a");
    expect(cercle1.getCleanValue()).to.equal(false);
    done();
  });

  it("2. Air of cercle ?", function (done) {
    let cercle2 = new Cercle(10);
    expect(cercle2.getSurface()).to.equal(Math.round(314.159));
    done();
  });

  it("3. Perimetre of cercle", function (done) {
    let cercle3 = new Cercle(10);
    expect(cercle3.getPerimetre()).to.equal(Math.round(62.832));
    done();
  });
});
