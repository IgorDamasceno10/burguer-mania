import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

// Interface que define a estrutura de um item de categoria (produto)
interface CategoriaItem {
  title: string;
  description: string;
  description_text: string;
  imageUrl: string;
  price: string;
}

@Component({
  selector: 'app-detalhes',  // Definindo o seletor para o componente
  templateUrl: './detalhes.component.html',  // Template HTML que define a estrutura visual
  styleUrls: ['./detalhes.component.scss'],  // Estilos específicos do componente
})
export class DetalhesComponent implements OnInit {
  produto: CategoriaItem | undefined;  // Variável que armazenará os detalhes do produto selecionado

  // Lista de categorias com itens que serão usados para simular um cardápio
  categorias = [
    {
      name: 'X-Vegan',
      items: [
        {
          title: 'X-Alface-Premium',  // Nome do produto
          description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',  // Descrição curta do produto
          description_text: 'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa, temperado com especiarias defumadas, cebola caramelizada e alho, garantindo uma textura rica e saborosa. Servido em um pão macio, ele vem acompanhado de fatias frescas de tomate, alface crocante, picles, abacate cremoso e uma generosa camada de maionese de ervas vegana. Finalizado com molho barbecue agridoce e uma pitada de pimenta-do-reino moída na hora, proporcionando uma combinação deliciosa de sabores e texturas em cada mordida.',
          imageUrl: '/burgersCat.png',  // Imagem do produto
          price: '35,00 R$',  // Preço do produto
        },
        {
          title: 'X-Tomate',
          description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
          description_text: 'O sabor clássico que agrada a todos! O X-Tomate é feito com pão macio, hambúrguer suculento, queijo derretido e fatias fresquinhas de tomate, trazendo leveza e um toque especial. Perfeito para quem busca uma combinação simples e deliciosa.',
          imageUrl: '/burgersCat.png',
          price: '35,00 R$',
        },
        {
          title: 'X-Frutas',
          description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
          description_text: 'Uma explosão de sabores tropicais! O X-Frutas combina hambúrguer suculento, queijo derretido e uma seleção especial de frutas frescas, trazendo um equilíbrio perfeito entre o doce e o salgado. Uma escolha inovadora e irresistível!',
          imageUrl: '/burgersCat.png',
          price: '35,00 R$',
        },
      ],
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  // Método que é executado quando o componente é inicializado
  ngOnInit(): void {
    // Recupera o título do produto da URL usando o ActivatedRoute
    this.route.paramMap.subscribe((params) => {
      const productTitle = params.get('productTitle');  // Obtém o título do produto da URL
      // Procura pelo item com o título correspondente na lista de categorias
      this.produto = this.categorias
        .flatMap((categoria) => categoria.items)  // Achata a lista de itens para procurar o produto
        .find((item) => item.title === productTitle);  // Encontra o item correspondente ao título
    });
  }

  // Método de navegação para redirecionar para outras rotas
  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);  // Navega para a rota especificada
  }
}
