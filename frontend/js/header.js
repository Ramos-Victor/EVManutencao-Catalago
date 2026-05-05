const headerTemplate = `
  <div class="container">
    <img class="logo" src="./imagens/WhatsApp Image 2026-05-04 at 23.22.14.jpeg"></img>
    <nav>
      <a href="index.html">Home</a>
      <a href="servicos.html">Serviços</a>
      <a href="produtos.html">Produtos</a>
    </nav>
  </div>
`;

document.addEventListener('DOMContentLoaded', () =>{
    const headerRoot = document.getElementById('header-foot');
    if (headerRoot){
        headerRoot.innerHTML = headerTemplate;
    }
});