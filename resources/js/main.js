var randomQuote;
var currentIndex;
$(document).ready(function() { 
    getRandomQuote();
    $('#randomQuote').click(getRandomQuote);
  
});


// Get Random Quote start
function getRandomQuote(){
    $.getJSON("https://talaikis.com/api/quotes/", function(data) {
    generateQuote(data);
    
    });
}
// Get Random Quote end

// Generate random Quote start
function generateQuote(quotes) {
    do {
        var QuotesIndex = Math.floor(Math.random() * quotes.length);
    }while(currentIndex === QuotesIndex)
    
    randomQuote = quotes[QuotesIndex];
    currentIndex = QuotesIndex;
    
    $('#quote').html(randomQuote.quote);
    $('#author').html(randomQuote.author);
}
// Generate random Quote end