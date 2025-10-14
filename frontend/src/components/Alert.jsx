// Componente de alerta simples
import React from "react";

export default function Alert({ type = "info", children, onClose }) {
  return (
    <div className={`alert alert-${type}`} role="alert">
      <span>{children}</span>
      {onClose && (
        <button
          className="alert-close"
          onClick={onClose}
          aria-label="Fechar alerta"
        >
          ×
        </button>
      )}
    </div>
  );
}
