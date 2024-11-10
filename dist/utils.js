function isValidShortcode(shortcode) {
  return /^:[a-z_]+:$/.test(shortcode);
}
module.exports = {
  isValidShortcode
};