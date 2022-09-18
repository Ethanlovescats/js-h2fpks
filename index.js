// random insult generator


var randomBodyParts = ["cholesterol", "nose", "hair", "bart", "hotdog"];
var randomAdjectives = ["smelly", "something that would reach", "stupid", "fat", "cringe"];
var randomWords = ["monkey", "terminal velocity compared to your iq", "gurt", "bababooey", "joe", "poop", "yeet"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];


var randomInsult = "Your " + randomBodyPart + " is like a " +
                  randomAdjective + " " + randomWord + "!!!";


console.log (randomInsult)