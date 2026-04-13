import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../Produtos/entities/produtos.entity";

@Entity('categoria')
export class Categoria {
    @PrimaryGeneratedColumn()
    id!: number;

    @IsNotEmpty()
    @Column({length: 150})
    tipo!: string;

    @IsNotEmpty()
    @Column({length: 100})
    descricao!: string;

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produtos!: Produto[];

}