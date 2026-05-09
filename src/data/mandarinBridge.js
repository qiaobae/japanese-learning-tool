export const mandarinIntro = `Japanese writing uses three scripts: hiragana (ひらがな), katakana (カタカナ), and kanji (漢字).
Kanji were borrowed from China over 1,500 years ago and still share tremendous overlap with Chinese characters.
As a Mandarin speaker, you have a massive head start — roughly 2,000 kanji are in common use, and you already know most of them visually.
The main differences: (1) simplified vs traditional forms, (2) different pronunciations (kun'yomi native Japanese, on'yomi = older Chinese-influenced), (3) meaning drift over centuries.`;

export const falseFriends = [
  {
    jp: '手紙',
    jpReading: 'tegami',
    jpMeaning: 'letter (correspondence)',
    zh: '手纸',
    zhPinyin: 'shǒuzhǐ',
    zhMeaning: 'toilet paper',
    danger: 'HIGH',
    note: 'Sending someone 手紙 in Japan = a heartfelt letter. In China = handing them toilet paper.'
  },
  {
    jp: '大丈夫',
    jpReading: 'daijōbu',
    jpMeaning: 'OK / fine / no problem',
    zh: '大丈夫',
    zhPinyin: 'dàzhàngfu',
    zhMeaning: 'a real man / husband (formal)',
    danger: 'HIGH',
    note: 'Daijōbu desu = "I\'m fine / it\'s OK". In Chinese: 大丈夫 = a strong, dependable man.'
  },
  {
    jp: '汽車',
    jpReading: 'kisha',
    jpMeaning: 'steam train / old train',
    zh: '汽车',
    zhPinyin: 'qìchē',
    zhMeaning: 'car / automobile',
    danger: 'HIGH',
    note: '汽 + 車 in Japanese = steam train. In Chinese: 汽 + 车 = car. Ask for 汽車 directions in Japan and you\'ll confuse everyone.'
  },
  {
    jp: '娘',
    jpReading: 'musume',
    jpMeaning: 'daughter',
    zh: '娘',
    zhPinyin: 'niáng',
    zhMeaning: 'mother / woman (literary)',
    danger: 'MEDIUM',
    note: 'In Japanese, 娘 = your own daughter. In Chinese, 娘 = mother or a woman (in dialects/old usage).'
  },
  {
    jp: '先生',
    jpReading: 'sensei',
    jpMeaning: 'teacher / doctor / master',
    zh: '先生',
    zhPinyin: 'xiānsheng',
    zhMeaning: 'Mr. / husband / sir',
    danger: 'MEDIUM',
    note: 'Calling someone 先生 in Japan = great respect (teacher/doctor). In China = a polite "sir" or "husband".'
  },
  {
    jp: '勉強',
    jpReading: 'benkyō',
    jpMeaning: 'study / learning',
    zh: '勉强',
    zhPinyin: 'miǎnqiǎng',
    zhMeaning: 'reluctantly / barely / to force',
    danger: 'MEDIUM',
    note: '勉強 in Japanese is totally positive — studying hard! In Chinese, 勉强 means doing something against your will.'
  },
  {
    jp: '新聞',
    jpReading: 'shinbun',
    jpMeaning: 'newspaper (the physical paper)',
    zh: '新闻',
    zhPinyin: 'xīnwén',
    zhMeaning: 'news (any media)',
    danger: 'LOW',
    note: 'Same characters, similar meaning — but Japanese 新聞 means the physical newspaper specifically. Chinese 新闻 = news in general.'
  },
  {
    jp: '切手',
    jpReading: 'kitte',
    jpMeaning: 'postage stamp',
    zh: '切手',
    zhPinyin: 'qiēshǒu',
    zhMeaning: 'to chop off a hand (archaic)',
    danger: 'LOW',
    note: 'Not a common Chinese word today, but if a Classical Chinese speaker sees 切手 they\'d think amputation, not stamps.'
  },
  {
    jp: '丈夫',
    jpReading: 'jōbu',
    jpMeaning: 'sturdy / strong / durable (of objects)',
    zh: '丈夫',
    zhPinyin: 'zhàngfu',
    zhMeaning: 'husband',
    danger: 'LOW',
    note: 'A sturdy bag in Japanese: 丈夫なバッグ. In Chinese, 丈夫 = husband.'
  },
  {
    jp: '野菜',
    jpReading: 'yasai',
    jpMeaning: 'vegetables',
    zh: '野菜',
    zhPinyin: 'yěcài',
    zhMeaning: 'wild/foraged vegetables (plants from nature)',
    danger: 'LOW',
    note: 'Japanese 野菜 = everyday vegetables. Chinese 野菜 = vegetables that grow wild in the field (foraged food).'
  },
  {
    jp: '愛人',
    jpReading: 'aijin',
    jpMeaning: 'lover / mistress',
    zh: '爱人',
    zhPinyin: 'àirén',
    zhMeaning: 'spouse / beloved partner (gender neutral)',
    danger: 'HIGH',
    note: 'Calling your spouse 愛人 in Japan sounds like you\'re admitting to an affair. In China, it\'s the wholesome word for spouse!'
  },
];

