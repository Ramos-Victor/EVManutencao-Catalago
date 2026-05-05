const produtos = [
  {
    nome: "Ar Condicionado Split 9000 BTUs Inverter",
    preco: 1800,
    imagem: "https://m.magazineluiza.com.br/a-static/420x420/ar-condicionado-split-hw-lg-dual-inverter-ai-voice-9-000-btus-r-32-so-frio-220v/leveros3/5000014418/0e4d625640490c7f724e38eebd0705be.jpeg"
  },
  {
    nome: "Ar Condicionado Split 12000 BTUs Inverter",
    preco: 2200,
    imagem: "https://m.magazineluiza.com.br/a-static/420x420/ar-condicionado-split-12-000-btus-lg-s3-q12ja31k-ciclo-frio-dual-inverter-wi-fi-com-voice-ia-branco/efacil/2223041/950d19bd2df701e224574385245695db.jpeg"
  },
  {
    nome: "Ar Condicionado Inverter 18000 BTUs",
    preco: 3500,
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_787335-MLA99457412316_112025-F.webp"
  }
];

function renderizarProdutos() {
  const container = document.getElementById('lista-produtos');

  container.innerHTML = produtos.map(produto => `
    <div class="produto-card">
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p class="preco">R$ ${produto.preco.toLocaleString('pt-BR')}</p>
      <a href="https://wa.me/5512988576544?text=Olá, gostaria de solicitar orçamento para ${produto.nome}" class="btn btn-primary" target="_blank">Solicitar Orçamento</a>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderizarProdutos);