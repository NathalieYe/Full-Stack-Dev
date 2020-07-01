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

router.route('/author')
    .post(async (req, res, next) => {

        try {
            const author = req.body.author;

            let match = await existsAsync(author);
            if (match) { //key exists, grab value
                let authorData = await getAsync(author); //return key's value;
                let response = {
                    authorData: JSON.parse(authorData),
                    cached: true
                }
                res.send(response);
            } else {
                let result = await fetch(CONFIG.url + '?author=' + author + '&api-key=' + CONFIG.key);
                let authorData = await result.json();
                setAsync(author, JSON.stringify(authorData), 'EX', 30 );
                let response= {
                    authorData: authorData,
                    cached: false
                }
                res.send(response);
            }
        } catch (err) {
            next(err);
        }
    })

module.exports = router;



