import { Categoria } from "./Categoria";
import { User } from "./User";

export class Produto{
    public id: number;
    public nome: string;
    public preco: number;
    public qtd_estoque: number;
    public peso: number;
    public usuario: User;
    public categoria: Categoria;
}