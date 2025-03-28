import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';
import { Usuario } from 'src/app/model/usuario.model';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  usuario: any;
  clientes: Cliente[] = []; // Lista de clientes
  cliente: Cliente = this.inicializarCliente(); // Cliente selecionado para exibição ou edição
  clienteId!: number; // ID do cliente que será recuperado
  isEditing: boolean = false; // Flag para indicar se estamos no modo de edição

  constructor(
    private clienteService: ClienteService, 
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuario = this.usuarioService.recuperarUsuarioSessao();
  }

  // Inicializa um novo cliente
  private inicializarCliente(): Cliente {
    return {
  nome: '',
  cpf: '',
  telefone: '',
  logradouro: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  estado: '',
  cep: '',
  usuario: undefined,
  criadoEm: ''
};
  }

  // Método para cadastrar um novo cliente
  cadastrarCliente(): void {

    this.cliente.usuario = this.usuario;

    this.clienteService.criarCliente(this.cliente).subscribe(
      (novoCliente) => {
        this.clienteService.salvarClienteSessao(novoCliente);
        this.router.navigate(['/produtos']); // Redirecionar para a tela de produtos após cadastro
      },
      (error) => {
        console.error('Erro ao cadastrar cliente', error);
      }
    );
  }

  // Lista todos os clientes
  listarClientes(): void {
    this.clienteService.obterListaClientes().subscribe(
      (clientes) => {
        this.clientes = clientes;
        console.log('Lista de clientes:', this.clientes);
      },
      (error) => {
        console.error('Erro ao listar clientes', error);
      }
    );
  }

  // Método para obter um cliente pelo ID
  obterCliente(clienteId: number): void {
    this.clienteService.obterCliente(clienteId).subscribe(
      (cliente) => {
        this.cliente = cliente;
        console.log('Cliente obtido:', this.cliente);
      },
      (error) => {
        console.error('Erro ao obter cliente', error);
      }
    );
  }

  // Método para navegar até a edição de cliente
  irParaEdicao(clienteId: number): void {
    this.router.navigate(['/editar-cliente', clienteId]);
  }

  // Método para deletar um cliente
  deletarCliente(clienteId: number): void {
    this.clienteService.deletarCliente(clienteId).subscribe(
      () => {
        console.log('Cliente deletado com sucesso');
        this.listarClientes(); // Atualiza a lista após a deleção
      },
      (error) => {
        console.error('Erro ao deletar cliente', error);
      }
    );
  }
}
