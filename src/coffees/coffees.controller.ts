import { Body, Controller,Delete,Get,HttpCode,HttpStatus,Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService:CoffeesService){}
    @Get()
    findAll(@Query() paginationQuery){
        // const {limit,offset}=paginationQuery
        return this.coffeesService.findAll();
    }
    @Get("about")
    about(){
        return "THIS IS ABOUT COFFEE"
    }
    @Get(":id")
    find(@Param("id") id:number){
        return this.coffeesService.find(id);
    }
    @Post()
    create(@Body() createCoffeeDto:CreateCoffeeDto){
        return this.coffeesService.create(createCoffeeDto);
    }
    @Patch(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    update(@Param("id") id:number,@Body() updateCoffeeDto:UpdateCoffeeDto){
        return this.coffeesService.update(id,updateCoffeeDto);
    }
    @Delete(":id")
    @HttpCode(HttpStatus.GONE)
    remove(@Param("id") id:number){
        return this.coffeesService.delete(id);
    }
}
