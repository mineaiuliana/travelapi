import { Router } from 'express';
import { TripController } from '../controllers/trip';

const router = Router();
const controller = new TripController();

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;