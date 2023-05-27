const quotes = require('./store/quotes')

const express = require('express');
const app = express();

console.log(quotes);


app.get("/quotes/search", (req, res) => {
    const search = req.query.author;
    const filteredQuotes = quotes.filter((quote) => {
        return quote.quote.toLowerCase().includes(search.toLowerCase()) || quote.author.toLowerCase().includes(search.toLowerCase());
    });
    res.status(200).json(filteredQuotes);
});



app.get('/quotes',(req,res)=>{
    res.status(200).json(quotes);
})

app.get('/quotes/random',(req,res)=>{
    res.status(200).json    (quotes[Math.floor(Math.random()*quotes.length)]);
});

app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname + '/views/home.html');
})






app.listen(3000,()=>{
    console.log("Server is running");
})