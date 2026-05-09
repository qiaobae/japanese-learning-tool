import { useState } from 'react';
import {
  mandarinIntro, falseFriends, trueCoegnates,
  japaneseToChineseLoanwords, chineseToJapaneseLoanwords,
  grammarComparison, onYomiGuide
} from '../data/mandarinBridge';

const TABS = [
  { id:'overview',    label:'Overview' },
  { id:'false',       label:'⚠️ False Friends' },
  { id:'cognates',    label:'✅ True Cognates' },
  { id:'onyomi',      label:'On\'yomi Guide' },
  { id:'loanwords',   label:'Loanwords' },
  { id:'grammar',     label:'Grammar Comparison' },
];

export default function MandarinBridgeSection() {
  const [tab, setTab] = useState('overview');

  return (
    <div className="section">
      <h1 className="section-title">🇨🇳 Mandarin Bridge</h1>
      <p className="section-intro">Deep dive into the linguistic connections between Japanese and Mandarin Chinese.</p>

      <div className="kana-tabs" style={{flexWrap:'wrap'}}>
        {TABS.map(t => (
          <button key={t.id} className={`tab-btn ${tab===t.id?'active':''}`} onClick={()=>setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'overview' && (
        <div>
          <div className="callout callout-blue" style={{marginBottom:'1.5rem'}}>
            {mandarinIntro}
          </div>

          <h2 className="group-title">The 5 Types of Kanji-Hanzi Relationships</h2>
          <div className="facts-grid">
            {[
              { emoji:'🟢', title:'Same character, same meaning, similar pronunciation', body:'真の同源 (true cognates). e.g. 水 (mizu/shuǐ=water), 出口 (deguchi/chūkǒu=exit). Your biggest advantage.' },
              { emoji:'🔵', title:'Same character, same meaning, different pronunciation', body:'e.g. 右 (migi/yòu=right), 左 (hidari/zuǒ=left). You can read the meaning even without knowing the Japanese reading.' },
              { emoji:'🟡', title:'Traditional vs Simplified', body:'Japanese kept traditional forms (電, 銀, 図) which match Taiwan/Hong Kong better than mainland China. 電=电, 銀=银, 圖=图.' },
              { emoji:'🔴', title:'False friends (危険!)', body:'Same characters, completely different meanings! 手紙 (tegami=letter in JP, toilet paper in CN). 大丈夫 (daijōbu=OK in JP, "real man" in CN). Learn these!' },
              { emoji:'⚪', title:'Japanese innovations (和製漢字)', body:'Japan created new kanji or new compounds using existing characters. 働く (hataraku=to work), 辻 (tsuji=crossroads). These don\'t exist in Chinese.' },
            ].map((f,i) => (
              <div key={i} className="fact-card">
                <div className="fact-emoji">{f.emoji}</div>
                <div>
                  <div className="fact-title">{f.title}</div>
                  <div className="fact-body">{f.body}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="callout callout-amber" style={{marginTop:'1.5rem'}}>
            <strong>Mandarin speaker's Japan hack:</strong> When you see kanji signs you don't know, try reading them
            as if they were Chinese. 60-70% of the time you'll get the gist. The exceptions (false friends) are worth memorising
            specifically because they'll trip you up the worst.
          </div>
        </div>
      )}

      {tab === 'false' && (
        <div>
          <div className="callout callout-red" style={{marginBottom:'1.5rem'}}>
            <strong>⚠️ False Friends</strong> — same characters, dangerous different meanings.
            These are the ones that will cause the most embarrassing or confusing moments. Memorise them.
          </div>
          <div className="false-friends-list">
            {falseFriends.map((f, i) => (
              <div key={i} className={`false-friend-card danger-${f.danger.toLowerCase()}`}>
                <div className="ff-header">
                  <span className={`ff-danger danger-badge-${f.danger.toLowerCase()}`}>{f.danger}</span>
                </div>
                <div className="ff-body">
                  <div className="ff-side">
                    <div className="ff-lang">🇯🇵 Japanese</div>
                    <div className="ff-word">{f.jp}</div>
                    <div className="ff-reading">{f.jpReading}</div>
                    <div className="ff-meaning jp-meaning">{f.jpMeaning}</div>
                  </div>
                  <div className="ff-vs">≠</div>
                  <div className="ff-side">
                    <div className="ff-lang">🇨🇳 Mandarin</div>
                    <div className="ff-word">{f.zh}</div>
                    <div className="ff-reading">{f.zhPinyin}</div>
                    <div className="ff-meaning zh-meaning">{f.zhMeaning}</div>
                  </div>
                </div>
                <div className="ff-note">{f.note}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'cognates' && (
        <div>
          <div className="callout callout-green" style={{marginBottom:'1.5rem'}}>
            <strong>✅ True Cognates</strong> — same characters, same meaning, recognizably similar pronunciation.
            These are your superpower as a Mandarin speaker. On\'yomi readings often echo Mandarin directly.
          </div>
          <div className="cognate-table">
            <div className="cognate-header-row">
              <span>Kanji</span>
              <span>Japanese (on\'yomi)</span>
              <span>Mandarin pinyin</span>
              <span>Meaning</span>
              <span>Note</span>
            </div>
            {trueCoegnates.map((c, i) => (
              <div key={i} className="cognate-row">
                <span className="cognate-kanji">{c.compound}</span>
                <span className="cognate-jp">{c.jpReading}</span>
                <span className="cognate-zh">{c.zhPinyin}</span>
                <span className="cognate-meaning">{c.meaning}</span>
                <span className="cognate-note">{c.note}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'onyomi' && (
        <div>
          <div className="callout callout-blue" style={{marginBottom:'1rem'}}>
            <strong>{onYomiGuide.intro}</strong>
          </div>

          <h2 className="group-title">On'yomi pronunciation bridges</h2>
          <p style={{marginBottom:'1rem',opacity:0.8}}>
            On\'yomi comes from the pronunciation of Chinese during the Tang dynasty (roughly 600-900 AD),
            when most kanji were imported to Japan. Modern Mandarin has evolved significantly, but you can
            often still hear the family resemblance.
          </p>

          <div className="onyomi-table">
            {onYomiGuide.examples.map((e, i) => (
              <div key={i} className="onyomi-row">
                <span className="onyomi-kanji">{e.kanji}</span>
                <div className="onyomi-readings">
                  <span className="onyomi-jp">JP: {e.jp}</span>
                  <span className="onyomi-zh">ZH: {e.zh}</span>
                </div>
                <span className="onyomi-note">{e.note}</span>
              </div>
            ))}
          </div>

          <div className="callout callout-amber" style={{marginTop:'1.5rem'}}>
            <strong>Pattern to notice:</strong> Many Japanese on\'yomi endings in -ku, -tsu, -chi correspond to
            Chinese syllables that end in -k, -t, -j sounds (Middle Chinese "checked tones" 入声).
            These were preserved in Japanese (and Cantonese!) but lost in modern Mandarin.
          </div>
        </div>
      )}

      {tab === 'loanwords' && (
        <div>
          <h2 className="group-title">Japanese → Chinese (Modern coinages)</h2>
          <p style={{marginBottom:'1rem',opacity:0.8}}>
            During the Meiji era (1868–1912), Japan rapidly Westernized and coined hundreds of new compound words
            using kanji to translate Western concepts. China then BORROWED these Japanese coinages back!
            Many key vocabulary words in modern Chinese were invented by Japan.
          </p>
          <div className="loanword-grid">
            {japaneseToChineseLoanwords.map((l, i) => (
              <div key={i} className="loanword-card">
                <div className="loanword-word">{l.word}</div>
                <div className="loanword-note">{l.note}</div>
              </div>
            ))}
          </div>

          <h2 className="group-title" style={{marginTop:'2rem'}}>Chinese → Japanese (Classic borrowings)</h2>
          <div className="loanword-grid">
            {chineseToJapaneseLoanwords.map((l, i) => (
              <div key={i} className="loanword-card">
                <div className="loanword-word">{l.word}</div>
                <div className="loanword-note">{l.note}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'grammar' && (
        <div>
          <div className="callout callout-blue" style={{marginBottom:'1.5rem'}}>
            Chinese and Japanese have very different grammar despite sharing kanji. Understanding the key differences
            helps you construct sentences and avoid direct translation mistakes.
          </div>
          <div className="grammar-comparison">
            {grammarComparison.map((g, i) => (
              <div key={i} className="grammar-card">
                <h3 className="grammar-title">{g.title}</h3>
                <div className="grammar-langs">
                  <div className="grammar-jp">
                    <div className="grammar-lang-label">🇯🇵 Japanese</div>
                    <pre className="grammar-example">{g.jp}</pre>
                  </div>
                  <div className="grammar-zh">
                    <div className="grammar-lang-label">🇨🇳 Mandarin</div>
                    <pre className="grammar-example">{g.zh}</pre>
                  </div>
                </div>
                <div className="grammar-note">{g.note}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
