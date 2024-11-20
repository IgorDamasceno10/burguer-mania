import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Definindo a interface 'MenuItem' para garantir que cada item do menu tenha um título, descrição e imagem.
interface MenuItem {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-cardapio', // Seletor do componente
  templateUrl: './cardapio.component.html', // Caminho para o template HTML do componente
  styleUrls: ['./cardapio.component.scss'] // Caminho para os estilos CSS do componente
})
export class CardapioComponent {
  // Lista de itens do menu, seguindo a interface 'MenuItem'
  menuItems: MenuItem[] = [
    {
      title: 'X-Vegan',
      description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
      imageUrl: '/burgersCat.png',
    },
    {
      title: 'X-Fitness',
      description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
      imageUrl: '/burgersCat.png',
    },
    {
      title: 'X-Infarto',
      description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
      imageUrl: '/burgersCat.png',
    },
    {
      title: 'X-Calabresa',
      description: 'Pão artesanal, hambúrguer, queijo cheese, calabresa',
      imageUrl: '/burgersCat.png',
    },
    {
      title: 'X-terremoto',
      description: 'Pão artesanal, hambúrguer gourmet, bacon, ovo, salsicha, queijo brie e rúcula',
      imageUrl: '/burgersCat.png',
    },
    {
      title: 'X-doido',
      description: 'Pão artesanal, hambúrguer gourmet, bacon, ovo, presunto, queijo brie e rúcula',
      imageUrl: '/burgersCat.png',
    },
  ];

  // Controla se todos os itens do menu devem ser exibidos ou não
  showAll: boolean = false;

  // Injeção de dependência do Router para navegação entre rotas
  constructor(private router: Router) {}

  // Alterna o estado de 'showAll', controlando a visibilidade dos itens do menu
  toggleMenu() {
    this.showAll = !this.showAll; // Se estiver visível, oculta; se estiver oculto, mostra
  }

  // Navega para a página de categoria específica ao clicar no título de um item do menu
  viewCategory(title: string) {
    // A navegação é feita para a URL '/categoria/{title}', onde {title} é o título do item
    this.router.navigate(['/categoria', title]);
  }
}
