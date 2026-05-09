export const hiraganaRows = [
  { sound: '(vowels)', chars: [{ r:'a',c:'あ'},{r:'i',c:'い'},{r:'u',c:'う'},{r:'e',c:'え'},{r:'o',c:'お'}] },
  { sound: 'k',        chars: [{ r:'ka',c:'か'},{r:'ki',c:'き'},{r:'ku',c:'く'},{r:'ke',c:'け'},{r:'ko',c:'こ'}] },
  { sound: 's',        chars: [{ r:'sa',c:'さ'},{r:'shi',c:'し'},{r:'su',c:'す'},{r:'se',c:'せ'},{r:'so',c:'そ'}] },
  { sound: 't',        chars: [{ r:'ta',c:'た'},{r:'chi',c:'ち'},{r:'tsu',c:'つ'},{r:'te',c:'て'},{r:'to',c:'と'}] },
  { sound: 'n',        chars: [{ r:'na',c:'な'},{r:'ni',c:'に'},{r:'nu',c:'ぬ'},{r:'ne',c:'ね'},{r:'no',c:'の'}] },
  { sound: 'h',        chars: [{ r:'ha',c:'は'},{r:'hi',c:'ひ'},{r:'fu',c:'ふ'},{r:'he',c:'へ'},{r:'ho',c:'ほ'}] },
  { sound: 'm',        chars: [{ r:'ma',c:'ま'},{r:'mi',c:'み'},{r:'mu',c:'む'},{r:'me',c:'め'},{r:'mo',c:'も'}] },
  { sound: 'y',        chars: [{ r:'ya',c:'や'},{r:'—',c:''},{r:'yu',c:'ゆ'},{r:'—',c:''},{r:'yo',c:'よ'}] },
  { sound: 'r',        chars: [{ r:'ra',c:'ら'},{r:'ri',c:'り'},{r:'ru',c:'る'},{r:'re',c:'れ'},{r:'ro',c:'ろ'}] },
  { sound: 'w',        chars: [{ r:'wa',c:'わ'},{r:'—',c:''},{r:'—',c:''},{r:'—',c:''},{r:'wo',c:'を'}] },
  { sound: 'n',        chars: [{ r:'n',c:'ん'},{r:'—',c:''},{r:'—',c:''},{r:'—',c:''},{r:'—',c:''}] },
];

export const hiraganaVoiced = [
  { sound: 'g', chars: [{ r:'ga',c:'が'},{r:'gi',c:'ぎ'},{r:'gu',c:'ぐ'},{r:'ge',c:'げ'},{r:'go',c:'ご'}] },
  { sound: 'z', chars: [{ r:'za',c:'ざ'},{r:'ji',c:'じ'},{r:'zu',c:'ず'},{r:'ze',c:'ぜ'},{r:'zo',c:'ぞ'}] },
  { sound: 'd', chars: [{ r:'da',c:'だ'},{r:'di',c:'ぢ'},{r:'du',c:'づ'},{r:'de',c:'で'},{r:'do',c:'ど'}] },
  { sound: 'b', chars: [{ r:'ba',c:'ば'},{r:'bi',c:'び'},{r:'bu',c:'ぶ'},{r:'be',c:'べ'},{r:'bo',c:'ぼ'}] },
  { sound: 'p', chars: [{ r:'pa',c:'ぱ'},{r:'pi',c:'ぴ'},{r:'pu',c:'ぷ'},{r:'pe',c:'ぺ'},{r:'po',c:'ぽ'}] },
];

