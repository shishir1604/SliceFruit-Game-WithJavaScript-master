// jest.config.js
module.exports = {
    testEnvironment: 'jsdom', 
    setupFilesAfterEnv: ['./tests/setup.js'], // Use jsdom for testing in the browser environment
    verbose: true, // Show individual test results with the test suite hierarchy
    collectCoverage: true, // Collect coverage information
    collectCoverageFrom: [
        'src/**/*.{js,jsx}', // Specify the files to collect coverage from
    ],
    coverageReporters: ['html', 'text'],
};
