import { ActionError } from '@/types/errors'
import {
  DEFAULT_SERVER_ERROR_MESSAGE,
  createSafeActionClient,
} from 'next-safe-action'
import { z } from 'zod'
import { loggingMiddleware } from '../middlewares/logging-middleware'

export const baseActionClient = createSafeActionClient({
  handleServerError(e) {
    if (e instanceof ActionError) {
      return e.message
    }

    return DEFAULT_SERVER_ERROR_MESSAGE
  },
  defineMetadataSchema() {
    return z.object({
      actionName: z.string(),
    })
  },
}).use(loggingMiddleware)
