const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// TODO: YOUR CODE HERE
class Comment extends Model {}

Comment.init(
    {
        // define columns
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        body:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        postid:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        userid:{
            type:DataTypes.INTEGER,
            allowNull:false,
        }

    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;

module.exports = Comment;
