import type { Recipe } from "#/types/recipe";

export const RECIPES: Recipe[] = [
  {
    id: "1",
    title: "豚の角煮",
    description:
      "じっくり煮込んだとろとろの豚バラ肉。甘辛いタレが染み込み、口の中でほろりと崩れる本格的な角煮です。特別な日のおもてなしにも、日常の食卓にも映える一品。",
    category: "和食",
    tags: ["おもてなし", "煮込み料理", "豚肉", "甘辛"],
    servings: 4,
    cookingTime: 120,
    prepTime: 20,
    difficulty: "普通",
    image: "",
    imageGradient: "from-amber-800 via-orange-700 to-amber-600",
    imageEmoji: "🥩",
    ingredients: [
      { name: "豚バラブロック", amount: "600", unit: "g", group: "メイン食材" },
      { name: "生姜", amount: "1", unit: "かけ", group: "メイン食材" },
      {
        name: "長ネギ（青い部分）",
        amount: "1",
        unit: "本",
        group: "メイン食材",
      },
      { name: "醤油", amount: "大さじ4", unit: "", group: "調味料" },
      { name: "みりん", amount: "大さじ4", unit: "", group: "調味料" },
      { name: "砂糖", amount: "大さじ2", unit: "", group: "調味料" },
      { name: "酒", amount: "大さじ4", unit: "", group: "調味料" },
      { name: "水", amount: "400", unit: "ml", group: "調味料" },
      {
        name: "ゆで卵",
        amount: "4",
        unit: "個",
        note: "お好みで",
        group: "トッピング",
      },
      {
        name: "小松菜",
        amount: "1",
        unit: "束",
        note: "お好みで",
        group: "トッピング",
      },
    ],
    steps: [
      {
        order: 1,
        description:
          "豚バラ肉を5cm角に切り、熱したフライパンで表面をしっかり焼き色がつくまで焼く。",
        tip: "焼き色をつけることで余分な脂が落ち、香ばしさも増します",
        duration: 10,
      },
      {
        order: 2,
        description:
          "鍋に焼いた豚肉、生姜スライス、長ネギを入れ、かぶる程度の水（分量外）を加えて1時間ほど下ゆでする。",
        duration: 60,
      },
      {
        order: 3,
        description: "ゆでた豚肉を取り出し、水洗いして余分な脂と灰汁を落とす。",
        tip: "しっかり洗うことで臭みが取れます",
        duration: 5,
      },
      {
        order: 4,
        description:
          "鍋に水400ml、醤油、みりん、砂糖、酒を入れて煮立てる。豚肉を加えて落し蓋をし、弱火で40〜50分煮込む。",
        tip: "落し蓋をすることで味が均一に染み込みます",
        duration: 50,
      },
      {
        order: 5,
        description:
          "途中でゆで卵を加え、全体に色がついたら完成。小松菜を添えて器に盛り付ける。",
        duration: 5,
      },
    ],
    tips: [
      "前日に作っておくと、さらに味が染み込んで美味しくなります",
      "残ったタレはチャーハンや炒め物の調味料として活用できます",
      "脂が気になる場合は冷蔵庫で冷やして固まった脂を取り除くと良いです",
      "圧力鍋を使うと調理時間を大幅に短縮できます（加圧30分程度）",
    ],
    nutrition: {
      calories: 620,
      protein: 28,
      fat: 48,
      carbs: 18,
      salt: 2.8,
      fiber: 0.5,
    },
    author: "koba-cook",
    createdAt: "2024-11-01T10:00:00Z",
    updatedAt: "2024-11-01T10:00:00Z",
  },
  {
    id: "2",
    title: "肉じゃが",
    description:
      "日本の家庭料理の定番。甘辛い煮汁がじゃがいもと牛肉に染み込んだ、心が温まる一品です。誰もが懐かしいと感じる、ほっとする味わいです。",
    category: "和食",
    tags: ["家庭料理", "定番", "牛肉", "煮物"],
    servings: 4,
    cookingTime: 35,
    prepTime: 15,
    difficulty: "簡単",
    image: "",
    imageGradient: "from-yellow-700 via-amber-600 to-orange-500",
    imageEmoji: "🥔",
    ingredients: [
      { name: "牛薄切り肉", amount: "200", unit: "g", group: "メイン食材" },
      { name: "じゃがいも", amount: "4", unit: "個", group: "メイン食材" },
      { name: "玉ねぎ", amount: "1", unit: "個", group: "メイン食材" },
      { name: "にんじん", amount: "1", unit: "本", group: "メイン食材" },
      { name: "しらたき", amount: "150", unit: "g", group: "メイン食材" },
      {
        name: "絹さや",
        amount: "10",
        unit: "枚",
        note: "お好みで",
        group: "メイン食材",
      },
      { name: "醤油", amount: "大さじ3", unit: "", group: "調味料" },
      { name: "みりん", amount: "大さじ3", unit: "", group: "調味料" },
      { name: "砂糖", amount: "大さじ1.5", unit: "", group: "調味料" },
      { name: "酒", amount: "大さじ2", unit: "", group: "調味料" },
      { name: "だし汁", amount: "300", unit: "ml", group: "調味料" },
      { name: "サラダ油", amount: "大さじ1", unit: "", group: "調味料" },
    ],
    steps: [
      {
        order: 1,
        description:
          "じゃがいもは一口大に切り、玉ねぎはくし切り、にんじんは乱切りにする。しらたきは下ゆでしてアクを取る。",
        duration: 15,
      },
      {
        order: 2,
        description:
          "鍋にサラダ油を熱し、牛肉を炒める。色が変わったら野菜を加えてさらに炒める。",
        duration: 5,
      },
      {
        order: 3,
        description:
          "だし汁を加えて煮立てたら、アクをとる。醤油・みりん・砂糖・酒を加える。",
        duration: 5,
      },
      {
        order: 4,
        description:
          "落し蓋をして中火で15〜20分、じゃがいもがやわらかくなるまで煮込む。",
        tip: "途中でじゃがいもに箸を刺して確認しましょう",
        duration: 20,
      },
      {
        order: 5,
        description: "絹さやを加えてさっと煮たら完成。",
        duration: 2,
      },
    ],
    tips: [
      "じゃがいもはメークインを使うと煮崩れしにくいです",
      "牛肉の代わりに豚肉や鶏肉でも美味しく作れます",
      "糸こんにゃくを入れるとボリュームアップできます",
    ],
    nutrition: {
      calories: 380,
      protein: 18,
      fat: 12,
      carbs: 45,
      salt: 2.2,
      fiber: 3.2,
    },
    author: "koba-cook",
    createdAt: "2024-11-05T10:00:00Z",
    updatedAt: "2024-11-05T10:00:00Z",
  },
  {
    id: "3",
    title: "鶏の唐揚げ",
    description:
      "外はカリッと、中はジューシーな本格唐揚げ。下味にニンニクと生姜をたっぷり使い、二度揚げで完璧な食感を実現。お弁当にも晩ごはんにも大活躍です。",
    category: "和食",
    tags: ["鶏肉", "揚げ物", "お弁当", "人気"],
    servings: 4,
    cookingTime: 30,
    prepTime: 30,
    difficulty: "普通",
    image: "",
    imageGradient: "from-yellow-600 via-amber-500 to-orange-400",
    imageEmoji: "🍗",
    ingredients: [
      { name: "鶏もも肉", amount: "600", unit: "g", group: "メイン食材" },
      { name: "醤油", amount: "大さじ3", unit: "", group: "下味" },
      { name: "酒", amount: "大さじ2", unit: "", group: "下味" },
      {
        name: "すりおろしニンニク",
        amount: "小さじ2",
        unit: "",
        group: "下味",
      },
      { name: "すりおろし生姜", amount: "小さじ2", unit: "", group: "下味" },
      { name: "ごま油", amount: "小さじ1", unit: "", group: "下味" },
      { name: "片栗粉", amount: "大さじ5", unit: "", group: "衣" },
      { name: "薄力粉", amount: "大さじ2", unit: "", group: "衣" },
      { name: "揚げ油", amount: "適量", unit: "", group: "調理用" },
      {
        name: "レモン",
        amount: "1/2",
        unit: "個",
        note: "添え物",
        group: "トッピング",
      },
    ],
    steps: [
      {
        order: 1,
        description:
          "鶏もも肉を一口大に切り、すべての下味調味料をもみ込んで30分以上冷蔵庫で寝かせる。",
        tip: "時間があれば一晩置くと味がよく染み込みます",
        duration: 30,
      },
      {
        order: 2,
        description: "下味をつけた鶏肉に片栗粉と薄力粉を混ぜてまぶす。",
        tip: "余分な粉はしっかり落としましょう",
        duration: 5,
      },
      {
        order: 3,
        description:
          "170℃の油で4〜5分揚げ、一旦取り出して2分休ませる。（一度目の揚げ）",
        duration: 7,
      },
      {
        order: 4,
        description:
          "190℃の高温で1〜2分揚げ、カリッとした食感に仕上げる。（二度揚げ）",
        tip: "二度揚げで外がカリッとジューシーな唐揚げになります",
        duration: 3,
      },
      {
        order: 5,
        description: "油を切って器に盛り、レモンを添えて完成。",
        duration: 2,
      },
    ],
    tips: [
      "二度揚げが美味しさの秘訣です。必ず休ませてから二度目を揚げましょう",
      "衣は直前につけるとベタつきにくくなります",
      "揚げ油の温度管理が重要。低すぎると衣が油を吸ってしまいます",
      "マヨネーズに少量の醤油を混ぜたタレで食べても絶品です",
    ],
    nutrition: {
      calories: 480,
      protein: 32,
      fat: 28,
      carbs: 24,
      salt: 1.8,
    },
    author: "koba-cook",
    createdAt: "2024-11-10T10:00:00Z",
    updatedAt: "2024-11-10T10:00:00Z",
  },
  {
    id: "4",
    title: "豆腐の味噌汁",
    description:
      "毎朝飲みたくなる、だしの効いた本格味噌汁。豆腐とわかめのシンプルな組み合わせが、体に優しい一杯です。だしのとり方にこだわるだけで、いつもの味噌汁が格段においしくなります。",
    category: "和食",
    tags: ["スープ", "朝食", "ヘルシー", "時短"],
    servings: 4,
    cookingTime: 10,
    prepTime: 5,
    difficulty: "簡単",
    image: "",
    imageGradient: "from-amber-600 via-yellow-500 to-amber-400",
    imageEmoji: "🍜",
    ingredients: [
      { name: "水", amount: "800", unit: "ml", group: "だし" },
      { name: "昆布", amount: "10", unit: "cm", group: "だし" },
      { name: "鰹節", amount: "20", unit: "g", group: "だし" },
      {
        name: "味噌",
        amount: "大さじ3〜4",
        unit: "",
        note: "好みの量で調整",
        group: "調味料",
      },
      { name: "絹ごし豆腐", amount: "1/2", unit: "丁", group: "具材" },
      { name: "乾燥わかめ", amount: "大さじ1", unit: "", group: "具材" },
      { name: "長ネギ", amount: "1/4", unit: "本", group: "具材" },
    ],
    steps: [
      {
        order: 1,
        description: "水に昆布を入れて30分置き、火にかけて沸騰直前に取り出す。",
        tip: "昆布は沸騰させると苦みが出るので注意",
        duration: 35,
      },
      {
        order: 2,
        description: "鰹節を加えて2分煮て、ざるでこしてだし汁を作る。",
        duration: 5,
      },
      {
        order: 3,
        description:
          "だし汁を火にかけ、豆腐を一口大に切って加える。わかめも加えて温める。",
        duration: 3,
      },
      {
        order: 4,
        description:
          "火を弱めて味噌を溶き入れ、沸騰させないように注意しながら仕上げる。",
        tip: "味噌は沸騰させると風味が飛ぶので注意",
        duration: 2,
      },
      {
        order: 5,
        description: "器に注ぎ、小口切りの長ネギを散らして完成。",
        duration: 1,
      },
    ],
    tips: [
      "味噌は沸騰させると風味が飛ぶので、火を止めてから溶き入れると最高です",
      "市販のだしパックを使えば時短になります",
      "味噌は白味噌と赤味噌を合わせると深みが出ます",
      "冬場は根菜（大根、にんじん）を加えると体が温まります",
    ],
    nutrition: {
      calories: 65,
      protein: 5,
      fat: 2,
      carbs: 6,
      salt: 1.5,
      fiber: 0.8,
    },
    author: "koba-cook",
    createdAt: "2024-11-12T10:00:00Z",
    updatedAt: "2024-11-12T10:00:00Z",
  },
  {
    id: "5",
    title: "オムライス",
    description:
      "ふわふわの卵でケチャップライスを包んだ、洋食の人気メニュー。卵のとろとろ感が食欲をそそります。子どもから大人まで愛される、永遠の定番料理です。",
    category: "洋食",
    tags: ["卵料理", "人気", "子供向け", "鶏肉"],
    servings: 2,
    cookingTime: 20,
    prepTime: 10,
    difficulty: "普通",
    image: "",
    imageGradient: "from-orange-500 via-red-400 to-orange-400",
    imageEmoji: "🍳",
    ingredients: [
      { name: "温かいご飯", amount: "400", unit: "g", group: "ライス" },
      { name: "鶏もも肉", amount: "150", unit: "g", group: "ライス" },
      { name: "玉ねぎ", amount: "1/2", unit: "個", group: "ライス" },
      { name: "ケチャップ", amount: "大さじ4", unit: "", group: "ライス" },
      { name: "塩・こしょう", amount: "少々", unit: "", group: "ライス" },
      { name: "バター", amount: "10", unit: "g", group: "ライス" },
      { name: "卵", amount: "3", unit: "個（1人分）", group: "卵" },
      { name: "牛乳", amount: "大さじ1", unit: "", group: "卵" },
      { name: "バター", amount: "10", unit: "g", group: "卵" },
      {
        name: "ケチャップ",
        amount: "適量",
        unit: "",
        note: "トッピング",
        group: "トッピング",
      },
    ],
    steps: [
      {
        order: 1,
        description: "鶏肉は1cm角に切り、玉ねぎはみじん切りにする。",
        duration: 5,
      },
      {
        order: 2,
        description:
          "フライパンにバターを熱し、鶏肉を炒める。火が通ったら玉ねぎを加えてしんなりするまで炒める。",
        duration: 5,
      },
      {
        order: 3,
        description:
          "ご飯を加えてほぐしながら炒め、ケチャップで味付けし塩こしょうで整える。",
        tip: "ケチャップは焦げやすいので火加減に注意",
        duration: 3,
      },
      {
        order: 4,
        description:
          "チキンライスを皿に盛っておく。別のフライパンにバターを熱し、よく溶いた卵液（牛乳混ぜ）を流し込む。",
        duration: 2,
      },
      {
        order: 5,
        description:
          "半熟になったらチキンライスの上に滑らせて形を整え、ケチャップをかけて完成。",
        tip: "フライパンを傾けて卵を折るように包むのがポイント",
        duration: 3,
      },
    ],
    tips: [
      "とろとろ卵にするにはフライパンをよく熱してから強火で一気に焼くのがコツ",
      "ご飯は少し固めに炊いておくとパラパラに仕上がります",
      "デミグラスソースをかけると洋食店風になります",
    ],
    nutrition: {
      calories: 580,
      protein: 25,
      fat: 22,
      carbs: 68,
      salt: 2.0,
    },
    author: "koba-cook",
    createdAt: "2024-11-15T10:00:00Z",
    updatedAt: "2024-11-15T10:00:00Z",
  },
  {
    id: "6",
    title: "野菜たっぷり天ぷら",
    description:
      "サクサクの衣が自慢の天ぷら。冷水を使ったコツで誰でもプロ並みの仕上がりに。季節の野菜をふんだんに使った、ヘルシーで彩り豊かな一品です。",
    category: "和食",
    tags: ["揚げ物", "野菜", "おもてなし", "季節"],
    servings: 4,
    cookingTime: 25,
    prepTime: 20,
    difficulty: "難しい",
    image: "",
    imageGradient: "from-lime-700 via-green-600 to-emerald-500",
    imageEmoji: "🌿",
    ingredients: [
      { name: "えび", amount: "8", unit: "尾", group: "メイン食材" },
      { name: "さつまいも", amount: "1/2", unit: "本", group: "メイン食材" },
      { name: "かぼちゃ", amount: "1/8", unit: "個", group: "メイン食材" },
      { name: "ししとう", amount: "8", unit: "本", group: "メイン食材" },
      { name: "舞茸", amount: "1/2", unit: "パック", group: "メイン食材" },
      { name: "薄力粉", amount: "100", unit: "g", group: "衣" },
      { name: "卵", amount: "1", unit: "個", group: "衣" },
      { name: "冷水", amount: "180", unit: "ml", group: "衣" },
      { name: "揚げ油", amount: "適量", unit: "", group: "調理用" },
      { name: "だし汁", amount: "400", unit: "ml", group: "つゆ" },
      { name: "醤油", amount: "大さじ2", unit: "", group: "つゆ" },
      { name: "みりん", amount: "大さじ2", unit: "", group: "つゆ" },
      { name: "大根おろし", amount: "適量", unit: "", group: "薬味" },
      { name: "生姜おろし", amount: "適量", unit: "", group: "薬味" },
    ],
    steps: [
      {
        order: 1,
        description:
          "野菜を適当な大きさに切る。えびは殻をむいて背ワタを取り、腹に切り込みを入れてまっすぐにする。",
        duration: 15,
      },
      {
        order: 2,
        description:
          "衣を作る：冷水に卵を溶き、薄力粉をさっくりと混ぜる。（混ぜすぎNG、少し粉が残るくらいでOK）",
        tip: "サクサクに仕上げるには衣を混ぜすぎないことが最大のポイント",
        duration: 3,
      },
      {
        order: 3,
        description: "つゆを作る：だし汁、醤油、みりんを合わせて温める。",
        duration: 3,
      },
      {
        order: 4,
        description:
          "油を170〜180℃に熱し、食材に薄力粉をはたいてから衣をつけて揚げる。えびは2〜3分、野菜は1〜2分が目安。",
        tip: "油の温度を一定に保つことがサクサク天ぷらの秘訣",
        duration: 15,
      },
      {
        order: 5,
        description: "揚がったら油を切り、つゆと大根おろし・生姜を添えて完成。",
        duration: 2,
      },
    ],
    tips: [
      "衣の冷水は直前まで冷蔵庫で冷やしておきましょう",
      "衣は混ぜすぎると粘りが出てベタつくので、さっくりと混ぜるのがコツ",
      "一度にたくさん揚げると油の温度が下がるので、少量ずつ揚げること",
      "えびに腹の切り込みを入れてまっすぐにすると見た目がきれいです",
    ],
    nutrition: {
      calories: 420,
      protein: 18,
      fat: 24,
      carbs: 38,
      salt: 1.2,
      fiber: 3.5,
    },
    author: "koba-cook",
    createdAt: "2024-11-18T10:00:00Z",
    updatedAt: "2024-11-18T10:00:00Z",
  },
  {
    id: "7",
    title: "アボカドとサーモンのサラダ",
    description:
      "クリーミーなアボカドと新鮮なサーモンの贅沢なサラダ。レモンドレッシングが全体をさっぱりまとめます。栄養価も高く、忙しい日のランチにもおすすめです。",
    category: "サラダ",
    tags: ["ヘルシー", "サーモン", "アボカド", "時短", "低糖質"],
    servings: 2,
    cookingTime: 0,
    prepTime: 15,
    difficulty: "簡単",
    image: "",
    imageGradient: "from-green-700 via-emerald-500 to-teal-400",
    imageEmoji: "🥗",
    ingredients: [
      { name: "アボカド", amount: "1", unit: "個", group: "メイン食材" },
      {
        name: "スモークサーモン",
        amount: "100",
        unit: "g",
        group: "メイン食材",
      },
      { name: "ミックスリーフ", amount: "100", unit: "g", group: "メイン食材" },
      { name: "ミニトマト", amount: "8", unit: "個", group: "メイン食材" },
      { name: "紫玉ねぎ", amount: "1/4", unit: "個", group: "メイン食材" },
      {
        name: "ケイパー",
        amount: "大さじ1",
        unit: "",
        note: "お好みで",
        group: "メイン食材",
      },
      {
        name: "オリーブオイル",
        amount: "大さじ2",
        unit: "",
        group: "ドレッシング",
      },
      { name: "レモン汁", amount: "大さじ1", unit: "", group: "ドレッシング" },
      { name: "蜂蜜", amount: "小さじ1", unit: "", group: "ドレッシング" },
      { name: "塩・こしょう", amount: "少々", unit: "", group: "ドレッシング" },
      {
        name: "ディル",
        amount: "適量",
        unit: "",
        note: "お好みで",
        group: "トッピング",
      },
    ],
    steps: [
      {
        order: 1,
        description:
          "アボカドは半分に割り、種を取って皮をむき一口大に切る。レモン汁少々をかけて変色を防ぐ。",
        tip: "切ったらすぐにレモン汁をかけると色が変わりにくい",
        duration: 5,
      },
      {
        order: 2,
        description:
          "紫玉ねぎを薄切りにして水にさらし、辛みを抜く。ミニトマトは半分に切る。",
        duration: 5,
      },
      {
        order: 3,
        description:
          "ドレッシングを作る：オリーブオイル、レモン汁、蜂蜜、塩こしょうをよく混ぜる。",
        duration: 2,
      },
      {
        order: 4,
        description:
          "皿にミックスリーフを盛り、アボカド、サーモン、トマト、玉ねぎを彩りよく並べる。",
        duration: 3,
      },
      {
        order: 5,
        description: "ドレッシングをかけ、ケイパーとディルを散らして完成。",
        duration: 1,
      },
    ],
    tips: [
      "アボカドは熟したものを使うとクリーミーで美味しいです",
      "ドレッシングは食べる直前にかけると野菜がしんなりしません",
      "クリームチーズを角切りにして加えるとさらに贅沢になります",
    ],
    nutrition: {
      calories: 340,
      protein: 20,
      fat: 26,
      carbs: 12,
      salt: 1.4,
      fiber: 5.2,
    },
    author: "koba-cook",
    createdAt: "2024-11-20T10:00:00Z",
    updatedAt: "2024-11-20T10:00:00Z",
  },
  {
    id: "8",
    title: "本格カレーライス",
    description:
      "スパイスから作る本格カレー。市販のルーとは一線を画す、香り豊かで深みのある味わいです。時間をかけて作る価値のある、週末の特別メニューにぴったりです。",
    category: "洋食",
    tags: ["カレー", "スパイス", "週末料理", "牛肉"],
    servings: 6,
    cookingTime: 90,
    prepTime: 20,
    difficulty: "難しい",
    image: "",
    imageGradient: "from-orange-700 via-amber-600 to-yellow-500",
    imageEmoji: "🍛",
    ingredients: [
      { name: "牛角切り肉", amount: "500", unit: "g", group: "メイン食材" },
      { name: "玉ねぎ", amount: "3", unit: "個", group: "メイン食材" },
      { name: "じゃがいも", amount: "3", unit: "個", group: "メイン食材" },
      { name: "にんじん", amount: "2", unit: "本", group: "メイン食材" },
      { name: "トマト缶", amount: "1", unit: "缶", group: "メイン食材" },
      {
        name: "カレーパウダー",
        amount: "大さじ3",
        unit: "",
        group: "スパイス",
      },
      { name: "クミンシード", amount: "小さじ1", unit: "", group: "スパイス" },
      {
        name: "コリアンダーパウダー",
        amount: "小さじ2",
        unit: "",
        group: "スパイス",
      },
      { name: "ガラムマサラ", amount: "小さじ1", unit: "", group: "スパイス" },
      {
        name: "すりおろしニンニク",
        amount: "3",
        unit: "かけ",
        group: "スパイス",
      },
      {
        name: "すりおろし生姜",
        amount: "大さじ1",
        unit: "",
        group: "スパイス",
      },
      { name: "ブイヨン", amount: "700", unit: "ml", group: "スープ" },
      { name: "サラダ油", amount: "大さじ2", unit: "", group: "調理用" },
      { name: "塩・こしょう", amount: "適量", unit: "", group: "調理用" },
    ],
    steps: [
      {
        order: 1,
        description:
          "玉ねぎを薄切りにし、飴色になるまで弱火でじっくり炒める（約30〜40分）。",
        tip: "飴色玉ねぎがカレーの甘みとコクの要です。焦がさないよう注意",
        duration: 40,
      },
      {
        order: 2,
        description:
          "クミンシードを加えて香りが出たら、ニンニク・生姜を加えてさらに炒める。スパイスを加えて1〜2分炒める。",
        duration: 5,
      },
      {
        order: 3,
        description:
          "牛肉を加えて表面を焼き色がつくまで炒め、トマト缶を加えて水分を飛ばす。",
        duration: 10,
      },
      {
        order: 4,
        description:
          "ブイヨンを加えて煮立て、アクをとる。じゃがいも・にんじんを加えて弱火で40分煮込む。",
        duration: 45,
      },
      {
        order: 5,
        description:
          "ガラムマサラを加えて塩で味を調える。ご飯と盛り付けて完成。",
        tip: "ガラムマサラは仕上げに加えることで香りが際立ちます",
        duration: 5,
      },
    ],
    tips: [
      "玉ねぎの飴色炒めがカレーの美味しさを決定づけます。時間を惜しまず丁寧に",
      "前日に作って一晩おくと味が馴染んでさらに美味しくなります",
      "最後にバターやヨーグルトを加えるとまろやかになります",
      "スパイスの量はお好みで調整してください。辛くしたい場合はチリを追加",
    ],
    nutrition: {
      calories: 520,
      protein: 30,
      fat: 22,
      carbs: 52,
      salt: 2.5,
      fiber: 4.2,
    },
    author: "koba-cook",
    createdAt: "2024-11-22T10:00:00Z",
    updatedAt: "2024-11-22T10:00:00Z",
  },
  {
    id: "9",
    title: "豆腐ハンバーグ",
    description:
      "ヘルシーな豆腐入りハンバーグ。豆腐を加えることでふんわりやわらかな食感に。カロリー控えめながら満足感抜群の、ダイエット中の方にも嬉しいメニューです。",
    category: "洋食",
    tags: ["ヘルシー", "豆腐", "ダイエット", "牛豚合挽き"],
    servings: 4,
    cookingTime: 25,
    prepTime: 20,
    difficulty: "普通",
    image: "",
    imageGradient: "from-green-800 via-green-600 to-lime-500",
    imageEmoji: "🍔",
    ingredients: [
      { name: "合挽き肉", amount: "300", unit: "g", group: "メイン食材" },
      { name: "木綿豆腐", amount: "150", unit: "g", group: "メイン食材" },
      { name: "玉ねぎ", amount: "1/2", unit: "個", group: "メイン食材" },
      { name: "パン粉", amount: "大さじ3", unit: "", group: "つなぎ" },
      { name: "牛乳", amount: "大さじ2", unit: "", group: "つなぎ" },
      { name: "卵", amount: "1", unit: "個", group: "つなぎ" },
      { name: "塩", amount: "小さじ1/2", unit: "", group: "調味料" },
      { name: "こしょう", amount: "少々", unit: "", group: "調味料" },
      { name: "ナツメグ", amount: "少々", unit: "", group: "調味料" },
      { name: "サラダ油", amount: "大さじ1", unit: "", group: "調理用" },
      {
        name: "ポン酢",
        amount: "適量",
        unit: "",
        note: "ソースに",
        group: "ソース",
      },
      { name: "大根おろし", amount: "適量", unit: "", group: "ソース" },
    ],
    steps: [
      {
        order: 1,
        description:
          "豆腐はキッチンペーパーに包んで重しをのせ、15分ほど水切りをする。玉ねぎはみじん切りにして炒め、冷ます。",
        duration: 20,
      },
      {
        order: 2,
        description:
          "パン粉に牛乳を浸して混ぜる。ボウルに合挽き肉、水切り豆腐、玉ねぎ、パン粉、卵、塩・こしょう・ナツメグを入れてよく練る。",
        duration: 5,
      },
      {
        order: 3,
        description: "4等分にして小判形に成形し、中央に凹みをつける。",
        tip: "中央に凹みをつけることで焼きむらが防げます",
        duration: 5,
      },
      {
        order: 4,
        description:
          "フライパンにサラダ油を熱し、ハンバーグを入れて中火で3分焼く。裏返して蓋をし、弱火で5〜6分蒸し焼きにする。",
        duration: 10,
      },
      {
        order: 5,
        description:
          "竹串を刺して透明な肉汁が出たら完成。大根おろしとポン酢を添えて盛り付ける。",
        duration: 2,
      },
    ],
    tips: [
      "豆腐はしっかり水切りしないとタネが緩くなるので注意",
      "中火と弱火の使い分けが、ふんわりジューシーに仕上げる鍵",
      "和風ポン酢ソースの他に、トマトソースやデミグラスソースでも美味しい",
    ],
    nutrition: {
      calories: 290,
      protein: 22,
      fat: 16,
      carbs: 12,
      salt: 1.5,
      fiber: 0.8,
    },
    author: "koba-cook",
    createdAt: "2024-11-25T10:00:00Z",
    updatedAt: "2024-11-25T10:00:00Z",
  },
  {
    id: "10",
    title: "バナナとヨーグルトのパフェ",
    description:
      "グラノーラ、ヨーグルト、フレッシュフルーツを重ねた、朝食にも間食にも最適なヘルシーパフェ。作るのも簡単で見た目も華やか、栄養バランスも抜群です。",
    category: "デザート",
    tags: ["デザート", "ヘルシー", "朝食", "時短", "フルーツ"],
    servings: 2,
    cookingTime: 0,
    prepTime: 10,
    difficulty: "簡単",
    image: "",
    imageGradient: "from-yellow-400 via-amber-300 to-orange-300",
    imageEmoji: "🍨",
    ingredients: [
      {
        name: "ギリシャヨーグルト",
        amount: "200",
        unit: "g",
        group: "メイン食材",
      },
      { name: "バナナ", amount: "1", unit: "本", group: "メイン食材" },
      { name: "いちご", amount: "6", unit: "粒", group: "メイン食材" },
      { name: "ブルーベリー", amount: "50", unit: "g", group: "メイン食材" },
      { name: "グラノーラ", amount: "60", unit: "g", group: "メイン食材" },
      { name: "蜂蜜", amount: "大さじ2", unit: "", group: "調味料" },
      {
        name: "ミント",
        amount: "適量",
        unit: "",
        note: "お好みで",
        group: "トッピング",
      },
      {
        name: "チアシード",
        amount: "小さじ1",
        unit: "",
        note: "お好みで",
        group: "トッピング",
      },
    ],
    steps: [
      {
        order: 1,
        description: "バナナを輪切りに、いちごを半分に切る。",
        duration: 3,
      },
      {
        order: 2,
        description: "グラスにグラノーラを底に敷き、ヨーグルトを重ねる。",
        duration: 2,
      },
      {
        order: 3,
        description: "バナナ、いちご、ブルーベリーを彩りよく並べる。",
        tip: "色の違うフルーツを交互に並べると見た目がきれいです",
        duration: 3,
      },
      {
        order: 4,
        description: "蜂蜜をかけ、チアシードとミントを散らして完成。",
        duration: 2,
      },
    ],
    tips: [
      "食べる直前にグラノーラを加えるとサクサク感が保てます",
      "フルーツはお好みのものを使ってOK。季節のフルーツで作るのがおすすめ",
      "ヨーグルトに少量のバニラエッセンスを混ぜると風味がアップします",
    ],
    nutrition: {
      calories: 310,
      protein: 12,
      fat: 8,
      carbs: 52,
      salt: 0.2,
      fiber: 4.5,
    },
    author: "koba-cook",
    createdAt: "2024-11-28T10:00:00Z",
    updatedAt: "2024-11-28T10:00:00Z",
  },
];

