// tests/canvasInteraction.test.js
// tests/gameFlow.test.js
import './setup';
const { GameObject, gameProcess, endGame, score, lives } = require('../js/game.js');
// Mocking the canvas and getContext method globally
// tests/canvasInteraction.test.js

  // Add tests related to canvas interaction
  
describe('Canvas Interaction Tests', () => {
    let canvas;

// beforeEach(() => {
//   canvas = document.createElement('canvas');
//   document.body.appendChild(canvas);
//   canvas.getContext = jest.fn();
// });

    it('should call the event listener when a mouse event occurs', () => {
      const mockMouseMove = jest.fn();
      canvas.addEventListener('mousemove', mockMouseMove);
  
      const event = new MouseEvent('mousemove', { clientX: 100, clientY: 100 });
      canvas.dispatchEvent(event);
  
      expect(mockMouseMove).toHaveBeenCalled();
      expect(mockMouseMove).toHaveBeenCalledWith(event);
    });
    
    it('should slice a fruit when the mouse is moved over it', () => {
      const mockSliceFruit = jest.fn(); // Mock slicing functionality
      const fruit = new GameObject(100, 100, 60, 'fruit');
      
      canvas.addEventListener('mousemove', mockSliceFruit);
  
      // Simulate mouse moving over the fruit
      const event = new MouseEvent('mousemove', { clientX: 100, clientY: 100 });
      canvas.dispatchEvent(event);
  
      expect(mockSliceFruit).toHaveBeenCalled();
    });
  });
  