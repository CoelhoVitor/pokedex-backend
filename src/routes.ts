import { Router } from 'express';
import TrainerController from './app/controllers/TrainerController';

const routes = Router();
routes.get('/', (req, res) => res.send('Hello World'));
routes.get('/trainers', TrainerController.index);
routes.post('/trainers', TrainerController.store);
export default routes;
