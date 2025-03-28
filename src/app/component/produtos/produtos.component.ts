import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto.model';
import { ProductService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  products: Produto[];
  
    constructor(private productService: ProductService) { }
  
    ngOnInit(): void {
      this.loadProdutos();
    }
  
    loadProdutos() {
      this.productService.getProducts().subscribe(
        (data: Produto[]) => {
          this.products = data; // Atribui os dados recebidos à propriedade 'produtos'
        },
        (error) => {
          console.error('Erro ao buscar os produtos', error);
        }
      );
    }

}
