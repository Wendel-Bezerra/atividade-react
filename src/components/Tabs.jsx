import { useState } from 'react';

// Recebe as abas via props e guarda no state qual está ativa
export default function Tabs({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <div className="tabs">
      <div role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={active === i}
            className={active === i ? 'active' : ''}
            onClick={() => setActive(i)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="tab-panel">
        {tabs[active].content}
      </div>
    </div>
  );
}
