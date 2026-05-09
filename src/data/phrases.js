// Each phrase: { jp, romaji, en, zh?, pinyin?, zhNote?, tip?, audio? }

export const sections = [
  {
    id: 'core',
    title: 'Core Phrases',
    icon: '💬',
    groups: [
      {
        title: 'Greetings',
        phrases: [
          { jp:'おはようございます', romaji:'Ohayou gozaimasu', en:'Good morning',         zh:'早上好', pinyin:'zǎoshang hǎo', zhNote:'Same time of day. Use until ~10am.' },
          { jp:'こんにちは',         romaji:'Konnichiwa',       en:'Hello / Good afternoon', zh:'你好 / 下午好', pinyin:'nǐ hǎo / xiàwǔ hǎo', zhNote:'Most common greeting. Works any time of day.' },
          { jp:'こんばんは',         romaji:'Konbanwa',         en:'Good evening',           zh:'晚上好', pinyin:'wǎnshang hǎo', zhNote:'Same structure: time-of-day + greeting.' },
          { jp:'さようなら',         romaji:'Sayōnara',         en:'Goodbye (formal, won\'t see soon)', zh:'再见', pinyin:'zàijiàn', zhNote:'Don\'t use sayōnara casually — it implies a long goodbye.' },
          { jp:'またね / じゃあね',  romaji:'Mata ne / Jaa ne', en:'See you / Bye (casual)',  zh:'回头见 / 待会见', pinyin:'huítou jiàn / dāihuì jiàn', zhNote:'Use this with friends, not strangers.' },
          { jp:'おやすみなさい',     romaji:'Oyasumi nasai',    en:'Good night',             zh:'晚安', pinyin:'wǎn\'ān', zhNote:'Literally "please rest". Used before bed.' },
          { jp:'いってきます',        romaji:'Itte kimasu',      en:'I\'m heading out! (said when leaving home)', tip:'The ritual departure phrase. Host responds: いってらっしゃい (itterasshai).' },
          { jp:'ただいま',           romaji:'Tadaima',          en:'I\'m home!',             tip:'Said on returning. Hosts respond: おかえり (okaeri).' },
        ]
      },
      {
        title: 'Polite Essentials',
        phrases: [
          { jp:'すみません',        romaji:'Sumimasen',          en:'Excuse me / I\'m sorry / Pardon', zh:'不好意思', pinyin:'bù hǎo yì si', zhNote:'MOST USEFUL WORD. Gets attention, apologizes, expresses gratitude. Use constantly.', tip:'Wave your hand or raise it slightly to get a waiter\'s attention.' },
          { jp:'ありがとうございます',romaji:'Arigatou gozaimasu', en:'Thank you (formal)',   zh:'谢谢 / 非常感谢', pinyin:'xièxie / fēicháng gǎnxiè', zhNote:'Casual version: ありがとう (arigatou). Add ございます for politeness.' },
          { jp:'どうも',            romaji:'Dōmo',               en:'Thanks / Hey (casual)',  tip:'Ultra-casual. Wave your hand. Fine for convenience stores.' },
          { jp:'どういたしまして',  romaji:'Dō itashimashite',   en:'You\'re welcome',        zh:'不客气', pinyin:'bú kèqi', zhNote:'Same polite self-deprecating spirit as Chinese 不客气.' },
          { jp:'ごめんなさい',      romaji:'Gomen nasai',        en:'I\'m sorry (sincere apology)', zh:'对不起', pinyin:'duìbuqǐ', zhNote:'For real apologies. すみません is lighter / more social.' },
          { jp:'よろしくお願いします',romaji:'Yoroshiku onegaishimasu', en:'Please take care of this / Nice to meet you', tip:'Deeply versatile phrase. Used when meeting, making requests, ending emails. Untranslatable — just learn it.' },
          { jp:'お願いします',      romaji:'Onegaishimasu',      en:'Please (requesting a service)',  tip:'Attach to any request. Softer than ください.' },
          { jp:'ください',          romaji:'Kudasai',            en:'Please give me~ (after item name)', tip:'〜をください = "Please give me ~". Point at menu item + ください.' },
        ]
      },
      {
        title: 'Basic Communication',
        phrases: [
          { jp:'わかりました',         romaji:'Wakarimashita',       en:'I understand / Got it',     zh:'我明白了', pinyin:'wǒ míngbai le' },
          { jp:'わかりません',         romaji:'Wakarimasen',         en:'I don\'t understand',       zh:'我不明白', pinyin:'wǒ bù míngbai' },
          { jp:'もう一度お願いします', romaji:'Mō ichido onegaishimasu', en:'Please say that again', zh:'请再说一遍', pinyin:'qǐng zài shuō yībiàn' },
          { jp:'ゆっくり話してください',romaji:'Yukkuri hanashite kudasai', en:'Please speak slowly', zh:'请说慢一点', pinyin:'qǐng shuō màn yīdiǎn' },
          { jp:'英語を話せますか？',    romaji:'Eigo wo hanasemasu ka?', en:'Do you speak English?', zh:'你会说英语吗？', pinyin:'nǐ huì shuō Yīngyǔ ma?' },
          { jp:'日本語が少し話せます', romaji:'Nihongo ga sukoshi hanasemasu', en:'I speak a little Japanese', tip:'People will appreciate the effort even if you can\'t say much more.' },
          { jp:'〜はありますか？',     romaji:'~wa arimasu ka?',    en:'Do you have ~?',            zh:'有～吗？', pinyin:'yǒu ~ ma?' },
          { jp:'〜はどこですか？',     romaji:'~wa doko desu ka?',  en:'Where is ~?',               zh:'～在哪里？', pinyin:'~ zài nǎlǐ?' },
          { jp:'いくらですか？',       romaji:'Ikura desu ka?',     en:'How much is it?',           zh:'多少钱？', pinyin:'duōshao qián?', zhNote:'The most important shopping phrase.' },
          { jp:'これ / それ / あれ',   romaji:'Kore / Sore / Are',  en:'This (near me) / That (near you) / That (far)', zh:'这个 / 那个 / 那个', pinyin:'zhège / nàge / nàge', zhNote:'Japanese 3-way distinction vs Chinese 2-way (这/那).' },
          { jp:'はい / いいえ',        romaji:'Hai / Iie',          en:'Yes / No',                  zh:'是的 / 不是', pinyin:'shìde / búshì', tip:'Hai is also used to acknowledge ("uh huh"), not just agree.' },
          { jp:'大丈夫です',           romaji:'Daijōbu desu',       en:'It\'s OK / I\'m fine / No worries', zh:'没关系 / 没问题', pinyin:'méiguānxi / méiwèntí', zhNote:'大丈夫 FALSE FRIEND: in Chinese it means "a real man" or "husband"!' },
        ]
      },
      {
        title: 'Numbers',
        phrases: [
          { jp:'ゼロ / 零',   romaji:'Zero / rei',  en:'0', tip:'ゼロ (katakana, Western) or 零 (kanji, formal).' },
          { jp:'一 / いち',   romaji:'Ichi',        en:'1', zh:'一', pinyin:'yī',    zhNote:'"Ichi" ≈ "yī" — from same Old Chinese root.' },
          { jp:'二 / に',     romaji:'Ni',          en:'2', zh:'二', pinyin:'èr',    zhNote:'"Ni" is less similar but same character.' },
          { jp:'三 / さん',   romaji:'San',         en:'3', zh:'三', pinyin:'sān',   zhNote:'"San" ≈ "sān" — very close!' },
          { jp:'四 / し・よん',romaji:'Shi / yon',  en:'4', zh:'四', pinyin:'sì',    zhNote:'4 is unlucky (sounds like death 死) in BOTH Japanese AND Chinese!' },
          { jp:'五 / ご',     romaji:'Go',          en:'5', zh:'五', pinyin:'wǔ' },
          { jp:'六 / ろく',   romaji:'Roku',        en:'6', zh:'六', pinyin:'liù' },
          { jp:'七 / しち・なな',romaji:'Shichi / nana',en:'7', zh:'七', pinyin:'qī' },
          { jp:'八 / はち',   romaji:'Hachi',       en:'8', zh:'八', pinyin:'bā',    zhNote:'8 is lucky in both cultures — sounds lucky in Chinese (发 fā).' },
          { jp:'九 / く・きゅう',romaji:'Ku / kyū', en:'9', zh:'九', pinyin:'jiǔ',  zhNote:'9 is unlucky in Japan (sounds like 苦 ku=suffering).' },
          { jp:'十 / じゅう',  romaji:'Jū',          en:'10',zh:'十', pinyin:'shí',  zhNote:'"Jū" ≈ "shí".' },
          { jp:'百 / ひゃく',  romaji:'Hyaku',       en:'100',zh:'百',pinyin:'bǎi' },
          { jp:'千 / せん',    romaji:'Sen',         en:'1,000',zh:'千',pinyin:'qiān' },
          { jp:'一万 / いちまん',romaji:'Ichiman',   en:'10,000 (key unit!)', zh:'一万', pinyin:'yīwàn', zhNote:'SAME! Both Japanese and Chinese count in units of 10,000 (万), not 1,000. ¥10,000 = 一万円.' },
        ]
      },
      {
        title: 'Days & Time',
        phrases: [
          { jp:'月曜日', romaji:'Getsuyōbi', en:'Monday',    zh:'星期一', pinyin:'xīngqī yī',   zhNote:'Both use 月 (moon) for Monday — same 五行 (5 elements) system!' },
          { jp:'火曜日', romaji:'Kayōbi',    en:'Tuesday',   zh:'星期二', pinyin:'xīngqī èr',   zhNote:'火 (fire) = Tuesday in Japanese. Chinese uses number instead.' },
          { jp:'水曜日', romaji:'Suiyōbi',   en:'Wednesday', zh:'星期三', pinyin:'xīngqī sān',  zhNote:'水 (water) = Wednesday. Chinese replaced 五行 with numbers for days.' },
          { jp:'木曜日', romaji:'Mokuyōbi',  en:'Thursday',  zh:'星期四', pinyin:'xīngqī sì',   zhNote:'木 (wood) = Thursday.' },
          { jp:'金曜日', romaji:'Kin\'yōbi', en:'Friday',    zh:'星期五', pinyin:'xīngqī wǔ',   zhNote:'金 (metal/gold) = Friday.' },
          { jp:'土曜日', romaji:'Doyōbi',    en:'Saturday',  zh:'星期六', pinyin:'xīngqī liù',  zhNote:'土 (earth) = Saturday.' },
          { jp:'日曜日', romaji:'Nichiyōbi', en:'Sunday',    zh:'星期日/天', pinyin:'xīngqīrì/tiān', zhNote:'日 (sun) = Sunday. SAME in both!' },
          { jp:'今日',   romaji:'Kyō',       en:'Today',     zh:'今天', pinyin:'jīntiān',      zhNote:'今 (now/today) same character! 今日 (kyō) = today.' },
          { jp:'明日',   romaji:'Ashita',    en:'Tomorrow',  zh:'明天', pinyin:'míngtiān',     zhNote:'明 (bright/next) SAME character! 明日 ≈ 明天.' },
          { jp:'昨日',   romaji:'Kinō',      en:'Yesterday', zh:'昨天', pinyin:'zuótiān',      zhNote:'昨 SAME character! 昨日 ≈ 昨天.' },
          { jp:'〜時',   romaji:'~ji',       en:'[Number] o\'clock', tip:'三時 = san-ji = 3 o\'clock.' },
          { jp:'〜分',   romaji:'~fun/pun',  en:'[Number] minutes',  tip:'三十分 = sanjuppun = 30 minutes.' },
          { jp:'午前',   romaji:'Gozen',     en:'AM',        zh:'上午/早上', pinyin:'shàngwǔ',  zhNote:'Both mean "before noon": 午前 = before-noon, 上午 = above-noon.' },
          { jp:'午後',   romaji:'Gogo',      en:'PM',        zh:'下午',      pinyin:'xiàwǔ',    zhNote:'Both mean "after noon": 午後 = after-noon, 下午 = below-noon.' },
        ]
      }
    ]
  },

  {
    id: 'restaurants',
    title: 'Restaurants & Food',
    icon: '🍜',
    groups: [
      {
        title: 'Getting a Table',
        phrases: [
          { jp:'〜名です',              romaji:'~mei desu',                en:'[Number] people',                 tip:'二名です (futari desu) = 2 people. Hold up fingers.' },
          { jp:'予約があります',         romaji:'Yoyaku ga arimasu',        en:'I have a reservation',            zh:'我有预订', pinyin:'wǒ yǒu yùdìng' },
          { jp:'予約はありません',       romaji:'Yoyaku wa arimasen',       en:'I don\'t have a reservation' },
          { jp:'席はありますか？',       romaji:'Seki wa arimasu ka?',      en:'Is there a table available?',     zh:'有位子吗？', pinyin:'yǒu wèizi ma?' },
          { jp:'禁煙席をお願いします',  romaji:'Kin\'enseki wo onegaishimasu', en:'Non-smoking seat please' },
          { jp:'テラス席はありますか？', romaji:'Terasu seki wa arimasu ka?', en:'Is there outdoor seating?' },
          { jp:'〜分くらい待ちますか？', romaji:'~fun kurai machimasu ka?', en:'About ~ minutes wait?',           tip:'Listen for the number + 分 (fun=minutes).' },
        ]
      },
      {
        title: 'Ordering Food',
        phrases: [
          { jp:'メニューをください',      romaji:'Menyū wo kudasai',          en:'Menu please',                    zh:'请给我菜单', pinyin:'qǐng gěi wǒ càidān' },
          { jp:'これをください',          romaji:'Kore wo kudasai',           en:'I\'ll have this (pointing)',      tip:'The most powerful restaurant phrase. Point at picture + say this.' },
          { jp:'〜をください',            romaji:'~wo kudasai',               en:'I\'ll have ~ / Please give me ~', tip:'Add item name before をください.' },
          { jp:'おすすめは何ですか？',    romaji:'Osusume wa nan desu ka?',   en:'What do you recommend?',         zh:'有什么推荐？', pinyin:'yǒu shénme tuījiàn?', zhNote:'Osusume = recommendation. Say this and let them choose for you.' },
          { jp:'セットでお願いします',    romaji:'Setto de onegaishimasu',    en:'Set meal please' },
          { jp:'〜を一つください',        romaji:'~wo hitotsu kudasai',       en:'One ~ please',                   tip:'一つ(hitotsu)=1, 二つ(futatsu)=2, 三つ(mittsu)=3.' },
          { jp:'〜は入っていますか？',    romaji:'~wa haitte imasu ka?',      en:'Does it contain ~?',             tip:'Critical for allergies. Point at allergen word.' },
          { jp:'辛くないのはありますか？',romaji:'Karakunai no wa arimasu ka?', en:'Is there a non-spicy option?' },
          { jp:'これは何ですか？',        romaji:'Kore wa nan desu ka?',      en:'What is this?',                  zh:'这是什么？', pinyin:'zhè shì shénme?' },
        ]
      },
      {
        title: 'Dietary Needs & Allergies',
        phrases: [
          { jp:'ベジタリアンです',           romaji:'Bejitarian desu',              en:'I am vegetarian',              tip:'Japan has limited vegetarian options. Dashi (fish broth) is in many dishes.' },
          { jp:'ビーガンです',               romaji:'Bīgan desu',                   en:'I am vegan',                   tip:'Very challenging in Japan. Best to research restaurants in advance.' },
          { jp:'肉は食べません',             romaji:'Niku wa tabemasen',            en:'I don\'t eat meat',            zh:'我不吃肉', pinyin:'wǒ bù chī ròu', zhNote:'肉 (niku=meat) = 肉 (ròu=meat). Same character!' },
          { jp:'魚は食べません',             romaji:'Sakana wa tabemasen',          en:'I don\'t eat fish',            zh:'我不吃鱼', pinyin:'wǒ bù chī yú' },
          { jp:'豚肉は食べません',           romaji:'Butaniku wa tabemasen',        en:'I don\'t eat pork',            tip:'豚 (buta) = pig.' },
          { jp:'〜アレルギーがあります',     romaji:'~arerugii ga arimasu',         en:'I have a ~ allergy',           zh:'我对～过敏', pinyin:'wǒ duì ~ guòmǐn' },
          { jp:'小麦アレルギーがあります',   romaji:'Komugi arerugii ga arimasu',   en:'I have a wheat allergy',       tip:'小麦 (komugi) = wheat. Soy sauce (醤油) contains wheat.' },
          { jp:'乳製品アレルギーがあります', romaji:'Nyūseihin arerugii ga arimasu',en:'I have a dairy allergy' },
          { jp:'エビアレルギーがあります',   romaji:'Ebi arerugii ga arimasu',      en:'I have a shrimp allergy',      tip:'エビ (ebi) = shrimp/prawns. Common in Japanese cuisine.' },
          { jp:'卵アレルギーがあります',     romaji:'Tamago arerugii ga arimasu',   en:'I have an egg allergy',        tip:'卵 (tamago) = egg.' },
          { jp:'ナッツアレルギーがあります', romaji:'Nattsu arerugii ga arimasu',   en:'I have a nut allergy' },
          { jp:'だしは大丈夫ですか？',       romaji:'Dashi wa daijōbu desu ka?',    en:'Is dashi (fish broth) OK?',    tip:'Dashi is fish/seaweed broth — base of most Japanese soups and sauces. Often invisible.' },
        ]
      },
      {
        title: 'Common Food Vocabulary',
        phrases: [
          { jp:'ラーメン',    romaji:'Rāmen',     en:'Ramen (noodle soup)',       zh:'拉面',  pinyin:'lāmiàn',  zhNote:'Japanese borrowed from Chinese 拉面! Same word.' },
          { jp:'うどん',      romaji:'Udon',      en:'Thick wheat noodles',       zh:'乌冬面', pinyin:'wūdōng miàn', zhNote:'Chinese borrowed BACK from Japanese!' },
          { jp:'そば',        romaji:'Soba',      en:'Buckwheat noodles' },
          { jp:'寿司',        romaji:'Sushi',     en:'Sushi',                     tip:'At kaiten-zushi (conveyor belt), take plates as they pass. Stack your plates for the bill.' },
          { jp:'刺身',        romaji:'Sashimi',   en:'Raw sliced fish' },
          { jp:'天ぷら',      romaji:'Tenpura',   en:'Tempura (battered & fried)' },
          { jp:'焼き肉',      romaji:'Yakiniku',  en:'BBQ meat (grilled at table)',zh:'烧肉',  pinyin:'shāoròu', zhNote:'焼=烧 (same meaning: burn/grill), 肉=肉 (same: meat)!' },
          { jp:'お好み焼き',  romaji:'Okonomiyaki',en:'Savory pancake' },
          { jp:'味噌汁',      romaji:'Misoshiru', en:'Miso soup',                 tip:'来 automatically with many set meals.' },
          { jp:'ご飯',        romaji:'Gohan',     en:'Cooked rice / Meal',        zh:'饭', pinyin:'fàn', zhNote:'御飯 (gohan) = 饭 (fàn). Both mean rice AND meal!' },
          { jp:'お茶',        romaji:'Ocha',      en:'Green tea',                 zh:'茶', pinyin:'chá', zhNote:'茶 = chá = cha. Same word across all of Asia!' },
          { jp:'水',          romaji:'Mizu',      en:'Water',                     zh:'水', pinyin:'shuǐ', zhNote:'SAME character. Usually free in restaurants.' },
          { jp:'ビール',      romaji:'Bīru',      en:'Beer (katakana loan word)',  tip:'生ビール (nama bīru) = draft beer.' },
          { jp:'日本酒',      romaji:'Nihonshu',  en:'Japanese sake',             zh:'日本酒', pinyin:'rìběn jiǔ', zhNote:'日本酒 is identical — same characters mean "Japan alcohol".' },
          { jp:'焼酎',        romaji:'Shōchū',    en:'Japanese distilled spirit',  tip:'Stronger than sake (~25%). Often drunk with water (水割り, mizuwari) or soda.' },
          { jp:'定食',        romaji:'Teishoku',  en:'Set meal (rice + miso + dish)', tip:'Best value in Japan. Usually includes rice, miso soup, main dish, and pickles.' },
          { jp:'おかわり',    romaji:'Okawari',   en:'Refill / Another one please', tip:'Say this for free rice refills at many restaurants!' },
          { jp:'辛い',        romaji:'Karai',     en:'Spicy',                     zh:'辣', pinyin:'là', tip:'Japanese food is less spicy than you might expect.' },
          { jp:'甘い',        romaji:'Amai',      en:'Sweet',                     zh:'甜', pinyin:'tián' },
          { jp:'おいしい！',  romaji:'Oishii!',   en:'Delicious!',                zh:'好吃！', pinyin:'hǎochī!', zhNote:'Say this to compliment the chef — they\'ll love you.' },
        ]
      },
      {
        title: 'Paying the Bill',
        phrases: [
          { jp:'お会計をお願いします', romaji:'Okaikei wo onegaishimasu', en:'Check please',             zh:'买单/结账', pinyin:'mǎidān / jiézhàng', tip:'Or just say すみません and mime writing on your hand.' },
          { jp:'カードで払えますか？', romaji:'Kādo de haraemasu ka?',   en:'Can I pay by card?',       tip:'Small restaurants and ramen shops are often cash only.' },
          { jp:'現金のみです',         romaji:'Genkin nomi desu',        en:'Cash only',                zh:'只收现金', pinyin:'zhǐ shōu xiànjīn' },
          { jp:'別々でお願いします',   romaji:'Betsubetsu de onegaishimasu', en:'Separate checks please', tip:'Always specify before eating — splitting is less common in Japan.' },
          { jp:'一緒でお願いします',   romaji:'Issho de onegaishimasu',  en:'All together (one check)',  zh:'一起结账', pinyin:'yīqǐ jiézhàng' },
          { jp:'領収書をください',     romaji:'Ryōshūsho wo kudasai',    en:'Receipt please',           zh:'请给我收据', pinyin:'qǐng gěi wǒ shōujù' },
          { jp:'チップは不要です',     romaji:'Chippu wa fuyō desu',     en:'No tipping in Japan!',     tip:'Tipping is NOT done in Japan and can be offensive. Service charge is included.' },
          { jp:'ごちそうさまでした',   romaji:'Gochisōsama deshita',     en:'Thank you for the meal (said after eating)', tip:'Say this when leaving — very good manners, highly appreciated.' },
          { jp:'いただきます',         romaji:'Itadakimasu',             en:'Let\'s eat! (said before eating)', tip:'Said before every meal. Clap hands together. It means "I humbly receive."' },
        ]
      }
    ]
  },

  {
    id: 'transport',
    title: 'Transport & Navigation',
    icon: '🚂',
    groups: [
      {
        title: 'Buying Tickets & Stations',
        phrases: [
          { jp:'〜駅はどこですか？',       romaji:'~eki wa doko desu ka?',          en:'Where is ~ station?',              zh:'~站在哪里？', pinyin:'~ zhàn zài nǎlǐ?' },
          { jp:'〜まで一枚ください',       romaji:'~made ichimai kudasai',          en:'One ticket to ~ please',           tip:'一枚 (ichimai) = one (flat thing). Or use IC card (Suica/Pasmo).' },
          { jp:'〜まで往復ください',       romaji:'~made ōfuku kudasai',            en:'Return ticket to ~ please' },
          { jp:'〜まで何分かかりますか？', romaji:'~made nanpun kakarimasu ka?',    en:'How many minutes to ~?',           zh:'到～要几分钟？', pinyin:'dào ~ yào jǐ fēnzhōng?' },
          { jp:'次の電車は何時ですか？',   romaji:'Tsugi no densha wa nanji desu ka?', en:'When is the next train?',       zh:'下一班车几点？', pinyin:'xià yī bān chē jǐ diǎn?' },
          { jp:'〜番線から出ますか？',     romaji:'~bansen kara demasu ka?',        en:'Does it leave from platform ~?',   tip:'番線 (bansen) = platform number.' },
          { jp:'終電は何時ですか？',       romaji:'Shūden wa nanji desu ka?',       en:'When is the last train?',          tip:'Critical! Last trains in Tokyo are around 12:30am. Miss it = expensive taxi.' },
          { jp:'乗り換えはどこですか？',   romaji:'Norikae wa doko desu ka?',       en:'Where do I transfer/change?',      zh:'在哪里转车？', pinyin:'zài nǎlǐ zhuǎn chē?' },
          { jp:'この電車は〜に止まりますか？',romaji:'Kono densha wa ~ni tomarimasu ka?', en:'Does this train stop at ~?' },
          { jp:'Suicaをチャージしたい',   romaji:'Suica wo chāji shitai',          en:'I want to charge my Suica card',   tip:'Suica/Pasmo IC cards work on almost all trains, subways, buses, and many convenience stores.' },
        ]
      },
      {
        title: 'On the Train',
        phrases: [
          { jp:'この席は空いていますか？', romaji:'Kono seki wa aite imasu ka?',  en:'Is this seat free?',              zh:'这个座位有人吗？', pinyin:'zhège zuòwèi yǒu rén ma?' },
          { jp:'〜で降ります',             romaji:'~de orimasu',                  en:'I\'m getting off at ~',           tip:'Tell nearby passengers so they can make space.' },
          { jp:'ドアに注意してください',   romaji:'Doa ni chūi shite kudasai',    en:'Please be careful of the doors',  tip:'Heard constantly on trains. You don\'t need to say this!' },
          { jp:'乗り越しました',           romaji:'Norikoshi mashita',            en:'I rode past my stop',             tip:'Tell station staff — they can issue an adjustment ticket.' },
          { jp:'優先席',                   romaji:'Yūsenseki',                    en:'Priority seat (elderly/pregnant)', tip:'Give up priority seats. Phones should be on silent mode near them.' },
          { jp:'自由席 / 指定席',          romaji:'Jiyūseki / Shiteiseki',        en:'Unreserved seat / Reserved seat', tip:'On Shinkansen: jiyūseki = first come first served; shiteiseki = reserved (buy in advance).' },
          { jp:'禁煙車',                   romaji:'Kin\'ensha',                   en:'Non-smoking car' },
          { jp:'グリーン車',               romaji:'Gurīn-sha',                    en:'Green Car (first class)',          tip:'More expensive, quieter. Worth it on long Shinkansen trips.' },
        ]
      },
      {
        title: 'Key Signs to Read',
        phrases: [
          { jp:'出口',   romaji:'Deguchi / Shutsuguchi', en:'EXIT',              zh:'出口', pinyin:'chūkǒu', zhNote:'IDENTICAL! 出口 = exit in both Japanese and Chinese.' },
          { jp:'入口',   romaji:'Iriguchi / Nyūguchi',   en:'ENTRANCE',          zh:'入口', pinyin:'rùkǒu',  zhNote:'IDENTICAL! 入口 = entrance in both.' },
          { jp:'改札口', romaji:'Kaisatsuguchi',          en:'Ticket gate',        tip:'Tap IC card here. Or insert paper ticket (retrieve it from other end!).' },
          { jp:'禁止',   romaji:'Kinshi',                 en:'PROHIBITED',        zh:'禁止', pinyin:'jìnzhǐ', zhNote:'IDENTICAL compound! 禁止 = prohibited in both. Very common sign.' },
          { jp:'非常口', romaji:'Hijōguchi',              en:'Emergency exit',     zh:'紧急出口', pinyin:'jǐnjí chūkǒu', zhNote:'口 (exit) same. 非常 = extraordinary/emergency.' },
          { jp:'終点',   romaji:'Shūten',                 en:'Terminal/Last stop', zh:'终点', pinyin:'zhōngdiǎn', zhNote:'IDENTICAL! 终点 (zhōngdiǎn) = terminal in Chinese too.' },
          { jp:'乗り場', romaji:'Noriba',                  en:'Bus/taxi stand',     tip:'バス乗り場 (basu noriba) = bus stop.' },
          { jp:'精算機', romaji:'Seisanki',               en:'Fare adjustment machine', tip:'Use this if you exit at wrong gate or need to pay extra fare.' },
          { jp:'自動改札',romaji:'Jidō kaisatsu',         en:'Automatic ticket gate',  tip:'Walk through confidently. Tap or insert ticket. It will beep loudly if wrong.' },
          { jp:'地下鉄', romaji:'Chikatetsu',             en:'Subway',             zh:'地铁', pinyin:'dìtiě',  zhNote:'地下鉄 (chikatetsu) vs 地铁 (dìtiě). Same characters, same meaning!' },
        ]
      },
      {
        title: 'Asking Directions',
        phrases: [
          { jp:'〜はどこですか？',       romaji:'~wa doko desu ka?',        en:'Where is ~?',                 zh:'～在哪里？', pinyin:'~ zài nǎlǐ?' },
          { jp:'右',                     romaji:'Migi',                     en:'Right',                       zh:'右', pinyin:'yòu', zhNote:'SAME character! 右 = right (direction) in both.' },
          { jp:'左',                     romaji:'Hidari',                   en:'Left',                        zh:'左', pinyin:'zuǒ', zhNote:'SAME character! 左 = left (direction) in both.' },
          { jp:'まっすぐ',               romaji:'Massugu',                  en:'Straight ahead',               zh:'直走', pinyin:'zhí zǒu' },
          { jp:'曲がる',                 romaji:'Magaru',                   en:'Turn',                         tip:'右に曲がって = turn right, 左に曲がって = turn left.' },
          { jp:'近い / 遠い',            romaji:'Chikai / Tōi',             en:'Near / Far',                   zh:'近 / 远', pinyin:'jìn / yuǎn', zhNote:'近=近 SAME character! 遠=远 traditional vs simplified.' },
          { jp:'交差点',                 romaji:'Kōsaten',                  en:'Intersection',                 zh:'路口/十字路口', pinyin:'lùkǒu / shízì lùkǒu' },
          { jp:'信号',                   romaji:'Shingō',                   en:'Traffic light',                zh:'红绿灯', pinyin:'hónglǜdēng' },
          { jp:'地図',                   romaji:'Chizu',                    en:'Map',                          zh:'地图', pinyin:'dìtú', zhNote:'地图 = chizu = dìtú. Same characters! Different pronunciation.' },
          { jp:'〜の近くで降りてください',romaji:'~no chikaku de orite kudasai', en:'Please drop me near ~',  tip:'For taxis.' },
          { jp:'Google Mapsで見せてもらえますか？', romaji:'Gūguru Mappu de misete moraemasu ka?', en:'Can you show me on Google Maps?', tip:'Works great — hand them your phone.' },
        ]
      },
      {
        title: 'Taxis & Buses',
        phrases: [
          { jp:'〜まで行ってください',         romaji:'~made itte kudasai',          en:'Please take me to ~',            zh:'请去～', pinyin:'qǐng qù ~' },
          { jp:'ここで止めてください',         romaji:'Koko de tomete kudasai',      en:'Please stop here',               tip:'Or: この辺でお願いします (konohendeonegaishimasu = around here please).' },
          { jp:'急いでください',               romaji:'Isoide kudasai',              en:'Please hurry' },
          { jp:'〜号機のバス乗り場はどこ？',  romaji:'~gōki no basu noriba wa doko?', en:'Where is the bus stop for bus ~?' },
          { jp:'このバスは〜に行きますか？',   romaji:'Kono basu wa ~ni ikimasu ka?', en:'Does this bus go to ~?' },
          { jp:'〜で降りたいです',             romaji:'~de oritai desu',             en:'I want to get off at ~',          tip:'Tell the driver so they can announce your stop.' },
          { jp:'Suicaは使えますか？',          romaji:'Suica wa tsukaemasu ka?',     en:'Can I use Suica?',               tip:'Most urban buses accept IC cards now.' },
          { jp:'空車',                         romaji:'Kūsha',                       en:'Taxi available (lit: empty car)', tip:'Look for this red sign in taxi windows = available. Green 賃走 = occupied.' },
        ]
      }
    ]
  },

  {
    id: 'shopping',
    title: 'Shopping',
    icon: '🛍️',
    groups: [
      {
        title: 'Browsing & Asking',
        phrases: [
          { jp:'見ているだけです',        romaji:'Mite iru dake desu',          en:'Just looking',                    zh:'我只是看看', pinyin:'wǒ zhǐshì kànkan', zhNote:'Say this as you walk in to avoid aggressive staff following you.' },
          { jp:'〜はありますか？',        romaji:'~wa arimasu ka?',             en:'Do you have ~?',                  zh:'有～吗？', pinyin:'yǒu ~ ma?' },
          { jp:'これをください',          romaji:'Kore wo kudasai',             en:'I\'ll take this',                 tip:'Point at item + this phrase = universal.' },
          { jp:'試着できますか？',        romaji:'Shichaku dekimasu ka?',       en:'Can I try this on?',              zh:'我可以试穿吗？', pinyin:'wǒ kěyǐ shìchuān ma?' },
          { jp:'これはどこにありますか？', romaji:'Kore wa doko ni arimasu ka?', en:'Where is this?',                 tip:'Show a picture on your phone.' },
          { jp:'在庫はありますか？',      romaji:'Zaiko wa arimasu ka?',        en:'Is it in stock?',                 zh:'有库存吗？', pinyin:'yǒu kùcún ma?' },
          { jp:'取り寄せできますか？',    romaji:'Toriyose dekimasu ka?',       en:'Can you order it in?' },
        ]
      },
      {
        title: 'Size, Color & Fit',
        phrases: [
          { jp:'サイズはいくつですか？',  romaji:'Saizu wa ikutsu desu ka?',   en:'What size is this?',              tip:'Japanese sizes: S/M/L or Japanese numeric (e.g. 23cm for shoes).' },
          { jp:'〜のサイズはありますか？',romaji:'~no saizu wa arimasu ka?',   en:'Do you have it in size ~?' },
          { jp:'もう少し大きいの',        romaji:'Mō sukoshi ōkii no',         en:'A slightly bigger one',           zh:'大一点的', pinyin:'dà yīdiǎn de' },
          { jp:'もう少し小さいの',        romaji:'Mō sukoshi chiisai no',      en:'A slightly smaller one',          zh:'小一点的', pinyin:'xiǎo yīdiǎn de' },
          { jp:'色違いはありますか？',    romaji:'Irochigai wa arimasu ka?',   en:'Do you have it in a different color?' },
          { jp:'赤 / あか',              romaji:'Aka',                         en:'Red',                             zh:'红', pinyin:'hóng' },
          { jp:'青 / あお',              romaji:'Ao',                          en:'Blue',                            zh:'蓝/青', pinyin:'lán/qīng', zhNote:'青 (qīng) in Chinese means blue-green. SAME character as Japanese 青!' },
          { jp:'白 / しろ',              romaji:'Shiro',                       en:'White',                           zh:'白', pinyin:'bái', zhNote:'SAME character 白 = white in both.' },
          { jp:'黒 / くろ',              romaji:'Kuro',                        en:'Black',                           zh:'黑', pinyin:'hēi', zhNote:'黒 is variant of 黑. Same meaning.' },
          { jp:'緑 / みどり',            romaji:'Midori',                      en:'Green',                           zh:'绿', pinyin:'lǜ' },
          { jp:'黄色 / きいろ',          romaji:'Kiiro',                       en:'Yellow',                          zh:'黄色', pinyin:'huángsè', zhNote:'黄色 = kiiro AND huángsè = yellow. SAME compound!' },
          { jp:'ピンク',                 romaji:'Pinku',                       en:'Pink (loan word)' },
        ]
      },
      {
        title: 'Prices & Payment',
        phrases: [
          { jp:'いくらですか？',          romaji:'Ikura desu ka?',              en:'How much?',                       zh:'多少钱？', pinyin:'duōshao qián?' },
          { jp:'高いです',               romaji:'Takai desu',                  en:'It\'s expensive',                 zh:'太贵了', pinyin:'tài guì le' },
          { jp:'もっと安いのはありますか？',romaji:'Motto yasui no wa arimasu ka?', en:'Is there a cheaper one?',     zh:'有便宜点的吗？', pinyin:'yǒu piányí diǎn de ma?' },
          { jp:'カードで払えますか？',    romaji:'Kādo de haraemasu ka?',      en:'Can I pay by card?',              tip:'Many small shops, especially in rural areas, are cash only.' },
          { jp:'現金のみです',           romaji:'Genkin nomi desu',            en:'Cash only',                       zh:'只收现金', pinyin:'zhǐ shōu xiànjīn' },
          { jp:'税込みですか？',          romaji:'Zeikomi desu ka?',            en:'Is tax included?',                tip:'Japan consumption tax is 10%. Most prices include it, but confirm.' },
          { jp:'免税になりますか？',      romaji:'Menzei ni narimasu ka?',     en:'Can I get tax-free shopping?',    tip:'Foreign tourists can get 10% tax refund at duty-free counters with passport.' },
          { jp:'領収書をください',        romaji:'Ryōshūsho wo kudasai',       en:'Receipt please',                  zh:'请给我收据', pinyin:'qǐng gěi wǒ shōujù' },
          { jp:'袋をもらえますか？',      romaji:'Fukuro wo moraemasu ka?',    en:'Can I get a bag?',                tip:'Plastic bag fee is charged now (¥2-5). Bring a tote bag.' },
          { jp:'包んでもらえますか？',    romaji:'Tsutsunde moraemasu ka?',    en:'Can you gift wrap it?',           tip:'Japanese gift wrapping (包装) is beautiful and usually free.' },
        ]
      },
      {
        title: 'Types of Shops',
        phrases: [
          { jp:'コンビニ',    romaji:'Konbini',       en:'Convenience store',          tip:'The best in the world. Pay bills, ATM, food, printing, umbrellas — everything here.' },
          { jp:'スーパー',    romaji:'Sūpā',          en:'Supermarket' },
          { jp:'ドラッグストア',romaji:'Doraggu sutoa',en:'Drugstore (great for snacks, cosmetics, medicine)', tip:'Excellent for budget shopping. Best deals on Japanese skincare and medicines.' },
          { jp:'薬局',        romaji:'Yakkyoku',      en:'Pharmacy',                   zh:'药局/药房', pinyin:'yàojú/yàofáng', zhNote:'薬=药 (same meaning: medicine)! 薬局 ≈ 药局.' },
          { jp:'百貨店',      romaji:'Hyakkaten',     en:'Department store',           zh:'百货店', pinyin:'bǎihuòdiàn', zhNote:'IDENTICAL! 百货店 = 百貨店. 百=100, 货/貨=goods, 店=store.' },
          { jp:'ドン・キホーテ',romaji:'Donki',        en:'Don Quijote (discount variety store)',tip:'Loud, overwhelming, everything you could ever want at competitive prices. Open 24h.' },
          { jp:'100円ショップ',romaji:'Hyakuyen shoppu',en:'100-yen shop (dollar store)', tip:'Daiso, Seria, Can★Do. Surprisingly quality items. Budget traveler\'s paradise.' },
          { jp:'古着屋',      romaji:'Furugiya',      en:'Second-hand clothing store',  tip:'Tokyo\'s Shimokitazawa district has amazing vintage shops.' },
        ]
      }
    ]
  },

  {
    id: 'hotels',
    title: 'Hotels & Accommodation',
    icon: '🏨',
    groups: [
      {
        title: 'Check-in & Check-out',
        phrases: [
          { jp:'チェックインをお願いします',  romaji:'Chekkuin wo onegaishimasu',    en:'Check in please',                zh:'我要办理入住', pinyin:'wǒ yào bànlǐ rùzhù' },
          { jp:'チェックアウトをお願いします', romaji:'Chekkuauto wo onegaishimasu',  en:'Check out please',               zh:'我要办理退房', pinyin:'wǒ yào bànlǐ tuìfáng' },
          { jp:'〜という名前で予約しています', romaji:'~to iu namae de yoyaku shite imasu', en:'I have a reservation under the name ~', zh:'我用～名字订的房', pinyin:'wǒ yòng ~ míngzi dìng de fáng' },
          { jp:'予約番号は〜です',            romaji:'Yoyaku bangō wa ~desu',        en:'My booking number is ~' },
          { jp:'何時までにチェックアウトですか？',romaji:'Nanji made ni chekkuauto desu ka?', en:'What time is check-out?',    tip:'Usually 10-11am in Japan.' },
          { jp:'レイトチェックアウトはできますか？',romaji:'Reito chekkuauto wa dekimasu ka?', en:'Can I have late check-out?', tip:'Usually costs extra. Ask in advance.' },
          { jp:'荷物を預かってもらえますか？',  romaji:'Nimotsu wo azukatte moraemasu ka?', en:'Can you store my luggage?',   tip:'Most hotels allow free luggage storage on check-out day.' },
          { jp:'〜泊したいです',              romaji:'~haku shitai desu',            en:'I want to stay ~ nights',        tip:'一泊 (ippaku) = 1 night, 二泊 (nihaku) = 2 nights.' },
        ]
      },
      {
        title: 'Room Requests & Issues',
        phrases: [
          { jp:'鍵をください',                    romaji:'Kagi wo kudasai',                   en:'Key please',               zh:'请给我钥匙', pinyin:'qǐng gěi wǒ yàoshi' },
          { jp:'Wi-Fiのパスワードを教えてください', romaji:'Waifai no pasuwādo wo oshiete kudasai', en:'Please tell me the WiFi password', zh:'WiFi密码是多少？', pinyin:'WiFi mìmǎ shì duōshao?' },
          { jp:'タオルをもっとください',           romaji:'Taoru wo motto kudasai',            en:'More towels please' },
          { jp:'枕をもう一つください',             romaji:'Makura wo mōhitotsu kudasai',       en:'One more pillow please' },
          { jp:'エアコンの使い方は？',             romaji:'Eakon no tsukaikata wa?',           en:'How do I use the air conditioner?', tip:'Japanese ACs can be confusing. 冷房 (reibō) = cooling, 暖房 (danbō) = heating.' },
          { jp:'お湯が出ません',                   romaji:'Oyu ga demasen',                    en:'No hot water',             zh:'没有热水', pinyin:'méiyǒu rèshuǐ' },
          { jp:'部屋のカギが壊れています',         romaji:'Heya no kagi ga kowarete imasu',    en:'The room key/lock is broken' },
          { jp:'騒音がひどいです',                 romaji:'Sōon ga hidoi desu',                en:'There\'s terrible noise' },
          { jp:'隣の部屋がうるさいです',           romaji:'Tonari no heya ga urusai desu',     en:'The next room is too loud' },
          { jp:'虫がいます',                       romaji:'Mushi ga imasu',                    en:'There\'s an insect/bug' },
          { jp:'部屋を変えてもらえますか？',       romaji:'Heya wo kaete moraemasu ka?',       en:'Can I change rooms?' },
        ]
      },
      {
        title: 'Facilities & Services',
        phrases: [
          { jp:'朝食はどこですか？',          romaji:'Chōshoku wa doko desu ka?',      en:'Where is breakfast?',           zh:'早餐在哪里？', pinyin:'zǎocān zài nǎlǐ?' },
          { jp:'朝食は何時からですか？',      romaji:'Chōshoku wa nanji kara desu ka?', en:'When does breakfast start?' },
          { jp:'エレベーターはどこですか？',  romaji:'Erebētā wa doko desu ka?',       en:'Where is the elevator?',        zh:'电梯在哪里？', pinyin:'diàntī zài nǎlǐ?', zhNote:'電梯 (diàntī) = elevator. 電=电 same!' },
          { jp:'コインランドリーはありますか？',romaji:'Koin randorī wa arimasu ka?',  en:'Is there a coin laundry?' },
          { jp:'フロントはどこですか？',      romaji:'Furonto wa doko desu ka?',       en:'Where is the front desk?' },
          { jp:'コンシェルジュはいますか？',  romaji:'Konshieruju wa imasu ka?',       en:'Is there a concierge?' },
          { jp:'おすすめのレストランは？',    romaji:'Osusume no resutoran wa?',       en:'Do you have a restaurant recommendation?' },
          { jp:'タクシーを呼んでください',    romaji:'Takushī wo yonde kudasai',       en:'Please call a taxi',            zh:'请帮我叫辆出租车', pinyin:'qǐng bāng wǒ jiào liàng chūzūchē' },
          { jp:'両替できますか？',            romaji:'Ryōgae dekimasu ka?',            en:'Can I change money?',           zh:'可以换钱吗？', pinyin:'kěyǐ huàn qián ma?' },
          { jp:'大浴場はありますか？',        romaji:'Daiyokujō wa arimasu ka?',       en:'Is there a communal bath?',     tip:'Japanese ryokan baths are an experience. Tattoos may be prohibited.' },
        ]
      },
      {
        title: 'Types of Accommodation',
        phrases: [
          { jp:'ホテル',    romaji:'Hoteru',      en:'Hotel',                 tip:'Western-style, straightforward.' },
          { jp:'旅館',      romaji:'Ryokan',      en:'Traditional Japanese inn', tip:'Sleep on futon, wear yukata, communal baths, multi-course kaiseki dinner. Unmissable experience.' },
          { jp:'民宿',      romaji:'Minshuku',    en:'Family-run guesthouse', tip:'Like a B&B. More personal than hotel, cheaper than ryokan.' },
          { jp:'カプセルホテル',romaji:'Kapuseru hoteru', en:'Capsule hotel',  tip:'Uniquely Japanese. Pod-style sleeping. Clean, efficient, fun. Separate male/female floors.' },
          { jp:'ゲストハウス',romaji:'Gesto hausu', en:'Guesthouse/hostel',    tip:'International traveler-friendly. Good for meeting people.' },
          { jp:'民泊',      romaji:'Minpaku',     en:'Home-sharing (Airbnb)', tip:'Now legal in Japan with regulations.' },
        ]
      }
    ]
  },

  {
    id: 'social',
    title: 'Social & Izakaya',
    icon: '🍻',
    groups: [
      {
        title: 'Meeting People',
        phrases: [
          { jp:'はじめまして',            romaji:'Hajimemashite',                    en:'Nice to meet you (first meeting)', zh:'初次见面，你好', pinyin:'chūcì jiànmiàn, nǐ hǎo' },
          { jp:'〜と申します / 〜です',   romaji:'~to mōshimasu / ~desu',           en:'My name is ~ (formal/casual)',     zh:'我叫～', pinyin:'wǒ jiào ~' },
          { jp:'どちらから来ましたか？',  romaji:'Dochira kara kimashita ka?',       en:'Where are you from?',             zh:'你从哪里来？', pinyin:'nǐ cóng nǎlǐ lái?' },
          { jp:'〜から来ました',          romaji:'~kara kimashita',                  en:'I came from ~',                   zh:'我从～来', pinyin:'wǒ cóng ~ lái' },
          { jp:'何をしていますか？',      romaji:'Nani wo shite imasu ka?',          en:'What do you do (for work)?',      zh:'你做什么工作？', pinyin:'nǐ zuò shénme gōngzuò?' },
          { jp:'旅行中です',             romaji:'Ryokōchū desu',                    en:'I\'m traveling',                  zh:'我在旅行', pinyin:'wǒ zài lǚxíng' },
          { jp:'何歳ですか？',           romaji:'Nansai desu ka?',                  en:'How old are you?',                tip:'Japanese often ask age to determine speech level. Fine to answer honestly.' },
          { jp:'〜歳です',               romaji:'~sai desu',                        en:'I am ~ years old',                tip:'三十歳です = sanjussai desu = I am 30 years old.' },
        ]
      },
      {
        title: 'Small Talk',
        phrases: [
          { jp:'日本語が上手ですね！',      romaji:'Nihongo ga jōzu desu ne!',          en:'Your Japanese is good!',          tip:'You\'ll hear this even with minimal Japanese. Humble response below.' },
          { jp:'いいえ、まだまだです',      romaji:'Iie, madamada desu',               en:'No, I still have a long way to go', tip:'The correct humble response to compliments. Say it always.' },
          { jp:'日本が大好きです',          romaji:'Nihon ga daisuki desu',            en:'I love Japan',                    zh:'我很喜欢日本', pinyin:'wǒ hěn xǐhuān Rìběn' },
          { jp:'日本料理が大好きです',      romaji:'Nihon ryōri ga daisuki desu',      en:'I love Japanese food' },
          { jp:'楽しいです',               romaji:'Tanoshii desu',                    en:'It\'s fun / I\'m having fun',     zh:'很好玩/很开心', pinyin:'hěn hǎowán / hěn kāixīn' },
          { jp:'きれいですね',             romaji:'Kirei desu ne',                    en:'How beautiful! (scenery/places)', zh:'很漂亮啊', pinyin:'hěn piàoliang a' },
          { jp:'天気がいいですね',         romaji:'Tenki ga ii desu ne',              en:'The weather is nice, isn\'t it',  tip:'Safe, universal small talk opener in any language.' },
          { jp:'寒い / 暑い / 涼しい',     romaji:'Samui / Atsui / Suzushii',        en:'Cold / Hot / Cool',               zh:'冷/热/凉快', pinyin:'lěng / rè / liángkuai' },
          { jp:'写真を撮ってもらえますか？', romaji:'Shashin wo totte moraemasu ka?',  en:'Could you take my photo?',        zh:'能帮我拍照吗？', pinyin:'néng bāng wǒ pāizhào ma?' },
          { jp:'一緒に写真を撮りましょう！', romaji:'Issho ni shashin wo torimashō!',  en:'Let\'s take a photo together!',   tip:'Japanese people love taking photos with foreign travelers.' },
        ]
      },
      {
        title: 'Izakaya (Japanese Pub)',
        phrases: [
          { jp:'生ビールをください',            romaji:'Nama bīru wo kudasai',            en:'Draft beer please',                tip:'生 (nama) = raw/draft. Most izakayas start with this.' },
          { jp:'乾杯！',                        romaji:'Kanpai!',                          en:'Cheers!',                          zh:'干杯！', pinyin:'gānbēi!', zhNote:'IDENTICAL! Same characters, same meaning, same occasion!' },
          { jp:'もう一杯ください',              romaji:'Mō ippai kudasai',                en:'One more (drink) please' },
          { jp:'おすすめのおつまみは？',         romaji:'Osusume no otsumami wa?',          en:'What snacks do you recommend?',    tip:'おつまみ (otsumami) = snacks/appetizers at a bar.' },
          { jp:'とりあえずビールで！',          romaji:'Toriaezu bīru de!',               en:'Beer first, then we\'ll figure it out!', tip:'Classic izakaya opener. Everyone laughs.' },
          { jp:'日本酒リストを見せてください',  romaji:'Nihonshu risuto wo misete kudasai',en:'Show me the sake list please',     tip:'Ask for ひやおろし (hiyaoroshi) in autumn — seasonal best.' },
          { jp:'梅酒ソーダをください',          romaji:'Umeshu sōda wo kudasai',          en:'Plum wine soda please',            tip:'Umeshu is sweet plum liqueur. Great entry drink for non-beer drinkers.' },
          { jp:'締めに〜をください',            romaji:'Shime ni ~wo kudasai',            en:'For the last dish, ~ please',      tip:'締め (shime) = final dish. Izakayas end with ramen or ochazuke (rice in broth).' },
          { jp:'お会計をお願いします',          romaji:'Okaikei wo onegaishimasu',        en:'Check please' },
          { jp:'割り勘でお願いします',          romaji:'Warikan de onegaishimasu',        en:'Dutch treat / Split evenly',       tip:'割り勘 = splitting the bill equally. Common in Japan.' },
        ]
      },
      {
        title: 'Compliments & Fun Phrases',
        phrases: [
          { jp:'おいしい！',     romaji:'Oishii!',       en:'Delicious!',               zh:'好吃！', pinyin:'hǎochī!', zhNote:'The feeling is universal. Say with genuine enthusiasm.' },
          { jp:'すごい！',       romaji:'Sugoi!',        en:'Amazing! / Incredible!',   zh:'好厉害！', pinyin:'hǎo lìhai!', zhNote:'All-purpose positive exclamation. Like "wow".' },
          { jp:'かわいい！',     romaji:'Kawaii!',       en:'Cute!',                    zh:'可爱！', pinyin:'kě\'ài!', zhNote:'可愛い (kawaii) = 可爱 (kě\'ài) — same characters! Japanese borrowed from Chinese.' },
          { jp:'かっこいい！',   romaji:'Kakkoii!',      en:'Cool! (for people/things)',zh:'帅！/ 酷！', pinyin:'shuài! / kù!' },
          { jp:'面白い！',       romaji:'Omoshiroi!',    en:'Interesting! / Funny!',    zh:'有意思！', pinyin:'yǒu yìsi!' },
          { jp:'本当ですか？',   romaji:'Hontō desu ka?',en:'Really? / Is that true?',  zh:'真的吗？', pinyin:'zhēn de ma?' },
          { jp:'マジですか？',   romaji:'Maji desu ka?', en:'Seriously? (casual)',      tip:'Very common in casual speech. Like "no way!" in English.' },
          { jp:'なるほど',       romaji:'Naruhodo',      en:'I see / Ah, I understand', zh:'原来如此', pinyin:'yuánlái rúcǐ' },
          { jp:'頑張って！',     romaji:'Ganbatte!',     en:'Good luck! / Do your best!',zh:'加油！', pinyin:'jiāyóu!', zhNote:'加油 (jiāyóu) is the Chinese equivalent — "add oil!" Both are cheering on someone.' },
        ]
      },
      {
        title: 'Saying Goodbye',
        phrases: [
          { jp:'また会いましょう',             romaji:'Mata aimashō',               en:'Let\'s meet again',                zh:'下次再见', pinyin:'xià cì zàijiàn' },
          { jp:'連絡先を交換しませんか？',     romaji:'Renrakusaki wo kōkan shimasen ka?', en:'Shall we exchange contact info?', tip:'LINE is the main messaging app in Japan. Ask: LINEを交換しませんか？' },
          { jp:'LINEを教えてください',         romaji:'Rain wo oshiete kudasai',     en:'Please give me your LINE',         tip:'LINE = Japanese WhatsApp. Share QR code.' },
          { jp:'楽しかったです！',             romaji:'Tanoshikatta desu!',          en:'That was fun!',                   zh:'很开心！', pinyin:'hěn kāixīn!' },
          { jp:'また日本に来てください',       romaji:'Mata Nihon ni kite kudasai',  en:'Please come to Japan again',       tip:'Locals say this warmly. The correct humble response: もちろんです (mochiron desu = of course).' },
          { jp:'お気をつけて',                 romaji:'Oki wo tsukete',              en:'Take care / Safe travels',         zh:'一路顺风', pinyin:'yīlù shùnfēng' },
        ]
      }
    ]
  },

  {
    id: 'emergencies',
    title: 'Emergencies',
    icon: '🚨',
    groups: [
      {
        title: 'Critical Phrases',
        phrases: [
          { jp:'たすけて！',              romaji:'Tasukete!',                    en:'HELP!',                           zh:'救命！', pinyin:'jiùmìng!', tip:'Shout loudly. People WILL respond in Japan.' },
          { jp:'警察を呼んでください！',  romaji:'Keisatsu wo yonde kudasai!',   en:'Call the police!',                tip:'Emergency number in Japan: 110 (police), 119 (fire/ambulance).' },
          { jp:'救急車を呼んでください！',romaji:'Kyūkyūsha wo yonde kudasai!',  en:'Call an ambulance!',              tip:'119 = fire and ambulance. Free to call.' },
          { jp:'火事！',                  romaji:'Kaji!',                        en:'FIRE!',                           zh:'火灾！', pinyin:'huǒzāi!' },
          { jp:'泥棒！',                  romaji:'Dorobō!',                      en:'Thief! / Stop thief!' },
          { jp:'緊急です',               romaji:'Kinkyū desu',                  en:'This is an emergency',            zh:'紧急情况！', pinyin:'jǐnjí qíngkuàng!', zhNote:'緊急 (kinkyū) = 紧急 (jǐnjí). Same characters!' },
          { jp:'危ない！',               romaji:'Abunai!',                      en:'Danger! / Watch out!',            tip:'Shout this to warn anyone of imminent danger.' },
        ]
      },
      {
        title: 'Medical',
        phrases: [
          { jp:'病院はどこですか？',         romaji:'Byōin wa doko desu ka?',       en:'Where is the hospital?',          zh:'医院在哪里？', pinyin:'yīyuàn zài nǎlǐ?', zhNote:'病院 (byōin) ≈ 医院 (yīyuàn). 院 = same character!' },
          { jp:'薬局はどこですか？',         romaji:'Yakkyoku wa doko desu ka?',    en:'Where is the pharmacy?',          zh:'药局在哪里？', pinyin:'yàojú zài nǎlǐ?' },
          { jp:'医者を呼んでください',       romaji:'Isha wo yonde kudasai',        en:'Please call a doctor',            zh:'请叫医生', pinyin:'qǐng jiào yīshēng' },
          { jp:'〜が痛いです',              romaji:'~ga itai desu',                en:'~ hurts / I have pain in ~',      zh:'～很痛', pinyin:'~ hěn tòng', tip:'Add body part: 頭 (atama=head), お腹 (onaka=stomach), 胸 (mune=chest), 足 (ashi=leg/foot).' },
          { jp:'頭が痛いです',              romaji:'Atama ga itai desu',           en:'I have a headache',               zh:'我头痛', pinyin:'wǒ tóuténg' },
          { jp:'お腹が痛いです',            romaji:'Onaka ga itai desu',           en:'I have a stomach ache',           zh:'我肚子痛', pinyin:'wǒ dùzi tòng' },
          { jp:'気分が悪いです',            romaji:'Kibun ga warui desu',          en:'I feel unwell / nauseous',        zh:'我感觉不舒服', pinyin:'wǒ gǎnjué bù shūfu' },
          { jp:'熱があります',              romaji:'Netsu ga arimasu',             en:'I have a fever',                  zh:'我发烧了', pinyin:'wǒ fāshāo le' },
          { jp:'〜アレルギーがあります',    romaji:'~arerugii ga arimasu',         en:'I have a ~ allergy',              zh:'我对～过敏', pinyin:'wǒ duì ~ guòmǐn' },
          { jp:'〜を服用しています',        romaji:'~wo fukuyō shite imasu',       en:'I am taking ~ (medication)',       tip:'Show the medicine packaging if possible.' },
          { jp:'救急病院はどこですか？',    romaji:'Kyūkyū byōin wa doko desu ka?', en:'Where is the emergency hospital?' },
          { jp:'血液型は〜型です',          romaji:'Ketsuekigata wa ~gata desu',   en:'My blood type is ~',              tip:'A (エー), B (ビー), AB (エービー), O (オー). Japan is blood-type obsessed.' },
        ]
      },
      {
        title: 'Lost Items & Police',
        phrases: [
          { jp:'〜をなくしました',           romaji:'~wo nakushimashita',           en:'I lost my ~',                     zh:'我把～丢了', pinyin:'wǒ bǎ ~ diū le' },
          { jp:'パスポートをなくしました',   romaji:'Pasupōto wo nakushimashita',   en:'I lost my passport',              tip:'Go immediately to your embassy AND the nearest police box (交番 kōban).' },
          { jp:'財布をなくしました',         romaji:'Saifu wo nakushimashita',      en:'I lost my wallet',                zh:'我的钱包丢了', pinyin:'wǒ de qiánbāo diū le' },
          { jp:'スマホをなくしました',       romaji:'Sumaho wo nakushimashita',     en:'I lost my smartphone' },
          { jp:'交番はどこですか？',         romaji:'Kōban wa doko desu ka?',       en:'Where is the police box (koban)?', tip:'Kōban = neighborhood police boxes. Everywhere. Friendly. Report any lost items here — Japan has extraordinary lost-and-found rates.' },
          { jp:'遺失物センターに届けたいです',romaji:'Ishitsubutsu sentā ni todoke tai desu', en:'I want to report to the lost property center', tip:'Found on trains: report to the train company\'s lost & found immediately.' },
          { jp:'盗まれました',               romaji:'Nusumaremashita',              en:'It was stolen',                   tip:'Theft is rare in Japan. If it happens, go to koban immediately.' },
          { jp:'大使館はどこですか？',       romaji:'Taishikan wa doko desu ka?',   en:'Where is the embassy?',           zh:'大使馆在哪里？', pinyin:'dàshǐguǎn zài nǎlǐ?', zhNote:'大使馆 = taishikan = dàshǐguǎn. SAME characters!' },
          { jp:'英語を話せる人はいますか？', romaji:'Eigo wo hanaseru hito wa imasu ka?', en:'Is there someone who speaks English?', tip:'In an emergency, this phrase gets you help fast.' },
        ]
      }
    ]
  }
];
