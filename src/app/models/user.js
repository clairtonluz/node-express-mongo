module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail : {
          msg: "Email inválido"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    underscored: true,
  });

  return User;
}
