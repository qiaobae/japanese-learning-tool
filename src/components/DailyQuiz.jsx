import { useState, useMemo } from 'react';
import { sections } from '../data/phrases';
import SpeakButton from './SpeakButton';
import { useContext } from 'react';
import { SpeedContext } from '../App';

function seededRand(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return function() {
    h ^= h >>> 16; h = Math.imul(h, 0x45d9f3b) >>> 0;
    h ^= h >>> 16; h = Math.imul(h, 0x45d9f3b) >>> 0;
    h ^= h >>> 16;
    return h / 4294967296;
  };
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

// Only beginner phrases — focused on conversational ability
function buildPool() {
  const pool = [];
  for (const s of sections) {
    for (const g of s.groups) {
      for (const p of (g.phrases || [])) {
        if (
          p.jp && p.en && p.romaji &&
          !p.jp.startsWith('〜') &&   // skip pure grammar-pattern stubs
          !p.en.startsWith('~') &&
          p.en.length > 3 &&
          p.en.length < 80           // skip very long explanatory entries
        ) {
          pool.push({
            jp: p.jp,
            romaji: p.romaji,
            en: p.en,
            tip: p.tip || null,
            section: s.title,
          });
        }
      }
    }
  }
  return pool;
}

// Question types:
//  'jp-to-en' — show JP, choose correct English meaning
//  'en-to-jp' — show English, choose correct JP phrase
const QUIZ_SIZE = 10;

export default function DailyQuiz() {
  const speed = useContext(SpeedContext);
  const todayKey = getTodayKey();
  const storageKey = `jp-quiz-${todayKey}`;

  const savedResult = useMemo(() => {
    try { return JSON.parse(localStorage.getItem(storageKey)); } catch { return null; }
  }, [storageKey]);

  const { deck, pool } = useMemo(() => {
    const all = buildPool();
    const rand = seededRand(todayKey);
    const shuffled = [...all].sort(() => rand() - 0.5);
    const picked = shuffled.slice(0, QUIZ_SIZE);
    // Assign question type per question, seeded
    const typeRand = seededRand(todayKey + 'type');
    const questions = picked.map(p => ({
      ...p,
      type: typeRand() > 0.5 ? 'jp-to-en' : 'en-to-jp',
    }));
    return { deck: questions, pool: all };
  }, [todayKey]);

  const [idx, setIdx]         = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [done, setDone]       = useState(!!savedResult);
  const [finalScore, setFinalScore] = useState(savedResult?.score ?? 0);
  const [practicing, setPracticing] = useState(false);

  const q = deck[idx];

  // Build 4 options seeded per question
  const options = useMemo(() => {
    if (!q) return [];
    const rand = seededRand(todayKey + String(idx));
    if (q.type === 'jp-to-en') {
      const wrongs = pool
        .filter(p => p.en !== q.en)
        .sort(() => rand() - 0.5)
        .slice(0, 3)
        .map(p => p.en);
      return [...wrongs, q.en].sort(() => rand() - 0.5);
    } else {
      const wrongs = pool
        .filter(p => p.jp !== q.jp)
        .sort(() => rand() - 0.5)
        .slice(0, 3)
        .map(p => ({ jp: p.jp, romaji: p.romaji }));
      return [...wrongs, { jp: q.jp, romaji: q.romaji }].sort(() => rand() - 0.5);
    }
  }, [idx, q, todayKey, pool]);

  function handleSelect(opt) {
    if (selected !== null) return;
    const correct = q.type === 'jp-to-en' ? q.en : q.jp;
    const chosen  = q.type === 'jp-to-en' ? opt : opt.jp;
    setSelected(chosen);
    setAnswers(prev => [...prev, chosen === correct]);
  }

  function handleNext() {
    // answers already includes this question's result (set in handleSelect)
    if (idx + 1 >= QUIZ_SIZE) {
      const sc = answers.filter(Boolean).length;
      setFinalScore(sc);
      setDone(true);
      if (!practicing) {
        try { localStorage.setItem(storageKey, JSON.stringify({ score: sc })); } catch {}
      }
    } else {
      setIdx(i => i + 1);
      setSelected(null);
    }
  }

  function handlePracticeAgain() {
    setIdx(0);
    setSelected(null);
    setAnswers([]);
    setDone(false);
    setPracticing(true);
  }

  if (done) {
    return (
      <div className="section">
        <h1 className="section-title">🎯 Daily Quiz</h1>
        <DoneScreen
          score={finalScore}
          total={QUIZ_SIZE}
          todayKey={todayKey}
          onPractice={handlePracticeAgain}
          practicing={practicing}
        />
      </div>
    );
  }

  const correctVal = q.type === 'jp-to-en' ? q.en : q.jp;
  const isCorrect  = selected === correctVal;
  const progress   = (idx / QUIZ_SIZE) * 100;
  const correctSoFar = answers.filter(Boolean).length;

  return (
    <div className="section">
      <h1 className="section-title">🎯 Daily Quiz</h1>
      <p className="section-intro">
        10 beginner phrases · mix of Japanese→English and English→Japanese · new set every day.
        {practicing && <span className="dq-practice-badge"> Practice round</span>}
      </p>

      <div className="dq-wrap">
        <div className="dq-meta">
          <span className="dq-count">{idx + 1} <span className="dq-count-of">/ {QUIZ_SIZE}</span></span>
          <span className="dq-score-live">{correctSoFar} correct</span>
        </div>
        <div className="dq-bar">
          <div className="dq-bar-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Question card */}
        <div className="dq-card">
          <div className="dq-type-badge">
            {q.type === 'jp-to-en' ? 'Japanese → English' : 'English → Japanese'}
          </div>
          {q.type === 'jp-to-en' ? (
            <>
              <div className="dq-jp">{q.jp}</div>
              <div className="dq-romaji">{q.romaji}</div>
              <div className="dq-card-listen">
                <SpeakButton text={q.jp} rate={speed} />
              </div>
            </>
          ) : (
            <div className="dq-en-question">{q.en}</div>
          )}
          <div className="dq-prompt">
            {q.type === 'jp-to-en' ? 'What does this mean?' : 'How do you say this in Japanese?'}
          </div>
          <div className="dq-section-tag">{q.section}</div>
        </div>

        {/* Answer options */}
        <div className="dq-options">
          {options.map((opt, i) => {
            const optVal = q.type === 'jp-to-en' ? opt : opt.jp;
            let cls = 'dq-opt';
            if (selected !== null) {
              if (optVal === correctVal)      cls += ' dq-opt--correct';
              else if (optVal === selected)   cls += ' dq-opt--wrong';
              else                            cls += ' dq-opt--dim';
            }
            return (
              <button key={i} className={cls} onClick={() => handleSelect(opt)}>
                <span className="dq-opt-letter">{String.fromCharCode(65 + i)}</span>
                <span className="dq-opt-text">
                  {q.type === 'jp-to-en' ? (
                    opt
                  ) : (
                    <span className="dq-opt-jp-wrap">
                      <span className="dq-opt-jp">{opt.jp}</span>
                      <span className="dq-opt-romaji-small">{opt.romaji}</span>
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Post-answer learning card */}
        {selected !== null && (
          <div className={`dq-learn-card ${isCorrect ? 'dq-learn-card--ok' : 'dq-learn-card--miss'}`}>
            <div className="dq-learn-verdict">
              {isCorrect ? '✓ Correct!' : '✗ Not quite'}
            </div>
            <div className="dq-learn-phrase">
              <span className="dq-learn-jp">{q.jp}</span>
              <SpeakButton text={q.jp} rate={speed} />
            </div>
            <div className="dq-learn-romaji">{q.romaji}</div>
            <div className="dq-learn-en">{q.en}</div>
            {q.tip && <div className="dq-learn-tip">💡 {q.tip}</div>}
            <div className="dq-learn-section">📂 {q.section}</div>
            <button className="dq-next" onClick={handleNext}>
              {idx + 1 >= QUIZ_SIZE ? 'See Results →' : 'Next →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function DoneScreen({ score, total, todayKey, onPractice, practicing }) {
  const pct = Math.round((score / total) * 100);
  const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🌟' : pct >= 60 ? '👍' : '📚';
  const msg =
    pct === 100 ? 'Perfect! You nailed every phrase.' :
    pct >= 80  ? 'Great work! Almost there.' :
    pct >= 60  ? 'Good effort — keep at it!' :
    'Keep studying — it gets easier!';
  const tip =
    pct < 60  ? 'Tip: Try the Core Phrases section to build your foundation.' :
    pct < 80  ? 'Tip: Review the phrases you missed in their sections.' :
    null;

  return (
    <div className="dq-done">
      <div className="dq-done-emoji">{emoji}</div>
      <div className="dq-done-score">{score} / {total}</div>
      <div className="dq-done-pct">{pct}%</div>
      <div className="dq-done-msg">{msg}</div>
      {tip && <div className="dq-done-tip">{tip}</div>}
      <div className="dq-done-sub">
        {practicing ? 'Practice round — score not saved' : `Saved · new quiz tomorrow · ${todayKey}`}
      </div>
      <button className="dq-practice-btn" onClick={onPractice}>
        🔄 Practice Again
      </button>
    </div>
  );
}
