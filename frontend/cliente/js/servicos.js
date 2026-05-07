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
  
    <!-- Topo do Card -->
    <div class="card-header">
      <h3 class="card-title">
        ${servico.nome}
      </h3>
    </div>

    <!-- Conteúdo -->
    <div class="card-content">

      <div class="card-description">
        <p class="descricao">
          ${servico.descricao || 'Sem descrição disponível'}
        </p>
      </div>

      <!-- Rodapé de informações -->
      <div class="card-footer">

        <div class="card-price">
          <span class="price-label">
            À partir de
          </span>

          <span class="price-value">
            R$${servico.valor.toFixed(2)}
          </span>
        </div>

        <a
          href="https://wa.me/5512988576544?text=Olá, gostaria de solicitar orçamento para ${servico.nome}"
          class="btn btn-primary"
          target="_blank"
        >
          <span>Solicitar orçamento</span>
        </a>

      </div>

    </div>

  </div>
`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  carregarServicos();
});