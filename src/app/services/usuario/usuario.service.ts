// usuario.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario.model'; // Certifique-se de importar o modelo de usuário
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = `${environment.HOST_API}/usuarios`;

  constructor(private http: HttpClient) { }

  // Método para buscar um usuário pelo ID
  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/${id}`);
  }

  // Método para registrar o usuário
  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}/registrar`, usuario);
  }

  // Método para atualizar o usuário
  atualizarUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.baseUrl}/${id}`, usuario);
  }

  // Armazenar dados do usuário no SessionStorage
  salvarUsuarioSessao(usuario: Usuario): void {
    sessionStorage.setItem('usuario', JSON.stringify(usuario));
  }

  // Recuperar dados do usuário do SessionStorage
  recuperarUsuarioSessao(): Usuario | null {
    const usuarioJson = sessionStorage.getItem('usuario');
    return usuarioJson ? JSON.parse(usuarioJson) : null;
  }

  // Remover dados do usuário do SessionStorage
  removerUsuarioSessao(): void {
    sessionStorage.removeItem('usuario');
  }
}