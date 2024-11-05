import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    console.log(`Request to ${request.url}`);
    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`Response time: ${Date.now() - now}ms`)));
  }
}