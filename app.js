// Объект в котором будут данные по цитате
const phrase = {};

// Selected elements
const oneQuoteReflection = document.querySelector('.p');
const authorReflection = document.querySelector('.initials');
const authorsArea = document.querySelector('.area');
// Clicking on random button

// Naming of variables
let getRandomQuote = document.querySelector('.random');
// Getting data from API-provider
getRandomQuote.onclick = function() {
    const api = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';
    fetch(api)
        .then((response) => {
            let data = response.json();
            console.log('Привет!') // 1-st
            return data;
        })
        .then((data) => {
            console.log(data); // 2-nd
            phrase.id = data.id;
            phrase.quoteText = data.quote.quoteText;
            phrase.quoteAuthor = data.quote.quoteAuthor;
            phrase.field = data.quote.quoteGenre;
        })
        .then(function() {
            displayQuote();
        });
};
console.log(phrase); // 3 -rd
function displayQuote() {
    oneQuoteReflection.innerHTML = `${phrase.quoteText}`;
    authorReflection.innerHTML = `${phrase.quoteAuthor}`;
    authorsArea.innerHTML = `${phrase.field}`
};



