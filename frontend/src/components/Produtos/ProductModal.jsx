import { X } from "lucide-react";

function ProductModal({ produto, onClose }) {
  if (!produto) return null;

  const title = produto.titulo || produto.nome || produto.produto || "Produto";
  const description =
    produto.descricao || produto.description || "Descrição não disponível.";
  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no produto: ${title}`,
  );

  return (
    <div className="modal-overlayCliente" onClick={onClose}>
      <div
        className="product-modalCliente"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-closeCliente" onClick={onClose}>
          <X size={22} />
        </button>

        <div className="modal-headerCliente">
          <div className="modal-iconCliente">
            <i className="fas fa-box-open" />
          </div>

          <h2>{title}</h2>
        </div>

        <div className="modal-contentCliente">
          <p>{description}</p>
        </div>

        <div className="modal-actionsCliente">
          <a
            href={`https://wa.me/5512988576544?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
