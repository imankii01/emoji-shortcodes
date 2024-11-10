const { convertShortcode, addCustomShortcode } = require('../dist');

describe('Emoji Shortcode Tests', () => {
  test('should convert :smile: to 😊', () => {
    expect(convertShortcode(':smile:')).toBe('😊');
  });

  test('should return :question: for unknown shortcode', () => {
    expect(convertShortcode(':unknown:')).toBe(':question:');
  });

  test('should add a custom shortcode and convert it', () => {
    addCustomShortcode(':custom:', '🌟');
    expect(convertShortcode(':custom:')).toBe('🌟');
  });
});
