import type { Authenticators } from '@adonisjs/auth/types'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class GuestMiddleware {
    redirectTo = '/'

    async handle(
      ctx: HttpContext,
      next: NextFn,
      options: {
        guards?: (keyof Authenticators)[]
      } = {}
    ) {
      for (const guard of options.guards || [ctx.auth.defaultGuard]){
        if (await ctx.auth.use(guard).check()){
          return ctx.response.redirect(this.redirectTo, true)
        }
      }

      return next()
    }
}