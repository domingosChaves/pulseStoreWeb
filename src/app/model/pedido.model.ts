import { Cliente } from "./cliente.model";
import { Carrinho } from "./carrinho.model";
import { Transportadora } from "./transportadora.model";


export interface Pedido {
    id: number;
    cliente: Cliente;
    carrinho: Carrinho;
    transportadora: Transportadora;
    totalFrete: number

}

export class Pedido {
    public id: number;
    public cliente: Cliente;
    public carrinho: Carrinho;
    public transportadora: Transportadora;
    public totalFrete: number;

    constructor(cliente: Cliente, carrinho:Carrinho,transportadora:Transportadora, totalFrete:number){
        this.cliente = cliente;
        this.carrinho = carrinho;
        this.transportadora = transportadora,
        this.totalFrete = totalFrete
    }
}