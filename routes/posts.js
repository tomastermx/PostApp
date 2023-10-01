const express = require('express');
const router = express.Router();

const postService = require('../services/post.services');

const postservice = new postService();




/*Get all posts */
 

    router.get('/all',(req,res)=>{
       postservice.findAll().then((posts)=>{
          res.json(posts);
       })
    });


    /*Get a post */
 
    router.get('/find/:id', (req,res)=>{ 
         
       const data  = req.params.id;
       postservice.find(data).then((post)=>{
            res.json(post);
       })

    });

   /*create a post */

   router.post('/create',  (req,res)=>{

  

         const  data = { content: req.body.content,   userId: req.user.id };

         console.log(data);

         console.log(req.session.passport);
         console.log(req.user.id);
         console.log(req.user.googleId);

         
      postservice.create(data).then((post)=>{
        console.log(post);
       });



   });

  
    router.patch('/update/:id',(req,res)=>{
  
      const  data  = req.params.id;
      const changes = req.body;

      console.log(data);
      console.log(changes);
      
      postservice.updatePost(data,changes).then((post)=>{
        console.log(post);
      })
       
   });




       router.delete('/delete/:id',(req,res)=>{
         
          const data = req.params.id;

          postservice.deletePost(data).then(post=>{
            console.log(post);
          })
 

       });


   module.exports = router;