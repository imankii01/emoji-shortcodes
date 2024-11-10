const {
  convertShortcode,
  addCustomShortcode,
  getAllShortcodes
} = require('./shortcode-mapper');
const {
  loadCache,
  clearCache
} = require('./cache');
module.exports = {
  convertShortcode,
  addCustomShortcode,
  getAllShortcodes,
  loadCache,
  clearCache
};