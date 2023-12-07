module.exports = {
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'], // Adjust this to match your project structure
    moduleNameMapper: {
        '\\.(png|jpg|jpeg)$': '<rootDir>/src/icons/empty-mock.js',
    },  
};