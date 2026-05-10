import { useState } from 'react';

export default function Sidebar({ views, current, onSelect, isOpen, onClose }) {
  const [collapsed, setCollapsed] = useState(new Set());

  function toggleGroup(key) {
    setCollapsed(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  return (
    <>
      {isOpen && <div className="sidebar-backdrop" onClick={onClose} />}
      <nav className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">日本語</div>
          <div className="sidebar-sub">Learn Japanese</div>
        </div>
        <ul className="nav-list">
          {views.map((v, i) => {
            if (v.sep) {
              const isCollapsed = v.collapsible && collapsed.has(v.groupKey);
              return (
                <li key={i} className="nav-group-header">
                  {v.collapsible ? (
                    <button
                      className="nav-group-toggle"
                      onClick={() => toggleGroup(v.groupKey)}
                      aria-expanded={!isCollapsed}
                    >
                      <span className="nav-group-label">{v.label}</span>
                      <span className={`nav-group-arrow ${isCollapsed ? 'nav-group-arrow--collapsed' : ''}`}>▾</span>
                    </button>
                  ) : (
                    <span className="nav-group-label">{v.label}</span>
                  )}
                </li>
              );
            }

            const groupSep = views.find(s => s.sep && s.groupKey === v.group);
            if (groupSep && groupSep.collapsible && collapsed.has(v.group)) return null;

            return (
              <li key={v.id}>
                <button
                  className={`nav-item ${current === v.id ? 'active' : ''}`}
                  onClick={() => onSelect(v.id)}
                >
                  <span className="nav-icon">{v.icon}</span>
                  <span className="nav-label">{v.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <div className="sidebar-footer">
          <div>110 = Police</div>
          <div>119 = Ambulance/Fire</div>
        </div>
      </nav>
    </>
  );
}
