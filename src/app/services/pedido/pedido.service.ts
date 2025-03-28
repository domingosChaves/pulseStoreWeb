import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/model/pedido.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
    private apiUrl = `${environment.HOST_API}/pedido`;
  
  constructor(private http: HttpClient) { }

  criarPedido(pedido: Pedido): Observable<Pedido> {
      return this.http.post<Pedido>(this.apiUrl, pedido, {
          headers: new HttpHeaders({
              'Content-Type': 'application/json'
          })
      });
  }

  obterPedido(pedidoId: number): Observable<Pedido> {
      return this.http.get<Pedido>(`${this.apiUrl}/${pedidoId}`);
  }
}