import { Router } from 'express'
import {INTERNAL_SERVER_ERROR} from "http-status-codes";

import { getUsers } from "../user/user.service";
import { logger } from '../logger';

export const userRouter = Router()

userRouter.get('/', async (req, res) => {
    try {
        res.json(await getUsers())
    } catch (err) {
        logger.error(err.message, err);
        res.sendStatus(INTERNAL_SERVER_ERROR)
    }
})
