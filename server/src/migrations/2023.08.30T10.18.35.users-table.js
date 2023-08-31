const { DataTypes } = require('sequelize');

module.exports = {
  up: async ({ context: sequelize }) => {
    await sequelize.createTable('users', {
          id: {
            allowNull: false,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
          },
          name: {
            type: DataTypes.STRING
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false
          }
        });
  },
  down: async ({ context: sequelize }) => {
    await sequelize.dropTable('users');
  }
}