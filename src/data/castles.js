// 200 castles: 日本100名城 (#1-100) + 続日本100名城 (#101-200)
// Sorted by official number. All fields: id, number, regionId, name, city,
// prefecture, type, designation, position, illustration, goshuin, history,
// figures, trivia, highlights, architecture.
export const castles = [
// ── 北海道 ──
  {
    id: 'goryokaku',
    number: 2,
    regionId: 'hokkaido',
    name: { ja: '五稜郭', zhTw: '五稜郭', en: 'Goryōkaku' },
    city: { ja: '函館市', zhTw: '函館市', en: 'Hakodate' },
    prefecture: { ja: '北海道', zhTw: '北海道', en: 'Hokkaido' },
    type: 'fortress',
    designation: '特別史跡',
    position: { x: 78, y: 16 },
    illustration: { style: 'star-fort', tiers: 1, color: '#5b9a8b', roofColor: '#3d5c4a' },
    goshuin: { bg: '#f0e6d3', ink: '#2d4a3e', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      {
        year: 1857,
        event: {
          ja: '幕府はロシアなど外国勢力への備えとして、蘭学者・武田斐三郎の設計でヨーロッパ式星形要塞の建設を開始した。',
          zhTw: '幕府為防備俄羅斯等外國勢力，委託蘭學者武田斐三郎設計，開始建設歐式星形要塞。',
          en: 'The Tokugawa shogunate began constructing a European-style star fort designed by Takeda Hisaburō to defend against Russian and other foreign threats.',
        },
      },
      {
        year: 1866,
        event: {
          ja: '約9年の歳月をかけて五稜郭が完成し、箱館奉行所が移転。日本初の西洋式城郭として北方防衛の拠点となった。',
          zhTw: '歷時約九年五稜郭完工，箱館奉行所遷入。作為日本首座西式城郭，成為北方防禦據點。',
          en: 'After roughly nine years of construction Goryōkaku was completed and the Hakodate magistrate relocated there, making it Japan\'s first Western-style fort and a key northern defense post.',
        },
      },
      {
        year: 1868,
        event: {
          ja: '戊辰戦争の最終局面である箱館戦争が勃発し、旧幕府軍の榎本武揚・土方歳三らが五稜郭を占拠して蝦夷共和国の樹立を宣言した。',
          zhTw: '戊辰戰爭最後階段的箱館戰爭爆發，舊幕府軍的榎本武揚、土方歲三等人佔據五稜郭，宣告成立蝦夷共和國。',
          en: 'The Battle of Hakodate erupted as the final chapter of the Boshin War; former shogunate forces under Enomoto Takeaki and Hijikata Toshizō seized Goryōkaku and proclaimed the Republic of Ezo.',
        },
      },
      {
        year: 1869,
        event: {
          ja: '新政府軍の総攻撃により五稜郭は陥落し、土方歳三は戦死。これにより戊辰戦争が終結し、日本の近代国家への移行が確定した。',
          zhTw: '新政府軍發動總攻，五稜郭陷落，土方歲三戰死。戊辰戰爭至此終結，日本向近代國家的轉型正式確立。',
          en: 'Government forces launched a final assault and Goryōkaku fell; Hijikata Toshizō was killed in battle, ending the Boshin War and securing Japan\'s transition to a modern state.',
        },
      },
      {
        year: 1914,
        event: {
          ja: '五稜郭は公園として一般に開放され、現在は桜の名所として市民に親しまれ、特別史跡にも指定されている。',
          zhTw: '五稜郭作為公園向公眾開放，如今以櫻花名勝聞名，並被指定為特別史跡。',
          en: 'Goryōkaku was opened to the public as a park; today it is beloved as a cherry blossom destination and is designated a Special Historic Site.',
        },
      },
    ],
    figures: [
      {
        ja: '土方歳三', zhTw: '土方歲三', en: 'Hijikata Toshizō',
        desc: {
          ja: '新選組の副長として幕末を戦い抜き、箱館戦争では旧幕府軍の陸軍奉行並として五稜郭に立て籠もり戦死した。',
          zhTw: '新選組副長，在幕末各戰役中奮戰，箱館戰爭時以舊幕府軍陸軍奉行並的身份固守五稜郭，最終戰死。',
          en: 'Vice-commander of the Shinsengumi who fought through the Bakumatsu wars and died defending Goryōkaku as army magistrate of the former shogunate forces.',
        },
      },
      {
        ja: '榎本武揚', zhTw: '榎本武揚', en: 'Enomoto Takeaki',
        desc: {
          ja: '旧幕府海軍を率いて蝦夷地に渡り、蝦夷共和国の総裁に就任したが、降伏後は明治政府に仕え外交官として活躍した。',
          zhTw: '率領舊幕府海軍渡海至蝦夷地，就任蝦夷共和國總裁，投降後轉仕明治政府，成為活躍的外交官。',
          en: 'Led the former shogunate navy to Ezo and served as president of the Republic of Ezo; after surrendering he joined the Meiji government and became a prominent diplomat.',
        },
      },
      {
        ja: '武田斐三郎', zhTw: '武田斐三郎', en: 'Takeda Hisaburō',
        desc: {
          ja: '蘭学を修めた幕末の洋学者・軍学者で、ヨーロッパの稜堡式築城術を学び五稜郭を設計した。',
          zhTw: '幕末修習蘭學的洋學者兼軍學家，學習歐洲稜堡式築城術後設計了五稜郭。',
          en: 'A Bakumatsu-era scholar of Western studies and military science who studied European bastion fortification and designed Goryōkaku.',
        },
      },
    ],
    trivia: [
      { ja: '星形の稜堡が正確に5つあることから「五稜郭」の名がついた。五稜郭タワーからは美しい星形の全景を一望できる。', zhTw: '因正好有5個星形稜堡而得名「五稜郭」。從五稜郭塔可以一覽美麗的星形全景。', en: 'The name "Goryōkaku" (Five-Pointed Fort) comes from its exact five-pointed star shape, best appreciated from the Goryōkaku Tower observation deck.' },
      { ja: '春には1,600本以上の桜が咲き、北海道屈指の花見スポットとして多くの観光客が訪れる。', zhTw: '春天有超過1,600棵櫻花綻放，是北海道首屈一指的賞櫻名所，吸引眾多遊客造訪。', en: 'In spring, over 1,600 cherry trees bloom within the fort, making it one of Hokkaido\'s top hanami (cherry blossom viewing) destinations.' },
      { ja: '蝦夷共和国は日本初の民主的選挙で指導者を選んだ政権とされ、わずか数ヶ月で終わった幻の共和国であった。', zhTw: '蝦夷共和國被視為日本首個以民主選舉選出領導者的政權，僅持續數月便成為幻之共和國。', en: 'The Republic of Ezo is considered the first government in Japan to elect its leader democratically, though the short-lived republic lasted only a few months.' },
    ],
    highlights: [
      { ja: '五稜郭タワー展望台 — 星形の全景を見渡せる最高のビューポイント。', zhTw: '五稜郭塔展望台 — 俯瞰星形全景的最佳觀景點。', en: 'Goryōkaku Tower observation deck — the best vantage point to see the complete star shape from above.' },
      { ja: '復元された箱館奉行所 — 幕末の行政機関を忠実に再現した歴史的建造物。', zhTw: '復原的箱館奉行所 — 忠實再現幕末行政機關的歷史建築。', en: 'Reconstructed Hakodate Magistrate\'s Office — a faithful recreation of the Bakumatsu-era administrative building.' },
      { ja: '桜の季節（4月下旬〜5月）— 堀に映る桜と星形城郭が織りなす絶景。', zhTw: '櫻花季（4月下旬至5月）— 映照在護城河中的櫻花與星形城郭交織出的絕景。', en: 'Cherry blossom season (late April–May) — stunning views of sakura reflected in the moat around the star-shaped fort.' },
    ],
    architecture: [
      { ja: 'ヴォーバン式星形要塞 — フランスの軍事技術者ヴォーバンが確立した稜堡式築城術に基づく日本唯一の本格的西洋式城郭。', zhTw: '沃邦式星形要塞 — 基於法國軍事工程師沃邦所確立的稜堡式築城術，日本唯一的正統西式城郭。', en: 'Vauban-style star fort — Japan\'s only authentic Western-style fortress based on the bastion fortification system established by French military engineer Vauban.' },
      { ja: '半月堡（ラヴリン）— 大手口に設けられた三角形の外郭防御施設で、日本の城郭では極めて珍しい構造。', zhTw: '半月堡（ravelin）— 設於大手口的三角形外郭防禦設施，在日本城郭中極為罕見。', en: 'Half-moon ravelin at the main gate — a triangular outwork defense structure extremely rare among Japanese fortifications.' },
      { ja: '石垣は函館近郊の安山岩を使用し、稜堡の各角度が精密に計算された砲撃陣地を形成している。', zhTw: '石垣使用函館近郊的安山岩，稜堡各角度經精密計算形成砲擊陣地。', en: 'Stone walls built with local andesite, with each bastion angle precisely calculated to create interlocking fields of fire.' },
    ],
  },

  // ── 東北 ──
  {
    id: 'hirosaki',
    number: 4,
    regionId: 'tohoku',
    name: { ja: '弘前城', zhTw: '弘前城', en: 'Hirosaki Castle' },
    city: { ja: '弘前市', zhTw: '弘前市', en: 'Hirosaki' },
    prefecture: { ja: '青森県', zhTw: '青森縣', en: 'Aomori' },
    type: 'hirayama',
    designation: '重要文化財',
    position: { x: 74, y: 32 },
    illustration: { style: 'classic', tiers: 3, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#8b6914' },
    history: [
      {
        year: 1611,
        event: {
          ja: '津軽藩初代藩主・津軽為信の遺志を継いだ二代目・信枚が弘前城を完成させ、津軽地方の政治的中心地を確立した。',
          zhTw: '津輕藩初代藩主津輕為信之遺志由二代目信枚繼承，完成弘前城，確立了津輕地區的政治中心。',
          en: 'The second lord Tsugaru Nobuhira completed Hirosaki Castle, fulfilling his father Tamenobu\'s vision and establishing it as the political center of the Tsugaru domain.',
        },
      },
      {
        year: 1627,
        event: {
          ja: '落雷により五重天守が火薬庫に引火して大爆発を起こし、天守が全焼。以後200年近く天守のない状態が続いた。',
          zhTw: '雷擊引燃五重天守的火藥庫引發大爆炸，天守全毀。此後近兩百年城內無天守。',
          en: 'Lightning struck the five-story keep, igniting its gunpowder stores and causing a massive explosion that completely destroyed the tower; the castle went without a keep for nearly 200 years.',
        },
      },
      {
        year: 1810,
        event: {
          ja: '九代藩主・津軽寧親が幕府の許可を得て三重の辰巳櫓を改築し、現存する天守として再建した。',
          zhTw: '第九代藩主津輕寧親獲幕府許可，將三重辰巳櫓改建為現存天守。',
          en: 'The ninth lord Tsugaru Yasuchika received shogunate permission to convert the three-story Tatsumi turret into a new keep, which survives to this day.',
        },
      },
      {
        year: 1895,
        event: {
          ja: '弘前城が弘前公園として一般開放され、後に植えられた桜と共に日本有数の花見の名所となった。',
          zhTw: '弘前城作為弘前公園向公眾開放，後來種植的櫻花使其成為日本著名的賞櫻勝地。',
          en: 'Hirosaki Castle was opened as a public park; cherry trees planted later made it one of Japan\'s most celebrated hanami destinations.',
        },
      },
    ],
    figures: [
      {
        ja: '津軽為信', zhTw: '津輕為信', en: 'Tsugaru Tamenobu',
        desc: {
          ja: '南部氏から独立して津軽藩を立藩した戦国武将で、弘前城築城を計画したが完成を見る前に没した。',
          zhTw: '從南部氏獨立建立津輕藩的戰國武將，規劃了弘前城的興建但未及完工便去世。',
          en: 'A Sengoku-era warlord who broke away from the Nanbu clan to found the Tsugaru domain and planned Hirosaki Castle but died before its completion.',
        },
      },
      {
        ja: '津軽信枚', zhTw: '津輕信枚', en: 'Tsugaru Nobuhira',
        desc: {
          ja: '津軽藩二代藩主で、父・為信の遺志を受け継いで弘前城を完成させ、城下町の整備を進めた。',
          zhTw: '津輕藩第二代藩主，繼承父親為信的遺志完成弘前城，並推動城下町的整備建設。',
          en: 'Second lord of the Tsugaru domain who completed Hirosaki Castle in accordance with his father\'s plans and developed the surrounding castle town.',
        },
      },
      {
        ja: '津軽信政', zhTw: '津輕信政', en: 'Tsugaru Nobumasa',
        desc: {
          ja: '津軽藩四代藩主で、新田開発や産業振興を積極的に行い、藩政の基礎を固めた名君として知られる。',
          zhTw: '津輕藩第四代藩主，積極推動新田開發與產業振興，被譽為奠定藩政基礎的名君。',
          en: 'Fourth lord of the Tsugaru domain, celebrated as a wise ruler who strengthened domain governance through land reclamation and industrial development.',
        },
      },
    ],
    trivia: [
      { ja: '現在石垣の修復工事中で、2015年には約400トンの天守が丸ごとレールで70m移動された。この「曳屋」は日本中で話題になった。', zhTw: '目前正在進行石垣修復工程，2015年將約400噸的天守整體沿軌道移動了70公尺。這次「曳屋」在全日本引發話題。', en: 'During ongoing stone wall repairs, the entire 400-ton keep was moved 70 meters on rails in 2015 — this rare "hikiya" relocation became national news.' },
      { ja: '城内公園には約2,600本の桜があり、堀に散った花びらが作る「花筏」は日本を代表する絶景の一つ。', zhTw: '城內公園有約2,600棵櫻花樹，飄落在護城河上的花瓣形成的「花筏」是日本代表性的絕景之一。', en: 'The castle park has 2,600 cherry trees; petals covering the moat create the iconic "hanaikada" (flower raft) — one of Japan\'s most famous spring scenes.' },
      { ja: '日本最北端の現存天守であり、東北地方で唯一の現存天守でもある。', zhTw: '是日本最北端的現存天守，也是東北地方唯一的現存天守。', en: 'It is the northernmost surviving original castle keep in Japan and the only one remaining in the Tōhoku region.' },
    ],
    highlights: [
      { ja: '桜まつり（4月〜5月）— 日本三大桜名所の一つに数えられる圧巻の花見スポット。', zhTw: '櫻花祭（4月至5月）— 被列為日本三大櫻花名所之一的壯觀賞櫻景點。', en: 'Cherry blossom festival (April–May) — counted among Japan\'s top three cherry blossom viewing spots.' },
      { ja: 'レールで移動中の天守 — 石垣修復が完了するまでの期間限定の珍しい光景。', zhTw: '正在軌道上移動的天守 — 石垣修復完成前的期間限定珍貴景象。', en: 'The keep on rails — a rare, limited-time sight until the stone wall restoration is complete.' },
      { ja: '岩木山をバックにした雪景色の天守 — 冬の弘前城の代表的な風景。', zhTw: '以岩木山為背景的雪景天守 — 冬季弘前城的代表性風景。', en: 'Snow-covered keep with Mt. Iwaki in the background — the iconic winter view of Hirosaki Castle.' },
    ],
    architecture: [
      { ja: '三重三階の御三階櫓が天守の役割を担う。元の五重天守は落雷で焼失し、代わりに櫓を改築して天守とした珍しい事例。', zhTw: '三重三階的御三階櫓擔任天守角色。原本的五重天守因雷擊焚毀，改建櫓為天守的罕見案例。', en: 'A three-story turret (gosankai yagura) serves as the castle keep — a rare case where a turret was converted to replace the original five-story keep destroyed by lightning.' },
      { ja: '江戸時代から現存する5棟の城門（重要文化財）が今も残り、当時の威容を伝えている。', zhTw: '江戶時代留存至今的5棟城門（重要文化財）仍在，傳達著當時的威嚴。', en: 'Five castle gates surviving from the Edo period are designated Important Cultural Properties, preserving the castle\'s original grandeur.' },
      { ja: '三重の堀と土塁で構成された防御体系は東北の城郭の中でも保存状態が良好。', zhTw: '由三重護城河與土壘構成的防禦體系，在東北城郭中保存狀態良好。', en: 'A defensive system of triple moats and earthen ramparts, among the best-preserved castle defenses in the Tōhoku region.' },
    ],
  },
  {
    id: 'sendai',
    number: 8,
    regionId: 'tohoku',
    name: { ja: '仙台城', zhTw: '仙台城', en: 'Sendai Castle' },
    city: { ja: '仙台市', zhTw: '仙台市', en: 'Sendai' },
    prefecture: { ja: '宮城県', zhTw: '宮城縣', en: 'Miyagi' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 78, y: 40 },
    illustration: { style: 'ruins', tiers: 2, color: '#8b8b7a', roofColor: '#4a4a3a' },
    goshuin: { bg: '#f0e8d8', ink: '#1a3a2a', seal: '#b83030', crest: '#c48a2a' },
    history: [
      {
        year: 1601,
        event: {
          ja: '伊達政宗が青葉山に仙台城の築城を開始。天守を持たない代わりに巨大な石垣と壮麗な本丸御殿を構え、東北最大の藩の居城とした。',
          zhTw: '伊達政宗在青葉山開始築建仙台城。不設天守，而以巨大石垣與壯麗本丸御殿為特色，成為東北最大藩的居城。',
          en: 'Date Masamune began building Sendai Castle on Mount Aoba; rather than a keep, he constructed massive stone walls and a grand main hall, making it the seat of the largest domain in the Tōhoku region.',
        },
      },
      {
        year: 1636,
        event: {
          ja: '政宗の死後、二代藩主・伊達忠宗が二の丸を拡張し、藩政の中枢機能を整備して仙台藩62万石の安定統治を確立した。',
          zhTw: '政宗去世後，二代藩主伊達忠宗擴建二之丸，整備藩政中樞機能，確立仙台藩六十二萬石的穩定治理。',
          en: 'After Masamune\'s death, the second lord Date Tadamune expanded the secondary compound and organized administrative functions, establishing stable governance of the 620,000-koku Sendai domain.',
        },
      },
      {
        year: 1882,
        event: {
          ja: '大火災により本丸御殿など主要建造物が焼失し、仙台城は往時の壮麗さを失った。',
          zhTw: '大火災導致本丸御殿等主要建築燒毀，仙台城失去了昔日的壯麗面貌。',
          en: 'A devastating fire destroyed the main hall and other key structures, stripping Sendai Castle of its former grandeur.',
        },
      },
      {
        year: 2003,
        event: {
          ja: '大手門脇櫓が木造で忠実に復元され、仙台城の歴史的景観の一部が蘇った。',
          zhTw: '大手門旁櫓以木造方式忠實復原，仙台城的部分歷史景觀得以重現。',
          en: 'The turret beside the main gate was faithfully reconstructed in wood, partially restoring the historic landscape of Sendai Castle.',
        },
      },
    ],
    figures: [
      {
        ja: '伊達政宗', zhTw: '伊達政宗', en: 'Date Masamune',
        desc: {
          ja: '「独眼竜」の異名で知られる仙台藩初代藩主で、仙台城と城下町を築き、東北随一の大藩の礎を作った。',
          zhTw: '以「獨眼龍」之名聞名的仙台藩初代藩主，築建仙台城與城下町，奠定東北第一大藩的基礎。',
          en: 'Known as the "One-Eyed Dragon," the founding lord of Sendai domain who built Sendai Castle and its castle town, creating the most powerful domain in Tōhoku.',
        },
      },
      {
        ja: '伊達忠宗', zhTw: '伊達忠宗', en: 'Date Tadamune',
        desc: {
          ja: '仙台藩二代藩主で、父・政宗が築いた藩の基盤を引き継ぎ、城郭と城下町の整備を進めて藩政を安定させた。',
          zhTw: '仙台藩第二代藩主，繼承父親政宗的藩政基礎，推進城郭與城下町的整備，穩固藩政。',
          en: 'Second lord of Sendai domain who inherited his father Masamune\'s foundations and stabilized governance by further developing the castle and town.',
        },
      },
      {
        ja: '片倉景綱', zhTw: '片倉景綱', en: 'Katakura Kagetsuna',
        desc: {
          ja: '伊達政宗の重臣で「片倉小十郎」の名で知られ、智勇兼備の軍師として政宗の天下取りを支えた。',
          zhTw: '伊達政宗的重臣，以「片倉小十郎」之名聞名，作為智勇雙全的軍師輔佐政宗爭霸天下。',
          en: 'A key retainer of Date Masamune known as "Katakura Kojūrō," famed as a brilliant strategist and warrior who supported Masamune\'s ambitions.',
        },
      },
    ],
    trivia: [
      { ja: '天守は一度も建てられなかった。政宗は十分な財力があったが、徳川家の警戒を避けるためあえて天守を築かなかったとされる。', zhTw: '天守從未建造過。政宗雖有充足財力，但據說為避免德川家猜忌而刻意不築天守。', en: 'No keep was ever built — despite having ample resources, Masamune reportedly chose not to build one to avoid arousing Tokugawa suspicion.' },
      { ja: '政宗はここからスペインとローマに使節団（支倉常長）を派遣し、太平洋を渡る壮大な外交を試みた。', zhTw: '政宗從這裡向西班牙和羅馬派遣使節團（支倉常長），嘗試了橫渡太平洋的壯闘外交。', en: 'From here, Masamune dispatched an embassy (led by Hasekura Tsunenaga) across the Pacific to Spain and Rome — one of Japan\'s most ambitious diplomatic ventures.' },
      { ja: '城跡にある伊達政宗の騎馬像は仙台のシンボルで、日本で最も有名な武将像の一つ。', zhTw: '城址上的伊達政宗騎馬像是仙台的象徵，也是日本最知名的武將像之一。', en: 'The equestrian statue of Date Masamune at the castle site is Sendai\'s symbol and one of Japan\'s most recognizable warrior statues.' },
    ],
    highlights: [
      { ja: '伊達政宗騎馬像と仙台市街のパノラマビュー。', zhTw: '伊達政宗騎馬像與仙台市區全景。', en: 'Equestrian statue of Date Masamune with panoramic views of downtown Sendai.' },
      { ja: '復元された大手門と隅櫓 — 往時の威容を偲ばせる建造物。', zhTw: '復原的大手門與隅櫓 — 令人追想往昔威嚴的建築。', en: 'Reconstructed Ōtemon gate and corner turret — structures evoking the castle\'s former grandeur.' },
      { ja: '夜間ライトアップされた石垣と城跡 — 幻想的な雰囲気を楽しめる。', zhTw: '夜間燈光照射的石垣與城址 — 可享受夢幻般的氛圍。', en: 'Night illumination of the stone walls and castle ruins — creating a magical atmosphere.' },
    ],
    architecture: [
      { ja: '高さ17mに及ぶ巨大な石垣は接合材なしで積み上げられ、自然の崖を活かした堅固な防御を実現。', zhTw: '高達17公尺的巨大石垣不使用接合材料堆砌而成，利用天然懸崖實現堅固防禦。', en: 'Massive stone walls up to 17 meters tall built without mortar, utilizing natural cliffs for formidable defense.' },
      { ja: '本丸は天然の断崖上に位置し、青葉山の地形を巧みに活かした要害となっている。', zhTw: '本丸位於天然斷崖之上，巧妙利用青葉山地形構成要害。', en: 'The main bailey sits atop natural cliffs, skillfully leveraging the terrain of Mt. Aoba as a natural fortress.' },
      { ja: '広瀬川から引いた精巧な水利システム（水の手）が城の生命線として機能していた。', zhTw: '從廣瀨川引入的精巧水利系統（水之手）作為城的生命線發揮功能。', en: 'An elaborate water system (mizu-no-te) drawing from the Hirose River served as the castle\'s lifeline.' },
    ],
  },

  // ── 關東 ──
  {
    id: 'edo',
    number: 21,
    regionId: 'kanto',
    name: { ja: '江戸城', zhTw: '江戶城', en: 'Edo Castle' },
    city: { ja: '千代田区', zhTw: '千代田區', en: 'Chiyoda' },
    prefecture: { ja: '東京都', zhTw: '東京都', en: 'Tokyo' },
    type: 'hirajiro',
    designation: '特別史跡',
    position: { x: 76, y: 54 },
    illustration: { style: 'imperial', tiers: 5, color: '#f5f0e8', roofColor: '#2a3a2a' },
    goshuin: { bg: '#f5f0e8', ink: '#1a1a3a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      {
        year: 1457,
        event: {
          ja: '扇谷上杉氏の家臣・太田道灌が武蔵国に江戸城を築城。巧みな縄張りを持つ堅城として関東の要衝に位置づけられた。',
          zhTw: '扇谷上杉氏家臣太田道灌在武藏國築建江戶城。以精巧的繩張設計聞名，成為關東地區的軍事要衝。',
          en: 'Ōta Dōkan, a retainer of the Ōgigayatsu Uesugi clan, built Edo Castle in Musashi Province; its skillful layout made it a strategic stronghold in the Kantō region.',
        },
      },
      {
        year: 1590,
        event: {
          ja: '豊臣秀吉の命により徳川家康が関東に移封され江戸城に入城。家康は大規模な改修に着手し、天下の府城への変貌を始めた。',
          zhTw: '受豐臣秀吉之命，德川家康被轉封至關東並入主江戶城。家康開始大規模改建，著手將其打造為天下府城。',
          en: 'Tokugawa Ieyasu was transferred to the Kantō by Toyotomi Hideyoshi and entered Edo Castle, launching major expansions that would transform it into the seat of national power.',
        },
      },
      {
        year: 1638,
        event: {
          ja: '三代将軍・徳川家光の時代に天守が完成し、江戸城は日本最大の城郭として幕藩体制の中枢となった。',
          zhTw: '三代將軍德川家光時代天守完成，江戶城成為日本最大城郭，作為幕藩體制的中樞。',
          en: 'The keep was completed under the third shōgun Tokugawa Iemitsu, making Edo Castle the largest in Japan and the nucleus of the shogunate system.',
        },
      },
      {
        year: 1657,
        event: {
          ja: '明暦の大火により天守を含む城郭の大部分が焼失。以後、天守は再建されず、幕府は復興より町の再建を優先した。',
          zhTw: '明曆大火燒毀包含天守在內的大部分城郭。此後天守未再重建，幕府優先進行城鎮復興而非天守重建。',
          en: 'The Great Fire of Meireki destroyed most of the castle including its keep; the shogunate prioritized rebuilding the city over reconstructing the tower, which was never rebuilt.',
        },
      },
      {
        year: 1868,
        event: {
          ja: '勝海舟と西郷隆盛の交渉により江戸城は無血開城され、明治天皇の皇居となり、幕府の終焉と明治新政府の始まりを象徴した。',
          zhTw: '經勝海舟與西鄉隆盛談判，江戶城無血開城，成為明治天皇皇居，象徵幕府終結與明治新政府的開始。',
          en: 'Through negotiations between Katsu Kaishū and Saigō Takamori, Edo Castle was surrendered without bloodshed and became the Imperial Palace, symbolizing the end of the shogunate and the dawn of the Meiji era.',
        },
      },
    ],
    figures: [
      {
        ja: '太田道灌', zhTw: '太田道灌', en: 'Ōta Dōkan',
        desc: {
          ja: '室町時代後期の名将で、江戸城を築城した人物。文武両道に優れ、歌人としても知られたが、主君に暗殺された。',
          zhTw: '室町時代後期名將，江戶城的築城者。文武雙全，亦以歌人身分聞名，最終被主君暗殺。',
          en: 'A renowned late-Muromachi warrior who built Edo Castle; celebrated for both martial and literary talent, he was ultimately assassinated by his own lord.',
        },
      },
      {
        ja: '徳川家康', zhTw: '德川家康', en: 'Tokugawa Ieyasu',
        desc: {
          ja: '江戸幕府の初代将軍で、江戸城を日本の政治的中心に据え、約260年続く太平の世の礎を築いた。',
          zhTw: '江戶幕府初代將軍，將江戶城定為日本政治中心，奠定了延續約兩百六十年太平盛世的基礎。',
          en: 'Founder and first shōgun of the Tokugawa shogunate who made Edo Castle the political center of Japan, laying the groundwork for roughly 260 years of peace.',
        },
      },
      {
        ja: '徳川家光', zhTw: '德川家光', en: 'Tokugawa Iemitsu',
        desc: {
          ja: '三代将軍として参勤交代を制度化し、江戸城の天守を完成させるなど幕藩体制を確立した。',
          zhTw: '第三代將軍，制度化參勤交代並完成江戶城天守，確立幕藩體制。',
          en: 'Third shōgun who institutionalized the sankin-kōtai system and completed the Edo Castle keep, consolidating the shogunate\'s feudal order.',
        },
      },
      {
        ja: '天海', zhTw: '天海', en: 'Tenkai',
        desc: {
          ja: '家康・秀忠・家光の三代に仕えた天台宗の僧侶で、江戸の都市計画に風水の思想を取り入れ、城と町の守護を担った。',
          zhTw: '侍奉家康、秀忠、家光三代的天台宗僧侶，將風水思想融入江戶都市規劃，負責城池與城鎮的守護。',
          en: 'A Tendai Buddhist monk who served three shōguns and incorporated feng shui principles into Edo\'s urban planning, overseeing the spiritual protection of the castle and city.',
        },
      },
    ],
    trivia: [
      { ja: '天守は1657年の明暦の大火で焼失し、二度と再建されなかった。幕府は「城より町の復興が先」と判断した。', zhTw: '天守在1657年明曆大火中焚毀，此後再未重建。幕府判斷「重建城下町優先於城堡」。', en: 'The keep burned down in the Great Fire of Meireki in 1657 and was never rebuilt — the shogunate decided rebuilding the city took priority over the castle.' },
      { ja: '皇居東御苑は一般無料開放されており、天守台や二の丸庭園を散策できる都心のオアシス。', zhTw: '皇居東御苑免費向公眾開放，可散步天守台與二之丸庭園，是都心的綠洲。', en: 'The Imperial Palace East Gardens are free and open to the public — an urban oasis where you can stroll around the keep base and Ninomaru Garden.' },
      { ja: '外堀一周は約5kmのランニングコースとして人気があり、東京の象徴的なジョギングスポット。', zhTw: '外堀一圈約5公里的跑步路線廣受歡迎，是東京標誌性的慢跑景點。', en: 'The outer moat circuit is a popular 5km running route — one of Tokyo\'s most iconic jogging spots.' },
    ],
    highlights: [
      { ja: '天守台 — かつて日本最大の天守がそびえた巨大な石垣の台座。', zhTw: '天守台 — 曾矗立日本最大天守的巨大石垣基座。', en: 'Tenshudai (keep base) — the massive stone platform where Japan\'s largest castle keep once stood.' },
      { ja: '二の丸庭園 — 日本庭園の美しさを堪能できる静かな空間。', zhTw: '二之丸庭園 — 可品味日本庭園之美的寧靜空間。', en: 'Ninomaru Garden — a serene space to enjoy the beauty of traditional Japanese landscaping.' },
      { ja: '大手門 — 城の正面玄関にあたる重厚な城門。', zhTw: '大手門 — 相當於城的正面入口的莊重城門。', en: 'Ōte-mon gate — the imposing main entrance to the castle.' },
    ],
    architecture: [
      { ja: '日本史上最大の城郭で、本丸・二の丸・三の丸を含む元の敷地は約233ヘクタールに及んだ。', zhTw: '日本史上最大的城郭，包含本丸、二之丸、三之丸的原始面積達約233公頃。', en: 'The largest castle complex ever built in Japan — the original compound including all baileys spanned approximately 233 hectares.' },
      { ja: '内堀・外堀・総構えの三重の同心円状防御（惣構え）で守られた画期的な縄張り。', zhTw: '以內堀、外堀、總構的三重同心圓防禦（惣構）守護的劃時代繩張。', en: 'Concentric ring defense (sōgamae) with inner, outer, and outermost moats — a groundbreaking defensive layout.' },
      { ja: '各時代の石垣技術が混在し、「切込接」「打込接」「野面積み」の違いを石垣で観察できる建築教科書的な存在。', zhTw: '各時代石垣技術混在，可在石垣上觀察「切込接」「打込接」「野面積」的差異，堪稱建築教科書。', en: 'Stone walls display different masonry techniques from various eras — "kirikomi-hagi," "uchikomi-hagi," and "nozura-zumi" — making it a textbook of castle architecture.' },
    ],
  },
  {
    id: 'odawara',
    number: 23,
    regionId: 'kanto',
    name: { ja: '小田原城', zhTw: '小田原城', en: 'Odawara Castle' },
    city: { ja: '小田原市', zhTw: '小田原市', en: 'Odawara' },
    prefecture: { ja: '神奈川県', zhTw: '神奈川縣', en: 'Kanagawa' },
    type: 'hirayama',
    designation: '国指定史跡',
    position: { x: 72, y: 57 },
    illustration: { style: 'classic', tiers: 3, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2a2a2a', seal: '#c53d43', crest: '#6b8e7b' },
    history: [
      {
        year: 1495,
        event: {
          ja: '北条早雲が大森氏から小田原城を奪取し、後北条氏五代約100年にわたる関東支配の拠点とした。',
          zhTw: '北條早雲從大森氏手中奪取小田原城，確立了後北條氏五代約百年的關東統治據點。',
          en: 'Hōjō Sōun seized Odawara Castle from the Ōmori clan, establishing it as the base for five generations of Hōjō rule over the Kantō region spanning roughly a century.',
        },
      },
      {
        year: 1561,
        event: {
          ja: '上杉謙信が大軍で小田原城を包囲するも、北条氏康の堅固な防衛により撃退。小田原城の難攻不落の名声が広まった。',
          zhTw: '上杉謙信率大軍包圍小田原城，但被北條氏康堅固的防禦擊退。小田原城固若金湯的名聲因此遠播。',
          en: 'Uesugi Kenshin besieged Odawara Castle with a large army but was repelled by Hōjō Ujiyasu\'s formidable defenses, spreading the castle\'s reputation as impregnable.',
        },
      },
      {
        year: 1590,
        event: {
          ja: '豊臣秀吉が約20万の大軍で小田原城を包囲。3ヶ月の籠城の末に北条氏が降伏し、後北条氏は滅亡。秀吉の天下統一が完成した。',
          zhTw: '豐臣秀吉率約二十萬大軍包圍小田原城。歷經三個月籠城後北條氏投降，後北條氏滅亡，秀吉完成天下統一。',
          en: 'Toyotomi Hideyoshi besieged Odawara with an army of roughly 200,000; after a three-month siege the Hōjō surrendered and their clan fell, completing Hideyoshi\'s unification of Japan.',
        },
      },
      {
        year: 1960,
        event: {
          ja: '市民の寄付により天守閣が鉄筋コンクリートで復興され、小田原のシンボルとして再び市民に親しまれるようになった。',
          zhTw: '在市民捐款下以鋼筋混凝土復興天守閣，再次成為小田原的象徵，深受市民喜愛。',
          en: 'The keep was reconstructed in reinforced concrete through public donations, once again becoming a beloved symbol of the city of Odawara.',
        },
      },
    ],
    figures: [
      {
        ja: '北条早雲', zhTw: '北條早雲', en: 'Hōjō Sōun',
        desc: {
          ja: '戦国時代の先駆けとされる武将で、小田原城を奪取して後北条氏の関東支配の基盤を築いた。',
          zhTw: '被視為戰國時代先驅的武將，奪取小田原城，奠定後北條氏關東統治的根基。',
          en: 'A warrior regarded as a pioneer of the Sengoku era who seized Odawara Castle and laid the foundation for Hōjō dominance of the Kantō.',
        },
      },
      {
        ja: '北条氏康', zhTw: '北條氏康', en: 'Hōjō Ujiyasu',
        desc: {
          ja: '後北条氏三代目当主で、武田信玄・上杉謙信の侵攻を退けた名将。善政でも知られ、北条氏の最盛期を築いた。',
          zhTw: '後北條氏第三代當主，擊退武田信玄與上杉謙信進攻的名將。以善政聞名，締造了北條氏的全盛時期。',
          en: 'Third head of the later Hōjō clan and a brilliant commander who repelled invasions by Takeda Shingen and Uesugi Kenshin; also known for wise governance during the clan\'s peak.',
        },
      },
      {
        ja: '豊臣秀吉', zhTw: '豐臣秀吉', en: 'Toyotomi Hideyoshi',
        desc: {
          ja: '農民から天下人に上り詰めた戦国の英雄で、小田原征伐により後北条氏を滅ぼし日本全国の統一を達成した。',
          zhTw: '從農民崛起為天下人的戰國英雄，藉由小田原征伐消滅後北條氏，完成日本全國統一。',
          en: 'A Sengoku hero who rose from peasant origins to supreme ruler, destroying the Hōjō clan through the siege of Odawara and achieving the unification of Japan.',
        },
      },
    ],
    trivia: [
      { ja: '豊臣秀吉は心理戦として隣の山に一夜で石垣山城を築いた（実際は約80日）。周囲の木を一斉に伐採し「一夜城」に見せかけた。', zhTw: '豐臣秀吉以心理戰在鄰山一夜建成石垣山城（實際約80天）。同時砍伐周圍樹木，偽裝成「一夜城」。', en: 'As psychological warfare, Hideyoshi built Ishigakiyama Castle on a neighboring hill seemingly overnight (actually ~80 days) by clearing trees all at once to create the illusion.' },
      { ja: '北条氏の総構え（外郭防御線）は全長約9kmに及び、日本最大規模を誇った。', zhTw: '北條氏的總構（外郭防禦線）全長約9公里，堪稱日本最大規模。', en: 'The Hōjō clan\'s sōgamae (outer wall fortification) stretched approximately 9km in total — the largest in Japan.' },
      { ja: '現在の天守は1960年に鉄筋コンクリートで再建されたもので、内部は博物館と展望台になっている。', zhTw: '現在的天守是1960年以鋼筋混凝土重建的，內部為博物館與展望台。', en: 'The current keep is a 1960 reinforced concrete reconstruction housing a museum and observation deck.' },
    ],
    highlights: [
      { ja: '再建天守と相模湾のパノラマビュー — 天守最上階からの眺望は絶景。', zhTw: '重建天守與相模灣全景 — 天守最上層的眺望堪稱絕景。', en: 'Reconstructed keep with panoramic views of Sagami Bay — the view from the top floor is spectacular.' },
      { ja: '復元された銅門と常盤木門 — 往時の城郭の雰囲気を忠実に再現。', zhTw: '復原的銅門與常盤木門 — 忠實重現往昔城郭的氛圍。', en: 'Faithfully reconstructed Copper Gate (Akagane-mon) and Tokiwagi Gate — evoking the castle\'s historic atmosphere.' },
      { ja: '梅と桜の季節 — 城址公園は花の名所としても人気が高い。', zhTw: '梅花與櫻花季 — 城址公園作為賞花名所也廣受歡迎。', en: 'Plum and cherry blossom seasons — the castle grounds are popular as a flower-viewing destination.' },
    ],
    architecture: [
      { ja: '総構え（惣構え）— 城だけでなく城下町全体を囲む大規模な土塁と堀による防御線は戦国時代最大級。', zhTw: '總構（惣構）— 不僅城堡，整個城下町都被大規模土壘與護城河包圍的防禦線，為戰國時代最大級。', en: 'Sōgamae — massive earthwork walls and moats encircling not just the castle but the entire castle town, the largest such fortification of the Sengoku period.' },
      { ja: '枡形門 — 直角に折れ曲がる複合門で、敵の侵入速度を落とし四方から攻撃できる構造。', zhTw: '枡形門 — 直角彎折的複合門，能減緩敵人入侵速度並從四面攻擊。', en: 'Masugata-style compound gates with right-angle turns designed to slow attackers and expose them to fire from all sides.' },
      { ja: '自然石と切石を組み合わせた石垣技法が混在し、各時代の築城技術の変遷を見ることができる。', zhTw: '混合使用自然石與切石的石垣技法，可觀察各時代築城技術的變遷。', en: 'Stone walls combining natural rock and cut-stone techniques, showcasing the evolution of castle-building methods across different periods.' },
    ],
  },

  // ── 中部 ──
  {
    id: 'matsumoto',
    number: 29,
    regionId: 'chubu',
    name: { ja: '松本城', zhTw: '松本城', en: 'Matsumoto Castle' },
    city: { ja: '松本市', zhTw: '松本市', en: 'Matsumoto' },
    prefecture: { ja: '長野県', zhTw: '長野縣', en: 'Nagano' },
    type: 'hirajiro',
    designation: '国宝',
    position: { x: 64, y: 50 },
    illustration: { style: 'black', tiers: 5, color: '#1a1a1a', roofColor: '#0a0a0a' },
    goshuin: { bg: '#f0e6d3', ink: '#1a1a1a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      {
        year: 1504,
        event: {
          ja: '信濃守護・小笠原氏が深志城として築城。信濃の中心部に位置する平城で、後に松本城と改称される。',
          zhTw: '信濃守護小笠原氏築建深志城。位於信濃中心的平城，後來改稱松本城。',
          en: 'The Ogasawara clan, governors of Shinano, built Fukashi Castle on the plains of central Shinano; it would later be renamed Matsumoto Castle.',
        },
      },
      {
        year: 1594,
        event: {
          ja: '石川数正・康長父子が現在の五重六階の天守を築造。黒漆塗りの下見板張りが特徴で「烏城」とも呼ばれる威容を誇った。',
          zhTw: '石川數正、康長父子建造了現存的五重六階天守。以黑漆塗下見板張為特色，有「烏城」之稱。',
          en: 'Ishikawa Kazumasa and his son Yasunaga built the current five-story, six-floor keep; its distinctive black-lacquered siding earned it the nickname "Crow Castle."',
        },
      },
      {
        year: 1635,
        event: {
          ja: '戸田氏が松本藩主として入封し、以後廃藩まで約230年にわたり戸田氏が城と藩を治めた。',
          zhTw: '戶田氏以松本藩主身分入封，此後約兩百三十年直至廢藩，戶田氏持續治理城與藩。',
          en: 'The Toda clan was installed as lords of Matsumoto domain, governing the castle and domain for roughly 230 years until the abolition of the feudal system.',
        },
      },
      {
        year: 1903,
        event: {
          ja: '傾きかけた天守を地元の有志が「松本城天守保存会」を結成して修繕し、明治の廃城令による取り壊しから救った。',
          zhTw: '地方有志人士組成「松本城天守保存會」，修繕傾斜的天守，使其免於明治廢城令的拆除命運。',
          en: 'Local citizens formed the Matsumoto Castle Preservation Society and repaired the leaning keep, saving it from demolition under the Meiji-era castle abolition orders.',
        },
      },
      {
        year: 1952,
        event: {
          ja: '天守が国宝に指定され、現存する五重天守としては日本最古の城郭建築として高く評価されている。',
          zhTw: '天守被指定為國寶，作為現存最古老的五重天守，在日本城郭建築中獲得極高評價。',
          en: 'The keep was designated a National Treasure, recognized as the oldest surviving five-story castle tower in Japan.',
        },
      },
    ],
    figures: [
      {
        ja: '石川数正', zhTw: '石川數正', en: 'Ishikawa Kazumasa',
        desc: {
          ja: '元は徳川家康の重臣だったが豊臣方に出奔し、松本に入封後に現在の天守の築造を開始した。',
          zhTw: '原為德川家康重臣，後出奔至豐臣方，入封松本後開始建造現存天守。',
          en: 'Originally a key retainer of Tokugawa Ieyasu who defected to the Toyotomi side and began constructing the current Matsumoto Castle keep after being granted the domain.',
        },
      },
      {
        ja: '石川康長', zhTw: '石川康長', en: 'Ishikawa Yasunaga',
        desc: {
          ja: '石川数正の長男で、父の事業を引き継いで松本城天守を完成させたが、後に改易となり領地を没収された。',
          zhTw: '石川數正長子，繼承父業完成松本城天守，但後來遭到改易，領地被沒收。',
          en: 'Eldest son of Ishikawa Kazumasa who completed the Matsumoto Castle keep but was later stripped of his domain and dispossessed.',
        },
      },
      {
        ja: '戸田光則', zhTw: '戶田光則', en: 'Toda Mitsunori',
        desc: {
          ja: '幕末の松本藩主で、藩校崇教館を設立するなど教育に力を入れ、明治維新期の藩政改革を主導した。',
          zhTw: '幕末松本藩主，設立藩校崇教館等推動教育，主導明治維新時期的藩政改革。',
          en: 'Lord of Matsumoto domain in the Bakumatsu era who promoted education by founding the domain school Sūkyōkan and led administrative reforms during the Meiji Restoration.',
        },
      },
    ],
    trivia: [
      { ja: '月見櫓は戦のない平和な時代に増築されたもので、開放的な朱塗りの回縁から月を愛でるという風雅な空間。', zhTw: '月見櫓是在無戰事的和平時代增建的，可從開放式朱漆迴廊賞月的風雅空間。', en: 'The Moon-viewing turret was added during peacetime — an elegant space with open red-lacquered balconies designed for enjoying moonlit nights.' },
      { ja: '黒い外壁から「烏城」（からすじょう）の別名を持ち、白い姫路城「白鷺城」と対比されることが多い。', zhTw: '因黑色外牆而有「烏城」別名，常與白色姬路城「白鷺城」相對比。', en: 'Its black exterior earned it the nickname "Crow Castle" (Karasu-jō), often contrasted with Himeji\'s white "White Heron Castle."' },
      { ja: '天守は若干傾いており「日本のピサの斜塔」と呼ばれることもある。', zhTw: '天守略微傾斜，有時被稱為「日本的比薩斜塔」。', en: 'The keep leans slightly, sometimes earning it the nickname "Japan\'s Leaning Tower of Pisa."' },
    ],
    highlights: [
      { ja: '五重六階の天守 — 日本最古の六階建て木造天守として国宝に指定。', zhTw: '五重六階天守 — 作為日本最古老的六層木造天守被指定為國寶。', en: 'Five-story, six-floor keep — designated a National Treasure as Japan\'s oldest surviving six-floor wooden castle keep.' },
      { ja: '月見櫓と朱塗りの欄干 — 戦国の城に風雅さを添える唯一無二の空間。', zhTw: '月見櫓與朱漆欄杆 — 為戰國城堡增添風雅的獨一無二空間。', en: 'Moon-viewing turret with red-lacquered railings — a uniquely elegant addition to a Sengoku-era castle.' },
      { ja: '北アルプスを背景にした天守の眺め — 四季を通じて壮大な風景を楽しめる。', zhTw: '以北阿爾卑斯山為背景的天守景色 — 四季皆可享受壯闘風景。', en: 'View of the keep against the Japanese Alps — a magnificent landscape to enjoy throughout all four seasons.' },
    ],
    architecture: [
      { ja: '連結複合式天守 — 大天守・乾小天守・渡櫓・辰巳附櫓・月見櫓が一体化した複雑な構造。', zhTw: '連結複合式天守 — 大天守、乾小天守、渡櫓、辰巳附櫓、月見櫓一體化的複雜結構。', en: 'Connected compound keep complex — main keep, secondary keep, connecting turret, attached turret, and moon-viewing turret integrated into a complex structure.' },
      { ja: '下見板張りの黒漆塗り外壁 — 下層部分を覆う黒い板は防水性と威厳を兼ね備えた意匠。', zhTw: '下見板張的黑漆塗外牆 — 覆蓋下層部分的黑板兼具防水性與威嚴的設計。', en: 'Black-lacquered weatherboard exterior (shitami-itabari) — the dark cladding on lower stories combines waterproofing with an imposing appearance.' },
      { ja: '狭間（銃眼）と石落としが各階に配され、優美な外観と実戦的な防御機能を両立させている。', zhTw: '各層配置狹間（銃眼）與石落，兼顧優美外觀與實戰防禦功能。', en: 'Gun ports (sama) and stone-dropping windows on every floor combine elegant aesthetics with practical defensive capabilities.' },
    ],
  },
  {
    id: 'kanazawa',
    number: 35,
    regionId: 'chubu',
    name: { ja: '金沢城', zhTw: '金澤城', en: 'Kanazawa Castle' },
    city: { ja: '金沢市', zhTw: '金澤市', en: 'Kanazawa' },
    prefecture: { ja: '石川県', zhTw: '石川縣', en: 'Ishikawa' },
    type: 'hirayama',
    designation: '国指定史跡',
    position: { x: 58, y: 48 },
    illustration: { style: 'white', tiers: 3, color: '#f5f0e8', roofColor: '#8b8b7a' },
    goshuin: { bg: '#f5f0e8', ink: '#2d4a3e', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      {
        year: 1583,
        event: {
          ja: '賤ヶ岳の戦いの功績により前田利家が金沢城に入城し、加賀百万石と称される前田家の繁栄の礎を築いた。',
          zhTw: '前田利家因賤岳之戰的戰功入主金澤城，奠定了號稱加賀百萬石的前田家繁榮基礎。',
          en: 'Maeda Toshiie entered Kanazawa Castle after his exploits at the Battle of Shizugatake, laying the foundation for the Maeda clan\'s prosperity as lords of the million-koku Kaga domain.',
        },
      },
      {
        year: 1602,
        event: {
          ja: '落雷により天守が焼失。前田家は天守を再建せず、代わりに櫓や門の整備に力を注ぎ、独特の白い城郭景観を作り上げた。',
          zhTw: '雷擊導致天守焚毀。前田家未重建天守，轉而致力整備櫓與門，打造出獨特的白色城郭景觀。',
          en: 'Lightning destroyed the keep; the Maeda clan chose not to rebuild it, instead focusing on turrets and gates to create the castle\'s distinctive white-walled appearance.',
        },
      },
      {
        year: 1676,
        event: {
          ja: '五代藩主・前田綱紀が兼六園の前身となる蓮池庭を造営。学問・文化を奨励し、金沢を「天下の書府」と称えられる文化都市に育てた。',
          zhTw: '五代藩主前田綱紀建造兼六園前身蓮池庭。獎勵學問與文化，將金澤培育為被譽為「天下書府」的文化之都。',
          en: 'The fifth lord Maeda Tsunanori created the Renchi garden that would become Kenrokuen; he promoted scholarship and culture, earning Kanazawa the title "Library of the Realm."',
        },
      },
      {
        year: 2001,
        event: {
          ja: '菱櫓・五十間長屋・橋爪門続櫓が伝統工法で忠実に復元され、金沢城公園として整備が進められている。',
          zhTw: '菱櫓、五十間長屋、橋爪門續櫓以傳統工法忠實復原，金澤城公園的整備持續推進中。',
          en: 'The Hishi turret, Gojikken storehouse, and Hashizume gate turret were faithfully reconstructed using traditional techniques as part of the ongoing restoration of Kanazawa Castle Park.',
        },
      },
    ],
    figures: [
      {
        ja: '前田利家', zhTw: '前田利家', en: 'Maeda Toshiie',
        desc: {
          ja: '織田信長に仕えた「槍の又左」の異名を持つ武将で、加賀藩の祖として金沢城に入り百万石の大藩を築いた。',
          zhTw: '侍奉織田信長、有「槍之又左」之稱的武將，作為加賀藩始祖入主金澤城，建立百萬石大藩。',
          en: 'A warrior known as "Yari no Mataza" (Mataza of the Spear) who served Oda Nobunaga, founded the Kaga domain, and built it into a million-koku powerhouse.',
        },
      },
      {
        ja: '前田綱紀', zhTw: '前田綱紀', en: 'Maeda Tsunanori',
        desc: {
          ja: '加賀藩五代藩主で、兼六園の基礎を築き、学問・芸術を奨励して金沢の文化的黄金時代をもたらした名君。',
          zhTw: '加賀藩第五代藩主，奠定兼六園基礎，獎勵學問與藝術，帶來金澤文化黃金時代的名君。',
          en: 'Fifth lord of Kaga domain who laid the foundations of Kenrokuen garden and ushered in a golden age of arts and scholarship in Kanazawa.',
        },
      },
      {
        ja: '前田利常', zhTw: '前田利常', en: 'Maeda Toshitsune',
        desc: {
          ja: '加賀藩三代藩主で、幕府の警戒を避けるため「鼻毛大名」を装いつつ、工芸振興と藩政改革を巧みに行った。',
          zhTw: '加賀藩第三代藩主，為避免幕府猜忌而偽裝成「鼻毛大名」，暗中巧妙推動工藝振興與藩政改革。',
          en: 'Third lord of Kaga domain who feigned eccentricity as the "Nosehair Lord" to avoid shogunate suspicion while skillfully promoting crafts and reforming domain governance.',
        },
      },
    ],
    trivia: [
      { ja: '元は一向宗の寺院「金沢御堂」があった場所で、前田利家が城に改築した。寺院時代の面影が石垣の一部に残る。', zhTw: '原為一向宗寺院「金澤御堂」所在地，前田利家將其改建為城。寺院時代的痕跡殘留在部分石垣中。', en: 'The site was originally a Buddhist temple (Kanazawa Midō) before Maeda Toshiie converted it into a castle — traces of the temple era remain in some stone walls.' },
      { ja: '屋根には鉛瓦が使用されており、日本の城で唯一の例。有事の際には溶かして鉄砲の弾にする説もある。', zhTw: '屋頂使用鉛瓦，是日本城郭中唯一的案例。據說緊急時可熔化製成鐵砲子彈。', en: 'Lead roof tiles are used — unique among Japanese castles. Some theories suggest they could be melted down for ammunition in emergencies.' },
      { ja: '城内の復元建物は釘を一切使わない伝統工法で建てられている。', zhTw: '城內的復原建築完全使用不用釘子的傳統工法建造。', en: 'Reconstructed buildings in the castle were built using traditional techniques with no nails.' },
    ],
    highlights: [
      { ja: '石川門 — 重要文化財に指定された城の象徴的な門。白壁と海鼠壁の美しいコントラスト。', zhTw: '石川門 — 被指定為重要文化財的城的象徵性城門。白牆與海鼠壁的美麗對比。', en: 'Ishikawa Gate — an Important Cultural Property and the castle\'s iconic entrance, featuring beautiful contrasts of white plaster and namako (sea cucumber) walls.' },
      { ja: '隣接する兼六園 — 日本三名園の一つで、城と一体となった景観を楽しめる。', zhTw: '鄰接的兼六園 — 日本三名園之一，可欣賞與城一體化的景觀。', en: 'Adjacent Kenrokuen — one of Japan\'s three great gardens, offering scenery integrated with the castle.' },
      { ja: '復元された菱櫓・五十間長屋・橋爪門続櫓 — 伝統工法の粋を集めた壮大な建築群。', zhTw: '復原的菱櫓、五十間長屋、橋爪門續櫓 — 匯集傳統工法精華的壯觀建築群。', en: 'Reconstructed Hishi turret, Gojukkenbori storehouse, and Hashizume-mon turret — magnificent structures showcasing the finest traditional construction methods.' },
    ],
    architecture: [
      { ja: '鉛瓦（なまりがわら）— 日本の城郭唯一の鉛製屋根瓦。防水性に優れ、雪国の気候に適応した独特の建材。', zhTw: '鉛瓦 — 日本城郭唯一的鉛製屋頂瓦。防水性優異，適應雪國氣候的獨特建材。', en: 'Lead roof tiles (namari-gawara) — unique among Japanese castles, excellent for waterproofing and adapted to the snowy climate.' },
      { ja: '切込接・打込接・野面積みなど多様な石垣技法が混在し、「石垣の博物館」と呼ばれるほど技術の変遷を見られる。', zhTw: '切込接、打込接、野面積等多樣石垣技法混在，被稱為「石垣博物館」，可觀察技術變遷。', en: 'Various stone wall techniques — cut-and-fitted, hammered, and natural — coexist throughout, earning the castle the nickname "museum of stone walls."' },
      { ja: '菱櫓は菱形の平面で建てられ、死角をなくして周囲を見渡せるよう工夫された独特の設計。', zhTw: '菱櫓以菱形平面建造，經特殊設計消除死角以環視周圍。', en: 'The Hishi turret is built on a diamond-shaped floor plan — a unique design that eliminates blind spots and maximizes visibility.' },
    ],
  },

  // ── 近畿 ──
  {
    id: 'himeji',
    number: 59,
    regionId: 'kinki',
    name: { ja: '姫路城', zhTw: '姬路城', en: 'Himeji Castle' },
    city: { ja: '姫路市', zhTw: '姬路市', en: 'Himeji' },
    prefecture: { ja: '兵庫県', zhTw: '兵庫縣', en: 'Hyogo' },
    type: 'hirayama',
    designation: '国宝・世界遺産',
    position: { x: 52, y: 62 },
    illustration: { style: 'white', tiers: 5, color: '#f5f0e8', roofColor: '#4a4a4a' },
    goshuin: { bg: '#f5f0e8', ink: '#2a2a2a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      {
        year: 1333,
        event: {
          ja: '赤松貞範が姫山に最初の砦を築き、播磨国における赤松氏の軍事拠点とした。',
          zhTw: '赤松貞範在姬山築建最初的堡壘，作為播磨國赤松氏的軍事據點。',
          en: 'Akamatsu Sadanori built the first fortification on Himeyama hill, establishing it as a military base for the Akamatsu clan in Harima Province.',
        },
      },
      {
        year: 1580,
        event: {
          ja: '羽柴秀吉（後の豊臣秀吉）が姫路城に入城し、三重天守を築いて中国攻めの前線基地とした。黒田官兵衛が城を秀吉に献上したことで知られる。',
          zhTw: '羽柴秀吉（後來的豐臣秀吉）入主姬路城，築三重天守作為征討中國地方的前線基地。黑田官兵衛將城獻給秀吉一事廣為人知。',
          en: 'Hashiba Hideyoshi (later Toyotomi Hideyoshi) entered Himeji Castle and built a three-story keep as a forward base for his western campaigns; it was famously offered to him by Kuroda Kanbei.',
        },
      },
      {
        year: 1609,
        event: {
          ja: '池田輝政が大改修を行い、白漆喰の五重七階の大天守と三つの小天守を連立させた壮大な城郭を完成。「白鷺城」の名の由来となった。',
          zhTw: '池田輝政進行大改修，完成以白灰泥塗裝的五重七階大天守與三座小天守連立的壯觀城郭，成為「白鷺城」名稱的由來。',
          en: 'Ikeda Terumasa carried out a massive renovation, completing the grand white-plastered five-story, seven-floor main keep connected to three smaller keeps — earning it the name "White Heron Castle."',
        },
      },
      {
        year: 1618,
        event: {
          ja: '本多忠政の時代に千姫（徳川秀忠の娘）が嫁ぎ、化粧櫓や西の丸が整備され、城郭の最終的な姿が完成した。',
          zhTw: '本多忠政時代千姬（德川秀忠之女）嫁入，化妝櫓與西之丸得以整備，城郭的最終形態完成。',
          en: 'During Honda Tadamasa\'s tenure, Princess Sen (daughter of Tokugawa Hidetada) married into the family; the Keshō turret and West Bailey were completed, giving the castle its final form.',
        },
      },
      {
        year: 1993,
        event: {
          ja: '日本初のユネスコ世界文化遺産に登録され、現存する最大・最美の城郭として世界的に認知されるようになった。',
          zhTw: '被登錄為日本首批聯合國教科文組織世界文化遺產，作為現存最大且最美的城郭獲得世界性認可。',
          en: 'Himeji Castle was inscribed as one of Japan\'s first UNESCO World Cultural Heritage Sites, gaining worldwide recognition as the largest and most beautiful surviving castle.',
        },
      },
    ],
    figures: [
      {
        ja: '池田輝政', zhTw: '池田輝政', en: 'Ikeda Terumasa',
        desc: {
          ja: '関ヶ原の功績で姫路に入封し、9年かけて大改修を行い現在の姫路城の壮大な姿を作り上げた。',
          zhTw: '因關原之戰的戰功入封姬路，耗時九年進行大改修，打造出現今姬路城的壯觀面貌。',
          en: 'Rewarded with Himeji for his service at Sekigahara, he spent nine years on a massive renovation that created the magnificent castle seen today.',
        },
      },
      {
        ja: '赤松貞範', zhTw: '赤松貞範', en: 'Akamatsu Sadanori',
        desc: {
          ja: '南北朝時代の武将で、姫山に最初の城砦を築いた姫路城の創始者とされる。',
          zhTw: '南北朝時代武將，被視為在姬山築建首座城砦的姬路城創始者。',
          en: 'A warrior of the Nanbokuchō period credited as the founder of Himeji Castle, having built the first fortification on Himeyama hill.',
        },
      },
      {
        ja: '黒田官兵衛', zhTw: '黑田官兵衛', en: 'Kuroda Kanbei',
        desc: {
          ja: '豊臣秀吉の軍師として名高い戦国武将で、自らの居城であった姫路城を秀吉に献上し、天下統一の足がかりを提供した。',
          zhTw: '以豐臣秀吉軍師身分聞名的戰國武將，將自己的居城姬路城獻給秀吉，提供了天下統一的立足點。',
          en: 'A celebrated Sengoku strategist who served as Toyotomi Hideyoshi\'s advisor and offered his own Himeji Castle to Hideyoshi as a stepping stone toward national unification.',
        },
      },
      {
        ja: '千姫', zhTw: '千姬', en: 'Senhime',
        desc: {
          ja: '徳川秀忠の娘で、大坂の陣の後に本多忠刻に嫁ぎ姫路城西の丸で暮らした。化粧櫓は彼女の化粧料で建てられたと伝わる。',
          zhTw: '德川秀忠之女，大坂之陣後嫁給本多忠刻，居住在姬路城西之丸。相傳化妝櫓以她的嫁妝建造。',
          en: 'Daughter of Tokugawa Hidetada who married Honda Tadatoki after the Siege of Osaka and lived in Himeji Castle\'s West Bailey; the Keshō turret was reportedly built with her dowry.',
        },
      },
    ],
    trivia: [
      { ja: '第二次世界大戦中、焼夷弾が天守最上階に命中したが奇跡的に不発で、城は戦災を免れた。', zhTw: '二戰期間燒夷彈命中天守最上層，但奇蹟般未爆炸，城因此倖免於戰災。', en: 'During WWII, an incendiary bomb hit the top floor of the keep but miraculously failed to detonate, sparing the castle from war damage.' },
      { ja: '敵を迷わせるため、本丸への道は複雑な迷路のように設計されている。初めての訪問者は今でも迷うほど。', zhTw: '為迷惑敵人，通往本丸的路被設計成複雜的迷宮。即使今天初次造訪者仍會迷路。', en: 'The approach paths to the main keep were designed as a complex maze to confuse attackers — first-time visitors still get lost today.' },
      { ja: '1871年に23円50銭で売りに出されたが、解体費が高すぎて誰も買わず、結果的に保存された。', zhTw: '1871年以23圓50錢出售，但因拆除費太高無人購買，反而因此被保存下來。', en: 'In 1871 it was put up for sale for ¥23.50, but nobody bought it because demolition costs were too high — accidentally saving it for posterity.' },
    ],
    highlights: [
      { ja: '大天守 — 日本最大の現存天守。内部の急な階段を上り、最上階からの播磨平野の大パノラマは必見。', zhTw: '大天守 — 日本最大的現存天守。攀登內部陡峭階梯，最上層的播磨平原大全景不容錯過。', en: 'The main keep — Japan\'s largest surviving castle keep. Climb the steep interior stairs for an unmissable panoramic view of the Harima Plain from the top floor.' },
      { ja: '西の丸と百間廊下 — 千姫の物語と結びついた長大な渡り廊下。', zhTw: '西之丸與百間廊下 — 與千姬故事相連的長廊。', en: 'West Bailey and Long Corridor (Hyakkenbori) — the extensive connecting corridor linked to Princess Sen\'s story.' },
      { ja: '白鷺の美しい白漆喰の外壁 — 朝日・夕日に照らされた姿は息をのむ美しさ。', zhTw: '白鷺般美麗的白灰泥外牆 — 在朝陽與夕陽照耀下的姿態令人屏息。', en: 'The beautiful white plaster exterior evoking a white heron — breathtaking when illuminated by the morning or evening sun.' },
    ],
    architecture: [
      { ja: '連立式天守 — 大天守と三つの小天守を渡櫓で結んだ壮大な複合体で、日本の城郭建築の最高傑作。', zhTw: '連立式天守 — 大天守與三座小天守以渡櫓連結的壯大複合體，日本城郭建築的最高傑作。', en: 'Connected keep complex (renritsu-shiki) — the main keep linked to three smaller keeps via connecting turrets, the supreme masterpiece of Japanese castle architecture.' },
      { ja: '白漆喰総塗籠 — 全面を白漆喰で塗り固めた壁は美観だけでなく優れた防火性能を持つ。', zhTw: '白灰泥總塗籠 — 全面以白灰泥塗固的牆壁不僅美觀，還具有優異的防火性能。', en: 'White plaster coating (shiro-shikkui sō-nurigome) — walls entirely covered in white plaster provide both beauty and excellent fire resistance.' },
      { ja: '84の門と複雑な折れ曲がりの登城路、石落とし・狭間を随所に配した精密な防御ネットワーク。', zhTw: '84道門與複雜蜿蜒的登城路，各處配置石落與狹間的精密防禦網絡。', en: 'A precise defensive network with 84 gates, winding approach paths, and stone-dropping ports and gun loops positioned throughout.' },
    ],
  },
  {
    id: 'osaka',
    number: 54,
    regionId: 'kinki',
    name: { ja: '大阪城', zhTw: '大阪城', en: 'Osaka Castle' },
    city: { ja: '大阪市', zhTw: '大阪市', en: 'Osaka' },
    prefecture: { ja: '大阪府', zhTw: '大阪府', en: 'Osaka' },
    type: 'hirajiro',
    designation: '国指定史跡',
    position: { x: 56, y: 66 },
    illustration: { style: 'gold', tiers: 5, color: '#f5f0e8', roofColor: '#2a3a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a3a2a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      {
        year: 1583,
        event: {
          ja: '豊臣秀吉が石山本願寺の跡地に大坂城の築城を開始。天下統一の象徴として、金箔瓦を用いた壮麗な城郭を築き上げた。',
          zhTw: '豐臣秀吉在石山本願寺舊址開始築建大坂城。作為天下統一的象徵，建造了使用金箔瓦的壯麗城郭。',
          en: 'Toyotomi Hideyoshi began building Osaka Castle on the former site of Ishiyama Honganji; as a symbol of national unification, he created a magnificent fortress adorned with gold-leaf roof tiles.',
        },
      },
      {
        year: 1614,
        event: {
          ja: '大坂冬の陣が勃発。真田幸村が出城「真田丸」を築いて徳川軍を撃退したが、和議により堀が埋められ防御力が大幅に低下した。',
          zhTw: '大坂冬之陣爆發。真田幸村築出城「真田丸」擊退德川軍，但和議後護城河被填平，防禦力大幅降低。',
          en: 'The Winter Siege of Osaka erupted; Sanada Yukimura built the Sanada Maru outwork and repelled Tokugawa forces, but peace terms required filling the moats, critically weakening the castle\'s defenses.',
        },
      },
      {
        year: 1615,
        event: {
          ja: '大坂夏の陣で豊臣氏が滅亡。真田幸村は家康本陣に肉薄する奮戦を見せたが討死し、城は炎上して落城した。',
          zhTw: '大坂夏之陣中豐臣氏滅亡。真田幸村奮勇逼近家康本陣但戰死，城池在烈火中陷落。',
          en: 'The Toyotomi clan was destroyed in the Summer Siege of Osaka; Sanada Yukimura fought valiantly and nearly reached Ieyasu\'s headquarters but was killed, and the castle burned and fell.',
        },
      },
      {
        year: 1629,
        event: {
          ja: '徳川幕府が大坂城を全面的に再建。豊臣時代の石垣の上に新たな石垣を積み、徳川の威光を示す壮大な城に造り替えた。',
          zhTw: '德川幕府全面重建大坂城。在豐臣時代石垣上堆砌新石垣，改造為彰顯德川威嚴的壯大城郭。',
          en: 'The Tokugawa shogunate completely rebuilt Osaka Castle, raising new stone walls over the Toyotomi-era foundations and transforming it into a grand symbol of Tokugawa authority.',
        },
      },
      {
        year: 1931,
        event: {
          ja: '大阪市民の寄付により鉄骨鉄筋コンクリート造の天守閣が復興。日本初の復興天守として大阪のシンボルとなった。',
          zhTw: '在大阪市民捐款下以鋼骨鋼筋混凝土復興天守閣。作為日本首座復興天守，成為大阪的象徵。',
          en: 'The keep was reconstructed in steel-reinforced concrete through citizen donations — Japan\'s first modern castle reconstruction — becoming an iconic symbol of Osaka.',
        },
      },
    ],
    figures: [
      {
        ja: '豊臣秀吉', zhTw: '豐臣秀吉', en: 'Toyotomi Hideyoshi',
        desc: {
          ja: '農民から天下人に上り詰め、大坂城を天下統一の拠点として築いた戦国時代最大の出世頭。',
          zhTw: '從農民崛起為天下人，以大坂城作為天下統一據點的戰國時代最大傳奇人物。',
          en: 'The greatest rags-to-riches figure of the Sengoku era, rising from peasant to supreme ruler and building Osaka Castle as the base for his unification of Japan.',
        },
      },
      {
        ja: '徳川家康', zhTw: '德川家康', en: 'Tokugawa Ieyasu',
        desc: {
          ja: '大坂の陣で豊臣氏を滅ぼし、徳川幕府による天下泰平を確立した江戸幕府の創設者。',
          zhTw: '在大坂之陣中消滅豐臣氏，確立德川幕府天下太平的江戶幕府創立者。',
          en: 'Founder of the Tokugawa shogunate who destroyed the Toyotomi clan at the sieges of Osaka, establishing an era of lasting peace under Tokugawa rule.',
        },
      },
      {
        ja: '真田幸村', zhTw: '真田幸村', en: 'Sanada Yukimura',
        desc: {
          ja: '「日本一の兵」と称えられた武将で、大坂の陣で真田丸を築き、家康本陣に肉薄する壮絶な戦いを繰り広げた。',
          zhTw: '被譽為「日本第一兵」的武將，在大坂之陣中築真田丸，向家康本陣發動壯烈的進攻。',
          en: 'Hailed as "the greatest warrior in Japan," he built the Sanada Maru outwork during the Osaka sieges and led a ferocious charge that nearly reached Ieyasu\'s command post.',
        },
      },
    ],
    trivia: [
      { ja: '現在の天守は実は三代目で、豊臣時代とも徳川時代とも異なるデザイン。1931年に市民の寄付で再建された。', zhTw: '現在的天守其實是第三代，與豐臣時代和德川時代的設計都不同。1931年由市民捐款重建。', en: 'The current keep is actually the third version, matching neither the Toyotomi nor the Tokugawa design — it was rebuilt in 1931 with citizen donations.' },
      { ja: '徳川時代の石垣の約2m下から豊臣時代の石垣が発掘され、城の二層構造が確認された。', zhTw: '在德川時代石垣約2公尺下方發掘出豐臣時代的石垣，確認了城的雙層結構。', en: 'Toyotomi-era stone walls were excavated about 2 meters below the current Tokugawa-era walls, confirming the castle\'s layered structure.' },
      { ja: '蛸石（たこいし）は城壁の中で最大の石で、重さ約130トン。瀬戸内海の島から運ばれた。', zhTw: '蛸石是城牆中最大的石頭，重約130噸。從瀨戶內海的島嶼運來。', en: 'The Octopus Stone (Tako-ishi) is the largest stone in the castle walls at approximately 130 tons, transported from an island in the Seto Inland Sea.' },
    ],
    highlights: [
      { ja: '天守閣博物館 — 豊臣・徳川時代の歴史を詳しく展示。最上階からの大阪市街のパノラマビュー。', zhTw: '天守閣博物館 — 詳細展示豐臣與德川時代的歷史。最上層的大阪市區全景。', en: 'Keep museum chronicling the Toyotomi and Tokugawa eras, with panoramic views of Osaka from the top floor.' },
      { ja: '大手門と巨大石垣 — 蛸石をはじめとする巨石が並ぶ圧巻の石垣。', zhTw: '大手門與巨大石垣 — 以蛸石為首的巨石排列的壯觀石垣。', en: 'Ōtemon gate and massive stone walls — featuring the Octopus Stone and other enormous boulders.' },
      { ja: '西の丸庭園の桜 — 天守を背景にした大阪随一の花見スポット。', zhTw: '西之丸庭園的櫻花 — 以天守為背景的大阪首屈一指賞櫻景點。', en: 'Cherry blossoms in Nishinomaru Garden — Osaka\'s premier hanami spot with the castle keep as backdrop.' },
    ],
    architecture: [
      { ja: '巨大な花崗岩の石垣 — 一部の石は100トンを超え、日本の城郭で最大級の石材が使われている。', zhTw: '巨大花崗岩石垣 — 部分石材超過100噸，使用了日本城郭中最大級的石材。', en: 'Massive granite stone walls — some stones exceed 100 tons, among the largest building materials used in any Japanese castle.' },
      { ja: '内堀・外堀の二重堀システム — 広大な水堀が城の各郭を分離し、強固な防御を実現。', zhTw: '內堀、外堀的雙重護城河系統 — 廣大的水堀分隔城的各郭，實現堅固防禦。', en: 'Double moat system (inner and outer) — extensive water moats separate each bailey, creating formidable defenses.' },
      { ja: '現在の天守（1931年）は日本初の鉄筋コンクリート製復興天守で、近代建築技術による城郭再建の先駆け。', zhTw: '現在的天守（1931年）是日本首座鋼筋混凝土復興天守，是近代建築技術重建城郭的先驅。', en: 'The current keep (1931) was Japan\'s first reinforced concrete castle reconstruction, pioneering the use of modern materials for castle restoration.' },
    ],
  },
  {
    id: 'nijo',
    number: 53,
    regionId: 'kinki',
    name: { ja: '二条城', zhTw: '二條城', en: 'Nijō Castle' },
    city: { ja: '京都市', zhTw: '京都市', en: 'Kyoto' },
    prefecture: { ja: '京都府', zhTw: '京都府', en: 'Kyoto' },
    type: 'hirajiro',
    designation: '世界遺産',
    position: { x: 58, y: 63 },
    illustration: { style: 'palace', tiers: 2, color: '#f5f0e8', roofColor: '#6b6b5a' },
    goshuin: { bg: '#f5f0e8', ink: '#3a2a1a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      {
        year: 1603,
        event: {
          ja: '徳川家康が京都における将軍の宿所として二条城を築城。朝廷への威光を示すとともに、上洛時の政治拠点とした。',
          zhTw: '德川家康在京都築建二條城作為將軍住所。向朝廷展示威嚴，同時作為上洛時的政治據點。',
          en: 'Tokugawa Ieyasu built Nijō Castle in Kyoto as the shōgun\'s lodging, projecting power before the Imperial Court and serving as his political base during visits to the capital.',
        },
      },
      {
        year: 1626,
        event: {
          ja: '三代将軍・徳川家光が後水尾天皇の行幸に合わせて大規模な増改築を実施し、二の丸御殿の障壁画など豪華絢爛な装飾を完成させた。',
          zhTw: '三代將軍德川家光配合後水尾天皇行幸進行大規模增改建，完成二之丸御殿的障壁畫等豪華絢爛裝飾。',
          en: 'The third shōgun Tokugawa Iemitsu carried out major expansions for Emperor Go-Mizunoo\'s visit, completing the lavish screen paintings and decorations of the Ninomaru Palace.',
        },
      },
      {
        year: 1867,
        event: {
          ja: '十五代将軍・徳川慶喜が二条城の二の丸御殿大広間で大政奉還を表明し、約260年続いた江戸幕府の統治に幕を下ろした。',
          zhTw: '第十五代將軍德川慶喜在二條城二之丸御殿大廣間宣布大政奉還，為延續約兩百六十年的江戶幕府統治劃下句點。',
          en: 'The fifteenth shōgun Tokugawa Yoshinobu declared the restoration of imperial rule in the grand hall of Nijō Castle\'s Ninomaru Palace, ending roughly 260 years of Tokugawa governance.',
        },
      },
      {
        year: 1994,
        event: {
          ja: '「古都京都の文化財」の一部としてユネスコ世界文化遺産に登録され、武家政治の歴史を今に伝える貴重な遺構として保存されている。',
          zhTw: '作為「古都京都的文化財」之一被登錄為聯合國教科文組織世界文化遺產，作為傳達武家政治歷史的珍貴遺構受到保存。',
          en: 'Registered as a UNESCO World Cultural Heritage Site as part of the "Historic Monuments of Ancient Kyoto," preserved as a precious testament to the history of warrior governance.',
        },
      },
    ],
    figures: [
      {
        ja: '徳川家康', zhTw: '德川家康', en: 'Tokugawa Ieyasu',
        desc: {
          ja: '二条城を京都における将軍の権威の象徴として築城し、朝廷と武家の関係を管理する拠点とした。',
          zhTw: '築建二條城作為將軍在京都權威的象徵，並以此作為管理朝廷與武家關係的據點。',
          en: 'Built Nijō Castle as a symbol of shogunal authority in Kyoto and a base for managing relations between the warrior government and the Imperial Court.',
        },
      },
      {
        ja: '徳川家光', zhTw: '德川家光', en: 'Tokugawa Iemitsu',
        desc: {
          ja: '二条城を大幅に拡張・装飾し、天皇の行幸を迎えることで幕府の権威を不動のものとした三代将軍。',
          zhTw: '大幅擴張裝飾二條城並迎接天皇行幸，使幕府權威堅不可摧的第三代將軍。',
          en: 'The third shōgun who dramatically expanded and embellished Nijō Castle and hosted the Emperor\'s visit, cementing the shogunate\'s unassailable authority.',
        },
      },
      {
        ja: '徳川慶喜', zhTw: '德川慶喜', en: 'Tokugawa Yoshinobu',
        desc: {
          ja: '江戸幕府最後の将軍で、二条城で大政奉還を宣言し、武家政権の幕を閉じて近代日本への道を開いた。',
          zhTw: '江戶幕府末代將軍，在二條城宣布大政奉還，結束武家政權，開啟通往近代日本之路。',
          en: 'The last shōgun of the Tokugawa shogunate who declared the restoration of imperial rule at Nijō Castle, closing the era of warrior government and opening the path to modern Japan.',
        },
      },
    ],
    trivia: [
      { ja: '「鶯張りの廊下」は歩くと鳥のような音がするが、実はセキュリティのための意図的な設計ではなく、経年変化による偶然の産物とされる。', zhTw: '「鶯張之廊」走動時會發出鳥鳴般的聲音，但實際上並非刻意設計的安全措施，而是年代久遠的偶然產物。', en: 'The "nightingale floors" squeak like birds when walked on, but this was actually not an intentional security feature — it\'s believed to be a result of aging and design rather than deliberate craftsmanship.' },
      { ja: 'この場所で最後の将軍・徳川慶喜が大政奉還を宣言し、約260年の武家政権に幕を下ろした歴史的舞台。', zhTw: '末代將軍德川慶喜在此宣布大政奉還，為約260年武家政權畫下句點的歷史舞台。', en: 'This is the historic stage where the last shōgun Tokugawa Yoshinobu announced the restoration of power to the Emperor, ending roughly 260 years of warrior rule.' },
      { ja: '庭園は四季折々の花が楽しめ、梅・桜・躑躅・紅葉と年間を通じて美しい景色が広がる。', zhTw: '庭園四季都可欣賞不同花卉，梅花、櫻花、杜鵑、紅葉，一年到頭都有美麗景色。', en: 'The gardens offer flowers for every season — plum blossoms, cherry blossoms, azaleas, and autumn leaves create beautiful scenery year-round.' },
    ],
    highlights: [
      { ja: '二の丸御殿 — 鶯張りの廊下と狩野派による3,000点以上の障壁画が圧巻の桃山時代建築。', zhTw: '二之丸御殿 — 鶯張之廊與狩野派3,000幅以上障壁畫令人嘆為觀止的桃山時代建築。', en: 'Ninomaru Palace — stunning Momoyama-era architecture featuring nightingale floors and over 3,000 paintings by the Kanō school.' },
      { ja: '唐門 — 精緻な彫刻が施された華麗な中国風の門。', zhTw: '唐門 — 施以精緻雕刻的華麗中國風門。', en: 'Karamon Gate — an ornately carved Chinese-style gate of extraordinary craftsmanship.' },
      { ja: '二の丸庭園 — 小堀遠州作と伝わる名園で、池泉回遊式の美しい日本庭園。', zhTw: '二之丸庭園 — 相傳為小堀遠州所作的名園，美麗的池泉迴游式日本庭園。', en: 'Ninomaru Garden — a beautiful strolling pond garden attributed to the famous garden designer Kobori Enshū.' },
    ],
    architecture: [
      { ja: '二の丸御殿 — 現存する数少ない桃山時代の御殿建築で、大広間など6棟33室から成る国宝建造物群。', zhTw: '二之丸御殿 — 現存少數的桃山時代御殿建築，由大廣間等6棟33室構成的國寶建築群。', en: 'Ninomaru Palace — one of the few surviving Momoyama-period palace complexes, a National Treasure comprising six buildings with 33 rooms.' },
      { ja: '黒書院・大広間 — 狩野派の豪華な襖絵で飾られた謁見の間。将軍の権威を示す壮麗な空間。', zhTw: '黑書院、大廣間 — 以狩野派豪華襖繪裝飾的謁見之間。展現將軍權威的壯麗空間。', en: 'Kuroshoin and Ōhiroma audience halls — adorned with magnificent Kanō school sliding door paintings, grand spaces displaying shogunal authority.' },
      { ja: '唐門の精緻な木彫り — 鶴や龍などの彫刻が施され、桃山文化の華やかさを今に伝える装飾芸術の粋。', zhTw: '唐門的精緻木雕 — 施以鶴與龍等雕刻，傳達桃山文化華麗的裝飾藝術精華。', en: 'Intricate wood carvings on the Karamon gate — featuring cranes, dragons, and other motifs that convey the splendor of Momoyama-era decorative arts.' },
    ],
  },

  // ── 中國 ──
  {
    id: 'hiroshima',
    number: 73,
    regionId: 'chugoku',
    name: { ja: '広島城', zhTw: '廣島城', en: 'Hiroshima Castle' },
    city: { ja: '広島市', zhTw: '廣島市', en: 'Hiroshima' },
    prefecture: { ja: '広島県', zhTw: '廣島縣', en: 'Hiroshima' },
    type: 'hirajiro',
    designation: '国指定史跡',
    position: { x: 38, y: 65 },
    illustration: { style: 'classic', tiers: 5, color: '#4a4a4a', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2a2a2a', seal: '#c53d43', crest: '#6b8e7b' },
    history: [
      {
        year: 1589,
        event: {
          ja: '毛利輝元が太田川のデルタ地帯に広島城の築城を開始。瀬戸内海の水運を活かした城下町建設を構想し、広島の都市としての発展の起点となった。',
          zhTw: '毛利輝元在太田川三角洲開始築建廣島城。構想利用瀨戶內海水運建設城下町，成為廣島都市發展的起點。',
          en: 'Mōri Terumoto began building Hiroshima Castle on the Ōta River delta, envisioning a castle town that leveraged Seto Inland Sea shipping — marking the origin of Hiroshima as a city.',
        },
      },
      {
        year: 1600,
        event: {
          ja: '関ヶ原の戦い後、毛利氏は防長二国に減封され、代わりに福島正則が広島城主となり城下町の拡充を進めた。',
          zhTw: '關原之戰後毛利氏被減封至防長兩國，福島正則接任廣島城主，推動城下町的擴建。',
          en: 'After the Battle of Sekigahara, the Mōri were reduced to two provinces and Fukushima Masanori became lord of Hiroshima Castle, expanding the castle town.',
        },
      },
      {
        year: 1619,
        event: {
          ja: '福島正則が無届けの城修復を理由に改易され、浅野長晟が入封。浅野氏は以後約250年にわたり広島藩を統治した。',
          zhTw: '福島正則因未經批准修繕城池被改易，淺野長晟入封。淺野氏此後約兩百五十年統治廣島藩。',
          en: 'Fukushima Masanori was dispossessed for unauthorized castle repairs and Asano Nagaakira took over; the Asano clan governed Hiroshima domain for roughly 250 years.',
        },
      },
      {
        year: 1945,
        event: {
          ja: '原子爆弾の投下により天守を含む全ての建造物が倒壊。広島城は戦争の悲惨さを伝える象徴的な場所となった。',
          zhTw: '原子彈投下導致包含天守在內的所有建築倒塌。廣島城成為傳達戰爭悲慘的象徵性場所。',
          en: 'The atomic bombing destroyed all structures including the keep; Hiroshima Castle became a symbolic site conveying the devastation of war.',
        },
      },
      {
        year: 1958,
        event: {
          ja: '鉄筋コンクリートで天守閣が復元され、内部は歴史博物館として広島の歩みと平和の重要性を伝えている。',
          zhTw: '以鋼筋混凝土復原天守閣，內部作為歷史博物館，傳達廣島的歷程與和平的重要性。',
          en: 'The keep was reconstructed in reinforced concrete and now serves as a history museum, telling the story of Hiroshima and the importance of peace.',
        },
      },
    ],
    figures: [
      {
        ja: '毛利輝元', zhTw: '毛利輝元', en: 'Mōri Terumoto',
        desc: {
          ja: '毛利元就の孫で、豊臣政権の五大老の一人。広島城を築いて中国地方の拠点としたが、関ヶ原で西軍の総大将を務め減封された。',
          zhTw: '毛利元就之孫，豐臣政權五大老之一。築建廣島城作為中國地方據點，但因在關原之戰擔任西軍總大將而被減封。',
          en: 'Grandson of Mōri Motonari and one of Toyotomi\'s Five Elders; he built Hiroshima Castle as a regional stronghold but was reduced after serving as nominal head of the western army at Sekigahara.',
        },
      },
      {
        ja: '福島正則', zhTw: '福島正則', en: 'Fukushima Masanori',
        desc: {
          ja: '秀吉子飼いの猛将で、関ヶ原の戦いでは東軍として活躍し広島城を拝領したが、城の無届け修復により改易された。',
          zhTw: '秀吉一手培養的猛將，關原之戰中以東軍身分活躍並獲得廣島城，但因未經批准修繕城池而被改易。',
          en: 'A fierce general raised by Hideyoshi who fought for the eastern army at Sekigahara and was awarded Hiroshima Castle, but was later dispossessed for unauthorized castle repairs.',
        },
      },
      {
        ja: '浅野長晟', zhTw: '淺野長晟', en: 'Asano Nagaakira',
        desc: {
          ja: '浅野幸長の弟で、福島正則の改易後に広島藩に入封し、約250年続く浅野家による広島統治の礎を築いた。',
          zhTw: '淺野幸長之弟，福島正則被改易後入封廣島藩，奠定了淺野家約兩百五十年廣島統治的基礎。',
          en: 'Younger brother of Asano Yoshinaga who took over Hiroshima domain after Fukushima\'s dismissal, founding roughly 250 years of Asano family rule over the region.',
        },
      },
    ],
    trivia: [
      { ja: '1945年8月6日の原爆投下で一瞬にして破壊された。爆心地からわずか約900mの距離にあった。', zhTw: '1945年8月6日原子彈投下時瞬間被摧毀。距爆心地僅約900公尺。', en: 'Destroyed instantly by the atomic bomb on August 6, 1945 — the castle was only about 900 meters from the hypocenter.' },
      { ja: '「鯉城」（りじょう）の愛称はこの城に由来し、広島の野球チーム「広島東洋カープ」の名前の元になった。', zhTw: '「鯉城」的愛稱源自此城，也是廣島棒球隊「廣島東洋鯉魚」隊名的由來。', en: 'The nickname "Carp Castle" (Rijō) inspired the name of the local baseball team, the Hiroshima Toyo Carp.' },
      { ja: '毛利輝元は京都に匹敵する新たな権力の中心地を目指して広島を建設し、城はその野心の象徴だった。', zhTw: '毛利輝元以建設匹敵京都的新權力中心為目標建設廣島，城是其野心的象徵。', en: 'Mōri Terumoto built Hiroshima as a new center of power rivaling Kyoto, and the castle was the symbol of that ambition.' },
    ],
    highlights: [
      { ja: '復元された五重天守 — 城の博物館として広島の歴史を展示。', zhTw: '復原的五重天守 — 作為城的博物館展示廣島的歷史。', en: 'Reconstructed five-story keep housing a castle museum showcasing Hiroshima\'s history.' },
      { ja: '二の丸の復元された櫓と門 — 伝統工法で1994年に再建された建造物群。', zhTw: '二之丸復原的櫓與門 — 1994年以傳統工法重建的建築群。', en: 'Reconstructed turrets and gate in the Ninomaru — built in 1994 using traditional construction methods.' },
      { ja: '天守最上階からの眺望 — 平和記念公園方面を見渡せるパノラマビュー。', zhTw: '天守最上層的眺望 — 可俯瞰和平紀念公園方向的全景。', en: 'View from the top floor — panoramic views overlooking the Peace Memorial Park area.' },
    ],
    architecture: [
      { ja: '河川デルタ上に築かれた平城で、太田川の複数の河川を天然の堀として活用した革新的な立地。', zhTw: '建於河川三角洲上的平城，創新地利用太田川的多條河川作為天然護城河。', en: 'A flatland castle built on a river delta, innovatively utilizing multiple channels of the Ōta River as natural moats.' },
      { ja: '広大な水堀が城の各郭を分離し、水の都・広島の原型となった独特の水城。', zhTw: '廣大水堀分隔城的各郭，形成水都廣島原型的獨特水城。', en: 'Extensive water moats separating each bailey created a unique water castle that became the prototype for Hiroshima as a "city of water."' },
      { ja: '二の丸の復元建物は伝統工法で建てられ、木組み・土壁・漆喰など当時の技術を忠実に再現。', zhTw: '二之丸的復原建築以傳統工法建造，忠實再現木組、土牆、灰泥等當時技術。', en: 'Ninomaru reconstructions were built with traditional methods, faithfully recreating period techniques including wooden joinery, earthen walls, and plaster.' },
    ],
  },
  {
    id: 'matsue',
    number: 64,
    regionId: 'chugoku',
    name: { ja: '松江城', zhTw: '松江城', en: 'Matsue Castle' },
    city: { ja: '松江市', zhTw: '松江市', en: 'Matsue' },
    prefecture: { ja: '島根県', zhTw: '島根縣', en: 'Shimane' },
    type: 'hirayama',
    designation: '国宝',
    position: { x: 36, y: 63 },
    illustration: { style: 'black', tiers: 4, color: '#2a2a2a', roofColor: '#1a1a1a' },
    goshuin: { bg: '#f0e6d3', ink: '#1a1a1a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      {
        year: 1611,
        event: {
          ja: '堀尾吉晴が5年の歳月をかけて松江城を完成させた。宍道湖畔の地形を巧みに利用した実戦的な城郭として築かれた。',
          zhTw: '堀尾吉晴歷時五年完成松江城。巧妙利用宍道湖畔地形，築成實戰性強的城郭。',
          en: 'Horio Yoshiharu completed Matsue Castle after five years of construction, skillfully utilizing the terrain along Lake Shinji to create a highly defensible fortress.',
        },
      },
      {
        year: 1638,
        event: {
          ja: '松平直政が信濃から転封して松江藩主となり、以後明治維新まで松平氏が約230年にわたり藩を治めた。',
          zhTw: '松平直政從信濃轉封成為松江藩主，此後直至明治維新，松平氏統治藩政約兩百三十年。',
          en: 'Matsudaira Naomasa was transferred from Shinano to become lord of Matsue domain; the Matsudaira clan governed for roughly 230 years until the Meiji Restoration.',
        },
      },
      {
        year: 1890,
        event: {
          ja: '小泉八雲（ラフカディオ・ハーン）が松江に赴任し、松江城の佇まいに魅せられて多くの作品に記した。彼の著作を通じて松江の文化が世界に紹介された。',
          zhTw: '小泉八雲（拉夫卡迪奧・赫恩）赴任松江，被松江城的風貌所吸引，在多部作品中記述。透過他的著作，松江文化被介紹到世界各地。',
          en: 'Lafcadio Hearn (Koizumi Yakumo) arrived in Matsue and was captivated by the castle\'s atmosphere, writing about it extensively and introducing Matsue\'s culture to the world.',
        },
      },
      {
        year: 2015,
        event: {
          ja: '天守が国宝に再指定された。築城時の祈祷札の発見により建築年代が確定し、現存12天守の一つとして最高の評価を受けた。',
          zhTw: '天守重新被指定為國寶。因發現築城時的祈禱札確定了建築年代，作為現存十二天守之一獲得最高評價。',
          en: 'The keep was re-designated a National Treasure after the discovery of prayer tablets that confirmed its construction date, earning the highest recognition as one of Japan\'s twelve surviving original keeps.',
        },
      },
    ],
    figures: [
      {
        ja: '堀尾吉晴', zhTw: '堀尾吉晴', en: 'Horio Yoshiharu',
        desc: {
          ja: '豊臣秀吉に仕えた武将で、関ヶ原の戦い後に出雲に入封し松江城を築城した「仏の茂助」の異名を持つ人物。',
          zhTw: '侍奉豐臣秀吉的武將，關原之戰後入封出雲並築建松江城，有「佛之茂助」之稱。',
          en: 'A general who served Toyotomi Hideyoshi, known as "Mosuke the Buddha" for his gentle nature; after Sekigahara he was granted Izumo Province and built Matsue Castle.',
        },
      },
      {
        ja: '松平直政', zhTw: '松平直政', en: 'Matsudaira Naomasa',
        desc: {
          ja: '徳川家康の孫にあたる松江藩主で、松平家による長期安定統治の基礎を築き、藩の発展に大きく貢献した。',
          zhTw: '德川家康之孫、松江藩主，奠定松平家長期穩定統治的基礎，對藩的發展做出重大貢獻。',
          en: 'A grandson of Tokugawa Ieyasu who became lord of Matsue domain, establishing the foundations for lasting Matsudaira governance and contributing greatly to the domain\'s growth.',
        },
      },
      {
        ja: '小泉八雲', zhTw: '小泉八雲', en: 'Lafcadio Hearn',
        desc: {
          ja: 'ギリシャ生まれの作家で、日本に帰化し松江で暮らした。日本の怪談や文化を西洋に紹介した功績で知られる。',
          zhTw: '希臘出生的作家，歸化日本並在松江生活。以向西方介紹日本怪談與文化的功績聞名。',
          en: 'A Greek-born writer who became a Japanese citizen and lived in Matsue; celebrated for introducing Japanese ghost stories and culture to Western audiences.',
        },
      },
    ],
    trivia: [
      { ja: '2015年に建設年を証明する祈祷札が発見され、ようやく国宝に指定された。長年「重要文化財」止まりだった。', zhTw: '2015年發現證明建設年份的祈禱札，終於被指定為國寶。長年來一直停留在「重要文化財」。', en: 'Only designated a National Treasure in 2015 after a wooden prayer charm proving its construction date was discovered — it had long remained merely an Important Cultural Property.' },
      { ja: '小泉八雲（ラフカディオ・ハーン）がこの城の近くに住み、日本の怪談を世界に紹介する著作を多数執筆した。', zhTw: '小泉八雲（拉夫卡迪奧·赫恩）住在此城附近，撰寫了多部向世界介紹日本怪談的著作。', en: 'Lafcadio Hearn lived near this castle and wrote extensively about Japanese ghost stories and culture, introducing them to Western audiences.' },
      { ja: '宍道湖畔に建つため、夕陽に染まる湖と天守のシルエットが「日本一の夕日」と称される絶景を生む。', zhTw: '因建於宍道湖畔，夕陽映照湖面與天守剪影，被譽為「日本第一夕陽」的絕景。', en: 'Built on the shore of Lake Shinji, the silhouette of the keep against the sunset-painted lake creates a view celebrated as one of Japan\'s finest sunsets.' },
    ],
    highlights: [
      { ja: '現存天守 — 日本に12しかない現存天守の一つで、重厚な外観が特徴的。', zhTw: '現存天守 — 日本僅存12座現存天守之一，以厚重外觀為特色。', en: 'Original surviving keep — one of only 12 remaining original castle keeps in Japan, characterized by its imposing appearance.' },
      { ja: '堀川遊覧船 — 城の堀を小舟で巡る風情ある遊覧。低い橋をくぐる際に屋根が下がるユニークな体験。', zhTw: '堀川遊覽船 — 搭小船遊覽城的護城河的風情體驗。經過低矮橋樑時船頂會下降的獨特經歷。', en: 'Horikawa pleasure boat ride through the castle moats — a charming cruise where the boat\'s roof lowers to pass under low bridges.' },
      { ja: '宍道湖の夕日 — 城址から見る宍道湖に沈む夕日は日本屈指の絶景。', zhTw: '宍道湖的夕陽 — 從城址眺望宍道湖落日是日本首屈一指的絕景。', en: 'Lake Shinji sunset — watching the sun sink into the lake from the castle grounds is one of Japan\'s most spectacular views.' },
    ],
    architecture: [
      { ja: '複合式天守 — 附櫓を備えた堅固な構造で、木と石を巧みに組み合わせた独特の建築。', zhTw: '複合式天守 — 配備附櫓的堅固結構，巧妙結合木與石的獨特建築。', en: 'Composite keep — a robust structure with attached turrets, uniquely combining wood and stone construction.' },
      { ja: '下見板張りの外壁 — 厳しい山陰の気候から城を守るための実用的な板張り。', zhTw: '下見板張外牆 — 為抵禦嚴酷山陰氣候而設的實用板牆。', en: 'Weatherboard exterior walls — practical cladding designed to protect the castle from the harsh San\'in coastal climate.' },
      { ja: '天守内部に設けられた井戸 — 籠城戦に備えた珍しい設備で、水の確保を可能にした。', zhTw: '天守內部設置的井 — 為籠城戰準備的罕見設備，確保水源供應。', en: 'A well inside the keep — an unusual feature providing water supply during siege warfare.' },
    ],
  },

  // ── 四國 ──
  {
    id: 'matsuyama',
    number: 81,
    regionId: 'shikoku',
    name: { ja: '松山城', zhTw: '松山城', en: 'Matsuyama Castle' },
    city: { ja: '松山市', zhTw: '松山市', en: 'Matsuyama' },
    prefecture: { ja: '愛媛県', zhTw: '愛媛縣', en: 'Ehime' },
    type: 'hirayama',
    designation: '重要文化財',
    position: { x: 46, y: 76 },
    illustration: { style: 'classic', tiers: 3, color: '#f5f0e8', roofColor: '#4a4a3a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#8e6b7b' },
    history: [
      {
        year: 1602,
        event: {
          ja: '関ヶ原の功績で伊予に入封した加藤嘉明が、勝山の山頂に松山城の築城を開始。26年の歳月をかける大工事となった。',
          zhTw: '因關原之戰的戰功入封伊予的加藤嘉明，在勝山山頂開始築建松山城。工程歷時二十六年。',
          en: 'Katō Yoshiaki, rewarded with Iyo Province for his service at Sekigahara, began constructing Matsuyama Castle atop Mount Katsuyama — a massive project spanning 26 years.',
        },
      },
      {
        year: 1627,
        event: {
          ja: '加藤嘉明が会津に転封となり、蒲生忠知が松山城主となった。蒲生氏は二の丸の整備を進めたが、忠知に嗣子がなく断絶した。',
          zhTw: '加藤嘉明轉封至會津，蒲生忠知成為松山城主。蒲生氏推進二之丸整備，但因忠知無嗣而斷絕。',
          en: 'Katō Yoshiaki was transferred to Aizu and Gamō Tadatomo became lord of Matsuyama; the Gamō continued developing the second compound, but the line ended when Tadatomo died without an heir.',
        },
      },
      {
        year: 1635,
        event: {
          ja: '松平定行が桑名から松山に入封し、以後松平（久松）氏が幕末まで松山藩を治め、城の完成と維持に尽力した。',
          zhTw: '松平定行從桑名轉封至松山，此後松平（久松）氏治理松山藩直至幕末，致力於城的完成與維護。',
          en: 'Matsudaira Sadayuki was transferred from Kuwana to Matsuyama; the Matsudaira (Hisamatsu) clan governed until the end of the Edo period, completing and maintaining the castle.',
        },
      },
      {
        year: 1784,
        event: {
          ja: '落雷により天守を含む本壇の建物が焼失。藩の財政難もあり再建は遅れたが、幕末に至り現存天守が再建された。',
          zhTw: '雷擊導致包含天守在內的本壇建築焚毀。因藩財政困難重建延遲，直至幕末才重建現存天守。',
          en: 'Lightning destroyed the keep and main citadel buildings; financial difficulties delayed reconstruction, but the current surviving keep was eventually rebuilt in the late Edo period.',
        },
      },
      {
        year: 1854,
        event: {
          ja: '現存する三重三階の連立式天守が再建され、日本で最後に完成した城郭建築の一つとして現在も威容を誇っている。',
          zhTw: '現存三重三階連立式天守重建完成，作為日本最後完成的城郭建築之一，至今仍展現其雄偉風姿。',
          en: 'The current three-story linked keep complex was rebuilt, standing today as one of the last castle structures completed in Japan and retaining its imposing presence.',
        },
      },
    ],
    figures: [
      {
        ja: '加藤嘉明', zhTw: '加藤嘉明', en: 'Katō Yoshiaki',
        desc: {
          ja: '賤ヶ岳の七本槍の一人で、関ヶ原の功績で伊予に入り松山城の築城を開始した水軍の名将。',
          zhTw: '賤岳七本槍之一，因關原之戰功績入封伊予並開始築建松山城的水軍名將。',
          en: 'One of the Seven Spears of Shizugatake and a renowned naval commander who was granted Iyo after Sekigahara and began building Matsuyama Castle.',
        },
      },
      {
        ja: '蒲生忠知', zhTw: '蒲生忠知', en: 'Gamō Tadatomo',
        desc: {
          ja: '蒲生氏郷の孫で、加藤嘉明の後を受けて松山城主となったが、嗣子なく没し蒲生家は断絶した。',
          zhTw: '蒲生氏鄉之孫，接替加藤嘉明成為松山城主，但因無嗣去世，蒲生家斷絕。',
          en: 'Grandson of Gamō Ujisato who succeeded Katō Yoshiaki as lord of Matsuyama Castle, but died without an heir, ending the Gamō line.',
        },
      },
      {
        ja: '松平定行', zhTw: '松平定行', en: 'Matsudaira Sadayuki',
        desc: {
          ja: '徳川家康の甥にあたり、松山藩に入封して松平（久松）氏による約230年の統治を開いた初代松山藩松平家当主。',
          zhTw: '德川家康之姪，入封松山藩，開啟松平（久松）氏約兩百三十年統治的初代松山藩松平家當主。',
          en: 'A nephew of Tokugawa Ieyasu who was installed as lord of Matsuyama, founding roughly 230 years of Matsudaira (Hisamatsu) clan rule over the domain.',
        },
      },
    ],
    trivia: [
      { ja: '現存12天守の中で唯一1800年以降に建てられた天守で、江戸時代最後の完全な城郭建築。', zhTw: '現存12天守中唯一建於1800年以後的天守，是江戶時代最後的完整城郭建築。', en: 'The only surviving original keep built after 1800, making it the last complete castle structure of the Edo period.' },
      { ja: 'ロープウェイまたはリフトで山頂まで行ける珍しい城。スキーリフト式の登城は他にない体験。', zhTw: '可搭乘纜車或升降椅到山頂的罕見城堡。滑雪升降椅式的登城是獨一無二的體驗。', en: 'One of the few castles accessible by ropeway or chairlift — the ski-lift-style approach is a unique experience.' },
      { ja: '夏目漱石が松山で英語教師をしていた時代があり、小説「坊っちゃん」に城下町の雰囲気が描かれている。', zhTw: '夏目漱石曾在松山擔任英語教師，小說《少爺》中描繪了城下町的氛圍。', en: 'Natsume Sōseki taught English in Matsuyama; his novel "Botchan" captures the atmosphere of the castle town.' },
    ],
    highlights: [
      { ja: '現存する連立式天守 — 大天守・小天守・櫓が渡り廊下で繋がった希少な構造。', zhTw: '現存的連立式天守 — 大天守、小天守、櫓以走廊連結的稀有結構。', en: 'Surviving connected keep complex — main keep, sub-keep, and turrets linked by corridors, a rare surviving structure.' },
      { ja: 'ロープウェイとリフトからの瀬戸内海ビュー — 登城途中に楽しめる絶景。', zhTw: '從纜車與升降椅眺望瀨戶內海 — 登城途中可享受的絕景。', en: 'Seto Inland Sea views from the ropeway and chairlift — stunning scenery enjoyed during the ascent.' },
      { ja: '山頂からの道後温泉方面のパノラマ — 城と温泉街を一望できる。', zhTw: '從山頂眺望道後溫泉方向的全景 — 可一覽城與溫泉街。', en: 'Panoramic view toward Dōgo Onsen from the hilltop — overlooking both the castle and the hot spring district.' },
    ],
    architecture: [
      { ja: '連立式天守 — 大天守・小天守・南隅櫓・北隅櫓が渡り廊下で結ばれた複合的な防御構造。', zhTw: '連立式天守 — 大天守、小天守、南隅櫓、北隅櫓以走廊連結的複合防禦結構。', en: 'Connected keep complex — main keep, sub-keep, south corner turret, and north corner turret linked by connecting corridors into a compound defensive structure.' },
      { ja: '各アプローチに配された狭間（銃眼）と石落とし — 登城路のあらゆる角度から射撃可能な精密な配置。', zhTw: '各通道配置的狹間（銃眼）與石落 — 從登城路各角度皆可射擊的精密配置。', en: 'Gun ports and stone-dropping windows at every approach — precisely positioned to enable fire from all angles along the ascending paths.' },
      { ja: '複数の枡形門（升形門）が攻め手を狭い空間に閉じ込め、四方から攻撃できるキルゾーンを形成。', zhTw: '多個枡形門將進攻者困在狹小空間，形成可從四面攻擊的殲滅區。', en: 'Multiple compound gates (masugata-mon) funnel attackers into confined spaces, creating kill zones with crossfire from all directions.' },
    ],
  },

  // ── 九州 ──
  {
    id: 'kumamoto',
    number: 92,
    regionId: 'kyushu',
    name: { ja: '熊本城', zhTw: '熊本城', en: 'Kumamoto Castle' },
    city: { ja: '熊本市', zhTw: '熊本市', en: 'Kumamoto' },
    prefecture: { ja: '熊本県', zhTw: '熊本縣', en: 'Kumamoto' },
    type: 'hirayama',
    designation: '特別史跡',
    position: { x: 24, y: 78 },
    illustration: { style: 'black', tiers: 5, color: '#2a2a2a', roofColor: '#1a1a1a' },
    goshuin: { bg: '#f0e6d3', ink: '#1a1a1a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      {
        year: 1607,
        event: {
          ja: '築城の名手・加藤清正が7年をかけて熊本城を完成させた。「武者返し」と呼ばれる反りのある石垣は日本の城郭建築の最高傑作とされる。',
          zhTw: '築城名家加藤清正歷時七年完成熊本城。被稱為「武者返」的弧形石垣被譽為日本城郭建築的最高傑作。',
          en: 'Master castle builder Katō Kiyomasa completed Kumamoto Castle after seven years; its curved "musha-gaeshi" stone walls are considered the finest in Japanese castle architecture.',
        },
      },
      {
        year: 1632,
        event: {
          ja: '加藤家が改易された後、細川忠利が豊前から入封し、細川氏が幕末まで約240年にわたり熊本藩を統治した。',
          zhTw: '加藤家被改易後，細川忠利從豐前入封，細川氏此後約兩百四十年直至幕末統治熊本藩。',
          en: 'After the Katō clan was dispossessed, Hosokawa Tadatoshi was transferred from Buzen; the Hosokawa governed Kumamoto domain for roughly 240 years until the end of the Edo period.',
        },
      },
      {
        year: 1877,
        event: {
          ja: '西南戦争で西郷隆盛率いる薩摩軍が熊本城を約50日間包囲するも、谷干城ら守備隊が堅守して落城を防いだ。ただし開戦直前に天守は原因不明の出火で焼失した。',
          zhTw: '西南戰爭中西鄉隆盛率薩摩軍包圍熊本城約五十日，但谷干城等守備隊堅守未落。不過開戰前夕天守因不明原因失火焚毀。',
          en: 'During the Satsuma Rebellion, Saigō Takamori\'s forces besieged Kumamoto Castle for roughly 50 days, but the garrison under Tani Tateki held firm; however, the keep had burned from a mysterious fire just before the siege began.',
        },
      },
      {
        year: 1960,
        event: {
          ja: '鉄筋コンクリートで大天守と小天守が復元され、熊本のシンボルとして市民に親しまれるようになった。',
          zhTw: '以鋼筋混凝土復原大天守與小天守，作為熊本的象徵深受市民喜愛。',
          en: 'The main and minor keeps were reconstructed in reinforced concrete, becoming a beloved symbol of Kumamoto for its citizens.',
        },
      },
      {
        year: 2016,
        event: {
          ja: '熊本地震により石垣や櫓が大規模に崩壊し甚大な被害を受けた。現在も復旧工事が進められ、完全復旧は2037年頃の見込み。',
          zhTw: '熊本地震導致石垣與櫓大規模崩塌，受災嚴重。目前復修工程持續進行中，預計約2037年完全修復。',
          en: 'The Kumamoto earthquakes caused massive collapse of stone walls and turrets; restoration work continues today, with full recovery projected around 2037.',
        },
      },
    ],
    figures: [
      {
        ja: '加藤清正', zhTw: '加藤清正', en: 'Katō Kiyomasa',
        desc: {
          ja: '豊臣秀吉の子飼いの武将で、「築城の名手」として熊本城をはじめ数々の名城を築いた。朝鮮出兵でも猛将として知られる。',
          zhTw: '豐臣秀吉一手培養的武將，以「築城名家」聞名，築建了熊本城等多座名城。在朝鮮出兵中亦以猛將著稱。',
          en: 'A warrior raised by Toyotomi Hideyoshi and renowned as a "master castle builder" who constructed Kumamoto and other great castles; also known as a fierce commander during the Korean campaigns.',
        },
      },
      {
        ja: '細川忠利', zhTw: '細川忠利', en: 'Hosokawa Tadatoshi',
        desc: {
          ja: '細川氏初代熊本藩主で、剣聖・宮本武蔵を招聘するなど文武両面で藩の基礎を固めた教養豊かな大名。',
          zhTw: '細川氏初代熊本藩主，招聘劍聖宮本武藏等，在文武兩面奠定藩政基礎的博學多才大名。',
          en: 'First Hosokawa lord of Kumamoto who invited the legendary swordsman Miyamoto Musashi to the domain and strengthened its foundations in both cultural and martial affairs.',
        },
      },
      {
        ja: '谷干城', zhTw: '谷干城', en: 'Tani Tateki',
        desc: {
          ja: '明治陸軍の軍人で、西南戦争において熊本鎮台司令長官として約50日間の籠城戦を指揮し、熊本城を守り抜いた。',
          zhTw: '明治陸軍軍人，在西南戰爭中以熊本鎮台司令長官身分指揮約五十日的籠城戰，成功守住熊本城。',
          en: 'A Meiji-era army officer who commanded the Kumamoto garrison during the Satsuma Rebellion, successfully defending the castle through a roughly 50-day siege.',
        },
      },
    ],
    trivia: [
      { ja: '石垣の独特な反り返り「武者返し」は忍者でも登れないほど急で、「武者返し」の名はまさにその通り。', zhTw: '石垣獨特的反曲「武者返」陡峭到連忍者都爬不上去，「武者返」之名名副其實。', en: 'The stone walls\' unique curve called "musha-gaeshi" (warrior repelling) is so steep that even ninja couldn\'t climb them — the name is perfectly apt.' },
      { ja: '加藤清正は非常時に備えて城内に銀杏の木を植え、壁の中に食料を蓄えたと伝えられている。', zhTw: '據傳加藤清正為應對緊急狀況在城內種植銀杏樹，並在牆壁中儲存糧食。', en: 'Katō Kiyomasa reportedly planted ginkgo trees inside the castle and stored food within the walls as emergency provisions.' },
      { ja: '2016年の熊本地震からの復旧工事は2037年の完了を目指しており、総費用は約634億円と見込まれている。', zhTw: '2016年熊本地震的復舊工程預計2037年完成，總費用估計約634億日圓。', en: 'Recovery from the 2016 Kumamoto earthquake is targeted for completion by 2037, with total costs estimated at approximately ¥63.4 billion.' },
    ],
    highlights: [
      { ja: '武者返しの石垣 — 城の最も象徴的な特徴である美しいカーブを描く石垣。', zhTw: '武者返石垣 — 城最具象徵性特徵的美麗弧線石垣。', en: 'Musha-gaeshi stone walls — the castle\'s most iconic feature, with their beautifully curved defensive walls.' },
      { ja: '宇土櫓 — 江戸時代から現存する貴重な建造物で、「第三の天守」とも呼ばれる。', zhTw: '宇土櫓 — 江戶時代留存至今的珍貴建築，又被稱為「第三天守」。', en: 'Uto turret — a precious original structure surviving from the Edo period, sometimes called "the third keep."' },
      { ja: '復旧工事の現場 — 伝統的な石垣修復技術を間近で見られる貴重な機会。', zhTw: '復舊工程現場 — 近距離觀察傳統石垣修復技術的珍貴機會。', en: 'Ongoing earthquake recovery site — a rare chance to observe traditional stone wall restoration techniques up close.' },
    ],
    architecture: [
      { ja: '武者返し（むしゃがえし）— 石垣の上部が急角度で反り返る独特の曲線は登攀を不可能にし、熊本城最大の特徴。', zhTw: '武者返 — 石垣上部以急角度反曲的獨特曲線使攀登成為不可能，是熊本城最大的特徵。', en: 'Musha-gaeshi — the distinctive curve where the upper stone walls angle steeply outward, making climbing impossible and defining Kumamoto Castle\'s character.' },
      { ja: '江戸時代から残る13棟の現存建造物 — 宇土櫓をはじめ、多くの重要文化財が現存。', zhTw: '從江戶時代留存的13棟現存建築 — 以宇土櫓為首，多處重要文化財現存。', en: 'Thirteen original structures surviving from the Edo period — including the Uto turret and multiple Important Cultural Properties.' },
      { ja: '1960年に再建された天守は歴史資料に基づく忠実な外観で、鉄筋コンクリート造ながら往時の威容を再現。', zhTw: '1960年重建的天守基於歷史資料忠實再現外觀，雖為鋼筋混凝土結構仍重現往昔威嚴。', en: 'The keep rebuilt in 1960 faithfully recreates the historical exterior based on archival records, reproducing the castle\'s former grandeur despite reinforced concrete construction.' },
    ],
  },
  {
    id: 'shuri',
    number: 100,
    regionId: 'kyushu',
    name: { ja: '首里城', zhTw: '首里城', en: 'Shuri Castle' },
    city: { ja: '那覇市', zhTw: '那霸市', en: 'Naha' },
    prefecture: { ja: '沖縄県', zhTw: '沖繩縣', en: 'Okinawa' },
    type: 'gusuku',
    designation: '世界遺産',
    position: { x: 20, y: 84 },
    illustration: { style: 'red', tiers: 3, color: '#c53d43', roofColor: '#8b1a1a' },
    goshuin: { bg: '#f5ede0', ink: '#8b1a1a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      {
        year: 1429,
        event: {
          ja: '尚巴志が三山（北山・中山・南山）を統一して琉球王国を建国し、首里城を王国の王城として整備。東アジア交易の中心として繁栄の礎を築いた。',
          zhTw: '尚巴志統一三山（北山、中山、南山）建立琉球王國，將首里城整備為王國王城。奠定了作為東亞貿易中心繁榮的基礎。',
          en: 'Shō Hashi unified the three kingdoms (Hokuzan, Chūzan, Nanzan) to found the Ryukyu Kingdom and established Shuri Castle as the royal palace, laying the foundations for prosperity as a center of East Asian trade.',
        },
      },
      {
        year: 1477,
        event: {
          ja: '尚真王が即位し、首里城の大規模な拡張を実施。守礼門や園比屋武御嶽石門を建造し、琉球王国の最盛期を築いた。',
          zhTw: '尚真王即位後大規模擴建首里城。建造守禮門與園比屋武御嶽石門，締造琉球王國的全盛時期。',
          en: 'King Shō Shin ascended the throne and dramatically expanded Shuri Castle, constructing the Shureimon gate and Sonohyan Utaki stone gate and ushering in the golden age of the Ryukyu Kingdom.',
        },
      },
      {
        year: 1728,
        event: {
          ja: '三司官・蔡温が王府の行政改革を推進し、山林管理や土木事業を通じて琉球の国力回復に尽力した。首里城は外交と文化の中心であり続けた。',
          zhTw: '三司官蔡溫推動王府行政改革，透過山林管理與土木事業致力恢復琉球國力。首里城持續作為外交與文化的中心。',
          en: 'Chief minister Sai On drove administrative reforms, working to restore Ryukyuan national strength through forestry management and public works; Shuri Castle remained the center of diplomacy and culture.',
        },
      },
      {
        year: 1945,
        event: {
          ja: '沖縄戦において日本軍の司令部が首里城地下に置かれ、激しい艦砲射撃により城は完全に破壊された。琉球王国の象徴は瓦礫と化した。',
          zhTw: '沖繩戰中日軍司令部設於首里城地下，猛烈艦砲射擊將城完全摧毀。琉球王國的象徵化為瓦礫。',
          en: 'During the Battle of Okinawa, the Japanese military headquartered beneath Shuri Castle; intense naval bombardment completely destroyed the castle, reducing the symbol of the Ryukyu Kingdom to rubble.',
        },
      },
      {
        year: 2019,
        event: {
          ja: '復元された正殿などが火災により再び焼失し、沖縄県民に大きな衝撃を与えた。現在、2026年の正殿復元完了を目指して再建工事が進められている。',
          zhTw: '復原的正殿等建築再次因火災焚毀，對沖繩縣民造成巨大衝擊。目前以2026年正殿復原完工為目標推進重建工程。',
          en: 'The reconstructed main hall was again destroyed by fire, deeply shocking the people of Okinawa; rebuilding is now underway with the goal of completing the main hall restoration by 2026.',
        },
      },
    ],
    figures: [
      {
        ja: '尚巴志', zhTw: '尚巴志', en: 'Shō Hashi',
        desc: {
          ja: '琉球の三山を統一して琉球王国を建国した初代国王で、首里城を王府として整備し、海洋交易国家の礎を築いた。',
          zhTw: '統一琉球三山建立琉球王國的初代國王，將首里城整備為王府，奠定海洋貿易國家的基礎。',
          en: 'The founding king of the Ryukyu Kingdom who unified the three Okinawan kingdoms, established Shuri Castle as the royal seat, and built the foundations of a maritime trading state.',
        },
      },
      {
        ja: '尚真王', zhTw: '尚真王', en: 'Shō Shin',
        desc: {
          ja: '琉球王国の第三代国王で、中央集権化を進め、首里城を大拡張して守礼門を建造するなど王国の黄金時代をもたらした。',
          zhTw: '琉球王國第三代國王，推動中央集權化，大規模擴建首里城並建造守禮門，帶來王國的黃金時代。',
          en: 'Third king of the Ryukyu Kingdom who centralized power, greatly expanded Shuri Castle, built the Shureimon gate, and brought about the kingdom\'s golden age.',
        },
      },
      {
        ja: '蔡温', zhTw: '蔡溫', en: 'Sai On',
        desc: {
          ja: '琉球王国の三司官（宰相）を務めた政治家で、行政改革・山林保護・治水事業などを通じて疲弊した王国の立て直しに尽力した。',
          zhTw: '擔任琉球王國三司官（宰相）的政治家，透過行政改革、山林保護、治水事業等致力重振疲弊的王國。',
          en: 'A statesman who served as chief minister (Sanshikan) of the Ryukyu Kingdom, working to revitalize the exhausted kingdom through administrative reform, forest conservation, and flood control projects.',
        },
      },
    ],
    trivia: [
      { ja: '中国と日本の建築様式が融合した独特の城で、琉球が海洋交易王国として両文化の影響を受けたことを物語る。', zhTw: '融合中國與日本建築樣式的獨特城堡，訴說著琉球作為海洋貿易王國受兩種文化影響的歷史。', en: 'A unique castle blending Chinese and Japanese architecture, reflecting Ryukyu\'s role as a maritime trading kingdom influenced by both cultures.' },
      { ja: '守礼門には「守礼之邦」（礼節の国）と記されており、二千円紙幣のデザインにも採用されている。', zhTw: '守禮門上書寫「守禮之邦」（禮節之國），也被採用為兩千日圓紙幣的設計。', en: 'The Shureimon gate bears the inscription "Land of Propriety" (守禮之邦) and is featured on Japan\'s ¥2,000 banknote.' },
      { ja: '現在進行中の再建では伝統的な琉球赤漆が使われ、木材はフィリピンから調達されている。', zhTw: '目前進行中的重建使用傳統琉球紅漆，木材從菲律賓採購。', en: 'The current reconstruction uses traditional Ryukyuan red lacquer, with timber sourced from the Philippines.' },
    ],
    highlights: [
      { ja: '守礼門 — 沖縄のシンボルであり、二千円札にも描かれた象徴的な門。', zhTw: '守禮門 — 沖繩的象徵，也描繪在兩千日圓紙幣上的標誌性門。', en: 'Shureimon Gate — the symbol of Okinawa, famously featured on the ¥2,000 banknote.' },
      { ja: '正殿（復元中）— 2019年の火災後、再建が進められている琉球王国の心臓部。', zhTw: '正殿（復原中）— 2019年火災後正在推進重建的琉球王國核心。', en: 'Main hall (under reconstruction) — the heart of the Ryukyu Kingdom, being rebuilt after the 2019 fire.' },
      { ja: '園比屋武御嶽石門 — 世界遺産に登録された神聖な拝所。', zhTw: '園比屋武御嶽石門 — 被登錄為世界遺產的神聖拜所。', en: 'Sonohyan Utaki stone gate — a sacred World Heritage worship site.' },
    ],
    architecture: [
      { ja: 'グスク様式 — 沖縄特有のサンゴ石灰岩を使った城壁で、本土の城郭とは全く異なる建築文化。', zhTw: '城（gusuku）樣式 — 使用沖繩特有珊瑚石灰岩的城牆，與本土城郭截然不同的建築文化。', en: 'Gusuku-style castle using coral limestone walls unique to Okinawa — an entirely different architectural tradition from mainland Japanese castles.' },
      { ja: '中国風の赤漆と龍柱 — 本土の城にはない華やかな朱塗りと龍の装飾が琉球独自の文化を表現。', zhTw: '中國風的紅漆與龍柱 — 本土城郭所沒有的華麗朱漆與龍裝飾，表現琉球獨自的文化。', en: 'Chinese-influenced red lacquer and dragon pillars — vivid vermilion coating and dragon motifs unlike any mainland Japanese castle, expressing Ryukyuan cultural identity.' },
      { ja: '自然の地形に沿って曲線を描く石垣 — 琉球石灰岩を巧みに積んだ曲線美は琉球の石積み技術の粋。', zhTw: '沿自然地形描繪曲線的石垣 — 巧妙堆砌琉球石灰岩的曲線美是琉球石砌技術的精華。', en: 'Curved stone walls following natural topography — the graceful curves of skillfully stacked Ryukyuan limestone represent the pinnacle of Ryukyuan masonry.' },
    ],
  },,
// ── 北海道 ──
  {
    id: 'nemuro-chashi', number: 1, regionId: 'hokkaido',
    name: { ja: '根室半島チャシ跡群', zhTw: '根室半島チャシ跡群', en: 'Nemuro Peninsula Chashi' },
    city: { ja: '根室市', zhTw: '根室市', en: 'Nemuro' },
    prefecture: { ja: '北海道', zhTw: '北海道', en: 'Hokkaido' },
    type: 'chashi', designation: '国指定史跡',
    position: { x: 88, y: 10 },
    illustration: { style: 'ancient', tiers: 1, color: '#5b9a8b', roofColor: '#3d5c4a' },
    goshuin: { bg: '#f0e6d3', ink: '#2d4a3e', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1500, event: { ja: 'アイヌ民族が根室半島の断崖上に防御・祭祀用のチャシ（砦）群を築いた。', zhTw: '愛努民族在根室半島斷崖上築建防禦及祭祀用的チャシ（堡壘）群。', en: 'The Ainu people built chashi (fortified sites) on the cliffs of the Nemuro Peninsula for defense and ceremonies.' } },
      { year: 1789, event: { ja: 'クナシリ・メナシの戦いの時代、チャシは北方防衛の拠点として機能していた。', zhTw: '國後‧目梨之戰時期，チャシ作為北方防禦據點發揮功能。', en: 'During the Kunashiri-Menashi Rebellion, chashi sites functioned as northern defense outposts.' } },
      { year: 1983, event: { ja: '根室半島の24箇所のチャシ跡群が国の史跡に指定された。', zhTw: '根室半島24處チャシ遺跡群被指定為國家史跡。', en: 'Twenty-four chashi sites on the Nemuro Peninsula were designated National Historic Sites.' } },
    ],
    figures: [
      { ja: 'アイヌの首長たち', zhTw: '愛努首長們', en: 'Ainu Chiefs', desc: { ja: 'チャシを築き交易と防衛の拠点として利用したアイヌの指導者たち。', zhTw: '築建チャシ作為貿易與防禦據點的愛努族領袖。', en: 'Ainu leaders who built and used chashi as centers of trade and defense.' } },
      { ja: '松前藩', zhTw: '松前藩', en: 'Matsumae Domain', desc: { ja: '蝦夷地を支配しアイヌとの交易を管理した藩。', zhTw: '統治蝦夷地並管理與愛努族貿易的藩。', en: 'The domain that governed Ezo and managed trade with the Ainu.' } },
    ],
    trivia: [
      { ja: '日本100名城スタンプラリーで最も到達困難な城として有名。', zhTw: '以日本100名城蓋章之旅中最難到達的城聞名。', en: 'Known as the hardest castle to reach in the Japan 100 Famous Castles stamp rally.' },
      { ja: 'チャシはアイヌ語で「柵囲い」を意味し、砦・祭祀・見張りに使われた。', zhTw: 'チャシ在愛努語中意為「柵欄」，用於堡壘、祭祀與瞭望。', en: '"Chashi" means "palisade" in Ainu; sites served as forts, ceremonial grounds, and lookouts.' },
    ],
    highlights: [
      { ja: 'ヲンネモトチャシ — 最も保存状態が良く海を見渡す絶景のチャシ跡。', zhTw: 'ヲンネモトチャシ — 保存最完好、可俯瞰大海的チャシ遺跡。', en: 'Onnemoto Chashi — the best-preserved site with stunning ocean panoramas.' },
      { ja: '納沙布岬と北方領土の眺望 — 日本最東端の岬から国後島を望む。', zhTw: '納沙布岬與北方領土眺望 — 從日本最東端海岬遠眺國後島。', en: 'Cape Nosappu views — see Kunashiri Island from Japan\'s easternmost point.' },
    ],
    architecture: [
      { ja: '半円形や方形の壕と土塁で構成されるアイヌ独自の築城様式。', zhTw: '由半圓形或方形壕溝與土壘構成的愛努族獨特築城樣式。', en: 'Unique Ainu fortification featuring semicircular or rectangular moats and earthworks.' },
      { ja: '海食崖の自然地形を最大限に活用した防御構造。', zhTw: '最大限度利用海蝕崖自然地形的防禦結構。', en: 'Defense leveraging natural sea-cliff terrain to maximum advantage.' },
    ],
  },
  {
    id: 'matsumae', number: 3, regionId: 'hokkaido',
    name: { ja: '松前城', zhTw: '松前城', en: 'Matsumae Castle' },
    city: { ja: '松前町', zhTw: '松前町', en: 'Matsumae' },
    prefecture: { ja: '北海道', zhTw: '北海道', en: 'Hokkaido' },
    type: 'hirayama', designation: '重要文化財',
    position: { x: 72, y: 20 },
    illustration: { style: 'classic', tiers: 2, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1606, event: { ja: '松前慶広が福山に館を築き、松前藩の拠点とした。', zhTw: '松前慶廣在福山築館，作為松前藩的據點。', en: 'Matsumae Yoshihiro built a fortified residence at Fukuyama as the seat of the Matsumae domain.' } },
      { year: 1854, event: { ja: 'ロシアの脅威に備え幕府の命で近代的な城郭に改築され、日本最後の日本式城郭となった。', zhTw: '為防備俄羅斯威脅，奉幕府之命改建為近代城郭，成為日本最後的日式城郭。', en: 'Rebuilt as a modern fortress by shogunate order against the Russian threat — Japan\'s last traditional Japanese-style castle.' } },
      { year: 1868, event: { ja: '戊辰戦争で旧幕府軍の土方歳三率いる軍勢に攻められ落城した。', zhTw: '戊辰戰爭中被土方歲三率領的舊幕府軍攻陷。', en: 'Fell to former shogunate forces led by Hijikata Toshizō during the Boshin War.' } },
    ],
    figures: [
      { ja: '松前慶広', zhTw: '松前慶廣', en: 'Matsumae Yoshihiro', desc: { ja: '松前藩初代藩主で蝦夷地におけるアイヌ交易の独占権を獲得した。', zhTw: '松前藩初代藩主，取得蝦夷地愛努貿易的獨佔權。', en: 'First lord of Matsumae who secured a monopoly on Ainu trade in Ezo.' } },
      { ja: '松前崇広', zhTw: '松前崇廣', en: 'Matsumae Takahiro', desc: { ja: '幕末に城の近代化改築を主導し、海防強化に努めた藩主。', zhTw: '幕末主導城郭近代化改建、致力強化海防的藩主。', en: 'Late Edo lord who led the castle\'s modernization and strengthened coastal defenses.' } },
    ],
    trivia: [
      { ja: '北海道唯一の日本式城郭で、城下には約250種1万本の桜が咲く名所。', zhTw: '北海道唯一的日式城郭，城下約250種一萬棵櫻花綻放的名所。', en: 'Hokkaido\'s only Japanese-style castle; its grounds feature 10,000 cherry trees of 250 varieties.' },
      { ja: '日本100名城で最も北に位置する日本式城郭。', zhTw: '日本100名城中位置最北的日式城郭。', en: 'The northernmost Japanese-style castle in the 100 Famous Castles list.' },
    ],
    highlights: [
      { ja: '桜まつり（4〜5月）— 北海道随一の桜の名所として賑わう。', zhTw: '櫻花祭（4至5月）— 北海道首屈一指的賞櫻名所。', en: 'Cherry blossom festival (April–May) — Hokkaido\'s premier hanami destination.' },
      { ja: '松前藩屋敷 — 城下町を再現したテーマパーク。', zhTw: '松前藩屋敷 — 重現城下町的主題園區。', en: 'Matsumae Clan Mansion — a theme park recreating the castle town.' },
    ],
    architecture: [
      { ja: '幕末に築かれた日本最後の日本式天守を持つ城。天守は1949年に焼失し1961年に再建。', zhTw: '幕末築建的日本最後一座日式天守城郭。天守於1949年燒毀，1961年重建。', en: 'Japan\'s last traditional castle keep, built in the Bakumatsu; the keep burned in 1949 and was rebuilt in 1961.' },
      { ja: '本丸御門は江戸時代から現存する重要文化財。', zhTw: '本丸御門為江戶時代留存至今的重要文化財。', en: 'The honmaru gate survives from the Edo period as an Important Cultural Property.' },
    ],
  },
  // ── 東北 ──
  {
    id: 'ne', number: 5, regionId: 'tohoku',
    name: { ja: '根城', zhTw: '根城', en: 'Ne Castle' },
    city: { ja: '八戸市', zhTw: '八戶市', en: 'Hachinohe' },
    prefecture: { ja: '青森県', zhTw: '青森縣', en: 'Aomori' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 80, y: 30 },
    illustration: { style: 'classic', tiers: 1, color: '#f5f0e8', roofColor: '#3d5c4a' },
    goshuin: { bg: '#f5ede0', ink: '#3d5c4a', seal: '#c53d43', crest: '#7a6520' },
    history: [
      { year: 1334, event: { ja: '南部師行が南朝方の拠点として根城を築いた。', zhTw: '南部師行築建根城作為南朝方的據點。', en: 'Nanbu Moroyuki built Ne Castle as a stronghold for the Southern Court.' } },
      { year: 1627, event: { ja: '南部氏が遠野に移封となり根城は廃城となった。', zhTw: '南部氏移封至遠野，根城廢城。', en: 'The Nanbu clan was transferred to Tōno and Ne Castle was abandoned.' } },
      { year: 1941, event: { ja: '根城跡が国の史跡に指定され、後に主殿などが復原された。', zhTw: '根城遺跡被指定為國家史跡，其後主殿等建築獲得復原。', en: 'Ne Castle ruins were designated a National Historic Site; the main hall was later reconstructed.' } },
    ],
    figures: [
      { ja: '南部師行', zhTw: '南部師行', en: 'Nanbu Moroyuki', desc: { ja: '南朝の忠臣として根城を築き、北奥羽の南朝勢力を率いた武将。', zhTw: '作為南朝忠臣築建根城，率領北奧羽南朝勢力的武將。', en: 'A Southern Court loyalist who built Ne Castle and led pro-Southern forces in northern Mutsu.' } },
      { ja: '北畠顕家', zhTw: '北畠顯家', en: 'Kitabatake Akiie', desc: { ja: '奥州鎮守府将軍として南部氏と共に南朝勢力を指揮した公家武将。', zhTw: '以奧州鎮守府將軍身分與南部氏共同指揮南朝勢力的公家武將。', en: 'Court noble and general who commanded Southern Court forces alongside the Nanbu clan.' } },
    ],
    trivia: [
      { ja: '「根城」の名は「根本の城」に由来し、南部氏の本拠地を意味する。', zhTw: '「根城」之名源於「根本之城」，意指南部氏的根據地。', en: 'The name "Ne" means "root/base castle," signifying it as the Nanbu clan\'s home fortress.' },
      { ja: '復原された中世の主殿や工房で当時の生活が体感できる。', zhTw: '在復原的中世主殿與工坊可以體驗當時的生活。', en: 'Reconstructed medieval halls and workshops let visitors experience life in the Muromachi period.' },
    ],
    highlights: [
      { ja: '復原された本丸主殿 — 中世武士の居館を忠実に再現。', zhTw: '復原的本丸主殿 — 忠實再現中世武士居館。', en: 'Reconstructed main hall — a faithful recreation of a medieval samurai residence.' },
      { ja: '広大な城跡公園 — 八戸市民の憩いの場として四季折々の景色を楽しめる。', zhTw: '廣闊的城跡公園 — 八戶市民休憩之地，可享四季景色。', en: 'Spacious castle park — a beloved local retreat with beautiful seasonal scenery.' },
    ],
    architecture: [
      { ja: '中世の城館形式で、堀と土塁に囲まれた曲輪群で構成される。', zhTw: '中世城館形式，由壕溝與土壘環繞的曲輪群構成。', en: 'Medieval fortified residence style, with compounds surrounded by moats and earthen ramparts.' },
      { ja: '本丸・中館・東善寺館など8つの曲輪が連なる連郭式の縄張り。', zhTw: '由本丸、中館、東善寺館等8個曲輪相連的連郭式配置。', en: 'Eight linked compounds including honmaru, naka-yakata, and Tōzenji-yakata in a chain layout.' },
    ],
  },
  {
    id: 'morioka', number: 6, regionId: 'tohoku',
    name: { ja: '盛岡城', zhTw: '盛岡城', en: 'Morioka Castle' },
    city: { ja: '盛岡市', zhTw: '盛岡市', en: 'Morioka' },
    prefecture: { ja: '岩手県', zhTw: '岩手縣', en: 'Iwate' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 78, y: 34 },
    illustration: { style: 'classic', tiers: 1, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#e8dfd0', ink: '#2a2a2a', seal: '#b83a3a', crest: '#8b6914' },
    history: [
      { year: 1597, event: { ja: '南部信直が豊臣秀吉の許可を得て盛岡城の築城を開始した。', zhTw: '南部信直獲豐臣秀吉許可，開始築建盛岡城。', en: 'Nanbu Naonao began building Morioka Castle with Toyotomi Hideyoshi\'s permission.' } },
      { year: 1633, event: { ja: '三代にわたる工事を経て盛岡城がほぼ完成した。', zhTw: '歷經三代工程，盛岡城大致完工。', en: 'After three generations of construction, Morioka Castle was largely completed.' } },
      { year: 1874, event: { ja: '廃城令により建物が取り壊され、石垣と堀のみが残された。', zhTw: '因廢城令建築被拆除，僅留石垣與護城河。', en: 'Buildings were demolished under the castle abolition order; only stone walls and moats remain.' } },
    ],
    figures: [
      { ja: '南部信直', zhTw: '南部信直', en: 'Nanbu Naonao', desc: { ja: '南部藩の基礎を築き盛岡城の建設を始めた初代藩主。', zhTw: '奠定南部藩基礎、開始興建盛岡城的初代藩主。', en: 'First lord of Morioka domain who laid its foundations and began castle construction.' } },
      { ja: '南部利直', zhTw: '南部利直', en: 'Nanbu Toshinao', desc: { ja: '父の遺志を継ぎ盛岡城の築城を推進した二代藩主。', zhTw: '繼承父親遺志推動盛岡城築建的第二代藩主。', en: 'Second lord who continued his father\'s vision and advanced the castle\'s construction.' } },
    ],
    trivia: [
      { ja: '花崗岩の美しい石垣が特徴で「石垣の名城」と称される。', zhTw: '以美麗的花崗岩石垣為特徵，被稱為「石垣名城」。', en: 'Renowned as a "castle of stone walls" for its beautiful granite stonework.' },
      { ja: '石垣の割れ目から生えた「石割桜」は盛岡のシンボルとして天然記念物に指定されている。', zhTw: '從石垣裂縫中生長的「石割櫻」是盛岡的象徵，被指定為天然紀念物。', en: 'A cherry tree growing from a crack in the stone wall — the "Stone-splitting Cherry" — is a designated Natural Monument.' },
    ],
    highlights: [
      { ja: '三段に積まれた花崗岩の石垣 — 東北随一の美しさを誇る。', zhTw: '三層堆疊的花崗岩石垣 — 以東北第一的美麗著稱。', en: 'Three-tiered granite stone walls — considered the finest in the Tōhoku region.' },
      { ja: '岩手公園の紅葉 — 秋は石垣と紅葉のコントラストが見事。', zhTw: '岩手公園的紅葉 — 秋季石垣與紅葉的對比十分壯觀。', en: 'Autumn foliage in Iwate Park — stunning contrast of stone walls and red leaves.' },
    ],
    architecture: [
      { ja: '花崗岩を用いた総石垣の城で、東北では珍しい本格的な近世城郭。', zhTw: '使用花崗岩的全石垣城郭，在東北是罕見的正統近世城郭。', en: 'A fully stone-walled castle using granite — a rare, full-scale early-modern fortification in Tōhoku.' },
      { ja: '本丸・二の丸・三の丸の三重の曲輪と内堀・中堀で構成される。', zhTw: '由本丸、二之丸、三之丸三重曲輪與內堀、中堀構成。', en: 'Composed of three concentric compounds (honmaru, ninomaru, sannomaru) with inner and middle moats.' },
    ],
  },
  {
    id: 'taga', number: 7, regionId: 'tohoku',
    name: { ja: '多賀城', zhTw: '多賀城', en: 'Taga Castle' },
    city: { ja: '多賀城市', zhTw: '多賀城市', en: 'Tagajō' },
    prefecture: { ja: '宮城県', zhTw: '宮城縣', en: 'Miyagi' },
    type: 'ancient-fortress', designation: '特別史跡',
    position: { x: 76, y: 38 },
    illustration: { style: 'ancient', tiers: 1, color: '#8b7e6b', roofColor: '#5a3825' },
    goshuin: { bg: '#e8dfd0', ink: '#3a2518', seal: '#c53d43', crest: '#7a6520' },
    history: [
      { year: 724, event: { ja: '大野東人により陸奥国府として多賀城が創建された。', zhTw: '大野東人創建多賀城作為陸奧國府。', en: 'Ōno no Azumabito founded Taga Castle as the provincial capital of Mutsu.' } },
      { year: 780, event: { ja: '伊治呰麻呂の乱で多賀城が焼き討ちされたが、のち再建された。', zhTw: '伊治呰麻呂之亂中多賀城被焚毀，後來重建。', en: 'Taga Castle was burned in the Revolt of Koreharu no Azamaro but later rebuilt.' } },
      { year: 869, event: { ja: '貞観地震と大津波で甚大な被害を受けた。', zhTw: '因貞觀地震與大海嘯遭受巨大損害。', en: 'Suffered catastrophic damage from the Jōgan earthquake and tsunami.' } },
    ],
    figures: [
      { ja: '大野東人', zhTw: '大野東人', en: 'Ōno no Azumabito', desc: { ja: '按察使として多賀城を築き、蝦夷統治の前線基地を確立した。', zhTw: '以按察使身分築建多賀城，確立蝦夷統治的前線基地。', en: 'Inspector who built Taga Castle as the frontline base for governing the Emishi lands.' } },
      { ja: '坂上田村麻呂', zhTw: '坂上田村麻呂', en: 'Sakanoue no Tamuramaro', desc: { ja: '征夷大将軍として蝦夷征討を行い、多賀城を拠点に北方を平定した。', zhTw: '以征夷大將軍身分征討蝦夷，以多賀城為據點平定北方。', en: 'Shōgun who subdued the Emishi using Taga Castle as his base of operations.' } },
    ],
    trivia: [
      { ja: '日本三大史跡の一つに数えられ、古代東北の政治・軍事の中枢だった。', zhTw: '被列為日本三大史跡之一，是古代東北的政治與軍事中樞。', en: 'One of Japan\'s three great historic sites; it was the political and military center of ancient Tōhoku.' },
      { ja: '762年に建てられた「多賀城碑」は日本三古碑の一つとして重要文化財に指定。', zhTw: '762年建立的「多賀城碑」為日本三古碑之一，被指定為重要文化財。', en: 'The 762 Taga Castle stele is one of Japan\'s three oldest stone inscriptions, designated an Important Cultural Property.' },
    ],
    highlights: [
      { ja: '政庁跡 — 復元された礎石と広大な跡地が古代の威容を偲ばせる。', zhTw: '政廳遺跡 — 復原的礎石與廣闊遺址令人遙想古代的威容。', en: 'Government hall ruins — restored foundation stones evoke the grandeur of the ancient capital.' },
      { ja: '多賀城碑（壺碑）— 松尾芭蕉も訪れた歴史的石碑。', zhTw: '多賀城碑（壺碑）— 松尾芭蕉也曾造訪的歷史石碑。', en: 'Taga Castle stele — the historic inscription that moved even Matsuo Bashō to tears.' },
    ],
    architecture: [
      { ja: '築地塀と材木塀で囲まれた約900m四方の広大な城柵。', zhTw: '由築地牆與木柵圍繞的約900公尺四方的廣大城柵。', en: 'A vast 900-meter-square fortress enclosed by earthen and timber walls.' },
      { ja: '政庁を中心に南門・外郭南門が一直線に配置された計画的な都市設計。', zhTw: '以政廳為中心，南門與外郭南門一直線配置的計畫性都市設計。', en: 'A planned layout with the government hall, south gate, and outer south gate aligned on a central axis.' },
    ],
  },
  {
    id: 'kubota', number: 9, regionId: 'tohoku',
    name: { ja: '久保田城', zhTw: '久保田城', en: 'Kubota Castle' },
    city: { ja: '秋田市', zhTw: '秋田市', en: 'Akita' },
    prefecture: { ja: '秋田県', zhTw: '秋田縣', en: 'Akita' },
    type: 'hirayama', designation: '県指定史跡',
    position: { x: 74, y: 36 },
    illustration: { style: 'classic', tiers: 2, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#9a7030' },
    history: [
      { year: 1604, event: { ja: '佐竹義宣が常陸から秋田に転封となり久保田城の築城を開始した。', zhTw: '佐竹義宣從常陸移封至秋田，開始築建久保田城。', en: 'Satake Yoshinobu was transferred from Hitachi to Akita and began building Kubota Castle.' } },
      { year: 1633, event: { ja: '石垣を用いず土塁と堀を主体とした独特の城郭が完成した。', zhTw: '不使用石垣、以土壘與護城河為主體的獨特城郭完工。', en: 'The castle was completed with its distinctive design using earthen walls instead of stone.' } },
      { year: 1880, event: { ja: '大火で城内の建物が焼失し、跡地は千秋公園として整備された。', zhTw: '大火燒毀城內建築，遺址被整建為千秋公園。', en: 'A great fire destroyed the castle buildings; the site was later developed into Senshu Park.' } },
    ],
    figures: [
      { ja: '佐竹義宣', zhTw: '佐竹義宣', en: 'Satake Yoshinobu', desc: { ja: '関ヶ原後に秋田へ転封され、久保田城を築いた佐竹藩初代藩主。', zhTw: '關原之戰後移封秋田、築建久保田城的佐竹藩初代藩主。', en: 'First lord of Akita who built Kubota Castle after being relocated following Sekigahara.' } },
      { ja: '佐竹義和', zhTw: '佐竹義和', en: 'Satake Yoshimasa', desc: { ja: '藩政改革を行い秋田藩の財政を立て直した九代藩主。', zhTw: '推行藩政改革、重整秋田藩財政的第九代藩主。', en: 'Ninth lord who reformed domain governance and restored Akita\'s finances.' } },
    ],
    trivia: [
      { ja: '石垣を持たない珍しい城で、幕府への遠慮から質素に造られたとされる。', zhTw: '不設石垣的珍貴城郭，據說是出於對幕府的謙遜而樸素建造。', en: 'A rare castle without stone walls — said to have been built modestly out of deference to the shogunate.' },
      { ja: '千秋公園の桜とツツジは秋田を代表する花の名所。', zhTw: '千秋公園的櫻花與杜鵑花是秋田代表性的賞花名所。', en: 'Senshu Park\'s cherry blossoms and azaleas are Akita\'s most famous floral attractions.' },
    ],
    highlights: [
      { ja: '御隅櫓 — 再建された三階の物見櫓から秋田市街を一望。', zhTw: '御隅櫓 — 從重建的三層瞭望櫓俯瞰秋田市區。', en: 'Reconstructed corner turret — panoramic views of Akita city from three stories up.' },
      { ja: '千秋公園の四季 — 桜・蓮・紅葉・雪景色と四季を通じて楽しめる。', zhTw: '千秋公園四季 — 櫻花、蓮花、紅葉、雪景，四季皆可欣賞。', en: 'Four seasons in Senshu Park — cherry blossoms, lotus, autumn leaves, and snow scenes.' },
    ],
    architecture: [
      { ja: '石垣を使わず土塁と水堀で防御する東北特有の築城方式。', zhTw: '不使用石垣，以土壘與水堀防禦的東北特有築城方式。', en: 'Tōhoku-style fortification using earthen ramparts and water moats instead of stone walls.' },
      { ja: '天守は建てられず、本丸の御出書院が藩の政庁として機能した。', zhTw: '未建天守，本丸的御出書院作為藩的政廳使用。', en: 'No keep was built; the honmaru\'s audience hall served as the domain\'s administrative center.' },
    ],
  },
  {
    id: 'yamagata', number: 10, regionId: 'tohoku',
    name: { ja: '山形城', zhTw: '山形城', en: 'Yamagata Castle' },
    city: { ja: '山形市', zhTw: '山形市', en: 'Yamagata' },
    prefecture: { ja: '山形県', zhTw: '山形縣', en: 'Yamagata' },
    type: 'hirajiro', designation: '国指定史跡',
    position: { x: 72, y: 40 },
    illustration: { style: 'classic', tiers: 1, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2a2a2a', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1357, event: { ja: '斯波兼頼が山形に城を築き、最上氏の祖となった。', zhTw: '斯波兼賴在山形築城，成為最上氏之祖。', en: 'Shiba Kaneyori built a castle in Yamagata, founding the Mogami clan.' } },
      { year: 1592, event: { ja: '最上義光が大改修を行い、東北最大級の平城に拡張した。', zhTw: '最上義光進行大規模改建，擴建為東北最大級的平城。', en: 'Mogami Yoshiaki carried out a massive expansion, creating one of the largest flatland castles in Tōhoku.' } },
      { year: 1622, event: { ja: '最上氏改易後に城は縮小され、以後は譜代大名の居城となった。', zhTw: '最上氏改易後城郭縮小，此後成為譜代大名的居城。', en: 'After the Mogami clan\'s removal, the castle was downsized and passed to fudai daimyō.' } },
    ],
    figures: [
      { ja: '最上義光', zhTw: '最上義光', en: 'Mogami Yoshiaki', desc: { ja: '出羽国を統一し山形城を東北有数の巨城に拡張した戦国大名。', zhTw: '統一出羽國、將山形城擴建為東北數一數二大城的戰國大名。', en: 'Sengoku lord who unified Dewa Province and expanded Yamagata into one of Tōhoku\'s largest castles.' } },
      { ja: '斯波兼頼', zhTw: '斯波兼賴', en: 'Shiba Kaneyori', desc: { ja: '山形城の原型を築いた最上氏の始祖。', zhTw: '築建山形城原型的最上氏始祖。', en: 'Founder of the Mogami clan who built the original Yamagata Castle.' } },
    ],
    trivia: [
      { ja: '別名「霞城」は、関ヶ原の戦いの折に城が霞に包まれ敵を欺いたことに由来する。', zhTw: '別名「霞城」源於關原之戰時城被霞霧包圍、迷惑敵軍的傳說。', en: 'Its alias "Kajō" (Mist Castle) comes from a legend that mist concealed the castle during the Battle of Sekigahara.' },
      { ja: '面積では東北最大、全国でも5番目の規模を持つ広大な城跡。', zhTw: '面積為東北最大，全國第5大規模的廣闊城跡。', en: 'The largest castle site in Tōhoku by area and fifth largest in all of Japan.' },
    ],
    highlights: [
      { ja: '復原された二の丸東大手門 — 木造で忠実に再建された壮大な櫓門。', zhTw: '復原的二之丸東大手門 — 以木造忠實重建的壯觀櫓門。', en: 'Reconstructed ninomaru east gate — a grand turret gate faithfully rebuilt in wood.' },
      { ja: '霞城公園の桜 — 堀沿いに約1,500本の桜が咲き誇る。', zhTw: '霞城公園的櫻花 — 沿護城河約1,500棵櫻花盛開。', en: 'Kajō Park cherry blossoms — 1,500 trees bloom along the moats.' },
    ],
    architecture: [
      { ja: '本丸・二の丸・三の丸の三重の堀と土塁を持つ輪郭式の縄張り。', zhTw: '擁有本丸、二之丸、三之丸三重護城河與土壘的輪郭式配置。', en: 'Concentric layout with triple moats and earthworks around honmaru, ninomaru, and sannomaru.' },
      { ja: '本丸の石垣は野面積みで、現在一文字門の復原工事が進行中。', zhTw: '本丸石垣為野面積砌法，目前一文字門的復原工程進行中。', en: 'Honmaru walls use rough-stacked stonework; restoration of the Ichimonji Gate is underway.' },
    ],
  },
  {
    id: 'nihonmatsu', number: 11, regionId: 'tohoku',
    name: { ja: '二本松城', zhTw: '二本松城', en: 'Nihonmatsu Castle' },
    city: { ja: '二本松市', zhTw: '二本松市', en: 'Nihonmatsu' },
    prefecture: { ja: '福島県', zhTw: '福島縣', en: 'Fukushima' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 76, y: 44 },
    illustration: { style: 'classic', tiers: 2, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#d45b3e', crest: '#8b6914' },
    history: [
      { year: 1414, event: { ja: '畠山満泰が二本松の地に城を築いた。', zhTw: '畠山滿泰在二本松築城。', en: 'Hatakeyama Mitsuyasu built a castle at Nihonmatsu.' } },
      { year: 1643, event: { ja: '丹羽光重が入封し、近世城郭として大改修を行った。', zhTw: '丹羽光重入封，進行近世城郭的大規模改建。', en: 'Niwa Mitsushige took over and carried out a major renovation into an early-modern castle.' } },
      { year: 1868, event: { ja: '戊辰戦争で少年兵「二本松少年隊」が奮戦するも落城した。', zhTw: '戊辰戰爭中少年兵「二本松少年隊」奮戰但仍落城。', en: 'During the Boshin War, the teenage "Nihonmatsu Boys\' Brigade" fought bravely but the castle fell.' } },
    ],
    figures: [
      { ja: '丹羽光重', zhTw: '丹羽光重', en: 'Niwa Mitsushige', desc: { ja: '二本松藩初代藩主として城下町の基盤を整備した。', zhTw: '身為二本松藩初代藩主，整備了城下町的基礎。', en: 'First lord of Nihonmatsu who developed the castle town\'s infrastructure.' } },
      { ja: '二本松少年隊', zhTw: '二本松少年隊', en: 'Nihonmatsu Boys\' Brigade', desc: { ja: '戊辰戦争で13〜17歳の少年たちが藩を守るために出陣し、多くが戦死した。', zhTw: '戊辰戰爭中13至17歲的少年們為守護藩而出征，許多人戰死。', en: 'Boys aged 13–17 who marched to defend their domain in the Boshin War; many perished in battle.' } },
    ],
    trivia: [
      { ja: '城跡全体が菊人形展の会場となる「二本松の菊人形」は日本最大級の菊祭り。', zhTw: '整個城跡作為菊人偶展會場的「二本松菊人偶」是日本最大級的菊花祭。', en: 'The castle grounds host the Nihonmatsu Chrysanthemum Doll Festival, one of Japan\'s largest.' },
      { ja: '二本松少年隊の悲劇は白虎隊と並び戊辰戦争の悲話として語り継がれている。', zhTw: '二本松少年隊的悲劇與白虎隊並列為戊辰戰爭的悲壯故事流傳至今。', en: 'The tragedy of the Boys\' Brigade is remembered alongside the Byakkotai as a poignant Boshin War story.' },
    ],
    highlights: [
      { ja: '本丸石垣からの眺望 — 安達太良山と阿武隈川の絶景。', zhTw: '從本丸石垣眺望安達太良山與阿武隈川的絕景。', en: 'Views from the honmaru walls — Mt. Adatara and the Abukuma River panorama.' },
      { ja: '箕輪門 — 復元された壮大な櫓門は城のシンボル。', zhTw: '箕輪門 — 復原的壯觀櫓門為城的象徵。', en: 'Minowa Gate — the reconstructed turret gate serves as the castle\'s symbol.' },
    ],
    architecture: [
      { ja: '山頂の本丸と山麓の居館を組み合わせた典型的な平山城。', zhTw: '結合山頂本丸與山麓居館的典型平山城。', en: 'A classic hilltop castle combining a mountaintop honmaru with a foothill residence.' },
      { ja: '穴太衆が手掛けたとされる野面積みの石垣が本丸周辺に残る。', zhTw: '據傳由穴太眾砌築的野面積石垣殘存於本丸周圍。', en: 'Rough-stacked stone walls attributed to the Anō stoneworking guild survive around the honmaru.' },
    ],
  },
  {
    id: 'aizuwakamatsu', number: 12, regionId: 'tohoku',
    name: { ja: '会津若松城', zhTw: '會津若松城', en: 'Aizu-Wakamatsu Castle' },
    city: { ja: '会津若松市', zhTw: '會津若松市', en: 'Aizu-Wakamatsu' },
    prefecture: { ja: '福島県', zhTw: '福島縣', en: 'Fukushima' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 72, y: 42 },
    illustration: { style: 'classic', tiers: 5, color: '#f5f0e8', roofColor: '#c53d43' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1384, event: { ja: '葦名直盛が東黒川館を築き、後の会津若松城の原型となった。', zhTw: '蘆名直盛築建東黑川館，成為後來會津若松城的原型。', en: 'Ashina Naomori built Higashi-Kurokawa residence, the predecessor of Aizu-Wakamatsu Castle.' } },
      { year: 1593, event: { ja: '蒲生氏郷が七層の天守を持つ近世城郭に大改修し「鶴ヶ城」と名付けた。', zhTw: '蒲生氏鄉大規模改建為擁有七層天守的近世城郭，命名為「鶴城」。', en: 'Gamō Ujisato transformed it into a major castle with a seven-story keep, naming it "Tsuruga Castle."' } },
      { year: 1868, event: { ja: '戊辰戦争で約一ヶ月の籠城戦を耐え抜いたが開城。白虎隊の悲劇でも知られる。', zhTw: '戊辰戰爭中堅守約一個月的籠城戰後開城。亦以白虎隊的悲劇聞名。', en: 'Withstood a month-long siege in the Boshin War before surrendering; also known for the Byakkotai tragedy.' } },
    ],
    figures: [
      { ja: '蒲生氏郷', zhTw: '蒲生氏鄉', en: 'Gamō Ujisato', desc: { ja: '会津を大幅に発展させ、壮大な天守を築いた名将。茶人・文化人としても知られる。', zhTw: '大幅發展會津、築建壯觀天守的名將。亦以茶人及文化人聞名。', en: 'A brilliant lord who developed Aizu and built the grand keep; also known as a tea master and patron of culture.' } },
      { ja: '松平容保', zhTw: '松平容保', en: 'Matsudaira Katamori', desc: { ja: '京都守護職を務め、幕末に忠義を貫いた会津藩最後の藩主。', zhTw: '擔任京都守護職、在幕末貫徹忠義的會津藩最後藩主。', en: 'Last lord of Aizu who served as Kyoto\'s Military Governor and maintained unwavering loyalty to the shogunate.' } },
    ],
    trivia: [
      { ja: '2011年に赤瓦に葺き替えられ、幕末当時の姿が復元された日本唯一の赤瓦天守。', zhTw: '2011年換鋪紅瓦，復原幕末當時樣貌，為日本唯一的紅瓦天守。', en: 'In 2011 the keep was re-roofed with red tiles, restoring its Bakumatsu appearance — Japan\'s only red-tiled castle keep.' },
      { ja: '白虎隊は飯盛山から城が燃えていると誤認し、19名が自刃した悲劇で知られる。', zhTw: '白虎隊從飯盛山誤認城池失火，19名隊員自刃的悲劇廣為人知。', en: 'The Byakkotai (White Tiger Brigade) mistakenly thought the castle was burning and 19 members took their own lives on Iimoriyama.' },
    ],
    highlights: [
      { ja: '赤瓦の天守 — 全国唯一の赤瓦天守は他に類を見ない美しさ。', zhTw: '紅瓦天守 — 全國唯一的紅瓦天守，美麗獨一無二。', en: 'Red-tiled keep — Japan\'s only castle with red roof tiles, strikingly beautiful.' },
      { ja: '飯盛山と白虎隊記念館 — 城から見える悲劇の地。', zhTw: '飯盛山與白虎隊紀念館 — 從城可見的悲劇之地。', en: 'Iimoriyama and Byakkotai Memorial — the tragic site visible from the castle.' },
    ],
    architecture: [
      { ja: '五層の天守は1965年にRC造で再建。2011年に赤瓦に復元された。', zhTw: '五層天守於1965年以鋼筋混凝土重建，2011年復原紅瓦。', en: 'The five-story keep was rebuilt in reinforced concrete in 1965; red tiles were restored in 2011.' },
      { ja: '高石垣と水堀に囲まれた本丸は東北屈指の堅城だった。', zhTw: '被高石垣與水堀環繞的本丸是東北數一數二的堅城。', en: 'The honmaru, surrounded by tall stone walls and water moats, was one of Tōhoku\'s most formidable fortresses.' },
    ],
  },
  {
    id: 'shirakawa-komine', number: 13, regionId: 'tohoku',
    name: { ja: '白河小峰城', zhTw: '白河小峰城', en: 'Shirakawa Komine Castle' },
    city: { ja: '白河市', zhTw: '白河市', en: 'Shirakawa' },
    prefecture: { ja: '福島県', zhTw: '福島縣', en: 'Fukushima' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 74, y: 46 },
    illustration: { style: 'classic', tiers: 3, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#7a6520' },
    history: [
      { year: 1340, event: { ja: '結城親朝が小峰ヶ岡に城を築いたのが始まりとされる。', zhTw: '結城親朝在小峰岡築城，為城之起源。', en: 'Yūki Chikatomo built the first fortification on Komine Hill.' } },
      { year: 1632, event: { ja: '丹羽長重が大改修を行い、総石垣の近世城郭に生まれ変わった。', zhTw: '丹羽長重進行大改修，重生為全石垣的近世城郭。', en: 'Niwa Nagashige carried out major renovations, transforming it into a fully stone-walled castle.' } },
      { year: 1994, event: { ja: '三重櫓と前御門が木造で忠実に復元された。', zhTw: '三重櫓與前御門以木造忠實復原。', en: 'The three-story turret and front gate were faithfully reconstructed in wood.' } },
    ],
    figures: [
      { ja: '丹羽長重', zhTw: '丹羽長重', en: 'Niwa Nagashige', desc: { ja: '白河藩主として城の大改修を行い、現在の城の基礎を築いた。', zhTw: '身為白河藩主進行城的大改修，奠定現今城郭的基礎。', en: 'Lord of Shirakawa who rebuilt the castle and established its current form.' } },
      { ja: '松平定信', zhTw: '松平定信', en: 'Matsudaira Sadanobu', desc: { ja: '寛政の改革を主導した白河藩主で、幕政に大きな影響を与えた。', zhTw: '主導寬政改革的白河藩主，對幕政產生重大影響。', en: 'Lord of Shirakawa who led the Kansei Reforms and greatly influenced shogunate politics.' } },
    ],
    trivia: [
      { ja: '東北で初めて木造復元された天守相当の櫓として注目を集めた。', zhTw: '作為東北首座木造復原的天守級櫓而備受矚目。', en: 'Attracted attention as the first wooden reconstruction of a keep-equivalent turret in Tōhoku.' },
      { ja: '2011年の東日本大震災で石垣が大きく崩落し、10年かけて修復された。', zhTw: '2011年東日本大震災中石垣大規模崩塌，歷經十年修復。', en: 'Stone walls collapsed severely in the 2011 earthquake and took ten years to repair.' },
    ],
    highlights: [
      { ja: '木造復元の三重櫓 — 杉材を使い江戸時代の工法で再建。', zhTw: '木造復原的三重櫓 — 使用杉木以江戶時代工法重建。', en: 'Wooden three-story turret — rebuilt using cedar and Edo-period construction techniques.' },
      { ja: '桜と石垣の競演 — 春には約200本の桜が石垣を彩る。', zhTw: '櫻花與石垣的競演 — 春天約200棵櫻花裝點石垣。', en: 'Cherry blossoms and stone walls — 200 cherry trees adorn the walls each spring.' },
    ],
    architecture: [
      { ja: '総石垣造りの東北では珍しい本格的近世城郭。', zhTw: '全石垣建造，在東北罕見的正統近世城郭。', en: 'A rare fully stone-walled early-modern castle in the Tōhoku region.' },
      { ja: '本丸の三重櫓は実質的な天守で、独立式の望楼型。', zhTw: '本丸三重櫓實質上為天守，為獨立式望樓型。', en: 'The honmaru\'s three-story turret functioned as the de facto keep in an independent watchtower style.' },
    ],
  },
  // ── 関東 ──
  {
    id: 'mito', number: 14, regionId: 'kanto',
    name: { ja: '水戸城', zhTw: '水戶城', en: 'Mito Castle' },
    city: { ja: '水戸市', zhTw: '水戶市', en: 'Mito' },
    prefecture: { ja: '茨城県', zhTw: '茨城縣', en: 'Ibaraki' },
    type: 'hirajiro', designation: '特別史跡',
    position: { x: 78, y: 52 },
    illustration: { style: 'classic', tiers: 1, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#1a3a5c', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1214, event: { ja: '馬場資幹が水戸に館を築いたのが始まりとされる。', zhTw: '馬場資幹在水戶築館，為城之起源。', en: 'Baba Sukemoto built the first fortified residence at Mito.' } },
      { year: 1609, event: { ja: '徳川頼房が水戸藩主となり、御三家の居城として整備した。', zhTw: '德川賴房成為水戶藩主，整備為御三家的居城。', en: 'Tokugawa Yorifusa became lord and developed it as a seat of the Gosanke (three Tokugawa branch houses).' } },
      { year: 1945, event: { ja: '空襲で城内の建物がほぼ全焼し、戦後は学校敷地として利用された。', zhTw: '空襲中城內建築幾乎全毀，戰後作為學校用地使用。', en: 'Air raids destroyed nearly all castle buildings; the site was repurposed as school grounds after the war.' } },
    ],
    figures: [
      { ja: '徳川光圀', zhTw: '德川光圀', en: 'Tokugawa Mitsukuni', desc: { ja: '「水戸黄門」として親しまれる水戸藩二代藩主。大日本史の編纂を始めた。', zhTw: '以「水戶黃門」之名廣受喜愛的水戶藩第二代藩主，開始編纂《大日本史》。', en: 'The beloved "Mito Kōmon," second lord of Mito, who began compiling the Dai Nihon Shi (Great History of Japan).' } },
      { ja: '徳川斉昭', zhTw: '德川齊昭', en: 'Tokugawa Nariaki', desc: { ja: '幕末の尊王攘夷思想に大きな影響を与えた水戸藩九代藩主。弘道館を創設。', zhTw: '對幕末尊王攘夷思想影響深遠的水戶藩第九代藩主，創設弘道館。', en: 'Ninth lord of Mito who greatly influenced sonnō jōi thought and founded the Kōdōkan academy.' } },
    ],
    trivia: [
      { ja: '石垣を持たず土塁と深い堀で防御する珍しい大規模城郭。', zhTw: '不設石垣，以土壘與深壕防禦的罕見大規模城郭。', en: 'A rare large castle defended entirely by earthen walls and deep moats without stone walls.' },
      { ja: '城域内に水戸一高・水戸三高など学校が建ち並ぶ全国でも珍しい城跡。', zhTw: '城域內建有水戶一高等學校的全國罕見城跡。', en: 'Unusually, the castle grounds are occupied by several high schools.' },
    ],
    highlights: [
      { ja: '復元された大手門 — 2020年に木造で復元された壮大な門。', zhTw: '復原的大手門 — 2020年以木造復原的壯觀城門。', en: 'Reconstructed main gate — a grand wooden gate restored in 2020.' },
      { ja: '弘道館 — 水戸藩の藩校で国の特別史跡。', zhTw: '弘道館 — 水戶藩的藩校，為國家特別史跡。', en: 'Kōdōkan — the domain school designated a Special Historic Site.' },
    ],
    architecture: [
      { ja: '台地の地形を活かした連郭式の縄張りで、三の丸から本丸まで一直線に配置。', zhTw: '利用台地地形的連郭式配置，從三之丸到本丸一直線排列。', en: 'A linear layout exploiting the plateau terrain, with sannomaru through honmaru arranged in a straight line.' },
      { ja: '石垣を用いず深い空堀と土塁で防御する関東の城の典型。', zhTw: '不使用石垣、以深壕與土壘防禦的關東城郭典型。', en: 'A quintessential Kantō castle using deep dry moats and earthworks instead of stone walls.' },
    ],
  },
  {
    id: 'ashikaga', number: 15, regionId: 'kanto',
    name: { ja: '足利氏館', zhTw: '足利氏館', en: 'Ashikaga Clan Residence' },
    city: { ja: '足利市', zhTw: '足利市', en: 'Ashikaga' },
    prefecture: { ja: '栃木県', zhTw: '栃木縣', en: 'Tochigi' },
    type: 'hirajiro', designation: '国宝',
    position: { x: 74, y: 54 },
    illustration: { style: 'palace', tiers: 1, color: '#f5f0e8', roofColor: '#5a3825' },
    goshuin: { bg: '#f0e6d3', ink: '#3a2518', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1196, event: { ja: '足利義兼が居館を構え、鑁阿寺の前身となった。', zhTw: '足利義兼建造居館，成為鑁阿寺的前身。', en: 'Ashikaga Yoshikane established a residence that became the precursor to Bannaji Temple.' } },
      { year: 1234, event: { ja: '足利義氏が居館を寺院に改め鑁阿寺とした。', zhTw: '足利義氏將居館改為寺院，命名為鑁阿寺。', en: 'Ashikaga Yoshiuji converted the residence into Bannaji Temple.' } },
      { year: 2013, event: { ja: '鑁阿寺本堂が国宝に指定された。', zhTw: '鑁阿寺本堂被指定為國寶。', en: 'Bannaji Temple\'s main hall was designated a National Treasure.' } },
    ],
    figures: [
      { ja: '足利義兼', zhTw: '足利義兼', en: 'Ashikaga Yoshikane', desc: { ja: '足利氏二代当主で、この地に居館を構えた。', zhTw: '足利氏第二代當主，在此地建造居館。', en: 'Second head of the Ashikaga clan who established the residence at this site.' } },
      { ja: '足利尊氏', zhTw: '足利尊氏', en: 'Ashikaga Takauji', desc: { ja: '室町幕府初代将軍で、足利氏館はその一族の発祥の地。', zhTw: '室町幕府初代將軍，足利氏館是其家族的發祥地。', en: 'First shōgun of the Muromachi shogunate; the Ashikaga Residence is his clan\'s ancestral home.' } },
    ],
    trivia: [
      { ja: '城ではなく寺院だが、周囲の堀と土塁が中世武士の居館の面影を残す。', zhTw: '雖是寺院而非城郭，但周圍的壕溝與土壘保留中世武士居館的風貌。', en: 'Though now a temple, the surrounding moat and earthworks preserve the appearance of a medieval warrior residence.' },
      { ja: '足利学校と合わせて日本中世文化の発信地として栄えた。', zhTw: '與足利學校共同作為日本中世文化的發信地而繁榮。', en: 'Flourished alongside the Ashikaga School as a center of medieval Japanese culture.' },
    ],
    highlights: [
      { ja: '国宝の本堂 — 鎌倉時代の建築美を今に伝える。', zhTw: '國寶本堂 — 傳承鎌倉時代建築之美。', en: 'National Treasure main hall — preserving the beauty of Kamakura-period architecture.' },
      { ja: '堀と土塁 — 中世武家居館の原型をよく残す。', zhTw: '壕溝與土壘 — 完好保留中世武家居館的原型。', en: 'Moat and earthworks — well-preserved examples of a medieval warrior compound.' },
    ],
    architecture: [
      { ja: '方形の堀と土塁に囲まれた中世武家居館の典型的な形態。', zhTw: '由方形壕溝與土壘環繞的中世武家居館典型形態。', en: 'A classic medieval warrior residence enclosed by a square moat and earthen ramparts.' },
      { ja: '本堂は入母屋造の鎌倉時代建築で、和様を基調とする。', zhTw: '本堂為入母屋造的鎌倉時代建築，以和樣為基調。', en: 'The main hall is a Kamakura-period structure in irimoya style with Japanese architectural elements.' },
    ],
  },
  {
    id: 'minowa', number: 16, regionId: 'kanto',
    name: { ja: '箕輪城', zhTw: '箕輪城', en: 'Minowa Castle' },
    city: { ja: '高崎市', zhTw: '高崎市', en: 'Takasaki' },
    prefecture: { ja: '群馬県', zhTw: '群馬縣', en: 'Gunma' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 72, y: 52 },
    illustration: { style: 'classic', tiers: 1, color: '#f5f0e8', roofColor: '#3d5c4a' },
    goshuin: { bg: '#e8dfd0', ink: '#2d4a3e', seal: '#b83a3a', crest: '#7a6520' },
    history: [
      { year: 1512, event: { ja: '長野業尚が箕輪城を築いた。', zhTw: '長野業尚築建箕輪城。', en: 'Nagano Narinao built Minowa Castle.' } },
      { year: 1566, event: { ja: '武田信玄の猛攻に長野業盛が奮戦するも落城、業盛は自刃した。', zhTw: '面對武田信玄的猛攻，長野業盛奮戰但落城，業盛自刃。', en: 'Despite fierce resistance by Nagano Narimori, the castle fell to Takeda Shingen; Narimori took his own life.' } },
      { year: 1598, event: { ja: '井伊直政が城主となるが、後に高崎に移り箕輪城は廃城となった。', zhTw: '井伊直政成為城主，但後移至高崎，箕輪城廢城。', en: 'Ii Naomasa became lord but later relocated to Takasaki, and Minowa Castle was abandoned.' } },
    ],
    figures: [
      { ja: '長野業正', zhTw: '長野業正', en: 'Nagano Narimasa', desc: { ja: '武田信玄の侵攻を6度にわたり撃退した箕輪城の名将。', zhTw: '六度擊退武田信玄侵攻的箕輪城名將。', en: 'Famous defender of Minowa who repelled Takeda Shingen\'s invasions six times.' } },
      { ja: '井伊直政', zhTw: '井伊直政', en: 'Ii Naomasa', desc: { ja: '徳川四天王の一人で、関ヶ原後に箕輪城主となった。', zhTw: '德川四天王之一，關原之戰後成為箕輪城主。', en: 'One of Tokugawa\'s Four Heavenly Kings who became lord of Minowa after Sekigahara.' } },
    ],
    trivia: [
      { ja: '武田信玄をして「業正がいる限り上野は攻められぬ」と言わしめた堅城。', zhTw: '讓武田信玄感嘆「業正在世一日便無法攻下上野」的堅城。', en: 'A fortress so strong that Takeda Shingen reportedly said, "As long as Narimasa lives, Kōzuke cannot be taken."' },
      { ja: '大堀切は深さ約20mで、戦国城郭の中でも屈指の規模。', zhTw: '大堀切深約20公尺，在戰國城郭中規模數一數二。', en: 'The great moat cut is about 20 meters deep — among the largest of any Sengoku-period castle.' },
    ],
    highlights: [
      { ja: '大堀切 — 圧倒的な規模を誇る戦国期の巨大空堀。', zhTw: '大堀切 — 規模壓倒性的戰國時期巨大空壕。', en: 'Great Moat Cut — a massive Sengoku-era dry moat of overwhelming scale.' },
      { ja: '復元された郭馬出西虎口門 — 戦国の城門が蘇る。', zhTw: '復原的郭馬出西虎口門 — 戰國城門重現。', en: 'Reconstructed western entrance gate — bringing a Sengoku-period castle gate back to life.' },
    ],
    architecture: [
      { ja: '丘陵の尾根を利用した連郭式の山城で、大規模な堀切で各曲輪を分断。', zhTw: '利用丘陵山脊的連郭式山城，以大規模堀切分隔各曲輪。', en: 'A ridge-top castle with linked compounds separated by massive moat cuts.' },
      { ja: '石垣はほとんど使わず、土塁と空堀で防御する関東の戦国城郭の典型。', zhTw: '幾乎不使用石垣，以土壘與空壕防禦的關東戰國城郭典型。', en: 'A typical Kantō Sengoku castle relying on earthworks and dry moats rather than stone walls.' },
    ],
  },
  {
    id: 'kanayama', number: 17, regionId: 'kanto',
    name: { ja: '金山城', zhTw: '金山城', en: 'Kanayama Castle' },
    city: { ja: '太田市', zhTw: '太田市', en: 'Ōta' },
    prefecture: { ja: '群馬県', zhTw: '群馬縣', en: 'Gunma' },
    type: 'yamajiro', designation: '国指定史跡',
    position: { x: 74, y: 50 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#8b7e6b', roofColor: '#5a3825' },
    goshuin: { bg: '#e8dfd0', ink: '#3a2518', seal: '#c53d43', crest: '#7a6520' },
    history: [
      { year: 1469, event: { ja: '新田一族の岩松家純が金山に城を築いた。', zhTw: '新田一族的岩松家純在金山築城。', en: 'Iwamatsu Iezumi of the Nitta clan built a castle on Mt. Kanayama.' } },
      { year: 1528, event: { ja: '横瀬(由良)氏が実権を握り城を拡張した。', zhTw: '橫瀨（由良）氏掌握實權，擴建城郭。', en: 'The Yokose (Yura) clan seized power and expanded the castle.' } },
      { year: 1590, event: { ja: '豊臣秀吉の小田原征伐で開城し廃城となった。', zhTw: '因豐臣秀吉的小田原征伐而開城廢城。', en: 'The castle surrendered during Hideyoshi\'s Odawara Campaign and was abandoned.' } },
    ],
    figures: [
      { ja: '岩松家純', zhTw: '岩松家純', en: 'Iwamatsu Iezumi', desc: { ja: '新田氏の末裔で金山城を築城した武将。', zhTw: '新田氏後裔，築建金山城的武將。', en: 'A descendant of the Nitta clan who built Kanayama Castle.' } },
      { ja: '由良成繁', zhTw: '由良成繁', en: 'Yura Narishige', desc: { ja: '金山城を本拠に上野国で勢力を拡大した戦国武将。', zhTw: '以金山城為據點在上野國擴張勢力的戰國武將。', en: 'A Sengoku lord who expanded his influence in Kōzuke Province from Kanayama Castle.' } },
    ],
    trivia: [
      { ja: '関東の山城では珍しく本格的な石垣が残り「関東の石垣の城」と呼ばれる。', zhTw: '在關東山城中罕見地留有正式石垣，被稱為「關東的石垣之城」。', en: 'Unusually for a Kantō mountain castle, genuine stone walls survive — earning it the name "Stone Wall Castle of Kantō."' },
      { ja: '山頂に石造りの日ノ池・月ノ池が残り、神聖な水の祭祀が行われていた。', zhTw: '山頂留有石造的日之池與月之池，曾舉行神聖的水祭祀。', en: 'Stone-lined Sun Pool and Moon Pool survive atop the mountain, where sacred water rituals were performed.' },
    ],
    highlights: [
      { ja: '復元された石垣と大手虎口 — 関東では貴重な石造りの城門跡。', zhTw: '復原的石垣與大手虎口 — 在關東極為珍貴的石造城門遺跡。', en: 'Restored stone walls and main entrance — a rare stone-built castle gate in the Kantō region.' },
      { ja: '日ノ池 — 石積みの貯水池は祭祀の場だったとされる。', zhTw: '日之池 — 石砌蓄水池據傳為祭祀場所。', en: 'Sun Pool — a stone-lined reservoir believed to have been a ritual site.' },
    ],
    architecture: [
      { ja: '関東では例外的に石垣を多用した山城で、大手道に精巧な石畳が敷かれている。', zhTw: '在關東例外地大量使用石垣的山城，大手道鋪設精巧石板。', en: 'Exceptionally for Kantō, this mountain castle uses extensive stonework with a finely paved main approach.' },
      { ja: '尾根上に複数の曲輪を連ねた連郭式の縄張り。', zhTw: '在山脊上排列多個曲輪的連郭式配置。', en: 'Multiple compounds linked along the ridgeline in a chain layout.' },
    ],
  },
  {
    id: 'hachigata', number: 18, regionId: 'kanto',
    name: { ja: '鉢形城', zhTw: '鉢形城', en: 'Hachigata Castle' },
    city: { ja: '寄居町', zhTw: '寄居町', en: 'Yorii' },
    prefecture: { ja: '埼玉県', zhTw: '埼玉縣', en: 'Saitama' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 72, y: 54 },
    illustration: { style: 'classic', tiers: 1, color: '#f5f0e8', roofColor: '#3d5c4a' },
    goshuin: { bg: '#e8dfd0', ink: '#2d4a3e', seal: '#b83a3a', crest: '#7a6520' },
    history: [
      { year: 1476, event: { ja: '長尾景春が荒川の断崖上に鉢形城を築いた。', zhTw: '長尾景春在荒川斷崖上築建鉢形城。', en: 'Nagao Kageharu built Hachigata Castle on the cliffs above the Arakawa River.' } },
      { year: 1564, event: { ja: '北条氏邦が城主となり大規模に拡張した。', zhTw: '北條氏邦成為城主，大規模擴建。', en: 'Hōjō Ujikuni became lord and greatly expanded the castle.' } },
      { year: 1590, event: { ja: '小田原征伐で前田利家・上杉景勝の大軍に包囲され開城した。', zhTw: '小田原征伐中被前田利家、上杉景勝大軍包圍而開城。', en: 'Surrounded by the armies of Maeda Toshiie and Uesugi Kagekatsu during the Odawara Campaign, the castle surrendered.' } },
    ],
    figures: [
      { ja: '北条氏邦', zhTw: '北條氏邦', en: 'Hōjō Ujikuni', desc: { ja: '北条氏の一門で鉢形城を北関東防衛の要として整備した。', zhTw: '北條氏一門，將鉢形城整備為北關東防禦要地。', en: 'A member of the Hōjō clan who developed Hachigata as a key northern Kantō defense point.' } },
      { ja: '長尾景春', zhTw: '長尾景春', en: 'Nagao Kageharu', desc: { ja: '鉢形城の築城者で、関東管領上杉氏に反乱を起こした武将。', zhTw: '鉢形城的築城者，向關東管領上杉氏發動叛亂的武將。', en: 'Builder of Hachigata Castle who rebelled against the Uesugi Kantō kanrei.' } },
    ],
    trivia: [
      { ja: '荒川と深沢川の合流点の断崖に位置する天然の要害。', zhTw: '位於荒川與深澤川匯流處斷崖的天然要害。', en: 'A natural fortress perched on cliffs at the confluence of the Arakawa and Fukazawa rivers.' },
      { ja: '北条氏の北関東支配の拠点で、上野・信濃方面への前線基地だった。', zhTw: '北條氏北關東統治的據點，是面向上野、信濃方面的前線基地。', en: 'The Hōjō clan\'s base for controlling northern Kantō and a frontline against Kōzuke and Shinano.' },
    ],
    highlights: [
      { ja: '復元された四脚門と石積み土塁 — 戦国期の姿を伝える。', zhTw: '復原的四腳門與石積土壘 — 傳達戰國時期的樣貌。', en: 'Reconstructed four-legged gate and stone-lined earthworks — evoking the Sengoku era.' },
      { ja: '荒川の渓谷美 — 城跡からの眺望は四季を通じて美しい。', zhTw: '荒川的溪谷之美 — 從城跡眺望四季皆美。', en: 'Arakawa gorge views — beautiful scenery from the castle ruins in all seasons.' },
    ],
    architecture: [
      { ja: '荒川の断崖を天然の堀とし、台地上に複数の曲輪を配置した戦国城郭。', zhTw: '以荒川斷崖為天然壕溝，在台地上配置多個曲輪的戰國城郭。', en: 'A Sengoku castle using Arakawa River cliffs as a natural moat with multiple compounds on the plateau.' },
      { ja: '外曲輪を含めると総面積約24haに及ぶ広大な城域。', zhTw: '含外曲輪總面積約24公頃的廣大城域。', en: 'An expansive castle area covering about 24 hectares including outer compounds.' },
    ],
  },
  {
    id: 'kawagoe', number: 19, regionId: 'kanto',
    name: { ja: '川越城', zhTw: '川越城', en: 'Kawagoe Castle' },
    city: { ja: '川越市', zhTw: '川越市', en: 'Kawagoe' },
    prefecture: { ja: '埼玉県', zhTw: '埼玉縣', en: 'Saitama' },
    type: 'hirajiro', designation: '県指定文化財',
    position: { x: 70, y: 56 },
    illustration: { style: 'palace', tiers: 1, color: '#f5f0e8', roofColor: '#5a3825' },
    goshuin: { bg: '#f5ede0', ink: '#3a2518', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1457, event: { ja: '太田道灌が江戸城と共に川越城を築いた。', zhTw: '太田道灌與江戶城同時築建川越城。', en: 'Ōta Dōkan built Kawagoe Castle alongside Edo Castle.' } },
      { year: 1546, event: { ja: '河越夜戦で北条氏康が大勝し、関東の覇権を確立した。', zhTw: '河越夜戰中北條氏康大勝，確立關東霸權。', en: 'Hōjō Ujiyasu won a decisive victory in the Night Battle of Kawagoe, establishing dominance over Kantō.' } },
      { year: 1848, event: { ja: '松平斉典が本丸御殿を建造、現在も一部が現存する。', zhTw: '松平齊典建造本丸御殿，部分至今仍現存。', en: 'Matsudaira Naritsune built the honmaru palace, parts of which still survive today.' } },
    ],
    figures: [
      { ja: '太田道灌', zhTw: '太田道灌', en: 'Ōta Dōkan', desc: { ja: '江戸城と川越城を築いた名築城家で文武両道の武将。', zhTw: '築建江戶城與川越城的名築城家，文武雙全的武將。', en: 'Renowned castle builder who constructed both Edo and Kawagoe castles; skilled in both arts and warfare.' } },
      { ja: '北条氏康', zhTw: '北條氏康', en: 'Hōjō Ujiyasu', desc: { ja: '河越夜戦に勝利し後北条氏の最盛期を築いた名将。', zhTw: '在河越夜戰中獲勝，開創後北條氏全盛期的名將。', en: 'Brilliant lord who won the Night Battle of Kawagoe and led the Later Hōjō to their zenith.' } },
    ],
    trivia: [
      { ja: '現存する本丸御殿は東日本では唯一で、全国でも4箇所しか残っていない。', zhTw: '現存的本丸御殿為東日本唯一，全國也僅存4處。', en: 'The surviving honmaru palace is the only one in eastern Japan — only four exist nationwide.' },
      { ja: '河越夜戦は日本三大夜戦の一つに数えられる。', zhTw: '河越夜戰被列為日本三大夜戰之一。', en: 'The Night Battle of Kawagoe is counted among Japan\'s three great night battles.' },
    ],
    highlights: [
      { ja: '本丸御殿 — 嘉永元年築の貴重な現存御殿建築。', zhTw: '本丸御殿 — 嘉永元年建造的珍貴現存御殿建築。', en: 'Honmaru Palace — a precious surviving palace building from 1848.' },
      { ja: '小江戸川越の町並み — 蔵造りの町並みと時の鐘。', zhTw: '小江戶川越的街景 — 藏造建築街道與時之鐘。', en: 'Little Edo Kawagoe — traditional warehouse-style streets and the iconic Bell Tower.' },
    ],
    architecture: [
      { ja: '本丸御殿は入母屋造の書院建築で、36畳の大広間が圧巻。', zhTw: '本丸御殿為入母屋造的書院建築，36疊大廣間令人驚嘆。', en: 'The honmaru palace is a shoin-style building with an impressive 36-tatami grand hall.' },
      { ja: '水堀と土塁を基本とした典型的な関東の平城。', zhTw: '以水堀與土壘為主的典型關東平城。', en: 'A typical Kantō flatland castle based on water moats and earthen ramparts.' },
    ],
  },
  {
    id: 'sakura', number: 20, regionId: 'kanto',
    name: { ja: '佐倉城', zhTw: '佐倉城', en: 'Sakura Castle' },
    city: { ja: '佐倉市', zhTw: '佐倉市', en: 'Sakura' },
    prefecture: { ja: '千葉県', zhTw: '千葉縣', en: 'Chiba' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 80, y: 56 },
    illustration: { style: 'classic', tiers: 1, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2a2a2a', seal: '#c53d43', crest: '#9a7030' },
    history: [
      { year: 1611, event: { ja: '土井利勝が佐倉城の築城を開始した。', zhTw: '土井利勝開始築建佐倉城。', en: 'Doi Toshikatsu began construction of Sakura Castle.' } },
      { year: 1616, event: { ja: '佐倉城が完成し、以後幕末まで譜代大名の居城として重視された。', zhTw: '佐倉城完工，此後至幕末作為譜代大名居城受到重視。', en: 'Sakura Castle was completed and served as an important fudai daimyō seat until the Bakumatsu.' } },
      { year: 1873, event: { ja: '陸軍の駐屯地となり城の建物が解体された。', zhTw: '成為陸軍駐屯地，城內建築被拆除。', en: 'The castle grounds became an army garrison and the buildings were dismantled.' } },
    ],
    figures: [
      { ja: '土井利勝', zhTw: '土井利勝', en: 'Doi Toshikatsu', desc: { ja: '徳川家康の側近で佐倉城を築いた幕閣の重鎮。', zhTw: '德川家康的近臣，築建佐倉城的幕閣重鎮。', en: 'A key Tokugawa advisor who built Sakura Castle.' } },
      { ja: '堀田正睦', zhTw: '堀田正睦', en: 'Hotta Masayoshi', desc: { ja: '幕末の老中首座で開国政策を推進した佐倉藩主。', zhTw: '幕末老中首座，推動開國政策的佐倉藩主。', en: 'Senior councillor and lord of Sakura who promoted Japan\'s opening to foreign trade.' } },
    ],
    trivia: [
      { ja: '石垣を一切使わず土塁のみで築かれた珍しい近世城郭。', zhTw: '完全不使用石垣、僅以土壘築建的罕見近世城郭。', en: 'A rare early-modern castle built entirely with earthworks and no stone walls.' },
      { ja: '国立歴史民俗博物館が城跡に建てられ、日本有数の歴史博物館として知られる。', zhTw: '國立歷史民俗博物館建於城跡，為日本首屈一指的歷史博物館。', en: 'The National Museum of Japanese History stands on the castle grounds — one of Japan\'s premier history museums.' },
    ],
    highlights: [
      { ja: '空堀と土塁の遺構 — 石垣なしの防御体系がよく残る。', zhTw: '空壕與土壘的遺構 — 完好保留無石垣的防禦體系。', en: 'Dry moats and earthworks — the stone-free defense system is well preserved.' },
      { ja: '国立歴史民俗博物館 — 日本の歴史と文化を網羅する大規模博物館。', zhTw: '國立歷史民俗博物館 — 涵蓋日本歷史與文化的大型博物館。', en: 'National Museum of Japanese History — a comprehensive museum of Japanese history and culture.' },
    ],
    architecture: [
      { ja: '馬出し空堀と角馬出しを多用した戦略的な縄張り。', zhTw: '大量運用馬出空壕與角馬出的戰略性配置。', en: 'A strategic layout making extensive use of horse-launching barbican moats.' },
      { ja: '三重の水堀と土塁のみで防御する関東の城の極致。', zhTw: '僅以三重水堀與土壘防禦的關東城郭極致。', en: 'The pinnacle of Kantō castle design — defended solely by triple water moats and earthen walls.' },
    ],
  },
  {
    id: 'hachioji', number: 22, regionId: 'kanto',
    name: { ja: '八王子城', zhTw: '八王子城', en: 'Hachiōji Castle' },
    city: { ja: '八王子市', zhTw: '八王子市', en: 'Hachiōji' },
    prefecture: { ja: '東京都', zhTw: '東京都', en: 'Tokyo' },
    type: 'yamajiro', designation: '国指定史跡',
    position: { x: 68, y: 56 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#8b7e6b', roofColor: '#3d5c4a' },
    goshuin: { bg: '#e8dfd0', ink: '#2d4a3e', seal: '#c53d43', crest: '#7a6520' },
    history: [
      { year: 1571, event: { ja: '北条氏照が深沢山に八王子城の築城を開始した。', zhTw: '北條氏照開始在深澤山築建八王子城。', en: 'Hōjō Ujiteru began building Hachiōji Castle on Mt. Fukazawa.' } },
      { year: 1590, event: { ja: '豊臣軍の前田利家・上杉景勝に攻められ一日で落城。凄惨な戦いとなった。', zhTw: '被豐臣軍的前田利家、上杉景勝攻打，一日即陷落。戰況極為慘烈。', en: 'Attacked by Maeda Toshiie and Uesugi Kagekatsu\'s forces, the castle fell in a single day in a devastating battle.' } },
      { year: 2006, event: { ja: '日本100名城に選定され、御主殿跡の整備が進められている。', zhTw: '被選為日本100名城，御主殿遺跡的整備持續進行中。', en: 'Selected as one of the 100 Famous Castles; the lord\'s palace site continues to be restored.' } },
    ],
    figures: [
      { ja: '北条氏照', zhTw: '北條氏照', en: 'Hōjō Ujiteru', desc: { ja: '北条氏康の三男で八王子城を本拠とした武将。小田原で切腹。', zhTw: '北條氏康三男，以八王子城為據點的武將。在小田原切腹。', en: 'Third son of Hōjō Ujiyasu who made Hachiōji his base; committed seppuku at Odawara.' } },
      { ja: '前田利家', zhTw: '前田利家', en: 'Maeda Toshiie', desc: { ja: '豊臣軍の主力として八王子城攻めを指揮した加賀の大名。', zhTw: '作為豐臣軍主力指揮八王子城攻擊的加賀大名。', en: 'Lord of Kaga who led the main Toyotomi force in the assault on Hachiōji Castle.' } },
    ],
    trivia: [
      { ja: '落城時に城内の女性や子供が御主殿の滝で自害したと伝わる悲劇の城。', zhTw: '陷落時城內女性與孩童在御主殿之瀑自盡的悲劇之城。', en: 'A castle of tragedy — women and children are said to have taken their lives at the waterfall during the fall.' },
      { ja: '東京都内で唯一の日本100名城。', zhTw: '東京都內唯一的日本100名城。', en: 'The only one of the 100 Famous Castles located within Tokyo.' },
    ],
    highlights: [
      { ja: '御主殿跡と御主殿の滝 — 復元された石垣と悲劇の伝承地。', zhTw: '御主殿遺跡與御主殿之瀑 — 復原的石垣與悲劇傳說之地。', en: 'Lord\'s palace ruins and waterfall — restored stone walls and the site of the castle\'s tragic fall.' },
      { ja: '山頂本丸からの眺望 — 関東平野を一望できる。', zhTw: '從山頂本丸眺望 — 可一覽關東平原。', en: 'Summit honmaru views — panoramic vistas of the Kantō Plain.' },
    ],
    architecture: [
      { ja: '山頂の要害地区と山腹の居館地区に分かれる本格的な戦国山城。', zhTw: '分為山頂要害地區與山腹居館地區的正統戰國山城。', en: 'A full-scale Sengoku mountain castle divided into a summit fortress zone and a hillside residential zone.' },
      { ja: '御主殿跡には石垣と石敷きの通路が残り、当時の格式の高さを物語る。', zhTw: '御主殿遺跡留有石垣與石鋪通道，訴說當時的高格式。', en: 'Stone walls and paved paths at the lord\'s palace site attest to its former grandeur.' },
    ],
  },
  // ── 中部（甲信越・北陸・東海）──
  {
    id: 'takeda-yakata', number: 24, regionId: 'chubu',
    name: { ja: '武田氏館', zhTw: '武田氏館', en: 'Takeda Clan Residence' },
    city: { ja: '甲府市', zhTw: '甲府市', en: 'Kōfu' },
    prefecture: { ja: '山梨県', zhTw: '山梨縣', en: 'Yamanashi' },
    type: 'hirajiro', designation: '国指定史跡',
    position: { x: 66, y: 54 },
    illustration: { style: 'classic', tiers: 1, color: '#f5f0e8', roofColor: '#5a3825' },
    goshuin: { bg: '#f0e6d3', ink: '#3a2518', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1519, event: { ja: '武田信虎が躑躅ヶ崎に館を築き甲斐の政治の中心とした。', zhTw: '武田信虎在躑躅崎築館，使其成為甲斐的政治中心。', en: 'Takeda Nobutora built a residence at Tsutsujigasaki, making it the political center of Kai.' } },
      { year: 1541, event: { ja: '武田信玄が家督を継ぎ、ここを拠点に甲斐を戦国最強の国に育てた。', zhTw: '武田信玄繼承家督，以此為據點將甲斐培育為戰國最強之國。', en: 'Takeda Shingen inherited leadership and built Kai into one of the most powerful Sengoku domains from this base.' } },
      { year: 1582, event: { ja: '武田氏滅亡後に館は廃され、跡地に武田神社が建てられた。', zhTw: '武田氏滅亡後館舍被廢，遺址上建造了武田神社。', en: 'After the Takeda clan\'s fall, the residence was abandoned and Takeda Shrine was built on the site.' } },
    ],
    figures: [
      { ja: '武田信玄', zhTw: '武田信玄', en: 'Takeda Shingen', desc: { ja: '「甲斐の虎」と呼ばれた戦国最強の武将の一人。風林火山の旗印で知られる。', zhTw: '被稱為「甲斐之虎」的戰國最強武將之一。以風林火山旗號聞名。', en: 'The "Tiger of Kai," one of the greatest Sengoku warriors, known for his "Fūrinkazan" banner.' } },
      { ja: '武田勝頼', zhTw: '武田勝賴', en: 'Takeda Katsuyori', desc: { ja: '信玄の後を継ぐも長篠の戦いで大敗し、武田氏滅亡を招いた。', zhTw: '繼承信玄但在長篠之戰大敗，導致武田氏滅亡。', en: 'Shingen\'s successor who suffered a devastating defeat at Nagashino, leading to the Takeda clan\'s downfall.' } },
    ],
    trivia: [
      { ja: '信玄は堅固な城を築かず「人は城、人は石垣」と人材を重視した。', zhTw: '信玄不築堅城，以「人即是城、人即是石垣」重視人才。', en: 'Shingen famously declared "People are the castle, people are the walls" — valuing retainers over fortifications.' },
      { ja: '武田神社は初詣や勝運祈願の名所として年間を通じて参拝者が多い。', zhTw: '武田神社是新年參拜及祈求勝運的名所，全年參拜者眾多。', en: 'Takeda Shrine draws visitors year-round for prayers of victory and New Year visits.' },
    ],
    highlights: [
      { ja: '武田神社 — 信玄を祭神とする神社で勝運のパワースポット。', zhTw: '武田神社 — 以信玄為祭神的神社，勝運能量景點。', en: 'Takeda Shrine — dedicated to Shingen, a popular power spot for victory prayers.' },
      { ja: '堀と土塁の遺構 — 中世武家居館の姿を今に伝える。', zhTw: '壕溝與土壘遺構 — 傳承中世武家居館的樣貌。', en: 'Moat and earthwork remains — preserving the form of a medieval warrior compound.' },
    ],
    architecture: [
      { ja: '方形の堀と土塁に囲まれた典型的な中世武家居館形式。', zhTw: '由方形壕溝與土壘環繞的典型中世武家居館形式。', en: 'A classic medieval warrior residence surrounded by a square moat and earthen walls.' },
      { ja: '東曲輪・西曲輪・北曲輪など複数の曲輪を持つが、天守は築かれなかった。', zhTw: '擁有東曲輪、西曲輪、北曲輪等多個曲輪，但未築天守。', en: 'Multiple compounds (east, west, north) but no keep was ever built.' },
    ],
  },
  {
    id: 'kofu', number: 25, regionId: 'chubu',
    name: { ja: '甲府城', zhTw: '甲府城', en: 'Kōfu Castle' },
    city: { ja: '甲府市', zhTw: '甲府市', en: 'Kōfu' },
    prefecture: { ja: '山梨県', zhTw: '山梨縣', en: 'Yamanashi' },
    type: 'hirayama', designation: '県指定史跡',
    position: { x: 64, y: 56 },
    illustration: { style: 'classic', tiers: 1, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1583, event: { ja: '徳川家康の命で平岩親吉が甲府城の築城を開始した。', zhTw: '奉德川家康之命，平岩親吉開始築建甲府城。', en: 'Hiraiwa Chikayoshi began building Kōfu Castle on Tokugawa Ieyasu\'s orders.' } },
      { year: 1600, event: { ja: '関ヶ原の戦い後、甲府は徳川家の直轄地として重要視された。', zhTw: '關原之戰後，甲府作為德川家直轄地受到重視。', en: 'After Sekigahara, Kōfu was valued as a directly administered Tokugawa territory.' } },
      { year: 1873, event: { ja: '廃城後に建物は解体されたが、壮大な石垣が残された。', zhTw: '廢城後建築被拆除，但壯觀的石垣得以保留。', en: 'After abolition, buildings were dismantled but the impressive stone walls were preserved.' } },
    ],
    figures: [
      { ja: '平岩親吉', zhTw: '平岩親吉', en: 'Hiraiwa Chikayoshi', desc: { ja: '徳川十六神将の一人で甲府城の築城を担当した。', zhTw: '德川十六神將之一，負責甲府城的築建。', en: 'One of the Tokugawa Sixteen Generals who oversaw the construction of Kōfu Castle.' } },
      { ja: '柳沢吉保', zhTw: '柳澤吉保', en: 'Yanagisawa Yoshiyasu', desc: { ja: '五代将軍綱吉の側用人で甲府藩主となった権勢者。', zhTw: '五代將軍綱吉的側用人，成為甲府藩主的權勢者。', en: 'Powerful advisor to Shōgun Tsunayoshi who became lord of Kōfu.' } },
    ],
    trivia: [
      { ja: '甲府駅南口に隣接し、駅のホームから石垣が見える珍しい城跡。', zhTw: '緊鄰甲府站南口，從月台即可看到石垣的罕見城跡。', en: 'Adjacent to JR Kōfu Station — one of few castle ruins where stone walls are visible from the train platform.' },
      { ja: '別名「舞鶴城」は城の縄張りが鶴が舞う姿に見えることに由来する。', zhTw: '別名「舞鶴城」源於城的配置看似鶴舞之姿。', en: 'Its alias "Maizuru Castle" (Dancing Crane) comes from the castle layout resembling a crane in flight.' },
    ],
    highlights: [
      { ja: '天守台からの眺望 — 富士山と甲府盆地を一望。', zhTw: '從天守台眺望 — 一覽富士山與甲府盆地。', en: 'Views from the keep platform — panoramic vistas of Mt. Fuji and the Kōfu Basin.' },
      { ja: '復元された稲荷櫓 — 木造で忠実に再建された隅櫓。', zhTw: '復原的稻荷櫓 — 以木造忠實重建的角櫓。', en: 'Reconstructed Inari Turret — a corner turret faithfully rebuilt in wood.' },
    ],
    architecture: [
      { ja: '野面積み・切込接ぎ・打込接ぎの三種の石垣技法が見られる貴重な城。', zhTw: '可見野面積、切込接、打込接三種石垣技法的珍貴城郭。', en: 'A rare castle showcasing three types of stone-wall techniques: rough-stacked, cut-and-fitted, and hammered.' },
      { ja: '総石垣の近世城郭で、本丸を中心に渦郭式の縄張りを持つ。', zhTw: '全石垣的近世城郭，以本丸為中心的渦郭式配置。', en: 'A fully stone-walled castle with a spiral compound layout centered on the honmaru.' },
    ],
  },
  {
    id: 'matsushiro', number: 26, regionId: 'chubu',
    name: { ja: '松代城', zhTw: '松代城', en: 'Matsushiro Castle' },
    city: { ja: '長野市', zhTw: '長野市', en: 'Nagano' },
    prefecture: { ja: '長野県', zhTw: '長野縣', en: 'Nagano' },
    type: 'hirajiro', designation: '国指定史跡',
    position: { x: 62, y: 50 },
    illustration: { style: 'classic', tiers: 1, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#e8dfd0', ink: '#2a2a2a', seal: '#c53d43', crest: '#7a6520' },
    history: [
      { year: 1560, event: { ja: '武田信玄が川中島の戦いの拠点として海津城を築いた。', zhTw: '武田信玄築建海津城作為川中島之戰的據點。', en: 'Takeda Shingen built Kaizu Castle as his base for the Battles of Kawanakajima.' } },
      { year: 1622, event: { ja: '真田信之が入封し、以後松代藩真田家10代の居城となった。', zhTw: '真田信之入封，此後成為松代藩真田家10代的居城。', en: 'Sanada Nobuyuki took over; the castle served as the Sanada clan seat for ten generations.' } },
      { year: 2004, event: { ja: '太鼓門や堀・石垣が復元され往時の姿を取り戻しつつある。', zhTw: '太鼓門、護城河與石垣獲得復原，逐漸恢復昔日樣貌。', en: 'The drum gate, moats, and stone walls were restored, gradually recovering the castle\'s former appearance.' } },
    ],
    figures: [
      { ja: '武田信玄', zhTw: '武田信玄', en: 'Takeda Shingen', desc: { ja: '第四次川中島の戦いで海津城を拠点に上杉謙信と激戦を繰り広げた。', zhTw: '第四次川中島之戰中以海津城為據點，與上杉謙信展開激戰。', en: 'Used Kaizu Castle as his base in the epic Fourth Battle of Kawanakajima against Uesugi Kenshin.' } },
      { ja: '真田信之', zhTw: '真田信之', en: 'Sanada Nobuyuki', desc: { ja: '真田昌幸の長男で松代藩初代藩主。93歳まで長寿を全うした。', zhTw: '真田昌幸長男，松代藩初代藩主。享壽93歲。', en: 'Eldest son of Sanada Masayuki, first lord of Matsushiro, who lived to the age of 93.' } },
    ],
    trivia: [
      { ja: '第四次川中島の戦い（1561年）は日本戦国史上最も有名な合戦の一つ。', zhTw: '第四次川中島之戰（1561年）是日本戰國史上最著名的合戰之一。', en: 'The Fourth Battle of Kawanakajima (1561) is one of the most famous battles in Sengoku history.' },
      { ja: '真田宝物館には真田家伝来の甲冑や書状が多数展示されている。', zhTw: '真田寶物館展示大量真田家傳承的甲冑與書信。', en: 'The Sanada Treasure Museum displays armor, letters, and artifacts passed down through the Sanada clan.' },
    ],
    highlights: [
      { ja: '復元された太鼓門 — 松代城のシンボル。', zhTw: '復原的太鼓門 — 松代城的象徵。', en: 'Restored Drum Gate — the symbol of Matsushiro Castle.' },
      { ja: '真田邸と文武学校 — 藩士の暮らしと教育を伝える。', zhTw: '真田邸與文武學校 — 傳達藩士的生活與教育。', en: 'Sanada Residence and Bunbu School — preserving samurai life and education.' },
    ],
    architecture: [
      { ja: '千曲川の水を引き入れた水堀に囲まれた平城。', zhTw: '引千曲川之水的水堀環繞的平城。', en: 'A flatland castle surrounded by water moats fed from the Chikuma River.' },
      { ja: '本丸は石垣と土塁で囲まれ、北不明門・太鼓門などが復元されている。', zhTw: '本丸由石垣與土壘環繞，北不明門、太鼓門等已復原。', en: 'The honmaru is enclosed by stone walls and earthworks, with the north gate and drum gate restored.' },
    ],
  },
  {
    id: 'ueda', number: 27, regionId: 'chubu',
    name: { ja: '上田城', zhTw: '上田城', en: 'Ueda Castle' },
    city: { ja: '上田市', zhTw: '上田市', en: 'Ueda' },
    prefecture: { ja: '長野県', zhTw: '長野縣', en: 'Nagano' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 64, y: 52 },
    illustration: { style: 'classic', tiers: 2, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1583, event: { ja: '真田昌幸が上田城を築城した。', zhTw: '真田昌幸築建上田城。', en: 'Sanada Masayuki built Ueda Castle.' } },
      { year: 1585, event: { ja: '第一次上田合戦で真田昌幸が徳川の大軍を撃退した。', zhTw: '第一次上田合戰中真田昌幸擊退德川大軍。', en: 'In the First Battle of Ueda, Sanada Masayuki repelled a much larger Tokugawa army.' } },
      { year: 1600, event: { ja: '第二次上田合戦で再び徳川秀忠軍を足止めし関ヶ原への到着を遅らせた。', zhTw: '第二次上田合戰中再次阻止德川秀忠軍，延遲其抵達關原。', en: 'In the Second Battle of Ueda, Masayuki again stalled Tokugawa Hidetada\'s army, delaying it from reaching Sekigahara.' } },
    ],
    figures: [
      { ja: '真田昌幸', zhTw: '真田昌幸', en: 'Sanada Masayuki', desc: { ja: '「表裏比興の者」と称された知略の武将。二度にわたり徳川軍を撃退した。', zhTw: '被稱為「表裏比興之人」的智略武將。兩度擊退德川軍。', en: 'A brilliant strategist called "the man of two faces" who twice defeated the Tokugawa.' } },
      { ja: '真田幸村', zhTw: '真田幸村', en: 'Sanada Yukimura', desc: { ja: '「日本一の兵」と讃えられた昌幸の次男。大坂の陣で華々しく散った。', zhTw: '被讚譽為「日本第一兵」的昌幸次子。大阪之陣中壯烈戰死。', en: 'Masayuki\'s second son, hailed as "Japan\'s greatest warrior," who fell gloriously at the Siege of Osaka.' } },
    ],
    trivia: [
      { ja: '真田家は大河ドラマ「真田丸」(2016)で全国的ブームを巻き起こした。', zhTw: '真田家因大河劇「真田丸」（2016）在全國掀起熱潮。', en: 'The Sanada clan sparked a nationwide boom with the 2016 NHK drama "Sanada Maru."' },
      { ja: '上田城の桜は約1,000本で、千本桜まつりは市最大のイベント。', zhTw: '上田城約有1,000棵櫻花，千本櫻祭是全市最大活動。', en: 'Ueda Castle has about 1,000 cherry trees; the Senbon Sakura Festival is the city\'s biggest event.' },
    ],
    highlights: [
      { ja: '真田石 — 城内最大の巨石は真田氏の権威の象徴。', zhTw: '真田石 — 城內最大的巨石是真田氏權威的象徵。', en: 'Sanada Stone — the largest boulder in the castle symbolizes Sanada authority.' },
      { ja: '西櫓・南櫓・北櫓 — 江戸時代から現存する貴重な建造物。', zhTw: '西櫓、南櫓、北櫓 — 江戶時代留存至今的珍貴建築。', en: 'Three surviving Edo-period turrets — rare original castle structures.' },
    ],
    architecture: [
      { ja: '千曲川の河岸段丘上に築かれ、尼ヶ淵の崖を天然の要害とした。', zhTw: '築於千曲川河岸段丘上，以尼崎淵的懸崖為天然要害。', en: 'Built on river terraces above the Chikuma River, using Amagafuchi cliffs as a natural defense.' },
      { ja: '現存する西櫓は仙石忠政時代の建築で県宝に指定。', zhTw: '現存西櫓為仙石忠政時代建築，被指定為縣寶。', en: 'The surviving west turret dates from the Sengoku Tadamasa era and is a prefectural treasure.' },
    ],
  },
  {
    id: 'komoro', number: 28, regionId: 'chubu',
    name: { ja: '小諸城', zhTw: '小諸城', en: 'Komoro Castle' },
    city: { ja: '小諸市', zhTw: '小諸市', en: 'Komoro' },
    prefecture: { ja: '長野県', zhTw: '長野縣', en: 'Nagano' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 62, y: 54 },
    illustration: { style: 'classic', tiers: 1, color: '#f5f0e8', roofColor: '#5a3825' },
    goshuin: { bg: '#e8dfd0', ink: '#3a2518', seal: '#b83a3a', crest: '#7a6520' },
    history: [
      { year: 1554, event: { ja: '武田信玄が山本勘助に命じて小諸城を近世城郭に改修した。', zhTw: '武田信玄命山本勘助將小諸城改建為近世城郭。', en: 'Takeda Shingen ordered Yamamoto Kansuke to renovate Komoro into an early-modern castle.' } },
      { year: 1590, event: { ja: '仙石秀久が城主となり、大手門や三の門などを整備した。', zhTw: '仙石秀久成為城主，整建大手門與三之門等設施。', en: 'Sengoku Hidehisa became lord and built the main gate and third gate.' } },
      { year: 1926, event: { ja: '城跡が「懐古園」として整備され公園として公開された。', zhTw: '城跡整建為「懷古園」，作為公園對外開放。', en: 'The castle ruins were developed into "Kaikoen" park and opened to the public.' } },
    ],
    figures: [
      { ja: '山本勘助', zhTw: '山本勘助', en: 'Yamamoto Kansuke', desc: { ja: '武田信玄の軍師として知られ、小諸城の縄張りを設計したと伝わる。', zhTw: '以武田信玄軍師聞名，據傳設計了小諸城的配置。', en: 'Known as Takeda Shingen\'s strategist, said to have designed Komoro Castle\'s layout.' } },
      { ja: '島崎藤村', zhTw: '島崎藤村', en: 'Shimazaki Tōson', desc: { ja: '小諸で教鞭をとり、懐古園を愛した明治の文豪。「千曲川旅情の歌」で有名。', zhTw: '在小諸執教、深愛懷古園的明治文豪。以「千曲川旅情之歌」聞名。', en: 'Meiji-era author who taught in Komoro and loved Kaikoen; famous for his "Song of the Chikuma River."' } },
    ],
    trivia: [
      { ja: '城が城下町より低い位置にある全国でも珍しい「穴城」。', zhTw: '城郭位於城下町更低處的全國罕見「穴城」。', en: 'A rare "sunken castle" where the castle sits lower than its own castle town.' },
      { ja: '島崎藤村の「小諸なる古城のほとり」は懐古園の情景を詠んだ名作。', zhTw: '島崎藤村的「小諸古城畔」是詠嘆懷古園情景的名作。', en: 'Shimazaki Tōson\'s poem "By the Old Castle of Komoro" immortalized the park\'s scenery.' },
    ],
    highlights: [
      { ja: '三の門と大手門 — 共に重要文化財に指定された現存建造物。', zhTw: '三之門與大手門 — 均被指定為重要文化財的現存建築。', en: 'Third Gate and Main Gate — both surviving structures designated Important Cultural Properties.' },
      { ja: '懐古園からの千曲川の眺望 — 断崖上から望む渓谷美。', zhTw: '從懷古園眺望千曲川 — 從斷崖上遠眺溪谷之美。', en: 'Chikuma River views from Kaikoen — gorge scenery from the clifftop.' },
    ],
    architecture: [
      { ja: '千曲川の河岸段丘の崖を利用した天然の要害で、城下町より低い穴城。', zhTw: '利用千曲川河岸段丘崖壁的天然要害，低於城下町的穴城。', en: 'A natural fortress on Chikuma River terraces — uniquely, the castle sits below the town level.' },
      { ja: '三の門は寄棟造の二階建てで、小諸城を代表する建築物。', zhTw: '三之門為寄棟造二層建築，是小諸城的代表性建築。', en: 'The Third Gate is a two-story hip-roofed structure and the castle\'s most iconic building.' },
    ],
  },
  {
    id: 'takato', number: 30, regionId: 'chubu',
    name: { ja: '高遠城', zhTw: '高遠城', en: 'Takato Castle' },
    city: { ja: '伊那市', zhTw: '伊那市', en: 'Ina' },
    prefecture: { ja: '長野県', zhTw: '長野縣', en: 'Nagano' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 60, y: 56 },
    illustration: { style: 'classic', tiers: 1, color: '#f5f0e8', roofColor: '#3d5c4a' },
    goshuin: { bg: '#f0e6d3', ink: '#2d4a3e', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1545, event: { ja: '武田信玄が高遠城を攻略し、伊那支配の拠点とした。', zhTw: '武田信玄攻略高遠城，作為伊那統治的據點。', en: 'Takeda Shingen captured Takato Castle and used it as his base for controlling the Ina region.' } },
      { year: 1582, event: { ja: '織田信忠の大軍に攻められ、城主仁科盛信が壮絶な最期を遂げた。', zhTw: '被織田信忠大軍攻打，城主仁科盛信壯烈戰死。', en: 'Attacked by Oda Nobutada\'s massive army; castle lord Nishina Morinobu fought to a heroic death.' } },
      { year: 1872, event: { ja: '廃城後に桜が植えられ、現在は「天下第一の桜」と称される名所に。', zhTw: '廢城後種植櫻花，現今被譽為「天下第一之櫻」的名所。', en: 'Cherry trees were planted after abandonment; now renowned as "the finest cherry blossoms under heaven."' } },
    ],
    figures: [
      { ja: '仁科盛信', zhTw: '仁科盛信', en: 'Nishina Morinobu', desc: { ja: '信玄の五男で高遠城を死守し壮烈に戦死した忠義の武将。', zhTw: '信玄五子，死守高遠城壯烈戰死的忠義武將。', en: 'Shingen\'s fifth son who defended Takato to the death in a heroic last stand.' } },
      { ja: '保科正之', zhTw: '保科正之', en: 'Hoshina Masayuki', desc: { ja: '二代将軍秀忠の隠し子で高遠藩主となり、後に会津藩主として名君と称された。', zhTw: '二代將軍秀忠的私生子，成為高遠藩主，後為會津藩主被譽為名君。', en: 'Secret son of Shōgun Hidetada who became lord of Takato, later celebrated as a wise ruler of Aizu.' } },
    ],
    trivia: [
      { ja: '約1,500本のタカトオコヒガンザクラは「天下第一の桜」と評され、桜の名所100選にも選定。', zhTw: '約1,500棵高遠小彼岸櫻被譽為「天下第一之櫻」，入選百大櫻花名所。', en: 'About 1,500 Takato kohigan cherry trees are hailed as "the finest cherry blossoms" and listed among Japan\'s Top 100.' },
      { ja: '1582年の高遠城の戦いは武田氏最後の激戦として歴史に刻まれている。', zhTw: '1582年的高遠城之戰作為武田氏最後的激戰銘刻於歷史。', en: 'The 1582 Battle of Takato is recorded in history as the Takeda clan\'s final fierce battle.' },
    ],
    highlights: [
      { ja: '高遠の桜（4月）— 天下第一と謳われる圧巻の桜景色。', zhTw: '高遠之櫻（4月）— 被譽為天下第一的壯觀櫻花景色。', en: 'Takato cherry blossoms (April) — the breathtaking "finest cherry blossoms under heaven."' },
      { ja: '空堀と土塁の遺構 — よく残る戦国山城の防御構造。', zhTw: '空壕與土壘遺構 — 保存完好的戰國山城防禦結構。', en: 'Dry moats and earthwork remains — well-preserved Sengoku-era defenses.' },
    ],
    architecture: [
      { ja: '三峰川と藤沢川の合流点の河岸段丘上に築かれた天然の要害。', zhTw: '築於三峰川與藤澤川匯流處河岸段丘上的天然要害。', en: 'A natural fortress on river terraces at the confluence of the Mibu and Fujisawa rivers.' },
      { ja: '空堀で本丸・二の丸・三の丸を区切る連郭式の縄張り。', zhTw: '以空壕分隔本丸、二之丸、三之丸的連郭式配置。', en: 'A chain layout with dry moats separating the honmaru, ninomaru, and sannomaru.' },
    ],
  },
  {
    id: 'shibata', number: 31, regionId: 'chubu',
    name: { ja: '新発田城', zhTw: '新發田城', en: 'Shibata Castle' },
    city: { ja: '新発田市', zhTw: '新發田市', en: 'Shibata' },
    prefecture: { ja: '新潟県', zhTw: '新潟縣', en: 'Niigata' },
    type: 'hirajiro', designation: '国指定史跡',
    position: { x: 66, y: 44 },
    illustration: { style: 'classic', tiers: 2, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#9a7030' },
    history: [
      { year: 1598, event: { ja: '溝口秀勝が入封し新発田城の築城を開始した。', zhTw: '溝口秀勝入封，開始築建新發田城。', en: 'Mizoguchi Hidekatsu took over and began building Shibata Castle.' } },
      { year: 1654, event: { ja: '三代溝口宣直の時代に城がほぼ完成した。', zhTw: '第三代溝口宣直時期城郭大致完工。', en: 'The castle was largely completed during the tenure of the third lord, Mizoguchi Nobunao.' } },
      { year: 2004, event: { ja: '三階櫓が復元され、全国唯一のT字型屋根の櫓が蘇った。', zhTw: '三階櫓復原，全國唯一T字型屋頂的櫓重現。', en: 'The three-story turret was reconstructed, reviving Japan\'s only T-shaped roof turret.' } },
    ],
    figures: [
      { ja: '溝口秀勝', zhTw: '溝口秀勝', en: 'Mizoguchi Hidekatsu', desc: { ja: '新発田藩初代藩主で城と城下町の基盤を築いた。', zhTw: '新發田藩初代藩主，奠定城與城下町的基礎。', en: 'First lord of Shibata who established the castle and its town.' } },
      { ja: '堀部安兵衛', zhTw: '堀部安兵衛', en: 'Horibe Yasubei', desc: { ja: '赤穂浪士の一人で新発田出身。高田馬場の決闘で名を馳せた。', zhTw: '赤穗浪士之一，新發田出身。以高田馬場決鬥聞名。', en: 'One of the 47 Rōnin, born in Shibata, famous for the duel at Takadanobaba.' } },
    ],
    trivia: [
      { ja: '三階櫓の屋根が丁字型（T字型）になっている全国唯一の城。', zhTw: '三階櫓屋頂為丁字型（T字型）的全國唯一城郭。', en: 'The only castle in Japan with a T-shaped roof on its three-story turret.' },
      { ja: '本丸の大部分が陸上自衛隊の駐屯地となっており、一般公開は限定的。', zhTw: '本丸大部分為陸上自衛隊駐屯地，一般公開範圍有限。', en: 'Most of the honmaru is a JSDF garrison, so public access is limited.' },
    ],
    highlights: [
      { ja: '三階櫓 — 全国唯一のT字型屋根と3匹の鯱を持つ独特の櫓。', zhTw: '三階櫓 — 擁有全國唯一T字型屋頂與3隻鯱的獨特櫓。', en: 'Three-story turret — unique T-shaped roof topped with three shachihoko ornaments.' },
      { ja: '辰巳櫓と表門 — 江戸時代から現存する重要文化財。', zhTw: '辰巳櫓與表門 — 江戶時代留存至今的重要文化財。', en: 'Tatsumi Turret and front gate — surviving Edo-period Important Cultural Properties.' },
    ],
    architecture: [
      { ja: '辰巳櫓は現存する二重二階の隅櫓で重要文化財に指定。', zhTw: '辰巳櫓為現存二重二階角櫓，被指定為重要文化財。', en: 'The Tatsumi corner turret is an original two-story structure designated an Important Cultural Property.' },
      { ja: '石垣と水堀に囲まれた本丸・二の丸を持つ典型的な近世平城。', zhTw: '擁有石垣與水堀環繞本丸、二之丸的典型近世平城。', en: 'A typical early-modern flatland castle with stone walls and water moats around the honmaru and ninomaru.' },
    ],
  },
  {
    id: 'kasugayama', number: 32, regionId: 'chubu',
    name: { ja: '春日山城', zhTw: '春日山城', en: 'Kasugayama Castle' },
    city: { ja: '上越市', zhTw: '上越市', en: 'Jōetsu' },
    prefecture: { ja: '新潟県', zhTw: '新潟縣', en: 'Niigata' },
    type: 'yamajiro', designation: '国指定史跡',
    position: { x: 60, y: 46 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#8b7e6b', roofColor: '#3d5c4a' },
    goshuin: { bg: '#e8dfd0', ink: '#2d4a3e', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1507, event: { ja: '長尾為景が春日山城を本格的に整備し、越後統治の拠点とした。', zhTw: '長尾為景正式整備春日山城，作為越後統治的據點。', en: 'Nagao Tamekage developed Kasugayama Castle as the center of Echigo governance.' } },
      { year: 1548, event: { ja: '上杉謙信（長尾景虎）が家督を継ぎ、春日山城から天下に名を轟かせた。', zhTw: '上杉謙信（長尾景虎）繼承家督，從春日山城威震天下。', en: 'Uesugi Kenshin (Nagao Kagetora) inherited the domain and achieved nationwide fame from Kasugayama.' } },
      { year: 1607, event: { ja: '堀氏が福島城に移り、春日山城は廃城となった。', zhTw: '堀氏移至福島城，春日山城廢城。', en: 'The Hori clan relocated to Fukushima Castle and Kasugayama was abandoned.' } },
    ],
    figures: [
      { ja: '上杉謙信', zhTw: '上杉謙信', en: 'Uesugi Kenshin', desc: { ja: '「越後の龍」「軍神」と称された戦国最強の武将。義を重んじ武田信玄と五度にわたり川中島で戦った。', zhTw: '被稱為「越後之龍」「軍神」的戰國最強武將。重義而與武田信玄五度在川中島交戰。', en: 'The "Dragon of Echigo" and "God of War," one of the greatest Sengoku warriors who fought Takeda Shingen five times at Kawanakajima.' } },
      { ja: '上杉景勝', zhTw: '上杉景勝', en: 'Uesugi Kagekatsu', desc: { ja: '謙信の養子で後継者。豊臣五大老の一人として会津120万石を領した。', zhTw: '謙信的養子及繼承人。作為豐臣五大老之一領有會津120萬石。', en: 'Kenshin\'s adopted heir who became one of Toyotomi\'s Five Great Elders, ruling 1.2 million koku at Aizu.' } },
    ],
    trivia: [
      { ja: '謙信は城内の毘沙門堂で戦勝を祈願し「毘」の旗を掲げて出陣した。', zhTw: '謙信在城內毘沙門堂祈求戰勝，舉「毘」旗出征。', en: 'Kenshin prayed for victory at the Bishamonten hall within the castle and marched under the "Bi" banner.' },
      { ja: '標高約180mの山頂に本丸を持つ大規模な山城で、曲輪の数は70以上。', zhTw: '在標高約180公尺的山頂設本丸的大規模山城，曲輪數超過70個。', en: 'A massive mountain castle with the honmaru at about 180m elevation and over 70 compounds.' },
    ],
    highlights: [
      { ja: '本丸跡からの日本海の眺望 — 謙信が見た景色を体感。', zhTw: '從本丸遺跡眺望日本海 — 體驗謙信所見的景色。', en: 'Sea of Japan views from the honmaru — experience the landscape Kenshin once surveyed.' },
      { ja: '毘沙門堂跡 — 謙信の信仰の場として知られる。', zhTw: '毘沙門堂遺跡 — 以謙信信仰之地聞名。', en: 'Bishamonten Hall ruins — the sacred site of Kenshin\'s devotion.' },
    ],
    architecture: [
      { ja: '標高180mの山全体を要塞化した巨大山城で、70以上の曲輪を持つ。', zhTw: '將標高180公尺的整座山要塞化的巨大山城，擁有70個以上曲輪。', en: 'A massive mountain fortress covering an entire 180m peak with over 70 compounds.' },
      { ja: '石垣はほとんど使わず、自然地形と空堀・土塁で防御する典型的な中世山城。', zhTw: '幾乎不使用石垣，以自然地形與空壕、土壘防禦的典型中世山城。', en: 'A classic medieval mountain castle using natural terrain, dry moats, and earthworks with minimal stonework.' },
    ],
  },
  {
    id: 'takaoka', number: 33, regionId: 'chubu',
    name: { ja: '高岡城', zhTw: '高岡城', en: 'Takaoka Castle' },
    city: { ja: '高岡市', zhTw: '高岡市', en: 'Takaoka' },
    prefecture: { ja: '富山県', zhTw: '富山縣', en: 'Toyama' },
    type: 'hirajiro', designation: '国指定史跡',
    position: { x: 56, y: 48 },
    illustration: { style: 'classic', tiers: 1, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2a2a2a', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1609, event: { ja: '前田利長が隠居城として高岡城を築いた。', zhTw: '前田利長築建高岡城作為隱居城。', en: 'Maeda Toshinaga built Takaoka Castle as his retirement residence.' } },
      { year: 1615, event: { ja: '一国一城令により廃城となったが、城跡は破壊されず残された。', zhTw: '因一國一城令廢城，但城跡未被破壞而保留。', en: 'Abandoned under the one-castle-per-domain decree, but the ruins were left intact.' } },
      { year: 1875, event: { ja: '高岡古城公園として整備され市民の憩いの場に。', zhTw: '整建為高岡古城公園，成為市民的休憩場所。', en: 'Developed into Takaoka Castle Park, becoming a beloved public space.' } },
    ],
    figures: [
      { ja: '前田利長', zhTw: '前田利長', en: 'Maeda Toshinaga', desc: { ja: '加賀藩二代藩主で高岡の街を開いた。高岡大仏の鋳造も奨励した。', zhTw: '加賀藩第二代藩主，開拓了高岡之街。亦鼓勵鑄造高岡大佛。', en: 'Second lord of Kaga who founded Takaoka city and encouraged local craftsmanship.' } },
      { ja: '高山右近', zhTw: '高山右近', en: 'Takayama Ukon', desc: { ja: 'キリシタン大名で高岡城の縄張りを設計したとされる。', zhTw: '天主教大名，據傳設計了高岡城的配置。', en: 'A Christian daimyō credited with designing Takaoka Castle\'s layout.' } },
    ],
    trivia: [
      { ja: '水堀の面積が城域の約3分の1を占め、堀が非常に美しい公園。', zhTw: '水堀面積佔城域約三分之一，護城河極為優美的公園。', en: 'Water moats cover about a third of the castle grounds, creating an exceptionally scenic park.' },
      { ja: '日本さくら名所100選に選ばれた桜の名所でもある。', zhTw: '入選日本櫻花名所100選的賞櫻勝地。', en: 'Selected as one of Japan\'s 100 Best Cherry Blossom Spots.' },
    ],
    highlights: [
      { ja: '広大な水堀 — 春は桜、夏は蓮、秋は紅葉、冬は雪景色。', zhTw: '廣闊水堀 — 春櫻、夏蓮、秋紅葉、冬雪景。', en: 'Expansive water moats — cherry blossoms in spring, lotus in summer, foliage in autumn, snow in winter.' },
      { ja: '前田利長公の銅像 — 高岡開祖への敬意を表す。', zhTw: '前田利長公銅像 — 表達對高岡開祖的敬意。', en: 'Bronze statue of Maeda Toshinaga — honoring the city\'s founder.' },
    ],
    architecture: [
      { ja: '水堀に囲まれた本丸・二の丸・三の丸からなる輪郭式の平城。', zhTw: '由水堀環繞的本丸、二之丸、三之丸構成的輪郭式平城。', en: 'A concentric flatland castle with honmaru, ninomaru, and sannomaru surrounded by water moats.' },
      { ja: '築城期間が短く建物は残らないが、堀と土塁の保存状態は良好。', zhTw: '築城期間短暫，建築未留存，但壕溝與土壘保存狀態良好。', en: 'Though the short construction period left no buildings, moats and earthworks are well preserved.' },
    ],
  },
  {
    id: 'nanao', number: 34, regionId: 'chubu',
    name: { ja: '七尾城', zhTw: '七尾城', en: 'Nanao Castle' },
    city: { ja: '七尾市', zhTw: '七尾市', en: 'Nanao' },
    prefecture: { ja: '石川県', zhTw: '石川縣', en: 'Ishikawa' },
    type: 'yamajiro', designation: '国指定史跡',
    position: { x: 54, y: 46 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#8b7e6b', roofColor: '#3d5c4a' },
    goshuin: { bg: '#e8dfd0', ink: '#2d4a3e', seal: '#b83a3a', crest: '#7a6520' },
    history: [
      { year: 1408, event: { ja: '能登守護・畠山満慶が七尾城を築いた。', zhTw: '能登守護畠山滿慶築建七尾城。', en: 'Hatakeyama Mitsunori, protector of Noto, built Nanao Castle.' } },
      { year: 1577, event: { ja: '上杉謙信が七尾城を攻略。城から見た景色に感動し「九月十三夜」の詩を詠んだとされる。', zhTw: '上杉謙信攻略七尾城。據傳被城上景色感動而作「九月十三夜」之詩。', en: 'Uesugi Kenshin captured the castle; moved by the view, he reportedly composed the poem "Thirteenth Night of the Ninth Month."' } },
      { year: 1589, event: { ja: '前田利家の支配下で廃城となった。', zhTw: '在前田利家統治下廢城。', en: 'Abandoned under Maeda Toshiie\'s rule.' } },
    ],
    figures: [
      { ja: '畠山義総', zhTw: '畠山義總', en: 'Hatakeyama Yoshifusa', desc: { ja: '七尾城を最も栄えさせた能登畠山氏の名君。', zhTw: '使七尾城最為繁榮的能登畠山氏名君。', en: 'The most celebrated lord of the Noto Hatakeyama who brought Nanao Castle to its peak.' } },
      { ja: '上杉謙信', zhTw: '上杉謙信', en: 'Uesugi Kenshin', desc: { ja: '七尾城攻略後にこの地から「霜は軍営に満ちて秋気清し」と詠んだ軍神。', zhTw: '攻略七尾城後在此地吟詠「霜滿軍營秋氣清」的軍神。', en: 'The God of War who composed a famous poem about the autumn scenery after capturing the castle.' } },
    ],
    trivia: [
      { ja: '日本五大山城の一つに数えられる能登最大の山城。', zhTw: '被列為日本五大山城之一的能登最大山城。', en: 'One of Japan\'s five greatest mountain castles and the largest in the Noto Peninsula.' },
      { ja: '謙信が詠んだとされる漢詩は七尾城の絶景を象徴する名句として知られる。', zhTw: '據傳謙信所作的漢詩是象徵七尾城絕景的名句。', en: 'Kenshin\'s poem symbolizes Nanao Castle\'s spectacular scenery and is widely known.' },
    ],
    highlights: [
      { ja: '本丸からの七尾湾の大パノラマ — 謙信も感動した絶景。', zhTw: '從本丸眺望七尾灣的大全景 — 連謙信也為之感動的絕景。', en: 'Panoramic views of Nanao Bay from the honmaru — the same vista that moved Kenshin.' },
      { ja: '野面積みの石垣群 — 北陸では珍しい中世の石垣が残る。', zhTw: '野面積石垣群 — 在北陸罕見的中世石垣遺存。', en: 'Rough-stacked stone walls — rare medieval stonework surviving in the Hokuriku region.' },
    ],
    architecture: [
      { ja: '標高約300mの山頂から山腹にかけて無数の曲輪が展開する大規模山城。', zhTw: '從標高約300公尺的山頂至山腰展開無數曲輪的大規模山城。', en: 'A vast mountain castle with countless compounds spreading from the 300m summit down the slopes.' },
      { ja: '五つの尾根に曲輪群を配置し、各尾根を堀切で遮断する壮大な縄張り。', zhTw: '在五條山脊配置曲輪群，以堀切遮斷各山脊的壯闊配置。', en: 'Compounds arranged across five ridges, each separated by moat cuts in a grand layout.' },
    ],
  },
  {
    id: 'maruoka', number: 36, regionId: 'chubu',
    name: { ja: '丸岡城', zhTw: '丸岡城', en: 'Maruoka Castle' },
    city: { ja: '坂井市', zhTw: '坂井市', en: 'Sakai' },
    prefecture: { ja: '福井県', zhTw: '福井縣', en: 'Fukui' },
    type: 'hirayama', designation: '重要文化財',
    position: { x: 56, y: 52 },
    illustration: { style: 'classic', tiers: 2, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1576, event: { ja: '柴田勝家の甥・柴田勝豊が一向一揆に備えて丸岡城を築いた。', zhTw: '柴田勝家之姪柴田勝豐為防備一向一揆而築建丸岡城。', en: 'Shibata Katsutoyo, nephew of Shibata Katsuie, built Maruoka Castle to defend against Ikkō-ikki uprisings.' } },
      { year: 1948, event: { ja: '福井地震で天守が倒壊したが、元の部材を使い忠実に再建された。', zhTw: '福井地震中天守倒塌，但使用原部材忠實重建。', en: 'The keep collapsed in the Fukui Earthquake but was faithfully rebuilt using the original materials.' } },
      { year: 2024, event: { ja: '国宝再指定を目指した学術調査が進められている。', zhTw: '以重新指定為國寶為目標的學術調查持續進行中。', en: 'Academic research is underway aiming for re-designation as a National Treasure.' } },
    ],
    figures: [
      { ja: '柴田勝豊', zhTw: '柴田勝豐', en: 'Shibata Katsutoyo', desc: { ja: '柴田勝家の養子で丸岡城を築城した初代城主。', zhTw: '柴田勝家的養子，築建丸岡城的初代城主。', en: 'Adopted son of Shibata Katsuie who built Maruoka Castle as its first lord.' } },
      { ja: '本多成重', zhTw: '本多成重', en: 'Honda Narishige', desc: { ja: '丸岡藩初代藩主で、本多氏8代にわたる統治の基礎を築いた。', zhTw: '丸岡藩初代藩主，奠定本多氏8代統治的基礎。', en: 'First lord of Maruoka domain who established the Honda clan\'s eight-generation rule.' } },
    ],
    trivia: [
      { ja: '現存12天守の一つで、天守の屋根が石製の笏谷石瓦で葺かれた珍しい城。', zhTw: '現存12天守之一，天守屋頂以石製笏谷石瓦鋪設的罕見城。', en: 'One of 12 surviving original keeps; uniquely roofed with shakudani stone tiles instead of ceramic.' },
      { ja: '「お静慰霊碑」は人柱伝説にまつわる悲しい物語を伝える。', zhTw: '「阿靜慰靈碑」傳述與人柱傳說相關的悲傷故事。', en: 'The "Oshizu Memorial" tells the sad legend of a human pillar sacrifice during construction.' },
    ],
    highlights: [
      { ja: '現存天守 — 笏谷石の石瓦が独特の風格を醸す。', zhTw: '現存天守 — 笏谷石瓦散發獨特風格。', en: 'Original surviving keep — stone-tile roof creates a distinctive atmosphere.' },
      { ja: '日本さくら名所100選 — 約400本のソメイヨシノが城を彩る。', zhTw: '日本櫻花名所100選 — 約400棵染井吉野櫻裝點城郭。', en: 'One of Japan\'s 100 Best Cherry Blossom Spots — 400 Somei Yoshino trees adorn the castle.' },
    ],
    architecture: [
      { ja: '二重三階の独立式望楼型天守で、現存天守の中では最も古い様式とされる。', zhTw: '二重三階獨立式望樓型天守，被視為現存天守中最古老的樣式。', en: 'A two-layer, three-story independent watchtower-style keep — considered the oldest surviving keep style.' },
      { ja: '屋根に笏谷石の石瓦を使用しており、全国的にも極めて珍しい。', zhTw: '屋頂使用笏谷石石瓦，在全國極為罕見。', en: 'Roofed with shakudani stone tiles — extremely rare nationwide.' },
    ],
  },
  {
    id: 'ichijodani', number: 37, regionId: 'chubu',
    name: { ja: '一乗谷城', zhTw: '一乘谷城', en: 'Ichijōdani Castle' },
    city: { ja: '福井市', zhTw: '福井市', en: 'Fukui' },
    prefecture: { ja: '福井県', zhTw: '福井縣', en: 'Fukui' },
    type: 'yamajiro', designation: '特別史跡',
    position: { x: 54, y: 54 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#8b7e6b', roofColor: '#3d5c4a' },
    goshuin: { bg: '#e8dfd0', ink: '#2d4a3e', seal: '#b83a3a', crest: '#7a6520' },
    history: [
      { year: 1471, event: { ja: '朝倉孝景が一乗谷を本拠とし、以後5代約100年にわたり越前を統治した。', zhTw: '朝倉孝景以一乘谷為據點，此後5代約100年統治越前。', en: 'Asakura Takakage made Ichijōdani his base; the clan ruled Echizen for five generations over about 100 years.' } },
      { year: 1573, event: { ja: '織田信長の攻撃により朝倉氏が滅亡し、一乗谷は灰燼に帰した。', zhTw: '因織田信長的攻擊朝倉氏滅亡，一乘谷化為灰燼。', en: 'Oda Nobunaga\'s assault destroyed the Asakura clan and reduced Ichijōdani to ashes.' } },
      { year: 1967, event: { ja: '発掘調査が始まり、戦国時代の城下町がほぼ完全な形で出土した。', zhTw: '開始發掘調查，戰國時代的城下町以幾乎完整的形態出土。', en: 'Excavations began, unearthing a nearly complete Sengoku-era castle town.' } },
    ],
    figures: [
      { ja: '朝倉孝景', zhTw: '朝倉孝景', en: 'Asakura Takakage', desc: { ja: '朝倉氏の全盛期を築いた七代当主。分国法「朝倉孝景条々」を制定した。', zhTw: '建立朝倉氏全盛期的第七代當主。制定分國法「朝倉孝景條條」。', en: 'Seventh head who brought the Asakura to their peak and established the clan\'s code of laws.' } },
      { ja: '朝倉義景', zhTw: '朝倉義景', en: 'Asakura Yoshikage', desc: { ja: '最後の当主。信長に敗れ自刃し、朝倉氏五代の栄華に終止符を打った。', zhTw: '最後的當主。敗於信長而自刃，為朝倉氏五代的榮華畫下句點。', en: 'The last Asakura lord who fell to Nobunaga and ended five generations of clan glory.' } },
    ],
    trivia: [
      { ja: '「日本のポンペイ」と称される戦国城下町の遺跡がほぼ完全に発掘された。', zhTw: '被稱為「日本的龐貝」的戰國城下町遺跡幾乎完整出土。', en: 'Called "Japan\'s Pompeii" — a Sengoku castle town unearthed in near-complete form.' },
      { ja: '復原された町並みでは戦国時代の武家屋敷や商人の暮らしを体感できる。', zhTw: '在復原的街景中可以體驗戰國時代武家宅邸與商人的生活。', en: 'The reconstructed streets let visitors experience samurai residences and merchant life of the Sengoku era.' },
    ],
    highlights: [
      { ja: '復原町並 — 発掘成果に基づき忠実に再現された戦国の城下町。', zhTw: '復原町並 — 根據發掘成果忠實再現的戰國城下町。', en: 'Reconstructed townscape — a Sengoku castle town faithfully recreated from excavation findings.' },
      { ja: '朝倉氏庭園群 — 4つの庭園遺構は特別名勝に指定。', zhTw: '朝倉氏庭園群 — 4處庭園遺構被指定為特別名勝。', en: 'Asakura clan gardens — four garden ruins designated Special Places of Scenic Beauty.' },
    ],
    architecture: [
      { ja: '谷の両側の山に城砦群を配し、谷底に城下町を発展させた独特の構造。', zhTw: '在谷地兩側山上配置城砦群，在谷底發展城下町的獨特結構。', en: 'A unique layout with mountain fortresses on both sides of the valley and a town at its base.' },
      { ja: '朝倉館跡の唐門は朝倉氏の栄華を今に伝える象徴的な遺構。', zhTw: '朝倉館遺跡的唐門是傳承朝倉氏榮華的象徵性遺構。', en: 'The karahafu gate at the Asakura residence ruins symbolizes the clan\'s past glory.' },
    ],
  },
  {
    id: 'iwamura', number: 38, regionId: 'chubu',
    name: { ja: '岩村城', zhTw: '岩村城', en: 'Iwamura Castle' },
    city: { ja: '恵那市', zhTw: '惠那市', en: 'Ena' },
    prefecture: { ja: '岐阜県', zhTw: '岐阜縣', en: 'Gifu' },
    type: 'yamajiro', designation: '国指定史跡',
    position: { x: 58, y: 58 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#8b7e6b', roofColor: '#5a3825' },
    goshuin: { bg: '#e8dfd0', ink: '#3a2518', seal: '#c53d43', crest: '#7a6520' },
    history: [
      { year: 1185, event: { ja: '加藤景廉が岩村に城を築いたのが始まりとされる。', zhTw: '加藤景廉在岩村築城，為城之起源。', en: 'Katō Kagekado is said to have built the first fortification at Iwamura.' } },
      { year: 1572, event: { ja: '武田軍の侵攻で「おつやの方」が女城主として城を守った。', zhTw: '武田軍侵攻時「阿艷之方」以女城主身分守城。', en: 'When Takeda forces invaded, Lady Otsuya defended the castle as its female lord.' } },
      { year: 1575, event: { ja: '織田信長が岩村城を奪還し、おつやの方を処刑した。', zhTw: '織田信長奪回岩村城，處刑阿艷之方。', en: 'Oda Nobunaga recaptured the castle and executed Lady Otsuya.' } },
    ],
    figures: [
      { ja: 'おつやの方', zhTw: '阿艷之方', en: 'Lady Otsuya', desc: { ja: '信長の叔母で、戦国時代に女城主として岩村城を治めた悲劇の女性。', zhTw: '信長的叔母，戰國時代以女城主身分治理岩村城的悲劇女性。', en: 'Nobunaga\'s aunt, a tragic figure who ruled Iwamura Castle as one of the few female castle lords in the Sengoku era.' } },
      { ja: '遠山景任', zhTw: '遠山景任', en: 'Tōyama Kagetō', desc: { ja: '岩村遠山氏の当主で織田・武田の間で領地を守ろうとした。', zhTw: '岩村遠山氏當主，在織田與武田之間試圖守護領地。', en: 'Head of the Iwamura Tōyama clan who tried to protect his lands between the Oda and Takeda.' } },
    ],
    trivia: [
      { ja: '日本三大山城の一つで、標高717mは日本の城郭で最も高い場所にある。', zhTw: '日本三大山城之一，標高717公尺為日本城郭中最高處。', en: 'One of Japan\'s three great mountain castles, at 717m the highest-altitude castle site in Japan.' },
      { ja: '「女城主の里」として知られ、おつやの方の物語は小説やドラマの題材に。', zhTw: '以「女城主之里」聞名，阿艷之方的故事成為小說與戲劇題材。', en: 'Known as the "Village of the Female Castle Lord"; Lady Otsuya\'s story has inspired novels and dramas.' },
    ],
    highlights: [
      { ja: '六段壁の石垣 — 山頂に築かれた圧巻の六段の石垣群。', zhTw: '六段壁石垣 — 築於山頂的壯觀六段石垣群。', en: 'Six-tier stone walls — a stunning series of six stone wall steps at the summit.' },
      { ja: '岩村城下町 — 重要伝統的建造物群保存地区に指定された古い町並み。', zhTw: '岩村城下町 — 被指定為重要傳統建造物群保存地區的古老街景。', en: 'Iwamura castle town — a traditional streetscape designated an Important Preservation District.' },
    ],
    architecture: [
      { ja: '標高717mの山頂に本丸を置く日本最高所の山城で、六段壁の石垣が特徴。', zhTw: '在標高717公尺山頂設本丸的日本最高處山城，以六段壁石垣為特徵。', en: 'Japan\'s highest mountain castle at 717m, featuring distinctive six-tiered stone walls at the summit.' },
      { ja: '霧ヶ井という井戸に蛇骨を投じると霧が立ち込めたという伝説から「霧ヶ城」の別名を持つ。', zhTw: '傳說向霧井投入蛇骨便會起霧，因此有「霧之城」的別名。', en: 'Known as "Castle of Mist" — legend says dropping snake bones into Kirigai Well would summon fog.' },
    ],
  },
  {
    id: 'gifu', number: 39, regionId: 'chubu',
    name: { ja: '岐阜城', zhTw: '岐阜城', en: 'Gifu Castle' },
    city: { ja: '岐阜市', zhTw: '岐阜市', en: 'Gifu' },
    prefecture: { ja: '岐阜県', zhTw: '岐阜縣', en: 'Gifu' },
    type: 'yamajiro', designation: '国指定史跡',
    position: { x: 58, y: 56 },
    illustration: { style: 'yamashiro', tiers: 3, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1201, event: { ja: '二階堂行政が稲葉山に砦を築いたのが始まりとされる。', zhTw: '二階堂行政在稻葉山築砦，為城之起源。', en: 'Nikaidō Yukimasa is said to have built the first fortification on Mt. Inaba.' } },
      { year: 1567, event: { ja: '織田信長が斎藤龍興を追放して稲葉山城を奪取し「岐阜」と改名。「天下布武」を掲げた。', zhTw: '織田信長驅逐齋藤龍興奪取稻葉山城，改名「岐阜」。舉起「天下布武」旗號。', en: 'Oda Nobunaga expelled Saitō Tatsuoki, seized the castle, renamed it "Gifu," and proclaimed "Tenka Fubu" (Rule the Realm by Force).' } },
      { year: 1600, event: { ja: '関ヶ原の戦いの前哨戦で落城し、以後廃城となった。', zhTw: '在關原之戰的前哨戰中陷落，此後廢城。', en: 'Fell in a preliminary battle before Sekigahara and was subsequently abandoned.' } },
    ],
    figures: [
      { ja: '織田信長', zhTw: '織田信長', en: 'Oda Nobunaga', desc: { ja: '岐阜城を拠点に天下統一への道を歩み始めた戦国の革命児。', zhTw: '以岐阜城為據點開始邁向天下統一之路的戰國革命兒。', en: 'The Sengoku revolutionary who began his path to national unification from Gifu Castle.' } },
      { ja: '斎藤道三', zhTw: '齋藤道三', en: 'Saitō Dōsan', desc: { ja: '「美濃のマムシ」と恐れられた梟雄で、稲葉山城を本拠に美濃を支配した。', zhTw: '被畏懼為「美濃之蝮」的梟雄，以稻葉山城為據點統治美濃。', en: 'The "Viper of Mino," a cunning lord who ruled Mino Province from Inabayama Castle.' } },
    ],
    trivia: [
      { ja: '信長は城内でルイス・フロイスを接見し、宣教師に日本の壮大な城を見せた。', zhTw: '信長在城內接見路易斯・弗洛伊斯，向傳教士展示日本的壯觀城郭。', en: 'Nobunaga received missionary Luis Frois inside the castle, showing him Japan\'s grand fortifications.' },
      { ja: '金華山ロープウェーで山頂まで行ける観光名所としても人気。', zhTw: '可搭乘金華山纜車前往山頂的人氣觀光名所。', en: 'A popular tourist attraction accessible by the Kinka-zan Ropeway to the summit.' },
    ],
    highlights: [
      { ja: '天守からの360度パノラマ — 長良川と濃尾平野を一望。', zhTw: '從天守360度全景 — 一覽長良川與濃尾平原。', en: '360-degree views from the keep — sweeping vistas of the Nagara River and Nōbi Plain.' },
      { ja: '長良川鵜飼 — 1,300年以上の歴史を持つ伝統漁法。', zhTw: '長良川鵜飼 — 擁有1,300年以上歷史的傳統漁法。', en: 'Nagara River cormorant fishing — a tradition spanning over 1,300 years.' },
    ],
    architecture: [
      { ja: '標高329mの金華山山頂に築かれた典型的な山城。現在の天守は1956年のRC造再建。', zhTw: '築於標高329公尺金華山山頂的典型山城。現天守為1956年鋼筋混凝土重建。', en: 'A classic mountain castle atop 329m Mt. Kinka; the current keep is a 1956 concrete reconstruction.' },
      { ja: '信長時代には山上の城と山麓の居館を使い分ける「一城二構」の形態だった。', zhTw: '信長時代採用山上城郭與山麓居館分別使用的「一城二構」形態。', en: 'Under Nobunaga, the castle operated as a dual structure — a mountaintop fortress and a foothill residence.' },
    ],
  },
  {
    id: 'yamanaka', number: 40, regionId: 'chubu',
    name: { ja: '山中城', zhTw: '山中城', en: 'Yamanaka Castle' },
    city: { ja: '三島市', zhTw: '三島市', en: 'Mishima' },
    prefecture: { ja: '静岡県', zhTw: '靜岡縣', en: 'Shizuoka' },
    type: 'yamajiro', designation: '国指定史跡',
    position: { x: 64, y: 58 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#7b8e6b', roofColor: '#3d5c4a' },
    goshuin: { bg: '#e8dfd0', ink: '#2d4a3e', seal: '#b83a3a', crest: '#7a6520' },
    history: [
      { year: 1560, event: { ja: '北条氏が箱根の西に山中城を築き、西方防衛の拠点とした。', zhTw: '北條氏在箱根以西築建山中城，作為西方防禦據點。', en: 'The Hōjō clan built Yamanaka Castle west of Hakone as a western defense position.' } },
      { year: 1589, event: { ja: '豊臣の侵攻に備えて急ぎ拡張工事が行われた。', zhTw: '為防備豐臣入侵而緊急進行擴建工程。', en: 'Hasty expansion work was carried out in preparation for Toyotomi\'s invasion.' } },
      { year: 1590, event: { ja: '豊臣秀吉の大軍にわずか半日で落城した。', zhTw: '被豐臣秀吉大軍在僅半日內攻陷。', en: 'Fell to Toyotomi Hideyoshi\'s massive army in just half a day.' } },
    ],
    figures: [
      { ja: '北条氏勝', zhTw: '北條氏勝', en: 'Hōjō Ujikatsу', desc: { ja: '山中城を守備したが豊臣の大軍の前に敗退した。', zhTw: '守備山中城但在豐臣大軍前敗退。', en: 'Defended Yamanaka Castle but was overwhelmed by the massive Toyotomi forces.' } },
      { ja: '一柳直末', zhTw: '一柳直末', en: 'Hitotsuyanagi Naosue', desc: { ja: '山中城攻めで戦死した豊臣方の武将。', zhTw: '在山中城攻擊中戰死的豐臣方武將。', en: 'A Toyotomi commander who was killed in the assault on Yamanaka Castle.' } },
    ],
    trivia: [
      { ja: '障子堀（ワッフル型の堀）が美しく復元され、「土の城の最高傑作」と称される。', zhTw: '障子壕（鬆餅型壕溝）優美復原，被稱為「土城的最高傑作」。', en: 'Beautifully restored shōji-bori (waffle-shaped moats) earn it the title "supreme masterpiece of earthen castles."' },
      { ja: '富士山を背景にした障子堀の景観は日本の城の中でも屈指の美しさ。', zhTw: '以富士山為背景的障子壕景觀在日本城郭中美不勝收。', en: 'The shōji-bori moats with Mt. Fuji in the background are among the most beautiful castle views in Japan.' },
    ],
    highlights: [
      { ja: '障子堀 — ワッフル型に区切られた堀底は日本の城郭の中でも独特。', zhTw: '障子壕 — 如鬆餅般分隔的壕底在日本城郭中獨樹一格。', en: 'Shōji-bori moats — waffle-like partitioned moat bottoms unique among Japanese castles.' },
      { ja: '富士山の絶景 — 城跡各所から富士山を望む贅沢な景色。', zhTw: '富士山絕景 — 從城跡各處可望富士山的奢華景色。', en: 'Mt. Fuji views — luxurious scenery with Fuji visible from throughout the castle ruins.' },
    ],
    architecture: [
      { ja: '障子堀と畝堀を多用した北条流築城術の最高傑作。石垣は一切使わない。', zhTw: '大量運用障子壕與畝壕的北條流築城術最高傑作。完全不使用石垣。', en: 'The supreme example of Hōjō-style fortification with shōji and une moats; no stone walls used.' },
      { ja: '箱根旧街道沿いに造られ、東海道を遮断する関門的な役割を担った。', zhTw: '沿箱根舊街道建造，擔任遮斷東海道的關門角色。', en: 'Built along the old Hakone road to serve as a barrier blocking the Tōkaidō highway.' },
    ],
  },
  // ── 東海・近畿 ──
  {
    id: 'sunpu', number: 41, regionId: 'chubu',
    name: { ja: '駿府城', zhTw: '駿府城', en: 'Sunpu Castle' },
    city: { ja: '静岡市', zhTw: '靜岡市', en: 'Shizuoka' },
    prefecture: { ja: '静岡県', zhTw: '靜岡縣', en: 'Shizuoka' },
    type: 'hirajiro', designation: '国指定史跡',
    position: { x: 64, y: 60 },
    illustration: { style: 'classic', tiers: 1, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1585, event: { ja: '徳川家康が駿府城を大改修し居城とした。', zhTw: '德川家康大規模改建駿府城並作為居城。', en: 'Tokugawa Ieyasu extensively renovated Sunpu Castle and made it his residence.' } },
      { year: 1607, event: { ja: '大御所となった家康が再び駿府城に戻り、天下人として政治を行った。', zhTw: '成為大御所的家康再度回到駿府城，以天下人身分執政。', en: 'Ieyasu returned to Sunpu as the retired shōgun and governed the realm from here.' } },
      { year: 2016, event: { ja: '天守台の発掘調査で日本最大級の天守台跡が確認された。', zhTw: '天守台發掘調查中確認了日本最大級的天守台遺跡。', en: 'Excavations of the keep platform confirmed one of the largest keep foundations in Japan.' } },
    ],
    figures: [
      { ja: '徳川家康', zhTw: '德川家康', en: 'Tokugawa Ieyasu', desc: { ja: '駿府で少年時代を過ごし、晩年も駿府城から天下を治めた天下人。', zhTw: '在駿府度過少年時期，晚年也從駿府城治理天下的天下人。', en: 'Spent his youth in Sunpu and governed the nation from Sunpu Castle in his final years.' } },
      { ja: 'ウィリアム・アダムス', zhTw: '威廉·亞當斯', en: 'William Adams', desc: { ja: '三浦按針として家康の外交顧問を務めた英国人航海士。', zhTw: '以三浦按針之名擔任家康外交顧問的英國航海士。', en: 'English navigator who served as Ieyasu\'s foreign advisor under the name Miura Anjin.' } },
    ],
    trivia: [
      { ja: '発掘された天守台は江戸城天守台より大きく、日本最大規模だったことが判明。', zhTw: '出土的天守台比江戶城天守台更大，證實為日本最大規模。', en: 'The excavated keep platform proved larger than Edo Castle\'s — the largest in Japan.' },
      { ja: '家康が駿府で没した際、遺言により久能山東照宮に葬られた。', zhTw: '家康在駿府去世時，依遺囑葬於久能山東照宮。', en: 'When Ieyasu died at Sunpu, he was buried at Kunōzan Tōshōgū per his will.' },
    ],
    highlights: [
      { ja: '天守台発掘現場 — 日本最大級の天守台跡を間近に見学できる。', zhTw: '天守台發掘現場 — 可近距離參觀日本最大級天守台遺跡。', en: 'Keep platform excavation site — see one of Japan\'s largest keep foundations up close.' },
      { ja: '復元された巽櫓と東御門 — 壮大な枡形門。', zhTw: '復原的巽櫓與東御門 — 壯觀的枡形門。', en: 'Reconstructed Tatsumi turret and east gate — an impressive masugata gate complex.' },
    ],
    architecture: [
      { ja: '三重の堀に囲まれた広大な平城で、天守台は南北約68m×東西約61mの日本最大規模。', zhTw: '三重護城河環繞的廣闊平城，天守台南北約68m×東西約61m為日本最大規模。', en: 'A vast flatland castle with triple moats; the keep platform measures 68m×61m — Japan\'s largest.' },
      { ja: '本丸・二の丸・三の丸が同心円状に配置された輪郭式の縄張り。', zhTw: '本丸、二之丸、三之丸同心圓狀配置的輪郭式配置。', en: 'A concentric layout with honmaru, ninomaru, and sannomaru arranged in concentric rings.' },
    ],
  },
  {
    id: 'kakegawa', number: 42, regionId: 'chubu',
    name: { ja: '掛川城', zhTw: '掛川城', en: 'Kakegawa Castle' },
    city: { ja: '掛川市', zhTw: '掛川市', en: 'Kakegawa' },
    prefecture: { ja: '静岡県', zhTw: '靜岡縣', en: 'Shizuoka' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 62, y: 60 },
    illustration: { style: 'classic', tiers: 3, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1512, event: { ja: '今川氏の家臣・朝比奈泰能が掛川城を築いた。', zhTw: '今川氏家臣朝比奈泰能築建掛川城。', en: 'Asahina Yasuyoshi, a retainer of the Imagawa clan, built Kakegawa Castle.' } },
      { year: 1590, event: { ja: '山内一豊が城主となり、天守を含む近世城郭に大改修した。', zhTw: '山內一豐成為城主，大規模改建為包含天守的近世城郭。', en: 'Yamauchi Kazutoyo became lord and transformed it into an early-modern castle with a keep.' } },
      { year: 1994, event: { ja: '日本初の本格的な木造復元天守が完成した。', zhTw: '日本首座正式的木造復原天守完工。', en: 'Japan\'s first full-scale wooden reconstructed keep was completed.' } },
    ],
    figures: [
      { ja: '山内一豊', zhTw: '山內一豐', en: 'Yamauchi Kazutoyo', desc: { ja: '妻・千代の内助の功で名馬を購入したエピソードで知られる掛川城主。', zhTw: '因妻子千代的賢內助買下名馬的故事而聞名的掛川城主。', en: 'Lord of Kakegawa, famed for the story of his wife Chiyo\'s resourcefulness in buying a fine horse.' } },
      { ja: '山内千代', zhTw: '山內千代', en: 'Yamauchi Chiyo', desc: { ja: '「内助の功」の代名詞となった一豊の妻。', zhTw: '成為「賢內助」代名詞的一豐之妻。', en: 'Kazutoyo\'s wife, the quintessential example of a supportive spouse in Japanese history.' } },
    ],
    trivia: [
      { ja: '1994年に完成した天守は日本初の本格的木造復元天守として話題を呼んだ。', zhTw: '1994年完工的天守作為日本首座正式木造復原天守引發話題。', en: 'The 1994 keep drew attention as Japan\'s first full-scale wooden keep reconstruction.' },
      { ja: '二の丸御殿は現存する数少ない城郭御殿の一つで重要文化財。', zhTw: '二之丸御殿是現存少數城郭御殿之一，為重要文化財。', en: 'The ninomaru palace is one of few surviving castle palaces, designated an Important Cultural Property.' },
    ],
    highlights: [
      { ja: '木造復元天守 — 高知城を模して忠実に再建された白亜の天守。', zhTw: '木造復原天守 — 仿高知城忠實重建的白堊天守。', en: 'Wooden reconstructed keep — faithfully rebuilt in white plaster modeled on Kōchi Castle.' },
      { ja: '二の丸御殿 — 江戸時代から残る貴重な御殿建築。', zhTw: '二之丸御殿 — 江戶時代留存的珍貴御殿建築。', en: 'Ninomaru Palace — a precious palace building surviving from the Edo period.' },
    ],
    architecture: [
      { ja: '三層四階の天守は木造で復元され、望楼型の優美な姿を見せる。', zhTw: '三層四階天守以木造復原，展現望樓型的優美姿態。', en: 'The three-layer, four-story keep was rebuilt in wood, displaying an elegant watchtower style.' },
      { ja: '二の丸御殿は書院造りで7棟からなり、藩の政治・儀式の場として使われた。', zhTw: '二之丸御殿為書院造由7棟構成，作為藩的政治與儀式場所使用。', en: 'The ninomaru palace is a seven-building shoin complex used for domain politics and ceremonies.' },
    ],
  },
  {
    id: 'inuyama', number: 43, regionId: 'chubu',
    name: { ja: '犬山城', zhTw: '犬山城', en: 'Inuyama Castle' },
    city: { ja: '犬山市', zhTw: '犬山市', en: 'Inuyama' },
    prefecture: { ja: '愛知県', zhTw: '愛知縣', en: 'Aichi' },
    type: 'hirayama', designation: '国宝',
    position: { x: 58, y: 54 },
    illustration: { style: 'classic', tiers: 3, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1537, event: { ja: '織田信康（信長の叔父）が木曽川沿いの丘に犬山城を築いた。', zhTw: '織田信康（信長的叔父）在木曾川沿岸丘陵築建犬山城。', en: 'Oda Nobuyasu (Nobunaga\'s uncle) built Inuyama Castle on a hill along the Kiso River.' } },
      { year: 1584, event: { ja: '小牧・長久手の戦いで秀吉が犬山城を占拠し拠点とした。', zhTw: '小牧・長久手之戰中秀吉佔據犬山城作為據點。', en: 'Hideyoshi seized Inuyama Castle and used it as his base during the Battle of Komaki-Nagakute.' } },
      { year: 2004, event: { ja: '国宝に指定。2018年まで日本で唯一の個人所有の城だった。', zhTw: '被指定為國寶。至2018年為日本唯一的個人所有城郭。', en: 'Designated a National Treasure. Until 2018 it was the only privately owned castle in Japan.' } },
    ],
    figures: [
      { ja: '織田信康', zhTw: '織田信康', en: 'Oda Nobuyasu', desc: { ja: '信長の叔父で犬山城の築城者。', zhTw: '信長的叔父，犬山城的築城者。', en: 'Nobunaga\'s uncle who built Inuyama Castle.' } },
      { ja: '成瀬正成', zhTw: '成瀨正成', en: 'Naruse Masanari', desc: { ja: '徳川家康の命で犬山城主となり、以後成瀬家が代々城を守った。', zhTw: '奉德川家康之命成為犬山城主，此後成瀨家代代守護城郭。', en: 'Became lord of Inuyama by Ieyasu\'s order; the Naruse family guarded the castle for generations.' } },
    ],
    trivia: [
      { ja: '国宝5城の一つで、現存天守は日本最古級とされる。', zhTw: '國寶5城之一，現存天守被視為日本最古老級。', en: 'One of five National Treasure castles; the surviving keep is considered among Japan\'s oldest.' },
      { ja: '2018年まで成瀬家が個人で所有する全国唯一の城だった。', zhTw: '至2018年為成瀨家個人所有的全國唯一城郭。', en: 'Until 2018, it was Japan\'s only castle still privately owned by the Naruse family.' },
    ],
    highlights: [
      { ja: '国宝天守の最上階回廊 — 木曽川と犬山の町を見渡す絶景。', zhTw: '國寶天守最上層迴廊 — 俯瞰木曾川與犬山町的絕景。', en: 'The top-floor balcony of the National Treasure keep — stunning views of the Kiso River and Inuyama.' },
      { ja: '犬山祭の車山 — ユネスコ無形文化遺産に登録された祭り。', zhTw: '犬山祭的車山 — 登錄為聯合國教科文組織無形文化遺產的祭典。', en: 'Inuyama Festival floats — a UNESCO Intangible Cultural Heritage celebration.' },
    ],
    architecture: [
      { ja: '三層四階地下二階の望楼型天守で国宝に指定。木曽川を天然の堀とする。', zhTw: '三層四階地下二階望樓型天守被指定為國寶。以木曾川為天然護城河。', en: 'A three-layer, four-story watchtower-style keep (National Treasure) using the Kiso River as a natural moat.' },
      { ja: '天守最上階の回廊（高欄）は戦国の天守の特徴をよく残している。', zhTw: '天守最上層的迴廊（高欄）完好保留戰國天守的特徵。', en: 'The top-floor balcony well preserves the characteristics of Sengoku-era castle keeps.' },
    ],
  },
  {
    id: 'nagoya', number: 44, regionId: 'chubu',
    name: { ja: '名古屋城', zhTw: '名古屋城', en: 'Nagoya Castle' },
    city: { ja: '名古屋市', zhTw: '名古屋市', en: 'Nagoya' },
    prefecture: { ja: '愛知県', zhTw: '愛知縣', en: 'Aichi' },
    type: 'hirajiro', designation: '特別史跡',
    position: { x: 58, y: 58 },
    illustration: { style: 'classic', tiers: 5, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1610, event: { ja: '徳川家康が天下普請として名古屋城の築城を命じた。', zhTw: '德川家康下令以天下普請方式築建名古屋城。', en: 'Tokugawa Ieyasu ordered the construction of Nagoya Castle as a national project.' } },
      { year: 1612, event: { ja: '五層の天守と金鯱が完成。尾張徳川家の居城となった。', zhTw: '五層天守與金鯱完工。成為尾張德川家的居城。', en: 'The five-story keep topped with golden shachihoko was completed as the seat of the Owari Tokugawa.' } },
      { year: 1945, event: { ja: '空襲で天守と本丸御殿が焼失。天守は1959年にRC造で再建された。', zhTw: '空襲中天守與本丸御殿燒毀。天守於1959年以鋼筋混凝土重建。', en: 'Air raids destroyed the keep and honmaru palace; the keep was rebuilt in concrete in 1959.' } },
    ],
    figures: [
      { ja: '徳川義直', zhTw: '德川義直', en: 'Tokugawa Yoshinao', desc: { ja: '家康の九男で尾張徳川家の初代当主。名古屋城に入城した。', zhTw: '家康九子，尾張德川家初代當主。入駐名古屋城。', en: 'Ieyasu\'s ninth son and first head of the Owari Tokugawa, who took up residence in Nagoya Castle.' } },
      { ja: '加藤清正', zhTw: '加藤清正', en: 'Katō Kiyomasa', desc: { ja: '天下普請で石垣の築造を担当し「清正石」として名を残す。', zhTw: '在天下普請中負責石垣築造，以「清正石」留名。', en: 'Oversaw stone wall construction during the project; the "Kiyomasa Stone" bears his name.' } },
    ],
    trivia: [
      { ja: '金の鯱（金鯱）は名古屋のシンボルで、一対で純金約88kgが使われている。', zhTw: '金鯱是名古屋的象徵，一對共使用約88公斤純金。', en: 'The golden shachihoko are Nagoya\'s symbol, containing about 88kg of pure gold combined.' },
      { ja: '本丸御殿は2018年に完全復元され、近世城郭御殿の最高傑作と称される。', zhTw: '本丸御殿於2018年完全復原，被譽為近世城郭御殿的最高傑作。', en: 'The honmaru palace was fully restored in 2018 and is called the greatest masterpiece of early-modern castle palaces.' },
    ],
    highlights: [
      { ja: '本丸御殿 — 狩野派の障壁画で飾られた豪華絢爛な復元御殿。', zhTw: '本丸御殿 — 以狩野派障壁畫裝飾的豪華絢爛復原御殿。', en: 'Honmaru Palace — a magnificent restored palace adorned with Kanō school wall paintings.' },
      { ja: '金鯱 — 天守の大棟で輝く名古屋のシンボル。', zhTw: '金鯱 — 在天守大棟上閃耀的名古屋象徵。', en: 'Golden shachihoko — Nagoya\'s gleaming symbol atop the keep.' },
    ],
    architecture: [
      { ja: '五層五階地下一階の層塔型天守は日本最大級。戦災焼失前は国宝だった。', zhTw: '五層五階地下一階的層塔型天守為日本最大級。戰災燒毀前為國寶。', en: 'The five-story layered keep was among Japan\'s largest; a former National Treasure before wartime destruction.' },
      { ja: '二重の堀と高石垣に囲まれた広大な城域。清正が築いた扇勾配の石垣が見事。', zhTw: '二重護城河與高石垣環繞的廣闊城域。清正築建的扇形斜面石垣壯觀。', en: 'Vast grounds enclosed by double moats and tall stone walls; Kiyomasa\'s fan-curved walls are masterful.' },
    ],
  },
  {
    id: 'okazaki', number: 45, regionId: 'chubu',
    name: { ja: '岡崎城', zhTw: '岡崎城', en: 'Okazaki Castle' },
    city: { ja: '岡崎市', zhTw: '岡崎市', en: 'Okazaki' },
    prefecture: { ja: '愛知県', zhTw: '愛知縣', en: 'Aichi' },
    type: 'hirajiro', designation: '国指定史跡',
    position: { x: 60, y: 60 },
    illustration: { style: 'classic', tiers: 3, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1455, event: { ja: '西郷頼嗣が岡崎に城を築いたのが始まり。', zhTw: '西鄉賴嗣在岡崎築城，為城之起源。', en: 'Saigō Yoritsugu built the first castle at Okazaki.' } },
      { year: 1542, event: { ja: '松平竹千代（後の徳川家康）がこの城で誕生した。', zhTw: '松平竹千代（後來的德川家康）在此城出生。', en: 'Matsudaira Takechiyo (the future Tokugawa Ieyasu) was born in this castle.' } },
      { year: 1959, event: { ja: '天守がRC造で再建された。2023年に大規模改修を完了。', zhTw: '天守以鋼筋混凝土重建。2023年完成大規模翻修。', en: 'The keep was rebuilt in concrete; a major renovation was completed in 2023.' } },
    ],
    figures: [
      { ja: '徳川家康', zhTw: '德川家康', en: 'Tokugawa Ieyasu', desc: { ja: '岡崎城で生まれ幼少期を過ごした天下人。ここから天下統一への道を歩み出した。', zhTw: '在岡崎城出生並度過幼年時期的天下人。從此地邁出天下統一之路。', en: 'Born at Okazaki Castle, the future shōgun began his journey to national unification here.' } },
      { ja: '本多忠勝', zhTw: '本多忠勝', en: 'Honda Tadakatsu', desc: { ja: '徳川四天王の一人で「戦国最強の武将」と称された岡崎ゆかりの名将。', zhTw: '德川四天王之一，被稱為「戰國最強武將」的岡崎相關名將。', en: 'One of Tokugawa\'s Four Heavenly Kings, called the "strongest warrior of the Sengoku era."' } },
    ],
    trivia: [
      { ja: '家康誕生の地として「神君出生の城」と呼ばれ、三河武士の聖地。', zhTw: '作為家康出生地被稱為「神君出生之城」，三河武士的聖地。', en: 'Called "the castle where the divine lord was born" — a sacred site for Mikawa warriors.' },
      { ja: '城内には家康の産湯の井戸やえな塚など家康ゆかりの史跡が多い。', zhTw: '城內有家康的產湯井與胎衣塚等眾多家康相關史跡。', en: 'The grounds feature Ieyasu\'s birth-bath well and placenta burial mound among other historical sites.' },
    ],
    highlights: [
      { ja: '徳川家康公像 — 城内に立つ若き家康の銅像。', zhTw: '德川家康公像 — 城內矗立的年輕家康銅像。', en: 'Tokugawa Ieyasu statue — a bronze figure of the young Ieyasu within the castle grounds.' },
      { ja: '岡崎公園の桜 — 約800本の桜がライトアップされる夜桜が見事。', zhTw: '岡崎公園的櫻花 — 約800棵櫻花點燈的夜櫻極為壯觀。', en: 'Okazaki Park cherry blossoms — 800 illuminated trees create stunning night-time scenes.' },
    ],
    architecture: [
      { ja: '菅生川と伊賀川の合流点に築かれ、川を天然の堀とした平城。', zhTw: '築於菅生川與伊賀川匯流處，以河川為天然護城河的平城。', en: 'Built at the confluence of the Sugō and Iga rivers, using them as natural moats.' },
      { ja: '現在の天守は三層五階のRC造再建で、2023年にリニューアルされた。', zhTw: '現天守為三層五階鋼筋混凝土重建，2023年翻新。', en: 'The current three-layer, five-story concrete keep was renovated in 2023.' },
    ],
  },
  {
    id: 'nagashino', number: 46, regionId: 'chubu',
    name: { ja: '長篠城', zhTw: '長篠城', en: 'Nagashino Castle' },
    city: { ja: '新城市', zhTw: '新城市', en: 'Shinshiro' },
    prefecture: { ja: '愛知県', zhTw: '愛知縣', en: 'Aichi' },
    type: 'hirajiro', designation: '国指定史跡',
    position: { x: 60, y: 58 },
    illustration: { style: 'classic', tiers: 1, color: '#f5f0e8', roofColor: '#5a3825' },
    goshuin: { bg: '#e8dfd0', ink: '#3a2518', seal: '#c53d43', crest: '#7a6520' },
    history: [
      { year: 1508, event: { ja: '菅沼元成が豊川と宇連川の合流点に長篠城を築いた。', zhTw: '菅沼元成在豐川與宇連川匯流處築建長篠城。', en: 'Suganuma Motonari built Nagashino Castle at the confluence of the Toyokawa and Ure rivers.' } },
      { year: 1575, event: { ja: '武田勝頼の大軍に包囲されるも奥平貞昌が500人で死守。鳥居強右衛門の決死の伝令が援軍を呼んだ。', zhTw: '被武田勝賴大軍包圍，奧平貞昌以500人死守。鳥居強右衛門的決死傳令召來援軍。', en: 'Okudaira Sadamasa held the castle with 500 men against Takeda Katsuyori\'s siege; Torii Suneemon\'s desperate mission brought reinforcements.' } },
      { year: 1575, event: { ja: '織田・徳川連合軍が設楽原で武田軍を撃破。長篠の戦いは日本の戦術史を変えた。', zhTw: '織田・德川聯軍在設樂原擊敗武田軍。長篠之戰改變了日本的戰術史。', en: 'The Oda-Tokugawa alliance crushed the Takeda at Shitaragahara; the Battle of Nagashino changed Japanese military tactics.' } },
    ],
    figures: [
      { ja: '鳥居強右衛門', zhTw: '鳥居強右衛門', en: 'Torii Suneemon', desc: { ja: '援軍を求め決死の脱出に成功するも、帰還時に捕らえられ処刑された忠臣。', zhTw: '為求援軍成功決死脫出，但歸途中被捕處刑的忠臣。', en: 'A loyal retainer who escaped to summon reinforcements but was captured and executed upon return.' } },
      { ja: '奥平貞昌', zhTw: '奧平貞昌', en: 'Okudaira Sadamasa', desc: { ja: '500人の兵で武田の大軍に耐え抜き、長篠城を守り抜いた城主。', zhTw: '以500兵力抵擋武田大軍、守住長篠城的城主。', en: 'Castle lord who held Nagashino with just 500 men against the Takeda siege.' } },
    ],
    trivia: [
      { ja: '鳥居強右衛門の逆さ磔の姿は後に旗印となり、武士の忠義の象徴となった。', zhTw: '鳥居強右衛門倒掛磔刑的姿態後來成為旗號，成為武士忠義的象徵。', en: 'Torii Suneemon\'s crucified figure became a banner design and a symbol of samurai loyalty.' },
      { ja: '長篠の戦いは鉄砲の大量使用で知られ、戦国の戦術に革命をもたらした。', zhTw: '長篠之戰以大量使用火繩槍聞名，為戰國戰術帶來革命。', en: 'The Battle of Nagashino is famous for the mass use of firearms, revolutionizing Sengoku-era tactics.' },
    ],
    highlights: [
      { ja: '長篠城址史跡保存館 — 戦いの詳細を学べる資料館。', zhTw: '長篠城址史跡保存館 — 可了解戰役詳情的資料館。', en: 'Nagashino Castle Museum — learn the details of the historic battle.' },
      { ja: '鳥居強右衛門の磔死之碑 — 忠義の武士を偲ぶ碑。', zhTw: '鳥居強右衛門磔死之碑 — 緬懷忠義武士的石碑。', en: 'Torii Suneemon\'s memorial — a monument honoring the loyal warrior.' },
    ],
    architecture: [
      { ja: '豊川と宇連川の合流する断崖上に築かれた天然の要害。', zhTw: '築於豐川與宇連川匯流處斷崖上的天然要害。', en: 'A natural fortress built on cliffs at the confluence of the Toyokawa and Ure rivers.' },
      { ja: '本丸跡には石垣と土塁、空堀の遺構が残り、激戦の舞台を偲ばせる。', zhTw: '本丸遺跡留有石垣、土壘與空壕遺構，令人遙想激戰舞台。', en: 'Stone walls, earthworks, and moat remains at the honmaru evoke the fierce battle that took place here.' },
    ],
  },
  {
    id: 'iga-ueno', number: 47, regionId: 'kinki',
    name: { ja: '伊賀上野城', zhTw: '伊賀上野城', en: 'Iga Ueno Castle' },
    city: { ja: '伊賀市', zhTw: '伊賀市', en: 'Iga' },
    prefecture: { ja: '三重県', zhTw: '三重縣', en: 'Mie' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 56, y: 62 },
    illustration: { style: 'classic', tiers: 3, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1585, event: { ja: '筒井定次が伊賀に入封し上野城を築いた。', zhTw: '筒井定次入封伊賀，築建上野城。', en: 'Tsutsui Sadatsugu was granted Iga and built Ueno Castle.' } },
      { year: 1611, event: { ja: '藤堂高虎が大坂方への備えとして日本一の高石垣を持つ城に大改修した。', zhTw: '藤堂高虎為防備大坂方而大改修為擁有日本第一高石垣的城。', en: 'Tōdō Takatora rebuilt the castle with Japan\'s tallest stone walls to defend against Osaka forces.' } },
      { year: 1935, event: { ja: '川崎克が私財を投じて木造天守を建造した。', zhTw: '川崎克投入私財建造木造天守。', en: 'Kawasaki Katsu privately funded the construction of a wooden keep.' } },
    ],
    figures: [
      { ja: '藤堂高虎', zhTw: '藤堂高虎', en: 'Tōdō Takatora', desc: { ja: '築城の名手として知られ、日本各地に20以上の城を設計・改修した。', zhTw: '以築城名手聞名，在日本各地設計、改修超過20座城。', en: 'Renowned master castle builder who designed or renovated over 20 castles across Japan.' } },
      { ja: '松尾芭蕉', zhTw: '松尾芭蕉', en: 'Matsuo Bashō', desc: { ja: '俳聖・松尾芭蕉は伊賀上野の出身。城下に生誕の地がある。', zhTw: '俳聖松尾芭蕉為伊賀上野出身。城下有其出生地。', en: 'The great haiku master Matsuo Bashō was born in Iga Ueno; his birthplace is in the castle town.' } },
    ],
    trivia: [
      { ja: '高石垣の高さは約30mで「日本一の高石垣」として知られる。', zhTw: '高石垣高約30公尺，以「日本第一高石垣」聞名。', en: 'The stone walls reach about 30 meters — known as the tallest castle stone walls in Japan.' },
      { ja: '忍者の里としても有名で、城内に伊賀流忍者博物館がある。', zhTw: '亦以忍者之鄉聞名，城內設有伊賀流忍者博物館。', en: 'Also famous as the home of ninja; the Iga-ryū Ninja Museum stands within the castle grounds.' },
    ],
    highlights: [
      { ja: '日本一の高石垣 — 約30mの圧巻の石垣。', zhTw: '日本第一高石垣 — 約30公尺的壯觀石垣。', en: 'Japan\'s tallest stone walls — an awe-inspiring 30-meter wall.' },
      { ja: '伊賀流忍者博物館 — 忍者文化を体験できる施設。', zhTw: '伊賀流忍者博物館 — 可體驗忍者文化的設施。', en: 'Iga Ninja Museum — experience authentic ninja culture.' },
    ],
    architecture: [
      { ja: '藤堂高虎が築いた約30mの高石垣は日本の城郭で最も高い。', zhTw: '藤堂高虎築建的約30公尺高石垣為日本城郭中最高。', en: 'Tōdō Takatora\'s 30-meter stone walls are the tallest of any Japanese castle.' },
      { ja: '現在の天守は1935年に木造で建てられた模擬天守。', zhTw: '現天守為1935年以木造建造的模擬天守。', en: 'The current keep is a wooden replica built in 1935.' },
    ],
  },
  {
    id: 'matsusaka', number: 48, regionId: 'kinki',
    name: { ja: '松阪城', zhTw: '松阪城', en: 'Matsusaka Castle' },
    city: { ja: '松阪市', zhTw: '松阪市', en: 'Matsusaka' },
    prefecture: { ja: '三重県', zhTw: '三重縣', en: 'Mie' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 56, y: 64 },
    illustration: { style: 'classic', tiers: 1, color: '#8b7e6b', roofColor: '#5a3825' },
    goshuin: { bg: '#e8dfd0', ink: '#3a2518', seal: '#c53d43', crest: '#7a6520' },
    history: [
      { year: 1588, event: { ja: '蒲生氏郷が松阪城を築き、城下町を整備して商業を振興した。', zhTw: '蒲生氏鄉築建松阪城，整備城下町並振興商業。', en: 'Gamō Ujisato built Matsusaka Castle, developed the castle town, and promoted commerce.' } },
      { year: 1600, event: { ja: '関ヶ原後に紀州藩の支配となり、以後城代が置かれた。', zhTw: '關原之戰後歸紀州藩統治，此後置城代管理。', en: 'After Sekigahara, the castle came under Kii domain control with a castle warden appointed.' } },
      { year: 1644, event: { ja: '台風で天守が倒壊し、以後再建されなかった。', zhTw: '天守因颱風倒塌，此後未再重建。', en: 'A typhoon destroyed the keep, which was never rebuilt.' } },
    ],
    figures: [
      { ja: '蒲生氏郷', zhTw: '蒲生氏鄉', en: 'Gamō Ujisato', desc: { ja: '松阪城を築き商人の町として繁栄の基礎を築いた名将。', zhTw: '築建松阪城並奠定商人之町繁榮基礎的名將。', en: 'A brilliant lord who built Matsusaka Castle and laid the foundation for its thriving merchant culture.' } },
      { ja: '本居宣長', zhTw: '本居宣長', en: 'Motoori Norinaga', desc: { ja: '国学の大成者で松阪出身。城下に旧宅が保存されている。', zhTw: '國學大成者，松阪出身。城下保存有其舊宅。', en: 'The great scholar of National Learning, born in Matsusaka; his former residence is preserved in the castle town.' } },
    ],
    trivia: [
      { ja: '「松阪牛」で世界的に有名な松阪の町は蒲生氏郷が開いた城下町が起源。', zhTw: '以「松阪牛」聞名世界的松阪之町，起源於蒲生氏鄉開創的城下町。', en: 'Matsusaka, famous worldwide for its beef, originated as the castle town Gamō Ujisato founded.' },
      { ja: '石垣は高く壮大で「石垣の名城」として高い評価を受けている。', zhTw: '石垣高聳壯觀，作為「石垣名城」受到高度評價。', en: 'Its tall, imposing stone walls are highly acclaimed — earning it recognition as a "castle of stone walls."' },
    ],
    highlights: [
      { ja: '壮大な石垣群 — 野面積みの美しい石垣が多段に連なる。', zhTw: '壯觀石垣群 — 野面積砌法的美麗石垣多段相連。', en: 'Magnificent stone walls — beautiful rough-stacked stonework in multiple tiers.' },
      { ja: '御城番屋敷 — 現存する武家長屋で、今も人が暮らしている。', zhTw: '御城番屋敷 — 至今仍有人居住的現存武家長屋。', en: 'Gojōban Yashiki — surviving samurai row houses still inhabited today.' },
    ],
    architecture: [
      { ja: '蒲生氏郷が安土城に倣い壮大な石垣を築いた。天守台・二の丸跡の石垣が見事。', zhTw: '蒲生氏鄉仿安土城築建壯觀石垣。天守台與二之丸遺跡的石垣壯觀。', en: 'Gamō modeled the walls on Azuchi Castle; the keep platform and ninomaru stonework are impressive.' },
      { ja: '本丸・二の丸・きたい丸の三つの曲輪で構成される梯郭式の縄張り。', zhTw: '由本丸、二之丸、隱居丸三個曲輪構成的梯郭式配置。', en: 'A stepped layout with three compounds: honmaru, ninomaru, and kitai-maru.' },
    ],
  },
  {
    id: 'odani', number: 49, regionId: 'kinki',
    name: { ja: '小谷城', zhTw: '小谷城', en: 'Odani Castle' },
    city: { ja: '長浜市', zhTw: '長濱市', en: 'Nagahama' },
    prefecture: { ja: '滋賀県', zhTw: '滋賀縣', en: 'Shiga' },
    type: 'yamajiro', designation: '国指定史跡',
    position: { x: 54, y: 60 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#8b7e6b', roofColor: '#3d5c4a' },
    goshuin: { bg: '#e8dfd0', ink: '#2d4a3e', seal: '#c53d43', crest: '#7a6520' },
    history: [
      { year: 1524, event: { ja: '浅井亮政が小谷山に城を築き浅井氏の本拠とした。', zhTw: '淺井亮政在小谷山築城，作為淺井氏的根據地。', en: 'Azai Sukemasa built a castle on Mt. Odani as the Azai clan\'s home base.' } },
      { year: 1570, event: { ja: '浅井長政が織田信長を裏切り、姉川の戦いが勃発。', zhTw: '淺井長政背叛織田信長，姉川之戰爆發。', en: 'Azai Nagamasa betrayed Oda Nobunaga, leading to the Battle of Anegawa.' } },
      { year: 1573, event: { ja: '信長の総攻撃で小谷城が落城。長政は自刃し浅井氏は滅亡した。', zhTw: '信長的總攻擊下小谷城陷落。長政自刃，淺井氏滅亡。', en: 'Nobunaga\'s assault took Odani Castle; Nagamasa committed suicide and the Azai clan fell.' } },
    ],
    figures: [
      { ja: '浅井長政', zhTw: '淺井長政', en: 'Azai Nagamasa', desc: { ja: '信長の妹・お市を妻に迎えたが、義兄・信長に背いて滅亡した悲劇の武将。', zhTw: '迎娶信長之妹阿市為妻，卻背叛義兄信長而滅亡的悲劇武將。', en: 'Married Nobunaga\'s sister Oichi but betrayed his brother-in-law, leading to his tragic downfall.' } },
      { ja: 'お市の方', zhTw: '阿市之方', en: 'Lady Oichi', desc: { ja: '信長の妹で長政の妻。三人の娘（淀殿・お初・お江）は後に歴史を動かした。', zhTw: '信長之妹、長政之妻。三個女兒（淀殿、阿初、阿江）後來影響了歷史。', en: 'Nobunaga\'s sister and Nagamasa\'s wife; her three daughters (Yodo-dono, Ohatsu, Oeyo) shaped Japanese history.' } },
    ],
    trivia: [
      { ja: '日本五大山城の一つに数えられる堅固な山城。', zhTw: '被列為日本五大山城之一的堅固山城。', en: 'One of Japan\'s five great mountain castles — a formidable stronghold.' },
      { ja: '長政とお市の悲恋はドラマや映画で繰り返し描かれている。', zhTw: '長政與阿市的悲戀在戲劇和電影中反覆被描述。', en: 'The tragic love of Nagamasa and Oichi has been depicted repeatedly in dramas and films.' },
    ],
    highlights: [
      { ja: '大嶽・山王丸の石垣 — 山頂に残る中世の石垣群。', zhTw: '大嶽、山王丸的石垣 — 殘存於山頂的中世石垣群。', en: 'Stone walls at Ōdake and Sannō-maru — medieval stonework surviving on the mountaintop.' },
      { ja: '琵琶湖と伊吹山の眺望 — 城跡からの壮大な景色。', zhTw: '琵琶湖與伊吹山的眺望 — 從城跡遠眺的壯闊景色。', en: 'Views of Lake Biwa and Mt. Ibuki — grand scenery from the castle ruins.' },
    ],
    architecture: [
      { ja: '小谷山の尾根上に大嶽から清水谷まで約800mにわたり曲輪が連なる大規模山城。', zhTw: '在小谷山脊上從大嶽到清水谷約800公尺曲輪相連的大規模山城。', en: 'A large mountain castle with compounds stretching 800m along the ridge from Ōdake to Shimizu Valley.' },
      { ja: '大堀切で山頂部と中腹を分断する堅固な防御構造。', zhTw: '以大堀切分隔山頂部與中腰的堅固防禦結構。', en: 'A great moat cut divides the summit from the mid-slope in a formidable defensive design.' },
    ],
  },
  {
    id: 'hikone', number: 50, regionId: 'kinki',
    name: { ja: '彦根城', zhTw: '彥根城', en: 'Hikone Castle' },
    city: { ja: '彦根市', zhTw: '彥根市', en: 'Hikone' },
    prefecture: { ja: '滋賀県', zhTw: '滋賀縣', en: 'Shiga' },
    type: 'hirayama', designation: '国宝',
    position: { x: 54, y: 62 },
    illustration: { style: 'classic', tiers: 3, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1604, event: { ja: '井伊直継が関ヶ原の功で彦根城の築城を開始した。', zhTw: '井伊直繼因關原之功開始築建彥根城。', en: 'Ii Naotsugu began building Hikone Castle in recognition of the Ii clan\'s service at Sekigahara.' } },
      { year: 1622, event: { ja: '約20年をかけて彦根城が完成。琵琶湖畔の美しい城郭となった。', zhTw: '歷時約20年彥根城完工。成為琵琶湖畔的美麗城郭。', en: 'Hikone Castle was completed after about 20 years, becoming a beautiful lakeside fortress.' } },
      { year: 1860, event: { ja: '大老・井伊直弼が桜田門外の変で暗殺された。', zhTw: '大老井伊直弼在櫻田門外之變中遭暗殺。', en: 'Great Elder Ii Naosuke was assassinated in the Sakuradamon Incident.' } },
    ],
    figures: [
      { ja: '井伊直弼', zhTw: '井伊直弼', en: 'Ii Naosuke', desc: { ja: '大老として日米修好通商条約を締結し安政の大獄を断行した幕末の政治家。', zhTw: '以大老身分締結日美修好通商條約並斷行安政大獄的幕末政治家。', en: 'Great Elder who signed the Harris Treaty with America and carried out the Ansei Purge.' } },
      { ja: '井伊直政', zhTw: '井伊直政', en: 'Ii Naomasa', desc: { ja: '「赤鬼」と恐れられた徳川四天王。関ヶ原の功で彦根を与えられた。', zhTw: '被畏懼為「赤鬼」的德川四天王。因關原之功獲封彥根。', en: 'The "Red Devil" of the Tokugawa Four Heavenly Kings; awarded Hikone for his Sekigahara service.' } },
    ],
    trivia: [
      { ja: '国宝5天守の一つで、天守は大津城から移築されたとする説がある。', zhTw: '國寶5天守之一，有天守從大津城移築的說法。', en: 'One of five National Treasure keeps; some theories suggest it was relocated from Ōtsu Castle.' },
      { ja: 'ゆるキャラ「ひこにゃん」は彦根城のマスコットとして全国的な人気を持つ。', zhTw: '吉祥物「彥喵」作為彥根城的吉祥物在全國享有高人氣。', en: 'Mascot "Hikonyan" is nationally famous as Hikone Castle\'s beloved character.' },
    ],
    highlights: [
      { ja: '国宝天守 — 華やかな破風装飾を持つ美しい三重天守。', zhTw: '國寶天守 — 擁有華麗破風裝飾的美麗三重天守。', en: 'National Treasure keep — a beautiful three-story tower with ornate gable decorations.' },
      { ja: '玄宮楽々園 — 天守を借景にした大名庭園の傑作。', zhTw: '玄宮樂樂園 — 以天守為借景的大名庭園傑作。', en: 'Genkyu-en Garden — a masterpiece daimyō garden using the keep as borrowed scenery.' },
    ],
    architecture: [
      { ja: '三重三階の天守は国宝に指定。切妻破風・入母屋破風・唐破風を巧みに組み合わせた華やかな外観。', zhTw: '三重三階天守被指定為國寶。巧妙組合切妻破風、入母屋破風與唐破風的華麗外觀。', en: 'The three-story National Treasure keep features an ornate exterior combining multiple gable styles.' },
      { ja: '天秤櫓は左右非対称の珍しい構造で重要文化財に指定。', zhTw: '天秤櫓為左右不對稱的罕見結構，被指定為重要文化財。', en: 'The Tenbin turret has an unusual asymmetrical design, designated an Important Cultural Property.' },
    ],
  },
  {
    id: 'azuchi', number: 51, regionId: 'kinki',
    name: { ja: '安土城', zhTw: '安土城', en: 'Azuchi Castle' },
    city: { ja: '近江八幡市', zhTw: '近江八幡市', en: 'Ōmihachiman' },
    prefecture: { ja: '滋賀県', zhTw: '滋賀縣', en: 'Shiga' },
    type: 'yamajiro', designation: '特別史跡',
    position: { x: 52, y: 62 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#c48a2a', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2a2a2a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1576, event: { ja: '織田信長が琵琶湖畔の安土山に革命的な城の建設を命じた。', zhTw: '織田信長下令在琵琶湖畔的安土山建設革命性的城郭。', en: 'Oda Nobunaga ordered the construction of a revolutionary castle on Mt. Azuchi by Lake Biwa.' } },
      { year: 1579, event: { ja: '五層七階の壮麗な天主が完成。日本初の本格的天守建築とされる。', zhTw: '五層七階的壯麗天主完工。被視為日本首座正式的天守建築。', en: 'The magnificent five-story, seven-floor main tower was completed — considered Japan\'s first true castle keep.' } },
      { year: 1582, event: { ja: '本能寺の変の直後に安土城は炎上し、わずか3年で幻の城となった。', zhTw: '本能寺之變後安土城隨即焚毀，僅3年便成為幻之城。', en: 'Shortly after the Honnō-ji Incident, Azuchi Castle burned down — becoming a phantom castle after just three years.' } },
    ],
    figures: [
      { ja: '織田信長', zhTw: '織田信長', en: 'Oda Nobunaga', desc: { ja: '安土城を築き天下統一の象徴とした戦国の覇王。本能寺の変で倒れた。', zhTw: '築建安土城作為天下統一象徵的戰國霸王。在本能寺之變中倒下。', en: 'The Sengoku overlord who built Azuchi as the symbol of national unification; fell at Honnō-ji.' } },
      { ja: '岡部又右衛門', zhTw: '岡部又右衛門', en: 'Okabe Mataemon', desc: { ja: '安土城天主の設計を担当したとされる名大工棟梁。', zhTw: '據傳負責安土城天主設計的名大工棟梁。', en: 'The master carpenter credited with designing Azuchi Castle\'s main tower.' } },
    ],
    trivia: [
      { ja: '天主内部は金碧障壁画で飾られ、宣教師も驚嘆したヨーロッパにもない壮麗さだった。', zhTw: '天主內部以金碧障壁畫裝飾，連傳教士也驚嘆其歐洲所未有的壯麗。', en: 'The interior was adorned with gold-leaf paintings — missionaries marveled that nothing like it existed in Europe.' },
      { ja: '安土城は日本の城郭建築の革命的転換点とされ、以後の天守建築に多大な影響を与えた。', zhTw: '安土城被視為日本城郭建築的革命性轉捩點，對此後的天守建築影響深遠。', en: 'Azuchi Castle marked a revolutionary turning point in Japanese castle architecture, influencing all subsequent keeps.' },
    ],
    highlights: [
      { ja: '大手道の石段 — 幅6mの壮大な直線的石段が山頂へ導く。', zhTw: '大手道的石階 — 寬6公尺的壯闊直線石階通往山頂。', en: 'The main approach stone steps — a grand 6m-wide stairway leading to the summit.' },
      { ja: '天主台跡 — 信長の天主が建っていた礎石群が残る。', zhTw: '天主台遺跡 — 信長天主所在位置的礎石群殘存。', en: 'Keep platform ruins — foundation stones where Nobunaga\'s tower once stood.' },
    ],
    architecture: [
      { ja: '五層七階（地上6階・地下1階）の天主は日本初の本格的高層建築。金箔瓦や金碧画で装飾された。', zhTw: '五層七階（地上6階・地下1階）的天主為日本首座正式高層建築。以金箔瓦與金碧畫裝飾。', en: 'The five-layer, seven-floor tower was Japan\'s first true high-rise, decorated with gold-leaf tiles and paintings.' },
      { ja: '大手道が城の正面を一直線に登る画期的な設計は、権力を誇示する信長の意志を反映。', zhTw: '大手道一直線登上城正面的劃時代設計，反映信長誇示權力的意志。', en: 'The straight main approach ascending the castle front was a groundbreaking design reflecting Nobunaga\'s display of power.' },
    ],
  },
  {
    id: 'kannonji', number: 52, regionId: 'kinki',
    name: { ja: '観音寺城', zhTw: '觀音寺城', en: 'Kannonji Castle' },
    city: { ja: '近江八幡市', zhTw: '近江八幡市', en: 'Ōmihachiman' },
    prefecture: { ja: '滋賀県', zhTw: '滋賀縣', en: 'Shiga' },
    type: 'yamajiro', designation: '国指定史跡',
    position: { x: 52, y: 64 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#8b7e6b', roofColor: '#5a3825' },
    goshuin: { bg: '#e8dfd0', ink: '#3a2518', seal: '#b83a3a', crest: '#7a6520' },
    history: [
      { year: 1335, event: { ja: '六角氏頼が繖山に城を築き、近江守護六角氏の本拠とした。', zhTw: '六角氏賴在繖山築城，作為近江守護六角氏的根據地。', en: 'Rokkaku Ujiyori built a castle on Mt. Kinugasa as the seat of the Rokkaku protectors of Ōmi.' } },
      { year: 1568, event: { ja: '織田信長の上洛軍を前に六角義賢が戦わずして城を放棄した。', zhTw: '面對織田信長上洛軍，六角義賢未戰即棄城。', en: 'Rokkaku Yoshikata abandoned the castle without a fight as Nobunaga marched on Kyoto.' } },
      { year: 2006, event: { ja: '日本100名城に選定。安土城と共に繖山の歴史が再評価された。', zhTw: '入選日本100名城。與安土城共同使繖山的歷史獲得重新評價。', en: 'Selected as one of the 100 Famous Castles; the history of Mt. Kinugasa was re-evaluated alongside Azuchi.' } },
    ],
    figures: [
      { ja: '六角定頼', zhTw: '六角定賴', en: 'Rokkaku Sadayori', desc: { ja: '観音寺城を大規模に整備し六角氏の最盛期を築いた名将。', zhTw: '大規模整備觀音寺城、建立六角氏全盛期的名將。', en: 'A capable lord who greatly expanded Kannonji Castle and led the Rokkaku clan to its zenith.' } },
      { ja: '六角義賢', zhTw: '六角義賢', en: 'Rokkaku Yoshikata', desc: { ja: '信長に抵抗できず城を放棄した最後の城主。', zhTw: '無法抵抗信長而棄城的最後城主。', en: 'The last lord who abandoned the castle, unable to resist Nobunaga.' } },
    ],
    trivia: [
      { ja: '安土城のすぐ隣の山にあり、信長は観音寺城を見て安土城の構想を得たとも。', zhTw: '位於安土城旁邊的山上，信長據說看了觀音寺城而得到安土城的構想。', en: 'Located on a mountain next to Azuchi; Nobunaga may have been inspired to build Azuchi after seeing Kannonji.' },
      { ja: '城域は極めて広大で、1,000以上の曲輪があったとされる。', zhTw: '城域極為廣大，據說有1,000個以上的曲輪。', en: 'The castle domain was immense, said to have contained over 1,000 compounds.' },
    ],
    highlights: [
      { ja: '石垣群 — 山中に点在する中世の石垣が神秘的な雰囲気を醸す。', zhTw: '石垣群 — 散布山中的中世石垣營造出神祕氛圍。', en: 'Stone wall clusters — medieval walls scattered through the mountains create a mystical atmosphere.' },
      { ja: '観音正寺 — 西国三十三所の札所で城の守護寺だった古刹。', zhTw: '觀音正寺 — 西國三十三所札所，曾為城的守護寺的古剎。', en: 'Kannonshō-ji Temple — a pilgrimage temple that served as the castle\'s guardian shrine.' },
    ],
    architecture: [
      { ja: '繖山全体を城郭化した日本最大級の中世山城。曲輪数は1,000以上とも。', zhTw: '將繖山整座山城郭化的日本最大級中世山城。曲輪數據說超過1,000。', en: 'One of Japan\'s largest medieval mountain castles, fortifying the entire mountain with over 1,000 compounds.' },
      { ja: '本丸付近には安土城に先駆けて石垣を用いた先進的な築城が見られる。', zhTw: '本丸附近可見先於安土城使用石垣的先進築城手法。', en: 'Advanced stone wall construction near the honmaru predates even Azuchi Castle\'s techniques.' },
    ],
  },
  // ── 近畿（続き）・中国 ──
  {
    id: 'chihaya', number: 55, regionId: 'kinki',
    name: { ja: '千早城', zhTw: '千早城', en: 'Chihaya Castle' },
    city: { ja: '千早赤阪村', zhTw: '千早赤阪村', en: 'Chihayaakasaka' },
    prefecture: { ja: '大阪府', zhTw: '大阪府', en: 'Osaka' },
    type: 'yamajiro', designation: '国指定史跡',
    position: { x: 56, y: 68 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#8b7e6b', roofColor: '#3d5c4a' },
    goshuin: { bg: '#e8dfd0', ink: '#2d4a3e', seal: '#c53d43', crest: '#7a6520' },
    history: [
      { year: 1332, event: { ja: '楠木正成が千早城を築き、鎌倉幕府の大軍を相手にゲリラ戦で抵抗した。', zhTw: '楠木正成築建千早城，以游擊戰抵抗鎌倉幕府大軍。', en: 'Kusunoki Masashige built Chihaya Castle and waged guerrilla warfare against the massive Kamakura shogunate army.' } },
      { year: 1333, event: { ja: '約1,000人で10万の幕府軍を100日以上足止めし、鎌倉幕府滅亡の契機を作った。', zhTw: '以約1,000人阻止10萬幕府軍超過100天，成為鎌倉幕府滅亡的契機。', en: 'With about 1,000 men he held off 100,000 troops for over 100 days, precipitating the fall of the Kamakura shogunate.' } },
      { year: 1934, event: { ja: '千早城跡が国の史跡に指定された。', zhTw: '千早城遺跡被指定為國家史跡。', en: 'Chihaya Castle ruins were designated a National Historic Site.' } },
    ],
    figures: [
      { ja: '楠木正成', zhTw: '楠木正成', en: 'Kusunoki Masashige', desc: { ja: '「大楠公」と尊称される南朝最大の忠臣。知略と忠義で後世に名を残す。', zhTw: '被尊稱為「大楠公」的南朝最大忠臣。以智略與忠義留名後世。', en: 'The "Great Kusunoki," the Southern Court\'s greatest loyalist, celebrated for his strategy and devotion.' } },
      { ja: '楠木正行', zhTw: '楠木正行', en: 'Kusunoki Masatsura', desc: { ja: '正成の嫡男「小楠公」。父の遺志を継いで南朝のために戦った。', zhTw: '正成嫡子「小楠公」。繼承父親遺志為南朝而戰。', en: 'Masashige\'s eldest son, the "Lesser Kusunoki," who fought for the Southern Court following his father\'s will.' } },
    ],
    trivia: [
      { ja: '正成は藁人形・落石・熱湯など奇策を駆使して幕府軍を翻弄した。', zhTw: '正成運用稻草人、落石、熱湯等奇策翻弄幕府軍。', en: 'Masashige outwitted the shogunate army using straw dummies, rockfalls, and boiling water.' },
      { ja: '千早城の戦いは日本史上最も有名な籠城戦の一つ。', zhTw: '千早城之戰是日本史上最著名的籠城戰之一。', en: 'The Siege of Chihaya is one of the most famous castle sieges in Japanese history.' },
    ],
    highlights: [
      { ja: '千早神社 — 楠木正成を祀る神社が本丸跡に鎮座。', zhTw: '千早神社 — 祭祀楠木正成的神社座落於本丸遺跡。', en: 'Chihaya Shrine — a shrine dedicated to Kusunoki Masashige stands on the honmaru site.' },
      { ja: '金剛山の自然 — 大阪最高峰への登山と合わせて楽しめる。', zhTw: '金剛山的自然 — 可與攀登大阪最高峰一同享受。', en: 'Mt. Kongō nature — combine a visit with a hike up Osaka\'s highest peak.' },
    ],
    architecture: [
      { ja: '金剛山の急峻な尾根上に築かれた天然の要害。攻め手は狭い山道からしか接近できなかった。', zhTw: '築於金剛山陡峭山脊上的天然要害。攻方只能從狹窄山道接近。', en: 'A natural fortress on steep ridges of Mt. Kongō; attackers could only approach via narrow mountain paths.' },
      { ja: '本丸・二の丸・三の丸・四の丸が尾根に沿って連なる連郭式の山城。', zhTw: '本丸、二之丸、三之丸、四之丸沿山脊相連的連郭式山城。', en: 'Honmaru through yonnomaru linked along the ridge in a chain-style mountain castle.' },
    ],
  },
  {
    id: 'takeda-hyogo', number: 56, regionId: 'kinki',
    name: { ja: '竹田城', zhTw: '竹田城', en: 'Takeda Castle' },
    city: { ja: '朝来市', zhTw: '朝來市', en: 'Asago' },
    prefecture: { ja: '兵庫県', zhTw: '兵庫縣', en: 'Hyōgo' },
    type: 'yamajiro', designation: '国指定史跡',
    position: { x: 50, y: 62 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#8b7e6b', roofColor: '#3d5c4a' },
    goshuin: { bg: '#e8dfd0', ink: '#2d4a3e', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1441, event: { ja: '山名宗全が但馬の山頂に竹田城を築いた。', zhTw: '山名宗全在但馬的山頂築建竹田城。', en: 'Yamana Sōzen built Takeda Castle on a mountaintop in Tajima.' } },
      { year: 1585, event: { ja: '赤松広秀が城主となり、現在残る総石垣の城に大改修した。', zhTw: '赤松廣秀成為城主，大改修為現存的全石垣城。', en: 'Akamatsu Hirohide became lord and rebuilt it as the fully stone-walled castle that remains today.' } },
      { year: 1600, event: { ja: '関ヶ原後に廃城となり、以後400年以上石垣だけが残された。', zhTw: '關原之戰後廢城，此後400年以上僅石垣殘存。', en: 'Abandoned after Sekigahara; for over 400 years only the stone walls have endured.' } },
    ],
    figures: [
      { ja: '山名宗全', zhTw: '山名宗全', en: 'Yamana Sōzen', desc: { ja: '応仁の乱の西軍総大将で竹田城の築城者。', zhTw: '應仁之亂西軍總大將，竹田城的築城者。', en: 'Commander of the western army in the Ōnin War and builder of Takeda Castle.' } },
      { ja: '赤松広秀', zhTw: '赤松廣秀', en: 'Akamatsu Hirohide', desc: { ja: '竹田城を石垣の城に改修した最後の城主。関ヶ原後に切腹。', zhTw: '將竹田城改修為石垣之城的最後城主。關原之戰後切腹。', en: 'Last lord who rebuilt Takeda with stone walls; committed seppuku after Sekigahara.' } },
    ],
    trivia: [
      { ja: '秋から冬の早朝に雲海に浮かぶ姿から「天空の城」「日本のマチュピチュ」と呼ばれる。', zhTw: '因秋冬清晨浮於雲海中的姿態被稱為「天空之城」「日本的馬丘比丘」。', en: 'Called "Castle in the Sky" and "Japan\'s Machu Picchu" for floating above clouds on autumn and winter mornings.' },
      { ja: '近年のSNSブームで年間観光客が急増し、入場制限が設けられた。', zhTw: '近年因社群媒體熱潮年觀光客急增，實施入場限制。', en: 'Social media fame caused a visitor surge, leading to admission restrictions.' },
    ],
    highlights: [
      { ja: '雲海に浮かぶ石垣 — 秋の早朝、城が雲海から突き出す幻想的な光景。', zhTw: '浮於雲海中的石垣 — 秋季清晨城從雲海中突出的夢幻光景。', en: 'Stone walls above the sea of clouds — a dreamlike autumn morning sight of the castle emerging from mist.' },
      { ja: '南千畳からの全景 — 石垣の全体像を一望できる絶好のビューポイント。', zhTw: '從南千疊的全景 — 可一覽石垣全貌的絕佳觀景點。', en: 'Panorama from Minami-Senjō — the best viewpoint to see the complete stone wall ruins.' },
    ],
    architecture: [
      { ja: '標高354mの山頂に東西約100m×南北約400mにわたり石垣が展開する壮大な山城。', zhTw: '在標高354公尺山頂東西約100m×南北約400m展開石垣的壯闊山城。', en: 'Stone walls span 100m east-west and 400m north-south atop a 354m peak — a magnificent mountain castle.' },
      { ja: '穴太積みの石垣が400年以上崩れずに残る驚異的な保存状態。', zhTw: '穴太積石垣400年以上未崩塌的驚人保存狀態。', en: 'Anō-style stone walls have survived over 400 years without collapse — remarkably preserved.' },
    ],
  },
  {
    id: 'sasayama', number: 57, regionId: 'kinki',
    name: { ja: '篠山城', zhTw: '篠山城', en: 'Sasayama Castle' },
    city: { ja: '丹波篠山市', zhTw: '丹波篠山市', en: 'Tanbasasayama' },
    prefecture: { ja: '兵庫県', zhTw: '兵庫縣', en: 'Hyōgo' },
    type: 'hirajiro', designation: '国指定史跡',
    position: { x: 52, y: 64 },
    illustration: { style: 'classic', tiers: 1, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1609, event: { ja: '徳川家康が西国大名への備えとして藤堂高虎に設計を命じ天下普請で築城した。', zhTw: '德川家康為防備西國大名命藤堂高虎設計，以天下普請方式築城。', en: 'Tokugawa Ieyasu ordered Tōdō Takatora to design the castle as a bulwark against western daimyō.' } },
      { year: 2000, event: { ja: '大書院が木造で復元された。', zhTw: '大書院以木造復原。', en: 'The Grand Hall was reconstructed in wood.' } },
    ],
    figures: [
      { ja: '藤堂高虎', zhTw: '藤堂高虎', en: 'Tōdō Takatora', desc: { ja: '篠山城の縄張りを設計した築城の名手。', zhTw: '設計篠山城配置的築城名手。', en: 'The master castle builder who designed Sasayama Castle\'s layout.' } },
      { ja: '松平康重', zhTw: '松平康重', en: 'Matsudaira Yasushige', desc: { ja: '篠山藩初代藩主。', zhTw: '篠山藩初代藩主。', en: 'First lord of Sasayama domain.' } },
    ],
    trivia: [
      { ja: '天守は計画されたが建てられず、大書院が政務の中心だった。', zhTw: '天守雖有計畫但未建造，大書院為政務中心。', en: 'A keep was planned but never built; the Grand Hall served as the administrative center.' },
      { ja: '丹波篠山は黒豆やボタン鍋（猪肉）の名産地としても有名。', zhTw: '丹波篠山亦以黑豆和牡丹鍋（山豬肉）的名產地聞名。', en: 'Tanbasasayama is also famous for black soybeans and botan-nabe (wild boar hot pot).' },
    ],
    highlights: [
      { ja: '復元大書院 — 木造で忠実に再建された藩の政庁。', zhTw: '復原大書院 — 以木造忠實重建的藩政廳。', en: 'Restored Grand Hall — faithfully rebuilt in wood as the domain\'s administrative center.' },
      { ja: '篠山城下町 — 武家屋敷や商家が残る風情ある町並み。', zhTw: '篠山城下町 — 保留武家宅邸與商家的風情街景。', en: 'Sasayama castle town — atmospheric streets with samurai and merchant residences.' },
    ],
    architecture: [
      { ja: '藤堂高虎設計の壮大な高石垣と馬出しを持つ近世城郭。', zhTw: '藤堂高虎設計的壯闊高石垣與馬出的近世城郭。', en: 'An early-modern castle with imposing stone walls and barbicans designed by Tōdō Takatora.' },
      { ja: '内堀に囲まれた本丸と外堀に囲まれた三の丸の二重構造。', zhTw: '內堀環繞的本丸與外堀環繞的三之丸的雙重結構。', en: 'A dual structure with inner moat around the honmaru and outer moat around the sannomaru.' },
    ],
  },
  {
    id: 'akashi', number: 58, regionId: 'kinki',
    name: { ja: '明石城', zhTw: '明石城', en: 'Akashi Castle' },
    city: { ja: '明石市', zhTw: '明石市', en: 'Akashi' },
    prefecture: { ja: '兵庫県', zhTw: '兵庫縣', en: 'Hyōgo' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 50, y: 66 },
    illustration: { style: 'classic', tiers: 2, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#9a7030' },
    history: [
      { year: 1619, event: { ja: '小笠原忠政が徳川家康の命で明石城を築城した。', zhTw: '小笠原忠政奉德川家康之命築建明石城。', en: 'Ogasawara Tadamasa built Akashi Castle on Tokugawa Ieyasu\'s orders.' } },
      { year: 1874, event: { ja: '廃城後に城跡は公園として整備された。', zhTw: '廢城後城跡整建為公園。', en: 'After abolition, the castle grounds were developed into a park.' } },
    ],
    figures: [
      { ja: '小笠原忠政', zhTw: '小笠原忠政', en: 'Ogasawara Tadamasa', desc: { ja: '宮本武蔵に城下町の設計を依頼したとされる明石藩初代藩主。', zhTw: '據傳委託宮本武藏設計城下町的明石藩初代藩主。', en: 'First lord of Akashi, said to have asked Miyamoto Musashi to design the castle town.' } },
      { ja: '宮本武蔵', zhTw: '宮本武藏', en: 'Miyamoto Musashi', desc: { ja: '剣聖として知られるが、明石では城下町の都市計画にも関わったとされる。', zhTw: '以劍聖聞名，但在明石據說也參與了城下町的都市計畫。', en: 'Known as a sword saint; in Akashi he is also credited with urban planning for the castle town.' } },
    ],
    trivia: [
      { ja: '天守は建てられず、現存する坤櫓と巽櫓の二基の櫓がシンボル。', zhTw: '未建天守，現存的坤櫓與巽櫓兩座櫓為象徵。', en: 'No keep was built; the two surviving turrets (Hitsujisaru and Tatsumi) are the castle\'s symbols.' },
      { ja: 'JR明石駅のホームから石垣と櫓が見える立地の良さ。', zhTw: '從JR明石站月台即可看到石垣與櫓的優良位置。', en: 'Stone walls and turrets are visible directly from the JR Akashi Station platform.' },
    ],
    highlights: [
      { ja: '坤櫓と巽櫓 — 共に現存する重要文化財の櫓。', zhTw: '坤櫓與巽櫓 — 均為現存的重要文化財櫓。', en: 'Hitsujisaru and Tatsumi turrets — both surviving Important Cultural Properties.' },
      { ja: '明石公園の桜 — 約1,000本の桜が石垣と共演。', zhTw: '明石公園的櫻花 — 約1,000棵櫻花與石垣共演。', en: 'Akashi Park cherry blossoms — 1,000 trees alongside the stone walls.' },
    ],
    architecture: [
      { ja: '本丸に4基の三重櫓を配置する計画だったが、うち2基（坤櫓・巽櫓）のみ現存。', zhTw: '本丸計畫配置4座三重櫓，僅2座（坤櫓、巽櫓）現存。', en: 'Four three-story turrets were planned for the honmaru; only two (Hitsujisaru and Tatsumi) survive.' },
      { ja: '石垣は宮本武蔵が縄張り指導に関わったとする伝承がある。', zhTw: '有石垣由宮本武藏參與配置指導的傳說。', en: 'Legend holds that Miyamoto Musashi advised on the stone wall layout.' },
    ],
  },
  {
    id: 'ako', number: 60, regionId: 'kinki',
    name: { ja: '赤穂城', zhTw: '赤穗城', en: 'Akō Castle' },
    city: { ja: '赤穂市', zhTw: '赤穗市', en: 'Akō' },
    prefecture: { ja: '兵庫県', zhTw: '兵庫縣', en: 'Hyōgo' },
    type: 'hirajiro', designation: '国指定史跡',
    position: { x: 48, y: 68 },
    illustration: { style: 'classic', tiers: 1, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1648, event: { ja: '浅野長直が赤穂城の築城を開始した。', zhTw: '淺野長直開始築建赤穗城。', en: 'Asano Naganao began building Akō Castle.' } },
      { year: 1701, event: { ja: '浅野内匠頭長矩が江戸城松の廊下で吉良上野介に刃傷し切腹。赤穂藩は改易となった。', zhTw: '淺野內匠頭長矩在江戶城松之廊下刃傷吉良上野介後切腹。赤穗藩被改易。', en: 'Lord Asano Naganori attacked Kira Yoshinaka in Edo Castle\'s Pine Corridor and was forced to commit seppuku; the domain was abolished.' } },
      { year: 1703, event: { ja: '大石内蔵助ら47人の赤穂浪士が吉良邸に討ち入りし主君の仇を討った。', zhTw: '大石內藏助等47名赤穗浪士攻入吉良宅邸為主君復仇。', en: 'Ōishi Kuranosuke and 46 fellow rōnin raided Kira\'s mansion, avenging their lord.' } },
    ],
    figures: [
      { ja: '大石内蔵助', zhTw: '大石內藏助', en: 'Ōishi Kuranosuke', desc: { ja: '赤穂浪士の討ち入りを指揮した忠臣蔵の主人公。', zhTw: '指揮赤穗浪士討入的忠臣藏主角。', en: 'Leader of the 47 Rōnin and protagonist of the Chūshingura saga.' } },
      { ja: '浅野内匠頭長矩', zhTw: '淺野內匠頭長矩', en: 'Asano Naganori', desc: { ja: '松の廊下事件の当事者で赤穂藩最後の藩主。', zhTw: '松之廊下事件的當事人，赤穗藩最後的藩主。', en: 'Last lord of Akō, the central figure in the Pine Corridor Incident.' } },
    ],
    trivia: [
      { ja: '忠臣蔵の舞台として日本で最も有名な忠義の物語の発祥地。', zhTw: '作為忠臣藏的舞台，日本最著名忠義故事的發祥地。', en: 'The birthplace of Japan\'s most famous loyalty tale — the Chūshingura (47 Rōnin) story.' },
      { ja: '赤穂の塩は古くから高品質で知られ、赤穂藩の財政を支えた。', zhTw: '赤穗之鹽自古以高品質聞名，支撐赤穗藩的財政。', en: 'Akō salt has been prized since ancient times and supported the domain\'s finances.' },
    ],
    highlights: [
      { ja: '大石神社 — 四十七士を祀る神社。義士の像が参道に並ぶ。', zhTw: '大石神社 — 祭祀四十七士的神社。義士像排列於參道。', en: 'Ōishi Shrine — dedicated to the 47 Rōnin, with statues lining the approach.' },
      { ja: '復元された本丸門と庭園 — 往時の雰囲気を伝える。', zhTw: '復原的本丸門與庭園 — 傳達昔日氛圍。', en: 'Restored honmaru gate and garden — evoking the castle\'s former atmosphere.' },
    ],
    architecture: [
      { ja: '甲州流軍学に基づく変形輪郭式の縄張りは全国的にも珍しい。', zhTw: '基於甲州流軍學的變形輪郭式配置在全國極為罕見。', en: 'An unusual modified-concentric layout based on Kōshū military science — rare nationwide.' },
      { ja: '天守は建てられず、天守台のみが残る。海に面した水堀が特徴。', zhTw: '未建天守，僅留天守台。面海的水堀為其特徵。', en: 'No keep was built — only the platform remains. Sea-facing water moats are distinctive.' },
    ],
  },
  {
    id: 'takatori', number: 61, regionId: 'kinki',
    name: { ja: '高取城', zhTw: '高取城', en: 'Takatori Castle' },
    city: { ja: '高取町', zhTw: '高取町', en: 'Takatori' },
    prefecture: { ja: '奈良県', zhTw: '奈良縣', en: 'Nara' },
    type: 'yamajiro', designation: '国指定史跡',
    position: { x: 54, y: 68 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#8b7e6b', roofColor: '#5a3825' },
    goshuin: { bg: '#e8dfd0', ink: '#3a2518', seal: '#c53d43', crest: '#7a6520' },
    history: [
      { year: 1332, event: { ja: '越智邦澄が高取山に城を築いたのが始まり。', zhTw: '越智邦澄在高取山築城，為城之起源。', en: 'Ochi Kunisumi built the first fortification on Mt. Takatori.' } },
      { year: 1585, event: { ja: '本多利久が入城し、近世城郭として大改修した。', zhTw: '本多利久入城，大規模改建為近世城郭。', en: 'Honda Toshihisa took over and transformed it into an early-modern castle.' } },
      { year: 1873, event: { ja: '廃城後に建物は取り壊されたが、壮大な石垣群が山中に残された。', zhTw: '廢城後建築被拆除，但壯觀的石垣群殘留山中。', en: 'Buildings were demolished after abolition, but magnificent stone walls remain in the mountains.' } },
    ],
    figures: [
      { ja: '本多利久', zhTw: '本多利久', en: 'Honda Toshihisa', desc: { ja: '豊臣秀長の家臣で高取城を近世城郭に改修した。', zhTw: '豐臣秀長的家臣，將高取城改建為近世城郭。', en: 'A retainer of Toyotomi Hidenaga who rebuilt Takatori as an early-modern fortress.' } },
      { ja: '植村家政', zhTw: '植村家政', en: 'Uemura Iemasa', desc: { ja: '旗本から大名に取り立てられ高取藩を14代にわたり治めた。', zhTw: '從旗本擢升為大名，治理高取藩14代。', en: 'Elevated from bannerman to daimyō, ruling Takatori domain for 14 generations.' } },
    ],
    trivia: [
      { ja: '日本三大山城の一つで、標高584mに壮大な石垣群が残る「天空の城」。', zhTw: '日本三大山城之一，標高584公尺殘存壯觀石垣群的「天空之城」。', en: 'One of Japan\'s three great mountain castles — a "castle in the sky" with stone walls at 584m elevation.' },
      { ja: '11月の「たかとり城まつり」では城跡への登山イベントが人気。', zhTw: '11月的「高取城祭」中登山城跡的活動極受歡迎。', en: 'The November "Takatori Castle Festival" features popular hiking events to the castle ruins.' },
    ],
    highlights: [
      { ja: '山中に残る壮大な石垣群 — 深い山林の中に突然現れる石垣は感動的。', zhTw: '殘存山中的壯觀石垣群 — 在深山林中突然出現的石垣令人感動。', en: 'Magnificent stone walls deep in the mountains — breathtaking when they suddenly appear through the forest.' },
      { ja: '紅葉と石垣 — 秋の高取城は石垣と紅葉の絶景。', zhTw: '紅葉與石垣 — 秋天的高取城是石垣與紅葉的絕景。', en: 'Autumn foliage and stone walls — fall at Takatori offers stunning wall-and-leaf scenery.' },
    ],
    architecture: [
      { ja: '標高584mに三重天守を含む壮大な石垣群を築いた日本三大山城の一つ。', zhTw: '在標高584公尺築建含三重天守壯觀石垣群的日本三大山城之一。', en: 'One of Japan\'s three great mountain castles with a three-story keep atop stone walls at 584m.' },
      { ja: '山麓から山頂まで約2.5kmの山道沿いに門や櫓の石垣が点在する。', zhTw: '從山麓到山頂約2.5公里山道沿途散布門與櫓的石垣。', en: 'Gate and turret stonework dot the 2.5km mountain path from base to summit.' },
    ],
  },
  {
    id: 'wakayama', number: 62, regionId: 'kinki',
    name: { ja: '和歌山城', zhTw: '和歌山城', en: 'Wakayama Castle' },
    city: { ja: '和歌山市', zhTw: '和歌山市', en: 'Wakayama' },
    prefecture: { ja: '和歌山県', zhTw: '和歌山縣', en: 'Wakayama' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 52, y: 70 },
    illustration: { style: 'classic', tiers: 3, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f5ede0', ink: '#2a2a2a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1585, event: { ja: '豊臣秀吉が弟・秀長に命じて和歌山城を築かせた。', zhTw: '豐臣秀吉命弟秀長築建和歌山城。', en: 'Toyotomi Hideyoshi ordered his brother Hidenaga to build Wakayama Castle.' } },
      { year: 1619, event: { ja: '徳川頼宣が入封し、紀州徳川家（御三家）の居城となった。', zhTw: '德川賴宣入封，成為紀州德川家（御三家）的居城。', en: 'Tokugawa Yorinobu took over, making it the seat of the Kii Tokugawa (Gosanke).' } },
      { year: 1945, event: { ja: '空襲で天守が焼失。1958年にRC造で再建された。', zhTw: '空襲中天守燒毀。1958年以鋼筋混凝土重建。', en: 'The keep was destroyed by air raids; rebuilt in reinforced concrete in 1958.' } },
    ],
    figures: [
      { ja: '徳川吉宗', zhTw: '德川吉宗', en: 'Tokugawa Yoshimune', desc: { ja: '紀州藩主から八代将軍となり享保の改革を断行した「暴れん坊将軍」。', zhTw: '從紀州藩主成為第八代將軍，斷行享保改革的「暴坊將軍」。', en: 'From Kii lord to eighth shōgun, the "Rambunctious Shōgun" who carried out the Kyōhō Reforms.' } },
      { ja: '浅野幸長', zhTw: '淺野幸長', en: 'Asano Yoshinaga', desc: { ja: '関ヶ原後に紀伊に入封し和歌山城を大改修した大名。', zhTw: '關原之戰後入封紀伊並大規模改建和歌山城的大名。', en: 'Lord who took Kii after Sekigahara and extensively renovated Wakayama Castle.' } },
    ],
    trivia: [
      { ja: '御三家の中で最も多くの将軍を輩出した紀州徳川家の居城。', zhTw: '御三家中產出最多將軍的紀州德川家之居城。', en: 'Seat of the Kii Tokugawa, which produced more shōguns than any other Gosanke branch.' },
      { ja: '城内の動物園は入園無料で、和歌山市民に親しまれている。', zhTw: '城內動物園免費入園，深受和歌山市民喜愛。', en: 'The castle grounds include a free zoo beloved by Wakayama citizens.' },
    ],
    highlights: [
      { ja: '連立式天守群 — 大天守と小天守が渡り櫓で連結された壮麗な構成。', zhTw: '連立式天守群 — 大天守與小天守以渡櫓連結的壯麗構成。', en: 'Connected keep complex — grand and small keeps linked by connecting turrets.' },
      { ja: '西之丸庭園 — 紅葉の名所として知られる名勝庭園。', zhTw: '西之丸庭園 — 以紅葉名所聞名的名勝庭園。', en: 'Nishinomaru Garden — a scenic garden famous for autumn foliage.' },
    ],
    architecture: [
      { ja: '大天守・小天守・乾櫓・二の門櫓が渡り櫓で結ばれた連立式天守群。', zhTw: '大天守、小天守、乾櫓、二之門櫓以渡櫓連結的連立式天守群。', en: 'A complex of linked keeps with grand keep, small keep, and turrets connected by corridors.' },
      { ja: '野面積みから切込接ぎまで時代の異なる石垣が共存する「石垣の博物館」。', zhTw: '從野面積到切込接等不同時代石垣共存的「石垣博物館」。', en: 'A "stone wall museum" where rough-stacked and precision-cut walls from different eras coexist.' },
    ],
  },
  {
    id: 'tottori', number: 63, regionId: 'chugoku',
    name: { ja: '鳥取城', zhTw: '鳥取城', en: 'Tottori Castle' },
    city: { ja: '鳥取市', zhTw: '鳥取市', en: 'Tottori' },
    prefecture: { ja: '鳥取県', zhTw: '鳥取縣', en: 'Tottori' },
    type: 'yamajiro', designation: '国指定史跡',
    position: { x: 42, y: 62 },
    illustration: { style: 'classic', tiers: 1, color: '#8b7e6b', roofColor: '#3d5c4a' },
    goshuin: { bg: '#e8dfd0', ink: '#2d4a3e', seal: '#c53d43', crest: '#7a6520' },
    history: [
      { year: 1545, event: { ja: '但馬山名氏の一族が久松山に城を築いた。', zhTw: '但馬山名氏一族在久松山築城。', en: 'A branch of the Tajima Yamana clan built a castle on Mt. Kyūshō.' } },
      { year: 1581, event: { ja: '羽柴秀吉が兵糧攻めを行い約4ヶ月の凄惨な飢餓籠城戦の末に落城した。', zhTw: '羽柴秀吉進行斷糧攻擊，經約4個月的慘烈飢餓籠城戰後陷落。', en: 'Hashiba Hideyoshi laid a starvation siege; after about four months of horrific famine, the castle fell.' } },
      { year: 1617, event: { ja: '池田光政が入封し、以後池田氏が鳥取藩を治めた。', zhTw: '池田光政入封，此後池田氏治理鳥取藩。', en: 'Ikeda Mitsumasa took over; the Ikeda clan governed Tottori domain thereafter.' } },
    ],
    figures: [
      { ja: '羽柴秀吉', zhTw: '羽柴秀吉', en: 'Hashiba Hideyoshi', desc: { ja: '中国攻めの一環として鳥取城を兵糧攻めで落とした。', zhTw: '作為中國攻略的一環以斷糧攻擊攻陷鳥取城。', en: 'Captured Tottori by starvation siege as part of his campaign to conquer the Chūgoku region.' } },
      { ja: '吉川経家', zhTw: '吉川經家', en: 'Kikkawa Tsuneie', desc: { ja: '鳥取城に派遣された毛利方の城将。城兵を助けるため自身の切腹と引き換えに開城した。', zhTw: '被派至鳥取城的毛利方城將。為拯救城兵以自身切腹換取開城。', en: 'Mōri commander sent to defend Tottori; sacrificed himself via seppuku to save the garrison.' } },
    ],
    trivia: [
      { ja: '秀吉の鳥取城兵糧攻めは「鳥取の飢え殺し」と呼ばれ、日本史上最も悲惨な籠城戦の一つ。', zhTw: '秀吉的鳥取城斷糧攻擊被稱為「鳥取餓殺」，是日本史上最悲慘的籠城戰之一。', en: 'Known as the "Starvation of Tottori" — one of the most tragic siege episodes in Japanese history.' },
      { ja: '巻石垣（球面石垣）は全国でも例のない珍しい石垣技法。', zhTw: '卷石垣（球面石垣）是全國罕見的石垣技法。', en: 'The spherical "rolling stone wall" is an extremely rare masonry technique found almost nowhere else.' },
    ],
    highlights: [
      { ja: '山頂からの鳥取砂丘と日本海の眺望 — 壮大な景色が広がる。', zhTw: '從山頂眺望鳥取砂丘與日本海 — 壯闊景色展開。', en: 'Views of Tottori Sand Dunes and the Sea of Japan from the summit — vast, breathtaking scenery.' },
      { ja: '巻石垣 — 全国唯一の球面石垣は必見。', zhTw: '卷石垣 — 全國唯一的球面石垣必看。', en: 'Spherical stone wall — a must-see, one-of-a-kind masonry technique.' },
    ],
    architecture: [
      { ja: '山頂の中世山城と山麓の近世城郭が共存する「城郭の博物館」。', zhTw: '山頂的中世山城與山麓的近世城郭共存的「城郭博物館」。', en: 'A "castle museum" where a medieval mountaintop fortress and early-modern foothill castle coexist.' },
      { ja: '天球丸の巻石垣は球面状に積まれた全国唯一の特殊な石垣。', zhTw: '天球丸的卷石垣是以球面狀堆砌的全國唯一特殊石垣。', en: 'The Tenkyū-maru\'s spherical stone wall is a unique curved structure found nowhere else in Japan.' },
    ],
  },
  {
    id: 'gassan-toda', number: 65, regionId: 'chugoku',
    name: { ja: '月山富田城', zhTw: '月山富田城', en: 'Gassan Toda Castle' },
    city: { ja: '安来市', zhTw: '安來市', en: 'Yasugi' },
    prefecture: { ja: '島根県', zhTw: '島根縣', en: 'Shimane' },
    type: 'yamajiro', designation: '国指定史跡',
    position: { x: 38, y: 62 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#8b7e6b', roofColor: '#3d5c4a' },
    goshuin: { bg: '#e8dfd0', ink: '#2d4a3e', seal: '#b83a3a', crest: '#7a6520' },
    history: [
      { year: 1185, event: { ja: '佐々木義清が月山に城を築いたのが始まりとされる。', zhTw: '佐佐木義清在月山築城，為城之起源。', en: 'Sasaki Yoshikiyo is said to have built the first castle on Mt. Gassan.' } },
      { year: 1537, event: { ja: '尼子経久が出雲を統一し月山富田城を中国地方最大の山城に発展させた。', zhTw: '尼子經久統一出雲，將月山富田城發展為中國地方最大的山城。', en: 'Amago Tsunehisa unified Izumo and developed Gassan Toda into the Chūgoku region\'s largest mountain castle.' } },
      { year: 1566, event: { ja: '毛利元就の1年半にわたる兵糧攻めの末に落城。尼子氏は滅亡した。', zhTw: '經毛利元就一年半的斷糧攻擊後陷落。尼子氏滅亡。', en: 'Fell after a year-and-a-half starvation siege by Mōri Motonari; the Amago clan was destroyed.' } },
    ],
    figures: [
      { ja: '尼子経久', zhTw: '尼子經久', en: 'Amago Tsunehisa', desc: { ja: '「謀聖」と呼ばれた中国地方の覇者で、尼子氏の全盛期を築いた。', zhTw: '被稱為「謀聖」的中國地方霸者，建立尼子氏的全盛期。', en: 'The "Sage of Strategy" who dominated the Chūgoku region and built the Amago clan\'s golden age.' } },
      { ja: '山中鹿介', zhTw: '山中鹿介', en: 'Yamanaka Shikanosuke', desc: { ja: '「願わくば我に七難八苦を与えたまえ」で知られる尼子再興の忠臣。', zhTw: '以「願賜我七難八苦」聞名的尼子再興忠臣。', en: 'The loyal retainer known for praying "Grant me seven trials and eight hardships" in his quest to restore the Amago.' } },
    ],
    trivia: [
      { ja: '「難攻不落」の名城として知られ、毛利元就も1年半かけてようやく落とした。', zhTw: '以「難攻不落」的名城聞名，毛利元就也花了一年半才攻陷。', en: 'Known as an "impregnable castle" — even Mōri Motonari needed a year and a half to take it.' },
      { ja: '山中鹿介の「七難八苦」の逸話は忠義の象徴として語り継がれている。', zhTw: '山中鹿介的「七難八苦」逸事作為忠義的象徵流傳至今。', en: 'Yamanaka Shikanosuke\'s "seven trials" prayer remains a symbol of unwavering loyalty.' },
    ],
    highlights: [
      { ja: '山頂本丸からの中海の眺望 — 尼子氏が見た景色を体感。', zhTw: '從山頂本丸眺望中海 — 體驗尼子氏所見的景色。', en: 'Views of Lake Nakaumi from the summit honmaru — see the same landscape the Amago clan surveyed.' },
      { ja: '山中鹿介の像 — 月に向かって祈る鹿介の銅像。', zhTw: '山中鹿介之像 — 向月祈禱的鹿介銅像。', en: 'Yamanaka Shikanosuke\'s statue — a bronze figure praying to the moon.' },
    ],
    architecture: [
      { ja: '標高190mの月山に本丸を置き、山全体に多数の曲輪を展開する巨大山城。', zhTw: '在標高190公尺的月山設本丸，整座山展開多數曲輪的巨大山城。', en: 'A massive mountain castle with the honmaru at 190m and compounds spread across the entire mountain.' },
      { ja: '菅谷口から本丸まで三段構えの防御ラインが敷かれた堅固な縄張り。', zhTw: '從菅谷口到本丸設置三段防禦線的堅固配置。', en: 'A formidable layout with three defensive tiers from the Sugaya entrance to the honmaru.' },
    ],
  },
  // ── 中国 #66-72 ──
  {
    id: 'tsuwano', number: 66, regionId: 'chugoku',
    name: { ja: '津和野城', zhTw: '津和野城', en: 'Tsuwano Castle' },
    city: { ja: '津和野町', zhTw: '津和野町', en: 'Tsuwano' },
    prefecture: { ja: '島根県', zhTw: '島根縣', en: 'Shimane' },
    type: 'yamajiro', designation: '国指定史跡',
    position: { x: 32, y: 65 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#8b8b7e', roofColor: '#3d4a3d' },
    goshuin: { bg: '#e8dfd0', ink: '#2d3d2d', seal: '#b83a3a', crest: '#7a6520' },
    history: [
      { year: 1295, event: { ja: '吉見頼行が蒙古再来襲に備え霊亀山に三本松城（津和野城）を築いた。', zhTw: '吉見賴行為防備蒙古再度來襲，在靈龜山築建三本松城（津和野城）。', en: 'Yoshimi Yoriyuki built Sanbonmatsu Castle (Tsuwano) on Mt. Reiki against a possible second Mongol invasion.' } },
      { year: 1600, event: { ja: '関ヶ原の戦い後、坂崎直盛が入城し石垣を大改修して近世城郭に改めた。', zhTw: '關原之戰後坂崎直盛入城，大規模整修石垣改為近世城郭。', en: 'After Sekigahara, Sakazaki Naomori entered the castle and rebuilt its stone walls into an early-modern fortress.' } },
      { year: 1874, event: { ja: '廃城令により建物は取り壊されたが、石垣と堀切が山上に残された。', zhTw: '依廢城令建築物被拆除，但石垣與堀切留存於山上。', en: 'Buildings were demolished under the castle abolition order, but stone walls and moats remain on the mountain.' } },
    ],
    figures: [
      { ja: '吉見頼行', zhTw: '吉見賴行', en: 'Yoshimi Yoriyuki', desc: { ja: '元寇に備えて津和野城を築いた鎌倉時代の武将。', zhTw: '為防備元寇而築建津和野城的鎌倉時代武將。', en: 'Kamakura-era warrior who built Tsuwano Castle anticipating Mongol invasions.' } },
      { ja: '亀井茲矩', zhTw: '龜井茲矩', en: 'Kamei Korenori', desc: { ja: '「琉球守」を自称し海外交易にも関心を寄せた津和野藩初代藩主。', zhTw: '自稱「琉球守」、對海外貿易也感興趣的津和野藩初代藩主。', en: 'First lord of Tsuwano domain, self-styled "Lord of Ryūkyū" with keen interest in foreign trade.' } },
    ],
    trivia: [
      { ja: '山麓の殿町通りには白壁と掘割に錦鯉が泳ぐ美しい城下町が残る。', zhTw: '山麓殿町通留存白牆與水渠中錦鯉悠游的美麗城下町。', en: 'The castle town below features white-walled streets with koi swimming in the waterway.' },
      { ja: '津和野は「山陰の小京都」と称される風情ある町並みで知られる。', zhTw: '津和野以「山陰小京都」的風情街景聞名。', en: 'Tsuwano is known as the "Little Kyoto of San\'in" for its elegant old townscape.' },
    ],
    highlights: [
      { ja: '天守台からの津和野盆地の絶景 — 赤い石州瓦の家並みが一望できる。', zhTw: '從天守台眺望津和野盆地絕景 — 可一覽紅色石州瓦屋頂的街景。', en: 'Panoramic views of the Tsuwano basin with its distinctive red Sekishū roof tiles.' },
      { ja: '殿町通りの掘割 — 色鮮やかな錦鯉が泳ぐ水路は津和野の象徴。', zhTw: '殿町通的水渠 — 色彩繽紛的錦鯉悠游於水道中，是津和野的象徵。', en: 'Tonomachi canal with colorful koi — an iconic symbol of Tsuwano.' },
    ],
    architecture: [
      { ja: '標高367mの霊亀山に築かれた連郭式山城で、三段の石垣が残る。', zhTw: '築於標高367公尺的靈龜山上的連郭式山城，留存三段石垣。', en: 'A linked-compound mountain castle at 367m with three tiers of surviving stone walls.' },
      { ja: '出丸と三十間台が尾根筋に並ぶ直線的な縄張りが特徴。', zhTw: '出丸與三十間台沿山脊排列的直線型配置為其特徵。', en: 'A linear layout with demaru and Sanjikken-dai aligned along the ridge.' },
    ],
  },
  {
    id: 'tsuyama', number: 67, regionId: 'chugoku',
    name: { ja: '津山城', zhTw: '津山城', en: 'Tsuyama Castle' },
    city: { ja: '津山市', zhTw: '津山市', en: 'Tsuyama' },
    prefecture: { ja: '岡山県', zhTw: '岡山縣', en: 'Okayama' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 43, y: 63 },
    illustration: { style: 'classic', tiers: 1, color: '#a89878', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2d2d2d', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1603, event: { ja: '森忠政が美作国に入封し、鶴山に壮大な城の築城を開始した。', zhTw: '森忠政入封美作國，在鶴山開始築建壯大的城郭。', en: 'Mori Tadamasa entered Mimasaka province and began building a grand castle on Tsuruyama hill.' } },
      { year: 1616, event: { ja: '13年の歳月をかけ完成。天守を含む77棟もの櫓を備えた巨大城郭となった。', zhTw: '歷時13年完工。擁有包含天守在內的77棟櫓的巨大城郭。', en: 'Completed after 13 years with 77 turrets including the main keep — one of Japan\'s largest castle complexes.' } },
      { year: 1874, event: { ja: '廃城令で天守や櫓は解体されたが、壮大な石垣が往時の規模を物語る。', zhTw: '因廢城令天守與櫓被拆除，但壯大的石垣訴說著昔日規模。', en: 'The keep and turrets were demolished, but the grand stone walls still testify to its former scale.' } },
    ],
    figures: [
      { ja: '森忠政', zhTw: '森忠政', en: 'Mori Tadamasa', desc: { ja: '森蘭丸の弟で津山藩初代藩主。13年かけて津山城を築いた。', zhTw: '森蘭丸之弟，津山藩初代藩主。花了13年築建津山城。', en: 'Younger brother of Mori Ranmaru and first lord of Tsuyama; spent 13 years building the castle.' } },
      { ja: '森蘭丸', zhTw: '森蘭丸', en: 'Mori Ranmaru', desc: { ja: '織田信長の小姓として本能寺の変で主君と共に散った美少年。森忠政の兄。', zhTw: '織田信長的小姓，在本能寺之變中與主君共赴死的美少年。森忠政之兄。', en: 'Oda Nobunaga\'s attendant who died with his lord at Honnō-ji; elder brother of Mori Tadamasa.' } },
    ],
    trivia: [
      { ja: '桜の名所として名高く、約千本の桜が石垣を彩る「津山さくらまつり」は圧巻。', zhTw: '以櫻花名所聞名，約千棵櫻花點綴石垣的「津山櫻花祭」堪稱壯觀。', en: 'Famous for cherry blossoms — about 1,000 trees adorn the stone walls during the Tsuyama Sakura Festival.' },
      { ja: '往時は77棟の櫓を擁し、これは広島城の76棟を上回る西日本最大級の規模だった。', zhTw: '昔日擁有77棟櫓，超過廣島城的76棟，為西日本最大規模。', en: 'Its 77 turrets once exceeded even Hiroshima Castle\'s 76, making it western Japan\'s largest.' },
    ],
    highlights: [
      { ja: '備中櫓 — 2005年に復元された御殿風の珍しい櫓建築。', zhTw: '備中櫓 — 2005年復原的御殿風格珍貴櫓建築。', en: 'Bitchū Turret — a rare palace-style turret reconstructed in 2005.' },
      { ja: '石垣の圧倒的スケール — 高さ10m超の石垣が幾重にも連なる。', zhTw: '石垣的壓倒性規模 — 高逾10公尺的石垣層層相連。', en: 'Overwhelming stone walls — multiple tiers exceeding 10m in height.' },
    ],
    architecture: [
      { ja: '鶴山の地形を活かした一二三段と呼ばれる三段構えの縄張り。', zhTw: '利用鶴山地形的「一二三段」三段構造配置。', en: 'A three-tiered layout called "Hi-Fu-Mi-Dan" exploiting Tsuruyama hill\'s terrain.' },
      { ja: '総石垣造りで、高石垣と扇の勾配が美しい近世城郭の典型。', zhTw: '全石垣構造，高石垣與扇形坡度優美的近世城郭典範。', en: 'An exemplary early-modern castle with all-stone construction and elegant fan-curved walls.' },
    ],
  },
  {
    id: 'bitchu-matsuyama', number: 68, regionId: 'chugoku',
    name: { ja: '備中松山城', zhTw: '備中松山城', en: 'Bitchū Matsuyama Castle' },
    city: { ja: '高梁市', zhTw: '高梁市', en: 'Takahashi' },
    prefecture: { ja: '岡山県', zhTw: '岡山縣', en: 'Okayama' },
    type: 'yamajiro', designation: '重要文化財',
    position: { x: 41, y: 66 },
    illustration: { style: 'yamashiro', tiers: 2, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2a2a2a', seal: '#c53d43', crest: '#6b5a14' },
    history: [
      { year: 1240, event: { ja: '秋庭重信が臥牛山に砦を築いたのが備中松山城の始まりとされる。', zhTw: '秋庭重信在臥牛山築砦，為備中松山城之始。', en: 'Akiba Shigenobu built a fort on Mt. Gagyu, marking the origin of Bitchū Matsuyama Castle.' } },
      { year: 1683, event: { ja: '水谷勝宗が天守や櫓を大改修し、現存する天守の姿となった。', zhTw: '水谷勝宗大規模整修天守及櫓，成為現存天守的樣貌。', en: 'Mizunoya Katsumune rebuilt the keep and turrets into the form that survives today.' } },
      { year: 1873, event: { ja: '廃城後、山上の天守は取り壊しを免れ、現存天守として奇跡的に残された。', zhTw: '廢城後山上天守免於拆除，奇蹟般地作為現存天守留存。', en: 'After decommissioning, the mountaintop keep miraculously escaped demolition and survives today.' } },
    ],
    figures: [
      { ja: '水谷勝宗', zhTw: '水谷勝宗', en: 'Mizunoya Katsumune', desc: { ja: '備中松山城を大改修し現在の天守を築いた備中松山藩主。', zhTw: '大規模整修備中松山城並築建現存天守的備中松山藩主。', en: 'Lord of Bitchū Matsuyama who rebuilt the castle and created the surviving keep.' } },
      { ja: '板倉勝静', zhTw: '板倉勝靜', en: 'Itakura Katsukiyo', desc: { ja: '幕末の老中首座を務め、最後まで徳川慶喜を支えた最後の城主。', zhTw: '幕末擔任老中首座，至最後仍支持德川慶喜的末代城主。', en: 'Last castle lord who served as chief senior councilor and supported Tokugawa Yoshinobu until the end.' } },
    ],
    trivia: [
      { ja: '現存12天守の中で唯一の山城で、標高430mは現存天守で最も高い。', zhTw: '現存12天守中唯一的山城，標高430公尺為現存天守中最高。', en: 'The only mountain castle among Japan\'s 12 surviving keeps, at 430m the highest of them all.' },
      { ja: '城番猫の「さんじゅーろー」が城の人気観光大使として活躍。', zhTw: '守城貓「三十郎」作為城的人氣觀光大使活躍中。', en: 'A resident cat named "Sanjūrō" serves as the castle\'s beloved tourism ambassador.' },
    ],
    highlights: [
      { ja: '雲海に浮かぶ天空の城 — 秋冬早朝に備中松山城が雲海の上に浮かぶ幻想的な風景。', zhTw: '漂浮於雲海中的天空之城 — 秋冬清晨備中松山城浮現於雲海之上的夢幻風景。', en: 'Castle in the sky — on autumn/winter mornings the castle floats above a sea of clouds.' },
      { ja: '現存天守の二層二階の小ぶりながら凛とした佇まい。', zhTw: '現存天守二層二階雖小巧卻凜然佇立的姿態。', en: 'The surviving two-story keep — compact yet dignified in its mountain setting.' },
    ],
    architecture: [
      { ja: '臥牛山の天然の岩盤上に石垣を積み、その上に天守を築いた特異な構造。', zhTw: '在臥牛山天然岩盤上堆砌石垣、其上築建天守的特殊結構。', en: 'A unique structure with stone walls built atop natural bedrock, supporting the keep above.' },
      { ja: '二層二階の現存天守は装飾を排した実戦本位の質実剛健な造り。', zhTw: '二層二階的現存天守為排除裝飾的實戰本位質樸剛健構造。', en: 'The two-story surviving keep features a spartan, battle-ready design stripped of ornamentation.' },
    ],
  },
  {
    id: 'kinojo', number: 69, regionId: 'chugoku',
    name: { ja: '鬼ノ城', zhTw: '鬼之城', en: 'Kinojō' },
    city: { ja: '総社市', zhTw: '總社市', en: 'Sōja' },
    prefecture: { ja: '岡山県', zhTw: '岡山縣', en: 'Okayama' },
    type: 'castle-ruin', designation: '国指定史跡',
    position: { x: 43, y: 67 },
    illustration: { style: 'ruins', tiers: 1, color: '#8b7e6b', roofColor: '#5c4a3d' },
    goshuin: { bg: '#e8dfd0', ink: '#3d2d2d', seal: '#b83a3a', crest: '#6b5a14' },
    history: [
      { year: 663, event: { ja: '白村江の戦いで大敗した大和朝廷が、唐・新羅の侵攻に備え古代山城を築いたとされる。', zhTw: '白村江之戰大敗的大和朝廷，為防備唐朝與新羅入侵而築建的古代山城。', en: 'Believed built by the Yamato court after defeat at Baekgang to defend against Tang and Silla invasion.' } },
      { year: 1971, event: { ja: '地元の歴史研究者により城壁遺構が再発見され、学術調査が開始された。', zhTw: '當地歷史研究者重新發現城牆遺構，學術調查開始。', en: 'Local researchers rediscovered the fortress walls, launching academic investigation.' } },
      { year: 2004, event: { ja: '復元された西門が公開され、古代山城の壮大な姿がよみがえった。', zhTw: '復原的西門對外公開，古代山城的壯大面貌重現。', en: 'The reconstructed West Gate was opened, reviving the ancient fortress\'s grand appearance.' } },
    ],
    figures: [
      { ja: '温羅（うら）', zhTw: '溫羅', en: 'Ura (the Oni)', desc: { ja: '桃太郎伝説のモデルとされる鬼ノ城に住んだ伝説の鬼。', zhTw: '被認為是桃太郎傳說原型、住在鬼之城的傳說中的鬼。', en: 'The legendary oni of Kinojō, said to be the model for the Momotarō (Peach Boy) tale.' } },
      { ja: '吉備津彦命', zhTw: '吉備津彥命', en: 'Kibitsuhiko-no-Mikoto', desc: { ja: '温羅を退治したとされる大和朝廷の将軍で桃太郎のモデル。', zhTw: '傳說討伐溫羅的大和朝廷將軍，桃太郎的原型。', en: 'Yamato court general who slew Ura — the inspiration for Momotarō (Peach Boy).' } },
    ],
    trivia: [
      { ja: '桃太郎の鬼退治伝説の舞台とされ、「鬼ノ城」の名はここに由来する。', zhTw: '被認為是桃太郎鬼退治傳說的舞台，「鬼之城」之名由此而來。', en: 'Said to be the setting of the Momotarō demon-slaying legend, giving the castle its name.' },
      { ja: '日本書紀に記録がなく「謎の古代山城」と呼ばれる。', zhTw: '在日本書紀中無記載，被稱為「謎之古代山城」。', en: 'Unmentioned in the Nihon Shoki, earning it the title "mysterious ancient mountain castle."' },
    ],
    highlights: [
      { ja: '復元西門 — 古代山城の門を忠実に復元した圧巻の建築。', zhTw: '復原西門 — 忠實復原古代山城城門的壯觀建築。', en: 'Reconstructed West Gate — a faithful recreation of the ancient fortress gate.' },
      { ja: '城壁遊歩道 — 全長約2.8kmの城壁跡を巡るハイキングコース。', zhTw: '城牆步道 — 沿約2.8公里城牆遺跡的健行路線。', en: 'Rampart trail — a 2.8km hiking course tracing the ancient fortress walls.' },
    ],
    architecture: [
      { ja: '鬼城山の山頂を取り囲む全長約2.8kmの版築土塁と列石からなる古代山城。', zhTw: '環繞鬼城山山頂、全長約2.8公里由版築土壘與列石構成的古代山城。', en: 'An ancient fortress encircling the summit with 2.8km of rammed-earth walls and stone alignments.' },
      { ja: '東西南北に4つの門と6箇所の水門を配した朝鮮式山城の構造。', zhTw: '東西南北設四座門與六處水門的朝鮮式山城結構。', en: 'Korean-style mountain fortress layout with four cardinal gates and six water gates.' },
    ],
  },
  {
    id: 'okayama', number: 70, regionId: 'chugoku',
    name: { ja: '岡山城', zhTw: '岡山城', en: 'Okayama Castle' },
    city: { ja: '岡山市', zhTw: '岡山市', en: 'Okayama' },
    prefecture: { ja: '岡山県', zhTw: '岡山縣', en: 'Okayama' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 44, y: 68 },
    illustration: { style: 'classic', tiers: 3, color: '#1a1a1a', roofColor: '#0d0d0d' },
    goshuin: { bg: '#f0e6d3', ink: '#1a1a1a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1597, event: { ja: '宇喜多秀家が8年の歳月をかけ天守を完成させ、黒い下見板張りから「烏城」と呼ばれた。', zhTw: '宇喜多秀家歷時8年完成天守，因黑色雨淋板外牆而被稱為「烏城」。', en: 'Ukita Hideie completed the keep after 8 years; its black clapboard walls earned it the name "Crow Castle."' } },
      { year: 1600, event: { ja: '関ヶ原の戦いで秀家は西軍に付き敗北。城は小早川秀秋、後に池田氏の手に渡った。', zhTw: '關原之戰中秀家投身西軍敗北。城先後落入小早川秀秋、池田氏之手。', en: 'Hideie sided with the Western army at Sekigahara and lost; the castle passed to Kobayakawa then Ikeda.' } },
      { year: 1945, event: { ja: '岡山空襲で天守が焼失。1966年に鉄筋コンクリートで外観復元された。', zhTw: '岡山空襲中天守燒毀。1966年以鋼筋混凝土外觀復原。', en: 'The keep was destroyed in the Okayama air raids; it was externally reconstructed in concrete in 1966.' } },
    ],
    figures: [
      { ja: '宇喜多秀家', zhTw: '宇喜多秀家', en: 'Ukita Hideie', desc: { ja: '豊臣五大老の一人で岡山城天守を築いた若き大名。関ヶ原後に八丈島へ流罪。', zhTw: '豐臣五大老之一，築建岡山城天守的年輕大名。關原後被流放至八丈島。', en: 'One of the Five Great Elders under Toyotomi; built the keep then was exiled to Hachijō-jima after Sekigahara.' } },
      { ja: '池田光政', zhTw: '池田光政', en: 'Ikeda Mitsumasa', desc: { ja: '岡山藩の名君として知られ、日本初の庶民学校「閑谷学校」を創設した。', zhTw: '以岡山藩名君聞名，創設日本首座庶民學校「閑谷學校」。', en: 'Renowned lord of Okayama who founded Shizutani School, Japan\'s first school for commoners.' } },
    ],
    trivia: [
      { ja: '黒い外壁から「烏城」、隣の後楽園とともに岡山を代表する景観を形成。', zhTw: '因黑色外牆得名「烏城」，與鄰近後樂園共同形成岡山代表性景觀。', en: 'Called "Crow Castle" for its black walls; together with Kōrakuen Garden it defines Okayama\'s skyline.' },
      { ja: '隣接する後楽園は日本三名園の一つで、城と庭園の調和が見事。', zhTw: '鄰接的後樂園為日本三名園之一，城與庭園的和諧令人讚嘆。', en: 'Adjacent Kōrakuen is one of Japan\'s Three Great Gardens; the castle-garden harmony is stunning.' },
    ],
    highlights: [
      { ja: '後楽園から望む天守 — 日本三名園の庭園越しに見る烏城は格別の風情。', zhTw: '從後樂園眺望天守 — 透過日本三名園的庭園望見的烏城別具風情。', en: 'The keep viewed from Kōrakuen — seeing "Crow Castle" beyond one of Japan\'s Three Great Gardens.' },
      { ja: '天守内の体験コーナー — 着付け体験や備前焼作りが楽しめる。', zhTw: '天守內的體驗區 — 可享受和服穿著體驗及備前燒製作。', en: 'Hands-on experiences inside the keep — try on armor or make Bizen pottery.' },
    ],
    architecture: [
      { ja: '不等辺五角形の天守台は全国でも珍しく、宇喜多秀家の独創的な設計。', zhTw: '不等邊五角形的天守台在全國罕見，為宇喜多秀家獨創的設計。', en: 'The irregular pentagonal keep base is rare nationwide — a creative design by Ukita Hideie.' },
      { ja: '黒漆塗りの下見板張りが特徴で、金箔瓦が往時の豪華さを伝える。', zhTw: '以黑漆雨淋板外牆為特徵，金箔瓦傳達昔日的豪華。', en: 'Distinguished by black-lacquered clapboard walls, with gold-leaf tiles evoking its former grandeur.' },
    ],
  },
  {
    id: 'fukuyama', number: 71, regionId: 'chugoku',
    name: { ja: '福山城', zhTw: '福山城', en: 'Fukuyama Castle' },
    city: { ja: '福山市', zhTw: '福山市', en: 'Fukuyama' },
    prefecture: { ja: '広島県', zhTw: '廣島縣', en: 'Hiroshima' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 43, y: 65 },
    illustration: { style: 'classic', tiers: 5, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2a2a2a', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1622, event: { ja: '徳川家康の従兄弟・水野勝成が西国鎮衛のため福山城を築城した。', zhTw: '德川家康的堂弟水野勝成為鎮衛西國而築建福山城。', en: 'Mizuno Katsunari, cousin of Tokugawa Ieyasu, built Fukuyama Castle to guard the western provinces.' } },
      { year: 1945, event: { ja: '福山空襲で天守・湯殿が焼失。伏見櫓と筋鉄御門は奇跡的に焼け残った。', zhTw: '福山空襲中天守與湯殿燒毀。伏見櫓與筋鐵御門奇蹟般倖存。', en: 'Air raids destroyed the keep; the Fushimi Turret and Sujigane Gate miraculously survived.' } },
      { year: 2022, event: { ja: '築城400年を記念し天守がリニューアルされ、北面の鉄板張りも復元された。', zhTw: '為紀念築城400年天守翻新，北面鐵板外牆也復原。', en: 'The keep was renovated for the 400th anniversary, restoring the iron-plated north face.' } },
    ],
    figures: [
      { ja: '水野勝成', zhTw: '水野勝成', en: 'Mizuno Katsunari', desc: { ja: '「鬼日向」の異名を持つ猛将で福山藩初代藩主。', zhTw: '有「鬼日向」異名的猛將，福山藩初代藩主。', en: 'The fierce warrior nicknamed "Demon of Hyūga" and first lord of Fukuyama domain.' } },
      { ja: '阿部正弘', zhTw: '阿部正弘', en: 'Abe Masahiro', desc: { ja: '幕末の老中首座として日米和親条約を締結し開国を主導した福山藩主。', zhTw: '幕末擔任老中首座締結日美和親條約、主導開國的福山藩主。', en: 'Fukuyama lord who as chief councilor signed the Treaty of Kanagawa and opened Japan to the West.' } },
    ],
    trivia: [
      { ja: '新幹線の駅から最も近い城の一つで、福山駅ホームから天守が見える。', zhTw: '距離新幹線車站最近的城之一，從福山站月台就能看到天守。', en: 'One of the closest castles to a bullet train station — the keep is visible from the Fukuyama Station platform.' },
      { ja: '北側の鉄板張りは大坂方面からの攻撃に備えた全国唯一の防御構造。', zhTw: '北側的鐵板外牆是為防備大坂方面攻擊的全國唯一防禦結構。', en: 'The iron-plated north face is a unique nationwide defense against attack from the Osaka direction.' },
    ],
    highlights: [
      { ja: '伏見櫓 — 伏見城から移築された現存する貴重な江戸初期の櫓。', zhTw: '伏見櫓 — 從伏見城移建的珍貴現存江戶初期櫓。', en: 'Fushimi Turret — a precious surviving early-Edo turret relocated from Fushimi Castle.' },
      { ja: '天守北面の鉄板張り — 2022年の復元で蘇った全国唯一の鉄壁。', zhTw: '天守北面鐵板外牆 — 2022年復原重現的全國唯一鐵壁。', en: 'Iron-plated north face — Japan\'s only iron-walled keep face, restored in 2022.' },
    ],
    architecture: [
      { ja: '五重六階の天守は伏見城の遺材を多く転用して築かれた。', zhTw: '五重六階的天守大量轉用伏見城的遺材築建。', en: 'The five-story, six-floor keep was built largely with materials salvaged from Fushimi Castle.' },
      { ja: '北面鉄板張り・南面白漆喰と面によって異なる外装が特異。', zhTw: '北面鐵板、南面白漆喰，各面不同外裝為其特異之處。', en: 'Uniquely different facades — iron plates on the north, white plaster on the south.' },
    ],
  },
  {
    id: 'yoshida-koriyama', number: 72, regionId: 'chugoku',
    name: { ja: '吉田郡山城', zhTw: '吉田郡山城', en: 'Yoshida Kōriyama Castle' },
    city: { ja: '安芸高田市', zhTw: '安藝高田市', en: 'Akitakata' },
    prefecture: { ja: '広島県', zhTw: '廣島縣', en: 'Hiroshima' },
    type: 'yamajiro', designation: '国指定史跡',
    position: { x: 37, y: 64 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#7e8b6b', roofColor: '#3d4a3d' },
    goshuin: { bg: '#e8dfd0', ink: '#2d3d2d', seal: '#b83a3a', crest: '#7a6520' },
    history: [
      { year: 1336, event: { ja: '毛利時親が安芸国吉田に入り郡山に城を築いたのが始まり。', zhTw: '毛利時親進入安藝國吉田，在郡山築城為始。', en: 'Mōri Tokichika entered Yoshida in Aki province and built a castle on Kōriyama.' } },
      { year: 1540, event: { ja: '尼子詮久の大軍3万が攻め寄せるも毛利元就が籠城戦で撃退した（吉田郡山城の戦い）。', zhTw: '尼子詮久3萬大軍來攻，但毛利元就以籠城戰擊退（吉田郡山城之戰）。', en: 'Mōri Motonari repelled Amago Akihisa\'s 30,000-strong siege in the Battle of Yoshida Kōriyama.' } },
      { year: 1591, event: { ja: '毛利輝元が広島城へ移転し、吉田郡山城は約250年の歴史に幕を閉じた。', zhTw: '毛利輝元遷至廣島城，吉田郡山城約250年的歷史落幕。', en: 'Mōri Terumoto relocated to Hiroshima Castle, ending Kōriyama\'s roughly 250-year history.' } },
    ],
    figures: [
      { ja: '毛利元就', zhTw: '毛利元就', en: 'Mōri Motonari', desc: { ja: '「三矢の訓」で知られる戦国屈指の謀将。安芸の小領主から中国地方の覇者に。', zhTw: '以「三矢之訓」聞名的戰國屈指謀將。從安藝小領主成為中國地方霸者。', en: 'The master strategist of "Three Arrows" fame who rose from minor lord to ruler of the Chūgoku region.' } },
      { ja: '毛利隆元', zhTw: '毛利隆元', en: 'Mōri Takamoto', desc: { ja: '元就の嫡男で父を支えた文武両道の武将。若くして急死した。', zhTw: '元就嫡男，文武雙全支持父親的武將。英年早逝。', en: 'Motonari\'s heir, a cultured warrior who supported his father but died young.' } },
    ],
    trivia: [
      { ja: '毛利元就の「三矢の訓」は実際には後世の創作とされるが、城下で語り継がれている。', zhTw: '毛利元就的「三矢之訓」實際上被認為是後世創作，但在城下流傳至今。', en: 'Motonari\'s "Three Arrows" lesson is likely apocryphal, yet is still told in the castle town.' },
      { ja: '山全体に約270もの曲輪があり、日本最大級の中世山城。', zhTw: '整座山有約270個曲輪，為日本最大級的中世山城。', en: 'With some 270 compounds across the mountain, it\'s one of Japan\'s largest medieval mountain castles.' },
    ],
    highlights: [
      { ja: '毛利元就墓所 — 城の麓にある元就の墓と「百万一心」の碑。', zhTw: '毛利元就墓所 — 城下的元就之墓與「百萬一心」碑。', en: 'Mōri Motonari\'s grave at the foot of the castle, with the "Hyakuman Isshin" monument.' },
      { ja: '本丸からの眺望 — 安芸高田の山々を一望する絶景。', zhTw: '從本丸眺望 — 一覽安藝高田群山的絕景。', en: 'Views from the honmaru surveying the mountains of Akitakata.' },
    ],
    architecture: [
      { ja: '郡山全域に約270の曲輪を展開する日本最大級の中世山城。', zhTw: '在郡山全域展開約270個曲輪的日本最大級中世山城。', en: 'One of Japan\'s largest medieval mountain castles with around 270 compounds across the mountain.' },
      { ja: '元就の代に山頂部の石垣化と放射状の尾根曲輪群が整備された。', zhTw: '元就時代山頂部石垣化並整備放射狀的山脊曲輪群。', en: 'Under Motonari, the summit was fortified with stone and radial ridge compounds were developed.' },
    ],
  },
  // ── 中国 #74-75 ──
  {
    id: 'iwakuni', number: 74, regionId: 'chugoku',
    name: { ja: '岩国城', zhTw: '岩國城', en: 'Iwakuni Castle' },
    city: { ja: '岩国市', zhTw: '岩國市', en: 'Iwakuni' },
    prefecture: { ja: '山口県', zhTw: '山口縣', en: 'Yamaguchi' },
    type: 'yamajiro', designation: '国指定史跡',
    position: { x: 34, y: 68 },
    illustration: { style: 'yamashiro', tiers: 3, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2a2a2a', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1608, event: { ja: '吉川広家が横山の山頂に岩国城を築城した。', zhTw: '吉川廣家在橫山山頂築建岩國城。', en: 'Kikkawa Hiroie built Iwakuni Castle atop Mt. Yokoyama.' } },
      { year: 1615, event: { ja: '一国一城令により築城からわずか7年で天守が取り壊された。', zhTw: '因一國一城令，築城僅7年天守就被拆除。', en: 'Under the one-castle-per-domain edict, the keep was demolished just 7 years after construction.' } },
      { year: 1962, event: { ja: '鉄筋コンクリートで天守が復元され、錦帯橋とともに岩国の観光名所となった。', zhTw: '以鋼筋混凝土復原天守，與錦帶橋共同成為岩國觀光名所。', en: 'The keep was reconstructed in concrete, becoming a tourist landmark alongside Kintai Bridge.' } },
    ],
    figures: [
      { ja: '吉川広家', zhTw: '吉川廣家', en: 'Kikkawa Hiroie', desc: { ja: '関ヶ原で毛利本軍の不戦を裏工作し毛利家存続を図った知将。', zhTw: '關原之戰中暗中策劃毛利本軍不參戰以保全毛利家的智將。', en: 'Strategist who secretly arranged the Mōri main army\'s non-engagement at Sekigahara to preserve the clan.' } },
      { ja: '吉川経幹', zhTw: '吉川經幹', en: 'Kikkawa Tsunemasa', desc: { ja: '幕末に藩政改革を推進し長州藩の近代化に貢献した岩国領主。', zhTw: '幕末推動藩政改革、對長州藩近代化有貢獻的岩國領主。', en: 'Late-Edo lord of Iwakuni who promoted domain reforms and contributed to Chōshū modernization.' } },
    ],
    trivia: [
      { ja: '麓の錦帯橋は日本三名橋の一つで、5連アーチの木造橋は世界的にも珍しい。', zhTw: '山麓的錦帶橋為日本三名橋之一，5連拱的木造橋在世界上也很罕見。', en: 'Kintai Bridge below is one of Japan\'s Three Great Bridges — a rare five-arch wooden structure.' },
      { ja: '復元天守は元の位置から約50m移動して建てられ、錦帯橋からよく見える。', zhTw: '復原天守從原位置移動約50公尺建造，從錦帶橋清晰可見。', en: 'The reconstructed keep was shifted ~50m from its original site for better visibility from Kintai Bridge.' },
    ],
    highlights: [
      { ja: '錦帯橋と天守の競演 — 5連アーチの名橋越しに山上の天守を仰ぐ絶景。', zhTw: '錦帶橋與天守的競演 — 透過5連拱名橋仰望山上天守的絕景。', en: 'Kintai Bridge and keep together — the mountain keep framed by the famous five-arch bridge.' },
      { ja: '天守からの錦川と城下町の眺め — 蛇行する錦川が美しい。', zhTw: '從天守眺望錦川與城下町 — 蜿蜒的錦川美不勝收。', en: 'Views of the winding Nishiki River and castle town from the keep.' },
    ],
    architecture: [
      { ja: '桃山風の南蛮造り天守は1・2階より3・4階が張り出す珍しい構造。', zhTw: '桃山風的南蠻造天守，3、4階比1、2階突出的珍貴結構。', en: 'A Momoyama-era "Nanban-style" keep with upper floors overhanging the lower — a rare design.' },
      { ja: '横山山頂の本丸と麓の居館を結ぶ山城と居館の分離型城郭。', zhTw: '連結橫山山頂本丸與山麓居館的山城與居館分離型城郭。', en: 'A split-type castle with the mountaintop keep compound separated from the residential palace below.' },
    ],
  },
  {
    id: 'hagi', number: 75, regionId: 'chugoku',
    name: { ja: '萩城', zhTw: '萩城', en: 'Hagi Castle' },
    city: { ja: '萩市', zhTw: '萩市', en: 'Hagi' },
    prefecture: { ja: '山口県', zhTw: '山口縣', en: 'Yamaguchi' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 30, y: 63 },
    illustration: { style: 'classic', tiers: 5, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2d4a3e', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1604, event: { ja: '毛利輝元が関ヶ原後の減封で萩に移り、指月山に萩城を築いた。', zhTw: '毛利輝元因關原後減封移至萩，在指月山築建萩城。', en: 'Mōri Terumoto, reduced after Sekigahara, moved to Hagi and built the castle on Mt. Shizuki.' } },
      { year: 1863, event: { ja: '幕末に藩庁が山口に移転。萩城は長州藩の政治の中心としての役割を終えた。', zhTw: '幕末藩廳遷至山口。萩城結束作為長州藩政治中心的角色。', en: 'The domain capital moved to Yamaguchi in the Bakumatsu, ending Hagi Castle\'s role as political center.' } },
      { year: 1874, event: { ja: '廃城令で天守を含むすべての建物が取り壊され、石垣と堀のみが残された。', zhTw: '因廢城令包含天守在內的所有建築被拆除，僅留石垣與護城河。', en: 'All buildings including the keep were demolished; only stone walls and moats remain.' } },
    ],
    figures: [
      { ja: '毛利輝元', zhTw: '毛利輝元', en: 'Mōri Terumoto', desc: { ja: '豊臣五大老の一人で萩城を築いた毛利家当主。関ヶ原西軍の総大将。', zhTw: '豐臣五大老之一、築建萩城的毛利家當主。關原西軍總大將。', en: 'Head of the Mōri and a Five Great Elder; nominal general of the Western army at Sekigahara.' } },
      { ja: '吉田松陰', zhTw: '吉田松陰', en: 'Yoshida Shōin', desc: { ja: '萩城下で松下村塾を開き、維新の志士たちを育てた思想家・教育者。', zhTw: '在萩城下開設松下村塾、培育維新志士的思想家及教育家。', en: 'Thinker and educator who ran the Shōka Sonjuku academy in Hagi, mentoring Meiji Restoration leaders.' } },
    ],
    trivia: [
      { ja: '萩城下町は「明治維新胎動の地」として世界遺産に登録されている。', zhTw: '萩城下町以「明治維新胎動之地」登錄為世界遺產。', en: 'Hagi castle town is a UNESCO World Heritage Site as the "Birthplace of the Meiji Restoration."' },
      { ja: '城跡は桜の名所で、指月公園には約600本のソメイヨシノが咲く。', zhTw: '城跡為櫻花名所，指月公園約有600棵染井吉野櫻。', en: 'The ruins are a cherry blossom hotspot with around 600 Somei Yoshino trees in Shizuki Park.' },
    ],
    highlights: [
      { ja: '指月山の石垣と堀 — 日本海に面した美しい海城の遺構。', zhTw: '指月山的石垣與護城河 — 面向日本海的美麗海城遺構。', en: 'Shizuki stone walls and moats — beautiful remains of a castle facing the Sea of Japan.' },
      { ja: '萩城下町の武家屋敷群 — 幕末の志士たちが歩いた町並みがそのまま残る。', zhTw: '萩城下町的武家屋敷群 — 幕末志士們走過的街道完好保存。', en: 'Samurai district — the streets walked by Bakumatsu revolutionaries survive intact.' },
    ],
    architecture: [
      { ja: '指月山の山頂に詰丸、麓に本丸を置く山城と平城の複合型城郭。', zhTw: '指月山山頂設詰丸、山麓設本丸的山城與平城複合型城郭。', en: 'A composite castle with a mountain-top retreat and flatland honmaru at the foot of Mt. Shizuki.' },
      { ja: '五重五階の天守は毛利氏の威厳を示す壮大な規模だった。', zhTw: '五重五階的天守彰顯毛利氏威嚴的壯大規模。', en: 'The five-story keep demonstrated the Mōri clan\'s dignity with its grand scale.' },
    ],
  },
  // ── 四国 #76-80 ──
  {
    id: 'tokushima', number: 76, regionId: 'shikoku',
    name: { ja: '徳島城', zhTw: '德島城', en: 'Tokushima Castle' },
    city: { ja: '徳島市', zhTw: '德島市', en: 'Tokushima' },
    prefecture: { ja: '徳島県', zhTw: '德島縣', en: 'Tokushima' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 51, y: 74 },
    illustration: { style: 'classic', tiers: 1, color: '#6b8b7e', roofColor: '#3d5c4a' },
    goshuin: { bg: '#e8dfd0', ink: '#2d4a3e', seal: '#b83a3a', crest: '#7a6520' },
    history: [
      { year: 1585, event: { ja: '蜂須賀家政が阿波に入国し、渭山に徳島城を築いた。', zhTw: '蜂須賀家政進入阿波，在渭山築建德島城。', en: 'Hachisuka Iemasa entered Awa province and built Tokushima Castle on Mt. Inoyama.' } },
      { year: 1869, event: { ja: '版籍奉還により徳島藩が廃止され、城は明治政府に接収された。', zhTw: '因版籍奉還德島藩被廢止，城被明治政府接收。', en: 'Tokushima domain was abolished through hanseki hōkan and the castle seized by the Meiji government.' } },
      { year: 1905, event: { ja: '城跡が徳島中央公園として整備され市民に開放された。', zhTw: '城跡整備為德島中央公園對市民開放。', en: 'The castle ruins were developed into Tokushima Central Park and opened to the public.' } },
    ],
    figures: [
      { ja: '蜂須賀家政', zhTw: '蜂須賀家政', en: 'Hachisuka Iemasa', desc: { ja: '豊臣秀吉の重臣・蜂須賀正勝の子で徳島藩初代藩主。', zhTw: '豐臣秀吉重臣蜂須賀正勝之子，德島藩初代藩主。', en: 'Son of Toyotomi retainer Hachisuka Masakatsu; first lord of Tokushima domain.' } },
      { ja: '蜂須賀重喜', zhTw: '蜂須賀重喜', en: 'Hachisuka Shigeyoshi', desc: { ja: '藍染め産業を奨励し「阿波藍」のブランドを確立した名君。', zhTw: '獎勵藍染產業、確立「阿波藍」品牌的名君。', en: 'Enlightened lord who promoted indigo dyeing and established the "Awa Ai" brand.' } },
    ],
    trivia: [
      { ja: '城の石垣には「緑色片岩」と呼ばれる青緑色の珍しい石材が使われている。', zhTw: '城的石垣使用被稱為「綠色片岩」的青綠色珍貴石材。', en: 'The walls feature rare blue-green "greenstone schist" unique to this region.' },
      { ja: '阿波踊りの本場で、毎年8月に城下町が踊り一色に染まる。', zhTw: '阿波舞的發源地，每年8月城下町被舞蹈氛圍所染。', en: 'Home of the Awa Odori dance festival — every August the castle town pulses with dance.' },
    ],
    highlights: [
      { ja: '表御殿庭園 — 大名庭園として国の名勝に指定された枯山水庭園。', zhTw: '表御殿庭園 — 作為大名庭園被指定為國家名勝的枯山水庭園。', en: 'Omote Goten Garden — a dry landscape garden designated a National Place of Scenic Beauty.' },
      { ja: '緑色片岩の石垣 — 阿波特産の青石が積まれた独特の美しい石垣。', zhTw: '綠色片岩石垣 — 以阿波特產的青石堆砌的獨特美麗石垣。', en: 'Greenstone schist walls — uniquely beautiful walls of locally quarried blue-green stone.' },
    ],
    architecture: [
      { ja: '渭山山頂に本丸、東二の丸、西二の丸を配した連郭式の縄張り。', zhTw: '在渭山山頂配置本丸、東二之丸、西二之丸的連郭式配置。', en: 'A linked-compound layout with honmaru, east and west ni-no-maru atop Mt. Inoyama.' },
      { ja: '阿波の「青石」を用いた石垣は他に類を見ない独自の景観を形成。', zhTw: '使用阿波「青石」的石垣形成獨一無二的景觀。', en: 'Walls of Awa "blue stone" create a landscape found nowhere else in Japan.' },
    ],
  },
  {
    id: 'takamatsu', number: 77, regionId: 'shikoku',
    name: { ja: '高松城', zhTw: '高松城', en: 'Takamatsu Castle' },
    city: { ja: '高松市', zhTw: '高松市', en: 'Takamatsu' },
    prefecture: { ja: '香川県', zhTw: '香川縣', en: 'Kagawa' },
    type: 'hirajiro', designation: '国指定史跡',
    position: { x: 48, y: 74 },
    illustration: { style: 'classic', tiers: 3, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2a2a2a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1590, event: { ja: '生駒親正が讃岐に入封し瀬戸内海に面した水城・高松城を築いた。', zhTw: '生駒親正入封讚岐，在瀨戶內海沿岸築建水城高松城。', en: 'Ikoma Chikamasa entered Sanuki and built the seaside water castle of Takamatsu on the Seto Inland Sea.' } },
      { year: 1642, event: { ja: '松平頼重（水戸黄門の兄）が入封し、城を大規模に改修拡張した。', zhTw: '松平賴重（水戶黃門之兄）入封，大規模改修擴建城郭。', en: 'Matsudaira Yorishige (Mito Kōmon\'s elder brother) entered and greatly expanded the castle.' } },
      { year: 1884, event: { ja: '天守が老朽化のため取り壊されたが、現在天守復元計画が進行中。', zhTw: '天守因老朽化被拆除，現在天守復原計畫進行中。', en: 'The keep was demolished due to deterioration; a reconstruction project is currently underway.' } },
    ],
    figures: [
      { ja: '生駒親正', zhTw: '生駒親正', en: 'Ikoma Chikamasa', desc: { ja: '豊臣秀吉に仕え讃岐一国を賜った高松城の築城者。', zhTw: '侍奉豐臣秀吉、受賜讚岐一國的高松城築城者。', en: 'Retainer of Toyotomi Hideyoshi who received all of Sanuki and built Takamatsu Castle.' } },
      { ja: '松平頼重', zhTw: '松平賴重', en: 'Matsudaira Yorishige', desc: { ja: '水戸光圀の実兄で高松藩初代松平家藩主。文化を奨励し栗林公園の基礎を造った。', zhTw: '水戶光圀的親兄，高松藩初代松平家藩主。獎勵文化並奠定栗林公園基礎。', en: 'Elder brother of Mito Kōmon and first Matsudaira lord of Takamatsu; patron of culture who laid the foundations for Ritsurin Garden.' } },
    ],
    trivia: [
      { ja: '日本三大水城の一つで、堀には海水が引き込まれ鯛が泳いでいる。', zhTw: '日本三大水城之一，護城河引入海水，鯛魚悠游其中。', en: 'One of Japan\'s Three Great Water Castles — seawater fills the moats where sea bream swim.' },
      { ja: '堀で「鯛願成就」の鯛のエサやり体験ができるユニークな城。', zhTw: '可在護城河體驗「鯛願成就」餵鯛魚的獨特城郭。', en: 'Visitors can feed sea bream in the moat for a "Tai-gan Jōju" (wish-granting) experience.' },
    ],
    highlights: [
      { ja: '月見櫓 — 瀬戸内海を望む現存する美しい三重櫓（重要文化財）。', zhTw: '月見櫓 — 可望瀨戶內海的美麗現存三重櫓（重要文化財）。', en: 'Moon-viewing Turret — a beautiful surviving three-story turret (Important Cultural Property) overlooking the Inland Sea.' },
      { ja: '海水の堀 — 瀬戸内海の海水が満ちる全国屈指の水城遺構。', zhTw: '海水護城河 — 充滿瀨戶內海海水的全國屈指水城遺構。', en: 'Seawater moats — outstanding water castle remains fed directly by the Seto Inland Sea.' },
    ],
    architecture: [
      { ja: '瀬戸内海の海水を堀に引き込んだ日本最大級の海城。', zhTw: '將瀨戶內海海水引入護城河的日本最大級海城。', en: 'One of Japan\'s largest sea castles with moats drawing water directly from the Seto Inland Sea.' },
      { ja: '三重の堀と三層の天守を備えた輪郭式の壮大な縄張り。', zhTw: '具備三重護城河與三層天守的輪郭式壯大配置。', en: 'A grand concentric layout with triple moats and a three-story keep.' },
    ],
  },
  {
    id: 'marugame', number: 78, regionId: 'shikoku',
    name: { ja: '丸亀城', zhTw: '丸龜城', en: 'Marugame Castle' },
    city: { ja: '丸亀市', zhTw: '丸龜市', en: 'Marugame' },
    prefecture: { ja: '香川県', zhTw: '香川縣', en: 'Kagawa' },
    type: 'hirayama', designation: '重要文化財',
    position: { x: 46, y: 75 },
    illustration: { style: 'classic', tiers: 3, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2a2a2a', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1597, event: { ja: '生駒親正が亀山に丸亀城の築城を開始した。', zhTw: '生駒親正在龜山開始築建丸龜城。', en: 'Ikoma Chikamasa began constructing Marugame Castle on Kameyama hill.' } },
      { year: 1660, event: { ja: '京極高和が城を大改修し、現存する三重天守と壮大な石垣を完成させた。', zhTw: '京極高和大規模改修城郭，完成現存的三重天守與壯大石垣。', en: 'Kyōgoku Takakazu rebuilt the castle, completing the surviving three-story keep and grand stone walls.' } },
      { year: 2018, event: { ja: '西日本豪雨で石垣の一部が崩落。現在も復旧工事が続いている。', zhTw: '西日本豪雨導致石垣部分崩塌。目前仍在進行修復工程。', en: 'Heavy rains caused partial collapse of the stone walls; restoration work continues.' } },
    ],
    figures: [
      { ja: '京極高和', zhTw: '京極高和', en: 'Kyōgoku Takakazu', desc: { ja: '丸亀城を現在の姿に改修した丸亀藩京極家初代藩主。', zhTw: '將丸龜城改修為現今樣貌的丸龜藩京極家初代藩主。', en: 'First Kyōgoku lord of Marugame who rebuilt the castle into its present form.' } },
      { ja: '山崎家治', zhTw: '山崎家治', en: 'Yamazaki Ieharu', desc: { ja: '生駒氏の後を受け丸亀藩主となり石垣の整備を進めた。', zhTw: '接替生駒氏成為丸龜藩主並推進石垣整備。', en: 'Succeeded the Ikoma and advanced the stone wall construction as lord of Marugame.' } },
    ],
    trivia: [
      { ja: '石垣の高さは日本一で、四段の石垣を合わせると約60mの高さになる。', zhTw: '石垣高度為日本第一，四段石垣合計約60公尺高。', en: 'The combined height of its four-tier stone walls reaches about 60m — the tallest in Japan.' },
      { ja: '現存天守は日本一小さく、三重三階でわずか約15mの高さ。', zhTw: '現存天守為日本最小，三重三階僅約15公尺高。', en: 'The surviving keep is Japan\'s smallest — just about 15m tall across three stories.' },
    ],
    highlights: [
      { ja: '日本一の石垣 — 「石の城」と称される壮大な四段の高石垣。', zhTw: '日本第一石垣 — 被稱為「石之城」的壯大四段高石垣。', en: 'Japan\'s tallest walls — the grand four-tier stone walls earning the nickname "Stone Castle."' },
      { ja: '現存天守からの讃岐平野と瀬戸内海の眺望。', zhTw: '從現存天守眺望讚岐平原與瀨戶內海。', en: 'Views of the Sanuki Plain and Seto Inland Sea from the surviving keep.' },
    ],
    architecture: [
      { ja: '四段に積み上げられた石垣は「扇の勾配」と呼ばれる美しい曲線を描く。', zhTw: '四段堆砌的石垣描繪出被稱為「扇之坡度」的美麗曲線。', en: 'The four tiers of stone walls trace elegant curves called "fan slope" (ōgi no kobai).' },
      { ja: '三重三階の現存天守は小ぶりながら唐破風を備えた優美な姿。', zhTw: '三重三階的現存天守雖小巧卻配有唐破風的優美姿態。', en: 'The compact three-story surviving keep features an elegant karahafu gable.' },
    ],
  },
  {
    id: 'imabari', number: 79, regionId: 'shikoku',
    name: { ja: '今治城', zhTw: '今治城', en: 'Imabari Castle' },
    city: { ja: '今治市', zhTw: '今治市', en: 'Imabari' },
    prefecture: { ja: '愛媛県', zhTw: '愛媛縣', en: 'Ehime' },
    type: 'hirajiro', designation: '県指定史跡',
    position: { x: 44, y: 76 },
    illustration: { style: 'classic', tiers: 5, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2a2a2a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1602, event: { ja: '築城の名手・藤堂高虎が瀬戸内海に面した海城として今治城を築いた。', zhTw: '築城名手藤堂高虎在瀨戶內海沿岸築建今治城為海城。', en: 'Master castle builder Tōdō Takatora built Imabari as a sea castle facing the Seto Inland Sea.' } },
      { year: 1609, event: { ja: '藤堂高虎が伊勢に転封となり、城は松平家に引き継がれた。', zhTw: '藤堂高虎轉封至伊勢，城由松平家繼承。', en: 'Tōdō Takatora was transferred to Ise; the castle passed to the Matsudaira clan.' } },
      { year: 1980, event: { ja: '五重天守が鉄筋コンクリートで復元され、今治のランドマークとなった。', zhTw: '五重天守以鋼筋混凝土復原，成為今治的地標。', en: 'A five-story keep was reconstructed in concrete, becoming Imabari\'s landmark.' } },
    ],
    figures: [
      { ja: '藤堂高虎', zhTw: '藤堂高虎', en: 'Tōdō Takatora', desc: { ja: '築城術の天才と称される武将。今治城・伊賀上野城・津城など数多くの名城を築いた。', zhTw: '被稱為築城術天才的武將。築建今治城、伊賀上野城、津城等眾多名城。', en: 'A genius of castle design who built numerous famous castles including Imabari, Iga Ueno, and Tsu.' } },
      { ja: '松平定房', zhTw: '松平定房', en: 'Matsudaira Sadafusa', desc: { ja: '久松松平家の今治藩初代藩主で城の維持と藩政に尽力した。', zhTw: '久松松平家的今治藩初代藩主，致力於城的維護與藩政。', en: 'First Matsudaira lord of Imabari who maintained the castle and governed the domain.' } },
    ],
    trivia: [
      { ja: '日本三大水城の一つで、堀には海水が流入しサメやエイが泳ぐことも。', zhTw: '日本三大水城之一，護城河流入海水，有時可見鯊魚和魟魚游泳。', en: 'One of Japan\'s Three Great Water Castles — sharks and rays sometimes swim in the seawater moats.' },
      { ja: '藤堂高虎の築城技術の粋を集めた城で、後の城郭建築に大きな影響を与えた。', zhTw: '集藤堂高虎築城技術之大成的城，對後世城郭建築影響深遠。', en: 'A showcase of Tōdō Takatora\'s engineering genius that influenced later castle architecture.' },
    ],
    highlights: [
      { ja: '海水堀とライトアップ — 夜間照明に照らされた天守が堀の水面に映る幻想的な光景。', zhTw: '海水護城河與夜間點燈 — 夜間照明下天守倒映在護城河水面的夢幻景象。', en: 'The illuminated keep reflected in the seawater moat creates a magical nighttime scene.' },
      { ja: '天守からの来島海峡大橋の眺望 — しまなみ海道の絶景。', zhTw: '從天守眺望來島海峽大橋 — 島波海道的絕景。', en: 'Views of the Kurushima-Kaikyō Bridge and Shimanami Kaido from the keep.' },
    ],
    architecture: [
      { ja: '瀬戸内海の海水を直接堀に引き込んだ日本屈指の海城。', zhTw: '將瀨戶內海海水直接引入護城河的日本屈指海城。', en: 'A premier sea castle drawing water directly from the Seto Inland Sea into its moats.' },
      { ja: '藤堂高虎が考案した層塔型天守の原型とされる画期的な設計。', zhTw: '被認為是藤堂高虎開創的層塔型天守原型的劃時代設計。', en: 'A groundbreaking design considered the prototype of the layered-tower keep style Takatora pioneered.' },
    ],
  },
  {
    id: 'yuzuki', number: 80, regionId: 'shikoku',
    name: { ja: '湯築城', zhTw: '湯築城', en: 'Yuzuki Castle' },
    city: { ja: '松山市', zhTw: '松山市', en: 'Matsuyama' },
    prefecture: { ja: '愛媛県', zhTw: '愛媛縣', en: 'Ehime' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 41, y: 78 },
    illustration: { style: 'classic', tiers: 1, color: '#7e8b6b', roofColor: '#3d4a3d' },
    goshuin: { bg: '#e8dfd0', ink: '#2d3d2d', seal: '#b83a3a', crest: '#6b5a14' },
    history: [
      { year: 1335, event: { ja: '河野通盛が道後平野を見下ろす丘陵に湯築城を築いた。', zhTw: '河野通盛在俯瞰道後平野的丘陵上築建湯築城。', en: 'Kōno Michinori built Yuzuki Castle on a hill overlooking the Dōgo plain.' } },
      { year: 1585, event: { ja: '小早川隆景の四国征伐により河野氏は降伏し、250年に及ぶ河野氏の居城の歴史を閉じた。', zhTw: '因小早川隆景的四國征伐，河野氏投降，250年河野氏居城歷史落幕。', en: 'The Kōno surrendered to Kobayakawa Takakage\'s Shikoku campaign, ending 250 years as their seat.' } },
      { year: 2002, event: { ja: '発掘調査に基づき武家屋敷や土塁が復元整備され、歴史公園として公開。', zhTw: '依據考古調查復原整備武家屋敷與土壘，作為歷史公園公開。', en: 'Samurai residences and earthworks were restored based on excavations and opened as a history park.' } },
    ],
    figures: [
      { ja: '河野通盛', zhTw: '河野通盛', en: 'Kōno Michinori', desc: { ja: '湯築城を築き伊予国の支配拠点とした河野氏の当主。', zhTw: '築建湯築城作為伊予國支配據點的河野氏當主。', en: 'Head of the Kōno who built Yuzuki Castle as the ruling seat of Iyo province.' } },
      { ja: '河野通直', zhTw: '河野通直', en: 'Kōno Michinao', desc: { ja: '湯築城最後の城主で、豊臣秀吉の四国征伐に降伏した。', zhTw: '湯築城末代城主，向豐臣秀吉的四國征伐投降。', en: 'Last lord of Yuzuki who surrendered to Toyotomi Hideyoshi\'s Shikoku campaign.' } },
    ],
    trivia: [
      { ja: '道後温泉のすぐ隣に位置し、城主も温泉を楽しんだとされる。', zhTw: '位於道後溫泉旁，城主也曾享受溫泉。', en: 'Located right next to Dōgo Onsen — castle lords are said to have enjoyed the hot springs.' },
      { ja: '発掘調査で出土した遺物は中世武士の暮らしを生き生きと伝える。', zhTw: '考古調查出土的文物生動傳達中世武士的生活。', en: 'Excavated artifacts vividly illustrate the daily life of medieval warriors.' },
    ],
    highlights: [
      { ja: '復元武家屋敷 — 発掘成果に基づき忠実に再現された中世の武家屋敷群。', zhTw: '復原武家屋敷 — 基於考古成果忠實再現的中世武家屋敷群。', en: 'Restored samurai residences faithfully recreated from archaeological findings.' },
      { ja: '道後温泉との散策 — 城跡から徒歩圏内の日本最古の温泉を合わせて楽しめる。', zhTw: '道後溫泉散步 — 從城跡步行即可到達日本最古老的溫泉。', en: 'Walk to Dōgo Onsen — Japan\'s oldest hot spring is just steps from the castle ruins.' },
    ],
    architecture: [
      { ja: '二重の堀と土塁で囲まれた中世平山城の典型的な構造。', zhTw: '以雙重護城河與土壘環繞的中世平山城典型結構。', en: 'A classic medieval hilltop castle with double moats and earthen ramparts.' },
      { ja: '内堀と外堀の間に武家屋敷群を配した計画的な防御配置。', zhTw: '在內壕與外壕之間配置武家屋敷群的有計畫防禦佈局。', en: 'A planned defensive layout with samurai residences between the inner and outer moats.' },
    ],
  },
  // ── 四国 #82-84 ──
  {
    id: 'ozu', number: 82, regionId: 'shikoku',
    name: { ja: '大洲城', zhTw: '大洲城', en: 'Ōzu Castle' },
    city: { ja: '大洲市', zhTw: '大洲市', en: 'Ōzu' },
    prefecture: { ja: '愛媛県', zhTw: '愛媛縣', en: 'Ehime' },
    type: 'hirayama', designation: '県指定史跡',
    position: { x: 39, y: 79 },
    illustration: { style: 'classic', tiers: 4, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2a2a2a', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1331, event: { ja: '宇都宮豊房が伊予国に地蔵ヶ嶽城（大洲城の前身）を築いた。', zhTw: '宇都宮豐房在伊予國築建地藏嶽城（大洲城前身）。', en: 'Utsunomiya Toyofusa built Jizōgatake Castle (predecessor of Ōzu) in Iyo province.' } },
      { year: 1617, event: { ja: '加藤貞泰が入封し、肱川沿いに城を大改修して四重天守を築いた。', zhTw: '加藤貞泰入封，沿肱川大規模改修城郭並築建四重天守。', en: 'Katō Sadayasu entered and rebuilt the castle along the Hiji River with a four-story keep.' } },
      { year: 1888, event: { ja: '老朽化した天守が取り壊された。しかし台所櫓など4棟の櫓が現存。', zhTw: '老朽化的天守被拆除。但廚房櫓等4棟櫓現存。', en: 'The deteriorated keep was demolished, but four turrets including the Kitchen Turret survive.' } },
      { year: 2004, event: { ja: '明治期の古写真と木組み模型を基に、日本初の木造復元天守として四重天守が再建された。', zhTw: '以明治時期古照片與木組模型為基礎，作為日本首座木造復原天守重建四重天守。', en: 'Japan\'s first fully wooden reconstructed keep was rebuilt using Meiji-era photographs and a wooden scale model.' } },
    ],
    figures: [
      { ja: '藤堂高虎', zhTw: '藤堂高虎', en: 'Tōdō Takatora', desc: { ja: '大洲城の近世城郭としての基礎を築いた築城の名手。後に今治・津などの名城を手がけた。', zhTw: '奠定大洲城近世城郭基礎的築城名手。後來負責今治、津等名城。', en: 'Master castle builder who laid the early-modern foundations of Ōzu before going on to build Imabari and Tsu.' } },
      { ja: '加藤貞泰', zhTw: '加藤貞泰', en: 'Katō Sadayasu', desc: { ja: '大洲藩初代藩主で現在の城の姿を形作った。加藤家は明治まで13代続いた。', zhTw: '大洲藩初代藩主，塑造現今城的樣貌。加藤家延續13代至明治。', en: 'First lord of Ōzu domain who shaped the castle\'s current form; the Katō ruled for 13 generations.' } },
      { ja: '中江藤樹', zhTw: '中江藤樹', en: 'Nakae Tōju', desc: { ja: '大洲藩出身の儒学者で「近江聖人」と称された日本陽明学の祖。', zhTw: '出身大洲藩的儒學者，被稱為「近江聖人」的日本陽明學之祖。', en: 'Confucian scholar from Ōzu known as the "Sage of Ōmi" and founder of Japanese Yōmei studies.' } },
    ],
    trivia: [
      { ja: '復元天守は地元住民の寄付と匠の技で実現した「市民の城」。', zhTw: '復原天守是透過當地居民捐款與匠人技藝實現的「市民之城」。', en: 'The restored keep was funded by local donations and built with traditional craftsmanship — a "citizens\' castle."' },
      { ja: '肱川の「鵜飼い」は日本三大鵜飼いの一つで、城を背景に行われる。', zhTw: '肱川的「鵜飼」為日本三大鵜飼之一，以城為背景舉行。', en: 'Cormorant fishing on the Hiji River — one of Japan\'s three great ukai — takes place with the castle as backdrop.' },
      { ja: '大洲は「伊予の小京都」と呼ばれ、城下町の古い町並みが良く残る。', zhTw: '大洲被稱為「伊予的小京都」，城下町的古老街道保存良好。', en: 'Ōzu is called the "Little Kyoto of Iyo" for its well-preserved castle town streets.' },
    ],
    highlights: [
      { ja: '木造復元天守 — 伝統工法で再建された日本初の本格的な木造復元天守。', zhTw: '木造復原天守 — 以傳統工法重建的日本首座正式木造復原天守。', en: 'Japan\'s first authentically rebuilt wooden keep using traditional construction methods.' },
      { ja: '肱川と天守の風景 — 川面に映る天守は大洲を代表する絶景。', zhTw: '肱川與天守的風景 — 倒映在河面的天守是大洲代表性絕景。', en: 'The keep reflected in the Hiji River — Ōzu\'s signature scenic view.' },
      { ja: '大洲城キャッスルステイ — 天守に宿泊できる日本唯一の城泊体験。', zhTw: '大洲城住城體驗 — 可住宿在天守內的日本唯一城堡住宿體驗。', en: 'Castle Stay — the only place in Japan where you can sleep inside a castle keep.' },
    ],
    architecture: [
      { ja: '四重四階の木造復元天守は、明治期の古写真と江戸期の木組み模型を基に忠実に再現。', zhTw: '四重四階的木造復原天守，依據明治古照片與江戶時期木組模型忠實再現。', en: 'The four-story wooden keep was faithfully recreated from Meiji photographs and an Edo-era wooden model.' },
      { ja: '台所櫓・高欄櫓など4棟の現存櫓が天守と連結する複合型天守群。', zhTw: '廚房櫓、高欄櫓等4棟現存櫓與天守相連的複合型天守群。', en: 'Four surviving turrets including the Kitchen and Balustrade turrets connect to form a compound keep.' },
      { ja: '肱川を天然の外堀として利用した効率的な防御設計。', zhTw: '將肱川作為天然外壕利用的高效防禦設計。', en: 'An efficient defense design using the Hiji River as a natural outer moat.' },
    ],
  },
  {
    id: 'uwajima', number: 83, regionId: 'shikoku',
    name: { ja: '宇和島城', zhTw: '宇和島城', en: 'Uwajima Castle' },
    city: { ja: '宇和島市', zhTw: '宇和島市', en: 'Uwajima' },
    prefecture: { ja: '愛媛県', zhTw: '愛媛縣', en: 'Ehime' },
    type: 'hirayama', designation: '重要文化財',
    position: { x: 38, y: 81 },
    illustration: { style: 'classic', tiers: 3, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2a2a2a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1601, event: { ja: '藤堂高虎が中世の板島丸串城を近世城郭として大改修し、不等辺五角形の縄張りを設計した。', zhTw: '藤堂高虎將中世的板島丸串城大幅改修為近世城郭，設計不等邊五角形配置。', en: 'Tōdō Takatora rebuilt the medieval castle into an early-modern fortress with a unique irregular pentagonal layout.' } },
      { year: 1615, event: { ja: '伊達秀宗（伊達政宗の長男）が入封し、宇和島伊達家の居城となった。', zhTw: '伊達秀宗（伊達政宗長子）入封，成為宇和島伊達家的居城。', en: 'Date Hidemune (Date Masamune\'s eldest son) entered, making it the seat of the Uwajima Date clan.' } },
      { year: 1671, event: { ja: '二代藩主・伊達宗利が天守を建て替え、現存する三重天守が完成した。', zhTw: '第二代藩主伊達宗利重建天守，現存的三重天守完工。', en: 'Second lord Date Munetoshi rebuilt the keep — the surviving three-story tower was completed.' } },
      { year: 1860, event: { ja: '八代藩主・伊達宗城は「幕末の四賢侯」に数えられ、殖産興業に尽力した。', zhTw: '第八代藩主伊達宗城被列為「幕末四賢侯」，致力於殖產興業。', en: 'Eighth lord Date Munenari, counted among the "Four Wise Lords of Bakumatsu," promoted industry.' } },
    ],
    figures: [
      { ja: '藤堂高虎', zhTw: '藤堂高虎', en: 'Tōdō Takatora', desc: { ja: '宇和島城の近世城郭としての基本設計を行った築城の天才。', zhTw: '進行宇和島城近世城郭基本設計的築城天才。', en: 'Genius castle architect who designed the fundamental early-modern layout of Uwajima.' } },
      { ja: '伊達秀宗', zhTw: '伊達秀宗', en: 'Date Hidemune', desc: { ja: '独眼竜・伊達政宗の長男で宇和島伊達家の祖。庶子のため仙台を継げなかった。', zhTw: '獨眼龍伊達政宗的長子，宇和島伊達家之祖。因庶出未能繼承仙台。', en: 'Eldest son of the "One-Eyed Dragon" Date Masamune; founded the Uwajima Date line as he could not inherit Sendai.' } },
      { ja: '伊達宗城', zhTw: '伊達宗城', en: 'Date Munenari', desc: { ja: '幕末四賢侯の一人で開国派。明治維新後は新政府でも活躍した。', zhTw: '幕末四賢侯之一的開國派。明治維新後在新政府也很活躍。', en: 'One of the "Four Wise Lords" who favored opening Japan; active in the Meiji government after the Restoration.' } },
    ],
    trivia: [
      { ja: '現存12天守の一つで、装飾性に富んだ優美な外観は「伊達の城」の風格。', zhTw: '現存12天守之一，裝飾性豐富的優美外觀展現「伊達之城」的風範。', en: 'One of 12 surviving keeps; its ornate, elegant appearance befits a castle of the Date clan.' },
      { ja: '藤堂高虎が設計した不等辺五角形の縄張りは敵を欺く工夫とされる。', zhTw: '藤堂高虎設計的不等邊五角形配置被認為是欺敵的巧思。', en: 'Takatora\'s irregular pentagonal layout was designed to confuse attackers about the castle\'s true size.' },
      { ja: '城山の登り道には石段が続き、野生の猿に出会えることもある。', zhTw: '城山的登山路石階連綿，有時還能遇到野生猴子。', en: 'Stone steps lead up the castle hill where wild monkeys are sometimes spotted.' },
    ],
    highlights: [
      { ja: '現存天守 — 千鳥破風と唐破風を巧みに配した優美な三重天守。', zhTw: '現存天守 — 巧妙配置千鳥破風與唐破風的優美三重天守。', en: 'The surviving keep — an elegant three-story tower with artfully placed chidori and kara gables.' },
      { ja: '天守からの宇和海の眺望 — リアス式海岸の宇和海を一望。', zhTw: '從天守眺望宇和海 — 一覽谷灣式海岸的宇和海。', en: 'Views of the Uwa Sea\'s ria coastline from the keep.' },
      { ja: '天赦園 — 七代藩主が造営した池泉回遊式の大名庭園（国の名勝）。', zhTw: '天赦園 — 第七代藩主營造的池泉回遊式大名庭園（國家名勝）。', en: 'Tenshaen — a strolling garden built by the 7th lord, designated a National Place of Scenic Beauty.' },
    ],
    architecture: [
      { ja: '藤堂高虎が設計した不等辺五角形の独特な縄張りは全国的にも珍しい。', zhTw: '藤堂高虎設計的不等邊五角形獨特配置在全國也很罕見。', en: 'Takatora\'s unique irregular pentagonal layout is rare among Japanese castles.' },
      { ja: '三重三階の現存天守は白漆喰総塗籠の外壁に千鳥破風・唐破風を備える。', zhTw: '三重三階的現存天守為白漆喰外牆配有千鳥破風和唐破風。', en: 'The three-story surviving keep features white plaster walls with chidorihafu and karahafu gables.' },
      { ja: 'かつては海に面した三方を海水堀が囲む海城だったが、現在は埋め立てられている。', zhTw: '昔日三面臨海有海水護城河環繞的海城，現已填海。', en: 'Originally a sea castle with seawater moats on three sides, now reclaimed land.' },
    ],
  },
  {
    id: 'kochi', number: 84, regionId: 'shikoku',
    name: { ja: '高知城', zhTw: '高知城', en: 'Kōchi Castle' },
    city: { ja: '高知市', zhTw: '高知市', en: 'Kōchi' },
    prefecture: { ja: '高知県', zhTw: '高知縣', en: 'Kochi' },
    type: 'hirayama', designation: '重要文化財',
    position: { x: 46, y: 80 },
    illustration: { style: 'classic', tiers: 4, color: '#f5f0e8', roofColor: '#4a4a4a' },
    goshuin: { bg: '#f0e6d3', ink: '#2a2a2a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1601, event: { ja: '山内一豊が関ヶ原の功で土佐に入封し、大高坂山に高知城の築城を開始した。', zhTw: '山內一豐因關原之戰功績入封土佐，在大高坂山開始築建高知城。', en: 'Yamauchi Kazutoyo, rewarded for Sekigahara, entered Tosa and began building Kōchi Castle on Ōtakasayama.' } },
      { year: 1611, event: { ja: '約10年の歳月をかけて高知城が完成した。', zhTw: '歷時約10年高知城完工。', en: 'Kōchi Castle was completed after about 10 years of construction.' } },
      { year: 1727, event: { ja: '城下の大火で天守を含む城郭の大部分が焼失した。', zhTw: '城下大火導致包含天守在內的城郭大部分燒毀。', en: 'A great fire in the castle town destroyed most of the castle including the keep.' } },
      { year: 1749, event: { ja: '天守が再建され、現在残る天守と本丸御殿が完成した。全国で唯一、天守と本丸御殿が両方現存する城。', zhTw: '天守重建完成，現存天守與本丸御殿完工。全國唯一天守與本丸御殿皆現存的城。', en: 'The keep was rebuilt — Kōchi is the only castle in Japan where both the keep and honmaru palace survive.' } },
      { year: 1868, event: { ja: '幕末に山内容堂（豊信）が大政奉還を建白。土佐は薩長土肥として明治維新の原動力となった。', zhTw: '幕末山內容堂（豐信）建議大政奉還。土佐作為薩長土肥成為明治維新的原動力。', en: 'Lord Yamauchi Yōdō advocated returning power to the emperor; Tosa became a driving force of the Meiji Restoration.' } },
    ],
    figures: [
      { ja: '山内一豊', zhTw: '山內一豐', en: 'Yamauchi Kazutoyo', desc: { ja: '妻・千代の内助の功で知られる土佐藩初代藩主。関ヶ原で東軍に付き土佐一国を得た。', zhTw: '以妻子千代的內助之功聞名的土佐藩初代藩主。關原之戰投身東軍獲得土佐一國。', en: 'First lord of Tosa, famous for his wife Chiyo\'s support; joined the Eastern army at Sekigahara and won Tosa.' } },
      { ja: '山内容堂', zhTw: '山內容堂', en: 'Yamauchi Yōdō', desc: { ja: '幕末四賢侯の一人で大政奉還を建白した最後の土佐藩主。酒豪としても知られた。', zhTw: '幕末四賢侯之一，建議大政奉還的末代土佐藩主。也以嗜酒聞名。', en: 'One of the "Four Wise Lords" who urged the shogun to return power; the last lord of Tosa and a renowned drinker.' } },
      { ja: '坂本龍馬', zhTw: '坂本龍馬', en: 'Sakamoto Ryōma', desc: { ja: '土佐藩出身の志士で薩長同盟を仲介し明治維新の立役者となった国民的英雄。', zhTw: '出身土佐藩的志士，斡旋薩長同盟成為明治維新功臣的國民英雄。', en: 'Tosa-born patriot who brokered the Satsuma-Chōshū Alliance — a national hero of the Meiji Restoration.' } },
      { ja: '板垣退助', zhTw: '板垣退助', en: 'Itagaki Taisuke', desc: { ja: '土佐藩出身で自由民権運動の父。「板垣死すとも自由は死せず」の名言で知られる。', zhTw: '出身土佐藩的自由民權運動之父。以「板垣雖死自由不死」的名言聞名。', en: 'Father of Japan\'s Freedom and People\'s Rights Movement, famous for "Itagaki may die, but liberty never will."' } },
    ],
    trivia: [
      { ja: '天守と本丸御殿が両方現存する全国唯一の城で、往時の城主の暮らしが偲ばれる。', zhTw: '天守與本丸御殿皆現存的全國唯一城郭，可遙想昔日城主的生活。', en: 'The only castle in Japan with both surviving keep and honmaru palace, evoking the life of former lords.' },
      { ja: '追手門と天守が一枚の写真に収まる撮影スポットは城ファンに大人気。', zhTw: '追手門與天守可收入同一張照片的拍攝點深受城迷歡迎。', en: 'The photo spot capturing both the main gate and keep in one frame is hugely popular with castle fans.' },
      { ja: '「南海の名城」と呼ばれ、雨の多い土佐の気候に耐える独自の石樋（とい）排水システムを持つ。', zhTw: '被稱為「南海名城」，具有抵禦多雨土佐氣候的獨特石樋排水系統。', en: 'Called the "Great Castle of the Southern Sea," it features unique stone gutter drainage built for Tosa\'s heavy rainfall.' },
    ],
    highlights: [
      { ja: '現存天守と本丸御殿 — 天守・懐徳館（本丸御殿）が一体となった全国唯一の遺構。', zhTw: '現存天守與本丸御殿 — 天守與懷德館（本丸御殿）合為一體的全國唯一遺構。', en: 'The only place in Japan where the surviving keep and Kaitokukan palace form an integrated structure.' },
      { ja: '追手門 — 重厚な石垣と共に現存する立派な追手門（重要文化財）。', zhTw: '追手門 — 與厚重石垣共同現存的壯觀追手門（重要文化財）。', en: 'The imposing Otemon main gate (Important Cultural Property) with its massive stone walls.' },
      { ja: '板垣退助像と山内一豊像 — 城内に建つ土佐の英雄たちの銅像。', zhTw: '板垣退助像與山內一豐像 — 城內矗立的土佐英雄銅像。', en: 'Bronze statues of Tosa heroes Itagaki Taisuke and Yamauchi Kazutoyo within the castle grounds.' },
    ],
    architecture: [
      { ja: '四重六階の現存天守は望楼型で、最上階に廻縁と高欄を巡らせる。', zhTw: '四重六階的現存天守為望樓型，最上層設有迴廊與高欄。', en: 'The four-story, six-floor surviving keep is watchtower-style with a balcony and railing at the top.' },
      { ja: '天守と本丸御殿（懐徳館）が直接接続する全国唯一の構造。', zhTw: '天守與本丸御殿（懷德館）直接相連的全國唯一結構。', en: 'A unique nationwide structure where the keep connects directly to the Kaitokukan palace.' },
      { ja: '高知の多雨に対応した石樋による排水システムが本丸石垣に組み込まれている。', zhTw: '因應高知多雨氣候，石樋排水系統嵌入本丸石垣中。', en: 'Stone gutter drainage embedded in the honmaru walls — engineered for Kōchi\'s heavy rainfall.' },
    ],
  },
  // ── 九州 #85-91 ──
  {
    id: 'fukuoka', number: 85, regionId: 'kyushu',
    name: { ja: '福岡城', zhTw: '福岡城', en: 'Fukuoka Castle' },
    city: { ja: '福岡市', zhTw: '福岡市', en: 'Fukuoka' },
    prefecture: { ja: '福岡県', zhTw: '福岡縣', en: 'Fukuoka' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 24, y: 74 },
    illustration: { style: 'classic', tiers: 1, color: '#8b8b7e', roofColor: '#3d3d3d' },
    goshuin: { bg: '#e8dfd0', ink: '#2d2d2d', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1601, event: { ja: '黒田長政が関ヶ原の功で筑前に入封し、福崎の丘陵に福岡城の築城を開始した。', zhTw: '黑田長政因關原之戰功績入封筑前，在福崎丘陵開始築建福岡城。', en: 'Kuroda Nagamasa, rewarded for Sekigahara, entered Chikuzen and began building Fukuoka Castle.' } },
      { year: 1607, event: { ja: '総面積約25万㎡の巨大城郭が完成。47の櫓を擁する九州最大級の城となった。', zhTw: '總面積約25萬平方公尺的巨大城郭完工。擁有47座櫓的九州最大級城郭。', en: 'The massive castle was completed — 250,000㎡ with 47 turrets, among Kyushu\'s largest.' } },
      { year: 1871, event: { ja: '廃藩置県後に城の建物の大部分が解体されたが、多聞櫓などが現存。', zhTw: '廢藩置縣後城的建築大部分被拆除，但多聞櫓等現存。', en: 'Most buildings were demolished after the domains were abolished; the Tamon Turret and others survive.' } },
      { year: 2014, event: { ja: '「幻の天守閣」の存否を巡る調査が話題となり、天守台の石垣が修復された。', zhTw: '「幻之天守閣」是否存在的調查成為話題，天守台石垣被修復。', en: 'Investigation into the "phantom keep" drew attention; the keep platform stone walls were restored.' } },
    ],
    figures: [
      { ja: '黒田長政', zhTw: '黑田長政', en: 'Kuroda Nagamasa', desc: { ja: '黒田官兵衛の嫡男で福岡藩初代藩主。関ヶ原では東軍の勝利に大きく貢献した。', zhTw: '黑田官兵衛嫡男，福岡藩初代藩主。關原之戰對東軍勝利貢獻極大。', en: 'Eldest son of Kuroda Kanbei and first lord of Fukuoka; crucial to the Eastern army\'s victory at Sekigahara.' } },
      { ja: '黒田官兵衛（如水）', zhTw: '黑田官兵衛（如水）', en: 'Kuroda Kanbei (Josui)', desc: { ja: '豊臣秀吉の軍師として天下統一に貢献した戦国屈指の知将。福岡城築城を指導。', zhTw: '作為豐臣秀吉軍師對天下統一有貢獻的戰國屈指智將。指導福岡城築城。', en: 'Top strategist who guided Toyotomi Hideyoshi\'s unification; directed the construction of Fukuoka Castle.' } },
      { ja: '母里太兵衛', zhTw: '母里太兵衛', en: 'Mori Tahei', desc: { ja: '黒田二十四騎の筆頭で「酒は呑め呑め」の黒田節の主人公。日本号の槍で知られる。', zhTw: '黑田二十四騎之首，「酒は呑め呑め」黑田節的主人公。以日本號之槍聞名。', en: 'Chief of Kuroda\'s 24 Cavalry and hero of the Kuroda-bushi ballad; wielder of the famed Nihongō spear.' } },
    ],
    trivia: [
      { ja: '天守閣が存在したかどうかは歴史の謎で、「幻の天守閣」として論争が続く。', zhTw: '天守閣是否存在為歷史之謎，以「幻之天守閣」持續爭論。', en: 'Whether a keep ever existed remains a historical mystery — the "phantom keep" debate continues.' },
      { ja: '城跡は大濠公園と舞鶴公園として整備され、福岡市民の憩いの場。', zhTw: '城跡整備為大濠公園與舞鶴公園，為福岡市民的休憩場所。', en: 'The ruins are now Ōhori and Maizuru Parks — beloved green spaces for Fukuoka citizens.' },
      { ja: '黒田家の家紋「藤巴」は福岡市の市章にもなっている。', zhTw: '黑田家的家紋「藤巴」也成為福岡市的市徽。', en: 'The Kuroda clan crest "Fujitomoe" became the emblem of Fukuoka city.' },
    ],
    highlights: [
      { ja: '多聞櫓 — 現存する唯一の櫓で重要文化財に指定（通常非公開）。', zhTw: '多聞櫓 — 唯一現存的櫓，被指定為重要文化財（通常不公開）。', en: 'Tamon Turret — the only surviving turret, designated an Important Cultural Property (usually closed).' },
      { ja: '天守台からの福岡市街の大パノラマ — 都会の真ん中にある城の醍醐味。', zhTw: '從天守台眺望福岡市街的大全景 — 都會正中心之城的絕妙之處。', en: 'Panoramic city views from the keep platform — a castle in the heart of a modern metropolis.' },
      { ja: '桜まつり — 約千本の桜が咲き誇る福岡随一の花見スポット。', zhTw: '櫻花祭 — 約千棵櫻花盛開的福岡首屈一指賞花景點。', en: 'Cherry blossom festival — about 1,000 trees make it Fukuoka\'s top hanami destination.' },
    ],
    architecture: [
      { ja: '総面積約25万㎡は九州最大で、47の櫓と10以上の門を擁した巨大城郭。', zhTw: '總面積約25萬平方公尺為九州最大，擁有47座櫓與10座以上城門的巨大城郭。', en: 'Kyushu\'s largest at about 250,000㎡ with 47 turrets and over 10 gates.' },
      { ja: '本丸・二の丸・三の丸の三重の縄張りに大濠（現・大濠公園）の水堀を配置。', zhTw: '本丸、二之丸、三之丸三重配置搭配大濠（現大濠公園）水壕。', en: 'Triple compounds with the Ōhori (now Ōhori Park) water moat as the outer defense.' },
      { ja: '切石を精巧に積んだ「切込み接ぎ」の美しい石垣が各所に残る。', zhTw: '各處留存精巧堆砌切石的「切込接」美麗石垣。', en: 'Finely fitted "kirikomi-hagi" ashlar stone walls survive throughout the grounds.' },
    ],
  },
  {
    id: 'ono', number: 86, regionId: 'kyushu',
    name: { ja: '大野城', zhTw: '大野城', en: 'Ōnojō' },
    city: { ja: '大野城市', zhTw: '大野城市', en: 'Ōnojō' },
    prefecture: { ja: '福岡県', zhTw: '福岡縣', en: 'Fukuoka' },
    type: 'castle-ruin', designation: '特別史跡',
    position: { x: 24, y: 75 },
    illustration: { style: 'ruins', tiers: 1, color: '#6b8b6b', roofColor: '#3d4a3d' },
    goshuin: { bg: '#e8dfd0', ink: '#2d3d2d', seal: '#b83a3a', crest: '#6b5a14' },
    history: [
      { year: 663, event: { ja: '白村江の戦いで唐・新羅連合軍に大敗した大和朝廷が北九州防衛のため築城を決定。', zhTw: '白村江之戰大敗於唐朝與新羅聯軍的大和朝廷，決定為防衛北九州而築城。', en: 'After defeat at the Battle of Baekgang, the Yamato court decided to fortify northern Kyushu.' } },
      { year: 665, event: { ja: '百済から亡命した将軍の指導のもと、四王寺山に朝鮮式山城が築かれた。', zhTw: '在百濟亡命將軍指導下，在四王寺山築建朝鮮式山城。', en: 'A Korean-style mountain fortress was built on Mt. Shiōji under the guidance of exiled Baekje generals.' } },
      { year: 1953, event: { ja: '特別史跡に指定され、古代防衛遺構としての歴史的価値が広く認識された。', zhTw: '被指定為特別史跡，古代防禦遺構的歷史價值獲得廣泛認可。', en: 'Designated a Special Historic Site, with its value as an ancient defense site broadly recognized.' } },
    ],
    figures: [
      { ja: '天智天皇', zhTw: '天智天皇', en: 'Emperor Tenji', desc: { ja: '白村江の敗戦後、国防体制の再構築を命じた天皇。大野城の築城を指示した。', zhTw: '白村江敗戰後下令重建國防體制的天皇。指示築建大野城。', en: 'Emperor who ordered national defense reforms after Baekgang, including the construction of Ōnojō.' } },
      { ja: '憶礼福留・四比福夫', zhTw: '憶禮福留・四比福夫', en: 'Okure Fukuru & Shihi Fukubu', desc: { ja: '百済から亡命した将軍で、大野城など北九州の古代山城の築城を指導した。', zhTw: '從百濟亡命的將軍，指導築建大野城等北九州古代山城。', en: 'Exiled Baekje generals who directed construction of Ōnojō and other ancient Korean-style fortresses.' } },
    ],
    trivia: [
      { ja: '市名「大野城市」はこの古代山城に由来する。', zhTw: '市名「大野城市」源自這座古代山城。', en: 'The city of Ōnojō takes its name from this ancient mountain fortress.' },
      { ja: '太宰府の北を守る軍事拠点で、水城・基肄城と共に古代北九州防衛線を形成した。', zhTw: '守衛太宰府之北的軍事據點，與水城、基肄城共同形成古代北九州防禦線。', en: 'Part of an ancient defense line with Mizuki and Kii Castle, guarding Dazaifu from the north.' },
      { ja: '全長約8kmの土塁と石垣が山を取り囲む、日本最大級の古代山城。', zhTw: '全長約8公里的土壘與石垣環繞山體，為日本最大級的古代山城。', en: 'One of Japan\'s largest ancient fortresses with about 8km of earthen and stone walls encircling the mountain.' },
    ],
    highlights: [
      { ja: '百間石垣 — 約180mにわたる壮大な古代の石垣遺構。', zhTw: '百間石垣 — 約180公尺壯大的古代石垣遺構。', en: 'Hyakken Stone Wall — a grand 180m stretch of ancient stone fortification.' },
      { ja: '四王寺山ハイキング — 城壁跡を辿りながら古代の防衛ラインを体感。', zhTw: '四王寺山健行 — 沿城牆遺跡感受古代防禦線。', en: 'Mt. Shiōji hiking trail — walk the ancient defense line along fortress wall remains.' },
      { ja: '太宰府天満宮との組み合わせ — 近隣の太宰府天満宮と合わせて歴史散策。', zhTw: '與太宰府天滿宮組合 — 可與鄰近太宰府天滿宮一起歷史散步。', en: 'Combine with nearby Dazaifu Tenmangu shrine for a full historical excursion.' },
    ],
    architecture: [
      { ja: '四王寺山を全周約8kmの土塁と石垣で取り囲む朝鮮式山城。', zhTw: '以約8公里土壘與石垣環繞四王寺山的朝鮮式山城。', en: 'A Korean-style mountain fortress encircling Mt. Shiōji with about 8km of walls.' },
      { ja: '70棟以上の礎石建物群が山上に配置された大規模な兵站・防衛拠点。', zhTw: '70棟以上的礎石建築群配置在山上的大規模後勤與防禦據點。', en: 'Over 70 foundation-stone buildings once stood on the mountain as a massive logistics and defense base.' },
      { ja: '谷筋を塞ぐ石塁と水門を各所に配し、山全体を要塞化した構造。', zhTw: '在各處以石壘與水門封鎖谷道、將整座山要塞化的結構。', en: 'Stone walls and water gates block valleys throughout, fortifying the entire mountain.' },
    ],
  },
  {
    id: 'nagoya-hizen', number: 87, regionId: 'kyushu',
    name: { ja: '名護屋城', zhTw: '名護屋城', en: 'Nagoya Castle (Hizen)' },
    city: { ja: '唐津市', zhTw: '唐津市', en: 'Karatsu' },
    prefecture: { ja: '佐賀県', zhTw: '佐賀縣', en: 'Saga' },
    type: 'hirayama', designation: '特別史跡',
    position: { x: 20, y: 74 },
    illustration: { style: 'classic', tiers: 5, color: '#c48a2a', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2a2a2a', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1591, event: { ja: '豊臣秀吉が朝鮮出兵（文禄・慶長の役）の前線基地として名護屋城の築城を命じた。', zhTw: '豐臣秀吉下令築建名護屋城作為朝鮮出兵（文祿慶長之役）的前線基地。', en: 'Toyotomi Hideyoshi ordered Nagoya Castle built as the staging base for his Korean invasions.' } },
      { year: 1592, event: { ja: 'わずか5ヶ月で完成。大坂城に次ぐ規模の巨大城郭となり、周囲には130以上の大名陣屋が並んだ。', zhTw: '僅5個月完工。成為僅次於大坂城規模的巨大城郭，周圍排列130座以上大名陣屋。', en: 'Completed in just 5 months — second only to Osaka Castle in scale, with over 130 daimyo camps surrounding it.' } },
      { year: 1593, event: { ja: '文禄の役の講和交渉が名護屋城で行われ、朝鮮・明の使節団も訪れた。', zhTw: '文祿之役的和談在名護屋城進行，朝鮮及明朝使節團也到訪。', en: 'Peace negotiations for the first Korean campaign were held at Nagoya, with Korean and Ming envoys visiting.' } },
      { year: 1598, event: { ja: '秀吉の死により朝鮮出兵が中止され、名護屋城も役割を終えた。石垣は意図的に破壊された。', zhTw: '秀吉去世後朝鮮出兵中止，名護屋城的角色也結束。石垣被刻意破壞。', en: 'Hideyoshi\'s death ended the Korean campaigns; the castle lost its purpose and its walls were deliberately destroyed.' } },
      { year: 1993, event: { ja: '名護屋城博物館が開館し、日本と朝鮮半島の交流史を展示する施設として整備された。', zhTw: '名護屋城博物館開館，整備為展示日本與朝鮮半島交流史的設施。', en: 'The Nagoya Castle Museum opened, presenting the history of Japan-Korea relations.' } },
    ],
    figures: [
      { ja: '豊臣秀吉', zhTw: '豐臣秀吉', en: 'Toyotomi Hideyoshi', desc: { ja: '天下統一後、明征服の野望を抱き朝鮮出兵を強行した天下人。名護屋城で陣頭指揮を執った。', zhTw: '天下統一後懷抱征服明朝野心、強行朝鮮出兵的天下人。在名護屋城親自指揮。', en: 'The ruler who, after unifying Japan, launched the Korean invasions; he directed operations from Nagoya Castle.' } },
      { ja: '加藤清正', zhTw: '加藤清正', en: 'Katō Kiyomasa', desc: { ja: '朝鮮出兵で先鋒を務めた猛将で「虎退治」の逸話で名高い。名護屋にも陣を構えた。', zhTw: '朝鮮出兵中擔任先鋒的猛將，以「退虎」逸事聞名。在名護屋也設陣。', en: 'Fierce vanguard commander in Korea famous for his "tiger hunt"; he also maintained a camp at Nagoya.' } },
      { ja: '小西行長', zhTw: '小西行長', en: 'Konishi Yukinaga', desc: { ja: '朝鮮出兵の第一軍を率いた武将でキリシタン大名。明との講和交渉も担った。', zhTw: '率領朝鮮出兵第一軍的武將，基督徒大名。也負責與明朝的和談。', en: 'Christian daimyo who led the first army in Korea and handled peace negotiations with Ming China.' } },
    ],
    trivia: [
      { ja: '築城期間わずか5ヶ月で大坂城に次ぐ巨大城郭を完成させた驚異的な動員力。', zhTw: '僅5個月築城期間即完成僅次大坂城的巨大城郭，驚人的動員力。', en: 'Astonishing mobilization — the second-largest castle in Japan was completed in just 5 months.' },
      { ja: '周囲に徳川家康・伊達政宗など130以上の大名の陣屋が並び、一大軍事都市を形成した。', zhTw: '周圍排列德川家康、伊達政宗等130座以上大名陣屋，形成大規模軍事都市。', en: 'Over 130 daimyo camps — including Tokugawa Ieyasu and Date Masamune — formed a massive military city.' },
      { ja: '秀吉は名護屋で茶会や能楽会を催し、戦地とは思えない文化的な生活を送った。', zhTw: '秀吉在名護屋舉辦茶會與能樂會，過著不像戰地的文化生活。', en: 'Hideyoshi held tea ceremonies and Noh performances at Nagoya — an unexpectedly cultured life in a war zone.' },
    ],
    highlights: [
      { ja: '名護屋城博物館 — 日朝交流史を学べる充実した展示施設（入場無料）。', zhTw: '名護屋城博物館 — 可學習日朝交流史的充實展示設施（免費入場）。', en: 'Nagoya Castle Museum — a comprehensive exhibition on Japan-Korea history (free admission).' },
      { ja: '本丸からの玄界灘の眺望 — 晴れた日には壱岐・対馬まで見渡せる絶景。', zhTw: '從本丸眺望玄界灘 — 晴天時可遠望壹岐、對馬的絕景。', en: 'Views of the Genkai Sea from the honmaru — on clear days Iki and Tsushima islands are visible.' },
      { ja: '大名陣跡群 — 城の周囲に点在する家康・政宗らの陣跡を巡る散策。', zhTw: '大名陣跡群 — 散布在城周圍的家康、政宗等陣跡散步巡禮。', en: 'Daimyo camp ruins — walk among the remains of camps used by Ieyasu, Masamune, and other lords.' },
    ],
    architecture: [
      { ja: '五重天守を中心に本丸・二の丸・三の丸・山里丸を配した壮大な縄張り。', zhTw: '以五重天守為中心配置本丸、二之丸、三之丸、山里丸的壯大配置。', en: 'A grand layout centered on a five-story keep with honmaru, ni-no-maru, san-no-maru, and Yamazato-maru.' },
      { ja: '大坂城に次ぐ規模の石垣は「破城」により意図的に崩されたが、その壮大さは今も伝わる。', zhTw: '僅次大坂城規模的石垣雖被「破城」刻意破壞，但其壯大至今仍可感受。', en: 'Stone walls second only to Osaka Castle were deliberately destroyed, yet their grandeur still impresses.' },
      { ja: '全国から動員された大名の最新築城技術が結集した戦国期最後の巨大城郭。', zhTw: '集結全國動員大名最新築城技術的戰國時期最後巨大城郭。', en: 'The last great Sengoku-era fortress, incorporating cutting-edge techniques from daimyo across Japan.' },
    ],
  },
  {
    id: 'yoshinogari', number: 88, regionId: 'kyushu',
    name: { ja: '吉野ヶ里', zhTw: '吉野里', en: 'Yoshinogari' },
    city: { ja: '吉野ヶ里町', zhTw: '吉野里町', en: 'Yoshinogari' },
    prefecture: { ja: '佐賀県', zhTw: '佐賀縣', en: 'Saga' },
    type: 'castle-ruin', designation: '特別史跡',
    position: { x: 22, y: 76 },
    illustration: { style: 'ruins', tiers: 1, color: '#8b7e6b', roofColor: '#5c4a3d' },
    goshuin: { bg: '#e8dfd0', ink: '#3d2d2d', seal: '#b83a3a', crest: '#6b5a14' },
    history: [
      { year: -300, event: { ja: '弥生時代前期に環濠集落が形成され始め、周囲に防御用の濠が掘られた。', zhTw: '彌生時代前期開始形成環壕聚落，周圍挖掘防禦用壕溝。', en: 'An early Yayoi-period moated settlement began forming with defensive ditches.' } },
      { year: 100, event: { ja: '弥生時代後期に集落は最大規模に達し、内郭・外郭を持つ計画的な都市構造が完成。', zhTw: '彌生時代後期聚落達到最大規模，完成具有內郭與外郭的計畫性都市結構。', en: 'The settlement reached its peak in the late Yayoi period with a planned urban layout of inner and outer precincts.' } },
      { year: 1986, event: { ja: '工業団地開発に伴う調査で大規模な弥生時代の環濠集落跡が発見され、全国的なニュースとなった。', zhTw: '伴隨工業區開發的調查中發現大規模彌生時代環壕聚落遺跡，成為全國性新聞。', en: 'A massive Yayoi moated settlement was discovered during industrial development surveys, making national news.' } },
      { year: 2001, event: { ja: '国営吉野ヶ里歴史公園として開園し、復元された弥生集落が一般に公開された。', zhTw: '作為國營吉野里歷史公園開園，復原的彌生聚落向公眾開放。', en: 'Opened as Yoshinogari Historical Park with reconstructed Yayoi settlements accessible to the public.' } },
    ],
    figures: [
      { ja: '弥生時代の王（推定）', zhTw: '彌生時代的王（推定）', en: 'Yayoi-era King (presumed)', desc: { ja: '北墳丘墓に埋葬された14体の甕棺から有力首長の存在が推定される。', zhTw: '從北墳丘墓埋葬的14具甕棺推定有力首長的存在。', en: 'Fourteen jar burials in the North Mound Tomb suggest the presence of powerful chieftains.' } },
      { ja: '卑弥呼（諸説あり）', zhTw: '卑彌呼（諸說）', en: 'Himiko (debated)', desc: { ja: '吉野ヶ里が邪馬台国の候補地の一つとされ、卑弥呼との関連が議論されている。', zhTw: '吉野里被認為是邪馬台國的候選地之一，與卑彌呼的關聯持續被討論。', en: 'Yoshinogari is one candidate for the site of Yamatai-koku, with debated links to Queen Himiko.' } },
    ],
    trivia: [
      { ja: '「邪馬台国発見か？」と報道され、発見当時は一大ブームを巻き起こした。', zhTw: '「發現邪馬台國？」的報導在發現當時掀起一大熱潮。', en: '"Has Yamatai-koku been found?" — the discovery sparked a nationwide sensation.' },
      { ja: '日本最大規模の弥生時代環濠集落で、内濠と外濠の二重構造を持つ。', zhTw: '日本最大規模的彌生時代環壕聚落，具有內壕與外壕的雙重結構。', en: 'Japan\'s largest Yayoi moated settlement with double-moat inner and outer defenses.' },
      { ja: '日本100名城に選ばれた中で最も古い「城」で、約2,300年前に遡る。', zhTw: '日本100名城中被選為最古老的「城」，可追溯至約2,300年前。', en: 'The oldest "castle" in the 100 Famous Castles list, dating back some 2,300 years.' },
    ],
    highlights: [
      { ja: '復元された物見櫓と主祭殿 — 弥生時代の建築を再現した圧巻の復元建物群。', zhTw: '復原的瞭望櫓與主祭殿 — 再現彌生時代建築的壯觀復原建築群。', en: 'Reconstructed watchtower and ceremonial hall — impressive recreations of Yayoi architecture.' },
      { ja: '北墳丘墓 — 甕棺が出土した王墓級の大型墳丘墓。', zhTw: '北墳丘墓 — 出土甕棺的王墓級大型墳丘墓。', en: 'North Mound Tomb — a royal-class burial mound where jar coffins were unearthed.' },
      { ja: '環濠と逆茂木 — 二重の濠と防御柵が弥生時代の戦いの痕跡を伝える。', zhTw: '環壕與逆茂木 — 雙重壕溝與防禦柵欄傳達彌生時代戰鬥的痕跡。', en: 'Double moats and abatis fences — vivid traces of Yayoi-era warfare.' },
    ],
    architecture: [
      { ja: '内濠と外濠の二重環濠構造で居住区域・祭祀区域・墳墓区域を明確に区分。', zhTw: '以內壕與外壕的雙重環壕結構明確區分居住區、祭祀區與墳墓區。', en: 'A double-moat structure clearly separating residential, ritual, and burial zones.' },
      { ja: '物見櫓・柵列・逆茂木など弥生時代の防御施設が復元されている。', zhTw: '瞭望櫓、柵列、逆茂木等彌生時代防禦設施已復原。', en: 'Watchtowers, palisades, and abatis — Yayoi defensive installations have been reconstructed.' },
      { ja: '竪穴住居と高床倉庫が計画的に配置された古代都市のプランニングが見られる。', zhTw: '豎穴住居與高架倉庫有計畫地配置，可見古代都市規劃。', en: 'Pit dwellings and raised-floor storehouses reveal ancient urban planning.' },
    ],
  },
  {
    id: 'saga', number: 89, regionId: 'kyushu',
    name: { ja: '佐賀城', zhTw: '佐賀城', en: 'Saga Castle' },
    city: { ja: '佐賀市', zhTw: '佐賀市', en: 'Saga' },
    prefecture: { ja: '佐賀県', zhTw: '佐賀縣', en: 'Saga' },
    type: 'hirajiro', designation: '県指定史跡',
    position: { x: 21, y: 77 },
    illustration: { style: 'classic', tiers: 5, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2a2a2a', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1611, event: { ja: '鍋島直茂・勝茂父子が龍造寺氏の村中城を改修し佐賀城を築いた。', zhTw: '鍋島直茂、勝茂父子改修龍造寺氏的村中城，築建佐賀城。', en: 'Nabeshima Naoshige and Katsushige rebuilt the Ryūzōji-era castle into Saga Castle.' } },
      { year: 1726, event: { ja: '大火で天守や本丸御殿が焼失。以後天守は再建されなかった。', zhTw: '大火燒毀天守與本丸御殿。此後天守未再重建。', en: 'Fire destroyed the keep and palace; the keep was never rebuilt.' } },
      { year: 1838, event: { ja: '鍋島直正（閑叟）が10代藩主に就任し、西洋式の藩政改革を断行した。', zhTw: '鍋島直正（閑叟）就任第10代藩主，斷行西洋式藩政改革。', en: 'Nabeshima Naomasa (Kansō) became the 10th lord and launched radical Western-style domain reforms.' } },
      { year: 1874, event: { ja: '佐賀の乱で江藤新平らが佐賀城に籠城したが、政府軍に鎮圧された。', zhTw: '佐賀之亂中江藤新平等人籠城佐賀城，但被政府軍鎮壓。', en: 'During the Saga Rebellion, Etō Shinpei and others held the castle but were suppressed by government forces.' } },
    ],
    figures: [
      { ja: '鍋島直正（閑叟）', zhTw: '鍋島直正（閑叟）', en: 'Nabeshima Naomasa (Kansō)', desc: { ja: '佐賀藩10代藩主で日本初の反射炉・蒸気機関・大砲鋳造など近代化を推進した名君。', zhTw: '佐賀藩第10代藩主，推動日本首座反射爐、蒸氣引擎、大砲鑄造等近代化的名君。', en: 'Saga\'s 10th lord who built Japan\'s first reverberatory furnace, steam engine, and cannon foundry.' } },
      { ja: '鍋島直茂', zhTw: '鍋島直茂', en: 'Nabeshima Naoshige', desc: { ja: '龍造寺氏の家臣から佐賀藩の実質的な創始者となった智将。', zhTw: '從龍造寺氏家臣成為佐賀藩實質創始者的智將。', en: 'A strategist who rose from Ryūzōji retainer to become the de facto founder of the Saga domain.' } },
      { ja: '江藤新平', zhTw: '江藤新平', en: 'Etō Shinpei', desc: { ja: '明治政府の司法卿を務めた後、佐賀の乱を起こし処刑された佐賀藩出身の政治家。', zhTw: '擔任明治政府司法卿後發動佐賀之亂被處刑的佐賀藩出身政治家。', en: 'Saga-born politician who served as Justice Minister before leading the failed Saga Rebellion.' } },
    ],
    trivia: [
      { ja: '鍋島閑叟の近代化政策により、佐賀藩は「薩長土肥」に並ぶ雄藩となった。', zhTw: '因鍋島閑叟的近代化政策，佐賀藩成為與「薩長土肥」並列的雄藩。', en: 'Kansō\'s modernization made Saga one of the four great domains (Sat-Chō-To-Hi) driving the Meiji Restoration.' },
      { ja: '幕末に日本初のアームストロング砲を鋳造し、戊辰戦争で威力を発揮した。', zhTw: '幕末鑄造日本首門阿姆斯壯砲，在戊辰戰爭中展現威力。', en: 'Saga cast Japan\'s first Armstrong gun in the Bakumatsu, which proved decisive in the Boshin War.' },
      { ja: '「葉隠」は佐賀藩士・山本常朝の口述をまとめた武士道書で「武士道とは死ぬことと見つけたり」で有名。', zhTw: '「葉隱」是佐賀藩士山本常朝口述彙整的武士道書，以「武士道即覺悟赴死」聞名。', en: '"Hagakure," dictated by Saga samurai Yamamoto Tsunetomo, is famous for "the way of the warrior is death."' },
    ],
    highlights: [
      { ja: '佐賀城本丸歴史館 — 本丸御殿を忠実に復元した木造建築（入場無料）。', zhTw: '佐賀城本丸歷史館 — 忠實復原本丸御殿的木造建築（免費入場）。', en: 'Saga Castle Honmaru History Museum — a faithfully restored wooden palace (free admission).' },
      { ja: '鯱の門 — 佐賀の乱の弾痕が残る現存の城門（重要文化財）。', zhTw: '鯱之門 — 留有佐賀之亂彈痕的現存城門（重要文化財）。', en: 'Shachi Gate — a surviving gate with bullet holes from the Saga Rebellion (Important Cultural Property).' },
      { ja: '復元本丸御殿の320畳の大広間 — 日本最大級の木造復元建築空間。', zhTw: '復原本丸御殿的320疊大廣間 — 日本最大級的木造復原建築空間。', en: 'The 320-tatami great hall — one of Japan\'s largest reconstructed wooden interior spaces.' },
    ],
    architecture: [
      { ja: '幾重もの水堀に囲まれた平城で、総構えの規模は九州有数。', zhTw: '被多重水壕環繞的平城，總構規模在九州數一數二。', en: 'A flatland castle surrounded by multiple water moats — one of Kyushu\'s largest total defense systems.' },
      { ja: '天守は五重五階の壮大な規模だったが、1726年の火災後は再建されなかった。', zhTw: '天守為五重五階的壯大規模，但1726年火災後未再重建。', en: 'The grand five-story keep was never rebuilt after the 1726 fire.' },
      { ja: '鯱の門は本丸に残る唯一の建造物で、佐賀の乱の弾痕を今に伝える。', zhTw: '鯱之門是本丸唯一留存的建築物，傳達佐賀之亂的彈痕至今。', en: 'The Shachi Gate — the sole surviving building of the honmaru — still bears bullet scars from the 1874 rebellion.' },
    ],
  },
  {
    id: 'hirado', number: 90, regionId: 'kyushu',
    name: { ja: '平戸城', zhTw: '平戶城', en: 'Hirado Castle' },
    city: { ja: '平戸市', zhTw: '平戶市', en: 'Hirado' },
    prefecture: { ja: '長崎県', zhTw: '長崎縣', en: 'Nagasaki' },
    type: 'hirayama', designation: '県指定史跡',
    position: { x: 17, y: 77 },
    illustration: { style: 'classic', tiers: 3, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2a2a2a', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1599, event: { ja: '松浦鎮信が日の岳城を築城したが、幕府への忠誠を示すため自ら城を焼き払った。', zhTw: '松浦鎮信築建日之嶽城，但為向幕府表示忠誠自行焚毀。', en: 'Matsuura Shigenobu built Hinotake Castle but burned it himself to demonstrate loyalty to the shogunate.' } },
      { year: 1718, event: { ja: '松浦棟が幕府の許可を得て同じ場所に平戸城を再築した。「山鹿流」の縄張りを採用。', zhTw: '松浦棟獲幕府許可在同一地點重建平戶城。採用「山鹿流」配置。', en: 'Matsuura Takashi received shogunal permission to rebuild; the castle used Yamaga-ryū military design.' } },
      { year: 1962, event: { ja: '天守閣が鉄筋コンクリートで復元された。', zhTw: '天守閣以鋼筋混凝土復原。', en: 'The keep was reconstructed in reinforced concrete.' } },
      { year: 2021, event: { ja: '天守をリニューアルし「平戸城キャッスルステイ」として城泊体験が開始された。', zhTw: '天守翻新並以「平戶城住城體驗」開始城堡住宿體驗。', en: 'The keep was renovated and "Hirado Castle Stay" accommodation experience launched.' } },
    ],
    figures: [
      { ja: '松浦鎮信（法印）', zhTw: '松浦鎮信（法印）', en: 'Matsuura Shigenobu', desc: { ja: '平戸藩初代藩主で南蛮貿易を推進。イギリス・オランダの商館を平戸に招致した。', zhTw: '平戶藩初代藩主，推動南蠻貿易。將英國、荷蘭商館招致平戶。', en: 'First lord of Hirado who promoted foreign trade and invited English and Dutch trading posts.' } },
      { ja: '三浦按針（ウィリアム・アダムス）', zhTw: '三浦按針（威廉・亞當斯）', en: 'William Adams (Miura Anjin)', desc: { ja: '平戸のイギリス商館に関わった英国人航海士。徳川家康の外交顧問を務めた。', zhTw: '與平戶英國商館有關的英國航海士。擔任德川家康的外交顧問。', en: 'English navigator linked to Hirado\'s English trading post; served as Tokugawa Ieyasu\'s foreign advisor.' } },
      { ja: '松浦静山', zhTw: '松浦靜山', en: 'Matsuura Seizan', desc: { ja: '「甲子夜話」の著者として知られる文人藩主。平戸藩9代藩主。', zhTw: '以《甲子夜話》作者聞名的文人藩主。平戶藩第9代藩主。', en: 'Scholar-lord famous for his essay collection "Kasshi Yawa"; 9th lord of Hirado.' } },
    ],
    trivia: [
      { ja: '平戸は日本初の西洋貿易港の一つで、ポルトガル・オランダ・イギリスの商館が置かれた国際都市だった。', zhTw: '平戶是日本最早的西洋貿易港之一，設有葡萄牙、荷蘭、英國商館的國際都市。', en: 'Hirado was one of Japan\'s first Western trade ports, hosting Portuguese, Dutch, and English trading houses.' },
      { ja: '2021年から天守内に宿泊できる「キャッスルステイ」が話題に。', zhTw: '2021年起可住宿天守內的「住城體驗」成為話題。', en: 'The 2021 "Castle Stay" program allowing overnight stays in the keep became a sensation.' },
      { ja: '「山鹿流」軍学に基づく縄張りは全国的にも珍しい。', zhTw: '基於「山鹿流」軍學的配置在全國也很罕見。', en: 'The castle\'s layout based on Yamaga-ryū military studies is rare nationwide.' },
    ],
    highlights: [
      { ja: '天守からの平戸海峡の絶景 — 海と島々が織りなす西海の美しい風景。', zhTw: '從天守眺望平戶海峽的絕景 — 海與島嶼交織的西海美景。', en: 'Stunning views of the Hirado Strait — a beautiful seascape of islands and ocean.' },
      { ja: 'オランダ商館跡 — 復元されたオランダ商館で日蘭交流の歴史を学ぶ。', zhTw: '荷蘭商館遺址 — 在復原的荷蘭商館學習日荷交流歷史。', en: 'Dutch Trading Post — learn about Japan-Netherlands exchange at the reconstructed warehouse.' },
      { ja: '平戸城キャッスルステイ — 天守に泊まれるユニークな宿泊体験。', zhTw: '平戶城住城體驗 — 可住宿天守的獨特住宿體驗。', en: 'Castle Stay — a unique experience spending the night inside the castle keep.' },
    ],
    architecture: [
      { ja: '山鹿流軍学に基づく縄張りは理論的な防御配置が特徴。', zhTw: '基於山鹿流軍學的配置以理論性防禦佈局為特徵。', en: 'The layout follows Yamaga-ryū military theory with a rationalized defensive arrangement.' },
      { ja: '三方を海に囲まれた天然の要害に、石垣と堀を巡らせた海城。', zhTw: '三面環海的天然要害，配以石垣與壕溝的海城。', en: 'A sea castle with stone walls and moats built on a natural strongpoint surrounded by sea on three sides.' },
      { ja: '北虎口門は現存する数少ない城門の一つ（県指定文化財）。', zhTw: '北虎口門是少數現存城門之一（縣指定文化財）。', en: 'The North Koguchi Gate is one of the few surviving castle gates (prefectural cultural property).' },
    ],
  },
  {
    id: 'shimabara', number: 91, regionId: 'kyushu',
    name: { ja: '島原城', zhTw: '島原城', en: 'Shimabara Castle' },
    city: { ja: '島原市', zhTw: '島原市', en: 'Shimabara' },
    prefecture: { ja: '長崎県', zhTw: '長崎縣', en: 'Nagasaki' },
    type: 'hirajiro', designation: '県指定史跡',
    position: { x: 19, y: 80 },
    illustration: { style: 'classic', tiers: 5, color: '#f5f0e8', roofColor: '#2a2a2a' },
    goshuin: { bg: '#f0e6d3', ink: '#2a2a2a', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1624, event: { ja: '松倉重政が7年の歳月をかけ、4万石の小藩にはあまりに壮大な五重天守の城を築いた。', zhTw: '松倉重政花費7年歲月，為4萬石小藩築建過於壯大的五重天守城郭。', en: 'Matsukura Shigemasa spent 7 years building a grand five-story keep far beyond what his small 40,000-koku domain warranted.' } },
      { year: 1637, event: { ja: '過酷な年貢とキリシタン弾圧に耐えかねた領民が蜂起し、島原の乱が勃発。天草四郎を総大将とした約3万7千人が原城に籠城した。', zhTw: '不堪過重年貢與基督徒迫害的領民起義，島原之亂爆發。以天草四郎為總大將的約3萬7千人在原城籠城。', en: 'Crushing taxes and Christian persecution sparked the Shimabara Rebellion; about 37,000 rebels under Amakusa Shirō besieged Hara Castle.' } },
      { year: 1638, event: { ja: '幕府軍12万人の総攻撃で原城が陥落し、籠城者は全員殺害された。松倉勝家は責任を問われ斬首。', zhTw: '幕府軍12萬人總攻陷落原城，籠城者全數被殺。松倉勝家被問責斬首。', en: 'Hara Castle fell to 120,000 shogunate troops; all defenders were killed. Lord Matsukura was beheaded for his misrule.' } },
      { year: 1792, event: { ja: '雲仙岳の噴火と眉山の崩壊による「島原大変肥後迷惑」で甚大な被害を受けた。', zhTw: '雲仙岳噴發與眉山崩塌造成的「島原大變肥後迷惑」帶來甚大災害。', en: 'The eruption of Mt. Unzen and collapse of Mt. Mayu caused catastrophic disaster — the "Shimabara Calamity."' } },
      { year: 1964, event: { ja: '五重天守が鉄筋コンクリートで復元され、キリシタン史料館として公開された。', zhTw: '五重天守以鋼筋混凝土復原，作為基督徒史料館公開。', en: 'The five-story keep was reconstructed in concrete and opened as a museum of Christian history.' } },
    ],
    figures: [
      { ja: '松倉重政', zhTw: '松倉重政', en: 'Matsukura Shigemasa', desc: { ja: '島原城を築城した藩主で、過酷な年貢取り立てとキリシタン弾圧が島原の乱の遠因を作った。', zhTw: '築建島原城的藩主，過酷的年貢徵收與基督徒迫害為島原之亂的遠因。', en: 'Built Shimabara Castle; his crushing taxes and persecution of Christians sowed the seeds of the Shimabara Rebellion.' } },
      { ja: '天草四郎（益田時貞）', zhTw: '天草四郎（益田時貞）', en: 'Amakusa Shirō', desc: { ja: '島原の乱で一揆軍の総大将を務めた若きカリスマ的指導者。わずか16歳だったとされる。', zhTw: '島原之亂中擔任一揆軍總大將的年輕領袖。據說年僅16歲。', en: 'Charismatic young leader of the rebels in the Shimabara Rebellion, said to have been only 16 years old.' } },
      { ja: '松平信綱', zhTw: '松平信綱', en: 'Matsudaira Nobutsuna', desc: { ja: '「知恵伊豆」と呼ばれた老中で、島原の乱鎮圧の幕府軍総大将を務めた。', zhTw: '被稱為「智慧伊豆」的老中，擔任鎮壓島原之亂的幕府軍總大將。', en: 'Senior councilor known as "Wise Izu" who commanded the shogunate\'s forces to suppress the rebellion.' } },
    ],
    trivia: [
      { ja: '4万石の小藩でありながら10万石級の壮大な城を築いたことが、領民への過酷な搾取と島原の乱の一因。', zhTw: '僅4萬石的小藩卻築建10萬石級的壯大城郭，成為對領民過度搾取與島原之亂的一因。', en: 'Building a castle worthy of 100,000 koku on a 40,000-koku domain led to crushing exploitation and the rebellion.' },
      { ja: '島原の乱は江戸幕府最大の内戦で、これを契機に鎖国政策が完成した。', zhTw: '島原之亂是江戶幕府最大的內戰，以此為契機鎖國政策完成。', en: 'The Shimabara Rebellion was the Edo shogunate\'s largest civil war, triggering the completion of sakoku (national isolation).' },
      { ja: '「島原大変肥後迷惑」は1792年の大災害を表す言葉で、津波が対岸の肥後にも甚大な被害をもたらした。', zhTw: '「島原大變肥後迷惑」是形容1792年大災害的詞語，海嘯對岸的肥後也造成甚大災害。', en: '"Shimabara Calamity, Higo Misery" — the 1792 tsunami devastated both Shimabara and the Higo coast across the bay.' },
    ],
    highlights: [
      { ja: '天守閣内のキリシタン資料館 — 島原の乱やキリシタン弾圧の歴史を展示。', zhTw: '天守閣內的基督徒資料館 — 展示島原之亂與基督徒迫害的歷史。', en: 'Christian History Museum in the keep — exhibitions on the Shimabara Rebellion and persecution.' },
      { ja: '壮大な石垣と堀 — 小藩の分を超えた規模の石垣は島原の悲劇の象徴でもある。', zhTw: '壯大的石垣與護城河 — 超越小藩規模的石垣也是島原悲劇的象徵。', en: 'Grand stone walls and moats — their excessive scale for a small domain symbolizes Shimabara\'s tragedy.' },
      { ja: '武家屋敷通り — 清流が流れる水路沿いに武家屋敷が並ぶ風情ある町並み。', zhTw: '武家屋敷通 — 清流水渠沿岸排列武家屋敷的風情街景。', en: 'Samurai district — elegant residences lining a canal of clear spring water.' },
    ],
    architecture: [
      { ja: '五重五階の層塔型天守を中心に、三重の櫓を3基配した壮大な構え。', zhTw: '以五重五階層塔型天守為中心，配置3座三重櫓的壯大構造。', en: 'A grand complex with a five-story layered keep and three triple-story corner turrets.' },
      { ja: '高さ約15mの総石垣と幅約50mの水堀が城を取り囲む堅固な防御。', zhTw: '高約15公尺的全石垣與寬約50公尺的水壕環繞城郭的堅固防禦。', en: 'Solid defenses with ~15m stone walls and ~50m-wide water moats encircling the castle.' },
      { ja: '4万石の小藩には過大な規模で、築城による領民の疲弊が島原の乱の遠因となった。', zhTw: '對4萬石小藩而言過大的規模，築城導致領民疲弊成為島原之亂的遠因。', en: 'Disproportionately large for a 40,000-koku domain — the construction burden contributed to the rebellion.' },
    ],
  },
  // ── 九州 #93-97 ──
  {
    id: 'hitoyoshi', number: 93, regionId: 'kyushu',
    name: { ja: '人吉城', zhTw: '人吉城', en: 'Hitoyoshi Castle' },
    city: { ja: '人吉市', zhTw: '人吉市', en: 'Hitoyoshi' },
    prefecture: { ja: '熊本県', zhTw: '熊本縣', en: 'Kumamoto' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 25, y: 83 },
    illustration: { style: 'classic', tiers: 2, color: '#8b7e6b', roofColor: '#3d3d3d' },
    goshuin: { bg: '#e8dfd0', ink: '#2d2d2d', seal: '#b83a3a', crest: '#7a6520' },
    history: [
      { year: 1198, event: { ja: '相良長頼が人吉荘に入り、球磨川沿いの山に城を築いた。以後約700年にわたり相良氏が統治した。', zhTw: '相良長賴進入人吉莊，在球磨川沿岸的山上築城。此後約700年由相良氏統治。', en: 'Sagara Nagatomo entered Hitoyoshi and built a castle along the Kuma River; the Sagara ruled for about 700 years.' } },
      { year: 1600, event: { ja: '相良頼房は関ヶ原で東軍に付き、所領を安堵されて人吉藩を立てた。', zhTw: '相良賴房在關原之戰投身東軍，所領獲安堵而建立人吉藩。', en: 'Sagara Yorifusa sided with the Eastern army at Sekigahara and secured his domain, establishing the Hitoyoshi han.' } },
      { year: 1862, event: { ja: '幕末の近代化で三重櫓や石垣が大改修された。', zhTw: '幕末近代化時三重櫓與石垣進行大改修。', en: 'The triple turret and stone walls were significantly renovated during late-Edo modernization.' } },
      { year: 2020, event: { ja: '令和2年7月豪雨で球磨川が氾濫し、人吉城も石垣の崩落など甚大な被害を受けた。', zhTw: '令和2年7月豪雨球磨川氾濫，人吉城也遭受石垣崩塌等甚大災害。', en: 'The July 2020 torrential rains flooded the Kuma River, causing severe damage including stone wall collapse.' } },
    ],
    figures: [
      { ja: '相良長頼', zhTw: '相良長賴', en: 'Sagara Nagatomo', desc: { ja: '鎌倉時代に人吉に入り、約700年続く相良氏支配の基礎を築いた。', zhTw: '鎌倉時代進入人吉，奠定延續約700年的相良氏統治基礎。', en: 'Entered Hitoyoshi in the Kamakura era, founding the Sagara clan\'s roughly 700-year rule.' } },
      { ja: '相良頼房', zhTw: '相良賴房', en: 'Sagara Yorifusa', desc: { ja: '関ヶ原で東軍に付き人吉藩を立てた近世の相良家当主。', zhTw: '關原之戰投身東軍建立人吉藩的近世相良家當主。', en: 'Sagara lord who joined the Eastern army at Sekigahara and established Hitoyoshi domain.' } },
      { ja: '相良清兵衛', zhTw: '相良清兵衛', en: 'Sagara Seibei', desc: { ja: 'お家騒動「相良清兵衛事件」の中心人物。地下室遺構との関連が指摘されている。', zhTw: '家族糾紛「相良清兵衛事件」的核心人物。被指出與地下室遺構有關。', en: 'Central figure in the "Sagara Seibei Incident" succession crisis; linked to the mysterious underground chamber.' } },
    ],
    trivia: [
      { ja: '相良氏は鎌倉から明治まで約700年間同じ土地を治めた日本でも極めて稀な例。', zhTw: '相良氏從鎌倉到明治約700年統治同一土地，在日本極為罕見。', en: 'The Sagara ruled the same land for about 700 years from Kamakura to Meiji — extremely rare in Japan.' },
      { ja: '石垣の地下から発見された謎の地下室遺構は用途不明で、全国的にも類例がない。', zhTw: '從石垣地下發現的謎之地下室遺構用途不明，全國也無類例。', en: 'A mysterious underground chamber discovered beneath the stone walls — its purpose is unknown and unparalleled.' },
      { ja: '球磨川下りと合わせて楽しめる「日本三大急流」の景勝地。', zhTw: '可搭配球磨川泛舟一起享受的「日本三大急流」景勝地。', en: 'Enjoy the castle alongside Kuma River rafting — one of Japan\'s Three Great Rapid Rivers.' },
    ],
    highlights: [
      { ja: '球磨川沿いの石垣 — 清流と石垣が織りなす美しい風景。', zhTw: '球磨川沿岸石垣 — 清流與石垣交織的美麗風景。', en: 'Stone walls along the Kuma River — a beautiful landscape of clear water and stone.' },
      { ja: '地下室遺構 — 用途不明の謎に包まれた全国唯一の遺構。', zhTw: '地下室遺構 — 用途不明、充滿謎團的全國唯一遺構。', en: 'The underground chamber — a mysterious, purpose-unknown structure found nowhere else in Japan.' },
      { ja: '復元多門櫓と角櫓 — 武者返しの石垣の上に建つ復元建築。', zhTw: '復原多門櫓與角櫓 — 建於武者返石垣之上的復原建築。', en: 'Restored Tamon and corner turrets atop the "musha-gaeshi" (warrior-repelling) stone walls.' },
    ],
    architecture: [
      { ja: '球磨川と胸川を天然の堀として利用し、城山に石垣を築いた堅固な城。', zhTw: '將球磨川與胸川作為天然護城河利用，在城山築建石垣的堅固城郭。', en: 'A solid castle using the Kuma and Mune Rivers as natural moats with stone walls on castle hill.' },
      { ja: '「武者返し」と呼ばれる石垣上部の反り出し（はね出し石垣）は人吉城の特徴。', zhTw: '被稱為「武者返」的石垣上部反翹（跳出石垣）是人吉城的特徵。', en: 'The "musha-gaeshi" overhanging stone walls — a distinctive Hitoyoshi Castle feature.' },
      { ja: '石垣下から発見された地下室遺構は井戸と排水路を備えた謎の空間。', zhTw: '從石垣下發現的地下室遺構是配有水井與排水溝的神秘空間。', en: 'The underground chamber beneath the walls contains a well and drainage — a space of unknown purpose.' },
    ],
  },
  {
    id: 'oita-funai', number: 94, regionId: 'kyushu',
    name: { ja: '大分府内城', zhTw: '大分府內城', en: 'Ōita Funai Castle' },
    city: { ja: '大分市', zhTw: '大分市', en: 'Ōita' },
    prefecture: { ja: '大分県', zhTw: '大分縣', en: 'Oita' },
    type: 'hirajiro', designation: '県指定史跡',
    position: { x: 29, y: 81 },
    illustration: { style: 'classic', tiers: 2, color: '#8b8b7e', roofColor: '#3d3d3d' },
    goshuin: { bg: '#e8dfd0', ink: '#2d2d2d', seal: '#b83a3a', crest: '#6b5a14' },
    history: [
      { year: 1597, event: { ja: '福原直高が大分川河口の三角州に府内城の築城を開始した。', zhTw: '福原直高在大分川河口的三角洲開始築建府內城。', en: 'Fukuhara Naotaka began building Funai Castle on the delta at the mouth of the Ōita River.' } },
      { year: 1601, event: { ja: '竹中重利が入封し城を完成させ、四重天守を築いた。', zhTw: '竹中重利入封完成城郭，築建四重天守。', en: 'Takenaka Shigeyoshi entered and completed the castle with a four-story keep.' } },
      { year: 1743, event: { ja: '大火で天守が焼失し、以後再建されなかった。', zhTw: '大火燒毀天守，此後未再重建。', en: 'Fire destroyed the keep, which was never rebuilt.' } },
      { year: 1945, event: { ja: '大分空襲で現存していた櫓の多くが焼失。人質櫓と宗門櫓のみが残った。', zhTw: '大分空襲中現存的多數櫓燒毀。僅人質櫓與宗門櫓倖存。', en: 'Air raids destroyed most surviving turrets; only the Hostage and Religion turrets remain.' } },
    ],
    figures: [
      { ja: '大友宗麟', zhTw: '大友宗麟', en: 'Ōtomo Sōrin', desc: { ja: '府内（大分）を拠点にキリシタン大名として南蛮貿易と布教を推進した北九州の覇者。', zhTw: '以府內（大分）為據點、作為基督徒大名推動南蠻貿易與傳教的北九州霸者。', en: 'Christian daimyo who made Funai his base for foreign trade and evangelism; ruler of northern Kyushu.' } },
      { ja: '竹中重利', zhTw: '竹中重利', en: 'Takenaka Shigeyoshi', desc: { ja: '府内城を完成させた藩主で、竹中半兵衛の甥にあたる武将。', zhTw: '完成府內城的藩主，竹中半兵衛之姪。', en: 'Lord who completed Funai Castle; nephew of the famous strategist Takenaka Hanbei.' } },
      { ja: 'フランシスコ・ザビエル', zhTw: '方濟各·沙勿略', en: 'Francis Xavier', desc: { ja: '1551年に府内を訪れキリスト教を布教したイエズス会宣教師。大友宗麟の庇護を受けた。', zhTw: '1551年來到府內傳教的耶穌會宣教師。受大友宗麟庇護。', en: 'Jesuit missionary who visited Funai in 1551 to spread Christianity under Ōtomo Sōrin\'s patronage.' } },
    ],
    trivia: [
      { ja: '大友宗麟時代の府内は日本有数の国際都市で、ポルトガル人が「東洋のローマ」と呼んだ。', zhTw: '大友宗麟時代的府內是日本數一數二的國際都市，葡萄牙人稱之為「東方的羅馬」。', en: 'Under Ōtomo Sōrin, Funai was one of Japan\'s most international cities — Portuguese called it the "Rome of the East."' },
      { ja: '「宗門櫓」の名はキリシタン取締りに関連した使用に由来するとされる。', zhTw: '「宗門櫓」之名據說源於與基督徒取締相關的用途。', en: 'The "Religion Turret" is named for its alleged use in monitoring Christians.' },
    ],
    highlights: [
      { ja: '人質櫓と宗門櫓 — 空襲を免れた2棟の現存櫓。', zhTw: '人質櫓與宗門櫓 — 倖免於空襲的2棟現存櫓。', en: 'Hostage Turret and Religion Turret — two turrets that survived the air raids.' },
      { ja: '堀と石垣のライトアップ — 大分駅から徒歩圏内で夜の城散策が楽しめる。', zhTw: '護城河與石垣的夜間點燈 — 從大分站步行可達，可享受夜間城郭散步。', en: 'Illuminated moats and walls — enjoy an evening castle stroll just minutes from Ōita Station.' },
      { ja: '大友氏館跡 — 近年発掘が進む大友宗麟時代の館跡も近隣にある。', zhTw: '大友氏館遺跡 — 近年持續發掘的大友宗麟時代館遺跡也在附近。', en: 'The Ōtomo clan mansion ruins — an ongoing excavation site from Sōrin\'s era nearby.' },
    ],
    architecture: [
      { ja: '大分川河口の三角州を利用した輪郭式の海城で、堀には海水が引き込まれていた。', zhTw: '利用大分川河口三角洲的輪郭式海城，護城河引入海水。', en: 'A concentric sea castle on the river delta — seawater once filled the moats.' },
      { ja: '四重天守は焼失したが、水堀と石垣が整然と残り城の規模を今に伝える。', zhTw: '四重天守已燒毀，但水壕與石垣整齊留存，傳達城的規模至今。', en: 'Though the four-story keep is gone, water moats and stone walls still convey the castle\'s impressive scale.' },
    ],
  },
  {
    id: 'oka', number: 95, regionId: 'kyushu',
    name: { ja: '岡城', zhTw: '岡城', en: 'Oka Castle' },
    city: { ja: '竹田市', zhTw: '竹田市', en: 'Taketa' },
    prefecture: { ja: '大分県', zhTw: '大分縣', en: 'Oita' },
    type: 'yamajiro', designation: '国指定史跡',
    position: { x: 28, y: 82 },
    illustration: { style: 'yamashiro', tiers: 2, color: '#8b8b7e', roofColor: '#3d4a3d' },
    goshuin: { bg: '#e8dfd0', ink: '#2d3d2d', seal: '#b83a3a', crest: '#7a6520' },
    history: [
      { year: 1185, event: { ja: '緒方惟栄が源義経を迎え入れるために築いたのが始まりとされる。', zhTw: '緒方惟榮為迎接源義經而築建被認為是城之起源。', en: 'Said to have been built by Ogata Koreyoshi to shelter Minamoto no Yoshitsune.' } },
      { year: 1594, event: { ja: '中川秀成が入封し、断崖上の城を総石垣の近世城郭に大改修した。', zhTw: '中川秀成入封，將斷崖上的城大規模改修為全石垣的近世城郭。', en: 'Nakagawa Hideshige entered and transformed the cliff-top castle into a fully stone-walled fortress.' } },
      { year: 1871, event: { ja: '廃城令により建物は取り壊されたが、断崖上の壮大な石垣群が残された。', zhTw: '因廢城令建築物被拆除，但斷崖上的壯大石垣群被保留。', en: 'Buildings were demolished but the grand stone walls atop the cliffs were left standing.' } },
      { year: 1901, event: { ja: '竹田出身の作曲家・滝廉太郎が荒れた岡城の石垣を見て「荒城の月」を作曲したとされる。', zhTw: '出身竹田的作曲家瀧廉太郎看到荒廢岡城的石垣而譜寫「荒城之月」。', en: 'Composer Taki Rentarō, from Taketa, is said to have composed "Moon over the Ruined Castle" inspired by Oka\'s ruins.' } },
    ],
    figures: [
      { ja: '中川秀成', zhTw: '中川秀成', en: 'Nakagawa Hideshige', desc: { ja: '岡藩初代藩主で岡城を壮大な石垣の城に改修した。', zhTw: '岡藩初代藩主，將岡城改修為壯大石垣之城。', en: 'First lord of Oka domain who rebuilt the castle with its grand stone walls.' } },
      { ja: '滝廉太郎', zhTw: '瀧廉太郎', en: 'Taki Rentarō', desc: { ja: '竹田出身の明治の作曲家。「荒城の月」「花」「箱根八里」など日本音楽史に残る名曲を遺した。', zhTw: '出身竹田的明治作曲家。留下「荒城之月」「花」「箱根八里」等日本音樂史名曲。', en: 'Meiji-era composer from Taketa who left masterpieces like "Moon over the Ruined Castle" and "Hana."' } },
      { ja: '志賀親次', zhTw: '志賀親次', en: 'Shiga Chikatsugu', desc: { ja: '島津軍の侵攻に対し岡城を守り抜いた豊後の勇将。', zhTw: '抵擋島津軍入侵、守住岡城的豐後勇將。', en: 'Brave lord of Bungo who successfully defended Oka Castle against the Shimazu invasion.' } },
    ],
    trivia: [
      { ja: '「荒城の月」のモデルとなった城で、城址には滝廉太郎の銅像が建つ。', zhTw: '「荒城之月」的原型之城，城址立有瀧廉太郎的銅像。', en: 'The castle that inspired "Moon over the Ruined Castle" — a bronze statue of Taki Rentarō stands on the grounds.' },
      { ja: '標高325mの断崖上に築かれた「天空の城」で、朝霧に包まれる幻想的な姿は竹田城に匹敵。', zhTw: '築於標高325公尺斷崖上的「天空之城」，被朝霧籠罩的夢幻姿態可與竹田城匹敵。', en: 'A "castle in the sky" at 325m on sheer cliffs; its morning mist views rival those of Takeda Castle.' },
      { ja: '入城時にもらえる巻物型の登城手形がユニークで城ファンに人気。', zhTw: '入城時獲得的卷軸型登城手形獨特且受城迷歡迎。', en: 'The scroll-shaped entry pass given at the gate is a unique and popular souvenir among castle fans.' },
    ],
    highlights: [
      { ja: '断崖上の壮大な石垣 — 阿蘇の凝灰岩を用いた石垣が断崖に沿って連なる絶景。', zhTw: '斷崖上壯大的石垣 — 使用阿蘇凝灰岩的石垣沿斷崖連綿的絕景。', en: 'Grand stone walls on sheer cliffs — volcanic tuff walls tracing the precipice in a stunning panorama.' },
      { ja: '滝廉太郎像 — 「荒城の月」の作曲者を偲ぶ銅像と楽曲が流れるスポット。', zhTw: '瀧廉太郎像 — 緬懷「荒城之月」作曲者的銅像與播放樂曲的景點。', en: 'Taki Rentarō statue — a bronze figure with "Moon over the Ruined Castle" playing nearby.' },
      { ja: '秋の紅葉 — 石垣と紅葉のコントラストは日本屈指の城址紅葉スポット。', zhTw: '秋天紅葉 — 石垣與紅葉的對比是日本屈指可數的城址紅葉景點。', en: 'Autumn foliage — the contrast of stone walls and red leaves makes this a top castle-ruin viewing spot.' },
    ],
    architecture: [
      { ja: '標高325mの断崖上に本丸・二の丸・三の丸・西の丸を配した壮大な山城。', zhTw: '在標高325公尺斷崖上配置本丸、二之丸、三之丸、西之丸的壯大山城。', en: 'A grand mountain castle at 325m with honmaru, ni-no-maru, san-no-maru, and nishi-no-maru on cliff tops.' },
      { ja: '阿蘇山の火砕流堆積物（溶結凝灰岩）の自然の断崖を城壁として利用。', zhTw: '利用阿蘇山火碎流沉積物（熔結凝灰岩）的天然斷崖作為城牆。', en: 'Natural cliffs of welded tuff from Mt. Aso\'s pyroclastic flows serve as castle walls.' },
      { ja: '大手門から本丸まで約750mの石垣が連なる壮大なスケール。', zhTw: '從大手門到本丸約750公尺的石垣連綿的壯大規模。', en: 'An impressive 750m stretch of stone walls from the main gate to the honmaru.' },
    ],
  },
  {
    id: 'obi', number: 96, regionId: 'kyushu',
    name: { ja: '飫肥城', zhTw: '飫肥城', en: 'Obi Castle' },
    city: { ja: '日南市', zhTw: '日南市', en: 'Nichinan' },
    prefecture: { ja: '宮崎県', zhTw: '宮崎縣', en: 'Miyazaki' },
    type: 'hirayama', designation: '市指定史跡',
    position: { x: 30, y: 85 },
    illustration: { style: 'classic', tiers: 2, color: '#8b7e6b', roofColor: '#3d3d3d' },
    goshuin: { bg: '#e8dfd0', ink: '#2d2d2d', seal: '#b83a3a', crest: '#7a6520' },
    history: [
      { year: 1484, event: { ja: '伊東祐国が島津氏から飫肥城を奪取しようと攻撃を開始し、以後約100年にわたる伊東・島津の飫肥争奪戦が始まった。', zhTw: '伊東祐國開始攻擊欲從島津氏奪取飫肥城，此後約100年伊東與島津的飫肥爭奪戰開始。', en: 'Itō Sukekuni launched attacks to take Obi from the Shimazu, beginning a roughly 100-year struggle between the two clans.' } },
      { year: 1588, event: { ja: '伊東祐兵が豊臣秀吉の九州征伐の功で飫肥城を取り戻し、以後伊東氏が明治まで統治した。', zhTw: '伊東祐兵因豐臣秀吉九州征伐之功奪回飫肥城，此後伊東氏統治至明治。', en: 'Itō Suketake recovered Obi through Hideyoshi\'s Kyushu campaign; the Itō ruled until the Meiji era.' } },
      { year: 1978, event: { ja: '大手門が復元され、城下町の整備も進み「九州の小京都」として観光地になった。', zhTw: '大手門復原，城下町整備也推進，以「九州小京都」成為觀光地。', en: 'The main gate was restored and the castle town preserved, becoming a tourist destination as "Kyushu\'s Little Kyoto."' } },
    ],
    figures: [
      { ja: '伊東祐兵', zhTw: '伊東祐兵', en: 'Itō Suketake', desc: { ja: '飫肥藩初代藩主。一度は日向を追われたが秀吉の九州征伐で飫肥を取り戻した。', zhTw: '飫肥藩初代藩主。一度被逐出日向，但因秀吉九州征伐奪回飫肥。', en: 'First lord of Obi; once exiled from Hyūga, he reclaimed Obi through Hideyoshi\'s Kyushu campaign.' } },
      { ja: '小村寿太郎', zhTw: '小村壽太郎', en: 'Komura Jutarō', desc: { ja: '飫肥出身の外交官でポーツマス条約を締結した明治日本の外務大臣。', zhTw: '出身飫肥的外交官，締結朴次茅斯條約的明治日本外務大臣。', en: 'Obi-born diplomat and Foreign Minister who negotiated the Treaty of Portsmouth ending the Russo-Japanese War.' } },
    ],
    trivia: [
      { ja: '飫肥は「九州の小京都」と呼ばれ、武家屋敷と石垣が続く風情ある城下町。', zhTw: '飫肥被稱為「九州小京都」，武家屋敷與石垣連綿的風情城下町。', en: 'Obi is called "Kyushu\'s Little Kyoto" for its atmospheric castle town of samurai houses and stone walls.' },
      { ja: '飫肥城は天守のない城で、藩主は「松尾の丸」と呼ばれる御殿に住んだ。', zhTw: '飫肥城是沒有天守的城，藩主住在被稱為「松尾之丸」的御殿。', en: 'Obi had no keep — the lords lived in a palace called Matsuo-no-maru.' },
      { ja: '食べ歩きマップで有名な「飫肥天ぷら」は城下町の名物グルメ。', zhTw: '以美食地圖聞名的「飫肥天婦羅」是城下町的名物美食。', en: '"Obi tempura" on the food-walking map is the castle town\'s signature snack.' },
    ],
    highlights: [
      { ja: '復元大手門と飫肥杉の苔むした石段 — 静かな佇まいが美しい城の入口。', zhTw: '復原大手門與長滿青苔的飫肥杉石階 — 寧靜佇立的美麗城之入口。', en: 'Restored main gate and mossy stone steps among Obi cedars — a serene and beautiful castle entrance.' },
      { ja: '松尾の丸 — 復元された藩主の御殿で、当時の暮らしぶりを体感。', zhTw: '松尾之丸 — 復原的藩主御殿，可體驗當時的生活。', en: 'Matsuo-no-maru — the restored lord\'s palace offering a glimpse of feudal life.' },
      { ja: '飫肥城下町の武家屋敷散策 — 食べ歩きチケットで名物料理も楽しめる。', zhTw: '飫肥城下町武家屋敷散步 — 可用美食券享受名物料理。', en: 'Castle town stroll through samurai residences — use a food-walking ticket to sample local dishes.' },
    ],
    architecture: [
      { ja: '天守を持たず、旧本丸には飫肥杉が植林され独特の景観を形成。', zhTw: '不設天守，舊本丸種植飫肥杉形成獨特景觀。', en: 'No keep was built; Obi cedars planted in the former honmaru create a unique landscape.' },
      { ja: '飫肥石と呼ばれる地元産の凝灰岩を用いた独特の石垣が城域全体に広がる。', zhTw: '使用被稱為飫肥石的當地凝灰岩的獨特石垣遍布城域。', en: 'Distinctive walls of local "Obi stone" (volcanic tuff) spread throughout the castle grounds.' },
    ],
  },
  {
    id: 'kagoshima', number: 97, regionId: 'kyushu',
    name: { ja: '鹿児島城', zhTw: '鹿兒島城', en: 'Kagoshima Castle' },
    city: { ja: '鹿児島市', zhTw: '鹿兒島市', en: 'Kagoshima' },
    prefecture: { ja: '鹿児島県', zhTw: '鹿兒島縣', en: 'Kagoshima' },
    type: 'hirajiro', designation: '県指定史跡',
    position: { x: 27, y: 88 },
    illustration: { style: 'classic', tiers: 2, color: '#8b7e6b', roofColor: '#3d3d3d' },
    goshuin: { bg: '#e8dfd0', ink: '#2d2d2d', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1601, event: { ja: '島津家久が城山の麓に「鶴丸城」（鹿児島城）を築いた。天守を持たない居館形式は「城をもって守りとなさず、人をもって城となす」という島津の方針。', zhTw: '島津家久在城山山麓築建「鶴丸城」（鹿兒島城）。不設天守的居館形式體現「不以城為守，以人為城」的島津方針。', en: 'Shimazu Iehisa built "Tsurumaru Castle" at the foot of Shiroyama. Its keep-less design reflected the Shimazu motto: "Men, not walls, are our defense."' } },
      { year: 1863, event: { ja: '薩英戦争でイギリス艦隊の砲撃を受け、城も被害を受けた。', zhTw: '薩英戰爭中遭受英國艦隊砲擊，城也受到損害。', en: 'The castle was damaged by British naval bombardment during the Anglo-Satsuma War.' } },
      { year: 1877, event: { ja: '西南戦争の最終決戦で城山が戦場となり、西郷隆盛がこの地で最期を迎えた。城も焼失。', zhTw: '西南戰爭最終決戰中城山成為戰場，西鄉隆盛在此地迎來最後一刻。城也燒毀。', en: 'Shiroyama became the final battleground of the Satsuma Rebellion; Saigō Takamori met his end here. The castle burned.' } },
      { year: 2020, event: { ja: '御楼門が147年ぶりに木造復元され、鹿児島の新たなシンボルとなった。', zhTw: '御樓門時隔147年木造復原，成為鹿兒島的新象徵。', en: 'The Gorōmon gate was rebuilt in wood after 147 years, becoming a new symbol of Kagoshima.' } },
    ],
    figures: [
      { ja: '島津斉彬', zhTw: '島津齊彬', en: 'Shimazu Nariakira', desc: { ja: '幕末の名君で集成館事業など殖産興業を推進し日本の近代化に先鞭をつけた。', zhTw: '幕末名君，推動集成館事業等殖產興業，為日本近代化開先河。', en: 'Enlightened Bakumatsu lord who pioneered Japan\'s industrialization through the Shūseikan projects.' } },
      { ja: '西郷隆盛', zhTw: '西鄉隆盛', en: 'Saigō Takamori', desc: { ja: '「維新の三傑」の一人で明治維新の立役者。西南戦争で城山に散った「最後の武士」。', zhTw: '「維新三傑」之一的明治維新功臣。在西南戰爭中於城山殞命的「最後的武士」。', en: 'One of the "Three Great Nobles" of the Restoration; the "last samurai" who fell at Shiroyama in the Satsuma Rebellion.' } },
      { ja: '大久保利通', zhTw: '大久保利通', en: 'Ōkubo Toshimichi', desc: { ja: '維新の三傑の一人で明治新政府の中心人物。盟友の西郷とは西南戦争で袂を分かった。', zhTw: '維新三傑之一的明治新政府核心人物。與盟友西鄉在西南戰爭中分道揚鑣。', en: 'Core figure of the Meiji government and "Three Great Nobles"; parted ways with his friend Saigō during the rebellion.' } },
    ],
    trivia: [
      { ja: '天守を持たない異色の城で、島津氏は「外城制度」（麓制度）により領内113の麓で防衛した。', zhTw: '不設天守的異色城郭，島津氏以「外城制度」（麓制度）在領內113個麓進行防禦。', en: 'An unusual castle with no keep — the Shimazu defended their domain through 113 "fumoto" satellite fortifications.' },
      { ja: '石垣に残る西南戦争と薩英戦争の弾痕が二つの戦争の歴史を物語る。', zhTw: '石垣上留存的西南戰爭與薩英戰爭彈痕訴說兩場戰爭的歷史。', en: 'Bullet scars from both the Satsuma Rebellion and Anglo-Satsuma War mark the stone walls.' },
      { ja: '背後の城山は西郷隆盛が最期を迎えた地で、展望台から桜島が一望できる。', zhTw: '後方城山是西鄉隆盛迎來最後一刻之地，從展望台可一覽櫻島。', en: 'Shiroyama behind the castle is where Saigō fell; the lookout offers panoramic views of Sakurajima.' },
    ],
    highlights: [
      { ja: '御楼門 — 2020年に木造復元された日本最大級の城門。', zhTw: '御樓門 — 2020年木造復原的日本最大級城門。', en: 'Gorōmon Gate — one of Japan\'s largest castle gates, rebuilt in wood in 2020.' },
      { ja: '城山展望台 — 西郷最期の地から望む桜島と錦江湾の絶景。', zhTw: '城山展望台 — 從西鄉最後之地眺望櫻島與錦江灣的絕景。', en: 'Shiroyama lookout — stunning views of Sakurajima and Kinko Bay from where Saigō made his last stand.' },
      { ja: '黎明館 — 城跡に建つ鹿児島県の総合歴史博物館。', zhTw: '黎明館 — 建於城跡的鹿兒島縣綜合歷史博物館。', en: 'Reimeikan Museum — Kagoshima\'s comprehensive history museum built on the castle grounds.' },
    ],
    architecture: [
      { ja: '天守を持たず、本丸と二の丸を水堀で囲んだ簡素な居館形式の城。', zhTw: '不設天守，以水壕環繞本丸與二之丸的簡素居館形式城郭。', en: 'A simple residential-style castle with no keep — just honmaru and ni-no-maru enclosed by water moats.' },
      { ja: '背後の城山（標高107m）を天然の詰城として利用する独自の防御構想。', zhTw: '將後方城山（標高107公尺）作為天然的詰城利用的獨特防禦構想。', en: 'Shiroyama (107m) behind the castle served as a natural retreat fortress — a unique defense concept.' },
      { ja: '御楼門は高さ約20m・幅約20mの堂々たる規模で、薩摩の威容を示す。', zhTw: '御樓門高約20公尺、寬約20公尺的堂堂規模，展現薩摩的威容。', en: 'The Gorōmon gate — roughly 20m tall and 20m wide — projects the dignity of the Satsuma domain.' },
    ],
  },
  // ── 沖縄 #98-99 ──
  {
    id: 'nakijin', number: 98, regionId: 'kyushu',
    name: { ja: '今帰仁城', zhTw: '今歸仁城', en: 'Nakijin Castle' },
    city: { ja: '今帰仁村', zhTw: '今歸仁村', en: 'Nakijin' },
    prefecture: { ja: '沖縄県', zhTw: '沖繩縣', en: 'Okinawa' },
    type: 'gusuku', designation: '世界遺産',
    position: { x: 15, y: 92 },
    illustration: { style: 'gusuku', tiers: 1, color: '#d4c4a0', roofColor: '#8b7e6b' },
    goshuin: { bg: '#f0e6d3', ink: '#5c4a3d', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1200, event: { ja: '三山時代に北山王の居城として築かれ、沖縄本島北部を支配する拠点となった。', zhTw: '三山時代作為北山王的居城築建，成為支配沖繩本島北部的據點。', en: 'Built as the seat of the Hokuzan (North Mountain) king during the Sanzan era, controlling northern Okinawa.' } },
      { year: 1416, event: { ja: '中山王・尚巴志の攻撃で北山が滅亡し、今帰仁城は落城した。', zhTw: '中山王尚巴志攻擊下北山滅亡，今歸仁城陷落。', en: 'Hokuzan fell to Chūzan King Shō Hashi\'s attack and Nakijin Castle was captured.' } },
      { year: 1609, event: { ja: '薩摩藩の琉球侵攻で城は炎上し、軍事拠点としての機能を失った。', zhTw: '薩摩藩侵攻琉球時城被焚毀，失去軍事據點功能。', en: 'The castle was burned during the Satsuma invasion of Ryūkyū and lost its military function.' } },
      { year: 2000, event: { ja: '「琉球王国のグスク及び関連遺産群」の一つとしてユネスコ世界遺産に登録された。', zhTw: '作為「琉球王國城堡以及相關遺產群」之一登錄為聯合國教科文組織世界遺產。', en: 'Inscribed as a UNESCO World Heritage Site as part of "Gusuku Sites and Related Properties of the Kingdom of Ryukyu."' } },
    ],
    figures: [
      { ja: '北山王（攀安知）', zhTw: '北山王（攀安知）', en: 'Hokuzan King (Hanyanchi)', desc: { ja: '今帰仁城を拠点に沖縄北部を支配した最後の北山王。尚巴志に滅ぼされた。', zhTw: '以今歸仁城為據點支配沖繩北部的最後北山王。被尚巴志所滅。', en: 'Last king of Hokuzan who ruled northern Okinawa from Nakijin; destroyed by Shō Hashi.' } },
      { ja: '尚巴志', zhTw: '尚巴志', en: 'Shō Hashi', desc: { ja: '三山を統一し琉球王国を建国した中山王。今帰仁城を攻略して北山を滅ぼした。', zhTw: '統一三山建立琉球王國的中山王。攻克今歸仁城滅北山。', en: 'Chūzan king who unified the Three Kingdoms into the Ryūkyū Kingdom by conquering Nakijin.' } },
    ],
    trivia: [
      { ja: '全長約1.5kmに及ぶ石垣は沖縄のグスクの中でも最大規模。', zhTw: '全長約1.5公里的石垣在沖繩城堡中也是最大規模。', en: 'The 1.5km stone walls are the largest among all Okinawan gusuku.' },
      { ja: '毎年1月に「今帰仁グスク桜まつり」が開催され、日本一早い桜祭りとして人気。', zhTw: '每年1月舉辦「今歸仁城櫻花祭」，以日本最早的櫻花祭聞名。', en: 'The January "Nakijin Gusuku Cherry Blossom Festival" is famous as Japan\'s earliest cherry blossom festival.' },
      { ja: '城壁の曲線美は「万里の長城」に例えられることもある。', zhTw: '城牆的曲線美有時被比喻為「萬里長城」。', en: 'The curved beauty of the walls is sometimes compared to the Great Wall of China.' },
    ],
    highlights: [
      { ja: '全長1.5kmの美しい石垣群 — 琉球石灰岩の曲線が美しい。', zhTw: '全長1.5公里的美麗石垣群 — 琉球石灰岩的曲線優美。', en: 'Beautiful 1.5km stone walls — elegant curves of Ryūkyū limestone.' },
      { ja: '平郎門 — 今帰仁城の正門で、アーチ型の石門が琉球建築の美を伝える。', zhTw: '平郎門 — 今歸仁城正門，拱型石門傳達琉球建築之美。', en: 'Heiroomon gate — the main entrance with an arched stone gate showcasing Ryūkyūan architecture.' },
      { ja: '寒緋桜のライトアップ — 1月のカンヒザクラと城壁のライトアップは幻想的。', zhTw: '寒緋櫻的夜間點燈 — 1月寒緋櫻與城牆的燈光夢幻。', en: 'Illuminated cherry blossoms — the January Taiwan cherry and castle wall lighting is magical.' },
    ],
    architecture: [
      { ja: '琉球石灰岩を用いた曲線的な城壁は「野面積み」と「切石積み」を組み合わせた独自の工法。', zhTw: '使用琉球石灰岩的曲線型城牆結合「野面積」與「切石積」的獨特工法。', en: 'Curved walls of Ryūkyū limestone combining rough-stone and dressed-stone masonry techniques.' },
      { ja: '城壁に囲まれた8つの郭が尾根に沿って階段状に配置された壮大な縄張り。', zhTw: '被城牆環繞的8個郭沿山脊階梯狀配置的壯大配置。', en: 'Eight walled enclosures arranged in terraces along the ridge — a grand layout.' },
      { ja: '御嶽（うたき）と呼ばれる聖域が城内に点在し、グスク特有の祭祀空間を形成。', zhTw: '被稱為御嶽的聖域散布城內，形成城堡特有的祭祀空間。', en: 'Sacred "utaki" sites throughout the castle form ritual spaces characteristic of gusuku.' },
    ],
  },
  {
    id: 'nakagusuku-gusuku', number: 99, regionId: 'kyushu',
    name: { ja: '中城城', zhTw: '中城城', en: 'Nakagusuku Castle' },
    city: { ja: '中城村', zhTw: '中城村', en: 'Nakagusuku' },
    prefecture: { ja: '沖縄県', zhTw: '沖繩縣', en: 'Okinawa' },
    type: 'gusuku', designation: '世界遺産',
    position: { x: 16, y: 94 },
    illustration: { style: 'gusuku', tiers: 1, color: '#d4c4a0', roofColor: '#8b7e6b' },
    goshuin: { bg: '#f0e6d3', ink: '#5c4a3d', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1440, event: { ja: '護佐丸が座喜味城から中城城に移り、城を大拡張して六つの郭を持つ堅固な城に築き上げた。', zhTw: '護佐丸從座喜味城遷至中城城，大規模擴建為擁有六個郭的堅固城郭。', en: 'Gosamaru moved from Zakimi Castle to Nakagusuku, greatly expanding it into a formidable fortress with six enclosures.' } },
      { year: 1458, event: { ja: '阿麻和利の策略により護佐丸は謀反の疑いをかけられ、中城城で自害した。', zhTw: '因阿麻和利的計謀護佐丸被懷疑謀反，在中城城自盡。', en: 'Gosamaru was falsely accused of treason through Amawari\'s scheming and took his own life at Nakagusuku.' } },
      { year: 1853, event: { ja: 'ペリー提督の遠征隊が中城城を訪れ、その石造建築の見事さに感嘆した記録が残る。', zhTw: '乘特提督的遠征隊訪問中城城，留有對其石造建築精美讚嘆的記錄。', en: 'Perry\'s expedition visited Nakagusuku and recorded their admiration for its magnificent stone architecture.' } },
      { year: 2000, event: { ja: '「琉球王国のグスク及び関連遺産群」としてユネスコ世界遺産に登録された。', zhTw: '作為「琉球王國城堡以及相關遺產群」登錄為聯合國教科文組織世界遺產。', en: 'Inscribed as a UNESCO World Heritage Site within "Gusuku Sites and Related Properties."' } },
    ],
    figures: [
      { ja: '護佐丸', zhTw: '護佐丸', en: 'Gosamaru', desc: { ja: '築城の名手として名高い按司で、座喜味城と中城城を築いた琉球屈指の武将。', zhTw: '以築城名手聞名的按司，築建座喜味城與中城城的琉球屈指武將。', en: 'A renowned castle-building aji (lord) who built both Zakimi and Nakagusuku — one of Ryūkyū\'s greatest warriors.' } },
      { ja: '阿麻和利', zhTw: '阿麻和利', en: 'Amawari', desc: { ja: '勝連城の按司で、護佐丸を策略で滅ぼした後に自身も首里王府に討伐された。', zhTw: '勝連城的按司，以計謀滅護佐丸後自身也被首里王府討伐。', en: 'Lord of Katsuren who schemed Gosamaru\'s downfall, then was himself destroyed by the Shuri royal court.' } },
      { ja: 'ペリー提督', zhTw: '乘特提督', en: 'Commodore Perry', desc: { ja: '1853年に琉球を訪れ中城城を視察。城の精巧な石造建築に驚嘆した記録が残る。', zhTw: '1853年訪問琉球視察中城城。留有對城之精巧石造建築驚嘆的記錄。', en: 'Visited Ryūkyū in 1853 and inspected Nakagusuku; his expedition recorded amazement at the stonework.' } },
    ],
    trivia: [
      { ja: 'ペリー艦隊の報告書に「この地域で最も美しい石造建築」と記された。', zhTw: '在乘特艦隊報告書中被記載為「此地區最美的石造建築」。', en: 'Perry\'s expedition report called it "the finest stone architecture in the region."' },
      { ja: '琉球のグスクの中でも石積み技術が最も高度で、「相方積み」「布積み」「野面積み」の3種を使い分け。', zhTw: '在琉球城堡中石砌技術最為高超，區分使用「相方積」「布積」「野面積」三種工法。', en: 'The most technically advanced stonework among Ryūkyū gusuku, using three distinct masonry styles.' },
      { ja: '城からは太平洋と東シナ海の両方を見渡せる絶好のロケーション。', zhTw: '從城可同時眺望太平洋與東海的絕佳位置。', en: 'A superb location with views of both the Pacific Ocean and the East China Sea.' },
    ],
    highlights: [
      { ja: '六つの郭からなる壮大な石垣群 — 護佐丸の築城技術の粋が結集。', zhTw: '由六個郭構成的壯大石垣群 — 集護佐丸築城技術之大成。', en: 'Grand stone walls across six enclosures — the pinnacle of Gosamaru\'s castle-building art.' },
      { ja: '一の郭からの太平洋と東シナ海の大パノラマ。', zhTw: '從一之郭眺望太平洋與東海的大全景。', en: 'Panoramic views of both the Pacific and East China Sea from the first enclosure.' },
      { ja: 'アーチ門の精巧な石組み — 琉球独自の精密な石造アーチ。', zhTw: '拱門的精巧石砌 — 琉球獨特的精密石造拱門。', en: 'Exquisitely fitted stone arched gates — uniquely precise Ryūkyūan masonry.' },
    ],
    architecture: [
      { ja: '六つの郭が東西に連なる連郭式の縄張りで、標高約160mの丘陵上に築かれた。', zhTw: '六個郭東西相連的連郭式配置，築於標高約160公尺的丘陵上。', en: 'Six enclosures linked east to west in a linear layout atop a ~160m hilltop.' },
      { ja: '「相方積み」「布積み」「野面積み」の3つの石積み技法を時代順に見比べられる。', zhTw: '可依年代順序比較「相方積」「布積」「野面積」三種石砌技法。', en: 'Three masonry techniques — aikata, nuno, and nozura — can be compared chronologically within the walls.' },
      { ja: '精巧なアーチ門は楔石を用いた高度な技術で、本土の城にはない琉球独自の建築。', zhTw: '精巧的拱門運用楔石的高度技術，為本土城郭所無的琉球獨特建築。', en: 'Sophisticated arched gates using keystones — a uniquely Ryūkyūan technique not found in mainland castles.' },
    ],
  },
  // ────────────────────────────────
  // 続日本100名城 #101-200
  // ────────────────────────────────
  // ── 北海道 #101-102 ──
  {
    id: 'shikotsu-tate', number: 101, regionId: 'hokkaido',
    name: { ja: '志苔館', zhTw: '志苔館', en: 'Shinori-date' },
    city: { ja: '函館市', zhTw: '函館市', en: 'Hakodate' },
    prefecture: { ja: '北海道', zhTw: '北海道', en: 'Hokkaido' },
    type: 'castle-ruin', designation: '国指定史跡',
    position: { x: 77, y: 18 },
    illustration: { style: 'ruins', tiers: 1, color: '#5b9a8b', roofColor: '#3d5c4a' },
    goshuin: { bg: '#e8dfd0', ink: '#2d4a3e', seal: '#b83a3a', crest: '#7a6520' },
    history: [
      { year: 1400, event: { ja: '和人（本州の日本人）が蝦夷地南部に進出し、志苔館を含む道南十二館を築いた。', zhTw: '和人（本州日本人）進入蝦夷地南部，築建包含志苔館在內的道南十二館。', en: 'Japanese settlers expanded into southern Ezo and built the Twelve Tate of Dōnan, including Shinori.' } },
      { year: 1457, event: { ja: 'コシャマインの戦いでアイヌ勢力が蜂起し、志苔館を含む10の館が攻め落とされた。', zhTw: '柯沙邁因之戰中愛努勢力起義，包含志苔館在內的10座館被攻陷。', en: 'Ainu forces rose up in Koshamain\'s Revolt, capturing 10 tate including Shinori.' } },
      { year: 1968, event: { ja: '館跡から約37万枚もの中国銭が大量出土し、北方交易の拠点であったことが判明。', zhTw: '從館遺跡出土約37萬枚中國錢幣，證實為北方貿易的據點。', en: 'About 370,000 Chinese coins were excavated, revealing the site as a major northern trade hub.' } },
    ],
    figures: [
      { ja: '小林良景', zhTw: '小林良景', en: 'Kobayashi Yoshikage', desc: { ja: '志苔館の館主で、コシャマインの戦いで討ち死にしたとされる。', zhTw: '志苔館的館主，據說在柯沙邁因之戰中戰死。', en: 'Lord of Shinori-date, said to have been killed in Koshamain\'s Revolt.' } },
      { ja: 'コシャマイン', zhTw: '柯沙邁因', en: 'Koshamain', desc: { ja: '和人の横暴に対し蜂起したアイヌの指導者。道南十二館の大半を攻め落とした。', zhTw: '因和人橫暴而起義的愛努族領袖。攻陷道南十二館的大半。', en: 'Ainu leader who rose against Japanese oppression, capturing most of the Twelve Tate.' } },
    ],
    trivia: [
      { ja: '出土した約37万枚の渡来銭は北海道の中世交易史を塗り替える大発見だった。', zhTw: '出土的約37萬枚渡來錢是改寫北海道中世交易史的重大發現。', en: 'The 370,000 imported coins rewrote the history of medieval trade in Hokkaido.' },
      { ja: '道南十二館の中で最も東に位置し、蝦夷地の和人社会の東端を示す。', zhTw: '位於道南十二館最東端，標示蝦夷地和人社會的東界。', en: 'The easternmost of the Twelve Tate, marking the eastern edge of Japanese settlement in Ezo.' },
    ],
    highlights: [
      { ja: '館跡からの津軽海峡の眺望 — 対岸の下北半島が見渡せる。', zhTw: '從館遺跡眺望津輕海峽 — 可遠望對岸下北半島。', en: 'Views of the Tsugaru Strait from the ruins — the Shimokita Peninsula is visible across the water.' },
      { ja: '空堀と土塁 — 中世の防御構造が良好な状態で残存。', zhTw: '空壕與土壘 — 中世防禦結構保存良好。', en: 'Dry moats and earthworks — medieval defenses in excellent condition.' },
    ],
    architecture: [
      { ja: '方形の曲輪を空堀と土塁で囲む道南十二館に共通する中世館の形式。', zhTw: '以空壕與土壘環繞方形曲輪的道南十二館共通中世館形式。', en: 'A square compound enclosed by dry moats and earthworks — the typical Dōnan Tate style.' },
      { ja: '海岸段丘の先端に築かれ、海からの防御と交易の両方に適した立地。', zhTw: '築於海岸段丘先端，兼具海上防禦與貿易的適當位置。', en: 'Built on a coastal terrace tip, ideal for both sea defense and maritime trade.' },
    ],
  },
  {
    id: 'kaminokuni-katsuyama', number: 102, regionId: 'hokkaido',
    name: { ja: '上ノ国勝山館', zhTw: '上之國勝山館', en: 'Kaminokuni Katsuyama-date' },
    city: { ja: '上ノ国町', zhTw: '上之國町', en: 'Kaminokuni' },
    prefecture: { ja: '北海道', zhTw: '北海道', en: 'Hokkaido' },
    type: 'castle-ruin', designation: '国指定史跡',
    position: { x: 73, y: 19 },
    illustration: { style: 'ruins', tiers: 1, color: '#5b9a8b', roofColor: '#3d5c4a' },
    goshuin: { bg: '#e8dfd0', ink: '#2d4a3e', seal: '#b83a3a', crest: '#6b5a14' },
    history: [
      { year: 1470, event: { ja: '蠣崎信広（松前氏の祖）が日本海を見下ろす丘陵上に勝山館を築いた。', zhTw: '蠣崎信廣（松前氏之祖）在俯瞰日本海的丘陵上築建勝山館。', en: 'Kakizaki Nobuhiro (ancestor of the Matsumae) built Katsuyama-date on a hill overlooking the Sea of Japan.' } },
      { year: 1514, event: { ja: '蠣崎氏が松前に拠点を移し、勝山館は次第に衰退した。', zhTw: '蠣崎氏將據點遷至松前，勝山館逐漸衰退。', en: 'The Kakizaki moved their base to Matsumae, and Katsuyama-date gradually declined.' } },
      { year: 1979, event: { ja: '発掘調査でアイヌと和人が共生していた証拠が発見され大きな注目を集めた。', zhTw: '考古調查發現愛努與和人共生的證據，引起極大關注。', en: 'Excavations revealed evidence of Ainu and Japanese coexistence, attracting major academic attention.' } },
    ],
    figures: [
      { ja: '蠣崎信広', zhTw: '蠣崎信廣', en: 'Kakizaki Nobuhiro', desc: { ja: 'コシャマインの乱を鎮圧し蠣崎氏（後の松前氏）の勢力を確立した武将。', zhTw: '鎮壓柯沙邁因之亂、確立蠣崎氏（後來的松前氏）勢力的武將。', en: 'Warrior who suppressed Koshamain\'s Revolt and established the Kakizaki (later Matsumae) clan\'s power.' } },
    ],
    trivia: [
      { ja: '和人とアイヌの墓が隣り合って発見され、中世における共生社会の証拠とされる。', zhTw: '和人與愛努的墓地相鄰被發現，被視為中世共生社會的證據。', en: 'Japanese and Ainu graves found side by side — evidence of coexistence in the medieval period.' },
      { ja: '出土品には中国陶磁器やガラス玉など北方交易を示す品々が含まれる。', zhTw: '出土品包含中國陶瓷器與玻璃珠等顯示北方貿易的物品。', en: 'Excavated items include Chinese ceramics and glass beads testifying to northern trade routes.' },
    ],
    highlights: [
      { ja: '日本海の絶景 — 館跡から望む日本海と夕日の眺望。', zhTw: '日本海絕景 — 從館遺跡眺望日本海與夕陽。', en: 'Stunning Sea of Japan views and sunsets from the ruins.' },
      { ja: '発掘現場の見学 — アイヌと和人の共生を物語る遺跡群。', zhTw: '參觀考古現場 — 訴說愛努與和人共生的遺跡群。', en: 'Tour the excavation site — ruins that tell the story of Ainu-Japanese coexistence.' },
    ],
    architecture: [
      { ja: '日本海を望む標高約100mの丘陵に築かれた中世の山城式館。', zhTw: '築於面向日本海、標高約100公尺丘陵上的中世山城式館。', en: 'A medieval mountain-fort style tate on a ~100m hill overlooking the Sea of Japan.' },
      { ja: '主郭と副郭を空堀で区切り、斜面には段状の曲輪を配置。', zhTw: '以空壕區隔主郭與副郭，斜面配置階段狀曲輪。', en: 'Main and secondary enclosures separated by dry moats, with terraced compounds on the slopes.' },
    ],
  },
  // ── 東北 #103-110 ──
  {
    id: 'namioka', number: 103, regionId: 'tohoku',
    name: { ja: '浪岡城', zhTw: '浪岡城', en: 'Namioka Castle' },
    city: { ja: '青森市', zhTw: '青森市', en: 'Aomori' },
    prefecture: { ja: '青森県', zhTw: '青森縣', en: 'Aomori' },
    type: 'castle-ruin', designation: '国指定史跡',
    position: { x: 76, y: 28 },
    illustration: { style: 'ruins', tiers: 1, color: '#6b8e7b', roofColor: '#3d5c4a' },
    goshuin: { bg: '#e8dfd0', ink: '#2d4a3e', seal: '#b83a3a', crest: '#6b5a14' },
    history: [
      { year: 1460, event: { ja: '北畠氏（南朝の名門）の末裔・浪岡北畠氏が陸奥国に築城した。', zhTw: '北畠氏（南朝名門）末裔浪岡北畠氏在陸奧國築城。', en: 'The Namioka Kitabatake, descendants of the illustrious Southern Court clan, built this castle in Mutsu.' } },
      { year: 1578, event: { ja: '大浦為信（後の津軽為信）の攻撃を受け落城し、浪岡北畠氏は滅亡した。', zhTw: '遭大浦為信（後來的津輕為信）攻擊陷落，浪岡北畠氏滅亡。', en: 'Fell to Ōura Tamenobu (later Tsugaru Tamenobu), and the Namioka Kitabatake were destroyed.' } },
      { year: 1940, event: { ja: '国の史跡に指定され、中世城郭としての価値が認められた。', zhTw: '被指定為國家史跡，中世城郭的價值獲認可。', en: 'Designated a National Historic Site, recognized for its value as a medieval castle.' } },
    ],
    figures: [
      { ja: '浪岡北畠具永', zhTw: '浪岡北畠具永', en: 'Namioka Kitabatake Tomonaga', desc: { ja: '浪岡城を拡張し全盛期を築いた浪岡北畠氏の当主。', zhTw: '擴建浪岡城並建立全盛期的浪岡北畠氏當主。', en: 'Head of the Namioka Kitabatake who expanded the castle and built the clan\'s golden age.' } },
      { ja: '津軽為信', zhTw: '津輕為信', en: 'Tsugaru Tamenobu', desc: { ja: '浪岡城を攻め滅ぼし津軽地方を統一した戦国武将。弘前藩の祖。', zhTw: '攻滅浪岡城統一津輕地方的戰國武將。弘前藩之祖。', en: 'Sengoku warrior who destroyed Namioka Castle and unified Tsugaru; founder of the Hirosaki domain.' } },
    ],
    trivia: [
      { ja: '南朝の名門・北畠氏の血脈が津軽の地で400年以上続いた珍しい例。', zhTw: '南朝名門北畠氏的血脈在津輕之地延續400年以上的罕見案例。', en: 'A rare case of the prestigious Southern Court Kitabatake lineage surviving over 400 years in distant Tsugaru.' },
      { ja: '城跡からは京都系の陶磁器が多数出土し、中央との文化的つながりを示す。', zhTw: '城跡出土大量京都系陶瓷器，顯示與中央的文化聯繫。', en: 'Numerous Kyoto-style ceramics were unearthed, showing cultural ties to the capital.' },
    ],
    highlights: [
      { ja: '水堀と土塁の遺構 — 中世の防御構造が良好に保存された城跡。', zhTw: '水壕與土壘遺構 — 中世防禦結構保存良好的城跡。', en: 'Well-preserved medieval water moats and earthworks.' },
      { ja: '浪岡城跡案内所 — 出土品の展示と城の歴史を学べる施設。', zhTw: '浪岡城跡導覽所 — 可觀賞出土品並學習城歷史的設施。', en: 'Namioka Castle visitor center with excavated artifacts and historical exhibits.' },
    ],
    architecture: [
      { ja: '内館・北館・東館・猿楽館・新館の5つの曲輪からなる中世の多郭式城郭。', zhTw: '由內館、北館、東館、猿樂館、新館5個曲輪構成的中世多郭式城郭。', en: 'A medieval multi-compound castle with five enclosures: Uchi, Kita, Higashi, Sarugaku, and Shin.' },
      { ja: '深い水堀と高い土塁で各曲輪が独立した防御力を持つ構造。', zhTw: '以深水壕與高土壘使各曲輪擁有獨立防禦力的結構。', en: 'Deep water moats and high earthworks give each compound independent defensive capability.' },
    ],
  },
  {
    id: 'kunohe', number: 104, regionId: 'tohoku',
    name: { ja: '九戸城', zhTw: '九戶城', en: 'Kunohe Castle' },
    city: { ja: '二戸市', zhTw: '二戶市', en: 'Ninohe' },
    prefecture: { ja: '岩手県', zhTw: '岩手縣', en: 'Iwate' },
    type: 'hirayama', designation: '国指定史跡',
    position: { x: 78, y: 32 },
    illustration: { style: 'classic', tiers: 1, color: '#6b8e7b', roofColor: '#3d5c4a' },
    goshuin: { bg: '#e8dfd0', ink: '#2d4a3e', seal: '#b83a3a', crest: '#7a6520' },
    history: [
      { year: 1400, event: { ja: '南部一族の九戸氏が馬淵川と白鳥川の合流地点に城を築いた。', zhTw: '南部一族的九戶氏在馬淵川與白鳥川匯流處築城。', en: 'The Kunohe, a branch of the Nanbu clan, built a castle at the confluence of the Mabuchi and Shiratori Rivers.' } },
      { year: 1591, event: { ja: '九戸政実が南部家の家督争いで蜂起（九戸政実の乱）。豊臣秀吉が6万の大軍を派遣して鎮圧 — 天下統一最後の戦いとなった。', zhTw: '九戶政實在南部家家督爭奪中起兵（九戶政實之亂）。豐臣秀吉派遣6萬大軍鎮壓 — 成為天下統一最後的戰役。', en: 'Kunohe Masazane rebelled in a Nanbu succession dispute; Hideyoshi sent 60,000 troops — the last battle of Japan\'s unification.' } },
      { year: 1597, event: { ja: '蒲生氏郷の後を受けた南部信直が城を改修し「福岡城」と改名したが、後に盛岡へ移った。', zhTw: '繼蒲生氏鄉之後的南部信直改修城並改名為「福岡城」，後遷至盛岡。', en: 'Nanbu Nobunao renovated the castle and renamed it "Fukuoka Castle" before later moving to Morioka.' } },
    ],
    figures: [
      { ja: '九戸政実', zhTw: '九戶政實', en: 'Kunohe Masazane', desc: { ja: '南部家の家督を争い蜂起した武将。5千の兵で6万の豊臣軍と戦い「北の関ヶ原」と称される。', zhTw: '爭奪南部家家督而起兵的武將。以5千兵力對抗6萬豐臣軍，被稱為「北之關原」。', en: 'Warrior who rebelled over the Nanbu succession; his 5,000 against 60,000 is called the "Sekigahara of the North."' } },
      { ja: '蒲生氏郷', zhTw: '蒲生氏鄉', en: 'Gamō Ujisato', desc: { ja: '九戸の乱鎮圧の先鋒を務めた豊臣秀吉配下の名将。', zhTw: '擔任鎮壓九戶之亂先鋒的豐臣秀吉麾下名將。', en: 'Distinguished Toyotomi general who led the vanguard in suppressing the Kunohe Rebellion.' } },
    ],
    trivia: [
      { ja: '九戸政実の乱は豊臣政権による「天下統一最後の戦い」とされる。', zhTw: '九戶政實之亂被認為是豐臣政權「天下統一最後的戰役」。', en: 'The Kunohe Rebellion is considered the final battle in the Toyotomi unification of Japan.' },
      { ja: '降伏した政実は和議を信じて城を出たが、だまし討ちにされたという悲劇の武将。', zhTw: '投降的政實信任和議出城，卻被詐殺的悲劇武將。', en: 'Masazane surrendered trusting peace terms but was betrayed and executed — a tragic warrior.' },
    ],
    highlights: [
      { ja: '本丸跡と石垣 — 豊臣軍をも手こずらせた堅固な城の遺構。', zhTw: '本丸遺跡與石垣 — 連豐臣軍也難以攻破的堅固城遺構。', en: 'Honmaru ruins and stone walls — remains of the fortress that stymied even Toyotomi\'s army.' },
      { ja: '九戸城ガイダンス施設 — 九戸の乱と東北の戦国史を紹介。', zhTw: '九戶城導覽設施 — 介紹九戶之亂與東北戰國史。', en: 'Kunohe Castle guidance center — exhibitions on the rebellion and Tōhoku\'s Sengoku history.' },
    ],
    architecture: [
      { ja: '馬淵川と白鳥川に挟まれた天然の要害に、本丸・二の丸・若狭館を配置。', zhTw: '在馬淵川與白鳥川夾攻的天然要害上配置本丸、二之丸、若狹館。', en: 'Natural strongpoint between the Mabuchi and Shiratori Rivers with honmaru, ni-no-maru, and Wakasa enclosure.' },
      { ja: '二重の堀と土塁で守られた城域は6万の軍勢でも即座に攻め落とせなかった。', zhTw: '以雙重壕溝與土壘防守的城域，6萬大軍也無法立即攻陷。', en: 'Double moats and earthworks proved so formidable that 60,000 troops could not immediately take it.' },
    ],
  },
  {
    id: 'wakimoto', number: 105, regionId: 'tohoku',
    name: { ja: '脇本城', zhTw: '脇本城', en: 'Wakimoto Castle' },
    city: { ja: '男鹿市', zhTw: '男鹿市', en: 'Oga' },
    prefecture: { ja: '秋田県', zhTw: '秋田縣', en: 'Akita' },
    type: 'yamajiro', designation: '国指定史跡',
    position: { x: 74, y: 34 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#6b8e7b', roofColor: '#3d5c4a' },
    goshuin: { bg: '#e8dfd0', ink: '#2d4a3e', seal: '#b83a3a', crest: '#6b5a14' },
    history: [
      { year: 1500, event: { ja: '安東氏（安藤氏）が男鹿半島の付け根に壮大な山城を築き、出羽国北部の拠点とした。', zhTw: '安東氏（安藤氏）在男鹿半島根部築建壯大山城，作為出羽國北部的據點。', en: 'The Andō clan built a grand mountain castle at the base of the Oga Peninsula as their northern Dewa stronghold.' } },
      { year: 1577, event: { ja: '安東愛季が脇本城を本拠とし、出羽国北部で最大の勢力を誇った。', zhTw: '安東愛季以脇本城為本據，在出羽國北部擁有最大勢力。', en: 'Andō Chikasue made Wakimoto his headquarters, commanding the greatest power in northern Dewa.' } },
      { year: 1590, event: { ja: '豊臣秀吉の奥州仕置で安東氏は改易され、脇本城は廃城となった。', zhTw: '豐臣秀吉的奧州仕置中安東氏被改易，脇本城廢城。', en: 'The Andō were dispossessed during Hideyoshi\'s Ōshū Shioki, and Wakimoto was abandoned.' } },
    ],
    figures: [
      { ja: '安東愛季', zhTw: '安東愛季', en: 'Andō Chikasue', desc: { ja: '脇本城を拠点に北出羽を支配し「日の本将軍」を名乗った安東氏の全盛期を築いた当主。', zhTw: '以脇本城為據點支配北出羽、自稱「日之本將軍」的安東氏全盛期當主。', en: 'Lord who styled himself "Shogun of Hinomoto" and built the Andō clan\'s zenith from Wakimoto.' } },
    ],
    trivia: [
      { ja: '城からは日本海と男鹿半島の絶景が広がり、交易と防衛の両面で優れた立地。', zhTw: '從城可眺望日本海與男鹿半島的絕景，貿易與防禦兼備的優越位置。', en: 'Commanding views of the Sea of Japan and Oga Peninsula — ideal for both trade and defense.' },
      { ja: '安東氏は「蝦夷管領」を称し北方交易を掌握した海の豪族。', zhTw: '安東氏自稱「蝦夷管領」掌握北方貿易的海上豪族。', en: 'The Andō, self-styled "Ezo Governors," were sea lords who controlled northern maritime trade.' },
    ],
    highlights: [
      { ja: '内館からの日本海一望 — 男鹿半島と日本海の壮大な眺望。', zhTw: '從內館一望日本海 — 男鹿半島與日本海的壯大眺望。', en: 'Panoramic Sea of Japan views from the inner enclosure — the Oga Peninsula stretching below.' },
      { ja: '整備された散策路 — 中世山城の縄張りを巡る歩きやすいコース。', zhTw: '整備完善的散步路 — 巡遊中世山城配置的好走路線。', en: 'Well-maintained walking trails through the medieval mountain castle layout.' },
    ],
    architecture: [
      { ja: '男鹿半島の付け根の丘陵に内館・馬乗り場・天下道を配した壮大な山城。', zhTw: '在男鹿半島根部丘陵配置內館、馬乘場、天下道的壯大山城。', en: 'A grand mountain castle with inner enclosure, riding ground, and "Tenka Road" on the hills at Oga\'s base.' },
      { ja: '広大な城域は東西約1.4km・南北約0.7kmに及び、東北有数の中世山城。', zhTw: '廣大城域東西約1.4公里、南北約0.7公里，為東北數一數二的中世山城。', en: 'The vast castle area spans ~1.4km east-west and ~0.7km north-south — one of Tōhoku\'s largest medieval mountain castles.' },
    ],
  },
  {
    id: 'akita-castle', number: 106, regionId: 'tohoku',
    name: { ja: '秋田城', zhTw: '秋田城', en: 'Akita Castle' },
    city: { ja: '秋田市', zhTw: '秋田市', en: 'Akita' },
    prefecture: { ja: '秋田県', zhTw: '秋田縣', en: 'Akita' },
    type: 'castle-ruin', designation: '国指定史跡',
    position: { x: 74, y: 36 },
    illustration: { style: 'ruins', tiers: 1, color: '#6b8e7b', roofColor: '#4a5c4a' },
    goshuin: { bg: '#e8dfd0', ink: '#2d4a3e', seal: '#b83a3a', crest: '#6b5a14' },
    history: [
      { year: 733, event: { ja: '出羽柵が現在地に移され、奈良時代の東北経営の北限拠点「秋田城」となった。', zhTw: '出羽柵遷移至現址，成為奈良時代東北經營的北限據點「秋田城」。', en: 'The Dewa Stockade was relocated here, becoming "Akita Castle" — the northernmost outpost of Nara-period Tōhoku administration.' } },
      { year: 780, event: { ja: '蝦夷の反乱で秋田城が攻撃を受け、律令国家の東北支配の困難さを露呈した。', zhTw: '蝦夷叛亂攻擊秋田城，暴露律令國家東北支配的困難。', en: 'Emishi rebels attacked Akita Castle, exposing the difficulties of Ritsuryō state control in the northeast.' } },
      { year: 2001, event: { ja: '復元された古代の水洗式トイレが話題を呼び、奈良時代の生活文化の高さを示した。', zhTw: '復原的古代沖水式廁所成為話題，展示奈良時代生活文化的高度。', en: 'A reconstructed ancient flush toilet drew attention, showcasing the sophisticated Nara-period lifestyle.' } },
    ],
    figures: [
      { ja: '大伴家持', zhTw: '大伴家持', en: 'Ōtomo no Yakamochi', desc: { ja: '万葉歌人として名高い文武兼備の官人。秋田城の維持にも関わった出羽国の要人。', zhTw: '以萬葉歌人聞名的文武兼備官人。也參與秋田城維護的出羽國要人。', en: 'Famed Man\'yōshū poet and official involved in maintaining Akita Castle in Dewa.' } },
    ],
    trivia: [
      { ja: '奈良時代の水洗式トイレが発見され「日本最古の水洗トイレ」として大きな話題に。', zhTw: '發現奈良時代的沖水式廁所，以「日本最古老的沖水廁所」成為大話題。', en: 'Japan\'s oldest flush toilet was discovered here — a Nara-period innovation that made headlines.' },
      { ja: '大陸との交易品が出土し、秋田城が国際交流の窓口でもあったことがわかる。', zhTw: '出土大陸貿易品，可知秋田城也是國際交流的窗口。', en: 'Continental trade goods were unearthed, revealing Akita Castle as a gateway for international exchange.' },
    ],
    highlights: [
      { ja: '復元された古代水洗トイレ — 日本最古とされる水洗式トイレの復元展示。', zhTw: '復原的古代沖水廁所 — 被認為是日本最古老沖水式廁所的復原展示。', en: 'Reconstructed ancient flush toilet — a display of what may be Japan\'s oldest flushing lavatory.' },
      { ja: '復元東門と築地塀 — 古代城柵の威容を今に伝える復元建築。', zhTw: '復原東門與築地塀 — 傳達古代城柵威容的復原建築。', en: 'Reconstructed East Gate and rammed-earth wall — evoking the grandeur of the ancient fortress.' },
    ],
    architecture: [
      { ja: '方約550mの外郭と内郭からなる古代城柵。政庁・倉庫群・兵舎が整然と配置。', zhTw: '約550公尺見方的外郭與內郭構成的古代城柵。政廳、倉庫群、兵舍整齊配置。', en: 'An ancient palisaded fortress ~550m square with organized government offices, storehouses, and barracks.' },
      { ja: '築地塀で囲まれた律令国家の北方拠点としての整然とした都市計画。', zhTw: '以築地塀環繞的律令國家北方據點的整齊都市規劃。', en: 'An orderly urban plan enclosed by rammed-earth walls — a Ritsuryō state northern outpost.' },
    ],
  },
  {
    id: 'tsuruoka-jo', number: 107, regionId: 'tohoku',
    name: { ja: '鶴ヶ岡城', zhTw: '鶴岡城', en: 'Tsurugaoka Castle' },
    city: { ja: '鶴岡市', zhTw: '鶴岡市', en: 'Tsuruoka' },
    prefecture: { ja: '山形県', zhTw: '山形縣', en: 'Yamagata' },
    type: 'hirajiro', designation: '県指定史跡',
    position: { x: 72, y: 38 },
    illustration: { style: 'classic', tiers: 2, color: '#f5f0e8', roofColor: '#4a4a4a' },
    goshuin: { bg: '#f0e6d3', ink: '#2d2d2d', seal: '#c53d43', crest: '#8b6914' },
    history: [
      { year: 1622, event: { ja: '酒井忠勝が庄内藩主として入封し、鶴ヶ岡城を藩の居城として整備した。', zhTw: '酒井忠勝作為莊內藩主入封，整備鶴岡城為藩的居城。', en: 'Sakai Tadakatsu entered as lord of Shōnai domain and established Tsurugaoka as the seat of his government.' } },
      { year: 1840, event: { ja: '天保の「三方領知替え」に反対する庄内藩士と領民の抗議運動が起き、幕府が撤回した。', zhTw: '反對天保「三方領知替」的莊內藩士與領民抗議運動，幕府撤回。', en: 'Shōnai samurai and commoners protested the Tenpō domain transfer order; the shogunate reversed it.' } },
      { year: 1868, event: { ja: '戊辰戦争で庄内藩は奥羽越列藩同盟に加盟し新政府軍と交戦したが、降伏後に寛大な処分を受けた。', zhTw: '戊辰戰爭中莊內藩加入奧羽越列藩同盟與新政府軍交戰，投降後獲寬大處分。', en: 'Shōnai joined the northern alliance in the Boshin War; after surrender they received lenient treatment.' } },
    ],
    figures: [
      { ja: '酒井忠勝', zhTw: '酒井忠勝', en: 'Sakai Tadakatsu', desc: { ja: '庄内藩初代藩主で鶴ヶ岡城を整備した。徳川四天王・酒井忠次の孫。', zhTw: '莊內藩初代藩主，整備鶴岡城。德川四天王酒井忠次之孫。', en: 'First lord of Shōnai and grandson of Tokugawa\'s "Four Heavenly Kings" member Sakai Tadatsugu.' } },
      { ja: '西郷隆盛', zhTw: '西鄉隆盛', en: 'Saigō Takamori', desc: { ja: '戊辰戦争で庄内藩に寛大な処置を取り、庄内の人々から深く敬慕された。', zhTw: '戊辰戰爭中對莊內藩採取寬大處置，深受莊內人民敬慕。', en: 'Showed mercy to Shōnai after the Boshin War, earning deep reverence from the local people.' } },
    ],
    trivia: [
      { ja: '戊辰戦争後、西郷の寛大さに感激した庄内の人々は西郷を深く尊敬し「南洲神社」を建立した。', zhTw: '戊辰戰爭後，感動於西鄉寬大的莊內人民深敬西鄉並建立「南洲神社」。', en: 'Grateful for Saigō\'s mercy, Shōnai people built the Nanshū Shrine in his honor.' },
      { ja: '城跡は現在「鶴岡公園」として整備され、桜の名所として知られる。', zhTw: '城跡現整備為「鶴岡公園」，以櫻花名所聞名。', en: 'The ruins are now Tsuruoka Park, known for cherry blossoms.' },
    ],
    highlights: [
      { ja: '致道博物館 — 旧藩校致道館など庄内の歴史文化を集めた博物館群。', zhTw: '致道博物館 — 匯集舊藩校致道館等莊內歷史文化的博物館群。', en: 'Chidō Museum — a museum complex featuring the former domain school and Shōnai cultural heritage.' },
      { ja: '荘内神社 — 城の本丸跡に建つ酒井家を祀る神社。', zhTw: '莊內神社 — 建於城本丸遺跡上祭祀酒井家的神社。', en: 'Shōnai Shrine — dedicated to the Sakai lords, built on the honmaru site.' },
    ],
    architecture: [
      { ja: '本丸を二重の水堀で囲む典型的な平城で、天守は築かれなかった。', zhTw: '以雙重水壕環繞本丸的典型平城，未築天守。', en: 'A typical flatland castle with double water moats around the honmaru; no keep was built.' },
      { ja: '総面積約26万㎡の広大な城域を持ち、庄内の政治・経済の中心だった。', zhTw: '擁有約26萬平方公尺廣大城域，為莊內政治經濟中心。', en: 'A vast ~260,000㎡ castle area that served as Shōnai\'s political and economic center.' },
    ],
  },
  {
    id: 'yonezawa', number: 108, regionId: 'tohoku',
    name: { ja: '米沢城', zhTw: '米澤城', en: 'Yonezawa Castle' },
    city: { ja: '米沢市', zhTw: '米澤市', en: 'Yonezawa' },
    prefecture: { ja: '山形県', zhTw: '山形縣', en: 'Yamagata' },
    type: 'hirajiro', designation: '市指定史跡',
    position: { x: 74, y: 40 },
    illustration: { style: 'classic', tiers: 2, color: '#f5f0e8', roofColor: '#4a4a4a' },
    goshuin: { bg: '#f0e6d3', ink: '#2d2d2d', seal: '#c53d43', crest: '#c48a2a' },
    history: [
      { year: 1238, event: { ja: '長井時広が置賜地方に入り、現在の米沢城の地に館を築いたのが始まり。', zhTw: '長井時廣進入置賜地方，在現今米澤城之地築館為始。', en: 'Nagai Tokihiro entered the Okitama region and built a residence at the site of present-day Yonezawa Castle.' } },
      { year: 1601, event: { ja: '上杉景勝が会津120万石から米沢30万石に減封され、米沢城が上杉氏の居城となった。', zhTw: '上杉景勝從會津120萬石減封至米澤30萬石，米澤城成為上杉氏居城。', en: 'Uesugi Kagekatsu was reduced from 1.2M koku at Aizu to 300K koku at Yonezawa; the castle became the Uesugi seat.' } },
      { year: 1767, event: { ja: '上杉鷹山が17歳で藩主に就任し、質素倹約と殖産興業の大改革を断行した。', zhTw: '上杉鷹山17歲就任藩主，斷行質素節儉與殖產興業的大改革。', en: 'Uesugi Yōzan became lord at 17 and launched radical reforms of frugality and industrial development.' } },
      { year: 1873, event: { ja: '廃城令で建物はすべて取り壊され、現在は松が岬公園と上杉神社となっている。', zhTw: '因廢城令建築物全數拆除，現為松之岬公園與上杉神社。', en: 'All buildings were demolished; the site is now Matsugasaki Park and Uesugi Shrine.' } },
    ],
    figures: [
      { ja: '上杉景勝', zhTw: '上杉景勝', en: 'Uesugi Kagekatsu', desc: { ja: '上杉謙信の養子で米沢藩の祖。関ヶ原で西軍に付き大幅に減封された。', zhTw: '上杉謙信養子，米澤藩之祖。關原之戰投身西軍被大幅減封。', en: 'Adoptive son of Uesugi Kenshin and founder of the Yonezawa domain; drastically reduced after siding with the West at Sekigahara.' } },
      { ja: '直江兼続', zhTw: '直江兼續', en: 'Naoe Kanetsugu', desc: { ja: '「愛」の兜で知られる上杉景勝の名参謀。家康への「直江状」が関ヶ原の遠因に。', zhTw: '以「愛」字頭盔聞名的上杉景勝名參謀。致家康的「直江狀」為關原之戰的遠因。', en: 'Kagekatsu\'s famed advisor, known for his "Love" helmet; his letter to Ieyasu helped trigger Sekigahara.' } },
      { ja: '上杉鷹山', zhTw: '上杉鷹山', en: 'Uesugi Yōzan', desc: { ja: '「なせば成る」の名言で知られる名君。破綻寸前の米沢藩財政を立て直した。J・F・ケネディが最も尊敬する日本人と称した。', zhTw: '以「為之則成」名言聞名的名君。重建瀕臨破產的米澤藩財政。J・F・乃迺迪稱其為最尊敬的日本人。', en: 'Famed lord known for "Where there\'s a will, there\'s a way"; he rescued Yonezawa\'s finances. JFK reportedly called him the most admired Japanese leader.' } },
    ],
    trivia: [
      { ja: '上杉鷹山の「なせば成る なさねば成らぬ何事も」は日本人の座右の銘として広く知られる。', zhTw: '上杉鷹山的「為之則成 不為則不成」作為日本人的座右銘廣為人知。', en: 'Yōzan\'s motto "Where there\'s a will, there\'s a way" is one of Japan\'s most beloved proverbs.' },
      { ja: 'ケネディ大統領が「最も尊敬する日本人」に上杉鷹山を挙げたとされる逸話は有名。', zhTw: '據說甘迺迪總統將上杉鷹山列為「最尊敬的日本人」的軼事很有名。', en: 'President Kennedy allegedly named Uesugi Yōzan the Japanese leader he most admired.' },
      { ja: '米沢牛は鷹山が藩政改革で導入した畜産事業がルーツとされる。', zhTw: '米澤牛據說源於鷹山藩政改革中引入的畜產事業。', en: 'Yonezawa beef traces its origins to the livestock industry Yōzan introduced in his domain reforms.' },
    ],
    highlights: [
      { ja: '上杉神社 — 上杉謙信を祀る城跡に建つ神社。', zhTw: '上杉神社 — 祭祀上杉謙信、建於城跡上的神社。', en: 'Uesugi Shrine — dedicated to Uesugi Kenshin, built on the castle grounds.' },
      { ja: '上杉博物館 — 国宝「上杉本洛中洛外図屏風」など上杉家の宝物を収蔵。', zhTw: '上杉博物館 — 收藏國寶「上杉本洛中洛外圖屏風」等上杉家寶物。', en: 'Uesugi Museum — housing National Treasure "Rakuchū Rakugai-zu" screens and Uesugi heirlooms.' },
      { ja: '米沢上杉まつり — 毎年5月に川中島の戦いを再現する壮大な武者行列。', zhTw: '米澤上杉祭 — 每年5月重現川中島之戰的壯大武者遊行。', en: 'Yonezawa Uesugi Festival — a grand May reenactment of the Battle of Kawanakajima.' },
    ],
    architecture: [
      { ja: '本丸を二重の水堀で囲む平城で、天守は築かれず御三階櫓が代用された。', zhTw: '以雙重水壕環繞本丸的平城，未築天守而以御三階櫓代替。', en: 'A flatland castle with double water moats; a three-story turret served in place of a keep.' },
      { ja: '減封後も上杉の威信を示すべく、限られた石高で堂々たる城を維持した。', zhTw: '減封後仍以有限石高維持展現上杉威信的堂堂城郭。', en: 'Despite reduced income, the Uesugi maintained a dignified castle to preserve their prestige.' },
    ],
  },

  // ── 続100名城 東北(続) ──
  {
    id: 'miharu',
    number: 109,
    regionId: 'tohoku',
    name: { ja: '三春城', zhTw: '三春城', en: 'Miharu Castle' },
    city: { ja: '三春町', zhTw: '三春町', en: 'Miharu' },
    prefecture: { ja: '福島県', zhTw: '福島縣', en: 'Fukushima' },
    type: 'hirayama',
    designation: '県指定史跡',
    position: { x: 78, y: 44 },
    illustration: { style: 'ruins', tiers: 1, color: '#8B7355', roofColor: '#4A3728' },
    goshuin: { bg: '#faf5ef', ink: '#3d2b1f', seal: '#c44', crest: '#8B7355' },
    history: [
      { ja: '戦国時代、田村氏が居城とし、田村地方の政治的中心であった。', zhTw: '戰國時代田村氏以此為居城，為田村地方的政治中心。', en: 'During the Sengoku period, the Tamura clan made this their seat, and it served as the political center of the Tamura region.' },
      { ja: '田村清顕の娘・愛姫は伊達政宗の正室となり、伊達家との縁を深めた。', zhTw: '田村清顯之女愛姬成為伊達政宗的正室，加深了與伊達家的淵源。', en: 'Tamura Kiyoaki\'s daughter Megohime became Date Masamune\'s wife, deepening ties with the Date clan.' },
      { ja: '豊臣秀吉の奥州仕置により田村氏は改易、その後蒲生氏・上杉氏・加藤氏を経て秋田氏が藩主となった。', zhTw: '豐臣秀吉奧州處置導致田村氏被改易，之後經蒲生氏、上杉氏、加藤氏，最後由秋田氏擔任藩主。', en: 'After Hideyoshi\'s Ōshū campaign removed the Tamura, the castle passed through the Gamō, Uesugi, and Katō before the Akita clan became lords.' },
      { ja: '戊辰戦争では三春藩は奥羽越列藩同盟から離脱し、無血開城で新政府軍に降伏した。', zhTw: '戊辰戰爭中三春藩脫離奧羽越列藩同盟，無血開城向新政府軍投降。', en: 'During the Boshin War, Miharu domain broke from the Northern Alliance and surrendered without bloodshed.' },
    ],
    figures: [
      { ja: '田村清顕 — 戦国末期の田村氏当主。娘・愛姫を伊達政宗に嫁がせ、伊達との同盟を築いた。', zhTw: '田村清顯 — 戰國末期田村氏當主。將女兒愛姬嫁給伊達政宗，建立與伊達的同盟。', en: 'Tamura Kiyoaki — late Sengoku head of the Tamura; married his daughter Megohime to Date Masamune, forging an alliance.' },
      { ja: '愛姫 — 田村清顕の娘で伊達政宗の正室。波乱の戦国を生き抜いた才女。', zhTw: '愛姬 — 田村清顯之女、伊達政宗正室。歷經戰國動亂的才女。', en: 'Megohime — Kiyoaki\'s daughter and Masamune\'s wife; a resourceful woman who survived the turbulent Sengoku era.' },
      { ja: '秋田映季 — 三春藩最後の藩主。戊辰戦争で無血開城を決断し、藩を戦火から救った。', zhTw: '秋田映季 — 三春藩最後的藩主。戊辰戰爭中決定無血開城，拯救了藩免於戰火。', en: 'Akita Akisue — last lord of Miharu domain; his decision to surrender without a fight saved the domain from destruction.' },
    ],
    trivia: [
      { ja: '「三春」の名は梅・桃・桜が一度に咲くことに由来し、城下町は花の名所として名高い。', zhTw: '「三春」之名源於梅花、桃花、櫻花同時盛開，城下町以花之名所聞名。', en: 'The name "Miharu" (Three Springs) comes from plum, peach, and cherry blossoming simultaneously; the castle town is famed for flowers.' },
      { ja: '近くの三春滝桜は樹齢1000年超の枝垂れ桜で、日本三大桜の一つに数えられる。', zhTw: '附近的三春瀧櫻是樹齡超過1000年的垂枝櫻，被列為日本三大櫻之一。', en: 'Nearby Miharu Takizakura is a weeping cherry over 1,000 years old, one of Japan\'s three great cherry trees.' },
      { ja: '三春駒と三春張子人形は江戸時代から続く郷土玩具で、全国的に知られている。', zhTw: '三春駒和三春張子人偶是從江戶時代延續至今的鄉土玩具，在全國享有盛名。', en: 'Miharu-goma wooden horses and papier-mâché dolls are Edo-era folk toys known nationwide.' },
    ],
    highlights: [
      { ja: '本丸跡 — 石垣と土塁が残り、町を一望できる絶景ポイント。', zhTw: '本丸跡 — 留有石垣與土壘，可一覽全町的絕景地點。', en: 'Honmaru ruins — remaining stone walls and earthworks offer panoramic views of the town.' },
      { ja: '三春滝桜 — 城から車で10分、日本三大桜に数えられる国天然記念物。', zhTw: '三春瀧櫻 — 從城開車10分鐘，被列為日本三大櫻的國家天然紀念物。', en: 'Miharu Takizakura — a 10-minute drive away, a National Natural Monument and one of Japan\'s three great cherry trees.' },
      { ja: '三春城下町 — 藩政時代の面影を残す街並みと歴史民俗資料館。', zhTw: '三春城下町 — 保留藩政時代風貌的街道與歷史民俗資料館。', en: 'Miharu castle town — streets retaining their domain-era character, plus the local history museum.' },
    ],
    architecture: [
      { ja: '標高407mの丘陵に築かれた梯郭式の平山城で、本丸・二の丸・三の丸を階段状に配置。', zhTw: '建於標高407公尺丘陵上的梯郭式平山城，本丸、二之丸、三之丸呈階梯狀配置。', en: 'A tiered-enclosure hilltop castle at 407 m elevation, with honmaru, ni-no-maru, and san-no-maru arranged in steps.' },
      { ja: '石垣と土塁を巧みに組み合わせた縄張りで、東北地方の城郭技術を伝える。', zhTw: '巧妙結合石垣與土壘的繩張，傳承了東北地方的城郭技術。', en: 'The layout skillfully combines stone walls and earthworks, showcasing Tōhoku castle-building techniques.' },
      { ja: '天守は建てられず、本丸御殿が政庁として機能した。', zhTw: '未建天守，本丸御殿作為政廳使用。', en: 'No keep was built; the honmaru palace served as the seat of government.' },
    ],
  },
  {
    id: 'shiroishi',
    number: 110,
    regionId: 'tohoku',
    name: { ja: '白石城', zhTw: '白石城', en: 'Shiroishi Castle' },
    city: { ja: '白石市', zhTw: '白石市', en: 'Shiroishi' },
    prefecture: { ja: '宮城県', zhTw: '宮城縣', en: 'Miyagi' },
    type: 'hirayama',
    designation: '市指定史跡',
    position: { x: 77, y: 40 },
    illustration: { style: 'classic', tiers: 3, color: '#F5F5DC', roofColor: '#2F4F4F' },
    goshuin: { bg: '#f5f0e8', ink: '#2d3436', seal: '#c0392b', crest: '#2F4F4F' },
    history: [
      { ja: '蒲生氏郷の家臣・蒲生郷成が築城し、その後上杉景勝の支配下に入った。', zhTw: '蒲生氏鄉的家臣蒲生鄉成築城，之後歸入上杉景勝支配。', en: 'Built by Gamō Satoshige, retainer of Gamō Ujisato, the castle later came under Uesugi Kagekatsu.' },
      { ja: '関ヶ原の戦い直前、伊達政宗が白石城を攻略。以後、片倉氏が城主として幕末まで治めた。', zhTw: '關原之戰前夕伊達政宗攻下白石城，此後片倉氏作為城主治理至幕末。', en: 'Just before Sekigahara, Date Masamune captured Shiroishi; the Katakura clan then governed it until the Bakumatsu.' },
      { ja: '片倉小十郎景綱は伊達政宗の右腕として知られ、白石城は片倉家の居城となった。', zhTw: '片倉小十郎景綱作為伊達政宗的左右手聞名，白石城成為片倉家的居城。', en: 'Katakura Kojūrō Kagetsuna, Masamune\'s trusted strategist, made Shiroishi the Katakura seat.' },
      { ja: '戊辰戦争では白石城に奥羽越列藩同盟の会議が開かれ、「白石会議」として歴史に刻まれた。', zhTw: '戊辰戰爭中在白石城召開奧羽越列藩同盟會議，以「白石會議」之名載入史冊。', en: 'During the Boshin War, the Northern Alliance convened here in the historic "Shiroishi Conference."' },
      { ja: '真田幸村の遺児・阿梅と大八は片倉家に匿われ、白石で真田の血脈が受け継がれた。', zhTw: '真田幸村的遺孤阿梅與大八被片倉家庇護，真田血脈在白石延續。', en: 'Sanada Yukimura\'s orphaned children Ume and Daihachi were sheltered by the Katakura, continuing the Sanada line in Shiroishi.' },
    ],
    figures: [
      { ja: '片倉小十郎景綱 — 伊達政宗の軍師として名高い智将。白石城初代城主。', zhTw: '片倉小十郎景綱 — 以伊達政宗軍師聞名的智將。白石城初代城主。', en: 'Katakura Kojūrō Kagetsuna — famed strategist of Date Masamune and first Katakura lord of Shiroishi.' },
      { ja: '片倉重長 — 二代目片倉小十郎。大坂夏の陣で真田幸村と激戦し、「鬼の小十郎」と呼ばれた。', zhTw: '片倉重長 — 第二代片倉小十郎。大坂夏之陣與真田幸村激戰，被稱為「鬼之小十郎」。', en: 'Katakura Shigenaga — second Kojūrō; his fierce clash with Sanada Yukimura at Osaka earned him the name "Demon Kojūrō."' },
      { ja: '阿梅 — 真田幸村の娘。片倉重長の後妻となり、真田と片倉の縁を結んだ。', zhTw: '阿梅 — 真田幸村之女。成為片倉重長的後妻，結合了真田與片倉的緣分。', en: 'Ume — Sanada Yukimura\'s daughter who married Katakura Shigenaga, joining the Sanada and Katakura bloodlines.' },
    ],
    trivia: [
      { ja: '1995年に木造で復元された三階櫓は、戦後に木造復元された城郭建築として東北初。', zhTw: '1995年以木造復原的三階櫓，是東北地區戰後首座木造復原的城郭建築。', en: 'The wooden three-story turret rebuilt in 1995 was the first postwar wooden castle reconstruction in Tōhoku.' },
      { ja: '白石温麺（うーめん）は片倉家臣が病父のために考案したとされる名物麺。', zhTw: '白石溫麵（烏麵）據說是片倉家臣為病父而創的名物麵食。', en: 'Shiroishi ū-men noodles were supposedly invented by a Katakura retainer to comfort his ailing father.' },
      { ja: '毎年10月の「鬼小十郎まつり」では大坂夏の陣を再現した合戦劇が行われる。', zhTw: '每年10月的「鬼小十郎祭」會上演重現大坂夏之陣的合戰劇。', en: 'Each October, the "Demon Kojūrō Festival" stages a dramatic reenactment of the Summer Siege of Osaka.' },
    ],
    highlights: [
      { ja: '三階櫓（復元天守） — 木造復元の美しい三重櫓。内部見学で城下を一望できる。', zhTw: '三階櫓（復原天守） — 木造復原的美麗三重櫓。可入內參觀一覽城下。', en: 'Three-story turret (reconstructed keep) — a beautiful wooden reconstruction with panoramic interior views.' },
      { ja: '大手門 — 復元された堂々たる城門。武家屋敷の風格を伝える。', zhTw: '大手門 — 復原的壯麗城門。傳達武家屋敷的風格。', en: 'Main gate — a reconstructed grand castle gate conveying samurai-era dignity.' },
      { ja: '武家屋敷 — 片倉家中の武家屋敷が現存し、当時の暮らしを偲ばせる。', zhTw: '武家屋敷 — 現存片倉家中的武家宅邸，令人追憶當時的生活。', en: 'Samurai residences — surviving Katakura retainer houses that evoke life in the domain era.' },
    ],
    architecture: [
      { ja: '本丸に三階櫓を据えた梯郭式平山城。一国一城令の例外として存続を許された。', zhTw: '本丸設置三階櫓的梯郭式平山城。作為一國一城令的例外被允許存續。', en: 'A tiered hilltop castle with a three-story turret; uniquely exempted from the one-castle-per-domain rule.' },
      { ja: '伊達家の支城でありながら天守相当の櫓を持つのは、片倉氏の功績と格式の高さを示す。', zhTw: '作為伊達家支城卻擁有相當於天守的櫓，顯示片倉氏的功績與格式之高。', en: 'Having a keep-equivalent turret despite being a branch castle reflects the Katakura clan\'s distinguished service.' },
      { ja: '石垣は野面積みで、東北地方らしい堅実な築城技術が見られる。', zhTw: '石垣為野面積，可見東北地方特有的堅實築城技術。', en: 'The rough-stacked stone walls exemplify Tōhoku\'s solid construction techniques.' },
    ],
  },
  {
    id: 'mukaihagoroyama',
    number: 111,
    regionId: 'tohoku',
    name: { ja: '向羽黒山城', zhTw: '向羽黑山城', en: 'Mukaihagoroyama Castle' },
    city: { ja: '会津美里町', zhTw: '會津美里町', en: 'Aizu-Misato' },
    prefecture: { ja: '福島県', zhTw: '福島縣', en: 'Fukushima' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 74, y: 45 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#6B8E23', roofColor: '#3B5323' },
    goshuin: { bg: '#f0f5e8', ink: '#2d3d1f', seal: '#8b0000', crest: '#6B8E23' },
    history: [
      { ja: '1561年、蘆名盛氏が隠居城として築城。東北最大級の山城とされる。', zhTw: '1561年蘆名盛氏作為隱居城築城。被認為是東北最大規模的山城。', en: 'Built in 1561 by Ashina Moriji as his retirement castle; considered one of the largest mountain castles in Tōhoku.' },
      { ja: '蘆名氏は会津の名門で、全盛期には南奥州に広大な領地を支配した。', zhTw: '蘆名氏是會津的名門，全盛時期支配了南奧州廣大的領地。', en: 'The Ashina were a prestigious Aizu family who at their height controlled vast territories in southern Ōshū.' },
      { ja: '1589年、摺上原の戦いで伊達政宗に敗れ蘆名氏は滅亡。城は伊達氏の手に渡った。', zhTw: '1589年摺上原之戰敗給伊達政宗，蘆名氏滅亡。城落入伊達氏手中。', en: 'In 1589, the Ashina fell to Date Masamune at the Battle of Suriagehara, and the castle passed to the Date.' },
      { ja: 'その後、蒲生氏郷が会津に入封すると廃城となり、山城としての役割を終えた。', zhTw: '之後蒲生氏鄉入封會津後廢城，結束了作為山城的角色。', en: 'When Gamō Ujisato took over Aizu, the castle was abandoned, ending its role as a mountain fortress.' },
    ],
    figures: [
      { ja: '蘆名盛氏 — 蘆名氏の全盛期を築いた戦国大名。文武に秀で、南奥州の覇者と称された。', zhTw: '蘆名盛氏 — 締造蘆名氏全盛期的戰國大名。文武兼備，被稱為南奧州的霸者。', en: 'Ashina Moriji — Sengoku lord who brought the Ashina to their zenith, hailed as the hegemon of southern Ōshū.' },
      { ja: '蘆名義広 — 蘆名氏最後の当主。摺上原の戦いで伊達政宗に敗れ、会津を失った。', zhTw: '蘆名義廣 — 蘆名氏最後的當主。摺上原之戰敗給伊達政宗，失去會津。', en: 'Ashina Yoshihiro — the last Ashina lord, who lost Aizu to Date Masamune at Suriagehara.' },
      { ja: '伊達政宗 — 摺上原の勝利で会津を手中に収めたが、秀吉の奥州仕置で会津を失った。', zhTw: '伊達政宗 — 摺上原之勝取得會津，但因秀吉奧州處置而失去會津。', en: 'Date Masamune — won Aizu at Suriagehara but lost it when Hideyoshi\'s Ōshū campaign reassigned territories.' },
    ],
    trivia: [
      { ja: '城域は東京ドーム約35個分に及び、東北地方最大級の中世山城。', zhTw: '城域達東京巨蛋約35個大，是東北地方最大規模的中世山城。', en: 'The castle grounds span roughly 35 Tokyo Domes, making it one of Tōhoku\'s largest medieval mountain castles.' },
      { ja: '「向羽黒山」の名は、出羽三山の羽黒山に対面する位置にあることに由来する。', zhTw: '「向羽黑山」之名源於面對出羽三山羽黑山的位置。', en: 'The name "Mukaihagoroyama" means "facing Mt. Haguro," referring to its position opposite the sacred Dewa Sanzan peak.' },
      { ja: '現在も大規模な竪堀・横堀・曲輪が良好な状態で残り、山城ファンの聖地とされる。', zhTw: '至今仍保留大規模的豎壕、橫壕、曲輪，被視為山城愛好者的聖地。', en: 'Its large-scale dry moats, trenches, and baileys survive in excellent condition, making it a pilgrimage site for castle enthusiasts.' },
    ],
    highlights: [
      { ja: '一曲輪（本丸） — 山頂の主郭から会津盆地を一望する大パノラマ。', zhTw: '一曲輪（本丸） — 從山頂主郭一覽會津盆地的大全景。', en: 'First bailey (honmaru) — sweeping panoramic views of the Aizu basin from the mountaintop.' },
      { ja: '二曲輪の大竪堀 — 山の斜面を切り裂く巨大な竪堀は圧巻。', zhTw: '二曲輪的大豎壕 — 切割山坡的巨大豎壕令人震撼。', en: 'Great vertical moat at the second bailey — a massive trench slicing down the mountainside.' },
      { ja: '白鳳三山 — 城跡を含む三つの峰を巡るハイキングコース。', zhTw: '白鳳三山 — 巡遊包含城跡在內的三座山峰的健行路線。', en: 'Hakuhō Three Peaks — a hiking trail through the three summits including the castle ruins.' },
    ],
    architecture: [
      { ja: '標高408mの向羽黒山に三つの曲輪群を配した大規模山城。', zhTw: '在標高408公尺的向羽黑山上配置三組曲輪群的大規模山城。', en: 'A massive mountain castle with three bailey groups spread across 408 m Mt. Mukaihagoroyama.' },
      { ja: '竪堀・横堀・堀切を駆使した高度な防御設計は、東北山城の最高傑作と評される。', zhTw: '運用豎壕、橫壕、堀切的高度防禦設計，被評為東北山城的最高傑作。', en: 'Its masterful use of vertical moats, lateral trenches, and ridge-cuts is considered the finest Tōhoku mountain castle design.' },
      { ja: '石垣はほとんど用いず、土塁と堀のみで防御力を確保した中世山城の典型。', zhTw: '幾乎不使用石垣，僅以土壘和壕溝確保防禦力的中世山城典型。', en: 'A quintessential medieval mountain castle relying on earthworks and moats rather than stone walls for defense.' },
    ],
  },
  {
    id: 'hamamatsu',
    number: 112,
    regionId: 'chubu',
    name: { ja: '浜松城', zhTw: '濱松城', en: 'Hamamatsu Castle' },
    city: { ja: '浜松市', zhTw: '濱松市', en: 'Hamamatsu' },
    prefecture: { ja: '静岡県', zhTw: '靜岡縣', en: 'Shizuoka' },
    type: 'hirayama',
    designation: '市指定史跡',
    position: { x: 68, y: 58 },
    illustration: { style: 'classic', tiers: 3, color: '#D2D2C0', roofColor: '#2C3E2C' },
    goshuin: { bg: '#f5f5ef', ink: '#2c3e2c', seal: '#b22222', crest: '#556B2F' },
    history: [
      { ja: '1570年、徳川家康が曳馬城を大改修して浜松城と改名。以後17年間を居城とした。', zhTw: '1570年德川家康大幅改建曳馬城並更名為濱松城，此後以此為居城17年。', en: 'In 1570, Tokugawa Ieyasu extensively rebuilt Hikuma Castle, renamed it Hamamatsu, and made it his seat for 17 years.' },
      { ja: '1572年、三方ヶ原の戦いで武田信玄に大敗。家康は命からがら浜松城に逃げ帰った。', zhTw: '1572年三方原之戰慘敗給武田信玄。家康九死一生逃回濱松城。', en: 'In 1572, Ieyasu suffered a devastating defeat by Takeda Shingen at Mikatagahara and barely escaped back to Hamamatsu.' },
      { ja: '敗走後、家康は城門を開け篝火を焚く「空城の計」で武田軍の追撃を防いだと伝わる。', zhTw: '敗逃後，家康據傳以打開城門點燃篝火的「空城計」阻止了武田軍追擊。', en: 'Legend says Ieyasu kept the gates open with bonfires burning — an "empty castle" bluff that deterred Takeda pursuit.' },
      { ja: '家康が浜松から駿府、江戸へと出世したことから「出世城」の異名を持つ。', zhTw: '因家康從濱松到駿府再到江戶的出世歷程，而有「出世城」的別名。', en: 'Because Ieyasu rose from Hamamatsu to Sunpu and then Edo, it is nicknamed the "Castle of Success."' },
      { ja: '江戸時代には歴代城主の多くが老中など幕府要職に就き、出世城の名を証明した。', zhTw: '江戶時代歷代城主多就任老中等幕府要職，印證了出世城之名。', en: 'Throughout the Edo period, many successive lords went on to hold top Shōgunate posts, living up to the "success" name.' },
    ],
    figures: [
      { ja: '徳川家康 — 三方ヶ原の敗北を糧に天下統一を成し遂げた。浜松での17年が家康を鍛えた。', zhTw: '德川家康 — 以三方原之敗為養分成就天下統一。在濱松的17年鍛鍊了家康。', en: 'Tokugawa Ieyasu — the humiliation at Mikatagahara forged the man who would unify Japan; Hamamatsu shaped him over 17 years.' },
      { ja: '武田信玄 — 三方ヶ原で家康を破った甲斐の虎。上洛途中に浜松近くで病に倒れた。', zhTw: '武田信玄 — 三方原擊敗家康的甲斐之虎。上洛途中在濱松附近病倒。', en: 'Takeda Shingen — the Tiger of Kai who crushed Ieyasu at Mikatagahara but fell ill near Hamamatsu during his march to Kyoto.' },
      { ja: '堀尾吉晴 — 秀吉の三中老の一人。浜松城主時代に城を近世城郭として整備した。', zhTw: '堀尾吉晴 — 秀吉三中老之一。擔任濱松城主期間將城整備為近世城郭。', en: 'Horio Yoshiharu — one of Hideyoshi\'s Three Middle Elders, who modernized Hamamatsu into an early-modern castle.' },
    ],
    trivia: [
      { ja: '三方ヶ原の敗北後、家康は自らの苦渋の表情を描かせた「しかみ像」を戒めとした。', zhTw: '三方原敗北後，家康讓人畫下自己痛苦表情的「顰像」作為警惕。', en: 'After Mikatagahara, Ieyasu had his anguished face painted in the famous "scowling portrait" as a lifelong reminder.' },
      { ja: '浜松城の石垣は自然石を積む「野面積み」で、家康時代の技法が今も残る。', zhTw: '濱松城的石垣為堆砌自然石的「野面積」，至今保留家康時代的技法。', en: 'Hamamatsu\'s rough-stacked "nozura-zumi" stone walls preserve construction techniques from Ieyasu\'s era.' },
      { ja: '浜松は楽器の街としても知られ、ヤマハ・カワイ・ローランドの本拠地。', zhTw: '濱松也以樂器之城聞名，是YAMAHA、KAWAI、Roland的總部所在地。', en: 'Hamamatsu is also known as Japan\'s instrument city, home to Yamaha, Kawai, and Roland headquarters.' },
    ],
    highlights: [
      { ja: '天守台と復興天守 — 野面積みの天守台は家康時代のもの。コンクリート復興天守から市街を一望。', zhTw: '天守台與復興天守 — 野面積的天守台為家康時代遺構。從混凝土復興天守可一覽市區。', en: 'Keep platform and reconstructed tower — the rough-stone platform dates from Ieyasu\'s time; the concrete tower offers city views.' },
      { ja: '浜松城公園 — 日本庭園や美術館を含む広大な緑地。桜や紅葉の名所。', zhTw: '濱松城公園 — 包含日本庭園和美術館的廣大綠地。櫻花和紅葉名所。', en: 'Hamamatsu Castle Park — spacious grounds with a Japanese garden, art museum, and famous cherry blossoms and autumn foliage.' },
      { ja: '家康の散歩道 — 浜松城から家康ゆかりの史跡を巡るウォーキングコース。', zhTw: '家康散步道 — 從濱松城巡遊家康相關史跡的步行路線。', en: 'Ieyasu\'s Walking Trail — a route linking Ieyasu-related historical sites from Hamamatsu Castle.' },
    ],
    architecture: [
      { ja: '天守台の野面積み石垣は浜松最古の石垣で、400年以上崩れず現存する。', zhTw: '天守台的野面積石垣是濱松最古老的石垣，400多年未崩塌保存至今。', en: 'The keep platform\'s rough-stacked walls are Hamamatsu\'s oldest, standing unbroken for over 400 years.' },
      { ja: '曲輪は本丸・二の丸・三の丸の梯郭式配置で、南の丘陵を最大限に活用。', zhTw: '曲輪為本丸、二之丸、三之丸的梯郭式配置，最大限度活用南方丘陵。', en: 'The tiered layout of honmaru, ni-no-maru, and san-no-maru makes full use of the southern hillside.' },
      { ja: '堀尾吉晴の改修で近世城郭の体裁が整い、石垣上に天守が築かれた。', zhTw: '經堀尾吉晴改建後具備近世城郭的體裁，在石垣上築建天守。', en: 'Horio Yoshiharu\'s renovations gave it an early-modern form, with a keep raised on stone foundations.' },
    ],
  },

  // ── 続100名城 中部 ──
  {
    id: 'takatenjin',
    number: 113,
    regionId: 'chubu',
    name: { ja: '高天神城', zhTw: '高天神城', en: 'Takatenjin Castle' },
    city: { ja: '掛川市', zhTw: '掛川市', en: 'Kakegawa' },
    prefecture: { ja: '静岡県', zhTw: '靜岡縣', en: 'Shizuoka' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 69, y: 57 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#5B7744', roofColor: '#2D3B22' },
    goshuin: { bg: '#f0f5e8', ink: '#2d3b22', seal: '#8b0000', crest: '#5B7744' },
    history: [
      { ja: '「高天神を制する者は遠州を制す」と言われた戦略的要衝。', zhTw: '被稱為「控制高天神者控制遠州」的戰略要衝。', en: '"He who holds Takatenjin holds Enshū" — a castle of supreme strategic importance.' },
      { ja: '1574年、武田勝頼が大軍で攻略。徳川家康は後詰めに失敗し、信頼を失いかけた。', zhTw: '1574年武田勝賴以大軍攻下。德川家康救援失敗，幾乎失去信任。', en: 'In 1574, Takeda Katsuyori seized it with a massive army; Ieyasu\'s failure to relieve it nearly cost him his allies\' trust.' },
      { ja: '1581年、家康は周囲に6つの砦を築いて兵糧攻めを行い、高天神城を奪還した。', zhTw: '1581年家康在周圍築建6座砦進行兵糧攻擊，奪回高天神城。', en: 'In 1581, Ieyasu built six surrounding forts to starve the garrison and retook the castle.' },
      { ja: '勝頼が援軍を送れなかったことが武田家臣団の離反を招き、武田氏滅亡の一因となった。', zhTw: '勝賴無法派出援軍導致武田家臣團離心，成為武田氏滅亡的原因之一。', en: 'Katsuyori\'s inability to send reinforcements triggered defections among Takeda retainers, hastening the clan\'s downfall.' },
    ],
    figures: [
      { ja: '武田勝頼 — 信玄の後継者。高天神城の攻略は勝頼の最大の戦果だったが、奪還を阻止できず威信を失った。', zhTw: '武田勝賴 — 信玄的繼承者。攻下高天神城是勝賴最大戰果，但無法阻止奪還而失去威信。', en: 'Takeda Katsuyori — Shingen\'s heir; taking Takatenjin was his greatest feat, but failing to hold it destroyed his credibility.' },
      { ja: '岡部元信 — 高天神城の武田方守将。最後まで奮戦し、壮絶な討死を遂げた。', zhTw: '岡部元信 — 高天神城武田方守將。奮戰到底，壯烈戰死。', en: 'Okabe Motonobu — Takeda\'s garrison commander who fought valiantly to the end and died in battle.' },
      { ja: '徳川家康 — 6砦包囲戦で高天神を奪還し、武田氏の衰退を決定的にした。', zhTw: '德川家康 — 以6砦包圍戰奪回高天神，決定性地加速武田氏衰退。', en: 'Tokugawa Ieyasu — his six-fort siege strategy recaptured Takatenjin and sealed the Takeda decline.' },
    ],
    trivia: [
      { ja: '高天神の名は「神の住む高い山」を意味し、古来より霊山として崇められてきた。', zhTw: '高天神之名意為「神居住的高山」，自古便被崇為靈山。', en: 'The name means "High Heavenly God," and the mountain has been revered as sacred since ancient times.' },
      { ja: '二度の攻防戦は戦国史の転換点として知られ、多くの歴史ドラマで描かれている。', zhTw: '兩次攻防戰作為戰國史的轉捩點聞名，在許多歷史劇中被描繪。', en: 'The two sieges are a turning point in Sengoku history, depicted in numerous historical dramas.' },
      { ja: '現在も山道には「犬戻り猿戻り」と呼ばれる険しい箇所があり、天然の要害を体感できる。', zhTw: '至今山路上仍有被稱為「犬返猿返」的險峻處，可體驗天然要害。', en: 'The trail still has a treacherous section called "dog-turn, monkey-turn" — so steep even animals turn back.' },
    ],
    highlights: [
      { ja: '本丸跡 — 東峰と西峰に分かれた主郭群。断崖絶壁に囲まれた天然の要塞。', zhTw: '本丸跡 — 分為東峰和西峰的主郭群。被斷崖絕壁環繞的天然要塞。', en: 'Honmaru ruins — main enclosures split between east and west peaks, a natural fortress surrounded by sheer cliffs.' },
      { ja: '搦手門跡 — 武田軍が攻めた急峻な裏口。戦いの激しさを想像させる。', zhTw: '搦手門跡 — 武田軍進攻的急峻後門。令人想像戰鬥的激烈。', en: 'Rear gate ruins — the steep back entrance where Takeda forces attacked, evoking the battle\'s ferocity.' },
      { ja: '六砦跡 — 家康が築いた包囲網の砦群。周辺にその遺構が点在する。', zhTw: '六砦跡 — 家康築建的包圍網砦群。遺構散布於周邊。', en: 'Six fort ruins — remnants of Ieyasu\'s encirclement network dotting the surrounding hills.' },
    ],
    architecture: [
      { ja: '標高132mの鶴翁山に築かれ、東峰（本丸）と西峰（西の丸）を堀切で区画する連郭式山城。', zhTw: '建於標高132公尺的鶴翁山，以堀切區隔東峰（本丸）與西峰（西之丸）的連郭式山城。', en: 'A linked-enclosure mountain castle on 132 m Mt. Kakuō, with ridge-cuts separating the east peak (honmaru) and west peak.' },
      { ja: '三方を断崖に囲まれた天然の要害で、人工的な防御施設は最小限で済んだ。', zhTw: '三面被斷崖環繞的天然要害，人工防禦設施可降到最低。', en: 'Cliffs on three sides made it a natural stronghold requiring minimal artificial fortification.' },
      { ja: '武田占領期に甲州流の丸馬出しが追加され、武田式築城技術の痕跡が残る。', zhTw: '武田佔領期間追加了甲州流的丸馬出，留有武田式築城技術的痕跡。', en: 'During Takeda occupation, Kōshū-style crescent outworks were added, leaving traces of Takeda fortification methods.' },
    ],
  },
  {
    id: 'suwahara',
    number: 114,
    regionId: 'chubu',
    name: { ja: '諏訪原城', zhTw: '諏訪原城', en: 'Suwahara Castle' },
    city: { ja: '島田市', zhTw: '島田市', en: 'Shimada' },
    prefecture: { ja: '静岡県', zhTw: '靜岡縣', en: 'Shizuoka' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 67, y: 57 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#6B7B3A', roofColor: '#3B4420' },
    goshuin: { bg: '#f2f5e6', ink: '#3b4420', seal: '#a52a2a', crest: '#6B7B3A' },
    history: [
      { ja: '1573年、武田勝頼が牧之原台地の東端に築城。東海道を抑える戦略拠点とした。', zhTw: '1573年武田勝賴在牧之原台地東端築城，作為控制東海道的戰略據點。', en: 'Built in 1573 by Takeda Katsuyori on the eastern edge of the Makinohara Plateau to control the Tōkaidō road.' },
      { ja: '城名は城内に諏訪大明神を勧請したことに由来する。', zhTw: '城名源於城內勸請了諏訪大明神。', en: 'The name comes from the enshrinement of Suwa Daimyōjin within the castle.' },
      { ja: '1575年、長篠の戦い後に徳川家康が攻略。「牧野城」と改名して東海道の防衛に活用した。', zhTw: '1575年長篠之戰後德川家康攻下，更名「牧野城」用於東海道防衛。', en: 'After the 1575 Battle of Nagashino, Ieyasu captured it, renamed it Makino Castle, and used it for Tōkaidō defense.' },
      { ja: '武田氏滅亡後に廃城となったが、武田流築城術の傑作として評価が高い。', zhTw: '武田氏滅亡後廢城，但作為武田流築城術的傑作而獲高度評價。', en: 'Abandoned after the Takeda fell, it is highly praised as a masterpiece of Takeda-school castle design.' },
    ],
    figures: [
      { ja: '武田勝頼 — 信玄亡き後、遠江進出の拠点として諏訪原城を築いた。', zhTw: '武田勝賴 — 信玄去世後，築建諏訪原城作為進出遠江的據點。', en: 'Takeda Katsuyori — built Suwahara as his staging point for expansion into Tōtōmi after Shingen\'s death.' },
      { ja: '松平家忠 — 徳川方として城を守り、詳細な「家忠日記」に城の様子を記した。', zhTw: '松平家忠 — 以德川方守城，在詳細的「家忠日記」中記錄了城的狀況。', en: 'Matsudaira Ietada — defended the castle for the Tokugawa and recorded its details in his famous diary.' },
    ],
    trivia: [
      { ja: '丸馬出しが5基も残る日本唯一の城で、武田流築城術の教科書と呼ばれる。', zhTw: '日本唯一留存5座丸馬出的城，被稱為武田流築城術的教科書。', en: 'The only castle in Japan with five surviving crescent outworks — called a "textbook" of Takeda fortification.' },
      { ja: '牧之原台地は現在日本最大の茶産地で、城跡は茶畑に囲まれている。', zhTw: '牧之原台地現為日本最大的茶產地，城跡被茶園環繞。', en: 'The Makinohara Plateau is now Japan\'s largest tea-growing area, and the ruins are surrounded by tea fields.' },
      { ja: '2017年の発掘調査で三日月堀の全容が明らかになり、全国ニュースで報じられた。', zhTw: '2017年發掘調查揭示了三日月壕的全貌，在全國新聞中報導。', en: 'A 2017 excavation revealed the complete crescent moat, making national news.' },
    ],
    highlights: [
      { ja: '丸馬出し群 — 5基の武田式丸馬出しは全国随一の保存状態。', zhTw: '丸馬出群 — 5座武田式丸馬出為全國最佳保存狀態。', en: 'Crescent outworks — five Takeda-style outworks in the best preservation state in all of Japan.' },
      { ja: '三日月堀 — 馬出しの前面に設けられた美しい三日月形の堀。', zhTw: '三日月壕 — 設置在馬出前方的美麗三日月形壕溝。', en: 'Crescent moats — elegant half-moon-shaped moats placed in front of the outworks.' },
      { ja: '茶畑越しの眺望 — 城跡から駿河湾と富士山を望む絶景。', zhTw: '茶園越景 — 從城跡可眺望駿河灣與富士山的絕景。', en: 'Tea-field panorama — stunning views of Suruga Bay and Mt. Fuji from the castle ruins.' },
    ],
    architecture: [
      { ja: '牧之原台地の舌状台地先端を利用した要害で、三方を急崖に守られる。', zhTw: '利用牧之原台地舌狀台地先端的要害，三面被急崖守護。', en: 'A stronghold on a tongue-shaped plateau tip, protected by steep drops on three sides.' },
      { ja: '武田流の丸馬出し・三日月堀・横堀を多用した精緻な縄張りは、武田築城術の集大成。', zhTw: '大量運用武田流丸馬出、三日月壕、橫壕的精緻繩張，是武田築城術的集大成。', en: 'Its refined layout of crescent outworks, half-moon moats, and lateral trenches represents the pinnacle of Takeda fortification.' },
    ],
  },
  {
    id: 'kozukue',
    number: 115,
    regionId: 'kanto',
    name: { ja: '小机城', zhTw: '小机城', en: 'Kozukue Castle' },
    city: { ja: '横浜市', zhTw: '橫濱市', en: 'Yokohama' },
    prefecture: { ja: '神奈川県', zhTw: '神奈川縣', en: 'Kanagawa' },
    type: 'hirayama',
    designation: '市指定史跡',
    position: { x: 76, y: 58 },
    illustration: { style: 'ruins', tiers: 1, color: '#4A7B4A', roofColor: '#2D4A2D' },
    goshuin: { bg: '#eef5ee', ink: '#2d4a2d', seal: '#c44', crest: '#4A7B4A' },
    history: [
      { ja: '築城時期は不明だが、15世紀前半にはすでに存在していたと考えられる。', zhTw: '築城時期不明，但推測在15世紀前半已存在。', en: 'Its founding date is unknown, but the castle is believed to have existed by the early 15th century.' },
      { ja: '1478年、太田道灌が長尾景春の乱鎮圧のため小机城を攻撃。激しい攻城戦となった。', zhTw: '1478年太田道灌為鎮壓長尾景春之亂而攻擊小机城，發生激烈攻城戰。', en: 'In 1478, Ōta Dōkan besieged Kozukue to suppress the Nagao Kageharu Rebellion — a fierce engagement.' },
      { ja: '後北条氏の時代、小机衆の拠点として武蔵国北部の支配に重要な役割を果たした。', zhTw: '後北條氏時代作為小机眾的據點，在武藏國北部支配中發揮重要作用。', en: 'Under the Later Hōjō, it served as the base of the Kozukue-shū, playing a key role in controlling northern Musashi.' },
      { ja: '1590年、豊臣秀吉の小田原征伐で後北条氏が滅亡すると廃城となった。', zhTw: '1590年豐臣秀吉小田原征伐後北條氏滅亡，隨之廢城。', en: 'When the Later Hōjō fell in Hideyoshi\'s 1590 Odawara campaign, the castle was abandoned.' },
    ],
    figures: [
      { ja: '太田道灌 — 江戸城を築いた名将。小机城攻めでは陣中で連歌を詠み士気を高めた逸話が残る。', zhTw: '太田道灌 — 築建江戶城的名將。攻打小机城時在陣中詠連歌鼓舞士氣的軼事留傳至今。', en: 'Ōta Dōkan — the famed builder of Edo Castle; at Kozukue he boosted morale by composing linked verse during the siege.' },
      { ja: '笠原信為 — 後北条氏の家臣で小机城主。小机衆を率いて武蔵国の統治に当たった。', zhTw: '笠原信為 — 後北條氏家臣、小机城主。率領小机眾治理武藏國。', en: 'Kasahara Nobushige — Hōjō retainer and Kozukue lord who led the Kozukue forces in governing Musashi.' },
    ],
    trivia: [
      { ja: '城跡は日産スタジアム（横浜国際総合競技場）のすぐ裏手にある。', zhTw: '城跡就在日產體育場（橫濱國際綜合競技場）後方。', en: 'The ruins sit right behind Nissan Stadium (Yokohama International Stadium).' },
      { ja: '竹林に覆われた空堀は「竹の城」とも称され、独特の美しい景観を生んでいる。', zhTw: '被竹林覆蓋的空壕也被稱為「竹之城」，形成獨特的美麗景觀。', en: 'The dry moats covered in bamboo groves earn it the nickname "Bamboo Castle," creating a uniquely beautiful landscape.' },
      { ja: '太田道灌が攻城時に詠んだとされる連歌は、中世武将の教養の高さを示す逸話として有名。', zhTw: '太田道灌攻城時所詠的連歌，是展示中世武將教養之高的著名軼事。', en: 'Dōkan\'s linked verse composed during the siege is a famous anecdote of medieval warriors\' cultural refinement.' },
    ],
    highlights: [
      { ja: '竹林の空堀 — 美しい竹に覆われた深い空堀は城跡最大の見どころ。', zhTw: '竹林空壕 — 被美麗竹林覆蓋的深空壕是城跡最大看點。', en: 'Bamboo-covered dry moats — deep moats shrouded in beautiful bamboo, the site\'s top attraction.' },
      { ja: '東郭・西郭 — よく残る二つの曲輪は土塁に囲まれ、中世の城の姿を伝える。', zhTw: '東郭、西郭 — 保存良好的兩座曲輪被土壘環繞，傳達中世城郭的樣貌。', en: 'East and west enclosures — two well-preserved baileys ringed by earthworks, conveying the medieval castle\'s form.' },
      { ja: '小机城址市民の森 — 城跡を含む散策路で、四季折々の自然が楽しめる。', zhTw: '小机城址市民之森 — 包含城跡的散步路，可享受四季自然。', en: 'Kozukue Castle Ruins Citizens\' Forest — a walking trail through the ruins with seasonal nature.' },
    ],
    architecture: [
      { ja: '鶴見川沿いの丘陵に築かれた中世の土の城。東郭と西郭を堀切で分断する構造。', zhTw: '建於鶴見川沿岸丘陵的中世土城。以堀切分隔東郭與西郭的結構。', en: 'A medieval earthen castle on hills along the Tsurumi River, with east and west enclosures divided by ridge-cuts.' },
      { ja: '大規模な空堀と土塁が良好に残り、関東の中世城郭の代表的な遺構。', zhTw: '大規模空壕與土壘保存良好，是關東中世城郭的代表性遺構。', en: 'Well-preserved large dry moats and earthworks make it a representative medieval Kantō castle ruin.' },
    ],
  },
  {
    id: 'ishigakiyama',
    number: 116,
    regionId: 'kanto',
    name: { ja: '石垣山城', zhTw: '石垣山城', en: 'Ishigakiyama Castle' },
    city: { ja: '小田原市', zhTw: '小田原市', en: 'Odawara' },
    prefecture: { ja: '神奈川県', zhTw: '神奈川縣', en: 'Kanagawa' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 75, y: 59 },
    illustration: { style: 'ruins', tiers: 1, color: '#8B8B7A', roofColor: '#4A4A3A' },
    goshuin: { bg: '#f5f5ef', ink: '#3d3d2b', seal: '#daa520', crest: '#8B8B7A' },
    history: [
      { ja: '1590年、豊臣秀吉が小田原征伐に際し、北条氏の本拠・小田原城を見下ろす山に築いた陣城。', zhTw: '1590年豐臣秀吉為小田原征伐，在可俯瞰北條氏本據小田原城的山上築建的陣城。', en: 'In 1590, Toyotomi Hideyoshi built this siege castle on a mountain overlooking Hōjō\'s stronghold at Odawara.' },
      { ja: '約4万人を動員し、わずか80日で総石垣の本格的城郭を完成させた。', zhTw: '動員約4萬人，僅80天就完成了全石垣的正式城郭。', en: 'Some 40,000 workers completed a fully stone-walled castle in just 80 days.' },
      { ja: '完成後に周囲の木を伐採し、一夜にして城が出現したかのように見せた「一夜城」の伝説が残る。', zhTw: '完成後砍伐周圍樹木，使城彷彿一夜之間出現的「一夜城」傳說流傳至今。', en: 'After completion, trees were felled to reveal the castle dramatically — hence the legend of the "overnight castle."' },
      { ja: 'この威圧により北条氏は戦意を喪失し、小田原開城に至った。秀吉の天下統一最後の戦い。', zhTw: '此威壓使北條氏喪失戰意，最終開城投降。秀吉天下統一的最後一戰。', en: 'The intimidation crushed Hōjō morale, leading to their surrender — Hideyoshi\'s final battle for national unification.' },
      { ja: '陣中には千利休の茶室や能舞台が設けられ、諸大名を招いた豪華な宴が催された。', zhTw: '陣中設有千利休的茶室和能舞台，舉辦了招待諸大名的豪華宴席。', en: 'The camp featured Sen no Rikyū\'s tea room and a Noh stage, hosting lavish banquets for assembled lords.' },
    ],
    figures: [
      { ja: '豊臣秀吉 — 「一夜城」の逸話で知られる天下人。石垣山城は秀吉の権力と演出力の象徴。', zhTw: '豐臣秀吉 — 以「一夜城」軼事聞名的天下人。石垣山城是秀吉權力與演出力的象徵。', en: 'Toyotomi Hideyoshi — the "overnight castle" epitomizes the hegemon\'s power and flair for the dramatic.' },
      { ja: '千利休 — 小田原陣中で秀吉に茶を点てた。開城後まもなく秀吉と対立し切腹を命じられる。', zhTw: '千利休 — 在小田原陣中為秀吉點茶。開城後不久與秀吉對立被命切腹。', en: 'Sen no Rikyū — served tea to Hideyoshi at the siege camp; soon after, their rift led to Rikyū\'s forced suicide.' },
      { ja: '北条氏直 — 北条氏最後の当主。石垣山城の威容を見て降伏を決意したとされる。', zhTw: '北條氏直 — 北條氏最後的當主。據說見到石垣山城的威容後決意投降。', en: 'Hōjō Ujinao — the last Hōjō lord, said to have resolved to surrender upon seeing Ishigakiyama\'s imposing form.' },
    ],
    trivia: [
      { ja: '関東で最初の総石垣の城とされ、西国の築城技術が関東に持ち込まれた画期的な事例。', zhTw: '被認為是關東第一座全石垣城，是西國築城技術傳入關東的劃時代事例。', en: 'Considered Kantō\'s first fully stone-walled castle, a landmark introduction of western Japan\'s fortification technology.' },
      { ja: '秀吉は陣中で淀殿を呼び寄せ、茶会や能を楽しむなど、戦場とは思えない優雅な生活を送った。', zhTw: '秀吉在陣中召來淀殿，享受茶會和能樂等，過著難以想像是戰場的優雅生活。', en: 'Hideyoshi summoned Lady Yodo to the camp and enjoyed tea ceremonies and Noh — hardly the typical siege lifestyle.' },
      { ja: '「太閤の石垣」と呼ばれる野面積みの石垣は430年以上経った今も堂々と残る。', zhTw: '被稱為「太閤石垣」的野面積石垣歷經430年以上至今仍堂堂殘存。', en: 'The "Taikō\'s stone walls" of rough-stacked masonry have stood proudly for over 430 years.' },
    ],
    highlights: [
      { ja: '本丸跡 — 小田原市街と相模湾を一望する壮大な眺望。秀吉が見た景色そのもの。', zhTw: '本丸跡 — 一覽小田原市區與相模灣的壯大眺望。正是秀吉所見的景色。', en: 'Honmaru ruins — sweeping views of Odawara and Sagami Bay; the very sight Hideyoshi beheld.' },
      { ja: '井戸曲輪 — 巨石を積んだ壮大な石垣に囲まれた井戸。城の水源として重要だった。', zhTw: '井戶曲輪 — 被巨石堆砌的壯大石垣環繞的井戶。作為城的水源至關重要。', en: 'Well enclosure — a well surrounded by massive stone walls; the castle\'s vital water source.' },
      { ja: '南曲輪の石垣 — 高さ10m近い野面積みの石垣は迫力満点。', zhTw: '南曲輪石垣 — 近10公尺高的野面積石垣氣勢十足。', en: 'South enclosure walls — rough-stacked stone walls nearly 10 m high, immensely impressive.' },
    ],
    architecture: [
      { ja: '標高257mの山頂に本丸・二の丸・井戸曲輪・南曲輪を配した総石垣の山城。', zhTw: '在標高257公尺的山頂配置本丸、二之丸、井戶曲輪、南曲輪的全石垣山城。', en: 'A fully stone-walled mountain castle at 257 m with honmaru, ni-no-maru, well enclosure, and south enclosure.' },
      { ja: '80日で築いたとは思えない本格的な縄張りで、天守台・櫓台も設けられていた。', zhTw: '難以想像80天內建成的正式繩張，設有天守台和櫓台。', en: 'Despite 80 days of construction, the layout is remarkably sophisticated, with platforms for keep and turrets.' },
      { ja: '穴太衆（近江の石工集団）の技術で築かれた野面積みの石垣が全域に残る。', zhTw: '以穴太眾（近江石工集團）技術築建的野面積石垣殘存於全域。', en: 'Rough-stacked walls built by the Anō-shū (Ōmi stonemason guild) survive throughout the site.' },
    ],
  },

  // ── 続100名城 #117-120 中部 ──
  {
    id: 'shimpu',
    number: 117,
    regionId: 'chubu',
    name: { ja: '新府城', zhTw: '新府城', en: 'Shimpu Castle' },
    city: { ja: '韮崎市', zhTw: '韮崎市', en: 'Nirasaki' },
    prefecture: { ja: '山梨県', zhTw: '山梨縣', en: 'Yamanashi' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 68, y: 54 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#7B6B4B', roofColor: '#3B3020' },
    goshuin: { bg: '#f5f0e5', ink: '#3b3020', seal: '#8b0000', crest: '#7B6B4B' },
    history: [
      { ja: '1581年、武田勝頼が躑躅ヶ崎館に代わる新たな本拠として築城を開始した。', zhTw: '1581年武田勝賴開始築城，作為取代躑躅崎館的新本據。', en: 'In 1581, Takeda Katsuyori began building Shimpu as a new headquarters to replace Tsutsujigasaki.' },
      { ja: '七里岩台地の先端に築かれた堅固な城だったが、完成前に織田・徳川連合軍の侵攻が始まった。', zhTw: '建於七里岩台地先端的堅固城郭，但在完成前織田、德川聯軍已開始入侵。', en: 'Built on the tip of the Shichiri-iwa plateau, a formidable site, but the Oda-Tokugawa invasion began before it was finished.' },
      { ja: '1582年、家臣の相次ぐ離反により籠城を断念。勝頼は自ら城に火を放ち天目山へ落ちた。', zhTw: '1582年因家臣相繼離叛而放棄籠城。勝賴自行放火燒城後逃往天目山。', en: 'In 1582, as retainers defected one after another, Katsuyori set fire to the castle and fled toward Tenmokuzan.' },
      { ja: '天目山で自刃し、戦国最強と謳われた武田氏は滅亡した。新府城は武田氏終焉の象徴。', zhTw: '在天目山自刃，被譽為戰國最強的武田氏滅亡。新府城是武田氏終焉的象徵。', en: 'Katsuyori took his life at Tenmokuzan, ending the Takeda — once called the mightiest of the Sengoku. Shimpu symbolizes their fall.' },
    ],
    figures: [
      { ja: '武田勝頼 — 信玄の後継者。長篠の敗北後も再起を図ったが、新府城で最期を迎えた。', zhTw: '武田勝賴 — 信玄的繼承者。長篠敗北後仍圖東山再起，最終在新府城迎來終局。', en: 'Takeda Katsuyori — Shingen\'s heir who sought recovery after Nagashino but met his end at Shimpu.' },
      { ja: '真田昌幸 — 勝頼に新府城への撤退を勧めた知将。後に真田家を独立勢力として存続させた。', zhTw: '真田昌幸 — 勸勝賴撤退至新府城的智將。後來使真田家作為獨立勢力存續。', en: 'Sanada Masayuki — the strategist who advised Katsuyori to retreat to Shimpu, later preserving the Sanada as an independent force.' },
      { ja: '北条夫人 — 勝頼の正室。夫と運命を共にし、天目山で19歳の若さで自刃した。', zhTw: '北條夫人 — 勝賴的正室。與夫共命運，在天目山以19歲之齡自刃。', en: 'Lady Hōjō — Katsuyori\'s wife who chose to die with her husband at Tenmokuzan, aged only 19.' },
    ],
    trivia: [
      { ja: '「新府」は「新しい府中」の意味で、甲斐国の新たな政治中心地を目指した名称。', zhTw: '「新府」意為「新的府中」，是以甲斐國新政治中心為目標的名稱。', en: '"Shimpu" means "New Capital," signifying Katsuyori\'s ambition to build a new political center for Kai.' },
      { ja: '城跡には武田勝頼を祀る藤武神社があり、毎年4月に例祭が行われる。', zhTw: '城跡有祭祀武田勝賴的藤武神社，每年4月舉行例祭。', en: 'The ruins house Fujitake Shrine, dedicated to Katsuyori, with an annual festival in April.' },
      { ja: '未完成の城でありながら、丸馬出し・三日月堀など武田流築城術の粋が残る。', zhTw: '雖是未完成之城，卻留有丸馬出、三日月壕等武田流築城術的精華。', en: 'Though never completed, it preserves the finest Takeda fortification features: crescent outworks and half-moon moats.' },
    ],
    highlights: [
      { ja: '大手丸馬出し — 武田流の巨大な丸馬出しと三日月堀が見事に残る。', zhTw: '大手丸馬出 — 武田流的巨大丸馬出與三日月壕保存完好。', en: 'Main-gate crescent outwork — a massive Takeda-style outwork with half-moon moat survives beautifully.' },
      { ja: '本丸跡と藤武神社 — 勝頼を祀る神社から八ヶ岳・南アルプスを望む。', zhTw: '本丸跡與藤武神社 — 從祭祀勝賴的神社可眺望八岳、南阿爾卑斯山。', en: 'Honmaru and Fujitake Shrine — views of Yatsugatake and the Southern Alps from the shrine honoring Katsuyori.' },
      { ja: '七里岩の断崖 — 城の東西を守る天然の断崖は圧巻の迫力。', zhTw: '七里岩斷崖 — 守護城東西兩側的天然斷崖氣勢驚人。', en: 'Shichiri-iwa cliffs — natural precipices guarding the castle\'s flanks, breathtakingly steep.' },
    ],
    architecture: [
      { ja: '七里岩台地の舌状先端部に築かれ、東西は断崖、南北を人工の堀で防御する。', zhTw: '建於七里岩台地舌狀先端，東西為斷崖，南北以人工壕溝防禦。', en: 'Built on the tongue-tip of the Shichiri-iwa plateau, with cliffs east and west and artificial moats north and south.' },
      { ja: '武田流の丸馬出し・出構え・三日月堀を備え、未完成ながら高度な縄張りを持つ。', zhTw: '配備武田流丸馬出、出構、三日月壕，雖未完成卻具高度繩張。', en: 'Equipped with Takeda crescent outworks, projecting works, and half-moon moats — sophisticated even unfinished.' },
    ],
  },
  {
    id: 'yogaisan',
    number: 118,
    regionId: 'chubu',
    name: { ja: '要害山城', zhTw: '要害山城', en: 'Yōgaisan Castle' },
    city: { ja: '甲府市', zhTw: '甲府市', en: 'Kōfu' },
    prefecture: { ja: '山梨県', zhTw: '山梨縣', en: 'Yamanashi' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 69, y: 55 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#6A7B4A', roofColor: '#3A4B2A' },
    goshuin: { bg: '#f0f5e8', ink: '#3a4b2a', seal: '#a52a2a', crest: '#6A7B4A' },
    history: [
      { ja: '武田信虎が躑躅ヶ崎館の詰城（緊急避難用の山城）として築いた。', zhTw: '武田信虎作為躑躅崎館的詰城（緊急避難用山城）而築建。', en: 'Built by Takeda Nobutora as a refuge fortress backing up the Tsutsujigasaki mansion below.' },
      { ja: '1521年、今川軍の甲斐侵攻時に信虎の夫人が要害山城に避難し、ここで武田信玄（晴信）が誕生した。', zhTw: '1521年今川軍入侵甲斐時，信虎夫人避難至要害山城，武田信玄（晴信）在此誕生。', en: 'In 1521, during an Imagawa invasion, Nobutora\'s wife took refuge here, and Takeda Shingen was born within these walls.' },
      { ja: '武田氏滅亡後も甲府の防衛拠点として重視されたが、江戸時代初期に廃城となった。', zhTw: '武田氏滅亡後仍作為甲府防衛據點受到重視，但在江戶時代初期廢城。', en: 'After the Takeda fell, it remained a key Kōfu defense point, but was abandoned in early Edo.' },
    ],
    figures: [
      { ja: '武田信虎 — 信玄の父。甲斐統一を成し遂げ、躑躅ヶ崎館と要害山城の防衛体制を築いた。', zhTw: '武田信虎 — 信玄之父。完成甲斐統一，建立躑躅崎館與要害山城的防衛體制。', en: 'Takeda Nobutora — Shingen\'s father who unified Kai and established the dual defense of Tsutsujigasaki and Yōgaisan.' },
      { ja: '武田信玄 — 甲斐の虎。この城で生まれ、戦国最強の武将の一人に成長した。', zhTw: '武田信玄 — 甲斐之虎。在此城出生，成長為戰國最強武將之一。', en: 'Takeda Shingen — the Tiger of Kai, born in this very castle, who grew into one of the Sengoku\'s mightiest warlords.' },
    ],
    trivia: [
      { ja: '信玄誕生の地として「武田信玄公誕生之地」の碑が城跡に建てられている。', zhTw: '作為信玄誕生之地，城跡立有「武田信玄公誕生之地」碑。', en: 'A monument reading "Birthplace of Lord Takeda Shingen" stands on the castle grounds.' },
      { ja: '積翠寺温泉は信玄の産湯に使われたと伝わり、「信玄の湯」として親しまれている。', zhTw: '積翠寺溫泉據傳為信玄初浴所用之湯，以「信玄之湯」之名受到喜愛。', en: 'Sekisuiji hot spring is said to have been used for Shingen\'s first bath, beloved as "Shingen\'s Spring."' },
      { ja: '標高780mの登山道には石垣・竪堀・曲輪が連続し、山城ハイキングの名所。', zhTw: '標高780公尺的登山道上連續分布石垣、豎壕、曲輪，是山城健行名所。', en: 'At 780 m, the trail features continuous stone walls, vertical moats, and baileys — a top mountain-castle hike.' },
    ],
    highlights: [
      { ja: '武田信玄公誕生之地碑 — 本丸近くに建つ信玄誕生を記念する石碑。', zhTw: '武田信玄公誕生之地碑 — 建於本丸附近紀念信玄誕生的石碑。', en: 'Shingen Birthplace Monument — a stone marker near the honmaru commemorating the great lord\'s birth.' },
      { ja: '不動曲輪の石垣 — 見事な石垣が山中に残り、武田の築城力を物語る。', zhTw: '不動曲輪石垣 — 殘存於山中的精美石垣，訴說武田的築城能力。', en: 'Fudō bailey stone walls — impressive stonework surviving in the mountain, testament to Takeda engineering.' },
      { ja: '山頂からの甲府盆地の眺望 — 信玄が見たであろう甲斐国の絶景。', zhTw: '從山頂眺望甲府盆地 — 信玄應曾見過的甲斐國絕景。', en: 'Summit views of the Kōfu Basin — the stunning vista of Kai that Shingen himself must have gazed upon.' },
    ],
    architecture: [
      { ja: '躑躅ヶ崎館の北東、積翠寺山に築かれた詰城。急峻な地形を活かした典型的な山城。', zhTw: '建於躑躅崎館東北方積翠寺山的詰城。活用急峻地形的典型山城。', en: 'A refuge castle on Sekisuijiyama northeast of Tsutsujigasaki, a classic mountain castle exploiting steep terrain.' },
      { ja: '主郭を中心に放射状に曲輪を配置し、竪堀と堀切で各曲輪を独立させた防御設計。', zhTw: '以主郭為中心放射狀配置曲輪，以豎壕和堀切使各曲輪獨立的防禦設計。', en: 'Baileys radiate from the main enclosure, each isolated by vertical moats and ridge-cuts for independent defense.' },
    ],
  },
  {
    id: 'tatsuoka',
    number: 119,
    regionId: 'chubu',
    name: { ja: '龍岡城', zhTw: '龍岡城', en: 'Tatsuoka Castle' },
    city: { ja: '佐久市', zhTw: '佐久市', en: 'Saku' },
    prefecture: { ja: '長野県', zhTw: '長野縣', en: 'Nagano' },
    type: 'hirajiro',
    designation: '国指定史跡',
    position: { x: 66, y: 52 },
    illustration: { style: 'star-fort', tiers: 1, color: '#6B8E6B', roofColor: '#3B5E3B' },
    goshuin: { bg: '#eef5ee', ink: '#2d4a2d', seal: '#b22222', crest: '#6B8E6B' },
    history: [
      { ja: '1867年、松平乗謨（大給恒）が西洋軍学に基づき稜堡式城郭として築城を開始。', zhTw: '1867年松平乘謨（大給恆）基於西洋軍學開始築建稜堡式城郭。', en: 'In 1867, Matsudaira Norimoto began building this bastion-style fortress based on Western military science.' },
      { ja: '函館五稜郭と並ぶ日本に二つしかない星形城郭の一つ。', zhTw: '與函館五稜郭並列，是日本僅有的兩座星形城郭之一。', en: 'One of only two star-shaped fortresses in Japan, alongside Goryōkaku in Hakodate.' },
      { ja: '築城途中で明治維新を迎え、未完成のまま廃城となった。', zhTw: '築城途中迎來明治維新，以未完成之姿廢城。', en: 'The Meiji Restoration arrived mid-construction, and the castle was abandoned unfinished.' },
      { ja: '松平乗謨は明治政府で日本赤十字社の前身を創設するなど、近代化に貢献した。', zhTw: '松平乘謨在明治政府創設日本紅十字社前身等，為近代化做出貢獻。', en: 'Matsudaira went on to help found the precursor of the Japanese Red Cross, contributing to modernization.' },
    ],
    figures: [
      { ja: '松平乗謨（大給恒） — 田野口藩主。蘭学に通じ、西洋式城郭を構想した開明的な大名。', zhTw: '松平乘謨（大給恆） — 田野口藩主。精通蘭學，構想西洋式城郭的開明大名。', en: 'Matsudaira Norimoto — lord of Tanokuchi domain, a progressive daimyō versed in Dutch studies who envisioned a Western-style fort.' },
    ],
    trivia: [
      { ja: '五稜郭よりかなり小さく「三稜郭」と揶揄されることもあるが、稜堡の形は正確。', zhTw: '比五稜郭小得多，有時被戲稱為「三稜郭」，但稜堡形狀是正確的。', en: 'Much smaller than Goryōkaku — sometimes jokingly called "Sanryōkaku" — but its bastion geometry is precise.' },
      { ja: '現在は小学校の敷地として使われており、星形の堀に囲まれた小学校は全国唯一。', zhTw: '現在作為小學校地使用，被星形壕溝環繞的小學是全國唯一。', en: 'Now used as an elementary school campus — the only school in Japan surrounded by a star-shaped moat.' },
      { ja: '近くの田口城跡の展望台から龍岡城の星形を上から見ることができる。', zhTw: '從附近田口城跡的展望台可以從上方看到龍岡城的星形。', en: 'The star shape can be viewed from above at the observation point on nearby Taguchi Castle ruins.' },
    ],
    highlights: [
      { ja: '星形の水堀 — 五角形の堀が美しく残り、堀沿いの散策が楽しめる。', zhTw: '星形水壕 — 五角形壕溝保存完好，可沿壕散步。', en: 'Star-shaped moat — the pentagonal water moat survives beautifully, with a pleasant walking path along it.' },
      { ja: '御台所（大広間） — 現存する唯一の建物で、藩主の居室として使われた。', zhTw: '御台所（大廣間） — 唯一現存的建築，曾作為藩主居室。', en: 'Odaidokoro hall — the sole surviving building, once the lord\'s living quarters.' },
      { ja: '田口城跡展望台 — 龍岡城の星形全体を俯瞰できる絶好のビューポイント。', zhTw: '田口城跡展望台 — 可俯瞰龍岡城星形全貌的絕佳觀景點。', en: 'Taguchi Castle observation deck — the perfect vantage point to see the entire star shape from above.' },
    ],
    architecture: [
      { ja: 'フランスのヴォーバン式築城術を参考にした五角形の稜堡式城郭。', zhTw: '參考法國沃邦式築城術的五角形稜堡式城郭。', en: 'A pentagonal bastion fortress inspired by French Vauban-style fortification.' },
      { ja: '五稜郭と異なり石垣ではなく土塁で構築されており、堀幅も狭い簡素な造り。', zhTw: '與五稜郭不同，以土壘而非石垣構築，壕寬也較窄的簡樸構造。', en: 'Unlike Goryōkaku, it uses earthworks rather than stone walls, with narrower moats — a simpler construction.' },
      { ja: '西側の稜堡が未完成で、東洋と西洋の築城技術の過渡期を物語る貴重な遺構。', zhTw: '西側稜堡未完成，是訴說東洋與西洋築城技術過渡期的珍貴遺構。', en: 'The western bastion was left unfinished, a precious relic illustrating the transition between Eastern and Western fortification.' },
    ],
  },
  {
    id: 'takada',
    number: 120,
    regionId: 'chubu',
    name: { ja: '高田城', zhTw: '高田城', en: 'Takada Castle' },
    city: { ja: '上越市', zhTw: '上越市', en: 'Jōetsu' },
    prefecture: { ja: '新潟県', zhTw: '新潟縣', en: 'Niigata' },
    type: 'hirajiro',
    designation: '県指定史跡',
    position: { x: 64, y: 46 },
    illustration: { style: 'classic', tiers: 3, color: '#F5F0E8', roofColor: '#2F4F4F' },
    goshuin: { bg: '#f5f5ef', ink: '#2f4f4f', seal: '#c0392b', crest: '#2F4F4F' },
    history: [
      { ja: '1614年、徳川家康の六男・松平忠輝の居城として天下普請で築城された。', zhTw: '1614年作為德川家康六男松平忠輝的居城，以天下普請方式築城。', en: 'Built in 1614 as a national project for Matsudaira Tadateru, Tokugawa Ieyasu\'s sixth son.' },
      { ja: '伊達政宗が縄張り（設計）を担当し、わずか4ヶ月で完成させた。', zhTw: '由伊達政宗負責繩張（設計），僅4個月便完成。', en: 'Date Masamune supervised the design, and the castle was completed in just four months.' },
      { ja: '松平忠輝は大坂夏の陣での不行跡により改易され、その後は譜代大名が城主を務めた。', zhTw: '松平忠輝因大坂夏之陣的不當行為被改易，此後由譜代大名擔任城主。', en: 'Tadateru was stripped of his domain for misconduct during the Summer Siege of Osaka; fudai daimyō governed afterward.' },
      { ja: '幕末には榊原氏が藩主を務め、戊辰戦争では新政府側につき戦火を免れた。', zhTw: '幕末由榊原氏擔任藩主，戊辰戰爭中站在新政府方倖免於戰火。', en: 'The Sakakibara governed at the end of the Edo period and sided with the new government, sparing the castle from war.' },
    ],
    figures: [
      { ja: '松平忠輝 — 家康の六男。五郎八姫（伊達政宗の娘）を正室に迎えたが、後に改易された。', zhTw: '松平忠輝 — 家康六男。迎娶五郎八姬（伊達政宗之女）為正室，後被改易。', en: 'Matsudaira Tadateru — Ieyasu\'s sixth son, married Iroha-hime (Masamune\'s daughter) but was later dispossessed.' },
      { ja: '伊達政宗 — 娘婿・忠輝のために高田城の縄張りを設計した。', zhTw: '伊達政宗 — 為女婿忠輝設計了高田城的繩張。', en: 'Date Masamune — designed the castle layout for his son-in-law Tadateru.' },
      { ja: '榊原康政の子孫 — 徳川四天王の一人の血脈が幕末まで高田藩を治めた。', zhTw: '榊原康政的子孫 — 德川四天王之一的血脈治理高田藩至幕末。', en: 'Descendants of Sakakibara Yasumasa — the bloodline of one of Ieyasu\'s Four Heavenly Kings governed Takada until the Bakumatsu.' },
    ],
    trivia: [
      { ja: '天守の代わりに三重櫓が建てられたのは、天下普請でありながら幕府への遠慮とされる。', zhTw: '以三重櫓代替天守，被認為是雖為天下普請卻對幕府表示謙讓。', en: 'A three-story turret replaced a keep — seen as a diplomatic gesture of deference to the Shōgunate.' },
      { ja: '高田城址公園の約4,000本の桜は「日本三大夜桜」の一つに数えられる。', zhTw: '高田城址公園約4000棵櫻花被列為「日本三大夜櫻」之一。', en: 'The park\'s 4,000 cherry trees make it one of Japan\'s "Three Great Night Cherry Blossom" spots.' },
      { ja: '石垣を使わず土塁のみで築かれたのは、越後の豊富な土と急速な築城のため。', zhTw: '不使用石垣僅以土壘築建，是因越後豐富的土壤與快速築城的需要。', en: 'Built entirely with earthworks and no stone — due to Echigo\'s abundant soil and the need for speed.' },
    ],
    highlights: [
      { ja: '三重櫓（復元） — 2004年に木造復元。内部は展示施設として公開。', zhTw: '三重櫓（復原） — 2004年木造復原。內部作為展示設施公開。', en: 'Three-story turret (reconstructed) — rebuilt in wood in 2004, now open as an exhibition space.' },
      { ja: '日本三大夜桜 — 春には4,000本の桜がライトアップされ、堀に映る姿が幻想的。', zhTw: '日本三大夜櫻 — 春天4000棵櫻花點燈，映照在壕溝中的姿態夢幻。', en: 'Three Great Night Cherry Blossoms — 4,000 lit cherry trees reflected in the moats create a dreamlike scene.' },
      { ja: '極楽橋 — 内堀に架かる朱塗りの橋。桜の季節は特に美しい。', zhTw: '極樂橋 — 架於內壕上的朱漆橋。櫻花季節特別美麗。', en: 'Gokuraku Bridge — a vermilion bridge spanning the inner moat, especially stunning during cherry blossom season.' },
    ],
    architecture: [
      { ja: '石垣を一切使わず、広大な水堀と高い土塁で防御する平城。', zhTw: '完全不使用石垣，以廣大水壕與高土壘防禦的平城。', en: 'A flatland castle defended entirely by vast water moats and tall earthworks, with no stone walls whatsoever.' },
      { ja: '本丸・二の丸・三の丸を三重の水堀で囲む堅固な縄張り。', zhTw: '以三重水壕環繞本丸、二之丸、三之丸的堅固繩張。', en: 'A robust layout with triple water moats encircling the honmaru, ni-no-maru, and san-no-maru.' },
      { ja: '伊達政宗の設計は実戦的で、土塁の折れや横矢掛りなど防御の工夫が随所に見られる。', zhTw: '伊達政宗的設計實戰性強，土壘的折角和橫矢掛等防禦巧思隨處可見。', en: 'Masamune\'s design is thoroughly practical, with angled earthworks and flanking-fire positions throughout.' },
    ],
  },

  // ── 続100名城 #121-126 中部(続) ──
  {
    id: 'torikoe',
    number: 121,
    regionId: 'chubu',
    name: { ja: '鳥越城', zhTw: '鳥越城', en: 'Torikoe Castle' },
    city: { ja: '白山市', zhTw: '白山市', en: 'Hakusan' },
    prefecture: { ja: '石川県', zhTw: '石川縣', en: 'Ishikawa' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 56, y: 50 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#7A7A5A', roofColor: '#3A3A2A' },
    goshuin: { bg: '#f5f5e8', ink: '#3a3a2a', seal: '#8b0000', crest: '#7A7A5A' },
    history: [
      { ja: '加賀一向一揆の最後の拠点となった山城。「百姓の持ちたる国」加賀を象徴する城。', zhTw: '成為加賀一向一揆最後據點的山城。象徵「百姓持有之國」加賀的城。', en: 'The last stronghold of the Kaga Ikkō-ikki — a castle symbolizing Kaga, "the province held by peasants."' },
      { ja: '一向宗門徒が約100年にわたり加賀国を自治支配した驚異的な時代の砦。', zhTw: '一向宗門徒約100年間自治支配加賀國的驚異時代的堡壘。', en: 'A fortress from the extraordinary century when Ikkō-shū followers self-governed Kaga province.' },
      { ja: '1580年、織田信長の命を受けた柴田勝家が鳥越城を攻略。門徒は壮絶な最期を遂げた。', zhTw: '1580年受織田信長之命的柴田勝家攻下鳥越城。門徒壯烈犧牲。', en: 'In 1580, Shibata Katsuie captured Torikoe on Nobunaga\'s orders; the defenders met a heroic end.' },
      { ja: '落城後も残党が蜂起を繰り返し、1582年になってようやく一向一揆は完全に鎮圧された。', zhTw: '落城後殘黨仍反覆起義，直到1582年一向一揆才被完全鎮壓。', en: 'Remnants continued to rise in revolt after the fall; the Ikkō-ikki was not fully suppressed until 1582.' },
    ],
    figures: [
      { ja: '鈴木出羽守 — 鳥越城の城主として一向一揆を率いた指導者。最後まで織田軍に抵抗した。', zhTw: '鈴木出羽守 — 作為鳥越城城主率領一向一揆的領導者。抵抗織田軍至最後。', en: 'Suzuki Dewanokami — leader who commanded the Ikkō-ikki from Torikoe, resisting Oda forces to the end.' },
      { ja: '柴田勝家 — 信長の筆頭家老。加賀一向一揆の鎮圧を任され、鳥越城を攻め落とした。', zhTw: '柴田勝家 — 信長的首席家老。受命鎮壓加賀一向一揆，攻下鳥越城。', en: 'Shibata Katsuie — Nobunaga\'s chief retainer, tasked with crushing the Kaga revolt, who stormed Torikoe.' },
    ],
    trivia: [
      { ja: '加賀一向一揆は1488年から約100年間、守護大名を追放して自治を行った日本史上稀有の出来事。', zhTw: '加賀一向一揆從1488年起約100年間驅逐守護大名實行自治，是日本史上罕見的事件。', en: 'The Kaga Ikkō-ikki expelled the shugo daimyō from 1488 and self-governed for about 100 years — unique in Japanese history.' },
      { ja: '城跡からは焼けた米や炭化した建物跡が出土し、落城時の激戦を物語る。', zhTw: '城跡出土了燒焦的米和碳化建物遺跡，訴說落城時的激戰。', en: 'Excavations unearthed charred rice and burned building remains, bearing witness to the fierce final battle.' },
      { ja: '鳥越一向一揆歴史館が城麓にあり、一揆の歴史を詳しく学べる。', zhTw: '鳥越一向一揆歷史館位於城腳，可詳細了解一揆的歷史。', en: 'The Torikoe Ikkō-ikki History Museum at the base offers detailed exhibits on the revolt.' },
    ],
    highlights: [
      { ja: '本丸跡 — 復元された門と土塁。白山連峰を背景にした山城の絶景。', zhTw: '本丸跡 — 復原的門與土壘。以白山連峰為背景的山城絕景。', en: 'Honmaru ruins — reconstructed gate and earthworks with the Hakusan mountain range as a stunning backdrop.' },
      { ja: '後二の丸 — 門徒たちの最後の抵抗の場。発掘調査で戦闘の痕跡が多数出土。', zhTw: '後二之丸 — 門徒們最後抵抗之地。發掘調查出土大量戰鬥痕跡。', en: 'Rear second bailey — site of the defenders\' last stand, where excavations found extensive battle evidence.' },
      { ja: '鳥越一向一揆歴史館 — 一揆の100年を映像や遺物で体験できる資料館。', zhTw: '鳥越一向一揆歷史館 — 以影像和遺物體驗一揆百年歷史的資料館。', en: 'Ikkō-ikki History Museum — experience a century of revolt through videos and artifacts.' },
    ],
    architecture: [
      { ja: '標高312mの山頂に本丸・二の丸・三の丸を連ねた連郭式山城。', zhTw: '在標高312公尺的山頂連接本丸、二之丸、三之丸的連郭式山城。', en: 'A linked-enclosure mountain castle with honmaru, ni-no-maru, and san-no-maru along a 312 m ridgeline.' },
      { ja: '一向一揆の城としては異例の高度な築城技術で、堀切・土塁・枡形虎口を備える。', zhTw: '作為一向一揆之城展現異例的高度築城技術，配備堀切、土壘、枡形虎口。', en: 'Unusually sophisticated for an ikki fortress, with ridge-cuts, earthworks, and bent-entrance gates.' },
    ],
  },
  {
    id: 'fukui',
    number: 122,
    regionId: 'chubu',
    name: { ja: '福井城', zhTw: '福井城', en: 'Fukui Castle' },
    city: { ja: '福井市', zhTw: '福井市', en: 'Fukui' },
    prefecture: { ja: '福井県', zhTw: '福井縣', en: 'Fukui' },
    type: 'hirajiro',
    designation: '県指定史跡',
    position: { x: 56, y: 54 },
    illustration: { style: 'ruins', tiers: 1, color: '#8B8878', roofColor: '#5A5848' },
    goshuin: { bg: '#f5f0e8', ink: '#3d3828', seal: '#c0392b', crest: '#8B8878' },
    history: [
      { ja: '1606年、徳川家康の次男・結城秀康が北ノ庄城を大改修して築城。', zhTw: '1606年德川家康次男結城秀康大幅改建北之庄城而築城。', en: 'In 1606, Yūki Hideyasu (Ieyasu\'s second son) extensively rebuilt Kita-no-shō Castle to create Fukui Castle.' },
      { ja: '結城秀康は関ヶ原の戦いで上杉景勝の南下を抑えた功績で越前68万石を与えられた。', zhTw: '結城秀康因關原之戰中阻止上杉景勝南下的功績獲封越前68萬石。', en: 'Hideyasu received 680,000 koku in Echizen for blocking Uesugi Kagekatsu during the Sekigahara campaign.' },
      { ja: '1669年の大火で天守を焼失。以後、天守は再建されなかった。', zhTw: '1669年大火燒毀天守。此後天守未再重建。', en: 'The keep burned in the great fire of 1669 and was never rebuilt.' },
      { ja: '幕末の福井藩主・松平春嶽は幕末四賢侯の一人として明治維新に大きく貢献した。', zhTw: '幕末福井藩主松平春嶽是幕末四賢侯之一，對明治維新做出重大貢獻。', en: 'The Bakumatsu lord Matsudaira Shungaku, one of the "Four Wise Lords," played a major role in the Meiji Restoration.' },
    ],
    figures: [
      { ja: '結城秀康 — 家康の次男だが母の身分が低く後継者になれなかった悲運の名将。', zhTw: '結城秀康 — 家康次男但因母親身分低而無法成為繼承人的悲運名將。', en: 'Yūki Hideyasu — Ieyasu\'s talented second son, denied succession due to his mother\'s low status.' },
      { ja: '松平春嶽 — 幕末四賢侯。横井小楠を招いて藩政改革を行い、明治維新の立役者となった。', zhTw: '松平春嶽 — 幕末四賢侯。招聘橫井小楠進行藩政改革，成為明治維新的功臣。', en: 'Matsudaira Shungaku — one of the Four Wise Lords, recruited Yokoi Shōnan for reforms and shaped the Restoration.' },
      { ja: '橫井小楠 — 春嶽に招かれた熊本出身の思想家。「国是三論」で開国論を唱えた。', zhTw: '橫井小楠 — 受春嶽招聘的熊本出身思想家。以「國是三論」倡導開國論。', en: 'Yokoi Shōnan — a Kumamoto thinker recruited by Shungaku, who advocated opening Japan in his "Three National Policies."' },
    ],
    trivia: [
      { ja: '現在の福井県庁が本丸跡に建っており、石垣と堀に囲まれた県庁は全国的にも珍しい。', zhTw: '現在的福井縣廳建於本丸跡上，被石垣和壕溝環繞的縣廳在全國也很罕見。', en: 'The Fukui prefectural office sits on the honmaru — a rare government building surrounded by castle walls and moats.' },
      { ja: '「福井」の地名は城内の「福の井」という井戸に由来するとされる。', zhTw: '「福井」地名據說源於城內名為「福之井」的水井。', en: 'The name "Fukui" reportedly derives from "Fuku-no-i" (Well of Fortune) inside the castle.' },
      { ja: '1948年の福井地震で石垣が大きく崩壊し、その痕跡が今も一部で見られる。', zhTw: '1948年福井地震導致石垣大幅崩塌，部分痕跡至今可見。', en: 'The 1948 Fukui Earthquake caused massive stone-wall collapse; traces of the damage are still visible.' },
    ],
    highlights: [
      { ja: '本丸石垣と内堀 — 県庁を囲む立派な石垣と水堀が城の面影を伝える。', zhTw: '本丸石垣與內壕 — 環繞縣廳的壯觀石垣與水壕傳達城的風貌。', en: 'Honmaru walls and inner moat — magnificent stone walls and water moats ringing the prefectural office.' },
      { ja: '御廊下橋 — 復元された屋根付きの橋。藩主が本丸と御座所を行き来した。', zhTw: '御廊下橋 — 復原的有屋頂走廊橋。藩主用來往返本丸與御座所。', en: 'Orōka Bridge — a reconstructed covered walkway bridge the lord used between honmaru and his chambers.' },
      { ja: '福の井 — 城名の由来となった井戸。復元された石組みが公開されている。', zhTw: '福之井 — 城名由來的水井。復原的石砌已公開。', en: 'Fuku-no-i Well — the well that gave the castle its name, with restored stonework on display.' },
    ],
    architecture: [
      { ja: '約270m四方の広大な本丸を水堀で囲む平城。天守台は現存するが天守は焼失後未再建。', zhTw: '以水壕環繞約270公尺見方的廣大本丸的平城。天守台現存但天守燒毀後未重建。', en: 'A flatland castle with a vast 270 m-square honmaru ringed by water moats; the keep platform survives but the keep does not.' },
      { ja: '結城秀康時代の石垣は打込み接ぎで、越前の笏谷石（青緑色の凝灰�ite）を多用している。', zhTw: '結城秀康時代的石垣為打込接，大量使用越前笏谷石（青綠色凝灰岩）。', en: 'Hideyasu-era walls use fitted stonework of Echizen shakudani-ishi, a distinctive blue-green tuff.' },
    ],
  },
  {
    id: 'echizen-ono',
    number: 123,
    regionId: 'chubu',
    name: { ja: '越前大野城', zhTw: '越前大野城', en: 'Echizen Ōno Castle' },
    city: { ja: '大野市', zhTw: '大野市', en: 'Ōno' },
    prefecture: { ja: '福井県', zhTw: '福井縣', en: 'Fukui' },
    type: 'hirayama',
    designation: '県指定史跡',
    position: { x: 57, y: 53 },
    illustration: { style: 'classic', tiers: 2, color: '#F5F0E8', roofColor: '#4A4A3A' },
    goshuin: { bg: '#f5f5ef', ink: '#3d3d2b', seal: '#c44', crest: '#4A4A3A' },
    history: [
      { ja: '1575年、織田信長から大野郡を与えられた金森長近が亀山に築城。', zhTw: '1575年從織田信長處獲得大野郡的金森長近在龜山築城。', en: 'In 1575, Kanamori Nagachika, granted Ōno county by Nobunaga, built the castle on Kameyama hill.' },
      { ja: '金森長近は城下町の整備にも力を注ぎ、碁盤の目状の町割りは「北陸の小京都」と呼ばれる。', zhTw: '金森長近也致力於城下町整備，棋盤格狀的町割被稱為「北陸的小京都」。', en: 'Nagachika also developed the castle town in a grid pattern, earning it the nickname "Little Kyoto of Hokuriku."' },
      { ja: '江戸時代は土井氏が藩主を務め、幕末まで大野藩として存続した。', zhTw: '江戶時代由土井氏擔任藩主，作為大野藩存續至幕末。', en: 'The Doi clan governed throughout the Edo period, maintaining Ōno domain until the Bakumatsu.' },
    ],
    figures: [
      { ja: '金森長近 — 織田信長の家臣。大野城と城下町を築き、後に飛騨高山も治めた文化人大名。', zhTw: '金森長近 — 織田信長家臣。築建大野城與城下町，後來也治理飛驒高山的文化人大名。', en: 'Kanamori Nagachika — Nobunaga\'s retainer who built Ōno and its town, later also governing Hida-Takayama; a cultured lord.' },
      { ja: '土井利忠 — 幕末の大野藩主。藩校明倫館を設立し、洋学を奨励した開明的藩主。', zhTw: '土井利忠 — 幕末大野藩主。設立藩校明倫館，獎勵洋學的開明藩主。', en: 'Doi Toshitada — Bakumatsu lord who founded the Meirinkan academy and promoted Western learning.' },
    ],
    trivia: [
      { ja: '秋から冬にかけて雲海に包まれる姿から「天空の城」と呼ばれ、竹田城と並ぶ人気スポット。', zhTw: '因秋冬被雲海包圍的姿態而被稱為「天空之城」，與竹田城並列的人氣景點。', en: 'Wrapped in sea-of-clouds from autumn to winter, earning the name "Castle in the Sky" — rivaling Takeda Castle in popularity.' },
      { ja: '大野市は「水の街」として知られ、城下には湧水が豊富で名水百選に選ばれている。', zhTw: '大野市以「水之街」聞名，城下湧水豐富，入選名水百選。', en: 'Ōno is known as a "City of Water" — its abundant springs are recognized among Japan\'s 100 Best Waters.' },
      { ja: '復興天守は1968年に建てられた鉄筋コンクリート造だが、外観は江戸期の姿を再現。', zhTw: '復興天守建於1968年，為鋼筋混凝土造，但外觀再現了江戶時期的樣貌。', en: 'The 1968 reconstructed keep is reinforced concrete but faithfully reproduces the Edo-era exterior.' },
    ],
    highlights: [
      { ja: '天空の城 — 10月～4月の早朝、雲海に浮かぶ幻想的な城の姿が見られる。', zhTw: '天空之城 — 10月至4月清晨可見漂浮在雲海中的夢幻城景。', en: 'Castle in the Sky — from October to April, early risers can see the castle floating above a sea of clouds.' },
      { ja: '復興天守 — 亀山山頂に建つ二層三階の天守。大野盆地を360度見渡せる。', zhTw: '復興天守 — 建於龜山山頂的二層三階天守。可360度俯瞰大野盆地。', en: 'Reconstructed keep — a two-layer, three-story tower atop Kameyama with 360-degree views of the Ōno basin.' },
      { ja: '野面積み石垣 — 金森長近時代の石垣が残り、築城当時の技術を伝える。', zhTw: '野面積石垣 — 金森長近時代的石垣殘存，傳承築城當時的技術。', en: 'Rough-stacked stone walls from Nagachika\'s era survive, conveying original construction techniques.' },
    ],
    architecture: [
      { ja: '標高249mの亀山に築かれた平山城。山頂に天守、山麓に居館を配した。', zhTw: '建於標高249公尺龜山的平山城。山頂配置天守，山麓配置居館。', en: 'A hilltop castle on 249 m Kameyama, with the keep on the summit and residential quarters at the base.' },
      { ja: '石垣は野面積みで、金森長近が飛騨高山城でも見せた堅実な築城技術が窺える。', zhTw: '石垣為野面積，可見金森長近在飛驒高山城也展現的堅實築城技術。', en: 'The rough-stacked stonework reflects Nagachika\'s solid engineering, also seen at Hida-Takayama Castle.' },
    ],
  },
  {
    id: 'ogaki',
    number: 124,
    regionId: 'chubu',
    name: { ja: '大垣城', zhTw: '大垣城', en: 'Ōgaki Castle' },
    city: { ja: '大垣市', zhTw: '大垣市', en: 'Ōgaki' },
    prefecture: { ja: '岐阜県', zhTw: '岐阜縣', en: 'Gifu' },
    type: 'hirajiro',
    designation: '市指定史跡',
    position: { x: 60, y: 56 },
    illustration: { style: 'classic', tiers: 4, color: '#F5F5F5', roofColor: '#2C3E50' },
    goshuin: { bg: '#f5f5f5', ink: '#2c3e50', seal: '#c0392b', crest: '#2C3E50' },
    history: [
      { ja: '1535年、宮川安定が築城。美濃国の要衝として戦国時代を通じて争奪の的となった。', zhTw: '1535年宮川安定築城。作為美濃國要衝，整個戰國時代都是爭奪對象。', en: 'Built in 1535 by Miyakawa Yasusada; as a strategic Mino stronghold, it was contested throughout the Sengoku period.' },
      { ja: '関ヶ原の戦いでは石田三成が本陣を置き、西軍の拠点として重要な役割を果たした。', zhTw: '關原之戰中石田三成在此設本陣，作為西軍據點發揮重要作用。', en: 'At Sekigahara, Ishida Mitsunari made it his headquarters, and it served as a key Western Army base.' },
      { ja: '三成は当初大垣城での籠城を計画したが、家康の誘いに乗り関ヶ原に出陣して敗北した。', zhTw: '三成原本計畫在大垣城籠城，但中了家康的誘計出陣關原而敗北。', en: 'Mitsunari initially planned to hold up in Ōgaki, but Ieyasu lured him out to Sekigahara, where he was defeated.' },
      { ja: '戦前は国宝天守だったが、1945年の空襲で焼失。1959年に鉄筋コンクリートで復興された。', zhTw: '戰前為國寶天守，但1945年空襲中燒毀。1959年以鋼筋混凝土復興。', en: 'The keep was a National Treasure before WWII, but burned in the 1945 air raids; rebuilt in concrete in 1959.' },
    ],
    figures: [
      { ja: '石田三成 — 豊臣政権の奉行。関ヶ原の戦いで大垣城を西軍の中心拠点とした。', zhTw: '石田三成 — 豐臣政權奉行。關原之戰中以大垣城為西軍中心據點。', en: 'Ishida Mitsunari — Toyotomi administrator who made Ōgaki the Western Army\'s central base at Sekigahara.' },
      { ja: '戸田氏鉄 — 関ヶ原後に入封した譜代大名。戸田氏が幕末まで10代にわたり治めた。', zhTw: '戶田氏鐵 — 關原後入封的譜代大名。戶田氏治理了十代直到幕末。', en: 'Toda Ujikane — the fudai lord installed after Sekigahara; the Toda governed for ten generations to the Bakumatsu.' },
    ],
    trivia: [
      { ja: '松尾芭蕉「奥の細道」の結びの地が大垣で、城近くに芭蕉の句碑がある。', zhTw: '松尾芭蕉「奧之細道」的終點在大垣，城附近有芭蕉的句碑。', en: 'Ōgaki is where Matsuo Bashō ended his "Narrow Road to the Deep North"; a haiku monument stands near the castle.' },
      { ja: '大垣は「水の都」と呼ばれ、城の堀にも豊富な地下水が湧き出ている。', zhTw: '大垣被稱為「水都」，城的壕溝中也有豐富的地下水湧出。', en: 'Ōgaki is called "City of Water" — abundant groundwater even feeds the castle moats.' },
      { ja: '戦前の国宝天守の写真が残っており、復興天守はその姿を忠実に再現している。', zhTw: '戰前國寶天守的照片留存，復興天守忠實再現了其樣貌。', en: 'Prewar photos of the National Treasure keep survive, and the reconstruction faithfully reproduces its form.' },
    ],
    highlights: [
      { ja: '復興天守 — 四層四階の白壁の天守。関ヶ原合戦の展示が充実。', zhTw: '復興天守 — 四層四階白壁天守。關原合戰展示充實。', en: 'Reconstructed keep — a four-layer white-walled tower with extensive Sekigahara battle exhibits.' },
      { ja: '戸田氏鉄公騎馬像 — 城前に立つ初代藩主の騎馬像。', zhTw: '戶田氏鐵公騎馬像 — 立於城前的初代藩主騎馬像。', en: 'Toda Ujikane equestrian statue — a mounted figure of the first domain lord standing before the castle.' },
      { ja: '大垣城公園 — 堀と石垣に囲まれた憩いの場。春は桜の名所。', zhTw: '大垣城公園 — 被壕溝和石垣環繞的休憩之地。春天是賞櫻名所。', en: 'Ōgaki Castle Park — a peaceful spot enclosed by moats and walls, famous for spring cherry blossoms.' },
    ],
    architecture: [
      { ja: '本丸・二の丸・三の丸を水堀で囲む輪郭式の平城。天守は四層四階の望楼型。', zhTw: '以水壕環繞本丸、二之丸、三之丸的輪郭式平城。天守為四層四階望樓型。', en: 'A concentric flatland castle with water moats ringing honmaru, ni-no-maru, and san-no-maru; the keep is a four-story watchtower type.' },
      { ja: '関ヶ原の合戦時には堀幅を広げ防御を強化したとされる。', zhTw: '關原合戰時據說加寬壕溝強化了防禦。', en: 'The moats were reportedly widened to strengthen defenses during the Sekigahara campaign.' },
    ],
  },
  {
    id: 'komakiyama',
    number: 125,
    regionId: 'chubu',
    name: { ja: '小牧山城', zhTw: '小牧山城', en: 'Komakiyama Castle' },
    city: { ja: '小牧市', zhTw: '小牧市', en: 'Komaki' },
    prefecture: { ja: '愛知県', zhTw: '愛知縣', en: 'Aichi' },
    type: 'hirayama',
    designation: '国指定史跡',
    position: { x: 63, y: 56 },
    illustration: { style: 'ruins', tiers: 1, color: '#8B8B78', roofColor: '#5A5A48' },
    goshuin: { bg: '#f5f5e8', ink: '#3d3d28', seal: '#8b0000', crest: '#8B8B78' },
    history: [
      { ja: '1563年、織田信長が美濃攻略の前線基地として築城。信長が初めて築いた本格的な城。', zhTw: '1563年織田信長作為美濃攻略的前線基地而築城。信長首次築建的正式城郭。', en: 'Built in 1563 by Oda Nobunaga as his forward base for conquering Mino — the first full castle Nobunaga ever built.' },
      { ja: '信長は小牧山城から岐阜城へ本拠を移すまでの約4年間をここで過ごした。', zhTw: '信長從小牧山城遷移本據至岐阜城前，在此度過了約4年。', en: 'Nobunaga spent about four years here before moving his headquarters to Gifu Castle.' },
      { ja: '1584年、小牧・長久手の戦いで徳川家康がこの城に陣を構え、豊臣秀吉と対峙した。', zhTw: '1584年小牧、長久手之戰中德川家康在此城駐陣，與豐臣秀吉對峙。', en: 'In 1584, Ieyasu used this castle as his camp during the Battle of Komaki and Nagakute, facing off against Hideyoshi.' },
      { ja: '近年の発掘で信長時代の石垣が発見され、安土城に先駆けた革新的な築城が判明した。', zhTw: '近年發掘發現了信長時代的石垣，證實了先於安土城的革新性築城。', en: 'Recent excavations uncovered Nobunaga-era stone walls, revealing innovative construction that predated Azuchi Castle.' },
    ],
    figures: [
      { ja: '織田信長 — 小牧山城で石垣を本格的に用いた城造りを初めて試み、後の安土城へとつながった。', zhTw: '織田信長 — 在小牧山城首次嘗試正式使用石垣的築城，連接到後來的安土城。', en: 'Oda Nobunaga — first experimented with full stone-wall construction here, foreshadowing Azuchi Castle.' },
      { ja: '徳川家康 — 小牧・長久手の戦いでこの城を本陣とし、秀吉の大軍を相手に善戦した。', zhTw: '德川家康 — 小牧、長久手之戰中以此城為本陣，善戰對抗秀吉大軍。', en: 'Tokugawa Ieyasu — made this his headquarters at Komaki-Nagakute, holding his own against Hideyoshi\'s vast army.' },
    ],
    trivia: [
      { ja: '2018年の発掘で信長時代の石垣が発見され、「石垣の城は安土城が最初」という定説が覆された。', zhTw: '2018年發掘發現信長時代的石垣，推翻了「石垣城始於安土城」的定論。', en: 'A 2018 excavation found Nobunaga-era walls, overturning the belief that Azuchi was the first stone-walled castle.' },
      { ja: '信長が城下町の原型を小牧山で試みたとされ、後の城下町設計の先駆けと評価される。', zhTw: '信長被認為在小牧山嘗試了城下町的原型，被評為後來城下町設計的先驅。', en: 'Nobunaga is believed to have prototyped the castle-town concept here, pioneering later jōkamachi design.' },
    ],
    highlights: [
      { ja: '信長時代の石垣 — 近年発見された主郭の石垣。安土城以前の革新的遺構。', zhTw: '信長時代石垣 — 近年發現的主郭石垣。安土城之前的革新性遺構。', en: 'Nobunaga-era stone walls — recently discovered main-enclosure walls, a groundbreaking pre-Azuchi relic.' },
      { ja: '小牧山歴史館 — 山頂の模擬天守内。信長と小牧・長久手の戦いの展示。', zhTw: '小牧山歷史館 — 山頂模擬天守內。信長與小牧、長久手之戰的展示。', en: 'Komakiyama History Museum — inside the hilltop mock keep, with exhibits on Nobunaga and the 1584 battle.' },
      { ja: '山頂からの濃尾平野の眺望 — 信長が美濃を見据えた視点を追体験できる。', zhTw: '從山頂眺望濃尾平野 — 可追體驗信長注視美濃的視角。', en: 'Summit views of the Nōbi Plain — experience Nobunaga\'s vantage point as he planned the Mino campaign.' },
    ],
    architecture: [
      { ja: '標高86mの小牧山に築かれた平山城。主郭を中心に放射状に曲輪を配置。', zhTw: '建於標高86公尺小牧山的平山城。以主郭為中心放射狀配置曲輪。', en: 'A hilltop castle on 86 m Komakiyama, with baileys radiating from the main enclosure.' },
      { ja: '発掘で判明した石垣は裏込め石を伴う本格的なもので、信長の築城革新を示す。', zhTw: '發掘揭示的石垣帶有裏込石的正式構造，展示信長的築城革新。', en: 'Excavated walls with proper backfill stones demonstrate Nobunaga\'s castle-building innovations.' },
    ],
  },
  {
    id: 'furumiya',
    number: 126,
    regionId: 'chubu',
    name: { ja: '古宮城', zhTw: '古宮城', en: 'Furumiya Castle' },
    city: { ja: '新城市', zhTw: '新城市', en: 'Shinshiro' },
    prefecture: { ja: '愛知県', zhTw: '愛知縣', en: 'Aichi' },
    type: 'yamajiro',
    designation: '県指定史跡',
    position: { x: 64, y: 57 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#6B7B4B', roofColor: '#3B4B2B' },
    goshuin: { bg: '#f0f5e6', ink: '#3b4b2b', seal: '#a52a2a', crest: '#6B7B4B' },
    history: [
      { ja: '1571年頃、武田信玄が奥三河進出の拠点として家臣の馬場信春に命じて築城させた。', zhTw: '1571年左右武田信玄命家臣馬場信春築城，作為進出奧三河的據點。', en: 'Around 1571, Takeda Shingen ordered his retainer Baba Nobuharu to build this castle as a base for advancing into Mikawa.' },
      { ja: '三河と信濃の境目に位置し、武田と徳川の勢力圏の最前線であった。', zhTw: '位於三河與信濃邊境，是武田與德川勢力圈的最前線。', en: 'Situated on the Mikawa-Shinano border, it stood on the very front line between Takeda and Tokugawa territories.' },
      { ja: '1573年、武田信玄の死後に徳川方に攻略され、まもなく廃城となった。', zhTw: '1573年武田信玄死後被德川方攻下，不久便廢城。', en: 'After Shingen\'s death in 1573, Tokugawa forces captured it, and it was soon abandoned.' },
    ],
    figures: [
      { ja: '馬場信春 — 武田四天王の一人。築城の名手として知られ、古宮城の縄張りを担当した。', zhTw: '馬場信春 — 武田四天王之一。以築城名手聞名，負責古宮城的繩張。', en: 'Baba Nobuharu — one of Takeda\'s Four Guardians, a master castle builder who designed Furumiya\'s layout.' },
      { ja: '武田信玄 — 三河侵攻の野望をもち、古宮城を前線基地として築かせた。', zhTw: '武田信玄 — 懷有三河侵攻的野心，命人築建古宮城作為前線基地。', en: 'Takeda Shingen — driven by ambitions in Mikawa, he had Furumiya built as his forward operating base.' },
    ],
    trivia: [
      { ja: '白鳥神社の境内に城跡があり、神社の杉の巨木が城跡の雰囲気を一層引き立てる。', zhTw: '城跡位於白鳥神社境內，神社的巨杉更襯托出城跡的氛圍。', en: 'The ruins sit within Shiratori Shrine grounds, where giant cedars enhance the atmospheric setting.' },
      { ja: '小さな城ながら馬場信春の設計による精緻な縄張りは「教科書的山城」と称される。', zhTw: '雖是小城，馬場信春設計的精緻繩張被稱為「教科書般的山城」。', en: 'Though small, Baba Nobuharu\'s refined layout earns it the title "textbook mountain castle."' },
      { ja: '奥三河の山間部にひっそりと佇む隠れた名城で、訪れる人は少ないが評価は高い。', zhTw: '靜靜佇立於奧三河山間的隱藏名城，訪客雖少但評價甚高。', en: 'A hidden gem in the Oku-Mikawa mountains — few visitors, but highly regarded by experts.' },
    ],
    highlights: [
      { ja: '主郭の堀切 — 尾根を断ち切る大堀切は圧巻の規模。', zhTw: '主郭堀切 — 切斷山脊的大堀切規模壯觀。', en: 'Main enclosure ridge-cut — a massive trench severing the ridgeline, impressive in scale.' },
      { ja: '横堀群 — 山腹を巡る複数の横堀は武田流築城術の精華。', zhTw: '橫壕群 — 環繞山腹的多條橫壕是武田流築城術的精華。', en: 'Lateral moat system — multiple trenches ringing the hillside, showcasing Takeda fortification at its best.' },
      { ja: '白鳥神社の巨杉 — 城跡を守るかのように立つ樹齢数百年の御神木。', zhTw: '白鳥神社巨杉 — 如守護城跡般矗立的數百年御神木。', en: 'Shiratori Shrine giant cedars — centuries-old sacred trees standing as if guarding the ruins.' },
    ],
    architecture: [
      { ja: '標高301mの丘に築かれた小規模ながら精緻な縄張りの山城。', zhTw: '建於標高301公尺丘陵上，規模雖小但繩張精緻的山城。', en: 'A compact but meticulously designed mountain castle on a 301 m hill.' },
      { ja: '東西二つの曲輪を大堀切で分断し、横堀と竪堀を駆使した武田流の典型的防御設計。', zhTw: '以大堀切分隔東西兩曲輪，運用橫壕和豎壕的武田流典型防禦設計。', en: 'Two enclosures divided by a great ridge-cut, with Takeda-typical lateral and vertical moats for layered defense.' },
    ],
  },

  // ── 続100名城 #127-132 中部/近畿 ──
  {
    id: 'yoshida',
    number: 127,
    regionId: 'chubu',
    name: { ja: '吉田城', zhTw: '吉田城', en: 'Yoshida Castle' },
    city: { ja: '豊橋市', zhTw: '豐橋市', en: 'Toyohashi' },
    prefecture: { ja: '愛知県', zhTw: '愛知縣', en: 'Aichi' },
    type: 'hirajiro',
    designation: '市指定史跡',
    position: { x: 65, y: 58 },
    illustration: { style: 'tower', tiers: 1, color: '#E8E0D0', roofColor: '#3A4A3A' },
    goshuin: { bg: '#f5f0e8', ink: '#3a4a3a', seal: '#c0392b', crest: '#3A4A3A' },
    history: [
      { ja: '1505年、牧野古白が今橋城として築城。東三河の要衝として争奪が繰り返された。', zhTw: '1505年牧野古白築建今橋城。作為東三河要衝反覆被爭奪。', en: 'Built in 1505 by Makino Kohaku as Imahashi Castle; repeatedly fought over as the key to eastern Mikawa.' },
      { ja: '今川・武田・徳川と主が替わり、最終的に徳川家康の支配下で酒井忠次が城主となった。', zhTw: '歷經今川、武田、德川易主，最終在德川家康支配下由酒井忠次擔任城主。', en: 'It changed hands among the Imagawa, Takeda, and Tokugawa; Sakai Tadatsugu became lord under Ieyasu.' },
      { ja: '酒井忠次は徳川四天王の筆頭として、吉田城を東三河の統治拠点に整備した。', zhTw: '酒井忠次作為德川四天王之首，將吉田城整備為東三河的統治據點。', en: 'Sakai Tadatsugu, foremost of the Four Heavenly Kings, developed Yoshida into the governing center of eastern Mikawa.' },
      { ja: '江戸時代は譜代大名が次々と入封し、東海道吉田宿の城下町として繁栄した。', zhTw: '江戶時代譜代大名陸續入封，作為東海道吉田宿的城下町而繁榮。', en: 'Fudai lords rotated through in the Edo period, and the castle town prospered as Yoshida-juku on the Tōkaidō.' },
    ],
    figures: [
      { ja: '酒井忠次 — 徳川四天王の筆頭。長篠の戦いで鳶ヶ巣山急襲を成功させた勇将。', zhTw: '酒井忠次 — 德川四天王之首。長篠之戰中成功急襲鳶巢山的勇將。', en: 'Sakai Tadatsugu — head of the Four Heavenly Kings, famed for the surprise attack at Tobigasu at Nagashino.' },
      { ja: '池田輝政 — 吉田城を大改修した名城主。後に姫路城を築いた「姫路宰相」。', zhTw: '池田輝政 — 大幅改建吉田城的名城主。後來築建姫路城的「姫路宰相」。', en: 'Ikeda Terumasa — the lord who extensively renovated Yoshida, later known as the "Chancellor of Himeji" for building Himeji Castle.' },
    ],
    trivia: [
      { ja: '歌川広重の東海道五十三次「吉田」には吉田城の櫓と城下の賑わいが描かれている。', zhTw: '歌川廣重的東海道五十三次「吉田」描繪了吉田城的櫓與城下的熱鬧景象。', en: 'Hiroshige\'s "Yoshida" in the Fifty-Three Stations of the Tōkaidō depicts the castle turret and bustling town.' },
      { ja: '豊橋の手筒花火は吉田神社の祭礼が起源で、城下町の伝統文化として受け継がれている。', zhTw: '豐橋的手筒煙火起源於吉田神社的祭禮，作為城下町的傳統文化傳承至今。', en: 'Toyohashi\'s hand-held fireworks originated from Yoshida Shrine festivals, a castle-town tradition still alive today.' },
    ],
    highlights: [
      { ja: '鉄櫓（復元） — 豊川を背にそびえる吉田城のシンボル。川面に映る姿が美しい。', zhTw: '鐵櫓（復原） — 背對豐川聳立的吉田城象徵。映照在河面的姿態很美。', en: 'Iron turret (reconstructed) — Yoshida\'s symbol towering above the Toyo River, beautifully reflected in the water.' },
      { ja: '豊川越しの眺望 — 鉄櫓から豊川と東三河の平野を一望する。', zhTw: '豐川越景 — 從鐵櫓可一覽豐川與東三河平野。', en: 'Toyo River panorama — sweeping views from the turret across the river and the eastern Mikawa plain.' },
    ],
    architecture: [
      { ja: '豊川に面した断崖を天然の堀とする平城。北は川、三方を水堀で囲む。', zhTw: '以面向豐川的斷崖為天然壕溝的平城。北面為河，三面以水壕環繞。', en: 'A flatland castle using the Toyo River cliff as a natural moat; the river guards the north, water moats the other sides.' },
      { ja: '池田輝政が石垣を整備し近世城郭として完成させたが、天守は築かれなかった。', zhTw: '池田輝政整備石垣使其成為近世城郭，但未築建天守。', en: 'Ikeda Terumasa built the stone walls into an early-modern castle, though no keep was ever constructed.' },
    ],
  },
  {
    id: 'tsu',
    number: 128,
    regionId: 'kinki',
    name: { ja: '津城', zhTw: '津城', en: 'Tsu Castle' },
    city: { ja: '津市', zhTw: '津市', en: 'Tsu' },
    prefecture: { ja: '三重県', zhTw: '三重縣', en: 'Mie' },
    type: 'hirajiro',
    designation: '県指定史跡',
    position: { x: 60, y: 64 },
    illustration: { style: 'ruins', tiers: 1, color: '#8B8878', roofColor: '#5A5848' },
    goshuin: { bg: '#f5f0e8', ink: '#3d3828', seal: '#c44', crest: '#8B8878' },
    history: [
      { ja: '1558年、織田信長の弟・織田信包が安濃津城として築城を開始。', zhTw: '1558年織田信長之弟織田信包開始築建安濃津城。', en: 'In 1558, Oda Nobukane (Nobunaga\'s brother) began building Anotsu Castle.' },
      { ja: '関ヶ原の戦い前哨戦として安濃津城の戦いが起こり、西軍に攻められて開城。', zhTw: '作為關原之戰前哨戰發生了安濃津城之戰，被西軍攻陷開城。', en: 'The Battle of Anotsu — a Sekigahara prelude — saw the castle attacked and surrendered to the Western Army.' },
      { ja: '1608年、藤堂高虎が入封し、大規模な改修で近世城郭として完成させた。', zhTw: '1608年藤堂高虎入封，進行大規模改建使其成為近世城郭。', en: 'In 1608, Tōdō Takatora took over and extensively rebuilt it into a full early-modern castle.' },
      { ja: '藤堂氏は伊勢・伊賀32万石の大名として幕末まで津藩を治めた。', zhTw: '藤堂氏作為伊勢、伊賀32萬石的大名治理津藩至幕末。', en: 'The Tōdō governed Tsu domain — 320,000 koku across Ise and Iga — until the Bakumatsu.' },
    ],
    figures: [
      { ja: '藤堂高虎 — 築城の名手。今治城・伊賀上野城なども手がけた城造りの天才。', zhTw: '藤堂高虎 — 築城名手。也負責今治城、伊賀上野城等的築城天才。', en: 'Tōdō Takatora — a genius castle builder who also designed Imabari and Iga-Ueno castles.' },
      { ja: '織田信包 — 信長の弟。本能寺の変後も生き延び、津の基礎を築いた。', zhTw: '織田信包 — 信長之弟。本能寺之變後仍存活，奠定了津的基礎。', en: 'Oda Nobukane — Nobunaga\'s brother who survived Honnō-ji and laid Tsu\'s foundations.' },
    ],
    trivia: [
      { ja: '「津」は日本一短い地名で、城名も「津城」の二文字と最短クラス。', zhTw: '「津」是日本最短的地名，城名「津城」兩字也是最短等級。', en: '"Tsu" is Japan\'s shortest place name, and "Tsu Castle" is among the shortest castle names.' },
      { ja: '藤堂高虎は生涯で主君を7度替えた異色の経歴を持つが、築城技術は天下一と称された。', zhTw: '藤堂高虎一生更換了7次主君的異色經歷，但築城技術被稱為天下第一。', en: 'Takatora served seven masters in his career — unusual — but his castle-building skill was called the finest in Japan.' },
    ],
    highlights: [
      { ja: '本丸石垣 — 藤堂高虎が築いた高石垣が内堀沿いに残り、築城技術を堪能できる。', zhTw: '本丸石垣 — 藤堂高虎築建的高石垣沿內壕殘存，可欣賞築城技術。', en: 'Honmaru stone walls — Takatora\'s tall walls along the inner moat, showcasing his engineering mastery.' },
      { ja: '内堀と丑寅櫓台 — 復元された三重の丑寅櫓台から城の規模が偲ばれる。', zhTw: '內壕與丑寅櫓台 — 從復原的三重丑寅櫓台可追憶城的規模。', en: 'Inner moat and northeast turret platform — the reconstructed platform hints at the castle\'s former scale.' },
      { ja: '高山神社 — 藤堂高虎を祀る城内の神社。', zhTw: '高山神社 — 祭祀藤堂高虎的城內神社。', en: 'Takayama Shrine — dedicated to Tōdō Takatora within the castle grounds.' },
    ],
    architecture: [
      { ja: '本丸を二重の水堀で囲む輪郭式平城。藤堂高虎が得意とする高石垣と広い堀が特徴。', zhTw: '以雙重水壕環繞本丸的輪郭式平城。以藤堂高虎擅長的高石垣和寬壕溝為特色。', en: 'A concentric flatland castle with double water moats; tall stone walls and wide moats — Takatora\'s signature style.' },
      { ja: '石垣は切込み接ぎの整然とした技法で、伊賀上野城と共通する藤堂流築城術が見られる。', zhTw: '石垣為切込接的整齊技法，可見與伊賀上野城共通的藤堂流築城術。', en: 'The precisely fitted stone walls share the Tōdō construction style also seen at Iga-Ueno Castle.' },
    ],
  },
  {
    id: 'kitabatake',
    number: 129,
    regionId: 'kinki',
    name: { ja: '多気北畠氏城館', zhTw: '多氣北畠氏城館', en: 'Taki Kitabatake Residence' },
    city: { ja: '津市', zhTw: '津市', en: 'Tsu' },
    prefecture: { ja: '三重県', zhTw: '三重縣', en: 'Mie' },
    type: 'yakata',
    designation: '国指定史跡',
    position: { x: 59, y: 65 },
    illustration: { style: 'mansion', tiers: 1, color: '#8B7B5B', roofColor: '#4A3B2B' },
    goshuin: { bg: '#f5efe5', ink: '#4a3b2b', seal: '#8b0000', crest: '#8B7B5B' },
    history: [
      { ja: '南北朝時代、南朝の忠臣・北畠顕能が伊勢国司として多気に館を構えた。', zhTw: '南北朝時代南朝忠臣北畠顯能作為伊勢國司在多氣建立了居館。', en: 'During the Nanboku-chō period, Kitabatake Akinō, loyal to the Southern Court, established his residence in Taki as Ise Governor.' },
      { ja: '北畠氏は伊勢国司として約240年にわたり伊勢を統治した名族。', zhTw: '北畠氏作為伊勢國司約240年間統治伊勢的名族。', en: 'The Kitabatake governed Ise as provincial governors for about 240 years — a distinguished lineage.' },
      { ja: '1569年、織田信長の伊勢侵攻により北畠具教は降伏。信長の次男・信雄を養子に迎えた。', zhTw: '1569年織田信長侵攻伊勢，北畠具教投降。迎織田信長次男信雄為養子。', en: 'In 1569, Nobunaga\'s Ise campaign forced Kitabatake Tomonori to surrender; he adopted Nobunaga\'s second son Nobukatsu.' },
      { ja: '1576年、北畠具教は織田信雄の手の者により暗殺され、北畠氏は実質的に滅亡した。', zhTw: '1576年北畠具教被織田信雄的手下暗殺，北畠氏實質上滅亡。', en: 'In 1576, Tomonori was assassinated by Nobukatsu\'s agents, effectively ending the Kitabatake.' },
    ],
    figures: [
      { ja: '北畠顕能 — 北畠親房の三男。南朝方として伊勢に入り、北畠氏伊勢支配の祖となった。', zhTw: '北畠顯能 — 北畠親房三男。以南朝方進入伊勢，成為北畠氏伊勢支配之祖。', en: 'Kitabatake Akinō — Chikafusa\'s third son, who entered Ise for the Southern Court and founded Kitabatake rule there.' },
      { ja: '北畠具教 — 剣豪としても知られた最後の国司。塚原卜伝に師事した達人。', zhTw: '北畠具教 — 作為劍豪也聞名的最後國司。師從塚原卜傳的達人。', en: 'Kitabatake Tomonori — the last governor, also renowned as a swordsman who trained under Tsukahara Bokuden.' },
    ],
    trivia: [
      { ja: '北畠神社の境内にある庭園は室町時代の作庭で、国の名勝・史跡に指定されている。', zhTw: '北畠神社境內的庭園為室町時代的造園，被指定為國家名勝、史跡。', en: 'The garden within Kitabatake Shrine dates to the Muromachi period and is designated a National Place of Scenic Beauty.' },
      { ja: '北畠親房の「神皇正統記」は南朝の正統性を主張した日本思想史の重要書。', zhTw: '北畠親房的《神皇正統記》是主張南朝正統性的日本思想史重要著作。', en: 'Chikafusa\'s "Jinnō Shōtōki" is a seminal text asserting the Southern Court\'s legitimacy in Japanese intellectual history.' },
    ],
    highlights: [
      { ja: '北畠氏館跡庭園 — 室町期の池泉回遊式庭園。国の名勝に指定。', zhTw: '北畠氏館跡庭園 — 室町時期的池泉回遊式庭園。指定為國家名勝。', en: 'Kitabatake Residence Garden — a Muromachi-period strolling pond garden, a designated National Scenic Site.' },
      { ja: '北畠神社 — 館跡に建つ北畠氏を祀る神社。', zhTw: '北畠神社 — 建於館跡的北畠氏神社。', en: 'Kitabatake Shrine — a shrine on the residence site dedicated to the Kitabatake clan.' },
      { ja: '詰城・霧山城跡 — 館の背後の山にある詰城からの眺望。', zhTw: '詰城、霧山城跡 — 從館背後山上的詰城眺望。', en: 'Kiriyama Castle ruins — the refuge castle on the mountain behind the residence, with sweeping views.' },
    ],
    architecture: [
      { ja: '平地の居館と背後の山に詰城（霧山城）を配した中世武家居館の典型的な構成。', zhTw: '平地居館與背後山上配置詰城（霧山城）的中世武家居館典型構成。', en: 'A classic medieval warrior-residence layout: a flatland mansion with a refuge castle (Kiriyama) on the mountain behind.' },
      { ja: '館跡からは礎石や堀跡が発見され、国司にふさわしい格式の高い建物群があったと推定される。', zhTw: '館跡發現了礎石和壕跡，推定曾有與國司相稱的格式高建築群。', en: 'Foundation stones and moat traces suggest buildings befitting a provincial governor\'s dignity.' },
    ],
  },
  {
    id: 'tamaru',
    number: 130,
    regionId: 'kinki',
    name: { ja: '田丸城', zhTw: '田丸城', en: 'Tamaru Castle' },
    city: { ja: '玉城町', zhTw: '玉城町', en: 'Tamaki' },
    prefecture: { ja: '三重県', zhTw: '三重縣', en: 'Mie' },
    type: 'hirayama',
    designation: '県指定史跡',
    position: { x: 60, y: 66 },
    illustration: { style: 'ruins', tiers: 1, color: '#9A9A80', roofColor: '#5A5A40' },
    goshuin: { bg: '#f5f5e8', ink: '#3d3d28', seal: '#c0392b', crest: '#9A9A80' },
    history: [
      { ja: '南北朝時代の1336年、北畠親房・顕信父子が南朝方の拠点として築城。', zhTw: '南北朝時代1336年北畠親房、顯信父子作為南朝方據點而築城。', en: 'In 1336, Kitabatake Chikafusa and his son Akiaki built it as a Southern Court stronghold.' },
      { ja: '1569年、織田信長の伊勢平定後に信長の次男・織田信雄が入城し大改修を行った。', zhTw: '1569年織田信長平定伊勢後，信長次男織田信雄入城並進行大改修。', en: 'After Nobunaga\'s 1569 conquest of Ise, his second son Nobukatsu entered and extensively renovated the castle.' },
      { ja: '信雄は天守を築いたが1580年に失火で焼失。信雄は松ヶ島城に移り、田丸城は衰退した。', zhTw: '信雄築了天守但1580年失火燒毀。信雄遷往松島城，田丸城衰退。', en: 'Nobukatsu built a keep, but it burned accidentally in 1580; he moved to Matsugashima, and Tamaru declined.' },
    ],
    figures: [
      { ja: '北畠親房 — 南朝の重鎮。「神皇正統記」の著者で、田丸城を南朝の前線基地とした。', zhTw: '北畠親房 — 南朝重臣。《神皇正統記》作者，以田丸城為南朝前線基地。', en: 'Kitabatake Chikafusa — Southern Court pillar and author of "Jinnō Shōtōki," who used Tamaru as his front-line base.' },
      { ja: '織田信雄 — 信長の次男。北畠氏を継いだが、本能寺の変後は秀吉と対立した。', zhTw: '織田信雄 — 信長次男。繼承北畠氏，但本能寺之變後與秀吉對立。', en: 'Oda Nobukatsu — Nobunaga\'s second son who inherited the Kitabatake name, later clashing with Hideyoshi.' },
    ],
    trivia: [
      { ja: '天守台の石垣が美しく残り、三重県内で天守台が残る数少ない城の一つ。', zhTw: '天守台石垣保存完好，是三重縣內少數殘存天守台的城之一。', en: 'The keep platform\'s stone walls survive beautifully — one of few castles in Mie with an intact keep platform.' },
      { ja: '玉城町の町名は田丸城に由来し、城は地域のアイデンティティの中心。', zhTw: '玉城町的町名源自田丸城，城是地區認同的中心。', en: 'The town name Tamaki derives from Tamaru Castle — the castle remains central to the community\'s identity.' },
    ],
    highlights: [
      { ja: '天守台石垣 — 織田信雄時代の石垣が見事に残る。城跡最大の見どころ。', zhTw: '天守台石垣 — 織田信雄時代的石垣保存完好。城跡最大看點。', en: 'Keep platform walls — splendidly preserved stonework from Nobukatsu\'s era, the site\'s top attraction.' },
      { ja: '本丸からの伊勢平野の眺望 — お伊勢参りの街道を見下ろす景色。', zhTw: '從本丸眺望伊勢平野 — 俯瞰伊勢參拜街道的景色。', en: 'Honmaru views of the Ise Plain — overlooking the pilgrimage road to Ise Grand Shrine.' },
    ],
    architecture: [
      { ja: '丘陵に本丸・二の丸・北の丸を配した梯郭式の平山城。', zhTw: '在丘陵上配置本丸、二之丸、北之丸的梯郭式平山城。', en: 'A tiered hilltop castle with honmaru, ni-no-maru, and kita-no-maru on the hill.' },
      { ja: '天守台の石垣は打込み接ぎで、織田信雄が持ち込んだ近世的な石垣技術を示す。', zhTw: '天守台石垣為打込接，展示織田信雄引入的近世石垣技術。', en: 'The keep platform\'s fitted stonework demonstrates the early-modern techniques Nobukatsu introduced.' },
    ],
  },
  {
    id: 'akagi',
    number: 131,
    regionId: 'kinki',
    name: { ja: '赤木城', zhTw: '赤木城', en: 'Akagi Castle' },
    city: { ja: '熊野市', zhTw: '熊野市', en: 'Kumano' },
    prefecture: { ja: '三重県', zhTw: '三重縣', en: 'Mie' },
    type: 'hirayama',
    designation: '国指定史跡',
    position: { x: 58, y: 67 },
    illustration: { style: 'ruins', tiers: 1, color: '#8A8A70', roofColor: '#5A5A40' },
    goshuin: { bg: '#f5f5e8', ink: '#3d3d28', seal: '#a52a2a', crest: '#8A8A70' },
    history: [
      { ja: '1589年頃、藤堂高虎が熊野地方の統治と北山一揆の鎮圧のために築城。', zhTw: '1589年左右藤堂高虎為統治熊野地方及鎮壓北山一揆而築城。', en: 'Around 1589, Tōdō Takatora built this castle to govern the Kumano region and suppress the Kitayama Revolt.' },
      { ja: '北山一揆は秀吉の政策に反発した紀伊山地の民衆蜂起で、激しい戦いが繰り広げられた。', zhTw: '北山一揆是紀伊山地民眾反抗秀吉政策的起義，發生了激烈的戰鬥。', en: 'The Kitayama Revolt was a fierce popular uprising in the Kii mountains against Hideyoshi\'s policies.' },
      { ja: '一揆鎮圧後に藤堂高虎は転封となり、赤木城は短期間で廃城となった。', zhTw: '一揆鎮壓後藤堂高虎轉封，赤木城在短期間內廢城。', en: 'After the revolt was crushed, Takatora was transferred, and Akagi was abandoned after only a brief period.' },
    ],
    figures: [
      { ja: '藤堂高虎 — 築城名人として知られ、紀伊山中の要害に見事な石垣の城を築いた。', zhTw: '藤堂高虎 — 以築城名人聞名，在紀伊山中要害築建了精美石垣的城。', en: 'Tōdō Takatora — renowned castle builder who raised impressive stone walls deep in the Kii mountains.' },
    ],
    trivia: [
      { ja: '「藤堂高虎の築城術を最もよく伝える城」として専門家から高く評価されている。', zhTw: '被專家高度評價為「最能傳達藤堂高虎築城術的城」。', en: 'Experts consider it "the castle that best conveys Tōdō Takatora\'s fortification art."' },
      { ja: '紀伊山地の奥深くにあるため訪問者は少ないが、石垣の保存状態は極めて良好。', zhTw: '因位於紀伊山地深處訪客稀少，但石垣保存狀態極為良好。', en: 'Deep in the Kii mountains and rarely visited, but the stone walls are preserved in excellent condition.' },
      { ja: '秋の早朝には雲海に浮かぶ姿が見られ、「もう一つの天空の城」と呼ばれることも。', zhTw: '秋天清晨可見漂浮在雲海中的姿態，有時被稱為「另一座天空之城」。', en: 'On autumn mornings it floats in a sea of clouds, sometimes called "another castle in the sky."' },
    ],
    highlights: [
      { ja: '本丸石垣 — 藤堂高虎の初期の築城技術を伝える精緻な石垣群。', zhTw: '本丸石垣 — 傳達藤堂高虎初期築城技術的精緻石垣群。', en: 'Honmaru stone walls — refined stonework conveying Takatora\'s early fortification techniques.' },
      { ja: '虎口（枡形） — 巧みに設計された城の入口。高虎の防御思想が凝縮されている。', zhTw: '虎口（枡形） — 巧妙設計的城入口。凝縮了高虎的防禦思想。', en: 'Bent entrance (masugata) — an ingeniously designed gateway embodying Takatora\'s defensive philosophy.' },
      { ja: '紀伊山地の絶景 — 山深い場所ならではの雄大な自然の眺望。', zhTw: '紀伊山地絕景 — 深山獨有的壯闊自然眺望。', en: 'Kii mountain panorama — majestic natural scenery unique to this remote mountain location.' },
    ],
    architecture: [
      { ja: '標高230mの丘陵に築かれた石垣造りの平山城。主郭を中心に東郭・北郭を配す。', zhTw: '建於標高230公尺丘陵的石垣造平山城。以主郭為中心配置東郭、北郭。', en: 'A stone-walled hilltop castle at 230 m, with east and north enclosures around the main bailey.' },
      { ja: '藤堂高虎初期の石垣技術を示し、後の今治城・津城への発展過程が窺える貴重な遺構。', zhTw: '展示藤堂高虎初期石垣技術，可窺見後來今治城、津城發展過程的珍貴遺構。', en: 'A precious relic showing Takatora\'s early stonework, hinting at the evolution toward his later masterpieces at Imabari and Tsu.' },
    ],
  },
  {
    id: 'kamaha',
    number: 132,
    regionId: 'kinki',
    name: { ja: '鎌刃城', zhTw: '鎌刃城', en: 'Kamaha Castle' },
    city: { ja: '米原市', zhTw: '米原市', en: 'Maibara' },
    prefecture: { ja: '滋賀県', zhTw: '滋賀縣', en: 'Shiga' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 58, y: 60 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#7A7A5A', roofColor: '#3A3A2A' },
    goshuin: { bg: '#f5f5e8', ink: '#3a3a2a', seal: '#8b0000', crest: '#7A7A5A' },
    history: [
      { ja: '築城時期は不明だが、鎌倉時代には既に存在していたとされる近江の境目の城。', zhTw: '築城時期不明，但據說鎌倉時代已存在的近江邊境之城。', en: 'Its founding is unknown, but this border castle in Ōmi is believed to have existed since the Kamakura period.' },
      { ja: '北近江の浅井氏と南近江の六角氏の勢力圏の境に位置し、両者の争奪の的となった。', zhTw: '位於北近江淺井氏與南近江六角氏勢力圈的邊境，成為雙方爭奪的對象。', en: 'Situated on the border between the Azai (north) and Rokkaku (south), it was contested by both clans.' },
      { ja: '織田信長の近江侵攻時には城主の堀秀村が信長に味方したが、後に浅井方に寝返り改易された。', zhTw: '織田信長侵攻近江時城主堀秀村投靠信長，但後來倒向淺井方被改易。', en: 'During Nobunaga\'s Ōmi invasion, lord Hori Hidemura sided with Nobunaga but later defected to the Azai and was dispossessed.' },
    ],
    figures: [
      { ja: '堀秀村 — 鎌刃城最後の城主。樋口直房（後の堀秀政の父とされる）が家老として補佐した。', zhTw: '堀秀村 — 鎌刃城最後的城主。樋口直房（後被認為是堀秀政之父）作為家老輔佐。', en: 'Hori Hidemura — last lord of Kamaha, assisted by his chief retainer Higuchi Naofusa.' },
    ],
    trivia: [
      { ja: '中山道の番場宿に隣接し、交通の要衝を押さえる国境の城として重要だった。', zhTw: '鄰接中山道番場宿，作為控制交通要衝的國境之城而重要。', en: 'Adjacent to Banba-juku on the Nakasendō, it was vital as a border castle commanding a major road.' },
      { ja: '城跡へのアクセスは険しい山道で、「たどり着くのが一番難しい100名城」と言われることも。', zhTw: '前往城跡的山路險峻，有時被稱為「最難到達的100名城」。', en: 'The steep mountain trail earns it a reputation as "the hardest of the 100 Famous Castles to reach."' },
      { ja: '2017年に国史跡に指定され、近年は整備が進み訪問しやすくなっている。', zhTw: '2017年被指定為國史跡，近年整備進展使訪問更加便利。', en: 'Designated a National Historic Site in 2017, recent improvements have made it more accessible.' },
    ],
    highlights: [
      { ja: '大堀切 — 南北の曲輪を分断する巨大な堀切は必見。', zhTw: '大堀切 — 分隔南北曲輪的巨大堀切必看。', en: 'Great ridge-cut — the massive trench dividing the north and south enclosures is a must-see.' },
      { ja: '主郭の石垣 — 戦国時代の山城としては珍しい本格的な石垣が残る。', zhTw: '主郭石垣 — 作為戰國時代山城罕見的正式石垣殘存。', en: 'Main enclosure stone walls — unusually sophisticated stonework for a Sengoku mountain castle.' },
      { ja: '枡形虎口 — 折れ曲がった城門の構造が良好に残る。', zhTw: '枡形虎口 — 彎折的城門結構保存良好。', en: 'Bent entrance — the zigzag gateway structure is well preserved.' },
    ],
    architecture: [
      { ja: '標高384mの山頂に南北に曲輪を連ねた連郭式山城。大堀切で南北を明確に分断。', zhTw: '在標高384公尺的山頂南北連接曲輪的連郭式山城。以大堀切明確分隔南北。', en: 'A linked-enclosure mountain castle at 384 m, with a great ridge-cut clearly dividing north and south.' },
      { ja: '主郭には戦国期としては先進的な石垣と枡形虎口があり、織豊系城郭への過渡期を示す。', zhTw: '主郭有作為戰國期先進的石垣和枡形虎口，展示邁向織豐系城郭的過渡期。', en: 'The main enclosure\'s advanced stone walls and bent entrance mark a transitional step toward Oda-Toyotomi-era castles.' },
    ],
  },

  // ── 続100名城 #133-138 近畿(続) ──
  {
    id: 'hachimanyama',
    number: 133,
    regionId: 'kinki',
    name: { ja: '八幡山城', zhTw: '八幡山城', en: 'Hachimanyama Castle' },
    city: { ja: '近江八幡市', zhTw: '近江八幡市', en: 'Ōmi-Hachiman' },
    prefecture: { ja: '滋賀県', zhTw: '滋賀縣', en: 'Shiga' },
    type: 'yamajiro',
    designation: '県指定史跡',
    position: { x: 58, y: 61 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#8A8A70', roofColor: '#4A4A30' },
    goshuin: { bg: '#f5f5e8', ink: '#3d3d28', seal: '#c44', crest: '#8A8A70' },
    history: [
      { ja: '1585年、豊臣秀次が叔父・秀吉の命で安土城の隣に築城。近江支配の新拠点とした。', zhTw: '1585年豐臣秀次奉叔父秀吉之命在安土城旁築城，作為近江支配的新據點。', en: 'In 1585, Toyotomi Hidetsugu built this castle next to Azuchi on Hideyoshi\'s orders as a new base for governing Ōmi.' },
      { ja: '秀次は城下に楽市楽座を開き、近江商人発祥の地となる商業都市を築いた。', zhTw: '秀次在城下開設樂市樂座，建立了成為近江商人發祥地的商業都市。', en: 'Hidetsugu opened free markets in the castle town, creating the commercial city that birthed the Ōmi merchants.' },
      { ja: '1595年、秀次が秀吉に疑われ高野山で切腹。八幡山城は廃城となった。', zhTw: '1595年秀次被秀吉猜疑在高野山切腹。八幡山城廢城。', en: 'In 1595, Hidetsugu was suspected by Hideyoshi and forced to commit seppuku at Kōyasan; the castle was abandoned.' },
    ],
    figures: [
      { ja: '豊臣秀次 — 秀吉の甥で養嗣子。関白にまで昇りつめたが、秀頼誕生後に悲劇的な最期を遂げた。', zhTw: '豐臣秀次 — 秀吉的姪子兼養嗣子。升至關白但秀賴出生後悲劇性地死去。', en: 'Toyotomi Hidetsugu — Hideyoshi\'s nephew and adopted heir who rose to regent, but met a tragic end after Hideyori\'s birth.' },
    ],
    trivia: [
      { ja: '近江八幡の水郷と町並みは重要文化的景観に選定され、城下町の面影を今に伝える。', zhTw: '近江八幡的水鄉與街道被選定為重要文化景觀，傳承城下町的風貌至今。', en: 'Ōmi-Hachiman\'s canals and streetscapes are a designated Important Cultural Landscape, preserving the castle-town atmosphere.' },
      { ja: 'ロープウェーで山頂まで登れ、琵琶湖と近江平野の大パノラマが楽しめる。', zhTw: '可搭纜車登上山頂，享受琵琶湖與近江平野的大全景。', en: 'A ropeway ascends to the summit, offering grand panoramic views of Lake Biwa and the Ōmi plain.' },
    ],
    highlights: [
      { ja: '石垣と眺望 — 山頂に残る石垣から琵琶湖を一望。安土城跡も遠望できる。', zhTw: '石垣與眺望 — 從山頂殘存的石垣一覽琵琶湖。也可遠眺安土城跡。', en: 'Stone walls and views — Lake Biwa panorama from the summit walls, with distant views of Azuchi Castle ruins.' },
      { ja: '近江八幡の水郷めぐり — 城下に残る水路を船で巡る風情ある体験。', zhTw: '近江八幡水鄉巡遊 — 搭船巡遊城下殘存水路的風情體驗。', en: 'Ōmi-Hachiman canal cruise — an atmospheric boat ride through the castle town\'s historic waterways.' },
      { ja: '八幡堀 — 秀次が築いた城下の堀。時代劇のロケ地としても有名。', zhTw: '八幡堀 — 秀次築建的城下壕溝。也以時代劇外景地聞名。', en: 'Hachiman-bori moat — Hidetsugu\'s castle-town canal, famous as a filming location for period dramas.' },
    ],
    architecture: [
      { ja: '標高271mの八幡山に築かれた山城。山頂に本丸、中腹に居館を配した。', zhTw: '建於標高271公尺八幡山的山城。山頂配置本丸，山腰配置居館。', en: 'A mountain castle on 271 m Hachimanyama, with the honmaru on the summit and residence quarters midway.' },
      { ja: '石垣は安土城の石材を転用したとされ、織豊系城郭の石垣技術を示す。', zhTw: '石垣據說轉用了安土城的石材，展示織豐系城郭的石垣技術。', en: 'The stone walls reputedly reuse materials from Azuchi Castle, demonstrating Oda-Toyotomi stonework.' },
    ],
  },
  {
    id: 'fukuchiyama',
    number: 134,
    regionId: 'kinki',
    name: { ja: '福知山城', zhTw: '福知山城', en: 'Fukuchiyama Castle' },
    city: { ja: '福知山市', zhTw: '福知山市', en: 'Fukuchiyama' },
    prefecture: { ja: '京都府', zhTw: '京都府', en: 'Kyoto' },
    type: 'hirayama',
    designation: '市指定史跡',
    position: { x: 52, y: 60 },
    illustration: { style: 'classic', tiers: 3, color: '#F5F0E8', roofColor: '#2C3E50' },
    goshuin: { bg: '#f5f5ef', ink: '#2c3e50', seal: '#c0392b', crest: '#2C3E50' },
    history: [
      { ja: '1579年、明智光秀が丹波攻略後にこの地に城を築き、城下町を整備した。', zhTw: '1579年明智光秀攻略丹波後在此築城，整備城下町。', en: 'In 1579, Akechi Mitsuhide built the castle after conquering Tamba and developed the castle town.' },
      { ja: '光秀は善政を敷き、由良川の治水工事を行うなど領民に慕われた。', zhTw: '光秀實施善政，進行由良川治水工程等深受領民愛戴。', en: 'Mitsuhide won the people\'s affection through good governance, including flood-control works on the Yura River.' },
      { ja: '本能寺の変で信長を討った光秀だが、福知山では名君として今も敬愛されている。', zhTw: '光秀雖在本能寺之變中討伐信長，但在福知山至今仍作為名君受到敬愛。', en: 'Though Mitsuhide slew Nobunaga at Honnō-ji, he is still revered in Fukuchiyama as a wise and beloved lord.' },
      { ja: '江戸時代は朽木氏が藩主を務め、幕末まで福知山藩として存続した。', zhTw: '江戶時代由朽木氏擔任藩主，作為福知山藩存續至幕末。', en: 'The Kutsuki clan governed throughout the Edo period, maintaining Fukuchiyama domain to the end.' },
    ],
    figures: [
      { ja: '明智光秀 — 本能寺の変の首謀者として知られるが、福知山では領民思いの名君として評価される。', zhTw: '明智光秀 — 以本能寺之變首謀者聞名，但在福知山被評為體恤領民的名君。', en: 'Akechi Mitsuhide — known as the mastermind of Honnō-ji, but valued in Fukuchiyama as a lord who cared for his people.' },
    ],
    trivia: [
      { ja: '2020年のNHK大河ドラマ「麒麟がくる」で光秀が主人公となり、福知山城への注目が高まった。', zhTw: '2020年NHK大河劇「麒麟來了」以光秀為主角，福知山城受到更多關注。', en: 'The 2020 NHK taiga drama "Kirin ga Kuru" featured Mitsuhide as protagonist, raising Fukuchiyama\'s profile.' },
      { ja: '石垣には転用石（墓石や石仏）が多数使われており、急ぎの築城を物語る。', zhTw: '石垣中大量使用轉用石（墓石和石佛），訴說了緊急築城的情況。', en: 'The walls incorporate many repurposed stones — gravestones and Buddhist statues — showing the urgency of construction.' },
      { ja: '福知山では毎年「光秀まつり」が行われ、「謀反人」ではなく「名君」として顕彰される。', zhTw: '福知山每年舉辦「光秀祭」，不是作為「叛臣」而是作為「名君」被表彰。', en: 'Fukuchiyama holds an annual "Mitsuhide Festival," honoring him not as a traitor but as a wise ruler.' },
    ],
    highlights: [
      { ja: '復興天守 — 1986年に復興された望楼型天守。光秀と福知山の歴史展示。', zhTw: '復興天守 — 1986年復興的望樓型天守。光秀與福知山的歷史展示。', en: 'Reconstructed keep — a 1986 watchtower-type keep with exhibits on Mitsuhide and Fukuchiyama\'s history.' },
      { ja: '転用石の石垣 — 墓石や石仏が石垣に組み込まれた独特の遺構。', zhTw: '轉用石石垣 — 墓石和石佛被嵌入石垣的獨特遺構。', en: 'Repurposed-stone walls — tombstones and Buddhist statues built into the walls, a unique feature.' },
      { ja: '御霊神社 — 光秀を祀る城下の神社。地元の光秀敬愛を物語る。', zhTw: '御靈神社 — 祭祀光秀的城下神社。訴說當地對光秀的敬愛。', en: 'Goryō Shrine — a castle-town shrine dedicated to Mitsuhide, reflecting local devotion.' },
    ],
    architecture: [
      { ja: '横山丘陵に築かれた平山城。本丸・二の丸を石垣で固め、水堀で囲む。', zhTw: '建於横山丘陵的平山城。以石垣鞏固本丸、二之丸，以水壕環繞。', en: 'A hilltop castle on Yokoyama hill, with stone-walled honmaru and ni-no-maru encircled by water moats.' },
      { ja: '光秀が整備した石垣は野面積みで、転用石の使用は丹波攻略直後の緊急性を示す。', zhTw: '光秀整備的石垣為野面積，轉用石的使用顯示丹波攻略後的緊急性。', en: 'Mitsuhide\'s rough-stacked walls with repurposed stones reveal the urgency right after the Tamba conquest.' },
    ],
  },
  {
    id: 'akutagawayama',
    number: 135,
    regionId: 'kinki',
    name: { ja: '芥川山城', zhTw: '芥川山城', en: 'Akutagawayama Castle' },
    city: { ja: '高槻市', zhTw: '高槻市', en: 'Takatsuki' },
    prefecture: { ja: '大阪府', zhTw: '大阪府', en: 'Osaka' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 54, y: 64 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#7A8A5A', roofColor: '#3A4A2A' },
    goshuin: { bg: '#f0f5e6', ink: '#3a4a2a', seal: '#8b0000', crest: '#7A8A5A' },
    history: [
      { ja: '戦国時代、摂津国の有力国人・芥川氏が築いた山城。摂津支配の要であった。', zhTw: '戰國時代攝津國有力國人芥川氏築建的山城。是攝津支配的要地。', en: 'Built by the Akutagawa clan, powerful provincial warriors of Settsu, this mountain castle was key to controlling the region.' },
      { ja: '三好長慶が居城とし、畿内を支配する「天下人」として約10年間ここから政治を行った。', zhTw: '三好長慶以此為居城，作為支配畿內的「天下人」從此處執政約10年。', en: 'Miyoshi Nagayoshi made it his seat, governing the Kinai region as de facto ruler for about ten years.' },
      { ja: '三好長慶は「最初の天下人」とも評され、信長に先駆けて中央政権を握った戦国大名。', zhTw: '三好長慶也被評為「最初的天下人」，先於信長掌握中央政權的戰國大名。', en: 'Nagayoshi is called "the first unifier" — a Sengoku lord who held central power before Nobunaga.' },
      { ja: '長慶の死後、三好氏は衰退し、織田信長の上洛により芥川山城は廃城となった。', zhTw: '長慶死後三好氏衰退，織田信長上洛後芥川山城廢城。', en: 'After Nagayoshi\'s death the Miyoshi declined; the castle was abandoned when Nobunaga marched to Kyoto.' },
    ],
    figures: [
      { ja: '三好長慶 — 織田信長に先駆けて畿内を統一し、室町幕府を事実上掌握した「最初の天下人」。', zhTw: '三好長慶 — 先於織田信長統一畿內，事實上掌握室町幕府的「最初的天下人」。', en: 'Miyoshi Nagayoshi — "the first unifier" who controlled the Kinai and effectively dominated the Muromachi Shōgunate before Nobunaga.' },
      { ja: '足利義輝 — 室町幕府第13代将軍。三好長慶との権力闘争の末に芥川山城に幽閉されたこともある。', zhTw: '足利義輝 — 室町幕府第13代將軍。與三好長慶權力鬥爭中曾被幽禁於芥川山城。', en: 'Ashikaga Yoshiteru — 13th Muromachi shōgun, once confined at Akutagawayama in his power struggle with Nagayoshi.' },
    ],
    trivia: [
      { ja: '三好長慶は連歌・茶道にも通じた文化人で、芥川山城では文化サロンが開かれていた。', zhTw: '三好長慶也是精通連歌、茶道的文化人，芥川山城曾舉辦文化沙龍。', en: 'Nagayoshi was a cultured man versed in linked verse and tea ceremony, hosting cultural salons at the castle.' },
      { ja: '大阪市中心部から電車で30分の高槻市内にありながら、深い山城の雰囲気が味わえる。', zhTw: '雖在距大阪市中心搭電車30分鐘的高槻市內，卻能感受深山城的氛圍。', en: 'Just 30 minutes by train from central Osaka, yet it offers the atmosphere of a deep mountain castle.' },
    ],
    highlights: [
      { ja: '主郭からの眺望 — 大阪平野から京都方面まで一望できる壮大な景色。', zhTw: '從主郭眺望 — 從大阪平野到京都方面一覽無遺的壯大景色。', en: 'Main enclosure views — sweeping vistas from the Osaka plain to the direction of Kyoto.' },
      { ja: '大手道の石垣 — 登城路に残る石垣が往時の城の威容を偲ばせる。', zhTw: '大手道石垣 — 登城路上殘存的石垣令人追憶往昔城的威容。', en: 'Main approach stonework — walls along the climbing path evoke the castle\'s former grandeur.' },
    ],
    architecture: [
      { ja: '三好山（標高182m）に築かれた大規模な山城。主郭を中心に複数の曲輪を配置。', zhTw: '建於三好山（標高182公尺）的大規模山城。以主郭為中心配置多座曲輪。', en: 'A large-scale mountain castle on 182 m Miyoshi-yama, with multiple enclosures around the main bailey.' },
      { ja: '大手道には石垣を伴う虎口が設けられ、天下人の居城にふさわしい格式を備えていた。', zhTw: '大手道設有石垣虎口，具備與天下人居城相稱的格式。', en: 'Stone-walled gates on the main approach gave it the dignity befitting a national ruler\'s residence.' },
    ],
  },
  {
    id: 'iimori',
    number: 136,
    regionId: 'kinki',
    name: { ja: '飯盛城', zhTw: '飯盛城', en: 'Iimori Castle' },
    city: { ja: '大東市・四條畷市', zhTw: '大東市・四條畷市', en: 'Daitō / Shijōnawate' },
    prefecture: { ja: '大阪府', zhTw: '大阪府', en: 'Osaka' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 55, y: 65 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#6B8B5B', roofColor: '#3B4B2B' },
    goshuin: { bg: '#eef5ee', ink: '#2d4a2d', seal: '#a52a2a', crest: '#6B8B5B' },
    history: [
      { ja: '南北朝時代に築かれ、四條畷の戦い（1348年）の舞台となった歴史ある山城。', zhTw: '南北朝時代築建，成為四條畷之戰（1348年）舞台的歷史悠久山城。', en: 'Built in the Nanboku-chō period, this castle was the stage for the Battle of Shijōnawate in 1348.' },
      { ja: '三好長慶が芥川山城から居城を移し、畿内政権の中枢として機能した。', zhTw: '三好長慶從芥川山城遷居此城，作為畿內政權的中樞運作。', en: 'Miyoshi Nagayoshi relocated here from Akutagawayama, making it the center of his Kinai government.' },
      { ja: '長慶の晩年は弟や嫡男の死が相次ぎ、失意のうちにこの城で没した（1564年）。', zhTw: '長慶晩年弟弟和嫡男相繼去世，在失意中於此城病逝（1564年）。', en: 'In his later years, Nagayoshi lost his brothers and heir in succession, dying in despair at this castle in 1564.' },
    ],
    figures: [
      { ja: '三好長慶 — 芥川山城から飯盛城に移り、ここで畿内支配の最盛期と晩年の悲劇を過ごした。', zhTw: '三好長慶 — 從芥川山城遷至飯盛城，在此度過畿內支配的最盛期與晩年的悲劇。', en: 'Miyoshi Nagayoshi — moved here from Akutagawayama, experiencing both his zenith and tragic decline at Iimori.' },
      { ja: '楠木正行 — 四條畷の戦いで足利軍と戦い討死した南朝の忠臣。楠木正成の嫡男。', zhTw: '楠木正行 — 四條畷之戰中與足利軍交戰戰死的南朝忠臣。楠木正成的嫡男。', en: 'Kusunoki Masatsura — Southern Court loyalist and Masashige\'s son, who fell fighting the Ashikaga at Shijōnawate.' },
    ],
    trivia: [
      { ja: '2021年に国史跡に指定。飯盛城は大阪府内最大級の山城で、約700mの尾根に曲輪が連なる。', zhTw: '2021年被指定為國史跡。飯盛城是大阪府內最大規模的山城，約700公尺的山脊上連接曲輪。', en: 'Designated a National Historic Site in 2021; it is Osaka\'s largest mountain castle, with baileys along a 700 m ridge.' },
      { ja: '三好長慶の飯盛城時代には、キリスト教の布教も許可され、城内に礼拝堂があったとされる。', zhTw: '三好長慶的飯盛城時代也允許基督教傳教，城內據說有禮拜堂。', en: 'During Nagayoshi\'s time, Christian preaching was permitted, and a chapel reportedly stood within the castle.' },
    ],
    highlights: [
      { ja: '山頂からの大阪平野の大パノラマ — 大阪湾から奈良方面まで一望。', zhTw: '從山頂一覽大阪平野的大全景 — 從大阪灣到奈良方面盡收眼底。', en: 'Mountaintop panorama — from Osaka Bay to the direction of Nara, a sweeping view of the entire Osaka plain.' },
      { ja: '石垣群 — 近年の発掘で多数の石垣が確認され、三好政権の城としての格式が判明。', zhTw: '石垣群 — 近年發掘確認了大量石垣，揭示三好政權之城的格式。', en: 'Stone wall clusters — recent excavations revealed extensive walls, confirming the castle\'s status under the Miyoshi regime.' },
    ],
    architecture: [
      { ja: '飯盛山（標高314m）の尾根に沿って南北約700mに曲輪群を配した大規模山城。', zhTw: '沿飯盛山（標高314公尺）山脊南北約700公尺配置曲輪群的大規模山城。', en: 'A massive mountain castle with baileys spanning 700 m north-south along the 314 m Iimori-yama ridge.' },
      { ja: '発掘調査で1,000以上の石垣列が確認され、畿内山城の中でも突出した規模と技術を持つ。', zhTw: '發掘調查確認了1000條以上的石垣列，在畿內山城中具突出的規模與技術。', en: 'Over 1,000 stone-wall rows found in excavations — outstanding in scale and technique among Kinai mountain castles.' },
    ],
  },
  {
    id: 'kishiwada',
    number: 137,
    regionId: 'kinki',
    name: { ja: '岸和田城', zhTw: '岸和田城', en: 'Kishiwada Castle' },
    city: { ja: '岸和田市', zhTw: '岸和田市', en: 'Kishiwada' },
    prefecture: { ja: '大阪府', zhTw: '大阪府', en: 'Osaka' },
    type: 'hirajiro',
    designation: '府指定史跡',
    position: { x: 54, y: 66 },
    illustration: { style: 'classic', tiers: 3, color: '#F5F5F5', roofColor: '#2C3E50' },
    goshuin: { bg: '#f5f5f5', ink: '#2c3e50', seal: '#c0392b', crest: '#2C3E50' },
    history: [
      { ja: '1334年頃、楠木正成の一族により築城されたと伝わる泉州の要城。', zhTw: '1334年左右據傳由楠木正成一族築城的泉州要城。', en: 'Reportedly built around 1334 by a Kusunoki clan member, this was a key castle of Izumi province.' },
      { ja: '1585年、豊臣秀吉の紀州攻めの拠点となり、秀吉の叔父・小出秀政が城主となった。', zhTw: '1585年成為豐臣秀吉紀州攻略的據點，秀吉的叔父小出秀政成為城主。', en: 'In 1585 it served as Hideyoshi\'s base for the Kishū campaign; his uncle Koide Hidemasa became lord.' },
      { ja: '1640年から岡部氏が藩主を務め、13代にわたり幕末まで岸和田藩を治めた。', zhTw: '1640年起岡部氏擔任藩主，歷經13代治理岸和田藩至幕末。', en: 'From 1640, the Okabe clan governed for 13 generations until the Bakumatsu.' },
    ],
    figures: [
      { ja: '岡部宣勝 — 岸和田藩初代藩主。大坂の陣で功を立て、岸和田に入封した。', zhTw: '岡部宣勝 — 岸和田藩初代藩主。大坂之陣立功後入封岸和田。', en: 'Okabe Nobukatsu — first Okabe lord, rewarded with Kishiwada for his service at the Osaka campaigns.' },
    ],
    trivia: [
      { ja: '岸和田だんじり祭は日本三大祭の一つとも称され、城下町の伝統として300年以上続く。', zhTw: '岸和田彈珠祭也被稱為日本三大祭之一，作為城下町傳統延續300年以上。', en: 'The Kishiwada Danjiri Festival, one of Japan\'s great festivals, has continued as a castle-town tradition for over 300 years.' },
      { ja: '八陣の庭は重森三玲による枯山水庭園で、諸葛孔明の八陣図をモチーフにしている。', zhTw: '八陣之庭是重森三玲設計的枯山水庭園，以諸葛孔明的八陣圖為主題。', en: 'The "Eight Formations Garden" by Mirei Shigemori is a rock garden inspired by Zhuge Liang\'s battle formations.' },
    ],
    highlights: [
      { ja: '復興天守 — 1954年に再建された三層の天守。城と祭りの展示。', zhTw: '復興天守 — 1954年重建的三層天守。城與祭典的展示。', en: 'Reconstructed keep — a three-layer tower rebuilt in 1954, with exhibits on the castle and festivals.' },
      { ja: '八陣の庭 — 重森三玲が設計した国名勝の枯山水庭園。', zhTw: '八陣之庭 — 重森三玲設計的國家名勝枯山水庭園。', en: 'Eight Formations Garden — Mirei Shigemori\'s dry-landscape garden, a designated National Place of Scenic Beauty.' },
      { ja: 'だんじり祭 — 毎年9月、重さ4トンのだんじりが城下を疾走する勇壮な祭り。', zhTw: '彈珠祭 — 每年9月重達4噸的彈珠車在城下疾馳的勇壯祭典。', en: 'Danjiri Festival — every September, 4-ton wooden floats race through the castle town in a thrilling spectacle.' },
    ],
    architecture: [
      { ja: '本丸を二重の堀で囲む平城。天守台は元和の改修時のものが残る。', zhTw: '以雙重壕溝環繞本丸的平城。天守台為元和改建時的遺構。', en: 'A flatland castle with double moats around the honmaru; the keep platform dates from Genna-era renovations.' },
      { ja: '岡部氏時代に櫓・門・塀が整備され、泉州随一の近世城郭として完成した。', zhTw: '岡部氏時代整備了櫓、門、塀，完成為泉州第一的近世城郭。', en: 'Under the Okabe, turrets, gates, and walls were built, completing Izumi\'s finest early-modern castle.' },
    ],
  },
  {
    id: 'izushi',
    number: 138,
    regionId: 'kinki',
    name: { ja: '出石城・有子山城', zhTw: '出石城・有子山城', en: 'Izushi & Ariko-yama Castle' },
    city: { ja: '豊岡市', zhTw: '豐岡市', en: 'Toyooka' },
    prefecture: { ja: '兵庫県', zhTw: '兵庫縣', en: 'Hyōgo' },
    type: 'hirayama',
    designation: '県指定史跡',
    position: { x: 50, y: 60 },
    illustration: { style: 'classic', tiers: 2, color: '#F5F0E8', roofColor: '#4A3A2A' },
    goshuin: { bg: '#f5f0e8', ink: '#4a3a2a', seal: '#c44', crest: '#4A3A2A' },
    history: [
      { ja: '有子山城は1574年、但馬の守護・山名祐豊が築いた険しい山城。', zhTw: '有子山城建於1574年，是但馬守護山名祐豐築建的險峻山城。', en: 'Ariko-yama Castle was built in 1574 by Yamana Suketoyo, shugo of Tajima, as a steep mountain fortress.' },
      { ja: '1604年、小出吉英が山麓に出石城を築き、政庁を移した。出石藩の城下町が形成された。', zhTw: '1604年小出吉英在山麓築建出石城，遷移政廳。形成了出石藩的城下町。', en: 'In 1604, Koide Yoshihide built Izushi Castle at the base and moved government there, forming the castle town.' },
      { ja: '仙石氏の時代に城下が整備され、「但馬の小京都」と呼ばれる美しい町並みが完成した。', zhTw: '仙石氏時代整備城下，完成被稱為「但馬的小京都」的美麗街道。', en: 'Under the Sengoku clan, the town was refined into the beautiful streetscape known as "Little Kyoto of Tajima."' },
      { ja: '仙石騒動（1835年）は江戸時代最大のお家騒動として知られ、藩を揺るがした大事件。', zhTw: '仙石騷動（1835年）是江戶時代最大的御家騷動，動搖了藩的大事件。', en: 'The Sengoku Disturbance (1835) was the Edo period\'s greatest succession crisis, shaking the domain.' },
    ],
    figures: [
      { ja: '山名祐豊 — 但馬最後の守護大名。有子山城を築いたが、秀吉の但馬攻めで滅亡した。', zhTw: '山名祐豐 — 但馬最後的守護大名。築建有子山城但因秀吉但馬攻略而滅亡。', en: 'Yamana Suketoyo — last shugo of Tajima, who built Ariko-yama but fell to Hideyoshi\'s campaign.' },
      { ja: '仙石秀久 — 出石藩仙石氏の祖。真田丸でも知られる仙石権兵衛の子孫が藩を治めた。', zhTw: '仙石秀久 — 出石藩仙石氏之祖。以真田丸聞名的仙石權兵衛的子孫治理藩。', en: 'Sengoku Hidehisa — founder of the Izushi Sengoku line; descendants of the famous Gonbei governed the domain.' },
    ],
    trivia: [
      { ja: '出石そばは兵庫県を代表するご当地グルメで、城下町に50軒以上のそば屋が並ぶ。', zhTw: '出石蕎麥是代表兵庫縣的地方美食，城下町有50家以上的蕎麥店。', en: 'Izushi soba is Hyōgo\'s signature dish, with over 50 soba shops lining the castle town.' },
      { ja: '辰鼓楼は日本最古の時計台の一つで、出石城下のシンボルとなっている。', zhTw: '辰鼓樓是日本最古老的鐘樓之一，是出石城下的象徵。', en: 'The Shinkoro clock tower is one of Japan\'s oldest, serving as the symbol of Izushi\'s castle town.' },
    ],
    highlights: [
      { ja: '出石城の石垣と櫓 — 山麓に復元された隅櫓と美しい石垣が城下を見守る。', zhTw: '出石城的石垣與櫓 — 山麓復原的隅櫓與美麗石垣守望城下。', en: 'Izushi stone walls and turrets — reconstructed corner turrets and fine walls overlooking the town.' },
      { ja: '有子山城跡 — 標高321mへの本格的な登山。山頂には壮大な石垣が残る。', zhTw: '有子山城跡 — 前往標高321公尺的正式登山。山頂殘存壯大石垣。', en: 'Ariko-yama ruins — a proper climb to 321 m, with imposing stone walls remaining at the summit.' },
      { ja: '出石の城下町 — そば屋と白壁の町並みが美しい「但馬の小京都」。', zhTw: '出石城下町 — 蕎麥店與白壁街道美麗的「但馬的小京都」。', en: 'Izushi castle town — "Little Kyoto of Tajima" with its soba shops and white-walled streetscapes.' },
    ],
    architecture: [
      { ja: '有子山城は標高321mの急峻な山城で、主郭には見事な石垣が残る。', zhTw: '有子山城是標高321公尺的急峻山城，主郭殘存精美石垣。', en: 'Ariko-yama is a steep mountain castle at 321 m, with splendid stone walls surviving at the main enclosure.' },
      { ja: '出石城は山麓の平山城で、本丸・二の丸・三の丸を階段状に配置する梯郭式。', zhTw: '出石城是山麓的平山城，本丸、二之丸、三之丸呈階梯狀配置的梯郭式。', en: 'Izushi is a hillside castle with honmaru, ni-no-maru, and san-no-maru arranged in tiers up the slope.' },
    ],
  },

  // ── 続100名城 #139-144 近畿(続)/中国 ──
  {
    id: 'kuroi',
    number: 139,
    regionId: 'kinki',
    name: { ja: '黒井城', zhTw: '黑井城', en: 'Kuroi Castle' },
    city: { ja: '丹波市', zhTw: '丹波市', en: 'Tamba' },
    prefecture: { ja: '兵庫県', zhTw: '兵庫縣', en: 'Hyōgo' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 52, y: 62 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#6A7A5A', roofColor: '#3A4A2A' },
    goshuin: { bg: '#f0f5e8', ink: '#3a4a2a', seal: '#8b0000', crest: '#6A7A5A' },
    history: [
      { ja: '南北朝時代に赤井氏が築城。「丹波の赤鬼」赤井直正の居城として名高い。', zhTw: '南北朝時代赤井氏築城。以「丹波之赤鬼」赤井直正的居城聞名。', en: 'Built by the Akai clan in the Nanboku-chō era; famed as the seat of Akai Naomasa, "the Red Demon of Tamba."' },
      { ja: '明智光秀の丹波攻めに対し赤井直正は二度にわたって撃退。光秀を大いに苦しめた。', zhTw: '面對明智光秀的丹波攻略，赤井直正兩度擊退。令光秀大為苦惱。', en: 'Akai Naomasa twice repelled Akechi Mitsuhide\'s Tamba campaign, causing the invader great difficulty.' },
      { ja: '直正の病死後、1579年に光秀がようやく黒井城を攻略。丹波平定を完了した。', zhTw: '直正病逝後，1579年光秀終於攻下黑井城。完成丹波平定。', en: 'After Naomasa\'s death from illness, Mitsuhide finally took Kuroi in 1579, completing the conquest of Tamba.' },
    ],
    figures: [
      { ja: '赤井直正 — 「丹波の赤鬼」の異名を持つ猛将。光秀の大軍を二度退けた武勇は語り草。', zhTw: '赤井直正 — 有「丹波之赤鬼」異名的猛將。兩度擊退光秀大軍的武勇廣為傳頌。', en: 'Akai Naomasa — "the Red Demon of Tamba," a fierce warrior whose twice repelling Mitsuhide\'s armies became legendary.' },
    ],
    trivia: [
      { ja: '秋の早朝には雲海が発生し、「丹波の天空の城」として近年注目を集めている。', zhTw: '秋天清晨會出現雲海，近年作為「丹波的天空之城」受到關注。', en: 'A sea of clouds forms on autumn mornings, drawing attention as "Tamba\'s Castle in the Sky."' },
      { ja: '赤井直正の赤鬼伝説は丹波地方に深く根付き、地元では英雄として語り継がれている。', zhTw: '赤井直正的赤鬼傳說深植丹波地方，在當地作為英雄傳頌。', en: 'Naomasa\'s "Red Demon" legend is deeply rooted in Tamba, where he is celebrated as a local hero.' },
    ],
    highlights: [
      { ja: '本丸跡と石垣 — 山頂に残る石垣から丹波の山々を360度見渡す絶景。', zhTw: '本丸跡與石垣 — 從山頂殘存的石垣360度環望丹波群山的絕景。', en: 'Honmaru and stone walls — 360-degree views of the Tamba mountains from the surviving summit walls.' },
      { ja: '雲海 — 10月～12月の早朝、城跡が雲海に浮かぶ幻想的な光景。', zhTw: '雲海 — 10月至12月清晨城跡浮於雲海的夢幻光景。', en: 'Sea of clouds — from October to December, the castle ruins float above the clouds in an ethereal scene.' },
    ],
    architecture: [
      { ja: '標高356mの猪ノ口山に築かれた大規模山城。三段の曲輪を石垣で固めた堅固な構造。', zhTw: '建於標高356公尺豬之口山的大規模山城。以石垣鞏固三段曲輪的堅固結構。', en: 'A large mountain castle on 356 m Inokuchiyama, with three tiers of stone-walled enclosures.' },
      { ja: '光秀が攻めあぐねたほどの天然の要害で、急峻な山道が唯一の接近路。', zhTw: '連光秀都攻不下的天然要害，急峻的山路是唯一的接近路。', en: 'Such a natural stronghold that even Mitsuhide struggled — a steep mountain trail is the only approach.' },
    ],
  },
  {
    id: 'sumoto',
    number: 140,
    regionId: 'kinki',
    name: { ja: '洲本城', zhTw: '洲本城', en: 'Sumoto Castle' },
    city: { ja: '洲本市', zhTw: '洲本市', en: 'Sumoto' },
    prefecture: { ja: '兵庫県', zhTw: '兵庫縣', en: 'Hyōgo' },
    type: 'hirayama',
    designation: '国指定史跡',
    position: { x: 52, y: 68 },
    illustration: { style: 'ruins', tiers: 1, color: '#8A8A78', roofColor: '#5A5A48' },
    goshuin: { bg: '#f5f5e8', ink: '#3d3d28', seal: '#c44', crest: '#8A8A78' },
    history: [
      { ja: '1526年、三好氏の家臣・安宅治興が淡路島の三熊山に築城。淡路水軍の拠点となった。', zhTw: '1526年三好氏家臣安宅治興在淡路島三熊山築城。成為淡路水軍的據點。', en: 'Built in 1526 by Ataka Haruoki, retainer of the Miyoshi, on Mikuma-yama in Awaji — a naval base.' },
      { ja: '豊臣政権下では脇坂安治が城主となり、朝鮮出兵では水軍を率いて活躍した。', zhTw: '豐臣政權下脇坂安治成為城主，朝鮮出兵中率領水軍活躍。', en: 'Under the Toyotomi, Wakisaka Yasuharu became lord and led the naval forces in the Korean expeditions.' },
      { ja: '江戸時代は徳島藩蜂須賀氏の支配下に置かれ、洲本城代が治めた。', zhTw: '江戶時代置於德島藩蜂須賀氏支配下，由洲本城代治理。', en: 'In the Edo period, it was governed by castle deputies under the Tokushima domain\'s Hachisuka clan.' },
    ],
    figures: [
      { ja: '脇坂安治 — 賤ヶ岳七本槍の一人。淡路水軍を率い、関ヶ原では東軍に寝返った。', zhTw: '脇坂安治 — 賤岳七本槍之一。率領淡路水軍，關原之戰中倒向東軍。', en: 'Wakisaka Yasuharu — one of the Seven Spears of Shizugatake, commander of the Awaji navy who defected to the Eastern Army at Sekigahara.' },
    ],
    trivia: [
      { ja: '山上にある模擬天守は1928年に造られた日本最古の鉄筋コンクリート模擬天守。', zhTw: '山上的模擬天守建於1928年，是日本最古老的鋼筋混凝土模擬天守。', en: 'The hilltop mock keep, built in 1928, is Japan\'s oldest reinforced-concrete imitation keep.' },
      { ja: '洲本城からは大阪湾・紀淡海峡・友ヶ島を一望でき、水軍拠点の立地が実感できる。', zhTw: '從洲本城可一覽大阪灣、紀淡海峽、友島，可體會水軍據點的選址。', en: 'Views span Osaka Bay, the Ki Channel, and Tomogashima — you can feel why it was chosen as a naval stronghold.' },
    ],
    highlights: [
      { ja: '登り石垣 — 山上と山麓を結ぶ「登り石垣」は全国でも珍しい遺構。', zhTw: '登石垣 — 連接山上與山麓的「登石垣」是全國罕見的遺構。', en: 'Climbing stone walls — "nobori-ishigaki" connecting summit and base are a rare feature nationally.' },
      { ja: '山上からの大パノラマ — 大阪湾と紀淡海峡の絶景。天気の良い日は関空も見える。', zhTw: '從山上俯瞰大全景 — 大阪灣與紀淡海峽的絕景。天氣好時可見關西機場。', en: 'Summit panorama — stunning views of Osaka Bay and the Ki Channel; Kansai Airport is visible on clear days.' },
    ],
    architecture: [
      { ja: '標高133mの三熊山に上の城（山城）と下の城（平城）を配した珍しい二段構造。', zhTw: '在標高133公尺的三熊山配置上城（山城）與下城（平城）的罕見雙段結構。', en: 'An unusual two-tier layout with an upper mountain castle and lower flatland castle on 133 m Mikumayama.' },
      { ja: '登り石垣は朝鮮出兵で学んだ築城技術とされ、松山城と並ぶ貴重な遺構。', zhTw: '登石垣被認為是朝鮮出兵中學到的築城技術，是與松山城並列的珍貴遺構。', en: 'The climbing walls are believed to derive from Korean-campaign techniques, a precious relic alongside Matsuyama Castle.' },
    ],
  },
  {
    id: 'yamato-koriyama',
    number: 141,
    regionId: 'kinki',
    name: { ja: '大和郡山城', zhTw: '大和郡山城', en: 'Yamato-Kōriyama Castle' },
    city: { ja: '大和郡山市', zhTw: '大和郡山市', en: 'Yamato-Kōriyama' },
    prefecture: { ja: '奈良県', zhTw: '奈良縣', en: 'Nara' },
    type: 'hirajiro',
    designation: '県指定史跡',
    position: { x: 56, y: 66 },
    illustration: { style: 'ruins', tiers: 1, color: '#9A9080', roofColor: '#5A5040' },
    goshuin: { bg: '#f5efe8', ink: '#3d3828', seal: '#c0392b', crest: '#9A9080' },
    history: [
      { ja: '1580年、織田信長の命で筒井順慶が大和一国の拠点として大改修。', zhTw: '1580年受織田信長之命，筒井順慶作為大和一國據點進行大改修。', en: 'In 1580, Tsutsui Junkei extensively rebuilt it as Yamato\'s main stronghold on Nobunaga\'s orders.' },
      { ja: '1585年、豊臣秀長（秀吉の弟）が100万石の大大名として入城し、壮大な城に改修。', zhTw: '1585年豐臣秀長（秀吉之弟）以100萬石大大名入城，改建為壯大之城。', en: 'In 1585, Toyotomi Hidenaga (Hideyoshi\'s brother) entered as a 1-million-koku lord and rebuilt it grandly.' },
      { ja: '秀長は秀吉政権の屋台骨として大和・紀伊・和泉を治め、郡山城を畿内第二の城とした。', zhTw: '秀長作為秀吉政權的支柱治理大和、紀伊、和泉，使郡山城成為畿內第二大城。', en: 'Hidenaga governed Yamato, Kii, and Izumi as the backbone of Hideyoshi\'s regime, making Kōriyama the Kinai\'s second castle.' },
      { ja: '江戸時代は柳沢吉保の子・吉里が藩主となり、柳沢氏が幕末まで治めた。', zhTw: '江戶時代由柳澤吉保之子吉里擔任藩主，柳澤氏治理至幕末。', en: 'In the Edo period, Yanagisawa Yoshisato (son of the famous Yoshiyasu) became lord; the Yanagisawa governed to the end.' },
    ],
    figures: [
      { ja: '豊臣秀長 — 秀吉の弟にして最大の功臣。温厚な人柄で兄を支え、早逝が豊臣政権の命運を変えた。', zhTw: '豐臣秀長 — 秀吉之弟兼最大功臣。以溫厚性格支持兄長，早逝改變了豐臣政權的命運。', en: 'Toyotomi Hidenaga — Hideyoshi\'s brother and greatest supporter; his gentle nature steadied the regime, and his early death changed its fate.' },
      { ja: '筒井順慶 — 松永久秀と大和の覇権を争った戦国大名。「洞ヶ峠」の逸話でも知られる。', zhTw: '筒井順慶 — 與松永久秀爭奪大和霸權的戰國大名。也以「洞峠」軼事聞名。', en: 'Tsutsui Junkei — Sengoku lord who vied with Matsunaga Hisahide for Yamato; also known for the "Horagatōge" indecision legend.' },
    ],
    trivia: [
      { ja: '天守台の石垣には「さかさ地蔵」と呼ばれる逆さまに積まれた地蔵石仏がある。', zhTw: '天守台石垣中有被稱為「倒地藏」的倒置地藏石佛。', en: 'The keep platform contains an upside-down Jizō statue called "Sakasa Jizō," built into the walls inverted.' },
      { ja: '大和郡山は金魚の養殖で全国的に有名で、城下町の水路で金魚が泳ぐ風景が見られる。', zhTw: '大和郡山以金魚養殖在全國聞名，城下町水路中可見金魚游泳的風景。', en: 'Yamato-Kōriyama is nationally famous for goldfish farming — you can see goldfish swimming in the castle-town canals.' },
      { ja: '桜の名所としても知られ、「日本さくら名所100選」に選定されている。', zhTw: '也以櫻花名所聞名，入選「日本櫻花名所100選」。', en: 'Also famed for cherry blossoms, selected as one of Japan\'s Top 100 Cherry Blossom Sites.' },
    ],
    highlights: [
      { ja: '天守台と「さかさ地蔵」 — 転用石が多用された天守台。逆さ地蔵は必見。', zhTw: '天守台與「倒地藏」 — 大量使用轉用石的天守台。倒置地藏必看。', en: 'Keep platform and "Upside-down Jizō" — repurposed stones fill the platform; the inverted Jizō is a must-see.' },
      { ja: '追手門・追手向櫓 — 復元された城の正面。堂々たる石垣と門構え。', zhTw: '追手門、追手向櫓 — 復原的城正面。壯觀的石垣與門構。', en: 'Main gate and turret — the restored castle entrance with imposing stone walls and gate structure.' },
      { ja: '桜と堀 — 春には堀端の桜が満開となり、城跡が華やかに彩られる。', zhTw: '櫻花與壕溝 — 春天壕邊櫻花盛開，城跡華麗繽紛。', en: 'Cherry blossoms and moats — in spring, cherry trees along the moats paint the ruins in glorious color.' },
    ],
    architecture: [
      { ja: '本丸を中心に二の丸・三の丸を輪郭式に配した大規模な平城。', zhTw: '以本丸為中心輪郭式配置二之丸、三之丸的大規模平城。', en: 'A large flatland castle with honmaru at the center and concentric ni-no-maru and san-no-maru.' },
      { ja: '秀長時代に天守が築かれたが、柳沢氏入封後に天守台のみ残して解体された。', zhTw: '秀長時代築建天守，但柳澤氏入封後僅留天守台並解體。', en: 'Hidenaga built a keep, but after the Yanagisawa arrived, it was dismantled, leaving only the platform.' },
    ],
  },
  {
    id: 'uda-matsuyama',
    number: 142,
    regionId: 'kinki',
    name: { ja: '宇陀松山城', zhTw: '宇陀松山城', en: 'Uda-Matsuyama Castle' },
    city: { ja: '宇陀市', zhTw: '宇陀市', en: 'Uda' },
    prefecture: { ja: '奈良県', zhTw: '奈良縣', en: 'Nara' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 58, y: 66 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#7A8A5A', roofColor: '#3A4A2A' },
    goshuin: { bg: '#f0f5e6', ink: '#3a4a2a', seal: '#a52a2a', crest: '#7A8A5A' },
    history: [
      { ja: '南北朝時代に秋山氏が築城。宇陀三将の一つとして大和南部を支配した。', zhTw: '南北朝時代秋山氏築城。作為宇陀三將之一支配大和南部。', en: 'Built by the Akiyama in the Nanboku-chō era; one of the "Three Generals of Uda" controlling southern Yamato.' },
      { ja: '関ヶ原後に福島正則の弟・福島高晴が入封し、近世城郭に改修した。', zhTw: '關原後福島正則之弟福島高晴入封，改建為近世城郭。', en: 'After Sekigahara, Fukushima Takaharu (Masanori\'s brother) took over and modernized the castle.' },
      { ja: '1615年、大坂夏の陣後の一国一城令により破城。城下の松山地区は宿場町として存続した。', zhTw: '1615年大坂夏之陣後的一國一城令導致破城。城下松山地區作為宿場町存續。', en: 'Demolished under the 1615 one-castle edict after the Osaka campaigns; the Matsuyama district survived as a post town.' },
    ],
    figures: [
      { ja: '福島高晴 — 福島正則の弟。宇陀松山藩主として城を整備したが、大坂の陣で改易された。', zhTw: '福島高晴 — 福島正則之弟。作為宇陀松山藩主整備城郭，但大坂之陣後被改易。', en: 'Fukushima Takaharu — Masanori\'s brother, who developed the castle as domain lord but was dispossessed after Osaka.' },
    ],
    trivia: [
      { ja: '城下の松山地区は重要伝統的建造物群保存地区に選定された美しい街並みが残る。', zhTw: '城下松山地區被選定為重要傳統建造物群保存地區，保留美麗的街道。', en: 'The Matsuyama district is a designated Preservation District for Groups of Traditional Buildings, with beautiful streetscapes.' },
      { ja: '破城の痕跡として、石垣が意図的に崩された跡が明確に残っている。', zhTw: '作為破城的痕跡，石垣被刻意破壞的痕跡清晰殘存。', en: 'Traces of deliberate demolition remain — stone walls clearly torn down as part of the castle\'s destruction.' },
    ],
    highlights: [
      { ja: '天守台の破城痕跡 — 意図的に崩された石垣が歴史の転換点を物語る。', zhTw: '天守台破城痕跡 — 被刻意破壞的石垣訴說歷史轉捩點。', en: 'Keep platform demolition traces — deliberately toppled walls tell the story of a historical turning point.' },
      { ja: '松山西口関門 — 現存する城下町の関門。国史跡に指定。', zhTw: '松山西口關門 — 現存的城下町關門。指定為國史跡。', en: 'Matsuyama West Gate — a surviving castle-town checkpoint, designated a National Historic Site.' },
      { ja: '松山地区の町並み — 薬問屋の街並みが残る重伝建地区。', zhTw: '松山地區街道 — 保留藥問屋街道的重傳建地區。', en: 'Matsuyama streetscapes — a preservation district retaining its old medicine-merchant atmosphere.' },
    ],
    architecture: [
      { ja: '標高473mの古城山に築かれた山城。主郭に天守台を配し、石垣で曲輪を固めた。', zhTw: '建於標高473公尺古城山的山城。主郭配置天守台，以石垣鞏固曲輪。', en: 'A mountain castle on 473 m Kojōyama, with a keep platform in the main enclosure and stone-walled baileys.' },
      { ja: '一国一城令による破城の実態を最もよく伝える遺構として歴史的価値が高い。', zhTw: '作為最能傳達一國一城令破城實態的遺構，具有高度歷史價值。', en: 'One of the best-preserved examples of castle demolition under the one-castle edict, of high historical value.' },
    ],
  },
  {
    id: 'shingu',
    number: 143,
    regionId: 'kinki',
    name: { ja: '新宮城', zhTw: '新宮城', en: 'Shingū Castle' },
    city: { ja: '新宮市', zhTw: '新宮市', en: 'Shingū' },
    prefecture: { ja: '和歌山県', zhTw: '和歌山縣', en: 'Wakayama' },
    type: 'hirayama',
    designation: '国指定史跡',
    position: { x: 56, y: 70 },
    illustration: { style: 'ruins', tiers: 1, color: '#8A8A78', roofColor: '#5A5A48' },
    goshuin: { bg: '#f5f5e8', ink: '#3d3d28', seal: '#c44', crest: '#8A8A78' },
    history: [
      { ja: '1618年、浅野忠吉が熊野川河口の丹鶴山に築城。紀伊南部の要として整備された。', zhTw: '1618年淺野忠吉在熊野川河口丹鶴山築城。作為紀伊南部的要地整備。', en: 'Built in 1618 by Asano Tadayoshi on Tankaku-yama at the Kumano River mouth, developed as a key southern Kii stronghold.' },
      { ja: '紀伊藩の付家老・水野氏が代々城主を務め、新宮領3万5千石を治めた。', zhTw: '紀伊藩附家老水野氏代代擔任城主，治理新宮領3萬5千石。', en: 'The Mizuno, hereditary chief retainers of the Kii domain, served as lords, governing 35,000 koku in Shingū.' },
      { ja: '熊野川の水運と木材の集積地として新宮は繁栄し、城は物流拠点の役割も担った。', zhTw: '新宮作為熊野川水運與木材集散地而繁榮，城也擔任物流據點的角色。', en: 'Shingū prospered from Kumano River shipping and timber trade, with the castle serving as a logistics hub.' },
    ],
    figures: [
      { ja: '水野重仲 — 新宮城主として城と城下町を整備し、新宮の基礎を築いた。', zhTw: '水野重仲 — 作為新宮城主整備城與城下町，奠定新宮的基礎。', en: 'Mizuno Shigenaka — developed the castle and town, laying the foundations of modern Shingū.' },
    ],
    trivia: [
      { ja: '城跡から熊野川と太平洋が見渡せ、熊野三山の入口に位置する景勝地。', zhTw: '從城跡可眺望熊野川與太平洋，位於熊野三山入口的景勝地。', en: 'The ruins overlook the Kumano River and the Pacific, a scenic spot at the gateway to the Kumano Sanzan.' },
      { ja: '石垣に紀州特産の那智黒石（黒色頁岩）が一部使用されており、独特の色合いを持つ。', zhTw: '石垣部分使用紀州特產那智黑石（黑色頁岩），具有獨特色調。', en: 'Some walls incorporate Nachi black stone (dark shale), a Kishū specialty, giving them a distinctive hue.' },
    ],
    highlights: [
      { ja: '本丸石垣 — 熊野川を見下ろす崖上の壮大な石垣。打込み接ぎの美しい技法。', zhTw: '本丸石垣 — 俯瞰熊野川的懸崖上壯大石垣。打込接的美麗技法。', en: 'Honmaru walls — grand stonework on a cliff above the Kumano River, with beautifully fitted masonry.' },
      { ja: '水ノ手 — 熊野川に面した船着場跡。城の水上輸送の要だった。', zhTw: '水之手 — 面向熊野川的船著場遺跡。是城的水上運輸要地。', en: 'Mizunote — the river-facing wharf ruins, once the castle\'s vital waterborne transport hub.' },
    ],
    architecture: [
      { ja: '熊野川河口の丹鶴山に築かれた平山城。本丸・鐘ノ丸・松ノ丸を石垣で固める。', zhTw: '建於熊野川河口丹鶴山的平山城。以石垣鞏固本丸、鐘之丸、松之丸。', en: 'A hilltop castle on Tankakuyama at the Kumano River mouth, with stone-walled honmaru, Kane-no-maru, and Matsu-no-maru.' },
      { ja: '川に面した「水ノ手」は船着場を備えた水運施設で、物流拠点としての機能を示す。', zhTw: '面向河川的「水之手」配備船著場的水運設施，展示物流據點的機能。', en: 'The river-facing "Mizunote" with its wharf demonstrates the castle\'s function as a distribution center.' },
    ],
  },
  {
    id: 'wakasa-oniga',
    number: 144,
    regionId: 'chugoku',
    name: { ja: '若桜鬼ヶ城', zhTw: '若櫻鬼城', en: 'Wakasa Oniga Castle' },
    city: { ja: '若桜町', zhTw: '若櫻町', en: 'Wakasa' },
    prefecture: { ja: '鳥取県', zhTw: '鳥取縣', en: 'Tottori' },
    type: 'yamajiro',
    designation: '県指定史跡',
    position: { x: 44, y: 60 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#7A7A5A', roofColor: '#3A3A2A' },
    goshuin: { bg: '#f5f5e8', ink: '#3a3a2a', seal: '#8b0000', crest: '#7A7A5A' },
    history: [
      { ja: '1200年頃、矢部暉種が因幡国と但馬国を結ぶ要衝に築城したと伝わる。', zhTw: '1200年左右據傳矢部暉種在連結因幡國與但馬國的要衝築城。', en: 'Reportedly built around 1200 by Yabe Terutane at a strategic point linking Inaba and Tajima provinces.' },
      { ja: '戦国時代は山名氏・尼子氏・毛利氏の争奪を経て、最終的に木下重堅が城主となった。', zhTw: '戰國時代經山名氏、尼子氏、毛利氏爭奪，最終由木下重堅擔任城主。', en: 'Contested by the Yamana, Amago, and Mōri in the Sengoku period, it finally came under Kinoshita Shigekata.' },
      { ja: '関ヶ原後に山崎家盛が入り近世城郭に改修したが、1617年に鳥取城に統合され廃城。', zhTw: '關原後山崎家盛入城改建為近世城郭，但1617年被整合至鳥取城而廢城。', en: 'After Sekigahara, Yamazaki Iemori modernized it, but it was merged into Tottori Castle in 1617 and abandoned.' },
    ],
    figures: [
      { ja: '山崎家盛 — 関ヶ原後に若桜藩主となり、城の石垣を整備した。', zhTw: '山崎家盛 — 關原後成為若櫻藩主，整備了城的石垣。', en: 'Yamazaki Iemori — became lord of Wakasa after Sekigahara and developed the castle\'s stone walls.' },
    ],
    trivia: [
      { ja: '城跡からは氷ノ山をはじめとする中国山地の山々が一望でき、山岳展望が見事。', zhTw: '從城跡可一覽以冰之山為首的中國山地群山，山岳展望壯觀。', en: 'The ruins offer magnificent views of the Chūgoku Mountains, including Mt. Hyōno.' },
      { ja: '若桜町は鳥取県東部の小さな町だが、SL（蒸気機関車）の保存で鉄道ファンにも人気。', zhTw: '若櫻町是鳥取縣東部的小城鎮，以保存蒸汽機車深受鐵道迷歡迎。', en: 'Wakasa is a small town in eastern Tottori, also popular with rail fans for its preserved steam locomotive.' },
    ],
    highlights: [
      { ja: '六角石垣 — 山頂に残る六角形の石垣は全国でも珍しい遺構。', zhTw: '六角石垣 — 殘存於山頂的六角形石垣是全國罕見的遺構。', en: 'Hexagonal stone walls — unusually shaped stonework surviving at the summit, rare anywhere in Japan.' },
      { ja: '天守台 — 山崎氏時代の天守台が残り、因幡の山々の大パノラマが広がる。', zhTw: '天守台 — 山崎氏時代的天守台殘存，可見因幡群山的大全景。', en: 'Keep platform — the Yamazaki-era platform survives, with sweeping views of the Inaba mountains.' },
    ],
    architecture: [
      { ja: '標高452mの鶴尾山に築かれた山城。山崎氏時代に石垣造りの近世城郭に改修された。', zhTw: '建於標高452公尺鶴尾山的山城。山崎氏時代改建為石垣造的近世城郭。', en: 'A mountain castle on 452 m Tsuruo-yama, modernized with stone walls during the Yamazaki period.' },
      { ja: '主郭には天守台・石垣・虎口が整備され、小規模ながら完成度の高い縄張りを持つ。', zhTw: '主郭整備了天守台、石垣、虎口，規模雖小但繩張完成度高。', en: 'The main enclosure has a keep platform, walls, and gates — compact but highly refined in layout.' },
    ],
  },

  // ── 続100名城 #145-150 中国 ──
  {
    id: 'yonago',
    number: 145,
    regionId: 'chugoku',
    name: { ja: '米子城', zhTw: '米子城', en: 'Yonago Castle' },
    city: { ja: '米子市', zhTw: '米子市', en: 'Yonago' },
    prefecture: { ja: '鳥取県', zhTw: '鳥取縣', en: 'Tottori' },
    type: 'hirayama',
    designation: '国指定史跡',
    position: { x: 42, y: 62 },
    illustration: { style: 'ruins', tiers: 1, color: '#8A8A78', roofColor: '#5A5A48' },
    goshuin: { bg: '#f5f5e8', ink: '#3d3d28', seal: '#c0392b', crest: '#8A8A78' },
    history: [
      { ja: '1591年、吉川広家が湊山に築城を開始。山陰道の要衝として整備された。', zhTw: '1591年吉川廣家開始在湊山築城。作為山陰道的要衝整備。', en: 'In 1591, Kikkawa Hiroie began building on Minatoyama, developing it as a key point on the San\'indō road.' },
      { ja: '関ヶ原後は中村一忠が入封し、四重天守を築いて近世城郭として完成させた。', zhTw: '關原後中村一忠入封，築建四重天守使其成為近世城郭。', en: 'After Sekigahara, Nakamura Kazutada took over, built a four-story keep, and completed its early-modern form.' },
      { ja: '中村氏断絶後は加藤氏、池田氏と城主が替わり、鳥取藩の支城として幕末まで存続。', zhTw: '中村氏斷絕後歷經加藤氏、池田氏更替城主，作為鳥取藩支城存續至幕末。', en: 'After the Nakamura died out, the Katō and Ikeda followed; it survived as a Tottori domain branch castle.' },
    ],
    figures: [
      { ja: '吉川広家 — 毛利元就の孫。関ヶ原で毛利本軍を動かさず、毛利家存続の恩人となった。', zhTw: '吉川廣家 — 毛利元就之孫。關原之戰中使毛利本軍不動，成為毛利家存續的恩人。', en: 'Kikkawa Hiroie — Mōri Motonari\'s grandson who kept the Mōri main army from fighting at Sekigahara, saving the clan.' },
    ],
    trivia: [
      { ja: '天守台からは日本海・大山・中海が一望でき、「山陰随一の絶景城」と称される。', zhTw: '從天守台可一覽日本海、大山、中海，被稱為「山陰第一絕景城」。', en: 'The keep platform offers views of the Sea of Japan, Mt. Daisen, and Lake Nakaumi — "the San\'in\'s finest castle view."' },
      { ja: '米子城は天守が2基（四重と三重）並立していた珍しい城で、その天守台が両方残る。', zhTw: '米子城曾有兩座天守（四重和三重）並立的罕見城，兩座天守台都殘存。', en: 'Unusually, Yonago had two keeps (four-story and three-story) side by side — both platforms survive.' },
    ],
    highlights: [
      { ja: '天守台からの大パノラマ — 大山・日本海・中海を見渡す山陰屈指の絶景。', zhTw: '從天守台的大全景 — 眺望大山、日本海、中海的山陰頂級絕景。', en: 'Panorama from the keep platform — a premier San\'in view spanning Mt. Daisen, the Sea of Japan, and Lake Nakaumi.' },
      { ja: '二重の天守台 — 大天守と小天守の天守台が並ぶ珍しい遺構。', zhTw: '雙重天守台 — 大天守與小天守天守台並列的罕見遺構。', en: 'Twin keep platforms — the great keep and small keep platforms standing side by side, a rare sight.' },
    ],
    architecture: [
      { ja: '湊山に築かれた平山城。山頂に天守曲輪、山麓に御殿を配した。', zhTw: '建於湊山的平山城。山頂配置天守曲輪，山麓配置御殿。', en: 'A hilltop castle on Minatoyama, with the keep enclosure on the summit and the palace at the base.' },
      { ja: '四重天守と三重の副天守を並立させた独特の天守配置は全国的にも稀有。', zhTw: '並列四重天守與三重副天守的獨特天守配置在全國也很稀有。', en: 'The unique pairing of a four-story main keep with a three-story sub-keep is extremely rare nationwide.' },
    ],
  },
  {
    id: 'hamada',
    number: 146,
    regionId: 'chugoku',
    name: { ja: '浜田城', zhTw: '濱田城', en: 'Hamada Castle' },
    city: { ja: '浜田市', zhTw: '濱田市', en: 'Hamada' },
    prefecture: { ja: '島根県', zhTw: '島根縣', en: 'Shimane' },
    type: 'hirayama',
    designation: '県指定史跡',
    position: { x: 38, y: 64 },
    illustration: { style: 'ruins', tiers: 1, color: '#8A8878', roofColor: '#5A5848' },
    goshuin: { bg: '#f5f0e8', ink: '#3d3828', seal: '#c44', crest: '#8A8878' },
    history: [
      { ja: '1620年、古田重治が日本海に面する丘陵に築城。石見国の統治拠点となった。', zhTw: '1620年古田重治在面向日本海的丘陵築城。成為石見國的統治據點。', en: 'Built in 1620 by Furuta Shigeharu on a hill facing the Sea of Japan, serving as the seat of Iwami province.' },
      { ja: '松平周防守家が藩主を長く務め、竹島（現・鬱陵島）渡海問題にも関わった。', zhTw: '松平周防守家長期擔任藩主，也涉及竹島（現鬱陵島）渡海問題。', en: 'The Matsudaira Suō-no-kami governed for many years, involved in the Takeshima (Ulleungdo) maritime dispute.' },
      { ja: '1866年、長州征伐（第二次）で長州藩に攻められ、藩主は城に火を放ち退却した。', zhTw: '1866年第二次長州征伐中被長州藩進攻，藩主放火燒城退卻。', en: 'In 1866, during the Second Chōshū Expedition, the lord set fire to the castle and retreated under Chōshū attack.' },
    ],
    figures: [
      { ja: '古田重治 — 浜田藩初代藩主。日本海交易の要衝に城を築き、浜田の基礎を作った。', zhTw: '古田重治 — 濱田藩初代藩主。在日本海交易要衝築城，奠定濱田的基礎。', en: 'Furuta Shigeharu — first lord, who built the castle at a key Sea of Japan trading point and founded Hamada.' },
    ],
    trivia: [
      { ja: '浜田藩は密貿易事件（竹島事件）で知られ、幕府と外交問題を抱えた異色の藩。', zhTw: '濱田藩以走私貿易事件（竹島事件）聞名，是與幕府有外交問題的異色藩。', en: 'Hamada domain is known for the Takeshima smuggling incident, an unusual domain embroiled in diplomatic troubles with the Shōgunate.' },
      { ja: '長州戦争で自焼した数少ない城の一つで、幕末動乱の生々しい歴史を伝える。', zhTw: '作為長州戰爭中自焚的少數城之一，傳達幕末動亂的鮮明歷史。', en: 'One of the few castles burned by its own garrison in the Chōshū wars, vividly conveying Bakumatsu turmoil.' },
    ],
    highlights: [
      { ja: '石垣と日本海の眺望 — 崖上の石垣から日本海の壮大な景色を楽しめる。', zhTw: '石垣與日本海眺望 — 從懸崖上的石垣欣賞日本海壯大景色。', en: 'Stone walls and Sea of Japan views — enjoy grand maritime scenery from the clifftop walls.' },
      { ja: '津和野藩との境目 — 石見国内の藩境の歴史が感じられる。', zhTw: '與津和野藩的邊境 — 可感受石見國內藩境的歷史。', en: 'Border with Tsuwano domain — feel the history of provincial boundaries within Iwami.' },
    ],
    architecture: [
      { ja: '日本海に面した標高67mの丘陵に築かれた平山城。海に向かって石垣がそびえる。', zhTw: '建於面向日本海標高67公尺丘陵的平山城。石垣朝海聳立。', en: 'A hilltop castle on a 67 m hill facing the Sea of Japan, with stone walls rising toward the sea.' },
      { ja: '本丸・二の丸・三の丸を階段状に配し、日本海と外堀で防御する堅固な縄張り。', zhTw: '本丸、二之丸、三之丸呈階梯狀配置，以日本海與外壕防禦的堅固繩張。', en: 'Honmaru, ni-no-maru, and san-no-maru in tiers, defended by the Sea of Japan and outer moats.' },
    ],
  },
  {
    id: 'bitchu-takamatsu',
    number: 147,
    regionId: 'chugoku',
    name: { ja: '備中高松城', zhTw: '備中高松城', en: 'Bitchū-Takamatsu Castle' },
    city: { ja: '岡山市', zhTw: '岡山市', en: 'Okayama' },
    prefecture: { ja: '岡山県', zhTw: '岡山縣', en: 'Okayama' },
    type: 'hirajiro',
    designation: '国指定史跡',
    position: { x: 42, y: 68 },
    illustration: { style: 'ruins', tiers: 1, color: '#7A8A6A', roofColor: '#4A5A3A' },
    goshuin: { bg: '#f0f5e8', ink: '#3a4a2a', seal: '#8b0000', crest: '#7A8A6A' },
    history: [
      { ja: '戦国時代、三村氏の家臣・石川氏が築いた沼城（低湿地の城）。毛利氏の東方防衛拠点となった。', zhTw: '戰國時代三村氏家臣石川氏築建的沼城（低濕地之城）。成為毛利氏的東方防衛據點。', en: 'A marshland castle built by the Ishikawa (retainers of the Mimura); it became Mōri\'s eastern defense point.' },
      { ja: '1582年、羽柴秀吉が水攻めで攻略。日本三大水攻めの一つとして名高い。', zhTw: '1582年羽柴秀吉以水攻攻下。以日本三大水攻之一聞名。', en: 'In 1582, Hashiba Hideyoshi conquered it by flooding — one of Japan\'s three great water sieges.' },
      { ja: '秀吉は足守川の水を堰き止め、城を完全に水没させる大規模な土木作戦を敢行した。', zhTw: '秀吉攔截足守川之水，執行使城完全淹沒的大規模土木作戰。', en: 'Hideyoshi dammed the Ashimori River, executing a massive engineering operation to completely submerge the castle.' },
      { ja: '水攻め最中に本能寺の変の報が届き、秀吉は急いで和睦を結び「中国大返し」で京へ向かった。', zhTw: '水攻期間傳來本能寺之變的消息，秀吉急忙議和後以「中國大返回」趕往京都。', en: 'News of Honnō-ji arrived mid-siege; Hideyoshi hastily made peace and launched his famous "Great Return" march to Kyoto.' },
    ],
    figures: [
      { ja: '清水宗治 — 城主として最後まで籠城し、秀吉の水攻めに屈した後、城兵の助命と引き換えに切腹した義将。', zhTw: '清水宗治 — 作為城主堅守至最後，屈服於秀吉水攻後，以城兵助命為交換而切腹的義將。', en: 'Shimizu Muneharu — held the castle to the end; after yielding to the flood, he took his life to save his garrison.' },
      { ja: '羽柴秀吉 — 水攻めの発案者。大土木工事を12日で完成させた逸話は秀吉の実行力を示す。', zhTw: '羽柴秀吉 — 水攻的發案者。12天完成大型土木工程的軼事展示秀吉的執行力。', en: 'Hashiba Hideyoshi — devised the flooding; completing the massive earthworks in 12 days showcased his extraordinary execution.' },
      { ja: '黒田官兵衛 — 水攻めを秀吉に進言した軍師。本能寺の変後の迅速な撤退も官兵衛の献策。', zhTw: '黑田官兵衛 — 向秀吉進言水攻的軍師。本能寺之變後迅速撤退也是官兵衛的獻策。', en: 'Kuroda Kanbei — the strategist who proposed the flooding, also advising the swift withdrawal after Honnō-ji.' },
    ],
    trivia: [
      { ja: '清水宗治の切腹は「武士の鑑」として称えられ、小舟の上で辞世を詠み自刃した。', zhTw: '清水宗治的切腹被稱頌為「武士楷模」，在小舟上詠辭世詩後自刃。', en: 'Muneharu\'s seppuku is hailed as "the model of a samurai" — he composed a death poem on a small boat before cutting his belly.' },
      { ja: '秀吉が築いた全長約3kmの堤防跡が一部残り、水攻めの規模を実感できる。', zhTw: '秀吉築建的全長約3公里堤防遺跡部分殘存，可實感水攻的規模。', en: 'Parts of Hideyoshi\'s 3 km embankment survive, letting visitors grasp the scale of the flooding operation.' },
      { ja: '毎年6月に清水宗治の慰霊祭が行われ、地元では今も宗治の忠義が語り継がれている。', zhTw: '每年6月舉行清水宗治的慰靈祭，在當地至今仍傳頌宗治的忠義。', en: 'A memorial service for Muneharu is held each June; his loyalty is still celebrated locally.' },
    ],
    highlights: [
      { ja: '清水宗治の首塚と辞世の碑 — 宗治の忠義を偲ぶ史跡。', zhTw: '清水宗治的首塚與辭世碑 — 追憶宗治忠義的史跡。', en: 'Muneharu\'s burial mound and death-poem monument — memorials to a loyal warrior.' },
      { ja: '水攻め堤防跡 — 秀吉が築いた堤防の一部が残り、当時の土木技術を伝える。', zhTw: '水攻堤防跡 — 秀吉築建的堤防部分殘存，傳達當時的土木技術。', en: 'Flood embankment ruins — remnants of Hideyoshi\'s dam reveal the engineering of the era.' },
      { ja: '蛙ヶ鼻築堤跡 — 最も保存状態の良い堤防遺構。国史跡。', zhTw: '蛙鼻築堤跡 — 保存狀態最佳的堤防遺構。國史跡。', en: 'Kawazu-ga-hana embankment — the best-preserved dam remnant, a National Historic Site.' },
    ],
    architecture: [
      { ja: '低湿地に築かれた沼城で、周囲の沼と川が天然の水堀として機能した。', zhTw: '建於低濕地的沼城，周圍的沼澤與河川作為天然水壕發揮功能。', en: 'A marshland castle where surrounding swamps and rivers served as natural water moats.' },
      { ja: '平城ながら沼地の特性により攻めにくく、秀吉が水攻めという奇策に出た理由がわかる。', zhTw: '雖是平城但因沼地特性而難以進攻，可理解秀吉採取水攻奇策的原因。', en: 'Though flat, the marshland made direct assault difficult — explaining Hideyoshi\'s resort to the extraordinary flooding tactic.' },
    ],
  },
  {
    id: 'mihara',
    number: 148,
    regionId: 'chugoku',
    name: { ja: '三原城', zhTw: '三原城', en: 'Mihara Castle' },
    city: { ja: '三原市', zhTw: '三原市', en: 'Mihara' },
    prefecture: { ja: '広島県', zhTw: '廣島縣', en: 'Hiroshima' },
    type: 'hirajiro',
    designation: '県指定史跡',
    position: { x: 42, y: 70 },
    illustration: { style: 'ruins', tiers: 1, color: '#8B8B78', roofColor: '#5B5B48' },
    goshuin: { bg: '#f5f5e8', ink: '#3d3d28', seal: '#c44', crest: '#8B8B78' },
    history: [
      { ja: '1567年、小早川隆景が瀬戸内海に面して築城。毛利水軍の重要拠点となった。', zhTw: '1567年小早川隆景在面向瀨戶內海處築城。成為毛利水軍的重要據點。', en: 'Built in 1567 by Kobayakawa Takakage facing the Seto Inland Sea, it became a vital Mōri naval base.' },
      { ja: '小早川隆景は毛利元就の三男で、「三本の矢」の一人として毛利家を支えた知将。', zhTw: '小早川隆景是毛利元就的三男，作為「三支箭」之一支持毛利家的智將。', en: 'Takakage, Mōri Motonari\'s third son, was one of the "Three Arrows" who upheld the Mōri clan — a brilliant strategist.' },
      { ja: '関ヶ原後に福島正則の支配下に入り、広島城の支城として維持された。', zhTw: '關原後歸入福島正則支配，作為廣島城的支城維持。', en: 'After Sekigahara, it came under Fukushima Masanori and was maintained as a branch of Hiroshima Castle.' },
    ],
    figures: [
      { ja: '小早川隆景 — 毛利元就の三男。知略に優れ、瀬戸内海の水軍を統率した名将。', zhTw: '小早川隆景 — 毛利元就三男。智略優秀，統率瀨戶內海水軍的名將。', en: 'Kobayakawa Takakage — Motonari\'s third son, an acclaimed commander who led the Inland Sea naval forces.' },
    ],
    trivia: [
      { ja: 'JR山陽新幹線の三原駅が天守台の上に建てられており、「駅に飲み込まれた城」として有名。', zhTw: 'JR山陽新幹線三原站建在天守台上，以「被車站吞噬的城」聞名。', en: 'JR Mihara Station was built atop the keep platform — famously "the castle swallowed by a train station."' },
      { ja: '天守台は新幹線ホームのすぐ横にあり、電車を待ちながら石垣を見学できる珍風景。', zhTw: '天守台就在新幹線月台旁，等電車時就能參觀石垣的奇特風景。', en: 'The keep platform sits right beside the bullet-train platform — you can admire stone walls while waiting for your train.' },
    ],
    highlights: [
      { ja: '天守台と新幹線 — 日本で唯一、新幹線の駅と一体化した天守台。', zhTw: '天守台與新幹線 — 日本唯一與新幹線車站一體化的天守台。', en: 'Keep platform and Shinkansen — Japan\'s only keep platform integrated with a bullet-train station.' },
      { ja: '船入櫓跡 — 瀬戸内海に直結した水軍の船入り場の遺構。', zhTw: '船入櫓跡 — 直通瀨戶內海的水軍船入場遺構。', en: 'Ship-dock turret ruins — remains of the naval harbor directly connected to the Inland Sea.' },
    ],
    architecture: [
      { ja: '瀬戸内海に面した海城で、満潮時には三方を海に囲まれる「浮城」と呼ばれた。', zhTw: '面向瀨戶內海的海城，漲潮時三面被海環繞，被稱為「浮城」。', en: 'A sea castle facing the Inland Sea; at high tide it was surrounded on three sides, earning the name "Floating Castle."' },
      { ja: '天守台は約32m四方、高さ約7mの巨大なもので、山陽地方最大級の天守台。', zhTw: '天守台約32公尺見方、高約7公尺的巨大構造，是山陽地方最大級的天守台。', en: 'The keep platform — roughly 32 m square and 7 m tall — is one of the largest in the San\'yō region.' },
    ],
  },
  {
    id: 'niitakayama',
    number: 149,
    regionId: 'chugoku',
    name: { ja: '新高山城', zhTw: '新高山城', en: 'Niitakayama Castle' },
    city: { ja: '三原市', zhTw: '三原市', en: 'Mihara' },
    prefecture: { ja: '広島県', zhTw: '廣島縣', en: 'Hiroshima' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 43, y: 69 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#6A7A5A', roofColor: '#3A4A2A' },
    goshuin: { bg: '#f0f5e8', ink: '#3a4a2a', seal: '#a52a2a', crest: '#6A7A5A' },
    history: [
      { ja: '1552年、小早川隆景が高山城から本拠を移して築いた山城。三原城築城前の居城。', zhTw: '1552年小早川隆景從高山城遷移本據而築建的山城。三原城築城前的居城。', en: 'Built in 1552 when Kobayakawa Takakage relocated from Takayama Castle — his seat before building Mihara.' },
      { ja: '沼田川を天然の堀とし、対岸の高山城と向かい合う位置に築かれた。', zhTw: '以沼田川為天然壕溝，築建在與對岸高山城面對面的位置。', en: 'Using the Nuta River as a natural moat, it was built facing Takayama Castle across the water.' },
      { ja: '隆景が三原城に移った後に廃城となり、石垣や建材の多くは三原城に転用された。', zhTw: '隆景遷至三原城後廢城，石垣和建材多數被轉用至三原城。', en: 'Abandoned when Takakage moved to Mihara; much of its stone and materials were reused at the new castle.' },
    ],
    figures: [
      { ja: '小早川隆景 — 新高山城で約15年を過ごし、毛利家の瀬戸内海支配を確立した。', zhTw: '小早川隆景 — 在新高山城度過約15年，確立了毛利家的瀨戶內海支配。', en: 'Kobayakawa Takakage — spent about 15 years at Niitakayama, establishing Mōri control over the Inland Sea.' },
    ],
    trivia: [
      { ja: '対岸の高山城跡と合わせて国史跡に指定されており、二城一対の城郭として価値が高い。', zhTw: '與對岸高山城跡合併指定為國史跡，作為兩城一對的城郭價值極高。', en: 'Designated a National Historic Site together with Takayama across the river — valued as a paired castle set.' },
      { ja: '三原城への石材転用により石垣の痕跡が随所に残り、城の「引っ越し」の歴史が見える。', zhTw: '因石材轉用至三原城，各處殘留石垣痕跡，可見城「搬家」的歷史。', en: 'Stone-removal scars throughout the site tell the story of the castle\'s "move" to Mihara.' },
    ],
    highlights: [
      { ja: '本丸跡からの沼田川の眺望 — 川を挟んで高山城跡と向かい合う歴史的景観。', zhTw: '從本丸跡眺望沼田川 — 隔河與高山城跡面對面的歷史景觀。', en: 'Nuta River views from the honmaru — a historic landscape facing Takayama Castle across the water.' },
      { ja: '石垣の抜き取り痕跡 — 三原城に転用された石垣の痕跡が生々しく残る。', zhTw: '石垣拔取痕跡 — 轉用至三原城的石垣痕跡鮮明殘存。', en: 'Stone-removal scars — vivid traces where walls were dismantled for reuse at Mihara.' },
    ],
    architecture: [
      { ja: '標高197mの新高山に築かれた大規模山城。沼田川を天然の堀とし、対岸の高山城と連携した。', zhTw: '建於標高197公尺新高山的大規模山城。以沼田川為天然壕溝，與對岸高山城聯動。', en: 'A large mountain castle on 197 m Niitakayama, using the Nuta River as a moat and coordinating with Takayama across it.' },
      { ja: '主郭部には石垣が残り、小早川氏の本拠にふさわしい規模を持つ。', zhTw: '主郭部殘存石垣，具有與小早川氏本據相稱的規模。', en: 'Stone walls remain in the main enclosure, befitting the scale of the Kobayakawa clan\'s headquarters.' },
    ],
  },
  {
    id: 'ouchi-takamine',
    number: 150,
    regionId: 'chugoku',
    name: { ja: '大内氏館・高嶺城', zhTw: '大內氏館・高嶺城', en: 'Ōuchi Residence & Takamine Castle' },
    city: { ja: '山口市', zhTw: '山口市', en: 'Yamaguchi' },
    prefecture: { ja: '山口県', zhTw: '山口縣', en: 'Yamaguchi' },
    type: 'yakata',
    designation: '国指定史跡',
    position: { x: 34, y: 70 },
    illustration: { style: 'mansion', tiers: 1, color: '#8B7B5B', roofColor: '#4A3B2B' },
    goshuin: { bg: '#f5efe5', ink: '#4a3b2b', seal: '#c44', crest: '#8B7B5B' },
    history: [
      { ja: '大内氏は周防・長門の守護大名で、室町時代に山口を「西の京」として繁栄させた。', zhTw: '大內氏是周防、長門的守護大名，室町時代將山口繁榮為「西之京」。', en: 'The Ōuchi, shugo of Suō and Nagato, made Yamaguchi flourish as "the Kyoto of the West" in the Muromachi period.' },
      { ja: '大内義隆の時代にはザビエルを迎えてキリスト教布教を許可するなど、国際的な文化が花開いた。', zhTw: '大內義隆時代迎接沙勿略並許可基督教傳教等，國際文化蓬勃發展。', en: 'Under Ōuchi Yoshitaka, Francis Xavier was welcomed and Christianity permitted — international culture blossomed.' },
      { ja: '1551年、家臣の陶晴賢が謀反（大寧寺の変）。義隆は自刃し、大内氏は事実上滅亡した。', zhTw: '1551年家臣陶晴賢謀反（大寧寺之變）。義隆自刃，大內氏事實上滅亡。', en: 'In 1551, retainer Sue Harukata rebelled (the Daineiji Incident); Yoshitaka took his life, effectively ending the Ōuchi.' },
      { ja: '高嶺城は大内氏最後の当主・義長が詰城として築いたが、毛利氏に攻められ落城した。', zhTw: '高嶺城是大內氏最後當主義長作為詰城築建，但被毛利氏進攻而落城。', en: 'Takamine Castle was built as a refuge by the last Ōuchi lord Yoshinaga, but fell to the Mōri.' },
    ],
    figures: [
      { ja: '大内義隆 — 学問と芸術を愛した文化人大名。しかし政治を疎かにし謀反を招いた。', zhTw: '大內義隆 — 熱愛學問與藝術的文化人大名。但疏忽政治招致謀反。', en: 'Ōuchi Yoshitaka — a cultured lord who loved learning and art, but neglected politics and invited rebellion.' },
      { ja: 'フランシスコ・ザビエル — 1551年に山口を訪れ、大内義隆の許可を得てキリスト教を布教した。', zhTw: '方濟各・沙勿略 — 1551年訪問山口，獲大內義隆許可傳教基督教。', en: 'Francis Xavier — visited Yamaguchi in 1551 and received Yoshitaka\'s permission to preach Christianity.' },
    ],
    trivia: [
      { ja: '応仁の乱で荒廃した京都から多くの公家・文化人が山口に避難し、「西の京」文化が花開いた。', zhTw: '應仁之亂中荒廢的京都有許多公卿、文化人避難至山口，「西之京」文化蓬勃發展。', en: 'After the Ōnin War devastated Kyoto, nobles and artists fled to Yamaguchi, creating the "Western Kyoto" culture.' },
      { ja: '大内氏館跡には現在龍福寺があり、発掘で池泉庭園や枯山水庭園が発見されている。', zhTw: '大內氏館跡現有龍福寺，發掘中發現了池泉庭園和枯山水庭園。', en: 'Ryūfuku-ji temple now stands on the residence site; excavations have uncovered pond and dry-landscape gardens.' },
    ],
    highlights: [
      { ja: '大内氏館跡・龍福寺 — 復元された西門と発掘された庭園遺構。', zhTw: '大內氏館跡、龍福寺 — 復原的西門與發掘的庭園遺構。', en: 'Ōuchi Residence ruins / Ryūfuku-ji — the restored west gate and excavated garden remains.' },
      { ja: '高嶺城跡 — 標高338mの山頂に石垣が残り、山口盆地を一望する。', zhTw: '高嶺城跡 — 標高338公尺山頂殘存石垣，一覽山口盆地。', en: 'Takamine Castle ruins — stone walls on a 338 m summit overlooking the Yamaguchi basin.' },
      { ja: 'ザビエル記念聖堂 — 大内氏との縁を伝える記念教会。', zhTw: '沙勿略紀念聖堂 — 傳達與大內氏緣分的紀念教堂。', en: 'Xavier Memorial Church — a church commemorating the Ōuchi-Xavier connection.' },
    ],
    architecture: [
      { ja: '大内氏館は平地の方形居館で、堀と土塁に囲まれた守護大名の典型的な居館形式。', zhTw: '大內氏館是平地方形居館，被壕溝和土壘環繞的守護大名典型居館形式。', en: 'The Ōuchi residence was a rectangular flatland manor surrounded by moats and earthworks — a typical shugo mansion.' },
      { ja: '高嶺城は詰城として急峻な山頂に石垣を築き、大内氏最後の防衛拠点としての性格を持つ。', zhTw: '高嶺城作為詰城在急峻山頂築建石垣，具有大內氏最後防衛據點的性質。', en: 'Takamine, a refuge castle with stone walls on a steep summit, served as the Ōuchi\'s last line of defense.' },
    ],
  },

  // ── 続100名城 #151-156 四国 ──
  {
    id: 'shozui',
    number: 151,
    regionId: 'shikoku',
    name: { ja: '勝瑞城', zhTw: '勝瑞城', en: 'Shōzui Castle' },
    city: { ja: '藍住町', zhTw: '藍住町', en: 'Aizumi' },
    prefecture: { ja: '徳島県', zhTw: '德島縣', en: 'Tokushima' },
    type: 'hirajiro',
    designation: '国指定史跡',
    position: { x: 48, y: 76 },
    illustration: { style: 'ruins', tiers: 1, color: '#8A8A78', roofColor: '#5A5A48' },
    goshuin: { bg: '#f5f5e8', ink: '#3d3d28', seal: '#c0392b', crest: '#8A8A78' },
    history: [
      { ja: '室町時代、阿波国守護・細川氏の居城として約240年間阿波の政治中心であった。', zhTw: '室町時代作為阿波國守護細川氏的居城，約240年間為阿波的政治中心。', en: 'For about 240 years in the Muromachi period, this was the seat of the Hosokawa, shugo of Awa, and Awa\'s political center.' },
      { ja: '三好氏が細川氏に代わって実権を握り、三好長慶はここから畿内に進出して天下人となった。', zhTw: '三好氏取代細川氏掌握實權，三好長慶從此進出畿內成為天下人。', en: 'The Miyoshi supplanted the Hosokawa; Miyoshi Nagayoshi launched his rise to national power from here.' },
      { ja: '1582年、長宗我部元親の阿波侵攻により落城。勝瑞城の歴史は終わりを迎えた。', zhTw: '1582年長宗我部元親侵攻阿波導致落城。勝瑞城的歷史畫下句點。', en: 'In 1582, Chōsokabe Motochika\'s Awa invasion brought about its fall, ending Shōzui\'s long history.' },
    ],
    figures: [
      { ja: '三好長慶 — 勝瑞城を拠点に畿内に進出し、室町幕府を凌駕する権力を握った天下人。', zhTw: '三好長慶 — 以勝瑞城為據點進出畿內，掌握凌駕室町幕府權力的天下人。', en: 'Miyoshi Nagayoshi — based at Shōzui, he advanced into the Kinai and seized power surpassing the Muromachi Shōgunate.' },
    ],
    trivia: [
      { ja: '発掘調査で守護所に伴う庭園や中国・朝鮮からの輸入陶磁器が大量に出土した。', zhTw: '發掘調查中大量出土守護所伴隨的庭園以及從中國、朝鮮進口的陶瓷器。', en: 'Excavations unearthed gardens and masses of imported Chinese and Korean ceramics, reflecting its wealth.' },
      { ja: '「勝瑞」の地名は細川氏が京都の勝瑞寺にちなんで命名したとされる。', zhTw: '「勝瑞」地名據說是細川氏依據京都勝瑞寺而命名。', en: 'The name "Shōzui" reportedly derives from Shōzui-ji temple in Kyoto, chosen by the Hosokawa.' },
    ],
    highlights: [
      { ja: '館跡の発掘遺構 — 守護所の庭園跡や井戸跡が発掘・公開されている。', zhTw: '館跡發掘遺構 — 守護所庭園跡和井戶跡已發掘公開。', en: 'Excavated residence ruins — the shugo garden and well remains are on display.' },
      { ja: '勝瑞城跡の堀 — 水堀が現存し、中世の城の面影を伝える。', zhTw: '勝瑞城跡的壕溝 — 水壕現存，傳達中世城的風貌。', en: 'Shōzui Castle moat — a surviving water moat preserving the medieval castle\'s character.' },
    ],
    architecture: [
      { ja: '館（守護所）と城（防御施設）が隣接する中世守護大名居城の典型的な形態。', zhTw: '館（守護所）與城（防禦設施）相鄰的中世守護大名居城典型形態。', en: 'A classic medieval shugo layout with the residence (mansion) and defensive castle (fortification) adjacent.' },
      { ja: '館跡からは大規模な庭園・建物群の痕跡が発見され、守護大名の豪華な生活が窺える。', zhTw: '館跡發現大規模庭園、建物群痕跡，可窺見守護大名的豪華生活。', en: 'Large gardens and building traces found at the residence reveal the shugo daimyō\'s luxurious lifestyle.' },
    ],
  },
  {
    id: 'ichinomiya-awa',
    number: 152,
    regionId: 'shikoku',
    name: { ja: '一宮城', zhTw: '一宮城', en: 'Ichinomiya Castle' },
    city: { ja: '徳島市', zhTw: '德島市', en: 'Tokushima' },
    prefecture: { ja: '徳島県', zhTw: '德島縣', en: 'Tokushima' },
    type: 'yamajiro',
    designation: '県指定史跡',
    position: { x: 48, y: 77 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#6A7A5A', roofColor: '#3A4A2A' },
    goshuin: { bg: '#f0f5e8', ink: '#3a4a2a', seal: '#8b0000', crest: '#6A7A5A' },
    history: [
      { ja: '1338年、小笠原長宗が南北朝の争乱の中で築城。阿波最大の山城となった。', zhTw: '1338年小笠原長宗在南北朝之亂中築城。成為阿波最大的山城。', en: 'Built in 1338 by Ogasawara Nagamune amid the Nanboku-chō wars; it became Awa\'s largest mountain castle.' },
      { ja: '戦国時代は三好氏の支配下に入り、阿波国の重要な軍事拠点であった。', zhTw: '戰國時代歸入三好氏支配，是阿波國的重要軍事據點。', en: 'Under Miyoshi control in the Sengoku period, it served as a key military stronghold of Awa.' },
      { ja: '1582年、長宗我部元親の侵攻に対し一宮成助が籠城するも、最終的に降伏した。', zhTw: '1582年面對長宗我部元親的侵攻，一宮成助籠城但最終投降。', en: 'In 1582, Ichinomiya Narisuke held out against Chōsokabe Motochika\'s invasion but eventually surrendered.' },
      { ja: '蜂須賀家政の阿波入国後に阿波の拠点は徳島城に移り、一宮城は廃城となった。', zhTw: '蜂須賀家政入國阿波後據點移至德島城，一宮城廢城。', en: 'When Hachisuka Iemasa entered Awa, the base shifted to Tokushima Castle and Ichinomiya was abandoned.' },
    ],
    figures: [
      { ja: '一宮成助 — 一宮城最後の城主。長宗我部軍に対し籠城戦を繰り広げた。', zhTw: '一宮成助 — 一宮城最後的城主。與長宗我部軍展開籠城戰。', en: 'Ichinomiya Narisuke — the castle\'s last lord, who waged a siege defense against the Chōsokabe forces.' },
    ],
    trivia: [
      { ja: '城跡への登山道は一宮神社から始まり、四国霊場第13番札所・大日寺にも近い。', zhTw: '城跡登山道從一宮神社開始，也靠近四國靈場第13番札所大日寺。', en: 'The trail starts from Ichinomiya Shrine, near the 13th temple of the Shikoku Pilgrimage.' },
      { ja: '本丸の石垣は徳島県内の山城としては最大規模で、四国山城の白眉とされる。', zhTw: '本丸石垣作為德島縣內山城為最大規模，被視為四國山城的翹楚。', en: 'The honmaru walls are the largest among Tokushima\'s mountain castles, considered Shikoku\'s finest.' },
    ],
    highlights: [
      { ja: '本丸の石垣 — 阿波最大級の山城石垣。苔むした石垣が美しい。', zhTw: '本丸石垣 — 阿波最大級的山城石垣。長滿青苔的石垣很美。', en: 'Honmaru stone walls — Awa\'s largest mountain-castle walls, beautifully carpeted with moss.' },
      { ja: '才蔵丸 — 本丸に次ぐ広さの曲輪。眺望も良く、城の規模を実感できる。', zhTw: '才藏丸 — 面積僅次於本丸的曲輪。眺望佳，可實感城的規模。', en: 'Saizō-maru — the second-largest enclosure with fine views, conveying the castle\'s grand scale.' },
    ],
    architecture: [
      { ja: '標高144mの山に本丸・才蔵丸・明神丸・小倉丸など多数の曲輪を配した大規模山城。', zhTw: '在標高144公尺的山上配置本丸、才藏丸、明神丸、小倉丸等多座曲輪的大規模山城。', en: 'A large mountain castle on a 144 m hill, with honmaru, Saizō-maru, Myōjin-maru, Ogura-maru, and more.' },
      { ja: '石垣は野面積みで、戦国期の山城としては高度な石垣技術を示す。', zhTw: '石垣為野面積，作為戰國期山城展示了高度的石垣技術。', en: 'Rough-stacked walls demonstrate advanced stonework for a Sengoku-era mountain castle.' },
    ],
  },
  {
    id: 'hiketa',
    number: 153,
    regionId: 'shikoku',
    name: { ja: '引田城', zhTw: '引田城', en: 'Hiketa Castle' },
    city: { ja: '東かがわ市', zhTw: '東香川市', en: 'Higashi-Kagawa' },
    prefecture: { ja: '香川県', zhTw: '香川縣', en: 'Kagawa' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 50, y: 75 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#7A8A6A', roofColor: '#3A4A2A' },
    goshuin: { bg: '#f0f5e6', ink: '#3a4a2a', seal: '#a52a2a', crest: '#7A8A6A' },
    history: [
      { ja: '引田は阿波から讃岐への入口に位置し、古くから軍事的に重要な拠点であった。', zhTw: '引田位於從阿波進入讚岐的入口，自古便是軍事上重要的據點。', en: 'Hiketa sits at the gateway from Awa to Sanuki, a militarily important position since ancient times.' },
      { ja: '1583年、羽柴秀吉と長宗我部元親が引田で激突（引田の戦い）。秀吉方の仙石秀久が敗北。', zhTw: '1583年羽柴秀吉與長宗我部元親在引田激戰（引田之戰）。秀吉方的仙石秀久敗北。', en: 'In 1583, Hideyoshi and Chōsokabe clashed here (Battle of Hiketa); Hideyoshi\'s man Sengoku Hidehisa was defeated.' },
      { ja: '讃岐が生駒氏の領地となった後に近世城郭に改修されたが、一国一城令で廃城となった。', zhTw: '讚岐成為生駒氏領地後改建為近世城郭，但因一國一城令而廢城。', en: 'After Sanuki came under the Ikoma, it was modernized but abandoned under the one-castle edict.' },
    ],
    figures: [
      { ja: '仙石秀久 — 秀吉の四国攻め先鋒。引田の戦いで長宗我部軍に大敗した。', zhTw: '仙石秀久 — 秀吉四國攻略先鋒。引田之戰中慘敗於長宗我部軍。', en: 'Sengoku Hidehisa — Hideyoshi\'s Shikoku vanguard, badly defeated by the Chōsokabe at Hiketa.' },
    ],
    trivia: [
      { ja: '引田の町並みは醤油醸造で栄えた商家が残り、讃岐東部の風情ある港町。', zhTw: '引田的街道保留因醬油釀造而繁榮的商家，是讚岐東部風情十足的港町。', en: 'Hiketa\'s streets retain old soy-sauce breweries — an atmospheric port town in eastern Sanuki.' },
      { ja: '城跡からは播磨灘が一望でき、海上交通の要衝としての立地を実感できる。', zhTw: '從城跡可一覽播磨灘，可實感海上交通要衝的選址。', en: 'The ruins overlook the Harima Sea, vividly demonstrating the site\'s command of maritime routes.' },
    ],
    highlights: [
      { ja: '石垣群 — 近年の発掘で発見された近世的な石垣。讃岐の石垣技術を伝える。', zhTw: '石垣群 — 近年發掘發現的近世石垣。傳達讚岐的石垣技術。', en: 'Stone wall clusters — recently excavated early-modern walls showcasing Sanuki stonework.' },
      { ja: '播磨灘の眺望 — 城跡から瀬戸内海を見渡す絶景。', zhTw: '播磨灘眺望 — 從城跡遠眺瀨戶內海的絕景。', en: 'Harima Sea views — a spectacular panorama of the Inland Sea from the ruins.' },
    ],
    architecture: [
      { ja: '城山（標高82m）に築かれた海城型の山城。海と川を天然の堀として活用。', zhTw: '建於城山（標高82公尺）的海城型山城。以海與河為天然壕溝。', en: 'A sea-castle-type mountain castle on 82 m Shiroyama, using the sea and river as natural moats.' },
      { ja: '近年の発掘で総石垣の曲輪が確認され、生駒氏時代の近世的改修の実態が判明した。', zhTw: '近年發掘確認了全石垣的曲輪，揭示了生駒氏時代近世改建的實態。', en: 'Recent excavations confirmed fully stone-walled enclosures, revealing the extent of Ikoma-era modernization.' },
    ],
  },
  {
    id: 'noshima',
    number: 154,
    regionId: 'shikoku',
    name: { ja: '能島城', zhTw: '能島城', en: 'Noshima Castle' },
    city: { ja: '今治市', zhTw: '今治市', en: 'Imabari' },
    prefecture: { ja: '愛媛県', zhTw: '愛媛縣', en: 'Ehime' },
    type: 'castle-ruin',
    designation: '国指定史跡',
    position: { x: 46, y: 74 },
    illustration: { style: 'ruins', tiers: 1, color: '#7A8A7A', roofColor: '#4A5A4A' },
    goshuin: { bg: '#eef5ee', ink: '#2d4a2d', seal: '#c44', crest: '#7A8A7A' },
    history: [
      { ja: '瀬戸内海の能島に築かれた海城。村上海賊（村上水軍）の拠点として名高い。', zhTw: '建於瀨戶內海能島的海城。以村上海賊（村上水軍）的據點聞名。', en: 'A sea castle on Noshima Island in the Inland Sea, famed as a base of the Murakami pirates (Murakami navy).' },
      { ja: '村上氏は因島・来島・能島の三家に分かれ、瀬戸内海の海上覇権を握った。', zhTw: '村上氏分為因島、來島、能島三家，掌握瀨戶內海的海上霸權。', en: 'The Murakami split into three branches — Innoshima, Kurushima, Noshima — commanding Inland Sea maritime supremacy.' },
      { ja: '村上武吉は毛利氏と結び、織田信長の水軍に対抗。第一次木津川口の戦いで織田水軍を撃破した。', zhTw: '村上武吉與毛利氏聯合對抗織田信長水軍。第一次木津川口之戰擊敗織田水軍。', en: 'Murakami Takeyoshi allied with the Mōri and defeated Nobunaga\'s navy at the First Battle of Kizugawaguchi.' },
    ],
    figures: [
      { ja: '村上武吉 — 能島村上氏の当主。瀬戸内海最強の海賊大名として恐れられた。', zhTw: '村上武吉 — 能島村上氏當主。作為瀨戶內海最強海賊大名被恐懼。', en: 'Murakami Takeyoshi — head of the Noshima Murakami, feared as the mightiest pirate lord of the Inland Sea.' },
    ],
    trivia: [
      { ja: '2016年に「村上海賊」として日本遺産に認定。「海賊」という呼称が公式に使われている珍しい例。', zhTw: '2016年以「村上海賊」獲認定為日本遺產。「海賊」稱呼被正式使用的罕見例子。', en: 'Certified as a Japan Heritage site in 2016 under "Murakami Pirates" — a rare official use of the term "pirate."' },
      { ja: '能島周辺の潮流は最大10ノットにも達し、この急流が天然の防御となっていた。', zhTw: '能島周邊潮流最大達10節，此急流成為天然防禦。', en: 'Tidal currents around Noshima reach 10 knots — this rapid flow served as a natural defense.' },
    ],
    highlights: [
      { ja: '能島への船旅 — 急潮流を体験しながら島に渡る船旅自体が冒険。', zhTw: '前往能島的船旅 — 體驗急潮流同時渡島的船旅本身就是冒險。', en: 'Boat trip to Noshima — the voyage through rapid tidal currents is an adventure in itself.' },
      { ja: '島全体が城跡 — 小さな島全体に曲輪・岩礁ピット（船着場）が残る。', zhTw: '整座島就是城跡 — 小島全體殘存曲輪、岩礁坑（船著場）。', en: 'The entire island is a castle ruin — baileys and rock-cut boat docks survive across the small island.' },
      { ja: '村上海賊ミュージアム — 大島にある村上水軍の歴史を伝える博物館。', zhTw: '村上海賊博物館 — 位於大島的村上水軍歷史博物館。', en: 'Murakami Pirate Museum — on Ōshima Island, telling the history of the Murakami navy.' },
    ],
    architecture: [
      { ja: '周囲約850mの小島全体を城郭化した海城。急潮流が天然の堀となる。', zhTw: '將周圍約850公尺的小島整體城郭化的海城。急潮流成為天然壕溝。', en: 'The entire island (850 m circumference) was fortified as a sea castle, with rapid tides as natural moats.' },
      { ja: '岩礁に掘られた柱穴・船着場跡は海賊城ならではの遺構で、全国でも類例が少ない。', zhTw: '在岩礁上挖掘的柱穴、船著場跡是海賊城特有的遺構，全國也少有類例。', en: 'Post holes and docks carved into reef rock are features unique to a pirate castle — extremely rare nationally.' },
    ],
  },
  {
    id: 'kagomori',
    number: 155,
    regionId: 'shikoku',
    name: { ja: '河後森城', zhTw: '河後森城', en: 'Kagomori Castle' },
    city: { ja: '松野町', zhTw: '松野町', en: 'Matsuno' },
    prefecture: { ja: '愛媛県', zhTw: '愛媛縣', en: 'Ehime' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 44, y: 78 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#6B8B5B', roofColor: '#3B4B2B' },
    goshuin: { bg: '#eef5ee', ink: '#2d4a2d', seal: '#a52a2a', crest: '#6B8B5B' },
    history: [
      { ja: '築城時期は不明だが、南予地方の土豪・河原渕氏が築いたと伝わる。', zhTw: '築城時期不明，據傳為南予地方土豪河原渕氏所築。', en: 'Its founding is uncertain; traditionally attributed to the Kawarabuchi, local warriors of southern Iyo.' },
      { ja: '土佐（長宗我部氏）と伊予の勢力圏の境目に位置し、国境の城として機能した。', zhTw: '位於土佐（長宗我部氏）與伊予勢力圈的邊境，作為國境之城運作。', en: 'Situated on the border between Tosa (Chōsokabe) and Iyo, it functioned as a frontier castle.' },
      { ja: '戦国時代末期には西園寺氏の支配下に入り、最終的に藤堂高虎に攻められ落城した。', zhTw: '戰國時代末期歸入西園寺氏支配，最終被藤堂高虎攻陷。', en: 'In the late Sengoku, it came under the Saionji, and was finally taken by Tōdō Takatora.' },
    ],
    figures: [
      { ja: '河原渕氏 — 河後森城の築城者とされる南予の土豪。詳細は不明ながら城名に痕跡を残す。', zhTw: '河原渕氏 — 被認為是河後森城築城者的南予土豪。雖詳細不明但在城名留有痕跡。', en: 'The Kawarabuchi — reputed builders of Kagomori, southern Iyo warriors whose legacy survives in the castle\'s name.' },
    ],
    trivia: [
      { ja: '発掘調査で馬屋が発見された数少ない城跡で、復元された馬屋は全国的にも珍しい。', zhTw: '發掘調查中發現馬屋的少數城跡之一，復原的馬屋在全國也很罕見。', en: 'One of few castle sites where a stable was excavated — the reconstructed stable is nationally rare.' },
      { ja: '四万十川の支流・広見川に面し、のどかな南予の山間部にひっそりと佇む。', zhTw: '面向四萬十川支流廣見川，靜靜佇立於恬靜的南予山間部。', en: 'Facing the Hiromi River (a Shimanto tributary), it sits quietly in the peaceful mountains of southern Iyo.' },
    ],
    highlights: [
      { ja: '復元馬屋 — 発掘成果に基づき復元された全国でも珍しい中世の馬屋。', zhTw: '復原馬屋 — 根據發掘成果復原的全國罕見中世馬屋。', en: 'Reconstructed stable — a nationally rare medieval stable rebuilt based on excavation findings.' },
      { ja: '本郭からの眺望 — 広見川流域と四国山地を見渡す穏やかな山城の風景。', zhTw: '從本郭眺望 — 俯瞰廣見川流域與四國山地的穩和山城風景。', en: 'Views from the main enclosure — peaceful mountain-castle scenery overlooking the Hiromi River and Shikoku mountains.' },
    ],
    architecture: [
      { ja: '広見川に突き出た尾根に本郭・古城・新城を配した連郭式山城。', zhTw: '在突入廣見川的山脊上配置本郭、古城、新城的連郭式山城。', en: 'A linked-enclosure mountain castle with main, old, and new enclosures along a ridge jutting into the Hiromi River.' },
      { ja: '10以上の曲輪と堀切を持つ大規模な縄張りで、南予を代表する中世山城。', zhTw: '擁有10座以上曲輪和堀切的大規模繩張，是代表南予的中世山城。', en: 'Over 10 enclosures and ridge-cuts make this a major medieval mountain castle, representative of southern Iyo.' },
    ],
  },
  {
    id: 'oko',
    number: 156,
    regionId: 'shikoku',
    name: { ja: '岡豊城', zhTw: '岡豐城', en: 'Okō Castle' },
    city: { ja: '南国市', zhTw: '南國市', en: 'Nankoku' },
    prefecture: { ja: '高知県', zhTw: '高知縣', en: 'Kochi' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 46, y: 80 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#5A7A4A', roofColor: '#2A4A2A' },
    goshuin: { bg: '#eef5ee', ink: '#2a4a2a', seal: '#8b0000', crest: '#5A7A4A' },
    history: [
      { ja: '長宗我部氏の本城として約200年間使用された土佐の名城。', zhTw: '作為長宗我部氏本城約200年間使用的土佐名城。', en: 'The Chōsokabe clan\'s main castle for about 200 years — a celebrated fortress of Tosa.' },
      { ja: '長宗我部国親が岡豊城を拠点に土佐統一を開始し、元親の代で四国統一を目前とした。', zhTw: '長宗我部國親以岡豐城為據點開始土佐統一，元親時代四國統一在即。', en: 'Chōsokabe Kunichika launched the unification of Tosa from here; his son Motochika nearly unified all Shikoku.' },
      { ja: '元親が大高坂城（後の高知城）に移った後に廃城となった。', zhTw: '元親遷至大高坂城（後來的高知城）後廢城。', en: 'Abandoned after Motochika moved to Ōtakasakayama Castle (later Kōchi Castle).' },
    ],
    figures: [
      { ja: '長宗我部元親 — 「姫若子」と呼ばれた少年時代から一転、四国統一を目指した土佐の英雄。', zhTw: '長宗我部元親 — 從被稱為「姬若子」的少年時代一轉，目標四國統一的土佐英雄。', en: 'Chōsokabe Motochika — mocked as "the princess boy" in youth, he became Tosa\'s hero who nearly conquered all Shikoku.' },
      { ja: '長宗我部国親 — 元親の父。衰退した長宗我部氏を再興し、土佐統一の基盤を築いた。', zhTw: '長宗我部國親 — 元親之父。復興衰退的長宗我部氏，奠定土佐統一的基盤。', en: 'Chōsokabe Kunichika — Motochika\'s father who revived the declining clan and laid the groundwork for Tosa\'s unification.' },
    ],
    trivia: [
      { ja: '城跡に隣接する高知県立歴史民俗資料館に長宗我部氏の貴重な資料が展示されている。', zhTw: '城跡鄰接的高知縣立歷史民俗資料館展示長宗我部氏的珍貴資料。', en: 'The Kōchi Prefectural Museum of History adjacent to the ruins exhibits precious Chōsokabe artifacts.' },
      { ja: '元親が初陣で見せた武勇により「鬼若子」と呼ばれるようになった逸話は有名。', zhTw: '元親初陣展現的武勇使他被改稱為「鬼若子」的軼事很有名。', en: 'Motochika\'s valor in his first battle earned him the new nickname "Demon Boy" — a famous anecdote.' },
    ],
    highlights: [
      { ja: '詰の段（本丸） — 城の最高所。土佐平野を一望する眺望は元親が見た景色。', zhTw: '詰之段（本丸） — 城的最高處。一覽土佐平野的眺望是元親所見的景色。', en: 'Tsume-no-dan (honmaru) — the castle\'s highest point, with the same Tosa-plain view Motochika once saw.' },
      { ja: '高知県立歴史民俗資料館 — 長宗我部氏と土佐の歴史を深く学べる博物館。', zhTw: '高知縣立歷史民俗資料館 — 可深入了解長宗我部氏與土佐歷史的博物館。', en: 'Kōchi Prefectural Museum of History — a museum for deep study of the Chōsokabe and Tosa.' },
      { ja: '長宗我部元親像 — 城跡近くに建つ元親の銅像。初陣の姿を再現。', zhTw: '長宗我部元親像 — 建於城跡附近的元親銅像。再現初陣的姿態。', en: 'Motochika statue — a bronze figure near the ruins, depicting his legendary first battle.' },
    ],
    architecture: [
      { ja: '標高97mの丘陵に詰の段・二の段・三の段を階段状に配した土佐を代表する中世山城。', zhTw: '在標高97公尺丘陵上階梯狀配置詰之段、二之段、三之段的代表土佐的中世山城。', en: 'A classic Tosa medieval mountain castle on a 97 m hill, with main, second, and third enclosures in tiers.' },
      { ja: '土塁と堀切を主体とした防御設計で、石垣はほとんど使用されていない土の城。', zhTw: '以土壘和堀切為主體的防禦設計，幾乎不使用石垣的土城。', en: 'Defense relies on earthworks and ridge-cuts — an earthen castle with almost no stone walls.' },
    ],
  },

  // ── 続100名城 #157-164 九州 ──
  {
    id: 'kokura',
    number: 157,
    regionId: 'kyushu',
    name: { ja: '小倉城', zhTw: '小倉城', en: 'Kokura Castle' },
    city: { ja: '北九州市', zhTw: '北九州市', en: 'Kitakyūshū' },
    prefecture: { ja: '福岡県', zhTw: '福岡縣', en: 'Fukuoka' },
    type: 'hirajiro',
    designation: '市指定史跡',
    position: { x: 28, y: 74 },
    illustration: { style: 'classic', tiers: 4, color: '#F5F5F5', roofColor: '#2C3E50' },
    goshuin: { bg: '#f5f5f5', ink: '#2c3e50', seal: '#c0392b', crest: '#2C3E50' },
    history: [
      { ja: '1602年、細川忠興が関ヶ原の功績で入封し、本格的な近世城郭として築城。', zhTw: '1602年細川忠興因關原功績入封，築建正式的近世城郭。', en: 'In 1602, Hosokawa Tadaoki, rewarded for Sekigahara, built Kokura as a full-scale early-modern castle.' },
      { ja: '細川氏の後は小笠原氏が入封し、小笠原氏が幕末まで15万石の城主を務めた。', zhTw: '細川氏之後小笠原氏入封，小笠原氏作為15萬石城主至幕末。', en: 'After the Hosokawa, the Ogasawara took over, governing 150,000 koku until the Bakumatsu.' },
      { ja: '1866年、長州征伐（第二次）で長州藩に攻められ、小倉藩は自ら城を焼いて退却した。', zhTw: '1866年第二次長州征伐中被長州藩進攻，小倉藩自行燒城退卻。', en: 'In 1866, during the Second Chōshū Expedition, Kokura domain burned the castle and retreated.' },
      { ja: '宮本武蔵が細川忠興に招かれ小倉で過ごした時期があり、巌流島の決闘はこの地から出発した。', zhTw: '宮本武藏受細川忠興之邀在小倉度過一段時期，嚴流島決鬥從此地出發。', en: 'Miyamoto Musashi was hosted by Tadaoki in Kokura; he departed from here for the legendary duel at Ganryū-jima.' },
    ],
    figures: [
      { ja: '細川忠興 — 文武両道の名将。茶道にも通じ、妻・ガラシャとの悲劇的な物語でも知られる。', zhTw: '細川忠興 — 文武雙全的名將。精通茶道，也以妻子加拉莎的悲劇故事聞名。', en: 'Hosokawa Tadaoki — a lord of culture and war, famed in tea ceremony and for his tragic story with wife Gracia.' },
      { ja: '宮本武蔵 — 小倉滞在中に佐々木小次郎との巌流島の決闘に臨んだ剣聖。', zhTw: '宮本武藏 — 在小倉逗留期間前往嚴流島與佐佐木小次郎決鬥的劍聖。', en: 'Miyamoto Musashi — the legendary swordsman who fought Sasaki Kojirō at Ganryū-jima while based in Kokura.' },
    ],
    trivia: [
      { ja: '天守は「唐造り」と呼ばれる最上階が下の階より大きい珍しい構造だった。', zhTw: '天守採「唐造」，最上層比下層大的罕見構造。', en: 'The keep had "kara-zukuri" (Chinese-style) construction — the top floor was larger than the one below, a rare design.' },
      { ja: '松本清張記念館が城跡に隣接し、小倉は推理小説の聖地としても知られる。', zhTw: '松本清張紀念館鄰接城跡，小倉也以推理小說聖地聞名。', en: 'The Matsumoto Seichō Memorial Museum sits next to the ruins — Kokura is also a mystery-fiction pilgrimage site.' },
    ],
    highlights: [
      { ja: '復興天守 — 1959年に復興された唐造り風の天守。内部は歴史展示施設。', zhTw: '復興天守 — 1959年復興的唐造風天守。內部為歷史展示設施。', en: 'Reconstructed keep — a 1959 rebuild in kara-zukuri style, now housing historical exhibits.' },
      { ja: '小倉城庭園 — 城に隣接する大名屋敷の庭園を再現した日本庭園。', zhTw: '小倉城庭園 — 鄰接城再現大名宅邸庭園的日本庭園。', en: 'Kokura Castle Garden — a Japanese garden recreating the daimyō residence gardens beside the castle.' },
    ],
    architecture: [
      { ja: '紫川を外堀とする平城。天守は四層五階の唐造りで、最上階が張り出す独特の構造だった。', zhTw: '以紫川為外壕的平城。天守為四層五階的唐造，最上層突出的獨特構造。', en: 'A flatland castle using the Murasaki River as outer moat; the four-layer, five-story keep featured the unique kara-zukuri overhang.' },
    ],
  },
  {
    id: 'mizuki',
    number: 158,
    regionId: 'kyushu',
    name: { ja: '水城', zhTw: '水城', en: 'Mizuki' },
    city: { ja: '太宰府市', zhTw: '太宰府市', en: 'Dazaifu' },
    prefecture: { ja: '福岡県', zhTw: '福岡縣', en: 'Fukuoka' },
    type: 'ancient-fortress',
    designation: '特別史跡',
    position: { x: 26, y: 76 },
    illustration: { style: 'ancient', tiers: 1, color: '#8B7B5B', roofColor: '#5B4B3B' },
    goshuin: { bg: '#f5efe5', ink: '#4a3b2b', seal: '#c44', crest: '#8B7B5B' },
    history: [
      { ja: '664年、白村江の戦いで唐・新羅連合軍に敗れた大和朝廷が、大宰府防衛のために築いた大土塁。', zhTw: '664年白村江之戰敗給唐、新羅聯軍的大和朝廷，為防衛大宰府而築建的大土壘。', en: 'In 664, after defeat at the Battle of Baekgang, the Yamato court built this massive earthwork to defend Dazaifu.' },
      { ja: '全長約1.2km、高さ約14m、基底部幅約80mという古代日本最大級の防衛施設。', zhTw: '全長約1.2公里、高約14公尺、基底部寬約80公尺的古代日本最大級防禦設施。', en: 'About 1.2 km long, 14 m high, and 80 m wide at the base — one of ancient Japan\'s largest defense works.' },
      { ja: '唐・新羅の日本本土侵攻に備えた国家的防衛事業の一環として、大野城・基肄城と連携した。', zhTw: '作為防備唐、新羅入侵日本本土的國家防衛事業一環，與大野城、基肄城聯動。', en: 'Part of a national defense project against possible Tang-Silla invasion, coordinating with Ōno and Kii castles.' },
    ],
    figures: [
      { ja: '天智天皇 — 白村江の敗戦後、国防強化を推し進め水城の築造を命じた。', zhTw: '天智天皇 — 白村江敗戰後推進國防強化，命令築造水城。', en: 'Emperor Tenji — after the Baekgang defeat, he drove national defense strengthening and ordered Mizuki\'s construction.' },
    ],
    trivia: [
      { ja: '土塁の前面（博多側）には堀として幅60mの濠が設けられ、水をたたえていた。', zhTw: '土壘前面（博多側）設有寬60公尺的壕溝，蓄滿水。', en: 'A 60 m-wide water-filled moat stretched before the earthwork on the Hakata side.' },
      { ja: '現在もJR水城駅付近で土塁の断面を観察でき、古代の土木技術に驚かされる。', zhTw: '至今在JR水城站附近可觀察土壘斷面，對古代土木技術感到驚嘆。', en: 'Cross-sections of the earthwork are still visible near JR Mizuki Station, revealing astonishing ancient engineering.' },
    ],
    highlights: [
      { ja: '土塁断面広場 — 土塁の断面が露出展示され、内部構造を観察できる。', zhTw: '土壘斷面廣場 — 土壘斷面露出展示，可觀察內部構造。', en: 'Earthwork Cross-Section Plaza — an exposed cross-section revealing the internal structure.' },
      { ja: '水城跡の遊歩道 — 全長1.2kmの土塁に沿った散策路。', zhTw: '水城跡步道 — 沿全長1.2公里土壘的散步路。', en: 'Mizuki ruins walking path — a trail along the full 1.2 km earthwork.' },
    ],
    architecture: [
      { ja: '博多湾から大宰府への通路を完全に遮断する東西1.2kmの巨大な土塁と水堀。', zhTw: '完全遮斷從博多灣到大宰府通路的東西1.2公里巨大土壘與水壕。', en: 'A colossal 1.2 km east-west earthwork and moat completely blocking the road from Hakata Bay to Dazaifu.' },
      { ja: '版築工法で築かれた土塁は1,350年以上経った現在も高さ数mが残り、古代技術の粋を示す。', zhTw: '以版築工法築建的土壘歷經1350年以上至今仍殘存數公尺高，展示古代技術的精華。', en: 'Built with rammed-earth technique, the earthwork still stands several meters high after 1,350+ years — a testament to ancient skill.' },
    ],
  },
  {
    id: 'kurume',
    number: 159,
    regionId: 'kyushu',
    name: { ja: '久留米城', zhTw: '久留米城', en: 'Kurume Castle' },
    city: { ja: '久留米市', zhTw: '久留米市', en: 'Kurume' },
    prefecture: { ja: '福岡県', zhTw: '福岡縣', en: 'Fukuoka' },
    type: 'hirayama',
    designation: '県指定史跡',
    position: { x: 24, y: 78 },
    illustration: { style: 'ruins', tiers: 1, color: '#8A8A78', roofColor: '#5A5A48' },
    goshuin: { bg: '#f5f5e8', ink: '#3d3d28', seal: '#c0392b', crest: '#8A8A78' },
    history: [
      { ja: '1621年、有馬豊氏が筑後に入封し、篠山城を大改修して久留米城とした。', zhTw: '1621年有馬豐氏入封筑後，大幅改建篠山城為久留米城。', en: 'In 1621, Arima Toyouji entered Chikugo and extensively rebuilt Sasayama Castle as Kurume Castle.' },
      { ja: '有馬氏は21万石の大名として11代にわたり幕末まで久留米藩を治めた。', zhTw: '有馬氏作為21萬石大名歷經11代治理久留米藩至幕末。', en: 'The Arima governed Kurume domain — 210,000 koku — for 11 generations until the Bakumatsu.' },
      { ja: '幕末には久留米藩から真木和泉をはじめとする尊王攘夷の志士が輩出した。', zhTw: '幕末久留米藩輩出以真木和泉為首的尊王攘夷志士。', en: 'In the Bakumatsu, Kurume produced sonnō-jōi activists including the notable Maki Izumi.' },
    ],
    figures: [
      { ja: '有馬豊氏 — 久留米藩初代藩主。筑後の基盤を固め、城と城下町を整備した。', zhTw: '有馬豐氏 — 久留米藩初代藩主。鞏固筑後基盤，整備城與城下町。', en: 'Arima Toyouji — first lord of Kurume, who secured Chikugo and developed the castle and town.' },
    ],
    trivia: [
      { ja: '城跡には篠山神社（有馬氏を祀る）があり、境内から筑後川を見下ろせる。', zhTw: '城跡有篠山神社（祭祀有馬氏），從境內可俯瞰筑後川。', en: 'Sasayama Shrine (dedicated to the Arima) sits on the ruins, with views of the Chikugo River from its grounds.' },
      { ja: '久留米はブリヂストン（石橋正二郎）発祥の地で、城下町の商業伝統が近代産業につながった。', zhTw: '久留米是普利司通（石橋正二郎）的發祥地，城下町的商業傳統連接到近代產業。', en: 'Kurume is the birthplace of Bridgestone (Ishibashi Shōjirō) — the castle town\'s commercial tradition fed modern industry.' },
    ],
    highlights: [
      { ja: '高石垣 — 筑後川に面した本丸の高石垣は高さ約15mで九州屈指の規模。', zhTw: '高石垣 — 面向筑後川的本丸高石垣約15公尺高，為九州頂級規模。', en: 'Tall stone walls — the honmaru walls facing the Chikugo River rise about 15 m, among Kyūshū\'s tallest.' },
      { ja: '筑後川の眺望 — 本丸から筑後川と筑紫平野を一望する雄大な景色。', zhTw: '筑後川眺望 — 從本丸一覽筑後川與筑紫平野的壯大景色。', en: 'Chikugo River views — magnificent panorama of the river and Tsukushi Plain from the honmaru.' },
    ],
    architecture: [
      { ja: '筑後川に面した丘陵に築かれた平山城。本丸の高石垣は「扇の勾配」と呼ばれる美しい反りを持つ。', zhTw: '建於面向筑後川丘陵的平山城。本丸高石垣具有被稱為「扇之坡度」的優美弧度。', en: 'A hilltop castle on a bluff above the Chikugo River; the honmaru walls have the graceful "fan curve" batter.' },
    ],
  },
  {
    id: 'kii',
    number: 160,
    regionId: 'kyushu',
    name: { ja: '基肄城', zhTw: '基肄城', en: 'Kii Castle' },
    city: { ja: '基山町', zhTw: '基山町', en: 'Kiyama' },
    prefecture: { ja: '佐賀県', zhTw: '佐賀縣', en: 'Saga' },
    type: 'ancient-fortress',
    designation: '特別史跡',
    position: { x: 24, y: 76 },
    illustration: { style: 'ancient', tiers: 1, color: '#7B6B4B', roofColor: '#4B3B2B' },
    goshuin: { bg: '#f5efe5', ink: '#4b3b2b', seal: '#8b0000', crest: '#7B6B4B' },
    history: [
      { ja: '665年、白村江の敗戦後に大宰府防衛の一環として築かれた古代山城。水城・大野城と連携。', zhTw: '665年白村江敗戰後作為大宰府防衛一環築建的古代山城。與水城、大野城聯動。', en: 'Built in 665 as part of the post-Baekgang Dazaifu defense, coordinating with Mizuki and Ōno Castle.' },
      { ja: '朝鮮半島の築城技術（朝鮮式山城）を取り入れた国防施設で、日本書紀にも記録がある。', zhTw: '引入朝鮮半島築城技術（朝鮮式山城）的國防設施，在日本書紀中也有記錄。', en: 'A national defense facility using Korean fortification techniques, recorded in the Nihon Shoki.' },
    ],
    figures: [
      { ja: '天智天皇 — 白村江の敗戦後、基肄城を含む西日本の防衛体制を構築した。', zhTw: '天智天皇 — 白村江敗戰後建構包含基肄城的西日本防衛體制。', en: 'Emperor Tenji — constructed western Japan\'s defense system including Kii Castle after the Baekgang defeat.' },
    ],
    trivia: [
      { ja: '山頂からは水城と大野城を同時に見渡せ、古代防衛ラインの全体像を実感できる。', zhTw: '從山頂可同時眺望水城和大野城，實感古代防衛線的全貌。', en: 'From the summit you can see both Mizuki and Ōno Castle, grasping the full ancient defense line.' },
      { ja: '基山の草スキー場は基肄城の土塁跡を利用しており、遺跡の上で遊ぶ珍しい体験ができる。', zhTw: '基山的草滑雪場利用基肄城的土壘跡，可在遺跡上遊玩的罕見體驗。', en: 'Kiyama\'s grass-skiing slope uses the earthwork ruins — a rare experience of playing atop an ancient monument.' },
    ],
    highlights: [
      { ja: '南水門跡 — 谷筋に築かれた石造水門は古代土木技術の傑作。', zhTw: '南水門跡 — 築建於谷筋的石造水門是古代土木技術的傑作。', en: 'South Water Gate ruins — a stone sluice gate built in a valley, a masterpiece of ancient engineering.' },
      { ja: '山頂からの展望 — 筑紫平野と大宰府方面を一望。古代の防衛視界を体験。', zhTw: '從山頂展望 — 一覽筑紫平野與大宰府方面。體驗古代防衛視野。', en: 'Summit panorama — views of the Tsukushi Plain and Dazaifu area; experience the ancient defense perspective.' },
    ],
    architecture: [
      { ja: '基山（標高405m）を中心に全周約3.5kmの土塁・石塁で山を囲む朝鮮式古代山城。', zhTw: '以基山（標高405公尺）為中心全周約3.5公里的土壘、石壘環山的朝鮮式古代山城。', en: 'A Korean-style ancient mountain castle encircling 405 m Kiyama with 3.5 km of earthen and stone ramparts.' },
      { ja: '南北に水門を設け、谷間の水を制御した高度な治水技術が用いられている。', zhTw: '南北設置水門，運用了控制谷間水流的高度治水技術。', en: 'Water gates on the north and south employ sophisticated hydraulic engineering to control valley streams.' },
    ],
  },
  {
    id: 'karatsu',
    number: 161,
    regionId: 'kyushu',
    name: { ja: '唐津城', zhTw: '唐津城', en: 'Karatsu Castle' },
    city: { ja: '唐津市', zhTw: '唐津市', en: 'Karatsu' },
    prefecture: { ja: '佐賀県', zhTw: '佐賀縣', en: 'Saga' },
    type: 'hirayama',
    designation: '県指定史跡',
    position: { x: 22, y: 76 },
    illustration: { style: 'classic', tiers: 3, color: '#F5F5F5', roofColor: '#2C3E50' },
    goshuin: { bg: '#f5f5f5', ink: '#2c3e50', seal: '#c0392b', crest: '#2C3E50' },
    history: [
      { ja: '1608年、寺沢広高が満島山に築城。名護屋城の解体資材を転用したとされる。', zhTw: '1608年寺澤廣高在滿島山築城。據說轉用了名護屋城的拆解建材。', en: 'Built in 1608 by Terazawa Hirotaka on Manjima-yama, reportedly reusing materials from Nagoya Castle.' },
      { ja: '寺沢氏断絶後は大久保・松平・土井・水野・小笠原と藩主が頻繁に替わった。', zhTw: '寺澤氏斷絕後大久保、松平、土井、水野、小笠原等藩主頻繁更替。', en: 'After the Terazawa died out, lords changed frequently: Ōkubo, Matsudaira, Doi, Mizuno, Ogasawara.' },
    ],
    figures: [
      { ja: '寺沢広高 — 秀吉の朝鮮出兵で名護屋城の普請奉行を務め、唐津の地に精通していた。', zhTw: '寺澤廣高 — 秀吉朝鮮出兵中擔任名護屋城普請奉行，精通唐津之地。', en: 'Terazawa Hirotaka — served as construction magistrate for Nagoya Castle during Hideyoshi\'s Korean campaigns, knowing Karatsu well.' },
    ],
    trivia: [
      { ja: '天守台から見る虹の松原（特別名勝）は絶景で、城と松原の組み合わせは唐津の象徴。', zhTw: '從天守台看虹之松原（特別名勝）是絕景，城與松原的組合是唐津的象徵。', en: 'The view of Niji-no-Matsubara (Special Scenic Site) from the keep is spectacular — castle and pine grove together symbolize Karatsu.' },
      { ja: '唐津くんちは佐賀を代表する秋祭りで、華やかな曳山が城下を巡る。', zhTw: '唐津供日是代表佐賀的秋祭，華麗的曳山在城下巡遊。', en: 'Karatsu Kunchi is Saga\'s premier autumn festival, with splendid floats parading through the castle town.' },
    ],
    highlights: [
      { ja: '模擬天守と虹の松原の眺望 — 天守台から虹の松原と玄界灘を一望する絶景。', zhTw: '模擬天守與虹之松原眺望 — 從天守台一覽虹之松原與玄界灘的絕景。', en: 'Mock keep and Niji-no-Matsubara — a breathtaking view of the pine grove and Genkai Sea from the tower.' },
      { ja: '唐津くんち — 毎年11月、14台の漆塗り曳山が城下町を練り歩く壮大な祭り。', zhTw: '唐津供日 — 每年11月14台漆塗曳山在城下町遊行的壯大祭典。', en: 'Karatsu Kunchi — 14 lacquered floats parade through the castle town each November in a grand festival.' },
    ],
    architecture: [
      { ja: '唐津湾に突き出た満島山に築かれ、左右に延びる砂浜が鶴の翼に見えることから「舞鶴城」の別名を持つ。', zhTw: '建於突入唐津灣的滿島山，左右延伸的沙灘像鶴翼般因此有「舞鶴城」別名。', en: 'Built on Manjima-yama jutting into Karatsu Bay; the beaches extending left and right resemble crane wings, hence "Maizuru Castle."' },
    ],
  },
  {
    id: 'kaneda',
    number: 162,
    regionId: 'kyushu',
    name: { ja: '金田城', zhTw: '金田城', en: 'Kaneda Castle' },
    city: { ja: '対馬市', zhTw: '對馬市', en: 'Tsushima' },
    prefecture: { ja: '長崎県', zhTw: '長崎縣', en: 'Nagasaki' },
    type: 'ancient-fortress',
    designation: '国指定特別史跡',
    position: { x: 18, y: 70 },
    illustration: { style: 'ancient', tiers: 1, color: '#7A7A5A', roofColor: '#4A4A3A' },
    goshuin: { bg: '#f5f5e8', ink: '#3a3a2a', seal: '#8b0000', crest: '#7A7A5A' },
    history: [
      { ja: '667年、白村江の敗戦後に対馬の防衛拠点として築かれた古代山城。国防の最前線。', zhTw: '667年白村江敗戰後作為對馬防衛據點築建的古代山城。國防最前線。', en: 'Built in 667 as a Tsushima defense post after the Baekgang defeat — Japan\'s very front line of national defense.' },
      { ja: '朝鮮半島に最も近い日本の城として、大陸からの侵攻に備えた国家的防衛施設。', zhTw: '作為最接近朝鮮半島的日本城，防備大陸侵攻的國家防衛設施。', en: 'Japan\'s closest castle to the Korean peninsula, a national defense facility against continental invasion.' },
      { ja: '1274年の元寇（文永の役）では対馬が最初に攻撃を受け、金田城周辺も戦場となった。', zhTw: '1274年元寇（文永之役）中對馬最先受到攻擊，金田城周邊也成為戰場。', en: 'During the 1274 Mongol invasion, Tsushima was attacked first, and the area around Kaneda became a battlefield.' },
    ],
    figures: [
      { ja: '天智天皇 — 国防体制の一環として対馬に金田城の築造を命じた。', zhTw: '天智天皇 — 作為國防體制一環命令在對馬築造金田城。', en: 'Emperor Tenji — ordered Kaneda\'s construction on Tsushima as part of the national defense system.' },
    ],
    trivia: [
      { ja: '城域は対馬の城山（標高276m）全体に及び、全長約2.8kmの石塁が山を囲む。', zhTw: '城域涵蓋對馬城山（標高276公尺）全體，全長約2.8公里石壘環山。', en: 'The castle covers the entire 276 m Jōyama, with 2.8 km of stone ramparts encircling the mountain.' },
      { ja: '対馬海峡を挟んで韓国が見える日もあり、古代の「国境の城」の意味を実感できる。', zhTw: '隔對馬海峽有時可見韓國，可實感古代「國境之城」的意義。', en: 'On clear days Korea is visible across the strait, vividly conveying the meaning of this ancient "border castle."' },
    ],
    highlights: [
      { ja: '石塁群 — 1,350年以上前の石垣が驚くほど良好に残り、古代技術に圧倒される。', zhTw: '石壘群 — 1350年以上前的石垣保存驚人地好，令人對古代技術折服。', en: 'Stone ramparts — walls over 1,350 years old in astonishingly good condition, overwhelming in their ancient craftsmanship.' },
      { ja: '城山山頂からの展望 — 対馬海峡と浅茅湾を一望する国防最前線の絶景。', zhTw: '從城山山頂展望 — 一覽對馬海峽與淺茅灣的國防最前線絕景。', en: 'Summit panorama — views of the Tsushima Strait and Asō Bay from the very front line of national defense.' },
    ],
    architecture: [
      { ja: '城山全体を石塁と土塁で囲む古代朝鮮式山城。複数の水門と城門を備える。', zhTw: '以石壘和土壘環繞城山全體的古代朝鮮式山城。配備多座水門和城門。', en: 'A Korean-style ancient mountain castle encircling the entire mountain with stone and earthen ramparts, multiple gates and sluices.' },
      { ja: '一ノ城戸・二ノ城戸・三ノ城戸と呼ばれる城門跡が残り、古代城門の構造を伝える。', zhTw: '殘存被稱為一之城戶、二之城戶、三之城戶的城門跡，傳達古代城門構造。', en: 'Ruins of gates called First, Second, and Third Castle Gates survive, conveying ancient gate architecture.' },
    ],
  },
  {
    id: 'fukue',
    number: 163,
    regionId: 'kyushu',
    name: { ja: '福江城', zhTw: '福江城', en: 'Fukue Castle' },
    city: { ja: '五島市', zhTw: '五島市', en: 'Gotō' },
    prefecture: { ja: '長崎県', zhTw: '長崎縣', en: 'Nagasaki' },
    type: 'hirajiro',
    designation: '県指定史跡',
    position: { x: 16, y: 78 },
    illustration: { style: 'ruins', tiers: 1, color: '#8A8878', roofColor: '#5A5848' },
    goshuin: { bg: '#f5f0e8', ink: '#3d3828', seal: '#c44', crest: '#8A8878' },
    history: [
      { ja: '1863年、五島藩最後の藩主・五島盛徳が異国船防衛のために築城。日本最後の城。', zhTw: '1863年五島藩最後的藩主五島盛德為防禦異國船而築城。日本最後的城。', en: 'Built in 1863 by Gotō Moritoku, the last lord of Gotō domain, for coastal defense — Japan\'s last castle ever built.' },
      { ja: '黒船来航に伴う海防強化の一環で、幕府の許可を得て築城された。', zhTw: '作為黑船來航伴隨的海防強化一環，獲幕府許可後築城。', en: 'Built as part of coastal defense strengthening after the arrival of Black Ships, with Shōgunate permission.' },
      { ja: '完成からわずか9年後の1872年に廃城となった短命の城。', zhTw: '完成後僅9年的1872年就廢城的短命之城。', en: 'Abandoned in 1872, just nine years after completion — an extremely short-lived castle.' },
    ],
    figures: [
      { ja: '五島盛徳 — 五島藩最後の藩主。海防のため幕末に新城を築いた先見の明を持つ藩主。', zhTw: '五島盛德 — 五島藩最後的藩主。為海防於幕末築新城的有先見之明的藩主。', en: 'Gotō Moritoku — last Gotō lord, a forward-thinking daimyō who built a new castle for coastal defense.' },
    ],
    trivia: [
      { ja: '「日本最後に築かれた城」として城郭ファンに特別な存在。', zhTw: '作為「日本最後築建的城」在城郭愛好者中具特殊地位。', en: 'As "Japan\'s last castle ever built," it holds a special place among castle enthusiasts.' },
      { ja: '五島列島は隠れキリシタンの島々として世界遺産に登録され、城下にも教会が点在する。', zhTw: '五島列島作為隱匿基督徒的島嶼登錄世界遺產，城下也散布教堂。', en: 'The Gotō Islands are a World Heritage Site for Hidden Christians, with churches dotting the castle town.' },
    ],
    highlights: [
      { ja: '石垣と庭園 — 本丸跡は五島高校の敷地だが、石垣と五島氏庭園（国名勝）が見学可能。', zhTw: '石垣與庭園 — 本丸跡為五島高中校地，但石垣與五島氏庭園（國家名勝）可參觀。', en: 'Stone walls and garden — the honmaru is now a high school, but walls and the Gotō Garden (National Scenic Site) are open.' },
      { ja: '五島氏庭園 — 築城時に造られた大名庭園。国の名勝に指定。', zhTw: '五島氏庭園 — 築城時建造的大名庭園。指定為國家名勝。', en: 'Gotō Garden — a daimyō garden created during construction, a designated National Place of Scenic Beauty.' },
    ],
    architecture: [
      { ja: '海に面した平城で、三方を海に囲まれた海城としての性格を持つ。', zhTw: '面向海的平城，具有三面被海環繞的海城性質。', en: 'A flatland castle facing the sea, with a sea-castle character — surrounded by ocean on three sides.' },
      { ja: '幕末の築城ながら伝統的な石垣と堀を備え、和洋折衷の設計思想が見られる。', zhTw: '雖是幕末築城但配備傳統石垣和壕溝，可見和洋折衷的設計思想。', en: 'Despite its Bakumatsu date, it has traditional walls and moats, showing a blend of Japanese and Western design thinking.' },
    ],
  },
  {
    id: 'hara',
    number: 164,
    regionId: 'kyushu',
    name: { ja: '原城', zhTw: '原城', en: 'Hara Castle' },
    city: { ja: '南島原市', zhTw: '南島原市', en: 'Minami-Shimabara' },
    prefecture: { ja: '長崎県', zhTw: '長崎縣', en: 'Nagasaki' },
    type: 'castle-ruin',
    designation: '国指定史跡',
    position: { x: 20, y: 80 },
    illustration: { style: 'ruins', tiers: 1, color: '#8A8A78', roofColor: '#5A5A48' },
    goshuin: { bg: '#f5f5e8', ink: '#3d3d28', seal: '#8b0000', crest: '#8A8A78' },
    history: [
      { ja: '1496年、有馬貴純が築城。有馬氏の居城として島原半島を支配した。', zhTw: '1496年有馬貴純築城。作為有馬氏居城支配島原半島。', en: 'Built in 1496 by Arima Takasumi; the Arima governed the Shimabara Peninsula from here.' },
      { ja: '一国一城令により1616年に廃城となったが、1637年の島原の乱で一揆軍の最後の砦となった。', zhTw: '因一國一城令1616年廢城，但1637年島原之亂中成為一揆軍最後的堡壘。', en: 'Abandoned under the 1616 one-castle edict, but in 1637 it became the rebels\' last stronghold in the Shimabara Rebellion.' },
      { ja: '天草四郎を大将とする約3万7千人のキリシタン・農民が籠城し、幕府軍12万と対峙した。', zhTw: '以天草四郎為大將的約3萬7千名基督徒、農民籠城，與幕府軍12萬對峙。', en: 'About 37,000 Christians and peasants under Amakusa Shirō besieged here, facing 120,000 Shōgunate troops.' },
      { ja: '約3ヶ月の籠城の末、幕府軍の総攻撃で全滅。日本のキリシタン史最大の悲劇となった。', zhTw: '約3個月籠城後幕府軍總攻擊全滅。成為日本基督徒史上最大的悲劇。', en: 'After three months, the Shōgunate\'s final assault annihilated all — the greatest tragedy in Japan\'s Christian history.' },
    ],
    figures: [
      { ja: '天草四郎（益田時貞） — 島原の乱の象徴的指導者。わずか16歳でカリスマ的存在となった少年。', zhTw: '天草四郎（益田時貞） — 島原之亂的象徵性領導者。年僅16歲就成為有魅力的存在的少年。', en: 'Amakusa Shirō (Masuda Tokisada) — iconic leader of the rebellion, a charismatic boy of only 16.' },
    ],
    trivia: [
      { ja: '2018年に「長崎と天草地方の潜伏キリシタン関連遺産」として世界遺産に登録された。', zhTw: '2018年以「長崎與天草地方潛伏基督徒相關遺產」登錄為世界遺產。', en: 'Listed as a World Heritage Site in 2018 as part of "Hidden Christian Sites in the Nagasaki Region."' },
      { ja: '発掘調査で十字架やロザリオ、メダイなどキリシタン遺物が多数出土している。', zhTw: '發掘調查中大量出土十字架、玫瑰經、勳章等基督徒遺物。', en: 'Excavations have unearthed many Christian artifacts — crosses, rosaries, and medallions.' },
      { ja: '落城後、幕府は二度と籠城に使われぬよう徹底的に城を破壊し、石垣を埋めた。', zhTw: '落城後幕府為防止再被用於籠城而徹底破壞城郭、掩埋石垣。', en: 'After the fall, the Shōgunate thoroughly destroyed and buried the walls to prevent reuse as a fortress.' },
    ],
    highlights: [
      { ja: '本丸跡 — 天草四郎の墓碑と、3万7千人の魂を慰める碑が立つ。', zhTw: '本丸跡 — 立有天草四郎墓碑與慰藉3萬7千人之魂的碑。', en: 'Honmaru ruins — Amakusa Shirō\'s tombstone and a monument consoling 37,000 souls stand here.' },
      { ja: '発掘された石垣 — 幕府が埋めた石垣が発掘され、破壊の生々しさが伝わる。', zhTw: '發掘的石垣 — 幕府掩埋的石垣被發掘，傳達破壞的鮮明感。', en: 'Excavated walls — unearthed from where the Shōgunate buried them, conveying the rawness of destruction.' },
      { ja: '有明海の眺望 — 城跡から有明海と天草諸島を望む穏やかな風景と悲劇の対比。', zhTw: '有明海眺望 — 從城跡眺望有明海與天草群島的穩和風景與悲劇的對比。', en: 'Ariake Sea views — peaceful scenery of the sea and Amakusa Islands, a poignant contrast to the tragedy.' },
    ],
    architecture: [
      { ja: '有明海に突き出た岬に築かれた海城。三方を海に囲まれた天然の要害。', zhTw: '建於突入有明海的岬角的海城。三面被海環繞的天然要害。', en: 'A sea castle on a cape jutting into the Ariake Sea, naturally defended by ocean on three sides.' },
      { ja: '一揆軍は廃城の石垣を急遽修復して籠城。即席の防御施設で12万の大軍と3ヶ月戦った。', zhTw: '一揆軍緊急修復廢城石垣籠城。以臨時防禦設施與12萬大軍戰鬥3個月。', en: 'The rebels hastily repaired the abandoned walls and held off 120,000 troops for three months with makeshift defenses.' },
    ],
  },
  // #165 笠間城 — Kanto
  {
    id: 'kasama',
    number: 165,
    regionId: 'kanto',
    name: { ja: '笠間城', zhTw: '笠間城', en: 'Kasama Castle' },
    city: { ja: '笠間市', zhTw: '笠間市', en: 'Kasama' },
    prefecture: { ja: '茨城県', zhTw: '茨城縣', en: 'Ibaraki' },
    type: 'yamajiro',
    designation: '県指定史跡',
    position: { x: 77, y: 52 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#7A8A6A', roofColor: '#4A5A3A' },
    goshuin: { bg: '#f0f5e8', ink: '#3a4a2a', seal: '#8b0000', crest: '#7A8A6A' },
    history: [
      { ja: '承久元年(1219年)、笠間時朝が佐白山に築城。鎌倉時代から続く関東有数の山城。', zhTw: '承久元年(1219年)笠間時朝於佐白山築城。從鎌倉時代延續的關東首屈一指的山城。', en: 'Built in 1219 by Kasama Tokitomo on Mt. Sashiro, one of the Kantō region\'s foremost mountain castles since the Kamakura period.' },
      { ja: '笠間氏が18代約370年間支配した後、蒲生郷成・松平康重ら譜代大名が入城。', zhTw: '笠間氏支配18代約370年後，蒲生鄉成、松平康重等譜代大名入城。', en: 'After 370 years under 18 generations of the Kasama clan, fudai daimyō such as Gamō and Matsudaira took over.' },
      { ja: '元和の一国一城令でも例外的に存続し、牧野氏が8万石で幕末まで治めた。', zhTw: '元和一國一城令中也例外存續，牧野氏以8萬石統治至幕末。', en: 'Exceptionally allowed to continue under the one-castle edict; the Makino clan governed 80,000 koku until the Bakumatsu.' },
    ],
    figures: [
      { ja: '笠間時朝 — 佐白山の天然の要害を利用して築城した笠間氏の祖。', zhTw: '笠間時朝 — 利用佐白山天然要害築城的笠間氏之祖。', en: 'Kasama Tokitomo — founder of the Kasama clan, who exploited Mt. Sashiro\'s natural defenses for his castle.' },
    ],
    trivia: [
      { ja: '佐白山は花崗岩の巨岩が点在し、石倉と呼ばれる天然の岩盤を石垣に利用している。', zhTw: '佐白山花崗岩巨岩點綴，利用稱為石倉的天然岩盤作為石垣。', en: 'Granite boulders dot Mt. Sashiro, and natural rock formations called "ishikura" served as ready-made walls.' },
      { ja: '笠間稲荷神社は日本三大稲荷の一つで、城下町の守護神として城と共に発展した。', zhTw: '笠間稻荷神社是日本三大稻荷之一，作為城下町的守護神與城郭共同發展。', en: 'Kasama Inari Shrine, one of Japan\'s three great Inari shrines, grew alongside the castle as protector of the town.' },
    ],
    highlights: [
      { ja: '八幡台櫓 — 唯一現存する建造物で、真浄寺に移築されている。', zhTw: '八幡台櫓 — 唯一現存的建築物，已移築至真淨寺。', en: 'Hachimandai Yagura — the only surviving structure, relocated to Shinjō-ji temple.' },
      { ja: '石垣と巨岩 — 花崗岩の自然石と加工石垣が融合した独特の城郭遺構。', zhTw: '石垣與巨岩 — 花崗岩自然石與加工石垣融合的獨特城郭遺構。', en: 'Walls and boulders — a unique fusion of natural granite and crafted stone walls.' },
    ],
    architecture: [
      { ja: '標高182mの佐白山山頂に本丸を置く連郭式山城。天守台の石垣が残る。', zhTw: '於標高182m的佐白山山頂設本丸的連郭式山城。天守台石垣殘存。', en: 'A renkaku-style mountain castle with honmaru atop 182m Mt. Sashiro; the tenshu-dai stone base survives.' },
      { ja: '山全体を城域とし、大手門から本丸まで約1kmの登城路に複数の曲輪を配置。', zhTw: '以整座山為城域，從大手門到本丸約1km的登城路上配置多個曲輪。', en: 'The entire mountain served as castle grounds, with multiple baileys along the 1km path from the main gate to the honmaru.' },
    ],
  },
  // #166 土浦城 — Kanto
  {
    id: 'tsuchiura',
    number: 166,
    regionId: 'kanto',
    name: { ja: '土浦城', zhTw: '土浦城', en: 'Tsuchiura Castle' },
    city: { ja: '土浦市', zhTw: '土浦市', en: 'Tsuchiura' },
    prefecture: { ja: '茨城県', zhTw: '茨城縣', en: 'Ibaraki' },
    type: 'hirajiro',
    designation: '県指定史跡',
    position: { x: 78, y: 54 },
    illustration: { style: 'gate', tiers: 1, color: '#8A7A6A', roofColor: '#5A4A3A' },
    goshuin: { bg: '#f5f0e8', ink: '#3d3828', seal: '#8b0000', crest: '#8A7A6A' },
    history: [
      { ja: '永享年間(1429-41年)、若泉三郎が築城したと伝わる。霞ヶ浦に面した水城の性格を持つ。', zhTw: '永享年間(1429-41年)傳為若泉三郎築城。面向霞浦的水城性格。', en: 'Traditionally built by Wakaizumi Saburō in 1429–41; it had the character of a water castle facing Lake Kasumigaura.' },
      { ja: '戦国時代は小田氏の支城として機能し、佐竹氏との攻防の舞台となった。', zhTw: '戰國時代作為小田氏支城運作，成為與佐竹氏攻防的舞台。', en: 'During the Sengoku period it served as a branch castle of the Oda clan, a stage for battles with the Satake.' },
      { ja: '江戸時代は土屋氏9万5千石の居城として整備され、「亀城」の別名で親しまれた。', zhTw: '江戶時代作為土屋氏9萬5千石居城整備，以「龜城」別名廣受喜愛。', en: 'In the Edo period the Tsuchiya clan developed it as a 95,000-koku seat, nicknamed "Kijō" (Turtle Castle).' },
    ],
    figures: [
      { ja: '土屋数直 — 家光・家綱に仕えた老中で、土浦藩の基盤を築いた名君。', zhTw: '土屋數直 — 侍奉家光、家綱的老中，奠定土浦藩基礎的名君。', en: 'Tsuchiya Kazunao — a rōjū under Iemitsu and Ietsuna who laid the foundations of the Tsuchiura domain.' },
    ],
    trivia: [
      { ja: '関東地方で唯一、櫓門が現存する貴重な城。太鼓櫓門は県指定文化財。', zhTw: '關東地方唯一現存櫓門的珍貴城郭。太鼓櫓門為縣指定文化財。', en: 'The only castle in Kantō with a surviving yagura-mon gate; the Taiko Yagura-mon is a prefectural cultural property.' },
      { ja: '霞ヶ浦の水を引き込んだ堀が亀の甲羅のように城を囲んでいたことから「亀城」と呼ばれた。', zhTw: '引入霞浦之水的護城河如龜甲般包圍城郭，因此被稱為「龜城」。', en: 'Moats fed by Lake Kasumigaura surrounded it like a turtle shell, earning the nickname "Turtle Castle."' },
    ],
    highlights: [
      { ja: '太鼓櫓門 — 関東唯一の現存櫓門。二階に太鼓を置き時を告げた。', zhTw: '太鼓櫓門 — 關東唯一現存櫓門。二樓置太鼓報時。', en: 'Taiko Yagura-mon — Kantō\'s only surviving gate tower; a drum on the upper floor announced the hours.' },
      { ja: '東櫓・西櫓 — 復元された二基の隅櫓が往時の姿を偲ばせる。', zhTw: '東櫓、西櫓 — 復元的兩座角櫓令人追憶往日風姿。', en: 'East and West Turrets — two restored corner turrets evoke the castle\'s former appearance.' },
    ],
    architecture: [
      { ja: '霞ヶ浦の低湿地に築かれた輪郭式平城。本丸を二重の水堀が囲む。', zhTw: '建於霞浦低濕地的輪郭式平城。本丸被雙重水堀包圍。', en: 'A rinkaku-style flatland castle on Kasumigaura\'s marshes, the honmaru encircled by double water moats.' },
    ],
  },
  // #167 唐沢山城 — Kanto
  {
    id: 'karasawayama',
    number: 167,
    regionId: 'kanto',
    name: { ja: '唐沢山城', zhTw: '唐澤山城', en: 'Karasawayama Castle' },
    city: { ja: '佐野市', zhTw: '佐野市', en: 'Sano' },
    prefecture: { ja: '栃木県', zhTw: '栃木縣', en: 'Tochigi' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 73, y: 51 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#6A7A5A', roofColor: '#3A4A2A' },
    goshuin: { bg: '#f0f5e8', ink: '#2a3a1a', seal: '#8b0000', crest: '#6A7A5A' },
    history: [
      { ja: '延長5年(927年)、藤原秀郷が築城したと伝わる関東屈指の古城。', zhTw: '延長5年(927年)傳為藤原秀鄉築城的關東首屈一指的古城。', en: 'Traditionally built in 927 by Fujiwara no Hidesato, one of Kantō\'s most venerable castles.' },
      { ja: '秀郷は俵藤太とも呼ばれ、百足退治伝説で知られる武将。佐野氏の祖となった。', zhTw: '秀鄉又稱俵藤太，以百足退治傳說聞名的武將。成為佐野氏之祖。', en: 'Hidesato, also called Tawara Tōta of centipede-slaying legend, became the ancestor of the Sano clan.' },
      { ja: '上杉謙信の10度にわたる攻撃を耐え抜いた堅城として名高い。', zhTw: '以承受上杉謙信10次攻擊的堅城而聞名。', en: 'Famous as an impregnable fortress that withstood ten assaults by Uesugi Kenshin.' },
      { ja: '豊臣秀吉の小田原征伐後、佐野氏は麓の佐野城へ移り唐沢山城は廃城となった。', zhTw: '豐臣秀吉小田原征伐後，佐野氏移至山腳佐野城，唐澤山城廢城。', en: 'After Hideyoshi\'s Odawara campaign, the Sano moved to flatland Sano Castle and Karasawayama was abandoned.' },
    ],
    figures: [
      { ja: '藤原秀郷（俵藤太） — 平将門の乱を鎮圧した伝説的武将。大百足を退治した逸話で有名。', zhTw: '藤原秀鄉（俵藤太） — 鎮壓平將門之亂的傳奇武將。以退治大百足的逸話聞名。', en: 'Fujiwara no Hidesato (Tawara Tōta) — legendary warrior who suppressed Taira no Masakado\'s revolt, famed for slaying a giant centipede.' },
    ],
    trivia: [
      { ja: '本丸跡には唐沢山神社が鎮座し、藤原秀郷を祀っている。', zhTw: '本丸跡鎮座唐澤山神社，供奉藤原秀鄉。', en: 'Karasawayama Shrine sits on the honmaru ruins, enshrining Fujiwara no Hidesato.' },
      { ja: '城内には「猫の城」として知られ、多くの猫が暮らしており参拝者に人気。', zhTw: '城內以「貓之城」聞名，許多貓居住於此深受參拜者喜愛。', en: 'Known as "Cat Castle" — many cats live on the grounds and are beloved by visitors.' },
    ],
    highlights: [
      { ja: '高石垣 — 関東の山城では珍しい総石垣造りの本丸。見事な野面積みが残る。', zhTw: '高石垣 — 關東山城罕見的全石垣構造本丸。殘存精美的野面積。', en: 'Tall stone walls — rare full-stone honmaru for a Kantō mountain castle, with superb nozura-zumi masonry.' },
      { ja: '四つ目堀切 — 尾根筋を断ち切る4条の堀切が敵の侵入を阻んだ。', zhTw: '四重堀切 — 截斷稜線的4條堀切阻擋敵人入侵。', en: 'Quadruple moat-cuts — four horikiri trenches across the ridgeline blocked enemy advance.' },
    ],
    architecture: [
      { ja: '標高242mの唐沢山山頂に本丸を置く連郭式山城。東西約600mの城域を持つ。', zhTw: '於標高242m的唐澤山山頂設本丸的連郭式山城。東西約600m城域。', en: 'A renkaku mountain castle with honmaru atop 242m Karasawayama, stretching 600m east to west.' },
      { ja: '本丸の総石垣は織豊系の技術を導入したもので、関東の中世城郭から近世城郭への過渡期を示す。', zhTw: '本丸全石垣引入織豐系技術，展示關東從中世城郭到近世城郭的過渡期。', en: 'The honmaru\'s full stone walls adopted Oda-Toyotomi techniques, marking the transition from medieval to early-modern fortification.' },
    ],
  },
  // #168 名胡桃城 — Kanto
  {
    id: 'nagurumi',
    number: 168,
    regionId: 'kanto',
    name: { ja: '名胡桃城', zhTw: '名胡桃城', en: 'Nagurumi Castle' },
    city: { ja: 'みなかみ町', zhTw: '水上町', en: 'Minakami' },
    prefecture: { ja: '群馬県', zhTw: '群馬縣', en: 'Gunma' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 71, y: 49 },
    illustration: { style: 'ruins', tiers: 1, color: '#7A7A68', roofColor: '#5A5A48' },
    goshuin: { bg: '#f5f5e8', ink: '#3d3d28', seal: '#8b0000', crest: '#7A7A68' },
    history: [
      { ja: '明応年間(1492-1501年)、沼田氏の一族が利根川北岸の河岸段丘上に築城。', zhTw: '明應年間(1492-1501年)沼田氏一族於利根川北岸河岸階地上築城。', en: 'Built around 1492–1501 by a branch of the Numata clan on a river terrace above the northern bank of the Tone River.' },
      { ja: '真田昌幸が沼田領支配の拠点として重視し、城を改修・強化した。', zhTw: '真田昌幸作為沼田領支配據點重視此城，進行改修強化。', en: 'Sanada Masayuki valued it as a key base for controlling the Numata domain, renovating and strengthening it.' },
      { ja: '天正17年(1589年)、北条氏の家臣・猪俣邦憲が名胡桃城を奪取。これが秀吉の小田原征伐の直接的原因となった。', zhTw: '天正17年(1589年)北條氏家臣豬俣邦憲奪取名胡桃城。此事成為秀吉小田原征伐的直接原因。', en: 'In 1589 Hōjō retainer Inomata Kuninori seized Nagurumi — the direct trigger for Hideyoshi\'s Odawara campaign.' },
      { ja: 'この事件により北条氏は「惣無事令」違反とされ、天下統一の最後の戦いが始まった。', zhTw: '此事件導致北條氏被視為違反「惣無事令」，天下統一的最後戰役就此展開。', en: 'This incident branded the Hōjō as violators of the "Sōbuji-rei" peace edict, sparking the final war of unification.' },
    ],
    figures: [
      { ja: '真田昌幸 — 「表裏比興の者」と評された智将。名胡桃城を沼田支配の要とした。', zhTw: '真田昌幸 — 被評為「表裏比興之者」的智將。以名胡桃城為沼田支配的要衝。', en: 'Sanada Masayuki — the "schemer of dual allegiances," who made Nagurumi the linchpin of Numata control.' },
    ],
    trivia: [
      { ja: '小さな城が天下の歴史を変えた稀有な例。名胡桃城事件がなければ小田原征伐の口実がなかった。', zhTw: '小城改變天下歷史的罕見案例。若無名胡桃城事件就沒有小田原征伐的藉口。', en: 'A rare case of a small castle changing national history — without this incident, Hideyoshi lacked a pretext for the Odawara campaign.' },
      { ja: '城を奪われた鈴木主水は責任を感じて自害。この報が真田昌幸から秀吉に伝えられた。', zhTw: '失城的鈴木主水深感責任自害。此報由真田昌幸傳達給秀吉。', en: 'Suzuki Mondo, who lost the castle, took his own life in shame; Masayuki relayed the news to Hideyoshi.' },
    ],
    highlights: [
      { ja: '連郭式の曲輪群 — 般若郭・二の丸・本丸・三の丸・ささ郭が一直線に連なる。', zhTw: '連郭式曲輪群 — 般若郭、二之丸、本丸、三之丸、笹郭一直線排列。', en: 'Linear bailey array — Hannya, Ni-no-maru, Honmaru, San-no-maru, and Sasa baileys aligned in a row.' },
      { ja: '利根川の眺望 — 河岸段丘の先端から利根川と沼田方面を一望できる戦略的眺望。', zhTw: '利根川眺望 — 從河岸階地前端一望利根川與沼田方面的戰略性眺望。', en: 'Tone River views — a strategic panorama of the river and Numata area from the terrace edge.' },
    ],
    architecture: [
      { ja: '利根川北岸の河岸段丘を利用した連郭式崖端城。三方を断崖に守られた天然の要害。', zhTw: '利用利根川北岸河岸階地的連郭式崖端城。三面被斷崖守護的天然要害。', en: 'A renkaku cliff-edge castle on a river terrace above the Tone, naturally defended by cliffs on three sides.' },
    ],
  },
  // #169 沼田城 — Kanto
  {
    id: 'numata',
    number: 169,
    regionId: 'kanto',
    name: { ja: '沼田城', zhTw: '沼田城', en: 'Numata Castle' },
    city: { ja: '沼田市', zhTw: '沼田市', en: 'Numata' },
    prefecture: { ja: '群馬県', zhTw: '群馬縣', en: 'Gunma' },
    type: 'hirayama',
    designation: '県指定史跡',
    position: { x: 72, y: 50 },
    illustration: { style: 'classic', tiers: 3, color: '#6A7A8A', roofColor: '#3A4A5A' },
    goshuin: { bg: '#e8f0f5', ink: '#283a4a', seal: '#8b0000', crest: '#6A7A8A' },
    history: [
      { ja: '天文元年(1532年)、沼田顕泰が利根川・薄根川の合流点を見下ろす河岸段丘上に築城。', zhTw: '天文元年(1532年)沼田顯泰於俯瞰利根川、薄根川匯流點的河岸階地上築城。', en: 'Built in 1532 by Numata Akiyasu on a river terrace overlooking the confluence of the Tone and Usune rivers.' },
      { ja: '真田昌幸・信幸（信之）親子が支配し、真田氏の北関東経営の拠点となった。', zhTw: '真田昌幸、信幸（信之）父子支配，成為真田氏北關東經營的據點。', en: 'Governed by Sanada Masayuki and his son Nobuyuki, it became the Sanada base for northern Kantō operations.' },
      { ja: '真田信利の時代に5層の天守が築かれたが、改易後に破却された。', zhTw: '真田信利時代築造5層天守，但改易後被拆毀。', en: 'A five-story tenshu was built under Sanada Nobutoshi, but demolished after his attainder.' },
      { ja: '「真田丸」の舞台の一つとして広く知られ、真田氏と北条氏の領土争いの中心地。', zhTw: '作為「真田丸」的舞台之一廣為人知，是真田氏與北條氏領土爭奪的中心地。', en: 'Widely known as a setting of "Sanada Maru," the focal point of the Sanada-Hōjō territorial dispute.' },
    ],
    figures: [
      { ja: '真田信之（信幸） — 昌幸の長男。関ヶ原で東軍につき、沼田藩を幕末まで存続させた。', zhTw: '真田信之（信幸） — 昌幸長子。關原之戰投東軍，使沼田藩存續至幕末。', en: 'Sanada Nobuyuki — Masayuki\'s eldest son, who sided with the Eastern Army at Sekigahara and kept Numata domain alive to the Bakumatsu.' },
      { ja: '小松姫 — 本多忠勝の娘で信之の正室。関ヶ原前夜に舅・昌幸の入城を拒んだ逸話で有名。', zhTw: '小松姬 — 本多忠勝之女、信之正室。以關原前夜拒絕公公昌幸入城的逸話聞名。', en: 'Komatsu-hime — daughter of Honda Tadakatsu and Nobuyuki\'s wife, famous for refusing her father-in-law Masayuki entry on the eve of Sekigahara.' },
    ],
    trivia: [
      { ja: '城は標高差70mの河岸段丘上にあり、「天空の城」と呼ばれることもある。', zhTw: '城位於標高差70m的河岸階地上，有時被稱為「天空之城」。', en: 'Sitting atop a 70m-high river terrace, it is sometimes called a "castle in the sky."' },
      { ja: '沼田は三国街道の要衝で、上野・越後を結ぶ交通の要所として重要だった。', zhTw: '沼田是三國街道的要衝，作為連結上野與越後的交通要地非常重要。', en: 'Numata was a vital post on the Mikuni-kaidō, the key route linking Kōzuke and Echigo provinces.' },
    ],
    highlights: [
      { ja: '本丸の石垣と石段 — 発掘で出土した天守台の石垣が当時の壮大さを物語る。', zhTw: '本丸石垣與石階 — 發掘出土的天守台石垣訴說著當時的壯觀。', en: 'Honmaru stone walls and steps — excavated tenshu-dai walls testify to the castle\'s former grandeur.' },
      { ja: '捨曲輪と堀切 — 西側の防御施設が山城としての堅固さを今に伝える。', zhTw: '捨曲輪與堀切 — 西側防禦設施傳達作為山城的堅固。', en: 'Sute-kuruwa and moat-cuts — western defenses conveying the mountain fortress\'s strength.' },
    ],
    architecture: [
      { ja: '利根川北岸の河岸段丘上に築かれた平山城。5層の天守を有した壮大な城郭だった。', zhTw: '建於利根川北岸河岸階地上的平山城。擁有5層天守的壯大城郭。', en: 'A hilltop castle on a terrace above the Tone, once boasting a magnificent five-story tenshu.' },
      { ja: '段丘の地形を活かし、本丸・二の丸・三の丸を階段状に配置した梯郭式縄張り。', zhTw: '利用階地地形，將本丸、二之丸、三之丸階梯狀配置的梯郭式繩張。', en: 'A tiered layout exploiting the terrace topography, with honmaru, ni-no-maru, and san-no-maru arranged in steps.' },
    ],
  },
  // #170 岩櫃城 — Kanto
  {
    id: 'iwabitsu',
    number: 170,
    regionId: 'kanto',
    name: { ja: '岩櫃城', zhTw: '岩櫃城', en: 'Iwabitsu Castle' },
    city: { ja: '東吾妻町', zhTw: '東吾妻町', en: 'Higashi-Agatsuma' },
    prefecture: { ja: '群馬県', zhTw: '群馬縣', en: 'Gunma' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 70, y: 49 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#6A6A5A', roofColor: '#3A3A2A' },
    goshuin: { bg: '#f5f5e8', ink: '#3d3d28', seal: '#8b0000', crest: '#6A6A5A' },
    history: [
      { ja: '南北朝時代、吾妻太郎行盛が築城したと伝わる。岩櫃山(標高802m)の中腹に位置する。', zhTw: '南北朝時代傳為吾妻太郎行盛築城。位於岩櫃山(標高802m)中腹。', en: 'Traditionally built by Agatsuma Tarō Yukimori in the Nanboku-chō period, positioned mid-slope on 802m Mt. Iwabitsu.' },
      { ja: '真田幸隆が1563年に攻略し、以後真田氏の上州における重要拠点となった。', zhTw: '真田幸隆1563年攻略，此後成為真田氏在上州的重要據點。', en: 'Sanada Yukitaka captured it in 1563, making it a crucial Sanada stronghold in Kōzuke.' },
      { ja: '武田勝頼が長篠の戦い後に落ち延びる先として昌幸が進言したが、実現しなかった。', zhTw: '武田勝賴長篠之戰後昌幸建議逃至此城，但未能實現。', en: 'Masayuki proposed it as a refuge for Takeda Katsuyori after Nagashino, but the plan was never realized.' },
    ],
    figures: [
      { ja: '真田幸隆 — 真田昌幸の父。武田信玄の家臣として岩櫃城を攻略した。', zhTw: '真田幸隆 — 真田昌幸之父。作為武田信玄家臣攻略岩櫃城。', en: 'Sanada Yukitaka — Masayuki\'s father, who captured Iwabitsu as a vassal of Takeda Shingen.' },
    ],
    trivia: [
      { ja: '岩櫃山は断崖絶壁の岩山で、古くから修験道の霊場として知られていた。', zhTw: '岩櫃山是斷崖絕壁的岩山，自古以來作為修驗道靈場聞名。', en: 'Mt. Iwabitsu, a precipitous rocky peak, has long been known as a sacred site of Shugendō mountain asceticism.' },
      { ja: '真田三城（岩櫃城・上田城・沼田城）の一つとして真田ファンに人気の城。', zhTw: '作為真田三城（岩櫃城、上田城、沼田城）之一深受真田粉絲歡迎。', en: 'One of the "Three Sanada Castles" (Iwabitsu, Ueda, Numata), popular among Sanada fans.' },
    ],
    highlights: [
      { ja: '竪堀群 — 山腹に刻まれた多数の竪堀が敵の横移動を封じる。', zhTw: '竪堀群 — 刻於山腹的多數竪堀封鎖敵人橫向移動。', en: 'Vertical trenches — numerous tate-bori carved into the slopes prevented lateral enemy movement.' },
      { ja: '岩櫃山の絶景 — 本丸跡からの眺望は圧巻で、上州の山々を一望できる。', zhTw: '岩櫃山絕景 — 從本丸跡的眺望壓卷，可一望上州群山。', en: 'Mt. Iwabitsu panorama — the view from the honmaru is breathtaking, sweeping across Kōzuke\'s mountains.' },
    ],
    architecture: [
      { ja: '岩櫃山中腹の急峻な地形を利用した山城。岩壁と谷に囲まれた天然の要害。', zhTw: '利用岩櫃山中腹急峻地形的山城。被岩壁與山谷環繞的天然要害。', en: 'A mountain castle exploiting Mt. Iwabitsu\'s steep mid-slopes, naturally fortified by cliffs and ravines.' },
      { ja: '本丸を中心に多数の曲輪と竪堀を配置し、城域は東西約1.5kmに及ぶ。', zhTw: '以本丸為中心配置多數曲輪與竪堀，城域東西約1.5km。', en: 'Multiple baileys and vertical trenches centered on the honmaru, with grounds stretching 1.5km east to west.' },
    ],
  },
  // #171 忍城 — Kanto
  {
    id: 'oshi',
    number: 171,
    regionId: 'kanto',
    name: { ja: '忍城', zhTw: '忍城', en: 'Oshi Castle' },
    city: { ja: '行田市', zhTw: '行田市', en: 'Gyōda' },
    prefecture: { ja: '埼玉県', zhTw: '埼玉縣', en: 'Saitama' },
    type: 'hirajiro',
    designation: '県指定史跡',
    position: { x: 73, y: 53 },
    illustration: { style: 'classic', tiers: 3, color: '#7A8A7A', roofColor: '#4A5A4A' },
    goshuin: { bg: '#e8f5e8', ink: '#2a4a2a', seal: '#8b0000', crest: '#7A8A7A' },
    history: [
      { ja: '文明年間(1469-87年)、成田顕泰が築城。利根川と荒川に挟まれた低湿地に浮かぶ水城。', zhTw: '文明年間(1469-87年)成田顯泰築城。浮於利根川與荒川之間低濕地的水城。', en: 'Built around 1469–87 by Narita Akiyasu, a water castle floating on marshlands between the Tone and Ara rivers.' },
      { ja: '1590年の小田原征伐で石田三成率いる2万の大軍が水攻めを行ったが落城せず。', zhTw: '1590年小田原征伐中石田三成率2萬大軍進行水攻但未能攻克。', en: 'During the 1590 Odawara campaign, Ishida Mitsunari\'s 20,000-strong army attempted a water siege but failed to take it.' },
      { ja: '成田長親が約500の兵で籠城し、小田原城開城まで持ちこたえた「のぼうの城」として有名。', zhTw: '成田長親以約500兵籠城，堅持到小田原城開城的「傻瓜之城」而聞名。', en: 'Narita Nagachika held out with just 500 troops until Odawara fell — the famous "Castle of the Fool" (Nobō no Shiro).' },
      { ja: '小田原征伐で最後まで落ちなかった関東唯一の城として歴史に名を刻んだ。', zhTw: '作為小田原征伐中最後仍未陷落的關東唯一城郭而名垂歷史。', en: 'It earned its place in history as the only Kantō castle that never fell during the Odawara campaign.' },
    ],
    figures: [
      { ja: '成田長親（のぼう様） — 領民に「でくのぼう」と呼ばれながらも絶大な人望を持ち、城を守り抜いた。', zhTw: '成田長親（傻瓜大人） — 被領民稱為「木偶」卻擁有絕大人望，守住城池。', en: 'Narita Nagachika ("Lord Nobō") — despite being called a "blockhead," he commanded immense popular support and defended the castle.' },
      { ja: '石田三成 — 秀吉の命で水攻めを敢行したが失敗。この失敗が後の評判に影響した。', zhTw: '石田三成 — 奉秀吉之命進行水攻但失敗。此失敗影響了日後的評價。', en: 'Ishida Mitsunari — ordered by Hideyoshi to flood the castle, but his failure tarnished his later reputation.' },
    ],
    trivia: [
      { ja: '三成は忍沼の水を利用するため全長28kmの堤防「石田堤」を築いたが、決壊して失敗。', zhTw: '三成為利用忍沼之水築造全長28km的堤防「石田堤」，但決堤失敗。', en: 'Mitsunari built the 28km "Ishida Embankment" to flood the castle using local marshes, but it broke and the plan failed.' },
      { ja: '和田竜の小説「のぼうの城」(2007年)と映画化(2012年)で全国的に有名になった。', zhTw: '和田龍的小說《傻瓜之城》(2007年)與電影化(2012年)使其聞名全國。', en: 'Wada Ryō\'s novel "Nobō no Shiro" (2007) and its 2012 film adaptation brought the castle nationwide fame.' },
    ],
    highlights: [
      { ja: '復元御三階櫓 — 本丸跡に建つ三層の御三階櫓（復元）。行田市郷土博物館を併設。', zhTw: '復元御三階櫓 — 建於本丸跡的三層御三階櫓（復元）。併設行田市鄉土博物館。', en: 'Restored Gosankai Yagura — a three-story turret on the honmaru, housing the Gyōda City Museum.' },
      { ja: '水城の面影 — 周囲に残る沼地と堀が、かつての水城の姿を偲ばせる。', zhTw: '水城面影 — 周圍殘存的沼地與護城河令人追憶水城往日風姿。', en: 'Echoes of a water castle — surviving marshes and moats hint at the castle\'s former watery defenses.' },
    ],
    architecture: [
      { ja: '忍沼と呼ばれる広大な沼地の中の微高地に築かれた平城。周囲は水堀と沼沢で守られた。', zhTw: '建於稱為忍沼的廣大沼地中微高地的平城。周圍被水堀與沼澤守護。', en: 'A flatland castle on slightly elevated ground amid vast marshes called Oshi-numa, protected by water moats and swamps.' },
      { ja: '本丸・二の丸・三の丸が沼の中の島のように点在し、橋で結ばれていた。', zhTw: '本丸、二之丸、三之丸如沼中之島般散布，以橋相連。', en: 'Honmaru, ni-no-maru, and san-no-maru were scattered like islands in the marsh, connected by bridges.' },
    ],
  },
  // #172 杉山城 — Kanto
  {
    id: 'sugiyama',
    number: 172,
    regionId: 'kanto',
    name: { ja: '杉山城', zhTw: '杉山城', en: 'Sugiyama Castle' },
    city: { ja: '嵐山町', zhTw: '嵐山町', en: 'Ranzan' },
    prefecture: { ja: '埼玉県', zhTw: '埼玉縣', en: 'Saitama' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 72, y: 54 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#7A7A6A', roofColor: '#4A4A3A' },
    goshuin: { bg: '#f5f5e8', ink: '#3d3d28', seal: '#8b0000', crest: '#7A7A6A' },
    history: [
      { ja: '築城年代・築城者は不明だが、15世紀後半から16世紀前半に築かれたと推定される。', zhTw: '築城年代、築城者不明，推定15世紀後半至16世紀前半築造。', en: 'The builder and date are unknown, but it is estimated to have been built in the late 15th to early 16th century.' },
      { ja: '山内上杉氏または扇谷上杉氏に関連する城と考えられている。', zhTw: '被認為是與山內上杉氏或扇谷上杉氏相關的城郭。', en: 'It is thought to be connected to the Yamauchi Uesugi or Ōgigayatsu Uesugi clans.' },
      { ja: '「築城の教科書」と評されるほど縄張りが精緻で、中世城郭研究の重要資料。', zhTw: '被評為「築城教科書」般繩張精緻，是中世城郭研究的重要資料。', en: 'Called a "textbook of castle-building" for its meticulous layout, a vital resource for medieval castle studies.' },
    ],
    figures: [
      { ja: '築城者不詳 — 精緻な縄張りから高度な築城技術を持つ勢力の手によるものと推察される。', zhTw: '築城者不詳 — 從精緻的繩張推測為擁有高度築城技術的勢力所建。', en: 'Builder unknown — the sophisticated layout suggests a force with advanced fortification skills.' },
    ],
    trivia: [
      { ja: '発掘調査で15世紀末の遺物が出土し、北条氏以前の築城説が有力となった。', zhTw: '發掘調查出土15世紀末遺物，北條氏以前的築城說成為有力。', en: 'Excavations unearthed late-15th-century artifacts, supporting the theory it pre-dates the Hōjō.' },
      { ja: '比企城館跡群の一つとして国指定史跡。近くの菅谷館と合わせて見学するのが定番。', zhTw: '作為比企城館跡群之一被指定為國史跡。與附近菅谷館合併參觀為定番。', en: 'A national historic site as part of the Hiki castle cluster; visitors typically combine it with nearby Sugaya-yakata.' },
    ],
    highlights: [
      { ja: '精緻な縄張り — 10の曲輪を堀切・横堀・竪堀で有機的に連結した芸術的城郭設計。', zhTw: '精緻繩張 — 以堀切、橫堀、竪堀有機連結10個曲輪的藝術性城郭設計。', en: 'Meticulous layout — ten baileys organically linked by horikiri, yokobori, and tatebori in an artistic design.' },
      { ja: '折歪み — 横堀に設けられた折れが死角をなくし、側射を可能にする高度な技術。', zhTw: '折歪 — 橫堀設置的折彎消除死角，實現側射的高度技術。', en: 'Zigzag bends — turns in the lateral moats eliminated blind spots and enabled flanking fire.' },
    ],
    architecture: [
      { ja: '市野川北岸の丘陵上に築かれた山城。本郭を中心に10の曲輪を放射状に配置。', zhTw: '建於市野川北岸丘陵上的山城。以本郭為中心放射狀配置10個曲輪。', en: 'A mountain castle on a hill north of the Ichino River, with ten baileys radiating from the main enclosure.' },
      { ja: '各曲輪間を堀切で独立させつつ、全体として有機的に連携する精緻な縄張り。', zhTw: '各曲輪間以堀切獨立，同時整體有機連攜的精緻繩張。', en: 'Each bailey stands independent via moat-cuts yet coordinates organically as a unified whole.' },
    ],
  },
  // #173 菅谷館 — Kanto
  {
    id: 'sugaya',
    number: 173,
    regionId: 'kanto',
    name: { ja: '菅谷館', zhTw: '菅谷館', en: 'Sugaya-yakata' },
    city: { ja: '嵐山町', zhTw: '嵐山町', en: 'Ranzan' },
    prefecture: { ja: '埼玉県', zhTw: '埼玉縣', en: 'Saitama' },
    type: 'yakata',
    designation: '国指定史跡',
    position: { x: 72, y: 55 },
    illustration: { style: 'mansion', tiers: 1, color: '#8A7A6A', roofColor: '#5A4A3A' },
    goshuin: { bg: '#f5f0e8', ink: '#3d3828', seal: '#8b0000', crest: '#8A7A6A' },
    history: [
      { ja: '鎌倉時代、畠山重忠の居館として知られる。重忠は武蔵武士の鑑と称された名将。', zhTw: '鎌倉時代作為畠山重忠居館聞名。重忠被稱為武藏武士之鑑的名將。', en: 'Known as the residence of Hatakeyama Shigetada in the Kamakura period, a paragon of Musashi warriors.' },
      { ja: '戦国時代に大幅に改修され、堀や土塁が強化された。上杉・北条の争いの中で機能した。', zhTw: '戰國時代大幅改修，護城河與土壘強化。在上杉、北條爭奪中發揮作用。', en: 'Extensively renovated in the Sengoku period with reinforced moats and earthworks, functioning amid the Uesugi-Hōjō conflicts.' },
    ],
    figures: [
      { ja: '畠山重忠 — 源頼朝に仕えた坂東武者の名将。一ノ谷の戦いで馬を背負って崖を下った逸話で有名。', zhTw: '畠山重忠 — 侍奉源賴朝的坂東武者名將。以一之谷戰役中背馬下懸崖的逸話聞名。', en: 'Hatakeyama Shigetada — a celebrated Bandō warrior under Minamoto no Yoritomo, famed for carrying his horse down a cliff at Ichi-no-Tani.' },
    ],
    trivia: [
      { ja: '埼玉県立嵐山史跡の博物館が館跡に建ち、比企地域の中世史を紹介している。', zhTw: '埼玉縣立嵐山史跡博物館建於館跡，介紹比企地區的中世史。', en: 'The Saitama Ranzan Historical Museum stands on the grounds, introducing the medieval history of the Hiki area.' },
      { ja: '大河ドラマ「鎌倉殿の13人」で畠山重忠の悲劇が描かれ、注目度が急上昇した。', zhTw: '大河劇《鎌倉殿的13人》描繪畠山重忠的悲劇，關注度急遽上升。', en: 'The NHK drama "The 13 Lords of the Shōgun" depicted Shigetada\'s tragedy, boosting the site\'s popularity.' },
    ],
    highlights: [
      { ja: '土塁と空堀 — 鎌倉期の居館から戦国期の城郭への変遷を示す重層的な遺構。', zhTw: '土壘與空堀 — 展示從鎌倉期居館到戰國期城郭變遷的重層遺構。', en: 'Earthworks and dry moats — layered remains showing the evolution from Kamakura-era residence to Sengoku-era fortress.' },
      { ja: '都幾川の眺望 — 館跡から都幾川の清流と武蔵の丘陵地帯を望む。', zhTw: '都幾川眺望 — 從館跡眺望都幾川清流與武藏丘陵地帶。', en: 'Tokigawa views — a vista of the clear Tokigawa River and the Musashi hills from the grounds.' },
    ],
    architecture: [
      { ja: '都幾川の段丘上に築かれた方形居館。戦国時代に外郭が増設され約13haの城域に発展。', zhTw: '建於都幾川階地上的方形居館。戰國時代增設外郭發展為約13ha城域。', en: 'A rectangular yakata on a terrace above the Tokigawa, expanded to about 13 hectares with outer defenses in the Sengoku period.' },
    ],
  },
  // #174 本佐倉城 — Kanto
  {
    id: 'moto-sakura',
    number: 174,
    regionId: 'kanto',
    name: { ja: '本佐倉城', zhTw: '本佐倉城', en: 'Moto-Sakura Castle' },
    city: { ja: '酒々井町', zhTw: '酒酒井町', en: 'Shisui' },
    prefecture: { ja: '千葉県', zhTw: '千葉縣', en: 'Chiba' },
    type: 'hirayama',
    designation: '国指定史跡',
    position: { x: 79, y: 56 },
    illustration: { style: 'ruins', tiers: 1, color: '#6A8A6A', roofColor: '#3A5A3A' },
    goshuin: { bg: '#e8f5e8', ink: '#2a4a2a', seal: '#8b0000', crest: '#6A8A6A' },
    history: [
      { ja: '文明年間(1469-87年)、千葉輔胤が下総千葉氏の本拠として築城。約100年間の居城となった。', zhTw: '文明年間(1469-87年)千葉輔胤作為下總千葉氏本據築城。成為約100年的居城。', en: 'Built around 1469–87 by Chiba Suketane as the headquarters of the Shimōsa Chiba clan for about a century.' },
      { ja: '関東有数の大豪族・千葉氏の最後の本拠地であり、戦国時代の下総を支配した。', zhTw: '關東首屈一指大豪族千葉氏的最後本據地，支配戰國時代的下總。', en: 'The last headquarters of the Chiba, one of Kantō\'s mightiest clans, who ruled Shimōsa in the Sengoku era.' },
      { ja: '1590年の小田原征伐で千葉氏が滅亡し、廃城。その後佐倉に新城（佐倉城）が築かれた。', zhTw: '1590年小田原征伐千葉氏滅亡而廢城。其後於佐倉築新城（佐倉城）。', en: 'The Chiba fell in the 1590 Odawara campaign and the castle was abandoned; a new castle (Sakura) was later built nearby.' },
    ],
    figures: [
      { ja: '千葉輔胤 — 千葉氏中興の祖。享徳の乱後に本佐倉城を築き、一族の再起を図った。', zhTw: '千葉輔胤 — 千葉氏中興之祖。享德之亂後築本佐倉城，圖謀一族再起。', en: 'Chiba Suketane — restorer of the Chiba clan, who built Moto-Sakura after the Kyōtoku War to revive his lineage.' },
    ],
    trivia: [
      { ja: '2020年に国史跡に追加指定され、整備が進んでいる。往時の城域は東西約700m。', zhTw: '2020年追加指定為國史跡，整備持續進行。往時城域東西約700m。', en: 'Designated a national historic site in 2020; restoration is ongoing. The original grounds spanned about 700m east to west.' },
    ],
    highlights: [
      { ja: '東山馬場 — 城の東側に広がる馬場跡で、千葉氏の武威を偲ばせる広大な空間。', zhTw: '東山馬場 — 城東側展開的馬場跡，令人追憶千葉氏武威的廣大空間。', en: 'Higashiyama riding ground — a vast open space east of the castle, evoking the Chiba clan\'s martial might.' },
      { ja: '深い空堀 — 最大深度10m以上の空堀が曲輪間を隔て、戦国城郭の迫力を伝える。', zhTw: '深空堀 — 最大深度10m以上的空堀隔開曲輪，傳達戰國城郭的魄力。', en: 'Deep dry moats — karabori over 10m deep separate the baileys, conveying Sengoku-era fortification power.' },
    ],
    architecture: [
      { ja: '印旛沼に面した台地の先端に築かれた平山城。内郭と外郭からなる大規模な城郭。', zhTw: '建於面向印旛沼台地前端的平山城。由內郭與外郭組成的大規模城郭。', en: 'A hilltop castle on a plateau tip facing Lake Inba, a large fortress with inner and outer compounds.' },
    ],
  },
  // #175 大多喜城 — Kanto
  {
    id: 'otaki',
    number: 175,
    regionId: 'kanto',
    name: { ja: '大多喜城', zhTw: '大多喜城', en: 'Ōtaki Castle' },
    city: { ja: '大多喜町', zhTw: '大多喜町', en: 'Ōtaki' },
    prefecture: { ja: '千葉県', zhTw: '千葉縣', en: 'Chiba' },
    type: 'hirayama',
    designation: '県指定史跡',
    position: { x: 80, y: 57 },
    illustration: { style: 'classic', tiers: 3, color: '#7A7A8A', roofColor: '#4A4A5A' },
    goshuin: { bg: '#e8e8f5', ink: '#28283d', seal: '#8b0000', crest: '#7A7A8A' },
    history: [
      { ja: '天正18年(1590年)、本多忠勝が10万石で入封し、近世城郭として整備。', zhTw: '天正18年(1590年)本多忠勝以10萬石入封，整備為近世城郭。', en: 'In 1590 Honda Tadakatsu entered with 100,000 koku and developed it as an early-modern castle.' },
      { ja: '忠勝は徳川四天王の一人で、戦国最強の武将と讃えられた猛将。', zhTw: '忠勝是德川四天王之一，被讚為戰國最強武將的猛將。', en: 'Tadakatsu, one of the Four Heavenly Kings of Tokugawa, was hailed as the mightiest warrior of the Sengoku era.' },
      { ja: '本多家の後、阿部・大河内松平氏など譜代大名が歴代藩主を務めた。', zhTw: '本多家之後，阿部、大河內松平氏等譜代大名歷任藩主。', en: 'After the Honda, fudai lords including the Abe and Ōkōchi-Matsudaira clans served as successive domain lords.' },
    ],
    figures: [
      { ja: '本多忠勝 — 生涯57度の戦に臨み一度も傷を負わなかったという伝説の猛将。名槍「蜻蛉切」を振るった。', zhTw: '本多忠勝 — 生涯經歷57場戰鬥未曾負傷的傳奇猛將。揮舞名槍「蜻蛉切」。', en: 'Honda Tadakatsu — a legendary warrior who fought 57 battles without a single wound, wielding the famed spear "Tonbogiri."' },
    ],
    trivia: [
      { ja: '大多喜城の大井戸は周囲約17m・深さ約20mで、日本一の規模と言われる城郭の井戸。', zhTw: '大多喜城大井戶周長約17m、深約20m，據說是日本最大規模的城郭井戶。', en: 'Ōtaki\'s great well — about 17m in circumference and 20m deep — is said to be the largest castle well in Japan.' },
      { ja: '本多忠勝の騎馬像が城下町入口に建ち、大多喜のシンボルとなっている。', zhTw: '本多忠勝騎馬像建於城下町入口，成為大多喜的象徵。', en: 'An equestrian statue of Honda Tadakatsu at the castle town entrance is Ōtaki\'s symbol.' },
    ],
    highlights: [
      { ja: '模擬天守 — 昭和50年に建てられた三層四階の天守型博物館。', zhTw: '模擬天守 — 昭和50年建造的三層四階天守型博物館。', en: 'Reconstructed tenshu — a three-story, four-floor museum built in 1975 in the style of a tenshu.' },
      { ja: '薬医門 — 二の丸にあった薬医門が大多喜高校の敷地内に現存する。', zhTw: '藥醫門 — 二之丸的藥醫門現存於大多喜高校校地內。', en: 'Yakui-mon gate — the ni-no-maru\'s medicinal gate survives within Ōtaki High School grounds.' },
    ],
    architecture: [
      { ja: '夷隅川の段丘上に築かれた平山城。本丸・二の丸・三の丸を階段状に配置。', zhTw: '建於夷隅川階地上的平山城。本丸、二之丸、三之丸階梯狀配置。', en: 'A hilltop castle on an Isumi River terrace, with honmaru, ni-no-maru, and san-no-maru in tiered arrangement.' },
    ],
  },
  // #176 滝山城 — Kanto
  {
    id: 'takiyama',
    number: 176,
    regionId: 'kanto',
    name: { ja: '滝山城', zhTw: '瀧山城', en: 'Takiyama Castle' },
    city: { ja: '八王子市', zhTw: '八王子市', en: 'Hachiōji' },
    prefecture: { ja: '東京都', zhTw: '東京都', en: 'Tokyo' },
    type: 'hirayama',
    designation: '国指定史跡',
    position: { x: 74, y: 56 },
    illustration: { style: 'ruins', tiers: 1, color: '#6A7A6A', roofColor: '#3A4A3A' },
    goshuin: { bg: '#e8f5e8', ink: '#2a4a2a', seal: '#8b0000', crest: '#6A7A6A' },
    history: [
      { ja: '大永元年(1521年)、大石定重が多摩川南岸の丘陵上に築城。', zhTw: '大永元年(1521年)大石定重於多摩川南岸丘陵上築城。', en: 'Built in 1521 by Ōishi Sadashige on a hill above the southern bank of the Tama River.' },
      { ja: '北条氏照が入城し、関東最大級の中世城郭に拡張。東京都内最大の城跡。', zhTw: '北條氏照入城，擴張為關東最大級的中世城郭。東京都內最大城跡。', en: 'Hōjō Ujiteru expanded it into one of the largest medieval castles in Kantō — Tokyo\'s biggest castle ruin.' },
      { ja: '1569年、武田信玄の小田原攻めの際に武田軍の攻撃を受け、激戦の末に凌いだが、氏照は八王子城へ移った。', zhTw: '1569年武田信玄進攻小田原時遭武田軍攻擊，激戰後倖存，但氏照移往八王子城。', en: 'Attacked by Takeda Shingen in 1569, it survived fierce combat, but Ujiteru relocated to Hachiōji Castle afterward.' },
    ],
    figures: [
      { ja: '北条氏照 — 北条氏康の三男。滝山城を関東有数の大城郭に整備した。', zhTw: '北條氏照 — 北條氏康三子。將瀧山城整備為關東首屈一指的大城郭。', en: 'Hōjō Ujiteru — third son of Hōjō Ujiyasu, who developed Takiyama into one of Kantō\'s great fortresses.' },
    ],
    trivia: [
      { ja: '城域は約25haで東京ドーム5個分以上。都内にこれほどの中世城郭が残るのは奇跡的。', zhTw: '城域約25ha相當於5個以上東京巨蛋。都內殘存如此規模的中世城郭堪稱奇跡。', en: 'The 25-hectare grounds exceed five Tokyo Domes — it\'s miraculous that such a medieval fortress survives in Tokyo.' },
      { ja: '春は5000本の桜が城域を覆い、「続100名城で最も美しい桜の城」と称される。', zhTw: '春季5000棵櫻花覆蓋城域，被稱為「續100名城中最美的櫻花之城」。', en: 'In spring, 5,000 cherry trees blanket the grounds, earning it the title "most beautiful cherry blossom castle of the Continued 100."' },
    ],
    highlights: [
      { ja: '本丸の馬出し — 角馬出と丸馬出が併存する珍しい構造。北条流築城術の粋。', zhTw: '本丸馬出 — 角馬出與丸馬出併存的珍稀構造。北條流築城術的精華。', en: 'Honmaru umadashi — a rare coexistence of square and round outworks, the essence of Hōjō fortification art.' },
      { ja: '大堀切 — 二の丸と中の丸を隔てる大規模な堀切。城最大の防御施設。', zhTw: '大堀切 — 隔開二之丸與中之丸的大規模堀切。城內最大防禦設施。', en: 'Great moat-cut — a massive horikiri separating ni-no-maru from naka-no-maru, the castle\'s greatest defense.' },
    ],
    architecture: [
      { ja: '多摩川と秋川の合流点を見下ろす丘陵上の平山城。本丸を中心に放射状に曲輪を配置。', zhTw: '俯瞰多摩川與秋川匯流點的丘陵上平山城。以本丸為中心放射狀配置曲輪。', en: 'A hilltop castle overlooking the confluence of the Tama and Aki rivers, with baileys radiating from the honmaru.' },
      { ja: '馬出し・枡形虎口・横堀など北条氏特有の防御技法が随所に見られる。', zhTw: '馬出、枡形虎口、橫堀等北條氏特有防禦技法隨處可見。', en: 'Hōjō-style defenses — umadashi outworks, masugata gates, and lateral moats — appear throughout.' },
    ],
  },
  // #177 品川台場 — Kanto
  {
    id: 'shinagawa-daiba',
    number: 177,
    regionId: 'kanto',
    name: { ja: '品川台場', zhTw: '品川台場', en: 'Shinagawa Daiba' },
    city: { ja: '港区', zhTw: '港區', en: 'Minato' },
    prefecture: { ja: '東京都', zhTw: '東京都', en: 'Tokyo' },
    type: 'daiba',
    designation: '国指定史跡',
    position: { x: 76, y: 57 },
    illustration: { style: 'star-fort', tiers: 1, color: '#6A7A8A', roofColor: '#3A4A5A' },
    goshuin: { bg: '#e8f0f5', ink: '#283a4a', seal: '#8b0000', crest: '#6A7A8A' },
    history: [
      { ja: '嘉永6年(1853年)、ペリー来航の脅威を受けて江川英龍の設計で品川沖に築造された海上砲台。', zhTw: '嘉永6年(1853年)因培里來航的威脅，由江川英龍設計在品川沖築造的海上砲台。', en: 'Maritime gun batteries built offshore at Shinagawa in 1853, designed by Egawa Hidetatsu in response to Perry\'s arrival.' },
      { ja: '当初11基の計画だったが、実際に完成したのは第一～第三、第五、第六の5基。', zhTw: '原計劃11座，實際完成的為第一至第三、第五、第六共5座。', en: 'Eleven were planned, but only five were completed: No. 1 through No. 3, No. 5, and No. 6.' },
      { ja: '品川台場の存在がペリーの二度目の来航時に江戸湾への直接侵入を思いとどまらせたとされる。', zhTw: '品川台場的存在據說使培里第二次來航時打消直接侵入江戶灣的念頭。', en: 'Their presence reportedly deterred Perry from directly entering Edo Bay during his second visit.' },
    ],
    figures: [
      { ja: '江川英龍（太郎左衛門） — 韮山代官。西洋砲術に精通し、台場の設計を担当した幕末の先覚者。', zhTw: '江川英龍（太郎左衛門） — 韮山代官。精通西洋砲術，負責台場設計的幕末先覺者。', en: 'Egawa Hidetatsu — Nirayama magistrate and Bakumatsu visionary, an expert in Western gunnery who designed the batteries.' },
    ],
    trivia: [
      { ja: 'お台場の地名は「御台場」に由来し、現在の東京臨海副都心の名称の起源。', zhTw: '台場地名源自「御台場」，是現在東京臨海副都心名稱的起源。', en: 'The place name "Odaiba" derives from "o-daiba" (honorable battery) — the origin of modern Odaiba\'s name.' },
      { ja: '第三台場は現在「台場公園」として一般公開されており、砲台跡や弾薬庫跡が見学できる。', zhTw: '第三台場現以「台場公園」一般開放，可參觀砲台跡與彈藥庫跡。', en: 'Battery No. 3 is now open as "Daiba Park," where visitors can see gun emplacements and magazine ruins.' },
      { ja: '第六台場は非公開の無人島で、自然が回復した貴重な生態系が保全されている。', zhTw: '第六台場為非公開無人島，保全著自然恢復的珍貴生態系。', en: 'Battery No. 6 is an off-limits uninhabited island, preserving a valuable ecosystem that has naturally recovered.' },
    ],
    highlights: [
      { ja: '第三台場 — 約160m四方の正方形砲台跡。石垣・土塁・陣屋跡・弾薬庫跡が残る。', zhTw: '第三台場 — 約160m四方的正方形砲台跡。石垣、土壘、陣屋跡、彈藥庫跡殘存。', en: 'Battery No. 3 — a square, 160m-per-side gun platform with surviving walls, earthworks, barracks, and magazine ruins.' },
      { ja: 'レインボーブリッジの眺望 — 台場公園からレインボーブリッジと東京湾を間近に望む。', zhTw: '彩虹大橋眺望 — 從台場公園近距離眺望彩虹大橋與東京灣。', en: 'Rainbow Bridge views — a close-up panorama of Rainbow Bridge and Tokyo Bay from Daiba Park.' },
    ],
    architecture: [
      { ja: '西洋式の海上砲台。正方形の人工島に石垣と土塁を築き、大砲を据えた。', zhTw: '西洋式海上砲台。在正方形人工島築石垣與土壘，設置大砲。', en: 'Western-style maritime batteries: square artificial islands fitted with stone walls, earthworks, and cannon emplacements.' },
      { ja: '伊豆石を用いた石垣と内部の煉瓦構造が和洋折衷の軍事建築を示す。', zhTw: '使用伊豆石的石垣與內部磚構造展示和洋折衷的軍事建築。', en: 'Izu-stone walls and internal brick structures represent a Japanese-Western hybrid military architecture.' },
    ],
  },
  // #178 郡上八幡城 — Chubu
  {
    id: 'gujo-hachiman',
    number: 178,
    regionId: 'chubu',
    name: { ja: '郡上八幡城', zhTw: '郡上八幡城', en: 'Gujō Hachiman Castle' },
    city: { ja: '郡上市', zhTw: '郡上市', en: 'Gujō' },
    prefecture: { ja: '岐阜県', zhTw: '岐阜縣', en: 'Gifu' },
    type: 'yamajiro',
    designation: '県指定史跡',
    position: { x: 58, y: 52 },
    illustration: { style: 'classic', tiers: 4, color: '#8A8A7A', roofColor: '#5A5A4A' },
    goshuin: { bg: '#f5f5e8', ink: '#3d3d28', seal: '#8b0000', crest: '#8A8A7A' },
    history: [
      { ja: '永禄2年(1559年)、遠藤盛数が八幡山山頂に築城。長良川の支流・吉田川沿いの要衝。', zhTw: '永祿2年(1559年)遠藤盛數於八幡山山頂築城。長良川支流吉田川沿岸的要衝。', en: 'Built in 1559 by Endō Morikazu atop Mt. Hachiman, a strategic point along the Yoshida River, a tributary of the Nagara.' },
      { ja: '稲葉貞通・遠藤慶隆らが城主を務め、美濃と飛驒を結ぶ交通の要として機能した。', zhTw: '稻葉貞通、遠藤慶隆等歷任城主，作為連結美濃與飛驒的交通要衝。', en: 'Lords like Inaba Sadamichi and Endō Yoshitaka governed, the castle functioning as a key link between Mino and Hida.' },
      { ja: '1933年に木造で再建された天守は、日本最古の木造再建天守として貴重。', zhTw: '1933年以木造再建的天守，作為日本最古老的木造再建天守珍貴。', en: 'The wooden tenshu rebuilt in 1933 is Japan\'s oldest wooden reconstructed keep, a valuable rarity.' },
    ],
    figures: [
      { ja: '遠藤盛数 — 郡上一円を支配した武将で、東氏を滅ぼし八幡山に城を築いた。', zhTw: '遠藤盛數 — 支配郡上一帶的武將，滅東氏後於八幡山築城。', en: 'Endō Morikazu — a warlord who controlled all Gujō, destroyed the Tō clan, and built his castle on Mt. Hachiman.' },
    ],
    trivia: [
      { ja: '秋の紅葉シーズンには天守が雲海に浮かぶ「天空の城」として人気の撮影スポット。', zhTw: '秋季紅葉季節天守浮於雲海中的「天空之城」是熱門攝影景點。', en: 'In autumn, the tenshu floating above a sea of clouds is a popular "castle in the sky" photo spot.' },
      { ja: '郡上踊りは日本三大盆踊りの一つで、城下町の風情と共に楽しめる。', zhTw: '郡上舞是日本三大盆舞之一，可與城下町風情一同享受。', en: 'Gujō Odori, one of Japan\'s three great Bon dances, can be enjoyed alongside the castle town\'s atmosphere.' },
      { ja: '司馬遼太郎が「日本で最も美しい山城」と評したことで知られる。', zhTw: '以司馬遼太郎評為「日本最美的山城」而聞名。', en: 'Famous for being called "Japan\'s most beautiful mountain castle" by novelist Shiba Ryōtarō.' },
    ],
    highlights: [
      { ja: '木造再建天守 — 1933年再建の4層5階天守。大垣城を参考に建てられた。', zhTw: '木造再建天守 — 1933年再建的4層5階天守。參考大垣城建造。', en: 'Wooden reconstructed tenshu — a four-story, five-floor keep rebuilt in 1933, modeled after Ōgaki Castle.' },
      { ja: '城下町の眺望 — 天守からの眺めは絶景で、吉田川と城下町を一望できる。', zhTw: '城下町眺望 — 從天守的眺望絕景，可一望吉田川與城下町。', en: 'Castle town panorama — a breathtaking view from the tenshu, sweeping across the Yoshida River and town below.' },
    ],
    architecture: [
      { ja: '八幡山(標高354m)山頂に本丸を置く山城。山麓から山頂まで石垣が連なる。', zhTw: '於八幡山(標高354m)山頂設本丸的山城。從山腳到山頂石垣連綿。', en: 'A mountain castle with honmaru atop 354m Mt. Hachiman, stone walls running continuously from base to summit.' },
    ],
  },
  // #179 苗木城 — Chubu
  {
    id: 'naegi',
    number: 179,
    regionId: 'chubu',
    name: { ja: '苗木城', zhTw: '苗木城', en: 'Naegi Castle' },
    city: { ja: '中津川市', zhTw: '中津川市', en: 'Nakatsugawa' },
    prefecture: { ja: '岐阜県', zhTw: '岐阜縣', en: 'Gifu' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 60, y: 54 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#7A6A5A', roofColor: '#4A3A2A' },
    goshuin: { bg: '#f5f0e8', ink: '#3d3828', seal: '#8b0000', crest: '#7A6A5A' },
    history: [
      { ja: '天文年間(1532-55年)、遠山正廉が木曽川右岸の巨岩の山に築城。', zhTw: '天文年間(1532-55年)遠山正廉於木曾川右岸巨岩之山築城。', en: 'Built around 1532–55 by Tōyama Masanori on a rocky mountain above the right bank of the Kiso River.' },
      { ja: '遠山氏が12代にわたって治めた1万石の小藩だが、天然の要害で難攻不落を誇った。', zhTw: '遠山氏統治12代的1萬石小藩，但以天然要害自豪難攻不落。', en: 'The Tōyama ruled for 12 generations with just 10,000 koku, but the natural defenses made it impregnable.' },
      { ja: '巨岩の上に懸造りで建物を建てる独自の建築で、「岩山の城」として知られる。', zhTw: '在巨岩上以懸造建築建造建物的獨自建築，以「岩山之城」聞名。', en: 'Known as the "castle on rocks" for its unique kake-zukuri (overhang) construction atop giant boulders.' },
    ],
    figures: [
      { ja: '遠山友政 — 関ヶ原の戦い後に苗木領を回復し、苗木藩の基盤を確立した。', zhTw: '遠山友政 — 關原之戰後恢復苗木領，確立苗木藩基礎。', en: 'Tōyama Tomomasa — recovered the Naegi domain after Sekigahara and established the Naegi han foundation.' },
    ],
    trivia: [
      { ja: '天守台の巨岩には柱穴が残り、岩の上に直接建物を建てていた証拠が見られる。', zhTw: '天守台巨岩上殘留柱穴，可見直接在岩石上建造建物的證據。', en: 'Pillar holes in the tenshu-dai boulders remain as evidence that structures were built directly on the rock.' },
      { ja: '近年SNSで「天空の城」「絶景の城」として話題となり、訪問者が急増している。', zhTw: '近年在SNS上以「天空之城」「絕景之城」為話題，訪問者急增。', en: 'Recent social media buzz as a "castle in the sky" and "castle of stunning views" has brought a surge of visitors.' },
    ],
    highlights: [
      { ja: '天守台の巨岩 — 自然の巨岩と石垣が融合した圧巻の天守台。展望台が設置されている。', zhTw: '天守台巨岩 — 自然巨岩與石垣融合的壓卷天守台。設有展望台。', en: 'Tenshu-dai boulders — a stunning fusion of natural rock and stone walls, now fitted with a viewing platform.' },
      { ja: '木曽川の眺望 — 天守台から恵那山と木曽川の雄大な景色を一望。', zhTw: '木曾川眺望 — 從天守台一望惠那山與木曾川的雄壯景色。', en: 'Kiso River views — a majestic panorama of Mt. Ena and the Kiso River from the tenshu-dai.' },
      { ja: '足軽長屋跡 — 山麓から本丸へ至る登城路沿いに点在する曲輪群。', zhTw: '足輕長屋跡 — 從山腳到本丸登城路沿途點綴的曲輪群。', en: 'Ashigaru barracks ruins — baileys dotting the climbing route from the base to the honmaru.' },
    ],
    architecture: [
      { ja: '木曽川沿いの標高432mの岩山全体を城域とする山城。巨岩の上に懸造りで天守を築いた。', zhTw: '以木曾川沿岸標高432m岩山整體為城域的山城。在巨岩上以懸造築天守。', en: 'A mountain castle encompassing an entire 432m rocky peak above the Kiso River, with a tenshu built in overhang style atop boulders.' },
      { ja: '自然石をそのまま石垣に取り込む「自然石利用石垣」が特徴で、石と一体化した城。', zhTw: '以將自然石直接融入石垣的「自然石利用石垣」為特徵，與石一體化的城。', en: 'Characterized by walls incorporating natural boulders, creating a castle fused with the rock itself.' },
    ],
  },
  // #180 美濃金山城 — Chubu
  {
    id: 'mino-kaneyama',
    number: 180,
    regionId: 'chubu',
    name: { ja: '美濃金山城', zhTw: '美濃金山城', en: 'Mino Kaneyama Castle' },
    city: { ja: '可児市', zhTw: '可兒市', en: 'Kani' },
    prefecture: { ja: '岐阜県', zhTw: '岐阜縣', en: 'Gifu' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 61, y: 53 },
    illustration: { style: 'ruins', tiers: 1, color: '#8A7A5A', roofColor: '#5A4A2A' },
    goshuin: { bg: '#f5f0e0', ink: '#3d3810', seal: '#8b0000', crest: '#8A7A5A' },
    history: [
      { ja: '天文6年(1537年)、斎藤正義が古城山(標高276m)に築城。当初は烏峰城と呼ばれた。', zhTw: '天文6年(1537年)齋藤正義於古城山(標高276m)築城。最初稱為烏峰城。', en: 'Built in 1537 by Saitō Masayoshi on 276m Mt. Kojō, originally called Ubō-jō (Crow Peak Castle).' },
      { ja: '森可成・長可・蘭丸（成利）ら森一族の居城として知られる。織田信長の近習・森蘭丸の故郷。', zhTw: '作為森可成、長可、蘭丸（成利）等森一族居城聞名。織田信長近習森蘭丸的故鄉。', en: 'Known as the seat of the Mori clan — Mori Yoshinari, Nagayoshi, and Ranmaru — the hometown of Oda Nobunaga\'s page Mori Ranmaru.' },
      { ja: '関ヶ原の戦い後に破城され、石垣や建物は加納城に転用された。', zhTw: '關原之戰後破城，石垣與建物轉用至加納城。', en: 'Demolished after Sekigahara; its stones and structures were repurposed for Kanō Castle.' },
    ],
    figures: [
      { ja: '森蘭丸（成利） — 信長の小姓として寵愛を受けた美少年。本能寺の変で信長と共に散った。', zhTw: '森蘭丸（成利） — 作為信長小姓受寵愛的美少年。本能寺之變中與信長一同殞命。', en: 'Mori Ranmaru (Naritoshi) — a beautiful youth favored as Nobunaga\'s page, who perished alongside his lord at Honnō-ji.' },
      { ja: '森長可 — 「鬼武蔵」と呼ばれた猛将。小牧・長久手の戦いで戦死。', zhTw: '森長可 — 被稱為「鬼武藏」的猛將。小牧長久手之戰中戰死。', en: 'Mori Nagayoshi — the fierce "Demon of Musashi," killed in battle at Komaki-Nagakute.' },
    ],
    trivia: [
      { ja: '「破城」の実態を示す貴重な遺跡。石垣が意図的に崩された痕跡が残る。', zhTw: '展示「破城」實態的珍貴遺跡。石垣被刻意毀壞的痕跡殘存。', en: 'A precious site showing deliberate castle demolition — traces of intentionally toppled stone walls survive.' },
      { ja: '可児市では森蘭丸を観光キャラクターとして活用し、「蘭丸ふる里の森」を整備している。', zhTw: '可兒市將森蘭丸作為觀光角色活用，整備「蘭丸故里之森」。', en: 'Kani City promotes Ranmaru as a tourism mascot and maintains "Ranmaru Furusato-no-Mori" park.' },
    ],
    highlights: [
      { ja: '破城の痕跡 — 石垣が意図的に崩された「破城」の状態が良好に観察できる。', zhTw: '破城痕跡 — 石垣被刻意毀壞的「破城」狀態可良好觀察。', en: 'Demolition traces — intentionally toppled walls clearly visible, showing the "hashiro" (castle destruction) process.' },
      { ja: '本丸跡からの眺望 — 可児市街と木曽川、濃尾平野を一望する絶景。', zhTw: '本丸跡眺望 — 一望可兒市街與木曾川、濃尾平野的絕景。', en: 'Honmaru panorama — a stunning view of Kani town, the Kiso River, and the Nōbi Plain.' },
    ],
    architecture: [
      { ja: '古城山山頂に本丸を置く連郭式山城。織豊系城郭の特徴を持つ総石垣の城。', zhTw: '於古城山山頂設本丸的連郭式山城。具有織豐系城郭特徵的全石垣之城。', en: 'A renkaku mountain castle with honmaru on Mt. Kojō summit, a fully stone-walled fortress in the Oda-Toyotomi style.' },
    ],
  },
  // #181 興国寺城 — Chubu
  {
    id: 'kokokuji',
    number: 181,
    regionId: 'chubu',
    name: { ja: '興国寺城', zhTw: '興國寺城', en: 'Kōkokuji Castle' },
    city: { ja: '沼津市', zhTw: '沼津市', en: 'Numazu' },
    prefecture: { ja: '静岡県', zhTw: '靜岡縣', en: 'Shizuoka' },
    type: 'hirayama',
    designation: '国指定史跡',
    position: { x: 66, y: 58 },
    illustration: { style: 'ruins', tiers: 1, color: '#7A8A7A', roofColor: '#4A5A4A' },
    goshuin: { bg: '#e8f5e8', ink: '#2a4a2a', seal: '#8b0000', crest: '#7A8A7A' },
    history: [
      { ja: '北条早雲（伊勢宗瑞）が最初に城主となった城として知られ、後北条氏発祥の地とされる。', zhTw: '以北條早雲（伊勢宗瑞）最初成為城主的城聞名，被視為後北條氏發祥之地。', en: 'Known as the first castle held by Hōjō Sōun (Ise Sōzui), regarded as the birthplace of the Later Hōjō clan.' },
      { ja: '早雲はここを拠点に伊豆討ち入りを行い、戦国大名への道を切り開いた。', zhTw: '早雲以此為據點進行伊豆討入，開闢戰國大名之路。', en: 'From here Sōun launched his invasion of Izu, blazing the trail to become a Sengoku daimyō.' },
      { ja: '今川・武田・北条の三者が争奪し、戦国時代を通じて重要な拠点であり続けた。', zhTw: '今川、武田、北條三方爭奪，貫穿戰國時代持續為重要據點。', en: 'Contested by the Imagawa, Takeda, and Hōjō, it remained a vital stronghold throughout the Sengoku period.' },
    ],
    figures: [
      { ja: '北条早雲（伊勢宗瑞） — 戦国時代の幕を開けた先駆者。興国寺城から戦国大名への飛躍を遂げた。', zhTw: '北條早雲（伊勢宗瑞） — 開啟戰國時代的先驅。從興國寺城實現向戰國大名的飛躍。', en: 'Hōjō Sōun (Ise Sōzui) — a pioneer who ushered in the Sengoku era, leaping from Kōkokuji to become a great daimyō.' },
    ],
    trivia: [
      { ja: '「下剋上」の象徴的な城。身分の低い者が実力で天下を取る時代の始まりを告げた。', zhTw: '「下剋上」的象徵性城郭。宣告身分低微者以實力奪取天下時代的開始。', en: 'A symbolic castle of "gekokujō" — heralding the age when men of low birth could seize power through ability.' },
      { ja: '愛鷹山の裾野に位置し、富士山を間近に望む絶好のロケーション。', zhTw: '位於愛鷹山山腳，近距離望富士山的絕佳位置。', en: 'Located at the foot of Mt. Ashitaka, with a superb close-up view of Mt. Fuji.' },
    ],
    highlights: [
      { ja: '大土塁と大空堀 — 本丸北側の高さ10m以上の大土塁と深い空堀が圧巻。', zhTw: '大土壘與大空堀 — 本丸北側高10m以上的大土壘與深空堀壓卷。', en: 'Great earthwork and dry moat — a towering 10m+ embankment and deep karabori north of the honmaru are breathtaking.' },
      { ja: '天守台跡 — 石垣が残る天守台から愛鷹山と富士山を望む。', zhTw: '天守台跡 — 從殘存石垣的天守台眺望愛鷹山與富士山。', en: 'Tenshu-dai ruins — stone walls remain, offering views of Mt. Ashitaka and Mt. Fuji.' },
    ],
    architecture: [
      { ja: '愛鷹山南麓の舌状台地に築かれた平山城。本丸・二の丸・三の丸が南北に連なる。', zhTw: '建於愛鷹山南麓舌狀台地的平山城。本丸、二之丸、三之丸南北相連。', en: 'A hilltop castle on a tongue-shaped plateau at Mt. Ashitaka\'s southern foot, with honmaru, ni-no-maru, and san-no-maru aligned north to south.' },
      { ja: '北側の大土塁と大空堀は戦国時代の城郭防御の典型例として評価が高い。', zhTw: '北側的大土壘與大空堀作為戰國時代城郭防禦的典型範例評價很高。', en: 'The northern earthwork and dry moat are highly regarded as classic examples of Sengoku-era castle defense.' },
    ],
  },
  // #182 村上城 — Chubu
  {
    id: 'murakami',
    number: 182,
    regionId: 'chubu',
    name: { ja: '村上城', zhTw: '村上城', en: 'Murakami Castle' },
    city: { ja: '村上市', zhTw: '村上市', en: 'Murakami' },
    prefecture: { ja: '新潟県', zhTw: '新潟縣', en: 'Niigata' },
    type: 'hirayama',
    designation: '国指定史跡',
    position: { x: 68, y: 42 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#6A7A6A', roofColor: '#3A4A3A' },
    goshuin: { bg: '#e8f5e8', ink: '#2a4a2a', seal: '#8b0000', crest: '#6A7A6A' },
    history: [
      { ja: '戦国時代、本庄繁長が臥牛山(標高135m)に築城。日本海に面した越後北部の要衝。', zhTw: '戰國時代本庄繁長於臥牛山(標高135m)築城。面向日本海的越後北部要衝。', en: 'Built in the Sengoku period by Honjō Shigenaga on 135m Mt. Gagyū, a key stronghold in northern Echigo facing the Sea of Japan.' },
      { ja: '上杉謙信の家臣・本庄繁長は謙信に反乱を起こすも許され、後に上杉景勝に仕えた。', zhTw: '上杉謙信家臣本庄繁長雖反叛謙信但獲赦免，後侍奉上杉景勝。', en: 'Honjō Shigenaga, Kenshin\'s vassal, rebelled but was pardoned and later served Uesugi Kagekatsu.' },
      { ja: '江戸時代は堀直奇が近世城郭に改修し、総石垣の見事な山城に生まれ変わった。', zhTw: '江戶時代堀直奇改修為近世城郭，蛻變為全石垣的精美山城。', en: 'In the Edo period Hori Naoyori renovated it into an early-modern castle with magnificent full stone walls.' },
    ],
    figures: [
      { ja: '堀直奇 — 築城の名手として知られ、村上城の石垣を整備した。', zhTw: '堀直奇 — 以築城名手聞名，整備村上城石垣。', en: 'Hori Naoyori — a renowned castle-builder who developed Murakami\'s stone walls.' },
    ],
    trivia: [
      { ja: '村上は鮭の町として有名で、独自の鮭文化（塩引き鮭・鮭の酒びたし）が城下町に根付く。', zhTw: '村上以鮭魚之町聞名，獨自的鮭魚文化（鹽引鮭、鮭魚酒浸）紮根於城下町。', en: 'Murakami is famous for salmon, with unique salmon culture (shiobiki-zake, sake-no-sakubitashi) rooted in the castle town.' },
      { ja: '幕末の戊辰戦争では村上藩は奥羽越列藩同盟に参加し、新政府軍と戦った。', zhTw: '幕末戊辰戰爭中村上藩參加奧羽越列藩同盟，與新政府軍交戰。', en: 'During the Boshin War, Murakami domain joined the Ōuetsu Reppan Dōmei alliance and fought the Meiji government forces.' },
    ],
    highlights: [
      { ja: '総石垣の山城 — 山頂から山麓まで連なる石垣群は東北・北陸随一の規模。', zhTw: '全石垣山城 — 從山頂到山腳連綿的石垣群為東北、北陸第一規模。', en: 'Fully stone-walled mountain castle — the wall arrays from summit to base are unmatched in Tōhoku and Hokuriku.' },
      { ja: '臥牛山からの眺望 — 日本海と村上市街を一望する絶景。', zhTw: '臥牛山眺望 — 一望日本海與村上市街的絕景。', en: 'Mt. Gagyū views — a stunning panorama of the Sea of Japan and Murakami city.' },
    ],
    architecture: [
      { ja: '臥牛山山頂に本丸を置く平山城。山頂部は総石垣で、山麓には居館を配した。', zhTw: '於臥牛山山頂設本丸的平山城。山頂部全石垣，山腳配置居館。', en: 'A hilltop castle with honmaru atop Mt. Gagyū; the summit is fully stone-walled, with a residence at the base.' },
    ],
  },
  // #183 高島城 — Chubu
  {
    id: 'takashima',
    number: 183,
    regionId: 'chubu',
    name: { ja: '高島城', zhTw: '高島城', en: 'Takashima Castle' },
    city: { ja: '諏訪市', zhTw: '諏訪市', en: 'Suwa' },
    prefecture: { ja: '長野県', zhTw: '長野縣', en: 'Nagano' },
    type: 'hirajiro',
    designation: '県指定史跡',
    position: { x: 64, y: 52 },
    illustration: { style: 'classic', tiers: 3, color: '#7A8A8A', roofColor: '#4A5A5A' },
    goshuin: { bg: '#e8f0f5', ink: '#283a4a', seal: '#8b0000', crest: '#7A8A8A' },
    history: [
      { ja: '文禄元年(1592年)、日根野高吉が諏訪湖畔に築城。湖水に浮かぶ姿から「諏訪の浮城」と呼ばれた。', zhTw: '文祿元年(1592年)日根野高吉於諏訪湖畔築城。因浮於湖水的姿態被稱為「諏訪浮城」。', en: 'Built in 1592 by Hineno Takayoshi on the shore of Lake Suwa, called "Suwa\'s Floating Castle" for its lakeside appearance.' },
      { ja: '諏訪氏が3万石で入封し、幕末まで10代にわたって治めた。', zhTw: '諏訪氏以3萬石入封，歷10代統治至幕末。', en: 'The Suwa clan entered with 30,000 koku and governed for ten generations until the Bakumatsu.' },
    ],
    figures: [
      { ja: '日根野高吉 — 豊臣秀吉の家臣。諏訪湖の地形を活かした水城を設計した築城の名手。', zhTw: '日根野高吉 — 豐臣秀吉家臣。活用諏訪湖地形設計水城的築城名手。', en: 'Hineno Takayoshi — Hideyoshi\'s vassal, a master builder who designed the water castle exploiting Lake Suwa\'s terrain.' },
    ],
    trivia: [
      { ja: '干拓により諏訪湖から離れたが、かつては三方を湖水に囲まれた水城だった。', zhTw: '因圍墾離開諏訪湖，但過去三面被湖水環繞的水城。', en: 'Land reclamation separated it from the lake, but it was once a water castle surrounded on three sides by Lake Suwa.' },
      { ja: '「日本三大湖城」の一つに数えられる（松江城・膳所城と共に）。', zhTw: '被列為「日本三大湖城」之一（與松江城、膳所城並列）。', en: 'Counted among Japan\'s "Three Great Lakeside Castles" (alongside Matsue and Zeze castles).' },
    ],
    highlights: [
      { ja: '復興天守 — 1970年に復興された三層の天守。内部は諏訪の歴史資料を展示。', zhTw: '復興天守 — 1970年復興的三層天守。內部展示諏訪歷史資料。', en: 'Restored tenshu — a three-story keep rebuilt in 1970, displaying Suwa\'s historical materials inside.' },
      { ja: '諏訪湖の眺望 — 天守から諏訪湖と八ヶ岳・霧ヶ峰を一望する信州の絶景。', zhTw: '諏訪湖眺望 — 從天守一望諏訪湖與八岳、霧峰的信州絕景。', en: 'Lake Suwa panorama — a quintessential Shinshū view of Lake Suwa, Yatsugatake, and Kirigamine from the tenshu.' },
    ],
    architecture: [
      { ja: '諏訪湖畔に築かれた輪郭式平城。本丸を水堀が囲み、三方を湖水が守った。', zhTw: '建於諏訪湖畔的輪郭式平城。本丸被水堀環繞，三面由湖水守護。', en: 'A rinkaku flatland castle on the Lake Suwa shore, its honmaru ringed by water moats, with the lake guarding three sides.' },
    ],
  },
  // #184 富山城 — Chubu
  {
    id: 'toyama',
    number: 184,
    regionId: 'chubu',
    name: { ja: '富山城', zhTw: '富山城', en: 'Toyama Castle' },
    city: { ja: '富山市', zhTw: '富山市', en: 'Toyama' },
    prefecture: { ja: '富山県', zhTw: '富山縣', en: 'Toyama' },
    type: 'hirajiro',
    designation: '市指定史跡',
    position: { x: 60, y: 46 },
    illustration: { style: 'classic', tiers: 3, color: '#8A8A8A', roofColor: '#5A5A5A' },
    goshuin: { bg: '#f0f0f0', ink: '#3a3a3a', seal: '#8b0000', crest: '#8A8A8A' },
    history: [
      { ja: '天文12年(1543年)、神保長職が神通川の流れを外堀に利用して築城。', zhTw: '天文12年(1543年)神保長職利用神通川水流為外堀築城。', en: 'Built in 1543 by Jinbō Nagamoto, using the Jinzū River\'s course as an outer moat.' },
      { ja: '佐々成政が織田信長から越中一国を任され、富山城を大幅に改修・拡張した。', zhTw: '佐佐成政受織田信長託付越中一國，大幅改修擴張富山城。', en: 'Sassa Narimasa, entrusted with Etchū by Oda Nobunaga, extensively renovated and expanded the castle.' },
      { ja: '前田利次が10万石で入封し、加賀藩の支藩・富山藩の藩庁として幕末まで機能した。', zhTw: '前田利次以10萬石入封，作為加賀藩支藩富山藩的藩廳運作至幕末。', en: 'Maeda Toshitsugu entered with 100,000 koku; it served as the seat of Toyama domain, a branch of Kaga, until the Bakumatsu.' },
    ],
    figures: [
      { ja: '佐々成政 — 信長に仕えた猛将。秀吉に対抗するため厳冬の立山を越えた「さらさら越え」で知られる。', zhTw: '佐佐成政 — 侍奉信長的猛將。以對抗秀吉而在嚴冬翻越立山的「沙沙越」聞名。', en: 'Sassa Narimasa — a fierce Nobunaga vassal, famed for his "Sarasara-goe" crossing of Mt. Tateyama in deep winter to resist Hideyoshi.' },
    ],
    trivia: [
      { ja: '富山の売薬（置き薬）文化は富山藩時代に始まり、城下町の経済を支えた。', zhTw: '富山賣藥（置藥）文化始於富山藩時代，支撐城下町經濟。', en: 'Toyama\'s traveling medicine tradition (okigusuri) began in the domain era and sustained the castle town\'s economy.' },
      { ja: '1945年の富山大空襲で市街地は壊滅したが、1954年に模擬天守が再建された。', zhTw: '1945年富山大空襲市區毀滅，但1954年重建模擬天守。', en: 'The 1945 Toyama air raid devastated the city, but a replica tenshu was rebuilt in 1954.' },
    ],
    highlights: [
      { ja: '模擬天守 — 1954年再建。犬山城を模した三層四階の天守型博物館。', zhTw: '模擬天守 — 1954年重建。仿犬山城的三層四階天守型博物館。', en: 'Replica tenshu — rebuilt in 1954 as a three-story, four-floor museum modeled after Inuyama Castle.' },
      { ja: '千歳御門 — 富山藩時代の薬医門で、唯一現存する富山城の建造物。', zhTw: '千歲御門 — 富山藩時代的藥醫門，唯一現存的富山城建築物。', en: 'Chitose Gomon — a yakui-mon gate from the domain era, the castle\'s only surviving original structure.' },
    ],
    architecture: [
      { ja: '神通川を天然の外堀とした輪郭式平城。本丸を二重の堀で囲む。', zhTw: '以神通川為天然外堀的輪郭式平城。本丸以雙重堀環繞。', en: 'A rinkaku flatland castle using the Jinzū River as a natural outer moat, the honmaru enclosed by double moats.' },
    ],
  },
  // #185 増山城 — Chubu
  {
    id: 'masuyama',
    number: 185,
    regionId: 'chubu',
    name: { ja: '増山城', zhTw: '增山城', en: 'Masuyama Castle' },
    city: { ja: '砺波市', zhTw: '礪波市', en: 'Tonami' },
    prefecture: { ja: '富山県', zhTw: '富山縣', en: 'Toyama' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 59, y: 47 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#6A7A5A', roofColor: '#3A4A2A' },
    goshuin: { bg: '#f0f5e8', ink: '#2a3a1a', seal: '#8b0000', crest: '#6A7A5A' },
    history: [
      { ja: '南北朝時代に築城されたと伝わる。越中三大山城の一つに数えられる。', zhTw: '傳為南北朝時代築城。被列為越中三大山城之一。', en: 'Traditionally built in the Nanboku-chō period, counted among the Three Great Mountain Castles of Etchū.' },
      { ja: '神保長職の居城として越中の政治的中心の一つとなった。', zhTw: '作為神保長職居城成為越中政治中心之一。', en: 'As the seat of Jinbō Nagamoto, it became a political center of Etchū province.' },
      { ja: '上杉謙信の越中侵攻で幾度も攻防が繰り広げられ、最終的に上杉氏の支配下に入った。', zhTw: '上杉謙信越中侵攻中多次攻防，最終進入上杉氏支配之下。', en: 'Repeatedly contested during Uesugi Kenshin\'s Etchū invasions, it ultimately fell under Uesugi control.' },
    ],
    figures: [
      { ja: '神保長職 — 越中守護代。増山城を拠点に越中の支配を図ったが、上杉謙信に敗れた。', zhTw: '神保長職 — 越中守護代。以增山城為據點圖謀支配越中，但敗於上杉謙信。', en: 'Jinbō Nagamoto — Etchū deputy governor who based his rule at Masuyama but was defeated by Uesugi Kenshin.' },
    ],
    trivia: [
      { ja: '越中三大山城（増山城・松倉城・守山城）の中で最も遺構の保存状態が良い。', zhTw: '越中三大山城（增山城、松倉城、守山城）中遺構保存狀態最好。', en: 'Of the Three Great Mountain Castles of Etchū (Masuyama, Matsukura, Moriyama), Masuyama\'s remains are best preserved.' },
      { ja: '和田川のダム湖に面しており、湖面に映る城山の風景が美しい。', zhTw: '面向和田川水庫湖，映於湖面的城山風景優美。', en: 'Facing a Wada River reservoir, the castle mountain reflected on the lake makes a beautiful scene.' },
    ],
    highlights: [
      { ja: '一の丸の大堀切 — 二の丸との間を断ち切る幅20m以上の大堀切。', zhTw: '一之丸大堀切 — 截斷與二之丸之間寬20m以上的大堀切。', en: 'Ichi-no-maru great moat-cut — a massive horikiri over 20m wide severing the connection to ni-no-maru.' },
      { ja: '複合的な曲輪群 — 一の丸・二の丸・三の丸・安室屋敷など多数の曲輪が残る。', zhTw: '複合曲輪群 — 一之丸、二之丸、三之丸、安室屋敷等多數曲輪殘存。', en: 'Complex bailey array — ichi-no-maru, ni-no-maru, san-no-maru, Amuro-yashiki, and many more baileys survive.' },
    ],
    architecture: [
      { ja: '和田川右岸の丘陵上に築かれた連郭式山城。東西約1.2kmの広大な城域を持つ。', zhTw: '建於和田川右岸丘陵上的連郭式山城。東西約1.2km的廣大城域。', en: 'A renkaku mountain castle on hills above the Wada River\'s right bank, with grounds spanning 1.2km east to west.' },
    ],
  },
  // #186 玄蕃尾城 — Chubu
  {
    id: 'genbanoo',
    number: 186,
    regionId: 'chubu',
    name: { ja: '玄蕃尾城', zhTw: '玄蕃尾城', en: 'Genbanoo Castle' },
    city: { ja: '敦賀市', zhTw: '敦賀市', en: 'Tsuruga' },
    prefecture: { ja: '福井県', zhTw: '福井縣', en: 'Fukui' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 55, y: 52 },
    illustration: { style: 'ruins', tiers: 1, color: '#7A8A6A', roofColor: '#4A5A3A' },
    goshuin: { bg: '#f0f5e8', ink: '#2a3a1a', seal: '#8b0000', crest: '#7A8A6A' },
    history: [
      { ja: '天正11年(1583年)、柴田勝家が賤ヶ岳の戦いに備えて内中尾山に築いた陣城。', zhTw: '天正11年(1583年)柴田勝家為備戰賤岳之戰於內中尾山築造的陣城。', en: 'Built in 1583 by Shibata Katsuie on Mt. Uchinakao as a field fortification for the Battle of Shizugatake.' },
      { ja: '賤ヶ岳の戦いは柴田勝家と羽柴秀吉の天下を賭けた決戦で、秀吉が勝利した。', zhTw: '賤岳之戰是柴田勝家與羽柴秀吉賭上天下的決戰，秀吉獲勝。', en: 'The Battle of Shizugatake was the decisive showdown between Shibata Katsuie and Hashiba Hideyoshi for supremacy — Hideyoshi won.' },
      { ja: '勝家は敗戦後、北ノ庄城でお市の方と共に自害した。', zhTw: '勝家戰敗後在北之庄城與阿市一同自害。', en: 'After defeat, Katsuie committed seppuku at Kitanoshō Castle alongside Lady Oichi.' },
    ],
    figures: [
      { ja: '柴田勝家 — 織田家筆頭家老。「鬼柴田」「かかれ柴田」と恐れられた猛将。', zhTw: '柴田勝家 — 織田家首席家老。被畏懼為「鬼柴田」「衝鋒柴田」的猛將。', en: 'Shibata Katsuie — Oda clan chief retainer, a fierce warrior feared as "Demon Shibata" and "Charging Shibata."' },
    ],
    trivia: [
      { ja: '陣城（一時的な軍事拠点）としては日本最大級・最高傑作と評される。', zhTw: '作為陣城（臨時軍事據點）被評為日本最大級、最高傑作。', en: 'Regarded as the largest and finest "jin-jiro" (temporary military fortification) in Japan.' },
      { ja: '柴田勝家の本陣跡が明瞭に残り、土塁・堀切・虎口の保存状態が極めて良好。', zhTw: '柴田勝家本陣跡明瞭殘存，土壘、堀切、虎口保存狀態極為良好。', en: 'Katsuie\'s headquarters are clearly preserved, with earthworks, moat-cuts, and gates in exceptional condition.' },
    ],
    highlights: [
      { ja: '本丸の馬出し — 本丸前面に設けられた大規模な馬出しが圧巻。', zhTw: '本丸馬出 — 本丸前面設置的大規模馬出壓卷。', en: 'Honmaru umadashi — a magnificent large-scale outwork before the honmaru.' },
      { ja: '土塁と堀切 — 約400年前の陣城の遺構がほぼ完全な形で残る奇跡。', zhTw: '土壘與堀切 — 約400年前陣城遺構幾乎完整保存的奇蹟。', en: 'Earthworks and moat-cuts — a miraculous near-complete preservation of a 400-year-old field fortress.' },
    ],
    architecture: [
      { ja: '内中尾山山頂(標高460m)に築かれた陣城。本丸を中心に放射状に曲輪を配置。', zhTw: '築於內中尾山山頂(標高460m)的陣城。以本丸為中心放射狀配置曲輪。', en: 'A field fortress atop 460m Mt. Uchinakao, with baileys radiating from the honmaru.' },
      { ja: '土塁・空堀・馬出しなど織豊系城郭の技法が随所に見られ、勝家の築城技術の高さを示す。', zhTw: '土壘、空堀、馬出等織豐系城郭技法隨處可見，展示勝家築城技術之高。', en: 'Oda-Toyotomi techniques — earthworks, dry moats, and umadashi throughout — attest to Katsuie\'s advanced fortification skills.' },
    ],
  },
  // #187 鳥羽城 — Kinki
  {
    id: 'toba',
    number: 187,
    regionId: 'kinki',
    name: { ja: '鳥羽城', zhTw: '鳥羽城', en: 'Toba Castle' },
    city: { ja: '鳥羽市', zhTw: '鳥羽市', en: 'Toba' },
    prefecture: { ja: '三重県', zhTw: '三重縣', en: 'Mie' },
    type: 'hirayama',
    designation: '県指定史跡',
    position: { x: 60, y: 64 },
    illustration: { style: 'classic', tiers: 3, color: '#6A7A8A', roofColor: '#3A4A5A' },
    goshuin: { bg: '#e8f0f5', ink: '#283a4a', seal: '#8b0000', crest: '#6A7A8A' },
    history: [
      { ja: '文禄3年(1594年)、九鬼嘉隆が鳥羽湾に面した小山に築城。大手門が海に向いた海城。', zhTw: '文祿3年(1594年)九鬼嘉隆於面向鳥羽灣的小山築城。大手門朝向海的海城。', en: 'Built in 1594 by Kuki Yoshitaka on a hill facing Toba Bay, a sea castle with its main gate opening toward the ocean.' },
      { ja: '九鬼嘉隆は織田信長・豊臣秀吉に仕えた日本最強の水軍大将として知られる。', zhTw: '九鬼嘉隆以侍奉織田信長、豐臣秀吉的日本最強水軍大將聞名。', en: 'Kuki Yoshitaka was known as Japan\'s mightiest naval commander, serving both Oda Nobunaga and Toyotomi Hideyoshi.' },
      { ja: '石田三成が建造を命じた日本最大の軍船「鬼宿丸」(日本丸)の母港でもあった。', zhTw: '也是石田三成下令建造的日本最大軍船「鬼宿丸」（日本丸）的母港。', en: 'It was also the home port of the "Oniyado-maru" (Nihon-maru), Japan\'s largest warship, ordered by Ishida Mitsunari.' },
    ],
    figures: [
      { ja: '九鬼嘉隆 — 鉄甲船（鉄板装甲の大船）を建造し、木津川口の戦いで毛利水軍を撃破した海の武将。', zhTw: '九鬼嘉隆 — 建造鐵甲船（鐵板裝甲大船），在木津川口之戰擊破毛利水軍的海之武將。', en: 'Kuki Yoshitaka — a naval warrior who built iron-clad ships and crushed the Mōri navy at the Battle of Kizugawaguchi.' },
    ],
    trivia: [
      { ja: '大手門が海に面する城は日本でも極めて珍しく、水軍城の典型として注目される。', zhTw: '大手門面海的城在日本極為罕見，作為水軍城的典型受到關注。', en: 'A castle with its main gate facing the sea is extremely rare in Japan, drawing attention as a quintessential naval fortress.' },
      { ja: '鳥羽は真珠養殖発祥の地で、御木本幸吉がこの地で世界初の真珠養殖に成功した。', zhTw: '鳥羽是珍珠養殖發祥地，御木本幸吉在此成功完成世界首次珍珠養殖。', en: 'Toba is the birthplace of pearl cultivation — Mikimoto Kōkichi achieved the world\'s first cultured pearl here.' },
    ],
    highlights: [
      { ja: '石垣と海の眺望 — 本丸跡の石垣から鳥羽湾と離島を望む海城ならではの景観。', zhTw: '石垣與海的眺望 — 從本丸跡石垣眺望鳥羽灣與離島的海城獨有景觀。', en: 'Walls and sea views — a uniquely maritime panorama of Toba Bay and offshore islands from the honmaru walls.' },
      { ja: '三の丸広場 — 城跡公園として整備され、鳥羽の歴史を学べる。', zhTw: '三之丸廣場 — 整備為城跡公園，可學習鳥羽歷史。', en: 'San-no-maru plaza — maintained as a castle ruin park where visitors can learn Toba\'s history.' },
    ],
    architecture: [
      { ja: '鳥羽湾に突き出た小山全体を城域とする海城。大手門が海側、搦手が陸側に向く。', zhTw: '以突入鳥羽灣的小山整體為城域的海城。大手門朝海側，搦手朝陸側。', en: 'A sea castle encompassing a small hill jutting into Toba Bay, with the main gate seaward and the rear gate landward.' },
    ],
  },
  // #188 佐柿国吉城 — Chubu
  {
    id: 'sagaki-kuniyoshi',
    number: 188,
    regionId: 'chubu',
    name: { ja: '佐柿国吉城', zhTw: '佐柿國吉城', en: 'Sagaki Kuniyoshi Castle' },
    city: { ja: '美浜町', zhTw: '美濱町', en: 'Mihama' },
    prefecture: { ja: '福井県', zhTw: '福井縣', en: 'Fukui' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 56, y: 52 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#7A7A5A', roofColor: '#4A4A2A' },
    goshuin: { bg: '#f5f5e0', ink: '#3d3d10', seal: '#8b0000', crest: '#7A7A5A' },
    history: [
      { ja: '弘治2年(1556年)、粟屋勝久が若狭国の要衝に築城。', zhTw: '弘治2年(1556年)粟屋勝久於若狹國要衝築城。', en: 'Built in 1556 by Awaya Katsuhisa at a strategic point in Wakasa province.' },
      { ja: '越前朝倉氏の度重なる侵攻を撃退し続け、「難攻不落の城」として名を馳せた。', zhTw: '持續擊退越前朝倉氏多次侵攻，以「難攻不落之城」揚名。', en: 'It repeatedly repelled invasions by the Echizen Asakura clan, earning fame as an "impregnable castle."' },
      { ja: '織田信長の越前攻めの際に本陣が置かれ、天下統一への重要な拠点となった。', zhTw: '織田信長越前攻略時設為本陣，成為天下統一的重要據點。', en: 'Oda Nobunaga established his headquarters here during the Echizen campaign, making it a vital base for national unification.' },
    ],
    figures: [
      { ja: '粟屋勝久 — 若狭武田氏の重臣。朝倉氏の大軍を少数の兵で何度も退けた知勇兼備の武将。', zhTw: '粟屋勝久 — 若狹武田氏重臣。以少數兵力多次擊退朝倉氏大軍的智勇兼備武將。', en: 'Awaya Katsuhisa — a Wakasa Takeda retainer who repelled Asakura armies repeatedly with a small garrison, combining wisdom and valor.' },
    ],
    trivia: [
      { ja: '2017年に若狭国吉城歴史資料館が開館し、城跡の整備が急速に進んでいる。', zhTw: '2017年若狹國吉城歷史資料館開館，城跡整備迅速推進。', en: 'The Wakasa Kuniyoshi Castle History Museum opened in 2017, accelerating site preservation efforts.' },
      { ja: '城跡からは若狭湾を一望でき、「海が見える山城」として人気が高まっている。', zhTw: '從城跡可一望若狹灣，作為「看得見海的山城」人氣日增。', en: 'The ruins offer panoramic views of Wakasa Bay, growing popular as "a mountain castle with ocean views."' },
    ],
    highlights: [
      { ja: '連郭式の曲輪群 — 山頂の主郭から尾根に沿って曲輪が連なる。', zhTw: '連郭式曲輪群 — 從山頂主郭沿稜線連綿的曲輪。', en: 'Linear baileys — enclosures extending along the ridge from the summit\'s main compound.' },
      { ja: '若狭湾の眺望 — 山頂からのリアス海岸と若狭湾の絶景。', zhTw: '若狹灣眺望 — 從山頂眺望溺灣海岸與若狹灣的絕景。', en: 'Wakasa Bay panorama — a breathtaking view of the ria coast and Wakasa Bay from the mountaintop.' },
    ],
    architecture: [
      { ja: '標高197mの城山山頂に主郭を置く山城。山麓に居館跡が残る。', zhTw: '於標高197m城山山頂設主郭的山城。山腳殘存居館跡。', en: 'A mountain castle with its main compound atop 197m Castle Hill, with residence ruins at the base.' },
    ],
  },
  // #189 鞠智城 — Kyushu
  {
    id: 'kikuchi',
    number: 189,
    regionId: 'kyushu',
    name: { ja: '鞠智城', zhTw: '鞠智城', en: 'Kikuchi Castle' },
    city: { ja: '山鹿市', zhTw: '山鹿市', en: 'Yamaga' },
    prefecture: { ja: '熊本県', zhTw: '熊本縣', en: 'Kumamoto' },
    type: 'kodai-sanjo',
    designation: '国指定史跡',
    position: { x: 23, y: 79 },
    illustration: { style: 'ancient', tiers: 1, color: '#8A7A5A', roofColor: '#5A4A2A' },
    goshuin: { bg: '#f5f0e0', ink: '#3d3810', seal: '#8b0000', crest: '#8A7A5A' },
    history: [
      { ja: '7世紀後半、白村江の戦い(663年)の敗戦後に大和朝廷が築いた古代山城。', zhTw: '7世紀後半白村江之戰(663年)戰敗後大和朝廷築造的古代山城。', en: 'An ancient mountain fortress built by the Yamato court in the late 7th century after the defeat at the Battle of Baekgang (663).' },
      { ja: '大宰府の防衛を支える兵站基地として機能し、食糧・武器の備蓄拠点だった。', zhTw: '作為支援大宰府防衛的後勤基地運作，是糧食、武器的儲備據點。', en: 'It functioned as a logistics base supporting Dazaifu\'s defense, stockpiling food and weapons.' },
      { ja: '日本書紀に「鞠智城」の名で記載される国家的防衛施設。', zhTw: '以「鞠智城」之名記載於日本書紀的國家防衛設施。', en: 'A state defense facility recorded as "Kikuchi-jō" in the Nihon Shoki chronicle.' },
    ],
    figures: [
      { ja: '天智天皇 — 白村江の敗戦後、唐・新羅の侵攻に備えて西日本各地に古代山城を築いた。', zhTw: '天智天皇 — 白村江戰敗後為防備唐、新羅侵攻在西日本各地築造古代山城。', en: 'Emperor Tenji — after Baekgang, he ordered ancient mountain fortresses across western Japan to guard against Tang and Silla invasion.' },
    ],
    trivia: [
      { ja: '復元された八角形建物が鞠智城のシンボル。古代の倉庫または見張り台と考えられている。', zhTw: '復元的八角形建物為鞠智城象徵。被認為是古代倉庫或瞭望台。', en: 'A restored octagonal building is Kikuchi\'s symbol, thought to be an ancient storehouse or watchtower.' },
      { ja: '城域は約55haと広大で、72棟の建物跡が発掘されている。', zhTw: '城域約55ha廣大，已發掘72棟建物遺跡。', en: 'The vast 55-hectare grounds have yielded the remains of 72 buildings in excavations.' },
    ],
    highlights: [
      { ja: '復元八角形建物 — 古代の鼓楼を復元した鞠智城を象徴する建造物。', zhTw: '復元八角形建物 — 復元古代鼓樓的鞠智城象徵建築。', en: 'Restored octagonal building — an iconic reconstruction of an ancient drum tower symbolizing the castle.' },
      { ja: '温故創生館 — 鞠智城の歴史と出土品を展示する資料館。', zhTw: '溫故創生館 — 展示鞠智城歷史與出土品的資料館。', en: 'Onko Sōsei-kan — a museum displaying the castle\'s history and excavated artifacts.' },
    ],
    architecture: [
      { ja: '阿蘇外輪山の丘陵上に築かれた古代山城。土塁と石垣で約3.5kmの外周を囲む。', zhTw: '建於阿蘇外輪山丘陵上的古代山城。以土壘與石垣環繞約3.5km外周。', en: 'An ancient mountain fortress on the Aso outer rim hills, its 3.5km perimeter enclosed by earthworks and stone walls.' },
      { ja: '城内に倉庫群・兵舎・工房などが配置され、大規模な軍事拠点の姿を示す。', zhTw: '城內配置倉庫群、兵舍、工坊等，展示大規模軍事據點的面貌。', en: 'Storehouses, barracks, and workshops within the walls reveal the profile of a major military base.' },
    ],
  },
  // #190 八代城 — Kyushu
  {
    id: 'yatsushiro',
    number: 190,
    regionId: 'kyushu',
    name: { ja: '八代城', zhTw: '八代城', en: 'Yatsushiro Castle' },
    city: { ja: '八代市', zhTw: '八代市', en: 'Yatsushiro' },
    prefecture: { ja: '熊本県', zhTw: '熊本縣', en: 'Kumamoto' },
    type: 'hirajiro',
    designation: '県指定史跡',
    position: { x: 22, y: 81 },
    illustration: { style: 'classic', tiers: 3, color: '#7A8A7A', roofColor: '#4A5A4A' },
    goshuin: { bg: '#e8f5e8', ink: '#2a4a2a', seal: '#8b0000', crest: '#7A8A7A' },
    history: [
      { ja: '元和8年(1622年)、加藤忠広の命で加藤正方が築城。熊本城に次ぐ肥後の重要拠点。', zhTw: '元和8年(1622年)加藤忠廣之命由加藤正方築城。僅次於熊本城的肥後重要據點。', en: 'Built in 1622 by Katō Masamasa under Katō Tadahiro\'s orders, Higo\'s second most important stronghold after Kumamoto.' },
      { ja: '一国一城令の例外として存続が認められた稀有な城。細川氏入封後も熊本藩の筆頭家老の居城となった。', zhTw: '作為一國一城令的例外被允許存續的罕見城郭。細川氏入封後也成為熊本藩首席家老的居城。', en: 'A rare exception to the one-castle edict, it remained the seat of the Kumamoto domain\'s chief retainer even after the Hosokawa took over.' },
    ],
    figures: [
      { ja: '松井興長 — 細川氏の筆頭家老として八代城を預かり、名君として治世を行った。', zhTw: '松井興長 — 作為細川氏首席家老掌管八代城，以名君進行治世。', en: 'Matsui Okinaga — as chief retainer of the Hosokawa, he governed Yatsushiro Castle wisely and justly.' },
    ],
    trivia: [
      { ja: '石垣が美しい「石の城」。特に本丸石垣の切込接ぎは熊本城に匹敵する精巧さ。', zhTw: '石垣精美的「石之城」。特別是本丸石垣的切込接ぎ精巧度堪比熊本城。', en: 'A "castle of stone" with beautiful walls — the honmaru\'s kirikomi-hagi masonry rivals Kumamoto Castle\'s precision.' },
      { ja: '八代は畳表の原料「い草」の日本一の産地で、城下町から続く伝統産業。', zhTw: '八代是榻榻米原料「藺草」的日本第一產地，延續自城下町的傳統產業。', en: 'Yatsushiro is Japan\'s top producer of "igusa" (rush) for tatami mats — a tradition from the castle town era.' },
    ],
    highlights: [
      { ja: '本丸石垣 — 切込接ぎの美しい石垣が水堀に映る姿は九州屈指の美景。', zhTw: '本丸石垣 — 切込接ぎ精美石垣映於水堀的姿態為九州首屈一指的美景。', en: 'Honmaru walls — the beautiful kirikomi-hagi walls reflected in the water moat create one of Kyūshū\'s finest vistas.' },
      { ja: '大天守台 — 5層の天守が建っていた巨大な天守台の石垣が残る。', zhTw: '大天守台 — 曾建有5層天守的巨大天守台石垣殘存。', en: 'Great tenshu-dai — the massive stone base that once supported a five-story tenshu survives.' },
    ],
    architecture: [
      { ja: '球磨川河口の低地に築かれた輪郭式平城。本丸・二の丸・三の丸を水堀が囲む。', zhTw: '建於球磨川河口低地的輪郭式平城。本丸、二之丸、三之丸被水堀環繞。', en: 'A rinkaku flatland castle on the Kuma River estuary, with water moats encircling honmaru, ni-no-maru, and san-no-maru.' },
    ],
  },
  // #191 中津城 — Kyushu
  {
    id: 'nakatsu',
    number: 191,
    regionId: 'kyushu',
    name: { ja: '中津城', zhTw: '中津城', en: 'Nakatsu Castle' },
    city: { ja: '中津市', zhTw: '中津市', en: 'Nakatsu' },
    prefecture: { ja: '大分県', zhTw: '大分縣', en: 'Oita' },
    type: 'hirajiro',
    designation: '県指定史跡',
    position: { x: 27, y: 77 },
    illustration: { style: 'classic', tiers: 3, color: '#8A8A7A', roofColor: '#5A5A4A' },
    goshuin: { bg: '#f5f5e8', ink: '#3d3d28', seal: '#8b0000', crest: '#8A8A7A' },
    history: [
      { ja: '天正16年(1588年)、黒田孝高（官兵衛/如水）が中津川河口に築城。黒田氏の豊前国経営の拠点。', zhTw: '天正16年(1588年)黑田孝高（官兵衛/如水）於中津川河口築城。黑田氏的豐前國經營據點。', en: 'Built in 1588 by Kuroda Yoshitaka (Kanbei/Josui) at the Nakatsu River mouth, the Kuroda base for governing Buzen.' },
      { ja: '日本三大水城の一つに数えられ、中津川の水を引き込んだ堀が城を守った。', zhTw: '被列為日本三大水城之一，引入中津川之水的護城河守護城郭。', en: 'Counted among Japan\'s Three Great Water Castles, its moats were fed by the Nakatsu River.' },
      { ja: '細川忠興・小笠原長次・奥平昌成と城主が変わり、奥平氏が幕末まで治めた。', zhTw: '細川忠興、小笠原長次、奧平昌成等城主更迭，奧平氏統治至幕末。', en: 'Lords changed from Hosokawa Tadaoki to Ogasawara Nagatsugu to Okudaira Masanari, with the Okudaira ruling until the Bakumatsu.' },
    ],
    figures: [
      { ja: '黒田官兵衛（孝高/如水） — 秀吉の天下取りを支えた稀代の軍師。中津城を自ら設計した。', zhTw: '黑田官兵衛（孝高/如水） — 支撐秀吉奪天下的稀代軍師。親自設計中津城。', en: 'Kuroda Kanbei (Yoshitaka/Josui) — the peerless strategist behind Hideyoshi\'s rise, who designed Nakatsu Castle himself.' },
      { ja: '福沢諭吉 — 中津藩出身の思想家・教育者。「学問のすゝめ」の著者で慶應義塾の創設者。', zhTw: '福澤諭吉 — 中津藩出身的思想家、教育家。《勸學篇》作者、慶應義塾創設者。', en: 'Fukuzawa Yukichi — a thinker and educator from Nakatsu domain, author of "An Encouragement of Learning" and founder of Keio University.' },
    ],
    trivia: [
      { ja: '黒田官兵衛が築いた石垣と細川忠興が増築した石垣で積み方が異なり、時代の違いが一目で分かる。', zhTw: '黑田官兵衛築造的石垣與細川忠興增築的石垣堆法不同，一眼可見時代差異。', en: 'Kanbei\'s original walls and Tadaoki\'s additions use different masonry styles — the era difference is visible at a glance.' },
      { ja: '福沢諭吉の旧居が城下町に残り、一万円札の肖像でも知られる。', zhTw: '福澤諭吉舊居殘存於城下町，也以一萬圓紙鈔的肖像聞名。', en: 'Fukuzawa Yukichi\'s former home remains in the castle town — he is also known as the face of the 10,000-yen note.' },
    ],
    highlights: [
      { ja: '二つの時代の石垣 — 黒田期の野面積みと細川期の打込接ぎが隣り合う珍しい光景。', zhTw: '兩個時代的石垣 — 黑田期野面積與細川期打込接相鄰的珍稀光景。', en: 'Walls of two eras — Kuroda-era nozura-zumi and Hosokawa-era uchikomi-hagi masonry side by side.' },
      { ja: '模擬天守 — 1964年に建てられた五層の模擬天守。内部は中津の歴史資料館。', zhTw: '模擬天守 — 1964年建造的五層模擬天守。內部為中津歷史資料館。', en: 'Replica tenshu — a five-story replica built in 1964, housing a museum of Nakatsu\'s history.' },
    ],
    architecture: [
      { ja: '中津川河口に築かれた水城。周防灘の潮の干満を利用した堀が特徴。', zhTw: '建於中津川河口的水城。利用周防灘潮汐的護城河為特徵。', en: 'A water castle at the Nakatsu River mouth, with moats that exploited the tides of the Suō Sea.' },
    ],
  },
  // #192 角牟礼城 — Kyushu
  {
    id: 'tsunomure',
    number: 192,
    regionId: 'kyushu',
    name: { ja: '角牟礼城', zhTw: '角牟禮城', en: 'Tsunomure Castle' },
    city: { ja: '玖珠町', zhTw: '玖珠町', en: 'Kusu' },
    prefecture: { ja: '大分県', zhTw: '大分縣', en: 'Oita' },
    type: 'yamajiro',
    designation: '県指定史跡',
    position: { x: 28, y: 78 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#7A7A6A', roofColor: '#4A4A3A' },
    goshuin: { bg: '#f5f5e8', ink: '#3d3d28', seal: '#8b0000', crest: '#7A7A6A' },
    history: [
      { ja: '弘安年間(1278-88年)、森朝通が角埋山(標高577m)に築城したと伝わる。', zhTw: '弘安年間(1278-88年)傳為森朝通於角埋山(標高577m)築城。', en: 'Traditionally built by Mori Tomomichi on 577m Mt. Tsunomure in the 1278–88 period.' },
      { ja: '豊臣秀吉の九州征伐に際し、島津軍の猛攻に耐えた難攻不落の城として知られる。', zhTw: '豐臣秀吉九州征伐之際，以承受島津軍猛攻的難攻不落之城聞名。', en: 'During Hideyoshi\'s Kyūshū campaign, it withstood fierce Shimazu attacks, earning fame as an impregnable fortress.' },
      { ja: '久留島氏（来島氏）が入封し、玖珠地方を幕末まで治めた。', zhTw: '久留島氏（來島氏）入封，統治玖珠地方至幕末。', en: 'The Kurushima (Kurushima/Kijima) clan entered and governed the Kusu area until the Bakumatsu.' },
    ],
    figures: [
      { ja: '久留島通嘉 — 久留島氏の藩主。玖珠の発展に尽力し、童話の里づくりの基盤を築いた。', zhTw: '久留島通嘉 — 久留島氏藩主。致力於玖珠的發展，奠定童話之里建設的基礎。', en: 'Kurushima Michiyoshi — a Kurushima lord who developed Kusu and laid the groundwork for its "Fairy Tale Village."' },
    ],
    trivia: [
      { ja: '玖珠町は「日本のアンデルセン」久留島武彦の出身地で、「童話の里」として知られる。', zhTw: '玖珠町是「日本的安徒生」久留島武彥的出生地，以「童話之里」聞名。', en: 'Kusu is the birthplace of Kurushima Takehiko, "Japan\'s Andersen," and is known as the "Land of Fairy Tales."' },
      { ja: 'テーブル状の独特な山容「伐株山」を背景に、風光明媚な城跡が広がる。', zhTw: '以桌狀獨特山容「伐株山」為背景，風光明媚的城跡展開。', en: 'The scenic ruins spread beneath the distinctive table-shaped Mt. Kirikabu in the background.' },
    ],
    highlights: [
      { ja: '穴太積みの石垣 — 二の丸に残る穴太衆の手による見事な石垣。', zhTw: '穴太積石垣 — 殘存於二之丸的穴太眾精美石垣。', en: 'Anō-zumi walls — superb stonework by the Anō masons surviving at the ni-no-maru.' },
      { ja: '三島公園 — 城跡が公園として整備され、久留島武彦の記念館がある。', zhTw: '三島公園 — 城跡整備為公園，設有久留島武彥紀念館。', en: 'Mishima Park — the castle ruins are maintained as a park, with a Kurushima Takehiko memorial hall.' },
    ],
    architecture: [
      { ja: '角埋山の山頂部に本丸を置く山城。二の丸の穴太積み石垣が特筆される。', zhTw: '於角埋山山頂設本丸的山城。二之丸的穴太積石垣特別值得一書。', en: 'A mountain castle with honmaru on the summit of Mt. Tsunomure; the ni-no-maru\'s Anō-style walls are particularly noteworthy.' },
    ],
  },
  // #193 臼杵城 — Kyushu
  {
    id: 'usuki',
    number: 193,
    regionId: 'kyushu',
    name: { ja: '臼杵城', zhTw: '臼杵城', en: 'Usuki Castle' },
    city: { ja: '臼杵市', zhTw: '臼杵市', en: 'Usuki' },
    prefecture: { ja: '大分県', zhTw: '大分縣', en: 'Oita' },
    type: 'hirayama',
    designation: '県指定史跡',
    position: { x: 29, y: 79 },
    illustration: { style: 'classic', tiers: 2, color: '#8A7A6A', roofColor: '#5A4A3A' },
    goshuin: { bg: '#f5f0e8', ink: '#3d3828', seal: '#8b0000', crest: '#8A7A6A' },
    history: [
      { ja: '永禄5年(1562年)、大友宗麟が臼杵湾の丹生島（海に浮かぶ岩山）に築城。', zhTw: '永祿5年(1562年)大友宗麟於臼杵灣的丹生島（浮於海上的岩山）築城。', en: 'Built in 1562 by Ōtomo Sōrin on Niujima, a rocky island floating in Usuki Bay.' },
      { ja: '大友宗麟はキリシタン大名の代表格で、臼杵はキリスト教文化の中心地となった。', zhTw: '大友宗麟為基督徒大名的代表，臼杵成為基督教文化的中心地。', en: 'Ōtomo Sōrin was the quintessential Christian daimyō, and Usuki became a center of Christian culture.' },
      { ja: '島津軍の侵攻に際し、ポルトガルから入手した大砲「国崩し」で応戦した逸話が有名。', zhTw: '島津軍侵攻之際以從葡萄牙入手的大砲「國崩」應戰的逸話聞名。', en: 'Famous for using "Kunizushi" — a cannon acquired from Portugal — to repel a Shimazu invasion.' },
    ],
    figures: [
      { ja: '大友宗麟 — 豊後の王として九州に覇を唱えたキリシタン大名。洗礼名フランシスコ。', zhTw: '大友宗麟 — 作為豐後之王稱霸九州的基督徒大名。洗禮名法蘭西斯科。', en: 'Ōtomo Sōrin — a Christian daimyō who reigned over Kyūshū as the "King of Bungo," baptized as Francisco.' },
    ],
    trivia: [
      { ja: '臼杵石仏（国宝）は大友氏時代に造られた磨崖仏群で、城下町の文化的深層を物語る。', zhTw: '臼杵石佛（國寶）是大友氏時代製造的磨崖佛群，述說城下町的文化深層。', en: 'Usuki Stone Buddhas (National Treasure) — cliff-carved Buddhas from the Ōtomo era, testifying to the castle town\'s cultural depth.' },
      { ja: '干拓により陸続きになったが、かつては海に浮かぶ島城で「丹生島城」とも呼ばれた。', zhTw: '因圍墾變為陸連，但過去是浮於海上的島城，也稱「丹生島城」。', en: 'Land reclamation connected it to the mainland, but it was once an island castle known as "Niujima-jō."' },
    ],
    highlights: [
      { ja: '畳櫓 — 現存する二重櫓で、臼杵城唯一の現存建造物。', zhTw: '畳櫓 — 現存的二重櫓，臼杵城唯一的現存建築。', en: 'Tatami Yagura — a surviving two-story turret, the only original structure remaining at Usuki Castle.' },
      { ja: '大門櫓 — 復元された城の正門で、臼杵の街並みを見下ろす。', zhTw: '大門櫓 — 復元的城正門，俯瞰臼杵街景。', en: 'Daimon Yagura — a restored main gate overlooking the streets of Usuki.' },
    ],
    architecture: [
      { ja: '臼杵湾に浮かぶ丹生島全体を城域とした海城。三方を海に囲まれた天然の要害。', zhTw: '以浮於臼杵灣的丹生島整體為城域的海城。三面被海環繞的天然要害。', en: 'A sea castle encompassing the entire island of Niujima in Usuki Bay, naturally defended by ocean on three sides.' },
    ],
  },
  // #194 佐伯城 — Kyushu
  {
    id: 'saiki',
    number: 194,
    regionId: 'kyushu',
    name: { ja: '佐伯城', zhTw: '佐伯城', en: 'Saiki Castle' },
    city: { ja: '佐伯市', zhTw: '佐伯市', en: 'Saiki' },
    prefecture: { ja: '大分県', zhTw: '大分縣', en: 'Oita' },
    type: 'yamajiro',
    designation: '県指定史跡',
    position: { x: 30, y: 80 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#6A7A6A', roofColor: '#3A4A3A' },
    goshuin: { bg: '#e8f5e8', ink: '#2a4a2a', seal: '#8b0000', crest: '#6A7A6A' },
    history: [
      { ja: '慶長7年(1602年)、毛利高政が番匠川を見下ろす城山(標高144m)に築城。', zhTw: '慶長7年(1602年)毛利高政於俯瞰番匠川的城山(標高144m)築城。', en: 'Built in 1602 by Mōri Takamasa on 144m Castle Hill overlooking the Banshō River.' },
      { ja: '毛利氏が12代にわたって佐伯2万石を治め、幕末まで続いた。', zhTw: '毛利氏12代統治佐伯2萬石，延續至幕末。', en: 'The Mōri governed Saiki\'s 20,000 koku for 12 generations until the Bakumatsu.' },
      { ja: '山上に本丸、山麓に御殿（三の丸）を持つ山城と平城を組み合わせた構造。', zhTw: '山上有本丸、山腳有御殿（三之丸），結合山城與平城的構造。', en: 'A hybrid structure combining a mountain fortress (honmaru on the summit) with a flatland palace (san-no-maru at the base).' },
    ],
    figures: [
      { ja: '毛利高政 — 豊臣秀吉・徳川家康に仕え、佐伯藩の基盤を築いた初代藩主。', zhTw: '毛利高政 — 侍奉豐臣秀吉、德川家康，奠定佐伯藩基礎的初代藩主。', en: 'Mōri Takamasa — serving both Hideyoshi and Ieyasu, the first lord who laid Saiki domain\'s foundations.' },
    ],
    trivia: [
      { ja: '佐伯は「佐伯寿司」で有名な寿司の街。城下町の食文化が今も根付く。', zhTw: '佐伯以「佐伯壽司」聞名的壽司之街。城下町的飲食文化至今紮根。', en: 'Saiki is a sushi town famous for "Saiki sushi," with castle-town food culture still alive today.' },
      { ja: '登城路は「登城の道」として整備され、約20分の登山で本丸に到達できる。', zhTw: '登城路整備為「登城之道」，約20分鐘登山可到達本丸。', en: 'The approach is maintained as the "Path of Ascent," reaching the honmaru in about a 20-minute climb.' },
    ],
    highlights: [
      { ja: '三の丸御門（櫓門） — 山麓に残る現存櫓門。佐伯市の文化財。', zhTw: '三之丸御門（櫓門） — 殘存於山腳的現存櫓門。佐伯市文化財。', en: 'San-no-maru Gomon (Yagura-mon) — a surviving gate-tower at the base, a Saiki City cultural property.' },
      { ja: '本丸からの眺望 — 番匠川と佐伯市街、豊後水道を望む絶景。', zhTw: '本丸眺望 — 眺望番匠川與佐伯市街、豐後水道的絕景。', en: 'Honmaru views — a stunning panorama of the Banshō River, Saiki city, and the Bungo Channel.' },
    ],
    architecture: [
      { ja: '城山山頂に本丸、中腹に二の丸、山麓に三の丸御殿を配した山城。', zhTw: '城山山頂設本丸、中腹設二之丸、山腳配置三之丸御殿的山城。', en: 'A mountain castle with honmaru on the summit, ni-no-maru mid-slope, and san-no-maru palace at the base.' },
      { ja: '石垣は廃城後に一部崩されたが、本丸周辺の石垣が良好に残る。', zhTw: '石垣於廢城後部分被毀，但本丸周邊石垣保存良好。', en: 'Some walls were dismantled after abandonment, but those around the honmaru survive in good condition.' },
    ],
  },
  // #195 延岡城 — Kyushu
  {
    id: 'nobeoka',
    number: 195,
    regionId: 'kyushu',
    name: { ja: '延岡城', zhTw: '延岡城', en: 'Nobeoka Castle' },
    city: { ja: '延岡市', zhTw: '延岡市', en: 'Nobeoka' },
    prefecture: { ja: '宮崎県', zhTw: '宮崎縣', en: 'Miyazaki' },
    type: 'hirayama',
    designation: '県指定史跡',
    position: { x: 27, y: 82 },
    illustration: { style: 'ruins', tiers: 1, color: '#7A8A6A', roofColor: '#4A5A3A' },
    goshuin: { bg: '#f0f5e8', ink: '#2a3a1a', seal: '#8b0000', crest: '#7A8A6A' },
    history: [
      { ja: '慶長8年(1603年)、高橋元種が五ヶ瀬川と大瀬川の合流点に築城。', zhTw: '慶長8年(1603年)高橋元種於五瀨川與大瀨川匯流點築城。', en: 'Built in 1603 by Takahashi Mototane at the confluence of the Gokase and Ōse rivers.' },
      { ja: '有馬直純・三浦明敬・牧野貞成と城主が変わり、内藤氏が7万石で幕末まで治めた。', zhTw: '有馬直純、三浦明敬、牧野貞成等城主更迭，內藤氏以7萬石統治至幕末。', en: 'Lords changed from Arima to Miura to Makino, with the Naitō clan governing 70,000 koku until the Bakumatsu.' },
      { ja: '西南戦争の激戦地となり、西郷軍と政府軍が城下で激突した。', zhTw: '成為西南戰爭激戰地，西鄉軍與政府軍在城下激烈交戰。', en: 'A fierce battleground during the Satsuma Rebellion, where Saigō\'s forces clashed with government troops below the castle.' },
    ],
    figures: [
      { ja: '内藤政挙 — 最後の延岡藩主。廃藩後も延岡の教育・産業振興に尽力した名君。', zhTw: '內藤政舉 — 最後的延岡藩主。廢藩後也致力於延岡的教育、產業振興的名君。', en: 'Naitō Masataka — the last Nobeoka lord, who devoted himself to education and industry even after the domain was abolished.' },
    ],
    trivia: [
      { ja: '「千人殺しの石垣」と呼ばれる高さ22mの石垣は、要石を一つ外すと全体が崩れる伝説がある。', zhTw: '被稱為「千人殺石垣」的高22m石垣，傳說拔掉一個關鍵石整體就會崩塌。', en: 'The 22m-tall "Sennin-goroshi" (Thousand-Killer) wall is said to collapse entirely if one keystone is removed.' },
      { ja: '西南戦争の際、延岡城は西郷隆盛最後の本営となった。', zhTw: '西南戰爭之際延岡城成為西鄉隆盛最後的本營。', en: 'During the Satsuma Rebellion, Nobeoka Castle served as Saigō Takamori\'s final headquarters.' },
    ],
    highlights: [
      { ja: '千人殺しの石垣 — 高さ22mの巨大な石垣。延岡城最大の見どころ。', zhTw: '千人殺石垣 — 高22m的巨大石垣。延岡城最大看點。', en: 'Sennin-goroshi wall — a 22m-tall massive stone wall, Nobeoka Castle\'s greatest attraction.' },
      { ja: '北大手門 — 復元された城の正門で、石垣と調和した姿が美しい。', zhTw: '北大手門 — 復元的城正門，與石垣調和的姿態優美。', en: 'Kita Ōte-mon — the restored main gate, its form beautifully harmonizing with the stone walls.' },
    ],
    architecture: [
      { ja: '五ヶ瀬川と大瀬川の合流点の丘陵上に築かれた平山城。天然の水堀に守られた。', zhTw: '建於五瀨川與大瀨川匯流點丘陵上的平山城。受天然水堀守護。', en: 'A hilltop castle on a hill at the confluence of the Gokase and Ōse rivers, protected by natural water moats.' },
      { ja: '本丸・二の丸・三の丸が段状に配置され、高石垣が随所に築かれている。', zhTw: '本丸、二之丸、三之丸階梯狀配置，高石垣隨處築造。', en: 'Honmaru, ni-no-maru, and san-no-maru arranged in tiers, with tall stone walls built throughout.' },
    ],
  },
  // #196 佐土原城 — Kyushu
  {
    id: 'sadowara',
    number: 196,
    regionId: 'kyushu',
    name: { ja: '佐土原城', zhTw: '佐土原城', en: 'Sadowara Castle' },
    city: { ja: '宮崎市', zhTw: '宮崎市', en: 'Miyazaki' },
    prefecture: { ja: '宮崎県', zhTw: '宮崎縣', en: 'Miyazaki' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 26, y: 83 },
    illustration: { style: 'mansion', tiers: 1, color: '#8A7A6A', roofColor: '#5A4A3A' },
    goshuin: { bg: '#f5f0e8', ink: '#3d3828', seal: '#8b0000', crest: '#8A7A6A' },
    history: [
      { ja: '建武年間(1334-38年)、田島氏が築城したと伝わる。後に伊東氏の居城となった。', zhTw: '建武年間(1334-38年)傳為田島氏築城。後成為伊東氏居城。', en: 'Traditionally built by the Tajima clan in 1334–38; it later became the seat of the Itō clan.' },
      { ja: '島津氏の日向侵攻で島津の手に渡り、島津家久が入城して佐土原藩の基盤を築いた。', zhTw: '島津氏日向侵攻中轉入島津手中，島津家久入城奠定佐土原藩基礎。', en: 'It fell to the Shimazu during their Hyūga invasion; Shimazu Iehisa entered and laid the foundations of Sadowara domain.' },
      { ja: '島津氏の支藩として幕末まで存続し、山上の城と山麓の御殿で構成された。', zhTw: '作為島津氏支藩存續至幕末，由山上的城與山腳的御殿構成。', en: 'It survived as a Shimazu branch domain until the Bakumatsu, composed of a hilltop castle and a base palace.' },
    ],
    figures: [
      { ja: '島津家久 — 島津四兄弟の末弟。耳川の戦い・沖田畷の戦いで軍功を挙げた名将。', zhTw: '島津家久 — 島津四兄弟的么弟。在耳川之戰、沖田畷之戰中立下軍功的名將。', en: 'Shimazu Iehisa — the youngest of four Shimazu brothers, distinguished at the Battles of Mimigawa and Okitanawate.' },
    ],
    trivia: [
      { ja: '佐土原人形は江戸時代から続く伝統工芸で、城下町の文化を今に伝える。', zhTw: '佐土原人偶是江戶時代延續的傳統工藝，將城下町文化傳承至今。', en: 'Sadowara dolls, a traditional craft since the Edo period, carry forward the castle town\'s culture.' },
      { ja: '2006年の発掘で山頂部から天守台の石垣が発見され、天守の存在が確認された。', zhTw: '2006年發掘中從山頂發現天守台石垣，確認天守的存在。', en: 'In 2006, excavations on the hilltop uncovered tenshu-dai stone walls, confirming the existence of a keep.' },
    ],
    highlights: [
      { ja: '鶴松館 — 山麓に復元された御殿建築で、佐土原藩の歴史を展示。', zhTw: '鶴松館 — 山腳復元的御殿建築，展示佐土原藩歷史。', en: 'Tsurushō-kan — a restored palace at the base, exhibiting Sadowara domain\'s history.' },
      { ja: '山上の城跡 — 天守台跡と曲輪群が山頂に残り、日向灘を一望できる。', zhTw: '山上城跡 — 天守台跡與曲輪群殘存於山頂，可一望日向灘。', en: 'Hilltop ruins — tenshu-dai remains and baileys on the summit, with views of the Hyūga Sea.' },
    ],
    architecture: [
      { ja: '城山(標高70m)山頂に本丸、山麓に御殿を配した山城。山上と山麓の二元構造。', zhTw: '城山(標高70m)山頂設本丸、山腳配置御殿的山城。山上與山腳的二元構造。', en: 'A mountain castle with honmaru on 70m Castle Hill and a palace at the base — a dual summit-and-valley structure.' },
    ],
  },
  // #197 志布志城 — Kyushu
  {
    id: 'shibushi',
    number: 197,
    regionId: 'kyushu',
    name: { ja: '志布志城', zhTw: '志布志城', en: 'Shibushi Castle' },
    city: { ja: '志布志市', zhTw: '志布志市', en: 'Shibushi' },
    prefecture: { ja: '鹿児島県', zhTw: '鹿兒島縣', en: 'Kagoshima' },
    type: 'yamajiro',
    designation: '県指定史跡',
    position: { x: 25, y: 85 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#6A7A5A', roofColor: '#3A4A2A' },
    goshuin: { bg: '#f0f5e8', ink: '#2a3a1a', seal: '#8b0000', crest: '#6A7A5A' },
    history: [
      { ja: '南北朝時代に築城されたと推定される。志布志湾を見下ろす複合的な山城群。', zhTw: '推定築於南北朝時代。俯瞰志布志灣的複合山城群。', en: 'Estimated to have been built in the Nanboku-chō period, a complex of mountain fortresses overlooking Shibushi Bay.' },
      { ja: '楡井氏・畠山氏・新納氏・肝付氏と領主が変わり、最終的に島津氏の支配下に入った。', zhTw: '楡井氏、畠山氏、新納氏、肝付氏等領主更迭，最終進入島津氏支配。', en: 'Lords changed from Nirei to Hatakeyama to Niiro to Kimotsuki, ultimately falling under Shimazu control.' },
      { ja: '内城・松尾城・高城・新城の4つの城が連結した大規模な城郭群。', zhTw: '內城、松尾城、高城、新城4座城連結的大規模城郭群。', en: 'A large-scale castle complex linking four forts: Uchi-jō, Matsuo-jō, Taka-jō, and Shin-jō.' },
    ],
    figures: [
      { ja: '新納忠元 — 「鬼武蔵」と呼ばれた島津氏の猛将。志布志を拠点に大隅を支配した。', zhTw: '新納忠元 — 被稱為「鬼武藏」的島津氏猛將。以志布志為據點支配大隅。', en: 'Niiro Tadamoto — the fierce "Demon of Musashi" of the Shimazu, who controlled Ōsumi from Shibushi.' },
    ],
    trivia: [
      { ja: '南九州特有のシラス台地を削り込んだ空堀群は日本最大級の規模を誇る。', zhTw: '削入南九州特有白砂台地的空堀群規模為日本最大級。', en: 'The dry moats carved into Shirasu (volcanic ash) plateaus unique to southern Kyūshū are among Japan\'s largest.' },
      { ja: '志布志市は「志布志市志布志町志布志」という日本一長い住所で話題になった。', zhTw: '志布志市以「志布志市志布志町志布志」的日本最長地址成為話題。', en: 'Shibushi City became famous for having Japan\'s longest address: "Shibushi-shi Shibushi-chō Shibushi."' },
    ],
    highlights: [
      { ja: 'シラス台地の空堀 — 深さ10m以上の巨大な空堀群が圧巻。シラスの白い断面が美しい。', zhTw: '白砂台地空堀 — 深10m以上的巨大空堀群壓卷。白砂白色斷面優美。', en: 'Shirasu dry moats — massive karabori over 10m deep are stunning, with beautiful white volcanic ash cross-sections.' },
      { ja: '内城の曲輪群 — 主郭を中心に多数の曲輪が放射状に配置された精緻な縄張り。', zhTw: '內城曲輪群 — 以主郭為中心多數曲輪放射狀配置的精緻繩張。', en: 'Uchi-jō baileys — a meticulous layout with multiple enclosures radiating from the main compound.' },
    ],
    architecture: [
      { ja: 'シラス台地の丘陵群に築かれた複合的山城群。4つの独立した城が尾根続きで連結する。', zhTw: '建於白砂台地丘陵群的複合山城群。4座獨立城郭以稜線連結。', en: 'A complex of mountain castles on Shirasu plateau hills — four independent forts linked along ridgelines.' },
      { ja: 'シラスの柔らかさを利用した深い空堀と急峻な切岸が特徴。', zhTw: '利用白砂柔軟度的深空堀與急峻切岸為特徵。', en: 'Characterized by deep dry moats and sheer cliff-cuts exploiting the softness of Shirasu volcanic ash.' },
    ],
  },
  // #198 知覧城 — Kyushu
  {
    id: 'chiran',
    number: 198,
    regionId: 'kyushu',
    name: { ja: '知覧城', zhTw: '知覽城', en: 'Chiran Castle' },
    city: { ja: '南九州市', zhTw: '南九州市', en: 'Minamikyūshū' },
    prefecture: { ja: '鹿児島県', zhTw: '鹿兒島縣', en: 'Kagoshima' },
    type: 'yamajiro',
    designation: '国指定史跡',
    position: { x: 23, y: 86 },
    illustration: { style: 'yamashiro', tiers: 1, color: '#7A7A5A', roofColor: '#4A4A2A' },
    goshuin: { bg: '#f5f5e0', ink: '#3d3d10', seal: '#8b0000', crest: '#7A7A5A' },
    history: [
      { ja: '鎌倉時代、知覧忠信が築城したと伝わる。シラス台地を利用した南九州の典型的山城。', zhTw: '鎌倉時代傳為知覽忠信築城。利用白砂台地的南九州典型山城。', en: 'Traditionally built by Chiran Tadanobu in the Kamakura period, a typical southern Kyūshū mountain castle exploiting Shirasu plateaus.' },
      { ja: '佐多氏（島津氏の分家）が代々支配し、薩摩藩の外城制度の下で幕末まで続いた。', zhTw: '佐多氏（島津氏分家）代代支配，在薩摩藩外城制度下延續至幕末。', en: 'The Sata (a Shimazu branch) governed for generations under the Satsuma domain\'s outer-castle system until the Bakumatsu.' },
    ],
    figures: [
      { ja: '佐多氏 — 知覧を代々治めた島津分家。武家屋敷群の美しい庭園を造営した。', zhTw: '佐多氏 — 代代治理知覽的島津分家。營造武家屋敷群的優美庭園。', en: 'The Sata clan — a Shimazu branch that ruled Chiran for generations, building the beautiful samurai residence gardens.' },
    ],
    trivia: [
      { ja: '知覧武家屋敷群の庭園は国の名勝に指定され、「薩摩の小京都」と呼ばれる。', zhTw: '知覽武家屋敷群庭園被指定為國家名勝，被稱為「薩摩的小京都」。', en: 'Chiran\'s samurai garden district is a national scenic site, called "the Little Kyoto of Satsuma."' },
      { ja: '太平洋戦争末期の特攻基地として知られ、知覧特攻平和会館が戦争の悲劇を伝える。', zhTw: '以太平洋戰爭末期特攻基地聞名，知覽特攻和平會館傳達戰爭悲劇。', en: 'Known as a kamikaze base in the final days of WWII; the Chiran Peace Museum commemorates the war\'s tragedy.' },
    ],
    highlights: [
      { ja: 'シラスの空堀群 — 深さ10-15mの空堀が曲輪を区切る壮大な景観。', zhTw: '白砂空堀群 — 深10-15m的空堀區隔曲輪的壯觀景觀。', en: 'Shirasu dry moats — moats 10–15m deep dividing the baileys in a magnificent landscape.' },
      { ja: '本丸跡 — シラス台地上の広い本丸跡から開聞岳を望む。', zhTw: '本丸跡 — 從白砂台地上廣闊的本丸跡眺望開聞岳。', en: 'Honmaru ruins — wide honmaru grounds on the Shirasu plateau, with views of Mt. Kaimon.' },
    ],
    architecture: [
      { ja: 'シラス台地を深く掘り込んだ空堀で区画された連郭式山城。5つの曲輪が連なる。', zhTw: '以深掘白砂台地的空堀區劃的連郭式山城。5個曲輪相連。', en: 'A renkaku mountain castle with baileys partitioned by deep moats carved into Shirasu plateaus, five enclosures in a chain.' },
      { ja: '南九州に特徴的な「群郭式」の縄張りで、各曲輪が独立した防御力を持つ。', zhTw: '南九州特徵的「群郭式」繩張，各曲輪擁有獨立防禦力。', en: 'A "gunraku-shiki" layout typical of southern Kyūshū, with each bailey independently defensible.' },
    ],
  },
  // #199 座喜味城 — Kyushu (Okinawa)
  {
    id: 'zakimi',
    number: 199,
    regionId: 'kyushu',
    name: { ja: '座喜味城', zhTw: '座喜味城', en: 'Zakimi Castle' },
    city: { ja: '読谷村', zhTw: '讀谷村', en: 'Yomitan' },
    prefecture: { ja: '沖縄県', zhTw: '沖繩縣', en: 'Okinawa' },
    type: 'gusuku',
    designation: '世界遺産',
    position: { x: 18, y: 92 },
    illustration: { style: 'gusuku', tiers: 1, color: '#C8B896', roofColor: '#A09070' },
    goshuin: { bg: '#f5f0e0', ink: '#3d3810', seal: '#8b0000', crest: '#C8B896' },
    history: [
      { ja: '15世紀初頭、護佐丸が築城。琉球王国の築城名人として名高い按司の傑作。', zhTw: '15世紀初護佐丸築城。琉球王國築城名人、享有盛名的按司的傑作。', en: 'Built in the early 15th century by Gosamaru, a masterpiece of the aji (lord) famed as Ryūkyū\'s greatest castle-builder.' },
      { ja: '護佐丸は座喜味城を築いた後、中城城へ移り、座喜味城は廃城となった。', zhTw: '護佐丸築座喜味城後移往中城城，座喜味城廢城。', en: 'Gosamaru later moved to Nakagusuku Castle, and Zakimi was abandoned.' },
      { ja: '2000年に「琉球王国のグスク及び関連遺産群」の一つとしてユネスコ世界遺産に登録。', zhTw: '2000年以「琉球王國城堡及相關遺產群」之一登錄為聯合國教科文組織世界遺產。', en: 'Inscribed as a UNESCO World Heritage Site in 2000 as part of "Gusuku Sites and Related Properties of the Kingdom of Ryūkyū."' },
    ],
    figures: [
      { ja: '護佐丸 — 琉球王国随一の築城名人。座喜味城・中城城を築いた伝説的按司。', zhTw: '護佐丸 — 琉球王國首屈一指的築城名人。築造座喜味城、中城城的傳奇按司。', en: 'Gosamaru — Ryūkyū\'s foremost castle-builder, the legendary aji who constructed both Zakimi and Nakagusuku.' },
    ],
    trivia: [
      { ja: '沖縄のグスクで最も美しい曲線の石垣を持つとされ、「グスクの華」と呼ばれる。', zhTw: '被認為擁有沖繩城堡中最美曲線石垣，被稱為「城堡之華」。', en: 'Said to have the most beautiful curved walls of any Okinawan gusuku, called the "Flower of Gusuku."' },
      { ja: '第二次世界大戦中は日本軍の高射砲陣地として使用され、戦後は米軍のレーダー基地となった。', zhTw: '第二次世界大戰中被日軍用作高射砲陣地，戰後成為美軍雷達基地。', en: 'Used as a Japanese anti-aircraft position in WWII, it later became a U.S. military radar base.' },
      { ja: '沖縄の世界遺産グスクの中で唯一、入場無料で24時間見学可能。', zhTw: '沖繩世界遺產城堡中唯一免費入場、24小時可參觀。', en: 'The only World Heritage gusuku in Okinawa that is free and accessible 24 hours a day.' },
    ],
    highlights: [
      { ja: '曲線美の石垣 — 琉球石灰岩の相方積み石垣が描く優雅な曲線美は沖縄随一。', zhTw: '曲線美石垣 — 琉球石灰岩相方積石垣描繪的優雅曲線美為沖繩第一。', en: 'Curved wall beauty — the elegant curves of aibata-zumi limestone walls are Okinawa\'s finest.' },
      { ja: 'アーチ門 — 沖縄最古の石造アーチ門。精巧な楔石の技術が見られる。', zhTw: '拱門 — 沖繩最古老的石造拱門。可見精巧的楔石技術。', en: 'Arch gate — Okinawa\'s oldest stone arch gate, showcasing exquisite keystone craftsmanship.' },
      { ja: '城壁上からの眺望 — 東シナ海と読谷の海岸線を一望する絶景の夕日スポット。', zhTw: '城牆上眺望 — 一望東海與讀谷海岸線的絕景夕陽景點。', en: 'Wall-top views — a stunning sunset spot overlooking the East China Sea and Yomitan\'s coastline.' },
    ],
    architecture: [
      { ja: '標高127mの丘陵上に築かれた二重の城壁を持つグスク。琉球石灰岩の相方積み。', zhTw: '建於標高127m丘陵上擁有雙重城壁的城堡。琉球石灰岩相方積。', en: 'A gusuku with double walls on a 127m hill, built with Ryūkyūan limestone in aibata-zumi style.' },
      { ja: '二の郭と一の郭が連結する構造。各郭にアーチ門を持つ琉球独自の城郭建築。', zhTw: '二之郭與一之郭連結的構造。各郭擁有拱門的琉球獨自城郭建築。', en: 'A structure linking two enclosures, each with its own arch gate — uniquely Ryūkyūan castle architecture.' },
    ],
  },
  // #200 勝連城 — Kyushu (Okinawa)
  {
    id: 'katsuren',
    number: 200,
    regionId: 'kyushu',
    name: { ja: '勝連城', zhTw: '勝連城', en: 'Katsuren Castle' },
    city: { ja: 'うるま市', zhTw: '宇流麻市', en: 'Uruma' },
    prefecture: { ja: '沖縄県', zhTw: '沖繩縣', en: 'Okinawa' },
    type: 'gusuku',
    designation: '世界遺産',
    position: { x: 19, y: 93 },
    illustration: { style: 'gusuku', tiers: 1, color: '#D0C8A0', roofColor: '#B0A880' },
    goshuin: { bg: '#f5f0e0', ink: '#3d3810', seal: '#8b0000', crest: '#D0C8A0' },
    history: [
      { ja: '13世紀頃に築城されたと推定される。勝連半島の丘陵上に築かれた壮大なグスク。', zhTw: '推定13世紀左右築城。建於勝連半島丘陵上的壯大城堡。', en: 'Estimated to have been built around the 13th century, a magnificent gusuku on a hill of the Katsuren Peninsula.' },
      { ja: '阿麻和利が最後の城主として繁栄を極めたが、琉球王府に滅ぼされた。', zhTw: '阿麻和利作為最後城主極盡繁榮，但被琉球王府所滅。', en: 'Amawari, the last lord, brought the castle to its zenith, but was destroyed by the Ryūkyū royal court.' },
      { ja: '2000年にユネスコ世界遺産に登録。琉球の歴史を語る上で欠かせないグスク。', zhTw: '2000年登錄為聯合國教科文組織世界遺產。述說琉球歷史不可或缺的城堡。', en: 'A UNESCO World Heritage Site since 2000, an indispensable gusuku for understanding Ryūkyūan history.' },
    ],
    figures: [
      { ja: '阿麻和利 — 勝連按司。海外貿易で財力を蓄え、琉球王府に反旗を翻した野心的な按司。', zhTw: '阿麻和利 — 勝連按司。以海外貿易積蓄財力，對琉球王府叛旗的野心按司。', en: 'Amawari — the Katsuren aji who amassed wealth through overseas trade and raised a rebellion against the Ryūkyū court.' },
      { ja: '百度踏揚 — 琉球国王の娘で阿麻和利の妻。夫の謀反を王府に密告した悲劇の王女。', zhTw: '百度踏揚 — 琉球國王之女、阿麻和利之妻。向王府密告丈夫謀反的悲劇王女。', en: 'Momoto Fumiagari — a Ryūkyū princess and Amawari\'s wife, who tragically informed the court of her husband\'s plot.' },
    ],
    trivia: [
      { ja: '発掘調査で中国・日本・東南アジアの陶磁器やローマ帝国のコインが出土し、国際交易拠点だったことが判明。', zhTw: '發掘調查出土中國、日本、東南亞陶瓷器及羅馬帝國硬幣，證實為國際交易據點。', en: 'Excavations yielded Chinese, Japanese, and Southeast Asian ceramics plus Roman coins — proof of an international trading hub.' },
      { ja: '組踊「二童敵討」は阿麻和利の物語を題材とした琉球古典芸能の傑作。', zhTw: '組踊《二童敵討》是以阿麻和利故事為題材的琉球古典藝能傑作。', en: 'The kumiodori "Nidō Tekiuchi" is a masterpiece of classical Ryūkyūan performing arts based on Amawari\'s story.' },
      { ja: '城跡からは中城湾と太平洋を一望でき、沖縄で最も眺望が美しいグスクとされる。', zhTw: '從城跡可一望中城灣與太平洋，被認為是沖繩眺望最美的城堡。', en: 'The ruins offer panoramic views of Nakagusuku Bay and the Pacific, considered Okinawa\'s most beautiful gusuku vista.' },
    ],
    highlights: [
      { ja: '一の曲輪からの絶景 — 最高所からの360度パノラマ。中城湾・太平洋・知念半島を一望。', zhTw: '一之曲輪絕景 — 最高處的360度全景。一望中城灣、太平洋、知念半島。', en: 'Ichi-no-kuruwa panorama — a 360-degree view from the highest point, sweeping Nakagusuku Bay, the Pacific, and Chinen Peninsula.' },
      { ja: '石垣の曲線美 — 琉球石灰岩の美しい曲線を描く城壁が丘陵に沿って連なる。', zhTw: '石垣曲線美 — 琉球石灰岩描繪美麗曲線的城壁沿丘陵連綿。', en: 'Curved wall artistry — limestone walls tracing beautiful curves along the hillside.' },
      { ja: '四の曲輪 — 城の入口にあたる広い曲輪で、石畳の道が往時の威厳を伝える。', zhTw: '四之曲輪 — 城入口的寬廣曲輪，石板路傳達往日威嚴。', en: 'Yon-no-kuruwa — the broad entrance bailey, where stone-paved roads convey the grandeur of old.' },
    ],
    architecture: [
      { ja: '勝連半島の丘陵(標高約100m)に築かれた5つの曲輪からなるグスク。階段状に曲輪が連なる。', zhTw: '建於勝連半島丘陵(標高約100m)由5個曲輪組成的城堡。曲輪階梯狀相連。', en: 'A gusuku of five enclosures on a 100m hill of the Katsuren Peninsula, with baileys cascading in tiers.' },
      { ja: '最上部の一の曲輪から海に向かって段々に曲輪が広がる独特の縄張り。', zhTw: '從最上部一之曲輪向海方向曲輪層層展開的獨特繩張。', en: 'A unique layout with baileys spreading downhill toward the sea from the topmost ichi-no-kuruwa.' },
      { ja: '石灰岩の野面積み石垣が主体で、上部の曲輪ほど精巧な積み方が用いられている。', zhTw: '以石灰岩野面積石垣為主，越上部的曲輪使用越精巧的堆法。', en: 'Primarily nozura-zumi limestone walls, with increasingly refined masonry toward the upper enclosures.' },
    ],
  },
].sort((a, b) => a.number - b.number);
