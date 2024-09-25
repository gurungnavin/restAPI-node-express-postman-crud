import express from 'express';
import { createUser, getUsers, getUser, updateUser, deleteUser } from '../controllers/users.js';

import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let users = [ ];

// all routes in here are starting with /users
router.get('/', getUsers);

router.post('/', createUser);

// /users/2 => req.params { id : 2}
router.get('/:id', getUser);

router.delete('/:id',deleteUser);


router.patch('/:id', updateUser)


export default router;