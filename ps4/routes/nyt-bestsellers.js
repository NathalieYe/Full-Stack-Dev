const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/nytBooksAPI');

//?author=Haruki%20Murakami&api-key=
//testing examples: Haruki Murakami's 1Q84, CAMINO WINDS. by John Grisham


router.route('/current')
    .get(async (req, res, next) => {
        let result = await fetch(CONFIG.url + '?title=1q84&api-key=' + CONFIG.key);
        let bestsellers = await result.json();
        res.send(bestsellers);
        // res.render('nyt-bestsellers', {headline: 'New York Times Best Sellers', author: bestsellers.results[0].author, title: bestsellers.results[0].title })
        // res.send({author: bestsellers.results[0].book_author, title: bestsellers.results[0].book_title} );
    })
    .post(async (req, res, next) => {
        let result = await fetch(CONFIG.url + '?title=' + req.body.title + '&api-key=' + CONFIG.key);
        let bestsellers = await result.json();
        res.render('nyt-bestsellers', {headline: 'New York Times Best Sellers', author: bestsellers.results[0].author, title: bestsellers.results[0].title, description: bestsellers.results[0].description })
    })

module.exports = router;
//From Postman
// var request = require('request');
// var options = {
//     'method': 'GET',
//     'url': CONFIG.url + '?author=Haruki%20Murakami&api-key=' + CONFIG.key,
//     'headers': {
//     }
// };
// request(options, function (error, response) {
//     if (error) throw new Error(error);
//     console.log(response.body);
// });
