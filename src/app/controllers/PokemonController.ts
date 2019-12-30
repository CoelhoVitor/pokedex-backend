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

  public async update(req: Request, res: Response): Promise<Response> {
    const pokemon = await Pokemon.findByPk(req.params.id);

    const pokemonUpdated = await pokemon.update(req.body);

    return res.json(pokemonUpdated);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const pokemon = await Pokemon.findByPk(req.params.id);

    await pokemon.destroy();

    return res.send();
  }
}

export default new PokemonController();
