import { useState } from 'react';

// Recebe os itens via props e guarda no state qual está aberto (só um por vez)
export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div key={i} className={`accordion-item ${openIndex === i ? 'open' : ''}`}>
          <button
            aria-expanded={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {item.title} <span aria-hidden="true">▾</span>
          </button>
          <div className="accordion-panel">
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
