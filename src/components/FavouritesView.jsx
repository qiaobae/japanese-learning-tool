import { useContext } from 'react';
import { sections } from '../data/phrases';
import SpeakButton from './SpeakButton';
import StarButton from './StarButton';
import { SpeedContext, FavsContext } from '../App';

export default function FavouritesView({ onGoFlashcards }) {
  const speed = useContext(SpeedContext);
  const { favs } = useContext(FavsContext);

  // collect all starred phrases in section order
  const starred = [];
  for (const section of sections) {
    for (const group of section.groups) {
      for (const phrase of group.phrases) {
        if (favs.has(phrase.jp)) {
          starred.push({ ...phrase, _section: section.icon + ' ' + section.title, _group: group.title });
        }
      }
    }
  }

  if (favs.size === 0) {
    return (
      <div className="section">
        <h1 className="section-title">⭐ Favourites</h1>
        <div className="callout callout-amber">
          No favourites yet. Click the <strong>☆</strong> star on any phrase to save it here for focused review.
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <h1 className="section-title">⭐ Favourites ({starred.length})</h1>
      <div style={{display:'flex', gap:'0.75rem', marginBottom:'1.5rem', flexWrap:'wrap', alignItems:'center'}}>
        <button className="fc-start-btn" style={{margin:0}} onClick={onGoFlashcards}>
          🃏 Drill these in Flashcards →
        </button>
        <span style={{fontSize:'0.82rem', color:'var(--text-dim)'}}>
          {starred.length} phrase{starred.length !== 1 ? 's' : ''} starred
        </span>
      </div>

      <div className="phrase-list" style={{borderRadius:'var(--radius)', border:'1px solid var(--border)'}}>
        {starred.map((p, i) => (
          <div key={i} className="phrase-row">
            <div className="phrase-main">
              <div style={{fontSize:'0.7rem', color:'var(--blue)', fontWeight:600, marginBottom:'0.25rem', textTransform:'uppercase', letterSpacing:'0.05em'}}>
                {p._section} › {p._group}
              </div>
              <div className="phrase-jp-line">
                <span className="phrase-jp">{p.jp}</span>
                <SpeakButton text={p.jp} rate={speed} />
                <StarButton id={p.jp} />
              </div>
              <div className="phrase-romaji">{p.romaji}</div>
              <div className="phrase-en">{p.en}</div>
              {p.tip && <div className="phrase-tip"><span className="tip-icon">💡</span> {p.tip}</div>}
            </div>
            {(p.zh || p.zhNote) && (
              <div className="phrase-zh-block">
                {p.zh && <div className="zh-chars-row"><span className="zh-chars">{p.zh}</span>{p.pinyin && <span className="zh-pinyin">{p.pinyin}</span>}</div>}
                {p.zhNote && <div className="zh-note">{p.zhNote}</div>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
