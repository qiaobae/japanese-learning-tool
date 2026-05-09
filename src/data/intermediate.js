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
    ]
  },
];
