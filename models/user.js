


const { Model , Sequelize, DataTypes } = require('sequelize');



const USER_TABLE = 'users';


  const UserSchema = {

          id:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER 
                },
           
           email:{
           allowNull: false, 
           type: DataTypes.STRING,
            unique: true 
               },
            
           firstName:{
            allowNull: false,
            type: DataTypes.STRING
           },
           
           lastName:{
            allowNull: false,
            type:DataTypes.STRING
           },
          
            googleId :{
            allowNull:false,
            type:DataTypes.STRING            
          },

          createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'create_at',
            defaultValue: Sequelize.NOW
          }

      }

      class User extends Model {
        static associate(models) {
           this.hasMany(models.Post, {
            as:'posts',
            foreignKey: 'userId'
           });
        }

        
        static config(sequelize) {
          return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
                }
     
     
            } 
      
      }

        
    


    
     
    module.exports = { USER_TABLE, UserSchema, User }