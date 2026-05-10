import { useState, useEffect, useRef } from 'react';

// Trigger voice list load eagerly — Chrome/Android need this before first click
if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener('voiceschanged', () => {
    window.speechSynthesis.getVoices();
  });
}

function getJpVoice() {
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find(v => v.lang === 'ja-JP' && /kyoko|otoya|haruka/i.test(v.name)) ||
    voices.find(v => v.lang.startsWith('ja')) ||
    null
  );
}

export default function SpeakButton({ text, rate = 0.85, label, className = '' }) {
  const [playing, setPlaying] = useState(false);
  const keepAliveRef = useRef(null);

  function stopAll() {
    window.speechSynthesis.cancel();
    setPlaying(false);
    clearInterval(keepAliveRef.current);
  }

  function toggle(e) {
    e.stopPropagation();
    if (playing) { stopAll(); return; }

    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'ja-JP';
    utt.rate = rate;
    // Set voice if available; if not, lang alone works on iOS/Android
    const voice = getJpVoice();
    if (voice) utt.voice = voice;

    utt.onend  = () => { setPlaying(false); clearInterval(keepAliveRef.current); };
    utt.onerror = () => { setPlaying(false); clearInterval(keepAliveRef.current); };

    window.speechSynthesis.speak(utt);
    setPlaying(true);

    // iOS silently pauses synthesis on long utterances — nudge it every 10s to keep going
    keepAliveRef.current = setInterval(() => {
      if (!window.speechSynthesis.speaking) {
        setPlaying(false);
        clearInterval(keepAliveRef.current);
      } else {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 10000);
  }

  // Cancel on unmount
  useEffect(() => () => {
    window.speechSynthesis.cancel();
    clearInterval(keepAliveRef.current);
  }, []);

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
