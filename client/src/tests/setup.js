// server/tests/setup.js

// Optional: Extend Jest with additional matchers
import 'jest-extended';

// Optional: Set test timeout globally (adjust if needed)
jest.setTimeout(10000);

// Optional: Log before/after all tests for clarity
beforeAll(() => {
  console.log('🧪 Starting server tests...');
});

afterAll(() => {
  console.log('✅ Finished server tests.');
});

// Optional: Clean up after each test if needed
afterEach(() => {
  // For future: database cleanup, mocks reset, etc.
});
