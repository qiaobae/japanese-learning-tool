import { useState, useMemo } from 'react';
import { sections } from '../data/phrases';
import { intermediateSections } from '../data/intermediate';

function seededRand(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return function() {
    h ^= h >>> 16;
    h = Math.imul(h, 0x45d9f3b) >>> 0;
    h ^= h >>> 16;
    h = Math.imul(h, 0x45d9f3b) >>> 0;
    h ^= h >>> 16;
    return h / 4294967296;
  };
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function buildAllPhrases() {
  const all = [];
  for (const s of [...sections, ...intermediateSections]) {
    for (const g of s.groups) {
      for (const p of (g.phrases || [])) {
        if (p.jp && p.en && !p.en.startsWith('~') && p.en.length > 4) {
          all.push({ jp: p.jp, romaji: p.romaji || '', en: p.en });
        }
      }
    }
  }
  return all;
}

const QUIZ_SIZE = 10;

export default function DailyQuiz() {
  const todayKey = getTodayKey();
  const storageKey = `jp-quiz-${todayKey}`;

  const savedResult = useMemo(() => {
    try { return JSON.parse(localStorage.getItem(storageKey)); } catch { return null; }
  }, [storageKey]);

  const { deck, allPhrases } = useMemo(() => {
    const all = buildAllPhrases();
    const rand = seededRand(todayKey);
    const shuffled = [...all].sort(() => rand() - 0.5);
    return { deck: shuffled.slice(0, QUIZ_SIZE), allPhrases: all };
  }, [todayKey]);

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [done, setDone] = useState(!!savedResult);
  const [finalScore, setFinalScore] = useState(savedResult?.score ?? 0);

  const question = deck[idx];

  const options = useMemo(() => {
    if (!question) return [];
    const rand = seededRand(todayKey + String(idx));
    const wrong = allPhrases
      .filter(p => p.en !== question.en)
      .sort(() => rand() - 0.5)
      .slice(0, 3)
      .map(p => p.en);
    return [...wrong, question.en].sort(() => rand() - 0.5);
  }, [idx, question, todayKey, allPhrases]);

  function handleSelect(opt) {
    if (selected !== null) return;
    const isCorrect = opt === question.en;
    setSelected(opt);
    setAnswers(prev => [...prev, isCorrect]);
  }

  function handleNext() {
    if (idx + 1 >= QUIZ_SIZE) {
      const sc = answers.filter(Boolean).length;
      setFinalScore(sc);
      setDone(true);
      try { localStorage.setItem(storageKey, JSON.stringify({ score: sc })); } catch {}
    } else {
      setIdx(i => i + 1);
      setSelected(null);
    }
  }

  if (done) {
    return (
      <div className="section">
        <h1 className="section-title">🎯 Daily Quiz</h1>
        <DoneScreen score={finalScore} total={QUIZ_SIZE} todayKey={todayKey} />
      </div>
    );
  }

  const isCorrect = selected === question?.en;
  const progress = (idx / QUIZ_SIZE) * 100;
  const correctSoFar = answers.filter(Boolean).length;

  return (
    <div className="section">
      <h1 className="section-title">🎯 Daily Quiz</h1>
      <p className="section-intro">10 phrases per day, seeded by date — same quiz for everyone. Come back tomorrow for a new set.</p>

      <div className="dq-wrap">
        <div className="dq-meta">
          <span className="dq-count">{idx + 1} <span className="dq-count-of">/ {QUIZ_SIZE}</span></span>
          <span className="dq-score-live">{correctSoFar} correct</span>
        </div>
        <div className="dq-bar">
          <div className="dq-bar-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="dq-card">
          <div className="dq-jp">{question.jp}</div>
          {question.romaji && <div className="dq-romaji">{question.romaji}</div>}
          <div className="dq-prompt">What does this mean in English?</div>
        </div>

        <div className="dq-options">
          {options.map((opt, i) => {
            let cls = 'dq-opt';
            if (selected !== null) {
              if (opt === question.en) cls += ' dq-opt--correct';
              else if (opt === selected) cls += ' dq-opt--wrong';
              else cls += ' dq-opt--dim';
            }
            return (
              <button key={i} className={cls} onClick={() => handleSelect(opt)}>
                <span className="dq-opt-letter">{String.fromCharCode(65 + i)}</span>
                <span className="dq-opt-text">{opt}</span>
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className="dq-feedback">
            <div className={`dq-verdict ${isCorrect ? 'dq-verdict--ok' : 'dq-verdict--miss'}`}>
              {isCorrect ? '✓ Correct!' : `✗ Answer: ${question.en}`}
            </div>
            <button className="dq-next" onClick={handleNext}>
              {idx + 1 >= QUIZ_SIZE ? 'See Results →' : 'Next →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function DoneScreen({ score, total, todayKey }) {
  const pct = Math.round((score / total) * 100);
  const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🌟' : pct >= 60 ? '👍' : '📚';
  const msg = pct === 100 ? 'Perfect score!' : pct >= 80 ? 'Great work!' : pct >= 60 ? 'Good effort!' : 'Keep studying!';
  return (
    <div className="dq-done">
      <div className="dq-done-emoji">{emoji}</div>
      <div className="dq-done-score">{score} / {total}</div>
      <div className="dq-done-pct">{pct}%</div>
      <div className="dq-done-msg">{msg}</div>
      <div className="dq-done-sub">New quiz tomorrow · {todayKey}</div>
    </div>
  );
}
