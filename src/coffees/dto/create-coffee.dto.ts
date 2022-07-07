import { IsNumber, IsString } from "class-validator";

export class CreateCoffeeDto {
    @IsNumber()
    readonly id:number;
    @IsString()
    readonly name:string;
    @IsString()
    readonly brand:String;
    @IsString({each:true})
    readonly flavour:String[];
}
 