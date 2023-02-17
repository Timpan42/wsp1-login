const { response } = require('express');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('../utils/database.js');
const promisePool = pool.promise();


/* GET home page. */
router.get('/', async function (req, res, next) {
    console.log(req.session.login)
    res.render('index.njk', { title: 'Login ALC' });

});


router.get('/login', async function (req, res, next) {
    // const [user] = await promisePool.query('SELECT * FROM dbusers');

    res.render('login.njk', { title: 'Log' });
});

router.get('/profile', async function (req, res, next) {
  

    if(req.session.login == 1){

        res.render('profile.njk', { title: 'Profile', name: req.session.username  })
    }
    else{
        return res.status(401).send('Access denied')
    }

});

router.post('/profile', async function (req, res, next) {
    req.body = {logout};


});

router.get('/logout', async function (req, res, next) {

});

router.post('/logout',  async function (req, res, next) {
   

    if(req.session.login == 1){
        req.session.login = 0;
        res.redirect('/')
    }
    else{
        return res.status(401).send('Access denied')
    }
    
});

router.post('/login', async function (req, res, next) {
    const { username, password } = req.body;


    if (username.length == 0) {
        return res.send('Username is Required')
    }
    if (password.length == 0) {
        return res.send('Password is Required')
    }

    const [user] = await promisePool.query('SELECT * FROM dbusers WHERE name = ?', [username]);
    
        
        bcrypt.compare(password, user[0].password, function (err, result) {
            //logga in eller nåt
           
            if (result === true) {
               // return res.send('Welcome')
                req.session.username = username;
                req.session.login = 1; 
                return res.redirect('/profile');

                
            }
            
            else {
                return res.send("Invalid username or password")
            }
            
        })
        
   
});

router.get('/crypt/:password', async function (req, res, next) {
    console.log(req.params)
    const password = req.params.password
    // const [password] = await promisePool.query('SELECT password FROM dbusers WHERE none = ?', [password]);
    bcrypt.hash(password, 10, function (err, hash) {
        console.log(hash);
        return res.json({ hash });

    })
});

router.get('/signin', function (req, res, next) {
    res.render('signin.njk', { title: 'sign' });
});


module.exports = router;
