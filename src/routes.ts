import { Router } from 'express';

import TrainerController from './app/controllers/TrainerController';
import PokemonController from './app/controllers/PokemonController';

const routes = Router();

routes.get('/trainers', TrainerController.index);
routes.post('/trainers', TrainerController.store);

routes.get('/pokemons', PokemonController.index);
routes.post('/pokemons', PokemonController.store);
routes.put('/pokemons/:id', PokemonController.update);
routes.delete('/pokemons/:id', PokemonController.delete);

export default routes;
