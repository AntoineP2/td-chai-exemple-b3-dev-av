const triangle = require("../src/triangle").Triangle;
const expect = require("chai").expect;

describe("Testing the Triangle Functions", function () {
  it("1. The side length of the Cube", function (done) {
    let c1 = new Cube(2);
    expect(c1.getSideLength()).to.equal(2);
    done();
  });
  it("1. Get surface of the Triangle ", function (done) {
    let triangle1 = new Triangle(5, 10);
    expect(Triangle1.getSurface()).to.equal(25);
    done();
  });
});

// chai-exemple-b3-dev-av
