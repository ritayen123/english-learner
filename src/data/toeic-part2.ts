export interface Part2Question {
  id: string; // "p2-001" 到 "p2-090"
  question: string; // 題目句（問句或陳述句），TTS 會唸出
  options: [string, string, string]; // A/B/C 三個回應，TTS 會唸出
  answer: number; // 0-2
  type: "WH問句" | "YesNo問句" | "附加問句" | "選擇問句" | "陳述句" | "間接問句";
  explanation: string; // 繁體中文解說
  trap?: string; // 選填：陷阱類型說明
}

export const part2Questions: Part2Question[] = [
  // ===== WH問句 (30 題) p2-001 ~ p2-030 =====
  {
    id: "p2-001",
    question: "Where is the new conference room?",
    options: [
      "It's on the third floor, next to the elevator.",
      "At three o'clock this afternoon.",
      "Yes, it's quite spacious.",
    ],
    answer: 0,
    type: "WH問句",
    explanation:
      "Where 問地點，(A) 回答樓層位置正確。(B) 回答時間，答非所問；(C) 用 Yes 回應 WH 問句，必為錯誤選項。",
    trap: "WH 問句不能用 Yes/No 回答；(B) 以時間答非所問",
  },
  {
    id: "p2-002",
    question: "When does the marketing seminar start?",
    options: [
      "In the main auditorium.",
      "It was really informative.",
      "Not until next Thursday.",
    ],
    answer: 2,
    type: "WH問句",
    explanation:
      "When 問時間，(C) Not until next Thursday 表示「要到下週四才開始」正確。(A) 回答地點答非所問；(B) 用過去式評論一場尚未開始的研討會，時態錯置。",
    trap: "時態錯置：(B) 用過去式回應未來的活動",
  },
  {
    id: "p2-003",
    question: "Who is in charge of the budget review this quarter?",
    options: [
      "The charges are on your bill.",
      "Ms. Patel from the finance department.",
      "About four hundred dollars.",
    ],
    answer: 1,
    type: "WH問句",
    explanation:
      "Who 問負責人，(B) 回答具體人名與部門正確。(A) 重複 charge 但意思是「費用」，與「負責」無關；(C) 回答金額，答非所問。",
    trap: "重複單字 charge 誘答；(C) 因聽到 budget 而誤選金額",
  },
  {
    id: "p2-004",
    question: "Why was the shipment delayed?",
    options: [
      "Please ship it to the warehouse.",
      "Because of the snowstorm in Chicago.",
      "Yes, it arrived this morning.",
    ],
    answer: 1,
    type: "WH問句",
    explanation:
      "Why 問原因，(B) 用 Because of 說明天候因素正確。(A) 重複 ship 誘答；(C) 用 Yes 回應 WH 問句必錯。",
    trap: "重複單字 ship 誘答；Yes/No 回應 WH 問句",
  },
  {
    id: "p2-005",
    question: "How do I get to the convention center from here?",
    options: [
      "You can take the subway from the corner.",
      "About an hour ago.",
      "I got a new car.",
    ],
    answer: 0,
    type: "WH問句",
    explanation:
      "How 問方法（怎麼去），(A) 提供交通方式正確。(B) 回答過去時間點答非所問；(C) 重複 get 的變化形 got，但內容無關。",
    trap: "重複單字 get/got 誘答；(B) 答非所問（時間）",
  },
  {
    id: "p2-006",
    question: "What time does the pharmacy close on Saturdays?",
    options: [
      "It's close to the train station.",
      "I picked up my medicine.",
      "At six in the evening.",
    ],
    answer: 2,
    type: "WH問句",
    explanation:
      "What time 問時間，(C) 回答傍晚六點正確。(A) 利用 close 的多義（關門/接近）誘答；(B) 與藥局有關聯但沒回答時間。",
    trap: "close 多義誘答：關門（動詞）vs 接近（形容詞）",
  },
  {
    id: "p2-007",
    question: "Where should we hold the year-end banquet?",
    options: [
      "Please hold the elevator.",
      "Last year's banquet was wonderful.",
      "I haven't decided yet.",
    ],
    answer: 2,
    type: "WH問句",
    explanation:
      "間接回應題。(C) 「我還沒決定」沒有直接回答地點，但是真實對話中最自然的回應。(A) 重複 hold（按住電梯）誘答；(B) 重複 banquet 但談論去年，答非所問。",
    trap: "重複單字 hold、banquet 誘答；正解為間接回應",
  },
  {
    id: "p2-008",
    question: "When will the office renovation be finished?",
    options: [
      "On the fifth floor.",
      "You should ask the contractor.",
      "It was finished beautifully.",
    ],
    answer: 1,
    type: "WH問句",
    explanation:
      "間接回應題。(B) 「你應該去問承包商」表示自己不知道，將問題轉介給知道的人，是高分關鍵題型。(A) 回答地點答非所問；(C) 重複 finished 且用過去式描述未完工的工程，時態錯置。",
    trap: "時態錯置：(C) 過去式回應未來的事；正解為間接回應（轉介他人）",
  },
  {
    id: "p2-009",
    question: "Who approved this travel expense report?",
    options: [
      "Why don't you check the signature?",
      "Yes, it was quite expensive.",
      "The report is on your desk.",
    ],
    answer: 0,
    type: "WH問句",
    explanation:
      "間接回應題。(A) 用反問「何不看看簽名？」間接告訴對方答案在哪裡。(B) expense 與 expensive 相似音誘答，且 Yes 回應 WH 問句必錯；(C) 重複 report 誘答。",
    trap: "相似音 expense/expensive；重複單字 report；正解為反問式間接回應",
  },
  {
    id: "p2-010",
    question: "How many people have signed up for the safety workshop?",
    options: [
      "The registration list is on the intranet.",
      "The sign is by the front door.",
      "It works very well.",
    ],
    answer: 0,
    type: "WH問句",
    explanation:
      "間接回應題。(A) 沒有直接回答人數，而是告訴對方去哪裡查報名名單。(B) signed/sign 相似音誘答；(C) workshop/works 相似音誘答。",
    trap: "相似音 signed/sign、workshop/works；正解為間接回應（指出查詢管道）",
  },
  {
    id: "p2-011",
    question: "What did you think of the candidate we interviewed yesterday?",
    options: [
      "On channel seven tonight.",
      "I will read it later.",
      "She seemed highly qualified.",
    ],
    answer: 2,
    type: "WH問句",
    explanation:
      "What did you think of 問意見，(C) 給出對應徵者的評價正確。(A) 因 interview 聯想到電視訪談而誤導；(B) 答非所問。",
    trap: "聯想誘答：interview 使人聯想到電視節目",
  },
  {
    id: "p2-012",
    question: "Why don't we move the deadline to Friday?",
    options: [
      "Because the desk is too heavy to move.",
      "Good idea. That would give us more time.",
      "I waited in line for an hour.",
    ],
    answer: 1,
    type: "WH問句",
    explanation:
      "Why don't we 是提議句，不是真的問原因。(B) 接受提議並說明好處正確。(A) 把 move 當字面意義「搬動」回答；(C) deadline 與 line 相似音誘答。",
    trap: "重複單字 move（字面義誘答）；相似音 deadline/line",
  },
  {
    id: "p2-013",
    question: "Where can I find the user manual for this copier?",
    options: [
      "He found a new job.",
      "You can download it from the company website.",
      "Some fresh coffee, please.",
    ],
    answer: 1,
    type: "WH問句",
    explanation:
      "Where 問哪裡找得到，(B) 告知可從官網下載正確。(A) 重複 find 的過去式 found 誘答；(C) copier 與 coffee 相似音誘答。",
    trap: "相似音 copier/coffee；重複單字 find/found",
  },
  {
    id: "p2-014",
    question: "When is the rent due for the office space?",
    options: [
      "On the first of every month.",
      "It rained all weekend.",
      "Due to the heavy traffic.",
    ],
    answer: 0,
    type: "WH問句",
    explanation:
      "When 問繳租期限，(A) 每月一號正確。(B) rent 與 rained 相似音誘答；(C) 重複 due 但意思是「由於」，與期限無關。",
    trap: "相似音 rent/rained；due 多義誘答（到期 vs 由於）",
  },
  {
    id: "p2-015",
    question: "Who is going to pick up the clients at the airport?",
    options: [
      "A pickup truck would be better.",
      "They were very pleased.",
      "Tomas volunteered to do it.",
    ],
    answer: 2,
    type: "WH問句",
    explanation:
      "Who 問接機的人，(C) 回答 Tomas 自願去正確。(A) 重複 pick up 誘答；(B) 時態錯置且答非所問。",
    trap: "重複單字 pick up 誘答",
  },
  {
    id: "p2-016",
    question: "How long is the flight to Singapore?",
    options: [
      "It's a very long report.",
      "At gate twenty-two.",
      "About six and a half hours.",
    ],
    answer: 2,
    type: "WH問句",
    explanation:
      "How long 問飛行時間，(C) 約六個半小時正確。(A) 重複 long 但講的是報告長度；(B) 回答登機門，答非所問。",
    trap: "重複單字 long 誘答；(B) 機場相關聯想誘答",
  },
  {
    id: "p2-017",
    question: "What is the best way to contact Ms. Rivera?",
    options: [
      "We signed the contract on Monday.",
      "Send her a text message.",
      "She did her best.",
    ],
    answer: 1,
    type: "WH問句",
    explanation:
      "問聯絡方式，(B) 建議傳簡訊正確。(A) contact 與 contract 相似音誘答；(C) 重複 best 誘答。",
    trap: "相似音 contact/contract；重複單字 best",
  },
  {
    id: "p2-018",
    question: "Why is the parking garage closed this week?",
    options: [
      "They are repainting the floor markings.",
      "The clothes are in the closet.",
      "I usually park on the street.",
    ],
    answer: 0,
    type: "WH問句",
    explanation:
      "Why 問原因，(A) 說明因為重新油漆地面標線正確。(B) closed 與 closet 相似音誘答；(C) 重複 park 但沒回答原因。",
    trap: "相似音 closed/closet；重複單字 park",
  },
  {
    id: "p2-019",
    question: "How often does the airport shuttle run?",
    options: [
      "Every twenty minutes during the day.",
      "I often travel for work.",
      "It was a short run.",
    ],
    answer: 0,
    type: "WH問句",
    explanation:
      "How often 問頻率，(A) 每二十分鐘一班正確。(B) 重複 often 誘答；(C) 重複 run 但意思是「跑步」。",
    trap: "重複單字 often、run（多義）誘答",
  },
  {
    id: "p2-020",
    question: "What should I wear to the awards ceremony?",
    options: [
      "I wore it yesterday.",
      "Yes, you should go.",
      "The invitation says business formal.",
    ],
    answer: 2,
    type: "WH問句",
    explanation:
      "間接回應題。(C) 沒有直接說穿什麼，而是引用邀請函上的服裝規定，是自然的間接回答。(A) wear 的過去式 wore 時態誘答；(B) Yes 回應 WH 問句必錯。",
    trap: "時態誘答 wear/wore；Yes/No 回應 WH 問句；正解為間接回應",
  },
  {
    id: "p2-021",
    question: "When did Mr. Okada transfer to the Osaka branch?",
    options: [
      "He will transfer the funds tomorrow.",
      "At the beginning of April.",
      "The branch is near the river.",
    ],
    answer: 1,
    type: "WH問句",
    explanation:
      "When 問過去的時間點，(B) 四月初正確。(A) 重複 transfer 但講匯款且時態錯置（未來式回應過去的事）；(C) 重複 branch 誘答。",
    trap: "重複單字 transfer、branch；(A) 時態錯置",
  },
  {
    id: "p2-022",
    question: "Where did you put the spare projector cable?",
    options: [
      "The picture looks very clear.",
      "It's in the storage cabinet.",
      "He's a very able speaker.",
    ],
    answer: 1,
    type: "WH問句",
    explanation:
      "Where 問放在哪裡，(B) 在儲物櫃裡正確。(A) 由 projector 聯想到投影畫面誘答；(C) cable 與 able 相似音誘答。",
    trap: "相似音 cable/able；投影機聯想誘答",
  },
  {
    id: "p2-023",
    question: "Who can show me how to use the new accounting software?",
    options: [
      "There's a tutorial video on the server.",
      "The show starts at eight.",
      "I counted them twice.",
    ],
    answer: 0,
    type: "WH問句",
    explanation:
      "間接回應題。(A) 沒有指出某個人，而是告知有教學影片可以看，間接解決對方的問題。(B) show 多義誘答（教 vs 表演）；(C) accounting 與 counted 相似音誘答。",
    trap: "show 多義；相似音 accounting/counted；正解為間接回應",
  },
  {
    id: "p2-024",
    question: "How much does the catering service cost per person?",
    options: [
      "About thirty guests attended.",
      "Yes, the food was delicious.",
      "Twenty-five dollars, including drinks.",
    ],
    answer: 2,
    type: "WH問句",
    explanation:
      "How much 問每人費用，(C) 二十五美元正確。(A) 回答人數而非金額，答非所問；(B) Yes 回應 WH 問句必錯。",
    trap: "(A) 數字誘答但答非所問（人數 vs 金額）；Yes/No 回應 WH 問句",
  },
  {
    id: "p2-025",
    question: "Why are there so many boxes in the hallway?",
    options: [
      "I'll take the stairway instead.",
      "About fifteen boxes.",
      "We're moving to a bigger office next week.",
    ],
    answer: 2,
    type: "WH問句",
    explanation:
      "Why 問原因，(C) 因為下週要搬到更大的辦公室，正確。(A) hallway 與 stairway 相似音誘答；(B) 重複 boxes 並回答數量，答非所問。",
    trap: "相似音 hallway/stairway；重複單字 boxes（以數量答非所問）",
  },
  {
    id: "p2-026",
    question: "What's the agenda for tomorrow's staff meeting?",
    options: [
      "We met at the staff entrance.",
      "Hasn't it been emailed to everyone?",
      "Yes, I'll attend.",
    ],
    answer: 1,
    type: "WH問句",
    explanation:
      "間接回應題。(B) 用反問「不是已經寄給大家了嗎？」表示對方應該已經收到議程，是高分常考的反問式回應。(A) 重複 staff 且 meeting/met 變形誘答；(C) Yes 回應 WH 問句必錯。",
    trap: "重複單字 staff；meeting/met 變形誘答；正解為反問式間接回應",
  },
  {
    id: "p2-027",
    question: "How soon can you finish the sales report?",
    options: [
      "By the end of the day.",
      "It's on sale this week.",
      "He reported it to the police.",
    ],
    answer: 0,
    type: "WH問句",
    explanation:
      "How soon 問多快能完成，(A) 今天下班前正確。(B) sales 與 sale 相似音誘答；(C) report 多義誘答（報告 vs 報案）。",
    trap: "相似音 sales/sale；report 多義誘答",
  },
  {
    id: "p2-028",
    question: "When can we expect the test results?",
    options: [
      "Sometime next week, I imagine.",
      "He passed the test easily.",
      "The rest of the team is here.",
    ],
    answer: 0,
    type: "WH問句",
    explanation:
      "When 問時間，(A) 大概下週，正確。(B) 重複 test 誘答；(C) results 與 rest 相似音誘答。",
    trap: "重複單字 test；相似音 results/rest",
  },
  {
    id: "p2-029",
    question: "Who should I talk to about changing my health insurance plan?",
    options: [
      "It's a healthy choice.",
      "The plane leaves at noon.",
      "The human resources office handles that.",
    ],
    answer: 2,
    type: "WH問句",
    explanation:
      "間接回應題。(C) 沒有給出特定人名，而是指出負責的部門，屬於轉介式回應。(A) health 與 healthy 變形誘答；(B) plan 與 plane 相似音誘答。",
    trap: "相似音 plan/plane、health/healthy；正解為間接回應（指出負責部門）",
  },
  {
    id: "p2-030",
    question: "What kind of laptop are you planning to buy?",
    options: [
      "He was very kind to us.",
      "Something light that I can carry around.",
      "I'll plant them in the garden.",
    ],
    answer: 1,
    type: "WH問句",
    explanation:
      "What kind 問種類，(B) 描述想要的特性（輕便好攜帶）正確。(A) kind 多義誘答（種類 vs 親切）；(C) planning 與 plant 相似音誘答。",
    trap: "kind 多義；相似音 planning/plant",
  },

  // ===== YesNo問句 (15 題) p2-031 ~ p2-045 =====
  {
    id: "p2-031",
    question: "Have you submitted the quarterly sales figures yet?",
    options: [
      "On a quarterly basis.",
      "Not yet. I'm still checking the numbers.",
      "She submitted her resignation.",
    ],
    answer: 1,
    type: "YesNo問句",
    explanation:
      "問是否已交季度銷售數字，(B) 還沒，正在核對數字，正確。(A) 重複 quarterly 誘答；(C) 重複 submitted 但講的是辭呈。",
    trap: "重複單字 quarterly、submitted 誘答",
  },
  {
    id: "p2-032",
    question: "Is the cafeteria still open at this hour?",
    options: [
      "Yes, until nine o'clock.",
      "I opened a new bank account.",
      "An hour and a half.",
    ],
    answer: 0,
    type: "YesNo問句",
    explanation:
      "問餐廳是否還開著，(A) 開到九點，正確。(B) 重複 open 的變化形誘答；(C) 重複 hour 並回答時間長度，答非所問。",
    trap: "重複單字 open/opened、hour 誘答",
  },
  {
    id: "p2-033",
    question: "Are you attending the trade show in Berlin next month?",
    options: [
      "Yes, I watched the show last night.",
      "The trade was unfair.",
      "It depends on my schedule.",
    ],
    answer: 2,
    type: "YesNo問句",
    explanation:
      "間接回應題。(C) 「要看我的行程」沒有直接回答 Yes 或 No，是真實且常考的回應方式。(A) show 多義誘答（展覽 vs 節目）；(B) 重複 trade 誘答。",
    trap: "show 多義；重複單字 trade；正解為間接回應（不確定）",
  },
  {
    id: "p2-034",
    question: "Did the technician fix the air conditioner?",
    options: [
      "Yes, the air is fresh today.",
      "It's a technical term.",
      "Yes, it's working fine now.",
    ],
    answer: 2,
    type: "YesNo問句",
    explanation:
      "問技師是否修好冷氣，(C) 是的，現在運作正常，正確。(A) 重複 air 但內容無關；(B) technician 與 technical 相似音誘答。",
    trap: "相似音 technician/technical；重複單字 air",
  },
  {
    id: "p2-035",
    question: "Can you give me a ride to the station after work?",
    options: [
      "It was a long ride.",
      "Sorry, my car is in the shop.",
      "Yes, he works at the station.",
    ],
    answer: 1,
    type: "YesNo問句",
    explanation:
      "間接回應題。(B) 沒有直接說 No，而是用「車送修了」說明無法載送的原因，委婉拒絕。(A) 重複 ride 誘答；(C) 重複 station、work 誘答。",
    trap: "重複單字 ride、station、work；正解為間接回應（婉拒並給理由）",
  },
  {
    id: "p2-036",
    question: "Is there a direct flight from Taipei to Boston?",
    options: [
      "No, you have to transfer in Tokyo.",
      "The director is on vacation.",
      "It was a frightening movie.",
    ],
    answer: 0,
    type: "YesNo問句",
    explanation:
      "問有無直飛航班，(A) 沒有，需在東京轉機，正確。(B) direct 與 director 相似音誘答；(C) flight 與 frightening 相似音誘答。",
    trap: "相似音 direct/director、flight/frightening",
  },
  {
    id: "p2-037",
    question: "Will the budget proposal be approved by Friday?",
    options: [
      "That's up to the board of directors.",
      "Yes, I bought it on Friday.",
      "He proposed at the restaurant.",
    ],
    answer: 0,
    type: "YesNo問句",
    explanation:
      "間接回應題。(A) 「那要看董事會決定」表示自己無法保證，是高分關鍵的間接回應。(B) 重複 Friday 誘答；(C) proposal 與 proposed 相似音誘答（求婚義）。",
    trap: "相似音 proposal/proposed；重複單字 Friday；正解為間接回應（決定權在他人）",
  },
  {
    id: "p2-038",
    question: "Do we have enough chairs for the orientation session?",
    options: [
      "She chaired the committee meeting.",
      "Yes, the session was helpful.",
      "I'll bring some extra ones just in case.",
    ],
    answer: 2,
    type: "YesNo問句",
    explanation:
      "間接回應題。(C) 沒有直接回答夠不夠，而是提出「保險起見多帶幾張」的行動方案。(A) chair 多義誘答（椅子 vs 主持）；(B) 重複 session 且時態錯置。",
    trap: "chair 多義；(B) 時態錯置；正解為間接回應（提出行動方案）",
  },
  {
    id: "p2-039",
    question: "Has the new intern started yet?",
    options: [
      "At the very start of the page.",
      "Yes, she began on Monday.",
      "The engine won't start.",
    ],
    answer: 1,
    type: "YesNo問句",
    explanation:
      "問新實習生是否已開始上班，(B) 是的，週一開始，正確。(A) 與 (C) 都重複 start 但語意無關。",
    trap: "重複單字 start（多義）誘答",
  },
  {
    id: "p2-040",
    question: "Could you review my presentation slides before noon?",
    options: [
      "The view from here is amazing.",
      "I'm in meetings all morning, I'm afraid.",
      "He slid on the icy sidewalk.",
    ],
    answer: 1,
    type: "YesNo問句",
    explanation:
      "間接回應題。(B) 沒有直接說 No，而是說明「整個上午都在開會」間接表達無法幫忙。(A) review 與 view 相似音誘答；(C) slides 與 slid 相似音誘答。",
    trap: "相似音 review/view、slides/slid；正解為間接回應（委婉拒絕）",
  },
  {
    id: "p2-041",
    question: "Is this seat taken?",
    options: [
      "No, go ahead.",
      "I'll take the bus instead.",
      "He took the test yesterday.",
    ],
    answer: 0,
    type: "YesNo問句",
    explanation:
      "問座位是否有人，(A) 沒有，請坐，正確。(B) 與 (C) 都用 take 的變化形誘答，內容與座位無關。",
    trap: "重複單字 take/took 變形誘答",
  },
  {
    id: "p2-042",
    question: "Did you back up the client database before the update?",
    options: [
      "My back hurts a little.",
      "The client is from Dallas.",
      "Yes, everything is saved on the cloud.",
    ],
    answer: 2,
    type: "YesNo問句",
    explanation:
      "問更新前是否備份資料庫，(C) 是的，都存在雲端，正確。(A) back 多義誘答（備份 vs 背部）；(B) 重複 client 誘答。",
    trap: "back 多義；重複單字 client",
  },
  {
    id: "p2-043",
    question: "Are we still meeting with the suppliers at two?",
    options: [
      "Some office supplies.",
      "Yes, it was a productive meeting.",
      "Didn't you get the cancellation notice?",
    ],
    answer: 2,
    type: "YesNo問句",
    explanation:
      "間接回應題。(C) 用反問「你沒收到取消通知嗎？」間接表示會議已取消，是典型高分題型。(A) suppliers 與 supplies 相似音誘答；(B) 重複 meeting 且時態錯置。",
    trap: "相似音 suppliers/supplies；(B) 時態錯置；正解為反問式間接回應",
  },
  {
    id: "p2-044",
    question: "Does this printer also scan documents?",
    options: [
      "I'll print twenty copies.",
      "Yes, just press the blue button.",
      "The documentary was interesting.",
    ],
    answer: 1,
    type: "YesNo問句",
    explanation:
      "問印表機是否能掃描，(B) 可以，按藍色按鈕即可，正確。(A) 重複 print 誘答；(C) documents 與 documentary 相似音誘答。",
    trap: "相似音 documents/documentary；重複單字 print",
  },
  {
    id: "p2-045",
    question: "Would you like me to forward you the meeting minutes?",
    options: [
      "Yes, please. That would be helpful.",
      "It only takes a few minutes.",
      "He moved forward quickly.",
    ],
    answer: 0,
    type: "YesNo問句",
    explanation:
      "提議寄送會議紀錄，(A) 接受並道謝，正確。(B) minutes 多義誘答（會議紀錄 vs 分鐘）；(C) 重複 forward 但意思是「向前」。",
    trap: "minutes 多義（會議紀錄 vs 分鐘）；forward 多義",
  },

  // ===== 附加問句 (10 題) p2-046 ~ p2-055 =====
  {
    id: "p2-046",
    question: "The keynote speaker was impressive, wasn't she?",
    options: [
      "Yes, her speech was inspiring.",
      "The key is under the mat.",
      "I pressed the wrong button.",
    ],
    answer: 0,
    type: "附加問句",
    explanation:
      "附加問句尋求認同，(A) 同意並補充感想，正確。(B) keynote 與 key 相似音誘答；(C) impressive 與 pressed 相似音誘答。",
    trap: "相似音 keynote/key、impressive/pressed",
  },
  {
    id: "p2-047",
    question: "You've met our new branch manager, haven't you?",
    options: [
      "The branch needs trimming.",
      "I'll manage it somehow.",
      "Yes, at last week's orientation.",
    ],
    answer: 2,
    type: "附加問句",
    explanation:
      "問是否見過新分店經理，(C) 是的，在上週的新人訓練見過，正確。(A) branch 多義誘答（分店 vs 樹枝）；(B) manager 與 manage 相似音誘答。",
    trap: "branch 多義；相似音 manager/manage",
  },
  {
    id: "p2-048",
    question: "The quarterly report is due tomorrow, isn't it?",
    options: [
      "She reports to the director.",
      "Actually, the deadline was extended.",
      "Yes, I'm doing well.",
    ],
    answer: 1,
    type: "附加問句",
    explanation:
      "間接回應題。(B) 用 Actually 糾正對方的前提（期限已延長），沒有直接回答 Yes/No，是高分常考型。(A) 重複 report 誘答；(C) due 與 doing 相似音誘答。",
    trap: "重複單字 report；相似音 due/doing；正解為間接回應（糾正前提）",
  },
  {
    id: "p2-049",
    question: "This invoice doesn't include shipping fees, does it?",
    options: [
      "Her voice is lovely.",
      "No, those are billed separately.",
      "The ship leaves at dawn.",
    ],
    answer: 1,
    type: "附加問句",
    explanation:
      "否定附加問句，(B) No 表示「對，不包含」並補充運費另計，正確。(A) invoice 與 voice 相似音誘答；(C) shipping 與 ship 相似音誘答。",
    trap: "相似音 invoice/voice、shipping/ship",
  },
  {
    id: "p2-050",
    question: "We should book the venue soon, shouldn't we?",
    options: [
      "I already reserved it yesterday.",
      "I'm reading a great book.",
      "Yes, the avenue is beautiful.",
    ],
    answer: 0,
    type: "附加問句",
    explanation:
      "間接回應題。(A) 沒有回答 Yes/No，而是直接告知「我昨天已經訂好了」，超出問句預期的資訊。(B) book 多義誘答（預訂 vs 書）；(C) venue 與 avenue 相似音誘答。",
    trap: "book 多義；相似音 venue/avenue；正解為間接回應（事情已完成）",
  },
  {
    id: "p2-051",
    question: "The elevator is out of service again, isn't it?",
    options: [
      "The service was excellent.",
      "Yes, I ordered room service.",
      "Yes, we'll have to take the stairs.",
    ],
    answer: 2,
    type: "附加問句",
    explanation:
      "確認電梯又故障了，(C) 同意並表示得走樓梯，正確。(A) 與 (B) 都重複 service 但語意無關。",
    trap: "重複單字 service 誘答",
  },
  {
    id: "p2-052",
    question: "Ms. Choi is presenting at the conference, isn't she?",
    options: [
      "It was a nice present.",
      "Yes, in the conference room.",
      "I heard she canceled her trip.",
    ],
    answer: 2,
    type: "附加問句",
    explanation:
      "間接回應題。(C) 沒有直接回答，而是提供新資訊「聽說她取消行程了」，暗示她不會出席。(A) presenting 與 present 多義誘答（發表 vs 禮物）；(B) 重複 conference 誘答。",
    trap: "present 多義；重複單字 conference；正解為間接回應（提供相反的新資訊）",
  },
  {
    id: "p2-053",
    question: "You can attend the training session on Friday, can't you?",
    options: [
      "The train was delayed again.",
      "Yes, I've already cleared my schedule.",
      "He attended to the customer first.",
    ],
    answer: 1,
    type: "附加問句",
    explanation:
      "確認對方能否參加訓練課程，(B) 可以，已把行程空出來，正確。(A) training 與 train 相似音誘答；(C) attend to 是「接待、處理」，與出席不同義。",
    trap: "相似音 training/train；attend 多義（出席 vs 接待）",
  },
  {
    id: "p2-054",
    question: "It's supposed to rain this weekend, isn't it?",
    options: [
      "Yes, that's what the forecast says.",
      "I suppose he's right.",
      "The plane arrives on Sunday.",
    ],
    answer: 0,
    type: "附加問句",
    explanation:
      "確認週末會下雨，(A) 同意並引用氣象預報，正確。(B) supposed 與 suppose 變形誘答；(C) rain 與 plane 相似音誘答。",
    trap: "重複單字 supposed/suppose；相似音 rain/plane",
  },
  {
    id: "p2-055",
    question: "The new espresso machine works well, doesn't it?",
    options: [
      "Yes, the coffee tastes much better now.",
      "He walks to work every day.",
      "The express train is faster.",
    ],
    answer: 0,
    type: "附加問句",
    explanation:
      "確認新咖啡機好用，(A) 同意並稱讚咖啡更好喝，正確。(B) works 與 walks 相似音誘答；(C) espresso 與 express 相似音誘答。",
    trap: "相似音 works/walks、espresso/express",
  },

  // ===== 選擇問句 (10 題) p2-056 ~ p2-065 =====
  {
    id: "p2-056",
    question: "Would you prefer the morning session or the afternoon one?",
    options: [
      "Yes, I'd love to.",
      "It's in session right now.",
      "The morning one, if possible.",
    ],
    answer: 2,
    type: "選擇問句",
    explanation:
      "選擇問句要從兩者擇一，(C) 選早上場次，正確。(A) 選擇問句不能用 Yes/No 回答，必錯；(B) 重複 session 但意思是「開會中」。",
    trap: "選擇問句不能用 Yes/No 回答；session 多義",
  },
  {
    id: "p2-057",
    question: "Should we take the highway or the local roads?",
    options: [
      "The road was very bumpy.",
      "Whichever is faster at this hour.",
      "Yes, let's take it.",
    ],
    answer: 1,
    type: "選擇問句",
    explanation:
      "間接回應題。(B) 沒有明確二選一，而是回答「哪條快走哪條」，是選擇問句的高分回應型。(A) 重複 road 誘答；(C) Yes 回應選擇問句必錯。",
    trap: "重複單字 road；Yes/No 回應選擇問句；正解為間接回應（whichever）",
  },
  {
    id: "p2-058",
    question: "Do you want the report as a hard copy or an electronic file?",
    options: [
      "It was a hard decision.",
      "Either is fine with me.",
      "I'll file the complaint tomorrow.",
    ],
    answer: 1,
    type: "選擇問句",
    explanation:
      "間接回應題。(B) Either is fine 表示兩者皆可，沒有二選一，是選擇問句最常考的間接回應。(A) hard 多義誘答（紙本 vs 困難）；(C) file 多義誘答（檔案 vs 提出申訴）。",
    trap: "hard、file 多義誘答；正解為間接回應（either 兩者皆可）",
  },
  {
    id: "p2-059",
    question: "Should we order pizza or sandwiches for the team lunch?",
    options: [
      "Let's ask what everyone prefers.",
      "The team won the game.",
      "Yes, I'm hungry.",
    ],
    answer: 0,
    type: "選擇問句",
    explanation:
      "間接回應題。(A) 沒有選擇任一項，而是提議先問大家的偏好，把決定權交給團隊。(B) 重複 team 誘答；(C) Yes 回應選擇問句必錯。",
    trap: "重複單字 team；Yes/No 回應選擇問句；正解為間接回應（交由他人決定）",
  },
  {
    id: "p2-060",
    question: "Is the workshop on Tuesday or Wednesday?",
    options: [
      "Yes, it is.",
      "At the workshop downtown.",
      "It's on Wednesday this time.",
    ],
    answer: 2,
    type: "選擇問句",
    explanation:
      "從兩個日期擇一，(C) 這次在週三，正確。(A) Yes 回應選擇問句必錯；(B) 重複 workshop 並回答地點，答非所問。",
    trap: "Yes/No 回應選擇問句；重複單字 workshop（以地點答非所問）",
  },
  {
    id: "p2-061",
    question: "Would you rather fly or take the train to the conference?",
    options: [
      "The fare was quite expensive.",
      "Yes, I'm leaving tomorrow.",
      "I'll go along with whatever you decide.",
    ],
    answer: 2,
    type: "選擇問句",
    explanation:
      "間接回應題。(C) 「你決定什麼我都配合」沒有二選一，把決定權交給對方。(A) 交通聯想誘答但答非所問；(B) Yes 回應選擇問句必錯。",
    trap: "Yes/No 回應選擇問句；正解為間接回應（交由對方決定）",
  },
  {
    id: "p2-062",
    question: "Should I email the contract or bring it in person?",
    options: [
      "He's a very nice person.",
      "Email it. That will be quicker.",
      "I contacted them yesterday.",
    ],
    answer: 1,
    type: "選擇問句",
    explanation:
      "二選一，(B) 選擇用電子郵件寄送並說明理由，正確。(A) 重複 person 誘答；(C) contract 與 contacted 相似音誘答。",
    trap: "重複單字 person；相似音 contract/contacted",
  },
  {
    id: "p2-063",
    question: "Do you want to meet before lunch or after?",
    options: [
      "My afternoon is completely booked.",
      "I had a sandwich for lunch.",
      "Yes, that works for me.",
    ],
    answer: 0,
    type: "選擇問句",
    explanation:
      "間接回應題。(A) 沒有直接選擇，而是說「下午行程全滿」，暗示只能約午餐前。(B) 重複 lunch 且時態錯置；(C) Yes 回應選擇問句必錯。",
    trap: "重複單字 lunch；Yes/No 回應選擇問句；正解為間接回應（暗示選項）",
  },
  {
    id: "p2-064",
    question: "Will the seminar be held online or in the main hall?",
    options: [
      "Online. The hall is being renovated.",
      "Hold on a second, please.",
      "Yes, I'll be there.",
    ],
    answer: 0,
    type: "選擇問句",
    explanation:
      "二選一，(A) 選線上並說明原因（大廳整修中），正確。(B) held 與 hold 變形誘答（舉行 vs 稍等）；(C) Yes 回應選擇問句必錯。",
    trap: "hold 多義（舉行 vs 稍等）；Yes/No 回應選擇問句",
  },
  {
    id: "p2-065",
    question: "Should we print the brochures in color or in black and white?",
    options: [
      "I like your white shirt.",
      "Yes, the colors are lovely.",
      "Color would look more professional.",
    ],
    answer: 2,
    type: "選擇問句",
    explanation:
      "二選一，(C) 選彩色印刷並說明理由，正確。(A) 重複 white 誘答；(B) 重複 color 且 Yes 回應選擇問句必錯。",
    trap: "重複單字 white、color；Yes/No 回應選擇問句",
  },

  // ===== 陳述句 (15 題) p2-066 ~ p2-080 =====
  {
    id: "p2-066",
    question: "The copier on the second floor is out of order again.",
    options: [
      "I'd like to order a salad.",
      "I'll call the repair service right away.",
      "Two copies, please.",
    ],
    answer: 1,
    type: "陳述句",
    explanation:
      "陳述影印機又壞了，(B) 回應「馬上叫修」最自然。(A) order 多義誘答（故障 vs 點餐）；(C) copier 與 copies 相似音誘答。",
    trap: "order 多義（out of order vs 點餐）；相似音 copier/copies",
  },
  {
    id: "p2-067",
    question: "I can't find the key to the supply cabinet.",
    options: [
      "The findings were surprising.",
      "Maybe Janet borrowed it.",
      "Yes, that's the key issue.",
    ],
    answer: 1,
    type: "陳述句",
    explanation:
      "陳述找不到鑰匙，(B) 推測可能被 Janet 借走，提供線索，正確。(A) find 與 findings 變形誘答；(C) key 多義誘答（鑰匙 vs 關鍵）。",
    trap: "key 多義；find/findings 變形誘答",
  },
  {
    id: "p2-068",
    question: "Our flight to Denver has been canceled.",
    options: [
      "Let's see if we can get on the next one.",
      "I canceled my gym membership.",
      "The Denver office is closed today.",
    ],
    answer: 0,
    type: "陳述句",
    explanation:
      "陳述航班被取消，(A) 提出解決方案「看能不能搭下一班」，正確。(B) 重複 canceled 誘答；(C) 重複 Denver 但內容無關。",
    trap: "重複單字 canceled、Denver 誘答",
  },
  {
    id: "p2-069",
    question: "The clients seemed unhappy with the new design.",
    options: [
      "I'm happy to help anytime.",
      "He designed it himself.",
      "Should we schedule another revision meeting?",
    ],
    answer: 2,
    type: "陳述句",
    explanation:
      "陳述客戶不滿意設計，(C) 提議安排修改會議，是針對問題的自然回應。(A) unhappy 與 happy 相似音誘答；(B) 重複 design 誘答。",
    trap: "相似音 unhappy/happy；重複單字 design",
  },
  {
    id: "p2-070",
    question: "I heard the company is opening a branch in Hanoi.",
    options: [
      "The trees have many branches.",
      "I opened the window for some air.",
      "Really? Where did you hear that?",
    ],
    answer: 2,
    type: "陳述句",
    explanation:
      "間接回應題。(C) 用反問表達驚訝並追問消息來源，是陳述句最自然的對話回應之一。(A) branch 多義誘答（分公司 vs 樹枝）；(B) 重複 open 的變化形誘答。",
    trap: "branch 多義；重複單字 open/opened；正解為反問式間接回應",
  },
  {
    id: "p2-071",
    question: "The printer is running low on toner.",
    options: [
      "I run every morning before work.",
      "There are extra cartridges in the storeroom.",
      "He has a nice tone of voice.",
    ],
    answer: 1,
    type: "陳述句",
    explanation:
      "陳述碳粉快用完，(B) 告知儲藏室有備用碳粉匣，直接解決問題。(A) 重複 run 但意思是「跑步」；(C) toner 與 tone 相似音誘答。",
    trap: "run 多義；相似音 toner/tone",
  },
  {
    id: "p2-072",
    question: "This quarter's sales exceeded our expectations.",
    options: [
      "That's great news for the whole team.",
      "I expect him at noon.",
      "The sail was torn in the storm.",
    ],
    answer: 0,
    type: "陳述句",
    explanation:
      "陳述銷售超出預期，(A) 回應「真是好消息」最自然。(B) expectations 與 expect 變形誘答；(C) sales 與 sail 相似音誘答。",
    trap: "相似音 sales/sail；expectations/expect 變形誘答",
  },
  {
    id: "p2-073",
    question: "The staff meeting has been moved to three o'clock.",
    options: [
      "Thanks for letting me know.",
      "I moved to a new apartment.",
      "There were three of them.",
    ],
    answer: 0,
    type: "陳述句",
    explanation:
      "陳述會議改時間，(A) 感謝告知，是接收資訊後的自然回應。(B) 重複 moved 但意思是「搬家」；(C) 重複 three 但內容無關。",
    trap: "重複單字 moved（多義）、three 誘答",
  },
  {
    id: "p2-074",
    question: "I'm having trouble logging in to the payroll system.",
    options: [
      "He kept a detailed travel log.",
      "The dinner rolls are fresh.",
      "Try resetting your password.",
    ],
    answer: 2,
    type: "陳述句",
    explanation:
      "陳述無法登入系統，(C) 建議重設密碼，直接針對問題提供解法。(A) logging 與 log 相似音誘答；(B) payroll 與 rolls 相似音誘答。",
    trap: "相似音 logging/log、payroll/rolls",
  },
  {
    id: "p2-075",
    question: "We need to hire two more servers for the banquet.",
    options: [
      "The server is down again.",
      "I know an agency that can help.",
      "Yes, I was hired last year.",
    ],
    answer: 1,
    type: "陳述句",
    explanation:
      "間接回應題。(B) 沒有直接評論人力需求，而是提供解決管道（認識的仲介），是高分的建設性回應。(A) server 多義誘答（服務生 vs 伺服器）；(C) hire 與 hired 時態誘答。",
    trap: "server 多義；hire/hired 時態誘答；正解為間接回應（提供解法）",
  },
  {
    id: "p2-076",
    question: "The air conditioning in the meeting room is too cold.",
    options: [
      "I caught a cold last week.",
      "I'll ask maintenance to adjust it.",
      "The meeting went very well.",
    ],
    answer: 1,
    type: "陳述句",
    explanation:
      "抱怨會議室冷氣太冷，(B) 表示會請維修人員調整，正確。(A) cold 多義誘答（冷 vs 感冒）；(C) 重複 meeting 誘答。",
    trap: "cold 多義（溫度 vs 感冒）；重複單字 meeting",
  },
  {
    id: "p2-077",
    question: "Mister Tanaka is retiring at the end of this month.",
    options: [
      "We should plan a farewell party for him.",
      "I'm tired of waiting.",
      "He bought new tires for his car.",
    ],
    answer: 0,
    type: "陳述句",
    explanation:
      "陳述田中先生月底退休，(A) 提議辦歡送會，是自然回應。(B) retiring 與 tired 相似音誘答；(C) retiring 與 tires 相似音誘答。",
    trap: "相似音 retiring/tired/tires",
  },
  {
    id: "p2-078",
    question: "The shipment of office furniture arrived damaged.",
    options: [
      "It's a fully furnished apartment.",
      "The ship sails at noon.",
      "We should file a claim with the carrier.",
    ],
    answer: 2,
    type: "陳述句",
    explanation:
      "陳述家具到貨時受損，(C) 建議向貨運公司索賠，針對問題提出行動。(A) furniture 與 furnished 相似音誘答；(B) shipment 與 ship 相似音誘答。",
    trap: "相似音 furniture/furnished、shipment/ship",
  },
  {
    id: "p2-079",
    question: "I thought the deadline for the grant application was extended.",
    options: [
      "He applied a fresh coat of paint.",
      "The dead battery needs replacing.",
      "Where did you see that?",
    ],
    answer: 2,
    type: "陳述句",
    explanation:
      "間接回應題。(C) 用反問「你在哪看到的？」質疑或確認對方的消息來源，沒有直接同意或否認。(A) application 與 applied 多義誘答（申請 vs 塗抹）；(B) deadline 與 dead 相似音誘答。",
    trap: "相似音 deadline/dead；apply 多義；正解為反問式間接回應",
  },
  {
    id: "p2-080",
    question: "Our team won the contract for the city library project.",
    options: [
      "I borrowed a book from the library.",
      "Congratulations! That's a big win.",
      "The contractor is running late.",
    ],
    answer: 1,
    type: "陳述句",
    explanation:
      "分享贏得合約的好消息，(B) 道賀是最自然的回應。(A) 重複 library 誘答；(C) contract 與 contractor 相似音誘答。",
    trap: "重複單字 library；相似音 contract/contractor",
  },

  // ===== 間接問句 (10 題) p2-081 ~ p2-090 =====
  {
    id: "p2-081",
    question: "Do you know where the orientation packet is?",
    options: [
      "It should be on the reception desk.",
      "Yes, I know him very well.",
      "The package was quite heavy.",
    ],
    answer: 0,
    type: "間接問句",
    explanation:
      "間接問句重點在 where，(A) 回答地點正確。(B) 重複 know 但只回答字面，沒提供位置資訊；(C) packet 與 package 相似音誘答。",
    trap: "重複單字 know（只答字面不給資訊）；相似音 packet/package",
  },
  {
    id: "p2-082",
    question: "Could you tell me when the next train to the city center leaves?",
    options: [
      "The schedule is posted right over there.",
      "I'll leave the keys with you.",
      "Yes, I could.",
    ],
    answer: 0,
    type: "間接問句",
    explanation:
      "間接回應題。(A) 沒有直接回答時間，而是指出時刻表的位置讓對方自行查看。(B) leaves 與 leave 多義誘答（發車 vs 留下）；(C) 只回答 could 的字面，不提供資訊，是經典陷阱。",
    trap: "leave 多義；(C) 只答字面 Yes, I could 不提供資訊；正解為間接回應",
  },
  {
    id: "p2-083",
    question: "Do you have any idea why the meeting was postponed?",
    options: [
      "It was a great idea.",
      "By the post office on Main Street.",
      "Apparently the director is out sick.",
    ],
    answer: 2,
    type: "間接問句",
    explanation:
      "間接問句重點在 why，(C) 說明原因（主管請病假）正確。(A) 重複 idea 誘答；(B) postponed 與 post 相似音誘答。",
    trap: "重複單字 idea；相似音 postponed/post office",
  },
  {
    id: "p2-084",
    question: "Can you tell me how to apply for the management training program?",
    options: [
      "He applied for a loan last year.",
      "Human resources can walk you through it.",
      "The manager is on the train.",
    ],
    answer: 1,
    type: "間接問句",
    explanation:
      "間接回應題。(B) 沒有直接說明申請步驟，而是轉介人資部門協助，是高分的轉介式回應。(A) apply 重複且時態錯置；(C) training 與 train、management 與 manager 相似音誘答。",
    trap: "相似音 training/train、management/manager；(A) 時態錯置；正解為間接回應（轉介）",
  },
  {
    id: "p2-085",
    question: "Do you know if the museum is open on public holidays?",
    options: [
      "It's a public company now.",
      "Yes, but only until noon.",
      "I knew it all along.",
    ],
    answer: 1,
    type: "間接問句",
    explanation:
      "間接問句內含 if 的 Yes/No 問題，(B) 回答「有開但只到中午」正確。(A) 重複 public 誘答；(C) know 與 knew 變形誘答，且不提供資訊。",
    trap: "重複單字 public；know/knew 變形誘答",
  },
  {
    id: "p2-086",
    question: "Could you tell me who is responsible for booking travel arrangements?",
    options: [
      "Check with the office manager.",
      "Yes, the response was very quick.",
      "I arranged the flowers myself.",
    ],
    answer: 0,
    type: "間接問句",
    explanation:
      "間接回應題。(A) 沒有給出確切人名，而是建議去問辦公室經理，屬於轉介式間接回應。(B) responsible 與 response 相似音誘答；(C) arrangements 與 arranged 多義誘答（安排 vs 插花）。",
    trap: "相似音 responsible/response、arrangements/arranged；正解為間接回應（轉介）",
  },
  {
    id: "p2-087",
    question: "Do you know what time the keynote speech begins?",
    options: [
      "He spoke very loudly.",
      "The keys are on the table.",
      "At ten, right after the welcome remarks.",
    ],
    answer: 2,
    type: "間接問句",
    explanation:
      "間接問句重點在 what time，(C) 回答十點開始正確。(A) speech 與 spoke 變形誘答；(B) keynote 與 keys 相似音誘答。",
    trap: "相似音 keynote/keys；speech/spoke 變形誘答",
  },
  {
    id: "p2-088",
    question: "Can you tell me whether the visa application has been processed?",
    options: [
      "I paid with my credit card.",
      "The process is quite simple.",
      "Let me check the system for you.",
    ],
    answer: 2,
    type: "間接問句",
    explanation:
      "間接回應題。(C) 沒有直接回答是否完成，而是表示「我幫你查一下系統」，是服務情境最自然的回應。(A) visa 使人聯想到信用卡的聯想誘答；(B) processed 與 process 變形誘答。",
    trap: "聯想誘答 visa/信用卡；processed/process 變形；正解為間接回應（提議查詢）",
  },
  {
    id: "p2-089",
    question: "Do you happen to know where I can rent a car nearby?",
    options: [
      "The rent is due on Monday.",
      "There's an agency across the street.",
      "Yes, it happened yesterday.",
    ],
    answer: 1,
    type: "間接問句",
    explanation:
      "間接問句重點在 where，(B) 告知對街有租車公司正確。(A) rent 多義誘答（租車 vs 房租）；(C) happen 與 happened 變形誘答，且不提供資訊。",
    trap: "rent 多義（租車 vs 房租）；happen/happened 變形誘答",
  },
  {
    id: "p2-090",
    question: "Could you tell me why my reimbursement hasn't arrived yet?",
    options: [
      "You'll need to ask the accounting department.",
      "The bus arrived right on time.",
      "Yes, I reimbursed him last week.",
    ],
    answer: 0,
    type: "間接問句",
    explanation:
      "間接回應題。(A) 沒有直接說明原因，而是轉介會計部門，表示自己無法回答，是高分關鍵題型。(B) 重複 arrived 誘答；(C) reimbursement 與 reimbursed 變形誘答，且答非所問。",
    trap: "重複單字 arrived；reimbursement/reimbursed 變形；正解為間接回應（轉介部門）",
  },
];
