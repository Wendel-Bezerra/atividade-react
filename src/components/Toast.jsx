import { useEffect } from 'react';

// Recebe tipo e mensagem via props e some sozinho depois de 3 segundos
export default function Toast({ id, type, message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), 3000);
    return () => clearTimeout(timer);
  }, [id, onClose]);

  return (
    <div className={`toast ${type}`} role="status">
      {message}
      <button aria-label="Fechar" onClick={() => onClose(id)}>×</button>
    </div>
  );
}
