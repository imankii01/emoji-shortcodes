const { convertShortcode } = require('../dist');

describe('Shortcode Mapper Tests', () => {
  test('should convert :smile: to 😊', () => {
    expect(convertShortcode(':smile:')).toBe('😊');
  });

  test('should convert :fire: to 🔥', () => {
    expect(convertShortcode(':fire:')).toBe('🔥');
  });

  test('should convert :rocket: to 🚀', () => {
    expect(convertShortcode(':rocket:')).toBe('🚀');
  });

  test('should convert :unicorn: to 🦄', () => {
    expect(convertShortcode(':unicorn:')).toBe('🦄');
  });

  test('should convert :coffee: to ☕', () => {
    expect(convertShortcode(':coffee:')).toBe('☕');
  });
});
