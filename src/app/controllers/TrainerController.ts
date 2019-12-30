import { Request, Response } from 'express';
import * as Yup from 'yup';
import * as bcrypt from 'bcryptjs';

import Trainer from '../models/Trainer';

class TrainerController {
  public async index(req: Request, res: Response): Promise<Response> {
    const trainers = await Trainer.findAll();

    return res.json(trainers);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }

    const trainerExists = await Trainer.findOne({
      where: { email: req.body.email },
    });

    if (trainerExists) {
      return res.status(400).json({ error: 'Treinador existente' });
    }

    req.body.password_hash = await bcrypt.hash(req.body.password, 8);
    const { id, name, email } = await Trainer.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new TrainerController();
