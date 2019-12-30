import { Router } from 'express';

import TrainerController from './app/controllers/TrainerController';
import PokemonController from './app/controllers/PokemonController';

const routes = Router();

routes.get('/trainers', TrainerController.index);
routes.post('/trainers', TrainerController.store);

routes.get('/pokemons', PokemonController.index);
routes.post('/pokemons', PokemonController.store);

export default routes;
