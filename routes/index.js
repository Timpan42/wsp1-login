const { response } = require('express');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.njk', { title: 'Login ALC' });
});
router.get('/login', function(req, res, next) {
    res.render('login.njk', { title: 'Log' });
});
router.post('/login', function(req, res, next) {
    const { username, password } = req.body;
    
});

router.get('/signin', function(req, res, next) {
    res.render('signin.njk', { title: 'sign' });
});


module.exports = router;
