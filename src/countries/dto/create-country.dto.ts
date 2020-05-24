import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateCountryDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(2, 2)
  code: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 255)
  name: string;
}
