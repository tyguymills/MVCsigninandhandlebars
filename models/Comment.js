const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model {}


Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        creamKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id" 
        }
      },
      blog_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "blog",
            key: "id" 
        }
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

  module.exports = Comment
  