// Naming of variables
let getRandomQuote = document.querySelector('.random');

// Объект в котором будут данные по цитате
const phrase = {};
// Selected elements
const oneQuoteReflection = document.querySelector('.p');
const authorReflection = document.querySelector('.initials');
// Clicking on random button


// Getting data from API-provider
getRandomQuote.onclick = function(event) {
    const api = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';
    fetch(api)
        .then((response) => {
            let data = response.json();
        })
        .then((data) => {
            phrase.id = data.id;
            phrase.quoteText = data.quoteText;
            phrase.quoteAuthor = data.quoteAuthor;
        })
        .then(function() {
            displayQuote();
        });
};
alert (phrase);
function displayQuote() {
    oneQuoteReflection.innerHTML = `${phrase.quoteText}`;
    authorReflection.innerHTML = `${phrase.quoteAuthor}`;
};



