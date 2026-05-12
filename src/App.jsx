import { useState, useEffect, createContext } from 'react';
import Sidebar from './components/Sidebar';
import QuickStart from './components/QuickStart';
import KanaSection from './components/KanaSection';
import KanjiSection from './components/KanjiSection';
import PhraseSection from './components/PhraseSection';
import MandarinBridgeSection from './components/MandarinBridgeSection';
import SearchResults from './components/SearchResults';
import FlashcardMode from './components/FlashcardMode';
import NumberCalc from './components/NumberCalc';
import DialoguesSection from './components/DialoguesSection';
import FavouritesView from './components/FavouritesView';
import DailyQuiz from './components/DailyQuiz';
import { sections } from './data/phrases';
import { intermediateSections } from './data/intermediate';
import { useFavourites } from './hooks/useFavourites';

export const SpeedContext = createContext(0.85);
export const FavsContext  = createContext({ favs: new Set(), toggle: () => {}, count: 0 });

const VIEWS = [
  { id:'sep-beginner', sep: true, label: 'BEGINNER', groupKey: 'beginner', collapsible: true },
  { id:'quickstart',  label:'Quick Start',         icon:'🗾',  group: 'beginner' },
  { id:'kana',        label:'Writing Systems',      icon:'✍️',  group: 'beginner' },
  { id:'kanji',       label:'Essential Kanji',      icon:'📖', group: 'beginner' },
  { id:'core',        label:'Core Phrases',         icon:'💬', group: 'beginner' },
  { id:'restaurants', label:'Restaurants & Food',   icon:'🍜', group: 'beginner' },
  { id:'transport',   label:'Transport',            icon:'🚂', group: 'beginner' },
  { id:'shopping',    label:'Shopping',             icon:'🛍️', group: 'beginner' },
  { id:'hotels',      label:'Hotels',               icon:'🏨', group: 'beginner' },
  { id:'social',      label:'Social & Izakaya',     icon:'🍻', group: 'beginner' },
  { id:'emergencies', label:'Emergencies',          icon:'🚨', group: 'beginner' },
  { id:'mandarin',    label:'Mandarin Bridge',      icon:'🇨🇳', group: 'beginner' },
  { id:'sep-intermediate', sep: true, label: 'INTERMEDIATE', groupKey: 'intermediate', collapsible: true },
  { id:'int-grammar', label:'Grammar Patterns',      icon:'📐', group: 'intermediate' },
  { id:'int-nuance',  label:'Expressing Yourself',   icon:'🗣️', group: 'intermediate' },
  { id:'int-keigo',   label:'Keigo (Formal)',         icon:'🏢', group: 'intermediate' },
  { id:'int-slang',   label:'Slang & Culture',       icon:'😎', group: 'intermediate' },
  { id:'int-social',  label:'Friends & Social Life',  icon:'👥', group: 'intermediate' },
  { id:'int-work',    label:'Work & Professional',   icon:'💼', group: 'intermediate' },
  { id:'int-daily',   label:'Daily Life & Errands',  icon:'🏪', group: 'intermediate' },
  { id:'int-nature',  label:'Nature & Outdoors',     icon:'🌿', group: 'intermediate' },
  { id:'int-health',  label:'Health & Body',         icon:'🏥', group: 'intermediate' },
  { id:'int-arts',    label:'Entertainment & Culture', icon:'🎭', group: 'intermediate' },
  { id:'sep-tools', sep: true, label: 'TOOLS', groupKey: 'tools' },
  { id:'dialogues',   label:'Conversations',         icon:'💭', group: 'tools' },
  { id:'numbers',     label:'Number Calculator',     icon:'🔢', group: 'tools' },
  { id:'flashcards',  label:'Flashcards',            icon:'🃏', group: 'tools' },
  { id:'quiz',        label:'Daily Quiz',            icon:'🎯', group: 'tools' },
  { id:'favourites',  label:'Favourites',            icon:'⭐', dynamic: true, group: 'tools' },
];

function VoiceNotice() {
  const [missing, setMissing] = useState(false);
  useEffect(() => {
    function check() {
      const voices = window.speechSynthesis.getVoices();
      if (!voices.length) return;
      setMissing(!voices.some(v => v.lang.startsWith('ja')));
    }
    check();
    window.speechSynthesis.addEventListener('voiceschanged', check);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', check);
  }, []);
  if (!missing) return null;
  const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
  return (
    <div className="voice-notice">
      {isMobile
        ? '⚠️ No Japanese voice detected. On iOS: Settings → Accessibility → Spoken Content → Voices → Japanese. On Android: Settings → General Management → Language → Text-to-speech.'
        : '⚠️ No Japanese voice found. Install a Japanese TTS voice in your OS settings to enable audio playback.'}
    </div>
  );
}

export default function App() {
  const [view, setView]       = useState('quickstart');
  const [search, setSearch]   = useState('');
  const [slow, setSlow]       = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const speed = slow ? 0.5 : 0.85;

  const favsCtx = useFavourites();
  const activeSection = sections.find(s => s.id === view)
    || intermediateSections.find(s => s.id === view);

  function goTo(v) { setView(v); setSearch(''); setMenuOpen(false); }

  function renderContent() {
    if (search.trim().length > 1) return <SearchResults query={search.trim()} />;
    if (view === 'quickstart')  return <QuickStart />;
    if (view === 'kana')        return <KanaSection />;
    if (view === 'kanji')       return <KanjiSection />;
    if (view === 'mandarin')    return <MandarinBridgeSection />;
    if (view === 'flashcards')  return <FlashcardMode />;
    if (view === 'numbers')     return <NumberCalc />;
    if (view === 'dialogues')   return <DialoguesSection />;
    if (view === 'favourites')  return <FavouritesView onGoFlashcards={() => goTo('flashcards')} />;
    if (view === 'quiz')        return <DailyQuiz />;
    if (activeSection)          return <PhraseSection section={activeSection} />;
    return null;
  }

  const sidebarViews = VIEWS.map(v => {
    if (v.id === 'favourites' && favsCtx.count > 0) {
      return { ...v, label: `Favourites (${favsCtx.count})` };
    }
    return v;
  });

  return (
    <SpeedContext.Provider value={speed}>
      <FavsContext.Provider value={favsCtx}>
        <div className="app-layout">
          <Sidebar views={sidebarViews} current={view} onSelect={goTo} isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
          <div className="main-area">
            <div className="topbar">
              <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
                <span /><span /><span />
              </button>
              <div className="search-wrap">
                <span className="search-icon">🔍</span>
                <input
                  className="topbar-search"
                  placeholder="Search all phrases..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                {search && <button className="search-clear" onClick={() => setSearch('')}>✕</button>}
              </div>
              <div className="topbar-right">
                <button
                  className={`speed-toggle ${slow ? 'speed-toggle--slow' : ''}`}
                  onClick={() => setSlow(s => !s)}
                  title="Toggle slow pronunciation"
                >
                  {slow ? '🐢' : '🔊'}
                  <span className="speed-label">{slow ? ' Slow' : ' Normal'}</span>
                </button>
              </div>
            </div>
            <VoiceNotice />
            <div className="content-area">{renderContent()}</div>
          </div>
        </div>
      </FavsContext.Provider>
    </SpeedContext.Provider>
  );
}
