const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        key: "id",
        model: "product",
        unique: false
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        key: "id",
        model: "tag",
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag"
  }
);

module.exports = ProductTag;
