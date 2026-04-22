import type { Article } from "../lib/types";

export const articlesData: Article[] = [
  // ===== BUSINESS ARTICLES =====
  {
    id: "art-b01",
    title: "How to Write a Professional Email",
    content: `Writing professional emails is an essential skill in today's business world. Whether you're communicating with a client or a colleague, the way you write can significantly impact how others perceive you.

First, always use a clear and specific subject line. A good subject line helps the recipient understand the purpose of your email immediately. For example, instead of writing "Meeting," try "Budget Review Meeting - March 15 at 2 PM."

Second, keep your message concise. Business professionals receive dozens of emails every day, so respect their time. State your main point in the first paragraph, then provide supporting details. Use bullet points for lists to make the content easier to scan.

Third, maintain a polite and professional tone throughout. Start with an appropriate greeting such as "Dear Mr. Smith" or "Hello Team." End with a courteous closing like "Best regards" or "Thank you for your time."

Finally, always proofread before hitting send. Check for spelling errors, grammar mistakes, and unclear sentences. A well-written email reflects your professionalism and attention to detail.

Remember, email is often the first impression you make in a business relationship. Taking a few extra minutes to craft a thoughtful message can make a significant difference in your career.`,
    domain: "business",
    difficulty: 1,
    wordCount: 195,
    targetWords: ["b003", "b004", "b002"],
    questions: [
      {
        question: "What does the author suggest about subject lines?",
        options: ["Keep them vague", "Make them clear and specific", "Avoid using them", "Write them in all caps"],
        correctIndex: 1,
      },
      {
        question: "Why should business emails be concise?",
        options: ["To save paper", "Because professionals receive many emails daily", "Because long emails are unprofessional", "To avoid spelling errors"],
        correctIndex: 1,
      },
      {
        question: "What is the final step before sending an email?",
        options: ["Add attachments", "Change the font", "Proofread for errors", "Forward it to a colleague"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "art-b02",
    title: "Understanding Digital Marketing Campaigns",
    content: `Digital marketing has transformed how businesses reach their customers. Unlike traditional advertising, digital campaigns allow companies to target specific audiences with precision and measure results in real time.

A successful digital marketing campaign begins with clear objectives. Are you trying to increase brand awareness, generate leads, or drive sales? Each goal requires a different strategy and set of metrics to track success.

Social media platforms like Instagram, Facebook, and TikTok have become essential channels for marketing campaigns. These platforms offer powerful tools for audience targeting, allowing businesses to reach people based on their interests, demographics, and online behavior.

Content marketing is another crucial component. Creating valuable, relevant content helps build trust with your audience. Blog posts, videos, and infographics can establish your brand as an authority in your industry.

One key metric to monitor is the conversion rate — the percentage of visitors who take a desired action, such as making a purchase or signing up for a newsletter. A high conversion rate indicates that your campaign is effectively reaching and persuading your target audience.

Budget allocation is also critical. You need to balance spending across different channels to maximize your return on investment. Regular analysis of campaign performance helps you identify what's working and adjust your strategy accordingly.`,
    domain: "business",
    difficulty: 2,
    wordCount: 205,
    targetWords: ["b008", "b010", "b015", "b001", "b011"],
    questions: [
      {
        question: "What advantage does digital marketing have over traditional advertising?",
        options: ["It's always cheaper", "It allows precise targeting and real-time measurement", "It doesn't require creativity", "It only works for large companies"],
        correctIndex: 1,
      },
      {
        question: "What does 'conversion rate' measure?",
        options: ["Website loading speed", "Number of social media followers", "Percentage of visitors who take a desired action", "Total advertising spend"],
        correctIndex: 2,
      },
      {
        question: "Why is regular analysis of campaign performance important?",
        options: ["To impress the boss", "To identify what's working and adjust strategy", "To increase the budget", "To create more content"],
        correctIndex: 1,
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
    domain: "daily",
    difficulty: 1,
    wordCount: 210,
    targetWords: ["d002", "d003", "d005", "d010"],
    questions: [
      {
        question: "What does the author recommend about packing?",
        options: ["Bring everything you might need", "Pack light and leave room for souvenirs", "Only bring one set of clothes", "Buy everything at your destination"],
        correctIndex: 1,
      },
      {
        question: "Where can solo travelers meet other people?",
        options: ["Only at tourist attractions", "At hostel common areas and local cafes", "Through social media only", "At the airport"],
        correctIndex: 1,
      },
      {
        question: "What is the biggest advantage of solo travel according to the article?",
        options: ["It's cheaper", "The freedom to go wherever you want", "You don't need to plan", "You can avoid talking to people"],
        correctIndex: 1,
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
    domain: "daily",
    difficulty: 2,
    wordCount: 230,
    targetWords: ["d006", "d009", "d015"],
    questions: [
      {
        question: "What does the author suggest doing during commute time?",
        options: ["Sleep as much as possible", "Listen to educational podcasts or audiobooks", "Play mobile games", "Avoid all activities"],
        correctIndex: 1,
      },
      {
        question: "How can commuters add physical activity to their routine?",
        options: ["Go to the gym before work", "Walk or cycle part of the way", "Exercise at their desk", "Take the fastest route only"],
        correctIndex: 1,
      },
      {
        question: "Why is breakfast important according to the article?",
        options: ["It helps you lose weight", "It gives energy to start the day", "It's a social activity", "It improves your posture"],
        correctIndex: 1,
      },
    ],
  },

  // ===== ACADEMIC ARTICLES =====
  {
    id: "art-a01",
    title: "The Science of Memory and Learning",
    content: `Understanding how memory works is crucial for anyone who wants to learn more effectively. Research in cognitive science has revealed several key principles that can significantly improve how we retain information.

The most well-known finding is the spacing effect. Studies show that distributing your study sessions over time is far more effective than cramming everything into one long session. For example, studying for 30 minutes each day over a week produces better results than studying for three hours the night before an exam.

Another important concept is active recall — the practice of actively retrieving information from memory rather than passively reviewing it. Instead of simply re-reading your notes, try to recall the key points without looking. This process strengthens the neural pathways associated with that information.

The testing effect is closely related. Research has consistently shown that taking practice tests improves long-term retention more than additional study time. Even if you get answers wrong, the act of testing itself enhances memory.

Sleep also plays a significant role in memory consolidation. During sleep, the brain processes and organizes information gathered during the day. Students who get adequate sleep after studying perform significantly better on subsequent tests.

Finally, connecting new information to existing knowledge — a process called elaboration — helps create stronger memories. When you can relate new concepts to things you already know, you create multiple retrieval pathways, making the information easier to access later.`,
    domain: "academic",
    difficulty: 1,
    wordCount: 235,
    targetWords: ["a001", "a002", "a004", "a005"],
    questions: [
      {
        question: "What is the 'spacing effect'?",
        options: ["Studying in a spacious room", "Distributing study sessions over time is more effective than cramming", "Taking long breaks between sentences", "Reading faster to cover more material"],
        correctIndex: 1,
      },
      {
        question: "What is 'active recall'?",
        options: ["Reading notes repeatedly", "Actively retrieving information from memory", "Highlighting important text", "Listening to lectures again"],
        correctIndex: 1,
      },
      {
        question: "How does sleep help with learning?",
        options: ["It doesn't help at all", "It helps process and organize information", "It makes you forget useless information", "It only helps physical recovery"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "art-a02",
    title: "Climate Change: Causes and Consequences",
    content: `Climate change is one of the most significant challenges facing humanity today. The empirical evidence gathered over decades of research leaves little doubt that human activities are driving unprecedented changes in Earth's climate system.

The primary cause of modern climate change is the burning of fossil fuels — coal, oil, and natural gas. These activities release carbon dioxide and other greenhouse gases into the atmosphere, trapping heat and causing global temperatures to rise. Since the Industrial Revolution, atmospheric CO2 levels have increased by over 50 percent.

The consequences of this warming are already visible around the world. Rising sea levels threaten coastal communities. More frequent and intense heat waves, storms, and droughts are affecting agriculture and water supplies. Many plant and animal species are struggling to adapt to rapidly changing conditions.

Scientists use sophisticated climate models to project future scenarios. These models suggest that without significant reductions in greenhouse gas emissions, global temperatures could rise by 2 to 4 degrees Celsius by the end of this century. The implications of such warming would be severe and far-reaching.

However, there is still time to act. Transitioning to renewable energy sources, improving energy efficiency, and protecting forests can help reduce emissions. International cooperation is essential, as climate change is a global phenomenon that requires coordinated action from all nations.

Understanding the correlation between human activities and climate change is the first step toward finding sustainable solutions for our planet's future.`,
    domain: "academic",
    difficulty: 2,
    wordCount: 230,
    targetWords: ["a011", "a013", "a009", "a006", "a004"],
    questions: [
      {
        question: "What is the primary cause of modern climate change?",
        options: ["Natural volcanic activity", "Solar radiation changes", "Burning of fossil fuels", "Deforestation alone"],
        correctIndex: 2,
      },
      {
        question: "By how much have atmospheric CO2 levels increased since the Industrial Revolution?",
        options: ["10 percent", "25 percent", "Over 50 percent", "100 percent"],
        correctIndex: 2,
      },
      {
        question: "What does the article suggest is needed to address climate change?",
        options: ["Individual action only", "International cooperation and coordinated action", "More research without action", "Ignoring the problem"],
        correctIndex: 1,
      },
    ],
  },
];
