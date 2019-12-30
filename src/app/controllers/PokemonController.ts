import { Request, Response } from 'express';

import Pokemon from '../models/Pokemon';

class PokemonController {
  public async index(req: Request, res: Response): Promise<Response> {
    const pokemons = await Pokemon.findAll();

    return res.json(pokemons);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const pokemon = await Pokemon.create(req.body);

    return res.json(pokemon);
  }
}

export default new PokemonController();
