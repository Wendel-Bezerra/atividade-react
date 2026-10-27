import { useEffect, useRef, useState } from 'react';

// Recebe as opções via props; o state isOpen controla se a lista aparece
export default function Dropdown({ label, options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(e) {
      if (!ref.current.contains(e.target)) setIsOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={ref}>
      <button aria-haspopup="listbox" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {label} ▾
      </button>
      {isOpen && (
        <ul role="listbox">
          {options.map((option) => (
            <li
              key={option}
              role="option"
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