export const hiraganaCombinations = [
  { r:'kya',c:'きゃ'}, { r:'kyu',c:'きゅ'}, { r:'kyo',c:'きょ'},
  { r:'sha',c:'しゃ'}, { r:'shu',c:'しゅ'}, { r:'sho',c:'しょ'},
  { r:'cha',c:'ちゃ'}, { r:'chu',c:'ちゅ'}, { r:'cho',c:'ちょ'},
  { r:'nya',c:'にゃ'}, { r:'nyu',c:'にゅ'}, { r:'nyo',c:'にょ'},
  { r:'hya',c:'ひゃ'}, { r:'hyu',c:'ひゅ'}, { r:'hyo',c:'ひょ'},
  { r:'mya',c:'みゃ'}, { r:'myu',c:'みゅ'}, { r:'myo',c:'みょ'},
  { r:'rya',c:'りゃ'}, { r:'ryu',c:'りゅ'}, { r:'ryo',c:'りょ'},
  { r:'gya',c:'ぎゃ'}, { r:'gyu',c:'ぎゅ'}, { r:'gyo',c:'ぎょ'},
  { r:'ja', c:'じゃ'}, { r:'ju', c:'じゅ'}, { r:'jo', c:'じょ'},
  { r:'bya',c:'びゃ'}, { r:'byu',c:'びゅ'}, { r:'byo',c:'びょ'},
  { r:'pya',c:'ぴゃ'}, { r:'pyu',c:'ぴゅ'}, { r:'pyo',c:'ぴょ'},
];

export const katakanaRows = [
  { sound: '(vowels)', chars: [{ r:'a',c:'ア'},{r:'i',c:'イ'},{r:'u',c:'ウ'},{r:'e',c:'エ'},{r:'o',c:'オ'}] },
  { sound: 'k',        chars: [{ r:'ka',c:'カ'},{r:'ki',c:'キ'},{r:'ku',c:'ク'},{r:'ke',c:'ケ'},{r:'ko',c:'コ'}] },
  { sound: 's',        chars: [{ r:'sa',c:'サ'},{r:'shi',c:'シ'},{r:'su',c:'ス'},{r:'se',c:'セ'},{r:'so',c:'ソ'}] },
  { sound: 't',        chars: [{ r:'ta',c:'タ'},{r:'chi',c:'チ'},{r:'tsu',c:'ツ'},{r:'te',c:'テ'},{r:'to',c:'ト'}] },
  { sound: 'n',        chars: [{ r:'na',c:'ナ'},{r:'ni',c:'ニ'},{r:'nu',c:'ヌ'},{r:'ne',c:'ネ'},{r:'no',c:'ノ'}] },
  { sound: 'h',        chars: [{ r:'ha',c:'ハ'},{r:'hi',c:'ヒ'},{r:'fu',c:'フ'},{r:'he',c:'ヘ'},{r:'ho',c:'ホ'}] },
  { sound: 'm',        chars: [{ r:'ma',c:'マ'},{r:'mi',c:'ミ'},{r:'mu',c:'ム'},{r:'me',c:'メ'},{r:'mo',c:'モ'}] },
  { sound: 'y',        chars: [{ r:'ya',c:'ヤ'},{r:'—',c:''},{r:'yu',c:'ユ'},{r:'—',c:''},{r:'yo',c:'ヨ'}] },
  { sound: 'r',        chars: [{ r:'ra',c:'ラ'},{r:'ri',c:'リ'},{r:'ru',c:'ル'},{r:'re',c:'レ'},{r:'ro',c:'ロ'}] },
  { sound: 'w',        chars: [{ r:'wa',c:'ワ'},{r:'—',c:''},{r:'—',c:''},{r:'—',c:''},{r:'wo',c:'ヲ'}] },
  { sound: 'n',        chars: [{ r:'n',c:'ン'},{r:'—',c:''},{r:'—',c:''},{r:'—',c:''},{r:'—',c:''}] },
];

export const katakanaVoiced = [
  { sound: 'g', chars: [{ r:'ga',c:'ガ'},{r:'gi',c:'ギ'},{r:'gu',c:'グ'},{r:'ge',c:'ゲ'},{r:'go',c:'ゴ'}] },
  { sound: 'z', chars: [{ r:'za',c:'ザ'},{r:'ji',c:'ジ'},{r:'zu',c:'ズ'},{r:'ze',c:'ゼ'},{r:'zo',c:'ゾ'}] },
  { sound: 'd', chars: [{ r:'da',c:'ダ'},{r:'di',c:'ヂ'},{r:'du',c:'ヅ'},{r:'de',c:'デ'},{r:'do',c:'ド'}] },
  { sound: 'b', chars: [{ r:'ba',c:'バ'},{r:'bi',c:'ビ'},{r:'bu',c:'ブ'},{r:'be',c:'ベ'},{r:'bo',c:'ボ'}] },
  { sound: 'p', chars: [{ r:'pa',c:'パ'},{r:'pi',c:'ピ'},{r:'pu',c:'プ'},{r:'pe',c:'ペ'},{r:'po',c:'ポ'}] },
];

