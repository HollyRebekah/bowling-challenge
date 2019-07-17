class Scorecard {
  constructor() {
    this.totalScore = 0;
    this.score = [];
    this.frameIndex = 0;
    this.gameStatus = 0;
    };

  bowl(pins) {
    this.score.push(pins);
    if (this.frameIndex === 10) {
      this.gameStatus = 'Your game is finished'
  };

};
  calculateTotalScore() {
    this.totalScore = this.calculateFrame();
  };

  calculateFrame() {
    console.log(this.score)
    return this.score[this.frameIndex] + this.score[this.frameIndex + 1];
  }
  
};

module.exports = Scorecard;
