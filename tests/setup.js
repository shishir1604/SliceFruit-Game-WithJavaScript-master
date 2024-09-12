// tests/setup.js (common setup for all tests)

beforeEach(() => {
    // Mock the canvas element
    const canvas = document.createElement('canvas');
  
    // Mock the getContext method for 2D context
    canvas.getContext = jest.fn(() => ({
      fillRect: jest.fn(),
      clearRect: jest.fn(),
      drawImage: jest.fn(),
      getImageData: jest.fn(),
      putImageData: jest.fn(),
      createImageData: jest.fn(),
      setTransform: jest.fn(),
      drawImage: jest.fn(),
      save: jest.fn(),
      restore: jest.fn(),
      beginPath: jest.fn(),
      moveTo: jest.fn(),
      lineTo: jest.fn(),
      closePath: jest.fn(),
      stroke: jest.fn(),
      translate: jest.fn(),
      scale: jest.fn(),
      rotate: jest.fn(),
      arc: jest.fn(),
      fill: jest.fn(),
      strokeRect: jest.fn(),
      fillText: jest.fn(),
      measureText: jest.fn(() => ({ width: 100 })),
      setLineDash: jest.fn(),
      getLineDash: jest.fn(),
    }));
  
    // Mock document.querySelector to return the mock canvas
    document.querySelector = jest.fn((selector) => {
      if (selector === '#gameCanvas') {
        return canvas;
      }
      return null;
    });
  
    // Mock other DOM elements as needed (e.g., buttons, screens)
    document.getElementById = jest.fn((id) => {
      return {
        style: { display: 'none' },
        textContent: '',
        addEventListener: jest.fn(),
        ...id === 'startScreen' && { style: { display: 'block' } },
        ...id === 'endScreen' && { style: { display: 'none' } },
      };
    });
  });
  