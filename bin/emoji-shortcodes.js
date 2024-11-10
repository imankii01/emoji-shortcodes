#!/usr/bin/env node

const { convertShortcode, addCustomShortcode, getAllShortcodes } = require('../dist');

const args = process.argv.slice(2);

// Convert shortcode
if (args[0] === 'convert') {
  const shortcode = args[1];
  console.log(convertShortcode(shortcode));
}

// Add custom shortcode
if (args[0] === 'add') {
  const [shortcode, emoji] = args.slice(1);
  addCustomShortcode(shortcode, emoji);
  console.log(`Added: ${shortcode} => ${emoji}`);
}

// List all shortcodes
if (args[0] === 'list') {
  console.log(getAllShortcodes());
}
