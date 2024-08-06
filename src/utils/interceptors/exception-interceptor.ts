// Sauce: https://blog.stackademic.com/crafting-a-uniform-response-structure-in-nestjs-a-guide-to-mastering-interceptors-706820b5aa0b
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NestInterceptor,
} from '@nestjs/common';
import { AxiosError } from 'axios';
import { response } from 'express';
import { PostgresError } from 'postgres';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ExceptionLoggerService } from 'src/helpers/exception-logger.service';

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
  constructor(
    private readonly exceptionLoggerService: ExceptionLoggerService,

  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err: HttpException) =>
        throwError(() => this.errorHandler(err, context)),
      ),
    );
  }


  errorHandler(exception: HttpException, context: ExecutionContext) {
    console.log(exception);

    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const out = this.createResponse(status, exception, request);

    response.status(status).json(out);
  }

  // responseHandler(res: any, context: ExecutionContext) {
    // const ctx = context.switchToHttp();
    // const response = ctx.getResponse();
    // const request = ctx.getRequest();

  //   return res;
  // }

  private createResponse(status: number, exception: any, request) {

    // request for storing api hit data

    // let responseData = {
    //   status,
    //   message: exception.message,
    //   error: '',
    //   stackTrace: '',
    //   data: {},
    // };

    let responseData = {
      status,
      message: exception?.message || '',
      error: exception?.name || '',
      stackTrace: '', // exception?.stack || '',
      data: {},
    }

    if (exception instanceof HttpException) {
      return responseData;
    } else if (exception instanceof AxiosError) {
      this.exceptionLoggerService.apiExceptionlog(exception);
      responseData = {
        status,
        message: exception?.message || '',
        error:  'Internal server error',
        stackTrace: exception?.stack || '',
        data: {},
      };

    } else {
      this.exceptionLoggerService.exceptionLog(exception, request);

      responseData = {
        status,
        message: exception?.message || '',
        error:  'Internal server error',
        stackTrace: exception?.stack || '',
        data: {},
      };

    }

    return responseData





  }
}
