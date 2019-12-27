module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('pokemons', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    trainer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'trainers',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type1: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type2: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    weakness: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    resistence: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('pokemons'),
};
