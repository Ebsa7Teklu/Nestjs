import { IsString } from 'class-validator';
export class UpdateCoffeeDto {
    @IsString()
    readonly name?:string;
    @IsString()
    readonly brand?:String;
    @IsString({each:true})
    readonly flavour?:String[];
}
