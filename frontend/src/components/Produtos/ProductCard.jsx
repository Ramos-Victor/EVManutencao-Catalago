function ProductCard({ produto, onOpen }) {
  const title =
    produto.titulo ||
    produto.nome ||
    produto.produto ||
    `Produto ${produto.id || ""}`;
  const description =
    produto.descricao || produto.description || "Descrição não disponível.";
  const shortDescription =
    description.length > 120 ? description.slice(0, 120) + "..." : description;
  const status =
    produto.ativo === 0 || produto.ativo === "0"
      ? "Indisponível"
      : "Disponível";

  return (
    <article className="produtos-card">
      <div className="card-top">
        <div className="produtos-card-icon">
          <i className="fas fa-box-open" />
        </div>

        <span
          className={`status-badge ${
            status === "Disponível" ? "status-active" : "status-inactive"
          }`}
        >
          {status}
        </span>
      </div>

      <h3>{title}</h3>
      <p>{shortDescription}</p>

      <button className="btn-details" onClick={() => onOpen(produto)}>
        Ver detalhes
      </button>
    </article>
  );
}

export default ProductCard;
