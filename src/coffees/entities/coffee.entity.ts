import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm';
@Entity()
export class Coffee{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    brand:String;
    @Column('json',{nullable:true})
    flavour:String[];
}