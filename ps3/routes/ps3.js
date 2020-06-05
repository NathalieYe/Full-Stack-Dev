const express = require('express');
const router = express.Router();

/* A route using the GET method that returns a fixed string, which can be anything you like */
router.route('/ps3') // localhost:3000/ps3routes/ps3
    .get((req, res, next) => {
    // res.send('respond with PS3');
    res.render('index', { string: 'Hey now' });
})
.post((req, res, next) => {
    res.render('postRendering', {
        deepObj: {
            originalString2: req.body.originalString,
            // length2: req.body.length
            length2: req.body.originalString.length
        }
    })
    // res.send(`ps3routes complete POST, original string = ${req.body.originalString}, length = ${req.body.length}`);
})

module.exports = router;