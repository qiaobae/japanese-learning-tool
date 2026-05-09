import { useState } from 'react';

function getJpVoice() {
  const voices = window.speechSynthesis.getVoices();
  // prefer named Japanese voices, fallback to any ja-JP
  return (
    voices.find(v => v.lang === 'ja-JP' && /kyoko|otoya|haruka/i.test(v.name)) ||
    voices.find(v => v.lang.startsWith('ja')) ||
    null
  );
}

export default function SpeakButton({ text, rate = 0.85, label, className = '' }) {
  const [playing, setPlaying] = useState(false);

  function toggle(e) {
    e.stopPropagation();
    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      return;
    }
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'ja-JP';
    utt.rate = rate;
    const voice = getJpVoice();
    if (voice) utt.voice = voice;
    utt.onend  = () => setPlaying(false);
    utt.onerror = () => setPlaying(false);
    window.speechSynthesis.speak(utt);
    setPlaying(true);
  }

  return (
    <button
      className={`speak-btn ${playing ? 'speak-btn--active' : ''} ${className}`}
      onClick={toggle}
      title={playing ? 'Stop' : `Listen${rate < 0.7 ? ' (slow)' : ''}`}
    >
      {playing ? '⏹' : (label ?? '🔊')}
    </button>
  );
}
