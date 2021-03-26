import {Router, Request, Response} from 'express';

import {User} from '../models/User';
import {AuthRouter} from './auth.router';
var log = require('npmlog');

const router: Router = Router();

router.use('/auth', AuthRouter);

router.get('/');

router.get('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const item = await User.findByPk(id);

  if(!item){ log.error("user", "No user found in the DB");}

  res.send(item);
});

export const UserRouter: Router = router;
