// tests/score.test.js
// tests/gameFlow.test.js
import './setup';

const { GameObject, gameProcess, endGame, score, lives } = require('../js/game.js');
// Mocking the canvas and getContext method globally
// tests/score.test.js


// Add tests for score-related functions

describe('Score and Lives Tests', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <div id="score">Score: 0</div>
        <div id="lives">Lives: 3</div>
      `;
    });
  
    it('should increase score when a fruit is sliced', () => {
      score = 0;
      const obj = new GameObject(100, 100, 60, 'fruit');
      mockSliceFruit(obj); // Assume this function slices fruit
      
      expect(score).toBe(1);
      expect(document.getElementById('score').textContent).toBe('Score: 1');
    });
  
    it('should decrease lives when a fruit drops out of bounds', () => {
      lives = 3;
      const obj = new GameObject(100, canvas.height + 1, 60, 'fruit');
      obj.update();
      gameProcess(); // Assume gameProcess manages game updates
      
      expect(lives).toBe(2);
      expect(document.getElementById('lives').textContent).toBe('Lives: 2');
    });
  
    it('should trigger game over when lives hit zero', () => {
      lives = 1;
      const obj = new GameObject(100, canvas.height + 1, 60, 'fruit');
      obj.update();
      gameProcess();
      
      expect(isGameOver).toBe(true);
    });
  });
  