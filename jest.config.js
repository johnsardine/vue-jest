module.exports = {
  verbose: true,
  rootDir: './',
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>src/$1',
  },
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(vue)$': 'jest-vue-preprocessor',
  },
  collectCoverageFrom: [
    '**/*.{js,jsx,vue}',
    '!**/tests/**',
  ],
  coveragePathIgnorePatterns: [
    'main.js',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/bower_components/',
  ],
  mapCoverage: true,
};
