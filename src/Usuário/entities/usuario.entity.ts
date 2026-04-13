import { IsEmail, IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,} from 'typeorm';

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn()
    id!: number;

    @IsNotEmpty()
    @Column({length: 100})
    nome!: string

    @IsNotEmpty()
    @Column({unique: true, length: 100})
    usuario!: string

    @IsNotEmpty()
    @Column({length: 100})
    senha!: string

    @IsEmail()
    @Column({unique: true, length: 150})
    email!: string

    @IsNotEmpty()
    @Column({nullable: true})
    foto!: string
}