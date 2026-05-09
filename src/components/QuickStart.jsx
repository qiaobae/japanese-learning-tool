import { useContext } from 'react';
import SpeakButton from './SpeakButton';
import StarButton from './StarButton';
import { SpeedContext } from '../App';

const SURVIVAL = [
  { jp:'すみません',            romaji:'Sumimasen',          en:'Excuse me / Sorry (universal)' },
  { jp:'ありがとうございます',  romaji:'Arigatou gozaimasu', en:'Thank you' },
  { jp:'〜をください',          romaji:'~wo kudasai',        en:'Please give me ~ / I\'ll have ~' },
  { jp:'いくらですか？',        romaji:'Ikura desu ka?',     en:'How much?' },
  { jp:'〜はどこですか？',      romaji:'~wa doko desu ka?',  en:'Where is ~?' },
  { jp:'わかりません',          romaji:'Wakarimasen',        en:'I don\'t understand' },
  { jp:'お会計をお願いします', romaji:'Okaikei wo onegaishimasu', en:'Check please' },
  { jp:'たすけて！',            romaji:'Tasukete!',           en:'HELP!' },
];

const FACTS = [
  { emoji:'✍️', title:'3 Writing Systems', body:'Hiragana (ひ) + Katakana (カ) = phonetic alphabets, ~46 chars each. Kanji (漢) = borrowed Chinese characters, 2,000+ in common use. You\'ll see all three in one sentence.' },
  { emoji:'🔢', title:'Money counts in 万 (10,000)', body:'¥10,000 = 一万円 (ichiman-en). Like Chinese: both use 万 as the main large-number unit. ¥1,000 note = 千円. Always carry some cash — many places are cash only.' },
  { emoji:'🚃', title:'Train culture', body:'Bow when on the escalator (left side for standing, right for walking in Tokyo). IC cards (Suica/Pasmo) beat buying tickets. Last train ~12:30am — miss it and taxi home is expensive.' },
  { emoji:'🙏', title:'いただきます & ごちそうさま', body:'Always say いただきます (itadakimasu) before eating and ごちそうさまでした (gochisousamadeshita) after. No exceptions. Locals will be delighted.' },
  { emoji:'🚭', title:'No tipping ever', body:'Tipping is not done in Japan. It can be considered rude or confusing. Service charge is included. Leave with just a ありがとう.' },
  { emoji:'🗑️', title:'No public bins', body:'There are almost no public rubbish bins in Japan. Carry your rubbish with you until you reach a convenience store or your hotel. Konbinis always have bins outside.' },
  { emoji:'👟', title:'Shoes off', body:'Remove shoes when entering private homes, many traditional restaurants (座敷 zashiki rooms), and some ryokans. Look for the entrance area (玄関 genkan) and follow what others do.' },
  { emoji:'📱', title:'Pocket WiFi / SIM', body:'Get a pocket WiFi rental at the airport or a data SIM. Google Maps + Google Translate camera mode (point at text) is your best friend for reading menus and signs.' },
];

export default function QuickStart() {
  const speed = useContext(SpeedContext);

  return (
    <div className="section">
      <h1 className="section-title">🗾 Quick Start — Survival Japanese</h1>
      <p className="section-intro">
        Eight phrases get you through 80% of travel situations. Learn these before you land.
      </p>

      <div className="survival-grid">
        {SURVIVAL.map((p, i) => (
          <div key={i} className="survival-card">
            <div className="survival-jp-row">
              <span className="survival-jp">{p.jp}</span>
              <SpeakButton text={p.jp} rate={speed} className="speak-btn--dark" />
              <StarButton id={p.jp} className="star-btn--dark" />
            </div>
            <div className="survival-romaji">{p.romaji}</div>
            <div className="survival-en">{p.en}</div>
          </div>
        ))}
      </div>

      <h2 className="group-title" style={{marginTop:'2rem'}}>Essential Culture Notes</h2>
      <div className="facts-grid">
        {FACTS.map((f, i) => (
          <div key={i} className="fact-card">
            <div className="fact-emoji">{f.emoji}</div>
            <div>
              <div className="fact-title">{f.title}</div>
              <div className="fact-body">{f.body}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="tip-box" style={{marginTop:'2rem'}}>
        <strong>Mandarin speaker shortcut:</strong> Any sign with kanji (漢字) — you can read the meaning even if you can\'t read the pronunciation.
        出口 = exit, 入口 = entrance, 禁止 = prohibited, 電話 = telephone. Your Chinese literacy is a superpower here.
      </div>
    </div>
  );
}
