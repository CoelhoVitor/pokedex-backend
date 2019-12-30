import { Request, Response } from 'express';
import * as Yup from 'yup';

import Pokemon from '../models/Pokemon';

class PokemonController {
  public async index(req: Request, res: Response): Promise<Response> {
    const pokemons = await Pokemon.findAll();

    return res.json(pokemons);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      type1: Yup.string().required(),
      type2: Yup.string(),
      weakness: Yup.string(),
      resistence: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const pokemon = await Pokemon.create(req.body);

    return res.json(pokemon);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      name: Yup.string(),
      type1: Yup.string(),
      type2: Yup.string(),
      weakness: Yup.string(),
      resistence: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }

    const pokemon = await Pokemon.findByPk(req.params.id);

    if (!pokemon) {
      return res.status(400).json({ error: 'Pokémon inexistente' });
    }

    const pokemonUpdated = await pokemon.update(req.body);

    return res.json(pokemonUpdated);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const pokemon = await Pokemon.findByPk(req.params.id);

    if (!pokemon) {
      return res.status(400).json({ error: 'Pokémon inexistente' });
    }

    await pokemon.destroy();

    return res.json({ message: 'Pokémon excluído com sucesso' });
  }
}

export default new PokemonController();
