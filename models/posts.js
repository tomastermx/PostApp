

const { Model, Sequelize, DataTypes } = require('sequelize');


const {USER_TABLE} = require('./user');
POSTS_TABLE='posts';


const postSchema ={

    id:{
        
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER 
      },

      content:{
        allowNull:false,
        type:DataTypes.STRING
       },
      
       createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      } ,

        userId: {
         field:'user_id',
          allowNull:false,
          type: DataTypes.INTEGER,
          unique:true,
          references:{
          model: USER_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }


   }

    class  Post extends Model {
       static associate(models) {
         this.belongsTo(models.User, {as: 'user'})
       }    
      
       static  config(sequelize){
          return {
            sequelize,
            tableName: POSTS_TABLE,
            modelName: 'Post',
            timestamps: false
          }     
       }

    } 
   


    module.exports = { POSTS_TABLE, postSchema, Post }
