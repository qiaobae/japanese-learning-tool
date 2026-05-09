import { useState, useContext } from 'react';
import { toJapanese, withCounter, COUNTERS } from '../utils/numbers';
import SpeakButton from './SpeakButton';
import { SpeedContext } from '../App';

const QUICK_NUMS = [1,2,3,4,5,6,7,8,9,10,11,12,20,30,50,100,200,300,500,1000,2000,3000,5000,10000,50000,100000];

export default function NumberCalc() {
  const speed = useContext(SpeedContext);
  const [input, setInput]       = useState('');
  const [counter, setCounter]   = useState('円');

  const n = parseInt(input, 10);
  const valid = !isNaN(n) && n >= 0 && n <= 999999999;
  const result = valid ? withCounter(n, counter) : null;
  const bare   = valid ? toJapanese(n) : null;

  return (
    <div className="section">
      <h1 className="section-title">🔢 Number & Price Calculator</h1>
      <p className="section-intro">
        Type any number to hear and read it in Japanese. Handles all phonological irregulars
        (三百→sanbyaku, 八千→hassen, etc.). Select a counter to get the full phrase.
      </p>

      <div className="nc-card">
        <div className="nc-input-row">
          <input
            className="nc-input"
            type="number"
            min="0"
            max="999999999"
            placeholder="Enter a number..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <select className="nc-counter-select" value={counter} onChange={e => setCounter(e.target.value)}>
            {COUNTERS.map(c => (
              <option key={c.symbol} value={c.symbol}>{c.symbol} {c.label}</option>
            ))}
          </select>
        </div>

        {result && (
          <div className="nc-result">
            <div className="nc-result-kanji">{result.kanji}</div>
            <div className="nc-result-hira">{result.hiragana}</div>
            <div className="nc-result-romaji">{result.romaji}</div>
            <SpeakButton text={result.kanji} rate={speed} className="nc-speak" />
          </div>
        )}

        {valid && bare && counter !== '' && (
          <div className="nc-bare">
            <span className="nc-bare-label">Number only:</span>
            <span className="nc-bare-k">{bare.kanji}</span>
            <span className="nc-bare-h">{bare.hiragana}</span>
          </div>
        )}

        {input && !valid && (
          <div className="callout callout-amber" style={{marginTop:'0.75rem'}}>
            Please enter a number between 0 and 999,999,999.
          </div>
        )}
      </div>

      <h2 className="group-title" style={{marginTop:'2rem'}}>Quick reference</h2>
      <div className="nc-quick-grid">
        {QUICK_NUMS.map(n => {
          const r = toJapanese(n);
          return (
            <button key={n} className="nc-quick-btn" onClick={() => setInput(String(n))}>
              <span className="nc-quick-num">{n.toLocaleString()}</span>
              <span className="nc-quick-k">{r.kanji}</span>
              <span className="nc-quick-h">{r.hiragana}</span>
            </button>
          );
        })}
      </div>

      <h2 className="group-title" style={{marginTop:'2rem'}}>Counter reference</h2>
      <div className="nc-counters-grid">
        {COUNTERS.map(c => {
          const ex1 = withCounter(1, c.symbol);
          const ex3 = withCounter(3, c.symbol);
          return (
            <div key={c.symbol} className="nc-counter-card">
              <div className="nc-counter-sym">{c.symbol}</div>
              <div className="nc-counter-label">{c.label} <span className="nc-counter-romaji">({c.romaji})</span></div>
              <div className="nc-counter-note">{c.note}</div>
              <div className="nc-counter-examples">
                <div className="nc-counter-ex">
                  <span className="nc-ex-k">{ex1.kanji}</span>
                  <span className="nc-ex-h">{ex1.hiragana}</span>
                </div>
                <div className="nc-counter-ex">
                  <span className="nc-ex-k">{ex3.kanji}</span>
                  <span className="nc-ex-h">{ex3.hiragana}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="callout callout-blue" style={{marginTop:'1.5rem'}}>
        <strong>Mandarin speaker note:</strong> Both Japanese and Chinese count large numbers in units of 万 (10,000)
        rather than 1,000. ¥50,000 = 五万円 (go-man-en). This is the same as Chinese 五万元 — same unit, same logic.
        The irregulars (三百→sanbyaku etc.) have no Chinese equivalent — you just have to memorise them.
      </div>
    </div>
  );
}
