import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Carrinho } from 'src/app/model/carrinho.model';
import { CarrinhoRequest } from 'src/app/model/carrinhoRequest.model';
import { ItemCarrinho } from 'src/app/model/itemCarrinho.model';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private baseUrl = `${environment.HOST_API}/carrinhos`;

  constructor(private http: HttpClient) { }

  // Método para criar um carrinho
  criarCarrinho(carrinhoRequest: CarrinhoRequest): Observable<Carrinho> {
    return this.http.post<Carrinho>(this.baseUrl, carrinhoRequest);
  }

  // Método para adicionar um item ao carrinho
  adicionarItem(carrinhoId: number, produtoId: number, quantidade: number): Observable<void> {
    const url = `${this.baseUrl}/${carrinhoId}/itens/${produtoId}/${quantidade}`;
    return this.http.post<void>(url, null);
  }

  // Método para visualizar o carrinho
  obterCarrinho(carrinhoId: number): Observable<Carrinho> {
    const url = `${this.baseUrl}/${carrinhoId}`;
    return this.http.get<Carrinho>(url);
  }

  // Método para consultar carrinhos por ID de usuário
  consultarCarrinhosPorUsuario(usuarioId: number): Observable<Carrinho[]> {
    const url = `${this.baseUrl}/usuario/${usuarioId}`;
    return this.http.get<Carrinho[]>(url);
  }

  // Método para consultar carrinho por ID e ID do usuário
  consultarCarrinhoPorIdEUsuario(carrinhoId: number, usuarioId: number): Observable<Carrinho> {
    const url = `${this.baseUrl}/${carrinhoId}/usuario/${usuarioId}`;
    return this.http.get<Carrinho>(url);
  }

  // Método para remover um item do carrinho
  removerItem(carrinhoId: number, itemId: number): Observable<void> {
    const url = `${this.baseUrl}/${carrinhoId}/itens/${itemId}`;
    return this.http.delete<void>(url);
  }

  // Método para apagar o carrinho
  apagarCarrinho(carrinhoId: number): Observable<void> {
    const url = `${this.baseUrl}/${carrinhoId}`;
    return this.http.delete<void>(url);
  }

  // Método para obter produtos no carrinho
  obterProdutosNoCarrinho(carrinhoId: number): Observable<ItemCarrinho[]> {
    const url = `${this.baseUrl}/${carrinhoId}/produtos`;
    return this.http.get<ItemCarrinho[]>(url);
  }

  salvarCarrinhoSessao(carrinho: Carrinho): void {
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
  }

  recuperarCarrinhoSessao(): Carrinho | null {
      const carrinhoJson = sessionStorage.getItem('carrinho');
      return carrinhoJson ? JSON.parse(carrinhoJson) : null;
    }
  
}