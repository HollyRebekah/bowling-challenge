const Scorecard = require('../src/scorecard');

describe('scorecard', () => {
  let scorecard;
  beforeEach(() => {
    scorecard = new Scorecard();
  });
  describe('constructor', () => {

    it('returns an object', () => {
      expect(scorecard).toBeInstanceOf(Object);
    });

    it('starts with a score of 0', () => {
      expect(scorecard.totalScore).toEqual(0)
    });
    
    it('frame is an array', () => {
    expect(scorecard.score).toBeInstanceOf(Array)
    });

    it('adds frame score to frame array', () => {
      scorecard.bowl(4);
    expect(scorecard.score).toEqual([4])
    });

    it('contains multiple bowls in the score array', () => {
      scorecard.bowl(4);
      scorecard.bowl(5);
      expect(scorecard.score).toEqual([4,5])

    })

    it('bowl function increases the frame index by 1', () => {
     scorecard.bowl(6);
    expect(scorecard.frameIndex).toEqual(1);
    });

    it('if frame index is equal to 10, your game is finished', () => {
      scorecard.frameIndex = 9;
      scorecard.bowl(5);
      expect(scorecard.gameStatus).toBe('Your game is finished');
    });

    it('get total score', () => {
      scorecard.bowl(5);
      scorecard.bowl(5);
      scorecard.calculateTotalScore();
      expect(scorecard.totalScore).toBe(10);
    })
});
  describe('detect strike method', () => {
    it('detects a strike', () => {
      scorecard.detectStrike
    expect
    });
  });
});
