const produtos = [
  {
    nome: "Ar Condicionado Split 9000 BTUs",
    preco: 2500,
    imagem: "https://via.placeholder.com/300x200/03305c/ffffff?text=Split+9000+BTUs"
  },
  {
    nome: "Ar Condicionado Split 12000 BTUs",
    preco: 3200,
    imagem: "https://via.placeholder.com/300x200/03305c/ffffff?text=Split+12000+BTUs"
  },
  {
    nome: "Ar Condicionado Inverter 18000 BTUs",
    preco: 4500,
    imagem: "https://via.placeholder.com/300x200/03305c/ffffff?text=Inverter+18000+BTUs"
  }
];

function renderizarProdutos() {
  const container = document.getElementById('lista-produtos');

  container.innerHTML = produtos.map(produto => `
    <div class="produto-card">
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p class="preco">R$ ${produto.preco.toLocaleString('pt-BR')}</p>
      <a href="https://wa.me/5511999999999?text=Olá, gostaria de solicitar orçamento para ${produto.nome}" class="btn btn-primary" target="_blank">Solicitar Orçamento</a>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderizarProdutos);