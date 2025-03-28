import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-carrinho',
  templateUrl: './item-carrinho.component.html',
  styleUrls: ['./item-carrinho.component.css']
})
export class ItemCarrinhoComponent implements OnInit {
  @Input() carrinhoId : number;

  constructor() { }

  ngOnInit(): void {
  }

  // buscar carrinho por id
}
