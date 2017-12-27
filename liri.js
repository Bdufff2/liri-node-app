var request = require("request");
var key = require("./key.js")
var Twitter = require('twitter');
var client = new Twitter(key.twitterKeys);