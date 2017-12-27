// twitter api call variables
var request = require("request");
var key = require("./key.js")
var Twitter = require('twitter');
var client = new Twitter(key.twitterKeys);

// define command line input
var command = process.argv[2];
var argument = process.argv[3];
var log = process.argv;
var logArr = [];

// push arguments to .txt file and capture data
for (var i = 2; i < log.length; i++) {
    logArr.push(log[i]);
  }
  fs.append("log.txt", logArr + "\n", "UTF-8", { 'flags': 'a+' });

// If statements to define the actions for each different 'command'

if (command === "my-tweets") {
    // show your last 20 tweets and when they were created
}
if (command === "spotify-this-song") {
    // show Artist(s), The song's name, A preview link of the song from Spotify, The album that the song is from
}
if (command === "movie-this") {
    // show * Title of the movie. * Year the movie came out. * IMDB Rating of the movie. * Rotten Tomatoes Rating of the movie. * Country where the movie was produced.* Language of the movie. * Plot of the movie. * Actors in the movie.
}
if (command === "do-what-it-says") {
    // show your last 20 tweets and when they were created
}