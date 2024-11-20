import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Corrigido para 'styleUrls' no plural, que é a forma correta
})
export class HeaderComponent {
  
  // Variável de controle que indica se a barra lateral (sidebar) está ativa
  isSidebarActive: boolean = false; // Inicialmente, a sidebar está desativada

  // Função que alterna o estado de 'isSidebarActive' entre verdadeiro e falso
  toggleSidebar() {
    // Inverte o valor de 'isSidebarActive'. Se for 'false', vira 'true', e vice-versa
    this.isSidebarActive = !this.isSidebarActive; 
  }
}
