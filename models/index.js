
     const {User,  UserSchema } = require('../models/user');
     const {Post,  postSchema } = require('../models/posts');

      function setupModels(sequelize){
      User.init(UserSchema, User.config(sequelize));
      Post.init(postSchema, Post.config(sequelize)); 

      User.associate(sequelize.models);
      Post.associate(sequelize.models); 
     }


       module.exports = setupModels;
