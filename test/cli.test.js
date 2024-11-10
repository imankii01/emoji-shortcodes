const { execSync } = require('child_process');

describe('CLI Tests', () => {
  test('should convert :smile: using CLI', () => {
    const result = execSync('node bin/emoji-shortcodes.js convert :smile:', { encoding: 'utf-8' });
    expect(result.trim()).toBe('😊');
  });

  test('should add custom shortcode using CLI', () => {
    const result = execSync('node bin/emoji-shortcodes.js add :star: 🌟', { encoding: 'utf-8' });
    expect(result.trim()).toBe('Added: :star: => 🌟');
  });
});
