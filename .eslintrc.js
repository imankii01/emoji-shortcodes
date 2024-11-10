module.exports = {
    env: {
      es6: true,
      node: true,
      jest: true
    },
    extends: [
      'eslint:recommended',
      'plugin:jest/recommended'
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'warn'
    }
  };
  