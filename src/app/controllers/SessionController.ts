import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import { Request, Response } from 'express';

import Trainer from '../models/Trainer';
import authConfig from '../../config/auth';

class SessionController {
  async store(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }

    const { email, password } = req.body;

    const trainer = await Trainer.findOne({ where: { email } });

    if (!trainer) {
      return res.status(401).json({ error: 'Treinador não encontrado' });
    }

    if (!(await trainer.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha inválida' });
    }

    const { id, name } = trainer;

    return res.json({
      trainer: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
