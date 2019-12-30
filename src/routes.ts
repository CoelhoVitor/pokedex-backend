import { Router } from 'express';

import TrainerController from './app/controllers/TrainerController';
import PokemonController from './app/controllers/PokemonController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = Router();

routes.get('/trainers', TrainerController.index);
routes.post('/trainers', TrainerController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/pokemons', PokemonController.index);
routes.post('/pokemons', PokemonController.store);
routes.put('/pokemons/:id', PokemonController.update);
routes.delete('/pokemons/:id', PokemonController.delete);

export default routes;
