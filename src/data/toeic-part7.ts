export interface Part7Passage {
  type: "email" | "chat" | "notice" | "ad" | "article" | "form" | "letter" | "webpage";
  label: string; // 繁中短標，如「第一篇：活動公告」；單篇時可用「文章」
  text: string; // 完整內文。email 含 From/To/Subject/Date 頭；chat 用「名字 [時間]: 內容」逐行
}

export interface Part7Question {
  question: string; // 英文題幹
  options: [string, string, string, string];
  answer: number; // 0-3
  kind: "主旨" | "細節" | "推論" | "同義" | "NOT" | "發話意圖";
  explanation: string; // 繁體中文解說，需指出定位句
}

export interface Part7Set {
  id: string; // "p7-001" 到 "p7-012"
  format: "single" | "double";
  title: string; // 繁中短標
  passages: Part7Passage[]; // single=1 篇，double=2 篇
  questions: Part7Question[]; // single 3-4 題，double 5 題
  suggestedMinutes: number; // 建議作答分鐘數（single 3-5，double 6-8）
  difficulty: 1 | 2 | 3;
}

export const part7Sets: Part7Set[] = [
  // ============================================================
  // p7-001 單篇 email，難度 1
  // ============================================================
  {
    id: "p7-001",
    format: "single",
    title: "停車場整修通知信",
    passages: [
      {
        type: "email",
        label: "電子郵件",
        text: `From: Daniel Reyes <dreyes@brightwavemedia.com>
To: All Staff
Subject: Parking Lot Repaving
Date: March 3

Dear colleagues,

Please be advised that the parking lot behind our building will be repaved from Monday, March 10, through Wednesday, March 12. During this period, the lot will be completely closed, and no vehicles may remain on-site after 7 P.M. on Sunday, March 9.

While the work is under way, employees are asked to park at the Union Street Garage, one block east of our office. The company will cover all parking fees; simply have your ticket validated at the front desk before leaving each day.

Please note that in the event of heavy rain, the work may extend by one additional day. Updates will be posted on the staff bulletin board.

Thank you for your cooperation.

Daniel Reyes
Facilities Manager`,
      },
    ],
    questions: [
      {
        question: "Why was the e-mail sent?",
        options: [
          "To announce a change in office hours",
          "To inform staff about temporary parking arrangements",
          "To request volunteers for a construction project",
          "To describe a new employee benefit",
        ],
        answer: 1,
        kind: "主旨",
        explanation:
          "全信主軸是停車場整修期間的替代停車安排，定位句 \"employees are asked to park at the Union Street Garage\"。(A) 未提及辦公時間變動；(C) 沒有徵求志工；(D) 公司代付停車費只是臨時措施，不是新福利。",
      },
      {
        question: "Where should employees park from March 10 to March 12?",
        options: [
          "In the lot behind the building",
          "At the Union Street Garage",
          "In front of the office",
          "At a nearby train station",
        ],
        answer: 1,
        kind: "細節",
        explanation:
          "定位句 \"employees are asked to park at the Union Street Garage, one block east of our office\"。(A) 是整修期間封閉的地點；(C)(D) 文中皆未提及。",
      },
      {
        question: "What is suggested about the repaving work?",
        options: [
          "It will begin on March 9.",
          "It will be done at night.",
          "Its schedule depends on the weather.",
          "Employees must pay for it.",
        ],
        answer: 2,
        kind: "推論",
        explanation:
          "定位句 \"in the event of heavy rain, the work may extend by one additional day\"，可推論工期受天氣影響。(A) March 9 是車輛須移走的期限，工程 3/10 才開始；(B) 未提及夜間施工；(D) 與 \"The company will cover all parking fees\" 矛盾且費用是停車費非工程費。",
      },
      {
        question: "In paragraph 2, the word \"cover\" is closest in meaning to",
        options: ["hide", "pay", "protect", "include"],
        answer: 1,
        kind: "同義",
        explanation:
          "定位句 \"The company will cover all parking fees\"，此處 cover 指「支付（費用）」，等同 pay。其餘 hide（遮蓋）、protect（保護）、include（包含）皆不符合此語境。",
      },
    ],
    suggestedMinutes: 4,
    difficulty: 1,
  },

  // ============================================================
  // p7-002 單篇 email，難度 2
  // ============================================================
  {
    id: "p7-002",
    format: "single",
    title: "客服回覆：損壞商品處理",
    passages: [
      {
        type: "email",
        label: "電子郵件",
        text: `From: Customer Care <care@vistahomeware.com>
To: Monica Alvarez <m.alvarez@ferntree.net>
Subject: Re: Order #58211
Date: April 14

Dear Ms. Alvarez,

Thank you for contacting us about the blender you received on April 10. We are sorry to hear that the glass jar was cracked on arrival.

We would like to offer you two options: a replacement unit, which would ship within three business days, or a full refund to your original payment method. Please reply by April 20 to let us know which you prefer. If we do not hear from you by that date, the refund will be processed automatically.

As an apology, we have also added a 15% discount code to your account. It can be used on any online order placed before June 30.

Sincerely,
Trevor Banks
Customer Care Team, Vista Homeware`,
      },
    ],
    questions: [
      {
        question: "Why was the e-mail sent?",
        options: [
          "To confirm that an order has shipped",
          "To respond to a complaint about a damaged item",
          "To announce a seasonal sale",
          "To request an overdue payment",
        ],
        answer: 1,
        kind: "主旨",
        explanation:
          "定位句 \"We are sorry to hear that the glass jar was cracked on arrival\"，這是針對商品損壞客訴的回覆並提出補救方案。(A) 沒有出貨確認；(C) 折扣碼是道歉贈禮，不是促銷活動；(D) 未提及帳款。",
      },
      {
        question: "What is Ms. Alvarez asked to do by April 20?",
        options: [
          "Return the damaged blender",
          "Place a new order online",
          "Indicate which option she prefers",
          "Enter a discount code",
        ],
        answer: 2,
        kind: "細節",
        explanation:
          "定位句 \"Please reply by April 20 to let us know which you prefer\"，即在 4/20 前回覆要換貨還是退款。(A) 信中未要求退回商品；(B)(D) 折扣碼供日後使用，沒有期限為 4/20 的下單要求。",
      },
      {
        question: "What is indicated about the discount code?",
        options: [
          "It was requested by Ms. Alvarez.",
          "It can be used only once a month.",
          "It applies to in-store purchases.",
          "It cannot be used after June 30.",
        ],
        answer: 3,
        kind: "推論",
        explanation:
          "定位句 \"It can be used on any online order placed before June 30\"，可知 6/30 之後即失效。(A) 折扣碼是公司主動致歉附上的；(B) 使用次數未提及；(C) 明說限 online order，非實體店。",
      },
      {
        question: "What is NOT offered to Ms. Alvarez?",
        options: [
          "A replacement product",
          "A full refund",
          "A discount on a future order",
          "A free repair service",
        ],
        answer: 3,
        kind: "NOT",
        explanation:
          "信中提供三項：換貨（\"a replacement unit\"）、退款（\"a full refund\"）、折扣碼（\"a 15% discount code\"），唯獨沒有提到維修服務，故 (D) 為正解。",
      },
    ],
    suggestedMinutes: 4,
    difficulty: 2,
  },

  // ============================================================
  // p7-003 單篇 chat 訊息串，難度 2
  // ============================================================
  {
    id: "p7-003",
    format: "single",
    title: "展場布條印錯緊急處理",
    passages: [
      {
        type: "chat",
        label: "訊息串",
        text: `Elena Ruiz [10:02]: Hi Marcus, are you still near the printer's? The banners for the trade show just came in—but they printed our old logo on every single one.
Marcus Webb [10:04]: You're kidding. I dropped off the updated file last Tuesday.
Elena Ruiz [10:05]: I know. The box is sitting in front of me. All twenty of them.
Marcus Webb [10:07]: I'm only two blocks away. I'll turn around and talk to them right now.
Elena Ruiz [10:08]: Booth setup starts at 4 this afternoon. Can they really redo everything that fast?
Marcus Webb [10:10]: Their rush service is same-day as long as we get the order in before noon. It costs extra, though.
Elena Ruiz [10:11]: Whatever it takes. I'll let Priya know the printing budget is going over.
Marcus Webb [10:13]: Got it. I'll call you as soon as I've spoken with the manager.`,
      },
    ],
    questions: [
      {
        question: "What problem does Ms. Ruiz report?",
        options: [
          "A shipment has not arrived.",
          "Some banners show an outdated logo.",
          "A booth reservation was canceled.",
          "A design file has been lost.",
        ],
        answer: 1,
        kind: "細節",
        explanation:
          "定位句 \"they printed our old logo on every single one\"。(A) 布條已送達（\"just came in\"）；(C) 攤位仍在，下午 4 點開始布置；(D) 檔案上週已交給印刷廠，沒有遺失。",
      },
      {
        question: "At 10:05, what does Ms. Ruiz most likely mean when she writes, \"The box is sitting in front of me\"?",
        options: [
          "She wants Mr. Webb to pick up a delivery.",
          "She has confirmed the printing error herself.",
          "The banners were sent to the wrong address.",
          "She has not opened the shipment yet.",
        ],
        answer: 1,
        kind: "發話意圖",
        explanation:
          "Mr. Webb 上一句表示難以置信（\"You're kidding.\"），她回答箱子就在眼前、二十面全錯，意在強調自己親眼確認過錯誤屬實。(A) 沒有請對方取件；(C) 地址無誤；(D) 她已看到內容物，顯然拆封過。",
      },
      {
        question: "What will Mr. Webb most likely do next?",
        options: [
          "Go back to the print shop",
          "Contact Priya about the budget",
          "Place a new order online",
          "Begin setting up the booth",
        ],
        answer: 0,
        kind: "推論",
        explanation:
          "定位句 \"I'm only two blocks away. I'll turn around and talk to them right now\"，可推論他將折返印刷廠交涉。(B) 通知 Priya 的是 Ms. Ruiz；(C) 是到店處理而非線上下單；(D) 布置攤位下午才開始，且非他的下一步。",
      },
      {
        question: "What does Ms. Ruiz agree to?",
        options: [
          "Postponing the trade show booth setup",
          "Designing a new logo",
          "Paying an additional fee for rush printing",
          "Splitting the cost with the printer",
        ],
        answer: 2,
        kind: "推論",
        explanation:
          "Mr. Webb 說急件服務 \"costs extra\"，Ms. Ruiz 回 \"Whatever it takes. I'll let Priya know the printing budget is going over\"，等於同意支付額外費用。(A) 布置時間未改；(B) 是沿用已更新的 logo 檔重印；(D) 未提及與印刷廠分攤。",
      },
    ],
    suggestedMinutes: 4,
    difficulty: 2,
  },

  // ============================================================
  // p7-004 單篇 chat 群組訊息串，難度 3
  // ============================================================
  {
    id: "p7-004",
    format: "single",
    title: "產品展示臨時提前",
    passages: [
      {
        type: "chat",
        label: "群組訊息串",
        text: `Priya Nair [2:14]: Quick update, everyone. Kepler Industries just moved our product demo up to tomorrow at 9 A.M. It was originally scheduled for Friday.
Tom Osei [2:15]: Tomorrow? The demo unit is still at the Westfield office.
Priya Nair [2:16]: Can you get it here by tonight?
Tom Osei [2:18]: Not personally—I'm with a client in Dover until 8. But Rachel drives past Westfield on her way home, doesn't she?
Rachel Kim [2:21]: Happy to grab it. Someone will need to let building security know I'm coming, though. My badge only works at headquarters.
Priya Nair [2:23]: I'll call them right now. Tom, could you at least run the software check remotely tonight?
Tom Osei [2:24]: Already on it. I'll send everyone the results before 10.
Rachel Kim [2:26]: Great. I should have the unit at headquarters by 7:30.`,
      },
    ],
    questions: [
      {
        question: "What is the discussion mainly about?",
        options: [
          "Fixing an error in some software",
          "Preparing for a rescheduled product demonstration",
          "Choosing a new office location",
          "Arranging transportation for a client",
        ],
        answer: 1,
        kind: "主旨",
        explanation:
          "定位句 \"Kepler Industries just moved our product demo up to tomorrow at 9 A.M.\"，整段對話都在安排提前的展示。(A) software check 只是準備工作之一，且是檢查而非修錯；(C) 未討論辦公地點；(D) 要運送的是展示機，不是接送客戶。",
      },
      {
        question: "Why is Mr. Osei unable to pick up the demo unit?",
        options: [
          "His badge does not open the Westfield office.",
          "He will be meeting a client until the evening.",
          "His car is being repaired.",
          "He is working at headquarters all day.",
        ],
        answer: 1,
        kind: "細節",
        explanation:
          "定位句 \"Not personally—I'm with a client in Dover until 8\"。(A) 門禁卡受限的是 Rachel Kim，屬張冠李戴的誘答；(C) 車輛狀況未提及；(D) 他人在 Dover 陪客戶，不在總部。",
      },
      {
        question: "At 2:21, what does Ms. Kim imply when she writes, \"My badge only works at headquarters\"?",
        options: [
          "She has lost her identification badge.",
          "She recently transferred to headquarters.",
          "She will need help entering the Westfield office.",
          "She cannot attend tomorrow's demonstration.",
        ],
        answer: 2,
        kind: "發話意圖",
        explanation:
          "她前一句才說 \"Someone will need to let building security know I'm coming\"，補充門禁卡只能進總部，意在說明自己無法自行進入 Westfield、需要有人先知會警衛。(A) 卡片沒有遺失；(B) 未提及調職；(D) 她隔天出席與否與此無關。",
      },
      {
        question: "What will Ms. Nair most likely do next?",
        options: [
          "Drive to the Westfield office",
          "Contact building security",
          "Run a software check",
          "Call Kepler Industries",
        ],
        answer: 1,
        kind: "推論",
        explanation:
          "針對 Rachel 的請求，Ms. Nair 回 \"I'll call them right now\"，them 指前句的 building security。(A) 去 Westfield 取機的是 Rachel；(C) 軟體檢查由 Tom 負責；(D) Kepler 是客戶名稱，文中出現但沒有人要致電他們，屬誘答。",
      },
    ],
    suggestedMinutes: 5,
    difficulty: 3,
  },

  // ============================================================
  // p7-005 單篇 notice 公告，難度 1
  // ============================================================
  {
    id: "p7-005",
    format: "single",
    title: "健身中心泳池整修公告",
    passages: [
      {
        type: "notice",
        label: "公告",
        text: `NOTICE TO ALL MEMBERS
Rosewood Fitness Center

Beginning Monday, April 14, the indoor swimming pool will be closed for retiling. The work is expected to take five days, and regular pool hours will resume on Saturday, April 19.

During the closure, all water aerobics classes will meet at our Lakeside branch, located at 88 Harbor Road. In addition, any Rosewood member may use the Lakeside pool at no extra charge by presenting a valid membership card at the entrance.

The locker rooms, exercise studios, and all other facilities at Rosewood will remain open as usual. The retiling is the first in a series of improvements planned for this year, which will also include new sauna equipment this fall.

We apologize for any inconvenience and thank you for your patience.

— The Management`,
      },
    ],
    questions: [
      {
        question: "What is the purpose of the notice?",
        options: [
          "To announce a temporary facility closure",
          "To advertise new fitness classes",
          "To introduce a change in membership fees",
          "To celebrate the opening of a new branch",
        ],
        answer: 0,
        kind: "主旨",
        explanation:
          "定位句 \"the indoor swimming pool will be closed for retiling\"，公告核心是泳池暫時關閉與替代方案。(B) 水中有氧是既有課程移地上課；(C) 明說 \"at no extra charge\"，費用未變；(D) Lakeside 是既有分館。",
      },
      {
        question: "What must members show to use the Lakeside pool?",
        options: [
          "A guest pass",
          "A class schedule",
          "A membership card",
          "A photo ID",
        ],
        answer: 2,
        kind: "細節",
        explanation:
          "定位句 \"by presenting a valid membership card at the entrance\"。其餘 (A)(B)(D) 文中皆未提及。",
      },
      {
        question: "In paragraph 1, the word \"resume\" is closest in meaning to",
        options: ["summarize", "begin again", "extend", "change"],
        answer: 1,
        kind: "同義",
        explanation:
          "定位句 \"regular pool hours will resume on Saturday, April 19\"，resume 指中斷後「恢復、重新開始」，即 begin again。summarize（總結）、extend（延長）、change（改變）皆不符語境。",
      },
    ],
    suggestedMinutes: 3,
    difficulty: 1,
  },

  // ============================================================
  // p7-006 單篇 ad 廣告，難度 1
  // ============================================================
  {
    id: "p7-006",
    format: "single",
    title: "餐食材料箱廣告",
    passages: [
      {
        type: "ad",
        label: "廣告",
        text: `GREENLEAF MEAL KITS
Fresh ingredients, simple recipes—delivered to your door.

Tired of deciding what to cook? Each week, GreenLeaf delivers a box containing pre-measured ingredients and step-by-step recipe cards for three delicious dinners. Choose from more than ten new recipes every week, including vegetarian and low-calorie options. Boxes come in two sizes, serving either two or four people.

Deliveries are made every Wednesday. Simply place your order on our Web site by 11:59 P.M. on Sunday. Going out of town? You can skip a week or cancel your plan at any time—no fees, no questions asked.

Special offer for first-time customers: enter the code FRESH40 at checkout to receive 40% off your first box.

Order today at www.greenleafkits.com.`,
      },
    ],
    questions: [
      {
        question: "What is being advertised?",
        options: [
          "A cooking class",
          "A restaurant delivery app",
          "A meal-kit subscription service",
          "A kitchen appliance",
        ],
        answer: 2,
        kind: "主旨",
        explanation:
          "定位句 \"Each week, GreenLeaf delivers a box containing pre-measured ingredients and step-by-step recipe cards\"，是每週配送食材與食譜的訂閱制服務。(A) 附的是食譜卡不是課程；(B) 送的是食材非餐廳成品；(D) 未販售器具。",
      },
      {
        question: "How can new customers receive a discount?",
        options: [
          "By ordering a large-size box",
          "By entering a code on the Web site",
          "By referring a friend",
          "By subscribing for a full year",
        ],
        answer: 1,
        kind: "細節",
        explanation:
          "定位句 \"enter the code FRESH40 at checkout to receive 40% off your first box\"。(A) 箱型大小與折扣無關；(C)(D) 推薦好友、年約優惠皆未提及。",
      },
      {
        question: "What is suggested about GreenLeaf deliveries?",
        options: [
          "They require a signature.",
          "They are made once a week.",
          "They are free for orders over $50.",
          "They arrive within 24 hours of ordering.",
        ],
        answer: 1,
        kind: "推論",
        explanation:
          "定位句 \"Deliveries are made every Wednesday\"，配送固定在每週三，可推論一週一次。(A) 簽收未提及；(C) 運費規則未提及；(D) 週日截單、週三到貨，並非 24 小時內送達。",
      },
      {
        question: "What is NOT mentioned in the advertisement?",
        options: [
          "Vegetarian menu options",
          "The ability to cancel at any time",
          "A discount for first-time customers",
          "Free shipping on all orders",
        ],
        answer: 3,
        kind: "NOT",
        explanation:
          "(A) 見 \"including vegetarian and low-calorie options\"；(B) 見 \"cancel your plan at any time\"；(C) 見 \"Special offer for first-time customers\"。廣告從頭到尾沒有提到免運費，故 (D) 為正解。",
      },
    ],
    suggestedMinutes: 3,
    difficulty: 1,
  },

  // ============================================================
  // p7-007 單篇 article 報導，難度 3
  // ============================================================
  {
    id: "p7-007",
    format: "single",
    title: "咖啡烘焙坊展店報導",
    passages: [
      {
        type: "article",
        label: "報導",
        text: `Cascade Coffee to Open Second Location

HARBOR CITY (June 2)—Cascade Coffee, the local roastery founded by Mia Chen in 2019, announced on Monday that it will open its second café in the Eastgate district this September. The company plans to hire fifteen employees for the new location, which will occupy the former Delmar Bookshop building on Fenwick Avenue.

Cascade began as a weekend stall at the Harbor City Farmers Market before opening its first café on Porter Street in 2021. Unlike most small roasteries, which seek outside investors to fund their growth, Cascade has financed the expansion entirely from its own earnings. Chen credits the company's coffee subscription program, which now accounts for nearly half of total revenue, for making this possible.

"Our subscribers gave us steady income even when foot traffic was unpredictable," Chen said. "This new café is really their achievement."

The Eastgate location will feature a tasting bar and a small classroom for public brewing workshops, which Chen hopes to launch by the end of the year.`,
      },
    ],
    questions: [
      {
        question: "What is the purpose of the article?",
        options: [
          "To review a newly opened café",
          "To report on a local business's expansion",
          "To profile a successful investor",
          "To describe changes at a farmers market",
        ],
        answer: 1,
        kind: "主旨",
        explanation:
          "定位句 \"announced on Monday that it will open its second café in the Eastgate district this September\"，全文報導 Cascade Coffee 的展店計畫。(A) 新店尚未開幕，不是開箱評論；(C) 文中反而強調沒有外部投資人；(D) 農夫市集只是創業起點的背景。",
      },
      {
        question: "According to the article, what will happen in September?",
        options: [
          "Public brewing workshops will begin.",
          "A new café will open in Eastgate.",
          "Cascade will move its Porter Street café.",
          "A subscription program will be launched.",
        ],
        answer: 1,
        kind: "細節",
        explanation:
          "定位句 \"it will open its second café in the Eastgate district this September\"。(A) 工作坊預計年底才開辦（\"by the end of the year\"），屬時間錯置的誘答；(C) Porter Street 店未提遷移；(D) 訂閱制早已存在且貢獻近半營收。",
      },
      {
        question: "What is indicated about most small roasteries?",
        options: [
          "They begin at farmers markets.",
          "They offer coffee subscriptions.",
          "They rely on outside investors to grow.",
          "They hire about fifteen employees.",
        ],
        answer: 2,
        kind: "推論",
        explanation:
          "定位句 \"Unlike most small roasteries, which seek outside investors to fund their growth\"，可知多數小型烘焙坊靠外部投資人擴張，Cascade 是例外。(A)(B)(D) 都是 Cascade 自身的情況，文中並未推及同業，屬張冠李戴的誘答。",
      },
      {
        question: "In paragraph 2, the word \"credits\" is closest in meaning to",
        options: ["attributes", "charges", "trusts", "lends"],
        answer: 0,
        kind: "同義",
        explanation:
          "定位句 \"Chen credits the company's coffee subscription program ... for making this possible\"，credit A for B 意為「把 B 歸功於 A」，與 attributes（歸因於）同義。charges（收費）、trusts（信任）、lends（借出）皆不符。",
      },
    ],
    suggestedMinutes: 5,
    difficulty: 3,
  },

  // ============================================================
  // p7-008 單篇 form 發票，難度 2
  // ============================================================
  {
    id: "p7-008",
    format: "single",
    title: "辦公用品發票",
    passages: [
      {
        type: "form",
        label: "發票",
        text: `SUMMIT OFFICE SUPPLY
1200 Industrial Parkway, Columbus, OH 43204

INVOICE #4417
Date: May 2
Bill to: Nolan & Price LLC, Attn: Accounts Payable, 310 Weller Street, Suite 5

Item | Quantity | Unit Price | Amount
Adjustable desk lamp | 4 | $35.00 | $140.00
Two-drawer file cabinet | 2 | $89.00 | $178.00
Cross-cut paper shredder | 1 | $120.00 | $120.00

Subtotal: $438.00
Delivery: $25.00
Total due: $463.00

Terms: Payment is due within 30 days of the invoice date. Customers who pay in full within 10 days receive a 5% discount off the subtotal. Damaged or missing items must be reported to our service desk at 555-0148 within 48 hours of delivery.

Thank you for your business!`,
      },
    ],
    questions: [
      {
        question: "How can Nolan & Price reduce the amount it owes?",
        options: [
          "By paying the invoice within 10 days",
          "By ordering additional items",
          "By picking up the order in person",
          "By reporting a problem to the service desk",
        ],
        answer: 0,
        kind: "細節",
        explanation:
          "定位句 \"Customers who pay in full within 10 days receive a 5% discount off the subtotal\"。(B) 加購沒有折扣；(C) 自取可否未提及；(D) 48 小時通報是針對商品損壞或短缺，與折扣無關。",
      },
      {
        question: "If Nolan & Price pays the invoice on May 8, what will most likely be true?",
        options: [
          "A late fee will be added.",
          "The company will pay less than $463.00.",
          "The delivery charge will be waived.",
          "The order will be shipped the same day.",
        ],
        answer: 1,
        kind: "推論",
        explanation:
          "發票日期為 May 2，May 8 在 10 天內，符合 \"pay in full within 10 days receive a 5% discount off the subtotal\"，小計打 95 折後總額必低於 $463.00。(A) 30 天內付款不會有滯納金；(C) 折扣打在小計、運費照收；(D) 貨已送達（條款提到 delivery 後 48 小時通報）。",
      },
      {
        question: "According to the invoice, what should be done within 48 hours of delivery?",
        options: [
          "Paying the total amount due",
          "Confirming receipt by telephone",
          "Reporting any damaged items",
          "Returning unwanted merchandise",
        ],
        answer: 2,
        kind: "細節",
        explanation:
          "定位句 \"Damaged or missing items must be reported to our service desk at 555-0148 within 48 hours of delivery\"。(A) 付款期限是 30 天；(B) 收貨確認未要求；(D) 退貨規則未提及。",
      },
    ],
    suggestedMinutes: 3,
    difficulty: 2,
  },

  // ============================================================
  // p7-009 雙篇 email + email，難度 2
  // ============================================================
  {
    id: "p7-009",
    format: "double",
    title: "會議室預約與變更",
    passages: [
      {
        type: "email",
        label: "第一篇：預約確認信",
        text: `From: Laura Bennett <lbennett@hartleycc.com>
To: James Park <jpark@orionmarketing.com>
Subject: Reservation Confirmation - June 12
Date: May 28

Dear Mr. Park,

This message confirms your reservation of the Cedar Room at the Hartley Conference Center on Thursday, June 12, from 9:00 A.M. to 4:00 P.M. The Cedar Room seats up to 40 people and is equipped with a projector, a sound system, and a whiteboard.

Please note the following:
- Catering is not included in the room fee. If you would like food service, arrangements must be made by June 5.
- Parking passes are $8 each and must be requested at least one week before your event.

If you have any questions, feel free to contact me directly.

Best regards,
Laura Bennett
Event Coordinator, Hartley Conference Center`,
      },
      {
        type: "email",
        label: "第二篇：客戶回信",
        text: `From: James Park <jpark@orionmarketing.com>
To: Laura Bennett <lbennett@hartleycc.com>
Subject: Re: Reservation Confirmation - June 12
Date: June 1

Dear Ms. Bennett,

Thank you for the confirmation. Since I made the reservation, registration for our workshop has grown to 55 participants, so I am afraid the room we reserved will no longer be suitable. Could you let me know whether a larger room is available on the same date?

In addition, please reserve 20 parking passes for our group.

Finally, does the center's café offer lunch service for events, or should I contact an outside caterer? I understand time is short, so I will finalize the food arrangements as soon as I hear back from you.

Best regards,
James Park
Orion Marketing`,
      },
    ],
    questions: [
      {
        question: "Why did Ms. Bennett send the first e-mail?",
        options: [
          "To confirm a room reservation",
          "To announce a change in fees",
          "To promote the center's café",
          "To cancel an upcoming event",
        ],
        answer: 0,
        kind: "主旨",
        explanation:
          "定位句 \"This message confirms your reservation of the Cedar Room\"。(B) 費用只是附帶說明；(C) café 是第二封信才問起的；(D) 沒有取消任何活動。",
      },
      {
        question: "Why does Mr. Park want a different room?",
        options: [
          "The Cedar Room does not have a projector.",
          "The Cedar Room cannot seat all of the participants.",
          "The Cedar Room is unavailable on June 12.",
          "The Cedar Room is too expensive.",
        ],
        answer: 1,
        kind: "推論",
        explanation:
          "跨篇互參題：第一篇說 Cedar Room \"seats up to 40 people\"，第二篇說報名人數 \"has grown to 55 participants\"，55 > 40，故房間坐不下。(A) 第一篇明說有投影機，屬誘答；(C) 該日房間仍是他的預約；(D) 價格因素未提及。",
      },
      {
        question: "How much will Mr. Park most likely pay for parking passes?",
        options: ["$8", "$80", "$160", "$200"],
        answer: 2,
        kind: "細節",
        explanation:
          "跨篇互參題：第一篇 \"Parking passes are $8 each\"，第二篇 \"please reserve 20 parking passes\"，8 × 20 = $160。(A) 是單張價格；(B)(D) 為計算誘答。",
      },
      {
        question: "What is suggested about Mr. Park's catering arrangements?",
        options: [
          "They are included in the room fee.",
          "They will be handled by Ms. Bennett.",
          "He has only a few days left to complete them.",
          "He has already hired an outside caterer.",
        ],
        answer: 2,
        kind: "推論",
        explanation:
          "跨篇互參題：第一篇規定餐飲 \"arrangements must be made by June 5\"，第二篇寄於 June 1 且他自己也說 \"I understand time is short\"，可知只剩幾天可敲定。(A) 第一篇明說 \"Catering is not included\"；(B) 由客戶自行安排；(D) 他還在詢問是否需要外燴，尚未決定。",
      },
      {
        question: "What does Mr. Park ask Ms. Bennett about?",
        options: [
          "Extending the event hours",
          "Whether the center's café serves lunch for events",
          "Reducing the room rental fee",
          "Changing the date of the workshop",
        ],
        answer: 1,
        kind: "細節",
        explanation:
          "定位句 \"does the center's café offer lunch service for events, or should I contact an outside caterer?\"。(A)(C) 未提及；(D) 他要換的是更大的房間，日期不變（\"available on the same date\"）。",
      },
    ],
    suggestedMinutes: 7,
    difficulty: 2,
  },

  // ============================================================
  // p7-010 雙篇 webpage 課表 + email，難度 3
  // ============================================================
  {
    id: "p7-010",
    format: "double",
    title: "軟體研習課程與改期申請",
    passages: [
      {
        type: "webpage",
        label: "第一篇：課程時間表",
        text: `www.brightlinesoftware.com/training

Brightline Software - August Client Workshop Series

Date & Time | Workshop | Location | Fee
Monday, August 4, 10:00 A.M. | Getting Started with Brightline | Online | Free
Monday, August 11, 2:00 P.M. | Advanced Report Design | Room 210, Denton Office | $45
Monday, August 18, 10:00 A.M. | Data Migration Tools | Online | $45
Monday, August 25, 2:00 P.M. | Administrator Certification | Room 210, Denton Office | $90 (fee includes the certification exam)

Notes:
- All sessions except Administrator Certification are recorded. Registered participants receive a link to the recording within 24 hours.
- Cancellations made at least three days before a session qualify for a full refund.
- The Administrator Certification workshop will be offered again on November 17.`,
      },
      {
        type: "email",
        label: "第二篇：學員來信",
        text: `From: Karen Doyle <kdoyle@meridianlogistics.com>
To: training@brightlinesoftware.com
Subject: Registration change request
Date: August 21

Hello,

I am registered for the Administrator Certification workshop next Monday. Unfortunately, an important client meeting has just been moved to that same afternoon, so I will be unable to attend.

Could you transfer my registration to the next offering of the certification workshop? If a transfer is not possible, please cancel my registration instead.

By the way, I attended the online session on August 18 and found it extremely useful. The recording link was also a big help when I reviewed the material with my team.

Thank you for your help.

Karen Doyle
Systems Manager, Meridian Logistics`,
      },
    ],
    questions: [
      {
        question: "What is included in the fee for the August 25 workshop?",
        options: [
          "A software license",
          "A recording of the session",
          "A certification exam",
          "A printed training manual",
        ],
        answer: 2,
        kind: "細節",
        explanation:
          "定位句為課表 \"$90 (fee includes the certification exam)\"。(B) 是強誘答：備註明說 \"All sessions except Administrator Certification are recorded\"，唯獨這場沒有錄影；(A)(D) 未提及。",
      },
      {
        question: "Which workshop did Ms. Doyle attend?",
        options: [
          "Getting Started with Brightline",
          "Advanced Report Design",
          "Data Migration Tools",
          "Administrator Certification",
        ],
        answer: 2,
        kind: "細節",
        explanation:
          "跨篇互參題：信中只說 \"I attended the online session on August 18\"，對照課表 August 18 的線上課程是 Data Migration Tools。(A) 也是線上課但在 August 4，屬誘答；(B) 是實體課；(D) 她因故無法出席。",
      },
      {
        question: "What is suggested about Ms. Doyle's registration?",
        options: [
          "It qualifies for a full refund if canceled.",
          "It was made after the registration deadline.",
          "It cannot be transferred to another person.",
          "It has already been canceled automatically.",
        ],
        answer: 0,
        kind: "推論",
        explanation:
          "跨篇互參題：課表規定 \"Cancellations made at least three days before a session qualify for a full refund\"，她 8/21 來信，距 8/25 的課還有四天，符合全額退費條件。(B) 報名早已完成；(C) 她問的是換期不是轉讓；(D) 取消須經她申請，未自動發生。",
      },
      {
        question: "Why is Ms. Doyle unable to attend the workshop on August 25?",
        options: [
          "She will be traveling abroad.",
          "A client meeting was moved to that afternoon.",
          "She has not paid the workshop fee.",
          "Her team needs her at another training session.",
        ],
        answer: 1,
        kind: "細節",
        explanation:
          "定位句 \"an important client meeting has just been moved to that same afternoon, so I will be unable to attend\"。(A)(C)(D) 皆未提及；(D) 中的 team 一詞雖在信末出現（與團隊複習教材），但與缺席原因無關，屬誘答。",
      },
      {
        question: "If her request is approved, when will Ms. Doyle most likely attend the certification workshop?",
        options: ["On August 25", "On September 1", "On November 17", "Next August"],
        answer: 2,
        kind: "推論",
        explanation:
          "跨篇互參題：她請求 \"transfer my registration to the next offering of the certification workshop\"，對照課表備註 \"The Administrator Certification workshop will be offered again on November 17\"。(A) 是她無法出席的原場次；(B)(D) 文中無此場次。",
      },
    ],
    suggestedMinutes: 8,
    difficulty: 3,
  },

  // ============================================================
  // p7-011 雙篇 notice 公告 + chat，難度 3
  // ============================================================
  {
    id: "p7-011",
    format: "double",
    title: "消防警報檢查與住戶詢問",
    passages: [
      {
        type: "notice",
        label: "第一篇：住戶公告",
        text: `MAPLE GROVE APARTMENTS - NOTICE TO RESIDENTS

Annual Fire Alarm Inspection

On Tuesday, October 7, technicians from Sentinel Safety Systems will test the fire alarm in every unit. Inspections will take place between 9:00 A.M. and 1:00 P.M., and each visit should last no more than ten minutes.

Residents do not need to be home during the inspection; technicians will be accompanied by a member of the building staff at all times. However, please make sure that any pets are secured in a crate or in a separate room.

Please note: because the carpet in the fourth-floor hallway is being replaced that day, units 401 through 412 will instead be inspected on Wednesday, October 8, during the same hours.

Questions? Contact the building office at 555-0173.`,
      },
      {
        type: "chat",
        label: "第二篇：住戶與管理員訊息串",
        text: `Nina Petrov [8:40 A.M.]: Hi Omar, I just saw the notice about the fire alarm inspection. I work from home on Tuesdays—do I need to do anything before the technicians arrive?
Omar Haddad [8:47 A.M.]: Morning, Nina. Nothing on your end, really. Just make sure Biscuit is in his crate before 9.
Nina Petrov [8:49 A.M.]: Will do. One more question—I'm in unit 405. Does the Tuesday schedule apply to me?
Omar Haddad [8:52 A.M.]: Take another look at the last paragraph of the notice.
Nina Petrov [8:54 A.M.]: Oh, I completely missed that part. That timing actually works better for me anyway. Thanks!`,
      },
    ],
    questions: [
      {
        question: "What is the purpose of the notice?",
        options: [
          "To announce a change in building management",
          "To inform residents about an upcoming inspection",
          "To request payment for safety equipment",
          "To explain new rules about keeping pets",
        ],
        answer: 1,
        kind: "主旨",
        explanation:
          "定位句 \"technicians from Sentinel Safety Systems will test the fire alarm in every unit\"，公告核心是年度消防警報檢查的時程與注意事項。(A) 管理方未變動；(C) 未提費用；(D) 寵物只是配合事項，不是新規定。",
      },
      {
        question: "According to the notice, why will some units be inspected on October 8?",
        options: [
          "Their residents requested a later date.",
          "Their alarms were tested earlier in the year.",
          "Carpet work will block their hallway on October 7.",
          "The technicians are unavailable on October 7.",
        ],
        answer: 2,
        kind: "細節",
        explanation:
          "定位句 \"because the carpet in the fourth-floor hallway is being replaced that day, units 401 through 412 will instead be inspected on Wednesday, October 8\"。(A)(B)(D) 皆非文中所述原因。",
      },
      {
        question: "When will Ms. Petrov's unit most likely be inspected?",
        options: [
          "On Tuesday morning",
          "On Tuesday afternoon",
          "On Wednesday, October 8",
          "On a date she must arrange with the office",
        ],
        answer: 2,
        kind: "推論",
        explanation:
          "跨篇互參題：訊息串中她說 \"I'm in unit 405\"，對照公告 \"units 401 through 412 will instead be inspected on Wednesday, October 8\"，405 在此範圍內。(A) 是強誘答——她週二在家工作，但她的樓層當天鋪地毯改期；(D) 不需另行預約。",
      },
      {
        question: "At 8:52 A.M., what does Mr. Haddad most likely mean when he writes, \"Take another look at the last paragraph of the notice\"?",
        options: [
          "The notice contains a printing error.",
          "Ms. Petrov's question is answered in the notice.",
          "The inspection schedule has just been revised.",
          "Ms. Petrov should call the building office.",
        ],
        answer: 1,
        kind: "發話意圖",
        explanation:
          "Ms. Petrov 問 405 是否適用週二時程，Mr. Haddad 請她重看公告最後一段——該段正說明 401–412 改到週三，意即答案就寫在公告裡。她隨後回 \"Oh, I completely missed that part\" 也印證此意。(A)(C) 公告內容無誤也未再修改；(D) 他沒有要她致電辦公室。",
      },
      {
        question: "What is most likely true about Biscuit?",
        options: [
          "He is a member of the building staff.",
          "He is a technician from Sentinel Safety Systems.",
          "He is Ms. Petrov's pet.",
          "He is the building manager's assistant.",
        ],
        answer: 2,
        kind: "推論",
        explanation:
          "跨篇互參題：公告要求 \"please make sure that any pets are secured in a crate\"，Mr. Haddad 對 Ms. Petrov 說 \"make sure Biscuit is in his crate before 9\"，可推論 Biscuit 是她需要關進籠子的寵物。(A)(B)(D) 人不會被要求關進 crate，皆不合理。",
      },
    ],
    suggestedMinutes: 7,
    difficulty: 3,
  },

  // ============================================================
  // p7-012 雙篇 ad 廣告 + email，難度 2
  // ============================================================
  {
    id: "p7-012",
    format: "double",
    title: "洗窗服務廣告與估價詢問",
    passages: [
      {
        type: "ad",
        label: "第一篇：服務廣告",
        text: `CLEARVIEW WINDOW CLEANING
Sparkling results for homes and businesses since 2008

Our trained, fully insured crews clean interior and exterior windows on buildings of any size—from single-family homes to high-rise offices. We use eco-friendly cleaning solutions, and weekend appointments are available at no extra charge. Ask about our quarterly service plans, which guarantee the same crew for every visit.

APRIL SPRING SPECIAL: Receive 20% off any exterior cleaning of a building with three or more stories. Offer valid for services booked during the month of April.

First-time customers also receive a complimentary gutter inspection with any service.

Call 555-0126 or visit www.clearviewclean.com for a free estimate.`,
      },
      {
        type: "email",
        label: "第二篇：估價詢問信",
        text: `From: Grace Liu <gliu@aldergatepub.com>
To: info@clearviewclean.com
Subject: Estimate request
Date: April 9

Hello,

I saw your advertisement in the Harborside Weekly and would like to request an estimate for exterior window cleaning at Aldergate Publishing. Our five-story building is located at 47 Marsh Lane, and we have never used a professional window-cleaning service before.

Ideally, we would like the work done on a Saturday, when our office is closed. Also, we are considering signing up for a quarterly service plan—could you tell me whether the April discount would apply to the entire plan or only to the first visit?

I look forward to hearing from you.

Grace Liu
Facilities Manager, Aldergate Publishing`,
      },
    ],
    questions: [
      {
        question: "In the advertisement, what is indicated about weekend appointments?",
        options: [
          "They cost no more than weekday appointments.",
          "They must be booked a month in advance.",
          "They are available only for private homes.",
          "They are not offered during April.",
        ],
        answer: 0,
        kind: "細節",
        explanation:
          "定位句 \"weekend appointments are available at no extra charge\"，即週末服務不另外加價。(B) 預約前置時間未提及；(C) 住家與商辦皆可（\"for homes and businesses\"）；(D) 四月照常提供，無此限制。",
      },
      {
        question: "Why did Ms. Liu send the e-mail?",
        options: [
          "To reschedule an appointment",
          "To complain about a recent service",
          "To request a price estimate",
          "To apply for a job with Clearview",
        ],
        answer: 2,
        kind: "主旨",
        explanation:
          "定位句 \"would like to request an estimate for exterior window cleaning at Aldergate Publishing\"。(A) 尚無既有預約；(B) 她從未用過該服務，無從客訴；(D) 與求職無關。",
      },
      {
        question: "What is suggested about Aldergate Publishing?",
        options: [
          "It has used Clearview's services before.",
          "It is eligible for a 20% discount.",
          "It will pay extra for a Saturday appointment.",
          "It recently moved to Marsh Lane.",
        ],
        answer: 1,
        kind: "推論",
        explanation:
          "跨篇互參題：廣告的春季優惠條件是「三層樓以上建築的外窗清潔、四月內預約」，信中說明是 \"five-story building\"、需求為 exterior window cleaning，且來信日期為 April 9，完全符合。(A) 與 \"we have never used a professional window-cleaning service before\" 矛盾；(C) 廣告明說週末不加價；(D) 遷址未提及。",
      },
      {
        question: "What will Ms. Liu most likely receive at no charge?",
        options: [
          "A gutter inspection",
          "An interior window cleaning",
          "A year of quarterly service",
          "A set of cleaning supplies",
        ],
        answer: 0,
        kind: "推論",
        explanation:
          "跨篇互參題：廣告說 \"First-time customers also receive a complimentary gutter inspection with any service\"，信中她表明公司從未用過專業洗窗服務，屬首次客戶，故可免費獲得排水槽檢查。(B)(C)(D) 皆非免費項目。",
      },
      {
        question: "In the e-mail, the word \"apply\" is closest in meaning to",
        options: ["make a request", "put on", "be valid", "work hard"],
        answer: 2,
        kind: "同義",
        explanation:
          "定位句 \"whether the April discount would apply to the entire plan or only to the first visit\"，此處 apply 指折扣「適用、有效」，即 be valid。make a request（申請）、put on（塗抹）、work hard（努力）皆不符語境。",
      },
    ],
    suggestedMinutes: 7,
    difficulty: 2,
  },
];
