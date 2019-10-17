import { Router } from 'express';
const router: Router = Router();

router.get('/', (req, res) => {
	console.log('Hello world');
});

export default router;
