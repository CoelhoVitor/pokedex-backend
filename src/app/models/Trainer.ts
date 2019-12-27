import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  HasMany,
} from 'sequelize-typescript';
import * as bcrypt from 'bcryptjs';

// import Pokemon from './Pokemon';

@Table({
  timestamps: true,
  hooks: {
    beforeSave: async (trainer: Trainer): Promise<void> => {
      if (trainer.password) {
        trainer.password_hash = await bcrypt.hash(trainer.password, 8);
      }
    },
  },
})
export default class Trainer extends Model<Trainer> {
  // @HasMany(() => Pokemon)
  // pokemons: Pokemon[];

  @Column
  name: string;

  @Column
  email: string;

  password: string;

  @Column
  password_hash: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password_hash);
  }
}
