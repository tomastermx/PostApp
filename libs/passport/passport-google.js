
const passport = require('passport'); 
const  {config} = require('../../config');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const userService = require('../../services/user.services');

const userservice = new userService();

  passport.use(new GoogleStrategy({
    clientID: config.googleIdClient,
    clientSecret: config.googleClientsecret ,
    callbackURL: "/users/auth/google/return"
  }, (accessToken, refreshToken, profile, done)=>{

                userservice.findOne(profile).then((user)=>{
                      if(user){
                        console.log(user);
                        return done(null,user);
                      } else {
                       userservice.create(profile).then((user)=>{
                        console.log(user);
                        return done(null,user);
                       });
    
                      }

                })                 



            
           })
   
    );