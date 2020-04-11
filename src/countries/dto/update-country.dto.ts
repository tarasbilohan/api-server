import { ApiProperty } from '@nestjs/swagger';

export class UpdateCountryDto {
  @ApiProperty()
  code: string;

  @ApiProperty()
  name: string;
}
