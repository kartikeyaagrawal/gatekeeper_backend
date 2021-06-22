require('dotenv').config() 
const express = require("express");
const bodyParser = require("body-parser");
// const ejs = require("ejs");
const session = require('express-session');
const passport=require("passport");
const passportlocalmongoose=require("passport-local-mongoose");
// const mongoose = require('mongoose');


const app = express();
// app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


////////////////////////////////////////////////PASSPORT AND SESSIONS//////////////////////////////////////////////////////////

app.use(session({              //creating a session
    secret: 'our little secret',
    resave: false,
    saveUninitialized: true,
    cookie: {}
  }))

  app.use(passport.initialize());   //initailising passports and sessions.
  app.use(passport.session());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////CONFIGURE PASSPORT/PASSPORT-LOCAL//////////////////////////////////////////////

//All of this would happen after a connection to database.

// const usersSchema = new mongoose.Schema({
//     Email: String,
//     Password: String,
//     googleId: String
//   });

usersSchema.plugin(passportlocalmongoose);  //used for bcrypts(to salt and save our hashed passwords);

// const User= mongoose.model('User', usersSchema);

passport.use(User.createStrategy());   //createStrategy as static method to your schema. The createStrategy is responsible to 
                                      // setup passport-local LocalStrategy with the correct options.

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//get registeration 
app.get("/register",function(req,res){
    res.render("register");
});


//post registration
app.post("/register",function(req,res){

    User.register({username: req.body.username}, req.body.password,function(err,user){
                       if(err)
                       {
                       console.log(err);
                       res.redirect("/register");
                       }
                       else
                       {
                           //user would be authenticated ,would enter to dashboards(secrets) and a cookie would be created for 
                           // this session.
                           passport.authenticate("local")(req,res, function(){
                                res.redirect("/secrets");
                                                   
                           });
                       }
    });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//get login
app.get("/login",function(req,res){
    res.render("login");
});


//post login
app.post('/login',   //if user is authenticated then would enter dashboards(secrets)
  passport.authenticate('local', { successRedirect: '/secrets',   
                                   failureRedirect: '/login' }));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NOW IF YOU WANT TO GO ON ANY PAGE WHICH REQUIRES AUTHENTICATION
app.get("/secrets",function(req,res){
    if(req.isAuthenticated()){
           res.render("secrets"); //if user is authenticated then would enter the page
    }
    else
    {
      res.redirect("/login");   //else would be redirected to login.
    }

});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//logout
app.get("/logout",function(req,res){
    req.logout();
    res.redirect("/");    //would logged out from the session and the cookie would be destroyed.
 });