import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class RefreshJwtGuard extends AuthGuard('jwt-refresh') {
    constructor() {
        super();
      }
    
      canActivate(context: ExecutionContext) {
        return super.canActivate(context);
      }
    
      handleRequest(err, user, info) {
        // You can throw an exception based on either "info" or "err" arguments
        if (err || !user) {
          console.log(err, user, info);
          throw err || new UnauthorizedException();
        }
        return user;
      }
}