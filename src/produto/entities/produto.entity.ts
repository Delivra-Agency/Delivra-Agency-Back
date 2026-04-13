import { IsNotEmpty, IsNumber } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity({ name: "tb_produtos" })
export class Produto {

    @PrimaryGeneratedColumn()
    id!: number;

    @IsNotEmpty()
    @Column({ length: 100 })
    nome!: string;

    @IsNotEmpty()
    @Column({ length: 500 })
    descricao!: string;

    @IsNumber({ maxDecimalPlaces: 2 })
    @Column({ type: "decimal", precision: 10, scale: 2 })
    preco!: number;

    @Column({ nullable: true })
    foto!: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria!: Categoria;
}