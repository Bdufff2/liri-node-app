// twitter api call variables
var key = require("./key.js");
var request = require('request');
var fs = require('fs')
var Twitter = require('twitter');
var twitterNew = new Twitter(key.twitterKeys);
var Spotify = require('spotify');
var spotifyNew = new Spotify(key.spotifyKeys);


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
    var params = { screen_name: '@duff_bot02' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < 20; i++) {
                console.log(tweets[i].created_at);
                console.log(tweets[i].text + "\n");
            }
        }
        // send last 20 tweets to .txt file
        copyToTxt(tweets[i].created_at);
        copyToTxt(tweets[i].text + "\n");
    });
}

if (command === "spotify-this-song") {
    // show Artist(s), The song's name, A preview link of the song from Spotify, The album that the song is from
    if (action === "spotify-this-song") {
        var song = value;
        // console.log(value.length)
        if (typeof song !== "undefined") {
            spotifyThis(song)
        } else if (song === "") {
            song = "The Sign";
        }
    }
}
if (command === "movie-this") {
    // show * Title of the movie. * Year the movie came out. * IMDB Rating of the movie. * Rotten Tomatoes Rating of the movie. * Country where the movie was produced.* Language of the movie. * Plot of the movie. * Actors in the movie.

}
if (command === "do-what-it-says") {
    //  take the text inside of random.txt and then use it to call one of LIRI's commands??

}

// function to send all data to .txt file
function copyToTxt(data) {
    var objToString = JSON.stringify(data, null, 2);
    fs.appendFile("random.txt", objToString, function (err) {
        if (err) {
            return console.log(err);
        } else {
            // console.log("success");
        }
    });
}

function spotifyThis(song) {
    spotify.search({ type: 'track', query: song, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("=====");
        console.log("");
        console.log("");
        console.log("");
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song: " + data.tracks.items[0].name);
        console.log("Link: " + data.tracks.items[0].external_urls.spotify);
        console.log("Album: " + data.tracks.items[0].album.name);
        console.log("");
        console.log("");
        console.log("");
        console.log("=====");

        // log data to our txt file
        copyToTxt("Artist: " + data.tracks.items[0].artists[0].name);
        copyToTxt("Song: " + data.tracks.items[0].name);
        copyToTxt("Link: " + data.tracks.items[0].external_urls.spotify);
        copyToTxt("Album: " + data.tracks.items[0].album.name);
    });
}
