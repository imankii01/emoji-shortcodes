const localizedShortcodes = {
  en: { ":smile:": "😊", ":heart_eyes:": "😍" },
  es: { ":smile:": "😊", ":heart_eyes:": "😍" },
  fr: { ":smile:": "😊", ":heart_eyes:": "😍" },
};

function getLocalizedEmoji(shortcode, lang = 'en') {
  return localizedShortcodes[lang][shortcode] || shortcode;
}

module.exports = { getLocalizedEmoji };
