const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogames', {
    id:{ 
      primaryKey: true, 
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    released:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating:{
      type: DataTypes.DECIMAL,
      
    },
    platforms:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    createdInDb: {
      type: DataTypes.BOOLEAN, 
      allowNull: false, 
      defaultValue: true,
    }
    

  });
};
