import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto.model';
import { ProductService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
  
}
