const headerTemplate = `
  <div class="container">
   <a href="index.html"> <img class="logo" src="./imagens/logoEV.jpeg"></img></a>
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