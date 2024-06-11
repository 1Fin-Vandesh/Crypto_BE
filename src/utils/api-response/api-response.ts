import { ApiProperty } from '@nestjs/swagger';

export class ApiResponse {
  @ApiProperty({
    example: 200,
  })
  status = 200;

  @ApiProperty({
    example: 'Success',
  })
  message = 'Success';

  @ApiProperty()
  data: any = {};

  @ApiProperty()
  error = '';

  @ApiProperty()
  stackTrace = '';

  constructor(
    status = 200,
    message = 'Success',
    data = {},
    error = '',
    stackTrace = '',
  ) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.error = error;
    this.stackTrace = stackTrace;
  }
}
