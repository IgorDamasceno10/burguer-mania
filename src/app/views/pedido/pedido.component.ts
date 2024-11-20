import { Component } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',  // Caminho para o template HTML do componente
  styleUrls: ['./pedido.component.scss']  // Caminho para o arquivo de estilos (CSS/SCSS) do componente
})
export class PedidoComponent {

  // Variáveis para armazenar os produtos e suas quantidades
  produto1: string = '';  // Nome do primeiro produto
  quantidade1: number | null = null;  // Quantidade do primeiro produto

  produto2: string = '';  // Nome do segundo produto
  quantidade2: number | null = null;  // Quantidade do segundo produto

  observacao: string = '';  // Observações adicionais do pedido

}
