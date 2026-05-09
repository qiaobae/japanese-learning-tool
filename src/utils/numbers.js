// Lookup tables — hardcoded to handle all Japanese phonological irregulars
const ONES = [
  null,
  { h:'いち', r:'ichi', k:'一' },
  { h:'に',   r:'ni',   k:'二' },
  { h:'さん', r:'san',  k:'三' },
  { h:'よん', r:'yon',  k:'四' },
  { h:'ご',   r:'go',   k:'五' },
  { h:'ろく', r:'roku', k:'六' },
  { h:'なな', r:'nana', k:'七' },
  { h:'はち', r:'hachi',k:'八' },
  { h:'きゅう',r:'kyuu',k:'九' },
];

const HUNDREDS = {
  1: { h:'ひゃく',     r:'hyaku',    k:'百'   },
  2: { h:'にひゃく',   r:'nihyaku',  k:'二百' },
  3: { h:'さんびゃく', r:'sanbyaku', k:'三百' },
  4: { h:'よんひゃく', r:'yonhyaku', k:'四百' },
  5: { h:'ごひゃく',   r:'gohyaku',  k:'五百' },
  6: { h:'ろっぴゃく', r:'roppyaku', k:'六百' },
  7: { h:'ななひゃく', r:'nanahyaku',k:'七百' },
  8: { h:'はっぴゃく', r:'happyaku', k:'八百' },
  9: { h:'きゅうひゃく',r:'kyuuhyaku',k:'九百'},
};

const THOUSANDS = {
  1: { h:'せん',     r:'sen',    k:'千'   },
  2: { h:'にせん',   r:'nisen',  k:'二千' },
  3: { h:'さんぜん', r:'sanzen', k:'三千' },
  4: { h:'よんせん', r:'yonsen', k:'四千' },
  5: { h:'ごせん',   r:'gosen',  k:'五千' },
  6: { h:'ろくせん', r:'rokusen',k:'六千' },
  7: { h:'ななせん', r:'nanasen',k:'七千' },
  8: { h:'はっせん', r:'hassen', k:'八千' },
  9: { h:'きゅうせん',r:'kyuusen',k:'九千'},
};

// Converts 1–9999 into { h, r, k } parts
function under10000(n) {
  let h = '', r = '', k = '';

  if (n >= 1000) {
    const d = Math.floor(n / 1000);
    const t = THOUSANDS[d];
    h += t.h; r += t.r; k += t.k;
    n %= 1000;
  }
  if (n >= 100) {
    const d = Math.floor(n / 100);
    const t = HUNDREDS[d];
    h += t.h; r += t.r; k += t.k;
    n %= 100;
  }
  if (n >= 10) {
    const d = Math.floor(n / 10);
    if (d === 1) { h += 'じゅう'; r += 'juu'; k += '十'; }
    else {
      const o = ONES[d];
      h += o.h + 'じゅう'; r += o.r + 'juu'; k += o.k + '十';
    }
    n %= 10;
  }
  if (n > 0) {
    const o = ONES[n];
    h += o.h; r += o.r; k += o.k;
  }
  return { h, r, k };
}

export function toJapanese(n) {
  if (!Number.isInteger(n) || n < 0 || n > 999999999999) return null;
  if (n === 0) return { hiragana: 'ぜろ', romaji: 'zero', kanji: 'ゼロ' };

  let h = '', r = '', k = '';

  // 億 (100,000,000)
  if (n >= 100000000) {
    const oku = Math.floor(n / 100000000);
    const p = under10000(oku);
    h += p.h + 'おく'; r += p.r + 'oku'; k += p.k + '億';
    n %= 100000000;
  }

  // 万 (10,000)
  if (n >= 10000) {
    const man = Math.floor(n / 10000);
    const p = under10000(man);
    h += p.h + 'まん'; r += p.r + 'man'; k += p.k + '万';
    n %= 10000;
  }

  // remainder under 10,000
  if (n > 0) {
    const p = under10000(n);
    h += p.h; r += p.r; k += p.k;
  }

  return { hiragana: h, romaji: r, kanji: k };
}