export const trueCoegnates = [
  { compound:'電話', jpReading:'denwa', zhPinyin:'diànhuà', meaning:'telephone', note:'"Den" ≈ "diàn" and "wa" ≈ "huà" — strikingly similar! A clear example of on\'yomi preserving Old Chinese pronunciation.' },
  { compound:'銀行', jpReading:'ginkō', zhPinyin:'yínháng', meaning:'bank', note:'"Gin" ≈ "yín" (silver), "kō" ≈ "háng" (business). Same meaning, recognizably related pronunciation.' },
  { compound:'地下鉄', jpReading:'chikatetsu', zhPinyin:'dìtiě', meaning:'subway / metro', note:'地下 (chika=underground) vs 地 (dì). 鉄 (tetsu=iron) vs 铁 (tiě). Same concept, same characters.' },
  { compound:'出口', jpReading:'deguchi', zhPinyin:'chūkǒu', meaning:'exit', note:'IDENTICAL characters and meaning! 出 (exit) + 口 (mouth/opening). Look for this sign anywhere in Asia.' },
  { compound:'入口', jpReading:'iriguchi', zhPinyin:'rùkǒu', meaning:'entrance', note:'IDENTICAL. 入 (enter) + 口 (opening).' },
  { compound:'終点', jpReading:'shūten', zhPinyin:'zhōngdiǎn', meaning:'terminal / end point', note:'Same characters 終/终 + 点. Very useful on trains.' },
  { compound:'警察', jpReading:'keisatsu', zhPinyin:'jǐngchá', meaning:'police', note:'IDENTICAL characters. "Kei" ≈ "jǐng", "satsu" ≈ "chá". Both mean police force.' },
  { compound:'大使館', jpReading:'taishikan', zhPinyin:'dàshǐguǎn', meaning:'embassy', note:'大使 (ambassador) + 館/馆 (building). Same in both! Very useful if you lose your passport.' },
  { compound:'図書館', jpReading:'toshokan', zhPinyin:'túshūguǎn', meaning:'library', note:'図/图書/书館/馆 — traditional vs simplified differ, but identical meaning and strikingly similar reading.' },
  { compound:'禁止', jpReading:'kinshi', zhPinyin:'jìnzhǐ', meaning:'prohibited', note:'Seen on signs everywhere. IDENTICAL. "Kin" ≈ "jìn", "shi" ≈ "zhǐ".' },
  { compound:'外国人', jpReading:'gaikokujin', zhPinyin:'wàiguórén', meaning:'foreigner', note:'外 (outside) + 国 (country) + 人 (person). Identical characters, identical meaning.' },
  { compound:'百貨店', jpReading:'hyakkaten', zhPinyin:'bǎihuòdiàn', meaning:'department store', note:'百 (100/many) + 貨/货 (goods) + 店 (shop). SAME compound!' },
  { compound:'乾杯', jpReading:'kanpai', zhPinyin:'gānbēi', meaning:'cheers!', note:'IDENTICAL. 乾/干 (dry) + 杯 (cup). "Bottoms up!" The exact same toast in both cultures.' },
  { compound:'牛肉', jpReading:'gyūniku', zhPinyin:'niúròu', meaning:'beef', note:'牛 (cow) + 肉 (meat). Identical characters, identical meaning.' },
  { compound:'学生', jpReading:'gakusei', zhPinyin:'xuéshēng', meaning:'student', note:'学/學 (study) + 生 (life/person). Same compound.' },
];

export const japaneseToChineseLoanwords = [
  { word:'电脑 (diànnǎo)', note:'Japanese coined 電脳 (electronic brain) for computer. China adopted it. Taiwan still uses it!' },
  { word:'经济 (jīngjì)', note:'Japanese coined 経済 (keizai) from Classical Chinese roots to translate "economy." China adopted the compound.' },
  { word:'社会 (shèhuì)', note:'Japanese coined 社会 (shakai) to translate "society." Returned to China as 社会.' },
  { word:'科学 (kēxué)', note:'Japanese coined 科学 (kagaku) to translate "science." Now used in both.' },
  { word:'哲学 (zhéxué)', note:'Japanese coined 哲学 (tetsugaku) to translate "philosophy." Adopted in China.' },
  { word:'革命 (gémìng)', note:'Japanese coined 革命 (kakumei) to translate "revolution." Returned to Chinese.' },
  { word:'共产主义 (gòngchǎn zhǔyì)', note:'Communism compound coined in Japanese (共産主義), adopted in Chinese.' },
  { word:'民主 (mínzhǔ)', note:'Japanese coined 民主 (minshu) to translate "democracy." Now in both.' },
  { word:'电话 (diànhuà)', note:'Japanese 電話 (denwa=telephone) possibly influenced Chinese 电话.' },
];

