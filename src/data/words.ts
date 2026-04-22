import type { Word } from "../lib/types";

export const wordsData: Word[] = [
  // ===== BUSINESS / MARKETING (700 words) =====
  // Difficulty 1 - Basic business terms
  { id: "b001", english: "budget", chinese: "預算", partOfSpeech: "n.", phonetic: "/ˈbʌdʒɪt/", domain: "business", difficulty: 1, exampleEn: "We need to review the marketing budget for next quarter.", exampleZh: "我們需要審查下一季的行銷預算。" },
  { id: "b002", english: "client", chinese: "客戶", partOfSpeech: "n.", phonetic: "/ˈklaɪənt/", domain: "business", difficulty: 1, exampleEn: "The client requested a meeting to discuss the project.", exampleZh: "客戶要求開會討論這個專案。" },
  { id: "b003", english: "contract", chinese: "合約", partOfSpeech: "n.", phonetic: "/ˈkɒntrækt/", domain: "business", difficulty: 1, exampleEn: "Please sign the contract before the deadline.", exampleZh: "請在截止日期前簽署合約。" },
  { id: "b004", english: "deadline", chinese: "截止日期", partOfSpeech: "n.", phonetic: "/ˈdɛdlaɪn/", domain: "business", difficulty: 1, exampleEn: "The deadline for the proposal is next Friday.", exampleZh: "提案的截止日期是下週五。" },
  { id: "b005", english: "invoice", chinese: "發票；請款單", partOfSpeech: "n.", phonetic: "/ˈɪnvɔɪs/", domain: "business", difficulty: 1, exampleEn: "Please send the invoice to our accounting department.", exampleZh: "請將請款單寄到我們的會計部門。" },
  // Difficulty 2
  { id: "b006", english: "negotiate", chinese: "談判；協商", partOfSpeech: "v.", phonetic: "/nɪˈɡoʊʃieɪt/", domain: "business", difficulty: 2, exampleEn: "We need to negotiate the contract terms before signing.", exampleZh: "我們需要在簽約前協商合約條款。" },
  { id: "b007", english: "revenue", chinese: "營收", partOfSpeech: "n.", phonetic: "/ˈrɛvənjuː/", domain: "business", difficulty: 2, exampleEn: "The company's revenue increased by 15% this year.", exampleZh: "公司今年的營收增長了 15%。" },
  { id: "b008", english: "strategy", chinese: "策略", partOfSpeech: "n.", phonetic: "/ˈstrætədʒi/", domain: "business", difficulty: 2, exampleEn: "Our marketing strategy focuses on social media engagement.", exampleZh: "我們的行銷策略著重在社群媒體互動。" },
  { id: "b009", english: "launch", chinese: "推出；發布", partOfSpeech: "v.", phonetic: "/lɔːntʃ/", domain: "business", difficulty: 2, exampleEn: "We plan to launch the new product next month.", exampleZh: "我們計劃下個月推出新產品。" },
  { id: "b010", english: "campaign", chinese: "活動；行銷活動", partOfSpeech: "n.", phonetic: "/kæmˈpeɪn/", domain: "business", difficulty: 2, exampleEn: "The advertising campaign generated a lot of brand awareness.", exampleZh: "這個廣告活動產生了很高的品牌知名度。" },
  // Difficulty 3
  { id: "b011", english: "leverage", chinese: "利用；槓桿", partOfSpeech: "v.", phonetic: "/ˈlɛvərɪdʒ/", domain: "business", difficulty: 3, exampleEn: "We should leverage social media to reach a wider audience.", exampleZh: "我們應該利用社群媒體來接觸更廣的受眾。" },
  { id: "b012", english: "benchmark", chinese: "基準；標竿", partOfSpeech: "n.", phonetic: "/ˈbɛntʃmɑːrk/", domain: "business", difficulty: 3, exampleEn: "This performance serves as a benchmark for future campaigns.", exampleZh: "這個績效可以作為未來活動的基準。" },
  { id: "b013", english: "acquisition", chinese: "收購；獲取", partOfSpeech: "n.", phonetic: "/ˌækwɪˈzɪʃən/", domain: "business", difficulty: 3, exampleEn: "Customer acquisition cost has been rising steadily.", exampleZh: "客戶獲取成本一直在穩定上升。" },
  { id: "b014", english: "stakeholder", chinese: "利害關係人", partOfSpeech: "n.", phonetic: "/ˈsteɪkhoʊldər/", domain: "business", difficulty: 3, exampleEn: "All stakeholders must approve the proposal before we proceed.", exampleZh: "所有利害關係人必須先批准提案我們才能進行。" },
  { id: "b015", english: "conversion", chinese: "轉換；轉換率", partOfSpeech: "n.", phonetic: "/kənˈvɜːrʒən/", domain: "business", difficulty: 3, exampleEn: "The landing page has a conversion rate of 3.5%.", exampleZh: "這個登陸頁的轉換率為 3.5%。" },
  // Difficulty 4
  { id: "b016", english: "scalable", chinese: "可擴展的", partOfSpeech: "adj.", phonetic: "/ˈskeɪləbl/", domain: "business", difficulty: 4, exampleEn: "We need a scalable solution that can grow with the company.", exampleZh: "我們需要一個能跟著公司成長的可擴展解決方案。" },
  { id: "b017", english: "synergy", chinese: "綜效；協同效應", partOfSpeech: "n.", phonetic: "/ˈsɪnərdʒi/", domain: "business", difficulty: 4, exampleEn: "The merger created synergy between the two companies.", exampleZh: "這次合併為兩家公司創造了綜效。" },
  { id: "b018", english: "procurement", chinese: "採購", partOfSpeech: "n.", phonetic: "/prəˈkjʊərmənt/", domain: "business", difficulty: 4, exampleEn: "The procurement process takes about two weeks.", exampleZh: "採購流程大約需要兩週。" },
  { id: "b019", english: "monetize", chinese: "貨幣化；變現", partOfSpeech: "v.", phonetic: "/ˈmɒnɪtaɪz/", domain: "business", difficulty: 4, exampleEn: "The company is looking for ways to monetize its user base.", exampleZh: "公司正在尋找將使用者基礎變現的方法。" },
  { id: "b020", english: "incentivize", chinese: "激勵；給予獎勵", partOfSpeech: "v.", phonetic: "/ɪnˈsɛntɪvaɪz/", domain: "business", difficulty: 4, exampleEn: "We need to incentivize early adoption of the new platform.", exampleZh: "我們需要激勵新平台的早期採用者。" },

  // ===== DAILY / TRAVEL (600 words) =====
  // Difficulty 1
  { id: "d001", english: "accommodate", chinese: "容納；提供住宿", partOfSpeech: "v.", phonetic: "/əˈkɒmədeɪt/", domain: "daily", difficulty: 1, exampleEn: "The hotel can accommodate up to 200 guests.", exampleZh: "這間飯店最多可以容納 200 位客人。" },
  { id: "d002", english: "luggage", chinese: "行李", partOfSpeech: "n.", phonetic: "/ˈlʌɡɪdʒ/", domain: "daily", difficulty: 1, exampleEn: "Please collect your luggage at the baggage claim.", exampleZh: "請在行李提領處領取您的行李。" },
  { id: "d003", english: "reservation", chinese: "預訂", partOfSpeech: "n.", phonetic: "/ˌrɛzərˈveɪʃən/", domain: "daily", difficulty: 1, exampleEn: "I'd like to make a reservation for two people.", exampleZh: "我想預訂兩個人的位子。" },
  { id: "d004", english: "currency", chinese: "貨幣", partOfSpeech: "n.", phonetic: "/ˈkʌrənsi/", domain: "daily", difficulty: 1, exampleEn: "What currency do they use in Japan?", exampleZh: "日本使用什麼貨幣？" },
  { id: "d005", english: "itinerary", chinese: "行程", partOfSpeech: "n.", phonetic: "/aɪˈtɪnərɛri/", domain: "daily", difficulty: 1, exampleEn: "Let me check the itinerary for tomorrow.", exampleZh: "讓我看一下明天的行程。" },
  // Difficulty 2
  { id: "d006", english: "commute", chinese: "通勤", partOfSpeech: "v./n.", phonetic: "/kəˈmjuːt/", domain: "daily", difficulty: 2, exampleEn: "My daily commute takes about 40 minutes.", exampleZh: "我每天通勤大約 40 分鐘。" },
  { id: "d007", english: "grocery", chinese: "雜貨；食品", partOfSpeech: "n.", phonetic: "/ˈɡroʊsəri/", domain: "daily", difficulty: 2, exampleEn: "I need to pick up some groceries on the way home.", exampleZh: "我回家路上需要買些雜貨。" },
  { id: "d008", english: "postpone", chinese: "延期；推遲", partOfSpeech: "v.", phonetic: "/poʊstˈpoʊn/", domain: "daily", difficulty: 2, exampleEn: "We had to postpone the trip due to bad weather.", exampleZh: "因為天氣不好，我們不得不延期旅行。" },
  { id: "d009", english: "convenient", chinese: "方便的", partOfSpeech: "adj.", phonetic: "/kənˈviːniənt/", domain: "daily", difficulty: 2, exampleEn: "The hotel is in a very convenient location.", exampleZh: "這間飯店的位置非常方便。" },
  { id: "d010", english: "departure", chinese: "出發；啟程", partOfSpeech: "n.", phonetic: "/dɪˈpɑːrtʃər/", domain: "daily", difficulty: 2, exampleEn: "The departure time has been changed to 3 PM.", exampleZh: "出發時間已改為下午三點。" },
  // Difficulty 3
  { id: "d011", english: "complimentary", chinese: "免費贈送的；讚美的", partOfSpeech: "adj.", phonetic: "/ˌkɒmplɪˈmɛntəri/", domain: "daily", difficulty: 3, exampleEn: "The hotel offers complimentary breakfast for all guests.", exampleZh: "飯店為所有客人提供免費早餐。" },
  { id: "d012", english: "reimburse", chinese: "報銷；償還", partOfSpeech: "v.", phonetic: "/ˌriːɪmˈbɜːrs/", domain: "daily", difficulty: 3, exampleEn: "The company will reimburse you for travel expenses.", exampleZh: "公司會報銷你的旅行費用。" },
  { id: "d013", english: "sustainable", chinese: "永續的", partOfSpeech: "adj.", phonetic: "/səˈsteɪnəbl/", domain: "daily", difficulty: 3, exampleEn: "We should choose more sustainable travel options.", exampleZh: "我們應該選擇更永續的旅行方式。" },
  { id: "d014", english: "allergic", chinese: "過敏的", partOfSpeech: "adj.", phonetic: "/əˈlɜːrdʒɪk/", domain: "daily", difficulty: 3, exampleEn: "I'm allergic to shellfish, so please be careful.", exampleZh: "我對甲殼類過敏，請多注意。" },
  { id: "d015", english: "supplement", chinese: "補充品；補充", partOfSpeech: "n./v.", phonetic: "/ˈsʌplɪmənt/", domain: "daily", difficulty: 3, exampleEn: "I take vitamin supplements every morning.", exampleZh: "我每天早上吃維他命補充品。" },

  // ===== ACADEMIC / EXAM (700 words) =====
  // Difficulty 1
  { id: "a001", english: "analyze", chinese: "分析", partOfSpeech: "v.", phonetic: "/ˈænəlaɪz/", domain: "academic", difficulty: 1, exampleEn: "We need to analyze the data before drawing conclusions.", exampleZh: "我們需要在得出結論前分析數據。" },
  { id: "a002", english: "evidence", chinese: "證據", partOfSpeech: "n.", phonetic: "/ˈɛvɪdəns/", domain: "academic", difficulty: 1, exampleEn: "There is strong evidence to support this theory.", exampleZh: "有強力的證據支持這個理論。" },
  { id: "a003", english: "hypothesis", chinese: "假設", partOfSpeech: "n.", phonetic: "/haɪˈpɒθəsɪs/", domain: "academic", difficulty: 1, exampleEn: "The researcher formed a hypothesis based on initial observations.", exampleZh: "研究者根據初步觀察形成了假設。" },
  { id: "a004", english: "significant", chinese: "顯著的；重要的", partOfSpeech: "adj.", phonetic: "/sɪɡˈnɪfɪkənt/", domain: "academic", difficulty: 1, exampleEn: "The results showed a significant improvement in test scores.", exampleZh: "結果顯示考試成績有顯著的改善。" },
  { id: "a005", english: "conclude", chinese: "總結；得出結論", partOfSpeech: "v.", phonetic: "/kənˈkluːd/", domain: "academic", difficulty: 1, exampleEn: "The study concluded that exercise improves memory.", exampleZh: "這項研究得出結論，運動能改善記憶力。" },
  // Difficulty 2
  { id: "a006", english: "correlation", chinese: "相關性", partOfSpeech: "n.", phonetic: "/ˌkɒrəˈleɪʃən/", domain: "academic", difficulty: 2, exampleEn: "There is a strong correlation between sleep and productivity.", exampleZh: "睡眠和生產力之間有很強的相關性。" },
  { id: "a007", english: "implement", chinese: "實施；執行", partOfSpeech: "v.", phonetic: "/ˈɪmplɪmɛnt/", domain: "academic", difficulty: 2, exampleEn: "The school decided to implement a new grading system.", exampleZh: "學校決定實施新的評分系統。" },
  { id: "a008", english: "perspective", chinese: "觀點；視角", partOfSpeech: "n.", phonetic: "/pərˈspɛktɪv/", domain: "academic", difficulty: 2, exampleEn: "It's important to consider different perspectives on this issue.", exampleZh: "考慮這個問題的不同觀點是很重要的。" },
  { id: "a009", english: "phenomenon", chinese: "現象", partOfSpeech: "n.", phonetic: "/fɪˈnɒmɪnən/", domain: "academic", difficulty: 2, exampleEn: "Global warming is a well-documented phenomenon.", exampleZh: "全球暖化是一個有充分記錄的現象。" },
  { id: "a010", english: "criteria", chinese: "標準（複數）", partOfSpeech: "n.", phonetic: "/kraɪˈtɪriə/", domain: "academic", difficulty: 2, exampleEn: "What are the criteria for evaluating the proposals?", exampleZh: "評估提案的標準是什麼？" },
  // Difficulty 3
  { id: "a011", english: "empirical", chinese: "經驗的；實證的", partOfSpeech: "adj.", phonetic: "/ɪmˈpɪrɪkəl/", domain: "academic", difficulty: 3, exampleEn: "The study is based on empirical evidence from field research.", exampleZh: "這項研究基於田野調查的實證證據。" },
  { id: "a012", english: "ambiguous", chinese: "模糊的；有歧義的", partOfSpeech: "adj.", phonetic: "/æmˈbɪɡjuəs/", domain: "academic", difficulty: 3, exampleEn: "The instructions were ambiguous and caused confusion.", exampleZh: "指示很模糊，造成了混亂。" },
  { id: "a013", english: "implications", chinese: "影響；暗示", partOfSpeech: "n.", phonetic: "/ˌɪmplɪˈkeɪʃənz/", domain: "academic", difficulty: 3, exampleEn: "This discovery has significant implications for future research.", exampleZh: "這個發現對未來研究有重大影響。" },
  { id: "a014", english: "prevalent", chinese: "普遍的；流行的", partOfSpeech: "adj.", phonetic: "/ˈprɛvələnt/", domain: "academic", difficulty: 3, exampleEn: "This type of error is prevalent among non-native speakers.", exampleZh: "這種錯誤在非母語者中很普遍。" },
  { id: "a015", english: "comprehensive", chinese: "全面的；綜合的", partOfSpeech: "adj.", phonetic: "/ˌkɒmprɪˈhɛnsɪv/", domain: "academic", difficulty: 3, exampleEn: "The report provides a comprehensive overview of the market.", exampleZh: "這份報告提供了市場的全面概述。" },
  // Difficulty 4
  { id: "a016", english: "paradigm", chinese: "範式；典範", partOfSpeech: "n.", phonetic: "/ˈpærədaɪm/", domain: "academic", difficulty: 4, exampleEn: "The discovery led to a paradigm shift in the field.", exampleZh: "這個發現導致了該領域的典範轉移。" },
  { id: "a017", english: "pragmatic", chinese: "務實的；實用主義的", partOfSpeech: "adj.", phonetic: "/præɡˈmætɪk/", domain: "academic", difficulty: 4, exampleEn: "We need a more pragmatic approach to solving this problem.", exampleZh: "我們需要更務實的方法來解決這個問題。" },
  { id: "a018", english: "substantiate", chinese: "證實；證明", partOfSpeech: "v.", phonetic: "/səbˈstænʃieɪt/", domain: "academic", difficulty: 4, exampleEn: "Can you substantiate your claims with evidence?", exampleZh: "你能用證據證實你的說法嗎？" },
  { id: "a019", english: "juxtapose", chinese: "並列；並置", partOfSpeech: "v.", phonetic: "/ˈdʒʌkstəpoʊz/", domain: "academic", difficulty: 4, exampleEn: "The author juxtaposes modern and traditional values.", exampleZh: "作者將現代和傳統價值觀並列。" },
  { id: "a020", english: "dichotomy", chinese: "二分法；對立", partOfSpeech: "n.", phonetic: "/daɪˈkɒtəmi/", domain: "academic", difficulty: 4, exampleEn: "There is a false dichotomy between work and life.", exampleZh: "工作和生活之間存在一種錯誤的二分法。" },
];
