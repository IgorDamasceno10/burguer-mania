import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  // Variáveis de entrada para o componente, com valores padrões
  @Input() title: string = ''; 
  @Input() description: string = ''; 
  @Input() descriptionText: string = ''; // Alteração no nome para seguir o padrão camelCase
  @Input() imageUrl: string = ''; 
  @Input() price: string = ''; // Removido o "?" e definido um valor padrão, simplificando

}
