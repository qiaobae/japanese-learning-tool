import { useState, useContext } from 'react';
import {
  hiraganaRows, hiraganaVoiced, hiraganaCombinations,
  katakanaRows, katakanaVoiced, katakanaCombinations,
  pronunciationNotes
} from '../data/kana';
import { SpeedContext } from '../App';

function speakChar(char, rate) {
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(char);
  utt.lang = 'ja-JP';
  utt.rate = rate;
  const voices = window.speechSynthesis.getVoices();
  const jp = voices.find(v => v.lang.startsWith('ja'));
  if (jp) utt.voice = jp;
  window.speechSynthesis.speak(utt);
}

function KanaTable({ rows, voiced, combinations, label }) {
  const speed = useContext(SpeedContext);
  const [active, setActive] = useState(null);

  function handleClick(char) {
    setActive(char);
    speakChar(char, speed);
    setTimeout(() => setActive(a => a === char ? null : a), 600);
  }

  return (
    <div>
      <h3 className="kana-subtitle">Basic {label} (五十音)</h3>
      <p className="kana-click-hint">Click any character to hear it</p>
      <div className="kana-table-wrap">
        <table className="kana-table">
          <thead>
            <tr>
              <th>Sound</th>
              <th>—a</th><th>—i</th><th>—u</th><th>—e</th><th>—o</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri}>
                <td className="kana-sound">{row.sound}</td>
                {row.chars.map((c, ci) => (
                  <td
                    key={ci}
                    className={`kana-cell ${!c.c ? 'kana-empty' : 'kana-speakable'} ${active === c.c ? 'kana-playing' : ''}`}
                    onClick={() => c.c && handleClick(c.c)}
                  >
                    {c.c && <span className="kana-char">{c.c}</span>}
                    {c.c && <span className="kana-romaji">{c.r}</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="kana-subtitle" style={{marginTop:'1.5rem'}}>Voiced & Semi-voiced (濁音・半濁音)</h3>
      <div className="kana-table-wrap">
        <table className="kana-table">
          <thead>
            <tr>
              <th>Sound</th>
              <th>—a</th><th>—i</th><th>—u</th><th>—e</th><th>—o</th>
            </tr>
          </thead>
          <tbody>
            {voiced.map((row, ri) => (
              <tr key={ri}>
                <td className="kana-sound">{row.sound}</td>
                {row.chars.map((c, ci) => (
                  <td
                    key={ci}
                    className={`kana-cell kana-speakable ${active === c.c ? 'kana-playing' : ''}`}
                    onClick={() => handleClick(c.c)}
                  >
                    <span className="kana-char">{c.c}</span>
                    <span className="kana-romaji">{c.r}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="kana-subtitle" style={{marginTop:'1.5rem'}}>Combination Sounds (拗音)</h3>
      <div className="kana-combo-grid">
        {combinations.map((c, i) => (
          <div
            key={i}
            className={`kana-combo-cell kana-speakable ${active === c.c ? 'kana-playing' : ''}`}
            onClick={() => handleClick(c.c)}
          >
            <span className="kana-char">{c.c}</span>
            <span className="kana-romaji">{c.r}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function KanaSection() {
  const [tab, setTab] = useState('hiragana');

  return (
    <div className="section">
      <h1 className="section-title">✍️ Writing Systems</h1>

      <div className="callout callout-blue" style={{marginBottom:'1.5rem'}}>
        <strong>For Mandarin speakers:</strong> Hiragana and katakana are phonetic — each character = one syllable sound.
        Think of them like pinyin with fixed symbols. Kanji is where your advantage is massive: most kanji are identical
        or near-identical to Chinese characters, and the meaning is almost always the same.
      </div>

      <div className="kana-tabs">
        <button className={`tab-btn ${tab==='hiragana'?'active':''}`} onClick={()=>setTab('hiragana')}>
          Hiragana (ひらがな)
        </button>
        <button className={`tab-btn ${tab==='katakana'?'active':''}`} onClick={()=>setTab('katakana')}>
          Katakana (カタカナ)
        </button>
        <button className={`tab-btn ${tab==='pronunciation'?'active':''}`} onClick={()=>setTab('pronunciation')}>
          Pronunciation Notes
        </button>
      </div>

      {tab === 'hiragana' && (
        <div>
          <div className="callout callout-green" style={{marginBottom:'1rem'}}>
            <strong>Hiragana</strong> is the primary Japanese script. Used for native Japanese words, verb endings,
            particles (は、が、を、に), and furigana (pronunciation guides over kanji). Learn this first.
            Most menus include hiragana. Children\'s books are entirely hiragana.
          </div>
          <KanaTable rows={hiraganaRows} voiced={hiraganaVoiced} combinations={hiraganaCombinations} label="Hiragana" />
        </div>
      )}

      {tab === 'katakana' && (
        <div>
          <div className="callout callout-green" style={{marginBottom:'1rem'}}>
            <strong>Katakana</strong> is used for foreign loan words, foreign names, onomatopoeia, and emphasis.
            About 80% of katakana words are English loan words — you already know many!
            ビール (bīru = beer), コーヒー (kōhī = coffee), レストラン (resutoran = restaurant), タクシー (takushī = taxi).
            The shapes are more angular than hiragana.
          </div>
          <KanaTable rows={katakanaRows} voiced={katakanaVoiced} combinations={katakanaCombinations} label="Katakana" />

          <div className="callout callout-amber" style={{marginTop:'1.5rem'}}>
            <strong>Common katakana loan words you already know:</strong>{' '}
            ホテル (hoteru=hotel), バス (basu=bus), タクシー (takushī=taxi), レストラン (resutoran=restaurant),
            メニュー (menyū=menu), アイスクリーム (aisukurīmu=ice cream), スーパー (sūpā=supermarket),
            コンビニ (konbini=convenience store), パスポート (pasupōto=passport), WiFi (waifai),
            アレルギー (arerugī=allergy), ビーガン (bīgan=vegan).
          </div>
        </div>
      )}

      {tab === 'pronunciation' && (
        <div>
          <div className="callout callout-green" style={{marginBottom:'1rem'}}>
            Japanese pronunciation is very consistent — each character always sounds the same.
            Once you learn the sounds, you can read anything. These are the tricky spots for English and Mandarin speakers.
          </div>
          <div className="pronunciation-grid">
            {pronunciationNotes.map((n, i) => (
              <div key={i} className="pronunciation-card">
                <div className="pronunciation-title">{n.title}</div>
                <div className="pronunciation-body">{n.body}</div>
              </div>
            ))}
          </div>
          <div className="callout callout-amber" style={{marginTop:'1.5rem'}}>
            <strong>Mandarin speaker advantage:</strong> The vowels in Japanese (a, i, u, e, o) sound very similar to Mandarin:
            あ ≈ 啊, い ≈ 一, う ≈ 乌 (unrounded), え ≈ 诶, お ≈ 哦. Once your ear is calibrated, reading romaji aloud becomes natural.
          </div>
        </div>
      )}
    </div>
  );
}
