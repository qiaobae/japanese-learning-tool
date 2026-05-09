import { useContext } from 'react';
import { sections } from '../data/phrases';
import SpeakButton from './SpeakButton';
import StarButton from './StarButton';
import { SpeedContext } from '../App';

function highlight(text, query) {
  if (!query || !text) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark>{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function SearchResults({ query }) {
  const speed = useContext(SpeedContext);
  const q = query.toLowerCase();
  const results = [];

  for (const section of sections) {
    for (const group of section.groups) {
      for (const phrase of group.phrases) {
        if (
          phrase.jp.includes(q) ||
          phrase.romaji.toLowerCase().includes(q) ||
          phrase.en.toLowerCase().includes(q) ||
          (phrase.zh && phrase.zh.includes(q)) ||
          (phrase.pinyin && phrase.pinyin.toLowerCase().includes(q)) ||
          (phrase.tip && phrase.tip.toLowerCase().includes(q))
        ) {
          results.push({ ...phrase, _section: section.title, _group: group.title });
        }
      }
    }
  }

  return (
    <div className="section">
      <h1 className="section-title">🔍 Search: "{query}"</h1>
      {results.length === 0 ? (
        <div className="callout callout-amber">No phrases found for "{query}".</div>
      ) : (
        <>
          <p className="section-intro">{results.length} result{results.length !== 1 ? 's' : ''} found</p>
          <div className="search-results-list">
            {results.map((p, i) => (
              <div key={i} className="search-result-card">
                <div className="search-result-meta">{p._section} › {p._group}</div>
                <div className="phrase-jp-line">
                  <span className="phrase-jp">{highlight(p.jp, query)}</span>
                  <SpeakButton text={p.jp} rate={speed} />
                  <StarButton id={p.jp} />
                </div>
                <div className="phrase-romaji">{highlight(p.romaji, query)}</div>
                <div className="phrase-en">{highlight(p.en, query)}</div>
                {p.zh && <div className="zh-chars-row"><span className="zh-chars">{p.zh}</span><span className="zh-pinyin">{p.pinyin}</span></div>}
                {p.tip && <div className="phrase-tip"><span className="tip-icon">💡</span> {p.tip}</div>}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
