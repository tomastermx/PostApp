

let User = require('../models/user');


class UserService {
     constructor(){
      /*A constructor enables you to provide any custom initialization that 
      must be done before any other methods can be called on an instantiated object. */  
       }  
         async create(data){
            
            const  user = await User.create(data);
            return user; 
          

         }

         async findAll(){
             const users = await User.findAll();               
             return users;
         }
     
          async findOne(id){
             const user = await User.findOne(id); 
              return user;

        } 

}