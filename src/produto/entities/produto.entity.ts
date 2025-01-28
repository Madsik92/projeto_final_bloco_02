import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({ name: 'tb_produtos' })
export class Produto {

  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  preco: number;

  @Column({ type: 'int', nullable: false })
  estoque: number;

  @Column({ length: 255, nullable: false })
  laboratorio: string;

  @Column({ length: 5000, nullable: true })
  foto: string;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto)
  categoria : Categoria;
}
