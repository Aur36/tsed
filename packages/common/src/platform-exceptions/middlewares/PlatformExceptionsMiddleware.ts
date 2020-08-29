import {Middleware} from "@tsed/common";
import {classOf} from "@tsed/core";
import {Inject} from "@tsed/di";
import {Err} from "../../mvc/decorators/params/error";
import {IMiddleware} from "../../mvc/interfaces/IMiddleware";
import {Context} from "../../platform/decorators/context";
import {getExceptionTypes} from "../domain/ExceptionTypesContainer";
import {GlobalErrorHandlerMiddleware} from "./GlobalErrorHandlerMiddleware";

/**
 * Catch all errors and return the json error with the right status code when it's possible.
 * @middleware
 * @platform
 */
@Middleware()
export class PlatformExceptionsMiddleware implements IMiddleware {
  @Inject()
  middleware: GlobalErrorHandlerMiddleware;

  types = getExceptionTypes();

  use(@Err() error: any, @Context() ctx: Context): any {
    const exceptionFilter = this.types.get(classOf(error));

    if (exceptionFilter) {
      return exceptionFilter.catch(error, ctx);
    }

    return this.middleware.use(error, ctx.request.raw, ctx.response.raw);
  }
}