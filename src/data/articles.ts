import type { Article } from "../lib/types";
import { extraArticlesData } from "./articles-extra";

const baseArticles: Article[] = [
  // ===== BUSINESS ARTICLES (30) =====

  // ---------- Difficulty 1: art-b01 to art-b10 ----------
  {
    id: "art-b01",
    title: "How to Write a Professional Email",
    content: `Writing professional emails is an essential skill in today's business world. Whether you are communicating with a client or a colleague, the way you write can significantly impact how others perceive you and your company.

First, always use a clear and specific subject line. A good subject line helps the recipient understand the purpose of your email immediately. For example, instead of writing "Meeting," try "Budget Review Meeting — March 15 at 2 PM." This small change saves the reader time and shows respect for their busy schedule.

Second, keep your message concise. Business professionals receive dozens of emails every day, so respect their time. State your main point in the first paragraph, then provide supporting details below. Use bullet points or numbered lists when you need to present multiple items. This makes the content easier to scan and helps the reader find important information quickly.

Third, maintain a polite and professional tone throughout your message. Start with an appropriate greeting such as "Dear Mr. Smith" or "Hello Team." End with a courteous closing like "Best regards" or "Thank you for your time." Avoid using slang, emojis, or overly casual language, especially when writing to someone you have not met in person.

Fourth, always proofread before hitting send. Check for spelling errors, grammar mistakes, and unclear sentences. A well-written email reflects your professionalism and attention to detail. If the email is important, consider asking a colleague to review it before you send it.

Finally, remember that email is often the first impression you make in a business relationship. Taking a few extra minutes to craft a thoughtful message can make a significant difference in your career. Good email etiquette builds trust, strengthens professional relationships, and helps you stand out in a competitive workplace. Make every email count by treating it as an opportunity to demonstrate your communication skills and attention to your client's needs. When you reply to messages before the deadline, you show reliability. When you reference the original contract terms accurately, you show thoroughness.`,
    contentZh: `撰寫專業電子郵件是當今商業世界中不可或缺的技能。無論你是在與客戶還是同事溝通，你的寫作方式都會大大影響別人對你和你公司的印象。

首先，務必使用清楚且具體的主旨欄。好的主旨欄能讓收件者立即了解郵件的目的。例如，與其寫「會議」，不如試試「預算審查會議 — 3月15日下午2點」。這個小小的改變能節省讀者的時間，也展現你對他們忙碌行程的尊重。

其次，保持訊息簡潔。商務人士每天收到數十封電子郵件，所以請尊重他們的時間。在第一段就說明你的重點，然後在下方提供補充細節。當你需要列出多個項目時，使用項目符號或編號清單。這樣能讓內容更容易瀏覽，幫助讀者快速找到重要資訊。

第三，在整封郵件中保持禮貌和專業的語氣。以適當的問候語開頭，例如「Dear Mr. Smith」或「Hello Team」。以有禮的結尾語作結，例如「Best regards」或「Thank you for your time」。避免使用俚語、表情符號或過於隨意的用語，尤其是在寫信給未曾見面的人時。

第四，在按下傳送鍵之前一定要校對。檢查拼字錯誤、文法錯誤和語意不清的句子。一封寫得好的電子郵件能反映出你的專業素養和對細節的重視。如果這封郵件很重要，可以考慮請同事在你寄出之前先幫你看過。

最後，請記住電子郵件往往是你在商業關係中留下的第一印象。多花幾分鐘用心撰寫一封周到的訊息，可能會對你的職涯產生重大影響。良好的電子郵件禮儀能建立信任、強化專業關係，並幫助你在競爭激烈的職場中脫穎而出。把每封郵件都當作展現溝通技巧和對客戶需求重視的機會。當你在截止期限前回覆訊息，就展現了你的可靠性。當你準確引用原始合約條款，就展現了你的嚴謹態度。`,
    domain: "business" as const,
    difficulty: 1,
    wordCount: 303,
    targetWords: ["b002", "b003", "b004"],
    questions: [
      {
        question: "What is the main purpose of this article?",
        options: ["A. To explain how to use email software", "B. To provide tips for writing effective business emails", "C. To compare email with other communication tools", "D. To discuss the history of email"],
        correctIndex: 1,
        explanation: "文章的主要目的是提供撰寫有效商務電子郵件的技巧，涵蓋主旨欄、簡潔性、語氣、校對等多個面向，因此答案為 B。",
      },
      {
        question: "According to the article, why should emails be concise?",
        options: ["A. Because long emails cost more to send", "B. Because professionals receive many emails daily and have limited time", "C. Because short emails look more professional", "D. Because email servers have size limits"],
        correctIndex: 1,
        explanation: "文章提到「商務人士每天收到數十封電子郵件，所以請尊重他們的時間」，說明簡潔的原因是專業人士每天收到很多郵件、時間有限，因此答案為 B。",
      },
      {
        question: "What does the author suggest you do before sending an important email?",
        options: ["A. Print it out first", "B. Wait 24 hours before sending", "C. Ask a colleague to review it", "D. Send it to yourself first"],
        correctIndex: 2,
        explanation: "文章在校對段落中提到「如果這封郵件很重要，可以考慮請同事在你寄出之前先幫你看過」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-b02",
    title: "Planning Your First Marketing Campaign",
    content: `If you are new to marketing, planning your first campaign can feel overwhelming. However, by following a few basic steps, you can create a campaign that reaches the right people and achieves your goals.

The first step is to define your objective. What do you want your campaign to accomplish? Common objectives include increasing brand awareness, generating leads, or boosting sales of a specific product. Having a clear objective helps you make better decisions throughout the planning process.

Next, identify your target audience. Who are you trying to reach? Think about their age, location, interests, and online behavior. The more you know about your audience, the easier it is to create messages that resonate with them. For instance, a campaign targeting young professionals might use social media platforms like Instagram, while a campaign for senior executives might focus on LinkedIn or industry publications.

Once you know your audience, decide on your budget. How much money can you spend on this campaign? Your budget determines which channels you can use and how long you can run your ads. It is important to set a realistic budget and track your spending carefully to avoid going over the limit.

After that, create your content. This includes writing ad copy, designing images or videos, and preparing landing pages. Make sure your content is consistent with your brand voice and delivers a clear message to your audience. A strong strategy connects your content to your overall business goals.

Finally, set a timeline with specific deadlines. Know when each piece of content needs to be ready, when ads will go live, and when the campaign will end. A well-organized timeline keeps your team on track and ensures that nothing is forgotten.

Remember, your first campaign does not need to be perfect. The most important thing is to start, learn from the results, and improve next time. Every successful marketer began with a first campaign.`,
    contentZh: `如果你是行銷新手，規劃你的第一個行銷活動可能會讓你感到不知所措。不過，只要遵循幾個基本步驟，你就能打造一個觸及對的人、達成目標的行銷活動。

第一步是定義你的目標。你希望這次活動達成什麼成果？常見的目標包括提升品牌知名度、開發潛在客戶，或是提高特定產品的銷售量。有明確的目標能幫助你在整個規劃過程中做出更好的決策。

接下來，確定你的目標受眾。你想要觸及的是哪些人？想想他們的年齡、所在地、興趣和線上行為。你對受眾了解越多，就越容易創造出能引起他們共鳴的訊息。例如，針對年輕專業人士的活動可能會使用 Instagram 等社群媒體平台，而針對高階主管的活動則可能聚焦在 LinkedIn 或產業刊物。

當你了解受眾之後，決定你的預算。你能在這次活動上花多少錢？預算決定了你可以使用哪些管道，以及廣告可以投放多長時間。設定一個合理的預算並仔細追蹤支出是很重要的，以避免超支。

之後，製作你的內容。這包括撰寫廣告文案、設計圖片或影片，以及準備到達頁面。確保你的內容與品牌調性一致，並向受眾傳達清楚的訊息。好的策略能將你的內容與整體商業目標連結起來。

最後，設定一個包含具體截止日期的時程表。了解每個內容需要在何時完成、廣告何時上線，以及活動何時結束。有條理的時程表能讓團隊按計畫進行，確保沒有遺漏。

請記住，你的第一次行銷活動不需要完美。最重要的是開始行動、從結果中學習，然後在下次改進。每個成功的行銷人都是從第一次活動開始的。`,
    domain: "business" as const,
    difficulty: 1,
    wordCount: 300,
    targetWords: ["b001", "b004", "b008", "b010"],
    questions: [
      {
        question: "What is the first step in planning a marketing campaign according to the article?",
        options: ["A. Creating content", "B. Setting a budget", "C. Defining your objective", "D. Choosing social media platforms"],
        correctIndex: 2,
        explanation: "文章明確指出「第一步是定義你的目標」，在所有步驟中最先提到的就是確定行銷活動的目標，因此答案為 C。",
      },
      {
        question: "Why is it important to identify your target audience?",
        options: ["A. To make your budget larger", "B. To create messages that resonate with the right people", "C. To avoid using social media", "D. To copy competitors' strategies"],
        correctIndex: 1,
        explanation: "文章提到「你對受眾了解越多，就越容易創造出能引起他們共鳴的訊息」，因此確定目標受眾是為了創造能引起對的人共鳴的訊息，答案為 B。",
      },
      {
        question: "What advice does the author give about a first campaign?",
        options: ["A. It must be perfect before launching", "B. It should have an unlimited budget", "C. It does not need to be perfect — start, learn, and improve", "D. It should only run on one platform"],
        correctIndex: 2,
        explanation: "文章最後一段提到「你的第一次行銷活動不需要完美。最重要的是開始行動、從結果中學習，然後在下次改進」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-b03",
    title: "The Basics of Business Meetings",
    content: `Business meetings are a daily reality for most professionals. Whether you are meeting with your team, your manager, or an external client, knowing how to participate effectively in meetings is a valuable skill that can advance your career.

Before the meeting, prepare thoroughly. Read the agenda so you know what topics will be discussed. If you need to present any information, prepare your materials in advance and practice your delivery. Bring any documents or data that might be relevant to the discussion. Arriving unprepared wastes everyone's time and can damage your professional reputation.

During the meeting, listen actively. This means paying full attention to the speaker, taking notes, and avoiding distractions such as checking your phone or email. When it is your turn to speak, express your ideas clearly and concisely. Avoid interrupting others, and wait for an appropriate moment to contribute your thoughts.

If you disagree with someone, do so respectfully. Use phrases like "I see your point, but I think we should also consider..." or "That is an interesting perspective. May I suggest an alternative?" Professional disagreement shows critical thinking and can lead to better decisions for the company.

At the end of the meeting, make sure you understand the action items — the specific tasks that need to be completed after the meeting. Know who is responsible for each task and what the deadline is. If anything is unclear, ask for clarification before the meeting ends.

After the meeting, follow up. Send a summary email to all participants that lists the key decisions made and the action items assigned. This creates a written record and ensures that everyone is on the same page. Effective follow-up is often what separates productive meetings from unproductive ones.

Good meeting skills do not come naturally to everyone, but with practice and attention to the contract of professional behavior, they can be developed over time.`,
    contentZh: `商務會議是大多數專業人士的日常。無論你是與團隊、主管還是外部客戶開會，懂得如何有效地參與會議是一項能推進職涯的寶貴技能。

開會前，要做好充分準備。閱讀議程，了解將討論哪些主題。如果你需要報告任何資訊，事先準備好資料並練習你的表達方式。攜帶任何可能與討論相關的文件或數據。毫無準備地出席會議會浪費所有人的時間，還可能損害你的專業形象。

會議進行中，要積極聆聽。這意味著要全神貫注地聽發言者說話、做筆記，並避免分心，例如查看手機或電子郵件。輪到你發言時，清楚且簡潔地表達你的想法。避免打斷他人，等待適當的時機再提出你的看法。

如果你不同意某人的觀點，請以尊重的方式表達。使用像是「我理解你的觀點，但我認為我們也應該考慮……」或「這是個有趣的看法。我可以提出一個替代方案嗎？」這類說法。專業的異議展現了批判性思維，並能為公司帶來更好的決策。

在會議結束時，確認你了解所有的待辦事項——也就是會後需要完成的具體任務。了解每項任務由誰負責，以及截止日期是什麼時候。如果有任何不清楚的地方，在會議結束前提出來釐清。

會後要進行跟進。發一封摘要郵件給所有與會者，列出做出的重要決定和分配的待辦事項。這能建立書面記錄，確保大家都有共識。有效的會後跟進往往是高效率會議與無效率會議之間的關鍵差異。

良好的會議技巧並非人人天生就有，但只要練習並注意專業行為的規範，這些技能是可以隨著時間培養起來的。`,
    domain: "business" as const,
    difficulty: 1,
    wordCount: 301,
    targetWords: ["b002", "b003", "b004"],
    questions: [
      {
        question: "What should you do before attending a business meeting?",
        options: ["A. Cancel other appointments", "B. Read the agenda and prepare materials", "C. Arrive early to choose the best seat", "D. Send an email to all participants"],
        correctIndex: 1,
        explanation: "文章提到會前準備包括「閱讀議程」和「準備好資料」，因此答案為 B「閱讀議程並準備資料」。",
      },
      {
        question: "How does the article suggest you handle disagreements in meetings?",
        options: ["A. Stay silent to avoid conflict", "B. Express disagreement loudly and firmly", "C. Disagree respectfully using professional language", "D. Wait until after the meeting to disagree privately"],
        correctIndex: 2,
        explanation: "文章建議使用專業語言來表達不同意見，例如「我理解你的觀點，但我認為我們也應該考慮……」，強調以尊重的方式提出異議，因此答案為 C。",
      },
      {
        question: "What is the purpose of sending a follow-up email after a meeting?",
        options: ["A. To thank participants for attending", "B. To schedule the next meeting", "C. To create a written record of decisions and action items", "D. To share personal opinions about the meeting"],
        correctIndex: 2,
        explanation: "文章明確指出會後跟進郵件的目的是「建立書面記錄，確保大家都有共識」，列出重要決定和待辦事項，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-b04",
    title: "Understanding Customer Service Excellence",
    content: `Customer service is one of the most important aspects of any business. When customers have a positive experience, they are more likely to return and recommend the company to others. On the other hand, poor customer service can drive customers away permanently and damage a brand's reputation.

The foundation of excellent customer service is listening. When a client contacts your company with a question or complaint, the first thing you should do is listen carefully to understand their problem. Do not interrupt or rush to provide a solution before you fully understand the situation. Many customers simply want to feel heard and valued.

Empathy is another key ingredient. Try to put yourself in the customer's shoes and understand how they feel. Use phrases like "I understand how frustrating this must be" or "I am sorry for the inconvenience." These simple words can transform an angry customer into a satisfied one.

Response time also matters greatly. In today's fast-paced world, customers expect quick replies. If you receive a complaint by email, try to respond within 24 hours. For phone calls or live chat, aim for an immediate response. Even if you cannot solve the problem right away, let the customer know that you are working on it and give them an estimated timeline for meeting the deadline.

Training your team is essential for maintaining high service standards. Every employee who interacts with customers should know the company's products, policies, and procedures. Regular training sessions help keep the team updated and prepared for various situations.

Finally, collect feedback regularly. Use surveys, reviews, and direct conversations to learn what customers think about your service. This feedback is valuable because it reveals areas where you can improve. Companies that continuously improve their customer service build stronger, more loyal relationships over time. A well-managed budget for customer service training pays for itself through increased client satisfaction.

Great customer service is not just a department — it is a mindset that should be shared across the entire organization.`,
    contentZh: `客戶服務是任何企業最重要的面向之一。當客戶有正面的體驗時，他們更有可能回購並向他人推薦這家公司。反之，糟糕的客戶服務可能會永久地流失客戶，並損害品牌的聲譽。

優質客戶服務的基礎是傾聽。當客戶聯繫你的公司提出問題或投訴時，你首先要做的是仔細傾聽，了解他們的問題。在你完全理解情況之前，不要打斷或急著提供解決方案。許多客戶只是希望被聽見、被重視。

同理心是另一個關鍵要素。試著站在客戶的角度，理解他們的感受。使用像是「我能理解這對您來說有多令人沮喪」或「很抱歉造成您的不便」等說法。這些簡單的話語可以將一位憤怒的客戶轉變為一位滿意的客戶。

回應速度也非常重要。在當今快節奏的世界中，客戶期望得到快速的回覆。如果你透過電子郵件收到投訴，盡量在 24 小時內回覆。對於電話或即時聊天，目標是立即回應。即使你無法馬上解決問題，也要讓客戶知道你正在處理，並給他們一個預計的回覆時間。

培訓你的團隊對於維持高服務標準至關重要。每位與客戶互動的員工都應該了解公司的產品、政策和流程。定期的培訓課程有助於讓團隊保持最新狀態，做好應對各種情況的準備。

最後，定期收集回饋。透過問卷調查、評價和直接對話來了解客戶對你服務的看法。這些回饋非常珍貴，因為它能揭示你可以改進的地方。持續改善客戶服務的公司能建立更強大、更忠誠的客戶關係。為客戶服務培訓編列充足的預算，能透過提升客戶滿意度來回收成本。

卓越的客戶服務不僅僅是一個部門——它是一種應該在整個組織中共享的理念。`,
    domain: "business" as const,
    difficulty: 1,
    wordCount: 310,
    targetWords: ["b001", "b002", "b004"],
    questions: [
      {
        question: "According to the article, what is the foundation of excellent customer service?",
        options: ["A. Offering discounts", "B. Listening carefully to customers", "C. Responding quickly", "D. Having a large team"],
        correctIndex: 1,
        explanation: "文章明確指出「優質客戶服務的基礎是傾聽」，當客戶聯繫公司時，首先要做的就是仔細傾聽以了解他們的問題，因此答案為 B。",
      },
      {
        question: "What does the article say about response time?",
        options: ["A. It does not matter as long as the problem is solved", "B. Customers expect quick replies in today's fast-paced world", "C. You should always wait 48 hours before responding", "D. Only phone calls need to be answered quickly"],
        correctIndex: 1,
        explanation: "文章提到「在當今快節奏的世界中，客戶期望得到快速的回覆」，強調回應速度在現代商業中的重要性，因此答案為 B。",
      },
      {
        question: "Why does the author recommend collecting customer feedback?",
        options: ["A. To use in advertising", "B. To compare with competitors", "C. To reveal areas where the company can improve", "D. To reward the best employees"],
        correctIndex: 2,
        explanation: "文章指出收集回饋「非常珍貴，因為它能揭示你可以改進的地方」，目的是找出可以改進的領域，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-b05",
    title: "Working in Teams: Collaboration Tips",
    content: `Teamwork is at the heart of most successful organizations. Whether you work in a small startup or a large corporation, the ability to collaborate effectively with others is a skill that employers highly value. However, working in a team is not always easy, and it requires effort from every member.

Clear communication is the most important factor in successful teamwork. Every team member should feel comfortable sharing their ideas, asking questions, and raising concerns. When communication breaks down, misunderstandings occur, deadlines are missed, and frustration builds. To improve communication, establish regular check-in meetings where everyone can share updates and discuss any challenges they are facing.

Defining roles and responsibilities early on prevents confusion. When everyone knows what they are supposed to do, the team operates more efficiently. Create a document that outlines each person's tasks and share it with the entire team. This transparency ensures that no work is duplicated and that nothing falls through the cracks.

Respect for different perspectives is also crucial. In a diverse team, people bring different backgrounds, experiences, and viewpoints. Instead of seeing these differences as obstacles, treat them as strengths. A team that considers multiple perspectives is more likely to find creative solutions to problems.

Conflict is natural in any team, but how you handle it makes all the difference. When disagreements arise, focus on the issue, not the person. Listen to the other side, find common ground, and work toward a solution that benefits the entire team. Avoid personal attacks and keep the conversation professional.

Finally, celebrate your team's achievements. Recognizing hard work and success boosts morale and motivates people to continue performing at their best. A simple acknowledgment or a team lunch can go a long way in building a positive team culture. Good strategy for team building includes both formal and informal activities that help build trust among colleagues.

Strong teamwork does not happen by accident. It requires intentional effort, patience, and a willingness to put the team's goals above individual interests.`,
    contentZh: `團隊合作是大多數成功組織的核心。無論你在小型新創公司還是大型企業工作，有效地與他人協作的能力是雇主高度重視的技能。然而，在團隊中工作並不總是容易的，它需要每個成員的努力。

清楚的溝通是團隊成功最重要的因素。每個團隊成員都應該能自在地分享想法、提出問題和提出疑慮。當溝通出了問題，就會產生誤解、錯過截止期限，挫折感也隨之累積。為了改善溝通，建立定期的進度會議，讓每個人可以分享最新狀況並討論他們面臨的挑戰。

及早定義角色和職責可以防止混亂。當每個人都知道自己該做什麼時，團隊運作會更有效率。建立一份文件，列出每個人的任務，並與整個團隊分享。這樣的透明度確保沒有重複的工作，也不會有任何事情被遺漏。

尊重不同的觀點也很重要。在多元化的團隊中，人們帶來不同的背景、經驗和觀點。與其將這些差異視為障礙，不如把它們當成優勢。一個能考慮多元觀點的團隊更有可能找到有創意的問題解決方案。

衝突在任何團隊中都是自然的，但你如何處理它才是關鍵。當分歧出現時，專注於問題本身，而非針對個人。傾聽對方的意見，尋找共同點，朝著有利於整個團隊的解決方案努力。避免人身攻擊，保持對話的專業性。

最後，慶祝團隊的成就。肯定辛勤的工作和成功能提振士氣，激勵大家繼續拿出最佳表現。一個簡單的讚許或一頓團隊午餐，對建立正向的團隊文化大有幫助。好的團隊建設策略應包含正式和非正式的活動，以幫助同事之間建立信任。

強大的團隊合作不會偶然發生。它需要刻意的努力、耐心，以及願意將團隊目標置於個人利益之上的心態。`,
    domain: "business" as const,
    difficulty: 1,
    wordCount: 310,
    targetWords: ["b004", "b008", "b014"],
    questions: [
      {
        question: "What does the article identify as the most important factor in successful teamwork?",
        options: ["A. Having a strong leader", "B. Clear communication", "C. Working long hours", "D. Using the latest technology"],
        correctIndex: 1,
        explanation: "文章明確指出「清楚的溝通是團隊成功最重要的因素」，因此答案為 B。",
      },
      {
        question: "According to the article, why should roles and responsibilities be defined early?",
        options: ["A. To give the manager more control", "B. To prevent confusion and duplicated work", "C. To make it easier to fire underperformers", "D. To limit creativity"],
        correctIndex: 1,
        explanation: "文章提到及早定義角色和職責的目的是「防止混亂」，確保「沒有重複的工作，也不會有任何事情被遺漏」，因此答案為 B。",
      },
      {
        question: "How does the author suggest handling conflict within a team?",
        options: ["A. Ignore it until it goes away", "B. Let the manager decide everything", "C. Focus on the issue, not the person, and seek common ground", "D. Remove the person causing the conflict"],
        correctIndex: 2,
        explanation: "文章建議處理衝突時「專注於問題本身，而非針對個人。傾聽對方的意見，尋找共同點」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-b06",
    title: "Your First Day at a New Job",
    content: `Starting a new job is both exciting and nerve-wracking. You want to make a great first impression, but you may also feel uncertain about what to expect. Here are some practical tips to help you navigate your first day with confidence.

Arrive early. Being on time — or even a few minutes early — shows that you are reliable and take the job seriously. Plan your route in advance and account for possible delays such as traffic or public transportation issues. If you are not sure where to park or which entrance to use, contact your human resources department beforehand.

Dress appropriately. If you are not sure about the dress code, it is better to be slightly overdressed than underdressed on your first day. You can adjust your clothing style once you see what your colleagues wear. First impressions are formed quickly, and your appearance plays a role in how people perceive you.

Be prepared to introduce yourself multiple times. You will meet many new people — your manager, your teammates, and people from other departments. Keep your introduction brief and friendly. Share your name, your role, and something positive, like "I am excited to be part of the team."

Listen more than you speak. Your first day is a time to absorb information, not to show off your knowledge. Pay attention during orientation sessions and ask thoughtful questions. Taking notes can help you remember important details about company policies, tools, and procedures.

Be patient with yourself. You will not learn everything on the first day, and that is perfectly normal. It usually takes several weeks or even months to feel fully comfortable in a new role. Focus on building relationships with your colleagues and learning the basics of your position. Understanding the company's contract policies and budget processes will come with time.

Finally, at the end of the day, send a brief thank-you email to your manager expressing your appreciation for the warm welcome. This small gesture leaves a lasting positive impression and sets the tone for your new professional relationship. Meeting the deadline for any initial paperwork also demonstrates your commitment.`,
    contentZh: `開始一份新工作既令人興奮又令人緊張。你想留下好的第一印象，但你也可能對接下來會發生什麼感到不確定。以下是一些實用的建議，幫助你充滿信心地度過第一天。

準時到達。準時——甚至提早幾分鐘——展現出你是可靠的，而且你認真看待這份工作。事先規劃路線，並將塞車或大眾運輸問題等可能的延誤考慮進去。如果你不確定要停在哪裡或走哪個入口，事先聯繫人力資源部門。

穿著得體。如果你不確定穿著規定，第一天寧可稍微穿得正式一點，也不要穿得太隨意。等你看到同事們的穿著後再調整你的風格。第一印象形成得很快，你的外表在別人對你的觀感中扮演著重要角色。

做好多次自我介紹的準備。你會認識很多新面孔——你的主管、你的團隊成員，以及其他部門的同事。保持簡短友善的自我介紹。分享你的名字、你的職位，以及一些正面的話，例如「我很高興能加入這個團隊。」

多聽少說。你的第一天是吸收資訊的時候，不是展現你有多少知識的時候。在新人訓練時專心聆聽，並提出有深度的問題。做筆記可以幫助你記住關於公司政策、工具和流程的重要細節。

對自己有耐心。你不可能在第一天就學會所有事情，這是完全正常的。通常需要好幾個星期甚至幾個月，才會在新職位上感到完全自在。專注於與同事建立關係，學習你職位的基本事項。了解公司的合約政策和預算流程需要時間。

最後，在一天結束時，發一封簡短的感謝郵件給你的主管，表達你對溫暖接待的感謝。這個小小的舉動能留下持久的正面印象，為你新的專業關係奠定良好的基調。準時完成任何初始文件的繳交也能展現你的投入。`,
    domain: "business" as const,
    difficulty: 1,
    wordCount: 320,
    targetWords: ["b001", "b003", "b004"],
    questions: [
      {
        question: "What is the main topic of this article?",
        options: ["A. How to negotiate a higher salary", "B. Tips for succeeding on your first day at a new job", "C. How to write a resume", "D. The benefits of changing jobs frequently"],
        correctIndex: 1,
        explanation: "文章的主題是提供在新工作第一天如何成功的實用建議，涵蓋準時、穿著、自我介紹等多個面向，因此答案為 B。",
      },
      {
        question: "What does the author recommend if you are unsure about the dress code?",
        options: ["A. Wear casual clothes", "B. Ask your new colleagues on social media", "C. Be slightly overdressed rather than underdressed", "D. Wear the same clothes as your interview"],
        correctIndex: 2,
        explanation: "文章提到「如果你不確定穿著規定，第一天寧可稍微穿得正式一點，也不要穿得太隨意」，因此答案為 C。",
      },
      {
        question: "What does the author suggest doing at the end of your first day?",
        options: ["A. Leave as early as possible", "B. Send a thank-you email to your manager", "C. Post about it on social media", "D. Organize a team dinner"],
        correctIndex: 1,
        explanation: "文章最後一段建議「在一天結束時，發一封簡短的感謝郵件給你的主管」，因此答案為 B。",
      },
    ],
  },
  {
    id: "art-b07",
    title: "How to Set and Achieve Work Goals",
    content: `Setting clear goals at work is one of the best ways to stay focused and motivated. Without goals, it is easy to feel lost and unproductive. Whether you are just starting your career or looking for a promotion, having well-defined goals gives you direction and purpose.

The most effective goals follow the SMART framework. SMART stands for Specific, Measurable, Achievable, Relevant, and Time-bound. Instead of setting a vague goal like "do better at work," try something specific like "increase my sales revenue by 10 percent in the next quarter." This kind of goal gives you a clear target and a deadline to work toward.

Once you have set your goals, break them down into smaller tasks. Large goals can feel overwhelming, but when you divide them into manageable steps, they become much more achievable. For example, if your goal is to improve your presentation skills, you might break it down into steps like "watch three online tutorials this week," "practice presenting in front of a mirror," and "present at the next team meeting."

Track your progress regularly. Keep a simple record of what you have accomplished and what still needs to be done. This helps you stay accountable and allows you to adjust your plan if something is not working. Many professionals use project management tools or simple spreadsheets to monitor their progress.

Do not be afraid to ask for help. If you encounter obstacles, talk to your manager or a trusted colleague. They may offer advice, resources, or support that can help you stay on track. Asking for help is not a sign of weakness — it shows that you are committed to reaching your goals.

Celebrate small wins along the way. Each completed step brings you closer to your final goal. Recognizing your progress keeps you motivated and reminds you that your efforts are paying off.

Goal-setting is not just a one-time activity. Review and update your goals periodically to make sure they still align with your career aspirations and the strategy of your organization. When your budget of time and energy is allocated wisely, you can accomplish remarkable things.`,
    contentZh: `在工作中設定明確的目標是保持專注和動力的最佳方式之一。沒有目標，你很容易感到迷茫和缺乏生產力。無論你是剛開始職涯還是正在尋求升遷，有明確的目標能為你指引方向和目的。

最有效的目標遵循 SMART 框架。SMART 代表具體的（Specific）、可衡量的（Measurable）、可達成的（Achievable）、相關的（Relevant）和有時限的（Time-bound）。與其設定一個模糊的目標如「在工作上做得更好」，不如嘗試具體的目標，例如「在下一季將我的銷售業績提高百分之十」。這種目標給你一個明確的目標和努力的期限。

一旦你設定了目標，就把它分解為較小的任務。大目標可能令人感到不知所措，但當你將它們分成可管理的步驟時，就會變得更容易達成。例如，如果你的目標是提升簡報技巧，你可以將它分解為「這週看三個線上教學影片」、「對著鏡子練習報告」和「在下次團隊會議上做簡報」等步驟。

定期追蹤你的進度。保持一份簡單的記錄，記錄你已經完成了什麼，還有什麼需要做。這能幫助你保持負責任的態度，並讓你在某些方法不奏效時調整計畫。許多專業人士使用專案管理工具或簡單的試算表來監控他們的進度。

不要害怕尋求幫助。如果你遇到障礙，和你的主管或信賴的同事談談。他們可能會提供建議、資源或支持，幫助你繼續朝目標前進。尋求幫助不是軟弱的表現——它展現的是你致力於達成目標的決心。

沿途慶祝小小的勝利。每完成一個步驟，你就離最終目標更近一步。肯定自己的進步能保持動力，提醒你的努力正在產生成果。

目標設定不是一次性的活動。定期檢視和更新你的目標，確保它們仍然符合你的職涯抱負和組織的策略。當你的時間和精力預算被明智地分配時，你就能達成非凡的成就。`,
    domain: "business" as const,
    difficulty: 1,
    wordCount: 325,
    targetWords: ["b001", "b004", "b007", "b008"],
    questions: [
      {
        question: "What does the SMART framework stand for?",
        options: ["A. Simple, Modern, Active, Rapid, Tested", "B. Specific, Measurable, Achievable, Relevant, Time-bound", "C. Strategic, Meaningful, Ambitious, Rewarding, Timely", "D. Standard, Managed, Approved, Required, Tracked"],
        correctIndex: 1,
        explanation: "文章明確指出「SMART 代表具體的（Specific）、可衡量的（Measurable）、可達成的（Achievable）、相關的（Relevant）和有時限的（Time-bound）」，因此答案為 B。",
      },
      {
        question: "What does the article suggest you do after setting a large goal?",
        options: ["A. Wait for the right moment to start", "B. Tell everyone about it", "C. Break it down into smaller, manageable tasks", "D. Focus only on the final result"],
        correctIndex: 2,
        explanation: "文章建議設定大目標後「把它分解為較小的任務」，因為「大目標可能令人感到不知所措，但分成可管理的步驟時就會變得更容易達成」，因此答案為 C。",
      },
      {
        question: "According to the article, why should you review your goals periodically?",
        options: ["A. To impress your manager", "B. To make sure they still align with your career and organizational needs", "C. To reduce the number of goals", "D. To share them with new team members"],
        correctIndex: 1,
        explanation: "文章提到「定期檢視和更新你的目標，確保它們仍然符合你的職涯抱負和組織的策略」，因此答案為 B。",
      },
    ],
  },
  {
    id: "art-b08",
    title: "Understanding Invoices and Payments",
    content: `In any business transaction, invoices play a critical role. An invoice is a document that a seller sends to a buyer to request payment for goods or services provided. Understanding how invoices work is essential for anyone involved in business operations.

A standard invoice includes several key pieces of information. First, it contains the invoice number, which is a unique identifier for tracking purposes. Next, it lists the date the invoice was issued and the payment due date. The deadline for payment is usually 30, 60, or 90 days from the invoice date, depending on the agreement between the two parties.

The body of the invoice describes the products or services provided, including quantities, unit prices, and the total amount owed. Some invoices also include tax calculations and any discounts that may apply. At the bottom, you will find payment instructions, such as the bank account details or accepted payment methods.

When you receive an invoice, it is important to review it carefully. Check that the items listed match what was actually delivered or performed. Verify the quantities, prices, and calculations. If you find any errors, contact the seller immediately to resolve the issue before the payment deadline.

Late payments can cause serious problems in business relationships. They can lead to penalty fees, damaged trust, and even legal action in extreme cases. To avoid late payments, set up a system to track your invoices and their due dates. Many companies use accounting software that sends automatic reminders when a payment is approaching its deadline.

If your company sends invoices to clients, make sure they are clear, accurate, and sent promptly. A professional-looking invoice that arrives on time reflects well on your company and encourages faster payment. Include all necessary details so the client can process the payment without needing to ask for additional information. Always reference the original contract number on the invoice for easy tracking.

Managing invoices efficiently is a fundamental part of maintaining healthy cash flow, protecting your budget, and building strong business relationships.`,
    contentZh: `在任何商業交易中，發票都扮演著關鍵角色。發票是賣方寄給買方的文件，用於請求支付所提供的商品或服務的款項。了解發票的運作方式對任何參與商業營運的人來說都是必備的知識。

一份標準發票包含幾項關鍵資訊。首先，它包含發票編號，這是一個用於追蹤的唯一識別碼。接著，它列出發票開立日期和付款到期日。付款的截止日期通常是發票日期後的 30、60 或 90 天，取決於雙方之間的協議。

發票的主體描述了所提供的產品或服務，包括數量、單價和應付總金額。有些發票還包含稅務計算和任何適用的折扣。在底部，你會找到付款說明，例如銀行帳戶資訊或接受的付款方式。

當你收到一張發票時，仔細審核很重要。檢查列出的項目是否與實際交付或執行的內容相符。核對數量、價格和計算。如果你發現任何錯誤，在付款截止日期前立即聯繫賣方解決問題。

逾期付款可能在商業關係中造成嚴重問題。它可能導致罰款、損害信任，甚至在極端情況下引發法律訴訟。為了避免逾期付款，建立一個追蹤發票及其到期日的系統。許多公司使用會計軟體，在付款日期將近時自動發送提醒。

如果你的公司需要向客戶開立發票，確保它們清楚、準確且及時送出。一份外觀專業且準時送達的發票能為你的公司留下好印象，並鼓勵更快的付款。包含所有必要的細節，讓客戶無需再詢問額外資訊就能處理付款。務必在發票上註明原始合約編號以便追蹤。

有效率地管理發票是維持健康現金流、保護預算和建立穩固商業關係的基本要素。`,
    domain: "business" as const,
    difficulty: 1,
    wordCount: 315,
    targetWords: ["b001", "b002", "b003", "b004", "b005"],
    questions: [
      {
        question: "What is the main purpose of an invoice?",
        options: ["A. To advertise a product", "B. To request payment for goods or services provided", "C. To negotiate a contract", "D. To schedule a business meeting"],
        correctIndex: 1,
        explanation: "文章開頭明確說明「發票是賣方寄給買方的文件，用於請求支付所提供的商品或服務的款項」，因此發票的主要目的是請求付款，答案為 B。",
      },
      {
        question: "What should you do if you find an error on an invoice you received?",
        options: ["A. Ignore it and pay the amount listed", "B. Refuse to pay entirely", "C. Contact the seller immediately to resolve the issue", "D. Deduct the error amount without informing the seller"],
        correctIndex: 2,
        explanation: "文章指出「如果你發現任何錯誤，在付款截止日期前立即聯繫賣方解決問題」，因此答案為 C。",
      },
      {
        question: "According to the article, what can late payments lead to?",
        options: ["A. Better negotiation power", "B. Penalty fees, damaged trust, and possible legal action", "C. Lower prices in the future", "D. Automatic contract renewal"],
        correctIndex: 1,
        explanation: "文章提到逾期付款「可能導致罰款、損害信任，甚至在極端情況下引發法律訴訟」，因此答案為 B。",
      },
    ],
  },
  {
    id: "art-b09",
    title: "The Importance of Time Management at Work",
    content: `Time management is a skill that every professional needs. No matter how talented you are, poor time management can prevent you from reaching your full potential. Learning to manage your time effectively allows you to accomplish more, reduce stress, and achieve a better work-life balance.

The first step in good time management is prioritizing your tasks. Not all tasks are equally important. Use a simple system to categorize your work. Urgent and important tasks should be done first. Important but not urgent tasks should be scheduled for later. Tasks that are urgent but not important can often be delegated to someone else. And tasks that are neither urgent nor important should be eliminated from your to-do list.

Planning your day the night before or first thing in the morning can make a huge difference. Write down the three to five most important things you need to accomplish that day. This gives you a clear roadmap and helps you stay focused instead of reacting to whatever comes up.

Avoid multitasking. Research shows that switching between tasks reduces productivity and increases the chance of making mistakes. Instead, focus on one task at a time and give it your full attention. You will be surprised at how much faster and better you work when you concentrate on a single activity.

Learn to say no. Many professionals struggle with time management because they take on too many responsibilities. It is okay to decline a request if you are already at capacity. Saying no politely and offering an alternative shows that you are managing your time responsibly. This is especially important when a client asks for work that goes beyond the original contract scope.

Take regular breaks throughout the day. Working for long periods without a break leads to fatigue and decreased focus. A good strategy is to work for 25 minutes, then take a 5-minute break. After four cycles, take a longer break of 15 to 30 minutes.

Finally, review how you spend your time each week. Identify activities that consume too much time without producing results, and look for ways to streamline or eliminate them. Good time management leads to meeting every deadline and keeping projects within budget.`,
    contentZh: `時間管理是每位專業人士都需要的技能。無論你多有才華，糟糕的時間管理都可能阻礙你發揮全部潛力。學會有效地管理時間，能讓你完成更多事、減輕壓力，並達到更好的工作與生活平衡。

良好時間管理的第一步是為任務排定優先順序。不是所有任務都同等重要。使用一個簡單的系統來分類你的工作。緊急且重要的任務應該先做。重要但不緊急的任務應該安排到之後處理。緊急但不重要的任務通常可以委派給他人。既不緊急也不重要的任務應該從你的待辦清單中刪除。

在前一天晚上或一早規劃你的一天，可以帶來巨大的改變。寫下當天最重要的三到五件事。這能給你一份清楚的路線圖，幫助你保持專注，而不是被突發事件牽著走。

避免同時處理多項任務。研究顯示，在任務之間切換會降低生產力，並增加犯錯的機會。相反地，一次專注於一項任務，全心投入。你會驚訝地發現，當你專注在單一活動上時，你的工作速度更快、品質更好。

學會說不。許多專業人士之所以在時間管理上遇到困難，是因為他們承擔了太多責任。當你已經滿載時，拒絕一個請求是沒關係的。禮貌地說不並提出替代方案，展現了你正在負責任地管理自己的時間。這在客戶要求超出原始合約範圍的工作時尤其重要。

全天定時休息。長時間不間斷地工作會導致疲勞和注意力下降。一個好的策略是工作 25 分鐘，然後休息 5 分鐘。四個循環之後，休息較長的 15 到 30 分鐘。

最後，每週檢視你是如何運用時間的。找出那些消耗太多時間卻沒有產出成果的活動，並尋找精簡或刪除它們的方法。良好的時間管理能讓你如期完成每個截止日期，並讓專案維持在預算之內。`,
    domain: "business" as const,
    difficulty: 1,
    wordCount: 330,
    targetWords: ["b001", "b002", "b003", "b004", "b008"],
    questions: [
      {
        question: "According to the article, what should you do with tasks that are urgent but not important?",
        options: ["A. Do them first", "B. Schedule them for later", "C. Delegate them to someone else", "D. Eliminate them"],
        correctIndex: 2,
        explanation: "文章提到「緊急但不重要的任務通常可以委派給他人」，因此答案為 C「委派給其他人」。",
      },
      {
        question: "Why does the author recommend against multitasking?",
        options: ["A. It is considered unprofessional", "B. It reduces productivity and increases mistakes", "C. Managers do not like it", "D. It only works for senior employees"],
        correctIndex: 1,
        explanation: "文章指出「研究顯示，在任務之間切換會降低生產力，並增加犯錯的機會」，因此不建議同時處理多項任務，答案為 B。",
      },
      {
        question: "What is the main idea of the article?",
        options: ["A. You should work longer hours to get more done", "B. Effective time management improves productivity and reduces stress", "C. Multitasking is the best way to be productive", "D. Only managers need time management skills"],
        correctIndex: 1,
        explanation: "文章的主旨是有效的時間管理能提升生產力並減輕壓力，開頭即提到「學會有效地管理時間，能讓你完成更多事、減輕壓力」，因此答案為 B。",
      },
    ],
  },
  {
    id: "art-b10",
    title: "Writing a Strong Business Proposal",
    content: `A business proposal is a document that offers a solution to a potential client's problem. Writing a strong proposal can help you win new contracts and grow your business. Whether you are a freelancer or part of a large company, the ability to write persuasive proposals is a valuable skill.

Every good proposal starts with an executive summary. This is a brief overview of your entire proposal that appears at the beginning of the document. The executive summary should clearly state the problem you intend to solve, the solution you are offering, and the expected results. Many decision-makers only read the executive summary, so make it compelling and easy to understand.

Next, demonstrate that you understand the client's needs. Show that you have done your research by describing their current situation and the challenges they face. This section builds trust because it tells the client that you truly understand their business and are not just offering a generic solution.

The solution section is the heart of your proposal. Explain exactly what you plan to do, how you will do it, and what the timeline will be. Be specific and realistic. Include milestones and deliverables so the client knows what to expect at each stage of the project. Each milestone should have a clear deadline.

Your pricing section should be transparent. Break down the costs clearly so the client can see what they are paying for. Avoid hiding fees or using vague language. A transparent budget builds trust and reduces the chance of disputes later. Include all invoice terms and payment schedules.

Finally, include a clear call to action. Tell the client exactly what the next step is — whether it is signing the contract, scheduling a meeting, or making a deposit. Make it as easy as possible for them to move forward.

A well-written proposal shows professionalism, builds confidence, and sets the foundation for a successful business relationship. Your strategy should be to treat each proposal as a chance to demonstrate the revenue value you can deliver.`,
    contentZh: `商業提案是一份為潛在客戶的問題提供解決方案的文件。撰寫一份有力的提案能幫助你贏得新合約並拓展業務。無論你是自由工作者還是大公司的一員，撰寫有說服力的提案都是一項寶貴的技能。

每份好的提案都以執行摘要開頭。這是對整份提案的簡要概述，出現在文件的最前面。執行摘要應清楚說明你打算解決的問題、你提供的解決方案，以及預期的成果。許多決策者只會閱讀執行摘要，所以務必讓它引人注目且易於理解。

接下來，展現你了解客戶的需求。透過描述他們目前的狀況和面臨的挑戰，證明你已經做了功課。這個部分能建立信任，因為它告訴客戶你真正了解他們的業務，而不只是提供一個通用的解決方案。

解決方案段落是提案的核心。具體說明你計畫做什麼、如何執行，以及時程安排。要具體且務實。包含里程碑和交付項目，讓客戶知道在專案的每個階段可以期待什麼。每個里程碑都應該有明確的截止日期。

你的報價部分應該透明。清楚地列出費用明細，讓客戶能看到他們付的錢用在哪裡。避免隱藏費用或使用含糊的用語。透明的預算能建立信任，並減少日後發生爭議的機會。包含所有的發票條款和付款時程。

最後，加入一個明確的行動呼籲。告訴客戶下一步具體是什麼——無論是簽署合約、安排會議，還是支付訂金。讓他們盡可能容易地往前推進。

一份寫得好的提案能展現專業度、建立信心，並為成功的商業關係奠定基礎。你的策略應該是將每份提案視為展現你能帶來的營收價值的機會。`,
    domain: "business" as const,
    difficulty: 1,
    wordCount: 310,
    targetWords: ["b001", "b002", "b003", "b004", "b005"],
    questions: [
      {
        question: "Why is the executive summary considered especially important?",
        options: ["A. It contains the pricing details", "B. Many decision-makers only read this section", "C. It is the longest section of the proposal", "D. It includes the contract terms"],
        correctIndex: 1,
        explanation: "文章指出「許多決策者只會閱讀執行摘要」，所以執行摘要特別重要，因為它可能是決策者唯一會看的部分，因此答案為 B。",
      },
      {
        question: "What should the solution section include?",
        options: ["A. Only a brief overview of the approach", "B. A detailed plan with timeline, milestones, and deliverables", "C. The client's company history", "D. Competitor analysis"],
        correctIndex: 1,
        explanation: "文章說明解決方案段落應「具體說明你計畫做什麼、如何執行，以及時程安排」，並「包含里程碑和交付項目」，因此答案為 B。",
      },
      {
        question: "Why does the author recommend being transparent about pricing?",
        options: ["A. To make the proposal longer", "B. Because clients always choose the lowest price", "C. To build trust and reduce the chance of disputes", "D. Because it is a legal requirement"],
        correctIndex: 2,
        explanation: "文章提到「透明的預算能建立信任，並減少日後發生爭議的機會」，因此透明報價的原因是建立信任和減少爭議，答案為 C。",
      },
    ],
  },

  // ---------- Difficulty 2: art-b11 to art-b20 ----------
  {
    id: "art-b11",
    title: "Building a Brand Identity from Scratch",
    content: `Brand identity is much more than a logo or a color palette. It is the complete set of visual, verbal, and emotional elements that define how a company presents itself to the world and how customers perceive it. For startups and new businesses, building a strong brand identity from scratch is one of the most important investments they can make.

The process begins with defining your brand's core values and mission. What does your company stand for? What problem are you solving, and why does it matter? These fundamental questions shape every aspect of your brand, from the tone of your marketing messages to the design of your website. Companies that clearly articulate their values tend to attract more loyal customers because people want to support brands they believe in.

Next, identify your target audience and study their preferences, pain points, and communication styles. Your brand identity should resonate with the people you want to reach. If your target audience is young, tech-savvy professionals, your branding might be modern, minimalist, and digital-first. If you are targeting luxury consumers, your brand should convey exclusivity and sophistication.

Visual identity elements include your logo, typography, color scheme, and imagery. These should be consistent across all channels — your website, social media profiles, business cards, packaging, and advertising materials. Consistency builds recognition. When customers see the same colors, fonts, and style repeatedly, they begin to associate those elements with your brand.

Your brand voice — the way you communicate through written and spoken words — is equally important. Are you formal or casual? Friendly or authoritative? Humorous or serious? Your brand voice should reflect your values and appeal to your target audience. Once you define it, use it consistently across all communication channels.

Finally, develop a brand strategy that outlines how you will build awareness and differentiate yourself from competitors. This strategy should include a positioning statement, key messages, and a plan for how you will communicate your brand to the market. Leverage every touchpoint to reinforce your identity. A strong brand identity takes time to build, but the effort pays off in customer loyalty, trust, and long-term revenue growth. The budget you allocate to branding in the early stages can serve as a benchmark for measuring your return on investment later.`,
    contentZh: `品牌識別遠不只是一個標誌或一組色彩方案。它是一整套視覺、語言和情感元素的集合，定義了一家公司如何向世界展示自己，以及顧客如何看待它。對於新創公司和新事業來說，從零開始建立強大的品牌識別，是他們能做的最重要的投資之一。

這個過程始於定義你的品牌核心價值與使命。你的公司代表什麼？你在解決什麼問題，為什麼這件事很重要？這些根本性的問題會影響品牌的方方面面，從行銷文案的語氣到網站的設計。能清楚表達自身價值的公司往往能吸引更忠誠的顧客，因為人們想要支持他們認同的品牌。

接下來，確認你的目標受眾，研究他們的偏好、痛點和溝通方式。你的品牌識別應該與你想觸及的人產生共鳴。如果你的目標受眾是年輕、熟悉科技的專業人士，你的品牌風格可能偏向現代、簡約、數位優先。如果你鎖定的是精品消費者，你的品牌就應該傳達獨特性與精緻感。

視覺識別元素包括你的標誌、字體、配色方案和圖像。這些元素在所有管道上都應該保持一致——你的網站、社群媒體、名片、包裝和廣告素材。一致性能建立辨識度。當顧客反覆看到相同的顏色、字體和風格，他們就會開始將這些元素與你的品牌聯繫在一起。

你的品牌聲音——你透過文字和口語傳達訊息的方式——同樣重要。你是正式的還是輕鬆的？友善的還是權威的？幽默的還是嚴肅的？你的品牌聲音應該反映你的價值觀，並且吸引你的目標受眾。一旦定義好了，就要在所有溝通管道上一致地使用。

最後，制定一套品牌策略，概述你將如何建立知名度並與競爭對手做出差異化。這個策略應包含定位聲明、關鍵訊息，以及你將如何向市場傳達品牌的計畫。善用每一個接觸點來強化你的品牌識別。建立強大的品牌識別需要時間，但這份努力會在顧客忠誠度、信任感和長期營收成長上獲得回報。你在早期階段投入品牌建設的預算，可以作為日後衡量投資報酬率的基準。`,
    domain: "business" as const,
    difficulty: 2,
    wordCount: 340,
    targetWords: ["b001", "b007", "b008", "b011", "b012"],
    questions: [
      {
        question: "According to the article, what is the first step in building a brand identity?",
        options: ["A. Designing a logo", "B. Defining core values and mission", "C. Creating a social media account", "D. Choosing brand colors"],
        correctIndex: 1,
        explanation: "文章第二段開頭明確指出「這個過程始於定義你的品牌核心價值與使命」，因此建立品牌識別的第一步是定義核心價值和使命。",
      },
      {
        question: "Why does the author emphasize consistency across all channels?",
        options: ["A. To save money on design", "B. Because it builds recognition and association with the brand", "C. Because customers dislike variety", "D. To make the designer's job easier"],
        correctIndex: 1,
        explanation: "文章第四段提到，一致性能建立辨識度，當顧客反覆看到相同的顏色、字體和風格，就會將這些元素與品牌聯繫在一起，因此一致性的目的是建立品牌認知和聯想。",
      },
      {
        question: "What can be inferred about brands that clearly articulate their values?",
        options: ["A. They charge higher prices", "B. They tend to attract more loyal customers", "C. They do not need advertising", "D. They focus only on one product"],
        correctIndex: 1,
        explanation: "文章第二段指出「能清楚表達自身價值的公司往往能吸引更忠誠的顧客」，可以推論出清楚表達價值觀的品牌更能吸引忠實客戶。",
      },
    ],
  },
  {
    id: "art-b12",
    title: "Negotiation Skills for Business Professionals",
    content: `Negotiation is a skill that every business professional encounters regularly, whether it involves closing a deal with a client, discussing salary terms, or resolving a disagreement between departments. Effective negotiators do not just aim to win; they aim to find solutions that satisfy all parties involved.

Preparation is the most critical phase of any negotiation. Before you enter the room, research the other party's needs, priorities, and constraints. Understand what they value most and what they might be willing to compromise on. At the same time, define your own objectives clearly. Know your ideal outcome, your acceptable range, and your walk-away point — the minimum terms you are willing to accept.

During the negotiation, practice active listening. Pay close attention to what the other party says and how they say it. Their words, tone, and body language can reveal their true priorities and concerns. Asking open-ended questions like "What matters most to you in this agreement?" helps uncover information that can lead to creative solutions.

Avoid taking a positional approach, where each side stubbornly defends its initial position. Instead, focus on interests — the underlying reasons behind each position. For example, a vendor insisting on a higher price might actually be concerned about maintaining profit margins on a particular product line. Understanding this interest might allow you to negotiate a larger order volume in exchange for a lower unit price, creating a win-win outcome.

Manage emotions carefully. Negotiations can become tense, especially when the stakes are high and the revenue implications are significant. Stay calm, maintain a respectful tone, and take a break if emotions start to escalate. Making decisions when you are angry or frustrated rarely leads to good outcomes.

Finally, always document the agreement in writing after the negotiation concludes. A clear contract that outlines all terms prevents misunderstandings and protects both parties. Send a follow-up email summarizing the key points discussed and the actions each party has agreed to take. Include the deadline for each deliverable and the budget allocations agreed upon.

Strong negotiation skills can transform your career and create lasting partnerships built on mutual respect and shared value.`,
    contentZh: `談判是每位商務專業人士都會經常遇到的技能，無論是與客戶成交、討論薪資條件，還是解決部門間的歧見。有效的談判者不只是想贏，而是致力於找到讓各方都滿意的解決方案。

準備是任何談判中最關鍵的階段。在你走進會議室之前，先研究對方的需求、優先事項和限制條件。了解他們最看重什麼，以及他們可能願意在哪些方面讓步。同時，清楚地定義你自己的目標。知道你的理想結果、可接受的範圍，以及你的底線——你願意接受的最低條件。

在談判過程中，練習積極傾聽。仔細注意對方說了什麼以及他們怎麼說。他們的用詞、語氣和肢體語言可以透露出他們真正的優先考量和顧慮。提出開放式問題，例如「在這個協議中，什麼對您最重要？」有助於挖掘出可能帶來創意解決方案的資訊。

避免採取立場式的談判方式，也就是每一方都頑固地堅持自己的初始立場。相反地，要專注於利益——每個立場背後的深層原因。例如，一個堅持要更高價格的供應商，實際上可能是擔心維持某條產品線的利潤率。了解這個利益點後，你或許可以透過增加訂購量來換取較低的單價，創造雙贏的結果。

謹慎管理情緒。談判可能變得緊張，尤其是當風險很高且營收影響重大的時候。保持冷靜，維持尊重的語氣，如果情緒開始升溫就暫停休息。在你生氣或沮喪時做決定，很少會帶來好的結果。

最後，在談判結束後，務必將協議以書面形式記錄下來。一份清楚列出所有條款的合約可以防止誤解並保護雙方。發送一封後續電子郵件，摘要討論的重點以及各方同意採取的行動。包含每個交付項目的期限和議定的預算分配。

強大的談判技巧可以改變你的職業生涯，並建立以相互尊重和共同價值為基礎的長久合作關係。`,
    domain: "business" as const,
    difficulty: 2,
    wordCount: 330,
    targetWords: ["b001", "b002", "b003", "b006", "b007"],
    questions: [
      {
        question: "What does the author consider the most critical phase of negotiation?",
        options: ["A. Making the first offer", "B. Preparation and research before the meeting", "C. Signing the final agreement", "D. Following up with an email"],
        correctIndex: 1,
        explanation: "文章第二段明確指出「準備是任何談判中最關鍵的階段」，包括在進入會議室前研究對方的需求、優先事項和限制條件。",
      },
      {
        question: "What approach does the article recommend instead of positional bargaining?",
        options: ["A. Letting the other party decide", "B. Focusing on underlying interests to create win-win outcomes", "C. Always accepting the first offer", "D. Avoiding negotiation altogether"],
        correctIndex: 1,
        explanation: "文章第四段建議不要採取立場式談判，而是專注於利益——每個立場背後的深層原因，並舉例說明如何創造雙贏結果。",
      },
      {
        question: "Why does the author recommend documenting the agreement in writing?",
        options: ["A. Because verbal agreements are illegal", "B. To impress the other party", "C. To prevent misunderstandings and protect both parties", "D. Because it is required by accounting"],
        correctIndex: 2,
        explanation: "文章第六段說明書面記錄協議的原因是「一份清楚列出所有條款的合約可以防止誤解並保護雙方」。",
      },
    ],
  },
  {
    id: "art-b13",
    title: "Social Media Marketing for Small Businesses",
    content: `Social media has become one of the most powerful marketing channels available to small businesses. Unlike traditional advertising, which often requires a large budget, social media allows even the smallest companies to reach thousands or millions of potential customers at a relatively low cost.

The key to successful social media marketing is choosing the right platforms. Not every social media channel is suitable for every business. Instagram and TikTok work well for visual products, lifestyle brands, and businesses targeting younger audiences. LinkedIn is ideal for B2B companies, professional services, and thought leadership content. Facebook remains effective for local businesses and community engagement. Focus your efforts on two or three platforms where your target audience is most active, rather than spreading yourself thin across every available channel.

Content quality matters more than quantity. Posting five thoughtful, well-designed posts per week is far more effective than posting low-quality content every day. Your content should provide value to your audience — whether that means educating them, entertaining them, or solving a problem they face. Mix different content formats, including images, short videos, stories, and text-based posts, to keep your feed fresh and engaging.

Engagement is a two-way street. Do not just broadcast your messages — respond to comments, answer questions, and participate in conversations. When followers feel that a real person is behind the brand, they develop a stronger emotional connection and become more loyal customers.

Track your performance using analytics tools built into each platform. Monitor metrics such as reach, engagement rate, click-through rate, and follower growth. These numbers tell you what is working and what needs to be adjusted. Review your analytics monthly and use the insights to refine your content strategy. Comparing your results against industry benchmarks helps you understand where you stand.

Paid advertising on social media can amplify your organic efforts. Even a modest budget of a few hundred dollars per month can significantly increase your reach and help you target very specific audiences. Start small, test different ad formats, and leverage the data to scale up what works best. The conversion rate from social ads can surprise you when the campaign is well-targeted.

Social media marketing requires consistency, creativity, and patience, but the long-term benefits for small businesses are substantial.`,
    contentZh: `社群媒體已成為小型企業最強大的行銷管道之一。不同於通常需要大量預算的傳統廣告，社群媒體讓即使是最小的公司也能以相對較低的成本觸及數千甚至數百萬的潛在客戶。

成功的社群媒體行銷關鍵在於選擇正確的平台。並非每個社群媒體管道都適合每種企業。Instagram 和 TikTok 適合視覺性產品、生活風格品牌，以及針對年輕族群的企業。LinkedIn 則適合 B2B 公司、專業服務和思想領導力內容。Facebook 對於在地商家和社區互動仍然有效。將你的精力集中在目標受眾最活躍的兩到三個平台上，而不是把自己分散在每個可用的管道上。

內容品質比數量更重要。每週發布五則經過深思熟慮、設計精良的貼文，遠比每天發布低品質的內容更有效。你的內容應該為受眾提供價值——無論是教育他們、娛樂他們，還是解決他們面臨的問題。混合使用不同的內容格式，包括圖片、短影片、限時動態和文字貼文，讓你的動態保持新鮮和吸引力。

互動是雙向的。不要只是發布訊息——要回覆留言、回答問題，並參與對話。當追蹤者感覺品牌背後有一個真實的人，他們會建立更強的情感連結，成為更忠誠的顧客。

使用各平台內建的分析工具追蹤你的表現。監控觸及率、互動率、點擊率和粉絲成長等指標。這些數據告訴你什麼有效、什麼需要調整。每月檢視你的分析數據，並運用洞察來優化你的內容策略。將你的成果與產業基準進行比較，有助於了解你目前的位置。

社群媒體上的付費廣告可以放大你的自然觸及效果。即使每月只有幾百美元的適度預算，也能顯著提升你的觸及率，並幫助你瞄準非常精確的受眾。從小規模開始，測試不同的廣告格式，並善用數據來擴大最有效的做法。當廣告活動精準鎖定目標時，社群廣告的轉換率可能會讓你驚喜。

社群媒體行銷需要一致性、創意和耐心，但對小型企業而言，長期效益是非常可觀的。`,
    domain: "business" as const,
    difficulty: 2,
    wordCount: 350,
    targetWords: ["b001", "b008", "b010", "b011", "b012"],
    questions: [
      {
        question: "What advice does the article give about choosing social media platforms?",
        options: ["A. Use every platform available", "B. Focus on two or three platforms where your target audience is active", "C. Only use free platforms", "D. Use the newest platform available"],
        correctIndex: 1,
        explanation: "文章第二段建議「將你的精力集中在目標受眾最活躍的兩到三個平台上，而不是把自己分散在每個可用的管道上」。",
      },
      {
        question: "What does the phrase 'engagement is a two-way street' mean in this context?",
        options: ["A. You should post twice a day", "B. Brands should respond to followers, not just post content", "C. Two people should manage the account", "D. You need both text and images"],
        correctIndex: 1,
        explanation: "文章第四段解釋「互動是雙向的」意思是品牌不應只是發布訊息，還要回覆留言、回答問題、參與對話，讓追蹤者感覺到品牌背後有真人。",
      },
      {
        question: "What does the article recommend regarding paid social media advertising?",
        options: ["A. It is too expensive for small businesses", "B. Start small, test different formats, and scale up what works", "C. Only use paid ads on Instagram", "D. Spend your entire budget on one big campaign"],
        correctIndex: 1,
        explanation: "文章第六段建議付費廣告應該「從小規模開始，測試不同的廣告格式，並善用數據來擴大最有效的做法」。",
      },
    ],
  },
  {
    id: "art-b14",
    title: "How to Deliver an Effective Business Presentation",
    content: `Business presentations are a regular part of corporate life. Whether you are pitching a new idea to stakeholders, reporting quarterly revenue results, or training new employees, the ability to present information clearly and persuasively can significantly advance your career.

Preparation is the foundation of every great presentation. Start by understanding your audience. Who will be in the room? What do they already know about your topic? What do they need to learn? Tailoring your content to your audience's knowledge level and interests ensures that your message is relevant and engaging.

Structure your presentation with a clear beginning, middle, and end. Open with a hook — a surprising statistic, a compelling question, or a brief story — to capture attention immediately. Then present your main points in a logical sequence, using evidence and examples to support each one. Finally, conclude with a strong summary and a clear call to action.

Keep your slides clean and simple. Avoid cramming too much text onto a single slide. Use visuals — charts, graphs, and images — to illustrate your points. A good rule of thumb is no more than six bullet points per slide, and no more than six words per bullet point. Your slides should support your spoken words, not replace them.

Practice your delivery multiple times before the actual presentation. Rehearse in front of a mirror, record yourself, or present to a trusted colleague for feedback. Pay attention to your pace, volume, and body language. Speak slowly enough for the audience to follow, make eye contact, and use natural hand gestures to emphasize key points.

Handle questions confidently. If you do not know the answer to a question, it is perfectly acceptable to say, "That is a great question. Let me look into it and get back to you." Honesty builds more credibility than a vague or incorrect answer.

Finally, manage your nervousness. Even experienced speakers get nervous. Take deep breaths before you begin, remember that you are the expert on your topic, and focus on delivering value to your audience. A strong strategy for overcoming fear is to view the presentation as a conversation, not a performance. The benchmark for a successful presentation is whether the audience walks away understanding your key message.`,
    contentZh: `商業簡報是企業生活的常態。無論你是向利害關係人推銷新構想、報告季度營收成果，還是培訓新員工，能夠清楚且有說服力地呈現資訊的能力，可以大幅推進你的職業發展。

準備是每一場精彩簡報的基礎。首先要了解你的聽眾。誰會在場？他們對你的主題已經了解多少？他們需要學到什麼？根據聽眾的知識水準和興趣來調整你的內容，確保你的訊息既相關又引人入勝。

用清晰的開頭、中段和結尾來架構你的簡報。以一個吸引注意力的開場白開始——一個令人驚訝的統計數據、一個引人深思的問題，或一個簡短的故事——立刻抓住注意力。接著按照邏輯順序呈現你的要點，使用證據和範例來支持每個論點。最後，以有力的摘要和明確的行動號召作結。

保持投影片簡潔乾淨。避免在單張投影片上塞太多文字。使用視覺元素——圖表、統計圖和圖片——來說明你的論點。一個好的經驗法則是每張投影片不超過六個要點，每個要點不超過六個單詞。你的投影片應該輔助你的口頭說明，而不是取代它們。

在正式簡報前多次練習你的表達。對著鏡子排練、錄下自己，或對一位信任的同事做簡報以獲得回饋。注意你的語速、音量和肢體語言。說話速度要夠慢讓聽眾能跟上，保持眼神接觸，並使用自然的手勢來強調重點。

自信地處理提問。如果你不知道某個問題的答案，完全可以說：「這是個好問題。讓我查一下再回覆您。」誠實比模糊或錯誤的答案更能建立信譽。

最後，管理你的緊張情緒。即使是經驗豐富的講者也會緊張。在開始前做幾次深呼吸，記住你是這個主題的專家，專注於為聽眾提供價值。克服恐懼的一個好策略是把簡報當作對話，而不是表演。一場成功簡報的衡量基準，是聽眾離開時是否理解了你的核心訊息。`,
    domain: "business" as const,
    difficulty: 2,
    wordCount: 340,
    targetWords: ["b007", "b008", "b012", "b014"],
    questions: [
      {
        question: "What does the article suggest you should do before creating your presentation?",
        options: ["A. Design your slides first", "B. Understand your audience's knowledge level and interests", "C. Memorize your script word for word", "D. Choose the most impressive visuals"],
        correctIndex: 1,
        explanation: "文章第二段指出準備是基礎，首先要「了解你的聽眾」，包括他們的知識水準和興趣，再據此調整內容。",
      },
      {
        question: "What is the purpose of keeping slides clean and simple?",
        options: ["A. To limit presentations to six minutes", "B. To ensure slides support your spoken words without overwhelming the audience", "C. To require six practice sessions", "D. To limit presentations to six slides"],
        correctIndex: 1,
        explanation: "文章第四段說明投影片應保持簡潔的原因是「你的投影片應該輔助你的口頭說明，而不是取代它們」，避免讓過多文字壓過聽眾。",
      },
      {
        question: "How does the author recommend handling a question you cannot answer?",
        options: ["A. Guess the answer to appear confident", "B. Ignore the question and move on", "C. Admit you do not know and offer to follow up", "D. Ask someone else in the room to answer"],
        correctIndex: 2,
        explanation: "文章第六段建議，當遇到無法回答的問題時，應坦承自己不知道並承諾後續跟進，因為「誠實比模糊或錯誤的答案更能建立信譽」。",
      },
    ],
  },
  {
    id: "art-b15",
    title: "Project Management Essentials",
    content: `Project management is the discipline of planning, executing, and closing projects efficiently and effectively. Whether you are organizing a small marketing campaign or overseeing a major product launch, strong project management skills ensure that work is completed on time, within budget, and to the expected standard of quality.

Every project starts with a planning phase. During this phase, you define the project scope — what the project will deliver and what it will not. A clearly defined scope prevents scope creep, which occurs when additional tasks and requirements are added to a project without corresponding increases in budget or timeline. Scope creep is one of the most common reasons projects fail.

Next, create a detailed project plan that includes tasks, milestones, deadlines, and assigned responsibilities. Break the project into phases or stages, and identify dependencies — tasks that must be completed before others can begin. A Gantt chart or project management tool can help you visualize the entire project timeline and keep track of progress.

Resource allocation is another critical aspect. Determine what resources you need — people, money, tools, and materials — and make sure they are available when needed. If resources are limited, prioritize the most critical tasks and consider adjusting the timeline accordingly.

Communication is the glue that holds a project together. Establish a regular reporting cadence — weekly status updates, for example — so that all stakeholders are informed about progress, risks, and changes. When problems arise, communicate them early rather than waiting until they become crises. Transparent communication builds trust and allows the team to solve problems collaboratively.

Risk management is often overlooked but is essential for project success. Identify potential risks at the beginning of the project and develop contingency plans for the most significant ones. Regularly review and update your risk register throughout the project lifecycle.

At the end of the project, conduct a retrospective meeting. Discuss what went well, what went poorly, and what lessons can be applied to future projects. This practice of continuous improvement is what separates good project managers from great ones. Use the revenue generated and the benchmarks established to measure true project success.`,
    contentZh: `專案管理是一門關於高效規劃、執行和結案的學科。無論你是在組織一個小型行銷活動，還是監督一場重大產品發表，強大的專案管理技能確保工作能準時、在預算內、且達到預期的品質標準完成。

每個專案都從規劃階段開始。在這個階段，你定義專案範疇——專案要交付什麼、不交付什麼。清楚定義的範疇可以防止範疇蔓延，也就是在沒有相應增加預算或時程的情況下，額外的任務和需求被加進專案中。範疇蔓延是專案失敗最常見的原因之一。

接著，建立一份詳細的專案計畫，包含任務、里程碑、截止日期和分配的職責。將專案分解為階段或步驟，並找出相依性——哪些任務必須先完成，其他任務才能開始。甘特圖或專案管理工具可以幫助你視覺化整個專案時程並追蹤進度。

資源配置是另一個關鍵面向。確定你需要什麼資源——人力、資金、工具和材料——並確保它們在需要時可以取得。如果資源有限，優先處理最關鍵的任務，並考慮相應調整時程。

溝通是將專案凝聚在一起的黏合劑。建立固定的報告節奏——例如每週狀態更新——讓所有利害關係人隨時了解進度、風險和變更。當問題出現時，及早溝通，而不是等到它們變成危機。透明的溝通能建立信任，並讓團隊能夠協同解決問題。

風險管理經常被忽視，但對專案成功至關重要。在專案開始時就識別潛在風險，並為最重大的風險制定應變計畫。在整個專案生命週期中定期檢視和更新你的風險登錄冊。

在專案結束時，召開一次回顧會議。討論哪些做得好、哪些做得不好，以及有哪些經驗教訓可以應用到未來的專案。這種持續改善的做法，是區分優秀與卓越專案經理的關鍵。利用所創造的營收和建立的基準來衡量專案的真正成效。`,
    domain: "business" as const,
    difficulty: 2,
    wordCount: 325,
    targetWords: ["b001", "b004", "b009", "b012", "b014"],
    questions: [
      {
        question: "What is 'scope creep' according to the article?",
        options: ["A. When a project finishes early", "B. When additional tasks are added without increasing budget or timeline", "C. When team members leave the project", "D. When the project goal changes completely"],
        correctIndex: 1,
        explanation: "文章第二段定義範疇蔓延為「在沒有相應增加預算或時程的情況下，額外的任務和需求被加進專案中」。",
      },
      {
        question: "Why does the author recommend transparent communication during a project?",
        options: ["A. To impress the client", "B. Because it is a legal requirement", "C. To build trust and solve problems collaboratively", "D. To reduce the number of meetings"],
        correctIndex: 2,
        explanation: "文章第五段說明透明溝通的好處是「能建立信任，並讓團隊能夠協同解決問題」，而非僅為了減少會議或法律要求。",
      },
      {
        question: "What is the purpose of a retrospective meeting at the end of a project?",
        options: ["A. To celebrate the project's completion", "B. To assign blame for any problems", "C. To discuss lessons learned for future improvement", "D. To finalize the project budget"],
        correctIndex: 2,
        explanation: "文章最後一段指出回顧會議的目的是「討論哪些做得好、哪些做得不好，以及有哪些經驗教訓可以應用到未來的專案」，屬於持續改善的實踐。",
      },
    ],
  },
  {
    id: "art-b16",
    title: "Understanding Market Research Methods",
    content: `Market research is the systematic process of gathering, analyzing, and interpreting data about a market, its consumers, and its competitors. For businesses of all sizes, market research provides the insights needed to make informed decisions about product development, pricing, marketing strategies, and market entry.

There are two main types of market research: primary research and secondary research. Primary research involves collecting new data directly from sources through methods such as surveys, interviews, focus groups, and observations. This type of research is tailored to your specific questions and provides the most relevant data, but it can be time-consuming and expensive.

Secondary research involves analyzing data that has already been collected by others, such as industry reports, government statistics, academic studies, and competitor publications. It is generally faster and less expensive than primary research, but the data may not be as specific to your needs.

Quantitative research focuses on numerical data that can be measured and analyzed statistically. Surveys with closed-ended questions are a common quantitative method. For example, you might survey 500 customers to learn what percentage prefers a certain product feature. This type of research is useful for identifying trends and patterns across large populations.

Qualitative research, on the other hand, explores opinions, attitudes, and motivations in depth. Methods include in-depth interviews, open-ended survey questions, and focus groups. While qualitative data is harder to analyze statistically, it provides rich insights into why customers behave the way they do.

The best market research often combines both quantitative and qualitative methods. A survey might reveal that 60 percent of your clients are dissatisfied with a particular service, while follow-up interviews can help you understand the specific reasons behind that dissatisfaction.

Regardless of the method you choose, ensure that your sample size is large enough to be representative and that your questions are unbiased. Poorly designed research can lead to misleading conclusions and costly business decisions. Invest a reasonable budget in designing your research carefully, and the insights you gain will serve as valuable benchmarks for your strategy. The revenue impact of good research far exceeds its cost.`,
    contentZh: `市場研究是一個系統性的過程，包括蒐集、分析和解讀有關市場、消費者及競爭者的資料。對各種規模的企業而言，市場研究提供了做出明智決策所需的洞察，涵蓋產品開發、定價、行銷策略和市場進入等方面。

市場研究有兩種主要類型：初級研究和次級研究。初級研究是透過問卷調查、訪談、焦點團體和觀察等方法，直接從來源蒐集新的資料。這類研究針對你的特定問題量身打造，能提供最相關的資料，但可能耗時且昂貴。

次級研究則是分析他人已蒐集的資料，例如產業報告、政府統計數據、學術研究和競爭對手的出版品。它通常比初級研究更快速且成本較低，但資料可能不如你的需求那麼具體。

量化研究著重於可以測量和統計分析的數值資料。使用封閉式問題的問卷調查是常見的量化方法。例如，你可能對 500 位客戶進行問卷調查，了解有多少比例偏好某個產品功能。這類研究適用於在大規模群體中識別趨勢和模式。

另一方面，質性研究則深入探索意見、態度和動機。方法包括深度訪談、開放式問卷題目和焦點團體。雖然質性資料較難進行統計分析，但它能提供豐富的洞察，說明客戶為何會有某些行為。

最好的市場研究通常結合量化和質性方法。一份問卷調查可能揭示你有 60% 的客戶對某項服務不滿意，而後續的訪談則能幫助你了解不滿背後的具體原因。

無論你選擇什麼方法，都要確保你的樣本量夠大，具有代表性，且你的問題沒有偏誤。設計不良的研究可能導致誤導性的結論和代價高昂的商業決策。投入合理的預算來仔細設計你的研究，你所獲得的洞察將成為你策略的寶貴基準。好的研究對營收的影響遠超過其成本。`,
    domain: "business" as const,
    difficulty: 2,
    wordCount: 325,
    targetWords: ["b001", "b002", "b007", "b008", "b012"],
    questions: [
      {
        question: "What is the main difference between primary and secondary research?",
        options: ["A. Primary research is cheaper than secondary research", "B. Primary research collects new data directly; secondary research uses existing data", "C. Primary research is always qualitative", "D. Secondary research is always more accurate"],
        correctIndex: 1,
        explanation: "文章第二、三段分別說明初級研究是「直接從來源蒐集新的資料」，次級研究是「分析他人已蒐集的資料」，這是兩者的主要差異。",
      },
      {
        question: "When would qualitative research be most appropriate?",
        options: ["A. When you need to count how many customers prefer a feature", "B. When you want to understand why customers behave a certain way", "C. When you need fast, cheap results", "D. When your sample size is very large"],
        correctIndex: 1,
        explanation: "文章第五段指出質性研究「深入探索意見、態度和動機」，能提供「客戶為何會有某些行為」的洞察，因此當你想了解客戶行為原因時最適合使用。",
      },
      {
        question: "What warning does the article give about poorly designed research?",
        options: ["A. It takes too long to complete", "B. It can lead to misleading conclusions and costly decisions", "C. It is difficult to publish", "D. It only works for small businesses"],
        correctIndex: 1,
        explanation: "文章最後一段警告「設計不良的研究可能導致誤導性的結論和代價高昂的商業決策」。",
      },
    ],
  },
  {
    id: "art-b17",
    title: "Startup Culture and Its Impact on Innovation",
    content: `The startup ecosystem has transformed the global business landscape over the past two decades. From Silicon Valley garages to co-working spaces in cities around the world, entrepreneurs are building companies that challenge traditional industries and create entirely new markets. The culture within these startups plays a significant role in driving innovation and attracting talent.

Startup culture typically values speed, flexibility, and experimentation over the rigid hierarchies and slow processes found in traditional corporations. Employees in startups often wear multiple hats, taking on responsibilities across different functions. A marketing manager, for instance, might also handle public relations, event planning, and even some basic graphic design. This environment encourages versatility and rapid learning.

One defining feature of startup culture is the acceptance of failure. In traditional corporate environments, failure is often punished or feared. In the startup world, however, failure is viewed as a necessary step on the path to success. The philosophy of "fail fast, learn fast" encourages teams to test ideas quickly, gather feedback, and iterate rather than spending months perfecting a product before it reaches the market.

Flat organizational structures are another common characteristic. In many startups, there are few layers of management between entry-level employees and the CEO. This allows ideas to flow freely and decisions to be made quickly. Employees feel more empowered and engaged when they can contribute directly to the company's strategy and direction.

However, startup culture is not without its challenges. The fast pace and high expectations can lead to burnout. Work-life boundaries may blur, especially in the early stages when resources are limited and every team member is critical to revenue generation. Some startups struggle with maintaining culture as they grow, and the informal processes that worked for a team of ten may not be scalable to a team of one hundred.

Despite these challenges, the startup mindset continues to influence companies of all sizes. Many large corporations have adopted elements of startup culture — such as innovation labs, agile methodologies, and intrapreneurship programs — to stay competitive. The budget for these programs is often justified by the innovative ideas they generate. The lesson is clear: a culture that embraces change and leverages the creativity of its people is a powerful engine for innovation.`,
    contentZh: `過去二十年來，新創生態系統已經改變了全球商業版圖。從矽谷的車庫到世界各地城市的共享工作空間，創業者正在建立挑戰傳統產業並創造全新市場的公司。這些新創公司內部的文化，在推動創新和吸引人才方面扮演著重要角色。

新創文化通常重視速度、彈性和實驗精神，而非傳統企業中常見的嚴格層級制度和緩慢流程。新創公司的員工經常身兼數職，承擔跨越不同功能部門的責任。例如，一位行銷經理可能同時處理公關、活動策劃，甚至一些基本的平面設計。這樣的環境鼓勵多才多藝和快速學習。

新創文化的一個顯著特徵是對失敗的接納。在傳統企業環境中，失敗往往會被懲罰或令人恐懼。然而在新創世界裡，失敗被視為通往成功路上的必要步驟。「快速失敗、快速學習」的理念鼓勵團隊快速測試想法、收集回饋並反覆迭代，而不是花數月時間在產品上市前把它做到完美。

扁平的組織結構是另一個常見特徵。在許多新創公司中，基層員工和執行長之間只有很少的管理層級。這讓想法能自由流通，決策能迅速做出。當員工能直接對公司的策略和方向做出貢獻時，他們會感到更有權能感和參與感。

然而，新創文化並非沒有挑戰。快速的節奏和高期望可能導致倦怠。工作與生活的界線可能會模糊，尤其是在早期階段，資源有限且每位團隊成員對營收創造都至關重要的時候。有些新創公司在成長過程中難以維持文化，而那些在十人團隊時有效的非正式流程，可能無法擴展到百人團隊。

儘管有這些挑戰，新創思維持續影響著各種規模的公司。許多大型企業已經採用了新創文化的元素——例如創新實驗室、敏捷方法論和內部創業計畫——以維持競爭力。這些計畫的預算通常因它們所產生的創新想法而得到合理化。教訓很明確：一種擁抱變革並善用員工創造力的文化，是推動創新的強大引擎。`,
    domain: "business" as const,
    difficulty: 2,
    wordCount: 340,
    targetWords: ["b007", "b008", "b009", "b011", "b016"],
    questions: [
      {
        question: "How does startup culture view failure differently from traditional corporations?",
        options: ["A. Startups punish failure more harshly", "B. Startups see failure as a necessary step toward success", "C. Traditional corporations encourage more experimentation", "D. There is no difference in how failure is viewed"],
        correctIndex: 1,
        explanation: "文章第三段明確指出，在新創世界中「失敗被視為通往成功路上的必要步驟」，與傳統企業懲罰失敗的態度形成對比。",
      },
      {
        question: "What challenge does the article identify with startup culture?",
        options: ["A. Startups cannot attract talented employees", "B. The fast pace and high expectations can lead to burnout", "C. Startups cannot afford any technology", "D. Employees have too little responsibility"],
        correctIndex: 1,
        explanation: "文章第五段指出新創文化的挑戰包括「快速的節奏和高期望可能導致倦怠」，以及工作與生活界線模糊等問題。",
      },
      {
        question: "What can be inferred about large corporations adopting startup elements?",
        options: ["A. They are abandoning all traditional practices", "B. They recognize that startup-style culture can drive innovation and competitiveness", "C. They are failing to compete with startups", "D. They are only doing it to attract younger workers"],
        correctIndex: 1,
        explanation: "文章最後一段提到大型企業採用新創元素（如創新實驗室、敏捷方法論等）是為了「維持競爭力」，可推論它們認為新創風格的文化能驅動創新和競爭力。",
      },
    ],
  },
  {
    id: "art-b18",
    title: "The Art of B2B Sales",
    content: `Business-to-business sales, commonly known as B2B sales, is fundamentally different from selling directly to consumers. In B2B transactions, the sales cycle is typically longer, the deal sizes are larger, and the decision-making process involves multiple stakeholders. Understanding these differences is essential for anyone looking to succeed in B2B sales.

The B2B sales process usually begins with prospecting — identifying potential customers who could benefit from your product or service. This involves researching companies, understanding their industries, and finding the right contact person within the organization. In modern B2B sales, tools like LinkedIn, industry databases, and customer relationship management systems help sales professionals identify and qualify leads more efficiently.

Building relationships is at the core of B2B sales. Unlike consumer purchases, which are often impulsive, business purchases require trust and confidence. Buyers need to believe that your company can deliver on its promises and that the investment will generate a positive return. This trust is built over time through consistent communication, demonstrated expertise, and reliable follow-through.

In B2B sales, you rarely deal with a single decision-maker. Most business purchases involve a buying committee that includes technical evaluators, financial approvers, and executive sponsors. Each stakeholder has different priorities and concerns. A successful salesperson identifies all the key stakeholders and addresses each one's specific needs. The technical evaluator wants to know if the product works. The financial approver wants to know if the budget is justified. The executive sponsor wants to know if the solution aligns with the company's strategy.

Consultative selling is particularly effective in B2B contexts. Instead of simply pitching your product, act as a consultant who helps the buyer solve a problem. Ask probing questions, listen to their challenges, and propose a solution that is tailored to their specific situation. This approach positions you as a trusted advisor rather than just another vendor trying to negotiate the highest price.

Closing the deal in B2B sales often requires patience and persistence. It is not uncommon for a B2B sales cycle to last several months. Stay engaged throughout the process, address objections promptly, and keep the momentum going by providing value at every touchpoint. The revenue from a single well-managed B2B contract can sustain a company for years.`,
    contentZh: `企業對企業銷售，通常稱為 B2B 銷售，與直接向消費者銷售有根本上的不同。在 B2B 交易中，銷售週期通常更長、交易金額更大，且決策過程涉及多個利害關係人。了解這些差異，對任何想在 B2B 銷售中成功的人來說都是必不可少的。

B2B 銷售流程通常從開發潛在客戶開始——找出可能從你的產品或服務中受益的潛在客戶。這包括研究公司、了解其所在產業，以及在組織中找到對的聯繫人。在現代 B2B 銷售中，LinkedIn、產業資料庫和客戶關係管理系統等工具，幫助銷售專業人員更有效率地識別和篩選潛在客戶。

建立關係是 B2B 銷售的核心。不同於通常具有衝動性的消費者購買，企業採購需要信任和信心。買方需要相信你的公司能兌現承諾，而且這筆投資會帶來正向的回報。這種信任是透過持續的溝通、展現的專業能力和可靠的後續追蹤，隨著時間逐步建立的。

在 B2B 銷售中，你很少只面對單一決策者。大多數企業採購涉及一個採購委員會，包括技術評估者、財務核准者和高層支持者。每個利害關係人都有不同的優先事項和關切。成功的銷售人員會識別所有關鍵利害關係人，並針對每個人的具體需求來回應。技術評估者想知道產品是否可行。財務核准者想知道預算是否合理。高層支持者想知道解決方案是否符合公司的策略。

顧問式銷售在 B2B 情境中特別有效。與其單純推銷你的產品，不如扮演一個幫助買方解決問題的顧問。提出探索性的問題、傾聽他們的挑戰，並提出一個針對他們具體情況量身打造的解決方案。這種方法將你定位為一個值得信賴的顧問，而不只是另一個試圖談到最高價格的供應商。

在 B2B 銷售中完成交易通常需要耐心和毅力。一個 B2B 銷售週期持續數個月並不罕見。在整個過程中保持參與，及時處理異議，並在每個接觸點提供價值來維持動力。一份管理得當的 B2B 合約所帶來的營收，可以支撐一家公司好幾年。`,
    domain: "business" as const,
    difficulty: 2,
    wordCount: 340,
    targetWords: ["b001", "b002", "b003", "b006", "b008"],
    questions: [
      {
        question: "What makes B2B sales different from selling to consumers?",
        options: ["A. B2B deals are always smaller", "B. B2B sales cycles are longer and involve multiple decision-makers", "C. B2B customers do not need trust", "D. Consumer sales take longer"],
        correctIndex: 1,
        explanation: "文章第一段指出 B2B 銷售的特點是「銷售週期通常更長、交易金額更大，且決策過程涉及多個利害關係人」，這些是與消費者銷售的主要差異。",
      },
      {
        question: "What is 'consultative selling' as described in the article?",
        options: ["A. Selling products at a discount", "B. Acting as a consultant who helps the buyer solve a problem", "C. Hiring a sales consultant", "D. Selling consulting services"],
        correctIndex: 1,
        explanation: "文章第五段將顧問式銷售描述為「扮演一個幫助買方解決問題的顧問」，而非單純推銷產品，透過提問和傾聽來提出量身打造的解決方案。",
      },
      {
        question: "Why does a salesperson need to identify all key stakeholders in a B2B deal?",
        options: ["A. To invite them all to a dinner", "B. To send them marketing materials", "C. Because each stakeholder has different priorities and concerns that must be addressed", "D. To speed up the sales cycle"],
        correctIndex: 2,
        explanation: "文章第四段解釋，需要識別所有關鍵利害關係人是「因為每個利害關係人都有不同的優先事項和關切」需要被處理，包括技術、財務和策略面向。",
      },
    ],
  },
  {
    id: "art-b19",
    title: "Corporate Communication in a Remote World",
    content: `The global shift toward remote and hybrid work has fundamentally changed how organizations communicate. While remote work offers many benefits — including flexibility, reduced commuting time, and access to a broader talent pool — it also presents significant communication challenges that companies must address proactively.

One of the biggest challenges is the loss of informal communication. In a traditional office, employees naturally exchange information during hallway conversations, coffee breaks, and impromptu meetings. These interactions help build relationships, spark ideas, and keep everyone aligned. In a remote setting, these moments do not happen organically, so companies must create intentional opportunities for informal connection, such as virtual coffee chats, online social channels, or periodic in-person gatherings.

Written communication has become more important than ever in remote environments. Since much of the communication happens through email, messaging apps, and project management tools, the ability to write clearly and concisely is critical. Remote workers should be mindful of tone, as written messages lack the facial expressions and vocal cues that help convey meaning in face-to-face conversations. A message that was intended to be direct might come across as abrupt or rude without the right context.

Video conferencing has become the primary tool for synchronous communication. However, meeting fatigue is a real phenomenon that can reduce productivity and morale. To combat this, establish clear guidelines for when video meetings are necessary and when asynchronous communication — such as a recorded video update or a detailed written summary — would be more efficient. Not every discussion requires a live meeting with all stakeholders.

Documentation is another essential practice for remote teams. When decisions are made in meetings, document them and share the summary with all relevant team members. This is especially important for teams that span multiple time zones, where not everyone can attend every meeting. Include the deadline for any action items in the documentation.

Leaders play a crucial role in setting the communication culture. They should model transparent, frequent, and inclusive communication practices. Regular check-ins, team-wide updates, and open channels for feedback help remote employees feel connected, informed, and valued. The strategy for remote communication requires the same level of budget and planning as any other business initiative. Organizations that treat communication as a strategic priority are better positioned to leverage the full potential of their distributed workforce.`,
    contentZh: `全球邁向遠距和混合工作模式的轉變，從根本上改變了組織的溝通方式。雖然遠距工作帶來許多好處——包括彈性、減少通勤時間，以及接觸更廣泛的人才庫——但它也帶來了企業必須主動解決的重大溝通挑戰。

最大的挑戰之一是非正式溝通的流失。在傳統辦公室中，員工自然而然地在走廊對話、茶水間休息和臨時會議中交流資訊。這些互動有助於建立關係、激發創意，並讓每個人保持一致。在遠距環境中，這些時刻不會自然發生，因此公司必須刻意創造非正式連結的機會，例如虛擬咖啡聊天、線上社交頻道或定期的實體聚會。

書面溝通在遠距環境中變得比以往任何時候都更加重要。由於大部分溝通透過電子郵件、即時通訊軟體和專案管理工具進行，清晰且簡潔的寫作能力至關重要。遠距工作者應留意語氣，因為書面訊息缺少面對面對話中幫助傳達含義的表情和語調線索。一條原本想表達直接的訊息，如果缺少適當的語境，可能會顯得唐突或無禮。

視訊會議已成為同步溝通的主要工具。然而，會議疲勞是一種確實存在的現象，可能降低生產力和士氣。為了應對這個問題，建立明確的準則，釐清何時需要視訊會議、何時非同步溝通——例如錄製影片更新或詳細的書面摘要——會更有效率。並非每個議題都需要召集所有利害關係人參加即時會議。

文件記錄是遠距團隊的另一項重要實務。當會議中做出決策時，要記錄下來並與所有相關團隊成員分享摘要。這對跨越多個時區的團隊尤其重要，因為不是每個人都能參加每場會議。在文件中納入每個待辦事項的截止日期。

領導者在塑造溝通文化方面扮演關鍵角色。他們應該以身作則，展現透明、頻繁且包容的溝通實踐。定期的一對一會談、全團隊更新和開放的回饋管道，有助於遠距員工感到被聯繫、被告知和被重視。遠距溝通的策略需要與其他任何商業計畫同等水準的預算和規劃。將溝通視為策略性優先事項的組織，更能善用其分散式團隊的全部潛力。`,
    domain: "business" as const,
    difficulty: 2,
    wordCount: 345,
    targetWords: ["b004", "b008", "b011", "b014", "b016"],
    questions: [
      {
        question: "What does the article identify as one of the biggest challenges of remote work?",
        options: ["A. Employees work fewer hours", "B. The loss of informal, spontaneous communication", "C. Technology is too expensive", "D. Managers have less authority"],
        correctIndex: 1,
        explanation: "文章第二段明確指出遠距工作最大的挑戰之一是「非正式溝通的流失」，也就是在傳統辦公室中自然發生的走廊對話和臨時交流不再發生。",
      },
      {
        question: "What solution does the article propose for meeting fatigue?",
        options: ["A. Ban all video meetings entirely", "B. Hold meetings only on certain days", "C. Establish guidelines for when live meetings are needed versus asynchronous communication", "D. Limit meetings to five minutes"],
        correctIndex: 2,
        explanation: "文章第四段建議應對會議疲勞的方法是「建立明確的準則，釐清何時需要視訊會議、何時非同步溝通會更有效率」，而非全面禁止會議。",
      },
      {
        question: "Why is documentation especially important for teams across multiple time zones?",
        options: ["A. Because it looks more professional", "B. Because not everyone can attend every meeting in real time", "C. Because it reduces the number of emails", "D. Because it is required by law"],
        correctIndex: 1,
        explanation: "文章第五段解釋文件記錄對跨時區團隊特別重要，因為「不是每個人都能參加每場會議」，需要靠文件來確保資訊傳達。",
      },
    ],
  },
  {
    id: "art-b20",
    title: "Financial Reports: What Every Manager Should Know",
    content: `Even if you are not an accountant, understanding basic financial reports is essential for any manager or business professional. Financial reports provide a snapshot of a company's financial health and are used to make critical business decisions, from hiring new staff to launching new products.

The three most important financial reports are the income statement, the balance sheet, and the cash flow statement. Each one tells a different story about the company's financial situation.

The income statement, sometimes called the profit and loss statement, shows the company's revenue and expenses over a specific period. Revenue is the total income earned from selling products or services. Expenses include everything the company spends to operate — salaries, rent, materials, marketing, and more. The bottom line of the income statement is the net income, which is revenue minus expenses. A positive net income means the company is profitable; a negative one indicates a loss.

The balance sheet provides a snapshot of the company's financial position at a specific point in time. It is organized into three sections: assets, liabilities, and equity. Assets are what the company owns — cash, inventory, equipment, and property. Liabilities are what the company owes — loans, unpaid invoices, and other debts. Equity represents the owners' share of the company, calculated as assets minus liabilities. The balance sheet must always balance, meaning total assets must equal total liabilities plus equity.

The cash flow statement tracks the movement of cash in and out of the company. It is divided into three sections: operating activities, investing activities, and financing activities. A company can be profitable on paper but still run into trouble if it does not have enough cash to pay its bills. The cash flow statement reveals whether the company is generating enough cash to sustain its operations and grow.

As a manager, you do not need to prepare these reports yourself, but you should be able to read and interpret them. Understanding financial reports helps you make better decisions about budgets, resource allocation, and strategic planning. These reports serve as benchmarks for evaluating performance. It also enables you to negotiate more effectively with the finance team and communicate with stakeholders when discussing the company's performance and future direction. Every client contract ultimately affects these numbers.`,
    contentZh: `即使你不是會計師，了解基本的財務報表對任何經理人或商務專業人士來說都是必要的。財務報表提供了公司財務健康狀況的快照，用於做出關鍵的商業決策，從聘請新員工到推出新產品。

三份最重要的財務報表是損益表、資產負債表和現金流量表。每一份都講述了公司財務狀況的不同面向。

損益表，有時稱為盈虧報表，顯示公司在特定期間的營收和費用。營收是透過銷售產品或服務所賺取的總收入。費用包括公司營運所花費的一切——薪資、租金、材料、行銷等等。損益表的底線是淨利，也就是營收減去費用。正的淨利表示公司有盈利；負的則表示虧損。

資產負債表提供公司在特定時間點的財務狀況快照。它分為三個部分：資產、負債和股東權益。資產是公司擁有的——現金、存貨、設備和不動產。負債是公司欠下的——貸款、未付的發票和其他債務。股東權益代表所有者在公司中的份額，計算方式為資產減去負債。資產負債表必須永遠平衡，意思是總資產必須等於總負債加上股東權益。

現金流量表追蹤現金流入和流出公司的動態。它分為三個部分：營業活動、投資活動和籌資活動。一家公司帳面上可能是盈利的，但如果沒有足夠的現金來支付帳單，仍然會陷入困境。現金流量表揭示了公司是否產生足夠的現金來維持營運和成長。

身為經理人，你不需要自己編制這些報表，但你應該能夠閱讀和解讀它們。了解財務報表能幫助你在預算、資源配置和策略規劃方面做出更好的決策。這些報表可以作為評估績效的基準。它還讓你能更有效地與財務團隊協商，並在討論公司績效和未來方向時與利害關係人溝通。每一份客戶合約最終都會影響這些數字。`,
    domain: "business" as const,
    difficulty: 2,
    wordCount: 345,
    targetWords: ["b001", "b005", "b006", "b007", "b012"],
    questions: [
      {
        question: "What is the 'bottom line' of an income statement?",
        options: ["A. Total revenue", "B. Total expenses", "C. Net income, which is revenue minus expenses", "D. Total assets minus liabilities"],
        correctIndex: 2,
        explanation: "文章第三段說明損益表的底線是「淨利，也就是營收減去費用」，正的淨利表示盈利，負的表示虧損。",
      },
      {
        question: "Why might a profitable company still face financial trouble?",
        options: ["A. Because profits are always taxed at 100 percent", "B. Because it may not have enough cash to pay its bills", "C. Because the balance sheet does not balance", "D. Because revenue is the same as cash"],
        correctIndex: 1,
        explanation: "文章第五段指出「一家公司帳面上可能是盈利的，但如果沒有足夠的現金來支付帳單，仍然會陷入困境」，說明獲利但缺乏現金仍可能面臨財務問題。",
      },
      {
        question: "What is the main reason the author thinks managers should understand financial reports?",
        options: ["A. To replace the finance team", "B. To prepare the reports themselves", "C. To make better decisions and communicate effectively with leadership", "D. To impress clients during meetings"],
        correctIndex: 2,
        explanation: "文章最後一段表明經理人應了解財務報表的主要原因是「幫助你做出更好的決策」並「更有效地與財務團隊協商，與利害關係人溝通」。",
      },
    ],
  },

  // ---------- Difficulty 3: art-b21 to art-b30 ----------
  {
    id: "art-b21",
    title: "Navigating Supply Chain Disruptions",
    content: `Global supply chains have become increasingly complex, interconnected, and vulnerable to disruption. Events in recent years — including pandemics, geopolitical tensions, natural disasters, and logistics bottlenecks — have exposed the fragility of supply chain networks that many businesses had taken for granted. For companies that depend on raw materials, components, or finished goods from international suppliers, understanding how to navigate supply chain disruptions is now a strategic imperative.

The first step in building supply chain resilience is diversification. Companies that rely on a single supplier or a single geographic region for critical inputs face significant risk. When that supplier or region experiences a disruption, the entire production process can grind to a halt. By diversifying suppliers across multiple countries and regions, companies can reduce their exposure to any single point of failure. This approach may increase procurement costs in the short term, but it provides substantial protection against catastrophic interruptions.

Visibility across the supply chain is equally important. Many companies have limited insight into what happens beyond their direct, first-tier suppliers. However, disruptions often originate further upstream — at the second, third, or fourth tier of the supply chain. Investing in technology that provides end-to-end visibility, such as supply chain management platforms and real-time tracking systems, enables companies to identify potential problems before they escalate into full-scale crises.

Inventory strategy is another critical consideration. The just-in-time inventory model, which minimizes stockpiles to reduce carrying costs, has been widely adopted for decades. While efficient under normal conditions, this model leaves little buffer when supply is interrupted. Many companies are now shifting toward a just-in-case approach, maintaining strategic safety stock of critical components to bridge gaps during disruptions. The budget for this additional inventory serves as insurance against revenue loss.

Collaboration with suppliers has also become more important. Rather than treating suppliers as interchangeable vendors, leading companies are building deeper, more strategic partnerships. Sharing demand forecasts, coordinating capacity planning, and jointly investing in risk mitigation create mutual benefits and strengthen the entire supply chain ecosystem. The best negotiations with suppliers focus on long-term value rather than short-term price.

Finally, companies must develop comprehensive contingency plans that outline specific responses to different types of disruptions. These plans should establish benchmarks for acceptable recovery times and be tested regularly through simulations. Stakeholders at every level should understand their role when a disruption occurs. The companies that recover fastest from supply chain disruptions are those that planned for them in advance and can leverage their preparation to maintain client commitments.`,
    contentZh: `全球供應鏈日益複雜、環環相扣，也越來越容易受到干擾。近年來的種種事件——包括疫情、地緣政治緊張、自然災害和物流瓶頸——暴露了許多企業過去視為理所當然的供應鏈網路其實十分脆弱。對於依賴國際供應商提供原物料、零組件或成品的企業而言，了解如何因應供應鏈中斷，如今已是一項策略性的當務之急。

建立供應鏈韌性的第一步是多元化。若企業的關鍵原料僅仰賴單一供應商或單一地理區域，將面臨重大風險。一旦該供應商或地區遭遇中斷，整個生產流程可能完全停擺。透過在多個國家和地區分散供應商，企業可以降低對任何單一故障點的依賴。這種做法短期內可能增加採購成本，但能為防範災難性中斷提供實質保障。

供應鏈的可見度同樣重要。許多企業對其直接的一級供應商之外的狀況了解有限。然而，中斷往往源自更上游——供應鏈的第二、第三甚至第四級。投資能提供端到端可見度的技術，例如供應鏈管理平台和即時追蹤系統，讓企業能在問題升級為全面危機之前及早發現。

庫存策略是另一個關鍵考量。即時生產（just-in-time）庫存模式透過最小化庫存來降低持有成本，數十年來被廣泛採用。在正常情況下雖然高效，但這種模式在供應中斷時幾乎沒有緩衝餘地。許多企業現在正轉向「以防萬一」（just-in-case）的做法，維持關鍵零組件的戰略安全庫存，以彌補中斷期間的供應缺口。這筆額外庫存的預算可視為預防營收損失的保險。

與供應商的合作也變得更加重要。領先企業不再將供應商視為可替換的廠商，而是建立更深層、更具策略性的夥伴關係。分享需求預測、協調產能規劃，以及共同投資風險緩解措施，能創造雙贏並強化整個供應鏈生態系統。與供應商之間最好的談判應著眼於長期價值，而非短期價格。

最後，企業必須制定全面的應變計畫，針對不同類型的中斷擬定具體的因應方案。這些計畫應設立可接受的復原時間基準，並透過模擬演練定期測試。各層級的利害關係人都應了解自己在中斷發生時的角色。從供應鏈中斷中最快復原的企業，正是那些事先做好規劃、並能善用準備工作來維持客戶承諾的企業。`,
    domain: "business" as const,
    difficulty: 3,
    wordCount: 370,
    targetWords: ["b001", "b006", "b008", "b012", "b018"],
    questions: [
      {
        question: "What does the article mean by 'a single point of failure' in the supply chain?",
        options: ["A. A product defect that affects all customers", "B. A dependency on one supplier or region that creates catastrophic risk if disrupted", "C. A failure in the company's IT system", "D. A mistake by a single employee"],
        correctIndex: 1,
        explanation: "文章指出，依賴單一供應商或單一地區的企業面臨重大風險，一旦該來源中斷，整個生產流程可能停擺。因此「單一故障點」指的是對單一供應商或地區的依賴所造成的災難性風險。",
      },
      {
        question: "What is the main disadvantage of the just-in-time inventory model according to the article?",
        options: ["A. It is too expensive to implement", "B. It requires too much warehouse space", "C. It leaves little buffer when supply is interrupted", "D. It is too complicated for small businesses"],
        correctIndex: 2,
        explanation: "文章明確指出，即時生產模式雖在正常情況下高效，但「在供應中斷時幾乎沒有緩衝餘地」（leaves little buffer when supply is interrupted），這正是其主要缺點。",
      },
      {
        question: "How does the article suggest companies should treat their suppliers?",
        options: ["A. As interchangeable vendors to get the lowest price", "B. As competitors that should be kept at a distance", "C. As strategic partners for deeper collaboration and mutual benefit", "D. As temporary resources to be replaced regularly"],
        correctIndex: 2,
        explanation: "文章建議企業不應將供應商視為可替換的廠商，而應建立更深層的策略夥伴關係，透過分享預測、協調規劃和共同投資來創造雙贏。",
      },
    ],
  },
  {
    id: "art-b22",
    title: "Strategic HR: Attracting and Retaining Top Talent",
    content: `In today's competitive business environment, human resources has evolved from an administrative function into a strategic partner that directly influences organizational success. Companies that excel at attracting, developing, and retaining top talent gain a significant competitive advantage, while those that neglect their people strategy often struggle to execute even the most brilliant business plans.

The talent acquisition process begins long before a job is posted. Employer branding — the reputation a company builds as a place to work — has become a critical factor in attracting high-quality candidates. Companies with strong employer brands receive more applications, attract better-qualified candidates, and fill positions faster. Building an employer brand requires consistent effort: career pages, social media content, employee testimonials, and participation in industry events all contribute to how potential hires perceive your organization.

The interview process itself has evolved considerably. Beyond assessing technical skills, leading companies now evaluate cultural fit, emotional intelligence, and growth potential. Structured interviews with standardized questions reduce bias and improve the quality of hiring decisions. Some organizations also incorporate work sample tests or case studies that simulate real job challenges, providing a more accurate benchmark of how a candidate would perform in the role.

Once talent is onboarded, retention becomes the priority. Research consistently shows that the top drivers of employee retention extend beyond compensation. While competitive salaries and benefits are necessary, employees also value meaningful work, opportunities for professional development, strong leadership, and a positive workplace culture. Companies that invest in mentoring programs, continuous learning platforms, and clear career progression paths tend to retain employees longer and reduce turnover costs significantly.

Performance management is another area undergoing transformation. The traditional annual review is being replaced by continuous feedback models. Regular one-on-one meetings, real-time recognition, and quarterly goal-setting create a more dynamic performance culture that helps employees grow and stay engaged. These practices incentivize consistent effort rather than end-of-year performance spikes.

Diversity, equity, and inclusion have moved to the forefront of HR strategy. Research demonstrates that diverse teams make better decisions, drive more innovation, and achieve stronger financial results. Building a truly inclusive workplace requires more than hiring diverse candidates; it demands changes to policies, practices, and cultural norms that ensure every stakeholder — from entry-level employees to senior leaders — feels valued. The budget allocated to diversity initiatives generates revenue returns through improved team performance and innovation. Companies that leverage their diverse talent effectively create a sustainable competitive advantage.`,
    contentZh: `在當今競爭激烈的商業環境中，人力資源已從行政職能演變為直接影響組織成功的策略夥伴。擅長吸引、培養和留住頂尖人才的企業能獲得顯著的競爭優勢，而忽視人才策略的企業往往連最出色的商業計畫都難以執行。

人才招募的過程早在職缺公告之前就已開始。雇主品牌——企業作為工作場所所建立的聲譽——已成為吸引高素質人才的關鍵因素。擁有強大雇主品牌的企業會收到更多應徵、吸引更優秀的候選人，並更快地填補職缺。建立雇主品牌需要持續努力：職涯頁面、社群媒體內容、員工推薦語，以及參加業界活動，都會影響潛在求職者對你的組織的印象。

面試流程本身也有了長足的進步。除了評估技術能力外，領先企業現在也會評估文化契合度、情緒智商和成長潛力。採用標準化問題的結構化面試可以減少偏見，提升用人決策的品質。部分組織還會納入工作實作測試或個案研究，模擬真實的工作挑戰，更準確地衡量候選人在該職位上的實際表現。

人才到職後，留才就成為首要任務。研究一致顯示，員工留任的關鍵驅動因素不僅止於薪酬。雖然具競爭力的薪資和福利是必要的，但員工同樣重視有意義的工作、專業發展機會、優秀的領導力和正向的職場文化。投資於導師制度、持續學習平台和清晰的職涯晉升路徑的企業，往往能更長久地留住員工，並大幅降低人員流動成本。

績效管理是另一個正在轉型的領域。傳統的年度考核正被持續回饋模式所取代。定期的一對一會議、即時肯定和季度目標設定，營造出更具活力的績效文化，幫助員工成長並維持投入感。這些做法激勵的是持續性的努力，而非年末的衝刺表現。

多元、公平和包容已成為人力資源策略的核心議題。研究證明，多元化的團隊能做出更好的決策、驅動更多創新，並取得更強勁的財務表現。建立真正包容的職場不僅止於招募多元背景的人才，還需要改變政策、實務做法和文化規範，確保每位利害關係人——從基層員工到高階主管——都感受到被重視。投入於多元化計畫的預算能透過團隊績效和創新的提升帶來營收回報。善於運用多元人才的企業，能創造可持續的競爭優勢。`,
    domain: "business" as const,
    difficulty: 3,
    wordCount: 360,
    targetWords: ["b008", "b011", "b012", "b014", "b020"],
    questions: [
      {
        question: "According to the article, what is 'employer branding'?",
        options: ["A. The company's product logo and tagline", "B. The reputation a company builds as a place to work", "C. A marketing campaign targeting new customers", "D. The design of the company's office space"],
        correctIndex: 1,
        explanation: "文章明確定義雇主品牌為「企業作為工作場所所建立的聲譽」（the reputation a company builds as a place to work），與產品商標或行銷活動無關。",
      },
      {
        question: "What does the article suggest is replacing the traditional annual performance review?",
        options: ["A. No performance reviews at all", "B. Peer-only evaluations", "C. Continuous feedback models with regular check-ins and real-time recognition", "D. Automated AI assessments"],
        correctIndex: 2,
        explanation: "文章指出傳統年度考核正被「持續回饋模式」所取代，包括定期一對一會議、即時肯定和季度目標設定，營造更具活力的績效文化。",
      },
      {
        question: "What can be inferred about the relationship between diversity and business performance?",
        options: ["A. Diversity has no measurable impact on results", "B. Diverse teams drive better decisions, more innovation, and stronger financial results", "C. Only large companies benefit from diversity", "D. Diversity initiatives are primarily a public relations effort"],
        correctIndex: 1,
        explanation: "文章引用研究指出，多元化的團隊能「做出更好的決策、驅動更多創新，並取得更強勁的財務表現」，顯示多元性與商業績效之間存在正向關聯。",
      },
    ],
  },
  {
    id: "art-b23",
    title: "Product Launch Strategy: From Concept to Market",
    content: `Bringing a new product to market is one of the most complex and high-stakes activities a company can undertake. A successful product launch requires careful coordination across multiple departments — research and development, marketing, sales, operations, and customer support — and a strategic approach that balances speed with thoroughness.

The pre-launch phase is where much of the groundwork is laid. Market research helps validate the product concept and identify the target audience. Customer surveys, competitor analysis, and focus groups provide insights into market demand, pricing expectations, and feature priorities. This research should inform not just the product design but also the entire go-to-market strategy, including positioning, messaging, and channel selection.

Beta testing is a crucial step that many companies rush through or skip entirely. Releasing the product to a small group of early users before the full launch allows you to identify bugs, gather usability feedback, and refine the product based on real-world usage. The cost of fixing issues during beta testing is significantly lower than addressing them after a public launch, when the stakes include brand reputation and client satisfaction.

The launch plan should include a detailed timeline with milestones, a communications strategy, and clearly defined success metrics. Key performance indicators might include units sold, website traffic, media coverage, social media engagement, and customer satisfaction scores. Establishing these benchmarks before the launch enables objective evaluation of results afterward.

Cross-functional alignment is essential during the launch period. The marketing campaign creates awareness and drives demand. Sales teams need to be thoroughly trained on the product's features, benefits, and competitive advantages so they can effectively communicate its value to potential customers. Customer support must be prepared to handle inquiries and resolve issues quickly, as the early customer experience heavily influences word-of-mouth and reviews.

Post-launch analysis is just as important as the launch itself. Monitor your success metrics closely during the weeks and months following the launch. Collect customer feedback systematically and use it to drive product improvements. The revenue trajectory in the first quarter after launch often determines the product's long-term viability. Some of the most successful products were significantly enhanced after their initial launch based on user input. The budget for post-launch iteration should be negotiated and approved before launch day. Stakeholders who understand that the launch is the beginning — not the end — of the product journey are more likely to support ongoing investment.`,
    contentZh: `將新產品推向市場是企業最複雜、風險最高的活動之一。一次成功的產品上市需要跨部門的精密協調——包括研發、行銷、業務、營運和客戶服務——以及在速度與周全之間取得平衡的策略方法。

上市前階段是奠定基礎的關鍵時期。市場研究有助於驗證產品概念並鎖定目標受眾。消費者調查、競爭者分析和焦點團體能提供市場需求、價格預期和功能優先順序的洞察。這些研究不僅應用於產品設計，還應涵蓋整個進入市場策略，包括定位、訊息傳達和通路選擇。

Beta 測試是許多企業草率帶過或完全跳過的關鍵步驟。在正式上市前，先將產品釋出給一小群早期使用者，能讓你找出程式錯誤、蒐集使用回饋，並根據實際使用情境改善產品。在 Beta 測試階段修正問題的成本，遠低於公開上市後才處理的代價——屆時賭注包括品牌聲譽和客戶滿意度。

上市計畫應包含具有里程碑的詳細時程表、溝通策略，以及明確定義的成功指標。關鍵績效指標可能包括銷售量、網站流量、媒體報導、社群媒體互動和客戶滿意度分數。在上市前就建立這些基準，能在事後進行客觀的成果評估。

上市期間，跨部門的一致性至關重要。行銷活動創造知名度並驅動需求。業務團隊需要充分了解產品的功能、優勢和競爭優勢，才能有效地向潛在客戶傳達其價值。客服部門必須準備好處理諮詢和快速解決問題，因為早期客戶體驗會大幅影響口碑和評價。

上市後的分析與上市本身同等重要。在上市後的數週和數月內密切監控你的成功指標。系統性地蒐集客戶回饋，並用它來驅動產品改進。上市後第一季的營收趨勢往往決定了產品的長期可行性。許多最成功的產品都是在初次上市後，根據使用者回饋大幅改良的。上市後持續迭代的預算應在上市日之前就談判並核准。理解上市是產品旅程的「起點」而非「終點」的利害關係人，更有可能支持持續性的投資。`,
    domain: "business" as const,
    difficulty: 3,
    wordCount: 355,
    targetWords: ["b002", "b007", "b008", "b009", "b012"],
    questions: [
      {
        question: "Why does the article emphasize the importance of beta testing?",
        options: ["A. It satisfies regulatory requirements", "B. It generates free publicity", "C. Fixing issues during beta is significantly cheaper than addressing them after a public launch", "D. It guarantees the product will be successful"],
        correctIndex: 2,
        explanation: "文章指出在 Beta 測試階段修正問題的成本「遠低於公開上市後才處理的代價」，因為公開上市後牽涉品牌聲譽和客戶滿意度等更高風險。",
      },
      {
        question: "What does 'cross-functional alignment' mean in the context of a product launch?",
        options: ["A. All employees receive the same salary", "B. Different departments coordinate and work together toward the launch goals", "C. The product works across different platforms", "D. The company aligns with industry regulations"],
        correctIndex: 1,
        explanation: "文章中的「跨部門一致性」指的是行銷、業務、客服等不同部門在上市期間協調合作、共同朝上市目標努力，而非指薪資統一或跨平台相容。",
      },
      {
        question: "What does the author mean by saying the launch is 'the beginning, not the end'?",
        options: ["A. The product needs to be launched again on other platforms", "B. Post-launch analysis and continuous improvement are essential for long-term success", "C. The company should immediately start developing a new product", "D. Sales will continue automatically without further effort"],
        correctIndex: 1,
        explanation: "文章在最後一段明確指出，利害關係人需要理解上市是「起點而非終點」，意即上市後的分析和持續改進對長期成功至關重要。",
      },
    ],
  },
  {
    id: "art-b24",
    title: "The Psychology of Consumer Decision-Making",
    content: `Understanding how consumers make purchasing decisions is essential for any marketing professional. Consumer behavior is influenced by a complex interplay of psychological, social, cultural, and economic factors. By understanding these factors, marketers can design more effective campaigns, create more compelling messages, and ultimately drive higher conversion rates.

The consumer decision-making process typically follows five stages: need recognition, information search, evaluation of alternatives, purchase decision, and post-purchase evaluation. At each stage, different psychological mechanisms come into play. During need recognition, the consumer becomes aware of a gap between their current state and their desired state. Effective marketing often works by amplifying this awareness — showing consumers a problem they may not have fully recognized and presenting a solution.

Information search behavior has changed dramatically with the rise of the internet. Today's consumers research extensively before making purchases, reading online reviews, comparing prices across multiple platforms, watching product demonstration videos, and seeking recommendations from social media influencers. This means that a brand's digital presence and online reputation are more important than ever in shaping purchase decisions.

Cognitive biases play a significant role in how consumers evaluate alternatives. Anchoring bias causes people to rely heavily on the first piece of information they encounter — which is why showing the original price next to a discounted price is so effective. Social proof — the tendency to follow the behavior of others — explains why customer reviews, testimonials, and popularity indicators influence purchasing decisions. Scarcity bias makes products seem more desirable when they are perceived as limited or exclusive.

Emotional factors often override rational analysis. Research shows that consumers frequently make emotional purchasing decisions and then rationalize them afterward with logical arguments. This is why storytelling and emotional branding can be more persuasive than simply listing product features and specifications. Marketers who leverage emotional connections in their campaigns consistently see higher conversion rates.

Post-purchase behavior is critically important but often neglected by marketers. If a client's experience with the product meets or exceeds expectations, they become a potential advocate who may recommend the product to others, generating significant revenue through word-of-mouth. If the experience falls short, they may share negative reviews. Companies that invest in post-purchase communication — such as follow-up emails, satisfaction surveys, and loyalty programs — can strengthen customer relationships and increase lifetime value. The budget for retention strategies should be benchmarked against the acquisition cost of new customers.`,
    contentZh: `了解消費者如何做出購買決策，對任何行銷專業人員而言都至關重要。消費者行為受到心理、社會、文化和經濟等因素的複雜交互作用所影響。透過理解這些因素，行銷人員可以設計更有效的活動、創造更具說服力的訊息，並最終提高轉換率。

消費者的決策過程通常遵循五個階段：需求認知、資訊搜尋、替代方案評估、購買決策和購後評估。在每個階段，不同的心理機制會發揮作用。在需求認知階段，消費者意識到自己目前的狀態與期望狀態之間存在落差。有效的行銷通常藉由放大這種意識來運作——向消費者展示他們可能尚未完全認知到的問題，並提供解決方案。

資訊搜尋行為隨著網路的興起產生了巨大變化。現今的消費者在購買前會進行大量研究，閱讀線上評論、在多個平台比較價格、觀看產品示範影片，以及參考社群媒體意見領袖的推薦。這意味著品牌的數位形象和線上聲譽在影響購買決策方面比以往任何時候都更加重要。

認知偏誤在消費者評估替代方案時扮演重要角色。定錨效應（anchoring bias）使人們傾向過度依賴接觸到的第一筆資訊——這就是為什麼在折扣價旁邊標示原價如此有效。社會認同（social proof）——跟隨他人行為的傾向——解釋了為何顧客評論、推薦語和人氣指標會影響購買決策。稀缺偏誤（scarcity bias）則讓產品在被認為數量有限或具獨家性時顯得更加吸引人。

情感因素往往凌駕於理性分析之上。研究顯示，消費者經常先做出情感性的購買決定，然後再用邏輯論點來合理化。這就是為什麼說故事和情感品牌塑造比單純列出產品特點和規格更具說服力。善用情感連結的行銷人員在其活動中持續看到更高的轉換率。

購後行為極為重要，但經常被行銷人員忽視。如果客戶的產品使用體驗達到或超越預期，他們就可能成為潛在的品牌擁護者，向他人推薦產品，透過口碑帶來可觀的營收。如果體驗不如預期，他們可能會分享負面評論。投資於購後溝通的企業——例如後續追蹤郵件、滿意度調查和忠誠度計畫——能強化客戶關係並提升終身價值。留客策略的預算應以獲取新客戶的成本作為基準來衡量。`,
    domain: "business" as const,
    difficulty: 3,
    wordCount: 350,
    targetWords: ["b001", "b010", "b011", "b012", "b015"],
    questions: [
      {
        question: "According to the article, how has the 'information search' stage changed?",
        options: ["A. Consumers now skip this stage entirely", "B. Consumers research extensively online, reading reviews and comparing options", "C. Consumers rely only on TV advertising", "D. Consumers only ask friends for advice"],
        correctIndex: 1,
        explanation: "文章指出，隨著網路興起，消費者現在會在購買前進行大量線上研究，包括閱讀評論、比價、看產品影片和參考意見領袖的推薦，資訊搜尋行為已產生巨大變化。",
      },
      {
        question: "What is 'anchoring bias' as explained in the article?",
        options: ["A. The tendency to buy products from well-known brands", "B. The tendency to rely heavily on the first piece of information encountered", "C. The tendency to prefer products that are in stock", "D. The tendency to always choose the cheapest option"],
        correctIndex: 1,
        explanation: "文章將定錨效應定義為「人們傾向過度依賴接觸到的第一筆資訊」，並以折扣價旁標示原價作為實例說明。",
      },
      {
        question: "Why does the author say post-purchase behavior is critically important?",
        options: ["A. Because satisfied customers become advocates while dissatisfied ones share negative reviews", "B. Because it affects the product's manufacturing process", "C. Because it reduces marketing costs to zero", "D. Because government regulations require post-purchase follow-up"],
        correctIndex: 0,
        explanation: "文章指出，滿意的客戶會成為品牌擁護者並透過口碑帶來營收，而不滿的客戶則會分享負面評論，因此購後行為對品牌和營收都有關鍵影響。",
      },
    ],
  },
  {
    id: "art-b25",
    title: "Data-Driven Decision Making in Modern Business",
    content: `The explosion of digital data has transformed how businesses make decisions. Organizations that effectively leverage data analytics gain deeper insights into customer behavior, operational efficiency, and market trends, enabling them to make decisions that are more objective, timely, and accurate than those based on intuition alone.

Data-driven decision making begins with collecting the right data. Not all data is equally valuable. Companies must identify the key metrics that align with their business objectives and establish systems for collecting that data consistently and accurately. For a marketing team, relevant metrics might include customer acquisition cost, lifetime value, conversion rate, and return on ad spend. For an operations team, the focus might be on production efficiency, defect rates, and delivery times.

Once data is collected, it must be analyzed and translated into actionable insights. This is where data visualization tools and business intelligence platforms play a crucial role. Dashboards that present complex data in clear, visual formats enable managers to identify patterns, spot anomalies, and make decisions quickly. A well-designed dashboard can condense thousands of data points into a single chart that tells a compelling story about revenue trends or campaign performance.

However, data-driven decision making is not without its pitfalls. One common mistake is confusing correlation with causation. Just because two metrics move together does not mean one causes the other. Another pitfall is confirmation bias — the tendency to seek out data that supports a pre-existing belief while ignoring contradictory evidence. To mitigate these risks, organizations should foster a culture of critical thinking and encourage teams to challenge assumptions with rigorous analysis.

The human element remains essential even in a data-driven organization. Data provides the facts, but experienced professionals bring context, creativity, and ethical judgment that algorithms cannot replicate. The most effective approach combines quantitative insights with qualitative understanding — using data to inform decisions while relying on human expertise to interpret nuances, negotiate complex trade-offs, and navigate ambiguity.

Privacy and ethical considerations must also guide how companies collect and use data. Consumers are increasingly concerned about how their personal information is handled, and regulations impose strict requirements on data collection, storage, and usage. Companies that prioritize transparency and ethical data practices build stronger trust with their clients and avoid regulatory penalties. The budget for data governance is not optional — it is a strategic investment. Setting benchmarks for data quality and establishing clear contracts with data providers ensures that the insights you derive from your data are reliable and actionable. Organizations that master data-driven decision making will have a significant competitive advantage, but only if they leverage analytical rigor with human wisdom and ethical responsibility.`,
    contentZh: `數位資料的爆炸性成長已經徹底改變了企業的決策方式。能有效運用資料分析的組織，可以更深入地洞察顧客行為、營運效率和市場趨勢，使其決策比單憑直覺更加客觀、即時且準確。

資料驅動決策始於蒐集正確的資料。並非所有資料都具有同等價值。企業必須找出與其商業目標一致的關鍵指標，並建立一致且準確地蒐集這些資料的系統。對行銷團隊而言，相關指標可能包括客戶獲取成本、終身價值、轉換率和廣告投資報酬率。對營運團隊而言，重點可能是生產效率、瑕疵率和交貨時間。

資料蒐集後，必須加以分析並轉化為可付諸行動的洞察。這正是資料視覺化工具和商業智慧平台發揮關鍵作用之處。以清晰視覺格式呈現複雜資料的儀表板，讓管理者能夠識別模式、發現異常並快速做出決策。一個設計良好的儀表板可以將數千個資料點濃縮成一張圖表，清楚呈現營收趨勢或活動績效的全貌。

然而，資料驅動決策並非毫無陷阱。一個常見的錯誤是將相關性與因果關係混淆。兩個指標同步變動，並不代表其中一個導致了另一個。另一個陷阱是確認偏誤——傾向尋找支持既有信念的資料，同時忽略矛盾證據。為了降低這些風險，組織應培養批判性思維的文化，鼓勵團隊以嚴謹的分析來挑戰假設。

即使在資料驅動的組織中，人的因素仍然不可或缺。資料提供事實，但經驗豐富的專業人員帶來的是演算法無法複製的脈絡理解、創造力和道德判斷。最有效的方法是將量化洞察與質性理解相結合——用資料來輔助決策，同時依靠人類的專業知識來解讀細微差異、協商複雜的取捨，以及應對模糊情境。

隱私和道德考量也必須指引企業蒐集和使用資料的方式。消費者越來越關心其個人資訊的處理方式，而法規對資料蒐集、儲存和使用也有嚴格要求。優先重視透明度和道德資料實務的企業，能與客戶建立更強的信任，並避免法規處罰。資料治理的預算不是可有可無的——而是一項策略性投資。為資料品質設定基準，並與資料供應商建立明確的合約條款，可確保你從資料中獲得的洞察是可靠且可操作的。掌握資料驅動決策的組織將擁有顯著的競爭優勢，但前提是他們必須在分析的嚴謹性與人類智慧及道德責任之間取得平衡。`,
    domain: "business" as const,
    difficulty: 3,
    wordCount: 380,
    targetWords: ["b001", "b002", "b008", "b011", "b012"],
    questions: [
      {
        question: "What common mistake does the article warn about in data analysis?",
        options: ["A. Collecting too much data", "B. Confusing correlation with causation", "C. Using too many visualization tools", "D. Sharing data with competitors"],
        correctIndex: 1,
        explanation: "文章明確警告不要「將相關性與因果關係混淆」（confusing correlation with causation），兩個指標同步變動並不代表存在因果關係，這是資料分析中最常見的錯誤之一。",
      },
      {
        question: "According to the article, why is the human element still essential in data-driven organizations?",
        options: ["A. Because computers are unreliable", "B. Because humans bring context, creativity, and ethical judgment that algorithms cannot replicate", "C. Because data is always inaccurate", "D. Because employees prefer not to use technology"],
        correctIndex: 1,
        explanation: "文章指出，經驗豐富的專業人員能帶來「演算法無法複製的脈絡理解、創造力和道德判斷」，因此即使在資料驅動的組織中，人的因素仍不可或缺。",
      },
      {
        question: "What does the article suggest about consumer data privacy?",
        options: ["A. It is not a concern for most businesses", "B. Companies should collect as much data as possible", "C. Transparency and ethical data practices build trust and help avoid regulatory penalties", "D. Privacy regulations only apply to technology companies"],
        correctIndex: 2,
        explanation: "文章指出，企業應優先重視透明度和道德資料實務，這能幫助建立客戶信任並避免法規處罰，資料治理預算是一項策略性投資。",
      },
    ],
  },
  {
    id: "art-b26",
    title: "Leadership in Times of Uncertainty",
    content: `Leading an organization during periods of uncertainty — whether caused by economic downturns, industry disruptions, public health crises, or geopolitical instability — requires a distinct set of skills and mindsets that differ significantly from leadership during stable, predictable times. The leaders who navigate uncertainty most effectively are those who combine strategic clarity with emotional intelligence, decisive action with adaptive flexibility.

The first priority for leaders in uncertain times is honest, transparent communication. When employees, stakeholders, and customers do not know what is happening, they fill the information vacuum with speculation and anxiety. Leaders who communicate openly about what they know, what they do not know, and what steps they are taking to address the situation build trust and reduce organizational anxiety. Even when the news is not positive, transparency demonstrates respect and fosters a sense of shared purpose.

Decisiveness is critical, but it must be balanced with humility. In uncertain environments, perfect information is rarely available, and waiting for complete clarity before acting can be more dangerous than making a well-reasoned decision with imperfect data. Effective leaders make the best decision possible with the information at hand, communicate their reasoning clearly, and remain willing to adjust course as new information emerges. This approach recognizes that strategy in uncertain times is iterative, not fixed.

Empathy becomes a leadership superpower during difficult periods. Uncertainty affects people differently, and employees may be dealing with personal challenges that compound professional stress. Leaders who take the time to understand their team members' concerns, provide emotional support, and create psychological safety — an environment where people feel safe to express doubts and ask questions — build more resilient and committed teams.

Maintaining focus on long-term vision while managing short-term challenges is perhaps the most difficult balance to strike. It is tempting to enter survival mode and cut everything except the bare essentials from the budget. While cost management is important, leaders who also invest in innovation, talent development, and strategic positioning during downturns are often best positioned to thrive when conditions improve. History shows that many of the world's most successful companies made their defining strategic moves — negotiating key acquisitions, launching breakthrough products, leveraging new market opportunities — during periods of uncertainty.

Ultimately, leadership in uncertain times is about creating stability through purpose, clarity, and human connection. The revenue may fluctuate and benchmarks may need to be reset, but the trust that leaders build with their stakeholders during difficult times becomes the foundation for future success.`,
    contentZh: `在不確定時期——無論是經濟衰退、產業劇變、公共衛生危機還是地緣政治動盪——領導一個組織，需要一套與穩定可預期時期截然不同的技能和心態。最能有效因應不確定性的領導者，是那些能將策略清晰度與情緒智慧相結合，在果斷行動與靈活調適之間取得平衡的人。

在不確定時期，領導者的首要任務是誠實、透明的溝通。當員工、利害關係人和客戶不知道正在發生什麼時，他們會用臆測和焦慮來填補資訊真空。領導者若能坦誠地溝通他們所知道的、不知道的，以及正在採取的因應步驟，就能建立信任並降低組織的焦慮感。即使消息不是正面的，透明也展現了尊重，並培養共同目標感。

果斷決策至關重要，但必須搭配謙遜。在不確定的環境中，完美的資訊很少齊備，等到完全明朗再行動可能比在資訊不完整時做出合理判斷更加危險。有效的領導者會根據手邊的資訊做出最佳決策，清楚溝通其推理過程，並在新資訊出現時保持調整方向的意願。這種做法認知到，不確定時期的策略是迭代式的，而非固定不變的。

在困難時期，同理心成為領導力的超能力。不確定性對每個人的影響不同，員工可能正面臨加劇職業壓力的個人挑戰。花時間理解團隊成員的擔憂、提供情感支持，並創造心理安全感——一個讓人們能安心表達疑慮和提出問題的環境——的領導者，能打造出更具韌性和向心力的團隊。

在應對短期挑戰的同時維持長期願景，或許是最難拿捏的平衡。人們很容易進入求生模式，從預算中砍掉一切非必要項目。雖然成本管理很重要，但在景氣低迷時仍投資於創新、人才發展和策略定位的領導者，往往能在環境好轉時占據最有利的位置。歷史顯示，許多全球最成功的企業，正是在不確定時期做出了決定性的策略行動——談判關鍵收購案、推出突破性產品、把握新的市場機會。

歸根結柢，不確定時期的領導力在於透過目標、清晰度和人際連結來創造穩定。營收可能起伏波動，基準可能需要重新設定，但領導者在困難時期與利害關係人建立的信任，將成為未來成功的基石。`,
    domain: "business" as const,
    difficulty: 3,
    wordCount: 360,
    targetWords: ["b001", "b006", "b008", "b012", "b014"],
    questions: [
      {
        question: "What does the article say happens when leaders fail to communicate during uncertainty?",
        options: ["A. Employees become more productive", "B. Employees fill the information vacuum with speculation and anxiety", "C. Customers increase their spending", "D. The organization becomes more innovative"],
        correctIndex: 1,
        explanation: "文章指出，當員工和利害關係人不知道發生什麼事時，他們會「用臆測和焦慮來填補資訊真空」，因此領導者未能溝通會導致組織瀰漫不安情緒。",
      },
      {
        question: "What does the article describe as 'adaptive leadership'?",
        options: ["A. Changing leaders frequently during a crisis", "B. Making decisions with available information and adjusting course as new data emerges", "C. Waiting for perfect information before taking any action", "D. Copying the strategies of successful competitors"],
        correctIndex: 1,
        explanation: "文章描述的適應性領導是指：根據手邊資訊做出最佳決策，清楚溝通推理過程，並在新資訊出現時保持調整方向的意願，認知到策略是迭代式而非固定不變的。",
      },
      {
        question: "What lesson does the article draw from historically successful companies?",
        options: ["A. They avoided all risk during uncertain times", "B. They focused solely on cost cutting", "C. They made their defining strategic moves during periods of uncertainty", "D. They waited for the economy to recover before investing"],
        correctIndex: 2,
        explanation: "文章引用歷史經驗指出，許多全球最成功的企業「正是在不確定時期做出了決定性的策略行動」，包括關鍵收購、突破性產品上市等。",
      },
    ],
  },
  {
    id: "art-b27",
    title: "Digital Transformation: Beyond Technology",
    content: `Digital transformation is one of the most discussed topics in modern business, yet it remains one of the most misunderstood. Many organizations mistakenly equate digital transformation with simply adopting new technology — implementing cloud computing, deploying artificial intelligence tools, or upgrading legacy systems. While technology is certainly a component, true digital transformation is fundamentally about reimagining business processes, organizational culture, and customer experiences in a digital-first world.

The most common reason digital transformation initiatives fail is not technological — it is cultural. Organizations that attempt to implement new digital tools without changing the underlying mindsets, behaviors, and processes end up with expensive technology that nobody uses effectively. Successful digital transformation requires a cultural shift that embraces experimentation, tolerates failure, and values continuous learning. Employees at every level must understand why the transformation is happening and how it benefits them personally, not just the organization.

Customer experience is often the most compelling driver of digital transformation. Today's consumers expect seamless, personalized, and instantaneous interactions with brands across every touchpoint — websites, mobile apps, social media, customer service, and physical stores. Companies that cannot meet these expectations risk losing clients to digitally native competitors. Mapping the customer journey from end to end and identifying pain points and opportunities for digital enhancement is a powerful starting point.

Data is the fuel that powers digital transformation. When processes are digitized, they generate data that can be analyzed to uncover insights, automate decisions, and predict future trends. However, many organizations struggle with data silos — isolated pockets of data that exist in different departments and systems without being connected. Breaking down these silos and creating a unified data infrastructure is essential for realizing the full potential of digital transformation.

Change management deserves at least as much attention and budget as the technology itself. Clear communication about the transformation's goals, extensive training for employees, and a phased rollout that allows people to adapt gradually all contribute to successful adoption. Leaders should identify and empower digital champions within each department — enthusiastic early adopters who can inspire and support their peers through the transition.

Measuring the impact of digital transformation requires both quantitative and qualitative metrics. Beyond traditional revenue and conversion benchmarks, organizations should track customer satisfaction, employee engagement, process efficiency, and innovation output. Stakeholders need to negotiate realistic timelines for seeing returns on the transformation investment. The scalable nature of digital solutions means that initial investments can leverage compounding returns over time. Companies that approach digital transformation as a strategic journey rather than a technology project position themselves for sustainable competitive advantage.`,
    contentZh: `數位轉型是現代商業中最熱門的話題之一，但也是最被誤解的議題之一。許多組織錯誤地將數位轉型等同於單純採用新技術——導入雲端運算、部署人工智慧工具或升級老舊系統。雖然技術當然是其中一個組成部分，但真正的數位轉型從根本上是在數位優先的世界中重新想像業務流程、組織文化和客戶體驗。

數位轉型計畫失敗最常見的原因不是技術問題——而是文化問題。試圖在不改變底層心態、行為和流程的情況下導入新數位工具的組織，最終只會得到昂貴但無人有效使用的技術。成功的數位轉型需要文化上的轉變：擁抱實驗、容忍失敗、重視持續學習。各層級的員工都必須理解轉型為何發生，以及它對個人（而不僅是對組織）有什麼好處。

客戶體驗往往是數位轉型最具說服力的驅動因素。今日的消費者期望在每個接觸點——網站、行動應用程式、社群媒體、客服和實體店面——與品牌的互動都是無縫、個人化且即時的。無法滿足這些期望的企業可能會將客戶流失給數位原生的競爭者。從頭到尾繪製客戶旅程地圖，找出痛點和數位增強的機會，是一個有力的起點。

資料是驅動數位轉型的燃料。當流程被數位化後，它們會產生可用於發掘洞察、自動化決策和預測未來趨勢的資料。然而，許多組織受困於資料孤島（data silos）——存在於不同部門和系統中卻未彼此連接的孤立資料。打破這些孤島並建立統一的資料基礎設施，對於實現數位轉型的全部潛力至關重要。

變革管理應獲得與技術本身至少同等的關注和預算。清楚溝通轉型目標、為員工提供充分的培訓，以及分階段推動以讓人們逐步適應，都有助於成功的導入。領導者應在每個部門中找出並賦權給數位先驅——那些熱情的早期採用者，他們能在轉型過程中激勵和支持同事。

衡量數位轉型的成效需要量化和質化並重的指標。除了傳統的營收和轉換基準外，組織還應追蹤客戶滿意度、員工投入度、流程效率和創新產出。利害關係人需要協商看到轉型投資回報的合理時間表。數位解決方案的可擴展特性意味著初期投資能隨時間產生複利效應。將數位轉型視為策略旅程而非技術專案的企業，能為自己建立可持續的競爭優勢。`,
    domain: "business" as const,
    difficulty: 3,
    wordCount: 370,
    targetWords: ["b002", "b006", "b008", "b011", "b016"],
    questions: [
      {
        question: "What does the article identify as the most common reason digital transformation fails?",
        options: ["A. The technology is too expensive", "B. The cultural change required is not addressed", "C. Competitors adopt the same technology faster", "D. Customers do not want digital services"],
        correctIndex: 1,
        explanation: "文章明確指出，數位轉型失敗最常見的原因「不是技術問題——而是文化問題」，組織若未改變底層心態、行為和流程，再好的技術也無法有效運用。",
      },
      {
        question: "What are 'data silos' as described in the article?",
        options: ["A. Secure storage facilities for physical documents", "B. Isolated pockets of data in different departments that are not connected", "C. Advanced database technologies used by large corporations", "D. Large quantities of unstructured data from social media"],
        correctIndex: 1,
        explanation: "文章將資料孤島定義為「存在於不同部門和系統中卻未彼此連接的孤立資料」，並指出打破這些孤島對實現數位轉型的潛力至關重要。",
      },
      {
        question: "What role do 'digital champions' play in the transformation process?",
        options: ["A. They make all technology purchasing decisions", "B. They replace the IT department entirely", "C. They are enthusiastic early adopters who inspire and support their peers", "D. They evaluate vendors and select the best software"],
        correctIndex: 2,
        explanation: "文章指出數位先驅是「熱情的早期採用者，能在轉型過程中激勵和支持同事」，他們的角色是推動同儕接受變革，而非取代IT部門或做採購決策。",
      },
    ],
  },
  {
    id: "art-b28",
    title: "Ethical Marketing: Building Trust in a Skeptical World",
    content: `Consumer trust in brands and institutions has been declining for years, fueled by high-profile data breaches, misleading advertising scandals, and growing awareness of manipulative marketing practices. In this environment of heightened skepticism, ethical marketing has emerged not just as a moral imperative but as a strategic advantage. Companies that prioritize honesty, transparency, and social responsibility in their marketing efforts are building stronger, more sustainable relationships with their customers.

Ethical marketing begins with truthfulness in advertising. This means making claims that are accurate, substantiated, and not misleading — even by omission. Exaggerating product benefits, hiding fees or limitations in fine print, and using deceptive before-and-after comparisons are practices that may generate short-term revenue but erode trust over time. Once consumers feel deceived, they rarely give a brand a second chance, and negative word-of-mouth spreads faster than positive campaign messages.

Data privacy is now a central ethical concern in marketing. Companies collect vast amounts of personal data to personalize advertising and improve customer targeting. While personalization can enhance the client experience, it must be balanced with respect for privacy. Ethical marketers are transparent about what data they collect, how it is used, and give consumers meaningful control over their information. Compliance with data protection regulations is the minimum standard; truly ethical companies go beyond legal requirements to build trust-based relationships.

Social responsibility has become an increasingly important dimension of brand perception. Consumers — particularly younger generations — expect brands to take meaningful positions on social and environmental issues. However, this expectation also creates the risk of making public statements about social causes without backing them up with genuine action. Consumers are sophisticated enough to distinguish between authentic commitment and performative marketing. Brands that make specific, measurable commitments and report transparently on their progress earn far more credibility than those that simply adopt trendy language.

Influencer marketing presents its own ethical challenges. As this channel has grown, concerns about undisclosed sponsorships, fake followers, and inauthentic endorsements have increased. Ethical influencer marketing requires clear disclosure of paid partnerships, selection of influencers whose values genuinely align with the brand, and prioritizing authentic content creation over scripted promotional messages.

Building an ethical marketing culture requires leadership commitment and organizational accountability. Establish clear ethical guidelines for all marketing activities, allocate budget for ethics training, and create feedback mechanisms that allow employees and stakeholders to raise concerns. Set benchmarks for ethical performance and negotiate these standards into contracts with all marketing partners. Companies that leverage ethical practices as a differentiator find that the short-term costs are minimal compared to the long-term benefits of consumer trust, brand loyalty, and sustainable revenue growth. The incentive to act ethically is both moral and financial.`,
    contentZh: `多年來，消費者對品牌和機構的信任持續下降，原因包括高調的資料外洩事件、誤導性廣告醜聞，以及人們對操縱性行銷手法日益提高的警覺。在這種高度懷疑的環境中，道德行銷不僅是道德上的要求，更已成為一項策略優勢。在行銷中優先重視誠實、透明和社會責任的企業，正在與客戶建立更強健、更可持續的關係。

道德行銷始於廣告的真實性。這意味著所做的宣稱必須準確、有根據，且不具誤導性——即使是透過遺漏的方式。誇大產品功效、將費用或限制條件藏在細則中，以及使用欺騙性的使用前後對比，這些做法短期內或許能帶來營收，但長期會侵蝕信任。消費者一旦感覺被欺騙，很少會再給品牌第二次機會，而負面口碑的傳播速度遠快於正面的活動訊息。

資料隱私如今是行銷中的核心道德議題。企業蒐集大量個人資料以進行個人化廣告和改善客戶定向投放。雖然個人化可以提升客戶體驗，但必須與尊重隱私取得平衡。道德行銷人員會透明揭露蒐集了哪些資料、如何使用，並賦予消費者對其資訊的實質控制權。遵守資料保護法規只是最低標準；真正有道德的企業會超越法律要求，建立以信任為基礎的關係。

社會責任已成為品牌認知中日益重要的面向。消費者——特別是年輕世代——期望品牌在社會和環境議題上採取有意義的立場。然而，這種期望也帶來了風險：對外宣稱關注社會議題，卻沒有以實際行動來支持。消費者足夠精明，能分辨真誠的承諾和做做樣子的行銷。做出具體、可衡量的承諾並透明報告進展的品牌，獲得的公信力遠高於那些只是套用流行術語的品牌。

網紅行銷也有其自身的道德挑戰。隨著這個管道的成長，對未揭露贊助關係、假粉絲和不真誠代言的擔憂也隨之增加。道德的網紅行銷要求清楚揭露付費合作、選擇價值觀真正與品牌一致的網紅，並優先考慮真實的內容創作而非照本宣科的宣傳訊息。

建立道德行銷文化需要領導層的承諾和組織的問責制。為所有行銷活動制定明確的道德準則、分配倫理培訓的預算，並建立讓員工和利害關係人能提出疑慮的回饋機制。設定道德績效的基準，並將這些標準納入與所有行銷夥伴的合約中。將道德實務作為差異化優勢的企業發現，短期成本與消費者信任、品牌忠誠度和可持續營收增長的長期效益相比微不足道。行為道德的動機既是道德層面的，也是財務層面的。`,
    domain: "business" as const,
    difficulty: 3,
    wordCount: 385,
    targetWords: ["b002", "b007", "b008", "b010", "b012"],
    questions: [
      {
        question: "What does the article suggest about the long-term effects of misleading advertising?",
        options: ["A. It has no lasting impact on brand perception", "B. It erodes consumer trust and damages brand reputation over time", "C. It eventually becomes accepted by consumers", "D. It only affects small businesses"],
        correctIndex: 1,
        explanation: "文章指出，誇大產品功效、隱藏限制條件等誤導性廣告手法「短期內或許能帶來營收，但長期會侵蝕信任」，消費者一旦感覺被欺騙很少再給第二次機會。",
      },
      {
        question: "What risk does the article associate with brands taking positions on social issues?",
        options: ["A. It always increases sales immediately", "B. Consumers may see it as performative if not backed by genuine action", "C. It only appeals to older consumers", "D. It is illegal in most countries"],
        correctIndex: 1,
        explanation: "文章提到消費者期望品牌在社會議題上表態，但也存在「做做樣子」的風險——若對外宣稱關注卻沒有實際行動支持，消費者能辨別出來，反而損害公信力。",
      },
      {
        question: "What can be inferred about the relationship between ethical marketing and business performance?",
        options: ["A. Ethical marketing always reduces profits", "B. Ethical marketing is only relevant for nonprofit organizations", "C. Ethical marketing builds sustainable trust that creates a strategic and financial advantage", "D. Ethical marketing has no effect on customer relationships"],
        correctIndex: 2,
        explanation: "文章結論指出，將道德實務作為差異化優勢的企業發現其「短期成本與長期效益相比微不足道」，道德行銷能建立可持續的信任，帶來策略和財務上的優勢。",
      },
    ],
  },
  {
    id: "art-b29",
    title: "The Evolution of Content Marketing Strategy",
    content: `Content marketing has undergone a remarkable evolution since its early days of simple blog posts and basic infographics. Today, content marketing is a sophisticated discipline that integrates strategy, technology, creativity, and data analytics to deliver measurable business results. For marketing professionals seeking to stay competitive, understanding the current state and future trajectory of content marketing is essential.

The foundational principle of content marketing remains unchanged: provide genuine value to your audience rather than simply promoting your products. However, the execution has become significantly more complex. Modern content strategies must account for multiple platforms, diverse content formats, personalized delivery, search engine optimization, and increasingly sophisticated audience expectations.

Content pillars — the core themes around which all content is organized — have become a strategic framework for maintaining consistency and relevance. Rather than creating random pieces of content, leading brands develop three to five content pillars that align with both their business objectives and their audience's interests. Every piece of content, whether it is a blog post, a podcast episode, a social media update, or a long-form report, should connect to one of these pillars. This approach helps leverage each piece of content for maximum impact.

The rise of video content has been one of the most significant shifts in content marketing. Short-form video platforms have demonstrated that audiences have an enormous appetite for visual storytelling. However, the popularity of video does not mean that written content is obsolete. Long-form articles, white papers, and case studies continue to perform well for thought leadership and search engine visibility. The most effective content strategies employ a mix of formats tailored to different stages of the buyer's journey.

Content distribution has become as important as content creation. Producing excellent content is only half the battle; ensuring it reaches the right audience at the right time is the other half. A robust distribution strategy includes owned channels such as company websites, email newsletters, and social media profiles; earned channels such as media coverage, guest posts, and organic shares; and paid channels such as sponsored content and social media advertising. The campaign budget should be split between creation and distribution based on industry benchmarks.

Measuring content marketing effectiveness requires a sophisticated approach. Last-click attribution — crediting the final touchpoint before conversion — dramatically undervalues the role of content that influences earlier stages of the buyer's journey. Multi-touch attribution models that assign credit across all touchpoints provide a more accurate picture of how content contributes to revenue outcomes including brand awareness, lead generation, and client engagement. Stakeholders need to negotiate appropriate metrics for each stage of the funnel. The scalable nature of content — where a single article can generate traffic for years — means that the return on investment compounds over time, making content marketing one of the most efficient strategies available to modern businesses.`,
    contentZh: `內容行銷從早期簡單的部落格文章和基本資訊圖表，已經歷了顯著的演變。如今，內容行銷是一門整合策略、技術、創意和資料分析的精密學科，旨在提供可衡量的商業成果。對於想要保持競爭力的行銷專業人員而言，了解內容行銷的現狀和未來發展方向至關重要。

內容行銷的基本原則始終未變：為你的受眾提供真正的價值，而不僅僅是推銷產品。然而，執行層面已變得複雜許多。現代內容策略必須考量多個平台、多元的內容格式、個人化投遞、搜尋引擎優化，以及越來越高的受眾期望。

內容支柱——所有內容圍繞其組織的核心主題——已成為維持一致性和相關性的策略框架。領先品牌不再隨機產出內容，而是發展出三到五個與企業目標及受眾興趣一致的內容支柱。每一篇內容，無論是部落格文章、Podcast 節目、社群媒體貼文還是長篇報告，都應連結到其中一個支柱。這種方法有助於讓每篇內容發揮最大效益。

影片內容的崛起是內容行銷中最重大的轉變之一。短影音平台證明了受眾對視覺化敘事有龐大的需求。然而，影片的流行並不代表文字內容已經過時。長篇文章、白皮書和案例研究在思想領導力和搜尋引擎能見度方面仍然表現出色。最有效的內容策略會採用多種格式的組合，針對買家旅程的不同階段量身打造。

內容發布已變得與內容創作同等重要。產出優質內容只是成功的一半；確保它在正確的時間觸及正確的受眾才是另一半。完善的發布策略包括自有管道（如公司網站、電子報和社群媒體帳號）、贏得的管道（如媒體報導、客座文章和自然分享），以及付費管道（如贊助內容和社群媒體廣告）。活動預算應根據產業基準在內容創作和發布之間進行分配。

衡量內容行銷成效需要精密的方法。最後點擊歸因（last-click attribution）——將功勞歸於轉換前的最後一個接觸點——會大幅低估在買家旅程早期階段發揮影響力的內容的價值。多接觸點歸因模型則將功勞分配到所有接觸點，能更準確地呈現內容如何貢獻於營收成果，包括品牌知名度、潛在客戶開發和客戶互動。利害關係人需要為漏斗各階段協商適當的衡量指標。內容的可擴展特性——一篇文章可以持續帶來流量長達數年——意味著投資報酬率會隨時間複利增長，使內容行銷成為現代企業最高效的策略之一。`,
    domain: "business" as const,
    difficulty: 3,
    wordCount: 395,
    targetWords: ["b001", "b007", "b008", "b010", "b015"],
    questions: [
      {
        question: "What are 'content pillars' according to the article?",
        options: ["A. The most popular blog posts on a website", "B. Core themes around which all content is organized to maintain consistency and relevance", "C. The physical columns in a content studio", "D. The most expensive content formats to produce"],
        correctIndex: 1,
        explanation: "文章將內容支柱定義為「所有內容圍繞其組織的核心主題」，用以維持一致性和相關性的策略框架，領先品牌通常發展三到五個內容支柱。",
      },
      {
        question: "Why does the article criticize 'last-click attribution'?",
        options: ["A. It is too expensive to implement", "B. It overvalues social media content", "C. It dramatically undervalues content that influences earlier stages of the buyer journey", "D. It only works for video content"],
        correctIndex: 2,
        explanation: "文章批評最後點擊歸因模型「大幅低估在買家旅程早期階段發揮影響力的內容的價值」，因為它只將功勞歸於轉換前的最後一個接觸點，忽略了其他貢獻。",
      },
      {
        question: "What does the article say about the longevity of content marketing?",
        options: ["A. Content becomes worthless after one month", "B. A single article can generate traffic for years, creating compounding returns", "C. Only video content has long-term value", "D. Content must be completely replaced every quarter"],
        correctIndex: 1,
        explanation: "文章指出內容具有可擴展特性，「一篇文章可以持續帶來流量長達數年」，投資報酬率會隨時間複利增長，這正是內容行銷的長期價值所在。",
      },
    ],
  },
  {
    id: "art-b30",
    title: "Mergers and Acquisitions: Strategic Considerations",
    content: `Mergers and acquisitions represent some of the most consequential decisions a company can make. Whether a business is acquiring a competitor to expand market share, merging with a complementary company to create synergy, or purchasing a startup to obtain innovative technology, the strategic rationale, execution quality, and post-deal integration all determine whether the transaction ultimately creates or destroys value.

The strategic rationale for mergers and acquisitions generally falls into several categories. Horizontal mergers combine companies in the same industry to achieve economies of scale, reduce competition, and increase market power. Vertical acquisitions bring together companies at different stages of the supply chain, providing greater control over inputs or distribution channels. Diversification acquisitions allow companies to enter new markets or industries, spreading risk across a broader portfolio. Technology acquisitions enable established companies to acquire innovative capabilities that would take years to develop internally.

Due diligence is the critical process of thoroughly investigating a target company before completing the transaction. Financial due diligence examines the target's revenue, profitability, cash flow, debt obligations, and accounting practices. Operational due diligence assesses the quality of the target's processes, systems, and organizational capabilities. Legal due diligence reviews contracts, intellectual property, regulatory compliance, and potential liabilities. Cultural due diligence — often underestimated — evaluates the compatibility of the two organizations' values, management styles, and working practices.

Valuation is both an art and a science. Multiple methodologies exist, including discounted cash flow analysis, comparable company analysis, and precedent transaction analysis. Each method has strengths and limitations, and experienced professionals typically use several approaches to arrive at a fair price range. Overpaying for an acquisition is one of the most common and costly mistakes in business, as the acquirer must then generate sufficient returns to justify the premium paid.

Post-merger integration is widely recognized as the phase where most mergers and acquisitions succeed or fail. Combining two organizations — with different systems, processes, cultures, and people — is an enormously complex undertaking. Key integration decisions include organizational structure, technology platform consolidation, brand strategy, and retention of key talent. Stakeholders from both companies must negotiate new roles and responsibilities. Speed matters: research suggests that faster integration timelines correlate with better outcomes, as prolonged uncertainty demotivates employees and distracts management.

The track record of mergers and acquisitions is sobering. Studies consistently show that a significant percentage of deals fail to create the expected value for shareholders. However, the companies that approach mergers and acquisitions with rigorous strategic analysis, thorough due diligence, realistic valuation benchmarks, and disciplined integration planning — with sufficient budget allocated to each phase — significantly improve their odds. The ability to leverage the combined resources of two organizations, while maintaining the best elements of each company's culture and client relationships, is what separates transformative deals from value-destroying ones. Successful acquirers view the contract signing not as the finish line but as the starting point of the most challenging and important work.`,
    contentZh: `併購是企業所能做出的最具影響力的決策之一。無論企業是收購競爭對手以擴大市占率、與互補型公司合併以創造綜效，還是購買新創公司以取得創新技術，策略依據、執行品質和交易後的整合，都決定了這筆交易最終是創造還是摧毀價值。

併購的策略依據通常可歸為幾個類別。水平合併是將同產業的公司合併，以實現規模經濟、減少競爭並增強市場力量。垂直收購是將處於供應鏈不同階段的公司整合在一起，以獲得對原料供應或銷售通路的更大控制。多角化收購讓企業進入新市場或新產業，將風險分散到更廣泛的組合中。技術收購則讓成熟企業取得內部開發可能需要數年的創新能力。

盡職調查（due diligence）是在完成交易前徹底調查目標公司的關鍵流程。財務盡職調查檢視目標公司的營收、獲利能力、現金流、債務義務和會計實務。營運盡職調查評估目標公司的流程、系統和組織能力的品質。法律盡職調查審查合約、智慧財產權、法規遵循和潛在責任。文化盡職調查——往往被低估——則評估兩個組織在價值觀、管理風格和工作方式上的相容性。

估值既是藝術也是科學。存在多種方法論，包括現金流折現分析、可比公司分析和先例交易分析。每種方法都有其優勢和局限，經驗豐富的專業人員通常會使用多種方法來得出合理的價格區間。為收購出價過高是商業中最常見且最昂貴的錯誤之一，因為收購方之後必須產生足夠的報酬才能合理化所支付的溢價。

併購後的整合被廣泛認為是大多數併購案成敗的關鍵階段。合併兩個擁有不同系統、流程、文化和人員的組織，是一項極其複雜的工程。關鍵的整合決策包括組織架構、技術平台整合、品牌策略和關鍵人才的留任。來自兩家公司的利害關係人必須協商新的角色和職責。速度很重要：研究顯示，較快的整合時程與較好的結果相關，因為持續的不確定性會打擊員工士氣並分散管理層的注意力。

併購的歷史紀錄令人深思。研究一致顯示，相當比例的交易未能為股東創造預期的價值。然而，以嚴謹的策略分析、徹底的盡職調查、務實的估值基準和有紀律的整合規劃——並為每個階段分配充足預算——來進行併購的企業，能顯著提高成功機率。能夠善用兩個組織的合併資源，同時維持各自文化和客戶關係中最好的元素，正是區分「具轉型意義的交易」和「摧毀價值的交易」的關鍵。成功的收購方將合約簽署視為最具挑戰性和最重要工作的起點，而非終點線。`,
    domain: "business" as const,
    difficulty: 3,
    wordCount: 415,
    targetWords: ["b001", "b003", "b007", "b013", "b017"],
    questions: [
      {
        question: "What is 'due diligence' in the context of mergers and acquisitions?",
        options: ["A. The marketing campaign for announcing the merger", "B. The process of thoroughly investigating a target company before completing the transaction", "C. The negotiation of the final price", "D. The integration of two companies after the deal closes"],
        correctIndex: 1,
        explanation: "文章將盡職調查定義為「在完成交易前徹底調查目標公司的關鍵流程」，涵蓋財務、營運、法律和文化等多個面向的深入審查。",
      },
      {
        question: "Why does the article say cultural due diligence is often underestimated?",
        options: ["A. Because culture has no impact on business outcomes", "B. Because it implies that compatibility between organizations is critical but frequently overlooked", "C. Because it is the easiest part of due diligence", "D. Because culture cannot be measured or evaluated"],
        correctIndex: 1,
        explanation: "文章指出文化盡職調查「往往被低估」，但它評估的是兩個組織在價值觀、管理風格和工作方式上的相容性，這對併購成功至關重要卻經常被忽視。",
      },
      {
        question: "What does the high failure rate of mergers and acquisitions suggest?",
        options: ["A. Companies should never pursue mergers or acquisitions", "B. Only large companies can succeed at mergers", "C. Rigorous analysis, thorough due diligence, and disciplined integration are essential for success", "D. The failure rate is primarily caused by technology incompatibility"],
        correctIndex: 2,
        explanation: "文章指出雖然許多併購案未達預期，但以「嚴謹的策略分析、徹底的盡職調查、務實的估值基準和有紀律的整合規劃」進行的企業能顯著提高成功機率，顯示紀律和周全準備是成功關鍵。",
      },
    ],
  },

  // ===== DAILY / TRAVEL ARTICLES =====
  {
    id: "art-d01",
    title: "Tips for Your First Solo Trip",
    content: `Traveling alone for the first time can feel both exciting and intimidating. However, with proper preparation, solo travel can be one of the most rewarding experiences of your life.

Before you depart, research your destination thoroughly. Learn about local customs, transportation options, and safety tips. Make a reservation at your accommodation in advance, especially during peak tourist seasons. Having a confirmed place to stay removes a major source of stress.

Pack light but smart. Bring only the essentials and leave room in your luggage for souvenirs. A good rule is to lay out everything you think you need, then remove half of it. You'll be surprised how little you actually need.

Once you arrive, don't be afraid to talk to locals and other travelers. Many solo travelers say that the people they meet along the way become the highlight of their trip. Hostel common areas and local cafes are great places to start conversations.

Keep copies of important documents like your passport, itinerary, and hotel reservations. Store digital copies in your email or cloud storage as a backup.

Most importantly, trust your instincts. If something doesn't feel right, it's okay to change your plans. The beauty of solo travel is the freedom to go wherever you want, whenever you want.`,
    contentZh: `第一次獨自旅行可能會讓你既興奮又緊張。不過，只要做好充分的準備，獨旅可以成為你人生中最值得回味的經歷之一。

出發前，請徹底研究你的目的地。了解當地的風俗民情、交通方式和安全須知。提前預訂住宿，尤其是在旅遊旺季。確認好住處能大幅減輕你的壓力。

行李要輕便但聰明。只帶必需品，並在行李箱裡留些空間放紀念品。一個好方法是先把你覺得需要的東西全部攤開，然後拿掉一半。你會驚訝地發現，其實你真正需要的東西很少。

到達後，別害怕和當地人或其他旅客交流。許多獨旅者表示，旅途中遇到的人反而成了整趟旅程的亮點。青旅的公共區域和當地咖啡廳都是展開對話的好地方。

重要文件如護照、行程表和飯店訂房確認，請保留副本。在電子郵件或雲端存一份數位備份。

最重要的是，相信你的直覺。如果感覺不對勁，改變計畫也沒關係。獨旅最美好的地方，就是你可以隨心所欲、想去哪就去哪。`,
    domain: "daily",
    difficulty: 1,
    wordCount: 210,
    targetWords: ["d002", "d003", "d005", "d010"],
    questions: [
      {
        question: "What does the author recommend about packing?",
        options: ["Bring everything you might need", "Pack light and leave room for souvenirs", "Only bring one set of clothes", "Buy everything at your destination"],
        correctIndex: 1,
        explanation: "文章提到「Pack light but smart. Bring only the essentials and leave room in your luggage for souvenirs.」，建議輕裝出行並留空間放紀念品，因此答案是「輕裝出行並留空間放紀念品」。",
      },
      {
        question: "Where can solo travelers meet other people?",
        options: ["Only at tourist attractions", "At hostel common areas and local cafes", "Through social media only", "At the airport"],
        correctIndex: 1,
        explanation: "文章提到「Hostel common areas and local cafes are great places to start conversations.」，指出青旅公共區域和當地咖啡廳是認識人的好地方。",
      },
      {
        question: "What is the biggest advantage of solo travel according to the article?",
        options: ["It's cheaper", "The freedom to go wherever you want", "You don't need to plan", "You can avoid talking to people"],
        correctIndex: 1,
        explanation: "文章最後指出「The beauty of solo travel is the freedom to go wherever you want, whenever you want.」，強調獨旅最大的優點就是自由。",
      },
    ],
  },
  {
    id: "art-d02",
    title: "Healthy Habits for Busy Commuters",
    content: `For millions of people, the daily commute is an unavoidable part of life. While sitting in traffic or standing on a crowded train isn't ideal, there are ways to make your commute healthier and more productive.

First, consider your posture. Whether you're driving or sitting on public transport, poor posture can lead to back pain over time. Keep your back straight and your shoulders relaxed. If you're standing, distribute your weight evenly on both feet.

Second, use your commute time wisely. Instead of scrolling through social media, try listening to educational podcasts or audiobooks. This is a convenient way to learn something new without setting aside extra time in your day. Many people use their commute to study a new language or catch up on industry news.

Staying hydrated is also important. Keep a reusable water bottle with you and take sips throughout your journey. It's easy to forget to drink water when you're focused on getting to work.

If possible, incorporate some physical activity into your commute. Walk or cycle part of the way, or get off the bus one stop early and walk the rest. Even small amounts of exercise can make a significant difference in your overall health.

Finally, don't skip breakfast. Prepare something quick and nutritious the night before if mornings are hectic. A healthy breakfast gives you the energy you need to start the day right.`,
    contentZh: `對數百萬人來說，每天通勤是生活中無法避免的一部分。雖然塞在車陣裡或擠在擁擠的列車上並不理想，但有一些方法可以讓你的通勤更健康、更有效率。

首先，注意你的姿勢。不論你是開車還是坐大眾運輸，長期不良的姿勢會導致背痛。保持背部挺直、肩膀放鬆。如果你是站著的，把重心平均分配在雙腳上。

其次，善用通勤時間。與其滑社群媒體，不如試試聽教育類的 Podcast 或有聲書。這是一種方便的方式，不需要額外騰出時間就能學到新東西。很多人利用通勤時間學習新語言或掌握產業動態。

保持水分也很重要。隨身攜帶環保水壺，在路途中隨時補充水分。當你一心只想趕著上班時，很容易忘記喝水。

如果可以的話，把一些體能活動融入通勤中。走路或騎自行車走一段路，或者提前一站下公車，步行走完剩下的路程。即使是少量的運動，也能對你的整體健康產生顯著的影響。

最後，別跳過早餐。如果早上太匆忙，前一晚就準備一些快速又營養的食物。健康的早餐能為你提供一天所需的活力。`,
    domain: "daily",
    difficulty: 2,
    wordCount: 230,
    targetWords: ["d006", "d009", "d015"],
    questions: [
      {
        question: "What does the author suggest doing during commute time?",
        options: ["Sleep as much as possible", "Listen to educational podcasts or audiobooks", "Play mobile games", "Avoid all activities"],
        correctIndex: 1,
        explanation: "文章建議「Instead of scrolling through social media, try listening to educational podcasts or audiobooks.」，指出通勤時可以聽教育類 Podcast 或有聲書來善用時間。",
      },
      {
        question: "How can commuters add physical activity to their routine?",
        options: ["Go to the gym before work", "Walk or cycle part of the way", "Exercise at their desk", "Take the fastest route only"],
        correctIndex: 1,
        explanation: "文章提到「Walk or cycle part of the way, or get off the bus one stop early and walk the rest.」，建議步行或騎車走一段路來增加運動量。",
      },
      {
        question: "Why is breakfast important according to the article?",
        options: ["It helps you lose weight", "It gives energy to start the day", "It's a social activity", "It improves your posture"],
        correctIndex: 1,
        explanation: "文章最後指出「A healthy breakfast gives you the energy you need to start the day right.」，說明早餐能提供一天開始所需的能量。",
      },
    ],
  },

  // ===== ACADEMIC ARTICLES =====
  // --- Difficulty 1 (art-a01 to art-a10) ---
  {
    id: "art-a01",
    title: "The Science of Memory and Learning",
    content: `Understanding how memory works is crucial for anyone who wants to learn more effectively. Research in cognitive science has revealed several key principles that can significantly improve how we retain information.

The most well-known finding is the spacing effect. Studies show that distributing your study sessions over time is far more effective than cramming everything into one long session. For example, studying for 30 minutes each day over a week produces better results than studying for three hours the night before an exam. Researchers have gathered strong evidence that the brain needs time between sessions to process and store new material.

Another important concept is active recall, the practice of actively retrieving information from memory rather than passively reviewing it. Instead of simply re-reading your notes, try to recall the key points without looking. This process strengthens the neural pathways associated with that information and leads to significant improvements in retention.

The testing effect is closely related. Research has consistently shown that taking practice tests improves long-term retention more than additional study time. Even if you get answers wrong, the act of testing itself enhances memory. Scientists who analyze learning strategies often conclude that self-testing is the most efficient use of study time.

Sleep also plays a vital role in memory consolidation. During sleep, the brain processes and organizes information gathered during the day. Students who get adequate sleep after studying perform significantly better on subsequent tests.

Finally, connecting new information to existing knowledge helps create stronger memories. When you relate new concepts to things you already know, you create multiple retrieval pathways, making the information easier to access later. This principle is especially useful when preparing for standardized exams like the TOEIC.`,
    contentZh: `了解記憶的運作方式對任何想要更有效學習的人來說都至關重要。認知科學的研究揭示了幾個關鍵原則，可以顯著改善我們保留資訊的方式。

最著名的發現是間隔效應。研究表明，將學習時間分散在一段期間內，遠比將所有內容塞進一次長時間的學習中更有效。例如，在一週內每天學習30分鐘，比考試前一晚學習三個小時效果更好。研究人員已收集到強有力的證據，表明大腦需要課與課之間的時間來處理和儲存新教材。

另一個重要概念是主動回憶，即主動從記憶中提取資訊，而非被動地複習。與其單純重讀筆記，不如試著不看筆記回想要點。這個過程強化了與該資訊相關的神經通路，並帶來顯著的記憶改善。

測試效應與此密切相關。研究一致顯示，做練習測驗比額外的學習時間更能改善長期記憶保留。即使你答錯了，測試這個行為本身就能增強記憶。分析學習策略的科學家們經常得出結論：自我測試是學習時間最有效的利用方式。

睡眠在記憶鞏固中也扮演著至關重要的角色。在睡眠期間，大腦處理並組織白天收集的資訊。學習後獲得充足睡眠的學生在後續的測驗中表現顯著更好。

最後，將新資訊與現有知識連結有助於建立更強的記憶。當你將新概念與你已經知道的事情聯繫起來時，你會建立多個提取路徑，使資訊更容易在之後存取。這個原則在準備像多益這樣的標準化考試時特別有用。`,
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 253,
    targetWords: ["a001", "a002", "a004", "a005"],
    questions: [
      {
        question: "What is the 'spacing effect'?",
        options: ["A. Studying in a spacious room", "B. Distributing study sessions over time is more effective than cramming", "C. Taking long breaks between sentences", "D. Reading faster to cover more material"],
        correctIndex: 1,
        explanation: "文章解釋「間隔效應」是指「將學習時間分散在一段期間內比臨時抱佛腳更有效（distributing study sessions over time is more effective than cramming）」，因此答案為 B。",
      },
      {
        question: "What is 'active recall'?",
        options: ["A. Reading notes repeatedly", "B. Highlighting important text", "C. Actively retrieving information from memory", "D. Listening to lectures again"],
        correctIndex: 2,
        explanation: "文章將「主動回憶」定義為「主動從記憶中提取資訊（actively retrieving information from memory）」而非被動複習，因此答案為 C。",
      },
      {
        question: "How does sleep help with learning according to the article?",
        options: ["A. It has no effect on learning", "B. It helps the brain process and organize information", "C. It makes you forget useless information", "D. It only helps with physical recovery"],
        correctIndex: 1,
        explanation: "文章指出睡眠期間「大腦處理並組織白天收集的資訊（helps the brain process and organize information）」，因此答案為 B。",
      },
    ],
  },
  {
    id: "art-a02",
    title: "Climate Change: Causes and Consequences",
    content: `Climate change is one of the most significant challenges facing humanity today. The evidence gathered over decades of research leaves little doubt that human activities are driving major changes in Earth's climate system. Scientists around the world have worked to analyze the causes and effects of this global problem.

The primary cause of modern climate change is the burning of fossil fuels such as coal, oil, and natural gas. These activities release carbon dioxide and other greenhouse gases into the atmosphere. These gases trap heat from the sun, causing global temperatures to rise. Since the Industrial Revolution, atmospheric carbon dioxide levels have increased by over fifty percent.

The consequences of this warming are already visible around the world. Rising sea levels threaten coastal communities. More frequent and intense heat waves, storms, and droughts are affecting agriculture and water supplies. Many plant and animal species are struggling to adapt to rapidly changing conditions.

Scientists use climate models to project future scenarios. These models suggest that without significant reductions in greenhouse gas emissions, global temperatures could rise by two to four degrees Celsius by the end of this century. Such warming would have severe consequences for ecosystems and human societies.

However, there is still time to act. Transitioning to renewable energy sources, improving energy efficiency, and protecting forests can help reduce emissions. International cooperation is essential because climate change is a global phenomenon that requires coordinated action from all nations.

Understanding the connection between human activities and climate change is the first step toward finding solutions for our planet's future. Every individual, community, and government has a role to play in addressing this challenge.`,
    contentZh: `氣候變遷是當今人類面臨的最重大挑戰之一。數十年研究所收集的證據清楚顯示，人類活動正在推動地球氣候系統的重大變化。世界各地的科學家致力於分析這個全球問題的成因和影響。

現代氣候變遷的主要原因是燃燒化石燃料，如煤炭、石油和天然氣。這些活動將二氧化碳和其他溫室氣體釋放到大氣中。這些氣體會截留來自太陽的熱量，導致全球溫度上升。自工業革命以來，大氣中的二氧化碳含量已增加了百分之五十以上。

這種暖化的後果已經在全球各地可見。海平面上升威脅著沿海社區。更頻繁且更劇烈的熱浪、暴風雨和乾旱正在影響農業和水資源供應。許多動植物物種正在努力適應快速變化的環境條件。

科學家使用氣候模型來預測未來情境。這些模型表明，如果溫室氣體排放沒有顯著減少，到本世紀末全球溫度可能上升攝氏二到四度。這樣的暖化將對生態系統和人類社會造成嚴重的後果。

然而，我們仍有時間採取行動。轉向可再生能源、提高能源效率和保護森林，都可以幫助減少排放。國際合作至關重要，因為氣候變遷是一個需要所有國家協調行動的全球現象。

了解人類活動與氣候變遷之間的關聯，是為我們星球的未來尋找解決方案的第一步。每個個人、社區和政府都有責任應對這一挑戰。`,
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 252,
    targetWords: ["a004", "a001", "a002", "a009"],
    questions: [
      {
        question: "What is the primary cause of modern climate change according to the article?",
        options: ["A. Natural volcanic activity", "B. Changes in solar radiation", "C. The burning of fossil fuels", "D. Deforestation alone"],
        correctIndex: 2,
        explanation: "文章明確指出「現代氣候變遷的主要原因是燃燒化石燃料（the burning of fossil fuels）」如煤炭、石油和天然氣，因此答案為 C。",
      },
      {
        question: "What do climate models suggest will happen without emission reductions?",
        options: ["A. Temperatures will stay the same", "B. Temperatures could rise by two to four degrees Celsius", "C. Sea levels will decrease", "D. Forests will grow larger"],
        correctIndex: 1,
        explanation: "文章提到氣候模型表明「全球溫度可能上升攝氏二到四度（could rise by two to four degrees Celsius）」，因此答案為 B。",
      },
      {
        question: "What does the article say is needed to address climate change?",
        options: ["A. Individual action only", "B. International cooperation and coordinated action", "C. More research without taking any action", "D. Ignoring the problem until technology improves"],
        correctIndex: 1,
        explanation: "文章強調「國際合作至關重要，因為氣候變遷需要所有國家的協調行動（international cooperation and coordinated action）」，因此答案為 B。",
      },
    ],
  },
  {
    id: "art-a03",
    title: "Why We Sleep: The Science of Rest",
    content: `Sleep is one of the most important biological functions, yet many people do not get enough of it. Research shows that adults need seven to nine hours of sleep each night, but surveys indicate that a significant number of people regularly sleep less than six hours. Understanding why sleep matters can help us make better choices about our daily habits.

During sleep, the body goes through several stages, including light sleep, deep sleep, and rapid eye movement sleep. Each stage serves a different purpose. Deep sleep is especially important for physical recovery. The body repairs tissues, strengthens the immune system, and releases growth hormones during this stage. Rapid eye movement sleep, on the other hand, is closely linked to memory and learning. The brain processes information from the day and forms new connections during this phase.

Scientists have found strong evidence that sleep deprivation has serious consequences. People who do not get enough sleep are more likely to develop health problems such as heart disease, diabetes, and obesity. Sleep deprivation also affects mental health. Studies show a clear connection between poor sleep and higher rates of anxiety and depression.

Cognitive performance suffers greatly when people are sleep-deprived. Reaction times slow down, attention spans shorten, and decision-making becomes impaired. Some researchers conclude that being awake for twenty hours produces the same level of impairment as having a blood alcohol level above the legal limit.

Improving sleep habits does not have to be complicated. Experts recommend maintaining a consistent sleep schedule, avoiding screens before bedtime, keeping the bedroom cool and dark, and limiting caffeine in the afternoon. These simple changes can lead to significant improvements in both health and daily performance.`,
    contentZh: `睡眠是最重要的生物功能之一，但許多人的睡眠不足。研究顯示，成年人每晚需要七到九小時的睡眠，但調查表明，相當數量的人經常睡不到六小時。了解睡眠為何重要，可以幫助我們對日常習慣做出更好的選擇。

在睡眠期間，身體經歷幾個階段，包括淺睡、深睡和快速動眼期。每個階段有不同的功用。深睡對身體恢復特別重要。身體在這個階段修復組織、強化免疫系統並釋放生長激素。另一方面，快速動眼期與記憶和學習密切相關。大腦在這個階段處理白天的資訊並形成新的連結。

科學家發現了強有力的證據，證明睡眠不足有嚴重的後果。睡眠不足的人更容易出現心臟病、糖尿病和肥胖等健康問題。睡眠不足也影響心理健康。研究顯示，睡眠品質差與較高的焦慮和憂鬱率之間有明確的關聯。

當人們睡眠不足時，認知表現會大幅下降。反應時間變慢，注意力持續時間縮短，決策能力受損。一些研究人員得出結論，保持清醒二十個小時所產生的損害程度，等同於血液酒精濃度超過法定上限。

改善睡眠習慣不一定很複雜。專家建議維持一致的作息時間、睡前避免使用螢幕、保持臥室涼爽且黑暗，以及下午限制咖啡因攝取。這些簡單的改變可以帶來健康和日常表現的顯著改善。`,
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 258,
    targetWords: ["a004", "a002", "a005"],
    questions: [
      {
        question: "What happens during deep sleep?",
        options: ["A. The brain processes memories", "B. The body repairs tissues and releases growth hormones", "C. People dream the most", "D. Blood pressure increases"],
        correctIndex: 1,
        explanation: "文章提到深睡期間「身體修復組織並釋放生長激素（the body repairs tissues and releases growth hormones）」，因此答案為 B。",
      },
      {
        question: "What is one consequence of sleep deprivation mentioned in the article?",
        options: ["A. Improved creativity", "B. Higher rates of anxiety and depression", "C. Better physical performance", "D. Increased appetite for healthy food"],
        correctIndex: 1,
        explanation: "文章指出睡眠不足的後果之一是「較高的焦慮和憂鬱率（higher rates of anxiety and depression）」，因此答案為 B。",
      },
      {
        question: "Which of the following is recommended for improving sleep?",
        options: ["A. Exercising right before bedtime", "B. Drinking coffee in the evening", "C. Maintaining a consistent sleep schedule", "D. Sleeping in a warm, bright room"],
        correctIndex: 2,
        explanation: "文章建議「維持一致的作息時間（maintaining a consistent sleep schedule）」來改善睡眠，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-a04",
    title: "Nutrition Science: What Your Body Needs",
    content: `Good nutrition is the foundation of a healthy life. While there is a lot of conflicting information about diets, the basic principles of nutrition science are well established and supported by decades of evidence. Understanding these principles can help people make better food choices.

The human body requires three main types of nutrients, known as macronutrients: carbohydrates, proteins, and fats. Carbohydrates are the body's primary source of energy. They are found in foods such as bread, rice, fruits, and vegetables. Proteins are essential for building and repairing tissues. Good sources include meat, fish, eggs, and beans. Fats, though often misunderstood, are also vital. They help the body absorb vitamins, protect organs, and provide long-lasting energy.

In addition to macronutrients, the body needs micronutrients, which include vitamins and minerals. These are required in smaller amounts but are equally important. For example, vitamin D helps the body absorb calcium for strong bones, while iron is necessary for carrying oxygen in the blood. A deficiency in any micronutrient can lead to significant health problems.

One important concept in nutrition science is the idea of a balanced diet. Rather than focusing on a single food or nutrient, experts recommend eating a variety of foods from all food groups. This approach ensures that the body receives all the nutrients it needs in the right proportions.

Recent research has also highlighted the importance of gut health. The digestive system contains trillions of bacteria that play a role in digestion, immune function, and even mental health. Eating fiber-rich foods and fermented products can support a healthy gut environment.

Making informed food choices does not require extreme diets or expensive supplements. By understanding the basics of nutrition science and applying that knowledge to daily meals, anyone can improve their overall health and well-being.`,
    contentZh: `良好的營養是健康生活的基礎。雖然關於飲食有很多相互矛盾的資訊，但營養科學的基本原則已被幾十年的證據所充分建立和支持。了解這些原則可以幫助人們做出更好的飲食選擇。

人體需要三種主要類型的營養素，稱為巨量營養素：碳水化合物、蛋白質和脂肪。碳水化合物是身體的主要能量來源，存在於麵包、米飯、水果和蔬菜等食物中。蛋白質對於建造和修復組織至關重要，良好的來源包括肉類、魚類、蛋和豆類。脂肪雖然經常被誤解，但也是不可或缺的。它們幫助身體吸收維生素、保護器官並提供持久的能量。

除了巨量營養素外，身體還需要微量營養素，包括維生素和礦物質。這些需要的量較少，但同樣重要。例如，維生素D幫助身體吸收鈣質以強健骨骼，而鐵則是血液中攜帶氧氣所必需的。任何微量營養素的缺乏都可能導致重大的健康問題。

營養科學中一個重要的概念是均衡飲食的理念。專家建議不要專注於單一食物或營養素，而是應該從所有食物類群中攝取多種食物。這種方法確保身體以正確的比例獲得所需的所有營養素。

近期研究還強調了腸道健康的重要性。消化系統包含數兆細菌，在消化、免疫功能甚至心理健康中扮演角色。食用富含纖維的食物和發酵食品可以支持健康的腸道環境。

做出明智的食物選擇不需要極端的飲食或昂貴的補充品。透過了解營養科學的基礎知識並將其應用於日常飲食，任何人都可以改善整體健康和福祉。`,
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 280,
    targetWords: ["a002", "a004", "a001"],
    questions: [
      {
        question: "What are the three macronutrients mentioned in the article?",
        options: ["A. Vitamins, minerals, and water", "B. Carbohydrates, proteins, and fats", "C. Calcium, iron, and vitamin D", "D. Fiber, sugar, and salt"],
        correctIndex: 1,
        explanation: "文章列出三種巨量營養素為「碳水化合物、蛋白質和脂肪（carbohydrates, proteins, and fats）」，因此答案為 B。",
      },
      {
        question: "Why are micronutrients important?",
        options: ["A. They provide most of the body's energy", "B. They are required in large amounts daily", "C. A deficiency can lead to significant health problems", "D. They are only found in supplements"],
        correctIndex: 2,
        explanation: "文章指出微量營養素重要是因為「任何微量營養素的缺乏都可能導致重大的健康問題（a deficiency can lead to significant health problems）」，因此答案為 C。",
      },
      {
        question: "What does the article suggest about achieving good nutrition?",
        options: ["A. Follow extreme diets for fast results", "B. Focus on eating one type of food", "C. Eat a variety of foods from all food groups", "D. Take as many supplements as possible"],
        correctIndex: 2,
        explanation: "文章建議「從所有食物類群中攝取多種食物（eat a variety of foods from all food groups）」來實現良好營養，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-a05",
    title: "Space Exploration: Our Journey Beyond Earth",
    content: `Humans have always looked up at the stars with curiosity and wonder. Space exploration has been one of the most remarkable achievements of modern science, pushing the boundaries of what we know about the universe.

The space age began in 1957 when the Soviet Union launched Sputnik, the first artificial satellite, into orbit around Earth. This event marked a significant milestone in human history. Just twelve years later, in 1969, American astronauts landed on the Moon for the first time. The Apollo 11 mission demonstrated that humans could travel beyond Earth and survive in the harsh environment of space.

Since those early days, space exploration has continued to advance. The International Space Station, launched in 1998, has served as a laboratory where scientists from many countries conduct research in zero gravity. Studies on the station have provided valuable evidence about how the human body adapts to space and have led to discoveries in medicine, materials science, and environmental monitoring.

In recent years, private companies have played an increasingly important role in space exploration. Organizations like SpaceX and Blue Origin are developing reusable rockets that make space travel more affordable. These companies aim to make space accessible not only to trained astronauts but eventually to ordinary citizens.

Looking to the future, many space agencies are planning missions to Mars. Scientists want to analyze the planet's soil and atmosphere to determine whether life ever existed there. Some researchers even envision building permanent settlements on Mars within the next few decades.

Space exploration has also given us a new perspective on our own planet. Photographs of Earth taken from space have helped people understand how fragile our planet is and why protecting its environment matters. The knowledge gained from exploring space continues to benefit life on Earth in countless ways.`,
    contentZh: `人類一直帶著好奇和驚嘆仰望星空。太空探索是現代科學最非凡的成就之一，不斷拓展我們對宇宙的認知疆界。

太空時代始於1957年，蘇聯發射了人造衛星史普尼克號進入地球軌道。這一事件標誌著人類歷史的一個重要里程碑。僅僅十二年後的1969年，美國太空人首次登陸月球。阿波羅11號任務證明了人類可以離開地球，在太空的嚴酷環境中生存。

從那些早期日子以來，太空探索持續進步。1998年發射的國際太空站作為一個實驗室，來自許多國家的科學家在零重力環境下進行研究。太空站上的研究提供了關於人體如何適應太空的寶貴證據，並在醫學、材料科學和環境監測方面取得了發現。

近年來，私人公司在太空探索中扮演著越來越重要的角色。SpaceX和Blue Origin等組織正在開發可重複使用的火箭，使太空旅行更加經濟實惠。這些公司的目標是讓太空不僅對訓練有素的太空人開放，最終也對普通公民開放。

展望未來，許多太空機構正在計畫火星任務。科學家想要分析火星的土壤和大氣層，以確定那裡是否曾經存在過生命。一些研究人員甚至設想在未來幾十年內在火星上建立永久定居點。

太空探索也給了我們看待自己星球的新視角。從太空拍攝的地球照片幫助人們了解我們的星球是多麼脆弱，以及為什麼保護其環境很重要。從探索太空中獲得的知識持續以無數方式造福地球上的生活。`,
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 276,
    targetWords: ["a004", "a002", "a001", "a008"],
    questions: [
      {
        question: "What was Sputnik?",
        options: ["A. The first manned spacecraft", "B. The first artificial satellite launched into orbit", "C. A space station built in 1998", "D. A Mars rover"],
        correctIndex: 1,
        explanation: "文章說明史普尼克號是「蘇聯發射的第一顆進入軌道的人造衛星（the first artificial satellite launched into orbit）」，因此答案為 B。",
      },
      {
        question: "What is one purpose of the International Space Station?",
        options: ["A. To serve as a tourist destination", "B. To store supplies for Mars missions", "C. To conduct scientific research in zero gravity", "D. To monitor military activities on Earth"],
        correctIndex: 2,
        explanation: "文章提到國際太空站的目的之一是「在零重力環境下進行科學研究（conduct scientific research in zero gravity）」，因此答案為 C。",
      },
      {
        question: "What do scientists hope to learn from future Mars missions?",
        options: ["A. How to build faster rockets", "B. Whether life ever existed on Mars", "C. How to mine minerals for profit", "D. How to redirect asteroids"],
        correctIndex: 1,
        explanation: "文章指出科學家希望從火星任務中了解「那裡是否曾經存在過生命（whether life ever existed on Mars）」，因此答案為 B。",
      },
    ],
  },
  {
    id: "art-a06",
    title: "The Psychology of Habits",
    content: `Have you ever wondered why some habits are so hard to break while others are easy to form? Psychologists have studied habits for decades and have identified key patterns that explain how habits work and how they can be changed.

According to research, every habit follows a simple cycle known as the habit loop. This loop consists of three parts: a cue, a routine, and a reward. The cue is a trigger that tells your brain to start the behavior. The routine is the behavior itself. The reward is the benefit you get from performing the behavior. For example, feeling stressed at work is the cue, eating a snack is the routine, and feeling temporarily better is the reward.

Understanding this loop is significant because it provides a framework for changing unwanted habits. Research shows that it is very difficult to eliminate a habit entirely. However, you can replace the routine while keeping the same cue and reward. If stress triggers snacking, you might replace eating with taking a short walk. The cue and reward remain the same, but the behavior changes.

Studies also show that it takes time to form new habits. While popular culture suggests it takes twenty-one days, the evidence indicates that it actually takes an average of sixty-six days for a new behavior to become automatic. The exact time varies depending on the complexity of the habit and the individual.

Environment plays an important role as well. People are more likely to maintain good habits when their surroundings support those behaviors. For instance, keeping healthy food visible in the kitchen makes it easier to eat well. Removing distractions from your desk makes it easier to focus on work.

Scientists conclude that small, consistent changes are more effective than dramatic overhauls. By understanding the science behind habits, anyone can gradually build better routines and improve their daily life.`,
    contentZh: `你是否曾經好奇為什麼有些習慣那麼難以打破，而其他習慣卻很容易養成？心理學家研究習慣已有數十年，並找出了解釋習慣如何運作以及如何改變的關鍵模式。

根據研究，每個習慣都遵循一個稱為「習慣迴路」的簡單循環。這個迴路由三個部分組成：提示、慣例和獎勵。提示是告訴你的大腦開始行為的觸發因素。慣例是行為本身。獎勵是你從執行行為中獲得的好處。例如，在工作中感到壓力是提示，吃零食是慣例，暫時感覺好一些是獎勵。

理解這個迴路很重要，因為它提供了改變不良習慣的框架。研究顯示，要完全消除一個習慣是非常困難的。然而，你可以在保持相同提示和獎勵的同時替換慣例。如果壓力觸發了吃零食，你可以用短暫散步來代替吃東西。提示和獎勵保持不變，但行為改變了。

研究還表明，養成新習慣需要時間。雖然流行文化認為需要二十一天，但證據表明實際上平均需要六十六天新行為才會變得自動化。確切的時間取決於習慣的複雜程度和個人差異。

環境也扮演重要角色。當周圍環境支持這些行為時，人們更容易維持好習慣。例如，把健康的食物放在廚房裡看得見的地方，讓人更容易吃得健康。從桌面上移除干擾因素，讓人更容易專心工作。

科學家得出結論，小而持續的改變比戲劇性的大翻修更有效。透過了解習慣背後的科學，任何人都可以逐步建立更好的日常慣例並改善生活。`,
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 296,
    targetWords: ["a004", "a002", "a005"],
    questions: [
      {
        question: "What are the three parts of the habit loop?",
        options: ["A. Thought, action, and result", "B. Cue, routine, and reward", "C. Problem, solution, and feedback", "D. Input, process, and output"],
        correctIndex: 1,
        explanation: "文章指出習慣迴路的三個部分是「提示、慣例和獎勵（cue, routine, and reward）」，因此答案為 B。",
      },
      {
        question: "How long does it actually take to form a new habit on average?",
        options: ["A. Seven days", "B. Twenty-one days", "C. Sixty-six days", "D. One hundred days"],
        correctIndex: 2,
        explanation: "文章提到養成新習慣平均需要「六十六天（sixty-six days）」，而非流行文化中說的二十一天，因此答案為 C。",
      },
      {
        question: "What does the article recommend for changing a bad habit?",
        options: ["A. Stop the behavior immediately and permanently", "B. Replace the routine while keeping the same cue and reward", "C. Avoid all situations that trigger the habit", "D. Punish yourself every time you repeat the habit"],
        correctIndex: 1,
        explanation: "文章建議「在保持相同提示和獎勵的同時替換慣例（replace the routine while keeping the same cue and reward）」來改變壞習慣，因此答案為 B。",
      },
    ],
  },
  {
    id: "art-a07",
    title: "Renewable Energy: Powering a Sustainable Future",
    content: `As the world faces the challenges of climate change and depleting fossil fuel reserves, renewable energy has become a critical topic of discussion. Renewable energy comes from natural sources that are constantly replenished, such as sunlight, wind, and water. Unlike fossil fuels, these sources do not produce harmful greenhouse gases when used to generate electricity.

Solar energy is one of the most rapidly growing renewable sources. Solar panels convert sunlight directly into electricity using photovoltaic cells. The cost of solar panels has dropped significantly over the past decade, making solar power increasingly affordable for homes and businesses. Many countries have set ambitious goals to increase their solar energy capacity in the coming years.

Wind energy is another important source. Wind turbines capture the kinetic energy of moving air and convert it into electricity. Wind farms can be built on land or offshore. Offshore wind farms are particularly effective because winds over the ocean are generally stronger and more consistent than those on land.

Hydroelectric power has been used for over a century. It generates electricity by using the force of flowing water to spin turbines. Large dams are the most common form, but smaller systems that use river currents without dams are also becoming popular. Hydroelectric power is reliable and produces very low emissions.

Despite their advantages, renewable energy sources face challenges. Solar and wind energy are intermittent, meaning they depend on weather conditions. Energy storage technology, particularly advanced batteries, is essential for ensuring a steady supply of power when the sun is not shining or the wind is not blowing.

The transition to renewable energy is not just an environmental necessity but also an economic opportunity. The renewable energy sector is creating millions of jobs worldwide. By investing in clean energy, societies can reduce pollution, combat climate change, and build a more sustainable future for coming generations.`,
    contentZh: `隨著世界面臨氣候變遷和化石燃料儲量耗竭的挑戰，可再生能源已成為一個關鍵的討論議題。可再生能源來自不斷補充的自然來源，如陽光、風力和水力。與化石燃料不同，這些來源在用於發電時不會產生有害的溫室氣體。

太陽能是增長最快速的可再生能源之一。太陽能板使用光伏電池將陽光直接轉換為電力。太陽能板的成本在過去十年中大幅下降，使太陽能對家庭和企業來說越來越負擔得起。許多國家已設定雄心勃勃的目標，要在未來幾年增加太陽能發電容量。

風力能源是另一個重要的來源。風力渦輪機捕捉移動空氣的動能並將其轉換為電力。風力發電場可以建在陸地上或離岸。離岸風力發電場特別有效，因為海上的風通常比陸地上的更強且更穩定。

水力發電已使用超過一個世紀。它利用流水的力量轉動渦輪機來發電。大型水壩是最常見的形式，但不需要水壩的較小系統也越來越受歡迎。水力發電可靠且排放量極低。

儘管有諸多優勢，可再生能源也面臨挑戰。太陽能和風力能源是間歇性的，意味著它們取決於天氣條件。能源儲存技術，特別是先進電池，對於確保在太陽不照耀或風不吹時有穩定的電力供應至關重要。

向可再生能源的轉型不僅是環境必要性，也是經濟機會。可再生能源產業在全球範圍內創造了數百萬個工作機會。透過投資清潔能源，社會可以減少污染、對抗氣候變遷，並為後代建設一個更永續的未來。`,
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 286,
    targetWords: ["a004", "a002", "a005"],
    questions: [
      {
        question: "What is one advantage of renewable energy over fossil fuels?",
        options: ["A. It is always cheaper", "B. It does not produce greenhouse gases during generation", "C. It can be used without any technology", "D. It provides more energy per unit"],
        correctIndex: 1,
        explanation: "文章指出可再生能源的優勢之一是「在發電時不會產生溫室氣體（does not produce greenhouse gases during generation）」，因此答案為 B。",
      },
      {
        question: "Why are offshore wind farms particularly effective?",
        options: ["A. They are cheaper to build", "B. Ocean winds are stronger and more consistent", "C. They do not require turbines", "D. They can also generate solar power"],
        correctIndex: 1,
        explanation: "文章解釋離岸風力發電場特別有效是因為「海上的風通常更強且更穩定（ocean winds are stronger and more consistent）」，因此答案為 B。",
      },
      {
        question: "What is the main challenge facing solar and wind energy?",
        options: ["A. They are too expensive to install", "B. They require fossil fuels to operate", "C. They are intermittent and depend on weather conditions", "D. They cannot generate enough electricity"],
        correctIndex: 2,
        explanation: "文章指出太陽能和風力能源面臨的主要挑戰是「它們是間歇性的，取決於天氣條件（they are intermittent and depend on weather conditions）」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-a08",
    title: "Biodiversity: Why Every Species Matters",
    content: `Biodiversity refers to the variety of life on Earth, including all plants, animals, fungi, and microorganisms. It also includes the ecosystems they form and the genetic diversity within each species. Biodiversity is essential for the health of our planet, yet it is declining at an alarming rate.

Scientists estimate that there are approximately eight million species on Earth, but many have not yet been discovered or described. Each species plays a specific role in its ecosystem. For example, bees and other pollinators are essential for the reproduction of many flowering plants, including crops that humans depend on for food. Without pollinators, food production would decline significantly.

Ecosystems with high biodiversity tend to be more stable and resilient. When an ecosystem has many different species, it can better withstand disturbances such as disease outbreaks or extreme weather events. If one species is lost, others can often fill its role. However, in ecosystems with low biodiversity, the loss of even a single species can have serious consequences.

Human activities are the main driver of biodiversity loss. Habitat destruction, pollution, overexploitation of natural resources, and climate change are all contributing to the decline of species worldwide. The evidence shows that the current rate of species extinction is between one hundred and one thousand times higher than the natural background rate.

Conservation efforts are crucial for protecting biodiversity. These efforts include creating protected areas, restoring damaged ecosystems, and enforcing laws against poaching and illegal trade in wildlife. Education also plays an important role in raising awareness about the value of biodiversity.

Every species, no matter how small, contributes to the complex web of life that sustains our planet. Protecting biodiversity is not only an ethical responsibility but also a practical necessity for human survival and well-being.`,
    contentZh: `生物多樣性是指地球上生命的多樣性，包括所有的植物、動物、真菌和微生物。它也包括它們所形成的生態系統以及每個物種內部的遺傳多樣性。生物多樣性對我們星球的健康至關重要，但正在以驚人的速度下降。

科學家估計地球上大約有八百萬個物種，但許多尚未被發現或描述。每個物種在其生態系統中都扮演著特定的角色。例如，蜜蜂和其他授粉者對許多開花植物的繁殖至關重要，包括人類依賴的糧食作物。沒有授粉者，糧食生產將大幅下降。

具有高生物多樣性的生態系統往往更穩定、更有韌性。當一個生態系統擁有許多不同的物種時，它能更好地承受疾病爆發或極端天氣事件等干擾。如果一個物種消失了，其他物種通常可以填補它的角色。然而，在低生物多樣性的生態系統中，即使失去一個物種也可能造成嚴重後果。

人類活動是生物多樣性喪失的主要驅動因素。棲息地破壞、污染、自然資源過度開發和氣候變遷都在全球範圍內導致物種數量下降。證據顯示，目前的物種滅絕速率是自然背景速率的一百到一千倍。

保育工作對保護生物多樣性至關重要。這些工作包括建立保護區、恢復受損的生態系統，以及執行反盜獵和非法野生動物貿易的法律。教育在提高人們對生物多樣性價值的認識方面也扮演著重要角色。

每一個物種，無論多麼微小，都為維繫我們星球的複雜生命之網做出貢獻。保護生物多樣性不僅是道德責任，也是人類生存和福祉的實際必需。`,
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 272,
    targetWords: ["a004", "a002", "a001"],
    questions: [
      {
        question: "What does biodiversity refer to?",
        options: ["A. Only the number of animal species in a region", "B. The variety of all life on Earth including ecosystems and genetic diversity", "C. The total number of trees in a forest", "D. Only endangered species in the wild"],
        correctIndex: 1,
        explanation: "文章定義生物多樣性為「地球上所有生命的多樣性，包括生態系統和遺傳多樣性（the variety of all life on Earth including ecosystems and genetic diversity）」，因此答案為 B。",
      },
      {
        question: "Why are ecosystems with high biodiversity more stable?",
        options: ["A. They have more space for organisms", "B. They receive more sunlight", "C. When one species is lost, others can fill its role", "D. They have fewer predators"],
        correctIndex: 2,
        explanation: "文章解釋高生物多樣性的生態系統更穩定，因為「當一個物種消失時，其他物種可以填補其角色（when one species is lost, others can fill its role）」，因此答案為 C。",
      },
      {
        question: "What is the main cause of biodiversity loss according to the article?",
        options: ["A. Natural disasters", "B. Climate cycles", "C. Human activities", "D. Asteroid impacts"],
        correctIndex: 2,
        explanation: "文章明確指出「人類活動（human activities）」是生物多樣性喪失的主要原因，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-a09",
    title: "The History of the Internet",
    content: `The internet is one of the most transformative inventions in human history, yet its origins are surprisingly modest. What began as a small military research project in the 1960s has grown into a global network that connects billions of people and shapes nearly every aspect of modern life.

The story begins with ARPANET, a network created by the United States Department of Defense in 1969. ARPANET was designed to allow researchers at different universities to share information and computing resources. The first message sent over ARPANET was from the University of California, Los Angeles, to Stanford Research Institute. The system crashed after transmitting just two letters, but this small event marked the beginning of a revolution.

Throughout the 1970s and 1980s, the network expanded and the technology improved. Researchers developed key protocols, including TCP/IP, which became the standard method for transmitting data across networks. These protocols allowed different computer networks to connect with each other, creating the foundation for what we now call the internet.

The World Wide Web, invented by Tim Berners-Lee in 1989, made the internet accessible to ordinary people. Before the web, using the internet required significant technical knowledge. The web introduced web pages, hyperlinks, and browsers that made information easy to find and share. This innovation led to rapid growth in internet use during the 1990s.

Today, the internet has become an essential part of daily life. People use it for communication, education, entertainment, shopping, and work. Social media platforms connect people across the globe. The evidence clearly shows that the internet has changed how we access information and interact with each other.

However, the internet also raises important questions about privacy, security, and the spread of misinformation. As the technology continues to evolve, society must find ways to address these challenges while preserving the benefits that the internet provides.`,
    contentZh: `網際網路是人類歷史上最具變革性的發明之一，但其起源卻令人意外地簡樸。最初只是1960年代的一個小型軍事研究專案，如今已發展成為連接數十億人並影響現代生活幾乎所有面向的全球網路。

故事始於ARPANET，這是美國國防部在1969年建立的網路。ARPANET的設計目的是讓不同大學的研究人員能夠共享資訊和計算資源。透過ARPANET發送的第一條訊息是從加州大學洛杉磯分校發送到史丹佛研究院的。系統在傳輸了僅僅兩個字母後就崩潰了，但這個小事件標誌著一場革命的開始。

在1970年代和1980年代，網路不斷擴展，技術也在改進。研究人員開發了關鍵的通訊協定，包括TCP/IP，它成為在網路之間傳輸數據的標準方法。這些協定允許不同的電腦網路相互連接，為我們現在所稱的網際網路奠定了基礎。

提姆・柏納斯-李在1989年發明的全球資訊網讓一般人也能使用網際網路。在此之前，使用網際網路需要大量的技術知識。全球資訊網引入了網頁、超連結和瀏覽器，使資訊更容易查找和分享。這項創新導致1990年代網際網路使用的快速增長。

今天，網際網路已成為日常生活中不可或缺的一部分。人們用它來溝通、學習、娛樂、購物和工作。社群媒體平台將全球各地的人們連結在一起。證據清楚顯示，網際網路已經改變了我們獲取資訊和相互互動的方式。

然而，網際網路也引發了關於隱私、安全和假訊息傳播的重要問題。隨著技術的持續演進，社會必須找到在保留網際網路所帶來好處的同時，應對這些挑戰的方法。`,
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 296,
    targetWords: ["a004", "a002", "a005"],
    questions: [
      {
        question: "What was ARPANET originally designed for?",
        options: ["A. Online shopping", "B. Social media networking", "C. Sharing information among researchers at universities", "D. Entertainment purposes"],
        correctIndex: 2,
        explanation: "文章說明 ARPANET 最初的設計目的是「讓不同大學的研究人員共享資訊（sharing information among researchers at universities）」，因此答案為 C。",
      },
      {
        question: "Who invented the World Wide Web?",
        options: ["A. Bill Gates", "B. Steve Jobs", "C. Tim Berners-Lee", "D. Mark Zuckerberg"],
        correctIndex: 2,
        explanation: "文章明確提到全球資訊網是由「提姆・柏納斯-李（Tim Berners-Lee）」在1989年發明的，因此答案為 C。",
      },
      {
        question: "What challenge does the article mention about the internet?",
        options: ["A. It is too slow for modern use", "B. It raises questions about privacy and misinformation", "C. It is only available in wealthy countries", "D. It cannot support video content"],
        correctIndex: 1,
        explanation: "文章提到網際網路「引發了關於隱私和假訊息傳播的問題（raises questions about privacy and misinformation）」，因此答案為 B。",
      },
    ],
  },
  {
    id: "art-a10",
    title: "Cognitive Biases: How Our Thinking Tricks Us",
    content: `Every day, humans make thousands of decisions, from what to eat for breakfast to how to respond to a work email. While we like to think of ourselves as rational beings, research in psychology reveals that our thinking is often influenced by cognitive biases, systematic patterns of deviation from logical judgment.

One of the most common cognitive biases is confirmation bias. This is the tendency to search for, interpret, and remember information that confirms our existing beliefs while ignoring evidence that contradicts them. For example, if someone believes that a particular diet is effective, they may pay attention only to success stories and dismiss studies that show the diet does not work. This bias makes it difficult to evaluate information objectively.

Another well-known bias is the anchoring effect. When making decisions, people tend to rely heavily on the first piece of information they encounter. For instance, if a store displays a shirt with an original price of one hundred dollars marked down to fifty dollars, shoppers perceive it as a good deal, even if the shirt is only worth thirty dollars. The original price serves as an anchor that influences their judgment.

The availability heuristic is also significant. People tend to judge the likelihood of events based on how easily examples come to mind. After seeing news reports about airplane crashes, many people overestimate the danger of flying, even though statistics show that flying is much safer than driving. The vivid images from news coverage make the risk seem greater than it actually is.

Understanding cognitive biases is important because they affect not only individual decisions but also public opinion, business strategies, and government policies. By becoming aware of these biases, people can learn to analyze information more carefully and make better decisions. Critical thinking skills are essential tools for overcoming the limitations of our natural thought processes.`,
    contentZh: `每天，人類做出數千個決定，從早餐吃什麼到如何回覆工作郵件。雖然我們喜歡認為自己是理性的，但心理學研究揭示，我們的思維經常受到認知偏誤的影響——即系統性地偏離邏輯判斷的模式。

最常見的認知偏誤之一是確認偏誤。這是一種傾向，會搜尋、詮釋和記住那些證實我們既有信念的資訊，同時忽略與之矛盾的證據。例如，如果某人相信某種特定飲食是有效的，他們可能只關注成功案例，而忽略顯示該飲食無效的研究。這種偏誤使得客觀地評估資訊變得困難。

另一個廣為人知的偏誤是錨定效應。在做決定時，人們傾向於過度依賴他們遇到的第一條資訊。例如，如果一家商店展示一件原價一百元的襯衫，折扣後為五十元，購物者會認為這是一筆好交易，即使這件襯衫只值三十元。原價充當了影響他們判斷的錨點。

可得性捷思法也很重要。人們傾向於根據能多容易想到例子來判斷事件發生的可能性。在看到關於飛機失事的新聞報導後，許多人會高估飛行的危險性，即使統計數據顯示飛行比開車安全得多。新聞報導中的生動畫面使風險看起來比實際更大。

了解認知偏誤很重要，因為它們不僅影響個人決策，還影響公眾輿論、商業策略和政府政策。透過意識到這些偏誤，人們可以學會更仔細地分析資訊並做出更好的決定。批判性思維技能是克服我們自然思維過程局限性的重要工具。`,
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 293,
    targetWords: ["a001", "a002", "a004", "a005"],
    questions: [
      {
        question: "What is confirmation bias?",
        options: ["A. The tendency to agree with authority figures", "B. The tendency to seek information that confirms existing beliefs", "C. The tendency to make quick decisions", "D. The tendency to follow the crowd"],
        correctIndex: 1,
        explanation: "文章將確認偏誤定義為「搜尋、詮釋和記住證實既有信念的資訊的傾向（the tendency to seek information that confirms existing beliefs）」，因此答案為 B。",
      },
      {
        question: "How does the anchoring effect influence decision-making?",
        options: ["A. People always choose the cheapest option", "B. People rely heavily on the first piece of information they encounter", "C. People make decisions based on expert advice only", "D. People avoid making decisions altogether"],
        correctIndex: 1,
        explanation: "文章解釋錨定效應是指「人們過度依賴他們遇到的第一條資訊（people rely heavily on the first piece of information they encounter）」來做決定，因此答案為 B。",
      },
      {
        question: "What is the main purpose of this article?",
        options: ["A. To prove that humans cannot think logically", "B. To explain common cognitive biases and why awareness of them matters", "C. To advertise a new method of decision-making", "D. To criticize the field of psychology"],
        correctIndex: 1,
        explanation: "文章的主要目的是「解釋常見的認知偏誤以及為什麼了解它們很重要（explain common cognitive biases and why awareness of them matters）」，因此答案為 B。",
      },
    ],
  },
  // --- Difficulty 2 (art-a11 to art-a20) ---
  {
    id: "art-a11",
    title: "Artificial Intelligence Ethics: Navigating New Challenges",
    content: `Artificial intelligence is transforming industries from healthcare to transportation, but this rapid advancement has raised significant ethical questions that society must address. As AI systems become more sophisticated and influential, the implications of their design and deployment demand careful examination.

One of the most pressing concerns is algorithmic bias. AI systems learn from data, and if the training data reflects existing societal biases, the system will reproduce and sometimes amplify those biases. For example, studies have shown that some facial recognition systems perform less accurately on people with darker skin tones. This phenomenon occurs because the training data contained a disproportionate number of lighter-skinned faces. When such systems are used in law enforcement or hiring, the consequences can be severe and discriminatory.

Privacy is another critical issue. AI-powered surveillance systems can track individuals across cities, analyze their behavior patterns, and predict their future actions. While proponents argue that such technology enhances public safety, critics point out that mass surveillance undermines fundamental rights. The criteria for when and how AI surveillance should be deployed remain hotly debated.

The question of accountability is equally complex. When an autonomous vehicle causes an accident, who is responsible: the manufacturer, the software developer, or the owner? Current legal frameworks were not designed to address situations where machines make independent decisions. Implementing clear guidelines for AI accountability is essential but difficult.

Employment disruption is a further concern. AI and automation are expected to replace millions of jobs in the coming decades. While new jobs will be created, the transition may be painful for workers whose skills become obsolete. Experts recommend comprehensive retraining programs and social safety nets to help workers adapt to the changing economy.

Despite these challenges, AI also offers tremendous potential for positive change. It can help diagnose diseases earlier, optimize energy consumption, and advance scientific research. The key is to develop and implement AI responsibly, with robust ethical frameworks that prioritize human welfare. A pragmatic approach that balances innovation with caution will be essential for navigating the AI revolution.`,
    contentZh: `人工智慧正在改變從醫療保健到交通運輸等各個產業，但這種快速發展引發了社會必須面對的重大倫理問題。隨著AI系統變得更加精密和具有影響力，其設計和部署的影響需要仔細審視。

最迫切的關注之一是演算法偏見。AI系統從數據中學習，如果訓練數據反映了現有的社會偏見，系統就會複製甚至放大這些偏見。例如，研究表明一些臉部辨識系統對膚色較深的人辨識準確度較低。這種現象的發生是因為訓練數據中包含了不成比例的淺膚色人臉。當這些系統被用於執法或招聘時，後果可能是嚴重且具歧視性的。

隱私是另一個關鍵議題。AI驅動的監控系統可以在城市中追蹤個人、分析他們的行為模式並預測他們未來的行為。雖然支持者認為這種技術增強了公共安全，但批評者指出大規模監控破壞了基本權利。AI監控應該在何時及如何部署的標準仍然受到激烈辯論。

問責問題同樣複雜。當一輛自動駕駛車輛造成事故時，誰應該負責：製造商、軟體開發者，還是車主？目前的法律框架並非為機器做出獨立決策的情況而設計的。制定明確的AI問責指南是必要的但也是困難的。

就業衝擊是進一步的關注。AI和自動化預計將在未來幾十年內取代數百萬個工作崗位。雖然會創造新的工作機會，但對於技能變得過時的工人來說，這個過渡可能是痛苦的。專家建議提供全面的再培訓計畫和社會安全網，以幫助工人適應不斷變化的經濟。

儘管面臨這些挑戰，AI也為正面改變提供了巨大的潛力。它可以幫助更早診斷疾病、優化能源消耗和推進科學研究。關鍵在於負責任地開發和實施AI，建立以人類福祉為優先的健全倫理框架。務實地平衡創新與謹慎將是應對AI革命的關鍵。`,
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 305,
    targetWords: ["a004", "a013", "a009", "a010", "a007"],
    questions: [
      {
        question: "Why do some AI systems exhibit bias?",
        options: ["A. They are deliberately programmed to be unfair", "B. They learn from training data that reflects existing societal biases", "C. They cannot process information about diverse populations", "D. They are only tested in one country"],
        correctIndex: 1,
        explanation: "文章解釋AI系統表現出偏見是因為「它們從反映現有社會偏見的訓練數據中學習（learn from training data that reflects existing societal biases）」，因此答案為 B。",
      },
      {
        question: "What challenge does AI pose for legal accountability?",
        options: ["A. AI cannot be regulated by any law", "B. Current legal frameworks were not designed for machines making independent decisions", "C. AI companies refuse to follow regulations", "D. There is no way to determine who created an AI system"],
        correctIndex: 1,
        explanation: "文章指出AI對法律問責的挑戰在於「目前的法律框架並非為機器做出獨立決策的情況而設計（current legal frameworks were not designed for machines making independent decisions）」，因此答案為 B。",
      },
      {
        question: "What does the author suggest is key to managing AI development?",
        options: ["A. Stopping all AI research immediately", "B. Allowing companies to self-regulate without oversight", "C. Developing responsible AI with ethical frameworks that prioritize human welfare", "D. Replacing all human workers with AI"],
        correctIndex: 2,
        explanation: "文章建議管理AI發展的關鍵是「負責任地開發AI，建立以人類福祉為優先的倫理框架（developing responsible AI with ethical frameworks that prioritize human welfare）」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-a12",
    title: "Water Scarcity: A Growing Global Crisis",
    content: `Fresh water is essential for human survival, yet it is becoming increasingly scarce in many parts of the world. Although approximately seventy percent of Earth's surface is covered by water, only about two and a half percent of that water is fresh, and much of it is locked in glaciers and ice caps. The growing demand for water, combined with the effects of climate change, is creating a crisis that has significant implications for billions of people.

Water scarcity affects more than two billion people worldwide. In many developing countries, communities lack access to clean drinking water, forcing people, often women and children, to walk long distances to collect water from rivers or wells. This water is frequently contaminated, leading to waterborne diseases that cause hundreds of thousands of deaths each year. The correlation between water access and public health is well documented.

Agriculture is the largest consumer of fresh water, accounting for roughly seventy percent of global water use. As the world's population continues to grow, the demand for food and consequently for water will increase. Scientists are working to develop more efficient irrigation methods and drought-resistant crops, but implementing these solutions on a large scale requires significant investment.

Climate change is making the problem worse. Rising temperatures are causing glaciers to shrink, reducing the water supply for communities that depend on meltwater. Changes in rainfall patterns are leading to more frequent droughts in some regions and floods in others. These shifts are difficult to predict and even harder to prepare for.

Solutions to water scarcity require a comprehensive approach. Water conservation, better infrastructure to reduce waste, desalination technology, and international cooperation are all necessary. Some experts argue that water pricing should reflect its true value, which would encourage more responsible use. Others emphasize the need to treat access to clean water as a fundamental human right.

The evidence clearly shows that water scarcity is not a distant problem but a present reality that demands immediate attention from governments, businesses, and individuals alike.`,
    contentZh: `淡水對人類生存至關重要，但在世界許多地方正變得日益稀缺。雖然地球表面大約百分之七十被水覆蓋，但只有約百分之二點五是淡水，而其中大部分被鎖在冰川和冰蓋中。對水的需求不斷增長，加上氣候變遷的影響，正在製造一場對數十億人有重大影響的危機。

水資源匱乏影響全球超過二十億人。在許多發展中國家，社區缺乏清潔飲用水，迫使人們（通常是婦女和兒童）走很長的路從河流或井中取水。這些水經常受到污染，導致水源性疾病，每年造成數十萬人死亡。水資源獲取與公共健康之間的相關性已被充分記錄。

農業是淡水的最大消費者，約佔全球用水量的百分之七十。隨著世界人口持續增長，對糧食和水的需求也將隨之增加。科學家正在努力開發更有效率的灌溉方法和抗旱作物，但大規模實施這些解決方案需要大量投資。

氣候變遷使問題更加嚴重。溫度升高導致冰川縮小，減少了依賴融雪水的社區的水源供應。降雨模式的變化導致某些地區更頻繁的乾旱，其他地區則更多洪水。這些變化難以預測，更難以準備應對。

解決水資源匱乏需要全面的方法。節水、改善基礎設施以減少浪費、海水淡化技術和國際合作都是必要的。一些專家認為水價應反映其真正價值，這將鼓勵更負責任的使用。其他人則強調需要將獲得清潔水視為基本人權。

證據清楚顯示，水資源匱乏不是遙遠的問題，而是需要政府、企業和個人立即關注的當下現實。`,
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 310,
    targetWords: ["a013", "a006", "a004", "a007", "a015"],
    questions: [
      {
        question: "What percentage of Earth's water is fresh?",
        options: ["A. About seventy percent", "B. About ten percent", "C. About two and a half percent", "D. About fifty percent"],
        correctIndex: 2,
        explanation: "文章明確指出「只有約百分之二點五（about two and a half percent）」的地球水是淡水，因此答案為 C。",
      },
      {
        question: "What is the largest consumer of fresh water globally?",
        options: ["A. Industrial manufacturing", "B. Household use", "C. Agriculture", "D. Energy production"],
        correctIndex: 2,
        explanation: "文章提到「農業是淡水的最大消費者（agriculture is the largest consumer），約佔全球用水量的百分之七十」，因此答案為 C。",
      },
      {
        question: "How is climate change affecting water scarcity?",
        options: ["A. It is increasing the amount of fresh water available", "B. It is causing glaciers to shrink and changing rainfall patterns", "C. It has no effect on water supplies", "D. It is only affecting coastal areas"],
        correctIndex: 1,
        explanation: "文章說明氣候變遷「導致冰川縮小並改變降雨模式（causing glaciers to shrink and changing rainfall patterns）」，使水資源問題更加嚴重，因此答案為 B。",
      },
    ],
  },
  {
    id: "art-a13",
    title: "The Evolution of Language",
    content: `Language is one of the most distinctive features of the human species. While other animals communicate through sounds, gestures, and chemical signals, no other species has developed anything comparable to the complexity of human language. How language evolved remains one of the most fascinating and debated questions in science.

Linguists and anthropologists have proposed several hypotheses about the origins of language. Some researchers believe that language developed gradually from simpler forms of communication, such as gestures and basic vocalizations. Others argue that a genetic mutation may have given early humans the capacity for complex language relatively suddenly. The evidence from fossil records, genetics, and comparative studies with other primates supports both perspectives to some degree, making this a challenging phenomenon to study.

What is clear is that language has changed dramatically over time. All languages evolve continuously, with new words being created, old words falling out of use, and grammatical structures shifting. English, for example, has changed so much over the past thousand years that a modern speaker would be unable to understand Old English without special training. This constant evolution is driven by social interaction, migration, trade, and cultural exchange.

The diversity of human languages is remarkable. There are currently about seven thousand languages spoken around the world, though many are in danger of disappearing. When a language dies, the unique cultural knowledge and perspective it carries are lost forever. Linguists are working to document and preserve endangered languages before it is too late.

Technology is having a significant impact on language evolution today. The internet and social media have accelerated the spread of new words and expressions across borders. Text messaging and online communication have created new forms of abbreviated language. Some scholars worry that this is degrading language quality, while others view it as a natural part of linguistic evolution.

Understanding how language evolves provides valuable insight into human history, culture, and cognition. Language is not merely a tool for communication; it shapes how we think about and interpret the world around us.`,
    contentZh: `語言是人類物種最獨特的特徵之一。雖然其他動物透過聲音、手勢和化學信號進行溝通，但沒有其他物種發展出與人類語言的複雜性相當的東西。語言如何演化仍然是科學界最迷人且最具爭議的問題之一。

語言學家和人類學家提出了幾個關於語言起源的假說。一些研究人員認為語言是從較簡單的溝通形式，如手勢和基本的發聲，逐漸發展而來的。其他人則認為基因突變可能在相對突然的情況下賦予了早期人類複雜語言的能力。來自化石記錄、遺傳學和與其他靈長類動物的比較研究的證據在某種程度上支持了兩種觀點，使其成為一個具有挑戰性的研究現象。

可以確定的是，語言隨著時間發生了巨大的變化。所有語言都在持續演化，新詞被創造、舊詞不再使用、語法結構也在轉變。例如，英語在過去一千年中變化如此之大，以至於現代說話者如果沒有特殊訓練就無法理解古英語。這種持續的演化是由社會互動、遷徙、貿易和文化交流所驅動的。

人類語言的多樣性令人矚目。目前全球大約有七千種語言，但許多語言面臨消失的危機。當一種語言消亡時，它所承載的獨特文化知識和觀點也會永遠失去。語言學家正在努力在為時已晚之前記錄和保存瀕危語言。

科技正在對今天的語言演化產生重大影響。網際網路和社群媒體加速了新詞語和表達方式的跨國傳播。簡訊和線上交流創造了新的縮寫語言形式。一些學者擔心這正在降低語言品質，而另一些人則認為這是語言演化的自然部分。

了解語言如何演化，為人類歷史、文化和認知提供了寶貴的見解。語言不僅僅是一種溝通工具；它塑造了我們如何思考和詮釋周圍的世界。`,
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 315,
    targetWords: ["a003", "a002", "a009", "a008", "a004"],
    questions: [
      {
        question: "What makes human language unique compared to animal communication?",
        options: ["A. Humans are louder than other animals", "B. No other species has developed comparable complexity", "C. Animals cannot hear human speech", "D. Humans only communicate through writing"],
        correctIndex: 1,
        explanation: "文章指出人類語言獨特之處在於「沒有其他物種發展出相當的複雜性（no other species has developed comparable complexity）」，因此答案為 B。",
      },
      {
        question: "Why is the origin of language difficult to study?",
        options: ["A. No one is interested in the topic", "B. Evidence supports multiple perspectives, making it a challenging phenomenon", "C. Language did not exist before the modern era", "D. Scientists refuse to study language origins"],
        correctIndex: 1,
        explanation: "文章解釋語言起源難以研究是因為「證據支持多種觀點，使其成為一個具有挑戰性的研究現象（evidence supports multiple perspectives, making it a challenging phenomenon）」，因此答案為 B。",
      },
      {
        question: "What happens when a language disappears?",
        options: ["A. Nothing significant changes", "B. The unique cultural knowledge and perspective it carries are lost", "C. A new language automatically replaces it", "D. Only written records are affected"],
        correctIndex: 1,
        explanation: "文章指出當語言消失時「它所承載的獨特文化知識和觀點會永遠失去（the unique cultural knowledge and perspective it carries are lost）」，因此答案為 B。",
      },
    ],
  },
  {
    id: "art-a14",
    title: "Mental Health Awareness in Modern Society",
    content: `Mental health has become one of the most important topics in modern society. For much of history, mental illness was misunderstood, stigmatized, and often hidden. Today, growing awareness and research are helping to change attitudes and improve treatment for the millions of people affected by mental health conditions.

Depression and anxiety are among the most prevalent mental health disorders worldwide. The World Health Organization estimates that more than three hundred million people suffer from depression globally. Anxiety disorders affect a similar number. These conditions can be debilitating, affecting every aspect of a person's life, from work performance to personal relationships. Despite their prevalence, many people still do not seek help due to stigma or lack of access to mental health services.

Research has revealed that mental health conditions result from a complex interaction of biological, psychological, and social factors. Genetics play a role, as some people are more predisposed to certain conditions. Life experiences such as trauma, abuse, or chronic stress can also trigger mental health problems. Environmental factors, including poverty, social isolation, and discrimination, further contribute to the risk.

Treatment options have improved significantly in recent decades. Psychotherapy, particularly cognitive behavioral therapy, has proven effective for many conditions. Medications can also help manage symptoms. However, experts emphasize that treatment should be comprehensive, addressing not only symptoms but also the underlying causes and social circumstances that contribute to mental illness.

Prevention is equally important. Schools and workplaces can implement programs that promote mental well-being, teach stress management skills, and create supportive environments. Early intervention, when problems are first identified, leads to much better outcomes than waiting until conditions become severe.

The evidence strongly suggests that investing in mental health services benefits not only individuals but also society as a whole. Improved mental health leads to higher productivity, lower healthcare costs, and stronger communities. Reducing stigma and increasing access to care are essential steps toward a healthier society.`,
    contentZh: `心理健康已成為現代社會最重要的議題之一。在歷史上很長一段時間，精神疾病被誤解、汙名化，且經常被隱藏。如今，日益增長的認知和研究正在幫助改變態度，並改善對受心理健康狀況影響的數百萬人的治療。

憂鬱症和焦慮症是全球最普遍的心理健康疾病。世界衛生組織估計全球有超過三億人患有憂鬱症。焦慮症影響的人數也差不多。這些疾病可能使人衰弱，影響一個人生活的方方面面，從工作表現到人際關係。儘管它們很普遍，但由於汙名化或缺乏獲得心理健康服務的途徑，許多人仍然不尋求幫助。

研究揭示，心理健康狀況是生物、心理和社會因素複雜交互作用的結果。遺傳因素起著一定作用，因為有些人更容易患上某些疾病。創傷、虐待或慢性壓力等生活經歷也可能引發心理健康問題。貧困、社會孤立和歧視等環境因素進一步增加了風險。

近幾十年來，治療方式已顯著改善。心理治療，特別是認知行為療法，已被證明對許多疾病有效。藥物也可以幫助控制症狀。然而，專家強調治療應該是全面性的，不僅要解決症狀，還要解決導致精神疾病的根本原因和社會環境。

預防同樣重要。學校和職場可以實施促進心理健康、教授壓力管理技巧和創造支持性環境的計畫。在問題首次被發現時進行早期介入，其結果遠比等到病情嚴重時好得多。

證據強烈表明，投資心理健康服務不僅有益於個人，也有益於整個社會。改善心理健康可以提高生產力、降低醫療成本和加強社區凝聚力。減少汙名和增加獲得照護的機會是邁向更健康社會的必要步驟。`,
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 302,
    targetWords: ["a014", "a004", "a002", "a007", "a015"],
    questions: [
      {
        question: "What are the most prevalent mental health disorders mentioned in the article?",
        options: ["A. Schizophrenia and bipolar disorder", "B. Depression and anxiety", "C. ADHD and autism", "D. Eating disorders and phobias"],
        correctIndex: 1,
        explanation: "文章提到最普遍的心理健康疾病是「憂鬱症和焦慮症（depression and anxiety）」，因此答案為 B。",
      },
      {
        question: "What factors contribute to mental health conditions?",
        options: ["A. Only genetic factors", "B. Only environmental factors", "C. A complex interaction of biological, psychological, and social factors", "D. Only personal choices"],
        correctIndex: 2,
        explanation: "文章指出導致心理健康狀況的因素是「生物、心理和社會因素的複雜交互作用（a complex interaction of biological, psychological, and social factors）」，因此答案為 C。",
      },
      {
        question: "What is the author's main argument about mental health investment?",
        options: ["A. It is too expensive for most countries", "B. It benefits individuals and society through higher productivity and lower healthcare costs", "C. Only wealthy countries can afford mental health services", "D. Mental health treatment rarely works"],
        correctIndex: 1,
        explanation: "文章的主要論點是心理健康投資「透過更高的生產力和更低的醫療成本使個人和社會受益（benefits individuals and society through higher productivity and lower healthcare costs）」，因此答案為 B。",
      },
    ],
  },
  {
    id: "art-a15",
    title: "Vaccine Science: How Immunization Protects Us",
    content: `Vaccines are one of the greatest achievements in the history of medicine. They have saved millions of lives by preventing infectious diseases that once killed or disabled vast numbers of people. Understanding the science behind vaccines is essential for appreciating their importance and addressing misconceptions about them.

The basic principle of vaccination is straightforward. A vaccine introduces a weakened or inactive form of a pathogen, or a component of it, into the body. This stimulates the immune system to produce antibodies, which are proteins that recognize and fight specific pathogens. If the person is later exposed to the actual disease, their immune system can respond quickly and effectively, preventing illness or reducing its severity.

The concept of immunization dates back centuries. In 1796, Edward Jenner demonstrated that exposure to cowpox could protect against smallpox. This discovery led to the development of the first vaccine. Since then, vaccines have been developed for dozens of diseases, including polio, measles, and influenza. The evidence of their effectiveness is overwhelming. Smallpox, which killed an estimated three hundred million people in the twentieth century alone, has been completely eradicated through vaccination.

Despite this success, vaccine hesitancy has become a significant concern in recent years. Some people refuse or delay vaccinations due to fears about side effects, distrust of pharmaceutical companies, or misinformation spread through social media. This phenomenon threatens to reverse decades of progress. When vaccination rates drop below a certain threshold, diseases that were nearly eliminated can return.

Scientists continue to develop new vaccines using advanced technologies. The rapid development of mRNA vaccines during the COVID-19 pandemic demonstrated that modern science can respond quickly to emerging threats. These new platforms may also lead to vaccines for diseases that have resisted traditional approaches, such as malaria and HIV.

Public health experts emphasize that vaccination is not just an individual choice but a collective responsibility. When enough people in a community are vaccinated, they create herd immunity, which protects those who cannot be vaccinated due to medical conditions.`,
    contentZh: `疫苗是醫學史上最偉大的成就之一。它們透過預防曾經殺死或致殘大量人群的傳染病，拯救了數百萬人的生命。了解疫苗背後的科學，對於認識其重要性和糾正對它們的誤解至關重要。

疫苗接種的基本原理很直接。疫苗將病原體的弱化或不活化形式，或其組成部分引入體內。這刺激免疫系統產生抗體——能辨識和對抗特定病原體的蛋白質。如果該人之後接觸到實際的疾病，他們的免疫系統就能快速有效地反應，預防疾病或減輕其嚴重程度。

免疫接種的概念可追溯到幾個世紀前。1796年，愛德華・詹納證明了接觸牛痘可以預防天花。這一發現導致了第一支疫苗的開發。此後，已針對數十種疾病開發了疫苗，包括小兒麻痺症、麻疹和流感。其有效性的證據是壓倒性的。僅在二十世紀就估計殺死了三億人的天花，已透過疫苗接種被完全根除。

儘管取得了這些成功，近年來疫苗猶豫已成為一個重大關切。一些人因為擔心副作用、不信任製藥公司或社群媒體上傳播的錯誤資訊而拒絕或推遲接種疫苗。這種現象有可能逆轉數十年的進步。當疫苗接種率降到某個門檻以下時，幾乎被消滅的疾病可能會捲土重來。

科學家持續使用先進技術開發新疫苗。COVID-19大流行期間mRNA疫苗的快速開發表明，現代科學能夠迅速應對新出現的威脅。這些新平台也可能導致開發出針對那些抵抗傳統方法的疾病的疫苗，如瘧疾和HIV。

公共衛生專家強調，疫苗接種不僅是個人選擇，更是集體責任。當社區中有足夠多的人接種疫苗時，他們會形成群體免疫，保護那些因醫療原因無法接種疫苗的人。`,
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 312,
    targetWords: ["a002", "a004", "a009", "a007"],
    questions: [
      {
        question: "How do vaccines protect the body?",
        options: ["A. They kill all bacteria in the body", "B. They introduce weakened pathogens to stimulate antibody production", "C. They increase body temperature to fight disease", "D. They block all viruses from entering the body"],
        correctIndex: 1,
        explanation: "文章解釋疫苗「引入弱化的病原體以刺激抗體產生（introduce weakened pathogens to stimulate antibody production）」來保護身體，因此答案為 B。",
      },
      {
        question: "Why is vaccine hesitancy a concern?",
        options: ["A. Vaccines are becoming too expensive", "B. When vaccination rates drop, eliminated diseases can return", "C. Doctors no longer recommend vaccines", "D. New vaccines take too long to develop"],
        correctIndex: 1,
        explanation: "文章指出疫苗猶豫令人擔憂是因為「當疫苗接種率下降時，被消滅的疾病可能會復發（when vaccination rates drop, eliminated diseases can return）」，因此答案為 B。",
      },
      {
        question: "What is 'herd immunity'?",
        options: ["A. Immunity that only animals can develop", "B. A type of vaccine given to farm animals", "C. Protection for the community when enough people are vaccinated", "D. A natural immunity that all humans are born with"],
        correctIndex: 2,
        explanation: "文章定義群體免疫為「當社區中有足夠多的人接種疫苗時，為社區提供保護（protection for the community when enough people are vaccinated）」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-a16",
    title: "Ocean Pollution: The Hidden Crisis Beneath the Waves",
    content: `The world's oceans cover more than seventy percent of the planet's surface and are vital to life on Earth. They produce over half the oxygen we breathe, regulate the climate, and provide food for billions of people. Yet human activities are polluting the oceans at an alarming rate, threatening marine ecosystems and ultimately our own well-being.

Plastic pollution is perhaps the most visible form of ocean contamination. An estimated eight million metric tons of plastic enter the oceans every year. This plastic does not biodegrade; instead, it breaks down into tiny particles known as microplastics. These microplastics are ingested by marine organisms, from plankton to whales, entering the food chain and eventually reaching human plates. The implications of microplastic consumption for human health are still being studied, but early evidence raises significant concerns.

Chemical pollution is another serious threat. Agricultural runoff carries pesticides and fertilizers into rivers and eventually into the sea. Industrial waste introduces heavy metals and toxic chemicals. These pollutants can cause dead zones, areas where oxygen levels are so low that most marine life cannot survive. The number and size of dead zones have been increasing steadily, with significant consequences for fishing communities and marine biodiversity.

Oil spills, though less frequent than chronic pollution, can devastate marine environments when they occur. Major spills have caused extensive damage to coastal ecosystems, killing birds, fish, and marine mammals and destroying habitats that take decades to recover.

Addressing ocean pollution requires action at multiple levels. Governments must implement and enforce regulations on waste disposal and chemical use. Industries need to develop cleaner production methods. Individuals can contribute by reducing plastic consumption and properly disposing of waste. International cooperation is essential because ocean currents carry pollution across national borders.

The correlation between healthy oceans and human prosperity is clear. Protecting our oceans is not just an environmental issue but an economic and public health imperative that demands immediate and sustained attention.`,
    contentZh: `世界海洋覆蓋了地球表面百分之七十以上的面積，對地球上的生命至關重要。它們產生我們呼吸的一半以上氧氣、調節氣候並為數十億人提供食物。然而，人類活動正在以驚人的速度污染海洋，威脅著海洋生態系統，最終也威脅著我們自身的福祉。

塑膠污染可能是最明顯的海洋污染形式。據估計，每年有八百萬公噸的塑膠進入海洋。這些塑膠不會被生物降解；相反地，它們分解成被稱為微塑膠的微小顆粒。這些微塑膠被從浮游生物到鯨魚的海洋生物所攝入，進入食物鏈並最終到達人類的餐盤。微塑膠對人類健康的影響仍在研究中，但早期證據引起了重大關切。

化學污染是另一個嚴重威脅。農業逕流將殺蟲劑和肥料帶入河流，最終流入大海。工業廢棄物引入重金屬和有毒化學品。這些污染物可以造成死區——氧氣含量低到大多數海洋生物無法生存的區域。死區的數量和面積一直在穩定增加，對漁業社區和海洋生物多樣性造成重大影響。

石油洩漏雖然不如慢性污染頻繁，但一旦發生可能會摧毀海洋環境。重大洩漏事件對沿海生態系統造成了廣泛損害，殺死鳥類、魚類和海洋哺乳動物，並破壞需要數十年才能恢復的棲息地。

解決海洋污染需要多層面的行動。政府必須實施和執行廢物處理和化學品使用的法規。產業需要開發更清潔的生產方法。個人可以透過減少塑膠消費和正確處理廢物來做出貢獻。國際合作至關重要，因為洋流會將污染物帶過國界。

健康的海洋與人類繁榮之間的關聯是明確的。保護我們的海洋不僅是環境議題，更是需要立即和持續關注的經濟和公共衛生要務。`,
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 303,
    targetWords: ["a013", "a004", "a006", "a007", "a002"],
    questions: [
      {
        question: "What are microplastics?",
        options: ["A. Tiny organisms that live in the ocean", "B. Small particles that plastic breaks down into", "C. Chemicals used to clean ocean water", "D. Microscopic fish found in deep water"],
        correctIndex: 1,
        explanation: "文章定義微塑膠為「塑膠分解成的微小顆粒（small particles that plastic breaks down into）」，因此答案為 B。",
      },
      {
        question: "What causes dead zones in the ocean?",
        options: ["A. Too many fish in one area", "B. Extremely cold water temperatures", "C. Pollutants that reduce oxygen levels to where most marine life cannot survive", "D. Excessive sunlight reaching the ocean floor"],
        correctIndex: 2,
        explanation: "文章解釋死區是由「污染物降低氧氣含量到大多數海洋生物無法生存的程度（pollutants that reduce oxygen levels to where most marine life cannot survive）」所造成，因此答案為 C。",
      },
      {
        question: "What is the author's main message about ocean pollution?",
        options: ["A. Technology will eventually solve the problem", "B. It requires action at multiple levels including government, industry, and individuals", "C. Only scientists can address ocean pollution", "D. Ocean pollution is not a serious concern yet"],
        correctIndex: 1,
        explanation: "文章的主要訊息是海洋污染「需要多層面的行動，包括政府、產業和個人（requires action at multiple levels including government, industry, and individuals）」，因此答案為 B。",
      },
    ],
  },
  {
    id: "art-a17",
    title: "Behavioral Economics: Why We Make Irrational Choices",
    content: `Traditional economic theory assumes that people are rational actors who always make decisions that maximize their self-interest. However, decades of research in behavioral economics have demonstrated that human decision-making is often far from rational. This field, which combines insights from psychology and economics, has significantly changed how we understand consumer behavior, financial markets, and public policy.

One key concept in behavioral economics is loss aversion. Research shows that people feel the pain of losing something about twice as strongly as the pleasure of gaining something of equal value. This phenomenon explains why investors often hold onto losing stocks too long, hoping to avoid realizing a loss, while selling winning stocks too quickly to lock in gains. Understanding loss aversion has important implications for financial planning and investment strategies.

The concept of mental accounting is also significant. People tend to categorize money into different mental accounts based on how it was obtained or how they plan to spend it. For example, someone might be reluctant to spend money from their savings account on a vacation but willing to spend the same amount if they received it as a bonus. From a purely rational perspective, money is fungible, meaning one dollar is the same as any other dollar regardless of its source.

Nudge theory, developed by Richard Thaler and Cass Sunstein, applies behavioral economics to public policy. A nudge is a small change in how choices are presented that can significantly influence decisions without restricting freedom. For instance, making organ donation the default option on driver's license applications dramatically increases donation rates compared to requiring people to opt in. Governments around the world have implemented nudge strategies to encourage healthier eating, higher savings rates, and better environmental practices.

The evidence from behavioral economics challenges the assumption that simply providing information is enough to change behavior. Instead, understanding the psychological factors that drive decisions allows policymakers and businesses to design environments that help people make better choices.`,
    contentZh: `傳統經濟理論假設人是理性行動者，總是做出最大化自身利益的決策。然而，數十年的行為經濟學研究已證明，人類的決策往往遠非理性。這個結合心理學和經濟學洞見的領域，已經顯著改變了我們對消費者行為、金融市場和公共政策的理解。

行為經濟學中一個關鍵概念是損失厭惡。研究顯示，人們對失去某物的痛苦感受大約是獲得等值物品的快樂的兩倍。這種現象解釋了為什麼投資者往往持有虧損股票太久，希望避免實現損失，同時又過快賣出盈利股票以鎖定收益。理解損失厭惡對財務規劃和投資策略有重要啟示。

心理帳戶的概念也很重要。人們傾向於根據金錢的來源或計畫的用途，將其分類到不同的心理帳戶中。例如，某人可能不願意從儲蓄帳戶中花錢去度假，但如果同樣金額是以獎金形式獲得的，就願意花掉。從純理性的角度來看，金錢是可替代的，意味著無論來源如何，一元就是一元。

由理察・塞勒和乃斯・桑斯坦開發的推力理論將行為經濟學應用於公共政策。推力是指在呈現選擇方式上的小改變，能在不限制自由的情況下顯著影響決策。例如，在駕照申請中將器官捐贈設為預設選項，與需要人們主動選擇加入相比，大幅提高了捐贈率。世界各地的政府已經實施推力策略來鼓勵更健康的飲食、更高的儲蓄率和更好的環保實踐。

行為經濟學的證據挑戰了一個假設：僅僅提供資訊就足以改變行為。相反地，理解驅動決策的心理因素，使政策制定者和企業能夠設計幫助人們做出更好選擇的環境。`,
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 304,
    targetWords: ["a009", "a013", "a004", "a007", "a002"],
    questions: [
      {
        question: "What is loss aversion?",
        options: ["A. The tendency to avoid all risks", "B. Feeling the pain of loss about twice as strongly as the pleasure of an equal gain", "C. The desire to win at all costs", "D. The inability to make financial decisions"],
        correctIndex: 1,
        explanation: "文章定義損失厭惡為「對失去某物的痛苦感受大約是等值收益快樂的兩倍（feeling the pain of loss about twice as strongly as the pleasure of an equal gain）」，因此答案為 B。",
      },
      {
        question: "What is a 'nudge' in behavioral economics?",
        options: ["A. A large financial incentive to change behavior", "B. A law that forces people to make certain choices", "C. A small change in how choices are presented that influences decisions", "D. A penalty for making bad decisions"],
        correctIndex: 2,
        explanation: "文章解釋「推力」是「在呈現選擇方式上的小改變，能影響決策（a small change in how choices are presented that influences decisions）」，因此答案為 C。",
      },
      {
        question: "What does the article suggest about providing information to change behavior?",
        options: ["A. Information alone is always sufficient", "B. Information is never helpful", "C. Simply providing information is not enough; psychological factors must be considered", "D. Only financial incentives can change behavior"],
        correctIndex: 2,
        explanation: "文章表示「僅僅提供資訊是不夠的；必須考慮心理因素（simply providing information is not enough; psychological factors must be considered）」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-a18",
    title: "Ancient Civilizations: Lessons from the Past",
    content: `The study of ancient civilizations provides valuable insights into the foundations of modern society. From the Sumerians of Mesopotamia to the Maya of Central America, these early societies developed technologies, governance systems, and cultural practices that continue to influence the world today.

Mesopotamia, located in present-day Iraq, is often called the cradle of civilization. Around 3500 BCE, the Sumerians developed one of the first writing systems, known as cuneiform. This innovation allowed people to record laws, business transactions, and stories for the first time. Writing made it possible to accumulate and transmit knowledge across generations, a development with significant implications for human progress.

Ancient Egypt is renowned for its monumental architecture and advanced engineering. The construction of the pyramids at Giza, completed around 2560 BCE, required sophisticated knowledge of mathematics, astronomy, and project management. Researchers who analyze these structures continue to discover new evidence about the techniques used. The Egyptians also developed a system of hieroglyphic writing and made important advances in medicine and agriculture.

The ancient Greeks made groundbreaking contributions to philosophy, science, and democracy. Thinkers like Socrates, Plato, and Aristotle developed systems of logic and inquiry that form the basis of Western intellectual tradition. The Greeks also established the first democratic governments, where citizens could participate directly in political decisions. This perspective on governance has shaped political systems around the world.

The Roman Empire built upon Greek achievements and created a vast administrative system that governed millions of people across three continents. Roman engineering, including roads, aqueducts, and concrete construction, was remarkably advanced. Many Roman roads and buildings survive to this day, demonstrating the durability of their engineering methods.

Studying these civilizations teaches us that complex societies can rise and fall. Environmental degradation, political instability, economic inequality, and external threats have all contributed to the decline of great civilizations. Understanding these patterns helps us recognize similar challenges in our own time and take steps to address them.`,
    contentZh: `研究古代文明為現代社會的基礎提供了寶貴的見解。從美索不達米亞的蘇美人到中美洲的馬雅人，這些早期社會發展出的技術、治理制度和文化實踐至今仍在影響著世界。

美索不達米亞位於今天的伊拉克，常被稱為文明的搖籃。約在公元前3500年，蘇美人發展出最早的書寫系統之一——楔形文字。這項創新使人們第一次能夠記錄法律、商業交易和故事。書寫使知識的累積和跨代傳承成為可能，這一發展對人類進步有著重大意義。

古埃及以其紀念性建築和先進工程聞名。約在公元前2560年完成的吉薩金字塔建設，需要精深的數學、天文學和專案管理知識。分析這些結構的研究人員持續發現關於所使用技術的新證據。埃及人還發展了象形文字書寫系統，並在醫學和農業方面取得了重要進展。

古希臘人在哲學、科學和民主方面做出了開創性的貢獻。蘇格拉底、柏拉圖和亞里斯多德等思想家發展出的邏輯和探究系統構成了西方知識傳統的基礎。希臘人還建立了最早的民主政府，公民可以直接參與政治決策。這種治理觀點已經塑造了世界各地的政治制度。

羅馬帝國在希臘成就的基礎上建立了一個龐大的行政系統，治理橫跨三大洲的數百萬人。羅馬工程，包括道路、水渠和混凝土建築，非常先進。許多羅馬道路和建築至今仍然存在，展示了其工程方法的耐久性。

研究這些文明告訴我們，複雜的社會可以興起也可以衰落。環境退化、政治不穩定、經濟不平等和外部威脅都曾導致偉大文明的衰退。理解這些模式幫助我們識別自己時代中的類似挑戰並採取措施加以應對。`,
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 305,
    targetWords: ["a004", "a013", "a001", "a002", "a008"],
    questions: [
      {
        question: "Why was the development of writing significant?",
        options: ["A. It allowed people to draw pictures", "B. It made it possible to accumulate and transmit knowledge across generations", "C. It was only used for religious purposes", "D. It replaced spoken language entirely"],
        correctIndex: 1,
        explanation: "文章指出書寫的重要性在於「使知識的累積和跨代傳承成為可能（made it possible to accumulate and transmit knowledge across generations）」，因此答案為 B。",
      },
      {
        question: "What did the ancient Greeks contribute to modern society?",
        options: ["A. The pyramids and hieroglyphics", "B. Systems of logic, inquiry, and democratic governance", "C. The Roman road system", "D. Cuneiform writing"],
        correctIndex: 1,
        explanation: "文章提到古希臘人對現代社會的貢獻是「邏輯和探究系統以及民主治理（systems of logic, inquiry, and democratic governance）」，因此答案為 B。",
      },
      {
        question: "What lesson does the article draw from studying ancient civilizations?",
        options: ["A. Ancient people were more intelligent than modern people", "B. Complex societies can rise and fall, and understanding the patterns helps address current challenges", "C. Modern technology makes studying ancient civilizations unnecessary", "D. Only military strength determines a civilization's success"],
        correctIndex: 1,
        explanation: "文章從研究古代文明中得出的教訓是「複雜社會可以興起也可以衰落，理解這些模式有助於應對當前挑戰（complex societies can rise and fall, and understanding the patterns helps address current challenges）」，因此答案為 B。",
      },
    ],
  },
  {
    id: "art-a19",
    title: "Urbanization: The Rise of Megacities",
    content: `For the first time in human history, more people live in urban areas than in rural ones. This shift, known as urbanization, is one of the most significant demographic trends of the modern era. By 2050, it is projected that nearly seventy percent of the world's population will live in cities. Understanding the causes and consequences of urbanization is essential for planning a sustainable future.

People move to cities for many reasons. Urban areas typically offer more job opportunities, better access to education and healthcare, and a wider range of cultural activities. In developing countries, rural poverty and lack of economic opportunity are major factors driving migration to cities. This movement has led to the rapid growth of megacities, urban areas with populations exceeding ten million people. Tokyo, Delhi, Shanghai, and Sao Paulo are among the largest megacities in the world.

Urbanization brings significant benefits. Cities are engines of economic growth, generating a disproportionate share of national wealth. The concentration of people and resources in cities facilitates innovation and the exchange of ideas. Urban residents generally have higher incomes, better access to services, and longer life expectancies than their rural counterparts.

However, rapid urbanization also creates serious challenges. Housing shortages and rising property prices are prevalent in many growing cities. Traffic congestion leads to air pollution and long commute times. Many cities struggle to provide adequate water, sanitation, and waste management services for their expanding populations. Informal settlements, often called slums, develop when housing supply fails to keep pace with demand, forcing millions to live in substandard conditions.

Urban planning plays a critical role in addressing these challenges. Well-designed cities with efficient public transportation, green spaces, affordable housing, and resilient infrastructure can accommodate growth while maintaining quality of life. Cities like Copenhagen and Singapore are often cited as models for sustainable urban development.

The correlation between urbanization and environmental impact is also important to consider. Cities consume over seventy-five percent of the world's energy and produce a similar share of carbon emissions. Making cities more energy-efficient and sustainable is therefore essential for addressing climate change.`,
    contentZh: `人類歷史上第一次，城市人口超過了農村人口。這一稱為城市化的轉變是現代最重要的人口趨勢之一。預計到2050年，全球近百分之七十的人口將居住在城市。了解城市化的原因和後果對於規劃永續的未來至關重要。

人們搬到城市有很多原因。城市地區通常提供更多的就業機會、更好的教育和醫療服務，以及更廣泛的文化活動。在發展中國家，農村貧困和缺乏經濟機會是推動人口向城市遷移的主要因素。這種流動導致了巨型城市的快速增長——人口超過一千萬的城市地區。東京、德里、上海和聖保羅是世界上最大的巨型城市之一。

城市化帶來顯著的好處。城市是經濟增長的引擎，產生不成比例的國家財富。人口和資源在城市的集中促進了創新和思想交流。城市居民通常有更高的收入、更好的服務取得和更長的預期壽命。

然而，快速城市化也帶來嚴重的挑戰。住房短缺和房價上漲在許多成長中的城市很普遍。交通擁堵導致空氣污染和長時間通勤。許多城市在為不斷增長的人口提供充足的供水、衛生和廢物管理服務方面面臨困難。當住房供應無法跟上需求時，非正式住區（通常稱為貧民窟）就會出現，迫使數百萬人生活在不合標準的條件下。

城市規劃在應對這些挑戰方面扮演著關鍵角色。設計良好的城市擁有高效的大眾運輸、綠色空間、經濟適用房和有韌性的基礎設施，能夠在保持生活品質的同時容納增長。哥本哈根和新加坡等城市常被引用為永續城市發展的典範。

城市化與環境影響之間的相關性也值得考慮。城市消耗全球百分之七十五以上的能源，並產生類似比例的碳排放。因此，使城市更加節能和永續對於應對氣候變遷至關重要。`,
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 318,
    targetWords: ["a004", "a014", "a006", "a010"],
    questions: [
      {
        question: "What is projected about urbanization by 2050?",
        options: ["A. Fifty percent of people will live in rural areas", "B. Nearly seventy percent of the world's population will live in cities", "C. Megacities will no longer exist", "D. Urbanization will reverse completely"],
        correctIndex: 1,
        explanation: "文章預測到2050年「近百分之七十的世界人口將居住在城市（nearly seventy percent of the world's population will live in cities）」，因此答案為 B。",
      },
      {
        question: "What is one major benefit of urbanization?",
        options: ["A. Lower housing costs", "B. Less traffic congestion", "C. Cities generate a disproportionate share of national wealth", "D. Cities have cleaner air than rural areas"],
        correctIndex: 2,
        explanation: "文章提到城市化的一大好處是「城市產生不成比例的國家財富（cities generate a disproportionate share of national wealth）」，因此答案為 C。",
      },
      {
        question: "What challenge of rapid urbanization is discussed in the article?",
        options: ["A. Too many job opportunities", "B. Excess green space in cities", "C. Housing shortages and the development of informal settlements", "D. Declining city populations"],
        correctIndex: 2,
        explanation: "文章討論了快速城市化的挑戰，包括「住房短缺和非正式住區的出現（housing shortages and the development of informal settlements）」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-a20",
    title: "Statistics in Daily Life: Numbers That Shape Decisions",
    content: `Statistics is often perceived as a dry academic subject, but in reality, it plays a fundamental role in our daily lives. From weather forecasts to medical diagnoses, from election polls to product recommendations, statistical methods inform the decisions we make and the information we consume every day.

One of the most common applications of statistics is in healthcare. When a doctor tells you that a medication is effective, that claim is based on clinical trials that use statistical methods to analyze results. Researchers compare outcomes between groups who received the treatment and those who received a placebo. The criteria for determining whether a treatment works include measures like statistical significance, which tells us whether the observed effect is likely real or just due to chance.

Media reports frequently cite statistics, but not all statistical claims are created equal. Understanding basic concepts like sample size, margin of error, and correlation versus causation can help you evaluate the information you encounter. For example, a news headline might claim that eating chocolate prevents heart disease, but the underlying study might only show a correlation, not proof that chocolate actually causes better heart health. The distinction between correlation and causation is one of the most important concepts in statistical literacy.

Statistics also influence business decisions. Companies analyze customer data to identify trends, predict demand, and optimize pricing. Online platforms use algorithms based on statistical models to recommend products, content, and advertisements tailored to individual users. Understanding how these systems work helps consumers make more informed choices about the information and recommendations they receive.

In politics, opinion polls use statistical sampling to gauge public sentiment. However, polls are only as good as their methodology. Factors such as sample selection, question wording, and response rates can all affect the accuracy of poll results. Learning to evaluate polls critically is an important skill in a democratic society.

The evidence demonstrates that statistical literacy is an essential skill for navigating the modern world. By understanding how statistics are collected, analyzed, and presented, people can become more critical consumers of information and make better decisions in both their personal and professional lives.`,
    contentZh: `統計學常被認為是一門枯燥的學術科目，但實際上它在我們的日常生活中扮演著基礎性的角色。從天氣預報到醫學診斷、從選舉民調到產品推薦，統計方法影響著我們每天做出的決策和消費的資訊。

統計學最常見的應用之一是在醫療保健領域。當醫生告訴你某種藥物有效時，這一說法是基於使用統計方法分析結果的臨床試驗。研究人員比較接受治療組和接受安慰劑組之間的結果。判斷治療是否有效的標準包括統計顯著性等指標，它告訴我們觀察到的效果是否可能是真實的，還是僅僅由於偶然。

媒體報導經常引用統計數據，但並非所有的統計聲明都是同等的。了解樣本量、誤差範圍以及相關性與因果性的區別等基本概念，可以幫助你評估遇到的資訊。例如，一則新聞標題可能聲稱吃巧克力能預防心臟病，但背後的研究可能只顯示了相關性，而非巧克力真正導致更好的心臟健康的證據。相關性與因果性之間的區別是統計素養中最重要的概念之一。

統計學也影響商業決策。公司分析客戶數據以識別趨勢、預測需求和優化定價。線上平台使用基於統計模型的演算法來推薦針對個別用戶量身定製的產品、內容和廣告。了解這些系統的運作方式有助於消費者對他們接收到的資訊和推薦做出更明智的選擇。

在政治中，民意調查使用統計抽樣來衡量公眾情緒。然而，民調的可靠程度取決於其方法論。樣本選擇、問題措辭和回覆率等因素都會影響民調結果的準確性。學會批判性地評估民調是民主社會中一項重要的技能。

證據表明，統計素養是駕馭現代世界的必備技能。透過了解統計數據如何被收集、分析和呈現，人們可以成為更批判性的資訊消費者，並在個人和職業生活中做出更好的決定。`,
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 325,
    targetWords: ["a006", "a010", "a004", "a002", "a001"],
    questions: [
      {
        question: "What does statistical significance tell us in medical research?",
        options: ["A. How expensive a treatment is", "B. Whether the observed effect is likely real or due to chance", "C. How long a treatment takes to work", "D. Whether patients enjoyed the treatment"],
        correctIndex: 1,
        explanation: "文章解釋統計顯著性告訴我們「觀察到的效果是否可能是真實的還是由於偶然（whether the observed effect is likely real or due to chance）」，因此答案為 B。",
      },
      {
        question: "Why is the distinction between correlation and causation important?",
        options: ["A. They always mean the same thing", "B. Correlation proves that one thing causes another", "C. A correlation does not prove that one factor actually causes the other", "D. Causation is less important than correlation"],
        correctIndex: 2,
        explanation: "文章解釋相關性與因果性的區別很重要，因為「相關性不能證明一個因素真正導致另一個（a correlation does not prove that one factor actually causes the other）」，因此答案為 C。",
      },
      {
        question: "What is the main purpose of this article?",
        options: ["A. To teach advanced statistical formulas", "B. To show that statistics is irrelevant to daily life", "C. To demonstrate that statistical literacy is essential for navigating the modern world", "D. To criticize how the media uses statistics"],
        correctIndex: 2,
        explanation: "文章的主要目的是「展示統計素養對於駕馭現代世界至關重要（demonstrate that statistical literacy is essential for navigating the modern world）」，因此答案為 C。",
      },
    ],
  },
  // --- Difficulty 3 (art-a21 to art-a30) ---
  {
    id: "art-a21",
    title: "Quantum Computing: The Next Frontier of Technology",
    content: `Classical computers, which have transformed every aspect of modern life, process information using bits that exist in one of two states: zero or one. Quantum computers, however, operate on fundamentally different principles drawn from quantum mechanics, the branch of physics that describes the behavior of matter at the subatomic level. This paradigm shift in computing has the potential to solve problems that are currently beyond the reach of even the most powerful supercomputers.

The basic unit of quantum computing is the qubit. Unlike a classical bit, a qubit can exist in a state of superposition, meaning it can represent both zero and one simultaneously. This property allows quantum computers to process vast numbers of possibilities at once. Another key phenomenon is entanglement, where two qubits become linked so that the state of one instantly influences the state of the other, regardless of the physical distance between them. These properties give quantum computers an exponential advantage for certain types of calculations.

The implications of quantum computing are far-reaching. In cryptography, quantum computers could potentially break the encryption methods that currently protect financial transactions and sensitive communications. This has prompted researchers to develop quantum-resistant encryption algorithms. In pharmaceutical research, quantum computers could simulate molecular interactions with unprecedented accuracy, dramatically accelerating the discovery of new drugs. In logistics and optimization, they could find the most efficient solutions to complex problems involving thousands of variables.

However, building practical quantum computers presents enormous challenges. Qubits are extremely fragile and must be maintained at temperatures near absolute zero to prevent interference from the environment. Even tiny disturbances can cause errors in calculations, a problem known as quantum decoherence. Current quantum computers have limited numbers of qubits and high error rates, making them unsuitable for many practical applications.

Despite these obstacles, progress has been significant. Major technology companies and governments are investing billions of dollars in quantum research. Some experts predict that within the next decade, quantum computers will achieve practical advantages over classical computers for specific applications, a milestone known as quantum advantage. The empirical evidence from recent experiments supports cautious optimism about the technology's trajectory.

Understanding quantum computing does not require a physics degree, but it does demand a willingness to accept concepts that seem counterintuitive. The quantum world operates by rules that are fundamentally different from our everyday experience, and embracing this dichotomy between classical and quantum reality is the first step toward understanding this revolutionary technology.`,
    contentZh: `古典電腦已經改變了現代生活的方方面面，它們使用存在於兩種狀態之一（零或一）的位元來處理資訊。然而，量子電腦基於量子力學——描述亞原子層級物質行為的物理學分支——的根本不同原理來運作。這種計算範式的轉變有潛力解決目前即使是最強大的超級電腦也無法觸及的問題。

量子計算的基本單位是量子位元。與古典位元不同，量子位元可以處於疊加態，意味著它可以同時代表零和一。這個特性使量子電腦能夠同時處理大量的可能性。另一個關鍵現象是糾纏，兩個量子位元變得相互關聯，使得一個的狀態立即影響另一個的狀態，無論它們之間的物理距離如何。這些特性使量子電腦在某些類型的計算中具有指數級的優勢。

量子計算的影響是深遠的。在密碼學方面，量子電腦可能破解目前保護金融交易和敏感通訊的加密方法。這促使研究人員開發抗量子加密演算法。在製藥研究中，量子電腦可以以前所未有的精確度模擬分子交互作用，大幅加速新藥的發現。在物流和優化方面，它們可以為涉及數千個變數的複雜問題找到最有效率的解決方案。

然而，建造實用的量子電腦面臨巨大的挑戰。量子位元極其脆弱，必須保持在接近絕對零度的溫度下，以防止環境的干擾。即使是微小的干擾也可能導致計算錯誤，這個問題被稱為量子退相干。目前的量子電腦量子位元數量有限且錯誤率高，使其不適合許多實際應用。

儘管存在這些障礙，進展依然顯著。主要科技公司和政府正在投資數十億美元於量子研究。一些專家預測，在未來十年內，量子電腦將在特定應用中實現對古典電腦的實際優勢，這一里程碑被稱為量子優勢。近期實驗的實證數據支持對該技術軌跡的審慎樂觀。

理解量子計算不需要物理學學位，但確實需要願意接受看似違反直覺的概念。量子世界按照與我們日常經驗根本不同的規則運作，接受古典與量子現實之間的二元性是理解這項革命性技術的第一步。`,
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 359,
    targetWords: ["a016", "a013", "a009", "a011", "a020"],
    questions: [
      {
        question: "What is superposition in quantum computing?",
        options: ["A. A qubit that has stopped working", "B. The ability of a qubit to represent both zero and one simultaneously", "C. A method for cooling quantum computers", "D. A type of encryption used in classical computing"],
        correctIndex: 1,
        explanation: "文章定義疊加為「量子位元能夠同時代表零和一的能力（the ability of a qubit to represent both zero and one simultaneously）」，因此答案為 B。",
      },
      {
        question: "Why could quantum computing threaten current encryption methods?",
        options: ["A. Quantum computers are cheaper to build", "B. Quantum computers could potentially break current encryption algorithms", "C. Quantum computers are connected to the internet", "D. Quantum computers use stronger passwords"],
        correctIndex: 1,
        explanation: "文章指出量子計算可能威脅現有加密，因為「量子電腦可能破解當前的加密演算法（quantum computers could potentially break current encryption algorithms）」，因此答案為 B。",
      },
      {
        question: "What is the main challenge in building practical quantum computers?",
        options: ["A. There is not enough funding for research", "B. Qubits are fragile and require extreme conditions to function correctly", "C. Classical computers are already fast enough", "D. No one understands quantum mechanics"],
        correctIndex: 1,
        explanation: "文章指出建造實用量子電腦的主要挑戰是「量子位元非常脆弱，需要極端條件才能正確運作（qubits are fragile and require extreme conditions to function correctly）」，因此答案為 B。",
      },
    ],
  },
  {
    id: "art-a22",
    title: "Genetic Engineering: Rewriting the Code of Life",
    content: `Genetic engineering, the direct manipulation of an organism's DNA, has emerged as one of the most powerful and controversial technologies of the twenty-first century. From disease-resistant crops to potential cures for genetic disorders, the applications are vast, but so are the ethical questions they raise. Understanding both the promise and the risks is essential for navigating this complex landscape.

The development of CRISPR-Cas9 technology in 2012 represented a paradigm shift in genetic engineering. CRISPR is a molecular tool that allows scientists to edit specific sections of DNA with unprecedented precision and efficiency. Previous gene-editing methods were expensive, time-consuming, and often imprecise. CRISPR made genetic modification accessible to laboratories worldwide, dramatically accelerating the pace of research.

In agriculture, genetic engineering has been used to create crops that are resistant to pests, diseases, and drought. These genetically modified organisms can increase food production and reduce the need for chemical pesticides. Proponents argue that such innovations are essential for feeding a growing global population. Critics, however, raise concerns about the long-term ecological implications of releasing genetically modified organisms into the environment and the potential for unforeseen consequences.

In medicine, genetic engineering holds extraordinary promise. Scientists are developing gene therapies that could cure inherited diseases by correcting the faulty genes that cause them. Conditions like sickle cell disease, cystic fibrosis, and certain forms of blindness have already been targeted in clinical trials. The empirical evidence from these trials is encouraging, though many challenges remain before gene therapy becomes widely available.

The most controversial application is human germline editing, which involves making genetic changes that can be passed on to future generations. While this could potentially eliminate hereditary diseases, it also raises profound ethical concerns about designer babies, genetic inequality, and unintended consequences that might not become apparent for generations. The criteria for when, if ever, germline editing should be permitted remain the subject of intense debate among scientists, ethicists, and policymakers.

The rapid advancement of genetic engineering technology demands a comprehensive regulatory framework that can keep pace with scientific progress. Balancing innovation with precaution requires ongoing dialogue between researchers, governments, and the public. As we gain the ability to rewrite the fundamental code of life, the decisions we make will have implications that extend far beyond our own lifetimes.`,
    contentZh: `基因工程——直接操控生物體DNA的技術——已成為二十一世紀最強大且最具爭議的技術之一。從抗病作物到遺傳疾病的潛在治療，其應用範圍廣泛，但所引發的倫理問題也同樣巨大。理解其前景和風險對於應對這一複雜領域至關重要。

2012年CRISPR-Cas9技術的開發代表了基因工程的範式轉變。CRISPR是一種分子工具，允許科學家以前所未有的精確度和效率編輯特定的DNA段落。之前的基因編輯方法昂貴、耗時且經常不精確。CRISPR使全球實驗室都能進行基因改造，大幅加速了研究的步伐。

在農業方面，基因工程已被用於創造抗蟲、抗病和抗旱的作物。這些基因改造生物可以增加糧食產量並減少對化學殺蟲劑的需求。支持者認為這些創新對於養活不斷增長的全球人口至關重要。然而批評者對將基因改造生物釋放到環境中的長期生態影響以及可能產生的意外後果表示擔憂。

在醫學方面，基因工程擁有非凡的前景。科學家正在開發基因療法，可以透過修正導致疾病的缺陷基因來治癒遺傳性疾病。鐮刀型細胞病、囊性纖維化和某些形式的失明等疾病已經在臨床試驗中被針對。這些試驗的實證數據令人鼓舞，儘管在基因療法廣泛可用之前仍面臨許多挑戰。

最具爭議性的應用是人類生殖細胞系編輯，即進行可以傳給後代的基因改變。雖然這可能消除遺傳性疾病，但也引發了關於設計嬰兒、基因不平等以及可能在數代後才顯現的意外後果等深刻的倫理擔憂。何時以及是否應該允許生殖細胞系編輯的標準仍然是科學家、倫理學家和政策制定者之間激烈辯論的主題。

基因工程技術的快速進步要求建立能夠跟上科學進展的全面性監管框架。平衡創新與謹慎需要研究人員、政府和公眾之間的持續對話。當我們獲得改寫生命基本密碼的能力時，我們所做的決定將產生遠遠超出我們自身壽命的影響。`,
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 354,
    targetWords: ["a016", "a011", "a013", "a010", "a015"],
    questions: [
      {
        question: "Why was the development of CRISPR considered a paradigm shift?",
        options: ["A. It was the first genetic technology ever invented", "B. It made gene editing precise, efficient, and accessible to laboratories worldwide", "C. It completely eliminated all genetic diseases", "D. It was the cheapest laboratory tool ever created"],
        correctIndex: 1,
        explanation: "文章解釋CRISPR被視為範式轉變是因為「它使基因編輯變得精確、高效，且全球實驗室都能使用（made gene editing precise, efficient, and accessible to laboratories worldwide）」，因此答案為 B。",
      },
      {
        question: "What is human germline editing?",
        options: ["A. Editing genes in adult cells that do not affect offspring", "B. Making genetic changes that can be passed on to future generations", "C. Modifying crops to increase food production", "D. A technique used only in animal research"],
        correctIndex: 1,
        explanation: "文章定義人類生殖細胞系編輯為「進行可以傳給後代的基因改變（making genetic changes that can be passed on to future generations）」，因此答案為 B。",
      },
      {
        question: "What does the author argue is needed regarding genetic engineering?",
        options: ["A. A complete ban on all genetic research", "B. Unlimited freedom for scientists to experiment", "C. A comprehensive regulatory framework that balances innovation with precaution", "D. Only private companies should conduct genetic research"],
        correctIndex: 2,
        explanation: "文章認為基因工程需要「一個平衡創新與謹慎的全面性監管框架（a comprehensive regulatory framework that balances innovation with precaution）」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-a23",
    title: "Media Literacy in the Digital Age",
    content: `In an era of information abundance, the ability to critically evaluate media has become as essential as reading and writing. Media literacy, the capacity to access, analyze, evaluate, and create media in various forms, is a vital skill that empowers individuals to navigate the complex information landscape of the twenty-first century.

The proliferation of digital media has fundamentally changed how information is produced and consumed. In the past, a relatively small number of news organizations served as gatekeepers, verifying information before publishing it. Today, anyone with internet access can create and share content, which has democratized information but also made it easier to spread misinformation and disinformation. The distinction between these two terms is significant: misinformation is false information shared without intent to harm, while disinformation is deliberately created to deceive.

Social media algorithms compound the problem by creating filter bubbles and echo chambers. These algorithms are designed to show users content that aligns with their existing interests and beliefs, which maximizes engagement but limits exposure to diverse perspectives. Over time, this can reinforce biases and polarize public opinion. Understanding how these algorithms work is a crucial component of media literacy.

Evaluating the credibility of information sources requires several skills. Critical readers should consider the source's reputation, check whether claims are supported by evidence, look for potential biases, and cross-reference information with multiple reliable sources. They should also be aware of common manipulation techniques, such as emotional appeals, misleading headlines, decontextualized statistics, and the use of ambiguous language that can be interpreted in multiple ways.

Visual media presents additional challenges. Advances in technology have made it possible to create highly realistic manipulated images and videos, often called deepfakes. These can be used to fabricate events or put words in people's mouths. As this technology becomes more sophisticated, distinguishing authentic content from fabricated material will become increasingly difficult.

Educational institutions play a critical role in developing media literacy. Implementing comprehensive media literacy curricula from an early age can equip students with the analytical tools they need to navigate the information environment. Some countries have already integrated media literacy into their national education standards, recognizing its importance for maintaining informed and engaged democratic societies.

The implications of widespread media illiteracy are severe: eroded trust in institutions, manipulated elections, public health crises fueled by misinformation, and a fragmented society unable to agree on basic facts. Investing in media literacy is therefore not merely an educational priority but a pragmatic necessity for preserving democratic governance and social cohesion.`,
    contentZh: `在資訊豐富的時代，批判性地評估媒體的能力已經變得和閱讀和寫作一樣重要。媒體素養——以各種形式取得、分析、評估和創建媒體的能力——是一項重要技能，使個人能夠駕馭二十一世紀複雜的資訊環境。

數位媒體的激增從根本上改變了資訊的生產和消費方式。過去，相對少數的新聞機構充當把關者，在發布資訊前進行核實。如今，任何有網路存取的人都可以創建和分享內容，這使資訊民主化，但也使錯誤資訊和假資訊更容易傳播。這兩個術語的區別很重要：錯誤資訊是在沒有傷害意圖的情況下分享的虛假資訊，而假資訊則是故意創建來欺騙的。

社群媒體演算法透過創建過濾氣泡和回聲室加劇了這一問題。這些演算法被設計為向用戶展示與其現有興趣和信念一致的內容，這最大化了參與度但限制了對多元觀點的接觸。隨著時間推移，這可能強化偏見並使公眾意見極化。了解這些演算法的運作方式是媒體素養的關鍵組成部分。

評估資訊來源的可信度需要多種技能。批判性讀者應該考慮來源的聲譽、檢查聲明是否有證據支持、尋找潛在的偏見，並將資訊與多個可靠來源進行交叉比對。他們還應該了解常見的操縱技巧，如情感訴求、誤導性標題、斷章取義的統計數據，以及使用可以多種方式解讀的模糊語言。

視覺媒體帶來額外的挑戰。技術的進步使得創建高度逼真的篡改圖片和影片成為可能，通常被稱為深偽。這些可以被用來捏造事件或將言語強加於人。隨著這項技術變得更加精密，區分真實內容和偽造材料將變得越來越困難。

教育機構在發展媒體素養方面發揮著關鍵作用。從小就實施全面的媒體素養課程，可以為學生裝備駕馭資訊環境所需的分析工具。一些國家已經將媒體素養納入國家教育標準，認識到其對維持知情和參與的民主社會的重要性。

媒體素養不足的廣泛影響是嚴重的：對機構信任的侵蝕、被操控的選舉、由錯誤資訊助長的公共衛生危機，以及無法就基本事實達成共識的分裂社會。因此，投資媒體素養不僅是教育優先事項，更是維護民主治理和社會凝聚力的務實必要之舉。`,
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 374,
    targetWords: ["a008", "a012", "a015", "a013", "a017"],
    questions: [
      {
        question: "What is the difference between misinformation and disinformation?",
        options: ["A. They mean exactly the same thing", "B. Misinformation is shared without intent to harm; disinformation is deliberately created to deceive", "C. Misinformation comes from social media; disinformation comes from news organizations", "D. Misinformation is more dangerous than disinformation"],
        correctIndex: 1,
        explanation: "文章區分「錯誤資訊是在沒有傷害意圖下分享的；假資訊是故意創建來欺騙的（misinformation is shared without intent to harm; disinformation is deliberately created to deceive）」，因此答案為 B。",
      },
      {
        question: "How do social media algorithms contribute to the problem of media literacy?",
        options: ["A. They show users a wide variety of perspectives", "B. They create filter bubbles that limit exposure to diverse viewpoints", "C. They automatically fact-check all content", "D. They block all false information"],
        correctIndex: 1,
        explanation: "文章說明社群媒體演算法「創建過濾氣泡，限制對多元觀點的接觸（create filter bubbles that limit exposure to diverse viewpoints）」，因此答案為 B。",
      },
      {
        question: "Why does the author consider media literacy a pragmatic necessity?",
        options: ["A. Because social media companies require it", "B. Because it helps people use technology faster", "C. Because widespread media illiteracy threatens democratic governance and social cohesion", "D. Because it increases advertising revenue"],
        correctIndex: 2,
        explanation: "文章認為媒體素養是務實必要之舉，因為「媒體素養不足威脅民主治理和社會凝聚力（widespread media illiteracy threatens democratic governance and social cohesion）」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-a24",
    title: "Cultural Anthropology: Understanding Human Diversity",
    content: `Cultural anthropology is the study of human cultures and societies across time and around the world. Unlike other social sciences that may focus primarily on Western societies, cultural anthropology takes a global and comparative perspective, seeking to understand the full range of human cultural experience. This approach provides invaluable insights into both the diversity and the commonalities of human life.

One of the foundational principles of cultural anthropology is cultural relativism, the idea that a culture should be understood on its own terms rather than judged by the standards of another culture. This does not mean that anthropologists approve of all cultural practices, but rather that they seek to understand the logic and meaning of practices within their cultural context before making evaluative judgments. This perspective stands in contrast to ethnocentrism, the tendency to view one's own culture as superior to others, which has historically led to misunderstanding, prejudice, and conflict.

Anthropologists use a distinctive research method called ethnography, which involves living among the people being studied for an extended period, participating in their daily activities, and conducting in-depth interviews. This immersive approach allows researchers to gain a comprehensive understanding of cultural practices that surveys and statistical analyses alone cannot provide. The empirical data gathered through ethnography often reveals complexities and nuances that challenge prevailing assumptions.

Cultural anthropology has made significant contributions to our understanding of kinship systems, religious beliefs, economic practices, political organization, and artistic expression across societies. Anthropological research has demonstrated that many behaviors and institutions that people assume are natural or universal are actually culturally constructed and vary enormously from one society to another.

In the contemporary world, cultural anthropology addresses pressing issues such as globalization, migration, indigenous rights, and the impact of technology on cultural practices. As the world becomes more interconnected, understanding cultural differences is increasingly important for diplomacy, business, healthcare, and education.

However, the discipline also faces critiques. Some scholars question whether outsiders can truly understand another culture, regardless of how long they live within it. Others point out that the historical relationship between anthropology and colonialism raises ethical concerns about power dynamics in research. Modern anthropologists are actively grappling with these critiques, developing more collaborative research methods that give greater voice to the communities being studied.

The study of cultural anthropology ultimately teaches us that there is no single correct way to organize human society. By juxtaposing diverse cultural practices and beliefs, we gain a deeper appreciation for the creativity and adaptability of the human species.`,
    contentZh: `文化人類學是研究跨時間和全球各地人類文化和社會的學科。與其他可能主要關注西方社會的社會科學不同，文化人類學採取全球性和比較性的視角，試圖了解人類文化經驗的完整範圍。這種方法為人類生活的多樣性和共通性提供了無價的見解。

文化人類學的基礎原則之一是文化相對主義——即一種文化應該在其自身的條件下被理解，而非用另一種文化的標準來評判。這並不意味著人類學家認同所有的文化實踐，而是他們在做出評價性判斷之前，試圖理解實踐在其文化脈絡中的邏輯和意義。這一觀點與族群中心主義形成對比——即認為自己的文化優於其他文化的傾向——歷史上這種態度導致了誤解、偏見和衝突。

人類學家使用一種獨特的研究方法稱為民族誌，涉及長期生活在被研究的人群中、參與他們的日常活動並進行深入訪談。這種沉浸式的方法使研究者能夠對文化實踐有全面的理解，這是僅靠調查和統計分析無法提供的。透過民族誌收集的實證數據經常揭示挑戰既有假設的複雜性和細微差別。

文化人類學對我們理解不同社會的親屬制度、宗教信仰、經濟實踐、政治組織和藝術表達做出了重大貢獻。人類學研究已經證明，許多人們假定是自然的或普遍的行為和制度，實際上是文化建構的，在不同社會之間差異巨大。

在當代世界，文化人類學關注全球化、移民、原住民權利以及科技對文化實踐影響等緊迫議題。隨著世界變得更加互聯，理解文化差異對外交、商業、醫療保健和教育越來越重要。

然而，這個學科也面臨批評。一些學者質疑外來者是否能真正理解另一種文化，無論他們在其中生活多久。其他人指出，人類學與殖民主義之間的歷史關係引發了關於研究中權力動態的倫理擔憂。現代人類學家正在積極應對這些批評，發展更具協作性的研究方法，讓被研究的社區有更大的發言權。

文化人類學的研究最終告訴我們，組織人類社會沒有唯一正確的方式。透過並列多元的文化實踐和信仰，我們對人類物種的創造力和適應力有了更深刻的認識。`,
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 370,
    targetWords: ["a008", "a015", "a011", "a019", "a004"],
    questions: [
      {
        question: "What is cultural relativism?",
        options: ["A. The belief that all cultures are identical", "B. The idea that a culture should be understood on its own terms rather than judged by another culture's standards", "C. The theory that one's own culture is superior", "D. A method of ranking cultures from best to worst"],
        correctIndex: 1,
        explanation: "文章定義文化相對主義為「一種文化應該在其自身條件下被理解，而非用另一種文化的標準來評判（a culture should be understood on its own terms rather than judged by another culture's standards）」，因此答案為 B。",
      },
      {
        question: "What is ethnography?",
        options: ["A. A statistical analysis of population data", "B. An immersive research method involving living among the people being studied", "C. A type of written language used by ancient civilizations", "D. A survey distributed to random households"],
        correctIndex: 1,
        explanation: "文章將民族誌描述為「一種沉浸式研究方法，涉及在被研究的人群中生活（an immersive research method involving living among the people being studied）」，因此答案為 B。",
      },
      {
        question: "What critique of anthropology is mentioned in the article?",
        options: ["A. Anthropology is too focused on numbers", "B. Its historical relationship with colonialism raises ethical concerns about power dynamics", "C. Anthropologists only study Western societies", "D. Ethnographic research is too short to be useful"],
        correctIndex: 1,
        explanation: "文章提到的人類學批評是「其與殖民主義的歷史關係引發了關於權力動態的倫理擔憂（its historical relationship with colonialism raises ethical concerns about power dynamics）」，因此答案為 B。",
      },
    ],
  },
  {
    id: "art-a25",
    title: "The Neuroscience of Emotions",
    content: `Emotions are a fundamental part of the human experience, influencing our decisions, relationships, and overall well-being. For centuries, emotions were considered the domain of philosophy and literature rather than science. However, advances in neuroscience have revealed the complex biological mechanisms that underlie our emotional experiences, fundamentally changing our understanding of what emotions are and how they work.

The limbic system, a group of interconnected brain structures, plays a central role in emotional processing. The amygdala, a small almond-shaped structure, is particularly important for detecting threats and generating fear responses. When you encounter something potentially dangerous, the amygdala activates the body's fight-or-flight response before your conscious mind has even processed the situation. This rapid, automatic reaction has significant evolutionary advantages, as it allows humans to respond to threats within milliseconds.

The prefrontal cortex, located behind the forehead, is responsible for regulating emotions and making complex decisions. It acts as a moderating influence on the amygdala, allowing us to evaluate situations rationally and control impulsive emotional reactions. The interplay between these two regions is crucial for emotional balance. When the prefrontal cortex is impaired, as in certain brain injuries or during extreme stress, people may experience difficulty managing their emotions.

Neurotransmitters, chemical messengers in the brain, are also essential for emotional regulation. Serotonin affects mood, appetite, and sleep. Dopamine is associated with pleasure, motivation, and reward-seeking behavior. Imbalances in these neurotransmitters have been linked to various mental health conditions, including depression and anxiety. Modern psychiatric medications often work by altering neurotransmitter levels, though the relationship between brain chemistry and emotional experience is far more complex than a simple correlation.

Recent research has challenged the traditional view that emotions are universal and hardwired. The theory of constructed emotion, proposed by neuroscientist Lisa Feldman Barrett, suggests that emotions are not fixed biological responses but are constructed by the brain based on past experience, cultural learning, and the current context. According to this perspective, the brain continuously makes predictions about what is happening in the body and the environment, and emotions arise as the brain's interpretation of these internal and external signals.

This paradigm has significant implications for mental health treatment. If emotions are partially constructed through learned patterns, then therapeutic approaches that help people reinterpret their experiences and build new emotional habits may be more effective than previously thought. The empirical evidence from studies on cognitive behavioral therapy and mindfulness meditation supports this view, showing that people can indeed learn to change their emotional responses over time.`,
    contentZh: `情緒是人類經驗的基本部分，影響著我們的決策、人際關係和整體幸福感。幾個世紀以來，情緒被認為是哲學和文學的領域，而非科學。然而，神經科學的進步揭示了我們情緒體驗背後的複雜生物機制，從根本上改變了我們對情緒是什麼以及如何運作的理解。

邊緣系統——一組相互連接的大腦結構——在情緒處理中扮演核心角色。杏仁核，一個小的杏仁狀結構，對於偵測威脅和產生恐懼反應特別重要。當你遇到潛在危險的事物時，杏仁核在你的意識心智還沒有處理情況之前就啟動了身體的戰鬥或逃跑反應。這種快速、自動的反應具有重要的演化優勢，因為它允許人類在毫秒內對威脅做出回應。

前額葉皮質位於額頭後方，負責調節情緒和做出複雜的決策。它對杏仁核起著調節作用，使我們能夠理性地評估情況並控制衝動的情緒反應。這兩個區域之間的相互作用對情緒平衡至關重要。當前額葉皮質受損時（如某些腦損傷或極度壓力下），人們可能難以管理自己的情緒。

神經傳導物質——大腦中的化學信使——對情緒調節也至關重要。血清素影響情緒、食慾和睡眠。多巴胺與愉悅、動機和尋求獎勵的行為有關。這些神經傳導物質的失衡與各種心理健康狀況有關，包括憂鬱和焦慮。現代精神科藥物通常透過改變神經傳導物質的水平來發揮作用，儘管大腦化學與情緒體驗之間的關係遠比簡單的相關性複雜得多。

近期研究挑戰了情緒是普遍且天生的傳統觀點。由神經科學家麗莎・費德曼・巴瑞特提出的建構情緒理論認為，情緒不是固定的生物反應，而是大腦基於過去經驗、文化學習和當前脈絡所建構的。根據這一觀點，大腦持續對身體和環境中發生的事情進行預測，而情緒是大腦對這些內在和外在信號的詮釋。

這一範式對心理健康治療有重要影響。如果情緒部分是透過學習模式建構的，那麼幫助人們重新詮釋其經驗並建立新的情緒習慣的治療方法可能比之前認為的更有效。認知行為療法和正念冥想研究的實證數據支持這一觀點，表明人們確實可以隨著時間學會改變他們的情緒反應。`,
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 381,
    targetWords: ["a004", "a006", "a016", "a008", "a011"],
    questions: [
      {
        question: "What role does the amygdala play in emotional processing?",
        options: ["A. It regulates logical thinking", "B. It detects threats and generates rapid fear responses", "C. It controls language production", "D. It stores long-term memories"],
        correctIndex: 1,
        explanation: "文章指出杏仁核的角色是「偵測威脅並產生快速的恐懼反應（detects threats and generates rapid fear responses）」，因此答案為 B。",
      },
      {
        question: "What does the theory of constructed emotion suggest?",
        options: ["A. Emotions are entirely genetic and cannot be changed", "B. Emotions are constructed by the brain based on experience, culture, and context", "C. Only negative emotions are constructed; positive ones are innate", "D. Emotions do not involve any brain activity"],
        correctIndex: 1,
        explanation: "建構情緒理論認為「情緒是大腦基於經驗、文化和脈絡所建構的（emotions are constructed by the brain based on experience, culture, and context）」，因此答案為 B。",
      },
      {
        question: "What implication does the constructed emotion theory have for mental health treatment?",
        options: ["A. Therapy is ineffective because emotions are hardwired", "B. Only medication can change emotional responses", "C. Therapeutic approaches that help reinterpret experiences may be more effective than previously thought", "D. Emotional problems cannot be treated at all"],
        correctIndex: 2,
        explanation: "建構情緒理論暗示「幫助重新詮釋經驗的治療方法可能比之前認為的更有效（therapeutic approaches that help reinterpret experiences may be more effective than previously thought）」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-a26",
    title: "Philosophy of Technology: How Tools Shape Our World",
    content: `Technology is not merely a collection of tools and machines; it is a force that fundamentally shapes how humans experience the world, interact with each other, and understand themselves. The philosophy of technology examines these deeper questions, going beyond the practical aspects of innovation to explore the broader implications of our technological choices.

One of the earliest and most influential thinkers in this field was Martin Heidegger, who argued that modern technology transforms the natural world into a mere resource to be exploited. He used the term "standing reserve" to describe how technology leads us to view rivers as potential hydroelectric power, forests as timber supplies, and even people as human resources. This perspective challenges the common assumption that technology is neutral and that its effects depend entirely on how it is used.

The philosopher of technology Jacques Ellul took this analysis further, arguing that technology follows its own logic of efficiency, which he called "technique." According to Ellul, technique tends to expand into every area of life, replacing traditional values, customs, and ways of making decisions with a single-minded pursuit of the most efficient solution. This phenomenon can be observed in how algorithmic decision-making is increasingly used in hiring, criminal sentencing, and healthcare, often with ambiguous results that are difficult to evaluate or appeal.

More recently, scholars have focused on how digital technology affects human cognition and social relationships. Research shows that constant connectivity and information overload can reduce attention spans, impair deep thinking, and increase anxiety. Social media platforms, designed to maximize engagement through dopamine-driven feedback loops, have been linked to rising rates of depression among young people. The dichotomy between technology's promise of connection and its apparent contribution to loneliness is one of the central paradoxes of the digital age.

However, not all philosophical perspectives on technology are pessimistic. Pragmatic thinkers argue that technology is a tool for human liberation when guided by democratic values and ethical principles. They emphasize that humans have agency in deciding how technology is developed and deployed. The key question is not whether to use technology but how to ensure that technological development serves human flourishing rather than undermining it.

The philosophy of technology does not provide simple answers, but it offers a framework for asking the right questions. As artificial intelligence, biotechnology, and surveillance technologies continue to advance, the need for philosophical reflection on technology's role in society has never been more urgent. Understanding the substantive ways in which technology shapes our lives is essential for making informed decisions about the future we want to create.`,
    contentZh: `科技不僅僅是工具和機器的集合；它是從根本上塑造人類如何體驗世界、彼此互動和理解自身的力量。科技哲學探究這些更深層的問題，超越創新的實用面向，探索我們科技選擇的更廣泛影響。

這個領域最早且最具影響力的思想家之一是馬丁・海德格爾，他認為現代科技將自然世界轉化為僅僅是被開發的資源。他使用「備用物」這個術語來描述科技如何導致我們將河流視為潛在的水力發電、將森林視為木材供應，甚至將人視為人力資源。這一觀點挑戰了科技是中立的、其影響完全取決於如何使用的常見假設。

科技哲學家雅克・埃呂爾進一步推進了這一分析，他認為科技遵循其自身的效率邏輯，他稱之為「技術」。根據埃呂爾的觀點，技術傾向於擴展到生活的每一個領域，以對最有效率解決方案的一心追求取代傳統價值觀、習俗和決策方式。這一現象可以在演算法決策日益被應用於招聘、刑事判決和醫療保健中觀察到，其結果往往是模糊的，難以評估或上訴。

最近，學者們關注數位科技如何影響人類認知和社會關係。研究顯示，持續的連接和資訊過載可以減少注意力持續時間、損害深度思考和增加焦慮。社群媒體平台透過多巴胺驅動的回饋迴路設計來最大化參與度，已被關聯到年輕人中日益增長的憂鬱率。科技承諾連結與其對孤獨的明顯貢獻之間的二元性，是數位時代的核心悖論之一。

然而，並非所有關於科技的哲學觀點都是悲觀的。務實主義思想家認為，當科技受到民主價值觀和道德原則的指導時，它是人類解放的工具。他們強調人類在決定科技如何開發和部署方面具有能動性。關鍵問題不是是否使用科技，而是如何確保技術發展服務於人類繁榮而非破壞它。

科技哲學不提供簡單的答案，但它提供了提出正確問題的框架。隨著人工智慧、生物技術和監控技術的持續進步，對科技在社會中角色進行哲學反思的需求從未如此迫切。理解科技以實質性方式塑造我們生活是為我們想要創造的未來做出明智決定的關鍵。`,
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 385,
    targetWords: ["a013", "a008", "a012", "a020", "a017"],
    questions: [
      {
        question: "What did Heidegger mean by 'standing reserve'?",
        options: ["A. A military strategy for defending territory", "B. The tendency of technology to make us view nature as a resource to be exploited", "C. A type of renewable energy storage", "D. The reserve power in electronic devices"],
        correctIndex: 1,
        explanation: "文章解釋海德格爾的「備用物」是指「科技使我們傾向於將自然視為待開發的資源（the tendency of technology to make us view nature as a resource to be exploited）」，因此答案為 B。",
      },
      {
        question: "What is the central paradox of digital technology mentioned in the article?",
        options: ["A. Technology is both fast and slow", "B. Technology promises connection but may contribute to loneliness", "C. Technology is expensive but widely available", "D. Technology requires electricity but saves energy"],
        correctIndex: 1,
        explanation: "文章提到的數位科技核心悖論是「科技承諾連結但可能助長孤獨（technology promises connection but may contribute to loneliness）」，因此答案為 B。",
      },
      {
        question: "What do pragmatic philosophers argue about technology?",
        options: ["A. All technology should be abandoned", "B. Technology always leads to negative outcomes", "C. Technology can serve human liberation when guided by democratic values and ethics", "D. Only scientists should decide how technology is used"],
        correctIndex: 2,
        explanation: "務實主義哲學家認為「當科技受到民主價值觀和道德原則的指導時，它可以服務於人類解放（technology can serve human liberation when guided by democratic values and ethics）」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-a27",
    title: "Public Health Policy: Balancing Individual Rights and Collective Welfare",
    content: `Public health policy occupies a unique position at the intersection of science, ethics, and governance. It involves making decisions that affect entire populations, often requiring a delicate balance between protecting individual freedoms and promoting the collective welfare of society. The tensions inherent in this balance have been brought into sharp focus by recent global health crises.

The fundamental goal of public health is to prevent disease, prolong life, and promote health through organized community efforts. Unlike clinical medicine, which focuses on treating individual patients, public health takes a population-level perspective. This means that policies aimed at improving overall health outcomes sometimes restrict individual behavior. Smoking bans in public places, mandatory seatbelt laws, and quarantine measures during pandemics are all examples of policies that limit personal freedom for the greater good.

The ethical framework most commonly used to justify public health interventions is utilitarianism, the principle that actions are right insofar as they promote the greatest good for the greatest number. However, this framework has limitations. Utilitarian calculations can lead to policies that disproportionately burden vulnerable populations. For example, lockdown measures during a pandemic may protect the majority but impose severe economic hardship on low-income workers who cannot work from home. A comprehensive public health policy must consider equity and justice alongside aggregate benefits.

Evidence-based policymaking is essential for effective public health. Decisions should be grounded in empirical research rather than ideology or political expediency. However, translating scientific evidence into policy is rarely straightforward. Research findings may be ambiguous, incomplete, or subject to different interpretations. Policymakers must also consider practical constraints such as economic costs, political feasibility, and public acceptance.

International cooperation is increasingly important in public health. Infectious diseases do not respect national borders, and global supply chains for medicines and medical equipment create interdependencies among nations. The response to the COVID-19 pandemic revealed both the potential and the limitations of international health coordination. Wealthy nations secured vaccine supplies while many developing countries faced severe shortages, raising fundamental questions about global health equity.

The criteria for evaluating public health policies should include not only their effectiveness in reducing disease but also their impact on civil liberties, economic well-being, and social equity. Policymakers must engage in transparent deliberation, clearly communicating the rationale for their decisions and acknowledging trade-offs. Public trust is essential for the success of health interventions, and trust can only be maintained through honesty, consistency, and accountability.

The implications of public health policy extend far beyond the immediate crisis they address. The institutions, norms, and precedents established during health emergencies shape the relationship between government and citizens for decades to come.`,
    contentZh: `公共衛生政策在科學、倫理和治理的交叉點上佔有獨特的位置。它涉及做出影響整體人口的決定，通常需要在保護個人自由和促進社會集體福祉之間取得微妙的平衡。這種平衡中固有的緊張關係在近期的全球衛生危機中被突出地呈現。

公共衛生的基本目標是透過有組織的社區努力來預防疾病、延長壽命和促進健康。與專注於治療個別患者的臨床醫學不同，公共衛生採取人口層級的視角。這意味著旨在改善整體健康結果的政策有時會限制個人行為。公共場所禁菸令、強制繫安全帶法和大流行期間的隔離措施都是為了更大利益而限制個人自由的政策範例。

最常用來為公共衛生干預辯護的倫理框架是功利主義——即行為的正確性取決於它們是否促進最多人的最大利益。然而，這一框架有其局限性。功利主義的計算可能導致不成比例地加重弱勢族群負擔的政策。例如，大流行期間的封鎖措施可能保護了大多數人，但對無法居家工作的低收入工人造成了嚴重的經濟困難。全面的公共衛生政策必須在考慮總體效益的同時，也考慮公平和正義。

循證政策制定對有效的公共衛生至關重要。決策應以實證研究為基礎，而非意識形態或政治權宜之計。然而，將科學證據轉化為政策很少是簡單直接的。研究結果可能模糊、不完整或可以有不同的解讀。政策制定者還必須考慮經濟成本、政治可行性和公眾接受度等實際限制。

國際合作在公共衛生中越來越重要。傳染病不尊重國界，藥品和醫療設備的全球供應鏈在各國之間創造了相互依存。COVID-19大流行的應對揭示了國際衛生協調的潛力和局限性。富裕國家搶購了疫苗供應，而許多發展中國家面臨嚴重短缺，這引發了關於全球衛生公平的根本問題。

評估公共衛生政策的標準不僅應包括其在減少疾病方面的有效性，還應包括其對公民自由、經濟福祉和社會公平的影響。政策制定者必須進行透明的審議，清楚地傳達其決定的理由並承認取捨。公眾信任對衛生干預的成功至關重要，而信任只能透過誠實、一致和問責來維持。

公共衛生政策的影響遠遠超出它們所應對的直接危機。在衛生緊急情況下建立的制度、規範和先例，將在未來幾十年塑造政府與公民之間的關係。`,
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 384,
    targetWords: ["a008", "a015", "a011", "a012", "a010"],
    questions: [
      {
        question: "What is the fundamental difference between clinical medicine and public health?",
        options: ["A. Clinical medicine is more expensive", "B. Clinical medicine focuses on individuals while public health takes a population-level perspective", "C. Public health only deals with infectious diseases", "D. Clinical medicine does not use scientific evidence"],
        correctIndex: 1,
        explanation: "文章指出臨床醫學與公共衛生的根本區別在於「臨床醫學專注於個人，而公共衛生採取人口層級的視角（clinical medicine focuses on individuals while public health takes a population-level perspective）」，因此答案為 B。",
      },
      {
        question: "What limitation of utilitarianism in public health does the article discuss?",
        options: ["A. It is too expensive to implement", "B. It can lead to policies that disproportionately burden vulnerable populations", "C. It only works in wealthy countries", "D. It requires unanimous public agreement"],
        correctIndex: 1,
        explanation: "文章討論功利主義的局限性是「它可能導致不成比例地加重弱勢族群負擔的政策（can lead to policies that disproportionately burden vulnerable populations）」，因此答案為 B。",
      },
      {
        question: "Why is public trust important for public health policy?",
        options: ["A. It reduces the cost of healthcare", "B. It makes policymakers more popular", "C. Trust is essential for the success of health interventions", "D. It eliminates the need for enforcement"],
        correctIndex: 2,
        explanation: "文章強調公眾信任重要是因為「信任對衛生干預的成功至關重要（trust is essential for the success of health interventions）」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-a28",
    title: "Education Reform: Rethinking How We Learn",
    content: `Education systems around the world are facing increasing pressure to reform. The traditional model of education, which emphasizes standardized testing, lecture-based instruction, and a one-size-fits-all curriculum, was designed for an industrial economy. Many educators and researchers argue that this model is inadequate for preparing students for the complex, rapidly changing knowledge economy of the twenty-first century.

One major area of reform focuses on pedagogy, the methods and practices of teaching. Research consistently shows that active learning approaches, where students engage with material through discussion, problem-solving, and collaborative projects, produce better outcomes than passive lecture-based instruction. The evidence from educational neuroscience supports this finding, demonstrating that active engagement creates stronger neural connections and leads to deeper understanding. Despite this empirical evidence, many educational institutions remain slow to adopt these methods.

Another significant reform movement emphasizes the development of critical thinking, creativity, and social-emotional skills alongside traditional academic content. Proponents argue that in a world where information is readily available through technology, the ability to analyze, evaluate, and synthesize information is more valuable than the ability to memorize facts. These higher-order thinking skills are essential for navigating the ambiguous and complex challenges of modern professional and civic life.

Assessment reform is closely linked to curricular and pedagogical changes. Standardized tests, while useful for measuring certain types of knowledge, have been criticized for narrowing the curriculum, encouraging rote memorization, and failing to capture important skills like creativity and collaboration. Alternative assessment methods, such as portfolios, project-based evaluations, and competency-based progression, are gaining traction as more comprehensive measures of student achievement.

Technology is playing an increasingly important role in education reform. Online learning platforms, adaptive software, and artificial intelligence tutoring systems offer the potential for personalized learning experiences that adapt to each student's pace and needs. However, the implementation of educational technology has been uneven, with significant disparities between well-resourced and under-resourced schools. There is also growing concern about screen time, data privacy, and the digital divide.

The criteria for evaluating education reform should include not only academic achievement but also equity, student well-being, and the development of skills needed for democratic citizenship. Meaningful reform requires sustained investment, collaboration among stakeholders, and a willingness to challenge deeply held assumptions about what education should look like. The paradigm shift from teaching as information delivery to learning as active construction of knowledge is perhaps the most fundamental change that education systems need to embrace.`,
    contentZh: `世界各地的教育系統面臨越來越大的改革壓力。傳統的教育模式強調標準化考試、講授式教學和一體適用的課程，是為工業經濟設計的。許多教育工作者和研究人員認為，這種模式不足以為學生準備好面對二十一世紀複雜、快速變化的知識經濟。

改革的一個主要領域聚焦於教學法——教學的方法和實踐。研究一致表明，主動學習方法——學生透過討論、解決問題和協作專案參與學習材料——比被動的講授式教學產生更好的結果。教育神經科學的證據支持這一發現，證明主動參與能創造更強的神經連結並導致更深層的理解。儘管有這些實證數據，許多教育機構仍然緩慢地採用這些方法。

另一個重要的改革運動強調在傳統學術內容之外，發展批判性思維、創造力和社會情感技能。支持者認為，在資訊透過科技唾手可得的世界裡，分析、評估和綜合資訊的能力比記憶事實的能力更有價值。這些高階思維技能對於應對現代專業和公民生活中模糊和複雜的挑戰至關重要。

評量改革與課程和教學法的變化密切相關。標準化考試雖然對衡量某些類型的知識有用，但因為它們窄化課程、鼓勵死記硬背、無法捕捉創造力和協作等重要技能而受到批評。替代評量方法，如作品集、專案導向評估和能力導向進階，作為更全面的學生成就衡量標準正在獲得認可。

科技在教育改革中扮演著越來越重要的角色。線上學習平台、適性軟體和人工智慧輔導系統提供了個人化學習體驗的潛力，能適應每個學生的進度和需求。然而，教育科技的實施一直不均衡，資源豐富和資源不足的學校之間存在顯著差距。人們也越來越擔心螢幕使用時間、數據隱私和數位落差的問題。

評估教育改革的標準不應僅包括學業成就，還應包括公平性、學生福祉以及民主公民所需技能的發展。有意義的改革需要持續的投資、利益相關者之間的合作，以及挑戰對教育應該是什麼樣子的根深蒂固假設的意願。從教學作為資訊傳遞到學習作為知識主動建構的範式轉變，可能是教育系統需要接受的最根本變革。`,
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 371,
    targetWords: ["a011", "a012", "a010", "a015", "a016"],
    questions: [
      {
        question: "Why does the article argue the traditional education model is inadequate?",
        options: ["A. It was designed for an industrial economy, not the modern knowledge economy", "B. It is too expensive to maintain", "C. Teachers no longer want to teach", "D. Students today are less intelligent than previous generations"],
        correctIndex: 0,
        explanation: "文章認為傳統教育模式不足因為「它是為工業經濟而非現代知識經濟設計的（it was designed for an industrial economy, not the modern knowledge economy）」，因此答案為 A。",
      },
      {
        question: "What does educational neuroscience research show about active learning?",
        options: ["A. It produces the same results as passive learning", "B. It creates stronger neural connections and leads to deeper understanding", "C. It only works for science subjects", "D. It requires expensive technology"],
        correctIndex: 1,
        explanation: "教育神經科學研究顯示主動學習「能創造更強的神經連結並導致更深層的理解（creates stronger neural connections and leads to deeper understanding）」，因此答案為 B。",
      },
      {
        question: "What concern about educational technology does the article raise?",
        options: ["A. Technology is too difficult for teachers to use", "B. There are significant disparities in technology access between well-resourced and under-resourced schools", "C. Students prefer textbooks to computers", "D. Technology cannot be used for assessment"],
        correctIndex: 1,
        explanation: "文章對教育科技提出的擔憂是「資源豐富和資源不足的學校之間在科技取得上存在顯著差距（significant disparities in technology access between well-resourced and under-resourced schools）」，因此答案為 B。",
      },
    ],
  },
  {
    id: "art-a29",
    title: "The Scientific Method: Foundation of Modern Knowledge",
    content: `The scientific method is the systematic process by which scientists investigate natural phenomena, test hypotheses, and build reliable knowledge about the world. It is arguably the most important intellectual achievement in human history, providing a framework for distinguishing well-supported claims from speculation, opinion, and superstition. Understanding the scientific method is essential not only for scientists but for anyone who wants to evaluate evidence and make informed decisions.

The process typically begins with observation. Scientists notice a pattern, anomaly, or question in the natural world that requires explanation. From these observations, they formulate a hypothesis, a tentative explanation that can be tested through experimentation. A good hypothesis must be falsifiable, meaning it must be possible to design an experiment that could prove it wrong. This criterion of falsifiability, emphasized by the philosopher Karl Popper, distinguishes scientific claims from those that cannot be empirically tested.

Experimentation is the heart of the scientific method. Researchers design controlled experiments to test their hypotheses, carefully manipulating one variable while holding others constant. The goal is to isolate the specific cause-and-effect relationship being studied. Results are collected, analyzed using statistical methods, and compared against the predictions of the hypothesis.

Crucially, scientific results must be reproducible. Other researchers should be able to repeat the experiment and obtain similar results. Reproducibility serves as a quality control mechanism, helping to identify errors, biases, and fraud. When results cannot be reproduced, the original findings are called into question. The ongoing replication crisis in some scientific fields has highlighted the importance of rigorous methodology and transparent reporting.

Peer review is another essential component of the scientific process. Before research is published in a scientific journal, it is evaluated by other experts in the field who assess the methodology, analysis, and conclusions. While peer review is not perfect and can sometimes be slow or biased, it provides an important check on the quality of scientific research.

It is important to understand that scientific knowledge is provisional. Theories are not absolute truths but are the best explanations supported by available evidence. When new evidence emerges that contradicts an established theory, the theory must be revised or replaced. This willingness to update conclusions in light of new evidence is what gives science its self-correcting nature and distinguishes it from dogma.

The scientific method has enabled humanity to understand the structure of atoms, the evolution of species, the workings of the human genome, and the history of the universe. Its power lies not in providing certainty but in providing the most reliable method available for substantiating claims about the natural world.`,
    contentZh: `科學方法是科學家用來調查自然現象、測試假說和建立關於世界的可靠知識的系統化過程。它可以說是人類歷史上最重要的智識成就，提供了區分有充分支持的主張與推測、意見和迷信的框架。理解科學方法不僅對科學家至關重要，對任何想要評估證據和做出明智決定的人來說都是必要的。

這個過程通常始於觀察。科學家注意到自然世界中的一個模式、異常或需要解釋的問題。從這些觀察中，他們提出假說——一個可以透過實驗來測試的暫時性解釋。好的假說必須是可證偽的，意味著必須可以設計一個可能證明它是錯誤的實驗。這個可證偽性的標準由哲學家卡爾・波普爾所強調，使科學主張與無法被經驗性地測試的主張區分開來。

實驗是科學方法的核心。研究人員設計控制實驗來測試他們的假說，仔細操控一個變數同時保持其他變數不變。目標是隔離正在研究的特定因果關係。結果被收集、使用統計方法分析，並與假說的預測進行比較。

至關重要的是，科學結果必須是可重現的。其他研究人員應該能夠重複實驗並獲得類似的結果。可重現性作為品質控制機制，幫助識別錯誤、偏見和造假。當結果無法被重現時，原始的發現就會受到質疑。某些科學領域正在進行的重現性危機凸顯了嚴謹方法論和透明報告的重要性。

同儕審查是科學過程的另一個基本組成部分。在研究發表在科學期刊之前，它會被該領域的其他專家評估，他們評估方法論、分析和結論。雖然同儕審查並不完美，有時可能緩慢或有偏見，但它為科學研究的品質提供了重要的檢驗。

重要的是要理解，科學知識是暫時性的。理論不是絕對真理，而是由現有證據支持的最佳解釋。當出現與已建立的理論相矛盾的新證據時，理論必須被修改或替換。這種根據新證據更新結論的意願賦予了科學自我修正的本質，使其與教條區分開來。

科學方法使人類得以理解原子的結構、物種的演化、人類基因組的運作和宇宙的歷史。它的力量不在於提供確定性，而在於提供目前可用的最可靠的方法來證實關於自然世界的主張。`,
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 383,
    targetWords: ["a003", "a011", "a001", "a018", "a010"],
    questions: [
      {
        question: "What is falsifiability and why is it important?",
        options: ["A. The ability to prove a hypothesis true; it confirms scientific claims", "B. The possibility of designing an experiment that could prove a hypothesis wrong; it distinguishes science from untestable claims", "C. The tendency of experiments to fail; it shows that science is unreliable", "D. The process of making false claims; it is a problem in science"],
        correctIndex: 1,
        explanation: "文章解釋可證偽性是「可以設計實驗來證明假說是錯誤的可能性；它將科學與不可測試的主張區分開來（the possibility of designing an experiment that could prove a hypothesis wrong; it distinguishes science from untestable claims）」，因此答案為 B。",
      },
      {
        question: "Why is reproducibility important in science?",
        options: ["A. It makes experiments cheaper to conduct", "B. It ensures that scientists publish more papers", "C. It serves as a quality control mechanism to identify errors and validate findings", "D. It allows scientists to patent their discoveries"],
        correctIndex: 2,
        explanation: "文章指出可重現性重要是因為「它作為品質控制機制來識別錯誤並驗證發現（serves as a quality control mechanism to identify errors and validate findings）」，因此答案為 C。",
      },
      {
        question: "What does the article mean by saying scientific knowledge is 'provisional'?",
        options: ["A. Scientific knowledge is always temporary and unreliable", "B. Theories represent the best explanations supported by current evidence and may be revised with new data", "C. Scientists are not confident in their work", "D. Only provisional funding is available for research"],
        correctIndex: 1,
        explanation: "文章說科學知識是「暫時性的」意味著「理論代表由現有證據支持的最佳解釋，可能隨新數據而修訂（theories represent the best explanations supported by current evidence and may be revised with new data）」，因此答案為 B。",
      },
    ],
  },
  {
    id: "art-a30",
    title: "Endangered Species: The Race Against Extinction",
    content: `The planet is currently experiencing its sixth mass extinction event, driven not by natural catastrophes but by human activities. Scientists estimate that species are disappearing at a rate one hundred to one thousand times faster than the natural background extinction rate. This unprecedented loss of biodiversity has profound implications for ecosystems, economies, and human well-being, making the conservation of endangered species one of the most urgent challenges of our time.

The International Union for Conservation of Nature maintains the Red List, a comprehensive database that classifies species according to their risk of extinction. Categories range from "least concern" to "critically endangered" and "extinct in the wild." Currently, more than forty thousand species are classified as threatened with extinction, including well-known animals like tigers, gorillas, and sea turtles, as well as thousands of less charismatic but ecologically important plants, insects, and fungi.

The causes of species endangerment are well documented. Habitat destruction, primarily through deforestation and land conversion for agriculture, is the single largest threat. As human populations grow and demand for food and resources increases, natural habitats are fragmented or eliminated entirely. Climate change is emerging as an increasingly significant threat, as many species cannot adapt quickly enough to changing temperatures and precipitation patterns.

Overexploitation through hunting, fishing, and wildlife trade also drives species toward extinction. The illegal wildlife trade is estimated to be worth billions of dollars annually, making it one of the largest forms of organized crime globally. Invasive species introduced by human activities outcompete native species for resources, while pollution contaminates habitats and disrupts reproductive cycles.

Conservation efforts employ multiple strategies. Protected areas, including national parks and marine reserves, safeguard critical habitats. Captive breeding programs aim to increase populations of critically endangered species for eventual reintroduction into the wild. Legal frameworks such as the Convention on International Trade in Endangered Species regulate the cross-border movement of protected animals and plants.

However, conservation scientists emphasize that protecting individual species in isolation is insufficient. A more pragmatic approach focuses on preserving entire ecosystems and the ecological processes that sustain them. This perspective recognizes that species exist within complex webs of interdependence, where the loss of one organism can trigger cascading effects throughout the ecosystem.

The empirical evidence clearly shows that biodiversity loss threatens not only the natural world but also human prosperity. Ecosystems provide services worth trillions of dollars annually, including water purification, crop pollination, carbon storage, and flood protection. The economic argument for conservation, combined with the ethical imperative to prevent extinction, presents a compelling case for immediate and sustained action. The decisions made in the coming decades will determine whether future generations inherit a planet rich in life or one diminished beyond recognition.`,
    contentZh: `地球目前正在經歷第六次大規模滅絕事件，其驅動力不是自然災害而是人類活動。科學家估計物種消失的速度比自然背景滅絕速率快一百到一千倍。這種前所未有的生物多樣性喪失對生態系統、經濟和人類福祉有著深遠的影響，使瀕危物種的保育成為我們這個時代最緊迫的挑戰之一。

國際自然保護聯盟維護著紅色名錄，這是一個按照滅絕風險對物種進行分類的綜合數據庫。類別從「無危」到「極度瀕危」和「野外滅絕」。目前有超過四萬個物種被列為受到滅絕威脅，包括知名的動物如老虎、大猩猩和海龜，以及數千種不太引人注目但生態上重要的植物、昆蟲和真菌。

物種瀕危的原因已被充分記錄。棲息地破壞，主要是透過毀林和農業用地轉換，是最大的單一威脅。隨著人口增長和對食物與資源的需求增加，自然棲息地被分割或完全消除。氣候變遷正在成為日益顯著的威脅，因為許多物種無法足夠快地適應不斷變化的溫度和降水模式。

透過狩獵、捕魚和野生動物貿易的過度開發也推動物種走向滅絕。非法野生動物貿易估計每年價值數十億美元，使其成為全球最大的有組織犯罪形式之一。人類活動引入的入侵物種與本地物種爭奪資源，而污染則汙染棲息地並擾亂繁殖週期。

保育工作採用多種策略。保護區，包括國家公園和海洋保護區，保護關鍵棲息地。圈養繁殖計畫旨在增加極度瀕危物種的數量，以便最終重新引入野外。《瀕危野生動植物種國際貿易公約》等法律框架規範受保護動植物的跨境流動。

然而，保育科學家強調，孤立地保護個別物種是不夠的。一種更務實的方法聚焦於保存整個生態系統和維持它們的生態過程。這一觀點認識到物種存在於複雜的相互依存網絡中，其中一個有機體的消失可能在整個生態系統中引發連鎖效應。

實證數據清楚顯示，生物多樣性喪失不僅威脅自然世界，也威脅人類繁榮。生態系統每年提供價值數萬億美元的服務，包括水淨化、作物授粉、碳儲存和防洪。保育的經濟論據，結合防止滅絕的道德命令，為立即和持續的行動提供了有力的理由。未來幾十年做出的決定將決定後代是繼承一個生命豐富的星球，還是一個面目全非的星球。`,
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 392,
    targetWords: ["a013", "a015", "a011", "a017", "a008"],
    questions: [
      {
        question: "What is the primary cause of the current mass extinction?",
        options: ["A. Natural disasters such as volcanic eruptions", "B. Changes in Earth's orbit around the sun", "C. Human activities including habitat destruction and climate change", "D. Competition among animal species"],
        correctIndex: 2,
        explanation: "文章指出當前大規模滅絕的主要原因是「人類活動，包括棲息地破壞和氣候變遷（human activities including habitat destruction and climate change）」，因此答案為 C。",
      },
      {
        question: "Why do conservation scientists argue against protecting species in isolation?",
        options: ["A. Individual species are not important", "B. It is too expensive to protect individual species", "C. Species exist in complex webs of interdependence where losing one can trigger cascading effects", "D. Protected areas are not effective"],
        correctIndex: 2,
        explanation: "保育科學家反對孤立保護物種是因為「物種存在於複雜的相互依存網絡中，失去一個可能引發連鎖效應（species exist in complex webs of interdependence where losing one can trigger cascading effects）」，因此答案為 C。",
      },
      {
        question: "What economic argument for conservation does the article present?",
        options: ["A. Endangered species can be sold for profit", "B. Tourism to see endangered animals generates significant revenue", "C. Ecosystems provide services worth trillions of dollars annually including water purification and crop pollination", "D. Conservation creates manufacturing jobs"],
        correctIndex: 2,
        explanation: "文章提出的保育經濟論據是「生態系統每年提供價值數萬億美元的服務，包括水淨化和作物授粉（ecosystems provide services worth trillions of dollars annually including water purification and crop pollination）」，因此答案為 C。",
      },
    ],
  },

  // ===== DAILY ARTICLES (art-d03 to art-d16) =====
  {
    id: "art-d03",
    title: "Mastering the Art of Street Food",
    content: `Street food is one of the greatest pleasures of traveling. From bustling night markets in Taiwan to vibrant food stalls in Bangkok, street food offers an authentic taste of local culture that you simply cannot find in restaurants. For many travelers, eating street food is the highlight of their trip.

One of the best things about street food is its affordability. You can enjoy a delicious meal for a fraction of the price you would pay at a sit-down restaurant. In many countries, locals eat street food daily because it is both cheap and convenient. A bowl of pho in Vietnam might cost less than two dollars, while a plate of pad thai in Thailand can be yours for about one dollar and fifty cents.

However, many first-time travelers worry about food safety. Here are some practical tips to help you enjoy street food without getting sick. First, look for stalls with long lines of local customers. If the locals trust it, that is usually a good sign. Second, choose vendors who cook your food fresh in front of you rather than those selling pre-made dishes that have been sitting out for hours. Third, pay attention to the general cleanliness of the stall and whether the vendor uses gloves or utensils.

Street food also gives you a wonderful opportunity to interact with local people. Many vendors are happy to explain their dishes and share the stories behind their recipes. Even if you do not speak the local language, pointing at menu items and smiling can go a long way. These small exchanges often become some of the most memorable moments of a trip.

Some of the world's most famous street food destinations include Singapore, Mexico City, Istanbul, and Marrakech. Each city has its own unique specialties. Singapore is known for its chicken rice and laksa, while Mexico City is famous for tacos al pastor and elote. No matter where you go, being adventurous with street food will reward you with unforgettable flavors and experiences.`,
    contentZh: `街頭美食是旅行中最大的樂趣之一。從台灣熱鬧的夜市到曼谷生氣蓬勃的路邊攤，街頭美食提供了一種在餐廳裡找不到的道地在地風味。對許多旅客來說，吃街頭美食是旅途中最精彩的部分。

街頭美食最棒的一點就是價格親民。你可以用餐廳價格的幾分之一享受一頓美味的餐點。在很多國家，當地人每天都吃街頭美食，因為既便宜又方便。在越南，一碗河粉可能不到兩美元，而在泰國，一盤泰式炒河粉大約只要一塊半美金。

不過，許多第一次出國的旅客會擔心食物衛生問題。以下是一些實用的建議，幫助你在享受街頭美食的同時避免腸胃不適。首先，找那些排了很多當地人的攤位。如果當地人都信任這家，通常就是個好兆頭。其次，選擇在你面前現做食物的攤販，而不是那些賣已經放了好幾個小時的現成菜餚。第三，注意攤位的整體清潔度，以及攤販是否使用手套或餐具。

街頭美食也提供了與當地人互動的絕佳機會。許多攤販樂於介紹他們的菜色，分享料理背後的故事。即使你不會說當地語言，用手指比菜單、帶上微笑就能走很長的路。這些小小的交流往往成為旅途中最難忘的回憶。

世界上最著名的街頭美食聖地包括新加坡、墨西哥城、伊斯坦堡和馬拉喀什。每座城市都有自己獨特的招牌美食。新加坡以海南雞飯和叻沙聞名，墨西哥城則以牧羊人塔可和烤玉米著稱。無論你去哪裡，勇於嘗試街頭美食，必定能帶給你難忘的風味與體驗。`,
    domain: "daily" as const,
    difficulty: 1,
    wordCount: 310,
    targetWords: ["authentic", "affordable", "fraction", "convenient", "vendor", "utensils", "adventurous"],
    questions: [
      {
        question: "According to the article, why do locals in many countries eat street food daily?",
        options: ["A. Because it is cheap and convenient", "B. Because restaurants are always closed", "C. Because street food is healthier", "D. Because they do not know how to cook"],
        correctIndex: 0,
        explanation: "文章提到「In many countries, locals eat street food daily because it is both cheap and convenient.」，說明當地人每天吃街頭美食是因為便宜又方便。",
      },
      {
        question: "Which of the following is NOT a tip for eating street food safely?",
        options: ["A. Look for stalls with long lines of locals", "B. Choose vendors who cook food fresh", "C. Always eat food that has been sitting out", "D. Pay attention to the cleanliness of the stall"],
        correctIndex: 2,
        explanation: "文章列出的安全建議包括找排隊人多的攤位、選現做的食物、注意清潔度。「Always eat food that has been sitting out（總是吃放了很久的食物）」恰好與文章建議相反，因此這不是安全建議。",
      },
      {
        question: "What does the article say about interacting with street food vendors?",
        options: ["A. You must speak the local language fluently", "B. Vendors usually refuse to talk to tourists", "C. Pointing and smiling can help communication", "D. You should avoid talking to vendors"],
        correctIndex: 2,
        explanation: "文章指出「Even if you do not speak the local language, pointing at menu items and smiling can go a long way.」，表示用手指比和微笑就能有效溝通。",
      },
    ],
  },
  {
    id: "art-d04",
    title: "A Beginner's Guide to Coffee Culture",
    content: `Coffee is more than just a drink. It is a global culture that connects people across continents. Whether you are grabbing a quick espresso in Italy or sipping a slow pour-over in a trendy cafe in Tokyo, understanding coffee culture can enrich your daily life and travel experiences.

Let us start with the basics. The most common types of coffee drinks include espresso, americano, latte, cappuccino, and mocha. An espresso is a small, strong shot of coffee that forms the base for most other drinks. An americano is simply espresso with hot water added, making it similar to drip coffee. A latte combines espresso with steamed milk, while a cappuccino has equal parts espresso, steamed milk, and foam. A mocha adds chocolate to the mix for those with a sweet tooth.

Ordering coffee can be confusing, especially when you travel to different countries. In Italy, asking for a "latte" will get you a glass of plain milk because "latte" means milk in Italian. You should ask for a "caffe latte" instead. In Australia, you might encounter a "flat white," which is similar to a latte but with less foam and a stronger coffee flavor. In Taiwan, coffee culture has grown rapidly, with independent cafes and specialty roasters appearing in every neighborhood.

Coffee shop etiquette also varies around the world. In some European cafes, sitting at a table costs more than standing at the bar. In Japan, many cafes have a quiet, library-like atmosphere where loud conversations are discouraged. In the United States, coffee shops are popular places to work on laptops and hold casual meetings.

If you are new to coffee, do not be afraid to ask the barista for recommendations. Most coffee professionals love to share their knowledge and help you find a drink that suits your taste. Start with something mild like a latte, and gradually explore stronger options as your palate develops. Coffee is a journey, and every cup teaches you something new.`,
    contentZh: `咖啡不僅僅是一種飲料，它是一種連結世界各地人們的全球文化。無論你是在義大利快速來一杯濃縮咖啡，還是在東京一家時髦的咖啡廳慢慢品味手沖咖啡，了解咖啡文化都能豐富你的日常生活和旅行體驗。

讓我們從基礎開始。最常見的咖啡飲品包括濃縮咖啡（espresso）、美式咖啡（americano）、拿鐵（latte）、卡布奇諾（cappuccino）和摩卡（mocha）。濃縮咖啡是一小杯濃烈的咖啡，也是大多數其他咖啡飲品的基底。美式咖啡就是濃縮咖啡加熱水，喝起來類似濾滴式咖啡。拿鐵是濃縮咖啡加蒸氣牛奶，而卡布奇諾則是等比例的濃縮咖啡、蒸氣牛奶和奶泡。摩卡則在其中加入了巧克力，適合喜歡甜味的人。

點咖啡有時會讓人困惑，尤其是在不同國家旅行時。在義大利，如果你點一杯「latte」，你會得到一杯純牛奶，因為「latte」在義大利文裡就是牛奶的意思。你應該說「caffe latte」才對。在澳洲，你可能會遇到「flat white」，它類似拿鐵，但奶泡較少、咖啡味更濃。在台灣，咖啡文化發展迅速，獨立咖啡廳和精品烘豆師在各個街區遍地開花。

咖啡廳的禮儀在世界各地也有所不同。在一些歐洲咖啡廳，坐在桌邊比站在吧台前消費更貴。在日本，許多咖啡廳有著像圖書館一樣安靜的氛圍，不鼓勵大聲交談。在美國，咖啡廳則是人們帶筆電工作和進行非正式會議的熱門場所。

如果你是咖啡新手，別害怕向咖啡師詢問推薦。大多數咖啡專業人士都樂於分享他們的知識，幫你找到適合你口味的飲品。從拿鐵這類溫和的選擇開始，隨著味覺的發展再逐漸探索更濃烈的選項。咖啡是一趟旅程，每一杯都能讓你學到新東西。`,
    domain: "daily" as const,
    difficulty: 1,
    wordCount: 320,
    targetWords: ["espresso", "etiquette", "atmosphere", "discouraged", "barista", "palate", "gradually"],
    questions: [
      {
        question: "What is the difference between a latte and a cappuccino?",
        options: ["A. A latte has chocolate but a cappuccino does not", "B. A cappuccino has equal parts espresso, steamed milk, and foam", "C. A latte uses cold milk while a cappuccino uses hot milk", "D. There is no difference between them"],
        correctIndex: 1,
        explanation: "文章說明「A latte combines espresso with steamed milk, while a cappuccino has equal parts espresso, steamed milk, and foam.」，卡布奇諾的特色是濃縮咖啡、蒸氣牛奶和奶泡各佔等比例。",
      },
      {
        question: "Why might ordering a 'latte' in Italy cause confusion?",
        options: ["A. Because Italians do not drink coffee", "B. Because 'latte' means milk in Italian", "C. Because lattes are very expensive in Italy", "D. Because Italian cafes do not serve lattes"],
        correctIndex: 1,
        explanation: "文章指出「In Italy, asking for a 'latte' will get you a glass of plain milk because 'latte' means milk in Italian.」，因為 latte 在義大利文中是牛奶的意思，所以會造成誤解。",
      },
      {
        question: "What does the article suggest for people who are new to coffee?",
        options: ["A. Start with the strongest espresso available", "B. Avoid asking the barista questions", "C. Start with something mild and explore gradually", "D. Only drink coffee at home"],
        correctIndex: 2,
        explanation: "文章建議「Start with something mild like a latte, and gradually explore stronger options as your palate develops.」，從溫和的開始，再逐步嘗試更濃的咖啡。",
      },
    ],
  },
  {
    id: "art-d05",
    title: "How to Make Friends in a New City",
    content: `Moving to a new city can be both exciting and lonely. You might love exploring new neighborhoods and trying new restaurants, but without friends to share these experiences with, the excitement can fade quickly. Making friends as an adult takes effort, but it is absolutely possible with the right approach.

The first step is to put yourself in social situations. Join a club, take a class, or attend local events. Many cities have community groups for hiking, cooking, book clubs, or language exchange. These activities give you a natural reason to meet people who share your interests. Apps like Meetup can help you find events near you, and many cities have Facebook groups for newcomers.

Volunteering is another excellent way to meet kind and like-minded people. Whether you help at a local food bank, animal shelter, or community garden, working alongside others toward a common goal creates strong bonds. Volunteering also helps you feel connected to your new community and gives you a sense of purpose.

Once you meet someone you get along with, take the initiative to suggest a follow-up activity. This is where many people struggle. It can feel awkward to ask someone to hang out, almost like asking someone on a date. But most people appreciate the effort and are happy to say yes. A simple message like "I really enjoyed our conversation. Would you like to grab coffee sometime?" goes a long way.

Being a good listener is also important. People love talking about themselves, so ask questions and show genuine interest in their stories. Remember small details they share and bring them up in future conversations. This shows that you care and are paying attention.

Finally, be patient. Building meaningful friendships takes time. You will not find your best friend overnight, and that is perfectly normal. Focus on being open, friendly, and consistent. Show up regularly to the same activities, and over time, familiar faces will become real friends.`,
    contentZh: `搬到一座新城市可能既令人興奮又令人孤獨。你或許喜歡探索新的街區和嘗試新餐廳，但如果沒有朋友分享這些經歷，興奮感很快就會消退。成年後交朋友需要付出努力，但只要方法對了，絕對是做得到的。

第一步是讓自己置身於社交場合。加入一個社團、上一門課，或參加當地活動。許多城市都有登山、烹飪、讀書會或語言交換的社群。這些活動讓你有自然的理由去認識志同道合的人。像 Meetup 這樣的 App 可以幫你找到附近的活動，很多城市也有為新住民設立的 Facebook 社團。

擔任志工是另一個認識善良且志趣相投的人的好方法。無論是在食物銀行、動物收容所還是社區菜園幫忙，與他人一起為共同目標努力能建立深厚的連結。志工服務也能讓你感受到與新社區的連結，並帶來歸屬感。

一旦你遇到聊得來的人，主動提議下一次的活動。這是很多人卡關的地方。約人出來可能會感覺有點尷尬，幾乎像是在約會一樣。但大多數人都很感激這份主動，也很樂意答應。一句簡單的「我很享受我們的聊天，你想找個時間一起喝杯咖啡嗎？」就能發揮很大的作用。

做一個好的傾聽者也很重要。人們喜歡談論自己，所以多問問題，展現出對他們故事的真誠興趣。記住他們分享的小細節，並在以後的對話中提起。這表示你有在關心、有在留意。

最後，要有耐心。建立有意義的友誼需要時間。你不會在一夜之間找到知心好友，這是完全正常的。專注於保持開放、友善和持續出現。定期參加同樣的活動，久而久之，那些熟悉的臉孔就會變成真正的朋友。`,
    domain: "daily" as const,
    difficulty: 1,
    wordCount: 315,
    targetWords: ["approach", "volunteering", "initiative", "awkward", "genuine", "consistent", "meaningful"],
    questions: [
      {
        question: "According to the article, what is the first step to making friends in a new city?",
        options: ["A. Wait for people to approach you", "B. Put yourself in social situations", "C. Post on social media about being lonely", "D. Move to a different city"],
        correctIndex: 1,
        explanation: "文章明確指出「The first step is to put yourself in social situations.」，交友的第一步是讓自己置身於社交場合，如加入社團、上課或參加活動。",
      },
      {
        question: "Why does the article recommend volunteering?",
        options: ["A. Because it pays well", "B. Because it helps you meet like-minded people", "C. Because it is required by law in some cities", "D. Because it looks good on your resume"],
        correctIndex: 1,
        explanation: "文章提到「Volunteering is another excellent way to meet kind and like-minded people.」，志工服務能幫助你認識善良且志趣相投的人。",
      },
      {
        question: "What does the article say about building meaningful friendships?",
        options: ["A. It happens quickly if you try hard enough", "B. It only works if you are naturally outgoing", "C. It takes time and patience", "D. It is impossible for adults"],
        correctIndex: 2,
        explanation: "文章最後指出「Building meaningful friendships takes time.」和「Be patient.」，強調建立有意義的友誼需要時間和耐心。",
      },
    ],
  },
  {
    id: "art-d06",
    title: "The Joy of Weekend Markets",
    content: `Weekend markets are a beloved tradition in cities around the world. From farmers markets selling fresh produce to flea markets offering vintage treasures, these open-air gatherings are a wonderful way to spend a Saturday or Sunday morning. They offer something that shopping malls and online stores simply cannot: a personal connection between buyers and sellers.

Farmers markets are particularly popular among people who care about eating fresh, locally grown food. At a farmers market, you can buy fruits, vegetables, eggs, honey, and bread directly from the people who produce them. The food is often harvested just a day or two before, which means it is much fresher than what you find at a supermarket. Many farmers are happy to explain how they grow their crops and even share recipes for cooking with their products.

Flea markets, on the other hand, are paradise for bargain hunters and collectors. You can find everything from antique furniture and old records to handmade jewelry and secondhand clothing. The thrill of flea market shopping is the hunt itself. You never know what hidden gems you might discover among the piles of merchandise. Negotiating prices is also part of the experience, and many vendors expect buyers to haggle a little.

Night markets, especially popular in Asia, combine the best of both worlds. In Taiwan, night markets like Shilin and Raohe are famous for their incredible variety of street food, clothing, games, and accessories. These markets are not just places to shop. They are social gathering spots where families and friends come together to enjoy the lively atmosphere.

Whether you prefer browsing organic vegetables, searching for vintage clothing, or simply people-watching while enjoying a snack, weekend markets offer a unique experience. They support local businesses, reduce packaging waste, and bring communities together. Next weekend, skip the shopping mall and visit a market near you. You might be surprised by what you find.`,
    contentZh: `週末市集是世界各地城市深受喜愛的傳統。從販售新鮮農產品的農夫市集，到提供復古寶藏的跳蚤市場，這些露天聚會是度過週六或週日早晨的美好方式。它們提供了購物中心和網路商店無法給予的東西：買家與賣家之間的個人連結。

農夫市集在重視新鮮、在地食材的人群中特別受歡迎。在農夫市集，你可以直接向生產者購買水果、蔬菜、雞蛋、蜂蜜和麵包。這些食物通常是在販售前一兩天才剛採收的，這意味著它比超市裡的東西新鮮得多。許多農夫樂於解釋他們如何種植作物，甚至分享烹調他們產品的食譜。

另一方面，跳蚤市場是淘寶獵人和收藏家的天堂。你可以找到從古董家具、老唱片到手工珠寶和二手衣物等各式各樣的東西。逛跳蚤市場的樂趣就在於尋寶本身。你永遠不知道在一堆商品中會發現什麼隱藏的寶貝。議價也是體驗的一部分，許多攤販預期買家會稍微殺價。

夜市在亞洲特別盛行，結合了兩者的優點。在台灣，士林和饒河等夜市以種類豐富的街頭美食、服飾、遊戲和配件聞名。這些市集不僅是購物的地方，更是家人朋友一起享受熱鬧氛圍的社交聚會場所。

無論你喜歡逛有機蔬菜、尋找復古服飾，還是邊吃小吃邊看人來人往，週末市集都能帶來獨特的體驗。它們支持在地商家、減少包裝浪費，並凝聚社區。下個週末，跳過購物中心，去逛逛你附近的市集吧。你可能會對自己的收穫感到驚喜。`,
    domain: "daily" as const,
    difficulty: 1,
    wordCount: 310,
    targetWords: ["produce", "vintage", "harvested", "antique", "negotiate", "haggle", "merchandise"],
    questions: [
      {
        question: "Why is food at farmers markets often fresher than supermarket food?",
        options: ["A. Because it is imported from other countries", "B. Because it is harvested just a day or two before selling", "C. Because it contains more preservatives", "D. Because farmers markets are open every day"],
        correctIndex: 1,
        explanation: "文章指出「The food is often harvested just a day or two before, which means it is much fresher than what you find at a supermarket.」，農夫市集的食物通常在販售前一兩天才採收，所以比超市新鮮。",
      },
      {
        question: "What does the article describe as 'the thrill' of flea market shopping?",
        options: ["A. Finding the lowest prices", "B. The hunt for hidden gems", "C. Meeting famous collectors", "D. Buying brand-new products"],
        correctIndex: 1,
        explanation: "文章提到「The thrill of flea market shopping is the hunt itself. You never know what hidden gems you might discover among the piles of merchandise.」，跳蚤市場的樂趣在於尋寶的過程。",
      },
      {
        question: "According to the article, what do weekend markets offer that shopping malls cannot?",
        options: ["A. Lower taxes on purchases", "B. Free parking for visitors", "C. A personal connection between buyers and sellers", "D. Air conditioning and comfortable seating"],
        correctIndex: 2,
        explanation: "文章開頭指出市集「offer something that shopping malls and online stores simply cannot: a personal connection between buyers and sellers.」，週末市集提供的是買賣雙方之間的個人連結。",
      },
    ],
  },
  {
    id: "art-d07",
    title: "Smart Phone Habits for Better Sleep",
    content: `If you find yourself lying in bed scrolling through your phone late at night, you are not alone. Studies show that over seventy percent of adults use their smartphones within an hour of going to sleep. While this habit might seem harmless, it can seriously affect the quality of your rest and your overall health.

The main problem is the blue light emitted by phone screens. This type of light interferes with your body's production of melatonin, a hormone that signals your brain it is time to sleep. When you stare at your phone before bed, your brain thinks it is still daytime, making it harder to fall asleep. Research has shown that people who use their phones before bed take longer to fall asleep and experience less deep sleep throughout the night.

Social media and news apps create another problem. They are designed to keep you engaged and scrolling, which stimulates your brain at a time when it should be winding down. Reading an upsetting news story or getting caught up in a social media debate right before bed can increase anxiety and make it even more difficult to relax.

So what can you do to improve your sleep habits? First, try to establish a "digital curfew." Put your phone away at least thirty minutes before bedtime, and ideally an hour. Replace screen time with calming activities like reading a physical book, journaling, or doing gentle stretches.

Second, use your phone's built-in tools to help. Most smartphones now have night mode or blue light filter settings that reduce the amount of blue light your screen produces. You can also set a bedtime reminder that automatically dims your screen and silences notifications.

Third, keep your phone out of the bedroom entirely if possible. Buy an inexpensive alarm clock so you do not need your phone as your morning alarm. If you must keep your phone nearby, place it face down on the other side of the room so you are not tempted to check it during the night.

Small changes to your phone habits can lead to dramatically better sleep, more energy during the day, and improved mental health over time.`,
    contentZh: `如果你發現自己深夜躺在床上還在滑手機，你並不孤單。研究顯示，超過七成的成年人在睡前一小時內會使用智慧型手機。雖然這個習慣看似無害，但它會嚴重影響你的睡眠品質和整體健康。

主要問題在於手機螢幕發出的藍光。這種光線會干擾人體褪黑激素的分泌——褪黑激素是一種向大腦發出該睡覺訊號的荷爾蒙。當你在睡前盯著手機螢幕，你的大腦會以為還是白天，讓你更難入睡。研究顯示，睡前使用手機的人需要更長的時間才能入睡，而且整晚的深層睡眠也會減少。

社群媒體和新聞 App 則帶來另一個問題。它們被設計成讓你持續參與和滑動，在你的大腦應該放鬆的時候反而刺激了它。睡前讀到一則令人不安的新聞，或是捲入社群媒體上的爭論，都會增加焦慮，讓你更難以放鬆。

那麼你可以怎麼做來改善睡眠習慣呢？首先，試著建立一個「數位宵禁」。在睡前至少三十分鐘把手機收起來，理想情況下是一小時。用平靜的活動取代螢幕時間，例如閱讀實體書、寫日記或做和緩的伸展運動。

其次，善用手機內建的工具。大多數智慧型手機現在都有夜間模式或藍光濾鏡設定，可以減少螢幕發出的藍光量。你也可以設定就寢提醒，自動降低螢幕亮度並關閉通知。

第三，如果可能的話，把手機完全放在臥室外面。買一個便宜的鬧鐘，這樣你就不需要用手機當早上的鬧鈴。如果你必須把手機放在身邊，把它螢幕朝下放在房間的另一端，這樣你就不會在夜裡忍不住去看。

對手機習慣做出小小的改變，就能帶來大幅改善的睡眠、白天更充沛的精力，以及長期更好的心理健康。`,
    domain: "daily" as const,
    difficulty: 1,
    wordCount: 340,
    targetWords: ["scrolling", "emitted", "melatonin", "stimulates", "curfew", "notifications", "tempted"],
    questions: [
      {
        question: "How does blue light from phone screens affect sleep?",
        options: ["A. It makes your eyes tired so you fall asleep faster", "B. It interferes with melatonin production", "C. It has no effect on sleep quality", "D. It only affects children, not adults"],
        correctIndex: 1,
        explanation: "文章指出「This type of light interferes with your body's production of melatonin, a hormone that signals your brain it is time to sleep.」，藍光會干擾褪黑激素的分泌，從而影響睡眠。",
      },
      {
        question: "What is a 'digital curfew' as described in the article?",
        options: ["A. A law that limits phone use at night", "B. A time to put your phone away before bedtime", "C. A phone setting that blocks all apps", "D. A timer that turns off your phone automatically"],
        correctIndex: 1,
        explanation: "文章將「digital curfew」描述為「Put your phone away at least thirty minutes before bedtime」，意即在就寢前把手機收起來的時間規定。",
      },
      {
        question: "Which of the following is suggested as a replacement for screen time before bed?",
        options: ["A. Watching television instead", "B. Playing video games on a console", "C. Reading a physical book", "D. Listening to a podcast on your phone"],
        correctIndex: 2,
        explanation: "文章建議「Replace screen time with calming activities like reading a physical book, journaling, or doing gentle stretches.」，其中閱讀實體書是建議用來取代螢幕時間的活動。",
      },
    ],
  },
  {
    id: "art-d08",
    title: "Navigating Public Transportation Abroad",
    content: `One of the biggest challenges for international travelers is figuring out public transportation in an unfamiliar city. The metro systems, bus routes, and ticketing procedures can vary dramatically from country to country. However, mastering local transit is one of the most rewarding skills you can develop as a traveler, as it saves money, reduces your environmental footprint, and lets you experience a city the way locals do.

Before you arrive at your destination, take some time to research the public transportation system online. Most major cities have official transit websites and apps that provide route maps, schedules, and fare information in English. Download the local transit app before your trip, and save offline maps in case you lose internet access. Google Maps is also remarkably accurate for public transit directions in most cities around the world.

When you arrive, your first task should be figuring out the ticketing system. Many cities now use rechargeable smart cards similar to Taiwan's EasyCard. London has the Oyster card, Tokyo has Suica and Pasmo, Hong Kong has the Octopus card, and Seoul has T-money. These cards typically offer discounted fares compared to buying single-journey tickets and can usually be purchased at any station. In some cities, you can simply tap your credit card or smartphone directly at the turnstile.

Understanding the etiquette of public transportation is equally important. In Japan, talking on your phone while riding the train is considered extremely rude, and eating or drinking is frowned upon. In many European cities, you must validate your ticket by stamping it in a machine before boarding. Failure to do so can result in a hefty fine, even if you have a valid ticket. On escalators, most cities follow the convention of standing on one side and leaving the other side open for people who wish to walk.

Safety is another consideration. Keep your belongings close to you, especially in crowded stations and during rush hour. Wear your backpack on your front in packed carriages, and be aware of pickpockets in heavily touristed areas. Avoid empty carriages late at night, and always know which stop you need to get off at so you can position yourself near the doors in advance.

Learning to navigate public transportation abroad might seem intimidating at first, but with a little preparation and an open mind, it quickly becomes second nature. You will gain confidence with each journey, and before long, you will be helping other confused tourists find their way.`,
    contentZh: `對國際旅客來說，最大的挑戰之一就是搞懂陌生城市的大眾運輸系統。地鐵系統、公車路線和購票方式在不同國家之間可能差異極大。然而，學會使用當地交通工具是旅客最值得培養的技能之一，因為它能省錢、減少碳足跡，並讓你像當地人一樣體驗這座城市。

在抵達目的地之前，花些時間上網研究當地的大眾運輸系統。大多數大城市都有官方的交通網站和 App，提供路線圖、時刻表和票價資訊，通常也有英文版。出發前下載當地的交通 App，並儲存離線地圖以備沒有網路時使用。Google Maps 在全球大多數城市的大眾運輸導航方面也相當準確。

抵達後，你的首要任務是搞懂購票系統。許多城市現在使用類似台灣悠遊卡的可儲值智慧卡。倫敦有 Oyster 卡，東京有 Suica 和 Pasmo，香港有八達通，首爾有 T-money。這些卡通常比購買單程票便宜，而且在任何車站都能買到。在某些城市，你甚至可以直接用信用卡或手機在閘門感應通過。

了解大眾運輸的禮儀同樣重要。在日本，搭火車時講電話被認為是極其不禮貌的行為，吃東西或喝飲料也會被側目。在許多歐洲城市，你必須在上車前用打票機驗證你的車票。未這樣做可能會被處以高額罰款，即使你持有有效車票。在手扶梯上，大多數城市都遵循站一邊、留另一邊給想走動的人通過的慣例。

安全也是需要考慮的因素。隨時把隨身物品放在身邊，特別是在擁擠的車站和尖峰時段。在擁擠的車廂裡把背包背在前面，注意觀光客密集區域的扒手。深夜避免搭乘空的車廂，並且事先知道自己要在哪一站下車，好提前移動到車門附近。

在國外搭乘大眾運輸一開始可能讓人有些膽怯，但只要稍加準備並保持開放的心態，很快就能駕輕就熟。每一次搭乘都會讓你更有信心，不久之後，你甚至能幫助其他迷路的觀光客找到方向。`,
    domain: "daily" as const,
    difficulty: 2,
    wordCount: 380,
    targetWords: ["navigating", "transit", "rechargeable", "etiquette", "validate", "hefty", "intimidating", "pickpockets"],
    questions: [
      {
        question: "What does the article recommend doing before arriving at your destination?",
        options: ["A. Book a private car service", "B. Research the public transportation system and download apps", "C. Memorize the entire metro map", "D. Hire a local guide for transportation"],
        correctIndex: 1,
        explanation: "文章建議「Before you arrive at your destination, take some time to research the public transportation system online.」和「Download the local transit app before your trip」，即出發前先研究交通系統並下載相關 App。",
      },
      {
        question: "In some European cities, what can happen if you do not validate your ticket?",
        options: ["A. Nothing, the ticket is still valid", "B. You will be banned from the metro system", "C. You can receive a hefty fine", "D. The ticket machine will not let you through"],
        correctIndex: 2,
        explanation: "文章指出「In many European cities, you must validate your ticket by stamping it in a machine before boarding. Failure to do so can result in a hefty fine」，在歐洲某些城市未驗票可能被處以高額罰款。",
      },
      {
        question: "Which safety tip does the article mention for crowded transit?",
        options: ["A. Always stand near the doors", "B. Wear your backpack on your front", "C. Avoid using public transit during rush hour", "D. Only use taxis in touristed areas"],
        correctIndex: 1,
        explanation: "文章提到「Wear your backpack on your front in packed carriages」，建議在擁擠的車廂中把背包背在前面以確保安全。",
      },
    ],
  },
  {
    id: "art-d09",
    title: "Understanding Food Labels and Nutrition",
    content: `Walking through a grocery store, you are surrounded by products claiming to be "natural," "organic," "low-fat," or "sugar-free." But what do these labels actually mean, and how can you make informed choices about what you put into your body? Understanding food labels is an essential skill for anyone who wants to eat healthier and avoid being misled by clever marketing.

The nutrition facts panel, usually found on the back or side of a package, is the most reliable source of information about a food product. It lists the serving size, total calories, and the amounts of key nutrients including fat, sodium, carbohydrates, fiber, sugar, and protein. One common mistake people make is ignoring the serving size. A bag of chips might seem reasonable at 150 calories, but if the serving size is only ten chips and the bag contains five servings, you are actually consuming 750 calories if you eat the whole bag.

The ingredients list is equally important and often more revealing. Ingredients are listed in order of quantity, meaning the first ingredient makes up the largest proportion of the product. If sugar appears as one of the first three ingredients, the product is likely very sweet, regardless of what the front of the package claims. Be aware that sugar goes by many names, including high-fructose corn syrup, dextrose, maltose, and sucrose. Some products contain multiple types of sugar, which allows manufacturers to list each one separately so that none of them appears as the top ingredient.

Terms like "natural" and "all-natural" are surprisingly unregulated in many countries. A product labeled "natural" might still contain preservatives, artificial flavors, or heavily processed ingredients. "Organic," on the other hand, is a regulated term that requires certification, meaning the product was grown or produced without synthetic pesticides, fertilizers, or genetically modified organisms.

Understanding the difference between "low-fat" and "reduced-fat" also matters. "Low-fat" means the product contains three grams of fat or less per serving. "Reduced-fat" simply means the product has at least twenty-five percent less fat than the original version, which could still be quite high. Many low-fat products compensate for the lack of flavor by adding extra sugar or sodium.

Armed with this knowledge, you can become a more discerning shopper. Take a few extra seconds to read the nutrition facts and ingredients list before tossing items into your cart. Over time, this habit will help you build a healthier diet and avoid the traps set by misleading labels.`,
    contentZh: `走進超市，你會被各種宣稱「天然」、「有機」、「低脂」或「無糖」的產品包圍。但這些標籤到底是什麼意思？你又該如何做出明智的選擇，決定吃進身體裡的東西呢？讀懂食品標籤是任何想要吃得更健康、避免被巧妙行銷手法誤導的人必備的技能。

營養成分表通常位於包裝的背面或側面，是了解食品最可靠的資訊來源。上面列出了份量大小、總熱量，以及脂肪、鈉、碳水化合物、纖維、糖和蛋白質等關鍵營養素的含量。人們最常犯的錯誤之一就是忽略份量大小。一包洋芋片看起來只有 150 大卡好像還好，但如果每份只有十片而整包有五份，你吃完整包實際上攝取了 750 大卡。

成分表同樣重要，而且往往更能揭露真相。成分是按含量多寡排列的，意思是排在第一位的成分在產品中佔最大比例。如果糖出現在前三項成分中，不管包裝正面怎麼宣稱，這個產品很可能非常甜。要注意的是，糖有很多名稱，包括高果糖玉米糖漿、葡萄糖、麥芽糖和蔗糖。有些產品含有多種糖類，這樣製造商就能把每一種分開列出，使得沒有任何一種糖出現在成分表的最前面。

「天然」和「全天然」這類詞彙在許多國家其實缺乏嚴格規範。標示為「天然」的產品可能仍然含有防腐劑、人工香料或高度加工的成分。相對地，「有機」是一個受規範的術語，需要取得認證，代表產品在種植或生產過程中未使用合成農藥、化學肥料或基因改造生物。

了解「低脂」和「減脂」的區別也很重要。「低脂」表示產品每份含有三公克或更少的脂肪。「減脂」則只是表示產品比原始版本少了至少百分之二十五的脂肪，但含量可能仍然很高。許多低脂產品為了彌補風味的不足，會額外添加糖或鈉。

有了這些知識，你就能成為更精明的消費者。在把商品丟進購物車之前，多花幾秒鐘閱讀營養成分表和成分列表。久而久之，這個習慣將幫助你建立更健康的飲食，並避開誤導性標籤設下的陷阱。`,
    domain: "daily" as const,
    difficulty: 2,
    wordCount: 390,
    targetWords: ["nutrition", "sodium", "proportion", "preservatives", "synthetic", "compensate", "discerning", "misleading"],
    questions: [
      {
        question: "Why is the serving size on a nutrition label important?",
        options: ["A. It tells you how much the product costs", "B. It determines the actual amount of calories and nutrients you consume", "C. It shows how long the product will last", "D. It indicates the recommended number of meals per day"],
        correctIndex: 1,
        explanation: "文章以洋芋片為例說明：「A bag of chips might seem reasonable at 150 calories, but if the serving size is only ten chips and the bag contains five servings, you are actually consuming 750 calories.」份量大小決定了你實際攝取的卡路里和營養素數量。",
      },
      {
        question: "Why might a product contain multiple types of sugar?",
        options: ["A. To make the product taste better", "B. Because different sugars have different health benefits", "C. So that no single sugar appears as the top ingredient", "D. Because the law requires listing all sugar types"],
        correctIndex: 2,
        explanation: "文章解釋「Some products contain multiple types of sugar, which allows manufacturers to list each one separately so that none of them appears as the top ingredient.」，使用多種糖類可以讓每一種糖分別列出，避免糖出現在成分表最前面。",
      },
      {
        question: "What is the difference between 'natural' and 'organic' according to the article?",
        options: ["A. They mean the same thing", "B. 'Natural' is more strictly regulated than 'organic'", "C. 'Organic' is a regulated term requiring certification while 'natural' is often unregulated", "D. 'Organic' products are always more expensive"],
        correctIndex: 2,
        explanation: "文章指出「'Natural' is surprisingly unregulated」而「'Organic' is a regulated term that requires certification」，有機是受規範且需要認證的，而天然在許多國家缺乏規範。",
      },
    ],
  },
  {
    id: "art-d10",
    title: "The Rise of Remote Work Culture",
    content: `The way we work has undergone a dramatic transformation in recent years. What was once considered a rare perk reserved for freelancers and tech workers has become mainstream. Remote work, whether from home, a coffee shop, or a co-working space, is now a permanent fixture of the modern professional landscape. This shift has created both exciting opportunities and unexpected challenges.

The benefits of remote work are substantial. Workers save time and money by eliminating their daily commute. A person who used to spend an hour each way on the train now has two extra hours per day for exercise, family time, or personal projects. Studies have consistently shown that remote workers report higher job satisfaction and lower stress levels compared to their office-bound counterparts. Companies also benefit from reduced overhead costs, as they need less office space, fewer supplies, and lower utility bills.

However, remote work is not without its difficulties. Many people struggle with isolation and the blurring of boundaries between their professional and personal lives. When your office is your living room, it can be hard to "switch off" at the end of the day. Some remote workers find themselves working longer hours because they feel the need to prove they are productive, leading to burnout. The lack of face-to-face interaction can also make it harder to build relationships with colleagues and can sometimes lead to miscommunication.

To thrive in a remote work environment, experts recommend establishing a dedicated workspace, even if it is just a specific corner of your apartment. Maintaining a consistent daily routine helps create structure and signals to your brain when it is time to work and when it is time to relax. Taking regular breaks, getting dressed as if you were going to an office, and scheduling virtual coffee chats with colleagues can all help combat the sense of isolation.

The rise of co-working spaces has provided another solution. These shared offices offer the social atmosphere of a traditional workplace without the rigidity. Many digital nomads and remote professionals use co-working spaces to stay productive and meet like-minded individuals. Cities around the world, from Lisbon to Chiang Mai to Taipei, have developed vibrant co-working communities that attract international professionals.

As technology continues to advance and companies become more comfortable with distributed teams, remote work is likely to keep growing. The key to success lies in finding the balance that works best for you, combining the freedom of remote work with the discipline needed to stay focused and connected.`,
    contentZh: `近年來，我們的工作方式經歷了巨大的轉變。曾經被視為自由接案者和科技業人士才有的少見福利，如今已成為主流。遠距工作——無論是在家裡、咖啡廳還是共享辦公空間——已經成為現代職場的常態。這個轉變創造了令人興奮的機會，同時也帶來了意想不到的挑戰。

遠距工作的好處是顯而易見的。員工省去了每天通勤的時間和金錢。一個過去每天搭火車單程一小時的人，現在每天多出兩個小時可以用來運動、陪伴家人或從事個人專案。研究一致顯示，遠距工作者比辦公室上班族有更高的工作滿意度和更低的壓力水平。企業也能從降低的營運成本中受益，因為需要的辦公空間、辦公用品和水電費都減少了。

然而，遠距工作並非沒有困難。許多人在孤獨感和工作與個人生活界線模糊的問題上掙扎。當你的辦公室就是你的客廳，要在一天結束時「切換關機」可能很困難。有些遠距工作者發現自己工作時間反而更長，因為他們覺得需要證明自己有在認真工作，最終導致職業倦怠。缺乏面對面互動也讓建立同事關係變得更困難，有時還會造成溝通上的誤解。

為了在遠距工作環境中蓬勃發展，專家建議設立一個專屬的工作空間，即使只是公寓的某個角落。維持一致的日常作息有助於建立結構感，並向你的大腦發出「現在是工作時間」和「現在是休息時間」的訊號。定時休息、穿得像要去辦公室一樣、與同事安排線上咖啡聊天，這些都有助於對抗孤立感。

共享辦公空間的興起提供了另一種解決方案。這些共享辦公室提供了傳統職場的社交氛圍，卻沒有那麼僵化。許多數位遊牧族和遠距工作者利用共享辦公空間來保持生產力並認識志同道合的人。從里斯本到清邁再到台北，世界各地的城市都發展出了活躍的共享辦公社群，吸引著國際專業人士。

隨著科技持續進步，企業對分散式團隊越來越放心，遠距工作很可能會繼續成長。成功的關鍵在於找到最適合自己的平衡點——結合遠距工作的自由與保持專注和聯繫所需的自律。`,
    domain: "daily" as const,
    difficulty: 2,
    wordCount: 380,
    targetWords: ["mainstream", "commute", "overhead", "isolation", "boundaries", "burnout", "dedicated", "rigidity"],
    questions: [
      {
        question: "What is one major benefit of remote work mentioned in the article?",
        options: ["A. Workers receive higher salaries", "B. Workers save time by eliminating their daily commute", "C. Workers get promoted more quickly", "D. Workers never have to attend meetings"],
        correctIndex: 1,
        explanation: "文章提到「Workers save time and money by eliminating their daily commute.」，省去每天通勤的時間是遠距工作的一大好處。",
      },
      {
        question: "Why do some remote workers experience burnout?",
        options: ["A. Because remote jobs are more demanding", "B. Because they feel the need to prove they are productive and work longer hours", "C. Because their internet connection is unreliable", "D. Because their managers give them more tasks"],
        correctIndex: 1,
        explanation: "文章指出「Some remote workers find themselves working longer hours because they feel the need to prove they are productive, leading to burnout.」，有些人因為覺得需要證明自己有生產力而工作更長時間，導致職業倦怠。",
      },
      {
        question: "What solution does the article mention for combating isolation?",
        options: ["A. Going back to a traditional office permanently", "B. Working in a different country every month", "C. Using co-working spaces for social atmosphere", "D. Avoiding all contact with colleagues"],
        correctIndex: 2,
        explanation: "文章提到「The rise of co-working spaces has provided another solution. These shared offices offer the social atmosphere of a traditional workplace without the rigidity.」，共享辦公空間提供了社交氛圍來對抗孤立感。",
      },
    ],
  },
  {
    id: "art-d11",
    title: "Budget Travel: Seeing the World Without Breaking the Bank",
    content: `Traveling the world does not have to be expensive. With careful planning, smart choices, and a willingness to step outside your comfort zone, you can explore incredible destinations without draining your savings account. Budget travel is not about sacrificing quality or comfort entirely. It is about being resourceful and prioritizing experiences over luxury.

The biggest expense for most travelers is airfare, but there are many strategies to reduce this cost. Booking flights well in advance, being flexible with your travel dates, and using fare comparison websites can save you hundreds of dollars. Many budget airlines offer extremely low base fares, though you should watch out for hidden fees on luggage, seat selection, and meals. Setting up price alerts on apps like Skyscanner or Google Flights will notify you when prices drop for your desired route.

Accommodation is another area where budget travelers can save significantly. Hostels have evolved far beyond the basic dormitories of the past. Many modern hostels offer private rooms, stylish common areas, and organized social events. Platforms like Airbnb can be economical, especially if you are traveling in a group and can split the cost of an apartment. For the truly adventurous, house-sitting websites connect travelers with homeowners who need someone to look after their property and pets while they are away, providing free accommodation in exchange.

Eating like a local is both the cheapest and most rewarding approach to food while traveling. Skip the tourist restaurants near major attractions and walk a few blocks to where the locals eat. Street food, market stalls, and small family-run eateries offer authentic cuisine at a fraction of the cost. If your accommodation has a kitchen, shopping at local grocery stores and cooking some of your own meals can stretch your food budget even further.

Transportation within your destination also offers savings opportunities. Walking is free and lets you discover hidden corners of a city that you would miss from a taxi window. Many cities offer day passes or weekly passes for public transit that are much cheaper than buying individual tickets. Renting a bicycle is another affordable and enjoyable way to explore a new place.

Finally, take advantage of free activities. Most cities have free walking tours, public parks, museums with free admission days, and cultural festivals throughout the year. Some of the best travel experiences cost nothing at all: watching a sunset from a hilltop, wandering through a historic neighborhood, or striking up a conversation with a local at a coffee shop. Budget travel teaches you that the richest experiences are rarely the most expensive ones.`,
    contentZh: `環遊世界不一定要花大錢。只要仔細規劃、聰明選擇，並且願意踏出舒適圈，你就能在不耗盡存款的情況下探索令人驚嘆的目的地。預算旅行並不是完全犧牲品質或舒適，而是善用資源，把體驗放在奢華享受之前。

對大多數旅行者來說，最大的開銷是機票，但有很多方法可以降低這項花費。提早訂機票、彈性調整出發日期、使用比價網站，都能幫你省下數百美元。許多廉價航空提供非常低的基本票價，不過要留意行李、選位和餐食等隱藏費用。在 Skyscanner 或 Google Flights 等 App 上設定價格提醒，當你想去的航線降價時就會收到通知。

住宿是預算旅行者另一個能大幅省錢的地方。青年旅館早已遠遠超越過去那種簡陋的團體宿舍。許多現代青旅提供私人房間、時尚的公共空間，還會舉辦社交活動。Airbnb 等平台也很經濟實惠，特別是結伴旅行時可以分攤一整間公寓的費用。對於真正愛冒險的人來說，house-sitting 網站能讓旅行者和需要有人照顧房子與寵物的屋主配對，以換取免費住宿。

像當地人一樣吃東西，既是最省錢也是最有收穫的旅行飲食方式。跳過觀光景點附近的餐廳，多走幾條街到當地人吃飯的地方。路邊攤、市場小攤和家庭式小餐館提供道地美食，價格只要觀光區的幾分之一。如果你的住處有廚房，到當地超市採買、自己煮幾餐，能讓你的伙食預算更耐用。

在目的地的交通也有不少省錢機會。步行是免費的，而且能讓你發現從計程車車窗裡看不到的城市角落。許多城市提供一日券或週票，比單次購票便宜得多。租一台腳踏車也是探索新地方的經濟又愉快的方式。

最後，善用免費活動。大多數城市都有免費導覽、公園、免費開放日的博物館，以及全年各種文化節慶。有些最棒的旅行體驗根本不花一毛錢：在山丘上看夕陽、漫步歷史街區，或是在咖啡廳和當地人聊天。預算旅行教會你，最豐富的體驗往往不是最昂貴的。`,
    domain: "daily" as const,
    difficulty: 2,
    wordCount: 390,
    targetWords: ["resourceful", "prioritizing", "accommodation", "dormitories", "economical", "authentic", "cuisine", "admission"],
    questions: [
      {
        question: "What does the article say budget travel is really about?",
        options: ["A. Staying in the cheapest hotels possible", "B. Being resourceful and prioritizing experiences over luxury", "C. Traveling only to developing countries", "D. Avoiding all tourist attractions"],
        correctIndex: 1,
        explanation: "文章第一段明確指出，預算旅行的核心是「善用資源，把體驗放在奢華享受之前」（being resourceful and prioritizing experiences over luxury），對應選項 B。",
      },
      {
        question: "How does the article suggest saving money on food while traveling?",
        options: ["A. Skip meals to save money", "B. Only eat at international fast-food chains", "C. Eat like a local at street food stalls and small eateries", "D. Bring all your food from home"],
        correctIndex: 2,
        explanation: "文章第四段建議「像當地人一樣吃東西」，去路邊攤、市場小攤和家庭式小餐館用餐，價格只要觀光區的幾分之一，對應選項 C。",
      },
      {
        question: "What free activities does the article mention?",
        options: ["A. Free hotel upgrades and complimentary breakfasts", "B. Free walking tours, public parks, and museums with free admission days", "C. Free airplane tickets on certain days of the week", "D. Free shopping at weekend markets"],
        correctIndex: 1,
        explanation: "文章最後一段提到大多數城市都有免費導覽（free walking tours）、公園（public parks）和免費開放日的博物館（museums with free admission days），對應選項 B。",
      },
    ],
  },
  {
    id: "art-d12",
    title: "The Psychology of First Impressions",
    content: `It takes only seven seconds to form a first impression. In that brief window, people evaluate your confidence, trustworthiness, and likability based on a combination of visual cues, body language, and verbal communication. Whether you are attending a job interview, meeting a new colleague, or going on a first date, understanding the psychology behind first impressions can give you a significant advantage in social situations.

Research in social psychology has revealed that nonverbal communication plays a far greater role in first impressions than most people realize. Your posture, facial expressions, eye contact, and handshake all send powerful signals before you even speak a word. Standing tall with your shoulders back conveys confidence, while crossed arms or avoiding eye contact can suggest defensiveness or discomfort. A genuine smile, one that reaches your eyes, is universally recognized as a sign of warmth and approachability.

The "halo effect" is a well-documented cognitive bias that heavily influences first impressions. When we perceive one positive quality in a person, we tend to assume they possess other positive qualities as well. For example, if someone is well-dressed and articulate, we are more likely to assume they are also intelligent, competent, and kind, even without evidence. This bias works in reverse too: a negative first impression can cause people to view your subsequent actions through a critical lens, regardless of your actual abilities.

Your voice also matters more than you might think. Research shows that people who speak at a moderate pace with varied intonation are perceived as more credible and engaging. Speaking too quickly can signal nervousness, while speaking too slowly might suggest a lack of enthusiasm. Mirroring the other person's speech patterns and energy level can create an unconscious sense of rapport and connection.

Cultural context also shapes how first impressions are formed. In some cultures, a firm handshake demonstrates confidence, while in others, a gentle grip or a slight bow is more appropriate. Direct eye contact is valued in Western cultures but can be considered confrontational in certain Asian cultures. Being aware of these cultural differences is especially important in international business settings and when traveling abroad.

While first impressions are powerful, they are not permanent. If you feel you have made a poor initial impression, consistent positive behavior over time can gradually change how others perceive you. The most important thing is to be authentic. People are remarkably good at detecting insincerity, and trying too hard to impress often backfires. Focus instead on being genuinely interested in others, listening actively, and letting your natural personality shine through.`,
    contentZh: `形成第一印象只需要七秒鐘。在這短短的時間裡，人們會根據視覺線索、肢體語言和口語溝通的組合，評估你的自信、可信度和好感度。無論你是去面試、認識新同事，還是第一次約會，了解第一印象背後的心理學，能讓你在社交場合中佔有明顯優勢。

社會心理學研究發現，非語言溝通在第一印象中扮演的角色，遠比大多數人以為的重要得多。你的姿勢、表情、眼神接觸和握手方式，在你開口說話之前就已經傳達了強烈的訊號。挺直站立、肩膀往後展開傳達的是自信，而雙手交叉在胸前或迴避眼神接觸，則暗示防備心或不自在。一個真誠的微笑——那種連眼睛都在笑的笑容——是全世界公認的溫暖與親和力的表現。

「光環效應」是一種有充分記錄的認知偏誤，對第一印象影響深遠。當我們察覺到一個人身上有某個正面特質時，往往會假設他同時也擁有其他正面特質。例如，如果某人穿著得體、談吐清晰，我們更容易認為他也很聰明、有能力而且善良，即使沒有任何證據。這種偏誤也會反過來作用：負面的第一印象會讓人用挑剔的眼光看待你之後的行為，不管你的實際能力如何。

你的聲音也比你想像的更重要。研究顯示，說話速度適中、語調有變化的人，會被認為更有可信度和吸引力。說太快可能傳達緊張感，說太慢則可能讓人覺得缺乏熱忱。模仿對方的說話方式和能量水平，可以在潛意識中建立默契和連結感。

文化背景也會影響第一印象的形成方式。在某些文化中，有力的握手展現自信；但在其他文化中，輕柔的握手或微微鞠躬才是更合適的。直接的眼神接觸在西方文化中受到重視，但在某些亞洲文化中可能被認為具有對抗性。在國際商務場合和出國旅行時，了解這些文化差異尤其重要。

雖然第一印象很強大，但並非不可改變。如果你覺得自己留下了不好的初始印象，長期一致的正面行為可以逐漸改變別人對你的看法。最重要的是做真實的自己。人們非常擅長察覺不真誠，過度努力想讓人留下好印象往往會適得其反。不如把重心放在真心對別人感興趣、認真傾聽，讓你的真實個性自然展現。`,
    domain: "daily" as const,
    difficulty: 2,
    wordCount: 390,
    targetWords: ["evaluate", "nonverbal", "cognitive bias", "articulate", "intonation", "rapport", "confrontational", "authentic"],
    questions: [
      {
        question: "According to the article, how long does it take to form a first impression?",
        options: ["A. About one minute", "B. About seven seconds", "C. About thirty seconds", "D. About five minutes"],
        correctIndex: 1,
        explanation: "文章開頭第一句就指出「形成第一印象只需要七秒鐘」（It takes only seven seconds to form a first impression），對應選項 B。",
      },
      {
        question: "What is the 'halo effect' described in the article?",
        options: ["A. A lighting technique that makes people look better", "B. A tendency to assume positive qualities based on one positive trait", "C. A type of handshake used in business meetings", "D. A psychological test for measuring intelligence"],
        correctIndex: 1,
        explanation: "文章第三段解釋光環效應是一種認知偏誤：當我們察覺到某人的一個正面特質時，會傾向假設他也擁有其他正面特質，對應選項 B。",
      },
      {
        question: "What does the article recommend if you make a poor first impression?",
        options: ["A. Avoid that person in the future", "B. Immediately apologize and explain yourself", "C. Show consistent positive behavior over time", "D. Try to make a joke to lighten the mood"],
        correctIndex: 2,
        explanation: "文章最後一段指出，如果留下了不好的第一印象，「長期一致的正面行為可以逐漸改變別人對你的看法」（consistent positive behavior over time can gradually change how others perceive you），對應選項 C。",
      },
    ],
  },
  {
    id: "art-d13",
    title: "Sustainable Living in Modern Cities",
    content: `As urban populations continue to swell worldwide, the environmental impact of city living has become an urgent topic of discussion. Modern cities consume enormous amounts of energy, generate vast quantities of waste, and contribute significantly to greenhouse gas emissions. Yet paradoxically, cities also hold the key to a more sustainable future. With their density and infrastructure, urban areas offer unique opportunities for implementing eco-friendly practices at scale, and individuals can make a meaningful difference through the choices they make every day.

One of the most impactful changes a city dweller can make is rethinking their transportation habits. Private automobiles are among the largest sources of carbon emissions in urban areas. Switching to public transit, cycling, or walking for daily commutes can dramatically reduce your personal carbon footprint. The proliferation of electric scooters, bike-sharing programs, and ride-sharing services in many cities has made car-free living more feasible than ever. Some progressive cities like Amsterdam, Copenhagen, and Taipei have invested heavily in cycling infrastructure, making two-wheeled transportation not only practical but also pleasant.

Reducing household waste is another critical component of sustainable urban living. The average person generates approximately one kilogram of solid waste per day, much of which ends up in landfills where it decomposes and releases methane, a potent greenhouse gas. Adopting a zero-waste mindset begins with the familiar hierarchy: refuse what you do not need, reduce what you consume, reuse what you can, recycle what remains, and rot the rest through composting. Many cities now offer curbside composting programs, and community gardens provide spaces where residents can compost organic waste and grow their own vegetables simultaneously.

Conscious consumption extends beyond waste management to the products we purchase. Fast fashion, for instance, is one of the most environmentally destructive industries on the planet, responsible for approximately ten percent of global carbon emissions and enormous water pollution. Choosing secondhand clothing, supporting sustainable brands, and simply buying fewer but higher-quality garments can significantly mitigate your environmental impact. Similarly, being mindful about food choices matters: reducing meat consumption, choosing locally sourced produce, and minimizing food waste all contribute to a lighter ecological footprint.

Energy consumption in the home represents yet another frontier for sustainability. Simple measures like switching to LED lighting, unplugging electronics when not in use, using programmable thermostats, and properly insulating your living space can reduce household energy consumption by twenty to thirty percent. For renters who cannot make structural modifications, portable solutions like thermal curtains and smart power strips offer accessible alternatives.

The transition to sustainable living does not require perfection or radical lifestyle overhaul. It is about making incremental improvements and recognizing that millions of individuals making small changes collectively produce enormous impact. By treating sustainability not as a sacrifice but as an opportunity for creativity and intentional living, urban residents can help shape cities that are healthier, more resilient, and more equitable for future generations.`,
    contentZh: `隨著全球城市人口持續膨脹，城市生活對環境的衝擊已成為一個迫切的議題。現代城市消耗大量能源、產生巨量廢棄物，並大幅貢獻溫室氣體排放。然而矛盾的是，城市也掌握著通往更永續未來的關鍵。憑藉其人口密度和基礎建設，都市地區提供了大規模推行環保措施的獨特機會，而每個人透過日常選擇，也能帶來有意義的改變。

城市居民能做出的最有影響力的改變之一，就是重新思考交通習慣。私人汽車是都市地區最大的碳排放來源之一。改用大眾運輸、騎自行車或步行通勤，可以大幅減少個人碳足跡。電動滑板車、共享單車和共乘服務在許多城市的普及，讓無車生活比以往更加可行。一些前瞻性的城市如阿姆斯特丹、哥本哈根和台北，已大力投資自行車基礎建設，讓兩輪交通不僅實用，而且令人愉悅。

減少家庭廢棄物是永續城市生活的另一個關鍵環節。一般人每天大約產生一公斤的固體廢棄物，其中大部分最終進入掩埋場，在那裡分解並釋放甲烷——一種強效溫室氣體。採用零廢棄的思維，從大家熟知的層級原則開始：拒絕不需要的、減少消耗量、重複使用能用的、回收剩餘的，最後把其餘的堆肥處理。許多城市現在提供路邊堆肥回收服務，社區菜園也提供空間讓居民同時堆肥有機廢棄物和種植自己的蔬菜。

有意識的消費不僅限於廢棄物管理，也延伸到我們購買的產品。以快時尚為例，它是地球上對環境破壞最嚴重的產業之一，約佔全球碳排放的百分之十，並造成大量水污染。選擇二手衣物、支持永續品牌，以及單純地少買但買品質更好的衣服，都能顯著減輕你對環境的衝擊。同樣地，注意飲食選擇也很重要：減少肉類攝取、選擇在地農產品、減少食物浪費，都有助於降低生態足跡。

家庭能源消耗是永續生活的又一個前線。簡單的措施如改用 LED 照明、不用時拔掉電器插頭、使用可程式恆溫器，以及妥善為居住空間做好隔熱，可以減少百分之二十到三十的家庭能源消耗。對於無法進行結構性改動的租屋族，隔熱窗簾和智慧插座等可攜式解決方案提供了平易近人的替代選項。

邁向永續生活不需要做到完美，也不需要徹底改變生活方式。重點在於逐步改善，並認知到數百萬人各自做出小改變，匯聚起來能產生巨大的影響。把永續生活視為一種創意和有意識生活的機會，而非犧牲，城市居民就能幫助打造更健康、更有韌性、對未來世代更公平的城市。`,
    domain: "daily" as const,
    difficulty: 3,
    wordCount: 430,
    targetWords: ["proliferation", "feasible", "decompose", "methane", "hierarchy", "mitigate", "incremental", "resilient", "equitable"],
    questions: [
      {
        question: "Why does the article describe cities as paradoxically important for sustainability?",
        options: ["A. Because cities produce more waste but also recycle more", "B. Because cities consume enormous resources yet their density enables eco-friendly practices at scale", "C. Because city residents earn more money to invest in green technology", "D. Because cities have more parks and green spaces than rural areas"],
        correctIndex: 1,
        explanation: "文章第一段指出城市雖然消耗大量資源，但其人口密度和基礎建設也提供了大規模推行環保措施的獨特機會，這就是「矛盾」所在，對應選項 B。",
      },
      {
        question: "What hierarchy does the article describe for reducing waste?",
        options: ["A. Reduce, reuse, recycle", "B. Buy less, sell more, donate the rest", "C. Refuse, reduce, reuse, recycle, and rot", "D. Sort, wash, compress, and recycle"],
        correctIndex: 2,
        explanation: "文章第三段描述的廢棄物減量層級原則為：拒絕（refuse）、減少（reduce）、重複使用（reuse）、回收（recycle）、堆肥（rot），對應選項 C。",
      },
      {
        question: "According to the article, what is the best approach to sustainable living?",
        options: ["A. Making radical lifestyle changes immediately", "B. Waiting for governments to enforce environmental laws", "C. Making incremental improvements that collectively produce enormous impact", "D. Moving out of cities to reduce your carbon footprint"],
        correctIndex: 2,
        explanation: "文章最後一段指出永續生活的最佳方式是「逐步改善」（making incremental improvements），數百萬人的小改變匯聚起來能產生巨大影響，對應選項 C。",
      },
    ],
  },
  {
    id: "art-d14",
    title: "The Science Behind a Good Morning Routine",
    content: `The first hour of your day can set the tone for everything that follows. While the concept of a morning routine might sound like just another self-help cliche, there is substantial scientific evidence supporting the idea that how you start your morning profoundly influences your cognitive performance, emotional regulation, and overall productivity throughout the day. Understanding the neuroscience and chronobiology behind morning habits can help you design a routine that genuinely works for your body and mind.

When you wake up, your body undergoes a complex hormonal transition. Cortisol, often called the "stress hormone," naturally peaks within thirty to forty-five minutes of waking in a phenomenon known as the cortisol awakening response. This surge is not harmful; it is your body's way of mobilizing energy and preparing you for the day ahead. Exposing yourself to natural sunlight within the first hour of waking amplifies this response and simultaneously suppresses melatonin production, helping you feel alert and energized. Research from Stanford University's neuroscience department has demonstrated that even ten minutes of morning sunlight exposure can significantly improve nighttime sleep quality and daytime wakefulness.

Physical movement in the morning offers compounding benefits that extend well beyond the exercise itself. Even moderate activity like a brisk walk, yoga session, or brief bodyweight workout triggers the release of endorphins, dopamine, and serotonin, neurotransmitters collectively responsible for mood regulation, motivation, and a sense of well-being. Exercise also increases blood flow to the prefrontal cortex, the brain region responsible for executive functions such as decision-making, focus, and impulse control. Studies published in the British Journal of Sports Medicine found that morning exercise improved attention, visual learning, and decision-making for up to ten hours afterward.

The decision about when to consume caffeine also has a scientific basis. Drinking coffee immediately upon waking, as many people do, may actually diminish its effectiveness. Since cortisol levels are already elevated in the morning, adding caffeine on top creates a redundancy that can lead to increased tolerance over time. Sleep scientists recommend waiting sixty to ninety minutes after waking before having your first cup, allowing cortisol to peak and decline naturally. This timing maximizes the stimulant effect of caffeine precisely when your body begins to experience its first energy dip.

Nutrition plays an equally pivotal role. Skipping breakfast triggers a cascade of metabolic responses, including elevated cortisol levels and blood sugar instability, that can impair concentration and increase irritability later in the morning. A balanced breakfast containing protein, healthy fats, and complex carbohydrates provides sustained energy and prevents the mid-morning crash associated with high-sugar or highly processed options. Emerging research in nutritional psychiatry suggests that breakfast composition may also influence mood and anxiety levels throughout the day.

Perhaps the most underappreciated element of an effective morning routine is intentional cognitive engagement before reactive consumption. Checking emails, social media, or news immediately upon waking places your brain in a reactive state, responding to other people's priorities rather than establishing your own. Psychologists recommend dedicating the first portion of your morning to proactive activities such as journaling, meditation, planning your day, or working on a meaningful personal project. This practice strengthens your sense of agency and internal locus of control, psychological factors strongly correlated with long-term success and life satisfaction.`,
    contentZh: `你一天的第一個小時，可以為接下來的一切定下基調。雖然晨間作息的概念聽起來像是又一個老套的自我成長建議，但確實有大量科學證據支持：你如何開始早晨，會深刻影響你整天的認知表現、情緒調節和整體生產力。了解晨間習慣背後的神經科學和時間生物學，能幫助你設計出一套真正適合你身心的作息。

當你醒來時，身體會經歷一段複雜的荷爾蒙轉換。皮質醇——常被稱為「壓力荷爾蒙」——會在醒來後三十到四十五分鐘內自然達到高峰，這個現象稱為「皮質醇覺醒反應」。這股激增並不有害；它是身體動員能量、為一天做好準備的方式。在醒來後的第一個小時內接觸自然陽光，可以增強這個反應，同時抑制褪黑激素的分泌，幫助你感到清醒和有活力。史丹佛大學神經科學系的研究證實，即使只是十分鐘的晨間日照，也能顯著改善夜間睡眠品質和白天的清醒程度。

晨間運動帶來的複合效益，遠遠超出運動本身。即使是適度的活動——如快走、瑜伽或簡短的徒手訓練——都會觸發腦內啡、多巴胺和血清素的釋放，這些神經傳導物質共同負責情緒調節、動力和幸福感。運動還能增加流向前額葉皮質的血流量，這個腦區負責執行功能，如決策、專注和衝動控制。發表在《英國運動醫學期刊》上的研究發現，晨間運動可以改善注意力、視覺學習和決策能力，效果持續長達十小時。

什麼時候攝取咖啡因也有科學根據。像許多人一樣醒來就立刻喝咖啡，實際上可能會降低咖啡因的效果。由於早晨皮質醇水平已經升高，再加上咖啡因會造成重複效果，長期下來可能導致耐受性增加。睡眠科學家建議在醒來後等六十到九十分鐘再喝第一杯咖啡，讓皮質醇自然達到高峰然後下降。這個時機點能讓咖啡因的提神效果，恰好在你的身體開始感到第一波能量低谷時發揮最大作用。

營養同樣扮演關鍵角色。不吃早餐會引發一連串的代謝反應，包括皮質醇升高和血糖不穩，可能在上午稍後損害專注力並增加煩躁感。一頓含有蛋白質、健康脂肪和複合碳水化合物的均衡早餐，能提供持續的能量，避免高糖或高度加工食品帶來的上午崩潰感。營養精神醫學的新興研究顯示，早餐的內容組成也可能影響一整天的情緒和焦慮程度。

有效晨間作息中最被低估的元素，或許是在被動接收資訊之前，先進行有意識的認知投入。一醒來就查看電子郵件、社群媒體或新聞，會讓你的大腦進入被動反應狀態——回應別人的優先事項，而非建立你自己的。心理學家建議把早晨的第一段時間用在主動性活動上，例如寫日記、冥想、規劃一天的行程，或做一個有意義的個人專案。這個練習能強化你的自主感和內控信念——這些心理因素與長期成功和生活滿意度有很強的正相關。`,
    domain: "daily" as const,
    difficulty: 3,
    wordCount: 480,
    targetWords: ["chronobiology", "cortisol", "suppress", "compounding", "neurotransmitters", "redundancy", "cascade", "proactive", "locus"],
    questions: [
      {
        question: "What is the cortisol awakening response described in the article?",
        options: ["A. A harmful stress reaction that should be avoided", "B. A natural cortisol peak within thirty to forty-five minutes of waking that mobilizes energy", "C. A condition caused by drinking coffee too early in the morning", "D. An allergic reaction triggered by morning sunlight"],
        correctIndex: 1,
        explanation: "文章第二段說明皮質醇覺醒反應是皮質醇在醒來後三十到四十五分鐘內自然達到高峰的現象，是身體動員能量、為一天做好準備的方式，並非有害反應，對應選項 B。",
      },
      {
        question: "Why does the article recommend waiting before drinking coffee in the morning?",
        options: ["A. Because coffee is harmful on an empty stomach", "B. Because caffeine during peak cortisol creates redundancy and increases tolerance", "C. Because coffee tastes better later in the day", "D. Because morning coffee causes dehydration"],
        correctIndex: 1,
        explanation: "文章第四段解釋，由於早晨皮質醇已經升高，此時再喝咖啡會造成「重複效果」（redundancy），長期下來會增加耐受性，因此建議等六十到九十分鐘再喝，對應選項 B。",
      },
      {
        question: "What does the article say about checking emails first thing in the morning?",
        options: ["A. It is an efficient way to start your day", "B. It has no effect on your mental state", "C. It places your brain in a reactive state responding to others' priorities", "D. It is only problematic if you spend more than an hour doing it"],
        correctIndex: 2,
        explanation: "文章最後一段指出，一醒來就查看電子郵件會讓大腦進入「被動反應狀態」（reactive state），回應的是別人的優先事項而非自己的，對應選項 C。",
      },
    ],
  },
  {
    id: "art-d15",
    title: "Cultural Etiquette Around the World",
    content: `Navigating the unwritten rules of social behavior in foreign countries is one of the most challenging yet rewarding aspects of international travel. What is considered perfectly polite in one culture can be deeply offensive in another, and even well-intentioned travelers can inadvertently cause misunderstandings if they are unaware of local customs. Developing cultural sensitivity does not require memorizing an encyclopedia of rules; rather, it demands a genuine curiosity about why different societies have developed different norms and a willingness to adapt your behavior accordingly.

Dining etiquette provides some of the most striking examples of cultural variation. In Japan, slurping your noodles loudly is not only acceptable but actually expected, as it signals to the chef that you are enjoying the meal. Conversely, making any slurping sounds while eating in Western countries is generally considered rude and unsophisticated. In many Middle Eastern and South Asian cultures, eating with your left hand is taboo because the left hand is traditionally associated with personal hygiene. In Ethiopia, feeding someone with your hands during a meal, a practice called "gursha," is a profound gesture of friendship and respect. Tipping customs also vary enormously: in the United States, a fifteen to twenty percent tip is virtually mandatory, while in Japan, leaving a tip can be perceived as insulting, implying that the server's employer does not pay them adequately.

Physical greetings represent another minefield of cultural differences. While a firm handshake is standard in most Western business contexts, the appropriate pressure and duration vary significantly. In France, the custom of kissing cheeks, known as "la bise," ranges from one kiss to four depending on the region, and getting it wrong can create an awkward encounter. In Thailand, the traditional greeting is the "wai," a slight bow with palms pressed together, and the height of your hands indicates the level of respect being shown. In New Zealand, the Maori people greet visitors with the "hongi," a pressing together of noses and foreheads that symbolizes the sharing of breath and life force.

The concept of personal space and physical contact varies dramatically across cultures. People from Northern European countries, Scandinavia in particular, tend to maintain larger personal space bubbles and may feel uncomfortable with excessive physical proximity during conversations. In contrast, Mediterranean and Latin American cultures tend to stand closer together and use more tactile communication, with frequent touching of arms, shoulders, and backs considered perfectly normal. Misinterpreting these spatial norms can lead to the false impression that someone is either cold and distant or inappropriately intimate.

Gift-giving protocols carry their own set of complex rules. In China, presenting a gift wrapped in white paper is inauspicious because white is the color of mourning. In many Asian cultures, gifts are not opened in front of the giver to avoid any expression of disappointment. The number four is considered unlucky in Chinese, Japanese, and Korean cultures because it sounds similar to the word for death, so giving gifts in sets of four should be avoided. In Russia, bringing an even number of flowers is reserved exclusively for funerals, making an odd-numbered bouquet the appropriate choice for social occasions.

Ultimately, the most important piece of cultural etiquette is not any specific rule but rather the attitude you bring to cross-cultural encounters. Demonstrating humility, asking questions when unsure, observing local behavior before acting, and graciously accepting corrections will earn you goodwill in virtually any culture. Most people around the world appreciate sincere effort from visitors, even when the execution is imperfect. The willingness to learn and respect local customs transforms a tourist into a genuinely welcome guest.`,
    contentZh: `在異國他鄉應對不成文的社交規則，是國際旅行中最具挑戰性卻也最有收穫的面向之一。在一種文化中被認為完全得體的行為，在另一種文化中可能是嚴重的冒犯，即使是出於善意的旅行者，如果不了解當地習俗，也可能在無意間造成誤解。培養文化敏感度不需要背誦一整本規則百科；它需要的是對不同社會為何發展出不同規範的真誠好奇心，以及願意相應調整自己行為的彈性。

餐桌禮儀提供了一些最鮮明的文化差異範例。在日本，大聲吸麵不僅可以被接受，而且其實是被期待的行為，因為這是向廚師表示你很享受這頓飯。相反地，在西方國家，吃東西時發出吸食聲通常被認為粗魯且不雅。在許多中東和南亞文化中，用左手吃東西是禁忌，因為左手在傳統上與個人衛生相關。在衣索比亞，用手餵對方吃東西——這種叫做「gursha」的習俗——是一種深切表達友誼和尊重的方式。小費習慣也差異巨大：在美國，百分之十五到二十的小費幾乎是必要的；而在日本，留小費可能被視為侮辱，暗示老闆給服務人員的薪水不夠。

肢體問候方式是另一個文化差異的地雷區。雖然有力的握手在大多數西方商務場合是標準做法，但適當的力道和持續時間差異很大。在法國，親臉頰的習俗被稱為「la bise」，依地區不同從一下到四下不等，搞錯次數可能會造成尷尬場面。在泰國，傳統問候方式是「wai」——雙手合十微微鞠躬，手的高度表示尊敬的程度。在紐西蘭，毛利人用「hongi」來迎接訪客——將鼻子和額頭貼在一起，象徵分享氣息和生命力。

個人空間和身體接觸的觀念在不同文化中差異極大。北歐國家的人，尤其是斯堪地那維亞人，傾向維持較大的個人空間，在對話時如果對方過於靠近可能會感到不自在。相反地，地中海和拉丁美洲文化的人傾向站得更近，使用更多觸覺式的溝通方式，經常觸碰手臂、肩膀和背部被認為完全正常。誤解這些空間規範，可能會讓人產生錯誤印象，認為對方不是過於冷淡疏離，就是過於親密不當。

送禮規則也有一套複雜的規範。在中國，用白色紙張包裝禮物是不吉利的，因為白色是喪事的顏色。在許多亞洲文化中，禮物不會在送禮者面前拆開，以避免流露出失望的表情。數字四在中華、日本和韓國文化中被認為不吉利，因為它的發音與「死」相似，所以應該避免送四件一組的禮物。在俄羅斯，送偶數朵花是專門用於喪禮的，因此社交場合應該選擇奇數的花束。

最終，最重要的文化禮儀不是任何一條具體規則，而是你在跨文化交流中展現的態度。展現謙遜、不確定時主動提問、在行動前先觀察當地人的行為，以及優雅地接受糾正，在幾乎任何文化中都能為你贏得好感。世界各地的人大多會感激訪客的真誠努力，即使做得不夠完美。願意學習和尊重當地習俗，能把一個觀光客變成真正受歡迎的客人。`,
    domain: "daily" as const,
    difficulty: 3,
    wordCount: 530,
    targetWords: ["inadvertently", "taboo", "mandatory", "proximity", "tactile", "inauspicious", "protocol", "humility", "graciously"],
    questions: [
      {
        question: "Why is slurping noodles considered appropriate in Japan but rude in Western countries?",
        options: ["A. Because Japanese noodles are served hotter", "B. Because in Japan it signals enjoyment to the chef while in the West it is considered unsophisticated", "C. Because Japanese restaurants are louder", "D. Because Western noodles are made differently"],
        correctIndex: 1,
        explanation: "文章第二段說明，在日本大聲吸麵是向廚師表示享受的訊號，而在西方國家這被認為粗魯且不雅，對應選項 B。",
      },
      {
        question: "According to the article, why should gifts in sets of four be avoided in some Asian cultures?",
        options: ["A. Because four is an odd number", "B. Because four sounds similar to the word for death", "C. Because four items are too few for a proper gift", "D. Because the number four represents bad weather"],
        correctIndex: 1,
        explanation: "文章第五段指出，數字四在中華、日本和韓國文化中被認為不吉利，因為它的發音與「死」字相似，所以應避免送四件一組的禮物，對應選項 B。",
      },
      {
        question: "What does the article identify as the most important piece of cultural etiquette?",
        options: ["A. Memorizing every cultural rule before traveling", "B. Avoiding all physical contact in foreign countries", "C. The attitude of humility and willingness to learn you bring to cross-cultural encounters", "D. Speaking the local language fluently"],
        correctIndex: 2,
        explanation: "文章最後一段指出，最重要的文化禮儀是你在跨文化交流中展現的態度——展現謙遜和願意學習的心態，對應選項 C。",
      },
    ],
  },
  {
    id: "art-d16",
    title: "How Music Affects Your Mood and Productivity",
    content: `Music is a universal human experience that transcends linguistic and cultural boundaries. Every known civilization throughout history has produced some form of music, suggesting that our relationship with rhythm, melody, and harmony is deeply embedded in our neurobiology. Modern neuroscience has begun to unravel exactly how music exerts its profound influence on our emotional states, cognitive function, and even physical performance, revealing mechanisms that are far more complex and fascinating than most people realize.

When you listen to music you enjoy, your brain releases dopamine, the same neurotransmitter associated with eating delicious food, receiving social validation, or achieving a long-pursued goal. Remarkably, neuroimaging studies have shown that dopamine is released not only when the pleasurable musical moment occurs but also during the anticipation of that moment. This anticipatory response explains why a familiar song can trigger emotional reactions before the climactic passage even arrives. The nucleus accumbens, a brain structure central to the reward circuit, lights up during peak musical moments, creating a neurochemical experience of pleasure that can be genuinely comparable to other forms of reward.

The relationship between music and productivity is nuanced and depends heavily on the nature of the task being performed. For repetitive or monotonous tasks such as data entry, filing, or assembly-line work, music with a moderate tempo and upbeat character has been consistently shown to improve both speed and accuracy. The music provides external stimulation that compensates for the lack of inherent interest in the task, maintaining arousal levels in an optimal range. However, for tasks requiring deep concentration, complex problem-solving, or language processing, music with lyrics can actually impair performance. The linguistic content of songs competes with the language-processing demands of the work, creating cognitive interference. This is why many researchers and writers prefer instrumental music, ambient soundscapes, or complete silence when engaged in their most demanding intellectual work.

The tempo and modality of music also influence physiological responses in measurable ways. Fast-tempo music in a major key tends to increase heart rate, elevate blood pressure slightly, and stimulate the sympathetic nervous system, producing feelings of excitement and energy. Slow-tempo music in a minor key activates the parasympathetic nervous system, reducing heart rate and cortisol levels, and inducing states of relaxation or melancholy. Athletes and fitness enthusiasts have long exploited these effects: research published in the Journal of Sports Medicine found that listening to high-tempo music during exercise increased endurance by up to fifteen percent and reduced the perceived effort of physical exertion.

Music therapy has emerged as a legitimate clinical discipline with applications ranging from pain management and rehabilitation to mental health treatment and palliative care. Patients recovering from strokes have shown improved motor function when rehabilitation exercises are synchronized with rhythmic musical cues. Individuals with Alzheimer's disease, who may have lost most of their autobiographical memories, can often still recognize and respond emotionally to music from their youth, suggesting that musical memories are stored in brain regions that are among the last to be affected by neurodegenerative disease.

Understanding these mechanisms empowers you to use music more strategically in your daily life. Create different playlists for different purposes: high-energy instrumental tracks for exercise, lo-fi beats or classical music for focused work sessions, and calming ambient music for winding down in the evening. Pay attention to how different genres and tempos affect your own mood and performance, as individual responses to music vary considerably based on personality, musical training, and personal associations. By treating music as a deliberate tool rather than mere background noise, you can harness its remarkable power to enhance virtually every aspect of your daily experience.`,
    contentZh: `音樂是一種超越語言和文化界限的普遍人類體驗。歷史上每一個已知的文明都產生了某種形式的音樂，這表明我們與節奏、旋律和和聲的關係深深植根於我們的神經生物學中。現代神經科學已經開始解開音樂如何深刻影響我們的情緒狀態、認知功能甚至身體表現，揭示的機制遠比大多數人想像的更為複雜和迷人。

當你聆聽自己喜歡的音樂時，大腦會釋放多巴胺——這與吃美食、獲得社交認同或達成長期追求的目標時釋放的神經傳導物質相同。令人驚奇的是，神經影像學研究顯示，多巴胺不僅在愉悅的音樂時刻出現時被釋放，在期待那個時刻的過程中也會被釋放。這種預期反應解釋了為什麼一首熟悉的歌曲能在高潮段落到來之前就引發情緒反應。伏隔核——大腦獎勵迴路的核心結構——在音樂高峰時刻會活躍起來，創造出一種真正可以與其他獎勵形式相媲美的神經化學愉悅體驗。

音樂與生產力之間的關係是細緻微妙的，很大程度上取決於所執行任務的性質。對於重複性或單調的任務，如資料輸入、歸檔或流水線作業，節奏適中、曲調輕快的音樂已被持續證實能提高速度和準確度。音樂提供了外部刺激，彌補任務本身缺乏的趣味性，使興奮程度維持在最佳範圍。然而，對於需要深度專注、複雜問題解決或語言處理的任務，有歌詞的音樂實際上可能會損害表現。歌曲的語言內容與工作的語言處理需求相互競爭，產生認知干擾。這就是為什麼許多研究人員和作家在從事最費腦力的智力工作時，偏好純器樂、環境音效或完全安靜的環境。

音樂的節奏和調式也會以可測量的方式影響生理反應。大調的快節奏音樂傾向於增加心率、略微提高血壓，並刺激交感神經系統，產生興奮和活力的感覺。小調的慢節奏音樂則啟動副交感神經系統，降低心率和皮質醇水平，誘發放鬆或憂鬱的狀態。運動員和健身愛好者早已利用這些效果：發表在《運動醫學期刊》上的研究發現，運動時聆聽快節奏音樂可以將耐力提高多達百分之十五，並降低對身體運動強度的感知。

音樂治療已經成為一門正規的臨床學科，應用範圍從疼痛管理和復健到心理健康治療和安寧照護。中風後恢復的患者，在復健運動搭配有節奏的音樂提示時，運動功能獲得了更好的改善。阿茲海默症患者即使已經失去大部分自傳式記憶，通常仍然能辨識並對年輕時的音樂產生情緒反應，這表明音樂記憶儲存在最晚受到神經退化性疾病影響的腦區中。

了解這些機制能讓你在日常生活中更有策略地使用音樂。為不同目的創建不同的播放清單：運動時用高能量的器樂曲目、專注工作時用 lo-fi 節拍或古典音樂、晚上放鬆時用舒緩的環境音樂。注意不同曲風和節奏如何影響你自己的情緒和表現，因為每個人對音樂的反應會因個性、音樂訓練和個人聯想而有很大差異。把音樂當作一個有意識的工具，而非僅僅是背景噪音，你就能運用它驚人的力量來提升日常體驗的方方面面。`,
    domain: "daily" as const,
    difficulty: 3,
    wordCount: 540,
    targetWords: ["neurobiology", "dopamine", "anticipatory", "cognitive interference", "parasympathetic", "exertion", "palliative", "neurodegenerative", "harness"],
    questions: [
      {
        question: "Why can music with lyrics impair performance on complex tasks?",
        options: ["A. Because lyrics make people want to sing along instead of working", "B. Because the linguistic content competes with language-processing demands of the work", "C. Because songs with lyrics are always louder than instrumental music", "D. Because lyrics distract people by reminding them of personal memories"],
        correctIndex: 1,
        explanation: "文章第三段解釋，有歌詞的音樂之所以會損害複雜任務的表現，是因為歌曲的語言內容與工作的語言處理需求相互競爭，產生「認知干擾」（cognitive interference），對應選項 B。",
      },
      {
        question: "How does fast-tempo music in a major key affect the body?",
        options: ["A. It decreases heart rate and promotes relaxation", "B. It has no measurable physiological effect", "C. It increases heart rate and stimulates the sympathetic nervous system", "D. It causes drowsiness and reduced alertness"],
        correctIndex: 2,
        explanation: "文章第四段指出，大調的快節奏音樂會增加心率、略微提高血壓，並刺激交感神經系統，產生興奮和活力的感覺，對應選項 C。",
      },
      {
        question: "What does the article reveal about music and Alzheimer's disease?",
        options: ["A. Music therapy can cure Alzheimer's disease", "B. Patients with Alzheimer's cannot process any form of music", "C. Musical memories may be stored in brain regions that are among the last affected by the disease", "D. Only classical music has therapeutic benefits for Alzheimer's patients"],
        correctIndex: 2,
        explanation: "文章第五段提到阿茲海默症患者通常仍能辨識並對年輕時的音樂產生情緒反應，這表明音樂記憶儲存在最晚受到神經退化性疾病影響的腦區中，對應選項 C。",
      },
    ],
  },

  // ===== DAILY ARTICLES (art-d17 to art-d30) =====
  {
    id: "art-d17",
    title: "The Art of Meal Prepping",
    content: `Meal prepping has become one of the most popular lifestyle trends in recent years, and for good reason. By dedicating a few hours on the weekend to preparing meals for the upcoming week, people can save time, reduce stress, and make healthier eating choices. For busy professionals and students alike, meal prepping offers a practical solution to the daily question: "What should I eat today?"

The basic concept of meal prepping is simple. You choose several recipes, buy all the necessary ingredients at once, and then cook everything in one session. The prepared meals are stored in containers in the refrigerator or freezer, ready to be reheated whenever you need them. This approach eliminates the temptation to order expensive takeout or grab unhealthy fast food when you are too tired to cook after a long day.

One of the greatest benefits of meal prepping is portion control. When you prepare your meals in advance, you can measure exact amounts of protein, vegetables, and carbohydrates. This is especially helpful for people who are trying to maintain a balanced diet or lose weight. Instead of mindlessly eating whatever is available, you have a nutritious meal already waiting for you.

Getting started with meal prepping does not require fancy equipment or advanced cooking skills. A few basic containers, a cutting board, a good knife, and a reliable oven or stove are all you need. Beginners should start with simple recipes like grilled chicken with roasted vegetables, fried rice with eggs, or pasta with homemade tomato sauce. As you become more comfortable, you can experiment with more complex dishes and diverse cuisines.

However, meal prepping is not without its challenges. Some people find eating the same meal multiple days in a row to be boring. To avoid this, experienced meal preppers recommend preparing two or three different main dishes each week and rotating them. Adding different sauces or seasonings to the same base ingredients can also create variety without much extra effort.

Another important tip is to pay attention to food safety. Cooked meals should be refrigerated within two hours of preparation and consumed within three to four days. If you want meals to last longer, freezing them is a great option. Most properly stored frozen meals remain safe and delicious for up to three months.`,
    contentZh: `備餐近年來已成為最受歡迎的生活趨勢之一，這是有充分理由的。只要在週末花幾個小時為接下來一週準備好餐點，人們就能節省時間、減少壓力，並做出更健康的飲食選擇。無論是忙碌的上班族還是學生，備餐都為每天那個「今天要吃什麼？」的問題提供了實用的解決方案。

備餐的基本概念很簡單。你選好幾道食譜，一次買齊所有需要的食材，然後在一次烹飪中全部做好。準備好的餐點存放在容器裡，放進冰箱或冷凍庫，隨時需要的時候加熱就能吃。這個方法排除了在漫長的一天後因為太累不想煮飯，而去叫昂貴外賣或抓一份不健康速食的誘惑。

備餐最大的好處之一是份量控制。當你提前準備好餐點，就可以精確測量蛋白質、蔬菜和碳水化合物的份量。這對於想要維持均衡飲食或減重的人特別有幫助。不再是隨手拿到什麼就吃什麼，而是已經有一份營養均衡的餐點在等著你。

開始備餐不需要高級設備或進階的烹飪技巧。幾個基本容器、一塊砧板、一把好刀，以及一台可靠的烤箱或爐子就夠了。初學者應該從簡單的食譜開始，例如烤雞配烤蔬菜、蛋炒飯或義大利麵配自製番茄醬。隨著你越來越熟練，可以嘗試更複雜的菜色和多元的料理風格。

不過，備餐也並非沒有挑戰。有些人覺得連續好幾天吃同一道菜很無聊。為了避免這個問題，有經驗的備餐者建議每週準備兩到三道不同的主菜輪流吃。在相同的基底食材上加不同的醬料或調味料，也能在不增加太多額外工作量的情況下創造變化。

另一個重要的建議是注意食品安全。煮好的餐點應該在製備完成後兩小時內放入冰箱，並在三到四天內食用完畢。如果想讓餐點保存更久，冷凍是很好的選擇。大部分妥善保存的冷凍餐點可以安全美味地保存長達三個月。`,
    domain: "daily" as const,
    difficulty: 2,
    wordCount: 340,
    targetWords: ["meal prepping", "ingredients", "portion", "nutritious", "containers", "temptation", "carbohydrates"],
    questions: [
      {
        question: "What is the main advantage of meal prepping mentioned in the article?",
        options: ["A. It saves time and helps people eat healthier", "B. It makes cooking more enjoyable", "C. It allows people to learn professional cooking skills", "D. It is the cheapest way to eat"],
        correctIndex: 0,
        explanation: "文章開頭和第一段就明確指出備餐的主要優點是「節省時間、減少壓力，並做出更健康的飲食選擇」（save time, reduce stress, and make healthier eating choices），對應選項 A。",
      },
      {
        question: "How can meal preppers avoid getting bored with their food?",
        options: ["A. By cooking only one meal per week", "B. By preparing two or three different dishes and rotating them", "C. By ordering takeout on alternate days", "D. By skipping meals occasionally"],
        correctIndex: 1,
        explanation: "文章第五段建議，有經驗的備餐者每週會準備兩到三道不同的主菜輪流吃，來避免吃膩的問題，對應選項 B。",
      },
      {
        question: "According to the article, how long can properly frozen meals last?",
        options: ["A. Up to one week", "B. Up to one month", "C. Up to three months", "D. Up to six months"],
        correctIndex: 2,
        explanation: "文章最後一段指出「大部分妥善保存的冷凍餐點可以安全美味地保存長達三個月」（up to three months），對應選項 C。",
      },
    ],
  },
  {
    id: "art-d18",
    title: "Pet Ownership: More Than Just Companionship",
    content: `When people think about owning a pet, they often focus on the joy of having a cute animal around the house. While companionship is certainly a major benefit, research has shown that pet ownership offers far more than just having a furry friend. From physical health improvements to mental well-being, pets can transform their owners' lives in remarkable ways.

Studies have consistently demonstrated that pet owners tend to have lower blood pressure and reduced levels of stress hormones compared to non-pet owners. Dog owners, in particular, benefit from regular physical activity since dogs need daily walks. This routine exercise helps owners maintain a healthy weight and improves cardiovascular health. Even the simple act of petting a cat or dog has been shown to release oxytocin, a hormone associated with feelings of happiness and relaxation.

Beyond physical health, pets provide significant mental health benefits. For people living alone, a pet can reduce feelings of loneliness and isolation. Many therapists now recommend emotional support animals for patients dealing with anxiety, depression, or post-traumatic stress disorder. The unconditional love that pets offer creates a sense of purpose and responsibility that can be incredibly therapeutic.

Pets also play an important role in social connections. Dog owners frequently meet and interact with other dog owners during walks in the park or visits to the veterinarian. These casual encounters often develop into meaningful friendships. For children, growing up with pets teaches empathy, responsibility, and compassion. Kids who care for animals learn to consider the needs of others and develop stronger emotional intelligence.

However, pet ownership is a serious commitment that should not be taken lightly. Animals require time, money, and consistent care. Veterinary bills, food costs, and grooming expenses can add up quickly. Potential pet owners should honestly evaluate their lifestyle, living situation, and financial capacity before bringing an animal home.

Adoption from shelters is an excellent option for those ready to welcome a pet into their lives. Millions of healthy, loving animals in shelters are waiting for forever homes. By choosing adoption over purchasing from breeders, new owners not only save a life but also help reduce the problem of animal overpopulation.`,
    contentZh: `當人們想到養寵物時，通常會想到身邊有一隻可愛動物的樂趣。雖然陪伴無疑是一大好處，但研究已經證明，養寵物帶來的遠不只是有一個毛茸茸的朋友。從身體健康的改善到心理健康，寵物能以顯著的方式改變主人的生活。

研究一致證實，養寵物的人往往血壓較低，壓力荷爾蒙的水平也低於沒養寵物的人。養狗的人尤其受益於規律的體能活動，因為狗需要每天散步。這種例行運動幫助主人維持健康體重並改善心血管健康。即使是簡單地撫摸貓或狗，也被證實會釋放催產素——一種與幸福感和放鬆感相關的荷爾蒙。

除了身體健康，寵物還提供顯著的心理健康益處。對於獨居的人來說，寵物可以減少孤獨感和疏離感。許多治療師現在會推薦情感支持動物給正在應對焦慮、憂鬱或創傷後壓力症候群的患者。寵物給予的無條件的愛，創造了一種使命感和責任感，這可以產生極大的療癒效果。

寵物在社交聯繫中也扮演重要角色。狗主人經常在公園散步或去獸醫院時遇到其他狗主人並互動交流。這些隨意的邂逅常常發展成有意義的友誼。對於孩子來說，和寵物一起成長能教會他們同理心、責任感和同情心。照顧動物的孩子學會考慮他人的需求，並發展出更強的情緒智慧。

然而，養寵物是一項嚴肅的承諾，不應該輕率決定。動物需要時間、金錢和持續的照顧。獸醫帳單、飼料費和美容費用很快就會累積起來。有意養寵物的人在帶動物回家之前，應該誠實地評估自己的生活方式、居住環境和經濟能力。

從收容所領養是準備好迎接寵物的人的絕佳選擇。數百萬健康、充滿愛的動物在收容所裡等待著永遠的家。選擇領養而非從繁殖業者購買，新主人不僅拯救了一條生命，還幫助減少了動物過度繁殖的問題。`,
    domain: "daily" as const,
    difficulty: 2,
    wordCount: 330,
    targetWords: ["companionship", "cardiovascular", "oxytocin", "therapeutic", "empathy", "commitment", "adoption"],
    questions: [
      {
        question: "According to the article, what hormone is released when petting an animal?",
        options: ["A. Oxytocin", "B. Adrenaline", "C. Cortisol", "D. Insulin"],
        correctIndex: 0,
        explanation: "文章第二段明確指出「撫摸貓或狗會釋放催產素」（release oxytocin），催產素是一種與幸福感和放鬆感相關的荷爾蒙，對應選項 A。",
      },
      {
        question: "What do children learn from growing up with pets?",
        options: ["A. How to train animals professionally", "B. Empathy, responsibility, and compassion", "C. How to become veterinarians", "D. How to breed animals"],
        correctIndex: 1,
        explanation: "文章第四段說明，和寵物一起成長能教會孩子「同理心、責任感和同情心」（empathy, responsibility, and compassion），對應選項 B。",
      },
      {
        question: "What does the article recommend for people who want a new pet?",
        options: ["A. Buying from a professional breeder", "B. Getting a pet from a friend", "C. Adopting from a shelter", "D. Catching a stray animal"],
        correctIndex: 2,
        explanation: "文章最後一段推薦從收容所領養寵物（adoption from shelters），不僅能拯救生命，還能幫助減少動物過度繁殖問題，對應選項 C。",
      },
    ],
  },
  {
    id: "art-d19",
    title: "Understanding Your City's Hidden Gems",
    content: `Every city, no matter how small or large, has hidden gems waiting to be discovered. These are the places that do not appear on typical tourist guides or popular travel websites. They are the quiet cafes tucked away in narrow alleys, the family-run restaurants serving recipes passed down through generations, and the small parks where locals go to escape the noise of everyday life. Finding these spots can transform the way you experience the place you call home.

Many people live in a city for years without truly exploring it. They follow the same routes to work and visit the same shopping centers on weekends. However, taking the time to wander through unfamiliar neighborhoods can reveal surprising treasures. A bookshop with rare second-hand titles, a rooftop garden with a stunning view of the skyline, or a street art mural painted by a talented local artist might be just a few blocks away from your usual path.

One of the best ways to discover hidden gems is to talk to long-time residents. Elderly neighbors, shopkeepers, and taxi drivers often have a wealth of knowledge about their city that cannot be found online. They can point you toward the best breakfast spot that only locals know about or tell you the history behind an old building that most people walk past without noticing.

Social media can also be a useful tool for urban exploration. Many cities have online communities dedicated to sharing lesser-known attractions and off-the-beaten-path experiences. Searching for hashtags related to your city on Instagram or joining local Facebook groups can lead you to places you never knew existed.

Another approach is to attend local events such as weekend farmers markets, community festivals, or neighborhood walking tours. These gatherings not only introduce you to new places but also connect you with people who share your curiosity about the city.

Exploring your own city like a tourist can reignite your appreciation for where you live. Instead of dreaming about faraway destinations, you might find that the most memorable adventures are hiding in plain sight, just around the corner from your home.`,
    contentZh: `每座城市，不論大小，都有等待被發現的隱藏寶地。這些地方不會出現在一般觀光指南或熱門旅遊網站上。它們是藏在窄巷裡的安靜咖啡館、代代相傳手藝的家族餐廳，以及當地人用來逃離日常喧囂的小公園。找到這些地方，能徹底改變你體驗自己所居住城市的方式。

許多人在一座城市住了好幾年，卻從未真正探索過它。他們走同樣的路線上班，週末去同樣的購物中心。然而，花點時間在不熟悉的街區裡漫步，可能會發現令人驚喜的寶藏。一家擁有珍貴二手書的書店、一座可以俯瞰天際線的屋頂花園，或是一幅由當地才華橫溢的藝術家繪製的街頭壁畫，可能就在你平常路線的幾個街區之外。

發現隱藏寶地最好的方法之一，就是和長期居民聊天。年長的鄰居、店家老闆和計程車司機，通常對他們的城市有豐富的知識，這些在網路上找不到。他們可以告訴你只有當地人才知道的最佳早餐店，或是向你講述那棟大多數人路過卻從未注意到的老建築背後的歷史。

社群媒體也是城市探索的好工具。許多城市都有線上社群，專門分享較少人知道的景點和非主流的體驗。在 Instagram 上搜尋與你城市相關的 hashtag，或加入當地的 Facebook 社團，都可能帶你到你從未知道存在的地方。

另一個方法是參加當地活動，如週末農夫市集、社區節慶或社區步行導覽。這些聚會不僅能介紹你認識新地方，還能讓你認識同樣對這座城市充滿好奇心的人。

像觀光客一樣探索自己的城市，能重新點燃你對居住地的感恩之情。與其夢想遙遠的目的地，你可能會發現最難忘的冒險其實就藏在眼前，就在你家轉角處。`,
    domain: "daily" as const,
    difficulty: 2,
    wordCount: 340,
    targetWords: ["hidden gems", "wander", "unfamiliar", "mural", "urban", "curiosity", "reignite", "appreciation"],
    questions: [
      {
        question: "What are 'hidden gems' according to the article?",
        options: ["A. Lesser-known places not found in typical tourist guides", "B. Expensive jewelry shops in the city center", "C. Famous landmarks that attract millions of visitors", "D. Underground caves beneath the city"],
        correctIndex: 0,
        explanation: "文章第一段定義「隱藏寶地」（hidden gems）為不會出現在一般觀光指南或熱門旅遊網站上的地方，如安靜的咖啡館、家族餐廳和小公園，對應選項 A。",
      },
      {
        question: "Who does the article suggest talking to for local knowledge?",
        options: ["A. Foreign tourists visiting the city", "B. Long-time residents such as elderly neighbors and shopkeepers", "C. Travel agents at booking offices", "D. City government officials"],
        correctIndex: 1,
        explanation: "文章第三段建議和「長期居民」聊天來獲取在地知識，包括年長的鄰居、店家老闆和計程車司機，他們擁有網路上找不到的城市資訊，對應選項 B。",
      },
      {
        question: "What is one benefit of exploring your own city mentioned in the article?",
        options: ["A. You can earn money as a tour guide", "B. You will become famous on social media", "C. It can reignite your appreciation for where you live", "D. You can avoid traveling to other countries"],
        correctIndex: 2,
        explanation: "文章最後一段指出，像觀光客一樣探索自己的城市能「重新點燃你對居住地的感恩之情」（reignite your appreciation for where you live），對應選項 C。",
      },
    ],
  },
  {
    id: "art-d20",
    title: "Digital Detox: A Weekend Without Screens",
    content: `In today's hyperconnected world, most people spend an astonishing amount of time staring at screens. Between smartphones, laptops, tablets, and televisions, the average adult spends over seven hours a day interacting with digital devices. While technology has made life more convenient, this constant connectivity comes at a cost. Many experts now recommend taking a regular digital detox — a deliberate break from screens — to restore balance in our lives.

The idea of spending an entire weekend without screens might sound intimidating, or even impossible, to some people. How would you check the weather? What about staying in touch with friends? Could you survive without streaming your favorite shows? These concerns are understandable, but people who have tried a digital detox often report surprising results. They feel more relaxed, sleep better, and have more meaningful conversations with the people around them.

One of the most immediate benefits of stepping away from screens is improved sleep quality. The blue light emitted by phones and computers interferes with the production of melatonin, a hormone that regulates sleep. By putting devices away at least an hour before bedtime, or better yet for an entire weekend, many people notice they fall asleep faster and wake up feeling more refreshed.

A digital detox also creates space for activities that screens often replace. Reading a physical book, cooking a new recipe, going for a hike, or simply sitting in a park and observing the world around you can be deeply satisfying experiences. Without the constant distraction of notifications and social media feeds, people rediscover hobbies they had forgotten about and find new ways to enjoy their free time.

If a full weekend without screens feels too extreme, you can start with smaller steps. Try designating certain hours as screen-free time, such as during meals or the first hour after waking up. You can also create tech-free zones in your home, like the bedroom or dining room. The goal is not to reject technology entirely but to develop a healthier relationship with it.

Over time, regular digital detoxes can help you become more mindful about how and why you use your devices. Instead of reaching for your phone out of habit, you begin to use technology with intention and purpose.`,
    contentZh: `在當今高度連結的世界中，大多數人花在盯著螢幕上的時間多得驚人。在智慧型手機、筆記型電腦、平板和電視之間，一般成年人每天花超過七小時與數位裝置互動。雖然科技讓生活更便利，但這種持續不斷的連線狀態也付出了代價。許多專家現在建議定期進行「數位排毒」——刻意地遠離螢幕——來恢復生活中的平衡。

花一整個週末不碰螢幕的想法，對某些人來說可能聽起來令人畏懼，甚至不可能。你要怎麼查天氣？怎麼和朋友保持聯繫？沒有追劇你受得了嗎？這些擔憂可以理解，但嘗試過數位排毒的人經常報告出乎意料的結果。他們感覺更放鬆、睡得更好，和身邊的人也有更有意義的對話。

遠離螢幕最直接的好處之一是改善睡眠品質。手機和電腦發出的藍光會干擾褪黑激素的分泌——褪黑激素是調節睡眠的荷爾蒙。在睡前至少一小時放下裝置，或者更好的做法是整個週末都不碰，許多人會注意到他們更快入睡，醒來時也感覺更有精神。

數位排毒還為螢幕經常取代的活動創造了空間。閱讀一本實體書、烹飪一道新食譜、去健行，或只是坐在公園裡觀察周遭的世界，都可以是非常令人滿足的體驗。沒有了通知和社群媒體動態的持續干擾，人們重新發現被遺忘的嗜好，並找到新的方式來享受空閒時間。

如果完全不碰螢幕一整個週末感覺太極端，你可以從較小的步驟開始。試著指定某些時段為無螢幕時間，例如用餐時間或起床後的第一個小時。你也可以在家中設立無科技區域，如臥室或餐廳。目標不是完全排斥科技，而是和科技建立更健康的關係。

隨著時間推移，定期的數位排毒可以幫助你更有意識地思考你如何以及為什麼使用你的裝置。不再是出於習慣就拿起手機，你開始帶著意圖和目的來使用科技。`,
    domain: "daily" as const,
    difficulty: 2,
    wordCount: 355,
    targetWords: ["hyperconnected", "deliberate", "intimidating", "melatonin", "notifications", "designating", "mindful"],
    questions: [
      {
        question: "How many hours does the average adult spend on digital devices per day according to the article?",
        options: ["A. Over seven hours", "B. About three hours", "C. Exactly five hours", "D. Less than two hours"],
        correctIndex: 0,
        explanation: "文章第一段明確指出「一般成年人每天花超過七小時與數位裝置互動」（the average adult spends over seven hours a day interacting with digital devices），對應選項 A。",
      },
      {
        question: "Why does screen use before bedtime affect sleep quality?",
        options: ["A. Screens make noise that keeps people awake", "B. Blue light from screens interferes with melatonin production", "C. Screens make the room too bright to sleep", "D. People get too excited reading the news"],
        correctIndex: 1,
        explanation: "文章第三段解釋，手機和電腦發出的藍光會干擾褪黑激素的分泌（blue light interferes with melatonin production），褪黑激素是調節睡眠的荷爾蒙，因此影響睡眠品質，對應選項 B。",
      },
      {
        question: "What does the article suggest for people who find a full weekend detox too extreme?",
        options: ["A. They should give up and not try at all", "B. They should throw away their devices", "C. They can start with smaller steps like screen-free hours or zones", "D. They should only use their phone for emergencies"],
        correctIndex: 2,
        explanation: "文章第五段建議，覺得整個週末不碰螢幕太極端的人可以從較小的步驟開始，例如指定無螢幕時段或在家中設立無科技區域，對應選項 C。",
      },
    ],
  },
  {
    id: "art-d21",
    title: "The Changing Face of Modern Relationships",
    content: `The way people form and maintain relationships has changed dramatically over the past two decades. The rise of social media, dating apps, and instant messaging has transformed how we meet new people, keep in touch with old friends, and even navigate romantic partnerships. While these digital tools have made connecting with others easier than ever, they have also introduced new challenges that previous generations never had to face.

Friendship in the digital age looks quite different from what it used to be. In the past, friendships were built primarily through face-to-face interactions at school, work, or community gatherings. Today, many people maintain friendships almost entirely through text messages, voice notes, and social media comments. While this allows people to stay connected across great distances, some researchers worry that these digital interactions lack the depth and emotional richness of in-person conversations.

The dating landscape has been perhaps the most dramatically altered. Dating apps have become the primary way that young adults meet potential romantic partners. A recent survey found that nearly forty percent of couples who got together in the last five years met through an app or website. These platforms offer convenience and access to a wider pool of people, but they can also create a paradox of choice where having too many options makes it harder to commit to any single person.

Social media also plays a complicated role in modern relationships. On one hand, it allows couples and friends to share experiences, celebrate milestones, and feel connected even when physically apart. On the other hand, the pressure to present a perfect relationship online can create unrealistic expectations. Comparing your own relationships to the carefully curated images others post can lead to dissatisfaction and insecurity.

Despite these challenges, many people are finding ways to build meaningful connections in the modern era. Some set boundaries around technology use during quality time with loved ones. Others make conscious efforts to schedule regular in-person meetups rather than relying solely on digital communication. The key seems to be using technology as a supplement to, rather than a replacement for, genuine human connection.

Ultimately, the fundamentals of strong relationships remain the same regardless of the era: trust, communication, mutual respect, and the willingness to invest time and effort into the people who matter most.`,
    contentZh: `人們建立和維持關係的方式在過去二十年間發生了巨大的變化。社群媒體、交友軟體和即時通訊的興起，改變了我們認識新朋友、與老朋友保持聯繫，甚至經營感情關係的方式。雖然這些數位工具讓與他人建立聯繫比以往更容易，但它們也帶來了前幾代人從未面對過的新挑戰。

數位時代的友誼看起來與過去大不相同。過去，友誼主要是透過在學校、工作場所或社區聚會中面對面的互動建立起來的。如今，許多人幾乎完全透過簡訊、語音訊息和社群媒體留言來維繫友誼。雖然這讓人們能夠跨越遙遠的距離保持聯繫，但一些研究人員擔心，這些數位互動缺乏面對面交談的深度和情感豐富度。

約會方式可能是改變最劇烈的領域。交友軟體已成為年輕人認識潛在戀愛對象的主要方式。一項近期調查發現，在過去五年中結識的情侶中，近四成是透過應用程式或網站認識的。這些平台提供了便利性和更廣泛的選擇，但也可能產生選擇悖論——擁有太多選項反而讓人更難對任何一個人做出承諾。

社群媒體在現代關係中也扮演著複雜的角色。一方面，它讓情侶和朋友們能夠分享經歷、慶祝里程碑，即使身處異地也能感受到彼此的連結。另一方面，在網路上展示完美關係的壓力可能會製造不切實際的期望。將自己的關係與他人精心策劃的圖片相比，可能導致不滿和不安全感。

儘管面臨這些挑戰，許多人仍在現代找到了建立有意義連結的方式。有些人在與親人共度美好時光時，會為科技的使用設定界限。其他人則刻意安排定期的面對面聚會，而不是僅僅依賴數位通訊。關鍵似乎在於將科技作為真正人際連結的補充，而非替代品。

歸根結底，不論在哪個時代，穩固關係的基本要素都是相同的：信任、溝通、相互尊重，以及願意為最重要的人投入時間和精力。`,
    domain: "daily" as const,
    difficulty: 2,
    wordCount: 365,
    targetWords: ["navigate", "interactions", "landscape", "paradox", "curated", "insecurity", "supplement", "fundamentals"],
    questions: [
      {
        question: "What percentage of recent couples met through an app or website according to the article?",
        options: ["A. Nearly forty percent", "B. About twenty percent", "C. Over sixty percent", "D. Exactly fifty percent"],
        correctIndex: 0,
        explanation: "文章明確提到「近期調查發現近四成（nearly forty percent）的情侶是透過應用程式或網站認識的」，因此答案為 A。",
      },
      {
        question: "What is the 'paradox of choice' mentioned in the article?",
        options: ["A. People cannot find any dating apps to use", "B. Having too many options makes it harder to commit to one person", "C. There are not enough single people available", "D. Dating apps are too expensive for most users"],
        correctIndex: 1,
        explanation: "文章解釋「選擇悖論」是指「擁有太多選項反而讓人更難對任何一個人做出承諾」，因此答案為 B。",
      },
      {
        question: "According to the article, what is the key to building meaningful connections today?",
        options: ["A. Avoiding all technology completely", "B. Only communicating through social media", "C. Using technology as a supplement to genuine human connection", "D. Meeting as many new people as possible online"],
        correctIndex: 2,
        explanation: "文章指出關鍵在於「將科技作為真正人際連結的補充（supplement），而非替代品」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-d22",
    title: "How Weather Affects Your Daily Decisions",
    content: `Weather is one of the most powerful yet often overlooked factors that influence our daily decisions. From what we wear in the morning to what we eat for dinner, the temperature, humidity, and sky conditions quietly shape our choices throughout the day. Understanding how weather affects behavior can help us make more conscious decisions and better prepare for the day ahead.

The most obvious way weather influences us is through our clothing choices. On cold winter mornings, we reach for thick coats, scarves, and boots. On hot summer days, we choose light fabrics and open shoes. But weather also affects deeper decisions. Research shows that people tend to eat heavier, more calorie-rich foods during cold weather and prefer lighter salads and cold drinks when temperatures rise. This is partly biological — our bodies naturally crave more energy to stay warm in colder conditions.

Weather also has a significant impact on our mood and energy levels. Studies have found that sunlight exposure is directly linked to the production of serotonin, a brain chemical that promotes feelings of happiness and well-being. This explains why many people feel more cheerful and energetic on sunny days and more sluggish or melancholy during long stretches of cloudy, rainy weather. In extreme cases, a lack of sunlight during winter months can lead to Seasonal Affective Disorder, a form of depression that affects millions of people worldwide.

Our travel and commuting decisions are heavily influenced by weather as well. Rain and snow can cause people to choose driving over cycling or walking. Severe weather warnings might lead us to cancel outdoor plans or postpone trips entirely. In cities with unpredictable weather patterns, residents learn to always carry an umbrella or check the forecast multiple times a day.

Consumer behavior also shifts with the weather. Retailers have long known that sunny weather drives more foot traffic to shopping areas, while rainy days increase online shopping. Ice cream shops see sales spike during heat waves, and coffee shops benefit from cold, drizzly afternoons.

By paying attention to how weather affects your habits, you can make more intentional choices. Planning outdoor exercise on sunny days, preparing comforting meals when it is cold, and adjusting your schedule around weather patterns can lead to a more enjoyable and productive daily routine.`,
    contentZh: `天氣是影響我們日常決策的最強大卻經常被忽視的因素之一。從早上穿什麼到晚餐吃什麼，溫度、濕度和天空狀況在一整天中默默地塑造著我們的選擇。了解天氣如何影響行為，可以幫助我們做出更有意識的決定，並更好地為一天做準備。

天氣影響我們最明顯的方式是透過穿著選擇。寒冷的冬天早晨，我們會拿出厚外套、圍巾和靴子。炎熱的夏天，我們選擇輕薄的布料和涼鞋。但天氣也影響更深層的決定。研究顯示，人們在寒冷天氣時傾向於吃較重、較高熱量的食物，而在溫度升高時偏好較清淡的沙拉和冷飲。這部分是生理原因——我們的身體在較冷的環境下自然渴望更多能量來保暖。

天氣對我們的情緒和精力也有顯著影響。研究發現，陽光照射與血清素的產生直接相關，血清素是一種促進幸福感和健康感的大腦化學物質。這解釋了為什麼許多人在晴天時感覺更開朗、更有活力，而在長期陰天、多雨的天氣中感覺更遲鈍或憂鬱。在極端情況下，冬季日照不足可能導致季節性情感障礙，這是一種影響全球數百萬人的憂鬱症形式。

我們的出行和通勤決定也深受天氣影響。下雨和下雪可能讓人選擇開車而非騎自行車或步行。嚴重的天氣警報可能讓我們取消戶外計畫或完全推遲旅行。在天氣多變的城市，居民學會隨時攜帶雨傘或一天多次查看天氣預報。

消費行為也隨天氣變化。零售業者早就知道，晴天會帶來更多的購物人潮，而雨天則會增加網路購物。冰淇淋店在熱浪期間銷售激增，咖啡店則從寒冷、細雨的下午中獲益。

透過注意天氣如何影響你的習慣，你可以做出更有意向性的選擇。在晴天安排戶外運動、在寒冷時準備暖心餐點、根據天氣模式調整日程，都能帶來更愉快、更有效率的日常生活。`,
    domain: "daily" as const,
    difficulty: 2,
    wordCount: 360,
    targetWords: ["humidity", "conscious", "serotonin", "sluggish", "melancholy", "commuting", "intentional"],
    questions: [
      {
        question: "Why do people tend to eat heavier foods in cold weather?",
        options: ["A. Their bodies naturally crave more energy to stay warm", "B. Heavy food is cheaper in winter", "C. Restaurants only serve warm food in winter", "D. Cold weather kills appetite for light food"],
        correctIndex: 0,
        explanation: "文章提到「我們的身體在較冷的環境下自然渴望更多能量來保暖」，這是生理原因，因此答案為 A。",
      },
      {
        question: "What is Seasonal Affective Disorder?",
        options: ["A. A type of allergy caused by pollen", "B. A form of depression linked to lack of sunlight in winter", "C. A physical injury caused by icy weather", "D. A fear of storms and extreme weather"],
        correctIndex: 1,
        explanation: "文章定義季節性情感障礙為「冬季日照不足可能導致的一種憂鬱症形式」，因此答案為 B。",
      },
      {
        question: "According to the article, how does rainy weather affect consumer behavior?",
        options: ["A. People stop buying things altogether", "B. People buy more umbrellas at physical stores", "C. Online shopping tends to increase on rainy days", "D. People prefer to eat at restaurants instead of shopping"],
        correctIndex: 2,
        explanation: "文章提到「雨天會增加網路購物（online shopping tends to increase）」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-d23",
    title: "The Science of Habit Formation",
    content: `Why is it so easy to scroll through social media for hours but so difficult to maintain a regular exercise routine? The answer lies in the science of habit formation, a field that has attracted considerable attention from psychologists and neuroscientists in recent years. Understanding how habits are formed, maintained, and changed can give you a powerful advantage in shaping your daily behavior and ultimately your life.

At the core of every habit is a neurological pattern known as the habit loop. This loop consists of three components: a cue, a routine, and a reward. The cue is a trigger that tells your brain to initiate the behavior. The routine is the behavior itself. The reward is the benefit your brain receives, which reinforces the loop and makes the behavior more likely to be repeated. For example, feeling stressed (cue) might lead you to eat a piece of chocolate (routine), which provides a temporary feeling of pleasure (reward).

Research suggests that it takes an average of sixty-six days for a new behavior to become automatic, although this varies widely depending on the person and the complexity of the habit. Simple habits, like drinking a glass of water every morning, might become automatic within a few weeks. More complex habits, like exercising for thirty minutes daily, can take several months to solidify.

One of the most effective strategies for building new habits is a technique called habit stacking. This involves attaching a new habit to an existing one. For instance, if you already have a well-established habit of making coffee every morning, you might stack a new habit onto it by doing five minutes of stretching while the coffee brews. By linking the new behavior to something you already do automatically, you reduce the mental effort required to remember and perform the new habit.

Environment design is another crucial factor in habit formation. People who want to read more often place books on their nightstand where they are easily visible. Those who want to eat healthier stock their kitchen with fruits and vegetables while keeping junk food out of sight. By designing your environment to make good habits convenient and bad habits inconvenient, you dramatically increase your chances of success.

Breaking bad habits requires a different approach. Simply trying to stop a behavior through willpower alone rarely works in the long term. Instead, experts recommend identifying the cue and reward associated with the unwanted habit and then substituting a healthier routine that provides a similar reward. For example, if stress triggers snacking, you might replace the snacking with a short walk or deep breathing exercises, both of which can also relieve stress.

The science of habit formation teaches us that we are not simply victims of our impulses. With knowledge, patience, and the right strategies, anyone can reshape their daily behaviors and build a life that reflects their true priorities and values.`,
    contentZh: `為什麼在社群媒體上滑好幾個小時那麼容易，但維持規律的運動習慣卻那麼困難？答案在於習慣養成的科學，這是一個近年來受到心理學家和神經科學家相當關注的領域。了解習慣如何形成、維持和改變，能給你在塑造日常行為、乃至人生方面帶來強大的優勢。

每個習慣的核心是一種稱為「習慣迴路」的神經學模式。這個迴路由三個要素組成：提示、慣例和獎勵。提示是觸發大腦啟動行為的訊號。慣例是行為本身。獎勵是大腦獲得的好處，它強化了迴路並使行為更可能被重複。例如，感到壓力（提示）可能讓你吃一塊巧克力（慣例），這提供了短暫的愉悅感（獎勵）。

研究表明，一個新行為平均需要六十六天才能變得自動化，儘管這因人和習慣的複雜度而有很大差異。簡單的習慣，如每天早上喝一杯水，可能在幾週內就會自動化。更複雜的習慣，如每天運動三十分鐘，可能需要幾個月才能穩固。

建立新習慣最有效的策略之一是「習慣疊加」技巧。這涉及將新習慣附加在現有習慣上。例如，如果你已經有每天早上泡咖啡的固定習慣，你可以在咖啡沖泡時做五分鐘的伸展運動。透過將新行為與你已經自動執行的事情連結，你減少了記住和執行新習慣所需的心理努力。

環境設計是習慣養成中另一個關鍵因素。想多讀書的人會把書放在床頭櫃上，讓書容易看到。想吃得更健康的人會在廚房裡備好水果和蔬菜，同時把垃圾食品藏起來。透過設計你的環境，讓好習慣變得方便、壞習慣變得不方便，你就能大幅提高成功的機會。

打破壞習慣需要不同的方法。單靠意志力來停止一個行為，長期來看很少奏效。相反，專家建議找出與不良習慣相關的提示和獎勵，然後用能提供類似獎勵的更健康的慣例來替代。例如，如果壓力觸發了吃零食的行為，你可以用短暫散步或深呼吸練習來代替，兩者同樣可以緩解壓力。

習慣養成的科學告訴我們，我們並非只是衝動的受害者。有了知識、耐心和正確的策略，任何人都可以重塑日常行為，建立一個反映真正優先事項和價值觀的生活。`,
    domain: "daily" as const,
    difficulty: 3,
    wordCount: 435,
    targetWords: ["neurological", "cue", "reinforce", "solidify", "habit stacking", "willpower", "substitute", "impulses"],
    questions: [
      {
        question: "What are the three components of the habit loop?",
        options: ["A. A cue, a routine, and a reward", "B. A goal, an action, and a result", "C. A thought, a feeling, and a behavior", "D. A plan, an execution, and a review"],
        correctIndex: 0,
        explanation: "文章明確指出習慣迴路由三個要素組成：「提示（cue）、慣例（routine）和獎勵（reward）」，因此答案為 A。",
      },
      {
        question: "How long does it typically take for a new behavior to become automatic?",
        options: ["A. Exactly seven days", "B. An average of sixty-six days", "C. At least one full year", "D. Only two to three days"],
        correctIndex: 1,
        explanation: "文章提到「一個新行為平均需要六十六天才能變得自動化」，因此答案為 B。",
      },
      {
        question: "What does the article recommend for breaking bad habits?",
        options: ["A. Using willpower alone to stop the behavior", "B. Ignoring the habit until it goes away", "C. Substituting a healthier routine that provides a similar reward", "D. Punishing yourself every time you perform the habit"],
        correctIndex: 2,
        explanation: "文章建議「用能提供類似獎勵的更健康的慣例來替代（substituting a healthier routine）」不良習慣，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-d24",
    title: "Exploring Night Markets: A Taiwanese Tradition",
    content: `For visitors and locals alike, night markets are one of the most vibrant and essential parts of Taiwanese culture. These bustling open-air markets come alive after sunset, offering an extraordinary sensory experience that combines delicious food, affordable shopping, and lively entertainment. With hundreds of night markets spread across the island, they represent a tradition that has been cherished for generations and continues to evolve with modern tastes.

The food at Taiwanese night markets is legendary. Stall after stall offers an incredible variety of dishes, from classic favorites like stinky tofu, oyster omelets, and bubble tea to more adventurous options like grilled squid and pepper buns. Each night market has its own signature specialties that draw devoted fans from across the city. The prices are remarkably affordable, allowing visitors to sample dozens of different items in a single evening without spending much money. This accessibility is one reason why night markets remain popular across all income levels and age groups.

Beyond food, night markets offer a wide range of merchandise and entertainment. Vendors sell clothing, accessories, phone cases, souvenirs, and household items at bargain prices. Many markets also feature carnival-style games where visitors can try their luck at ring toss, balloon darts, or claw machines. Some larger night markets even have small amusement rides for children, making them a popular destination for family outings.

The social atmosphere of night markets is equally important. They serve as informal gathering places where friends meet after work, families enjoy a casual dinner out, and couples stroll hand in hand through the crowded lanes. The energy is contagious — the sizzling sounds from cooking stalls, the bright neon lights, and the cheerful chatter of vendors calling out to passersby create an atmosphere that is uniquely Taiwanese.

In recent years, night markets have faced challenges from changing consumer habits and increased competition from convenience stores and delivery apps. Some traditional markets have struggled with declining foot traffic, while others have successfully adapted by improving hygiene standards, accepting mobile payments, and incorporating social media marketing to attract younger customers.

Despite these pressures, night markets remain a cornerstone of daily life in Taiwan. Government initiatives to promote night market culture as a tourist attraction have helped sustain interest both domestically and internationally. For many Taiwanese people, a trip to the night market is not just about eating or shopping — it is a cherished ritual that connects them to their community and cultural identity.`,
    contentZh: `對於遊客和當地人而言，夜市是台灣文化中最生動且不可或缺的一部分。這些熱鬧的露天市場在日落後開始活絡，提供一種結合美味食物、平價購物和熱鬧娛樂的非凡感官體驗。全島分布著數百個夜市，它們代表一項代代珍惜並持續隨現代品味演變的傳統。

台灣夜市的食物堪稱傳奇。一攤接一攤提供令人難以置信的多樣料理，從經典的臭豆腐、蚵仔煎和珍珠奶茶，到更具冒險性的烤魷魚和胡椒餅。每個夜市都有自己的招牌特色，吸引來自全市各地的忠實粉絲。價格非常親民，讓遊客在一個晚上不用花太多錢就能品嚐數十種不同的小吃。這種可近性是夜市在所有收入水準和年齡層中持續受歡迎的原因之一。

除了美食，夜市還提供各式各樣的商品和娛樂。攤販販售服飾、配件、手機殼、紀念品和家居用品，價格都很實惠。許多市場也有嘉年華式的遊戲，遊客可以試試套圈圈、射氣球或夾娃娃機。一些較大的夜市甚至有小型遊樂設施，使其成為家庭出遊的熱門去處。

夜市的社交氛圍同樣重要。它們是非正式的聚會場所，朋友下班後在這裡碰面，家人享受輕鬆的外食晚餐，情侶牽手漫步在擁擠的巷弄間。那種能量是有感染力的——烹飪攤位的滋滋聲、明亮的霓虹燈光，以及攤販向路人招呼的歡快聲音，營造出一種獨特的台灣氛圍。

近年來，夜市面臨消費習慣改變和便利商店、外送平台日益激烈競爭的挑戰。一些傳統市場苦於人潮下降，而其他市場則透過改善衛生標準、接受行動支付和運用社群媒體行銷來吸引年輕客群，成功地做出了調整。

儘管面臨這些壓力，夜市仍然是台灣日常生活的基石。政府推廣夜市文化作為觀光景點的措施，幫助在國內外維持了人們的興趣。對許多台灣人來說，逛夜市不僅僅是吃東西或購物——它是一種珍貴的儀式，將他們與社區和文化認同連結在一起。`,
    domain: "daily" as const,
    difficulty: 3,
    wordCount: 380,
    targetWords: ["vibrant", "sensory", "signature", "accessibility", "merchandise", "contagious", "cornerstone", "ritual"],
    questions: [
      {
        question: "What makes night market food popular across all income levels?",
        options: ["A. The affordable prices allow visitors to sample many items", "B. The government provides free food coupons", "C. All stalls serve the same dishes at fixed prices", "D. The food is only available once a year"],
        correctIndex: 0,
        explanation: "文章提到「價格非常親民（remarkably affordable），讓遊客在一個晚上能品嚐數十種不同的小吃」，這種可近性使夜市在各收入階層都受歡迎，因此答案為 A。",
      },
      {
        question: "How have some night markets adapted to modern challenges?",
        options: ["A. By closing permanently and moving online", "B. By accepting mobile payments and using social media marketing", "C. By raising prices to attract wealthier customers", "D. By banning traditional foods"],
        correctIndex: 1,
        explanation: "文章提到一些夜市透過「接受行動支付和運用社群媒體行銷（accepting mobile payments and using social media marketing）」來適應現代挑戰，因此答案為 B。",
      },
      {
        question: "According to the article, what role do night markets play beyond commerce?",
        options: ["A. They serve as government offices", "B. They function as schools for cooking", "C. They connect people to their community and cultural identity", "D. They are used primarily for political gatherings"],
        correctIndex: 2,
        explanation: "文章最後指出逛夜市「是一種珍貴的儀式，將他們與社區和文化認同連結在一起（connects them to their community and cultural identity）」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-d25",
    title: "The Evolution of Social Media Communication",
    content: `Social media has undergone a remarkable transformation since the early days of platforms like MySpace and Friendster. What began as simple profile pages where users could share basic information about themselves has evolved into a complex ecosystem of communication tools that shape how billions of people interact, share information, and perceive the world around them. Tracing this evolution reveals important insights about human communication and the direction in which our digital conversations are heading.

The first generation of social media focused primarily on connecting people who already knew each other. Facebook's original appeal was its ability to help college students stay in touch with classmates. Twitter emerged as a microblogging platform where users shared brief text updates about their daily lives. These early platforms were predominantly text-based, and communication was relatively straightforward — you posted something, and your friends responded with comments or reactions.

The introduction of smartphones and high-quality cameras fundamentally shifted social media toward visual communication. Instagram's launch in 2010 marked the beginning of the image-first era. Suddenly, a carefully composed photograph could communicate more than a lengthy written post. This visual turn accelerated with the rise of Snapchat's disappearing messages and Instagram Stories, which introduced the concept of ephemeral content that vanishes after twenty-four hours.

The most recent evolution has been driven by short-form video content, with TikTok leading the revolution. Unlike earlier platforms that relied on users following specific accounts, TikTok's algorithm-driven feed introduces users to content from complete strangers based on their viewing habits. This fundamentally changed the dynamics of online interaction, making it possible for ordinary individuals to reach millions of viewers overnight without having an established following.

The way people communicate on these platforms has also evolved significantly. Early social media encouraged lengthy personal updates and deep comment threads. Today, communication tends to be faster and more fragmented. Reactions have replaced thoughtful comments. Sharing a meme or short video clip has become a primary form of expression. Private group chats and direct messages now carry much of the meaningful conversation that used to happen in public comment sections.

These changes have raised important questions about the quality of human communication. Critics argue that the shift toward shorter, more visual, and more algorithm-driven content has reduced our attention spans and diminished the depth of online discourse. Supporters counter that new formats have democratized communication, giving voices to people and communities that were previously marginalized in traditional media.

Looking ahead, emerging technologies like augmented reality, artificial intelligence, and virtual reality spaces promise to transform social media communication once again. The challenge for society will be ensuring that these new tools enhance genuine human connection rather than further fragmenting it.`,
    contentZh: `自 MySpace 和 Friendster 的早期時代以來，社群媒體經歷了顯著的轉變。最初只是簡單的個人檔案頁面，使用者可以分享基本的個人資訊，如今已演變成一個複雜的通訊工具生態系統，塑造著數十億人互動、分享資訊和感知周圍世界的方式。追溯這一演變過程，揭示了關於人類通訊及我們數位對話走向的重要洞見。

第一代社群媒體主要專注於連接已經認識的人。Facebook 最初的吸引力在於幫助大學生與同學保持聯繫。Twitter 則是一個微網誌平台，使用者在上面分享關於日常生活的簡短文字動態。這些早期平台主要以文字為基礎，溝通相對直接——你發布一些東西，你的朋友以留言或反應回覆。

智慧型手機和高畫質相機的出現，從根本上將社群媒體轉向了視覺溝通。Instagram 在 2010 年的推出，標誌著「圖片優先」時代的開始。突然間，一張精心構圖的照片比一篇冗長的文字帖文更能傳達訊息。這種視覺轉向隨著 Snapchat 閱後即焚訊息和 Instagram 限時動態的興起而加速，後者引入了「短暫性內容」的概念——二十四小時後消失的內容。

最新的演變則是由短影音內容驅動的，TikTok 引領了這場革命。與之前依賴使用者關注特定帳號的平台不同，TikTok 的演算法驅動推送根據使用者的觀看習慣，向他們展示完全陌生人的內容。這從根本上改變了線上互動的動態，使普通人有可能在沒有既有粉絲基礎的情況下，一夜之間觸及數百萬觀眾。

人們在這些平台上的溝通方式也有了顯著的演變。早期的社群媒體鼓勵冗長的個人動態和深入的留言串。如今，溝通往往更快、更碎片化。反應表情取代了深思熟慮的留言。分享迷因或短影片片段已成為一種主要的表達形式。私人群組聊天和私訊現在承載了許多以前在公開留言區進行的有意義對話。

這些變化引發了關於人際溝通品質的重要問題。批評者認為，向更短、更視覺化、更受演算法驅動的內容轉變，降低了我們的注意力持續時間並削弱了線上討論的深度。支持者則反駁，新的形式已經讓溝通民主化，為以前在傳統媒體中被邊緣化的人和社群賦予了發聲管道。

展望未來，擴增實境、人工智慧和虛擬實境空間等新興科技，有望再次改變社群媒體的溝通方式。社會面臨的挑戰將是確保這些新工具增強真正的人際連結，而非進一步碎片化它。`,
    domain: "daily" as const,
    difficulty: 3,
    wordCount: 410,
    targetWords: ["ecosystem", "perceive", "predominantly", "ephemeral", "algorithm", "fragmented", "democratized", "marginalized", "augmented"],
    questions: [
      {
        question: "What was the original appeal of early social media platforms like Facebook?",
        options: ["A. Connecting people who already knew each other", "B. Sharing professional business content", "C. Watching short video clips", "D. Playing online games with strangers"],
        correctIndex: 0,
        explanation: "文章提到早期社群媒體如 Facebook「最初的吸引力在於幫助大學生與同學保持聯繫」，主要是連接已經認識的人，因此答案為 A。",
      },
      {
        question: "How did TikTok change the dynamics of social media interaction?",
        options: ["A. It required users to pay for content", "B. Its algorithm-driven feed shows content from strangers based on viewing habits", "C. It only allowed users over thirty years old", "D. It eliminated all video content"],
        correctIndex: 1,
        explanation: "文章說明 TikTok「的演算法驅動推送根據使用者的觀看習慣，向他們展示完全陌生人的內容」，從根本上改變了互動動態，因此答案為 B。",
      },
      {
        question: "What do supporters of new social media formats argue?",
        options: ["A. That social media should be banned completely", "B. That only text-based platforms are valuable", "C. That new formats have democratized communication and given voice to marginalized communities", "D. That algorithms should decide all human interactions"],
        correctIndex: 2,
        explanation: "文章指出支持者認為「新的形式已經讓溝通民主化（democratized），為以前在傳統媒體中被邊緣化的社群賦予了發聲管道」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-d26",
    title: "Mindfulness in Everyday Life",
    content: `In an era of constant distractions, the practice of mindfulness has emerged as a powerful antidote to the stress and anxiety that characterize modern living. Mindfulness, at its core, is the practice of paying deliberate attention to the present moment without judgment. While it has roots in ancient Buddhist meditation traditions, it has been adapted and embraced by mainstream psychology and is now practiced by millions of people worldwide who seek greater peace and clarity in their daily lives.

The concept of mindfulness might sound abstract, but it can be applied to the most ordinary activities. Consider the simple act of eating breakfast. Most people eat while simultaneously checking their phones, reading the news, or mentally planning their day. A mindful approach to breakfast means focusing entirely on the experience of eating — noticing the texture of the food, savoring each flavor, and being aware of the physical sensations of chewing and swallowing. This seemingly small shift in attention can transform a routine activity into a moment of genuine pleasure and awareness.

Scientific research has provided compelling evidence for the benefits of regular mindfulness practice. Studies conducted at leading universities have shown that mindfulness meditation can reduce cortisol levels, the hormone primarily responsible for stress responses in the body. Regular practitioners report decreased anxiety, improved concentration, better emotional regulation, and even enhanced immune function. Brain imaging studies have revealed that consistent meditation practice can actually change the structure of the brain, increasing gray matter density in areas associated with memory, empathy, and self-awareness.

Incorporating mindfulness into daily life does not require setting aside large blocks of time for formal meditation, although that can certainly be beneficial. Simple practices like taking three conscious breaths before starting a meeting, paying full attention to the person speaking during a conversation, or spending two minutes observing your surroundings during a lunch break can cultivate a more mindful disposition throughout the day.

One popular technique is the body scan, in which you systematically direct your attention to different parts of your body, noticing sensations without trying to change them. This practice helps develop interoceptive awareness — the ability to sense what is happening inside your body — which is closely linked to emotional intelligence and self-regulation.

Walking meditation is another accessible practice that combines physical movement with mindful attention. Instead of walking while lost in thought, you focus on the sensation of each step — the feel of your foot lifting, moving forward, and making contact with the ground. This can be practiced anywhere, whether you are walking to the office, through a park, or even down a hallway.

Critics of the mindfulness movement point out that it has become overly commercialized, with expensive retreats, apps, and branded merchandise sometimes diluting its deeper philosophical teachings. However, the fundamental practice remains free and universally accessible: simply pause, breathe, and notice what is happening right now.`,
    contentZh: `在一個充滿持續干擾的時代，正念練習已成為對抗現代生活壓力和焦慮的強效解藥。正念的核心是刻意地、不帶評判地關注當下時刻的練習。雖然它源於古老的佛教冥想傳統，但已被主流心理學所採納和接受，如今全球有數百萬人在練習，以尋求日常生活中更多的平靜和清晰。

正念的概念聽起來可能很抽象，但它可以應用在最平凡的活動中。想想吃早餐這個簡單的行為。大多數人吃東西的同時會看手機、看新聞或在心裡規劃一天的行程。正念的吃早餐方式意味著完全專注於用餐體驗——注意食物的質地、品味每一種味道、覺察咀嚼和吞嚥的身體感覺。這個看似微小的注意力轉移，可以將一個例行活動轉化為真正享受和覺察的時刻。

科學研究為定期正念練習的好處提供了有力的證據。在頂尖大學進行的研究表明，正念冥想可以降低皮質醇水平——這是身體中主要負責壓力反應的荷爾蒙。定期練習者報告焦慮減少、專注力改善、情緒調節能力更好，甚至免疫功能增強。大腦影像研究顯示，持續的冥想練習實際上可以改變大腦的結構，增加與記憶、同理心和自我覺察相關區域的灰質密度。

將正念融入日常生活不需要騰出大段時間進行正式冥想，儘管那確實可以帶來好處。簡單的練習，如在開會前做三次有意識的呼吸、在對話中全神貫注地聆聽對方說話、或在午休時花兩分鐘觀察周圍環境，都可以在一整天中培養更有正念的心性。

一種流行的技巧是身體掃描，你系統性地將注意力引導到身體的不同部位，注意感覺而不試圖改變它們。這種練習有助於發展內感受覺察——感知身體內部正在發生什麼的能力——這與情商和自我調節密切相關。

行走冥想是另一種易於實行的練習，結合了身體運動和正念注意力。不是在走路時迷失在思緒中，而是專注於每一步的感覺——腳抬起、向前移動和接觸地面的感覺。這可以在任何地方練習，無論你是走路去辦公室、穿過公園，還是只是走過走廊。

正念運動的批評者指出，它已經過度商業化，昂貴的靜修課程、應用程式和品牌商品有時會稀釋其更深層的哲學教義。然而，這項基本練習仍然是免費且人人都可使用的：只需暫停、呼吸，並注意現在正在發生什麼。`,
    domain: "daily" as const,
    difficulty: 3,
    wordCount: 430,
    targetWords: ["antidote", "deliberate", "cortisol", "disposition", "interoceptive", "self-regulation", "commercialized", "universally"],
    questions: [
      {
        question: "How does the article define mindfulness?",
        options: ["A. Paying deliberate attention to the present moment without judgment", "B. Thinking constantly about the future to plan ahead", "C. Analyzing past events to learn from mistakes", "D. Ignoring all thoughts and feelings completely"],
        correctIndex: 0,
        explanation: "文章將正念定義為「刻意地、不帶評判地關注當下時刻的練習（paying deliberate attention to the present moment without judgment）」，因此答案為 A。",
      },
      {
        question: "What physical change has brain imaging revealed in regular meditators?",
        options: ["A. Decreased brain activity overall", "B. Increased gray matter density in areas linked to memory and empathy", "C. Smaller brain size due to relaxation", "D. No measurable changes at all"],
        correctIndex: 1,
        explanation: "文章提到大腦影像研究揭示「持續的冥想練習可以增加與記憶和同理心相關區域的灰質密度（increased gray matter density）」，因此答案為 B。",
      },
      {
        question: "What criticism of the mindfulness movement does the article mention?",
        options: ["A. It is too difficult for most people to practice", "B. It has no scientific evidence supporting it", "C. It has become overly commercialized with expensive products", "D. It is only effective for children under twelve"],
        correctIndex: 2,
        explanation: "文章提到批評者指出正念運動「已經過度商業化（overly commercialized），昂貴的產品有時會稀釋其哲學教義」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-d27",
    title: "The Impact of Architecture on Our Well-being",
    content: `Most people rarely stop to consider how the buildings they live and work in affect their mental and physical health. Yet a growing body of research in environmental psychology demonstrates that architecture plays a profound role in shaping our emotions, productivity, and overall sense of well-being. From the height of ceilings to the amount of natural light that enters a room, every architectural decision has the potential to influence how we feel and how effectively we function.

Natural light is perhaps the single most important architectural element affecting human well-being. Studies have consistently shown that workers in offices with ample natural light report higher levels of job satisfaction, experience fewer headaches, and sleep an average of forty-six minutes more per night than their counterparts in windowless environments. This is because natural light helps regulate our circadian rhythm, the internal biological clock that governs our sleep-wake cycle. Buildings designed with large windows, skylights, and open floor plans that allow sunlight to penetrate deep into interior spaces create healthier and more pleasant environments.

Ceiling height has also been shown to influence cognitive function. Research published in the Journal of Consumer Research found that higher ceilings promote abstract thinking and creativity, while lower ceilings encourage more detail-oriented, focused work. This finding has practical implications for architectural design — creative studios and brainstorming rooms might benefit from soaring ceilings, while accounting offices and testing centers might function better with more intimate proportions.

The presence of natural elements within built environments, a concept known as biophilic design, has gained significant attention in recent years. Incorporating plants, water features, natural materials like wood and stone, and views of nature into buildings has been shown to reduce stress, improve air quality, and enhance occupants' emotional states. Some of the world's most innovative companies have embraced biophilic design principles, creating offices that feature indoor gardens, living walls covered in vegetation, and workspaces that overlook natural landscapes.

Color also plays a crucial role in how architecture affects our psychological state. Warm colors like red and orange can stimulate energy and appetite, which is why they are commonly used in restaurants. Cool colors like blue and green tend to promote calmness and concentration, making them popular choices for hospitals and educational institutions. The strategic use of color in architectural design can subtly guide behavior and influence emotional responses.

Urban planning at a broader scale also impacts community well-being. Neighborhoods designed with walkable streets, accessible green spaces, and mixed-use developments that combine residential, commercial, and recreational areas tend to foster stronger social connections and healthier lifestyles. In contrast, sprawling suburbs that require car travel for every errand can contribute to social isolation and sedentary behavior.

As our understanding of the relationship between architecture and well-being deepens, architects and urban planners have an increasing responsibility to design spaces that nurture human health and happiness rather than merely serving functional or aesthetic purposes.`,
    contentZh: `大多數人很少停下來思考他們居住和工作的建築如何影響其身心健康。然而，環境心理學中越來越多的研究表明，建築在塑造我們的情緒、生產力和整體幸福感方面扮演著深遠的角色。從天花板的高度到進入房間的自然光量，每一個建築決策都有潛力影響我們的感受和工作效能。

自然光或許是影響人類幸福感最重要的單一建築元素。研究持續顯示，在擁有充足自然光的辦公室工作的人，報告更高的工作滿意度，頭痛較少，且每晚平均比在無窗環境中工作的同事多睡四十六分鐘。這是因為自然光幫助調節我們的晝夜節律——掌控我們睡眠-覺醒週期的內部生理時鐘。設計有大窗戶、天窗和開放式格局的建築，讓陽光能深入室內空間，創造出更健康、更宜人的環境。

天花板高度也被證明會影響認知功能。發表在《消費者研究期刊》上的研究發現，較高的天花板促進抽象思維和創造力，而較低的天花板則鼓勵更注重細節、更專注的工作。這一發現對建築設計有實際意義——創意工作室和腦力激盪室可能受益於挑高天花板，而會計辦公室和考試中心則可能在較為私密的比例中運作得更好。

在建築環境中融入自然元素的概念——稱為親生物設計——近年來受到了廣泛關注。將植物、水景、木材和石材等天然材料以及自然景觀的視野融入建築中，已被證明可以減少壓力、改善空氣品質並提升居住者的情緒狀態。一些世界上最具創新力的公司已採用親生物設計原則，打造設有室內花園、覆蓋植被的綠牆以及俯瞰自然景觀的工作空間。

色彩在建築影響我們心理狀態方面也起著關鍵作用。紅色和橙色等暖色調可以激發活力和食慾，這就是為什麼它們常用於餐廳。藍色和綠色等冷色調則傾向於促進平靜和專注，使其成為醫院和教育機構的熱門選擇。在建築設計中策略性地運用色彩，可以巧妙地引導行為並影響情緒反應。

更大規模的都市規劃也影響社區的幸福感。設計有步行友善街道、方便到達的綠地空間以及結合住宅、商業和休閒區域的混合用途開發的社區，往往能培養更強的社會連結和更健康的生活方式。相比之下，每件事都需要開車的蔓延式郊區，可能導致社會孤立和久坐行為。

隨著我們對建築與幸福感之間關係的理解加深，建築師和都市規劃師有越來越大的責任來設計培育人類健康和幸福的空間，而不僅僅是服務功能性或美學目的。`,
    domain: "daily" as const,
    difficulty: 3,
    wordCount: 440,
    targetWords: ["profound", "circadian", "cognitive", "biophilic", "vegetation", "strategic", "sprawling", "sedentary", "aesthetic"],
    questions: [
      {
        question: "Why is natural light important in building design according to the article?",
        options: ["A. It helps regulate our circadian rhythm and improves sleep", "B. It makes buildings cheaper to construct", "C. It eliminates the need for heating systems", "D. It makes rooms look more colorful"],
        correctIndex: 0,
        explanation: "文章解釋自然光「幫助調節我們的晝夜節律（circadian rhythm）並改善睡眠」，在自然光充足的辦公室工作的人平均多睡46分鐘，因此答案為 A。",
      },
      {
        question: "What is biophilic design?",
        options: ["A. A style of architecture that uses only metal and glass", "B. Incorporating natural elements like plants, water, and wood into buildings", "C. Designing buildings to look like animals", "D. A method of construction that eliminates all natural materials"],
        correctIndex: 1,
        explanation: "文章定義親生物設計為「在建築環境中融入植物、水景、木材和石材等天然元素（incorporating natural elements like plants, water, and wood into buildings）」，因此答案為 B。",
      },
      {
        question: "How do sprawling suburbs negatively affect residents according to the article?",
        options: ["A. They are too noisy for comfortable living", "B. They have too many parks and green spaces", "C. They can contribute to social isolation and sedentary behavior", "D. They attract too many tourists to residential areas"],
        correctIndex: 2,
        explanation: "文章指出蔓延式郊區「每件事都需要開車，可能導致社會孤立和久坐行為（social isolation and sedentary behavior）」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-d28",
    title: "Learning to Say No: Setting Healthy Boundaries",
    content: `For many people, saying "no" is one of the most difficult things to do. Whether it is a colleague asking for help with extra work, a friend inviting you to an event you have no interest in, or a family member making demands on your time, the pressure to say "yes" to everything can feel overwhelming. However, learning to set healthy boundaries is not a sign of selfishness — it is an essential skill for maintaining your mental health, protecting your energy, and building more authentic relationships.

The difficulty of saying no often stems from deep-seated psychological patterns. Many of us were taught from childhood that being a good person means always being available and accommodating. We fear that declining a request will make others think we are rude, uncaring, or unhelpful. This fear of disapproval can lead to chronic people-pleasing, a pattern in which we consistently prioritize others' needs over our own until we reach a point of exhaustion and resentment.

Understanding why boundaries matter requires recognizing that time and energy are finite resources. Every time you say yes to something that does not align with your values or priorities, you are effectively saying no to something that does. Agreeing to work overtime every evening means saying no to exercise, family dinners, or personal hobbies. Attending every social event means sacrificing the quiet time you need to recharge. When viewed from this perspective, setting boundaries is not about rejecting others but about protecting what matters most to you.

Establishing boundaries effectively requires clear and respectful communication. Instead of making excuses or giving vague responses, it is better to be honest and direct. A simple statement like "I appreciate the invitation, but I need to rest this weekend" or "I would love to help, but I am committed to another project right now" conveys your decision without unnecessary drama. Most reasonable people will respect a clearly stated boundary, and those who do not may need to be reconsidered as part of your inner circle.

It is also important to recognize that boundaries are not rigid walls but flexible guidelines that can be adjusted as circumstances change. A boundary you set during a particularly stressful period might be relaxed when things calm down. The key is regularly checking in with yourself to assess whether your current commitments align with your capacity and values.

Practicing boundary-setting often begins with small situations before progressing to more significant ones. You might start by declining a minor request that you would normally agree to reluctantly. Each time you successfully set a boundary and experience the relief that follows, your confidence in this skill grows. Over time, saying no becomes less anxiety-inducing and more empowering.

Therapists and psychologists emphasize that people who set healthy boundaries tend to experience less burnout, stronger self-esteem, and more fulfilling relationships. Paradoxically, others often respect and trust boundary-setters more than chronic people-pleasers, because they know that when a person with boundaries says yes, they genuinely mean it.`,
    contentZh: `對許多人來說，說「不」是最困難的事情之一。無論是同事請你幫忙額外的工作、朋友邀請你參加你不感興趣的活動，還是家人對你的時間提出要求，對所有事情說「好」的壓力可能讓人感到不堪重負。然而，學習設定健康的界限並不是自私的表現——這是維護心理健康、保護精力和建立更真實關係的必備技能。

說不的困難往往源於根深蒂固的心理模式。我們許多人從小就被教導，做一個好人意味著要始終保持可用和配合。我們害怕拒絕請求會讓別人認為我們粗魯、不關心或不樂於助人。這種對不被認可的恐懼可能導致慢性的討好型人格——一種我們持續將他人需求置於自己之上的模式，直到我們達到精疲力竭和怨恨的臨界點。

理解界限為何重要需要認識到，時間和精力是有限的資源。每次你對不符合你價值觀或優先事項的事情說「好」，你實際上是對重要的事情說「不」。同意每晚加班意味著對運動、家庭晚餐或個人愛好說不。參加每一場社交活動意味著犧牲你需要充電的安靜時間。從這個角度來看，設定界限不是拒絕他人，而是保護對你最重要的東西。

有效地設定界限需要清楚且尊重的溝通。與其找藉口或給出含糊的回應，不如誠實直接。一句簡單的話，如「我感謝你的邀請，但這週末我需要休息」或「我很想幫忙，但我目前正在忙另一個專案」，能在不引起不必要戲劇性的情況下傳達你的決定。大多數通情達理的人會尊重明確表達的界限，而那些不尊重的人可能需要重新考慮是否屬於你的核心圈。

同樣重要的是要認識到，界限不是堅硬的牆壁，而是可以隨情況變化而調整的靈活準則。在壓力特別大的時期設定的界限，可能在事情平靜下來後放鬆。關鍵是定期與自己核對，評估你目前的承諾是否與你的能力和價值觀一致。

練習設定界限通常從小情境開始，然後逐步到更重要的情境。你可以先從拒絕一個你通常會勉強同意的小請求開始。每次你成功設定界限並體驗到隨之而來的解脫感，你對這項技能的信心就會增長。隨著時間推移，說不變得不那麼令人焦慮，更加賦予力量。

治療師和心理學家強調，設定健康界限的人往往經歷較少的倦怠、更強的自尊和更充實的關係。矛盾的是，別人通常比對慢性討好者更尊重和信任設定界限的人，因為他們知道，當一個有界限的人說好時，他們是真心的。`,
    domain: "daily" as const,
    difficulty: 3,
    wordCount: 460,
    targetWords: ["boundaries", "accommodating", "chronic", "resentment", "finite", "conveys", "empowering", "paradoxically"],
    questions: [
      {
        question: "Why do many people find it difficult to say no?",
        options: ["A. They fear disapproval and were taught to always be accommodating", "B. They genuinely want to do everything asked of them", "C. They have too much free time and nothing else to do", "D. They are legally required to help others"],
        correctIndex: 0,
        explanation: "文章指出說不的困難源於「害怕不被認可，以及從小被教導要始終保持配合（fear disapproval and were taught to always be accommodating）」，因此答案為 A。",
      },
      {
        question: "What does the article say about saying yes to everything?",
        options: ["A. It is the best way to build strong relationships", "B. Every time you say yes to something unimportant, you say no to something that matters", "C. It is only a problem for people with many friends", "D. It leads to immediate physical illness"],
        correctIndex: 1,
        explanation: "文章解釋「每次你對不重要的事情說好，你實際上是對重要的事情說不（every time you say yes to something unimportant, you say no to something that matters）」，因此答案為 B。",
      },
      {
        question: "What paradox about boundary-setters does the article describe?",
        options: ["A. They always end up saying yes to everything anyway", "B. They lose all their friends and relationships", "C. Others often respect and trust them more than chronic people-pleasers", "D. They become less productive at work"],
        correctIndex: 2,
        explanation: "文章最後提到「矛盾的是（paradoxically），別人通常比對慢性討好者更尊重和信任設定界限的人」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-d29",
    title: "The Future of Urban Transportation",
    content: `Cities around the world are undergoing a transportation revolution. As urban populations continue to grow and concerns about climate change intensify, the way people move through cities is being fundamentally reimagined. From electric bicycles and ride-sharing services to autonomous vehicles and advanced public transit systems, the future of urban transportation promises to be cleaner, smarter, and more accessible than ever before.

Electric bicycles, commonly known as e-bikes, have emerged as one of the most transformative developments in urban mobility. These battery-powered bicycles allow riders to travel longer distances with less physical effort, making cycling a viable commuting option even in hilly cities or for people who might not be physically fit enough for traditional cycling. In many European and Asian cities, e-bike sales have surged dramatically, and dedicated bike lanes and parking infrastructure have expanded to accommodate this growing trend. For short to medium distances, e-bikes offer a compelling alternative to cars — they produce zero emissions, require minimal parking space, and help riders avoid traffic congestion.

Ride-sharing platforms like Uber and Grab have already transformed urban transportation by making it easy to summon a car with a smartphone app. The next evolution of this model involves shared rides, where multiple passengers heading in the same direction share a single vehicle, reducing both cost and environmental impact. Some companies are developing electric and autonomous ride-sharing fleets that could dramatically lower the per-trip carbon footprint while providing affordable, on-demand transportation.

Public transit systems are also innovating rapidly. Many cities are investing in electric bus fleets, expanded metro networks, and integrated payment systems that allow passengers to transfer seamlessly between different modes of transportation using a single card or app. Bus Rapid Transit systems, which give buses dedicated lanes and station-like stops, offer metro-level efficiency at a fraction of the construction cost. Some cities are experimenting with on-demand microtransit services that operate like flexible bus routes, adjusting their paths in real time based on passenger requests.

The rise of autonomous vehicles represents perhaps the most dramatic potential shift in urban transportation. While fully self-driving cars are not yet commonplace on public roads, major companies continue to invest billions of dollars in developing this technology. Proponents argue that autonomous vehicles could eliminate the human errors responsible for the vast majority of traffic accidents, reduce congestion through more efficient driving patterns, and free up enormous amounts of urban space currently dedicated to parking.

However, the transition to new transportation models is not without challenges. Infrastructure investments require significant public funding. Privacy concerns arise from the data collected by ride-sharing apps and connected vehicles. Labor disruptions may affect taxi drivers, delivery workers, and other transportation professionals. Ensuring that new transportation technologies are equitable and accessible to all residents, not just wealthy early adopters, remains a critical concern for urban planners.

The cities that navigate these challenges most successfully will likely be those that adopt a multimodal approach, integrating multiple transportation options into a cohesive system that gives residents the flexibility to choose the best mode for each journey.`,
    contentZh: `世界各地的城市正在經歷一場交通革命。隨著城市人口持續增長和對氣候變遷的擔憂加劇，人們在城市中移動的方式正在被根本性地重新構想。從電動自行車和共乘服務到自動駕駛車輛和先進的大眾運輸系統，城市交通的未來有望變得比以往更清潔、更智慧、更便利。

電動自行車，通常稱為電動腳踏車，已成為城市出行中最具變革性的發展之一。這些電池驅動的自行車讓騎士能以更少的體力跑更遠的路程，即使在丘陵城市或對體力不夠好的人來說，騎車通勤也成為可行的選擇。在許多歐洲和亞洲城市，電動自行車的銷售量急劇增長，專用自行車道和停車基礎設施也擴大了以適應這一增長趨勢。對於中短距離而言，電動自行車提供了比汽車更引人注目的替代方案——它們零排放、需要最少的停車空間，並幫助騎士避免交通擁堵。

Uber 和 Grab 等共乘平台已經透過讓人們輕鬆地用手機叫車，改變了城市交通。這種模式的下一步演進涉及共享搭乘，同方向的多名乘客共用一輛車，同時降低成本和環境影響。一些公司正在開發電動和自動駕駛的共乘車隊，可以大幅降低每趟行程的碳足跡，同時提供負擔得起的隨選交通。

大眾運輸系統也在快速創新。許多城市正在投資電動巴士車隊、擴展地鐵網路，以及整合支付系統，讓乘客可以使用單張卡片或應用程式在不同交通方式之間無縫轉乘。快捷巴士系統為公車提供專用車道和類似車站的站點，以建設成本的一小部分提供地鐵級別的效率。一些城市正在試驗隨選微型運輸服務，運作方式類似靈活的公車路線，根據乘客的請求即時調整路徑。

自動駕駛車輛的興起可能代表城市交通中最戲劇性的潛在轉變。雖然全自動駕駛汽車尚未在公共道路上普及，但大公司繼續投資數十億美元開發這項技術。支持者認為，自動駕駛車輛可以消除造成絕大多數交通事故的人為錯誤，通過更高效的駕駛模式減少擁堵，並釋放出目前用於停車的大量城市空間。

然而，向新交通模式的過渡並非沒有挑戰。基礎設施投資需要大量公共資金。共乘應用程式和聯網車輛收集的數據引發隱私疑慮。勞動力的衝擊可能影響計程車司機、外送員和其他交通專業人士。確保新交通技術對所有居民公平且可及——而不僅僅是富裕的早期採用者——仍然是都市規劃師的重要關注點。

最成功應對這些挑戰的城市，可能是採用多模式方法的城市，將多種交通選項整合成一個連貫的系統，讓居民能靈活地為每趟行程選擇最佳出行方式。`,
    domain: "daily" as const,
    difficulty: 3,
    wordCount: 465,
    targetWords: ["autonomous", "viable", "congestion", "seamlessly", "microtransit", "proponents", "equitable", "multimodal", "cohesive"],
    questions: [
      {
        question: "Why have e-bikes become a transformative development in urban transportation?",
        options: ["A. They allow longer-distance cycling with less effort and produce zero emissions", "B. They are faster than cars in all situations", "C. They are given free by city governments to all residents", "D. They can fly over traffic during rush hour"],
        correctIndex: 0,
        explanation: "文章解釋電動自行車「讓人們能以更少的體力跑更遠的路程且零排放（allow longer-distance cycling with less effort and produce zero emissions）」，因此答案為 A。",
      },
      {
        question: "What is Bus Rapid Transit?",
        options: ["A. A new type of airplane that connects cities", "B. A system giving buses dedicated lanes and station-like stops for metro-level efficiency", "C. A private bus service only for business executives", "D. An underground tunnel system for electric buses"],
        correctIndex: 1,
        explanation: "文章定義快捷巴士系統為「為公車提供專用車道和類似車站的站點，以達到地鐵級別的效率（giving buses dedicated lanes and station-like stops for metro-level efficiency）」，因此答案為 B。",
      },
      {
        question: "What concern does the article raise about new transportation technologies?",
        options: ["A. They will make cities too quiet", "B. They will cause buildings to collapse", "C. Ensuring they are equitable and accessible to all residents, not just wealthy adopters", "D. They will eliminate the need for roads entirely"],
        correctIndex: 2,
        explanation: "文章提出的擔憂是「確保新技術對所有居民公平且可及，而不僅僅是富裕的早期採用者（ensuring they are equitable and accessible to all residents, not just wealthy adopters）」，因此答案為 C。",
      },
    ],
  },
  {
    id: "art-d30",
    title: "Building Financial Literacy for Young Adults",
    content: `Financial literacy — the ability to understand and effectively manage personal finances — is arguably one of the most important life skills that young adults need but rarely receive formal education in. Despite spending years studying subjects like mathematics, science, and literature in school, many people enter adulthood without knowing how to create a budget, understand interest rates, or plan for long-term financial goals. This knowledge gap has real consequences, with studies showing that a lack of financial literacy contributes to higher levels of debt, lower savings rates, and increased financial stress among young people.

The foundation of financial literacy begins with budgeting. A budget is simply a plan for how you will allocate your income across different categories such as housing, food, transportation, entertainment, and savings. The popular fifty-thirty-twenty rule offers a straightforward framework: allocate fifty percent of your after-tax income to needs, thirty percent to wants, and twenty percent to savings and debt repayment. While these exact percentages may need adjustment based on individual circumstances, the underlying principle of intentional spending is universally valuable.

Understanding the power of compound interest is another crucial component of financial literacy. When you save or invest money, you earn interest not only on your original deposit but also on the interest that accumulates over time. This compounding effect means that even small amounts saved regularly in your twenties can grow into substantial sums by retirement age. Conversely, compound interest works against you when it comes to debt — particularly credit card debt, which often carries annual interest rates of fifteen to twenty-five percent. This is why financial advisors consistently emphasize the importance of paying off high-interest debt as quickly as possible.

Investing is a topic that intimidates many young adults, but the basic principles are more accessible than most people think. Diversification — spreading your investments across different types of assets such as stocks, bonds, and real estate — helps reduce risk. Index funds, which automatically track the performance of a broad market index, offer a low-cost way for beginners to start investing without needing expert knowledge of individual companies. The key insight is that time in the market matters more than timing the market; starting to invest early, even with modest amounts, typically produces better results than waiting for the perfect moment.

Emergency funds represent another essential element of financial planning. Financial experts generally recommend maintaining three to six months of living expenses in an easily accessible savings account. This safety net provides protection against unexpected events like job loss, medical emergencies, or major home repairs, preventing people from going into debt during difficult periods.

The rise of financial technology applications has made managing money more convenient than ever. Budgeting apps automatically categorize expenses and provide visual reports of spending patterns. Investment platforms allow users to begin investing with as little as one hundred dollars. However, these tools are only effective when paired with genuine financial knowledge and disciplined habits.

Building financial literacy is not a one-time event but an ongoing process. As your income grows, your financial situation becomes more complex, and you encounter new decisions about insurance, taxes, home ownership, and retirement planning. Committing to continuous financial education — through books, podcasts, courses, or conversations with financial professionals — ensures that you remain equipped to make informed decisions throughout every stage of your life.`,
    contentZh: `財務素養——理解和有效管理個人財務的能力——可以說是年輕人最需要但很少接受正規教育的最重要生活技能之一。儘管在學校花了多年時間學習數學、科學和文學等科目，許多人進入成年時不知道如何制定預算、理解利率或規劃長期財務目標。這種知識差距有真實的後果，研究顯示缺乏財務素養導致年輕人的債務水平更高、儲蓄率更低以及財務壓力增加。

財務素養的基礎始於預算編制。預算只是一個計畫，規劃你將如何在住房、食物、交通、娛樂和儲蓄等不同類別中分配收入。流行的「50/30/20」法則提供了一個簡單的框架：將稅後收入的百分之五十分配給需求、百分之三十分配給想要、百分之二十分配給儲蓄和債務償還。雖然這些確切的百分比可能需要根據個人情況調整，但有意識消費的基本原則具有普遍價值。

理解複利的力量是財務素養的另一個關鍵組成部分。當你儲蓄或投資時，你不僅從原始存款中賺取利息，還從隨時間累積的利息中賺取利息。這種複利效應意味著，即使在二十多歲時定期存入的小額金額，到退休時也能增長為可觀的金額。相反地，複利在債務方面對你不利——特別是信用卡債務，其年利率通常在百分之十五到二十五之間。這就是為什麼理財顧問一致強調盡快償還高利率債務的重要性。

投資是一個讓許多年輕人感到怯步的話題，但基本原則比大多數人想像的更容易理解。分散投資——將投資分散在股票、債券和房地產等不同類型的資產中——有助於降低風險。指數基金自動追蹤廣泛的市場指數表現，為初學者提供低成本的投資入門方式，無需對個別公司有專業知識。關鍵見解是，在市場中的時間比掌握市場時機更重要；即使金額不大，儘早開始投資通常比等待完美時機能產生更好的結果。

緊急基金代表財務規劃的另一個基本要素。理財專家通常建議在容易取用的儲蓄帳戶中保留三到六個月的生活費用。這個安全網在面對失業、醫療緊急情況或重大房屋維修等意外事件時提供保護，防止人們在困難時期陷入債務。

金融科技應用程式的興起讓管理金錢比以往更加便利。預算應用程式自動分類支出並提供消費模式的視覺化報告。投資平台讓用戶只需一百美元就能開始投資。然而，這些工具只有在搭配真正的財務知識和自律的習慣時才有效。

建立財務素養不是一次性事件，而是一個持續的過程。隨著你的收入增長，你的財務狀況變得更複雜，你會面臨關於保險、稅務、購屋和退休規劃的新決策。透過書籍、播客、課程或與理財專業人士的對話，致力於持續的財務教育，確保你在生命的每個階段都有能力做出明智的決定。`,
    domain: "daily" as const,
    difficulty: 3,
    wordCount: 500,
    targetWords: ["literacy", "allocate", "compound interest", "diversification", "index funds", "emergency fund", "disciplined", "informed"],
    questions: [
      {
        question: "What is the fifty-thirty-twenty budgeting rule?",
        options: ["A. Fifty percent to needs, thirty percent to wants, twenty percent to savings", "B. Fifty percent to savings, thirty percent to food, twenty percent to rent", "C. Fifty percent to entertainment, thirty percent to needs, twenty percent to travel", "D. Fifty percent to investments, thirty percent to charity, twenty percent to personal use"],
        correctIndex: 0,
        explanation: "文章解釋「50/30/20」法則為「百分之五十分配給需求、百分之三十分配給想要、百分之二十分配給儲蓄（fifty percent to needs, thirty percent to wants, twenty percent to savings）」，因此答案為 A。",
      },
      {
        question: "Why do financial advisors emphasize paying off credit card debt quickly?",
        options: ["A. Because credit cards are illegal in some countries", "B. Because compound interest on high-rate debt causes the amount owed to grow rapidly", "C. Because banks will close your account if you carry a balance", "D. Because credit card companies charge monthly membership fees"],
        correctIndex: 1,
        explanation: "文章說明信用卡債務的複利「使所欠金額快速增長（compound interest on high-rate debt causes the amount owed to grow rapidly）」，年利率通常在15-25%之間，因此答案為 B。",
      },
      {
        question: "How much does the article recommend keeping in an emergency fund?",
        options: ["A. One month of salary", "B. Exactly ten thousand dollars", "C. Three to six months of living expenses", "D. One year of total income"],
        correctIndex: 2,
        explanation: "文章建議緊急基金應保留「三到六個月的生活費用（three to six months of living expenses）」，因此答案為 C。",
      },
    ],
  }
];

export const articlesData: Article[] = [...baseArticles, ...extraArticlesData];
