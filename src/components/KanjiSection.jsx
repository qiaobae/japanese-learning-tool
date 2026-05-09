import { useState, useContext } from 'react';
import { essentialKanji } from '../data/kanji';
import SpeakButton from './SpeakButton';
import { SpeedContext } from '../App';

const CONN_LABELS = {
  same:        { label:'Same', color:'var(--green)' },
  similar:     { label:'Similar', color:'var(--blue)' },
  false_friend:{ label:'False Friend!', color:'var(--red)' },
  jp_only:     { label:'JP unique', color:'var(--amber)' },
};

const CATEGORIES = [
  { id:'all',       label:'All' },
  { id:'numbers',   label:'Numbers' },
  { id:'time',      label:'Time & Days' },
  { id:'places',    label:'Places & Directions' },
  { id:'transport', label:'Transport' },
  { id:'food',      label:'Food & Drink' },
  { id:'signs',     label:'Signs & Useful' },
];

const KANJI_CATS = {
  '一二三四五六七八九十百千万': 'numbers',
  '日月年時分今前後明昨': 'time',
  '東西南北右左上下中外出入口': 'places',
  '駅電車道地鉄空港': 'transport',
  '食飲肉魚米水茶酒牛豚野菜': 'food',
  '店館院銀行大小高安新禁止病薬警察人子語国山川先生': 'signs',
};

function getCat(kanji) {
  for (const [chars, cat] of Object.entries(KANJI_CATS)) {
    if (chars.includes(kanji)) return cat;
  }
  return 'signs';
}

export default function KanjiSection() {
  const [filter, setFilter] = useState('all');
  const [connFilter, setConnFilter] = useState('all');
  const [search, setSearch] = useState('');
  const speed = useContext(SpeedContext);

  const filtered = essentialKanji.filter(k => {
    if (filter !== 'all' && getCat(k.kanji) !== filter) return false;
    if (connFilter !== 'all' && k.conn !== connFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      return k.kanji.includes(q) || k.meaning.toLowerCase().includes(q) ||
        k.zh.includes(q) || k.pinyin.toLowerCase().includes(q) ||
        k.on.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="section">
      <h1 className="section-title">📖 Essential Kanji</h1>
      <p className="section-intro">
        {essentialKanji.length} essential kanji for travelers — with full Mandarin connections.
        For each kanji: Japanese on\'yomi reading (Chinese-derived), meaning in English, and the Chinese character with pinyin.
      </p>

      <div className="callout callout-blue" style={{marginBottom:'1.5rem'}}>
        <strong>Reading guide:</strong> On\'yomi (音読み) = Chinese-derived reading, used in compound words.
        Kun\'yomi (訓読み) = native Japanese reading, used for standalone words.
        For recognizing signs, on\'yomi is most useful.
      </div>

      <div className="filter-row">
        <input
          className="search-input"
          placeholder="Search kanji or meaning..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="filter-row" style={{marginTop:'0.5rem'}}>
        {CATEGORIES.map(c => (
          <button
            key={c.id}
            className={`filter-btn ${filter===c.id?'active':''}`}
            onClick={() => setFilter(c.id)}
          >{c.label}</button>
        ))}
      </div>

      <div className="filter-row" style={{marginTop:'0.5rem'}}>
        <span style={{fontSize:'0.8rem',opacity:0.7,marginRight:'0.5rem'}}>Mandarin connection:</span>
        {['all','same','similar','false_friend'].map(c => (
          <button
            key={c}
            className={`filter-btn ${connFilter===c?'active':''}`}
            onClick={() => setConnFilter(c)}
            style={c!=='all'?{borderColor: CONN_LABELS[c]?.color}:{}}
          >
            {c === 'all' ? 'All' : CONN_LABELS[c].label}
          </button>
        ))}
      </div>

      <div className="kanji-count" style={{margin:'1rem 0',opacity:0.6,fontSize:'0.85rem'}}>
        Showing {filtered.length} of {essentialKanji.length} kanji
      </div>

      <div className="kanji-grid">
        {filtered.map((k, i) => {
          const conn = CONN_LABELS[k.conn];
          return (
            <div key={i} className={`kanji-card ${k.conn === 'false_friend' ? 'kanji-card--danger' : ''}`}>
              <div className="kanji-top">
                <span className="kanji-char">{k.kanji}</span>
                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:'0.3rem'}}>
                  <span className="kanji-conn-badge" style={{background: conn.color+'22', color: conn.color, border:`1px solid ${conn.color}`}}>
                    {conn.label}
                  </span>
                  <SpeakButton text={k.kanji} rate={speed} className="speak-btn--small" />
                </div>
              </div>
              <div className="kanji-reading">
                <span className="reading-label">On:</span> {k.on}
                {k.kun !== '—' && <><span className="reading-label" style={{marginLeft:'0.5rem'}}>Kun:</span> {k.kun}</>}
              </div>
              <div className="kanji-meaning">{k.meaning}</div>
              <div className="kanji-zh-row">
                <span className="kanji-zh">{k.zh}</span>
                <span className="kanji-pinyin">{k.pinyin}</span>
              </div>
              {k.note && <div className="kanji-note">{k.note}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
