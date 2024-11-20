import { Component, Input, ViewEncapsulation } from '@angular/core';

// Componente para criar um botão reutilizável
@Component({
  selector: 'app-button', // Define o nome do seletor para o componente no HTML
  templateUrl: './button.component.html', // Template HTML do botão
  styleUrls: ['./button.component.scss'], // Estilos CSS/SCSS para o botão
  encapsulation: ViewEncapsulation.None // Estilos não serão encapsulados, ou seja, podem afetar outros elementos fora do componente
})
export class ButtonComponent {

  // Entrada para o texto exibido no botão (valor padrão 'Button')
  @Input() label: string = 'Button';

  // Entrada para definir o estilo do botão ('filled' ou 'outlined', valor padrão 'filled')
  @Input() type: 'filled' | 'outlined' = 'filled';

  // Entrada para definir o tamanho do botão ('default' ou 'large', valor padrão 'default')
  @Input() size: 'default' | 'large' = 'default';
}
