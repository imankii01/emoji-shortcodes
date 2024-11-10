
---

# Emoji Shortcodes - A Multilingual Emoji Library

Welcome to the **Emoji Shortcodes** project! This advanced npm package provides a comprehensive solution for converting emoji shortcodes (e.g., `:smile:`) into their respective emoji characters. Designed for ease of use, this library supports localization in multiple languages and features an extensive collection of emojis.

Whether you're building a multi-language application or simply want to add emoji support to your project, **Emoji Shortcodes** offers a seamless, flexible solution.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Localized Shortcodes](#localized-shortcodes)
  - [Command Line Interface (CLI)](#command-line-interface-cli)
- [API Reference](#api-reference)
- [Example Code](#example-code)
- [Localization](#localization)
- [Contributing](#contributing)
- [Licensing](#licensing)
- [About Me](#about-me)

## Features

- **Multi-Language Support**: Includes emoji shortcode mappings for multiple languages such as English, Spanish, French, and German.
- **Extensive Emoji Collection**: Over 200 shortcodes, ranging from everyday objects to special icons like rockets, unicorns, and coffee cups.
- **Fast Conversion**: Convert emoji shortcodes to their respective emoji characters with minimal overhead.
- **Command Line Tool**: CLI support for converting shortcodes directly from the terminal.
- **Customizable**: Easily extendable with your own emoji shortcodes or languages.
- **Caching Support**: Automatically caches results for faster lookups.

## Installation

To install the **Emoji Shortcodes** package, use npm:

```bash
npm install emoji-shortcodes
```

For global installation, use the following command to use it directly from the terminal:

```bash
npm install -g emoji-shortcodes
```

## Usage

### Basic Usage

You can use the **Emoji Shortcodes** package in your Node.js or JavaScript project to easily convert emoji shortcodes into emoji characters.

```javascript
const emojiShortcodes = require('emoji-shortcodes');

// Convert a shortcode to an emoji
console.log(emojiShortcodes.convert(':smile:'));  // Output: 😊
```

### Localized Shortcodes

The package supports multiple languages, and you can convert emoji shortcodes in different languages as follows:

```javascript
const emojiShortcodes = require('emoji-shortcodes');

// Convert a shortcode to emoji in English
console.log(emojiShortcodes.convert(':smile:', 'en'));  // Output: 😊

// Convert a shortcode to emoji in Spanish
console.log(emojiShortcodes.convert(':smile:', 'es'));  // Output: 😊

```

### Command Line Interface (CLI)

You can also use the package from the command line to quickly convert emoji shortcodes to their corresponding emojis.

After installing globally, you can run:

```bash
emoji-shortcodes :smile:
```

This will print the emoji for `:smile:` to the console:

```bash
😊
```

### Full List of Supported Shortcodes

The package includes a comprehensive list of over 200 shortcodes. Some of the commonly used ones are:

- `:smile:` → 😊
- `:heart_eyes:` → 😍
- `:thumbsup:` → 👍
- `:clap:` → 👏
- `:rocket:` → 🚀
- `:unicorn:` → 🦄
- `:poop:` → 💩

For the full list of shortcodes, refer to the [source code](https://github.com/your-username/emoji-shortcodes).

## API Reference

### `emojiShortcodes.convert(shortcode, [language])`

**Arguments**:
- `shortcode` (string): The emoji shortcode (e.g., `:smile:`).
- `language` (string, optional): The language to convert the shortcode (e.g., `'en'`, `'es'`). Defaults to `'en'` (English).

**Returns**:
- A string representing the emoji.

**Example**:

```javascript
const emoji = emojiShortcodes.convert(':smile:');  // Output: 😊
```

### `emojiShortcodes.getAllShortcodes()`

**Returns**:
- An array of all available shortcodes.

**Example**:

```javascript
const allShortcodes = emojiShortcodes.getAllShortcodes();
console.log(allShortcodes);  // Output: List of all shortcodes
```

### `emojiShortcodes.addShortcode(shortcode, emoji)`

**Arguments**:
- `shortcode` (string): The emoji shortcode (e.g., `:smile:`).
- `emoji` (string): The emoji character.

**Description**:
- Adds a new shortcode to the emoji collection.

**Example**:

```javascript
emojiShortcodes.addShortcode(':new_emoji:', '🆕');
console.log(emojiShortcodes.convert(':new_emoji:'));  // Output: 🆕
```

## Localization

This package supports localization for the following languages:
- **English (`en`)**
- **Spanish (`es`)**
- **French (`fr`)**
- **German (`de`)**

For each language, shortcodes are mapped to the appropriate emojis. You can specify the language when using the `convert()` method, or it will default to English if no language is provided.

Here's an example of converting to Spanish:

```javascript
const emoji = emojiShortcodes.convert(':smile:', 'es');  // Output: 😊 (Spanish)
```

## Contributing

Contributions are welcome! If you want to add more shortcodes, fix bugs, or improve the documentation, please follow the steps below to contribute.

### How to Contribute

1. **Fork the repository**.
2. **Clone your fork**:
   ```bash
   git clone https://github.com/imankii01/emoji-shortcodes.git
   ```
3. **Create a new branch**:
   ```bash
   git checkout -b feature/main
   ```
4. **Make your changes**.
5. **Commit your changes**:
   ```bash
   git commit -m "Add feature: your-feature-name"
   ```
6. **Push your changes**:
   ```bash
   git push origin feature/main
   ```
7. **Create a Pull Request**.

We will review your changes and merge them if appropriate. Thanks for contributing!

## Licensing

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## About Me

Hello! I'm **Ankit**, a passionate developer who loves building useful and fun open-source libraries. I created this package to make emoji shortcodes easy to use and multi-lingual. I'm always open to new ideas and collaborations.

- **GitHub**: [@imankii01](https://github.com/imankii01)
- **LinkedIn**: [@imankii01](https://www.linkedin.com/in/imankii01)

Feel free to connect with me!

---