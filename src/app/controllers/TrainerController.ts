import { Request, Response } from 'express';

import Trainer from '../models/Trainer';

class TrainerController {
  public async index(req: Request, res: Response): Promise<Response> {
    const trainers = await Trainer.findAll();

    return res.json(trainers);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const trainer = await Trainer.create(req.body);

    return res.json(trainer);
  }
}

export default new TrainerController();
