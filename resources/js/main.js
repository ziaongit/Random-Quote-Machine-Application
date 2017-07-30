$(document).ready(function() { 

var randomQuote;

// Get Quotes
$.getJSON("https://talaikis.com/api/quotes/", function(data) {
    updateQuote(data);
});

// Generate random Quote start
function updateQuote(quotes) {
    
    var QuotesIndex = Math.floor(Math.random() * quotes.length);
    randomQuote = quotes[QuotesIndex];
    
    console.log(randomQuote);
}
// Generate random Quote end

  
});