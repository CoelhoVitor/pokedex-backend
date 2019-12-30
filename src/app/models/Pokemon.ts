import { Model } from 'sequelize-typescript';
import Sequelize from 'sequelize';

export default class Pokemon extends Model<Pokemon> {
  static init(sequelize: any) {
    super.init(
      {
        name: Sequelize.STRING,
        type1: Sequelize.STRING,
        type2: Sequelize.STRING,
        weakness: Sequelize.STRING,
        resistence: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models: Model): void {
    this.belongsTo(models.Trainer, { foreignKey: 'trainer_id', as: 'trainer' });
  }
}
