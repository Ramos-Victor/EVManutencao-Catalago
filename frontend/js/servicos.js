let servicos = [];

async function carregarServicos() {
  servicos = await getServicos();
  renderizarServicos();
}

function renderizarServicos() {
  const servicosFiltrados = servicos.filter(s => s.ativo);

  const container = document.getElementById('lista-servicos');

  container.innerHTML = servicosFiltrados.map(servico => `
    <div class="card">
      <h3>${servico.nome}</h3>
      <p>${servico.descricao || 'Sem descrição disponível'}</p>
      <span class="status ${servico.ativo ? 'ativo' : 'inativo'}">
        ${servico.ativo ? 'Ativo' : 'Inativo'}
      </span>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  carregarServicos();
});