#!/usr/bin/env node
var fs = require("fs");
var path = require("path");
var mkdirp = require('mkdirp');
var fetch = require("node-fetch");
var DICTIONARY_URL = "https://rawgit.com/gunyarakun/kantan-ej-dictionary/master/kantan-ej-dictionary.json";
function saveDictionary(fileName, dict) {
    var dir = path.join(__dirname, "..", "dict");
    mkdirp.sync(dir);
    var filePath = path.join(dir, fileName);
    fs.writeFileSync(filePath, dict);
}
fetch(DICTIONARY_URL).then(function (response) {
    return response.text();
}).then(function (body) {
    return saveDictionary("kantan-ej-dictionary.json", body)
}).catch(console.error.bind(console));