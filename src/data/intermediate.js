// Intermediate sections. Each phrase can have an optional `examples` array.
// examples: [{ jp, romaji, en }]

export const intermediateSections = [
  {
    id: 'int-grammar',
    title: 'Grammar Patterns',
    icon: '📐',
    groups: [
      {
        title: 'て-form — The Swiss Army Knife of Japanese',
        note: 'The て-form is the single most important building block in Japanese. It connects clauses, forms requests, expresses ongoing action, and combines with dozens of helper verbs. て-form rules: verbs ending in -u/く→いて, -gu/ぐ→いで, -su/す→して, -tsu/つ,ru/る,u/う→って, -nu/ぬ,bu/ぶ,mu/む→んで. For る-verbs: drop る, add て.',
        phrases: [
          {
            jp:'〜てください',       romaji:'~te kudasai',
            en:'Please do ~ (polite request)',
            tip:'Attach to て-form. Universal polite command. 食べてください = Please eat.',
            examples:[
              { jp:'ここに名前を書いてください。', romaji:'Koko ni namae wo kaite kudasai.', en:'Please write your name here.' },
              { jp:'もう少しゆっくり話してください。', romaji:'Mōsukoshi yukkuri hanashite kudasai.', en:'Please speak a little more slowly.' },
            ]
          },
          {
            jp:'〜ている',            romaji:'~te iru',
            en:'Ongoing action / current state',
            tip:'Verbs of action → currently doing. Verbs of change → resulting state. 食べている = eating now. 結婚している = is married (state of having married).',
            examples:[
              { jp:'今、日本語を勉強しています。', romaji:'Ima, Nihongo wo benkyō shite imasu.', en:'I\'m studying Japanese now.' },
              { jp:'彼女は東京に住んでいます。', romaji:'Kanojo wa Tōkyō ni sunde imasu.', en:'She lives in Tokyo.' },
            ]
          },
          {
            jp:'〜てみる',            romaji:'~te miru',
            en:'Try doing ~ (give it a shot)',
            tip:'みる = to see (what happens). Implies tentative first attempt.',
            examples:[
              { jp:'この料理を食べてみてください。', romaji:'Kono ryōri wo tabete mite kudasai.', en:'Please try eating this dish.' },
              { jp:'日本語で話してみます。', romaji:'Nihongo de hanashite mimasu.', en:'I\'ll try speaking in Japanese.' },
            ],
            zh:'试着做～', pinyin:'shìzhe zuò ~', zhNote:'Similar to 试着 in Chinese — both mean "try doing as an experiment".'
          },
          {
            jp:'〜てから',            romaji:'~te kara',
            en:'After doing ~ (then...)',
            tip:'Strict sequence: first A, THEN B. 食べてから = after eating.',
            examples:[
              { jp:'シャワーを浴びてから寝ます。', romaji:'Shawā wo abite kara nemasu.', en:'I\'ll sleep after taking a shower.' },
              { jp:'確認してから連絡します。', romaji:'Kakunin shite kara renraku shimasu.', en:'I\'ll contact you after checking.' },
            ],
            zh:'做～之后', pinyin:'zuò ~ zhīhòu', zhNote:'Chinese 做了～之后 (after doing~) — same concept, Japanese uses て-form + から.'
          },
          {
            jp:'〜てしまう',          romaji:'~te shimau',
            en:'Ended up doing ~ / unfortunately did ~',
            tip:'Two feelings: (1) regret — did something you didn\'t intend. (2) completion — got it all done. Context decides. Casual: ~ちゃう (〜てしまう → 〜ちゃう).',
            examples:[
              { jp:'財布を忘れてしまいました。', romaji:'Saifu wo wasurete shimaimashita.', en:'I ended up forgetting my wallet. (regret)' },
              { jp:'もうケーキを全部食べちゃった。', romaji:'Mō kēki wo zenbu tabechatta.', en:'I already ate all the cake. (oops / done)' },
            ]
          },
          {
            jp:'〜てもいい',          romaji:'~te mo ii',
            en:'It\'s OK to ~ / May I ~ ?',
            tip:'〜てもいいですか？ = polite "may I?". Answer: いいですよ (yes go ahead) / ちょっと… (subtle no).',
            examples:[
              { jp:'写真を撮ってもいいですか？', romaji:'Shashin wo totte mo ii desu ka?', en:'May I take a photo?' },
              { jp:'ここに座ってもいいですか？', romaji:'Koko ni suwatte mo ii desu ka?', en:'Is it OK if I sit here?' },
            ],
            zh:'可以做～吗？', pinyin:'kěyǐ zuò ~ ma?', zhNote:'Functionally identical to 可以～吗？in Chinese. Very direct parallel.'
          },
          {
            jp:'〜てはいけない',       romaji:'~te wa ikenai',
            en:'Must not ~ / You cannot ~',
            tip:'Prohibition. Polite: 〜てはいけません. Casual: 〜ちゃだめ. Signs use 禁止 (kinshi=forbidden).',
            examples:[
              { jp:'ここで写真を撮ってはいけません。', romaji:'Koko de shashin wo totte wa ikemasen.', en:'You must not take photos here.' },
              { jp:'嘘をついてはだめだよ。', romaji:'Uso wo tsuite wa dame da yo.', en:'You can\'t tell lies.' },
            ],
            zh:'不可以做～', pinyin:'bù kěyǐ zuò ~', zhNote:'Parallel to 不可以 in Chinese. Both mark prohibition.'
          },
          {
            jp:'〜てあげる / もらう / くれる',  romaji:'~te ageru / morau / kureru',
            en:'Giving and receiving actions',
            tip:'あげる = I/we give (to others). もらう = I receive (from others). くれる = they give (to me). Direction of the action determines which verb.',
            examples:[
              { jp:'友達に日本語を教えてあげました。', romaji:'Tomodachi ni Nihongo wo oshiete agemashita.', en:'I taught Japanese to my friend (as a favour).' },
              { jp:'先生に漢字を説明してもらいました。', romaji:'Sensei ni kanji wo setsumei shite moraimashita.', en:'I had the teacher explain the kanji (to me).' },
            ]
          },
        ]
      },
      {
        title: 'Wanting & Ability',
        phrases: [
          {
            jp:'〜たい',              romaji:'~tai',
            en:'Want to ~ (speaker\'s desire)',
            tip:'Attach to verb stem. 食べたい = want to eat. 行きたい = want to go. Only for your OWN desires — don\'t use for others (use 〜たがっている for third person).',
            examples:[
              { jp:'日本で寿司を食べたいです。', romaji:'Nihon de sushi wo tabetai desu.', en:'I want to eat sushi in Japan.' },
              { jp:'富士山に登りたいと思っています。', romaji:'Fujisan ni noboritai to omotte imasu.', en:'I\'ve been thinking I want to climb Mt. Fuji.' },
            ],
            zh:'想做～', pinyin:'xiǎng zuò ~', zhNote:'想 (xiǎng) in Chinese = たい in Japanese. Both express desire. Chinese 想 also means "to think".'
          },
          {
            jp:'〜ことができる',       romaji:'~koto ga dekiru',
            en:'Be able to ~ / Can ~',
            tip:'Formal ability expression. Casual: potential form (食べられる、行ける). できる alone = can do / it\'s possible.',
            examples:[
              { jp:'日本語を少し話すことができます。', romaji:'Nihongo wo sukoshi hanasu koto ga dekimasu.', en:'I am able to speak a little Japanese.' },
              { jp:'この漢字は読むことができません。', romaji:'Kono kanji wa yomu koto ga dekimasen.', en:'I can\'t read this kanji.' },
            ],
            zh:'能做～ / 会做～', pinyin:'néng zuò ~ / huì zuò ~', zhNote:'能 (can physically), 会 (can by skill) in Chinese map roughly to できる in Japanese.'
          },
          {
            jp:'〜られる（potential）', romaji:'~rareru',
            en:'Can ~ (potential form)',
            tip:'For る-verbs: 食べる→食べられる. For う-verbs: 行く→行ける, 飲む→飲める, 話す→話せる. Common colloquial: drop ら (食べれる — "ra-nuki" form).',
            examples:[
              { jp:'生ものが食べられますか？', romaji:'Nanamono ga taberaremasu ka?', en:'Can you eat raw food?' },
              { jp:'一人で行けますか？', romaji:'Hitori de ikemasu ka?', en:'Can you go by yourself?' },
            ]
          },
          {
            jp:'〜たことがある',       romaji:'~ta koto ga aru',
            en:'Have done ~ before (experience)',
            tip:'Past experience. 〜たことがない = have never done. Very common conversation topic.',
            examples:[
              { jp:'日本に来たことがありますか？', romaji:'Nihon ni kita koto ga arimasu ka?', en:'Have you ever been to Japan?' },
              { jp:'富士山に登ったことがありません。', romaji:'Fujisan ni nobotta koto ga arimasen.', en:'I\'ve never climbed Mt. Fuji.' },
            ],
            zh:'曾经做过～', pinyin:'céngjīng zuò guò ~', zhNote:'The 过 (guò) particle in Chinese marks experience. 〜たことがある is the direct Japanese equivalent.'
          },
        ]
      },
      {
        title: 'Obligation & Permission',
        phrases: [
          {
            jp:'〜なければならない',   romaji:'~nakereba naranai',
            en:'Must ~ / Have to ~',
            tip:'Formal obligation. Casual version: 〜ないといけない or 〜なきゃ. 行かなければならない = must go.',
            examples:[
              { jp:'明日までにレポートを出さなければなりません。', romaji:'Ashita made ni repōto wo dasanakereba narimasen.', en:'I have to submit the report by tomorrow.' },
              { jp:'薬を飲まなきゃ。', romaji:'Kusuri wo nomanakya.', en:'Gotta take my medicine. (casual)' },
            ]
          },
          {
            jp:'〜べき',              romaji:'~beki',
            en:'Should ~ / Ought to ~',
            tip:'Moral or logical obligation. Stronger than "better to". 〜べきではない = should not.',
            examples:[
              { jp:'もっと野菜を食べるべきです。', romaji:'Motto yasai wo taberu beki desu.', en:'You should eat more vegetables.' },
              { jp:'嘘をつくべきではありません。', romaji:'Uso wo tsuku beki dewa arimasen.', en:'You should not lie.' },
            ]
          },
          {
            jp:'〜たほうがいい',       romaji:'~ta hōga ii',
            en:'Had better ~ / It\'s better to ~',
            tip:'Advice or recommendation. Slightly softer than べき. 〜ないほうがいい = better not to.',
            examples:[
              { jp:'早く病院に行ったほうがいいですよ。', romaji:'Hayaku byōin ni itta hōga ii desu yo.', en:'You\'d better go to the hospital soon.' },
              { jp:'あそこには行かないほうがいいと思います。', romaji:'Asoko ni wa ikanai hōga ii to omoimasu.', en:'I think it\'s better not to go there.' },
            ]
          },
          {
            jp:'〜なくてもいい',       romaji:'~nakute mo ii',
            en:'Don\'t have to ~ / It\'s fine not to ~',
            tip:'Removing obligation. Useful for reassuring someone.',
            examples:[
              { jp:'急がなくてもいいですよ。', romaji:'Isoganakute mo ii desu yo.', en:'You don\'t have to rush.' },
              { jp:'全部食べなくてもいいです。', romaji:'Zenbu tabenakute mo ii desu.', en:'You don\'t have to eat everything.' },
            ]
          },
        ]
      },
      {
        title: 'Probability & Conjecture',
        phrases: [
          {
            jp:'〜かもしれない',       romaji:'~kamo shirenai',
            en:'Might ~ / Maybe ~ (50/50)',
            tip:'Equal chance either way. Polite: 〜かもしれません. Casual: 〜かも.',
            examples:[
              { jp:'明日は雨が降るかもしれません。', romaji:'Ashita wa ame ga furu kamo shiremasen.', en:'It might rain tomorrow.' },
              { jp:'彼は知っているかも。', romaji:'Kare wa shitte iru kamo.', en:'He might know. (casual)' },
            ],
            zh:'也许～ / 可能～', pinyin:'yěxǔ ~ / kěnéng ~', zhNote:'也许 / 可能 in Chinese. Japanese かもしれない is longer but same probabilistic sense.'
          },
          {
            jp:'〜でしょう / だろう',  romaji:'~deshō / darō',
            en:'Probably ~ / I expect ~',
            tip:'Higher confidence than かもしれない. Also used as "right?" confirmation tag at end of sentence.',
            examples:[
              { jp:'明日は晴れるでしょう。', romaji:'Ashita wa hareru deshō.', en:'It\'ll probably be sunny tomorrow.' },
              { jp:'それは難しいだろうね。', romaji:'Sore wa muzukashii darō ne.', en:'That\'s probably hard, right?' },
            ]
          },
          {
            jp:'〜と思います',         romaji:'~to omoimasu',
            en:'I think ~ / I believe ~',
            tip:'Softens assertions. Japanese communication values expressing things as opinions rather than facts. Use constantly.',
            examples:[
              { jp:'あの映画は面白いと思います。', romaji:'Ano eiga wa omoshiroi to omoimasu.', en:'I think that movie is interesting.' },
              { jp:'彼は来ないと思います。', romaji:'Kare wa konai to omoimasu.', en:'I don\'t think he\'ll come.' },
            ],
            zh:'我认为～ / 我觉得～', pinyin:'wǒ rènwéi ~ / wǒ juéde ~', zhNote:'Direct parallel to 我觉得 in Chinese — both soften assertions by framing them as personal opinion.'
          },
          {
            jp:'〜はずです',           romaji:'~hazu desu',
            en:'Should be ~ / Expected to be ~',
            tip:'Based on evidence or logic, something should be the case. Implies expectation that may or may not be met.',
            examples:[
              { jp:'彼は今頃着いているはずです。', romaji:'Kare wa ima goro tsuite iru hazu desu.', en:'He should have arrived by now.' },
              { jp:'ここに鍵があるはずなんですが…', romaji:'Koko ni kagi ga aru hazu nan desu ga…', en:'The key should be here... (but it\'s not)' },
            ]
          },
        ]
      },
      {
        title: 'Conditionals',
        phrases: [
          {
            jp:'〜たら',              romaji:'~tara',
            en:'If/when ~ (after completing)',
            tip:'Most versatile conditional. Use for: if (hypothetical), when (future event happens), after (sequence). 食べたら = if/when you\'ve eaten.',
            examples:[
              { jp:'東京に着いたら、連絡してください。', romaji:'Tōkyō ni tsuitara, renraku shite kudasai.', en:'When you arrive in Tokyo, please contact me.' },
              { jp:'お金があったら、旅行に行きたい。', romaji:'Okane ga attara, ryokō ni ikitai.', en:'If I had money, I\'d want to travel.' },
            ]
          },
          {
            jp:'〜ば',                romaji:'~ba',
            en:'If ~ (hypothetical condition)',
            tip:'More formal/literary than たら. Implies "if this condition holds, naturally that follows." 食べれば = if you eat.',
            examples:[
              { jp:'毎日練習すれば、上手になります。', romaji:'Mainichi renshū sureba, jōzu ni narimasu.', en:'If you practice every day, you\'ll get better.' },
              { jp:'もう少し早ければよかった。', romaji:'Mōsukoshi hayakereba yokatta.', en:'If only it had been a little sooner.' },
            ]
          },
          {
            jp:'〜と',                romaji:'~to',
            en:'When/if ~ (natural consequence)',
            tip:'Automatic or habitual result. If A, then B always follows. Cannot use for deliberate actions or requests.',
            examples:[
              { jp:'右に曲がると、駅があります。', romaji:'Migi ni magaru to, eki ga arimasu.', en:'If you turn right, there\'s a station.' },
              { jp:'春になると、桜が咲きます。', romaji:'Haru ni naru to, sakura ga sakimasu.', en:'When spring comes, the cherry blossoms bloom.' },
            ]
          },
          {
            jp:'〜なら',              romaji:'~nara',
            en:'If ~ is the case / Speaking of ~',
            tip:'Used when responding to given information. "If that\'s what you\'re saying / Given that context." Often picks up on something just mentioned.',
            examples:[
              { jp:'京都に行くなら、金閣寺に行ったほうがいいですよ。', romaji:'Kyōto ni iku nara, Kinkakuji ni itta hōga ii desu yo.', en:'If you\'re going to Kyoto, you should go to Kinkakuji.' },
              { jp:'日本語が好きなら、もっと勉強したらどうですか？', romaji:'Nihongo ga suki nara, motto benkyō shitara dō desu ka?', en:'If you like Japanese, why not study more?' },
            ]
          },
        ]
      },
      {
        title: 'Time Relationships',
        phrases: [
          {
            jp:'〜ながら',            romaji:'~nagara',
            en:'While doing ~ (simultaneous actions)',
            tip:'Subject must be the same for both actions. 音楽を聴きながら勉強する = study while listening to music.',
            examples:[
              { jp:'音楽を聴きながら、勉強しています。', romaji:'Ongaku wo kikinagara, benkyō shite imasu.', en:'I\'m studying while listening to music.' },
              { jp:'歩きながらスマホを見るのは危ないです。', romaji:'Arukinagara sumaho wo miru no wa abunai desu.', en:'It\'s dangerous to look at your phone while walking.' },
            ],
            zh:'一边～一边～', pinyin:'yībiān ~ yībiān ~', zhNote:'一边A一边B in Chinese = AながらB in Japanese. Same simultaneous action pattern.'
          },
          {
            jp:'〜まえに',            romaji:'~mae ni',
            en:'Before doing ~',
            tip:'Use dictionary form + まえに. 食べるまえに = before eating. (Different from 〜てから which is "after".)',
            examples:[
              { jp:'寝るまえに、歯を磨いてください。', romaji:'Neru mae ni, ha wo migaite kudasai.', en:'Please brush your teeth before sleeping.' },
              { jp:'日本に来るまえに、少し日本語を勉強しました。', romaji:'Nihon ni kuru mae ni, sukoshi Nihongo wo benkyō shimashita.', en:'I studied a little Japanese before coming to Japan.' },
            ],
            zh:'做～之前', pinyin:'zuò ~ zhīqián', zhNote:'Direct parallel to 做～之前 in Chinese.'
          },
          {
            jp:'〜あとで',            romaji:'~ato de',
            en:'After doing ~',
            tip:'Use past form + あとで. 食べたあとで = after eating. Implies a gap of time between the two actions.',
            examples:[
              { jp:'仕事が終わったあとで、飲みに行きましょう。', romaji:'Shigoto ga owatta ato de, nomi ni ikimashō.', en:'Let\'s go drinking after work finishes.' },
              { jp:'確認したあとで、返事します。', romaji:'Kakunin shita ato de, henji shimasu.', en:'I\'ll reply after I\'ve confirmed.' },
            ]
          },
        ]
      },
      {
        title: 'Change & Experience',
        phrases: [
          {
            jp:'〜になる',            romaji:'~ni naru',
            en:'To become ~',
            tip:'For nouns and な-adjectives: 先生になる = become a teacher. For い-adjectives: change -い to -く + なる: 暑くなる = become hot.',
            examples:[
              { jp:'日本語が上手になりたいです。', romaji:'Nihongo ga jōzu ni naritai desu.', en:'I want to become good at Japanese.' },
              { jp:'最近、天気が暖かくなってきました。', romaji:'Saikin, tenki ga atatakaku natte kimashita.', en:'The weather has been getting warmer lately.' },
            ],
            zh:'变成～ / 成为～', pinyin:'biànchéng ~ / chéngwéi ~', zhNote:'Direct parallel to 变成 in Chinese. 日语变得好 = 日本語が上手になる.'
          },
          {
            jp:'〜ようになる',         romaji:'~yō ni naru',
            en:'Come to ~ / Reach the point where ~',
            tip:'Gradual change in ability or habit. 食べられるようになる = come to be able to eat (couldn\'t before, now can).',
            examples:[
              { jp:'日本に来て、箸が使えるようになりました。', romaji:'Nihon ni kite, hashi ga tsukaeru yō ni narimashita.', en:'Since coming to Japan, I\'ve become able to use chopsticks.' },
              { jp:'毎日練習して、泳げるようになった。', romaji:'Mainichi renshū shite, oyogeru yō ni natta.', en:'By practicing every day, I came to be able to swim.' },
            ]
          },
          {
            jp:'〜ことにする',         romaji:'~koto ni suru',
            en:'Decide to ~ / Make it a rule to ~',
            tip:'Expresses a deliberate decision or self-rule. 〜ことにしている = have decided to (ongoing habit).',
            examples:[
              { jp:'毎朝、日本語を勉強することにしました。', romaji:'Maiasa, Nihongo wo benkyō suru koto ni shimashita.', en:'I\'ve decided to study Japanese every morning.' },
              { jp:'お酒は飲まないことにしています。', romaji:'Osake wa nomanai koto ni shite imasu.', en:'I\'ve made it a rule not to drink alcohol.' },
            ]
          },
        ]
      },
      {
        title: 'Comparison',
        phrases: [
          {
            jp:'AよりBの方が〜',       romaji:'A yori B no hō ga ~',
            en:'B is more ~ than A',
            tip:'Word order matters: the INFERIOR item comes after より, the BETTER item before の方が.',
            examples:[
              { jp:'バスより電車の方が速いです。', romaji:'Basu yori densha no hō ga hayai desu.', en:'The train is faster than the bus.' },
              { jp:'昨日より今日の方が暑いですね。', romaji:'Kinō yori kyō no hō ga atsui desu ne.', en:'It\'s hotter today than yesterday, isn\'t it.' },
            ],
            zh:'B比A更～', pinyin:'B bǐ A gèng ~', zhNote:'Chinese 比 comparison (B比A更好) and Japanese (AよりBの方が良い) reverse the order of compared items!'
          },
          {
            jp:'〜の中で一番〜',        romaji:'~no naka de ichiban ~',
            en:'The most ~ among ~',
            tip:'一番 = number one. Can compare things, time periods, or places.',
            examples:[
              { jp:'日本料理の中で、寿司が一番好きです。', romaji:'Nihon ryōri no naka de, sushi ga ichiban suki desu.', en:'Among Japanese food, I like sushi the most.' },
              { jp:'今まで食べた中で一番おいしかった！', romaji:'Ima made tabeta naka de ichiban oishikatta!', en:'That\'s the most delicious thing I\'ve ever eaten!' },
            ],
            zh:'在～中最～', pinyin:'zài ~ zhōng zuì ~', zhNote:'在～中最～ in Chinese. Same structure: scope + superlative. 一番 ≈ 最.'
          },
          {
            jp:'〜と同じくらい',        romaji:'~to onaji kurai',
            en:'About as ~ as ~',
            tip:'Expressing similarity of degree.',
            examples:[
              { jp:'東京は上海と同じくらい大きいです。', romaji:'Tōkyō wa Shanhai to onaji kurai ōkii desu.', en:'Tokyo is about as big as Shanghai.' },
            ]
          },
        ]
      },
      {
        title: 'Passive Voice — 〜られる',
        note: '受身形 (ukemi-kei). For う-verbs: 行く→行かれる. For る-verbs: 食べる→食べられる (same form as potential — context decides). Two flavors: direct passive (subject receives the action) and suffering passive (subject is inconvenienced by another\'s action).',
        phrases: [
          {
            jp:'〜られる（直接受身）', romaji:'~rareru (direct passive)',
            en:'To be done ~ / To have ~ done to one',
            tip:'Direct passive: agent marked with に. 先生に褒められた = was praised by the teacher.',
            examples:[
              { jp:'先生に褒められました。', romaji:'Sensei ni homeraremashita.', en:'I was praised by the teacher.' },
              { jp:'財布を盗まれました。', romaji:'Saifu wo nusumaremashita.', en:'My wallet was stolen.' },
            ]
          },
          {
            jp:'〜に〜られる（迷惑受身）', romaji:'~ni ~rareru (suffering passive)',
            en:'Be adversely affected by someone\'s action',
            tip:'Inconvenienced by someone else\'s act, even if not directed at you. Expresses frustration.',
            examples:[
              { jp:'友達に来られて、勉強できなかった。', romaji:'Tomodachi ni korarete, benkyō dekinakatta.', en:'A friend showed up on me and I couldn\'t study.' },
              { jp:'雨に降られてびしょびしょになった。', romaji:'Ame ni furarete bishobisho ni natta.', en:'I got rained on and was soaked.' },
            ]
          },
          {
            jp:'〜によって', romaji:'~ni yotte',
            en:'By ~ / Depending on ~ (formal passive agent)',
            tip:'Formal written marker for the doer in passive sentences. Also "depending on the person/case".',
            examples:[
              { jp:'この法律は政府によって制定されました。', romaji:'Kono hōritsu wa seifu ni yotte seitei saremashita.', en:'This law was established by the government.' },
              { jp:'人によって意見が違います。', romaji:'Hito ni yotte iken ga chigaimasu.', en:'Opinions differ depending on the person.' },
            ]
          },
        ]
      },
      {
        title: 'Causative — 〜させる',
        note: '使役形 (shieki-kei). For う-verbs: 行く→行かせる. For る-verbs: 食べる→食べさせる. Makes or lets someone do something. を particle → making (authority). に particle → letting (permission).',
        phrases: [
          {
            jp:'〜させる', romaji:'~saseru',
            en:'Make/let someone do ~',
            tip:'子供に野菜を食べさせる = make the child eat vegetables. 先に帰らせてください = please let me go home first.',
            examples:[
              { jp:'子供に野菜を食べさせました。', romaji:'Kodomo ni yasai wo tabesasemashita.', en:'I made the child eat vegetables.' },
              { jp:'今日は早く帰らせてください。', romaji:'Kyō wa hayaku kaerasete kudasai.', en:'Please let me go home early today.' },
            ]
          },
          {
            jp:'〜させてもらう', romaji:'~sasete morau',
            en:'Allow oneself to ~ / Go ahead and ~ (humble permission)',
            tip:'Humbly seeking permission to act. Very natural in formal and semi-formal speech.',
            examples:[
              { jp:'では、先に失礼させてもらいます。', romaji:'Dewa, saki ni shitsurei sasete moraimasu.', en:'Well then, please allow me to excuse myself first.' },
            ]
          },
          {
            jp:'〜させられる（使役受身）', romaji:'~saserareru (causative-passive)',
            en:'Be forced/made to do ~ (against one\'s will)',
            tip:'Causative + passive combined. Implies reluctant compulsion. 残業させられる = I\'m made to work overtime.',
            examples:[
              { jp:'上司に毎日残業させられています。', romaji:'Jōshi ni mainichi zangyō saserarete imasu.', en:'My boss makes me work overtime every day.' },
              { jp:'子供の頃、ピアノを練習させられました。', romaji:'Kodomo no koro, piano wo renshū saseraremashita.', en:'I was made to practice piano as a child.' },
            ]
          },
        ]
      },
      {
        title: 'Reason Expressions — から / ので / のに / くせに',
        note: 'Four ways to express reason or contrast. から = casual subjective reason. ので = polite objective reason. のに = unexpected/frustrating contrast. くせに = accusatory despite.',
        phrases: [
          {
            jp:'〜から（理由）', romaji:'~kara (reason)',
            en:'Because ~ (casual, subjective)',
            tip:'Most common spoken reason marker. Slightly assertive — use in casual contexts. Follows plain or polite form.',
            examples:[
              { jp:'疲れているから、早く寝ます。', romaji:'Tsukarete iru kara, hayaku nemasu.', en:'Because I\'m tired, I\'ll go to bed early.' },
            ],
            zh:'因为～', pinyin:'yīnwèi ~', zhNote:'Direct parallel to 因为 in Chinese.'
          },
          {
            jp:'〜ので（理由）', romaji:'~node (reason)',
            en:'Because ~ (polite, objective)',
            tip:'Softer and more polite than から. Presents reason as an objective fact. Preferred in requests, apologies, and formal speech.',
            examples:[
              { jp:'体調が悪いので、今日は休ませてください。', romaji:'Taichō ga warui node, kyō wa yasumasete kudasai.', en:'Because I\'m not well, please let me take today off.' },
              { jp:'電車が遅れたので、遅刻しました。', romaji:'Densha ga okureta node, chikoku shimashita.', en:'Because the train was delayed, I was late.' },
            ]
          },
          {
            jp:'〜のに（逆接）', romaji:'~noni (unexpected contrast)',
            en:'Even though ~ / Despite ~ (contrary to expectation)',
            tip:'Result is contrary to expectation — often implies frustration or regret. せっかく〜のに = went to all that trouble and yet...',
            examples:[
              { jp:'せっかく作ったのに、食べてくれなかった。', romaji:'Sekkaku tsukutta noni, tabete kurenakatta.', en:'Even though I went to the trouble of making it, they didn\'t eat it.' },
              { jp:'何時間も練習したのに、うまくならない。', romaji:'Nanjikan mo renshū shita noni, umaku naranai.', en:'Even though I practiced for hours, I\'m not getting better.' },
            ],
            zh:'明明～却～', pinyin:'míngmíng ~ què ~'
          },
          {
            jp:'〜くせに', romaji:'~kuse ni',
            en:'Despite ~ / Even though ~ (accusatory)',
            tip:'Critical/blaming tone — stronger than のに. Implies the subject should know better. Never say about yourself.',
            examples:[
              { jp:'知っているくせに、教えてくれなかった。', romaji:'Shitte iru kuse ni, oshiete kurenakatta.', en:'Even though you knew, you didn\'t tell me.' },
            ]
          },
        ]
      },
      {
        title: 'Hearsay & Evidence — そう / らしい / よう / みたい',
        note: 'Four ways to say something seems or appears true. Your relationship to the evidence determines which to use.',
        phrases: [
          {
            jp:'〜そう（外見）', romaji:'~sō (appearance)',
            en:'Looks like ~ / About to ~ (visual inference)',
            tip:'Based on direct visual evidence. Attaches to い-adj stem or verb stem. おいしそう = looks delicious. 雨が降りそう = looks like rain.',
            examples:[
              { jp:'このケーキ、おいしそう！', romaji:'Kono kēki, oishisō!', en:'This cake looks delicious!' },
              { jp:'雨が降りそうですね。', romaji:'Ame ga furisō desu ne.', en:'It looks like it\'s going to rain.' },
            ],
            zh:'看起来～', pinyin:'kàn qǐlái ~'
          },
          {
            jp:'〜そうです（伝聞）', romaji:'~sō desu (hearsay)',
            en:'I heard that ~ / Apparently ~ (from someone)',
            tip:'Reporting what you heard. Attaches to plain form. 明日は休みだそうです = I heard tomorrow is a holiday.',
            examples:[
              { jp:'明日は休みだそうです。', romaji:'Ashita wa yasumi da sō desu.', en:'I heard that tomorrow is a holiday.' },
              { jp:'田中さんは来ないそうです。', romaji:'Tanaka-san wa konai sō desu.', en:'I heard Tanaka-san isn\'t coming.' },
            ],
            zh:'听说～', pinyin:'tīng shuō ~', zhNote:'听说～ is the direct Chinese equivalent.'
          },
          {
            jp:'〜らしい', romaji:'~rashii',
            en:'Apparently ~ / Seems like ~ (indirect evidence)',
            tip:'Based on rumour, news, or inference. More confident than かもしれない. Also as suffix: 男らしい = manly, 子供らしい = childlike.',
            examples:[
              { jp:'彼は海外に引っ越したらしい。', romaji:'Kare wa kaigai ni hikkoshita rashii.', en:'Apparently he moved abroad.' },
              { jp:'この店はおいしいらしいよ。', romaji:'Kono mise wa oishii rashii yo.', en:'Apparently this place is good.' },
            ],
            zh:'据说～ / 好像～', pinyin:'jùshuō ~ / hǎoxiàng ~'
          },
          {
            jp:'〜ようです / 〜みたいです', romaji:'~yō desu / ~mitai desu',
            en:'It seems ~ / It appears ~ (logical inference)',
            tip:'Your own reasoning from observed evidence. ようです = formal. みたいです = casual.',
            examples:[
              { jp:'彼は忙しいようです。', romaji:'Kare wa isogashii yō desu.', en:'It seems he\'s busy. (formal)' },
              { jp:'財布を落としたみたい。', romaji:'Saifu wo otoshita mitai.', en:'Seems like I dropped my wallet. (casual)' },
            ],
            zh:'好像～ / 似乎～', pinyin:'hǎoxiàng ~ / sìhū ~'
          },
        ]
      },
      {
        title: 'Quotation & Reported Speech',
        phrases: [
          {
            jp:'〜と言っていました', romaji:'~to itte imashita',
            en:'(Someone) was saying that ~ / said that ~',
            tip:'Reporting what someone said. Plain form + と言っていました. Casual shortcut: 〜って.',
            examples:[
              { jp:'田中さんは明日来ると言っていました。', romaji:'Tanaka-san wa ashita kuru to itte imashita.', en:'Tanaka-san was saying she\'s coming tomorrow.' },
              { jp:'先生が試験は難しいって言ってたよ。', romaji:'Sensei ga shiken wa muzukashii tte itteta yo.', en:'The teacher said the exam will be hard. (casual)' },
            ],
            zh:'说～', pinyin:'shuō ~'
          },
          {
            jp:'〜と聞きました', romaji:'~to kikimashita',
            en:'I heard that ~ / I was told that ~',
            tip:'Reporting something told to you directly. Slightly more formal than 〜そうです.',
            examples:[
              { jp:'来月、新しいお店がオープンすると聞きました。', romaji:'Raigetsu, atarashii omise ga ōpun suru to kikimashita.', en:'I heard a new shop is opening next month.' },
            ]
          },
          {
            jp:'〜って（casual quote）', romaji:'~tte',
            en:'~ (casual quotation marker)',
            tip:'Casual version of と. 〜って言ってた = was saying that ~. これって何？ = what do you call this?',
            examples:[
              { jp:'彼氏ができたって聞いたよ。', romaji:'Kareshi ga dekita tte kiita yo.', en:'I heard you got a boyfriend.' },
              { jp:'これ、何て言うの？', romaji:'Kore, nan te iu no?', en:'What do you call this?' },
            ]
          },
        ]
      },
      {
        title: 'Nominalizers — こと & の',
        note: 'Nominalizers turn verbs into nouns. こと = abstract/formal, used in set expressions. の = concrete/experiential, used for perceptions and direct descriptions.',
        phrases: [
          {
            jp:'〜ことが好き / 大切', romaji:'~koto ga suki / taisetsu',
            en:'Like doing ~ / ~ is important',
            tip:'こと turns a verb into a gerund-noun. 料理することが好き = I like cooking.',
            examples:[
              { jp:'料理をすることが好きです。', romaji:'Ryōri wo suru koto ga suki desu.', en:'I like cooking.' },
              { jp:'毎日練習することが大切です。', romaji:'Mainichi renshū suru koto ga taisetsu desu.', en:'Practicing every day is important.' },
            ],
            zh:'喜欢做～ / ～很重要', pinyin:'xǐhuān zuò ~ / ~ hěn zhōngyào'
          },
          {
            jp:'〜のが見える / 聞こえる', romaji:'~no ga mieru / kikoeru',
            en:'Can see / hear (someone) doing ~',
            tip:'の is used (not こと) for sensory perception. 子供が遊んでいるのが見える = I can see the children playing.',
            examples:[
              { jp:'子供が遊んでいるのが見えます。', romaji:'Kodomo ga asonde iru no ga miemasu.', en:'I can see the children playing.' },
              { jp:'隣から音楽が聞こえます。', romaji:'Tonari kara ongaku ga kikoemasu.', en:'I can hear music from next door.' },
            ]
          },
          {
            jp:'〜ことがある（習慣）', romaji:'~koto ga aru (habit)',
            en:'Sometimes ~ / There are times when ~',
            tip:'Present/plain form + ことがある = sometimes (habitual). Different from 〜たことがある (past experience).',
            examples:[
              { jp:'朝ご飯を食べないことがあります。', romaji:'Asagohan wo tabenai koto ga arimasu.', en:'There are times I don\'t eat breakfast.' },
            ]
          },
          {
            jp:'〜ことにする / 〜ことになる', romaji:'~koto ni suru / ~koto ni naru',
            en:'Decide to ~ (own choice) / It\'s been decided ~ (external)',
            tip:'〜ことにする = you decided. 〜ことになる = circumstances/others decided (not my choice).',
            examples:[
              { jp:'毎朝走ることにしました。', romaji:'Maiasa hashiru koto ni shimashita.', en:'I\'ve decided to run every morning.' },
              { jp:'大阪に転勤することになりました。', romaji:'Ōsaka ni tenkin suru koto ni narimashita.', en:'It\'s been decided I\'ll be transferred to Osaka.' },
            ]
          },
        ]
      },
      {
        title: 'Relative Clauses — Noun Modification',
        note: 'Japanese places ALL modifiers BEFORE the noun — the entire clause acts as an adjective. Use plain form only (not ます). No relative pronoun ("that/which/who") is needed: 私が昨日読んだ本 = "the book I read yesterday".',
        phrases: [
          {
            jp:'[plain-form clause] + noun',
            romaji:'[clause] + noun',
            en:'The [noun] that [clause describes]',
            tip:'The modifier wraps around the noun from the left. Any verb in plain form can modify: 食べた → 食べたもの (the thing I ate), 行く → 行く場所 (the place I\'m going).',
            examples:[
              { jp:'私が昨日読んだ本はとても面白かった。', romaji:'Watashi ga kinō yonda hon wa totemo omoshirokatta.', en:'The book I read yesterday was very interesting.' },
              { jp:'彼女が作ってくれた料理がおいしかった。', romaji:'Kanojo ga tsukutte kureta ryōri ga oishikatta.', en:'The food she made for me was delicious.' },
            ],
            zh:'我读的书 / 她做的菜', pinyin:'wǒ dú de shū', zhNote:'Chinese uses 的 after the clause: 我昨天读的书. Japanese uses plain verb + noun with no extra particle. Same left-to-right modifier logic.'
          },
          {
            jp:'〜の (noun substitute)',
            romaji:'~no',
            en:'The one that ~ / the thing that ~',
            tip:'の replaces a known noun to avoid repetition. 赤いのをください = please give me the red one.',
            examples:[
              { jp:'安いのはありますか？', romaji:'Yasui no wa arimasu ka?', en:'Do you have a cheaper one?' },
              { jp:'昨日話していたのはこれですか？', romaji:'Kinō hanashite ita no wa kore desu ka?', en:'Is this the thing you were talking about yesterday?' },
            ],
            zh:'～的（那个）', pinyin:'~ de (nà gè)', zhNote:'の as noun substitute = Chinese 的 used pronominally (便宜的、红的).'
          },
          {
            jp:'〜という＋noun',
            romaji:'~to iu + noun',
            en:'A [noun] called ~ / the [noun] known as ~',
            tip:'Defines or names something. 侘び寂びという概念 = "the concept called wabi-sabi". Also useful: 〜というのは = "as for the thing called ~".',
            examples:[
              { jp:'「木漏れ日」という言葉を知っていますか？', romaji:'「Komorebi」to iu kotoba wo shitte imasu ka?', en:'Do you know the word called "komorebi"?' },
              { jp:'田中という人から電話がありました。', romaji:'Tanaka to iu hito kara denwa ga arimashita.', en:'There was a call from a person called Tanaka.' },
            ],
            zh:'叫做～的 / 所谓～', pinyin:'jiàozuò ~ de / suǒwèi ~'
          },
        ]
      },
      {
        title: 'Counter Words (助数詞)',
        note: 'Japanese counts using specific classifiers based on an object\'s shape or category. The same number sounds completely different with different counters. Learning these unlocks natural everyday conversation.',
        phrases: [
          {
            jp:'〜枚 (mai) — flat things',
            romaji:'~mai',
            en:'Sheets / slices / tickets / flat objects',
            tip:'Paper, tickets, shirts, pizza slices, photos. 一枚 (ichimai)、二枚 (nimai)、三枚 (sanmai)…',
            examples:[
              { jp:'コピーを三枚取ってください。', romaji:'Kopī wo sanmai totte kudasai.', en:'Please make three copies.' },
              { jp:'切符を二枚買いました。', romaji:'Kippu wo nimai kaimashita.', en:'I bought two tickets.' },
            ]
          },
          {
            jp:'〜本 (hon) — long cylindrical things',
            romaji:'~hon',
            en:'Bottles / pens / roads / long objects',
            tip:'Bottles, pens, pencils, trees, rivers, movies, shots (of spirits). 一本 (ippon)、二本 (nihon)、三本 (sanbon)…',
            examples:[
              { jp:'ビールを二本ください。', romaji:'Bīru wo nihon kudasai.', en:'Two beers, please.' },
              { jp:'映画を何本見ましたか？', romaji:'Eiga wo nanbon mimashita ka?', en:'How many films did you watch?' },
            ]
          },
          {
            jp:'〜冊 (satsu) — bound volumes',
            romaji:'~satsu',
            en:'Books / notebooks / magazines',
            tip:'Any bound publication. 一冊 (issatsu)、二冊 (nisatsu)、三冊 (sansatsu)…',
            examples:[
              { jp:'この本を三冊注文しました。', romaji:'Kono hon wo sansatsu chūmon shimashita.', en:'I ordered three copies of this book.' },
            ]
          },
          {
            jp:'〜台 (dai) — machines & vehicles',
            romaji:'~dai',
            en:'Cars / computers / appliances',
            tip:'Cars, computers, TVs, printers, bicycles. 一台 (ichidai)、二台 (nidai)、三台 (sandai)…',
            examples:[
              { jp:'パソコンを一台買いたいんですが。', romaji:'Pasokon wo ichidai kaitai n desu ga.', en:'I\'d like to buy one computer.' },
            ]
          },
          {
            jp:'〜匹 / 〜頭 (hiki / tō) — animals',
            romaji:'~hiki / ~tō',
            en:'Small animals / large animals',
            tip:'匹 = small/medium animals (cats, dogs, fish). 頭 = large animals (horses, cows, elephants). 羽 (wa) = birds.',
            examples:[
              { jp:'猫を二匹飼っています。', romaji:'Neko wo nihiki katte imasu.', en:'I have two cats.' },
              { jp:'動物園に象が三頭います。', romaji:'Dōbutsuen ni zō ga santō imasu.', en:'There are three elephants at the zoo.' },
            ]
          },
          {
            jp:'〜人 (nin / ri) — people',
            romaji:'~nin / ~ri',
            en:'People counter',
            tip:'一人 (hitori) and 二人 (futari) are irregular. From three: 三人 (sannin), 四人 (yonin), 何人 (nannin).',
            examples:[
              { jp:'二人でご予約ですか？', romaji:'Futari de go-yoyaku desu ka?', en:'A reservation for two?' },
              { jp:'グループは何人ですか？', romaji:'Gurūpu wa nannin desu ka?', en:'How many people in your group?' },
            ],
            zh:'～人 / ～位', pinyin:'~ rén / ~ wèi'
          },
          {
            jp:'〜杯 (hai) — cups & bowls',
            romaji:'~hai',
            en:'Cups / glasses / bowls of liquid',
            tip:'一杯 (ippai)、二杯 (nihai)、三杯 (sanbai)… お腹いっぱい = stomach full (same いっぱい = full).',
            examples:[
              { jp:'コーヒーをもう一杯いただけますか？', romaji:'Kōhī wo mō ippai itadakemasu ka?', en:'Could I have one more cup of coffee?' },
            ],
            zh:'～杯', pinyin:'~ bēi'
          },
          {
            jp:'〜回 (kai) — number of times',
            romaji:'~kai',
            en:'Times / occurrences',
            tip:'一回 (ikkai) = once, 二回 (nikai) = twice, 三回 (sankai)… 何回も = many times.',
            examples:[
              { jp:'日本には三回来たことがあります。', romaji:'Nihon ni wa sankai kita koto ga arimasu.', en:'I\'ve been to Japan three times.' },
            ],
            zh:'～次 / ～回', pinyin:'~ cì / ~ huí'
          },
        ]
      },
      {
        title: '〜てくる / 〜ていく — Direction & Change over Time',
        note: 'Attach to て-form to express physical direction relative to the speaker, OR direction of change in time. くる = toward speaker/present moment. いく = away from speaker/into the future.',
        phrases: [
          {
            jp:'〜てくる（こちらへ向かう）',
            romaji:'~te kuru (toward here)',
            en:'Come and do ~ / Do ~ (heading this way)',
            tip:'Physical: do something while coming toward you. Temporal: a change has been developing UP TO NOW.',
            examples:[
              { jp:'雨が降ってきた。', romaji:'Ame ga futte kita.', en:'It\'s started raining. (rain arrived where I am)' },
              { jp:'日本語が少しずつわかるようになってきた。', romaji:'Nihongo ga sukoshi zutsu wakaru yō ni natte kita.', en:'My Japanese has been gradually improving (up to now).' },
            ]
          },
          {
            jp:'〜ていく（そちらへ向かう）',
            romaji:'~te iku (away from here)',
            en:'Go and do ~ / Do ~ (heading away)',
            tip:'Physical: do something while leaving. Temporal: a change will continue FROM NOW FORWARD into the future.',
            examples:[
              { jp:'これからもっと勉強していきます。', romaji:'Kore kara motto benkyō shite ikimasu.', en:'I\'ll continue studying more going forward.' },
              { jp:'気温がどんどん上がっていく。', romaji:'Kion ga dondon agatte iku.', en:'The temperature keeps rising (into the future).' },
            ]
          },
          {
            jp:'〜てきた（変化の累積）',
            romaji:'~te kita (accumulated change)',
            en:'Has been ~ / Has come to ~',
            tip:'Gradual change that has built up to the present. Often signals a speaker\'s realization about a developing situation.',
            examples:[
              { jp:'最近、この街は変わってきたね。', romaji:'Saikin, kono machi wa kawatte kita ne.', en:'This city has really been changing lately, hasn\'t it.' },
              { jp:'だんだん寒くなってきた。', romaji:'Dandan samuku natte kita.', en:'It\'s been getting colder and colder.' },
            ]
          },
        ]
      },
    ]
  },

  {
    id: 'int-nuance',
    title: 'Expressing Yourself',
    icon: '🗣️',
    groups: [
      {
        title: 'Sharing Opinions',
        phrases: [
          { jp:'〜と思います',              romaji:'~to omoimasu',     en:'I think ~ / In my opinion ~',           tip:'The core opinion phrase. Softer and more Japanese than stating facts directly.', examples:[{ jp:'この映画は面白いと思います。', romaji:'Kono eiga wa omoshiroi to omoimasu.', en:'I think this movie is interesting.' }] },
          { jp:'〜んじゃないかと思います',  romaji:'~n ja nai ka to omoimasu', en:'I wonder if perhaps ~ (very hedged)', tip:'Double-hedge: both the content AND the opinion are uncertain. Very Japanese.', examples:[{ jp:'彼は知っているんじゃないかと思います。', romaji:'Kare wa shitte iru n ja nai ka to omoimasu.', en:'I wonder if perhaps he knows.' }] },
          { jp:'私の意見では',               romaji:'Watashi no iken de wa', en:'In my opinion,',               tip:'Formal opinion opener. Use in discussions or presentations.' },
          { jp:'〜のほうがいいと思います',   romaji:'~no hō ga ii to omoimasu', en:'I think ~ is better',        examples:[{ jp:'電車のほうがいいと思います。', romaji:'Densha no hō ga ii to omoimasu.', en:'I think the train is better.' }] },
          { jp:'〜について、どう思いますか？',romaji:'~ni tsuite, dō omoimasu ka?', en:'What do you think about ~?', tip:'Great conversation starter. Invites the other person\'s opinion.', zh:'你觉得～怎么样？', pinyin:'nǐ juéde ~ zěnmeyàng?', zhNote:'Direct parallel to 你觉得～怎么样？in Chinese.' },
          { jp:'〜という点では',             romaji:'~to iu ten de wa',  en:'In terms of ~ / Regarding the point of ~', tip:'Narrows the discussion to a specific aspect.' },
          { jp:'ぶっちゃけ',                romaji:'Bucchake',          en:'Honestly / To be frank (casual)',       tip:'Youth/casual speech. "OK real talk..." Sets up an honest or slightly blunt statement.' },
        ]
      },
      {
        title: 'Agreeing & Disagreeing',
        phrases: [
          { jp:'そうですね',               romaji:'Sō desu ne',       en:'That\'s right / I see / Yes indeed',     tip:'Agreement and acknowledgement. Drawn out そうですねぇ = thoughtful consideration.', zh:'是啊 / 确实', pinyin:'shì a / quèshí' },
          { jp:'確かに',                   romaji:'Tashika ni',       en:'Certainly / That\'s true / Indeed',      tip:'Conceding a valid point.', zh:'确实 / 的确', pinyin:'quèshí / díquè' },
          { jp:'なるほど',                 romaji:'Naruhodo',         en:'I see / Ah, that makes sense',           tip:'Genuine comprehension. 連発 (repeated use) can sound insincere.', zh:'原来如此', pinyin:'yuánlái rúcǐ' },
          { jp:'おっしゃる通りです',       romaji:'Ossharu tōri desu', en:'You are absolutely right (formal)',     tip:'Very respectful agreement. おっしゃる is the respectful form of 言う.' },
          { jp:'それはちょっと…',          romaji:'Sore wa chotto…',  en:'That\'s a bit… (polite disagreement)',   tip:'Trailing off with ちょっと is the classic indirect "no" in Japanese. Never say 違います directly.', zh:'那个嘛…', pinyin:'nà ge ma…' },
          { jp:'〜とは限りません',          romaji:'~to wa kagirimasen',en:'That\'s not necessarily the case',      examples:[{ jp:'高いものが良いとは限りません。', romaji:'Takai mono ga yoi to wa kagirimasen.', en:'Expensive doesn\'t necessarily mean good.' }] },
          { jp:'〜とは言えないかもしれません',romaji:'~to wa ienai kamo shiremasen', en:'It\'s hard to say that ~ is the case', tip:'Extremely gentle disagreement. Almost apologetic.' },
          { jp:'一概には言えません',        romaji:'Ichigai ni wa iemasen', en:'It\'s not something you can generalize', tip:'Good academic/discussion phrase.' },
        ]
      },
      {
        title: 'Emotions & Feelings',
        phrases: [
          { jp:'〜が楽しみです',            romaji:'~ga tanoshimi desu', en:'I\'m looking forward to ~',           tip:'楽しみ = looking forward to / pleasure. 楽しい (tanoshii) = fun (right now). Different!', zh:'期待～', pinyin:'qīdài ~', zhNote:'Similar to 很期待～ in Chinese.' },
          { jp:'〜が心配です',              romaji:'~ga shinpai desu', en:'I\'m worried about ~',                 tip:'心配 (shinpai) = worry. 心配しないで = don\'t worry.', zh:'担心～', pinyin:'dānxīn ~' },
          { jp:'〜に感動しました',           romaji:'~ni kandō shimashita', en:'I was deeply moved by ~',          tip:'感動 (kandō) = deep emotional impression. Stronger than just "impressed".', zh:'被～感动了', pinyin:'bèi ~ gǎndòng le' },
          { jp:'〜に驚きました',             romaji:'~ni odorokimashita', en:'I was surprised by ~',              zh:'对～感到惊讶', pinyin:'duì ~ gǎndào jīngyà' },
          { jp:'もったいない',               romaji:'Mottainai',         en:'What a waste / Too good to waste',    tip:'Untranslatable cultural concept. Used for wasted food, unused potential, missed opportunities. UNESCO recognized it as a model concept.', zh:'可惜 / 浪费', pinyin:'kěxí / làngfèi', zhNote:'可惜 (pity/shame) is the closest Chinese equivalent, though もったいない has deeper ecological/moral resonance.' },
          { jp:'仕方がない / 仕方ない',      romaji:'Shikata ga nai',    en:'It can\'t be helped / What can you do', tip:'Resigned acceptance. The Japanese cultural response to unchangeable situations. Also しょうがない (shōganai).', zh:'没办法', pinyin:'méi bànfǎ', zhNote:'没办法 in Chinese carries the same resigned acceptance.' },
          { jp:'〜が悔しいです',             romaji:'~ga kuyashii desu', en:'I\'m frustrated / That\'s mortifying', tip:'Kuyashii = the feeling of vexation at failure or missed opportunity. Often said when you ALMOST succeeded.' },
          { jp:'〜が羨ましいです',           romaji:'~ga urayamashii desu', en:'I\'m envious of ~ / Lucky you ~', tip:'Not negative envy — more like admiring jealousy. Said genuinely.', zh:'我很羡慕～', pinyin:'wǒ hěn xiànmù ~' },
        ]
      },
      {
        title: 'Suggestions & Invitations',
        phrases: [
          { jp:'〜してみてはどうですか？',   romaji:'~shite mite wa dō desu ka?', en:'How about trying ~? (gentle suggestion)',tip:'Very soft and polite. Uses みる (try seeing) to soften the suggestion.', examples:[{ jp:'京都に行ってみてはどうですか？', romaji:'Kyōto ni itte mite wa dō desu ka?', en:'How about trying to go to Kyoto?' }] },
          { jp:'〜しましょう',              romaji:'~shimashō',         en:'Let\'s ~ (inclusive proposal)',          tip:'Proposing a joint action. Friendly and warm.', zh:'我们一起～吧', pinyin:'wǒmen yīqǐ ~ ba', zhNote:'Same as 我们～吧 in Chinese — proposing something together.' },
          { jp:'〜しませんか？',             romaji:'~shimasen ka?',     en:'Would you like to ~ ? / Shall we ~ ?',  tip:'Softer than しましょう — leaves room for refusal. The more polite invitation form.', examples:[{ jp:'一緒に食事しませんか？', romaji:'Issho ni shokuji shimasen ka?', en:'Would you like to have a meal together?' }] },
          { jp:'ぜひ〜してください',         romaji:'Zehi ~ shite kudasai', en:'Please definitely ~ (earnest request)', tip:'ぜひ = by all means / definitely. Makes a request feel heartfelt rather than casual.' },
          { jp:'よかったら〜',              romaji:'Yokattara ~',       en:'If you\'re interested / If you like ~',  tip:'Soft invitation with an easy exit. よかったら = "if it would be good for you".', examples:[{ jp:'よかったら、一緒に行きませんか？', romaji:'Yokattara, issho ni ikimasen ka?', en:'If you\'d like, would you want to go together?' }] },
        ]
      },
      {
        title: 'Polite Clarification & Checking',
        phrases: [
          { jp:'確認なんですが',             romaji:'Kakunin nan desu ga', en:'Just to confirm… / I wanted to check…', tip:'Soft way to verify information without seeming to doubt someone.' },
          { jp:'〜ということですか？',       romaji:'~to iu koto desu ka?', en:'Do you mean that ~ ?',               tip:'Paraphrasing what was said back as a check. Very useful.', zh:'意思是说～吗？', pinyin:'yìsi shì shuō ~ ma?' },
          { jp:'もしよろしければ',           romaji:'Moshi yoroshikereba', en:'If it\'s convenient / If you don\'t mind', tip:'Ultra-polite condition. もし = if. よろしければ = if it is good/acceptable.' },
          { jp:'〜を説明していただけますか？',romaji:'~wo setsumei shite itadakemasu ka?', en:'Could you explain ~ ?',   tip:'Very polite. いただく makes it humble.', zh:'能解释一下～吗？', pinyin:'néng jiěshì yīxià ~ ma?' },
          { jp:'例えば、どういうことですか？',romaji:'Tatoeba, dō iu koto desu ka?', en:'For example, what do you mean?', tip:'Use when a concept is clear in principle but you need a concrete example.' },
          { jp:'おっしゃっている意味がよくわからないのですが',romaji:'Osshatte iru imi ga yoku wakaranai no desu ga', en:'I\'m not sure I fully understand what you mean…', tip:'Very polite way to say you don\'t understand without offending the speaker.' },
        ]
      },
      {
        title: 'Reactions & Exclamations',
        phrases: [
          { jp:'えっ！？', romaji:'E!?', en:'Huh? / What? (surprised)', tip:'Universal surprise. Pitch rise = genuine shock. Flat えー = mild disbelief or disappointment.' },
          { jp:'うそ！', romaji:'Uso!', en:'No way! / You\'re joking! (casual)', tip:'うそ = lie. In exclamation: "no way!" Totally normal, not rude. まじ？ = same, younger speech.', zh:'不会吧！ / 真的假的！', pinyin:'bù huì ba!' },
          { jp:'まじで？ / マジ？', romaji:'Maji de? / Maji?', en:'Seriously? / For real?', tip:'Youth casual. まじかー = man, seriously... まじで言ってる = are you serious?', zh:'真的吗？', pinyin:'zhēn de ma?' },
          { jp:'すごい！', romaji:'Sugoi!', en:'Wow! / Amazing! / Great!', tip:'The all-purpose positive exclamation. すごいね = that\'s amazing, huh. すごく = very (adverb).', zh:'好厉害！/ 哇！', pinyin:'hǎo lìhai!' },
          { jp:'やった！', romaji:'Yatta!', en:'Yes! / I did it! / Hooray!', tip:'Celebration of success.', zh:'太好了！/ 成功了！', pinyin:'tài hǎo le!' },
          { jp:'残念！', romaji:'Zannen!', en:'What a shame! / Too bad!', tip:'Express disappointment. 残念ながら = unfortunately (formal).', zh:'太可惜了！', pinyin:'tài kěxí le!' },
          { jp:'ほんとに？', romaji:'Honto ni?', en:'Really? / Truly?', tip:'Seeking confirmation. ほんとに！ as exclamation = honestly/truly!', zh:'真的吗？', pinyin:'zhēn de ma?' },
          { jp:'ああ、そういうことか', romaji:'Aa, sō iu koto ka', en:'Ah, I see — that\'s what it means', tip:'The moment of understanding clicking. Satisfying to say.' },
          { jp:'助かります！', romaji:'Tasukarimasu!', en:'That\'s a big help / You saved me', tip:'Used when someone helps you. 助かった！= you saved me! (casual past)', zh:'帮了大忙了', pinyin:'bāng le dà máng le' },
          { jp:'なんか嫌な感じ', romaji:'Nanka iya na kanji', en:'Something feels off / Somehow feels bad', tip:'なんか = somehow. Vague but expressive unease.', zh:'总感觉不对劲', pinyin:'zǒng gǎnjué bù duì jìn' },
        ]
      },
      {
        title: 'Phone, Texting & Online',
        note: 'Japanese communication has distinct patterns for calls and messaging. Missing these makes you sound unnatural.',
        phrases: [
          { jp:'もしもし', romaji:'Moshimoshi', en:'Hello? (phone greeting only)', tip:'Only used on the phone, not in person. Origin: from 申す申す. Don\'t say this face-to-face.', zh:'喂', pinyin:'wèi' },
          { jp:'〜さんはいらっしゃいますか？', romaji:'~san wa irasshaimasu ka?', en:'May I speak to ~? (phone)', tip:'Polite phone request.', examples:[{ jp:'田中さんはいらっしゃいますか？', romaji:'Tanaka-san wa irasshaimasu ka?', en:'May I speak to Tanaka-san?' }] },
          { jp:'少々お待ちください', romaji:'Shōshō omachi kudasai', en:'One moment please (phone hold)', tip:'Standard hold phrase. ちょっと待ってください = casual version.' },
          { jp:'また後でかけ直します', romaji:'Mata atode kakenaoishimasu', en:'I\'ll call back later', tip:'Polite way to end a call you can\'t continue.' },
          { jp:'既読スルー', romaji:'Kidoku surū', en:'Leaving someone on read / Seen but ignored', tip:'既読 = read receipt. スルー = English "through/ignore". Considered rude with close friends.', zh:'已读不回', pinyin:'yǐ dú bù huí', zhNote:'已读不回 in Chinese is the exact same concept.' },
          { jp:'連投すみません', romaji:'Rentō sumimasen', en:'Sorry for the multiple messages', tip:'Apologizing for sending many messages in a row. Common Japanese messaging etiquette.' },
          { jp:'了解です / 了解！', romaji:'Ryōkai desu / Ryōkai!', en:'Got it / Understood (casual)', tip:'Casual understood. NOT polite enough for superiors — use 承知しました with bosses.', zh:'收到 / 明白了', pinyin:'shōu dào / míngbai le' },
          { jp:'それな', romaji:'Sore na', en:'Exactly / Same / That\'s it', tip:'Youth internet slang. Emphatic agreement. Short for それだよな.', zh:'就是！/ 对对对！', pinyin:'jiùshì! / duì duì duì!' },
          { jp:'〜しといて', romaji:'~shite oite', en:'Go ahead and do ~ / Do ~ in advance', tip:'〜ておく (do in advance) contracted to 〜とく/〜といて in casual speech.', examples:[{ jp:'資料、送っといて。', romaji:'Shiryō, okuttoi te.', en:'Go ahead and send the documents.' }] },
          { jp:'（笑）/ w / 草', romaji:'(wara) / w / kusa', en:'Lol / haha (text)', tip:'（笑）= older/formal. w = common texting. 草 = youth internet. 草 comes from 笑 (warau) → www → looks like grass (草).' },
        ]
      },
      {
        title: 'Describing Appearance & Style',
        note: '見た目 (mitame) = appearance. Japanese has rich vocabulary for describing how things look and feel — far beyond simple adjectives.',
        phrases: [
          { jp:'〜っぽい', romaji:'~ppoi', en:'Looks like ~ / -ish / Kind of ~', tip:'Impressionistic similarity. 子供っぽい = childish. 外国人っぽい = looks foreign. Less certain than らしい.', examples:[{ jp:'この色、青っぽいね。', romaji:'Kono iro, aoppoi ne.', en:'This color is kind of bluish, isn\'t it.' }], zh:'有点像～的感觉', pinyin:'yǒudiǎn xiàng ~ de gǎnjué' },
          { jp:'〜らしい（典型的）', romaji:'~rashii (typical of)', en:'True to ~ / Typical of ~ / As [X] should be', tip:'Something living up to its expected nature. 男らしい = manly. 日本らしい = quintessentially Japanese. A stronger sense of authenticity than っぽい.', examples:[{ jp:'これぞ日本らしい景色だ。', romaji:'Kore zo Nihon rashii keshiki da.', en:'This is quintessentially Japanese scenery.' }] },
          { jp:'垢抜けている', romaji:'Aka-nukete iru', en:'Polished / Stylish / Has shed roughness', tip:'垢 = grime/roughness. 抜ける = to come out. Describes someone who has refined their style or matured out of awkwardness. A genuine compliment.', zh:'脱胎换骨 / 时髦', pinyin:'tuōtāi huàngǔ / shímáo' },
          { jp:'地味 / 派手', romaji:'Jimi / hade', en:'Plain & understated / Flashy & showy', tip:'地味 = subdued, modest, low-key. 派手 = loud, extravagant, eye-catching. Used for clothing, events, or personality. Neither is purely negative.', examples:[{ jp:'あの服、ちょっと派手じゃない？', romaji:'Ano fuku, chotto hade ja nai?', en:'Isn\'t that outfit a bit flashy?' }], zh:'朴素 / 花哨', pinyin:'pǔsù / huāshao' },
          { jp:'おしゃれ', romaji:'Oshare', en:'Stylish / Fashionable / Chic', tip:'Can describe a person, outfit, or place. おしゃれなカフェ = stylish café. Very common and genuine compliment.', zh:'时尚 / 有品味', pinyin:'shíshàng / yǒu pǐnwèi' },
          { jp:'〜に見える', romaji:'~ni mieru', en:'Looks ~ / Appears to be ~', tip:'How something appears to the observer. 若く見える = looks young. 難しそうに見える = looks difficult.', examples:[{ jp:'あなた、若く見えますね。', romaji:'Anata, wakaku miemasu ne.', en:'You look young, don\'t you.' }], zh:'看起来～', pinyin:'kàn qǐlái ~' },
          { jp:'雰囲気がある', romaji:'Fun\'iki ga aru', en:'Has atmosphere / Has a certain vibe', tip:'雰囲気 (fun\'iki) = atmosphere, ambience. High compliment for a place or person. このお店、雰囲気があるね = this place really has great ambiance.', examples:[{ jp:'このお店、すごく雰囲気があるね。', romaji:'Kono omise, sugoku fun\'iki ga aru ne.', en:'This place really has great ambiance.' }], zh:'有氛围感', pinyin:'yǒu fēnwéi gǎn' },
          { jp:'清潔感がある', romaji:'Seiketsu-kan ga aru', en:'Has a clean, put-together look', tip:'清潔 = clean. 感 = feeling/sense. Means someone looks neat, fresh, and well-groomed. Classic compliment in Japanese social contexts.', zh:'看起来干净整洁', pinyin:'kàn qǐlái gānjìng zhěngjié' },
        ]
      },
      {
        title: 'Describing Food & Taste',
        note: 'Japan has some of the richest food vocabulary in the world. These words go far beyond おいしい, and will make you sound genuinely fluent when discussing food.',
        phrases: [
          { jp:'コクがある', romaji:'Koku ga aru', en:'Rich and deep in flavor / Has depth', tip:'コク = depth of flavor, richness, body. The layered quality of a good soup or sauce. No single English word captures it.', zh:'醇厚 / 有层次感', pinyin:'chúnhòu / yǒu céngcì gǎn' },
          { jp:'出汁が効いている', romaji:'Dashi ga kiite iru', en:'The dashi broth shines through', tip:'出汁 (dashi) = foundational Japanese stock (kelp/bonito). 効いている = working/present. High praise for Japanese cooking.', zh:'汤底很到位', pinyin:'tāng dǐ hěn dào wèi' },
          { jp:'さっぱりしている', romaji:'Sappari shite iru', en:'Light / Refreshing / Clean-tasting', tip:'The opposite of heavy or greasy. Positive quality for summer food, salads, or light sauces. さっぱりした味 = clean, refreshing taste.', zh:'清爽 / 不腻', pinyin:'qīngshuǎng / bù nì' },
          { jp:'こってり', romaji:'Kotteri', en:'Rich / Heavy / Thick and indulgent', tip:'The opposite of さっぱり. こってりラーメン = rich, heavy ramen. Used positively for indulgent, satisfying food.', zh:'浓郁 / 厚重', pinyin:'nóngyù / hòuzhòng' },
          { jp:'プリプリ / もちもち', romaji:'Puri-puri / Mochi-mochi', en:'Bouncy & springy / Chewy & elastic', tip:'Texture onomatopoeia unique to Japanese food culture. プリプリ = firm springy bounce (shrimp). もちもち = soft elastic chew (fresh mochi, handmade udon).', examples:[{ jp:'このエビ、プリプリで最高！', romaji:'Kono ebi, puripuri de saikō!', en:'These shrimp are so springy — perfect!' }] },
          { jp:'とろける', romaji:'Torokeru', en:'Melts in your mouth', tip:'とろける = to melt. とろけるような食感 = melt-in-your-mouth texture. Said of fatty tuna, wagyu beef, or rich desserts.', examples:[{ jp:'口の中でとろける！', romaji:'Kuchi no naka de torokeru!', en:'It melts in your mouth!' }], zh:'入口即化', pinyin:'rù kǒu jí huà' },
          { jp:'本格的', romaji:'Honkakuteki', en:'Authentic / The real deal', tip:'本格 = genuine/authentic. 本格的なイタリア料理 = authentic Italian food. High compliment for any cuisine.', zh:'正宗 / 地道', pinyin:'zhèngzōng / dìdao' },
          { jp:'隠し味', romaji:'Kakushi aji', en:'Secret / hidden flavor', tip:'隠し = hidden. 味 = taste. A subtle ingredient added to deepen a dish that you can\'t quite identify. Deeply Japanese cooking concept.', zh:'秘制调料 / 隐藏风味', pinyin:'mìzhì tiáoliào' },
          { jp:'量が多い / 少ない', romaji:'Ryō ga ōi / sukunai', en:'Large / small portion', tip:'量 (ryō) = quantity, amount. 量が多い = generous portion. 量が少ない = small portion. Essential for describing value.', zh:'份量多 / 少', pinyin:'fèn liàng duō / shǎo' },
        ]
      },
    ]
  },

  {
    id: 'int-keigo',
    title: 'Formal Speech (Keigo)',
    icon: '🏢',
    groups: [
      {
        title: 'What is Keigo?',
        note: '敬語 (keigo) = honorific language. Three layers: (1) 尊敬語 (sonkeigo) — elevates the OTHER person\'s actions. (2) 謙譲語 (kenjōgo) — humbles YOUR OWN actions. (3) 丁寧語 (teineigo) — polite speech (ます/です). You use layer 1 to describe what a superior does, and layer 2 to describe what you do for a superior.',
        phrases: []
      },
      {
        title: 'Respectful Verbs — 尊敬語 (for others\' actions)',
        phrases: [
          { jp:'いる → いらっしゃる',        romaji:'iru → irassharu',    en:'to be (respectful)',              tip:'いらっしゃいます is also used for come and go in polite contexts. This is the royal "are".', examples:[{ jp:'社長はいらっしゃいますか？', romaji:'Shachō wa irasshaimasu ka?', en:'Is the president (of company) here?' }] },
          { jp:'行く・来る → いらっしゃる',  romaji:'iku/kuru → irassharu', en:'to go / come (respectful)',      examples:[{ jp:'先生がいらっしゃいました。', romaji:'Sensei ga irasshaimashita.', en:'The teacher came.' }] },
          { jp:'食べる・飲む → 召し上がる',  romaji:'taberu/nomu → meshiagaru', en:'to eat / drink (respectful)', examples:[{ jp:'もっと召し上がってください。', romaji:'Motto meshiagatte kudasai.', en:'Please eat more.' }] },
          { jp:'言う → おっしゃる',          romaji:'iu → ossharu',       en:'to say (respectful)',             examples:[{ jp:'先生がおっしゃったように…', romaji:'Sensei ga osshatta yō ni…', en:'As the teacher said…' }] },
          { jp:'する → なさる',              romaji:'suru → nasaru',      en:'to do (respectful)',              examples:[{ jp:'何をなさっていますか？', romaji:'Nani wo nasatte imasu ka?', en:'What are you doing?' }] },
          { jp:'見る → ご覧になる',          romaji:'miru → goran ni naru', en:'to see / look (respectful)',    examples:[{ jp:'こちらをご覧ください。', romaji:'Kochira wo goran kudasai.', en:'Please look at this.' }] },
          { jp:'知っている → ご存知',        romaji:'shitte iru → gozonji', en:'to know (respectful)',           examples:[{ jp:'ご存知ですか？', romaji:'Gozonji desu ka?', en:'Are you aware? / Do you know?' }] },
          { jp:'くれる → くださる',          romaji:'kureru → kudasaru',  en:'to give (to me) — respectful',   examples:[{ jp:'先生が本をくださいました。', romaji:'Sensei ga hon wo kudasaimashita.', en:'The teacher gave me a book.' }] },
        ]
      },
      {
        title: 'Humble Verbs — 謙譲語 (for your own actions)',
        phrases: [
          { jp:'行く・来る → 参る',          romaji:'iku/kuru → mairu',   en:'to go / come (humble)',           examples:[{ jp:'ただいま参ります。', romaji:'Tadaima mairimasu.', en:'I\'ll be right there. (formal)' }] },
          { jp:'行く → 伺う',               romaji:'iku → ukagau',       en:'to visit / go (humble, to superior)', tip:'伺う is specifically used when you go to visit someone of higher status.', examples:[{ jp:'明日、御社に伺います。', romaji:'Ashita, onsha ni ukagaimasu.', en:'I will visit your company tomorrow.' }] },
          { jp:'食べる・もらう → いただく',  romaji:'taberu/morau → itadaku', en:'to eat / receive (humble)',    tip:'いただきます before meals is the humble "I shall receive". Also: を (item) をいただく = humbly receive something.', examples:[{ jp:'資料をいただけますか？', romaji:'Shiryō wo itadakemasu ka?', en:'May I receive the materials?' }] },
          { jp:'言う → 申す',               romaji:'iu → mōsu',          en:'to say (humble)',                 examples:[{ jp:'田中と申します。', romaji:'Tanaka to mōshimasu.', en:'My name is Tanaka. (formal intro)' }] },
          { jp:'する → いたす',             romaji:'suru → itasu',       en:'to do (humble)',                  examples:[{ jp:'確認いたします。', romaji:'Kakunin itashimasu.', en:'I will confirm. (formal)' }] },
          { jp:'見る → 拝見する',           romaji:'miru → haiken suru', en:'to see / look at (humble)',       examples:[{ jp:'資料を拝見してもよろしいでしょうか。', romaji:'Shiryō wo haiken shite mo yoroshii deshō ka.', en:'May I take a look at the materials?' }] },
          { jp:'知っている → 存じております',romaji:'shitte iru → zonjite orimasu', en:'to know (humble)',       examples:[{ jp:'はい、存じております。', romaji:'Hai, zonjite orimasu.', en:'Yes, I am aware.' }] },
          { jp:'もらう → いただく',          romaji:'morau → itadaku',    en:'to receive (humble)',             tip:'〜ていただく = to humbly receive the action of doing. 説明していただく = to have you explain (humbly).' },
        ]
      },
      {
        title: 'Ultra-Polite Request Forms',
        phrases: [
          { jp:'〜ていただけますでしょうか',  romaji:'~te itadakemasu deshō ka', en:'Could you possibly ~ ? (maximum politeness)', tip:'The most polite request form. Double-humble: いただく (humble receive) + でしょうか (conjecture). Use in business emails and formal situations.', examples:[{ jp:'ご確認いただけますでしょうか。', romaji:'Go-kakunin itadakemasu deshō ka.', en:'Could you possibly confirm this?' }] },
          { jp:'〜していただけますか',        romaji:'~shite itadakemasu ka', en:'Could you ~ ? (very polite)',   tip:'Slightly less formal than above but still very polite. Everyday business.' },
          { jp:'〜させていただきます',        romaji:'~sasete itadakimasu', en:'Allow me to ~ / I will ~ (humble)', tip:'Asking permission while stating intent. 〜させてください = please allow me to.', examples:[{ jp:'説明させていただきます。', romaji:'Setsumei sasete itadakimasu.', en:'Allow me to explain.' }] },
          { jp:'お〜ください',               romaji:'o~ kudasai',          en:'Please ~ (honorific request)',   tip:'Prefixing a verb stem with お makes a polite request. お待ちください = please wait.', examples:[{ jp:'少々お待ちください。', romaji:'Shōshō omachi kudasai.', en:'Please wait a moment.' }] },
          { jp:'ご〜ください',               romaji:'go~ kudasai',         en:'Please ~ (honorific, Sino-Japanese)', tip:'ご is used for Sino-Japanese (on\'yomi) words. ご確認ください = please confirm.', examples:[{ jp:'ご確認ください。', romaji:'Go-kakunin kudasai.', en:'Please confirm.' }] },
        ]
      },
      {
        title: 'Business Essentials',
        phrases: [
          { jp:'お世話になっております',      romaji:'Osewa ni natte orimasu', en:'Thank you for your continued support', tip:'Opens every business call/email in Japan. Untranslatable — it\'s an acknowledgement of the ongoing relationship. Say it even if you\'ve never met.' },
          { jp:'よろしくお願いいたします',     romaji:'Yoroshiku onegai itashimasu', en:'I humbly request your cooperation', tip:'The most important phrase in Japanese business. Ends meetings, emails, phone calls. いたします = extra humble form of します.' },
          { jp:'かしこまりました',             romaji:'Kashikomarimashita',  en:'Certainly / Understood (customer service)', tip:'The most formal "understood". Used by service staff, hotel, airlines. Above 承知いたしました which is used internally.' },
          { jp:'承知いたしました',             romaji:'Shōchi itashimashita', en:'Understood (internal business)',      tip:'Used with colleagues and business partners. More peer-level than かしこまりました.' },
          { jp:'失礼いたします',              romaji:'Shitsurei itashimasu', en:'Excuse me / Pardon me (very formal)',   tip:'Used when: entering/leaving a room, interrupting, ending a call, walking in front of someone.' },
          { jp:'大変申し訳ございません',       romaji:'Taihen mōshiwake gozaimasen', en:'I sincerely apologize / I have no excuse', tip:'The deepest apology in business Japanese. 申し訳ない = there is no excuse. 大変 = very. ございません = ultra-polite negative.' },
          { jp:'お電話いただきありがとうございます',romaji:'Odenwa itadaki arigatō gozaimasu', en:'Thank you for calling',  tip:'Standard phone greeting at Japanese companies.' },
          { jp:'〜の件でご連絡いたしました',   romaji:'~no ken de go-renraku itashimashita', en:'I\'m contacting you regarding ~', tip:'Standard email/call opener after the greeting line.' },
          { jp:'ご不明な点がございましたら、お気軽にお申し付けください', romaji:'Go-fumei na ten ga gozaimashitara, okigaru ni omōshitsuke kudasai', en:'If you have any questions, please don\'t hesitate to ask', tip:'Classic email/letter closing line.' },
        ]
      },
    ]
  },

  {
    id: 'int-slang',
    title: 'Slang & Culture',
    icon: '😎',
    groups: [
      {
        title: 'Contemporary Youth Slang',
        note: 'Japanese slang evolves fast. These are current as of 2024-2025. Use with friends, not strangers — context matters a lot.',
        phrases: [
          { jp:'やばい',            romaji:'Yabai',         en:'Amazing / Terrible (context-dependent)',  tip:'Originally meant "dangerous/bad". Now equally used for "amazing/incredible". Tone of voice decides. やばすぎる = way too amazing/bad.', examples:[{ jp:'この寿司、やばい！', romaji:'Kono sushi, yabai!', en:'This sushi is incredible!' }] },
          { jp:'えぐい',            romaji:'Egui',          en:'Intense / Crazy / Extreme',               tip:'Like やばい but stronger. Originally "cruel/harsh". Now used for impressive intensity.' },
          { jp:'草 / w',            romaji:'Kusa / W',      en:'LOL / haha',                              tip:'www = hahaha in text (from 笑う warau). www looks like 草 (grass) from above, hence 草 = LOL. Still widely used.', zh:'哈哈 / 笑死', pinyin:'hāhā / xiào sǐ' },
          { jp:'ワンチャン',         romaji:'Wan chan',      en:'Maybe / One chance / Possibly',           tip:'From English "one chance". ワンチャンあるかも = maybe there\'s a chance.' },
          { jp:'めちゃ / めっちゃ',  romaji:'Mecha / Meccha', en:'Very / Super / Incredibly',              tip:'Originally Kansai dialect, now nationwide. めっちゃ好き = like it super much. Used like すごく but more casual and youthful.' },
          { jp:'神',                romaji:'Kami',          en:'God-tier / Absolutely amazing',           tip:'Used as adjective: 神対応 (kami-taiō) = God-level service. 神ってる = being godly. Ultra compliment.', examples:[{ jp:'あの演奏、神だった！', romaji:'Ano ensō, kami datta!', en:'That performance was god-tier!' }] },
          { jp:'推し',              romaji:'Oshi',          en:'Your favorite (idol/character/person you support)', tip:'Originally idol culture, now universally used. 推しメン = favorite member. 推す (osu) = to support/advocate for.', zh:'偶像 / 最爱', pinyin:'ǒuxiàng / zuì ài' },
          { jp:'エモい',            romaji:'Emoi',          en:'Emotional / Nostalgic / Has that feeling', tip:'From English "emo". Used for anything that evokes deep feelings — nostalgia, aesthetic beauty, bittersweet feelings.' },
          { jp:'リア充',            romaji:'Riajū',          en:'Someone with a fulfilling real life',      tip:'リアル (real) + 充実 (fulfilling). Used by internet/otaku culture to describe people who are socially successful, have relationships, etc. Sometimes said with envy, sometimes self-deprecation.' },
          { jp:'ぎり',              romaji:'Giri',          en:'Barely / Just barely',                    tip:'ぎりセーフ = barely safe (just made it). ぎりアウト = just barely out (failed).', examples:[{ jp:'ぎり間に合った！', romaji:'Giri maniatta!', en:'I barely made it in time!' }] },
          { jp:'〜じゃん / じゃん',  romaji:'~jan',          en:'Isn\'t it? / Right? (casual confirmation)', tip:'Tokyo/youth speech. 面白いじゃん = it\'s interesting, right? can also be used for new realizations: あ、できるじゃん = oh wait, I can do it!', zh:'～嘛 / ～不是嘛', pinyin:'~ ma / ~ bù shì ma' },
          { jp:'わかる〜！',         romaji:'Wakaru~!',      en:'I get it! / Same! / I feel you!',          tip:'Drawn out for emphasis. Said in response to something relatable. Like "I know right!"' },
          { jp:'無理 / 無理ゲー',   romaji:'Muri / Murige',  en:'Impossible / No way / Too hard',          tip:'無理 alone = can\'t/impossible. 無理ゲー = game that\'s impossible to win (game + impossible). Used for any hopeless situation.' },
          { jp:'尊い',              romaji:'Tōtoi',          en:'Sacred / Precious / So pure it hurts',    tip:'Fanculture term for when something (usually fictional characters) is so wholesome/perfect it overwhelms you. 尊すぎて死ぬ = so precious I could die.' },
          { jp:'〜みたいな',         romaji:'~mitai na',      en:'Like~ / Something like that / Kind of',   tip:'Filler like English "like". Used heavily in casual speech. Kinda like, you know what I mean?', zh:'像～那样 / 就是那种感觉', pinyin:'xiàng ~ nàyàng' },
        ]
      },
      {
        title: 'Kansai Dialect (関西弁) Basics',
        note: 'Osaka, Kyoto, Kobe, Nara all use Kansai-ben. It\'s warm, funny, and often featured in comedy. Locals are delighted when foreigners try it. Different rhythm and intonation from Tokyo Japanese.',
        phrases: [
          { jp:'〜やん / 〜やんか',  romaji:'~yan / ~yanka',  en:'Isn\'t it? / Don\'t you think? (Kansai)', tip:'Kansai equivalent of Tokyo じゃん. 面白いやん = it\'s interesting, right?', examples:[{ jp:'それ、美味しいやん！', romaji:'Sore, oishii yan!', en:'That\'s delicious, isn\'t it!' }] },
          { jp:'〜やねん',           romaji:'~yanen',          en:'It is (that way) — explanatory (Kansai)', tip:'Kansai version of 〜なんだ. 遅れたんやねん = the reason I was late is... Used to explain or assert.', examples:[{ jp:'そういうことやねん。', romaji:'Sō iu koto yanen.', en:'That\'s just how it is. (Kansai)' }] },
          { jp:'まいど',             romaji:'Maido',           en:'Hello / Thanks / Welcome (Osaka business)', tip:'Short for 毎度ありがとうございます = thank you every time. Osaka shopkeepers say this instead of いらっしゃいませ.' },
          { jp:'おおきに',           romaji:'Ōkini',           en:'Thank you (Kansai)',                      tip:'Kansai version of ありがとう. Especially heard in Kyoto and traditional Osaka settings.', zh:'谢谢 (关西版)', pinyin:'xièxie (Kansai version)' },
          { jp:'なんでやねん！',     romaji:'Nande yanen!',    en:'What the heck! / No way! / That makes no sense!', tip:'The classic Osaka tsukkomi (straight-man rebuttal). Said in disbelief or as comedic pushback. Probably the most famous Osaka phrase worldwide.' },
          { jp:'〜してはる',         romaji:'~shiteharu',      en:'(respectfully) doing ~ (Kansai)',         tip:'Kansai respectful progressive. Kyoto especially uses this. 食べてはる = they\'re eating (respectfully).', examples:[{ jp:'先生が来てはります。', romaji:'Sensei ga kite harimasu.', en:'The teacher is coming. (Kansai respectful)' }] },
          { jp:'ちゃう',             romaji:'Chau',             en:'No / That\'s wrong / Not that (Kansai)',  tip:'Kansai negative. 違う (chigau) → ちゃう. Also: ちゃうちゃう = "no, that\'s wrong" × 2 (classic wordplay).', examples:[{ jp:'ちゃうちゃう！', romaji:'Chau chau!', en:'No no! That\'s wrong! (also a dog breed)' }] },
          { jp:'ほんま',             romaji:'Honma',            en:'Really / Truly (Kansai)',                 tip:'Kansai for 本当 (hontō). ほんまですか = really? ほんまに！ = seriously!', zh:'真的', pinyin:'zhēn de' },
        ]
      },
      {
        title: 'Onomatopoeia (擬音語・擬態語)',
        note: 'Japanese has an enormous and expressive system of sound symbolism. 擬音語 (giongo) = actual sounds. 擬態語 (gitaigo) = describing states/textures with invented sounds (no English equivalent for most). These are used constantly in spoken Japanese.',
        phrases: [
          { jp:'ドキドキ',    romaji:'Doki-doki',   en:'Heart pounding (nervousness / excitement)', tip:'Used to describe heart palpitations from excitement, nervousness, or romantic feelings. ドキドキしてる = my heart is pounding.', zh:'心跳加速', pinyin:'xīntiào jiāsù' },
          { jp:'ワクワク',    romaji:'Waku-waku',   en:'Excited anticipation / bubbly excitement',  tip:'Lighter, more positive than ドキドキ. Anticipating something good. ワクワクしてます！ = I\'m so excited!' },
          { jp:'キラキラ',    romaji:'Kira-kira',   en:'Sparkling / Glittering / Shining',          tip:'Visual sparkle. Also describes bright-eyed people or ambitious young people: キラキラ系 = someone who seems to shine.', examples:[{ jp:'目がキラキラしている。', romaji:'Me ga kira-kira shite iru.', en:'Eyes are sparkling.' }] },
          { jp:'フワフワ',    romaji:'Fuwa-fuwa',   en:'Fluffy / Floating / Light and airy',        tip:'Texture or feeling. フワフワのパンケーキ = fluffy pancake. フワフワした気分 = dreamy/floaty feeling.', examples:[{ jp:'このケーキ、フワフワ！', romaji:'Kono kēki, fuwa-fuwa!', en:'This cake is so fluffy!' }] },
          { jp:'ぺらぺら',    romaji:'Pera-pera',   en:'Fluent (in a language)',                    tip:'日本語がぺらぺら = fluent in Japanese. The highest compliment for language learners.', examples:[{ jp:'日本語がぺらぺらですね！', romaji:'Nihongo ga perapera desu ne!', en:'Your Japanese is so fluent!' }] },
          { jp:'ぐるぐる',    romaji:'Guru-guru',   en:'Spinning / Round and round / Dizzy',        tip:'ぐるぐる回る = spinning around. 頭がぐるぐる = head is spinning (confused/dizzy).' },
          { jp:'ぐっすり',    romaji:'Gussuri',     en:'Sleeping soundly (deeply)',                 tip:'ぐっすり眠る = sleep soundly. Said when someone is in deep, peaceful sleep.' },
          { jp:'バタバタ',    romaji:'Bata-bata',   en:'Busy / Rushing about / Chaotic',           tip:'Sound of hurried activity. バタバタしている = running around crazily busy.', zh:'忙乱', pinyin:'mánɡluàn' },
          { jp:'ニコニコ',    romaji:'Niko-niko',   en:'Smiling / Happily grinning',               tip:'ニコニコしている = has a big happy smile on their face. Also Niconico (video site) = smiling face.', zh:'笑嘻嘻', pinyin:'xiào xīxī' },
          { jp:'ぼんやり',    romaji:'Bonyari',     en:'Vaguely / Absentmindedly / In a daze',     tip:'ぼんやりしている = spaced out, not paying attention.', examples:[{ jp:'今日はずっとぼんやりしていました。', romaji:'Kyō wa zutto bonyari shite imashita.', en:'I was spacing out all day today.' }] },
          { jp:'しっかり',    romaji:'Shikkari',    en:'Firmly / Properly / Well',                 tip:'しっかりしてください = pull yourself together / get it together.' },
          { jp:'こっそり',    romaji:'Kossori',     en:'Secretly / Sneakily / On the sly',         tip:'こっそり食べる = secretly eat. こっそり行く = go somewhere without telling anyone.', zh:'偷偷地', pinyin:'tōutōu de' },
          { jp:'うろうろ',    romaji:'Uro-uro',     en:'Wandering aimlessly / Loitering',          tip:'うろうろしている = wandering around without purpose.' },
          { jp:'ずきずき',    romaji:'Zuki-zuki',   en:'Throbbing pain (pulsating)',               tip:'Head pain / toothache described as ずきずき = throbbing.', zh:'阵阵作痛', pinyin:'zhèn zhèn zuòtòng' },
        ]
      },
      {
        title: 'Untranslatable Japanese Concepts',
        note: 'These are ideas that exist in Japanese but have no single-word equivalent in English or Chinese. Understanding them gives deep insight into Japanese culture and worldview.',
        phrases: [
          { jp:'侘び寂び (わびさび)',  romaji:'Wabi-sabi',          en:'Beauty in imperfection, impermanence, and incompleteness', tip:'Core Japanese aesthetic. The cracked tea bowl, the mossy garden, autumn leaves falling. Beauty that is transient, incomplete, or imperfect. Acceptance of impermanence.', zh:'残缺之美', pinyin:'cánquē zhī měi', zhNote:'Chinese 残缺之美 (beauty of imperfection) is the closest concept, but wabi-sabi has stronger ties to Buddhist impermanence and Japanese aesthetics.' },
          { jp:'木漏れ日 (こもれび)',   romaji:'Komorebi',            en:'Sunlight filtering through leaves of trees', tip:'The dappled, dancing quality of light when sun shines through leaves. There is no equivalent single word in English. Pure Japanese.' },
          { jp:'物の哀れ (もののあわれ)',romaji:'Mono no aware',       en:'Pathos of things / Bittersweet awareness of impermanence', tip:'The poignant feeling of beauty mixed with sadness at its passing. Watching sakura fall. Classic Japanese cultural sensibility.', zh:'物哀', pinyin:'wù āi', zhNote:'物哀 exists as a literary concept in Chinese/Japanese comparative studies, but it\'s a Japanese-origin term.' },
          { jp:'空気を読む (くうきをよむ)',romaji:'Kuuki wo yomu',    en:'Reading the room / Social awareness',      tip:'読む = to read. 空気 = air/atmosphere. The ability to read unspoken social cues and adjust behavior accordingly. The opposite is KY (空気が読めない = cannot read the air = socially oblivious).', zh:'察言观色', pinyin:'chá yán guān sè', zhNote:'察言观色 in Chinese (reading expressions and atmosphere) is the closest parallel.' },
          { jp:'甘える (あまえる)',    romaji:'Amaeru',              en:'To depend on someone\'s goodwill / To act spoiled in an endearing way', tip:'To presume on another\'s benevolence and indulge in their kindness. Children do it with parents. Adults do it with close friends, mentors, or partners. Not negative — it\'s a valued intimacy.', zh:'撒娇', pinyin:'sājiāo', zhNote:'撒娇 (sājiāo) in Chinese captures the childlike/playful aspect. But 甘える is broader and used between adults more comfortably.' },
          { jp:'本音と建前 (ほんねとたてまえ)',romaji:'Honne to tatemae', en:'True feelings vs. public stance',      tip:'本音 = real intentions. 建前 = socially expected front. Japanese communication often operates on this two-layer system. What someone says (建前) and what they mean (本音) can differ significantly. Understanding this is key to navigating Japan.', zh:'表面话与真心话', pinyin:'biǎomiàn huà yǔ zhēnxīn huà' },
          { jp:'頑張る (がんばる)',    romaji:'Ganbaru',             en:'To persevere / Do one\'s utmost',          tip:'Deeper than "try hard". It\'s a total commitment to effort despite difficulty. 頑張って！(ganbatte!) = do your best! / you can do it! — the most common Japanese encouragement.', zh:'加油 / 努力', pinyin:'jiāyóu / nǔlì', zhNote:'加油 (jiāyóu) is the Chinese equivalent cheering phrase. 頑張る captures more of a stoic endurance beyond just "effort".' },
          { jp:'お疲れ様 (おつかれさま)',romaji:'Otsukare sama',      en:'Well done / Thank you for your effort',   tip:'Said to colleagues/peers after completing work. 乙 (otsu) is the casual text version. You\'ll hear this constantly in any Japanese workplace. Also used to close phone calls/emails internally.', zh:'辛苦了', pinyin:'xīnku le', zhNote:'辛苦了 in Chinese carries the same "you\'ve worked hard, good job" sentiment.' },
          { jp:'お邪魔します (おじゃまします)',romaji:'Ojama shimasu',  en:'Excuse me for intruding (entering someone\'s space)', tip:'Said when entering someone\'s home, office, or workspace. 邪魔 = interruption/obstacle. You\'re acknowledging that your presence is an imposition, even as a welcome guest.' },
          { jp:'間 (ま)',             romaji:'Ma',                  en:'The space between / Negative space / Pause', tip:'A uniquely Japanese aesthetic concept: the meaningful silence, the pause in music, the empty space in design that creates meaning. Silence in Japanese conversation is not awkward — it\'s 間.' },
        ]
      },
      {
        title: 'Anime, Gaming & Pop Culture',
        note: 'Whether or not you\'re an anime fan, this vocabulary saturates modern Japanese. You\'ll hear these terms from colleagues and friends in everyday conversation.',
        phrases: [
          { jp:'ツンデレ', romaji:'Tsundere', en:'Initially cold/hostile, then secretly warm', tip:'ツン = standoffish (ツンツン). デレ = lovesick (デレデレ). Now widely used for anyone who acts tough but is secretly sweet. Originally an anime character archetype.', zh:'傲娇', pinyin:'àojiāo', zhNote:'傲娇 (àojiāo) in Chinese is the direct equivalent — borrowed from Japanese anime culture.' },
          { jp:'ガチ / ガチ勢', romaji:'Gachi / gachi-zei', en:'Serious / Hardcore / No-nonsense', tip:'ガチ = genuine/serious. ガチ勢 = hardcore players or fans who put in serious effort. ガチで = for real, seriously. Used in everyday speech beyond gaming.', examples:[{ jp:'彼はガチのゲーマーだよ。', romaji:'Kare wa gachi no gēmā da yo.', en:'He\'s a hardcore gamer, for real.' }] },
          { jp:'聖地巡礼', romaji:'Seichi junrei', en:'Anime/media pilgrimage to real-world locations', tip:'聖地 = holy land. 巡礼 = pilgrimage. Visiting real places featured in anime, films, or games. A massive tourism phenomenon driving Japan\'s domestic travel industry.', examples:[{ jp:'あのアニメの聖地巡礼に行きたい。', romaji:'Ano anime no seichi junrei ni ikitai.', en:'I want to do a pilgrimage to that anime\'s real locations.' }] },
          { jp:'フラグが立つ', romaji:'Furagu ga tatsu', en:'A death flag is raised / That\'s asking for trouble', tip:'From game "flags" that trigger events. フラグが立った = you\'ve triggered a bad outcome. Said jokingly when something sounds like a bad omen.', examples:[{ jp:'「絶対大丈夫」なんて言ったら死亡フラグだよ。', romaji:'「Zettai daijōbu」nante ittara shibō furagu da yo.', en:'Saying "I\'ll definitely be fine" is a death flag, you know.' }] },
          { jp:'廃人', romaji:'Haijin', en:'No-lifer / Someone wasted by obsessive gaming', tip:'廃 = ruins. 人 = person. Someone who has wasted away through overindulgence in games or internet. Usually self-deprecating.', zh:'废人', pinyin:'fèirén' },
          { jp:'尊い', romaji:'Tōtoi', en:'So precious / Pure / Overwhelmingly wholesome', tip:'Fan culture term for when something is so wholesome or pure that it emotionally overwhelms you. 尊すぎて死ぬ = so precious I could die. Often about fictional characters.', zh:'太可爱了（令人窒息地）', pinyin:'tài kěài le' },
          { jp:'沼にはまる', romaji:'Numa ni hamaru', en:'Fall into a swamp / Get completely hooked', tip:'沼 (numa) = swamp/bog. はまる = get absorbed in. 沼 = an obsession/fandom you\'re stuck in. Kpop沼、ゲーム沼、日本語沼…', examples:[{ jp:'日本語の沼にはまりました。', romaji:'Nihongo no numa ni hamarimashita.', en:'I\'ve fallen deep into the Japanese language rabbit hole.' }] },
          { jp:'こだわり', romaji:'Kodawari', en:'Particular commitment / Uncompromising attention to detail', tip:'Dedication to a specific craft or quality. 職人のこだわり = craftsman\'s unwavering standards. Can mean stubbornness or passion depending on context.', zh:'讲究 / 执着', pinyin:'jiǎngjiū / zhízhuó' },
          { jp:'量産型', romaji:'Ryōsan-gata', en:'Mass-produced type / Cookie-cutter (person or style)', tip:'量産 = mass production. 量産型女子 = girls with a uniform popular aesthetic (matching fashion, etc.). Not always negative — sometimes affectionate.', zh:'流水线产品（某种千篇一律的风格）', pinyin:'liúshuǐ xiàn chǎnpǐn' },
        ]
      },
    ]
  },

  {
    id: 'int-social',
    title: 'Friends & Social Life',
    icon: '👥',
    groups: [
      {
        title: 'Making Plans',
        phrases: [
          { jp:'今週末、暇？', romaji:'Konshu-matsu, hima?', en:'Free this weekend? (casual)', tip:'暇 (hima) = free time. Very casual and natural with friends.', zh:'这周末有空吗？', pinyin:'zhè zhōumò yǒu kòng ma?' },
          { jp:'〜しない？', romaji:'~shinai?', en:'Wanna ~ ? (casual invitation)', tip:'Negative question form = friendly casual invite. 飲みに行かない？= wanna go drinking?', examples:[{ jp:'映画見に行かない？', romaji:'Eiga mi ni ikanai?', en:'Wanna go watch a movie?' }] },
          { jp:'何時に集合する？', romaji:'Nanji ni shūgō suru?', en:'What time are we meeting up?', tip:'集合 (shūgō) = gathering/meeting point.', zh:'几点集合？', pinyin:'jǐ diǎn jíhé?' },
          { jp:'何時でも大丈夫', romaji:'Nanji demo daijōbu', en:'Anytime works for me', tip:'Flexible availability — being low-maintenance.', zh:'几点都行', pinyin:'jǐ diǎn dōu xíng' },
          { jp:'また今度ね', romaji:'Mata kondo ne', en:'Maybe next time / Let\'s do it another time', tip:'Soft decline or genuine postponement — context tells you which.', zh:'下次吧', pinyin:'xià cì ba' },
          { jp:'絶対行く！', romaji:'Zettai iku!', en:'I\'m definitely going! / Count me in!', tip:'絶対 = absolutely/definitely. Enthusiastic commitment.', zh:'我一定去！', pinyin:'wǒ yīdìng qù!' },
          { jp:'ドタキャンしてごめん', romaji:'Dotakyan shite gomen', en:'Sorry for the last-minute cancel', tip:'ドタキャン = last-minute cancellation (土壇場キャンセル). Specific and very commonly used term.', zh:'临时放鸽子，对不起', pinyin:'línshí fàng gēzi, duìbuqǐ' },
          { jp:'サシ飲みしよう', romaji:'Sashi nomi shiyō', en:'Let\'s grab drinks just the two of us', tip:'サシ = one-on-one. 飲み = drinking session. Very natural casual invitation.', zh:'两个人去喝一杯吧', pinyin:'liǎng gè rén qù hē yī bēi ba' },
          { jp:'おごるよ', romaji:'Ogoru yo', en:'My treat / I\'ll pay', tip:'おごる = to treat someone to food/drinks. ごちそうするよ is more formal.', zh:'我请客', pinyin:'wǒ qǐngkè' },
          { jp:'割り勘でいいよ', romaji:'Warikan de ii yo', en:'Let\'s split it', tip:'割り勘 = splitting the bill. Completely normal among Japanese friends.', zh:'AA制吧', pinyin:'AA zhì ba' },
        ]
      },
      {
        title: 'Hobbies & Interests',
        phrases: [
          { jp:'趣味は何？', romaji:'Shumi wa nani?', en:'What are your hobbies?', tip:'Standard conversation starter with anyone new.', zh:'你的爱好是什么？', pinyin:'nǐ de àihào shì shénme?' },
          { jp:'〜にはまってる', romaji:'~ni hamatteru', en:'I\'m really into ~ right now / hooked on ~', tip:'はまる = to get absorbed in. Very natural expression for current obsessions.', examples:[{ jp:'最近、アニメにはまってる。', romaji:'Saikin, anime ni hamatteru.', en:'Lately I\'m really into anime.' }] },
          { jp:'〜が得意です', romaji:'~ga tokui desu', en:'I\'m good at ~', tip:'得意 = area of strength. 苦手 = area of weakness. Pair them to sound natural.', zh:'我擅长～', pinyin:'wǒ shàncháng ~' },
          { jp:'〜に詳しいんですよ', romaji:'~ni kuwashii n desu yo', en:'I know a lot about ~ / I\'m knowledgeable about ~', tip:'詳しい = well-versed, knowledgeable.', examples:[{ jp:'日本映画には詳しいんですよ。', romaji:'Nihon eiga ni wa kuwashii n desu yo.', en:'I actually know a lot about Japanese cinema.' }] },
          { jp:'教えてください！', romaji:'Oshiete kudasai!', en:'Please teach me! / Tell me more!', tip:'Japanese people love sharing knowledge about their interests — this opens a great conversation.', zh:'请教我！', pinyin:'qǐng jiào wǒ!' },
          { jp:'一緒にやってみない？', romaji:'Issho ni yatte minaī?', en:'Want to try it together?', tip:'Inviting someone to share a hobby.', examples:[{ jp:'一緒に料理教室、行ってみない？', romaji:'Issho ni ryōri kyōshitsu, itte minaī?', en:'Want to try going to a cooking class together?' }] },
          { jp:'最近ハマってるものは？', romaji:'Saikin hamatteru mono wa?', en:'What\'ve you been into lately?', tip:'Great conversation opener with friends.', zh:'最近在迷什么？', pinyin:'zuìjìn zài mí shénme?' },
        ]
      },
      {
        title: 'Talking About People',
        phrases: [
          { jp:'どんな人？', romaji:'Donna hito?', en:'What kind of person are they?', tip:'Asking about someone\'s personality/character.', zh:'是个什么样的人？', pinyin:'shì gè shénme yàng de rén?' },
          { jp:'ノリがいい', romaji:'Nori ga ii', en:'Easy to be around / Goes with the flow / Good vibes', tip:'ノリ = mood, energy, vibe. ノリがいい人 = someone fun and spontaneous.', zh:'很好相处 / 氛围感好', pinyin:'hěn hǎo xiāngchǔ' },
          { jp:'気が合う', romaji:'Ki ga au', en:'We get along well / We\'re on the same wavelength', tip:'气が合う人 = someone you click with. Very natural expression.', zh:'聊得来 / 合得来', pinyin:'liáo de lái / hé de lái' },
          { jp:'めちゃくちゃ頭いい', romaji:'Mechakucha atama ii', en:'Super smart (casual)', tip:'めちゃくちゃ = extremely. 頭がいい = intelligent.', zh:'超级聪明', pinyin:'chāojí cōngmíng' },
          { jp:'ちょっと苦手かな', romaji:'Chotto nigate kana', en:'I\'m not great with them / They\'re a bit much for me', tip:'苦手 = not good with / difficult. The indirect way to say you don\'t click with someone.', zh:'跟我不太合得来', pinyin:'gēn wǒ bù tài hé de lái' },
          { jp:'〜に似てる', romaji:'~ni niteru', en:'Looks like ~ / Resembles ~', tip:'似る (niru) = to resemble. 似てる = casual present.', examples:[{ jp:'あの俳優に似てるって言われる。', romaji:'Ano haiyū ni niteru tte iwareru.', en:'People say I look like that actor.' }], zh:'长得像～', pinyin:'zhǎng de xiàng ~' },
          { jp:'〜と付き合っている', romaji:'~to tsukiatte iru', en:'I\'m dating ~ / going out with ~', tip:'付き合う = to go out with (romantically). 彼氏/彼女ができた = got a boyfriend/girlfriend.', zh:'和～交往中', pinyin:'hé ~ jiāowǎng zhōng' },
          { jp:'失恋した', romaji:'Shitsuren shita', en:'I got dumped / had a breakup', tip:'失恋 (shitsuren) = heartbreak from a breakup. 振られた = was dumped.', zh:'失恋了', pinyin:'shīliàn le' },
        ]
      },
      {
        title: 'Drinking Culture & Nomikai',
        note: '飲み会 (nomikai) = work or social drinking party. Central to Japanese social bonding. 一次会 (ichinijikai) = first venue, 二次会 (nijikai) = second venue (often karaoke). These phrases show cultural fluency.',
        phrases: [
          { jp:'乾杯！', romaji:'Kanpai!', en:'Cheers!', tip:'Wait until everyone has a drink and glasses are raised. Do NOT drink before kanpai.', zh:'干杯！', pinyin:'gānbēi!' },
          { jp:'一杯だけね', romaji:'Ippai dake ne', en:'Just one drink (famous last words)', tip:'The classic opener. Nobody ever just has one.', zh:'就喝一杯', pinyin:'jiù hē yī bēi' },
          { jp:'今日は飲めません', romaji:'Kyō wa nomemasen', en:'I can\'t drink today', tip:'No-pressure culture is improving, but this is the polite out if you need it.', zh:'今天不能喝酒', pinyin:'jīntiān bù néng hē jiǔ' },
          { jp:'おかわりいいですか？', romaji:'Okawari ii desu ka?', en:'Can I have another / a refill?', tip:'おかわり = second serving. Works for food and drink.', zh:'可以再来一杯吗？', pinyin:'kěyǐ zài lái yī bēi ma?' },
          { jp:'二次会はどうする？', romaji:'Nijikai wa dō suru?', en:'What are we doing for the second round?', tip:'二次会 = the next venue after the main party. Often karaoke (カラオケ).', zh:'二场去哪？', pinyin:'èr chǎng qù nǎ?' },
          { jp:'先に失礼します', romaji:'Saki ni shitsurei shimasu', en:'I\'ll be heading off first', tip:'How you leave a gathering early gracefully. Essential phrase.', zh:'我先走了，失礼了', pinyin:'wǒ xiān zǒu le' },
          { jp:'ちゃんぽんしちゃった', romaji:'Chanpon shichatta', en:'I mixed different kinds of alcohol (bad idea)', tip:'ちゃんぽん = mixing drinks. Said sheepishly the morning after.', zh:'混喝了', pinyin:'hùn hē le' },
        ]
      },
      {
        title: 'Complaining & Venting',
        note: 'Japanese people do vent — but indirectly and with permission. These expressions let you sound natural when venting or supporting a friend.',
        phrases: [
          { jp:'ちょっと愚痴っていい？', romaji:'Chotto guchi tte ii?', en:'Can I vent for a sec?', tip:'愚痴 (guchi) = complaint/gripe. 愚痴る = to vent. Asking permission to vent is very Japanese.', zh:'我能抱怨一下吗？', pinyin:'wǒ néng bàoyuàn yīxià ma?' },
          { jp:'疲れた〜', romaji:'Tsukareta~', en:'I\'m so tired / exhausted', tip:'Drawn-out 〜 = emphasis. The fundamental human complaint.', zh:'好累啊', pinyin:'hǎo lèi a' },
          { jp:'もう限界', romaji:'Mō genkai', en:'I\'ve hit my limit / I\'m done', tip:'もう = already/anymore. 限界 = limit. The point of no return.', zh:'已经到极限了', pinyin:'yǐjīng dào jíxiàn le' },
          { jp:'ストレス溜まってる', romaji:'Sutoresu tamatteru', en:'I\'ve been piling up stress', tip:'ストレスが溜まる = stress accumulates. Very natural casual expression.', zh:'积压了很多压力', pinyin:'jīyā le hěnduō yālì' },
          { jp:'うざい', romaji:'Uzai', en:'So annoying / Ugh (casual)', tip:'うざったい contracted. Used freely among friends about situations. Don\'t say directly to someone\'s face.', zh:'烦死了', pinyin:'fán sǐ le' },
          { jp:'うんうん、わかる', romaji:'Un un, wakaru', en:'Yeah yeah, I get it / I feel you', tip:'The empathetic response when someone is venting. Don\'t give advice — just validate with this.', zh:'嗯嗯，我懂', pinyin:'ňg ňg, wǒ dǒng' },
          { jp:'大変だったね', romaji:'Taihen datta ne', en:'That must have been tough / You had it rough', tip:'Acknowledging someone\'s difficulty. 大変 = difficult/hard. The correct empathetic response.', zh:'真的很辛苦呢', pinyin:'zhēn de hěn xīnkǔ ne' },
          { jp:'それは辛いね', romaji:'Sore wa tsurai ne', en:'That\'s rough / That must be hard', tip:'辛い (tsurai) = painful/hard to bear. Different from 辛い (karai) = spicy!', zh:'那真的很难受呢', pinyin:'nà zhēn de hěn nánshòu ne' },
          { jp:'気にしないで', romaji:'Ki ni shinai de', en:'Don\'t let it bother you / Don\'t worry about it', tip:'Comforting a friend. 気にする = to mind/worry about.', zh:'别放在心上', pinyin:'bié fàng zài xīn shàng' },
        ]
      },
      {
        title: 'Gift-Giving Culture (お土産・贈り物)',
        note: 'お土産 (omiyage) is a cornerstone of Japanese social life. Returning from any trip — even a short one — obligates you to bring edible souvenirs for colleagues and friends. The ritual of giving and receiving matters as much as the gift.',
        phrases: [
          { jp:'つまらないものですが', romaji:'Tsumaranai mono desu ga', en:'It\'s nothing special, but… (ritual phrase when giving a gift)', tip:'Do NOT take literally — this is the standard humble opener for presenting a gift. Never praise your own gift. Modesty is built into the act of giving.', zh:'一点小意思，不成敬意', pinyin:'yīdiǎn xiǎo yìsi', zhNote:'一点小意思 in Chinese serves the same ritual self-deprecation function. Very direct parallel.' },
          { jp:'お土産です、どうぞ', romaji:'Omiyage desu, dōzo', en:'This is a souvenir for you, please have it', tip:'お土産 = souvenir/gift from travel. 〜です、どうぞ = here you go. The standard presentation phrase.', zh:'这是给你的特产，请收下', pinyin:'zhè shì gěi nǐ de tèchǎn, qǐng shōuxià' },
          { jp:'ご遠慮なく', romaji:'Go-enryo naku', en:'Please don\'t hold back / Go right ahead', tip:'Permission to accept or eat without hesitation. 遠慮 = restraint. ご遠慮ください = please refrain (the OPPOSITE meaning!) — context is everything.', zh:'请别客气', pinyin:'qǐng bié kèqi' },
          { jp:'気を使わないでください', romaji:'Ki wo tsukawanai de kudasai', en:'You didn\'t have to / Please don\'t trouble yourself', tip:'Said when receiving an unexpected gift. Acknowledges the giver\'s effort and thoughtfulness.', zh:'你太客气了', pinyin:'nǐ tài kèqi le' },
          { jp:'開けてもいいですか？', romaji:'Akete mo ii desu ka?', en:'May I open it?', tip:'In Japan, gifts are often NOT opened in front of the giver — to avoid revealing any disappointment. Asking before opening shows awareness of this norm.', zh:'可以打开吗？', pinyin:'kěyǐ dǎkāi ma?' },
          { jp:'お返しです', romaji:'Okaeshi desu', en:'This is a return gift', tip:'お返し = gift in return. Strong cultural obligation to reciprocate with a gift of roughly half the value. 半返し (han-gaeshi) = half-return.', zh:'这是回礼', pinyin:'zhè shì huí lǐ' },
          { jp:'〜に行ってきました', romaji:'~ni itte kimashita', en:'I went to ~ and came back (omiyage context)', tip:'The standard way to announce you\'ve returned from a trip, naturally leading into distributing omiyage.', examples:[{ jp:'京都に行ってきました、よろしければどうぞ。', romaji:'Kyōto ni itte kimashita, yoroshikereba dōzo.', en:'I went to Kyoto — please have some if you\'d like.' }] },
        ]
      },
      {
        title: 'Seasonal Culture & Events (年中行事)',
        note: '四季 (shiki) — the four seasons — are central to Japanese identity, language, and art. Each season brings distinct events, food, and social rituals. Seasonal awareness is woven into everyday conversation.',
        phrases: [
          { jp:'〜の季節になりましたね', romaji:'~no kisetsu ni narimashita ne', en:'The season of ~ has arrived', tip:'Opening a seasonal observation in conversation. 桜の季節 = cherry blossom season. 梅雨の季節 = rainy season.', zh:'～的季节到了呢', pinyin:'~ de jìjié dào le ne' },
          { jp:'お花見に行きませんか？', romaji:'Ohanami ni ikimasen ka?', en:'Shall we go cherry blossom viewing?', tip:'花見 = flower viewing party under cherry blossoms. Late March–early April. Groups spread blue tarps in parks, eat and drink under the blossoms. One of Japan\'s most beloved social events.', zh:'要不要去赏樱花？', pinyin:'yào bù yào qù shǎng yīnghuā?' },
          { jp:'お正月はどう過ごしましたか？', romaji:'Oshōgatsu wa dō sugoshimashita ka?', en:'How did you spend New Year\'s?', tip:'Standard question back at work on January 4th. Expect answers about 初詣 (shrine visit), おせち (special holiday food), お年玉 (money envelopes for children).', zh:'新年怎么过的？', pinyin:'xīnnián zěnme guò de?' },
          { jp:'暑中お見舞い申し上げます', romaji:'Shochū omimai mōshiagemasu', en:'I hope you\'re keeping well in the summer heat', tip:'Formal summer greeting (July–early August). Sent as a postcard (暑中見舞い). 残暑お見舞い申し上げます = late-summer version (after Aug 8th, 立秋).', zh:'夏日问候（正式书信用语）', pinyin:'xiàrì wènhòu' },
          { jp:'紅葉が綺麗ですね', romaji:'Kōyō ga kirei desu ne', en:'The autumn leaves are beautiful, aren\'t they', tip:'紅葉 (kōyō) = autumn foliage. Japan\'s second most celebrated outdoor season after sakura. 紅葉狩り (kōyōgari) = autumn leaf viewing excursion.', zh:'红叶真美啊', pinyin:'hóngyè zhēn měi a' },
          { jp:'大掃除の季節ですね', romaji:'Ōsōji no kisetsu desu ne', en:'It\'s the season for the big year-end clean', tip:'大掃除 = year-end deep clean. Traditional December ritual where every corner of the house is cleaned before the New Year to start fresh.', zh:'到了大扫除的季节了', pinyin:'dào le dàsǎochú de jìjié le' },
          { jp:'年賀状を書きましたか？', romaji:'Nengajō wo kakimashita ka?', en:'Have you written your New Year\'s cards?', tip:'年賀状 = New Year\'s postcard. Japanese people traditionally send hundreds to maintain relationships. Sent before Dec 31st, delivered Jan 1st. Declining with age but still expected.', zh:'写年贺卡了吗？', pinyin:'xiě nián hèkǎ le ma?' },
        ]
      },
    ]
  },

  {
    id: 'int-work',
    title: 'Work & Professional Life',
    icon: '💼',
    groups: [
      {
        title: 'Meetings & Schedule',
        phrases: [
          { jp:'〜のご都合はいかがでしょうか？', romaji:'~no go-tsugō wa ikaga deshō ka?', en:'How does ~ work for you? (scheduling)', tip:'Most polite way to check availability. ご都合 = your convenience/schedule.', examples:[{ jp:'来週の月曜日のご都合はいかがでしょうか？', romaji:'Raishū no getsuyōbi no go-tsugō wa ikaga deshō ka?', en:'How does next Monday work for you?' }] },
          { jp:'〜で調整しています', romaji:'~de chōsei shite imasu', en:'We\'re arranging it for ~', tip:'調整 = adjustment/coordination. Very common in meeting scheduling.', examples:[{ jp:'来週水曜の午後で調整しています。', romaji:'Raishū suiyō no gogo de chōsei shite imasu.', en:'We\'re arranging it for Wednesday afternoon next week.' }] },
          { jp:'議題を確認させてください', romaji:'Gidai wo kakunin sasete kudasai', en:'Let me confirm the agenda', tip:'議題 = agenda item.', zh:'确认一下议题', pinyin:'quèrèn yīxià yìtí' },
          { jp:'以上です', romaji:'Ijō desu', en:'That\'s all / That concludes this point', tip:'Clean closing phrase for a presentation or agenda item. Essential.', zh:'以上', pinyin:'yǐshàng' },
          { jp:'ご参加ありがとうございました', romaji:'Go-sanka arigatō gozaimashita', en:'Thank you for attending / joining', tip:'Standard phrase to close a meeting or event.' },
          { jp:'〜の件について、共有させてください', romaji:'~no ken ni tsuite, kyōyū sasete kudasai', en:'Let me share something regarding ~', tip:'共有 (kyōyū) = sharing information. Standard meeting opener.', examples:[{ jp:'先週の売上の件について共有させてください。', romaji:'Senshū no uriage no ken ni tsuite kyōyū sasete kudasai.', en:'Let me share something about last week\'s sales.' }] },
          { jp:'それについてはどうお考えですか？', romaji:'Sore ni tsuite wa dō o-kangae desu ka?', en:'What are your thoughts on that?', tip:'Formal way to invite opinion in a meeting. お考え = your thinking (honorific).', zh:'您对此有什么看法？', pinyin:'nín duì cǐ yǒu shénme kànfǎ?' },
          { jp:'後ほど議事録をお送りします', romaji:'Nochihodo gijiroku wo ososedomo shimasu', en:'I\'ll send the meeting minutes later', tip:'議事録 = meeting minutes. Standard closing remark after a meeting.', zh:'稍后发送会议记录', pinyin:'shāo hòu fāsòng huìyì jìlù' },
        ]
      },
      {
        title: 'Deadlines & Progress',
        phrases: [
          { jp:'〜までにお願いします', romaji:'~made ni onegai shimasu', en:'Please have it done by ~', tip:'まで = until/by. 〜までに = by (deadline). The essential deadline phrase.', examples:[{ jp:'金曜日の5時までにお願いします。', romaji:'Kin\'yōbi no goji made ni onegai shimasu.', en:'Please have it done by Friday at 5.' }], zh:'请在～之前完成', pinyin:'qǐng zài ~ zhīqián wánchéng' },
          { jp:'進捗を教えてもらえますか？', romaji:'Shinchoku wo oshiete moraemasu ka?', en:'Could you give me a status update?', tip:'進捗 (shinchoku) = progress/status. The standard check-in question.', zh:'能告诉我进度吗？', pinyin:'néng gàosù wǒ jìndù ma?' },
          { jp:'現在〜%完成しています', romaji:'Genzai ~% kansei shite imasu', en:'Currently ~ % complete', tip:'Standard progress report phrasing.', zh:'目前完成了～%', pinyin:'mùqián wánchéng le ~ %' },
          { jp:'もう少し時間をいただけますか？', romaji:'Mō sukoshi jikan wo itadakemasu ka?', en:'Could I have a little more time?', tip:'Polite deadline extension request.', zh:'能再给我一点时间吗？', pinyin:'néng zài gěi wǒ yīdiǎn shíjiān ma?' },
          { jp:'少し遅れています', romaji:'Sukoshi okurete imasu', en:'I\'m running a bit behind', tip:'遅れる = to be delayed. Honest progress update.', zh:'稍微有点延误', pinyin:'shāowēi yǒudiǎn yánwù' },
          { jp:'完了しました', romaji:'Kanryō shimashita', en:'It\'s been completed / Done!', tip:'完了 = completion. Clean, definitive. 終わりました is slightly more casual.', zh:'已完成', pinyin:'yǐ wánchéng' },
          { jp:'ご確認のほどよろしくお願いいたします', romaji:'Go-kakunin no hodo yoroshiku onegai itashimasu', en:'I kindly ask you to please review this', tip:'The golden email/document review request. Used constantly in Japanese business writing.', zh:'恳请您确认', pinyin:'kěnqǐng nín quèrèn' },
        ]
      },
      {
        title: 'Collaboration & Feedback',
        phrases: [
          { jp:'ご意見をいただけますか？', romaji:'Go-iken wo itadakemasu ka?', en:'Could I get your feedback?', tip:'意見 = opinion/feedback. Humble request for input.', zh:'能给我一些意见吗？', pinyin:'néng gěi wǒ yīxiē yìjiàn ma?' },
          { jp:'ご指摘ありがとうございます', romaji:'Go-shiteki arigatō gozaimasu', en:'Thank you for pointing that out', tip:'指摘 = pointing out an issue. How you graciously accept criticism in Japanese.', zh:'谢谢您的指正', pinyin:'xièxie nín de zhǐzhèng' },
          { jp:'〜について相談があります', romaji:'~ni tsuite sōdan ga arimasu', en:'I have something to discuss about ~', tip:'相談 = consultation/discussion. Politely signals you want to raise an issue.', examples:[{ jp:'プロジェクトの進め方について相談があります。', romaji:'Purojekuto no susume-kata ni tsuite sōdan ga arimasu.', en:'I have something to discuss about how we\'re proceeding with the project.' }] },
          { jp:'もし差し支えなければ', romaji:'Moshi sashitsukae nakereba', en:'If it\'s not a problem / If you don\'t mind', tip:'Ultra-polite condition before a request. 差し支え = inconvenience/obstacle.', zh:'如果方便的话', pinyin:'rúguǒ fāngbiàn de huà' },
          { jp:'〜という形でいかがでしょうか？', romaji:'~to iu katachi de ikaga deshō ka?', en:'How would ~ work? / How about this approach?', tip:'Proposing an approach politely. 形 (katachi) = form/shape/manner.', examples:[{ jp:'月一回のミーティングという形でいかがでしょうか？', romaji:'Tsuki ikkai no mītingu to iu katachi de ikaga deshō ka?', en:'How about we do monthly meetings?' }] },
          { jp:'方向性を確認させてください', romaji:'Hōkōsei wo kakunin sasete kudasai', en:'Let me confirm the direction / approach', tip:'方向性 = direction/approach. Checking alignment before proceeding.', zh:'让我确认一下方向', pinyin:'ràng wǒ quèrèn yīxià fāngxiàng' },
          { jp:'ご確認後、フィードバックをお願いします', romaji:'Go-kakunin go, fīdobakku wo onegai shimasu', en:'After reviewing, please give your feedback', tip:'Standard document review request.', zh:'审阅后请给予反馈', pinyin:'shěnyuè hòu qǐng gěiyǔ fǎnkuì' },
        ]
      },
      {
        title: 'Self-Introduction (自己紹介)',
        note: '自己紹介 (jikoshōkai) is expected whenever you join a new team, attend a group event, or start any new relationship. Structure: name → background → role/interest → 〆 phrase (よろしくお願いします).',
        phrases: [
          { jp:'〜と申します', romaji:'~to mōshimasu', en:'My name is ~ (formal)', tip:'More formal than 〜です. 申す is the humble verb for 言う.', examples:[{ jp:'山田太郎と申します。', romaji:'Yamada Tarō to mōshimasu.', en:'My name is Yamada Tarō.' }] },
          { jp:'〜出身です', romaji:'~shusshin desu', en:'I\'m from ~', tip:'出身 = origin/hometown. Standard self-intro info.', examples:[{ jp:'台湾出身です。', romaji:'Taiwan shusshin desu.', en:'I\'m from Taiwan.' }], zh:'我来自～', pinyin:'wǒ lái zì ~' },
          { jp:'〜を担当しております', romaji:'~wo tantō shite orimasu', en:'I\'m in charge of ~ / I handle ~', tip:'担当 = in charge of. おります = humble form of います.', examples:[{ jp:'マーケティングを担当しております。', romaji:'Māketingu wo tantō shite orimasu.', en:'I\'m in charge of marketing.' }], zh:'我负责～', pinyin:'wǒ fùzé ~' },
          { jp:'〜が好きで、休日は〜をしています', romaji:'~ga suki de, kyūjitsu wa ~ wo shite imasu', en:'I like ~, and on days off I ~', tip:'Adds personality to a self-intro.', examples:[{ jp:'料理が好きで、休日はよく新しいレシピを試しています。', romaji:'Ryōri ga suki de, kyūjitsu wa yoku atarashii reshipi wo tameshite imasu.', en:'I like cooking, and on days off I often try new recipes.' }] },
          { jp:'ご指導のほど、よろしくお願いします', romaji:'Go-shidō no hodo, yoroshiku onegai shimasu', en:'I look forward to your guidance', tip:'Said to superiors/seniors when starting a new role. 指導 = guidance/teaching.', zh:'还请多多指教', pinyin:'hái qǐng duōduō zhǐjiào', zhNote:'请多多指教 is the near-identical Chinese phrase at the start of new relationships.' },
          { jp:'わからないことがあれば、何でも聞いてください', romaji:'Wakaranai koto ga areba, nandemo kiite kudasai', en:'If there\'s anything you don\'t understand, please ask me anything', tip:'Said to new colleagues or juniors — signals you\'re approachable.' },
        ]
      },
      {
        title: 'Work-Life & Wellbeing',
        phrases: [
          { jp:'有給を取りたいんですが', romaji:'Yūkyū wo toritai n desu ga', en:'I\'d like to take paid leave', tip:'有給 (yūkyū) = paid vacation days. Short for 有給休暇.', zh:'我想请带薪假', pinyin:'wǒ xiǎng qǐng dàixīn jià' },
          { jp:'テレワークさせていただけますか？', romaji:'Terewāku sasete itadakemasu ka?', en:'Could I work remotely?', tip:'テレワーク = remote work. 在宅勤務 (zaitage kinmu) is another common term.', zh:'我可以远程办公吗？', pinyin:'wǒ kěyǐ yuǎnchéng bàngōng ma?' },
          { jp:'今日は体調が悪くて', romaji:'Kyō wa taichō ga warukute', en:'I\'m not feeling well today (sick leave opener)', tip:'体調が悪い = physical condition is bad. Follow with 休ませてください.', zh:'我今天身体不太好', pinyin:'wǒ jīntiān shēntǐ bù tài hǎo' },
          { jp:'残業になってしまいます', romaji:'Zangyō ni natte shimaimasu', en:'I\'ll end up doing overtime', tip:'残業 (zangyō) = overtime. 〜になってしまう = end up (slightly reluctant).', zh:'要加班了', pinyin:'yào jiābān le' },
          { jp:'無理しないでください', romaji:'Muri shinai de kudasai', en:'Please don\'t push yourself / Don\'t overdo it', tip:'Said to stressed colleagues. Shows care.', zh:'别勉强自己', pinyin:'bié miǎnqiǎng zìjǐ' },
          { jp:'ちょっと相談してもいいですか？', romaji:'Chotto sōdan shite mo ii desu ka?', en:'Do you have a moment? / Can I discuss something with you?', tip:'Non-threatening way to raise an issue with a colleague.', zh:'方便聊一下吗？', pinyin:'fāngbiàn liáo yīxià ma?' },
          { jp:'お先に失礼します', romaji:'Osaki ni shitsurei shimasu', en:'Excuse me for leaving before you', tip:'What you say when leaving the office before colleagues. Ubiquitous in Japanese workplaces.', zh:'我先走了', pinyin:'wǒ xiān zǒu le' },
          { jp:'仕事終わった！飲みいかない？', romaji:'Shigoto owatta! Nomi ikanai?', en:'Work\'s done! Wanna grab a drink?', tip:'The after-work invitation. Casual and very natural.', zh:'下班了！去喝一杯？', pinyin:'xiàbān le! qù hē yī bēi?' },
        ]
      },
      {
        title: 'Job Interviews (面接・就活)',
        note: '就活 (shūkatsu) = job-hunting activities. 面接 (mensetsu) = interview. Japanese interviews are highly structured. Expect questions about 志望動機 (motivation to apply) and 自己PR (self-promotion pitch). Memorize these structures.',
        phrases: [
          { jp:'御社を志望した理由は〜です', romaji:'Onsha wo shibō shita riyū wa ~ desu', en:'The reason I applied to your company is ~', tip:'御社 = your company (spoken). 貴社 = your company (written). Never mix them up. 志望動機 = motivation for applying — the first interview question.', examples:[{ jp:'御社の革新的な社風に魅力を感じ、志望しました。', romaji:'Onsha no kakushinteki na shafū ni miryoku wo kanji, shibō shimashita.', en:'I was drawn to your company\'s innovative culture.' }], zh:'我应聘贵公司的原因是～', pinyin:'wǒ yìngpìn guì gōngsī de yuányīn shì ~' },
          { jp:'自己PRをお願いします', romaji:'Jiko-PR wo onegai shimasu', en:'Please tell us about yourself / Please give your self-promotion pitch', tip:'自己PR (jiko piāru) = self-promotion. 1-2 minutes on your core strength + concrete evidence + how it benefits this company. Structure everything this way.', zh:'请做一下自我介绍和自我推销', pinyin:'qǐng zuò yīxià zìwǒ jièshào' },
          { jp:'私の強みは〜です', romaji:'Watashi no tsuyomi wa ~ desu', en:'My strength is ~', tip:'強み (tsuyomi) = strong point. Always follow with 具体的なエピソード (a concrete episode). Never state a strength without evidence.', examples:[{ jp:'私の強みはコミュニケーション能力です。', romaji:'Watashi no tsuyomi wa komyunikēshon nōryoku desu.', en:'My strength is my communication ability.' }] },
          { jp:'〜という経験があります', romaji:'~to iu keiken ga arimasu', en:'I have experience in ~ / I\'ve experienced ~', tip:'Backing up your self-PR with concrete evidence. 経験 (keiken) = experience. Essential structure.', examples:[{ jp:'インターンシップで顧客対応の経験があります。', romaji:'Intānshippu de kokyaku taiō no keiken ga arimasu.', en:'I have experience handling customers from my internship.' }] },
          { jp:'入社した際には〜していきたいと思います', romaji:'Nyūsha shita sai ni wa ~ shite ikitai to omoimasu', en:'If I join, I hope to ~ going forward', tip:'Future-oriented answer showing you\'ve thought about your contribution. 〜していく shows gradual, ongoing effort.', zh:'如果入职，我希望能持续地～', pinyin:'rúguǒ rùzhí, wǒ xīwàng néng chíxù de ~' },
          { jp:'御社の〜という点に魅力を感じました', romaji:'Onsha no ~ to iu ten ni miryoku wo kanjimashita', en:'I was attracted to your company\'s ~ aspect', tip:'Shows you\'ve researched the company. Fill in with something specific: 社風 (company culture), 事業内容 (business content), 成長性 (growth potential).', zh:'我对贵公司的～方面感到很有吸引力', pinyin:'wǒ duì guì gōngsī de ~ fāngmiàn gǎndào hěn yǒu xīyǐnlì' },
          { jp:'本日はお時間をいただきありがとうございました', romaji:'Honjitsu wa ojikan wo itadaki arigatō gozaimashita', en:'Thank you for your time today', tip:'How you close an interview with maximum formality. Always bow as you say this. お時間をいただく = receiving the honor of your time.', zh:'感谢您今天抽出时间', pinyin:'gǎnxiè nín jīntiān chōuchū shíjiān' },
        ]
      },
      {
        title: 'Client & Customer Relations',
        note: 'Japanese business culture draws a sharp line between inside (内, uchi) and outside (外, soto). Your language shifts dramatically depending on whether you\'re talking to internal colleagues or external clients.',
        phrases: [
          { jp:'いつもお世話になっております', romaji:'Itsumo osewa ni natte orimasu', en:'Thank you for your continued support (business relationship opener)', tip:'Opens every business call, email, and visit. Untranslatable — acknowledges the ongoing relationship. Say it even if you\'ve never met. Skipping it sounds cold.', zh:'一直承蒙关照', pinyin:'yīzhí chéngméng guānzhào' },
          { jp:'〜の件でご連絡いたしました', romaji:'~no ken de go-renraku itashimashita', en:'I\'m contacting you regarding ~', tip:'Standard email/call opener after the greeting line. 件 (ken) = matter, subject. いたしました = humble past of しました.', zh:'我联系您是关于～事宜', pinyin:'wǒ liánxì nín shì guānyú ~ shìyí' },
          { jp:'ご確認のほどよろしくお願いいたします', romaji:'Go-kakunin no hodo yoroshiku onegai itashimasu', en:'I kindly ask for your review', tip:'The golden review-request phrase in Japanese business writing. Used constantly at the end of emails with attached documents. ほど softens the request elegantly.', zh:'恳请您确认', pinyin:'kěnqǐng nín quèrèn' },
          { jp:'取り急ぎご連絡まで', romaji:'Toriisogigorenraku made', en:'This is a quick message to let you know', tip:'Email/message closing phrase. Literally "rushing to notify you". Used when sending urgent or preliminary information before a full response.', zh:'仅作紧急通知', pinyin:'jǐn zuò jǐnjí tōngzhī' },
          { jp:'ご不明な点がございましたら、お気軽にお申し付けください', romaji:'Go-fumei na ten ga gozaimashitara, okigaru ni omōshitsuke kudasai', en:'If you have any questions, please don\'t hesitate to ask', tip:'Classic email/letter closing line. ございましたら = ultra-polite conditional of あったら.', zh:'如有任何疑问，请随时告知', pinyin:'rú yǒu rènhé yíwèn, qǐng suíshí gàozhī' },
          { jp:'引き続きよろしくお願いいたします', romaji:'Hikitsuzuki yoroshiku onegai itashimasu', en:'I look forward to your continued cooperation', tip:'Closes emails to clients or long-term partners. 引き続き = continuing, going forward. The relationship-maintenance closing phrase.', zh:'请继续多多关照', pinyin:'qǐng jìxù duōduō guānzhào' },
        ]
      },
    ]
  },

  {
    id: 'int-daily',
    title: 'Daily Life & Errands',
    icon: '🏪',
    groups: [
      {
        title: 'At the Convenience Store (コンビニ)',
        note: 'コンビニ (konbini) = convenience store. Japan\'s 7-Eleven, Lawson, and FamilyMart are extraordinarily useful — you can pay bills, print documents, buy tickets, and eat well. Knowing these phrases unlocks daily life.',
        phrases: [
          { jp:'温めますか？', romaji:'Atatamemasu ka?', en:'Would you like it warmed up?', tip:'What the cashier asks when you buy hot food (弁当, onigiri etc.). Yes = はい、お願いします. No = 大丈夫です。', zh:'需要加热吗？', pinyin:'xūyào jiārè ma?' },
          { jp:'袋はご利用ですか？', romaji:'Fukuro wa go-riyō desu ka?', en:'Would you like a bag?', tip:'Since Japan\'s plastic bag charge (2020), this is asked at every checkout. 袋はいりません = I don\'t need a bag.', zh:'需要袋子吗？', pinyin:'xūyào dàizi ma?' },
          { jp:'ポイントカードはお持ちですか？', romaji:'Pointo kādo wa omochi desu ka?', en:'Do you have a points card?', tip:'Loyalty card question at every checkout. ありません = I don\'t have one. 大丈夫です = I\'m fine (no thank you).', zh:'有积分卡吗？', pinyin:'yǒu jīfēn kǎ ma?' },
          { jp:'お箸はおつけしますか？', romaji:'Ohashi wa otsuke shimasu ka?', en:'Would you like chopsticks?', tip:'Asked with bento or rice balls. お箸 = chopsticks. おつけする = humble form of つける (to attach/add).', zh:'需要筷子吗？', pinyin:'xūyào kuàizi ma?' },
          { jp:'〜をコピーしたいのですが', romaji:'~wo kopī shitai no desu ga', en:'I\'d like to make a copy of ~', tip:'Convenience store printers/copiers are full-service. Ask staff for help. コンビニのコピー機 = kombini copy machine.', zh:'我想复印～', pinyin:'wǒ xiǎng fùyìn ~' },
          { jp:'〜の支払いはできますか？', romaji:'~no shiharai wa dekimasu ka?', en:'Can I pay my ~ bill here?', tip:'You can pay utility bills, credit card bills, and online orders at the counter. Just show the barcode.', zh:'可以在这里交～的费吗？', pinyin:'kěyǐ zài zhèlǐ jiāo ~ de fèi ma?' },
          { jp:'ATMはどこですか？', romaji:'ATM wa doko desu ka?', en:'Where is the ATM?', tip:'Every konbini has one. Japanese ATMs often accept international cards — combini ATMs (especially 7-Bank) are most foreigner-friendly.', zh:'ATM在哪里？', pinyin:'ATM zài nǎlǐ?' },
        ]
      },
      {
        title: 'At the Pharmacy (薬局)',
        note: '薬局 (yakkyoku) = pharmacy/drugstore. Chains like Matsumoto Kiyoshi and Tsuruha are everywhere. Many OTC medicines have no English label — knowing these questions will help.',
        phrases: [
          { jp:'〜に効く薬はありますか？', romaji:'~ni kiku kusuri wa arimasu ka?', en:'Do you have medicine for ~?', tip:'効く = to be effective. Fill in with: 頭痛 (headache), 風邪 (cold), 花粉症 (hay fever), 胃痛 (stomachache).', examples:[{ jp:'頭痛に効く薬はありますか？', romaji:'Zutsū ni kiku kusuri wa arimasu ka?', en:'Do you have medicine for a headache?' }], zh:'有治～的药吗？', pinyin:'yǒu zhì ~ de yào ma?' },
          { jp:'一日何回飲みますか？', romaji:'Ichinichi nankai nomimasu ka?', en:'How many times a day should I take this?', tip:'Important question before taking any medicine. The answer will be 1回、2回、or 3回, usually with meals (食後 = after meals).', zh:'一天服几次？', pinyin:'yītiān fú jǐ cì?' },
          { jp:'アレルギーがあります', romaji:'Arerugī ga arimasu', en:'I have an allergy', tip:'Follow with: 〜アレルギーがあります (I\'m allergic to ~). 卵アレルギー = egg allergy. 花粉症 (kafunshō) = hay fever/pollen allergy.', zh:'我有过敏', pinyin:'wǒ yǒu guòmǐn' },
          { jp:'処方箋が必要ですか？', romaji:'Shohōsen ga hitsuyō desu ka?', en:'Do I need a prescription?', tip:'処方箋 = prescription. Many medicines that require a prescription in other countries are OTC in Japan.', zh:'需要处方吗？', pinyin:'xūyào chǔfāng ma?' },
          { jp:'副作用はありますか？', romaji:'Fukusayō wa arimasu ka?', en:'Are there any side effects?', tip:'副作用 = side effects. Good to ask, though the pharmacist\'s answer may require follow-up questions.', zh:'有副作用吗？', pinyin:'yǒu fùzuòyòng ma?' },
          { jp:'日焼け止めはどこですか？', romaji:'Hiyakedome wa doko desu ka?', en:'Where is the sunscreen?', tip:'日焼け止め = sunscreen. Japanese sunscreens are some of the best in the world. SPF50+ PA++++ is standard.', zh:'防晒霜在哪里？', pinyin:'fángshaì shuāng zài nǎlǐ?' },
        ]
      },
      {
        title: 'At the Post Office (郵便局)',
        note: '郵便局 (yūbinkyoku) = post office. Japan Post is efficient and its post offices are everywhere. You can also do basic banking at Japan Post.',
        phrases: [
          { jp:'これをアメリカに送りたいのですが', romaji:'Kore wo Amerika ni okuritai no desu ga', en:'I\'d like to send this to America', tip:'Replace アメリカ with any country. The clerk will ask if you want surface or air mail.', zh:'我想把这个寄到美国', pinyin:'wǒ xiǎng bǎ zhège jì dào Měiguó' },
          { jp:'船便と航空便、どちらがいいですか？', romaji:'Funabin to kōkūbin, dochira ga ii desu ka?', en:'Which is better, sea mail or airmail?', tip:'船便 (funabin) = sea mail (cheaper, slower). 航空便 (kōkūbin) = airmail (faster, more expensive). EMS = Express Mail Service (fastest).', zh:'普通海运和航空哪个好？', pinyin:'pǔtōng hǎiyùn hé hángkōng nǎge hǎo?' },
          { jp:'保険をかけますか？', romaji:'Hoken wo kakemasu ka?', en:'Would you like insurance on it?', tip:'Optional for valuable items. The clerk will ask if the contents are fragile or valuable.', zh:'需要投保吗？', pinyin:'xūyào tóubǎo ma?' },
          { jp:'追跡番号はありますか？', romaji:'Tsuiseki bangō wa arimasu ka?', en:'Is there a tracking number?', tip:'追跡 = tracking. EMS and registered mail come with tracking. 荷物を追跡する = to track a package.', zh:'有追踪号码吗？', pinyin:'yǒu zhuīzōng hàomǎ ma?' },
          { jp:'不在票が入っていました', romaji:'Fuzaihyō ga haitte imashita', en:'There was a "missed delivery" slip', tip:'不在票 = the red/pink card left when you miss a delivery. Has a number to call or a URL to reschedule. You can also redelivery at a konbini.', zh:'收到了没人在家的通知单', pinyin:'shōudào le méi rén zàijiā de tōngzhīdān' },
        ]
      },
      {
        title: 'Banking & Money (銀行・お金)',
        phrases: [
          { jp:'口座を開きたいのですが', romaji:'Kōza wo hirakitai no desu ga', en:'I\'d like to open an account', tip:'口座 = bank account. Japan Post Bank (ゆうちょ銀行) and 7-Bank are most accessible for foreign residents. Bring your 在留カード and passport.', zh:'我想开户', pinyin:'wǒ xiǎng kāihù' },
          { jp:'ATMの使い方がわかりません', romaji:'ATM no tsukaikata ga wakarimasen', en:'I don\'t know how to use the ATM', tip:'ATMs in Japan often have an English mode (英語) — tap the flag icon. 7-Bank and Japan Post ATMs are most foreigner-friendly.', zh:'我不会用这台ATM', pinyin:'wǒ bù huì yòng zhè tái ATM' },
          { jp:'両替をお願いしたいのですが', romaji:'Ryōgae wo onegai shitai no desu ga', en:'I\'d like to exchange currency', tip:'両替 = currency exchange. Banks, post offices, and airport exchange counters. Some dept stores (デパート) also exchange. Hotel rates are worse.', zh:'我想换外币', pinyin:'wǒ xiǎng huàn wàibì' },
          { jp:'〜円に両替してください', romaji:'~en ni ryōgae shite kudasai', en:'Please exchange to ~ yen', tip:'Specify the amount. You\'ll need your passport for foreign currency exchange.', examples:[{ jp:'一万円に両替してください。', romaji:'Ichiman-en ni ryōgae shite kudasai.', en:'Please exchange to 10,000 yen.' }], zh:'请换成～日元', pinyin:'qǐng huànchéng ~ rìyuán' },
          { jp:'振込手数料はかかりますか？', romaji:'Furikomi tesūryō wa kakarimasu ka?', en:'Is there a transfer fee?', tip:'振込 (furikomi) = bank transfer. 手数料 (tesūryō) = handling fee. Japanese bank transfers can have fees, especially between different banks.', zh:'转账有手续费吗？', pinyin:'zhuǎnzhàng yǒu shǒuxùfèi ma?' },
          { jp:'お釣りが違います', romaji:'Otsuri ga chigaimasu', en:'My change is incorrect', tip:'お釣り = change (from a cash transaction). 違います = is wrong/different. Polite but direct.', zh:'零钱找错了', pinyin:'língqián zhǎo cuò le' },
        ]
      },
      {
        title: 'Apartment & Neighborhood',
        note: '賃貸 (chintai) = rental. 不動産 (fudōsan) = real estate. Finding and living in a Japanese apartment involves specific vocabulary and customs — especially the upfront costs and neighbor relations.',
        phrases: [
          { jp:'家賃はいくらですか？', romaji:'Yachin wa ikura desu ka?', en:'How much is the rent?', tip:'家賃 (yachin) = rent. 管理費 (kanrihi) = maintenance fee (often on top of rent). 共益費 (kyōekihi) = common area fee.', zh:'房租多少钱？', pinyin:'fángzū duōshǎo qián?' },
          { jp:'敷金・礼金はかかりますか？', romaji:'Shikikin / reikin wa kakarimasu ka?', en:'Are there deposit / key money fees?', tip:'敷金 (shikikin) = security deposit (refunded). 礼金 (reikin) = key money (NOT refunded — traditional gift to landlord). Usually 1-2 months each.', zh:'需要押金和礼金吗？', pinyin:'xūyào yājīn hé lǐjīn ma?' },
          { jp:'ゴミの出し方を教えてください', romaji:'Gomi no dashikata wo oshiete kudasai', en:'Please tell me how to put out the trash', tip:'Japanese garbage separation is strict: 燃えるゴミ (burnable), 燃えないゴミ (non-burnable), 資源ゴミ (recyclables). Days vary by neighborhood.', zh:'请告诉我怎么扔垃圾', pinyin:'qǐng gàosù wǒ zěnme rēng lājī' },
          { jp:'隣に引っ越してきました。よろしくお願いします', romaji:'Tonari ni hikkoshite kimashita. Yoroshiku onegai shimasu.', en:'I\'ve moved in next door. Please take care of me.', tip:'The standard greeting when moving in. Bring a small gift (タオルや洗剤など — towels or detergent are safe). Visit each neighbor on your floor.', zh:'我刚搬来隔壁，请多关照', pinyin:'wǒ gāng bān lái gébì, qǐng duō guānzhào' },
          { jp:'騒音が気になっています', romaji:'Sōon ga ki ni natte imasu', en:'I\'ve been bothered by the noise', tip:'騒音 (sōon) = noise/sound disturbance. 気になる = to be bothered/concerned about. Polite indirect way to raise a noise issue with a neighbor.', zh:'噪音让我很困扰', pinyin:'zàoyīn ràng wǒ hěn kùnrǎo' },
          { jp:'水道が壊れています', romaji:'Suidō ga kowarete imasu', en:'The plumbing is broken', tip:'水道 = water supply. 壊れる = to break down. Report to your 管理会社 (management company) or 大家さん (landlord). Keep their contact in your phone.', zh:'水管坏了', pinyin:'shuǐguǎn huài le' },
        ]
      },
    ]
  },

  {
    id: 'int-nature',
    title: 'Nature, Seasons & Outdoors',
    icon: '🌿',
    groups: [
      {
        title: 'Appreciating Nature (自然)',
        note: '自然 (shizen) = nature. Japanese has deeply specific vocabulary for natural beauty — much of it untranslatable. These words are used in everyday conversation, not just poetry.',
        phrases: [
          { jp:'景色がいいですね', romaji:'Keshiki ga ii desu ne', en:'The scenery is beautiful, isn\'t it', tip:'景色 (keshiki) = scenery/view. 絶景 (zekkei) = breathtaking/extraordinary view. Often said at viewpoints, hilltops, or scenic train windows.', zh:'风景真好啊', pinyin:'fēngjǐng zhēn hǎo a' },
          { jp:'木漏れ日がきれい', romaji:'Komorebi ga kirei', en:'The light filtering through the leaves is beautiful', tip:'木漏れ日 = sunlight dappling through leaves — a uniquely Japanese word with no direct English equivalent. Perfectly captures a specific experience.', zh:'（无对应词）阳光透过树叶的样子', pinyin:'(no direct equivalent)' },
          { jp:'山が雪をかぶっている', romaji:'Yama ga yuki wo kabutte iru', en:'The mountains are capped with snow', tip:'雪をかぶる = to be covered with snow (literally "wearing snow"). A natural description of a snowcapped peak.', zh:'山上覆盖着雪', pinyin:'shān shàng fùgài zhe xuě' },
          { jp:'空気が澄んでいる', romaji:'Kūki ga sunde iru', en:'The air is crisp and clear', tip:'澄む (sumu) = to become clear/pure. Said of mountain air, autumn air, or post-rain freshness.', zh:'空气很清新', pinyin:'kōngqì hěn qīngxīn' },
          { jp:'夕焼けがきれいだ', romaji:'Yūyake ga kirei da', en:'The sunset is beautiful', tip:'夕焼け (yūyake) = evening glow/sunset. 朝焼け (asayake) = dawn/sunrise glow. 焼ける = to burn/glow.', zh:'晚霞真美', pinyin:'wǎnxiá zhēn měi' },
          { jp:'もうすぐ梅雨ですね', romaji:'Mōsugu tsuyu desu ne', en:'The rainy season is almost here', tip:'梅雨 (tsuyu) = Japan\'s rainy season (mid-June–mid-July). 梅雨明け (tsuyu-ake) = end of the rainy season. A major seasonal marker in everyday conversation.', zh:'快到梅雨季了', pinyin:'kuài dào méiyǔ jì le' },
          { jp:'台風が来ているみたいです', romaji:'Taifū ga kite iru mitai desu', en:'Looks like a typhoon is coming', tip:'台風 (taifū) = typhoon. Japan gets direct hits from typhoons June–October. 暴風警報 = storm warning. 外出自粛 = stay-indoors advisory.', zh:'好像台风要来了', pinyin:'hǎoxiàng táifēng yào lái le' },
          { jp:'花粉症がひどい', romaji:'Kafunshō ga hidoi', en:'My hay fever is really bad', tip:'花粉症 (kafunshō) = pollen allergy/hay fever. Affects ~40% of Japanese people (mainly cedar pollen in spring). One of the top health topics in spring conversation.', zh:'花粉症很严重', pinyin:'huāfěn zhèng hěn yánzhòng' },
        ]
      },
      {
        title: 'Onsen Culture (温泉)',
        note: '温泉 (onsen) = hot spring bath. One of Japan\'s most beloved cultural experiences. There are strict rules. Tattoos are prohibited in most facilities. Soap before entering, no swimwear, total silence and relaxation.',
        phrases: [
          { jp:'露天風呂はありますか？', romaji:'Roten-buro wa arimasu ka?', en:'Is there an outdoor bath?', tip:'露天風呂 (roten-buro) = outdoor open-air bath. 内湯 (uchiyu) = indoor bath. The outdoor one is usually the premium experience.', zh:'有露天温泉吗？', pinyin:'yǒu lùtiān wēnquán ma?' },
          { jp:'入り方を教えていただけますか？', romaji:'Irikata wo oshiete itadakemasu ka?', en:'Could you tell me the proper way to enter?', tip:'Polite way to ask onsen etiquette. The basics: shower thoroughly first, no towel in the water, tie back long hair, no diving or loud noise.', zh:'能告诉我怎么进去吗？', pinyin:'néng gàosù wǒ zěnme jìnqù ma?' },
          { jp:'タトゥーがあるのですが…', romaji:'Tatū ga aru no desu ga…', en:'I have a tattoo… (disclosure)', tip:'Most public onsen prohibit tattoos. Some ryokan have private baths (貸切風呂) that allow them. Trailing off politely invites the staff to explain the policy.', zh:'我有纹身……', pinyin:'wǒ yǒu wénshēn...' },
          { jp:'かけ湯をしてください', romaji:'Kakeyu wo shite kudasai', en:'Please pour water over yourself first', tip:'かけ湯 = preliminary rinse before entering the communal bath. An essential etiquette step. Signage will often remind guests.', zh:'请先用水冲一下身体', pinyin:'qǐng xiān yòng shuǐ chōng yīxià shēntǐ' },
          { jp:'泉質は何ですか？', romaji:'Sensha wa nan desu ka?', en:'What kind of spring water is it?', tip:'泉質 (sensha) = type of hot spring. Types include: 硫黄 (sulfur), 炭酸 (carbonated), 塩化物 (chloride), 放射能泉 (radon — common in Japan, therapeutic). Knowing the type lets you understand the health benefits.', zh:'是什么泉质？', pinyin:'shì shénme quán zhì?' },
          { jp:'サウナがありますか？', romaji:'Sauna ga arimasu ka?', en:'Is there a sauna?', tip:'Sauna culture (サウナ) has exploded in Japan. ととのう (totonou) = the meditative state of equilibrium after alternating between sauna and cold plunge. A key sauna vocabulary word.', zh:'有桑拿吗？', pinyin:'yǒu sāngná ma?' },
          { jp:'のぼせてしまいました', romaji:'Nobosete shimaimashita', en:'I got dizzy from the heat', tip:'のぼせる = to feel faint/get too hot in a bath. Very common. Remedy: sit on the edge of the bath, drink water, rest.', zh:'我被热晕了', pinyin:'wǒ bèi rè yūn le' },
        ]
      },
      {
        title: 'Hiking & Outdoors (山・ハイキング)',
        note: '登山 (tozan) = mountain climbing. ハイキング = hiking. Japan has outstanding hiking — from well-maintained trails with mountain huts (山小屋) to serious alpine routes. These phrases prepare you for trails and mountain huts.',
        phrases: [
          { jp:'この登山道は初心者向けですか？', romaji:'Kono tozandō wa shoshinsha-muke desu ka?', en:'Is this hiking trail suitable for beginners?', tip:'登山道 = mountain trail. 初心者向け = for beginners. Also ask: 何時間かかりますか？= how long does it take?', zh:'这条登山路适合新手吗？', pinyin:'zhè tiáo dēngshān lù shìhé xīnshǒu ma?' },
          { jp:'山頂まであとどのくらいですか？', romaji:'Sanchō made ato dono kurai desu ka?', en:'How much further to the summit?', tip:'山頂 (sanchō) = mountain summit/peak. あとどのくらい = how much more. An essential question mid-climb.', zh:'离山顶还有多远？', pinyin:'lí shāndǐng hái yǒu duōyuǎn?' },
          { jp:'今日の天気予報はどうですか？', romaji:'Kyō no tenki yohō wa dō desu ka?', en:'What\'s the weather forecast for today?', tip:'天気予報 (tenki yohō) = weather forecast. Check before any mountain hike in Japan — weather changes fast in the mountains. 山の天気 = mountain weather.', zh:'今天的天气预报怎么样？', pinyin:'jīntiān de tiānqì yùbào zěnmeyàng?' },
          { jp:'道に迷ってしまいました', romaji:'Michi ni mayotte shimaimashita', en:'I got lost on the trail', tip:'道に迷う = to get lost. しまいました adds the nuance of "unfortunately ended up". Tell your location using trail markers (標識) numbers if possible.', zh:'我迷路了', pinyin:'wǒ mílù le' },
          { jp:'足がつってしまいました', romaji:'Ashi ga tsurtte shimaimashita', en:'I got a leg cramp', tip:'足がつる = to get a cramp in the leg. A common mountain ailment. Sit, stretch, and hydrate. 休憩 (kyūkei) = rest break.', zh:'我腿抽筋了', pinyin:'wǒ tuǐ chōujīn le' },
          { jp:'山小屋は予約が必要ですか？', romaji:'Yamagoya wa yoyaku ga hitsuyō desu ka?', en:'Do mountain huts need a reservation?', tip:'山小屋 (yamagoya) = mountain hut. On popular routes (Fuji, etc.) reservation is mandatory in season. Includes dinner and breakfast.', zh:'山屋需要预约吗？', pinyin:'shān wū xūyào yùyuē ma?' },
          { jp:'熊に注意', romaji:'Kuma ni chūi', en:'Beware of bears', tip:'熊 (kuma) = bear. Japanese black bears inhabit mountains and forests. Bells (熊鈴, kumazuzu) and making noise on the trail are the standard precautions.', zh:'注意熊出没', pinyin:'zhùyì xióng chūmò' },
        ]
      },
      {
        title: 'Festival Culture (お祭り)',
        note: '祭り (matsuri) = festival. Japan\'s summer festivals are among the most colorful in the world. 浴衣 (yukata), 屋台 (food stalls), 花火 (fireworks), 盆踊り (Bon dance) — each summer brings dozens of local matsuri.',
        phrases: [
          { jp:'近くに祭りがありますか？', romaji:'Chikaku ni matsuri ga arimasu ka?', en:'Is there a festival nearby?', tip:'Ask at your hotel or check local tourism boards. Summer is packed with matsuri. Many are free and family-friendly.', zh:'附近有祭典吗？', pinyin:'fùjìn yǒu jìdiǎn ma?' },
          { jp:'浴衣を着ていきませんか？', romaji:'Yukata wo kite ikimasen ka?', en:'Shall we wear yukata and go?', tip:'浴衣 (yukata) = casual summer kimono worn to festivals. Many hotels and rental shops offer yukata for hire. You\'ll fit in perfectly.', zh:'要不要穿浴衣去？', pinyin:'yào bù yào chuān yùyī qù?' },
          { jp:'屋台で食べよう！', romaji:'Yatai de tabeyō!', en:'Let\'s eat at the food stalls!', tip:'屋台 (yatai) = festival food stall. Classics: 焼きそば (yakisoba), 唐揚げ (karaage), たこ焼き (takoyaki), かき氷 (shaved ice), りんご飴 (candy apple).', zh:'去小摊子吃东西吧！', pinyin:'qù xiǎo tān zi chī dōngxi ba!' },
          { jp:'花火が上がった！', romaji:'Hanabi ga agatta!', en:'The fireworks have started!', tip:'花火大会 (hanabi taikai) = fireworks display. Held on summer evenings. Major ones (隅田川花火大会 etc.) draw hundreds of thousands of people.', zh:'烟花放起来了！', pinyin:'yānhuā fàng qǐlái le!' },
          { jp:'一緒に盆踊りを踊りませんか？', romaji:'Issho ni bon-odori wo odorimasen ka?', en:'Shall we dance the Bon Odori together?', tip:'盆踊り (bon-odori) = traditional dance performed at summer Obon festivals. Everyone joins in — foreigners are enthusiastically welcomed.', zh:'一起跳盂兰盆舞吗？', pinyin:'yīqǐ tiào yúlánpén wǔ ma?' },
          { jp:'金魚すくいやってみない？', romaji:'Kingyo-sukui yatte minaī?', en:'Want to try the goldfish scooping game?', tip:'金魚すくい = festival game where you scoop goldfish with a fragile paper net. 輪投げ (ring toss), スーパーボールすくい (rubber ball scoop) are other classics.', zh:'要不要玩捞金鱼？', pinyin:'yào bù yào wán lāo jīnyú?' },
        ]
      },
    ]
  },
];
