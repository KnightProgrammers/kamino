const { DataTypes } = require('sequelize');

module.exports = {
  up: async ({ context: sequelize }) => {
    await sequelize.addColumn('users', 'isAdmin', { 
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    });
  },
  down: async ({ context: sequelize }) => {
    await sequelize.removeColumn('users', 'isAdmin');
  }
}