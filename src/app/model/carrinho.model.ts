import { ItemCarrinho } from "./itemCarrinho.model";

export interface Carrinho {
  id: number;               // ID único do carrinho
  usuarioId?: number;      // ID do usuário associado (opcional, pois pode ser null)
  itens: ItemCarrinho[];    // Lista de itens no carrinho
}