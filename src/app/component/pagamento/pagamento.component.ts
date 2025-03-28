import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';
import { Transportadora } from 'src/app/model/transportadora.model';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { PedidoService } from 'src/app/services/pedido/pedido.service';


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  produtos: any [] = [];
  cliente: Cliente;
  transportadora: Transportadora

  pedidoId: number;
  carrinho: any;



  ngOnInit(): void {
    this.route.params.subscribe(params => { this.pedidoId = +params['pedidoId']; });
    this.obterPedido();
  }

  constructor(
    private pedidoService: PedidoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  obterPedido() {
    this.pedidoService.obterPedido(this.pedidoId).subscribe((data) => {
      this.cliente = data.cliente;
      this.transportadora = data.transportadora;
      this.produtos = data.carrinho.itens;
      this.frete = data.totalFrete;
    })
  }


  frete: number; // Valor do frete
  metodoPagamento: string | null = null;

  calcularTotal(): number {
    const totalProdutos = this.produtos.reduce((acc, produto) => {
      const totalItem = this.calcularTotalItem(produto.produto.preco, produto.quantidade); // Calcula o total de cada item
      return acc + totalItem; // Soma o total de cada item ao acumulador
    }, 0);

    return totalProdutos + this.frete; // Adiciona o frete ao total
  }
  calcularTotalItens(): number {
    return this.produtos.reduce((acc, produto) => {
      const totalItem = this.calcularTotalItem(produto.produto.preco, produto.quantidade);
      return acc + totalItem;  // Soma o total de cada item ao acumulador
    }, 0);
  }

  calcularTotalItem(valor: number, quantidade: number): number {
    return valor * quantidade;
  }

  selecionarPagamento(metodo: string): void {
    this.metodoPagamento = metodo;
  }

  finalizarCompra(){
    this.pedidoService.downloadPdf(this.pedidoId).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'nfe.pdf'; // Nome do arquivo que será baixado
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url); // Libera a URL após o download
    }, (error) => {
      console.error('Error downloading PDF', error);
    });
  }
}