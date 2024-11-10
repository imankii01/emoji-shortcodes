const { convertShortcode, addCustomShortcode } = require('../dist');

describe('Shortcode Mapper', () => {
  test('should map :heart_eyes: to 😍', () => {
    expect(convertShortcode(':heart_eyes:')).toBe('😍');
  });

  test('should add a custom shortcode and convert it', () => {
    addCustomShortcode(':new_emoji:', '🌟');
    expect(convertShortcode(':new_emoji:')).toBe('🌟');
  });
});
