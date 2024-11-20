import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'], // Corrigido para 'styleUrls' no plural
})
export class DescriptionComponent {

  @Input() title = ''; // Simplificado sem o tipo explícito, TypeScript infere como string
  @Input() text = ''; // O mesmo para 'text'

}
