const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// TODO: YOUR CODE HERE
class Post extends Model {}

Post.init(
    {
        // define columns
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        body:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        userid:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;

