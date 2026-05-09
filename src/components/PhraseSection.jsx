import { useState, useContext } from 'react';
import SpeakButton from './SpeakButton';
import StarButton from './StarButton';
import { SpeedContext } from '../App';

function PhraseRow({ p }) {
  const speed = useContext(SpeedContext);
  const [copied, setCopied] = useState(false);

  function copy(e) {
    e.stopPropagation();
    navigator.clipboard.writeText(p.jp);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="phrase-row">
      <div className="phrase-main">
        <div className="phrase-jp-line">
          <span className="phrase-jp">{p.jp}</span>
          <SpeakButton text={p.jp} rate={speed} />
          <StarButton id={p.jp} />
          <button className="copy-btn" onClick={copy} title="Copy Japanese">
            {copied ? '✓' : '⎘'}
          </button>
        </div>
        <div className="phrase-romaji">{p.romaji}</div>
        <div className="phrase-en">{p.en}</div>
        {p.tip && (
          <div className="phrase-tip">
            <span className="tip-icon">💡</span> {p.tip}
          </div>
        )}
        {p.examples && p.examples.length > 0 && (
          <div className="phrase-examples">
            {p.examples.map((ex, i) => (
              <div key={i} className="phrase-example">
                <div className="ex-jp-line">
                  <span className="ex-jp">{ex.jp}</span>
                  <SpeakButton text={ex.jp} rate={speed} className="speak-btn--small" />
                </div>
                <div className="ex-romaji">{ex.romaji}</div>
                <div className="ex-en">{ex.en}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      {(p.zh || p.zhNote) && (
        <div className="phrase-zh-block">
          {p.zh && (
            <div className="zh-chars-row">
              <span className="zh-chars">{p.zh}</span>
              {p.pinyin && <span className="zh-pinyin">{p.pinyin}</span>}
            </div>
          )}
          {p.zhNote && <div className="zh-note">{p.zhNote}</div>}
        </div>
      )}
    </div>
  );
}

export default function PhraseSection({ section }) {
  const [openGroups, setOpenGroups] = useState(() => new Set(section.groups.map((_, i) => i)));

  function toggle(gi) {
    setOpenGroups(prev => {
      const next = new Set(prev);
      next.has(gi) ? next.delete(gi) : next.add(gi);
      return next;
    });
  }

  return (
    <div className="section">
      <h1 className="section-title">{section.icon} {section.title}</h1>

      {section.groups.map((group, gi) => {
        const isOpen = openGroups.has(gi);
        return (
          <div key={gi} className="phrase-group">
            <button
              className="group-header"
              onClick={() => toggle(gi)}
            >
              <span className="group-title-text">{group.title}</span>
              <span className="group-count">{group.phrases.length} phrases</span>
              <span className="group-arrow">{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
              <div className="phrase-list">
                {group.note && <div className="group-note">{group.note}</div>}
                {group.phrases.map((p, pi) => (
                  <PhraseRow key={pi} p={p} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
