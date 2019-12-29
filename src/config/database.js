module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'docker',
  database: 'trainerbase',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
