const { cacheShortcode, loadCache, clearCache } = require('../dist/cache');

describe('Cache Tests', () => {
  beforeEach(() => {
    clearCache();
  });

  test('should cache a shortcode and retrieve it', () => {
    cacheShortcode(':smile:', '😊');
    const cache = loadCache();
    expect(cache.get(':smile:')).toBe('😊');
  });

  test('should clear the cache', () => {
    cacheShortcode(':smile:', '😊');
    clearCache();
    const cache = loadCache();
    expect(cache.size).toBe(0);
  });
});
