// Объект в котором будут данные по цитате
const phrase = {};

// Selected elements and naming of variables
const oneQuoteReflection = document.querySelector('.p');
const authorReflection = document.querySelector('.initials');
const authorsArea = document.querySelector('.area');

// Clicking on random button
let randomButtonQuote = document.querySelector('.random');

// Getting data from API-provider
randomButtonQuote.onclick = function() {
    const api = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';
    fetch(api)
        .then((response) => {
            let data = response.json();// 1-st
            return data;
        })
        .then((data) => {// 2-nd
            phrase.id = data.id;
            phrase.quoteText = data.quote.quoteText;
            phrase.quoteAuthor = data.quote.quoteAuthor;
            phrase.field = data.quote.quoteGenre;
        })
        .then(function() {
            displayQuote();
        });
};

function displayQuote() {
    oneQuoteReflection.innerHTML = `${phrase.quoteText}`;
    authorReflection.innerHTML = `${phrase.quoteAuthor}`;
    authorsArea.innerHTML = `${phrase.field}`;
    encodeProcess(phrase.quoteAuthor);
};

document.querySelector('.creator').onclick = function() {
    window.location.href = 'https://github.com/adkhambitious';
};
