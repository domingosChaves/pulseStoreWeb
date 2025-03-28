import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Produto } from 'src/app/model/produto.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.HOST_API}/produtos`;
  
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }
  
}