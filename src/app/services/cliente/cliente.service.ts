// cliente.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/cliente.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = `${environment.HOST_API}/cliente`;
  constructor(private http: HttpClient) { }

  // Método para cadastrar um cliente
  criarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente);
  }

  // Método para obter um cliente por ID
  obterCliente(clienteId: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/${clienteId}`);
  }

  // Método para listar todos os clientes
  obterListaClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl); // O endpoint deve retornar todos os clientes
  }

  // Método para deletar um cliente
  deletarCliente(clienteId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${clienteId}`);
  }

  // Armazenar dados do usuário no SessionStorage
  salvarClienteSessao(cliente: Cliente): void {
    sessionStorage.setItem('cliente', JSON.stringify(cliente));
  }

  // Recuperar dados do usuário do SessionStorage
  recuperarClienteSessao(): Cliente | null {
    const clienteJson = sessionStorage.getItem('cliente');
    return clienteJson ? JSON.parse(clienteJson) : null;
  }

  // Remover dados do usuário do SessionStorage
  removerUsuarioSessao(): void {
    sessionStorage.removeItem('cliente');
  }

}