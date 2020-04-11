import { ApiProperty } from '@nestjs/swagger';

export class CreateCountryDto {
  @ApiProperty()
  code: string;

  @ApiProperty()
  name: string;
}
