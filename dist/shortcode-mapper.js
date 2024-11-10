const emojiMap = {
  ":smile:": "😊",
  ":heart_eyes:": "😍",
  ":thumbsup:": "👍",
  ":grinning:": "😄",
  ":laughing:": "😆"
};
let customShortcodes = {};
function convertShortcode(shortcode) {
  if (customShortcodes[shortcode]) {
    return customShortcodes[shortcode];
  }
  return emojiMap[shortcode] || ":question:";
}
function addCustomShortcode(shortcode, emoji) {
  customShortcodes[shortcode] = emoji;
}
function getAllShortcodes() {
  return {
    ...emojiMap,
    ...customShortcodes
  };
}
module.exports = {
  convertShortcode,
  addCustomShortcode,
  getAllShortcodes
};