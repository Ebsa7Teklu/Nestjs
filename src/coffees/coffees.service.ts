import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees:Coffee[]=[
    {
        id: 1,
        name:"Jimma Coffee",
        brand:"ETH",
        flavour:[
            "Coffee",
            "Milk"
        ]
    }
    ];
    //Methods
    findAll(){
        return this.coffees;
    }
    find(id:number){
        const coffee:Coffee= this.coffees.find(item=>item.id==id);
        if (!coffee) {
            throw new NotFoundException("coffee not found");
            
        }
        return coffee;
    }
    create(body:CreateCoffeeDto){
        console.log(body instanceof CreateCoffeeDto);
         this.coffees.push(body)
         return body;
    }
    update(id:number,body:any){
        const existCoffee=this.find(id);
        if (existCoffee){
            existCoffee.name=body.name?body.name:existCoffee.name;
            existCoffee.brand=body.brand?body.brand:existCoffee.brand;
            existCoffee.flavour=body.flavour?body.flavour:existCoffee.flavour;
            return existCoffee;
        }
        else{
            throw new NotFoundException('Coffee not found');
        }
    }
    delete(id:number){
       const index=this.coffees.findIndex(item=>item.id==id);
       console.log(index)
       if (index>=0){
            return this.coffees.splice(index);
       }
       else{
        throw new NotFoundException('Coffee not found');
       }
    }
}
