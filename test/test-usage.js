const {
    convertShortcode,
    addCustomShortcode,
    getAllShortcodes,
    loadCache,
    clearCache
} = require('../dist');
console.log(convertShortcode(':smile:'));
console.log(convertShortcode(':heart_eyes:'));

addCustomShortcode(':star:', '🌟');
console.log(convertShortcode(':star:'));

console.log(getAllShortcodes());

clearCache();
console.log(loadCache());

const { cacheShortcode } = require('./dist/cache');
cacheShortcode(':smile:', '😊');
console.log(loadCache());
