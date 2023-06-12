const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        creamKey: true,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
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
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'blog',
    }
  );
  
  module.exports = Blog;