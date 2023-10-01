const express = require('express');
const router = express.Router();
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy= require('../libs/passport/passport-google');
const userService = require('../services/user.services');

const userservice = new userService();


/* GET  all users  */
 router.get('/all', function(req, res, next) {
   
      userservice.findAll().then((users)=>{
      res.json(users);   
  })

});

/*Local strategy login */
 router.get('/login',(req,res,next)=>{

})

/* Google strategy Login */

  router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));


/*Google strategy login Callback */



 router.get('/auth/google/return',

  passport.authenticate('google', { failureRedirect: '/login' }),
  (req , res)=> {
      console.log('success login');
      console.log(req.isAuthenticated());
      console.log(req.user);
      

    // Successful authentication, redirect home.
    res.redirect('/');
  });

 
     //Delete user
     
      router.delete('/delete/:id',(req,res)=>{
        
        const data  = req.params.id;
       
        userservice.deleteUser(data).then((user)=>{
          console.log(user);   

        });    
         

     });

   

module.exports = router;
