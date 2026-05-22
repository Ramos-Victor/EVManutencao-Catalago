import "../../styles/confirm-modal.css";

export default function ConfirmModal({
  open,
  title,
  message,
  onConfirm,
  onCancel,
  loading = false,
}) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div
        className="confirm-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <h3>{title}</h3>

        <p>{message}</p>

        <div className="confirm-modal-actions">
          <button
            className="btn btn-outline"
            onClick={onCancel}
            disabled={loading}
            style={{ textAlign: "center" }}
          >
            Cancelar
          </button>

          <button
            className="btn btn-danger"
            onClick={onConfirm}
            disabled={loading}
            style={{ textAlign: "center" }}
          >
            {loading ? "Confirmando..." : "Confirmar"}
          </button>
        </div>
      </div>
    </div>
  );
}
