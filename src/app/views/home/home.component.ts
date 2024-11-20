import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // Injeção do serviço Router para navegação
  constructor(private router: Router) {}

  // Função para navegar para a rota passada como argumento
  navigateTo(route: string) {
    this.router.navigate([`/${route}`]); // Navega para a rota dinâmica
  }
}
