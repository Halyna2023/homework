
var noALetterRegex = /\b[^Aa]{6,}\b/g;

// тексту
var text = 'Wonderful Joyful Happiness Time Task Apple';

var matches = text.match(noALetterRegex);

console.log(matches);