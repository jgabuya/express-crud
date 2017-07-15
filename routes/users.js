var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    var users = [
        { name: 'Debbie' },
        { name: 'Jirffey' }
    ]

    res.send(users);
});

module.exports = router;
