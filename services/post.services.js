const { models } = require('../libs/sequelize'); 





 class postService{

    constructor(){
        /*A constructor enables you to provide any custom initialization that 
        must be done before any other methods can be called on an instantiated object. */  
         }  

         /// Create Post

             async create(data){

              const  post = await  models.Post.create({
              content: data.content,
              userId: data.userId              

             });
              console.log(post);
               return post; 

              }
            
          // Find Post
         async find(data){
          const  post =  await models.Post.findByPk(data);
           return post;
         }
          
         //Find all Posts
          async findAll(){
             const post = await models.Post.findAll();
            return post;
          } 

        //Update Posts
          async updatePost(data,changes){
             const post = await  models.Post.findByPk(data);
             post.update(changes);
             return post
          }  


         //Delete Post
         
           async deletePost(data){
            const deleted =  await models.Post.findByPk(data);
            deleted.destroy();
            return data;
         }

 }

   module.exports  = postService;