// Appends a counter and handles special cases
export function withCounter(n, counter) {
  const base = toJapanese(n);
  if (!base) return null;

  // Special counters with irregular readings
  const specialPeople = { 1: { h:'ひとり', r:'hitori', k:'一人' }, 2: { h:'ふたり', r:'futari', k:'二人' } };
  const specialCups   = { 1: { h:'いっぱい', r:'ippai', k:'一杯' }, 3: { h:'さんばい', r:'sanbai', k:'三杯' }, 6: { h:'ろっぱい', r:'roppai', k:'六杯' }, 8: { h:'はっぱい', r:'happai', k:'八杯' }, 10: { h:'じっぱい', r:'jippai', k:'十杯' } };
  const specialLong   = { 1: { h:'いっぽん', r:'ippon', k:'一本' }, 3: { h:'さんぼん', r:'sanbon', k:'三本' }, 6: { h:'ろっぽん', r:'roppon', k:'六本' }, 8: { h:'はっぽん', r:'happon', k:'八本' }, 10: { h:'じっぽん', r:'jippon', k:'十本' } };
  const specialFlat   = { 1: { h:'いちまい', r:'ichimai', k:'一枚' }, 10: { h:'じゅうまい', r:'juumai', k:'十枚' } };

  if (counter === '人') {
    const s = specialPeople[n];
    if (s) return { hiragana: s.h, romaji: s.r, kanji: s.k };
  }
  if (counter === '杯') {
    const s = specialCups[n];
    if (s) return { hiragana: s.h, romaji: s.r, kanji: s.k };
  }
  if (counter === '本') {
    const s = specialLong[n];
    if (s) return { hiragana: s.h, romaji: s.r, kanji: s.k };
  }

  // Default: append counter kanji/reading
  const counterReadings = {
    '円': { h:'えん', r:'en' },
    '人': { h:'にん', r:'nin' },
    '枚': { h:'まい', r:'mai' },
    '個': { h:'こ',   r:'ko'  },
    '本': { h:'ほん', r:'hon' },
    '冊': { h:'さつ', r:'satsu' },
    '台': { h:'だい', r:'dai'  },
    '杯': { h:'はい', r:'hai'  },
    '階': { h:'かい', r:'kai'  },
    '番': { h:'ばん', r:'ban'  },
    '時': { h:'じ',   r:'ji'   },
    '分': { h:'ふん', r:'fun'  },
  };
  const cr = counterReadings[counter] || { h:counter, r:counter };
  return {
    hiragana: base.hiragana + cr.h,
    romaji:   base.romaji + '-' + cr.r,
    kanji:    base.kanji + counter,
  };
}

export const COUNTERS = [
  { symbol:'円', label:'Yen',            romaji:'en',    note:'Money. ¥1,000 = 千円 (senen). ¥10,000 = 一万円 (ichiman-en). No irregular forms.' },
  { symbol:'人', label:'People',         romaji:'nin',   note:'1 person = ひとり (hitori), 2 = ふたり (futari). 3+ use 三人 (san-nin) etc.' },
  { symbol:'枚', label:'Flat things',    romaji:'mai',   note:'Tickets, stamps, paper, clothes. 切符を二枚 (kippu wo nimai) = two tickets.' },
  { symbol:'本', label:'Long thin things',romaji:'hon',  note:'Bottles, pens, roads, fingers. 水を一本 (mizu wo ippon) = one bottle of water. Irregulars at 1, 3, 6, 8, 10.' },
  { symbol:'個', label:'Generic objects',romaji:'ko',    note:'Default counter when unsure. Works for most small items.' },
  { symbol:'冊', label:'Books',          romaji:'satsu', note:'Magazines, notebooks, books.' },
  { symbol:'台', label:'Machines',       romaji:'dai',   note:'Cars, computers, TVs, appliances.' },
  { symbol:'杯', label:'Cups/bowls',     romaji:'hai',   note:'Drinks and food in bowls. もう一杯 (mō ippai) = one more cup/glass — key izakaya phrase! Irregulars at 1, 3, 6, 8, 10.' },
  { symbol:'階', label:'Building floors',romaji:'kai',   note:'一階 (ikkai) = 1st floor/ground floor. 二階 (nikai) = 2nd floor.' },
  { symbol:'番', label:'Numbers/order',  romaji:'ban',   note:'Platform numbers: 三番線 (sanbansen) = platform 3. Bus routes: 十番 (juuban) = #10.' },
];
