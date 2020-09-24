// Объект в котором будут данные по цитате
const phrase = {};

// Selected elements and naming of variables
const oneQuoteReflection = document.querySelector('.quoteContent');
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

// ALL QUOTES OF A AUTHOR
const allAuthorQuotes = [];
// Selected elements
const firstPhrase = document.querySelector('.one');
const secondPhrase = document.querySelector('.two');
const thirdPhrase = document.querySelector('.three');
// Encode URI function 
let api;
let encodedLink;
const encodeProcess = (arg) => {
    api = `https://quote-garden.herokuapp.com/api/v2/authors/${phrase.quoteAuthor}?page=1&limit=3`;
    encodedLink = encodeURI(api);
}
console.log(api); // undefined
console.log(`encodedLink=${encodedLink}`); // undefined 
const getAllQuotes = document.querySelector('.authorButton');

getAllQuotes.onclick = function() {
    fetch(encodedLink)
        .then ((response) => {
            let data = response.json();
            console.log(data);
            return data;
        })
        .then ((data) => {
            allAuthorQuotes[0] = data.quotes[0].quoteText;
            allAuthorQuotes[1] = data.quotes[1].quoteText;
            allAuthorQuotes[2] = data.quotes[2].quoteText;
        })
        .then (function() {
            quotesReflection();
        })
}
 
const quotesReflection = () => {
    firstPhrase.innerHTML = allAuthorQuotes[0];
    secondPhrase.innerHTML = allAuthorQuotes[1];
    thirdPhrase.innerHTML = allAuthorQuotes[2];
}


getAllQuotes.addEventListener("click", function(){
    document.querySelector(".allQuotesContainer").classList.remove("hidden");
    document.querySelector(".oneQuoteContainer").classList.add("hidden");
});
