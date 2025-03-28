import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transportadora } from 'src/app/model/transportadora.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransportadoraService {
    private apiUrl = `${environment.HOST_API}/transportadora`;
  
  constructor(private http: HttpClient) { }

  // Método para criar uma nova transportadora
  criarTransportadora(transportadora: Transportadora): Observable<Transportadora> {
    return this.http.post<Transportadora>(this.apiUrl, transportadora);
  }

  // Método para obter todas as transportadoras
  obterTransportadoras(): Observable<Transportadora[]> {
    return this.http.get<Transportadora[]>(this.apiUrl);
  }
}