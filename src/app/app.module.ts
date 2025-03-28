import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';



import { AppComponent } from './app.component';
import { ProdutoComponent } from './component/produto/produto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import {MatBadgeModule} from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { CarrinhoComponent } from './component/carrinho/carrinho.component';
import { ItemCarrinhoComponent } from './component/item-carrinho/item-carrinho.component';

import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/produto/produto.service';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { ClienteComponent } from './component/cliente/cliente.component';
import { ProdutosComponent } from './component/produtos/produtos.component';

import { MatTableModule } from '@angular/material/table';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { EnderecoEntregaComponent } from './component/endereco-entrega/endereco-entrega.component';
import { PagamentoComponent } from './component/pagamento/pagamento.component';


const routes: Routes = [
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' }, // Rota padrão redireciona para 'usuarios'
  { path: 'clientes', component: ClienteComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'endereco', component: EnderecoEntregaComponent },
  { path: 'pagamento/:pedidoId', component: PagamentoComponent },

  // outras rotas que possa pode ter
];

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    HomeComponent,
    CarrinhoComponent,
    ItemCarrinhoComponent,
    UsuarioComponent,
    ClienteComponent,
    ProdutosComponent,
    ConfirmDialogComponent,
    EnderecoEntregaComponent,
    PagamentoComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatBadgeModule,
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatDialogModule,
    MatGridListModule
    
  ],
  exports: [RouterModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
