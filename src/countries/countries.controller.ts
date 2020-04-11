import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@ApiTags('Countries')
@Controller('countries')
export class CountriesController {
  constructor(private countriesService: CountriesService) {}

  @Get()
  async findAll() {
    return await this.countriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.countriesService.findOne(parseInt(id));
  }

  @Post()
  async create(@Body() createCountryDto: CreateCountryDto) {
    return await this.countriesService.create(createCountryDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCountryDto: UpdateCountryDto,
  ) {
    return await this.countriesService.update(parseInt(id), updateCountryDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.countriesService.delete(parseInt(id));
  }
}
