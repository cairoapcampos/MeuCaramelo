// Componente Modal reutilizável
import React from "react";

export default function Modal({ open, title, children, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          {onClose && (
            <button
              className="modal-close"
              onClick={onClose}
              aria-label="Fechar modal"
            >
              ×
            </button>
          )}
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
