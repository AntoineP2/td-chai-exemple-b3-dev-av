const Triangle = require("../src/triangle.js").Triangle;
const expect = require("chai").expect;

describe("Testing the Triangle Functions", function () {
  it("1. Correct Value ?", function (done) {
    let triangle4 = new Triangle("a", 3, 3);
    expect(triangle4.getCleanValue()).to.equal(false);
    done();
  });

  it("1. It's a triangle ?", function (done) {
    let triangle3 = new Triangle(3, 3, 5);
    expect(triangle3.isATriangle()).to.equal(true);
    done();
  });

  it("2. Get surface of the Triangle ", function (done) {
    let triangle1 = new Triangle(4, 5, 3);
    expect(triangle1.getSurface()).to.equal(6);
    done();
  });

  it("3. Equilateral Triangle ? ", function (done) {
    let triangle2 = new Triangle(3, 3, 3);
    expect(triangle2.getEqui()).to.equal(true);
    done();
  });
});

// chai-exemple-b3-dev-av
// Air triangle = b*h/2