export const chineseToJapaneseLoanwords = [
  { word:'ラーメン (rāmen)', note:'From Chinese 拉面 (lāmiàn = pulled noodles). Now a Japanese cultural icon.' },
  { word:'餃子 (gyōza)', note:'From Chinese 饺子 (jiǎozi). Japanese gyoza are pan-fried; Chinese are usually boiled.' },
  { word:'チャーハン (chāhan)', note:'From Chinese 炒饭 (chǎofàn = fried rice). Same dish.' },
  { word:'チャーシュー (chāshū)', note:'From Chinese 叉烧 (chāshāo = BBQ pork).' },
  { word:'豆腐 (tōfu)', note:'From Chinese 豆腐 (dòufu). Now internationalised via Japan as "tofu".' },
  { word:'醤油 (shōyu)', note:'From Chinese 酱油 (jiàngyóu = soy sauce). Same characters.' },
];

export const grammarComparison = [
  {
    title: 'Word order',
    jp: 'Subject → Object → Verb (SOV)\n私は寿司を食べます。\n(I sushi eat.)',
    zh: 'Subject → Verb → Object (SVO)\n我吃寿司。\n(I eat sushi.)',
    note: 'Japanese verb always comes last. The biggest structural difference from Chinese.'
  },
  {
    title: 'Particles (は、が、を、に、で、へ)',
    jp: 'Japanese uses grammatical particles after nouns to mark their role.\n私は (I-TOPIC), 寿司を (sushi-OBJECT), 食べます (eat).',
    zh: 'Chinese has no particles. Word order and context mark roles.\n我 (I) 吃 (eat) 寿司 (sushi).',
    note: 'Particles take some getting used to but are very logical once learned. は marks the topic, が marks the subject, を marks the object, に marks direction/location, で marks the place of action, へ marks movement direction.'
  },
  {
    title: 'Politeness levels',
    jp: 'Extremely complex. Verb endings change based on context:\nます/ます (polite), plain form (casual), keigo (honorific/humble).',
    zh: 'Much simpler. Politeness is mostly vocabulary, not grammar.',
    note: 'For travelers: stick to ます/です endings (polite form) and you\'ll be fine everywhere.'
  },
  {
    title: 'Question formation',
    jp: 'Add か (ka) to end of statement:\n寿司が好きです。(I like sushi.) →\n寿司が好きですか？(Do you like sushi?)',
    zh: 'Add 吗 (ma) to end of statement:\n你喜欢寿司。→ 你喜欢寿司吗？',
    note: 'The structure is remarkably similar! Both languages form questions by adding a final particle. か ≈ 吗.'
  },
  {
    title: 'Negation',
    jp: 'Change verb ending: 食べます → 食べません\n(eat → don\'t eat)\nです → ではありません/じゃない',
    zh: 'Add 不/没 before verb: 吃 → 不吃\n(eat → don\'t eat)',
    note: 'Different approach: Japanese changes the verb ending, Chinese adds a negative word before.'
  },
  {
    title: 'Counting / measure words',
    jp: 'Japanese has many counters: 一冊 (isassatsu=1 book), 一枚 (ichimai=1 flat thing), 一匹 (ippiki=1 small animal)',
    zh: 'Chinese also uses measure words: 一本书 (yī běn shū=1 book), 一张纸 (yī zhāng zhǐ=1 paper), 一只猫 (yī zhī māo=1 cat)',
    note: 'Great news! Both languages use measure words/counters. Japanese ones are complex, but the concept is familiar to Mandarin speakers.'
  },
  {
    title: 'Topic vs Subject',
    jp: 'は (wa) marks the topic — what we\'re talking about.\nが (ga) marks the subject — who/what does the action.\n象は鼻が長い。\n(As for elephants, the nose is long.)',
    zh: 'No topic marker equivalent. Use context or "说到..." (speaking of...).',
    note: 'This は/が distinction is one of the most nuanced aspects of Japanese. For travelers: just use は for most things.'
  },
];

export const onYomiGuide = {
  intro: 'On\'yomi (音読み) are the Chinese-derived readings of kanji. They often sound similar to Mandarin, especially for literary/formal words. When you see a compound kanji word (two+ kanji together), the on\'yomi reading is usually used.',
  examples: [
    { kanji:'電話', jp:'den-wa', zh:'diàn-huà', note:'Very similar!' },
    { kanji:'銀行', jp:'gin-kō', zh:'yín-háng', note:'Gin ≈ yín (silver)' },
    { kanji:'経済', jp:'kei-zai', zh:'jīng-jì',  note:'Economy' },
    { kanji:'政治', jp:'sei-ji',  zh:'zhèng-zhì',note:'Politics' },
    { kanji:'音楽', jp:'on-gaku', zh:'yīn-yuè',  note:'Music' },
    { kanji:'学生', jp:'gak-sei', zh:'xué-shēng',note:'Student' },
    { kanji:'先生', jp:'sen-sei', zh:'xiān-sheng',note:'Teacher/Mr.' },
    { kanji:'地図', jp:'chi-zu',  zh:'dì-tú',    note:'Map' },
    { kanji:'時間', jp:'ji-kan',  zh:'shí-jiān', note:'Time' },
    { kanji:'新聞', jp:'shin-bun',zh:'xīn-wén',  note:'Newspaper/news' },
  ]
};
