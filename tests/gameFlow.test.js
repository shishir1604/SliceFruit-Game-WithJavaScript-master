// tests/gameFlow.test.js
// tests/gameFlow.test.js
import './setup';
const { startGame, endGame } = require('../js/game'); // Assume startGame and endGame are exported
jest.useFakeTimers();
// Mocking the canvas and getContext method globally
// tests/gameFlow.test.js


test('should start the game when start button is clicked', () => {
  const { startGame } = require('../js/game'); // Adjust the import based on your module setup

  startGame();
  
  expect(document.getElementById('startScreen').style.display).toBe('none');
  expect(document.querySelector('#gameCanvas').style.display).toBe('block');
  // Add more assertions as needed
});

// Add other tests

describe('Game Flow Tests', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="startScreen"></div>
      <canvas id="gameCanvas"></canvas>
      <div id="endScreen"></div>
      <div id="score"></div>
      <div id="lives"></div>
    `;
  });

  it('should start the game when start button is clicked', () => {
    const mockStartGame = jest.fn(startGame);
    document.getElementById('startScreen').style.display = 'block';
    document.getElementById('endScreen').style.display = 'none';
    
    mockStartGame();
    
    expect(mockStartGame).toHaveBeenCalled();
    expect(document.getElementById('startScreen').style.display).toBe('none');
  });

  it('should display end screen on game over', () => {
    const mockEndGame = jest.fn(endGame);
    mockEndGame();
    
    expect(mockEndGame).toHaveBeenCalled();
    expect(document.getElementById('endScreen').style.display).toBe('block');
  });
});
