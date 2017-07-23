var express = require('express');
var router = express.Router();

/* GET contacts listing. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'All Contacts' });
});

module.exports = router;