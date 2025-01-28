import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";

@Entity({ name: 'tb_categorias' })
export class Categoria {

  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @Column({ length: 255, nullable: false })
  indicacao: string;

  @Column({ length: 100, nullable: false })
  receita: string; 

  @OneToMany(() => Produto, (produto) => produto.categoria)
  produto : Produto;
}
