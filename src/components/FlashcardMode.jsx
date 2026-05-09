import { useState, useMemo, useCallback, useContext } from 'react';
import { sections } from '../data/phrases';
import SpeakButton from './SpeakButton';
import StarButton from './StarButton';
import { SpeedContext, FavsContext } from '../App';

function buildAllCards() {
  const cards = [];
  for (const section of sections) {
    for (const group of section.groups) {
      for (const phrase of group.phrases) {
        cards.push({ ...phrase, _sectionId: section.id, _sectionLabel: section.title, _section: section.icon + ' ' + section.title, _group: group.title });
      }
    }
  }
  return cards;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const ALL_CARDS = buildAllCards();

export default function FlashcardMode() {
  const speed = useContext(SpeedContext);
  const { favs } = useContext(FavsContext);

  const [sectionFilter, setSectionFilter] = useState('all');
  const [favsOnly, setFavsOnly]           = useState(false);
  const [started, setStarted]             = useState(false);
  const [deck, setDeck]                   = useState([]);
  const [mastered, setMastered]           = useState([]);   // cards marked "got it"
  const [struggling, setStruggling]       = useState([]);   // cards marked "still learning" (cycle back)
  const [cardIdx, setCardIdx]             = useState(0);
  const [flipped, setFlipped]             = useState(false);
  const [done, setDone]                   = useState(false);
  const [showBack, setShowBack]           = useState(false); // CSS trigger

  const sectionOptions = useMemo(() => [
    { id:'all', label:'All sections' },
    ...sections.map(s => ({ id: s.id, label: s.icon + ' ' + s.title }))
  ], []);

  function buildDeck() {
    let cards = ALL_CARDS;
    if (favsOnly) cards = cards.filter(c => favs.has(c.jp));
    if (sectionFilter !== 'all') cards = cards.filter(c => c._sectionId === sectionFilter);
    return shuffle(cards);
  }

  function start() {
    const d = buildDeck();
    if (!d.length) return;
    setDeck(d);
    setMastered([]);
    setStruggling([]);
    setCardIdx(0);
    setFlipped(false);
    setShowBack(false);
    setDone(false);
    setStarted(true);
  }

  function flip() {
    setFlipped(true);
    setShowBack(true);
  }

  function advance(result) {
    const card = deck[cardIdx];
    if (result === 'got') {
      setMastered(m => [...m, card]);
    } else {
      setStruggling(s => [...s, card]);
    }
    const nextIdx = cardIdx + 1;
    if (nextIdx >= deck.length) {
      setDone(true);
    } else {
      setCardIdx(nextIdx);
      setFlipped(false);
      setShowBack(false);
    }
  }

  function retryStruggling() {
    const d = shuffle(struggling);
    setDeck(d);
    setMastered([]);
    setStruggling([]);
    setCardIdx(0);
    setFlipped(false);
    setShowBack(false);
    setDone(false);
  }

  if (!started) {
    const previewCount = (() => {
      let cards = ALL_CARDS;
      if (favsOnly) cards = cards.filter(c => favs.has(c.jp));
      if (sectionFilter !== 'all') cards = cards.filter(c => c._sectionId === sectionFilter);
      return cards.length;
    })();

    return (
      <div className="section">
        <h1 className="section-title">🃏 Flashcards</h1>
        <p className="section-intro">Active recall practice — see the Japanese, recall the meaning, then flip.</p>

        <div className="fc-setup">
          <div className="fc-setup-row">
            <label className="fc-label">Section</label>
            <select className="fc-select" value={sectionFilter} onChange={e => setSectionFilter(e.target.value)}>
              {sectionOptions.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
            </select>
          </div>
          <div className="fc-setup-row">
            <label className="fc-label">
              <input
                type="checkbox"
                checked={favsOnly}
                onChange={e => setFavsOnly(e.target.checked)}
                style={{marginRight:'0.5rem'}}
              />
              Favourites only {favs.size > 0 ? `(${favs.size} starred)` : '(none starred yet)'}
            </label>
          </div>

          <div className="fc-preview">
            {previewCount} cards in this deck
          </div>

          <button className="fc-start-btn" onClick={start} disabled={previewCount === 0}>
            {previewCount === 0 ? 'No cards match — adjust filters' : `Start ${previewCount} cards →`}
          </button>
        </div>

        <div className="callout callout-blue" style={{marginTop:'1.5rem'}}>
          <strong>How it works:</strong> See the Japanese phrase → try to recall the meaning → flip to reveal →
          mark "Got it ✓" or "Still learning ✗". Cards you mark "still learning" cycle back at the end.
          Your starred favourites can be drilled separately.
        </div>
      </div>
    );
  }

  if (done) {
    const total = mastered.length + struggling.length;
    const pct = Math.round((mastered.length / total) * 100);
    return (
      <div className="section">
        <h1 className="section-title">🃏 Round Complete!</h1>
        <div className="fc-results">
          <div className="fc-results-stat">
            <span className="fc-results-num fc-green">{mastered.length}</span>
            <span className="fc-results-label">Got it ✓</span>
          </div>
          <div className="fc-results-stat">
            <span className="fc-results-num fc-red">{struggling.length}</span>
            <span className="fc-results-label">Still learning ✗</span>
          </div>
          <div className="fc-results-stat">
            <span className="fc-results-num">{pct}%</span>
            <span className="fc-results-label">Score</span>
          </div>
        </div>

        {struggling.length > 0 && (
          <div style={{marginBottom:'1rem'}}>
            <div className="callout callout-amber" style={{marginBottom:'0.75rem'}}>
              {struggling.length} card{struggling.length > 1 ? 's' : ''} to review:
              {struggling.slice(0,5).map((c,i) => (
                <span key={i} style={{marginLeft:'0.5rem', fontFamily:'var(--jp-font)', fontWeight:600}}>{c.jp}</span>
              ))}
              {struggling.length > 5 && ` +${struggling.length - 5} more`}
            </div>
            <button className="fc-start-btn" onClick={retryStruggling}>
              Retry {struggling.length} struggling cards →
            </button>
          </div>
        )}

        <div style={{display:'flex', gap:'0.75rem', flexWrap:'wrap'}}>
          <button className="fc-action-btn" onClick={start}>New deck (same filters)</button>
          <button className="fc-action-btn" onClick={() => setStarted(false)}>Change filters</button>
        </div>
      </div>
    );
  }

  const card = deck[cardIdx];
  const progress = Math.round((cardIdx / deck.length) * 100);

  return (
    <div className="section">
      <div className="fc-topbar">
        <button className="fc-action-btn" onClick={() => setStarted(false)}>← Back</button>
        <div className="fc-progress-text">
          {cardIdx + 1} / {deck.length} &nbsp;·&nbsp;
          <span className="fc-green">{mastered.length} ✓</span>&nbsp;
          <span className="fc-red">{struggling.length} ✗</span>
        </div>
      </div>

      <div className="fc-progress-bar">
        <div className="fc-progress-fill" style={{width:`${progress}%`}} />
      </div>

      <div className="fc-card-area">
        <div className={`fc-card ${showBack ? 'fc-card--flipped' : ''}`} onClick={!flipped ? flip : undefined}>
          <div className="fc-card-inner">
            {/* FRONT */}
            <div className="fc-face fc-front">
              <div className="fc-section-tag">{card._section}</div>
              <div className="fc-main-jp">{card.jp}</div>
              <div className="fc-hint">click to reveal →</div>
              <div className="fc-front-actions">
                <SpeakButton text={card.jp} rate={speed} />
                <StarButton id={card.jp} />
              </div>
            </div>
            {/* BACK */}
            <div className="fc-face fc-back">
              <div className="fc-section-tag">{card._section} › {card._group}</div>
              <div className="fc-back-jp">{card.jp}</div>
              <div className="fc-back-romaji">{card.romaji}</div>
              <div className="fc-back-en">{card.en}</div>
              {card.zh && (
                <div className="fc-back-zh">
                  <span className="zh-chars">{card.zh}</span>
                  {card.pinyin && <span className="zh-pinyin" style={{marginLeft:'0.5rem'}}>{card.pinyin}</span>}
                </div>
              )}
              {card.zhNote && <div className="fc-back-zh-note">{card.zhNote}</div>}
              {card.tip && <div className="fc-back-tip">💡 {card.tip}</div>}
              <SpeakButton text={card.jp} rate={speed} className="fc-speak" />
            </div>
          </div>
        </div>
      </div>

      {flipped ? (
        <div className="fc-verdict">
          <button className="fc-btn-struggle" onClick={() => advance('struggle')}>
            ✗ Still learning
          </button>
          <button className="fc-btn-got" onClick={() => advance('got')}>
            ✓ Got it!
          </button>
        </div>
      ) : (
        <div className="fc-verdict">
          <button className="fc-flip-hint" onClick={flip}>Tap card or click here to flip</button>
        </div>
      )}
    </div>
  );
}
