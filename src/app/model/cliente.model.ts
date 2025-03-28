export interface Usuario {
    id: number;
    // Adicione outros campos do usuário se necessário
  }
  
  export class Cliente {
    id?: number;
    nome: string;
    cpf: string; // CPF do cliente, deve ser validado
    telefone: string;
  
    // Campos de endereço
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  
    usuario: Usuario; 
    criadoEm: string;
    infoParaNotaFiscal?:string
  
  }
  