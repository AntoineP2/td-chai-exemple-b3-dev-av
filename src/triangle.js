class Triangle {
  constructor(c1, c2, c3) {
    this.c1 = typeof c1 == "number" ? Math.abs(c1) : c1;
    this.c2 = typeof c2 == "number" ? Math.abs(c2) : c2;
    this.c3 = typeof c3 == "number" ? Math.abs(c3) : c3;
  }

  getCleanValue() {
    return (
      typeof this.c1 == "number" &&
      typeof this.c2 == "number" &&
      typeof this.c3 == "number"
    );
  }

  getSurface() {
    let demiPeri = (this.c1 + this.c2 + this.c3) / 2;
    return Math.sqrt(
      demiPeri *
        ((demiPeri - this.c1) * (demiPeri - this.c3) * (demiPeri - this.c2))
    );
  }

  getEqui() {
    return this.c1 === this.c2 ? (this.c1 === this.c3 ? true : false) : false;
  }

  isATriangle() {
    if (
      this.c1 + this.c2 < this.c3 ||
      this.c1 + this.c3 < this.c2 ||
      this.c2 + this.c3 < this.c1
    ) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = {
  Triangle: Triangle,
};
