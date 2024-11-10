#!/usr/bin/env node
const { addCustomShortcode, convertShortcode, getAllShortcodes } = require('../src');
const [,, command, ...args] = process.argv;

switch (command) {
  case 'convert':
    const shortcode = args.join(' ');
    console.log(convertShortcode(shortcode));
    break;

  case 'add':
    const shortcodeToAdd = args[0];
    const emoji = args[1];
    addCustomShortcode(shortcodeToAdd, emoji);
    console.log(`Added: ${shortcodeToAdd} => ${emoji}`);
    break;

  case 'list':
    console.log(getAllShortcodes());
    break;

  default:
    console.log('Unknown command');
    break;
}
