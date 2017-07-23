var express = require('express');
var router = express.Router();

/* GET contacts listing. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'All Contacts' });
});

router.get('/create', (req, res, next) => {
    res.render('create', { title: 'Create New Contact' });
});

router.post('/store', (req, res, next) => {
    res.send(req.params);
});

router.get('/edit/:contactId', (req, res, next) => {
    res.send(req.params);
});

router.post('/update/:contactId', (req, res, params) => {
    res.send(req.params);
});

module.exports = router;