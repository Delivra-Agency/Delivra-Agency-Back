import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoController } from './controller/produtos.controller';
import { ProdutoService } from './service/produtos.service';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Categoria } from '../Categoria/entities/categoria.entity';
import { Produto } from './entities/produtos.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Produto, Categoria, Usuario])],
  controllers: [ProdutoController],
  providers: [ProdutoService],
  exports: [ProdutoService],
})
export class ProdutoModule {}
