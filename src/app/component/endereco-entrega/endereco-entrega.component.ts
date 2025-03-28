import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carrinho } from 'src/app/model/carrinho.model';
import { Cliente } from 'src/app/model/cliente.model';
import { Pedido } from 'src/app/model/pedido.model';
import { Transportadora } from 'src/app/model/transportadora.model';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { TransportadoraService } from 'src/app/services/transportadora/transportadora.service';


@Component({
  selector: 'app-endereco-entrega',
  templateUrl: './endereco-entrega.component.html',
  styleUrls: ['./endereco-entrega.component.css']
})

export class EnderecoEntregaComponent {
  
  carrinho: any;
  cliente: Cliente = new Cliente();
  clienteSessao:Cliente;

  transportadoras: Transportadora[] = [];

  frete: number = 0;
  erro: string | null = null;
  transportadoraSelecionada: Transportadora | null = null;
  freteCalculado: boolean = false; // Propriedade para controlar a exibição do botão


  constructor(
    private clienteService: ClienteService,
    private carrinhoService : CarrinhoService,
    private transportadoraService: TransportadoraService,
    private pedidoService: PedidoService,
    private router: Router
  ) {
     this.clienteSessao =  this.clienteService.recuperarClienteSessao();
     this.carrinho = this.carrinhoService.recuperarCarrinhoSessao();
     this.carregarTransportadoras();
  }

  carregarTransportadoras(){
    this.transportadoraService.obterTransportadoras().subscribe((transportadora)=>{
      this.transportadoras = transportadora;
    })

  }
  carregarEnderecoSalvo() {
    
    if (this.clienteSessao && this.clienteSessao.logradouro) {
      
      this.cliente = this.clienteSessao;

    }

  }

  usarEnderecoSalvo() {
    if (this.clienteSessao ) {
      this.cliente = this.clienteSessao; // Preenche o formulário com o endereço salvo
    } else {
      alert('Nenhum endereço salvo encontrado.'); // Mensagem se não houver endereço salvo
    }
  }

  calcularFrete() {
    // Lógica para calcular o frete
    // Aqui, vamos definir frete e freteCalculado de acordo com o cálculo

    if (this.transportadoraSelecionada) {
      // Exemplo de cálculo de frete:
      this.frete = this.transportadoraSelecionada.freteFixo; // Definindo o valor do frete

      // Se o cálculo do frete foi bem-sucedido, atualiza a propriedade freteCalculado
      this.freteCalculado = true;
      this.erro = null; // Limpa erros, se houver
    } else {
      this.erro = "Selecione uma transportadora para calcular o frete.";
      this.freteCalculado = false; // Reseta para false caso não haja transportadora selecionada
    }
  }

  irParaPagamento(pedidoId: number) {
    this.router.navigate(['/pagamento', pedidoId]);
  }

  
  navegarParaPagamento() {

    const carrinho: Carrinho = this.carrinhoService.recuperarCarrinhoSessao();
    const cliente: Cliente =  this.clienteService.recuperarClienteSessao();
    const transportadora: Transportadora = this.transportadoraSelecionada;
    const freteFixo: number = this.frete;

    const pedido: Pedido = new Pedido(cliente,carrinho,transportadora,freteFixo);

    this.pedidoService.criarPedido(pedido).subscribe((data)=>{
      if(data){
        this.irParaPagamento(data.id);
      }
    })
    
  }
}