export function getRecipeById(id: string): Recipe | undefined {
  return RECIPES.find((r) => r.id === id);
}

export function searchRecipes(
  query: string,
  category?: string,
  tag?: string,
): Recipe[] {
  return RECIPES.filter((recipe) => {
    const matchesQuery =
      !query ||
      recipe.title.toLowerCase().includes(query.toLowerCase()) ||
      recipe.description.toLowerCase().includes(query.toLowerCase()) ||
      recipe.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
      recipe.ingredients.some((i) =>
        i.name.toLowerCase().includes(query.toLowerCase()),
      );
    const matchesCategory =
      !category || category === "すべて" || recipe.category === category;
    const matchesTag = !tag || recipe.tags.includes(tag);
    return matchesQuery && matchesCategory && matchesTag;
  });
}

export const ALL_CATEGORIES = [
  "すべて",
  "和食",
  "洋食",
  "中華",
  "アジア料理",
  "デザート",
  "サラダ",
  "スープ",
  "その他",
] as const;
export const ALL_TAGS = [
  "ヘルシー",
  "時短",
  "簡単",
  "おもてなし",
  "お弁当",
  "ダイエット",
  "人気",
  "週末料理",
  "スパイス",
  "煮物",
  "揚げ物",
  "サラダ",
  "デザート",
] as const;
