import Sequelize from 'sequelize';

import Trainer from '../app/models/Trainer.ts';

import databaseConfig from '../config/database';

const models = [Trainer];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
