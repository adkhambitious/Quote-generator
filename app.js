// Объект в котором будут данные по цитате
const phrase = {};

// Selected elements and naming of variables
const oneQuoteReflection = document.querySelector('.js-mainQuote');
const authorReflection = document.querySelector('.js-initials');
const authorsArea = document.querySelector('.js-area');

// Clicking on random button
let randomButtonQuote = document.querySelector('.js-random');

// Getting data from API-provider
randomButtonQuote.onclick = function startRandom() {
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

// ALL QUOTES OF A AUTHOR
const allAuthorQuotes = [];

// Selected elements
const firstPhrase = document.querySelector('.js-firstPhrase');
const secondPhrase = document.querySelector('.js-secondPhrase');
const thirdPhrase = document.querySelector('.js-thirdPhrase');
const authorInitials = document.querySelector('.js-authorInitials');

// Encode URI function 
let api;
let encodedLink;
const encodeProcess = (arg) => {
    api = `https://quote-garden.herokuapp.com/api/v2/authors/${phrase.quoteAuthor}?page=1&limit=3`;
    encodedLink = encodeURI(api);
}

const allQuotesButton = document.querySelector('.js-authorButton');

allQuotesButton.onclick = function() {
    fetch(encodedLink)
        .then ((response) => {
            let data = response.json();
            return data;
        })
        .then ((data) => {
            allAuthorQuotes[0] = data.quotes[0].quoteText;
            allAuthorQuotes[1] = data.quotes[1].quoteText;
            allAuthorQuotes[2] = data.quotes[2].quoteText;
            allAuthorQuotes[3] = data.quotes[2].quoteAuthor;
        })
        .then (function() {
            displayAllQuotes();
        })
}

const displayAllQuotes = () => {
    firstPhrase.innerHTML = allAuthorQuotes[0];
    secondPhrase.innerHTML = allAuthorQuotes[1];
    thirdPhrase.innerHTML = allAuthorQuotes[2];
    authorInitials.innerHTML = `${allAuthorQuotes[3]}`;   
}

allQuotesButton.addEventListener("click", function(){
    document.querySelector(".allQuotesContainer").classList.remove("hidden");
    document.querySelector(".oneQuoteContainer").classList.add("hidden");
});


document.querySelector('.js-randomClick').onclick = function() {
    document.querySelector(".allQuotesContainer").classList.add("hidden");
    document.querySelector(".oneQuoteContainer").classList.remove("hidden");
    startRandom();
}