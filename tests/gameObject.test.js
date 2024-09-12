// tests/gameObject.test.js
// tests/gameFlow.test.js
import './setup';

const { GameObject } = require('../js/game'); // Assuming gameObject is exported from game.js
// Mocking the canvas and getContext method globally
// tests/gameObject.test.js

// Add tests for GameObject

describe('GameObject Class Tests', () => {
  it('should initialize a fruit object with random position and velocity', () => {
    const obj = new GameObject(100, 100, 60, 'fruit');
    expect(obj.x).toBe(100);
    expect(obj.y).toBe(100);
    expect(obj.type).toBe('fruit');
    expect(obj.velocityX).toBeDefined();
    expect(obj.velocityY).toBeDefined();
  });

  it('should update the position based on velocity', () => {
    const obj = new GameObject(100, 100, 60, 'fruit');
    obj.update();
    expect(obj.x).toBeGreaterThan(98);  // Moving horizontally
    expect(obj.y).toBeGreaterThan(95);  // Moving down
  });

  it('should apply gravity to the object velocity', () => {
    const obj = new GameObject(100, 100, 60, 'fruit');
    const initialVelocityY = obj.velocityY;
    obj.update();
    expect(obj.velocityY).toBeGreaterThan(initialVelocityY); // Gravity increased velocity
  });
});
