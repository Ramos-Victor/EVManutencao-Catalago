let servicos = [];

async function carregarServicos() {
  servicos = await getServicos();
  renderizarServicos();
}

function renderizarServicos() {
  const servicosFiltrados = servicos.filter(s => s.ativo);

  const container = document.getElementById('lista-servicos');

  container.innerHTML = servicosFiltrados.map(servico => `
  <div class="card" id="${servico.id}">
    <div class="card-content">
      <h3>${servico.nome}</h3>
      <p class="descricao">${servico.descricao || 'Sem descrição disponível'}</p>
      <p class="valor">Valor do serviço: (à partir de <b>R$${servico.valor.toFixed(2)}</b>)</p>
    </div>
    <a href="https://wa.me/5512988576544?text=Olá, gostaria de solicitar orçamento para ${servico.nome}" 
       class="btn btn-primary" target="_blank">
       Solicitar Orçamento
    </a>
  </div>
`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  carregarServicos();
});