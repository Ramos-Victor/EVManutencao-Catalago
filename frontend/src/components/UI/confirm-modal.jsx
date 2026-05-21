import "../../styles/confirm-modal.css";

export default function ConfirmModal({
  open,
  title,
  message,
  onConfirm,
  onCancel,
  loading,
}) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{title}</h3>

        <p>{message}</p>

        <div className="modal-actions">
          <button className="btn btn-outline" onClick={onCancel}>
            Cancelar
          </button>

          <button className="btn btn-primary" onClick={onConfirm}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
