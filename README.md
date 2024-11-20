# Projeto Burguer Mania

O **Burguer Mania** é um projeto de aplicativo web para a venda de hambúrgueres online, com funcionalidades de navegação pelo cardápio, detalhes dos produtos, e a possibilidade de realizar pedidos. 

Este projeto foi desenvolvido como parte da **Residência TIC36**, na área de **Fullstack**, e foi desenvolvido por **Igor Damasceno**.

## Tecnologias Usadas

- **Angular**: Framework para a construção da interface do usuário.
- **TypeScript**: Linguagem para o desenvolvimento da lógica de negócios e interação com os componentes.
- **HTML/CSS**: Para estruturação e estilização das páginas.
- **Angular Router**: Para navegação entre páginas do aplicativo.
- **ngModel**: Para fazer o binding de dados nos formulários.

## Funcionalidades

- **Página Inicial**: Exibe imagens dos hambúrgueres e oferece botões para fazer o pedido ou acessar o cardápio.
- **Cardápio**: Exibe as categorias de hambúrgueres e permite visualizar detalhes de cada produto.
- **Detalhes do Produto**: Cada hambúrguer tem uma página com informações detalhadas, como descrição, preço e opções de compra.
- **Pedido**: Permite ao usuário selecionar os produtos e quantidades, adicionar observações e finalizar o pedido.
- **Roteamento**: O aplicativo utiliza o Angular Router para navegação entre as páginas, como o cardápio, detalhes dos produtos e o formulário de pedido.

## Estrutura do Projeto

O projeto é composto por diversos componentes que são responsáveis por diferentes partes da interface e da lógica do aplicativo.

### Componentes Principais

- **app-header**: Cabeçalho com o menu de navegação.
- **app-button**: Botões reutilizáveis com diferentes estilos.
- **app-input**: Campos de entrada de dados, como para os produtos e quantidades no pedido.
- **app-card**: Cartões para exibir os itens do cardápio.
- **app-description**: Exibe descrições detalhadas dos produtos.
- **home**: Página inicial com botões para navegar para o cardápio ou fazer o pedido.
- **cardapio**: Exibe o cardápio de hambúrgueres e categorias.
- **categoria**: Exibe uma categoria de hambúrgueres e seus produtos.
- **detalhes**: Exibe os detalhes de um hambúrguer específico.
- **pedido**: Formulário onde o usuário preenche seu pedido com produtos, quantidades e observações.

### Funcionalidades de Navegação

- **Home Page**: A página inicial oferece a possibilidade de navegar para o cardápio ou começar um pedido.
- **Cardápio**: Ao clicar no cardápio, o usuário pode explorar categorias de produtos e ver os itens em cada categoria.
- **Detalhes do Produto**: Ao clicar em um item do cardápio, o usuário pode ver os detalhes do produto e adicionar ao pedido.
- **Pedido**: O usuário pode adicionar produtos e quantidades, e enviar o pedido finalizado.

## Como Rodar o Projeto

### Pré-requisitos

1. **Node.js** e **npm** devem estar instalados no seu computador. Para verificar se estão instalados, execute os seguintes comandos no terminal:

```bash
node -v
npm -v
