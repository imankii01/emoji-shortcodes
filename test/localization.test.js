const { getLocalizedEmoji } = require('../dist/localization');

describe('Localization Tests', () => {
  test('should return the correct emoji for :smile: in English (en)', () => {
    const result = getLocalizedEmoji(':smile:', 'en');
    expect(result).toBe('😊');
  });

  test('should return the correct emoji for :smile: in Spanish (es)', () => {
    const result = getLocalizedEmoji(':smile:', 'es');
    expect(result).toBe('😊');  // Assuming the emoji is the same in Spanish
  });

  test('should return :smile: for unknown shortcode in French (fr)', () => {
    const result = getLocalizedEmoji(':unknown:', 'fr');
    expect(result).toBe(':unknown:');  // Default behavior for unknown shortcodes
  });

  test('should return the correct emoji for :heart_eyes: in French (fr)', () => {
    const result = getLocalizedEmoji(':heart_eyes:', 'fr');
    expect(result).toBe('😍');
  });
});
