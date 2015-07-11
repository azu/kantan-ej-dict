// LICENSE : MIT
"use strict";
var assert = require("assert");
var dict = require("kantan-ej-dict");
assert(typeof dict === "object");
var keys = Object.keys(dict);
console.info("英単語数: " + keys.length);
assert(keys.length > 0);
var translationWordCount = keys.reduce(function (resultCount, key) {
    var jaWords = dict[key].ja;
    assert(Array.isArray(jaWords));
    return resultCount + jaWords.length;
}, 0);
console.info("日本語数: " + translationWordCount);
