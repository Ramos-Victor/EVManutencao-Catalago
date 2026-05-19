import { X } from "lucide-react";

function ServiceModal({ servico, onClose }) {
  if (!servico) return null;

  const title = servico.titulo || servico.nome || servico.servico || "Serviço";

  const description = servico.descricao || "Descrição não disponível.";

  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no serviço: ${title}`,
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="service-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={22} />
        </button>

        <div className="modal-header">
          <div className="modal-icon">
            <i className="fas fa-tools" />
          </div>

          <h2>{title}</h2>
        </div>

        <div className="modal-content">
          <p>{description}</p>
        </div>

        <div className="modal-actions">
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

export default ServiceModal;
