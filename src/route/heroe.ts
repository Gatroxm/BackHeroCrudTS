import { Router } from 'express';
import { deleteHeroe, getHeroById, getHeros, postHeroe, putHeroe } from '../controller/heroe';

const router = Router(); 

router.get('/heroes',getHeros);
router.get('/heroes/:id', getHeroById);
router.post('/heroes', postHeroe);
router.put('/heroes/:id', putHeroe);
router.delete('/heroes/:id', deleteHeroe);


export default router;