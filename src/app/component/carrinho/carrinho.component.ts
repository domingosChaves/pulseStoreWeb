import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Produto } from 'src/app/model/produto.model';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produtos: any; // Array que armazena os produtos recebidos


  carrinho: any;

  constructor(
    private carrinhoService : CarrinhoService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.carrinho = this.carrinhoService.recuperarCarrinhoSessao();    
    this.obterProdutosCarrinho();
  }

  obterProdutosCarrinho(){
    this.carrinhoService.obterProdutosNoCarrinho(this.carrinho.id).subscribe((data)=>{
      this.produtos = data;
    })
  }

  get totalQuantidade(): number {
    return this.produtos.reduce((total, produto) => total + produto.quantidade, 0);
  }

  get totalValor(): number {
    return this.produtos.reduce((total, produto) => total + (produto.precoProduto * produto.quantidade), 0);
  }

  confirmarCompra() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/endereco']);
      }
    });
  }

}
