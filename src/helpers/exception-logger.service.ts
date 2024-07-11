import { Injectable } from "@nestjs/common";
import { AxiosError } from "axios";
import { DrizzleService } from "src/drizzle/database/drizzle.service";
import { exception_logs, api_exception_logs } from "src/drizzle/schema/exception-log-schema/exception-log-schema";
@Injectable()
export class ExceptionLoggerService {
    constructor(
        private readonly drizzleService: DrizzleService,
    ) {}

    async exceptionLog(exception: any, request: any): Promise<any> {

        let user_id = request?.body?.user_id || request?.headers?.user_id || request?.user?.sub

        await this.drizzleService.db.insert(exception_logs).values({
            user_id: user_id || '',
            endpoint: request.originalUrl,
            method: request.method,
            body: request?.body || null,
            header: request?.headers || null,
            error: exception?.name || '',
            message: exception?.message || '',
            error_code: exception?.code || '',
            stack_trace: exception?.stack || '',
        })
    }

    async apiExceptionlog(exception: AxiosError) {
        await this.drizzleService.db.insert(api_exception_logs).values({
            endpoint: exception.config.url,
            method: exception.request.method,
            status_code: exception.response.status?.toString(),
            body: exception.request.body || null,
            header: exception.request.headers || null,
            response_data: exception?.response?.data || null,
            stack_trace: exception.stack || '',
        })
    }
}