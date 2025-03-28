import { newArray } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto.model';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { ProductService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  
  carrinho: any;

  @Input() produto: any;

    constructor(
    private carrinhoService: CarrinhoService
  ){}

  ngOnInit(): void {
    this.carrinho = this.carrinhoService.recuperarCarrinhoSessao();
  }




  quantity = 1; // Valor padrão para a quantidade
  inCart = false; // Estado do produto no carrinho

  product = {
    name: 'Kit 3 Cooler Fan Led 120mm Ventoinha Gabinete Cpu...',
    originalPrice: 54.99,
    currentPrice: 38.49,
    discount: '30% OFF',
    installment: 'em 12x R$ 3,77',
    maxQuantity: 10, // Quantidade máxima disponível
    imageUrl: 'https://www.produtosanchieta.com.br/wp-content/uploads/2022/05/Achocolatado-em-po-700grs.png'
  };

  increaseQuantity() {
    if (this.quantity < this.produto.estoque) {
      this.quantity++;
    }
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  

  addToCart() {
    const carrinho = this.carrinhoService.recuperarCarrinhoSessao(); 
    console.log(carrinho); // Verifique se o carrinho foi recuperado corretamente
    if (!carrinho) {
      console.error('Carrinho não encontrado na sessão.');
      return; // Sai da função se o carrinho não estiver disponível
    }

    const produtoId = this.produto.id;
    const quantidade = this.quantity; // Certifique-se de que a quantidade é um número válido

    if (this.inCart) {
        // Lógica para remover o produto do carrinho
        this.carrinhoService.removerItem(carrinho.id, produtoId).subscribe({
            next: () => {
                console.log(`Produto ${produtoId} removido do carrinho.`);
            },
            error: (err) => {
                console.error('Erro ao remover produto do carrinho:', err);
            }
        });
    } else {
        // Lógica para adicionar o produto ao carrinho
        this.carrinhoService.adicionarItem(carrinho.id, produtoId, quantidade).subscribe({
            next: () => {
                console.log(`Produto ${produtoId} adicionado ao carrinho.`);
            },
            error: (err) => {
                console.error('Erro ao adicionar produto ao carrinho:', err);
            }
        });
    }
    this.inCart = !this.inCart; // Alterna o estado
}



}
