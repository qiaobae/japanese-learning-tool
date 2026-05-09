import { useState, useContext } from 'react';
import { dialogues } from '../data/dialogues';
import SpeakButton from './SpeakButton';
import StarButton from './StarButton';
import { SpeedContext } from '../App';

function TurnRow({ turn, speed }) {
  const isYou = turn.speaker === 'you';
  return (
    <div className={`dlg-turn dlg-${isYou ? 'you' : 'other'}`}>
      <div className="dlg-speaker">{isYou ? '🧑 You' : '👩‍💼 ' + (turn.speaker === 'other' ? 'Passerby' : turn.speaker === 'friend' ? 'Friend' : 'Staff')}</div>
      <div className="dlg-bubble">
        <div className="dlg-jp-row">
          <span className="dlg-jp">{turn.jp}</span>
          <SpeakButton text={turn.jp} rate={speed} className="speak-btn--small" />
          {isYou && <StarButton id={turn.jp} className="star-btn--small" />}
        </div>
        <div className="dlg-romaji">{turn.romaji}</div>
        <div className="dlg-en">{turn.en}</div>
        {turn.note && <div className="dlg-note">💡 {turn.note}</div>}
      </div>
    </div>
  );
}

function DialogueView({ dlg, onBack }) {
  const speed = useContext(SpeedContext);
  const [autoPlay, setAutoPlay] = useState(false);

  return (
    <div>
      <div className="dlg-header">
        <button className="fc-action-btn" onClick={onBack}>← All dialogues</button>
        <h2 className="dlg-title">{dlg.icon} {dlg.title}</h2>
      </div>
      <div className="callout callout-blue" style={{marginBottom:'0.75rem'}}>
        <strong>Setting:</strong> {dlg.setting}
      </div>
      <div className="callout callout-amber" style={{marginBottom:'1.5rem'}}>
        <strong>Tip:</strong> {dlg.tip}
      </div>
      <div className="dlg-thread">
        {dlg.turns.map((turn, i) => (
          <TurnRow key={i} turn={turn} speed={speed} />
        ))}
      </div>
    </div>
  );
}

export default function DialoguesSection() {
  const [active, setActive] = useState(null);
  const dlg = dialogues.find(d => d.id === active);

  if (dlg) return (
    <div className="section">
      <DialogueView dlg={dlg} onBack={() => setActive(null)} />
    </div>
  );

  return (
    <div className="section">
      <h1 className="section-title">💬 Conversations</h1>
      <p className="section-intro">
        Real scripted dialogues showing phrases in context. Each line is speakable and star-able.
        Study the "You" lines especially — they're the ones you'll actually say.
      </p>
      <div className="dlg-grid">
        {dialogues.map(d => (
          <button key={d.id} className="dlg-card-btn" onClick={() => setActive(d.id)}>
            <div className="dlg-card-icon">{d.icon}</div>
            <div className="dlg-card-title">{d.title}</div>
            <div className="dlg-card-count">{d.turns.length} lines</div>
            <div className="dlg-card-arrow">→</div>
          </button>
        ))}
      </div>

      <div className="callout callout-green" style={{marginTop:'1.5rem'}}>
        <strong>Study tip:</strong> Read through once with the translations, then cover the English and test yourself.
        Star any lines you want to drill in flashcard mode. Use the 🐢 slow speed in the topbar to hear each phrase clearly.
      </div>
    </div>
  );
}
