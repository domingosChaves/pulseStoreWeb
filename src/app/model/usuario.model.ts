import { Papel } from "../enum/papel.enum";

export class Usuario {
    public nome: string;
    public email: string;
    public senha: string;
    public papel: Papel;
    id?: number;

    constructor(nome: string, email: string, senha: string, papel: Papel) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.papel = papel;
    }
}