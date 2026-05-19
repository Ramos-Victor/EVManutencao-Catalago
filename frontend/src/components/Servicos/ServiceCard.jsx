function ServiceCard({ servico, onOpen }) {
  const title =
    servico.titulo ||
    servico.nome ||
    servico.servico ||
    `Serviço ${servico.id || ""}`;

  const description = servico.descricao || "Descrição não disponível.";

  const shortDescription =
    description.length > 120 ? description.slice(0, 120) + "..." : description;

  const status =
    servico.ativo === 0 || servico.ativo === "0" ? "Inativo" : "Ativo";

  return (
    <article className="servicos-card">
      <div className="card-top">
        <div className="servicos-card-icon">
          <i className="fas fa-tools" />
        </div>

        <span
          className={`status-badge ${
            status === "Ativo" ? "status-active" : "status-inactive"
          }`}
        >
          {status}
        </span>
      </div>

      <h3>{title}</h3>

      <p>{shortDescription}</p>

      <button className="btn-details" onClick={() => onOpen(servico)}>
        Ver detalhes
      </button>
    </article>
  );
}

export default ServiceCard;
