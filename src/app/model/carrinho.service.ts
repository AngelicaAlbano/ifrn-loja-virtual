import { Injectable } from "@angular/core";

import { ItemPedido } from "./item-pedido";

@Injectable({
  providedIn: "root",
})
export class CarrinhoService {
  itens: ItemPedido[];
  novoItem: ItemPedido;

  constructor() {
    this.itens = [];
  }

  // 2DO
  existe(it: ItemPedido): boolean {
    // // se array vazio -> existe() é false -> adiciono item
    // if (this.itens.length === 0) {
    //   this.adicionarItem(it);
    //   return false;
    // }
    // // se array nao vazio -> se ids iguais
    // else {
    //   for (let index = 0; index < this.itens.length; index++) {
    //     const item = this.itens[index];
    //     if (item.produto.id === it.produto.id) {
    //       item.quantidade++;
    //       return true;
    //       //array nao vazio e ids diferentes, tem que criar de novo um item
    //     } else {
    //       //it = new ItemPedido(it.produto, 0);

    //       this.adicionarItem(it);
    //       return false;
    //     }
    //   }
    // }
    return false;
  }

  adicionarItem(it: ItemPedido): boolean {
    this.itens.push(it);
    return true;
  }
  obterItens(): ItemPedido[] {
    return this.itens;
  }
  //2DO
  removerItem(it: ItemPedido): boolean {
    return true;
  }
  //2DO
  calcularTotal(): number {
    return 1;
  }
}
