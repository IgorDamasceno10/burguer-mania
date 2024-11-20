import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'] // Corrigido para 'styleUrls' no plural
})
export class InputComponent {

  // Label que será exibido ao lado do campo de input
  @Input() label: string = ''; 

  // Tipo do campo de input (como 'text', 'password', etc.), com valor padrão 'text'
  @Input() type: string = 'text'; 

  // ID único para o campo de input
  @Input() id: string = ''; 

  // Determina se o campo é obrigatório ou não (valor padrão é 'false')
  @Input() required: boolean = false; 

  // Valor do campo de input, que pode ser uma string, número ou undefined
  @Input() value: string | number | undefined; 

}
