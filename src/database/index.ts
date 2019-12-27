import Sequelize from 'sequelize';

import Trainer from '../app/models/Trainer';
import Pokemon from '../app/models/Pokemon';

import databaseConfig from '../config/database';

const models = [Trainer, Pokemon];

class Database {
  constructor() {
    this.init();
  }

  init(): void {
    console.log('foi');
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
