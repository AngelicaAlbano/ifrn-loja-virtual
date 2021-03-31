import { Injectable } from "@angular/core";
import { Produto } from "./produto";

@Injectable({
  providedIn: "root",
})
export class LojaService {
  produtos: Produto[];

  constructor() {
    this.produtos = [
      {
        id: 1,
        nome: "Smart Tv",
        descricao: 'Smart TV LED 50" Samsung Crystal 4K HDR UN50TU8000GXZD',
        preco: 3700,
        imagem: "https://i.zst.com.br/thumbs/12/2e/f/1115021059.jpg",
        estoque: 5.0,
        promocao: false,
        tipo: "Eletroeletrônicos",
      },
      {
        id: 2,
        nome: "Moto G9 Play - 64 GB - Azul Safira",
        descricao:
          "Smartphone Motorola Moto G9 Play 64GB Verde - Turquesa 4GB RAM 6,5” Câm. Tripla + Selfie 8MP",
        preco: 1439,
        imagem:
          "https://brmotorola.vteximg.com.br/arquivos/ids/165352-1000-1000/Moto-G9_ELECTRIC-BLUE_PDP-HERO.png?v=637353293285430000",
        estoque: 1.0,
        promocao: true,
        tipo: "Telefonia",
      },
      {
        id: 3,
        nome: "Novo Kindle Paperwhite Amazon à Prova de Água",
        descricao:
          "Novo Kindle Paperwhite Amazon à Prova de Água - Tela 6” 8GB Wi-Luz Embutida Preto",
        preco: 469.99,
        imagem:
          "https://a-static.mlcdn.com.br/618x463/novo-kindle-paperwhite-amazon-a-prova-de-agua-tela-6-8gb-wi-luz-embutida-preto/magazineluiza/222123800/cf6f1e93676415871f97926c0538023d.jpg",
        estoque: 150,
        promocao: false,
        tipo: "E-readers, Tablets e iPads",
      },
    ];
  }

  obterProdutos(): Produto[] {
    return this.produtos;
  }
}
