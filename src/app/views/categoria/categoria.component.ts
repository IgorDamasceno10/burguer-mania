import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Interface para representar uma Categoria
interface Categoria {
  name: string; // Nome da categoria
  items: CategoriaItem[]; // Lista de itens dentro dessa categoria
}

// Interface para representar um item da categoria
interface CategoriaItem {
  title: string;          // Título do item
  description: string;    // Descrição resumida do item
  description_text: string; // Descrição detalhada do item
  imageUrl: string;       // URL da imagem do item
  price: string;          // Preço do item
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  // Definindo as categorias com seus respectivos itens
  categorias: Categoria[] = [
    {
      name: 'X-Vegan',  // Nome da categoria
      items: [          // Lista de itens dentro da categoria
        {
          title: 'X-Alface-Premium',
          description: 'Delicioso hambúrguer vegano',
          description_text: 'Delicioso hambúrguer vegano',
          imageUrl: '/burgersCat.png',
          price: '35,00 R$'
        },
        {
          title: 'X-Tomate',
          description: 'Hambúrguer com muito tomate',
          description_text: 'Delicioso hambúrguer vegano',
          imageUrl: '/burgersCat.png',
          price: '35,00 R$'
        },
        {
          title: 'X-Frutas',
          description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
          description_text: 'Delicioso hambúrguer vegano',
          imageUrl: '/burgersCat.png',
          price: '35,00 R$'
        },
      ],
    }
  ];

  // Itens filtrados que vão ser exibidos
  categoriaItems: CategoriaItem[] = [
    {
      title: 'X-Alface-Premium',
      description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
      description_text: 'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa...',
      imageUrl: '/burgersCat.png',
      price: '35,00 R$'
    },
    {
      title: 'X-Tomate',
      description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
      description_text: 'Delicioso hambúrguer vegano',
      imageUrl: '/burgersCat.png',
      price: '35,00 R$'
    }
  ];

  // Array de itens filtrados com base na categoria selecionada
  filteredItems: CategoriaItem[] = [];
  categoryTitle: string = ''; // Título da categoria selecionada
  categoriaAtual: Categoria | undefined; // Categoria atual selecionada

  // Construtor que injeta o ActivatedRoute e Router para navegação
  constructor(private route: ActivatedRoute, private router: Router) {}

  // ngOnInit é chamado quando o componente é inicializado
  ngOnInit() {
    // Assinando parâmetros da URL para capturar a categoria selecionada
    this.route.paramMap.subscribe((params) => {
      const categoriaName = params.get('title') || ''; // Obtém o nome da categoria da URL
      // Encontrando a categoria com o nome obtido da URL
      this.categoriaAtual = this.categorias.find((cat) => cat.name === categoriaName);
    });
  }

  // Função para navegar até os detalhes do item selecionado
  irParaDetalhes(item: CategoriaItem) {
    this.router.navigate(['/detalhes', item.title], {
      queryParams: { description: item.description, imageUrl: item.imageUrl }, // Passa parâmetros para a página de detalhes
    });
  }

  // Navegar para a página de produto
  navigateToProduct(productTitle: string) {
    this.router.navigate(['/produto', productTitle]);
  }

  // Variável para controlar se todos os itens devem ser exibidos ou não
  showAll: boolean = false;

  // Função para alternar entre mostrar todos os itens ou apenas os primeiros
  toggleMenu() {
    this.showAll = !this.showAll; // Inverte o valor de showAll
  }
}