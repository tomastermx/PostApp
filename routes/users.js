const express = require('express');
const router = express.Router();


const passport = require('passport');
const GoogleStrategy= require('../libs/passport/passport-google');


 


/* GET users listing. */
 router.get('/', function(req, res, next) {
   res.send('respond with a resource');
});

/*Local strategy login */
 router.get('/login',(req,res,next)=>{


})

/* Google strategy Login */

  router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }))


/*Google strategy login Callback */



 router.get('/auth/google/return',

  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

 
 

module.exports = router;
