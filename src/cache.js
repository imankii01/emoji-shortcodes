const cache = new Map();

function loadCache() {
  return cache;
}

function clearCache() {
  cache.clear();
}

function cacheShortcode(shortcode, emoji) {
  cache.set(shortcode, emoji);
}

module.exports = {
  loadCache,
  clearCache,
  cacheShortcode
};
