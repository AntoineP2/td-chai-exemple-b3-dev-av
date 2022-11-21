class Cercle {
  constructor(rayon) {
    this.rayon = typeof rayon == "number" ? Math.abs(rayon) : rayon;
  }

  getCleanValue() {
    return typeof this.rayon == "number";
  }
  getSurface() {
    return Math.round(Math.pow(this.rayon, 2) * Math.PI);
  }

  getPerimetre() {
    return Math.round(2 * Math.PI * this.rayon);
  }
}

module.exports = {
  Cercle: Cercle,
};
