// TOEIC Part 6 段落填空題庫
// 20 篇文章（p6-001 ~ p6-020）× 每篇 4 題 = 80 題
// 文體分佈：email 8、notice 3、memo 3、article 3、letter 2、ad 1
// 每篇固定配置：文法 2 題、詞彙 1 題、句子插入 1 題（仿真實 Part 6）
// 難度：1=基礎（5 篇）、2=中階（8 篇）、3=高階 900 分等級（7 篇）

export interface Part6Question {
  options: [string, string, string, string];
  answer: number; // 0-3
  kind: "文法" | "詞彙" | "句子插入";
  explanation: string; // 繁體中文解說
}

export interface Part6Set {
  id: string; // "p6-001" 到 "p6-020"
  passageType: "email" | "notice" | "memo" | "article" | "letter" | "ad";
  title: string; // 繁中短標，如「客戶投訴回覆信」
  text: string; // 完整文章，四個空格以 [1]____ [2]____ [3]____ [4]____ 標示
  questions: [Part6Question, Part6Question, Part6Question, Part6Question]; // 對應 [1]-[4]
  difficulty: 1 | 2 | 3;
}

export const part6Sets: Part6Set[] = [
  // ===== p6-001 email / 難度 1 =====
  {
    id: "p6-001",
    passageType: "email",
    title: "客戶投訴回覆信",
    text: "Dear Ms. Alvarez,\n\nThank you for contacting us about the coffee maker you purchased last month. We sincerely apologize [1]____ the inconvenience you have experienced. After reviewing your description, our technicians confirmed that the heating unit in your model was defective. [2]____ We have already shipped it to your address, and it should arrive within five business days. [3]____, we have enclosed a coupon for 20 percent off your next order. If you have any further questions, please do not hesitate to contact our customer service team. We value your business and hope to [4]____ you again soon.\n\nSincerely,\nDaniel Reed\nCustomer Relations Manager\nBrewline Appliances",
    questions: [
      {
        options: ["at", "for", "on", "with"],
        answer: 1,
        kind: "文法",
        explanation:
          "apologize for + 名詞是固定搭配，表示「為某事道歉」，故選 for。apologize to 後面接道歉的對象（人），at、on、with 皆不與 apologize 搭配。",
      },
      {
        options: [
          "Unfortunately, the item you requested is currently out of stock.",
          "Please note that all sales are final and cannot be refunded.",
          "As a result, a free replacement unit has been prepared for you.",
          "Our store will be closed for renovation next week.",
        ],
        answer: 2,
        kind: "句子插入",
        explanation:
          "前文線索：技師確認加熱元件瑕疵；後文線索：We have already shipped it 的 it 必須有指涉對象，即插入句中的 replacement unit（免費更換品）。(A) 缺貨與後文「已寄出」矛盾；(B) 概不退換與道歉補償的語氣相反；(D) 店面整修與本信主題無關。",
      },
      {
        options: ["However", "Otherwise", "In addition", "For example"],
        answer: 2,
        kind: "文法",
        explanation:
          "前句說已寄出更換品，本句再附上折價券，是「額外補償」的追加訊息，用 In addition（此外）。However 表轉折、Otherwise 表否則、For example 表舉例，邏輯皆不合。",
      },
      {
        options: ["observe", "serve", "reserve", "deserve"],
        answer: 1,
        kind: "詞彙",
        explanation:
          "hope to serve you again 是客服結尾慣用語，意為「期待再次為您服務」。observe（觀察）、reserve（預訂）、deserve（應得）字形相近但語意皆不合。",
      },
    ],
    difficulty: 1,
  },
  // ===== p6-002 email / 難度 1 =====
  {
    id: "p6-002",
    passageType: "email",
    title: "面試邀約通知",
    text: "Dear Mr. Chen,\n\nThank you for applying for the marketing coordinator position at Solvex Media. We were impressed by your resume and would like to invite you to an interview [1]____ Tuesday, July 14, at 10:00 A.M. The interview will take place at our downtown office and will last approximately one hour. [2]____ You will meet with the hiring manager and two members of the marketing team. Please bring a copy of your portfolio and a list of [3]____. If the scheduled time is not convenient, please respond [4]____ so that we can arrange an alternative.\n\nBest regards,\nLaura Kim\nHuman Resources, Solvex Media",
    questions: [
      {
        options: ["in", "at", "on", "by"],
        answer: 2,
        kind: "文法",
        explanation:
          "特定日期（Tuesday, July 14）前用介係詞 on。in 用於月份、年份，at 用於時刻（如 at 10:00），by 表「在……之前」，皆不用於特定日期。",
      },
      {
        options: [
          "We regret to inform you that the position has been filled.",
          "Please arrive ten minutes early to check in at the front desk.",
          "Thank you for your recent purchase from our online store.",
          "The company was founded more than fifty years ago.",
        ],
        answer: 1,
        kind: "句子插入",
        explanation:
          "前文線索：說明面試地點與時長，此處接「請提早十分鐘到櫃檯報到」的到場指示，後文再接面試流程（會見主管與團隊），銜接自然。(A) 職缺已補與邀約面試矛盾；(C) 感謝購物與求職信件無關；(D) 公司歷史與面試指示無關。",
      },
      {
        options: ["preferences", "conferences", "references", "inferences"],
        answer: 2,
        kind: "詞彙",
        explanation:
          "面試攜帶物品慣例是 a list of references（推薦人名單）。preferences（偏好）、conferences（會議）、inferences（推論）字尾相同但語意不合。",
      },
      {
        options: ["prompt", "promptness", "prompted", "promptly"],
        answer: 3,
        kind: "文法",
        explanation:
          "空格修飾動詞 respond，需用副詞 promptly（儘速地）。prompt 是形容詞、promptness 是名詞、prompted 是動詞過去式，皆不能修飾動詞。",
      },
    ],
    difficulty: 1,
  },
  // ===== p6-003 email / 難度 2 =====
  {
    id: "p6-003",
    passageType: "email",
    title: "訂閱續約提醒",
    text: "Dear Valued Subscriber,\n\nOur records indicate that your annual subscription to Market Insight Weekly [1]____ on August 31. To continue enjoying uninterrupted access to our reports, we encourage you to renew before that date. Subscribers who renew early will [2]____ a 15 percent discount on the regular rate. [3]____ Simply log in to your account and select the renewal option that best suits your needs. Should you decide not to renew, your access will end [4]____ on the expiration date, and any saved articles will no longer be available.\n\nWe thank you for your continued support.\n\nThe Market Insight Team",
    questions: [
      {
        options: ["expired", "will expire", "has expired", "expiring"],
        answer: 1,
        kind: "文法",
        explanation:
          "後文說 renew before that date（在該日期前續約），表示 8 月 31 日尚未到期，屬未來事件，用未來式 will expire。expired 與 has expired 都表示已過期，與後文矛盾；expiring 非限定動詞，不能單獨作述語。",
      },
      {
        options: ["arrive", "proceed", "receive", "respond"],
        answer: 2,
        kind: "詞彙",
        explanation:
          "receive a discount 意為「獲得折扣」，及物動詞後接受詞 discount。arrive（到達）、proceed（進行）、respond（回應）皆為不及物動詞，不能直接接受詞。",
      },
      {
        options: [
          "Unfortunately, the discount is no longer available.",
          "Printed copies of the magazine were discontinued several years ago.",
          "Your payment could not be processed at this time.",
          "The process is quick and can be completed entirely online.",
        ],
        answer: 3,
        kind: "句子插入",
        explanation:
          "後文線索：Simply log in to your account（只需登入帳戶）正是在說明「線上完成、流程快速」的具體步驟，插入句與後句形成「總述＋操作」的銜接。(A) 折扣失效與前句提供折扣矛盾；(B) 停印紙本與續約流程無關；(C) 付款失敗與鼓勵續約的語境不符。",
      },
      {
        options: ["automatic", "automatically", "automation", "automate"],
        answer: 1,
        kind: "文法",
        explanation:
          "空格修飾動詞 end，需用副詞 automatically（自動地）。automatic 是形容詞、automation 是名詞、automate 是動詞，皆不能修飾動詞。",
      },
    ],
    difficulty: 2,
  },
  // ===== p6-004 email / 難度 2 =====
  {
    id: "p6-004",
    passageType: "email",
    title: "出差行程確認",
    text: "Dear Mr. Osei,\n\nThis message confirms the travel arrangements for your upcoming business trip to Denver. You are scheduled to depart from Atlanta on Monday, September 14, at 8:45 A.M. [1]____ your arrival, a driver from Summit Executive Cars will meet you at the airport and take you [2]____ to the Grandview Hotel. Your room has been booked for three nights. [3]____ A detailed itinerary, including the addresses of all meeting locations, is attached to this e-mail. Please review it carefully and let me know if any [4]____ are needed before the end of this week.\n\nKind regards,\nPriya Natarajan\nTravel Coordinator",
    questions: [
      {
        options: ["Among", "Upon", "Between", "Along"],
        answer: 1,
        kind: "文法",
        explanation:
          "Upon your arrival 意為「您一抵達時」，upon + 名詞是表「一……就……」的慣用介係詞。Among（在……之中）、Between（在兩者之間）、Along（沿著）語意皆不合。",
      },
      {
        options: ["direct", "direction", "directly", "directed"],
        answer: 2,
        kind: "文法",
        explanation:
          "空格修飾動詞片語 take you to the hotel，需用副詞 directly（直接地）。direct 是形容詞或動詞、direction 是名詞、directed 是過去分詞，皆不能修飾動詞。",
      },
      {
        options: [
          "Breakfast and Internet access are included in the room rate.",
          "The flight to Denver has unfortunately been canceled.",
          "We appreciate your application for the sales position.",
          "The hotel is currently closed for renovations.",
        ],
        answer: 0,
        kind: "句子插入",
        explanation:
          "前文線索：Your room has been booked for three nights 說明訂房，插入句補充房價包含早餐與網路，同屬住宿細節，銜接自然。(B) 航班取消與本信「確認行程」的目的矛盾；(C) 應徵職位與出差安排無關；(D) 飯店歇業與已訂房三晚矛盾。",
      },
      {
        options: ["admissions", "achievements", "appliances", "adjustments"],
        answer: 3,
        kind: "詞彙",
        explanation:
          "if any adjustments are needed 意為「若需任何調整」，指行程更動。admissions（入場許可）、achievements（成就）、appliances（家電）語意皆不合。",
      },
    ],
    difficulty: 2,
  },
  // ===== p6-005 email / 難度 3 =====
  {
    id: "p6-005",
    passageType: "email",
    title: "產品召回通知",
    text: "Dear Fairlane Customer,\n\nWe are writing to inform you of a voluntary recall of the Fairlane XR2 desk lamp, [1]____ between January and March of this year. Internal testing revealed that a small number of units contain faulty wiring that could overheat during extended use. Although no injuries [2]____ so far, we are taking this precaution to ensure your safety. [3]____ Once we receive the product, a full refund will be issued within ten business days, [4]____ of where the lamp was originally purchased. We apologize for any inconvenience and thank you for your understanding.\n\nSincerely,\nFairlane Home Products",
    questions: [
      {
        options: ["selling", "sells", "sold", "to sell"],
        answer: 2,
        kind: "文法",
        explanation:
          "空格是分詞片語修飾 desk lamp，檯燈是「被販售」的對象，用過去分詞 sold（= which was sold）表被動。selling 是主動分詞，語態錯誤；sells 是限定動詞，前面沒有連接詞不能再接子句；to sell 不定詞表目的，語意不合。",
      },
      {
        options: ["have been reported", "had reported", "will be reported", "were reporting"],
        answer: 0,
        kind: "文法",
        explanation:
          "so far（至今）是現在完成式的標記，且 injuries 是「被通報」，需用現在完成式被動 have been reported。had reported 是過去完成式且為主動；will be reported 未來式與 so far 矛盾；were reporting 進行式主動，主詞 injuries 不會自己通報。",
      },
      {
        options: [
          "The XR2 has consistently been one of our best-selling products.",
          "Affected customers should stop using the lamp immediately and return it to any Fairlane store.",
          "Customers may purchase replacement bulbs on our Web site.",
          "We are pleased to announce that the issue has been fully resolved.",
        ],
        answer: 1,
        kind: "句子插入",
        explanation:
          "後文線索：Once we receive the product（一旦我們收到產品）的 the product 必須先有「顧客退回產品」的前提，插入句「立即停用並退回門市」正好建立這個銜接。(A) 暢銷紀錄看似合理但無法引出「我們收到產品」；(C) 買燈泡與召回退款流程無關；(D) 問題已解決與召回進行中矛盾。",
      },
      {
        options: ["instead", "regardless", "because", "in spite"],
        answer: 1,
        kind: "詞彙",
        explanation:
          "regardless of + 名詞子句意為「不論……」，即不論原購買地點都可退款。instead of 表「取而代之」、because of 表原因、in spite of 表讓步，套入「不論購買地點」的語意皆不通。",
      },
    ],
    difficulty: 3,
  },
  // ===== p6-006 email / 難度 1 =====
  {
    id: "p6-006",
    passageType: "email",
    title: "會議改期通知",
    text: "Dear Team,\n\nPlease be advised that the weekly project meeting originally scheduled for Thursday, June 11, has been [1]____ to Friday, June 12, at 2:00 P.M. Mr. Howard, our client representative, is unable to attend on the original date because of a conflict in [2]____ schedule. The meeting will still be held in Conference Room B. [3]____ Please review the document carefully and prepare any questions you may have. If you cannot attend at the new time, please inform me by Wednesday so that I can have the meeting minutes sent to you [4]____.\n\nRegards,\nMelissa Grant\nProject Manager",
    questions: [
      {
        options: ["reminded", "removed", "rescheduled", "resigned"],
        answer: 2,
        kind: "詞彙",
        explanation:
          "會議從週四改到週五，用 rescheduled（改期）。reminded（提醒）、removed（移除）、resigned（辭職）皆與「改到新時間」的語意不合。",
      },
      {
        options: ["he", "him", "his", "himself"],
        answer: 2,
        kind: "文法",
        explanation:
          "空格後接名詞 schedule，需用所有格 his，指涉前面的 Mr. Howard。he 是主格、him 是受格、himself 是反身代名詞，皆不能直接修飾名詞。",
      },
      {
        options: [
          "The meeting has been canceled until further notice.",
          "Mr. Howard will be retiring at the end of this month.",
          "Lunch will be provided in the cafeteria on Mondays.",
          "A draft of the quarterly report will be distributed by e-mail tomorrow.",
        ],
        answer: 3,
        kind: "句子插入",
        explanation:
          "後文線索：Please review the document carefully 的 the document 需要先出現指涉對象，插入句提到明天寄出的季報告草稿，正好是這份文件。(A) 會議取消與前句「改在週五舉行」矛盾；(B) Howard 退休與他將出席新會議的語境不符；(C) 供餐訊息與會議準備無關。",
      },
      {
        options: ["separate", "separately", "separation", "separated"],
        answer: 1,
        kind: "文法",
        explanation:
          "空格修飾被動動詞 sent，需用副詞 separately（另行、單獨地），即會議紀錄會另外寄給缺席者。separate 是形容詞或動詞、separation 是名詞、separated 是過去分詞，皆不能修飾動詞。",
      },
    ],
    difficulty: 1,
  },
  // ===== p6-007 email / 難度 2 =====
  {
    id: "p6-007",
    passageType: "email",
    title: "研討會後續信",
    text: "Dear Ms. Fontaine,\n\nThank you for attending the Digital Marketing Summit last Thursday. We hope you found the sessions both informative and [1]____. Presentation slides from all twelve speakers are now available on our Web site. To download them, simply enter the access code printed on your name badge. [2]____ It will remain active until the end of the month, so we recommend downloading any materials you need before then. [3]____, a recording of the keynote speech will be posted next week. We look forward to [4]____ you at next year's summit, which will be held in San Diego.\n\nSincerely,\nEvents Team\nBrightpath Conferences",
    questions: [
      {
        options: ["engaging", "reluctant", "durable", "spacious"],
        answer: 0,
        kind: "詞彙",
        explanation:
          "與 informative（有收穫的）並列形容研討會場次，engaging（引人入勝的）語意最合。reluctant（不情願的）形容人的態度、durable（耐用的）形容物品、spacious（寬敞的）形容空間，皆不能形容課程內容。",
      },
      {
        options: [
          "Registration for this year's summit closes on Friday.",
          "Unfortunately, the slides are no longer available.",
          "Please note that the code is valid for a limited time only.",
          "Your name badge will be mailed to you within a week.",
        ],
        answer: 2,
        kind: "句子插入",
        explanation:
          "後文線索：It will remain active until the end of the month 的 It 必須指涉插入句中的 the code，且「有效期限」與後句「月底前仍有效」語意連貫。(A) 今年峰會已於上週結束，報名截止與時序矛盾；(B) 簡報已下架與前句「現已可下載」矛盾；(D) 名牌是與會時已配戴的物品，不會事後寄送。",
      },
      {
        options: ["Nevertheless", "Otherwise", "Instead", "Moreover"],
        answer: 3,
        kind: "文法",
        explanation:
          "前文說可下載簡報，本句再補充下週會上架主題演講錄影，屬追加資訊，用 Moreover（此外）。Nevertheless 表轉折、Otherwise 表否則、Instead 表取而代之，邏輯皆不合。",
      },
      {
        options: ["see", "seeing", "saw", "seen"],
        answer: 1,
        kind: "文法",
        explanation:
          "look forward to 的 to 是介係詞，後面必須接動名詞 seeing。誤把 to 當不定詞而選原形 see 是最常見陷阱；saw 是過去式、seen 是過去分詞，皆不能接在介係詞後。",
      },
    ],
    difficulty: 2,
  },
  // ===== p6-008 email / 難度 3 =====
  {
    id: "p6-008",
    passageType: "email",
    title: "供應商調價通知",
    text: "Dear Mr. Whitfield,\n\nFor the past six years, Cascade Packaging has been proud to supply Rowan Foods with high-quality containers at stable prices. [1]____, rising costs for raw materials and freight have made our current rates unsustainable. Effective October 1, prices for all corrugated products will increase by an average of six percent. [2]____ We are confident that our products will remain competitively priced compared with [3]____ of other suppliers in the region. Orders placed before September 20 will be [4]____ at current prices, so we encourage you to plan your purchases accordingly. Thank you for your continued partnership.\n\nSincerely,\nElena Vasquez\nSales Director, Cascade Packaging",
    questions: [
      {
        options: ["However", "Consequently", "Likewise", "In particular"],
        answer: 0,
        kind: "文法",
        explanation:
          "前句說六年來價格穩定，本句轉為「成本上漲導致現行價格難以維持」，語意轉折，用 However。Consequently（因此）是強誘答，但「價格穩定」不是「成本上漲」的原因，因果不成立；Likewise 表同樣地、In particular 表尤其，皆不合。",
      },
      {
        options: [
          "We have therefore decided to discontinue our container line.",
          "A revised price list reflecting these changes is enclosed for your review.",
          "Cascade Packaging was founded in 1998 by two engineers.",
          "As a result, your most recent order has been canceled.",
        ],
        answer: 1,
        kind: "句子插入",
        explanation:
          "前文線索：Effective October 1 宣布調漲，插入句的 these changes 直接指涉這次調價，並附上新價目表供客戶核閱，是調價通知的標準後續。(A) 停產與「調價後繼續供貨」矛盾；(C) 公司沿革與調價說明無關；(D) 取消訂單與信末「鼓勵提前下單」矛盾。",
      },
      {
        options: ["that", "them", "those", "theirs"],
        answer: 2,
        kind: "文法",
        explanation:
          "空格代替複數名詞 products（或 prices），與 of other suppliers 連用需用指示代名詞 those。that 只能代替單數名詞，是典型誘答；them 不能後接 of 片語作比較對象；theirs 是所有格代名詞，後面不能再接 of other suppliers。",
      },
      {
        options: ["estimated", "admired", "persuaded", "honored"],
        answer: 3,
        kind: "詞彙",
        explanation:
          "honor 在商業英文中指「履行（承諾的價格、條件）」，orders will be honored at current prices 即「照現行價格計價」。estimated（估算）、admired（欽佩）、persuaded（說服）語意皆不合。",
      },
    ],
    difficulty: 3,
  },
  // ===== p6-009 notice / 難度 1 =====
  {
    id: "p6-009",
    passageType: "notice",
    title: "電梯維修公告",
    text: "NOTICE TO ALL TENANTS\n\nPlease be aware that the main elevator in the Hartley Building will be out of service [1]____ Monday, March 2, to Wednesday, March 4, for scheduled maintenance. During this period, tenants are asked to use the stairs or the freight elevator at the rear of the building. [2]____ We apologize for the inconvenience and appreciate your [3]____ while this essential work is carried out. If you have questions or special needs, please contact the building manager, Mr. Dawson, who [4]____ available in Office 101 on the first floor.\n\nHartley Property Management",
    questions: [
      {
        options: ["between", "since", "from", "at"],
        answer: 2,
        kind: "文法",
        explanation:
          "後文有 to Wednesday，from A to B 表「從 A 到 B」的期間。between 是誘答，但必須搭配 and（between A and B）；since 表「自……以來」需搭配完成式；at 用於時刻。",
      },
      {
        options: [
          "The freight elevator is located next to the loading dock.",
          "The building will be closed to all tenants during the repairs.",
          "Rent payments are due on the first day of each month.",
          "Thank you for attending last week's tenant meeting.",
        ],
        answer: 0,
        kind: "句子插入",
        explanation:
          "前文線索：前句請住戶改用樓梯或後方貨梯，插入句補充貨梯的具體位置（卸貨區旁），是對前句指示的自然延伸。(B) 大樓封閉與「請住戶改走樓梯」矛盾；(C) 繳租期限與電梯維修無關；(D) 住戶會議與本公告主題無關。",
      },
      {
        options: ["patience", "absence", "currency", "appliance"],
        answer: 0,
        kind: "詞彙",
        explanation:
          "appreciate your patience（感謝您的耐心）是公告慣用語，對應施工期間的不便。absence（缺席）、currency（貨幣）、appliance（家電）語意皆不合。",
      },
      {
        options: ["are", "is", "were", "being"],
        answer: 1,
        kind: "文法",
        explanation:
          "關係代名詞 who 指涉單數先行詞 Mr. Dawson，且描述目前常態，用單數現在式 is。are 是複數；were 是過去式，與公告的現在時態不符；being 非限定動詞，不能單獨作述語。",
      },
    ],
    difficulty: 1,
  },
  // ===== p6-010 notice / 難度 2 =====
  {
    id: "p6-010",
    passageType: "notice",
    title: "停車場整修公告",
    text: "NOTICE\n\nBeginning Monday, August 10, the employee parking lot on Vine Street will be closed for approximately two weeks [1]____ the surface can be repaved. During the closure, employees may park free of charge at the municipal garage on Fourth Avenue. [2]____ Simply show it to the attendant when entering the garage. Employees who normally ride bicycles to work will not be [3]____ by the project, as the bicycle racks will remain accessible from the side entrance. We expect the newly paved lot to reopen [4]____ August 24. Thank you for your cooperation.\n\nFacilities Department\nCorestone Financial",
    questions: [
      {
        options: ["in order to", "because of", "so that", "despite"],
        answer: 2,
        kind: "文法",
        explanation:
          "空格後是完整子句 the surface can be repaved，需用連接詞 so that（以便）。in order to 後接原形動詞；because of 與 despite 是介係詞，後只能接名詞，皆不能接子句。",
      },
      {
        options: [
          "The municipal garage charges five dollars per hour.",
          "Bicycles are not permitted anywhere on the property.",
          "The Vine Street lot has already reopened to all staff.",
          "A temporary parking permit is attached to this notice.",
        ],
        answer: 3,
        kind: "句子插入",
        explanation:
          "後文線索：Simply show it to the attendant 的 it 必須指涉插入句中的 temporary parking permit（臨時停車證），「出示證件給管理員」才說得通。(A) 每小時收費五元與前句 free of charge 矛盾；(B) 禁停自行車與後文「自行車架照常開放」矛盾；(C) 停車場已重新開放與「8 月 10 日起關閉」矛盾。",
      },
      {
        options: ["effected", "afforded", "affected", "offended"],
        answer: 2,
        kind: "詞彙",
        explanation:
          "will not be affected by 意為「不受……影響」。effected（實現、促成）與 affected 拼字僅一字母之差，是經典混淆陷阱；afforded（負擔得起）、offended（冒犯）語意皆不合。",
      },
      {
        options: ["in", "at", "to", "on"],
        answer: 3,
        kind: "文法",
        explanation:
          "特定日期 August 24 前用介係詞 on。in 用於月份或年份、at 用於時刻、to 表方向，皆不用於特定日期。",
      },
    ],
    difficulty: 2,
  },
  // ===== p6-011 notice / 難度 2 =====
  {
    id: "p6-011",
    passageType: "notice",
    title: "圖書館延長開放時間",
    text: "MILLBROOK PUBLIC LIBRARY - REVISED HOURS\n\nStarting September 1, the Millbrook Public Library will extend its weekday hours to better serve patrons [1]____ work during the day. The library will now remain open until 9:00 P.M., Monday through Thursday. Weekend hours will stay [2]____. [3]____ The survey showed that evening access was the most requested improvement among working adults. Additional staff members have been hired to cover the new evening shifts. Patrons are reminded that the reading room closes fifteen minutes [4]____ the rest of the building. For a complete schedule, please visit our Web site.\n\n- Library Administration",
    questions: [
      {
        options: ["who", "whose", "which", "whom"],
        answer: 0,
        kind: "文法",
        explanation:
          "先行詞 patrons（讀者）是人，且空格在關係子句中作主詞（____ work during the day），用主格關係代名詞 who。whose 後需接名詞；which 用於事物；whom 是受格，不能作子句主詞。",
      },
      {
        options: ["exchanged", "unchanged", "overcharged", "recharged"],
        answer: 1,
        kind: "詞彙",
        explanation:
          "stay unchanged 意為「維持不變」，即週末開放時間不受影響。exchanged（交換）、overcharged（超收費用）、recharged（充電）字形相近但語意皆不合。",
      },
      {
        options: [
          "The library will be closed for the entire month of September.",
          "Evening hours were eliminated because of low attendance.",
          "The decision was based on responses to a community survey conducted last spring.",
          "A new branch is scheduled to open downtown next year.",
        ],
        answer: 2,
        kind: "句子插入",
        explanation:
          "後文線索：The survey showed 的 the survey 必須先有指涉對象，插入句提到「去年春天的社區問卷調查」，正好建立這個連結。(A) 整月閉館與「9 月 1 日起延長開放」矛盾；(B) 取消夜間時段與「延長至晚上九點」矛盾；(D) 新分館與延長時間的決策依據無關。",
      },
      {
        options: ["until", "by", "before", "during"],
        answer: 2,
        kind: "文法",
        explanation:
          "closes fifteen minutes before the rest of the building 意為「比大樓其他區域提早十五分鐘關閉」，before 表「早於」。until 表持續到某時點、by 表期限、during 表期間，套入「提早十五分鐘」的比較語意皆不通。",
      },
    ],
    difficulty: 2,
  },
  // ===== p6-012 memo / 難度 2 =====
  {
    id: "p6-012",
    passageType: "memo",
    title: "差旅報銷新制備忘錄",
    text: "MEMO\n\nTo: All Staff\nFrom: Gordon Hale, Finance Director\nRe: Travel expense reports\n\nEffective immediately, all travel expense reports must be submitted through the new online portal [1]____ than by paper form. The change is intended to shorten processing times and reduce errors. Employees may now [2]____ receipts electronically by scanning them or photographing them with a smartphone. [3]____ Reports submitted by the fifth of the month will be reimbursed in that month's payroll. Anything received after that date will be processed the [4]____ month. Training sessions on the new portal will be offered on Tuesday and Thursday of next week. Questions may be directed to the finance help desk.",
    questions: [
      {
        options: ["other", "rather", "more", "less"],
        answer: 1,
        kind: "文法",
        explanation:
          "rather than 意為「而非」，表示改用線上系統、不再用紙本表格。other than 表「除了」語意不合；more than 與 less than 表數量比較，此處並非比較數量。",
      },
      {
        options: ["omit", "permit", "emit", "submit"],
        answer: 3,
        kind: "詞彙",
        explanation:
          "submit receipts（提交收據）符合報銷流程語意。omit（省略）、permit（允許）、emit（排放）同為 -mit 結尾的形近字，是典型詞彙陷阱，語意皆不合。",
      },
      {
        options: [
          "Paper forms are available at the reception desk for your convenience.",
          "Please note that the timing of your submission affects when you will be repaid.",
          "The finance department will be closed for the rest of the month.",
          "Travel budgets have been increased by ten percent this year.",
        ],
        answer: 1,
        kind: "句子插入",
        explanation:
          "後文線索：接下來兩句都在講「幾號前提交、哪個月核銷」，插入句先總述「提交時間會影響入帳時間」，形成「總述＋細節」的銜接。(A) 提供紙本表格與首句「不再用紙本」矛盾；(C) 財務部門關閉與「下週開辦教育訓練」矛盾；(D) 預算調升與報銷流程無關。",
      },
      {
        options: ["follow", "follows", "following", "followed"],
        answer: 2,
        kind: "文法",
        explanation:
          "the following month（次月）以現在分詞 following 作形容詞修飾 month。follow 與 follows 是動詞，不能直接修飾名詞；followed 是過去分詞，the followed month 不成立。",
      },
    ],
    difficulty: 2,
  },
  // ===== p6-013 memo / 難度 3 =====
  {
    id: "p6-013",
    passageType: "memo",
    title: "辦公室搬遷備忘錄",
    text: "MEMO\n\nTo: All Department Heads\nFrom: Sandra Liu, Operations Manager\nRe: Relocation to Meridian Tower\n\nAs announced at last month's briefing, our headquarters will relocate to Meridian Tower during the first week of November. Packing crates and labels [1]____ to each department by October 20. Please ensure that all files and equipment are packed and clearly labeled before Friday, October 30. [2]____ Any items left unlabeled after that date may not arrive at the correct floor of the new building. The IT team will disconnect computers on the final afternoon and reinstall [3]____ at the new location over the weekend, [4]____ minimizing disruption to normal operations. A detailed floor plan will be circulated shortly. Thank you for your cooperation.",
    questions: [
      {
        options: ["will be delivered", "were delivered", "have delivered", "are delivering"],
        answer: 0,
        kind: "文法",
        explanation:
          "by October 20 指未來期限（搬遷在 11 月），且包裝箱是「被送達」，需用未來式被動 will be delivered。were delivered 是過去式，與尚未發生的搬遷時程矛盾；have delivered 與 are delivering 皆為主動語態，主詞 crates and labels 不會自己遞送。",
      },
      {
        options: [
          "The move has been postponed until further notice.",
          "Meridian Tower offers panoramic views of the harbor.",
          "Movers will collect only those crates that display the official orange labels.",
          "Employees should discard their computers before the move.",
        ],
        answer: 2,
        kind: "句子插入",
        explanation:
          "前後文線索：前句要求「清楚貼上標籤」，後句警告「未貼標籤的物品可能送錯樓層」，插入句「搬家公司只收貼有官方橘色標籤的箱子」正好解釋為何標籤如此關鍵。(A) 搬遷延期與全文時程矛盾；(B) 高塔景觀是主題相關的強誘答，但無法銜接前後的標籤脈絡；(D) 丟棄電腦與後文「IT 團隊將重新安裝電腦」矛盾。",
      },
      {
        options: ["it", "them", "this", "theirs"],
        answer: 1,
        kind: "文法",
        explanation:
          "reinstall 的受詞指涉前面的複數名詞 computers，用受格複數代名詞 them。it 與 this 只能指單數；theirs 是所有格代名詞，作受詞時無法指涉 computers 本身。",
      },
      {
        options: ["whereas", "despite", "thereby", "unless"],
        answer: 2,
        kind: "詞彙",
        explanation:
          "thereby + V-ing 意為「藉此……」，表示週末施工因而將營運干擾降到最低。despite minimizing 文法上可行但語意矛盾（「儘管減少干擾」不通）；whereas 與 unless 是連接詞，後面需接完整子句，不能直接接 V-ing。",
      },
    ],
    difficulty: 3,
  },
  // ===== p6-014 memo / 難度 3 =====
  {
    id: "p6-014",
    passageType: "memo",
    title: "節能措施備忘錄",
    text: "MEMO\n\nTo: All Employees\nFrom: Facilities Management\nRe: Energy conservation initiative\n\nIn response to rising utility costs, Kestrel Manufacturing will introduce several energy-saving measures beginning next month. Motion-activated lighting will be [1]____ in all storage areas and restrooms, and thermostats in the office wing will be adjusted by two degrees. [2]____ Similar programs at our Dayton facility reduced electricity use by nearly twelve percent within a year. Employees can support the initiative by shutting down workstations at the end of each shift and by reporting equipment that runs [3]____. Suggestions for further savings are welcome and may be submitted [4]____ the facilities office at any time. Thank you for helping us reach our conservation goals.",
    questions: [
      {
        options: ["instructed", "installed", "insulted", "inspired"],
        answer: 1,
        kind: "詞彙",
        explanation:
          "感應照明是「被安裝」在倉儲區與洗手間，用 installed。instructed（指導）、insulted（侮辱）、inspired（激勵）皆為 in- 開頭的形近字，語意不合。",
      },
      {
        options: [
          "These changes are expected to lower our energy bills considerably.",
          "The company has decided to cancel the initiative.",
          "Utility costs have remained stable for the past decade.",
          "New employees must complete safety training within thirty days.",
        ],
        answer: 0,
        kind: "句子插入",
        explanation:
          "前後文線索：前句列出兩項節能措施，後句以 Dayton 廠「一年省電近 12%」的實績佐證，插入句「這些改變預計能大幅降低電費」正好承接措施、並由後句提供證據。(B) 取消計畫與「下月開始實施」矛盾；(C) 水電費十年穩定與首句「成本上漲」矛盾；(D) 新人安全訓練與節能主題無關。",
      },
      {
        options: ["unnecessary", "necessity", "unnecessarily", "necessitate"],
        answer: 2,
        kind: "文法",
        explanation:
          "空格修飾動詞 runs，指設備「不必要地」持續運轉（如下班未關機），需用副詞 unnecessarily。unnecessary 是形容詞、necessity 是名詞、necessitate 是動詞，皆不能修飾動詞。",
      },
      {
        options: ["for", "by", "to", "with"],
        answer: 2,
        kind: "文法",
        explanation:
          "submit A to B 表「將 A 提交給 B」，建議是提交「給」設施辦公室，用 to。by 表方式或動作者、for 表目的、with 表伴隨，皆不合 submit 的搭配。",
      },
    ],
    difficulty: 3,
  },
  // ===== p6-015 article / 難度 2 =====
  {
    id: "p6-015",
    passageType: "article",
    title: "老字號烘焙坊展店報導",
    text: "GREENVILLE (June 3) - Harper's Bakery, a family-owned business that has served downtown Greenville for over thirty years, announced plans to open [1]____ second location this fall. The new shop will occupy the former bookstore on Colby Avenue, a space nearly twice the size of the original bakery. [2]____ Owner Marta Harper said the expansion became possible after the bakery's wholesale orders doubled last year. \"We simply outgrew our kitchen,\" she explained. The Colby Avenue store [3]____ fifteen new employees, including four bakers. Residents interested in applying should visit the bakery's Web site for a list of [4]____ positions.\n\n- Greenville Courier",
    questions: [
      {
        options: ["their", "it's", "its", "them"],
        answer: 2,
        kind: "文法",
        explanation:
          "空格後接名詞 second location，需用所有格 its，指涉單數主詞 Harper's Bakery（公司視為單數）。their 是複數所有格；it's 是 it is 的縮寫，拼字陷阱；them 是受格，不能修飾名詞。",
      },
      {
        options: [
          "The bookstore is expected to reopen at that location next month.",
          "It will also feature a small cafe with seating for twenty customers.",
          "Ms. Harper founded the bakery in Chicago last year.",
          "Wholesale orders have declined steadily in recent years.",
        ],
        answer: 1,
        kind: "句子插入",
        explanation:
          "前文線索：前句描述新店址空間近原店兩倍大，插入句的 It 指涉 the new shop，補充「還將附設可容納二十人的小咖啡座」，延續對新店的介紹。(A) 書店重新開幕與「新店將進駐原書店空間」矛盾；(C) 去年創立於芝加哥與「深耕 Greenville 三十多年」矛盾；(D) 批發訂單下滑與後文「訂單翻倍」矛盾。",
      },
      {
        options: ["hired", "will hire", "has hired", "hiring"],
        answer: 1,
        kind: "文法",
        explanation:
          "新店 this fall（今年秋天）才開幕，招募十五名員工是未來的事，用未來式 will hire。hired 過去式與 has hired 現在完成式都表示已發生，與時序矛盾；hiring 非限定動詞，不能單獨作述語。",
      },
      {
        options: ["payable", "reversible", "available", "responsible"],
        answer: 2,
        kind: "詞彙",
        explanation:
          "a list of available positions 意為「開放中的職缺清單」。payable（應付的）、reversible（可逆的）、responsible（負責的）皆不能形容「開放應徵的職位」。",
      },
    ],
    difficulty: 2,
  },
  // ===== p6-016 article / 難度 3 =====
  {
    id: "p6-016",
    passageType: "article",
    title: "遠距工作趨勢報導",
    text: "THE BUSINESS LEDGER - Remote work, once considered a temporary arrangement, has become a permanent fixture at many American companies. According to a recent survey by the Calloway Institute, 43 percent of office employees now work from home at least two days a week, [1]____ from just 9 percent six years ago. [2]____ Smaller firms, by contrast, often lack the technology budgets required to support secure remote systems. Analysts caution, [3]____, that hybrid schedules bring challenges of their own, including weakened team cohesion. Still, most experts agree that flexibility [4]____ a decisive factor in attracting skilled workers for years to come.\n\n- Colin Marsh, staff writer",
    questions: [
      {
        options: ["up", "above", "risen", "grown"],
        answer: 0,
        kind: "詞彙",
        explanation:
          "up from just 9 percent 是描述數據攀升的慣用語，意為「較先前的 9% 上升」。above 表位置高於，不用於「從某數值上升」；risen 與 grown 是過去分詞，此處沒有助動詞支撐，文法不成立。",
      },
      {
        options: [
          "The survey was conducted by telephone over a two-week period.",
          "As a result, many employees have relocated to smaller cities.",
          "Few companies allowed any remote work before 1990.",
          "Large corporations have led the shift, investing heavily in collaboration software.",
        ],
        answer: 3,
        kind: "句子插入",
        explanation:
          "後文線索：Smaller firms, by contrast 的 by contrast（相較之下）要求前句必須先陳述「另一方」的情況，插入句講大型企業帶頭轉型、大舉投資協作軟體，正好與小公司缺乏預算形成對比。(A) 調查方法是主題相關的強誘答，但無法構成 by contrast 所需的對照；(B) 員工外移與後句的大小公司對比無關；(C) 1990 年前的背景無法與「小公司」形成對照。",
      },
      {
        options: ["therefore", "moreover", "however", "likewise"],
        answer: 2,
        kind: "文法",
        explanation:
          "前文描述遠距工作普及的正面趨勢，本句轉為分析師示警「混合排班自有其挑戰」，語意轉折，用 however。therefore 表因果、moreover 表遞進、likewise 表類同，邏輯皆不合。",
      },
      {
        options: ["remained", "will remain", "has remained", "remaining"],
        answer: 1,
        kind: "文法",
        explanation:
          "for years to come（在未來數年）明確指向未來，用未來式 will remain。remained 過去式與 has remained 現在完成式的時間範圍都與「未來數年」矛盾；remaining 非限定動詞，不能作 that 子句的述語。",
      },
    ],
    difficulty: 3,
  },
  // ===== p6-017 article / 難度 3 =====
  {
    id: "p6-017",
    passageType: "article",
    title: "新餐廳開幕報導",
    text: "CEDAR FALLS (October 12) - Vela, a Mediterranean restaurant by chef Amir Haddad, opened its doors on Winslow Street last Friday to long lines and enthusiastic reviews. Haddad, [1]____ previous restaurant in Portland earned a national award in 2023, spent nearly a year renovating the century-old bank building that now houses the dining room. [2]____ The vault, for example, has been converted into a private room that seats eight guests. Reservations are strongly [3]____, as tables are already booked several weeks in advance. The restaurant is open for dinner Tuesday [4]____ Sunday, and a weekend brunch menu is planned for early next year.\n\n- Cedar Falls Gazette",
    questions: [
      {
        options: ["who", "whose", "whom", "which"],
        answer: 1,
        kind: "文法",
        explanation:
          "空格後接名詞 previous restaurant，且該餐廳屬於 Haddad，需用所有格關係代名詞 whose。who 是主格、whom 是受格，後面不能直接接名詞；which 的先行詞須為事物，此處先行詞是人（Haddad）。",
      },
      {
        options: [
          "Many of the building's original features have been carefully preserved.",
          "The bank moved to a larger office across town in 1998.",
          "Haddad plans to open a second location in Portland.",
          "The dining room walls were completely rebuilt last month.",
        ],
        answer: 0,
        kind: "句子插入",
        explanation:
          "後文線索：The vault, for example 的 for example 要求前句先有一個「總述」，插入句「建築的許多原始特色被細心保留」正是總述，金庫改建為包廂則是其中一例。(B) 銀行 1998 年搬遷是背景性強誘答，但無法引出「例如金庫」的舉例關係；(C) 波特蘭展店計畫與建築細節無關；(D) 牆面上月全面重建與「保留原始特色」的舉例脈絡不符。",
      },
      {
        options: ["prevented", "obtained", "recommended", "dismissed"],
        answer: 2,
        kind: "詞彙",
        explanation:
          "Reservations are strongly recommended（強烈建議訂位）是餐廳報導慣用語，並呼應後文「數週內已訂滿」。prevented（阻止）、obtained（取得）、dismissed（駁回）語意皆不合。",
      },
      {
        options: ["among", "across", "through", "between"],
        answer: 2,
        kind: "文法",
        explanation:
          "Tuesday through Sunday 是美式用法，表「從週二到週日（含兩端）」的連續期間。between 需搭配 and；among 用於三者以上之中；across 表橫越空間，皆不用於連續日期範圍。",
      },
    ],
    difficulty: 3,
  },
  // ===== p6-018 letter / 難度 1 =====
  {
    id: "p6-018",
    passageType: "letter",
    title: "錄取通知信",
    text: "Dear Ms. Okafor,\n\nWe are pleased to offer you the position of accounting assistant at Delmar & Associates. Your starting salary will be $52,000 per year, [1]____ full medical and dental benefits. Your first day of work will be Monday, August 3, at 9:00 A.M. Please report to the human resources office on the second floor, [2]____ you will complete your new-employee paperwork. We ask that you sign and return the enclosed copy of this letter by July 20 to confirm your [3]____ of the offer. [4]____ We look forward to welcoming you to our team.\n\nSincerely,\nRobert Delmar\nManaging Partner",
    questions: [
      {
        options: ["along with", "instead of", "except for", "rather than"],
        answer: 0,
        kind: "文法",
        explanation:
          "along with 意為「連同、附帶」，表示年薪之外還附上完整醫療與牙科福利。instead of（而非）與 rather than（而不是）表二擇一，except for（除了）表排除，套入「薪資加福利」的語意皆矛盾。",
      },
      {
        options: ["when", "which", "where", "what"],
        answer: 2,
        kind: "文法",
        explanation:
          "先行詞 the human resources office 是地點，且空格在子句中作地方副詞（在該處完成文件），用關係副詞 where。when 的先行詞須為時間；which 作代名詞需在子句中擔任主詞或受詞，此處子句結構已完整；what 不能接在先行詞之後。",
      },
      {
        options: ["exception", "acceptance", "attendance", "assistance"],
        answer: 1,
        kind: "詞彙",
        explanation:
          "confirm your acceptance of the offer 意為「確認您接受這份錄取通知」。exception（例外）、attendance（出席）、assistance（協助）皆與「接受聘書」的語意不合。",
      },
      {
        options: [
          "We regret that the position has been offered to another candidate.",
          "A schedule for your first week of training is also enclosed.",
          "Your interview has been scheduled for next Tuesday.",
          "The company cafeteria is closed on weekends.",
        ],
        answer: 1,
        kind: "句子插入",
        explanation:
          "前文線索：前句提到 the enclosed copy of this letter（隨函附上的信件副本），插入句用 also enclosed 追加另一份附件（第一週訓練時程表），與到職安排一脈相承。(A) 職位已給他人與整封錄取信矛盾；(C) 安排面試與「已錄取」的階段矛盾；(D) 員工餐廳休息時間與錄取通知無關。",
      },
    ],
    difficulty: 1,
  },
  // ===== p6-019 letter / 難度 3 =====
  {
    id: "p6-019",
    passageType: "letter",
    title: "食物銀行募款信",
    text: "Dear Friend of the Riverside Food Bank,\n\nEach winter, requests for food assistance in our county rise sharply. Last year alone, our volunteers packed and distributed more than 40,000 meal boxes - a record number that stretched our resources to [1]____ limits. This year, demand is projected to grow by another fifteen percent. [2]____ Without additional funding, we may be forced to reduce the number of families we serve each week. A gift of just $50 provides a family of four with groceries for an entire week. Donations received before December 31 will be [3]____ dollar for dollar by the Landon Foundation, doubling the impact of your gift. Please give [4]____ today.\n\nWith gratitude,\nMaria Santos\nExecutive Director",
    questions: [
      {
        options: ["its", "their", "them", "theirs"],
        answer: 1,
        kind: "文法",
        explanation:
          "空格後接名詞 limits，需用所有格；指涉對象是複數名詞 resources，故用 their。its 只能指單數，是強誘答（易誤以為指 food bank）；them 是受格、theirs 是所有格代名詞，皆不能直接修飾名詞。",
      },
      {
        options: [
          "Fortunately, donations have already exceeded this year's goal.",
          "The food bank was founded by a group of local teachers.",
          "Our warehouse, however, is already operating at full capacity.",
          "Meal boxes typically contain rice, pasta, and canned vegetables.",
        ],
        answer: 2,
        kind: "句子插入",
        explanation:
          "前後文線索：前句說今年需求預計再增 15%，插入句以 however 點出「倉庫已滿載」的困境，後句「沒有額外資金將被迫縮減服務」正是這個困境的後果，三句形成「需求增、量能滿、恐縮編」的遞進。(A) 捐款已達標與「懇請捐款」的訴求矛盾；(B) 創立背景與(D) 餐盒內容物都是主題相關的強誘答，但插不進「需求增加到被迫縮編」的因果鏈。",
      },
      {
        options: ["compared", "matched", "balanced", "imitated"],
        answer: 1,
        kind: "詞彙",
        explanation:
          "matched dollar for dollar 是募款慣用語，指基金會「等額配捐」，故捐款效益加倍。compared（比較）、balanced（平衡）、imitated（模仿）套入「一元配一元」的語意皆不通。",
      },
      {
        options: ["generous", "generosity", "generously", "generation"],
        answer: 2,
        kind: "文法",
        explanation:
          "空格修飾動詞 give，需用副詞 generously（慷慨地）。generous 是形容詞、generosity 與 generation 是名詞，皆不能修飾動詞。",
      },
    ],
    difficulty: 3,
  },
  // ===== p6-020 ad / 難度 2 =====
  {
    id: "p6-020",
    passageType: "ad",
    title: "健身中心招生廣告",
    text: "STRONGER EVERY DAY - AT PULSE FITNESS CENTER\n\nIs your fitness routine feeling stale? Pulse Fitness Center, the newest gym in the Lakeside district, offers over sixty group classes each week, [1]____ from beginner yoga to high-intensity cycling. Our certified trainers will design a personal program that fits your goals and your schedule. [2]____ That is why every new member receives three complimentary training sessions during the first month. Join [3]____ the end of April and pay no enrollment fee - a savings of $99. Visit www.pulsefitness.com or stop by our front desk to [4]____ a free tour.\n\nYour first workout is free. What are you waiting for?",
    questions: [
      {
        options: ["ranged", "ranges", "ranging", "range"],
        answer: 2,
        kind: "文法",
        explanation:
          "空格是分詞片語修飾 sixty group classes，課程「涵蓋」瑜伽到飛輪，主動語意用現在分詞 ranging（range from A to B）。ranged 過去分詞表被動，語態不合；ranges 與 range 是限定動詞，前面沒有連接詞不能再接子句。",
      },
      {
        options: [
          "Our Lakeside location closed permanently last month.",
          "We believe that getting started is often the hardest part.",
          "Members must pay extra for all personal training sessions.",
          "Yoga was first practiced thousands of years ago.",
        ],
        answer: 1,
        kind: "句子插入",
        explanation:
          "後文線索：That is why 的 That 必須指涉一個「原因」，插入句「我們相信起步往往最難」正好解釋為何新會員可獲三堂免費教練課。(A) 門市永久歇業與「最新開幕的健身房」矛盾；(C) 教練課須加價與後句 complimentary（免費贈送）矛盾；(D) 瑜伽歷史與招生訴求無關。",
      },
      {
        options: ["until", "by", "on", "in"],
        answer: 1,
        kind: "文法",
        explanation:
          "by the end of April 表「在四月底前（完成入會）」的期限，搭配瞬間動作 join。until 是強誘答，但表「持續到某時點」，須搭配延續性動作；on 用於特定日期、in 用於月份，皆不能接 the end of April 表期限。",
      },
      {
        options: ["postpone", "cancel", "schedule", "decline"],
        answer: 2,
        kind: "詞彙",
        explanation:
          "schedule a free tour 意為「預約免費參觀」，符合廣告邀請新客的語意。postpone（延期）、cancel（取消）、decline（婉拒）皆與招攬新會員的目的相反。",
      },
    ],
    difficulty: 2,
  },
];
