// Componente Snackbar para feedback temporário
import React, { useEffect } from "react";

export default function Snackbar({
  open,
  message,
  duration = 3000,
  onClose,
  type = "success",
}) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => onClose && onClose(), duration);
      return () => clearTimeout(timer);
    }
  }, [open, duration, onClose]);

  if (!open) return null;
  return (
    <div
      className={`snackbar snackbar-${type}`}
      role="status"
      aria-live="polite"
    >
      {message}
      {onClose && (
        <button
          className="snackbar-close"
          onClick={onClose}
          aria-label="Fechar"
        >
          ×
        </button>
      )}
    </div>
  );
}
