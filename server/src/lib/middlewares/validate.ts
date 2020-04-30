import { plainToClass } from 'class-transformer'
import { ClassType } from 'class-transformer/ClassTransformer'
import * as HttpStatus from 'http-status-codes'
import { RequestHandler } from 'express'
import { validate } from 'class-validator'

export function validateParams<T> (paramsClass: T, paramsLocation: 'params' | 'query' = 'query') {
  const handler: RequestHandler = async (req, res, next) => {
    const object = plainToClass((paramsClass as unknown) as ClassType<T>, req[paramsLocation])
    const errors = await validate(object)
    if (errors.length > 0) {
      return res.status(HttpStatus.BAD_REQUEST).json(errors)
    } else {
      res.locals = {
        [paramsLocation]: object,
        ...res.locals
      }
      return next()
    }
  }
  return handler
}