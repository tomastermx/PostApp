


const { models } = require('../libs/sequelize'); 

class UserService {
     constructor(){
      /*A constructor enables you to provide any custom initialization that 
      must be done before any other methods can be called on an instantiated object. */  
       }  

           async findByPk(data){
            console.log(data);
             const user = await models.User.findByPk(data);
             return user;

           }

          // Create users
           async create(data){
                            
                const user = await models.User.create({
     
                 email: data.emails[0].value,
                 firstName: data.name.givenName,
                 lastName: data.name.familyName,
                 googleId: data.id

                 })
                   console.log(user);
                   return user;
                     
            }

         //find all users//            

         async findAll(){
             const users = await models.User.findAll();               
             return users;
         }

         
         //find one user

          async findOne(data){
            
             const user = await  models.User.findOne({ where:{ googleId: data.id }}); 
             if(user){
                console.log('user found');
                return user;
             } else {
                console.log('user not found ');

                return null 
               }

        } 

          ///delete user
             async deleteUser(data){
                   console.log(data);
                    const  user =  await models.User.findByPk(data);
                  
                    await  user.destroy();
                    return {data};
                   
             }
 

}

 module.exports = UserService;