export const katakanaCombinations = [
  { r:'kya',c:'キャ'}, { r:'kyu',c:'キュ'}, { r:'kyo',c:'キョ'},
  { r:'sha',c:'シャ'}, { r:'shu',c:'シュ'}, { r:'sho',c:'ショ'},
  { r:'cha',c:'チャ'}, { r:'chu',c:'チュ'}, { r:'cho',c:'チョ'},
  { r:'nya',c:'ニャ'}, { r:'nyu',c:'ニュ'}, { r:'nyo',c:'ニョ'},
  { r:'hya',c:'ヒャ'}, { r:'hyu',c:'ヒュ'}, { r:'hyo',c:'ヒョ'},
  { r:'mya',c:'ミャ'}, { r:'myu',c:'ミュ'}, { r:'myo',c:'ミョ'},
  { r:'rya',c:'リャ'}, { r:'ryu',c:'リュ'}, { r:'ryo',c:'リョ'},
  { r:'gya',c:'ギャ'}, { r:'gyu',c:'ギュ'}, { r:'gyo',c:'ギョ'},
  { r:'ja', c:'ジャ'}, { r:'ju', c:'ジュ'}, { r:'jo', c:'ジョ'},
  { r:'bya',c:'ビャ'}, { r:'byu',c:'ビュ'}, { r:'byo',c:'ビョ'},
  { r:'pya',c:'ピャ'}, { r:'pyu',c:'ピュ'}, { r:'pyo',c:'ピョ'},
  { r:'fa', c:'ファ'}, { r:'fi', c:'フィ'}, { r:'fe', c:'フェ'}, { r:'fo', c:'フォ'},
  { r:'va', c:'ヴァ'}, { r:'vi', c:'ヴィ'}, { r:'vu', c:'ヴ'},  { r:'ve', c:'ヴェ'}, { r:'vo', c:'ヴォ'},
  { r:'ti', c:'ティ'}, { r:'di', c:'ディ'}, { r:'du', c:'デュ'},
];

export const pronunciationNotes = [
  { title: 'R sound (ら行)', body: 'The Japanese R is between English R and L — made by flicking your tongue briefly against the roof of your mouth, like the D in "ladder". Neither a hard R nor an L.' },
  { title: 'U sound (う)', body: 'Unrounded — lips don\'t protrude. Think of the oo in "book" but without rounding your lips. Often devoiced (almost silent) between voiceless consonants: "desu" sounds like "des".' },
  { title: 'Tsu (つ)', body: 'A single syllable combining "ts" + "u". Like "tsunami". Hard for English speakers — practice slowly.' },
  { title: 'Fu (ふ)', body: 'Not exactly English "fu" — the lips barely touch. More of a breath than a labial consonant. Unique to Japanese.' },
  { title: 'Long vowels', body: 'おう vs おお: Both are a long "o" sound. Written with ー in katakana (コーヒー = coffee). Doubling the vowel changes meaning: おじさん (uncle) vs おじいさん (grandfather).' },
  { title: 'Double consonants (っ)', body: 'A small っ (tsu) indicates a double consonant — a brief pause/stop before the consonant. きって (stamp) vs きて (come). Critical for meaning!' },
  { title: 'Pitch accent', body: 'Japanese has pitch accent (not stress accent like English). Words can have different meanings based on pitch. Beginners: don\'t stress — context usually makes meaning clear.' },
  { title: 'N (ん)', body: 'A syllable on its own. Its exact sound changes by context: "m" before b/p, "ng" before k/g, "n" elsewhere. Important: a word can\'t start with ん.' },
];
