import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  BeforeSave,
} from 'sequelize-typescript';
import Sequelize from 'sequelize';
import * as bcrypt from 'bcryptjs';

/*
@Table({
  hooks: {
    beforeSave: async (trainer: Trainer): Promise<void> => {
      if (trainer.password) {
        trainer.password_hash = await bcrypt.hash(trainer.password, 8);
      }
    },
  },
})
*/
export default class Trainer extends Model<Trainer> {
  // @Column
  // name!: string;

  // @Column
  // email!: string;

  // password!: string;

  @Column
  password_hash!: string;

  // @CreatedAt
  // @Column
  // createdAt!: Date;

  // @UpdatedAt
  // @Column
  // updatedAt!: Date;

  static init(sequelize: any) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password_hash);
  }
}
