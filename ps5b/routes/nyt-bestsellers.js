const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/nytBooksAPI');

const redis = require('redis');
const client = redis.createClient();
client.flushdb((err, success) => {
    if (err) { throw new Error(err)}
});

const {promisify} = require('util');
const existsAsync = promisify(client.exists).bind(client);
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);


router.route('/ps5b')
    .get(async (req, res, next) => {
        let result = await fetch(CONFIG.url + '?title=1q84&api-key=' + CONFIG.key);
        let bestsellers = await result.json();
        res.send(bestsellers);
    })
    .post(async (req, res, next) => {

        try {

            const title = req.body.title;
            let result = await fetch(CONFIG.url + '?title=' + title + '&api-key=' + CONFIG.key);
            let titleData = await result.json();

            let match = await existsAsync(title);
            if (match) { //key exists, grab value
                let titleData = await getAsync(title); //return key's value;
                let response = {
                    titleData: JSON.parse(titleData),
                    cached: true
                }
                res.send(response);
            } else {
                setAsync(title, JSON.stringify(titleData), 'EX', 30 );
                let response= {
                    titleData: titleData,
                    cached: false
                }
                res.send(response);
            }
        } catch (err) {
            next(err);
        }
    })

module.exports = router;

//?author=Haruki%20Murakami&api-key=
//testing examples: Haruki Murakami's 1Q84, CAMINO WINDS. by John Grisham

// PS4
// router.route('/ps4') //localhost:3000/ps4routes/ps4
//     .get(async (req, res, next) => {
//         let result = await fetch(CONFIG.url + '?title=1q84&api-key=' + CONFIG.key);
//         let bestsellers = await result.json();
//         res.send(bestsellers);
//         // res.render('nyt-bestsellers', {headline: 'New York Times Best Sellers', author: bestsellers.results[0].author, title: bestsellers.results[0].title })
//         // res.send({author: bestsellers.results[0].book_author, title: bestsellers.results[0].book_title} );
//     })
//     .post(async (req, res, next) => {
//         let result = await fetch(CONFIG.url + '?title=' + req.body.title + '&api-key=' + CONFIG.key);
//         let bestsellers = await result.json();
//         res.render('nyt-bestsellers', {headline: 'New York Times Best Sellers', author: bestsellers.results[0].author, title: bestsellers.results[0].title, description: bestsellers.results[0].description })
//     })


