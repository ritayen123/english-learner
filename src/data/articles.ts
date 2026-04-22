import type { Article } from "../lib/types";

export const articlesData: Article[] = [
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
    domain: "business" as const,
    difficulty: 1,
    wordCount: 303,
    targetWords: ["b002", "b003", "b004"],
    questions: [
      {
        question: "What is the main purpose of this article?",
        options: ["A. To explain how to use email software", "B. To provide tips for writing effective business emails", "C. To compare email with other communication tools", "D. To discuss the history of email"],
        correctIndex: 1,
      },
      {
        question: "According to the article, why should emails be concise?",
        options: ["A. Because long emails cost more to send", "B. Because professionals receive many emails daily and have limited time", "C. Because short emails look more professional", "D. Because email servers have size limits"],
        correctIndex: 1,
      },
      {
        question: "What does the author suggest you do before sending an important email?",
        options: ["A. Print it out first", "B. Wait 24 hours before sending", "C. Ask a colleague to review it", "D. Send it to yourself first"],
        correctIndex: 2,
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
    domain: "business" as const,
    difficulty: 1,
    wordCount: 300,
    targetWords: ["b001", "b004", "b008", "b010"],
    questions: [
      {
        question: "What is the first step in planning a marketing campaign according to the article?",
        options: ["A. Creating content", "B. Setting a budget", "C. Defining your objective", "D. Choosing social media platforms"],
        correctIndex: 2,
      },
      {
        question: "Why is it important to identify your target audience?",
        options: ["A. To make your budget larger", "B. To create messages that resonate with the right people", "C. To avoid using social media", "D. To copy competitors' strategies"],
        correctIndex: 1,
      },
      {
        question: "What advice does the author give about a first campaign?",
        options: ["A. It must be perfect before launching", "B. It should have an unlimited budget", "C. It does not need to be perfect — start, learn, and improve", "D. It should only run on one platform"],
        correctIndex: 2,
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
    domain: "business" as const,
    difficulty: 1,
    wordCount: 301,
    targetWords: ["b002", "b003", "b004"],
    questions: [
      {
        question: "What should you do before attending a business meeting?",
        options: ["A. Cancel other appointments", "B. Read the agenda and prepare materials", "C. Arrive early to choose the best seat", "D. Send an email to all participants"],
        correctIndex: 1,
      },
      {
        question: "How does the article suggest you handle disagreements in meetings?",
        options: ["A. Stay silent to avoid conflict", "B. Express disagreement loudly and firmly", "C. Disagree respectfully using professional language", "D. Wait until after the meeting to disagree privately"],
        correctIndex: 2,
      },
      {
        question: "What is the purpose of sending a follow-up email after a meeting?",
        options: ["A. To thank participants for attending", "B. To schedule the next meeting", "C. To create a written record of decisions and action items", "D. To share personal opinions about the meeting"],
        correctIndex: 2,
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
    domain: "business" as const,
    difficulty: 1,
    wordCount: 310,
    targetWords: ["b001", "b002", "b004"],
    questions: [
      {
        question: "According to the article, what is the foundation of excellent customer service?",
        options: ["A. Offering discounts", "B. Listening carefully to customers", "C. Responding quickly", "D. Having a large team"],
        correctIndex: 1,
      },
      {
        question: "What does the article say about response time?",
        options: ["A. It does not matter as long as the problem is solved", "B. Customers expect quick replies in today's fast-paced world", "C. You should always wait 48 hours before responding", "D. Only phone calls need to be answered quickly"],
        correctIndex: 1,
      },
      {
        question: "Why does the author recommend collecting customer feedback?",
        options: ["A. To use in advertising", "B. To compare with competitors", "C. To reveal areas where the company can improve", "D. To reward the best employees"],
        correctIndex: 2,
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
    domain: "business" as const,
    difficulty: 1,
    wordCount: 310,
    targetWords: ["b004", "b008", "b014"],
    questions: [
      {
        question: "What does the article identify as the most important factor in successful teamwork?",
        options: ["A. Having a strong leader", "B. Clear communication", "C. Working long hours", "D. Using the latest technology"],
        correctIndex: 1,
      },
      {
        question: "According to the article, why should roles and responsibilities be defined early?",
        options: ["A. To give the manager more control", "B. To prevent confusion and duplicated work", "C. To make it easier to fire underperformers", "D. To limit creativity"],
        correctIndex: 1,
      },
      {
        question: "How does the author suggest handling conflict within a team?",
        options: ["A. Ignore it until it goes away", "B. Let the manager decide everything", "C. Focus on the issue, not the person, and seek common ground", "D. Remove the person causing the conflict"],
        correctIndex: 2,
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
    domain: "business" as const,
    difficulty: 1,
    wordCount: 320,
    targetWords: ["b001", "b003", "b004"],
    questions: [
      {
        question: "What is the main topic of this article?",
        options: ["A. How to negotiate a higher salary", "B. Tips for succeeding on your first day at a new job", "C. How to write a resume", "D. The benefits of changing jobs frequently"],
        correctIndex: 1,
      },
      {
        question: "What does the author recommend if you are unsure about the dress code?",
        options: ["A. Wear casual clothes", "B. Ask your new colleagues on social media", "C. Be slightly overdressed rather than underdressed", "D. Wear the same clothes as your interview"],
        correctIndex: 2,
      },
      {
        question: "What does the author suggest doing at the end of your first day?",
        options: ["A. Leave as early as possible", "B. Send a thank-you email to your manager", "C. Post about it on social media", "D. Organize a team dinner"],
        correctIndex: 1,
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
    domain: "business" as const,
    difficulty: 1,
    wordCount: 325,
    targetWords: ["b001", "b004", "b007", "b008"],
    questions: [
      {
        question: "What does the SMART framework stand for?",
        options: ["A. Simple, Modern, Active, Rapid, Tested", "B. Specific, Measurable, Achievable, Relevant, Time-bound", "C. Strategic, Meaningful, Ambitious, Rewarding, Timely", "D. Standard, Managed, Approved, Required, Tracked"],
        correctIndex: 1,
      },
      {
        question: "What does the article suggest you do after setting a large goal?",
        options: ["A. Wait for the right moment to start", "B. Tell everyone about it", "C. Break it down into smaller, manageable tasks", "D. Focus only on the final result"],
        correctIndex: 2,
      },
      {
        question: "According to the article, why should you review your goals periodically?",
        options: ["A. To impress your manager", "B. To make sure they still align with your career and organizational needs", "C. To reduce the number of goals", "D. To share them with new team members"],
        correctIndex: 1,
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
    domain: "business" as const,
    difficulty: 1,
    wordCount: 315,
    targetWords: ["b001", "b002", "b003", "b004", "b005"],
    questions: [
      {
        question: "What is the main purpose of an invoice?",
        options: ["A. To advertise a product", "B. To request payment for goods or services provided", "C. To negotiate a contract", "D. To schedule a business meeting"],
        correctIndex: 1,
      },
      {
        question: "What should you do if you find an error on an invoice you received?",
        options: ["A. Ignore it and pay the amount listed", "B. Refuse to pay entirely", "C. Contact the seller immediately to resolve the issue", "D. Deduct the error amount without informing the seller"],
        correctIndex: 2,
      },
      {
        question: "According to the article, what can late payments lead to?",
        options: ["A. Better negotiation power", "B. Penalty fees, damaged trust, and possible legal action", "C. Lower prices in the future", "D. Automatic contract renewal"],
        correctIndex: 1,
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
    domain: "business" as const,
    difficulty: 1,
    wordCount: 330,
    targetWords: ["b001", "b002", "b003", "b004", "b008"],
    questions: [
      {
        question: "According to the article, what should you do with tasks that are urgent but not important?",
        options: ["A. Do them first", "B. Schedule them for later", "C. Delegate them to someone else", "D. Eliminate them"],
        correctIndex: 2,
      },
      {
        question: "Why does the author recommend against multitasking?",
        options: ["A. It is considered unprofessional", "B. It reduces productivity and increases mistakes", "C. Managers do not like it", "D. It only works for senior employees"],
        correctIndex: 1,
      },
      {
        question: "What is the main idea of the article?",
        options: ["A. You should work longer hours to get more done", "B. Effective time management improves productivity and reduces stress", "C. Multitasking is the best way to be productive", "D. Only managers need time management skills"],
        correctIndex: 1,
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
    domain: "business" as const,
    difficulty: 1,
    wordCount: 310,
    targetWords: ["b001", "b002", "b003", "b004", "b005"],
    questions: [
      {
        question: "Why is the executive summary considered especially important?",
        options: ["A. It contains the pricing details", "B. Many decision-makers only read this section", "C. It is the longest section of the proposal", "D. It includes the contract terms"],
        correctIndex: 1,
      },
      {
        question: "What should the solution section include?",
        options: ["A. Only a brief overview of the approach", "B. A detailed plan with timeline, milestones, and deliverables", "C. The client's company history", "D. Competitor analysis"],
        correctIndex: 1,
      },
      {
        question: "Why does the author recommend being transparent about pricing?",
        options: ["A. To make the proposal longer", "B. Because clients always choose the lowest price", "C. To build trust and reduce the chance of disputes", "D. Because it is a legal requirement"],
        correctIndex: 2,
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
    domain: "business" as const,
    difficulty: 2,
    wordCount: 340,
    targetWords: ["b001", "b007", "b008", "b011", "b012"],
    questions: [
      {
        question: "According to the article, what is the first step in building a brand identity?",
        options: ["A. Designing a logo", "B. Defining core values and mission", "C. Creating a social media account", "D. Choosing brand colors"],
        correctIndex: 1,
      },
      {
        question: "Why does the author emphasize consistency across all channels?",
        options: ["A. To save money on design", "B. Because it builds recognition and association with the brand", "C. Because customers dislike variety", "D. To make the designer's job easier"],
        correctIndex: 1,
      },
      {
        question: "What can be inferred about brands that clearly articulate their values?",
        options: ["A. They charge higher prices", "B. They tend to attract more loyal customers", "C. They do not need advertising", "D. They focus only on one product"],
        correctIndex: 1,
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
    domain: "business" as const,
    difficulty: 2,
    wordCount: 330,
    targetWords: ["b001", "b002", "b003", "b006", "b007"],
    questions: [
      {
        question: "What does the author consider the most critical phase of negotiation?",
        options: ["A. Making the first offer", "B. Preparation and research before the meeting", "C. Signing the final agreement", "D. Following up with an email"],
        correctIndex: 1,
      },
      {
        question: "What approach does the article recommend instead of positional bargaining?",
        options: ["A. Letting the other party decide", "B. Focusing on underlying interests to create win-win outcomes", "C. Always accepting the first offer", "D. Avoiding negotiation altogether"],
        correctIndex: 1,
      },
      {
        question: "Why does the author recommend documenting the agreement in writing?",
        options: ["A. Because verbal agreements are illegal", "B. To impress the other party", "C. To prevent misunderstandings and protect both parties", "D. Because it is required by accounting"],
        correctIndex: 2,
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
    domain: "business" as const,
    difficulty: 2,
    wordCount: 350,
    targetWords: ["b001", "b008", "b010", "b011", "b012"],
    questions: [
      {
        question: "What advice does the article give about choosing social media platforms?",
        options: ["A. Use every platform available", "B. Focus on two or three platforms where your target audience is active", "C. Only use free platforms", "D. Use the newest platform available"],
        correctIndex: 1,
      },
      {
        question: "What does the phrase 'engagement is a two-way street' mean in this context?",
        options: ["A. You should post twice a day", "B. Brands should respond to followers, not just post content", "C. Two people should manage the account", "D. You need both text and images"],
        correctIndex: 1,
      },
      {
        question: "What does the article recommend regarding paid social media advertising?",
        options: ["A. It is too expensive for small businesses", "B. Start small, test different formats, and scale up what works", "C. Only use paid ads on Instagram", "D. Spend your entire budget on one big campaign"],
        correctIndex: 1,
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
    domain: "business" as const,
    difficulty: 2,
    wordCount: 340,
    targetWords: ["b007", "b008", "b012", "b014"],
    questions: [
      {
        question: "What does the article suggest you should do before creating your presentation?",
        options: ["A. Design your slides first", "B. Understand your audience's knowledge level and interests", "C. Memorize your script word for word", "D. Choose the most impressive visuals"],
        correctIndex: 1,
      },
      {
        question: "What is the purpose of keeping slides clean and simple?",
        options: ["A. To limit presentations to six minutes", "B. To ensure slides support your spoken words without overwhelming the audience", "C. To require six practice sessions", "D. To limit presentations to six slides"],
        correctIndex: 1,
      },
      {
        question: "How does the author recommend handling a question you cannot answer?",
        options: ["A. Guess the answer to appear confident", "B. Ignore the question and move on", "C. Admit you do not know and offer to follow up", "D. Ask someone else in the room to answer"],
        correctIndex: 2,
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
    domain: "business" as const,
    difficulty: 2,
    wordCount: 325,
    targetWords: ["b001", "b004", "b009", "b012", "b014"],
    questions: [
      {
        question: "What is 'scope creep' according to the article?",
        options: ["A. When a project finishes early", "B. When additional tasks are added without increasing budget or timeline", "C. When team members leave the project", "D. When the project goal changes completely"],
        correctIndex: 1,
      },
      {
        question: "Why does the author recommend transparent communication during a project?",
        options: ["A. To impress the client", "B. Because it is a legal requirement", "C. To build trust and solve problems collaboratively", "D. To reduce the number of meetings"],
        correctIndex: 2,
      },
      {
        question: "What is the purpose of a retrospective meeting at the end of a project?",
        options: ["A. To celebrate the project's completion", "B. To assign blame for any problems", "C. To discuss lessons learned for future improvement", "D. To finalize the project budget"],
        correctIndex: 2,
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
    domain: "business" as const,
    difficulty: 2,
    wordCount: 325,
    targetWords: ["b001", "b002", "b007", "b008", "b012"],
    questions: [
      {
        question: "What is the main difference between primary and secondary research?",
        options: ["A. Primary research is cheaper than secondary research", "B. Primary research collects new data directly; secondary research uses existing data", "C. Primary research is always qualitative", "D. Secondary research is always more accurate"],
        correctIndex: 1,
      },
      {
        question: "When would qualitative research be most appropriate?",
        options: ["A. When you need to count how many customers prefer a feature", "B. When you want to understand why customers behave a certain way", "C. When you need fast, cheap results", "D. When your sample size is very large"],
        correctIndex: 1,
      },
      {
        question: "What warning does the article give about poorly designed research?",
        options: ["A. It takes too long to complete", "B. It can lead to misleading conclusions and costly decisions", "C. It is difficult to publish", "D. It only works for small businesses"],
        correctIndex: 1,
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
    domain: "business" as const,
    difficulty: 2,
    wordCount: 340,
    targetWords: ["b007", "b008", "b009", "b011", "b016"],
    questions: [
      {
        question: "How does startup culture view failure differently from traditional corporations?",
        options: ["A. Startups punish failure more harshly", "B. Startups see failure as a necessary step toward success", "C. Traditional corporations encourage more experimentation", "D. There is no difference in how failure is viewed"],
        correctIndex: 1,
      },
      {
        question: "What challenge does the article identify with startup culture?",
        options: ["A. Startups cannot attract talented employees", "B. The fast pace and high expectations can lead to burnout", "C. Startups cannot afford any technology", "D. Employees have too little responsibility"],
        correctIndex: 1,
      },
      {
        question: "What can be inferred about large corporations adopting startup elements?",
        options: ["A. They are abandoning all traditional practices", "B. They recognize that startup-style culture can drive innovation and competitiveness", "C. They are failing to compete with startups", "D. They are only doing it to attract younger workers"],
        correctIndex: 1,
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
    domain: "business" as const,
    difficulty: 2,
    wordCount: 340,
    targetWords: ["b001", "b002", "b003", "b006", "b008"],
    questions: [
      {
        question: "What makes B2B sales different from selling to consumers?",
        options: ["A. B2B deals are always smaller", "B. B2B sales cycles are longer and involve multiple decision-makers", "C. B2B customers do not need trust", "D. Consumer sales take longer"],
        correctIndex: 1,
      },
      {
        question: "What is 'consultative selling' as described in the article?",
        options: ["A. Selling products at a discount", "B. Acting as a consultant who helps the buyer solve a problem", "C. Hiring a sales consultant", "D. Selling consulting services"],
        correctIndex: 1,
      },
      {
        question: "Why does a salesperson need to identify all key stakeholders in a B2B deal?",
        options: ["A. To invite them all to a dinner", "B. To send them marketing materials", "C. Because each stakeholder has different priorities and concerns that must be addressed", "D. To speed up the sales cycle"],
        correctIndex: 2,
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
    domain: "business" as const,
    difficulty: 2,
    wordCount: 345,
    targetWords: ["b004", "b008", "b011", "b014", "b016"],
    questions: [
      {
        question: "What does the article identify as one of the biggest challenges of remote work?",
        options: ["A. Employees work fewer hours", "B. The loss of informal, spontaneous communication", "C. Technology is too expensive", "D. Managers have less authority"],
        correctIndex: 1,
      },
      {
        question: "What solution does the article propose for meeting fatigue?",
        options: ["A. Ban all video meetings entirely", "B. Hold meetings only on certain days", "C. Establish guidelines for when live meetings are needed versus asynchronous communication", "D. Limit meetings to five minutes"],
        correctIndex: 2,
      },
      {
        question: "Why is documentation especially important for teams across multiple time zones?",
        options: ["A. Because it looks more professional", "B. Because not everyone can attend every meeting in real time", "C. Because it reduces the number of emails", "D. Because it is required by law"],
        correctIndex: 1,
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
    domain: "business" as const,
    difficulty: 2,
    wordCount: 345,
    targetWords: ["b001", "b005", "b006", "b007", "b012"],
    questions: [
      {
        question: "What is the 'bottom line' of an income statement?",
        options: ["A. Total revenue", "B. Total expenses", "C. Net income, which is revenue minus expenses", "D. Total assets minus liabilities"],
        correctIndex: 2,
      },
      {
        question: "Why might a profitable company still face financial trouble?",
        options: ["A. Because profits are always taxed at 100 percent", "B. Because it may not have enough cash to pay its bills", "C. Because the balance sheet does not balance", "D. Because revenue is the same as cash"],
        correctIndex: 1,
      },
      {
        question: "What is the main reason the author thinks managers should understand financial reports?",
        options: ["A. To replace the finance team", "B. To prepare the reports themselves", "C. To make better decisions and communicate effectively with leadership", "D. To impress clients during meetings"],
        correctIndex: 2,
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
    domain: "business" as const,
    difficulty: 3,
    wordCount: 370,
    targetWords: ["b001", "b006", "b008", "b012", "b018"],
    questions: [
      {
        question: "What does the article mean by 'a single point of failure' in the supply chain?",
        options: ["A. A product defect that affects all customers", "B. A dependency on one supplier or region that creates catastrophic risk if disrupted", "C. A failure in the company's IT system", "D. A mistake by a single employee"],
        correctIndex: 1,
      },
      {
        question: "What is the main disadvantage of the just-in-time inventory model according to the article?",
        options: ["A. It is too expensive to implement", "B. It requires too much warehouse space", "C. It leaves little buffer when supply is interrupted", "D. It is too complicated for small businesses"],
        correctIndex: 2,
      },
      {
        question: "How does the article suggest companies should treat their suppliers?",
        options: ["A. As interchangeable vendors to get the lowest price", "B. As competitors that should be kept at a distance", "C. As strategic partners for deeper collaboration and mutual benefit", "D. As temporary resources to be replaced regularly"],
        correctIndex: 2,
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
    domain: "business" as const,
    difficulty: 3,
    wordCount: 360,
    targetWords: ["b008", "b011", "b012", "b014", "b020"],
    questions: [
      {
        question: "According to the article, what is 'employer branding'?",
        options: ["A. The company's product logo and tagline", "B. The reputation a company builds as a place to work", "C. A marketing campaign targeting new customers", "D. The design of the company's office space"],
        correctIndex: 1,
      },
      {
        question: "What does the article suggest is replacing the traditional annual performance review?",
        options: ["A. No performance reviews at all", "B. Peer-only evaluations", "C. Continuous feedback models with regular check-ins and real-time recognition", "D. Automated AI assessments"],
        correctIndex: 2,
      },
      {
        question: "What can be inferred about the relationship between diversity and business performance?",
        options: ["A. Diversity has no measurable impact on results", "B. Diverse teams drive better decisions, more innovation, and stronger financial results", "C. Only large companies benefit from diversity", "D. Diversity initiatives are primarily a public relations effort"],
        correctIndex: 1,
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
    domain: "business" as const,
    difficulty: 3,
    wordCount: 355,
    targetWords: ["b002", "b007", "b008", "b009", "b012"],
    questions: [
      {
        question: "Why does the article emphasize the importance of beta testing?",
        options: ["A. It satisfies regulatory requirements", "B. It generates free publicity", "C. Fixing issues during beta is significantly cheaper than addressing them after a public launch", "D. It guarantees the product will be successful"],
        correctIndex: 2,
      },
      {
        question: "What does 'cross-functional alignment' mean in the context of a product launch?",
        options: ["A. All employees receive the same salary", "B. Different departments coordinate and work together toward the launch goals", "C. The product works across different platforms", "D. The company aligns with industry regulations"],
        correctIndex: 1,
      },
      {
        question: "What does the author mean by saying the launch is 'the beginning, not the end'?",
        options: ["A. The product needs to be launched again on other platforms", "B. Post-launch analysis and continuous improvement are essential for long-term success", "C. The company should immediately start developing a new product", "D. Sales will continue automatically without further effort"],
        correctIndex: 1,
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
    domain: "business" as const,
    difficulty: 3,
    wordCount: 350,
    targetWords: ["b001", "b010", "b011", "b012", "b015"],
    questions: [
      {
        question: "According to the article, how has the 'information search' stage changed?",
        options: ["A. Consumers now skip this stage entirely", "B. Consumers research extensively online, reading reviews and comparing options", "C. Consumers rely only on TV advertising", "D. Consumers only ask friends for advice"],
        correctIndex: 1,
      },
      {
        question: "What is 'anchoring bias' as explained in the article?",
        options: ["A. The tendency to buy products from well-known brands", "B. The tendency to rely heavily on the first piece of information encountered", "C. The tendency to prefer products that are in stock", "D. The tendency to always choose the cheapest option"],
        correctIndex: 1,
      },
      {
        question: "Why does the author say post-purchase behavior is critically important?",
        options: ["A. Because satisfied customers become advocates while dissatisfied ones share negative reviews", "B. Because it affects the product's manufacturing process", "C. Because it reduces marketing costs to zero", "D. Because government regulations require post-purchase follow-up"],
        correctIndex: 0,
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
    domain: "business" as const,
    difficulty: 3,
    wordCount: 380,
    targetWords: ["b001", "b002", "b008", "b011", "b012"],
    questions: [
      {
        question: "What common mistake does the article warn about in data analysis?",
        options: ["A. Collecting too much data", "B. Confusing correlation with causation", "C. Using too many visualization tools", "D. Sharing data with competitors"],
        correctIndex: 1,
      },
      {
        question: "According to the article, why is the human element still essential in data-driven organizations?",
        options: ["A. Because computers are unreliable", "B. Because humans bring context, creativity, and ethical judgment that algorithms cannot replicate", "C. Because data is always inaccurate", "D. Because employees prefer not to use technology"],
        correctIndex: 1,
      },
      {
        question: "What does the article suggest about consumer data privacy?",
        options: ["A. It is not a concern for most businesses", "B. Companies should collect as much data as possible", "C. Transparency and ethical data practices build trust and help avoid regulatory penalties", "D. Privacy regulations only apply to technology companies"],
        correctIndex: 2,
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
    domain: "business" as const,
    difficulty: 3,
    wordCount: 360,
    targetWords: ["b001", "b006", "b008", "b012", "b014"],
    questions: [
      {
        question: "What does the article say happens when leaders fail to communicate during uncertainty?",
        options: ["A. Employees become more productive", "B. Employees fill the information vacuum with speculation and anxiety", "C. Customers increase their spending", "D. The organization becomes more innovative"],
        correctIndex: 1,
      },
      {
        question: "What does the article describe as 'adaptive leadership'?",
        options: ["A. Changing leaders frequently during a crisis", "B. Making decisions with available information and adjusting course as new data emerges", "C. Waiting for perfect information before taking any action", "D. Copying the strategies of successful competitors"],
        correctIndex: 1,
      },
      {
        question: "What lesson does the article draw from historically successful companies?",
        options: ["A. They avoided all risk during uncertain times", "B. They focused solely on cost cutting", "C. They made their defining strategic moves during periods of uncertainty", "D. They waited for the economy to recover before investing"],
        correctIndex: 2,
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
    domain: "business" as const,
    difficulty: 3,
    wordCount: 370,
    targetWords: ["b002", "b006", "b008", "b011", "b016"],
    questions: [
      {
        question: "What does the article identify as the most common reason digital transformation fails?",
        options: ["A. The technology is too expensive", "B. The cultural change required is not addressed", "C. Competitors adopt the same technology faster", "D. Customers do not want digital services"],
        correctIndex: 1,
      },
      {
        question: "What are 'data silos' as described in the article?",
        options: ["A. Secure storage facilities for physical documents", "B. Isolated pockets of data in different departments that are not connected", "C. Advanced database technologies used by large corporations", "D. Large quantities of unstructured data from social media"],
        correctIndex: 1,
      },
      {
        question: "What role do 'digital champions' play in the transformation process?",
        options: ["A. They make all technology purchasing decisions", "B. They replace the IT department entirely", "C. They are enthusiastic early adopters who inspire and support their peers", "D. They evaluate vendors and select the best software"],
        correctIndex: 2,
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
    domain: "business" as const,
    difficulty: 3,
    wordCount: 385,
    targetWords: ["b002", "b007", "b008", "b010", "b012"],
    questions: [
      {
        question: "What does the article suggest about the long-term effects of misleading advertising?",
        options: ["A. It has no lasting impact on brand perception", "B. It erodes consumer trust and damages brand reputation over time", "C. It eventually becomes accepted by consumers", "D. It only affects small businesses"],
        correctIndex: 1,
      },
      {
        question: "What risk does the article associate with brands taking positions on social issues?",
        options: ["A. It always increases sales immediately", "B. Consumers may see it as performative if not backed by genuine action", "C. It only appeals to older consumers", "D. It is illegal in most countries"],
        correctIndex: 1,
      },
      {
        question: "What can be inferred about the relationship between ethical marketing and business performance?",
        options: ["A. Ethical marketing always reduces profits", "B. Ethical marketing is only relevant for nonprofit organizations", "C. Ethical marketing builds sustainable trust that creates a strategic and financial advantage", "D. Ethical marketing has no effect on customer relationships"],
        correctIndex: 2,
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
    domain: "business" as const,
    difficulty: 3,
    wordCount: 395,
    targetWords: ["b001", "b007", "b008", "b010", "b015"],
    questions: [
      {
        question: "What are 'content pillars' according to the article?",
        options: ["A. The most popular blog posts on a website", "B. Core themes around which all content is organized to maintain consistency and relevance", "C. The physical columns in a content studio", "D. The most expensive content formats to produce"],
        correctIndex: 1,
      },
      {
        question: "Why does the article criticize 'last-click attribution'?",
        options: ["A. It is too expensive to implement", "B. It overvalues social media content", "C. It dramatically undervalues content that influences earlier stages of the buyer journey", "D. It only works for video content"],
        correctIndex: 2,
      },
      {
        question: "What does the article say about the longevity of content marketing?",
        options: ["A. Content becomes worthless after one month", "B. A single article can generate traffic for years, creating compounding returns", "C. Only video content has long-term value", "D. Content must be completely replaced every quarter"],
        correctIndex: 1,
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
    domain: "business" as const,
    difficulty: 3,
    wordCount: 415,
    targetWords: ["b001", "b003", "b007", "b013", "b017"],
    questions: [
      {
        question: "What is 'due diligence' in the context of mergers and acquisitions?",
        options: ["A. The marketing campaign for announcing the merger", "B. The process of thoroughly investigating a target company before completing the transaction", "C. The negotiation of the final price", "D. The integration of two companies after the deal closes"],
        correctIndex: 1,
      },
      {
        question: "Why does the article say cultural due diligence is often underestimated?",
        options: ["A. Because culture has no impact on business outcomes", "B. Because it implies that compatibility between organizations is critical but frequently overlooked", "C. Because it is the easiest part of due diligence", "D. Because culture cannot be measured or evaluated"],
        correctIndex: 1,
      },
      {
        question: "What does the high failure rate of mergers and acquisitions suggest?",
        options: ["A. Companies should never pursue mergers or acquisitions", "B. Only large companies can succeed at mergers", "C. Rigorous analysis, thorough due diligence, and disciplined integration are essential for success", "D. The failure rate is primarily caused by technology incompatibility"],
        correctIndex: 2,
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
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 253,
    targetWords: ["a001", "a002", "a004", "a005"],
    questions: [
      {
        question: "What is the 'spacing effect'?",
        options: ["A. Studying in a spacious room", "B. Distributing study sessions over time is more effective than cramming", "C. Taking long breaks between sentences", "D. Reading faster to cover more material"],
        correctIndex: 1,
      },
      {
        question: "What is 'active recall'?",
        options: ["A. Reading notes repeatedly", "B. Highlighting important text", "C. Actively retrieving information from memory", "D. Listening to lectures again"],
        correctIndex: 2,
      },
      {
        question: "How does sleep help with learning according to the article?",
        options: ["A. It has no effect on learning", "B. It helps the brain process and organize information", "C. It makes you forget useless information", "D. It only helps with physical recovery"],
        correctIndex: 1,
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
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 252,
    targetWords: ["a004", "a001", "a002", "a009"],
    questions: [
      {
        question: "What is the primary cause of modern climate change according to the article?",
        options: ["A. Natural volcanic activity", "B. Changes in solar radiation", "C. The burning of fossil fuels", "D. Deforestation alone"],
        correctIndex: 2,
      },
      {
        question: "What do climate models suggest will happen without emission reductions?",
        options: ["A. Temperatures will stay the same", "B. Temperatures could rise by two to four degrees Celsius", "C. Sea levels will decrease", "D. Forests will grow larger"],
        correctIndex: 1,
      },
      {
        question: "What does the article say is needed to address climate change?",
        options: ["A. Individual action only", "B. International cooperation and coordinated action", "C. More research without taking any action", "D. Ignoring the problem until technology improves"],
        correctIndex: 1,
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
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 258,
    targetWords: ["a004", "a002", "a005"],
    questions: [
      {
        question: "What happens during deep sleep?",
        options: ["A. The brain processes memories", "B. The body repairs tissues and releases growth hormones", "C. People dream the most", "D. Blood pressure increases"],
        correctIndex: 1,
      },
      {
        question: "What is one consequence of sleep deprivation mentioned in the article?",
        options: ["A. Improved creativity", "B. Higher rates of anxiety and depression", "C. Better physical performance", "D. Increased appetite for healthy food"],
        correctIndex: 1,
      },
      {
        question: "Which of the following is recommended for improving sleep?",
        options: ["A. Exercising right before bedtime", "B. Drinking coffee in the evening", "C. Maintaining a consistent sleep schedule", "D. Sleeping in a warm, bright room"],
        correctIndex: 2,
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
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 280,
    targetWords: ["a002", "a004", "a001"],
    questions: [
      {
        question: "What are the three macronutrients mentioned in the article?",
        options: ["A. Vitamins, minerals, and water", "B. Carbohydrates, proteins, and fats", "C. Calcium, iron, and vitamin D", "D. Fiber, sugar, and salt"],
        correctIndex: 1,
      },
      {
        question: "Why are micronutrients important?",
        options: ["A. They provide most of the body's energy", "B. They are required in large amounts daily", "C. A deficiency can lead to significant health problems", "D. They are only found in supplements"],
        correctIndex: 2,
      },
      {
        question: "What does the article suggest about achieving good nutrition?",
        options: ["A. Follow extreme diets for fast results", "B. Focus on eating one type of food", "C. Eat a variety of foods from all food groups", "D. Take as many supplements as possible"],
        correctIndex: 2,
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
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 276,
    targetWords: ["a004", "a002", "a001", "a008"],
    questions: [
      {
        question: "What was Sputnik?",
        options: ["A. The first manned spacecraft", "B. The first artificial satellite launched into orbit", "C. A space station built in 1998", "D. A Mars rover"],
        correctIndex: 1,
      },
      {
        question: "What is one purpose of the International Space Station?",
        options: ["A. To serve as a tourist destination", "B. To store supplies for Mars missions", "C. To conduct scientific research in zero gravity", "D. To monitor military activities on Earth"],
        correctIndex: 2,
      },
      {
        question: "What do scientists hope to learn from future Mars missions?",
        options: ["A. How to build faster rockets", "B. Whether life ever existed on Mars", "C. How to mine minerals for profit", "D. How to redirect asteroids"],
        correctIndex: 1,
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
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 296,
    targetWords: ["a004", "a002", "a005"],
    questions: [
      {
        question: "What are the three parts of the habit loop?",
        options: ["A. Thought, action, and result", "B. Cue, routine, and reward", "C. Problem, solution, and feedback", "D. Input, process, and output"],
        correctIndex: 1,
      },
      {
        question: "How long does it actually take to form a new habit on average?",
        options: ["A. Seven days", "B. Twenty-one days", "C. Sixty-six days", "D. One hundred days"],
        correctIndex: 2,
      },
      {
        question: "What does the article recommend for changing a bad habit?",
        options: ["A. Stop the behavior immediately and permanently", "B. Replace the routine while keeping the same cue and reward", "C. Avoid all situations that trigger the habit", "D. Punish yourself every time you repeat the habit"],
        correctIndex: 1,
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
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 286,
    targetWords: ["a004", "a002", "a005"],
    questions: [
      {
        question: "What is one advantage of renewable energy over fossil fuels?",
        options: ["A. It is always cheaper", "B. It does not produce greenhouse gases during generation", "C. It can be used without any technology", "D. It provides more energy per unit"],
        correctIndex: 1,
      },
      {
        question: "Why are offshore wind farms particularly effective?",
        options: ["A. They are cheaper to build", "B. Ocean winds are stronger and more consistent", "C. They do not require turbines", "D. They can also generate solar power"],
        correctIndex: 1,
      },
      {
        question: "What is the main challenge facing solar and wind energy?",
        options: ["A. They are too expensive to install", "B. They require fossil fuels to operate", "C. They are intermittent and depend on weather conditions", "D. They cannot generate enough electricity"],
        correctIndex: 2,
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
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 272,
    targetWords: ["a004", "a002", "a001"],
    questions: [
      {
        question: "What does biodiversity refer to?",
        options: ["A. Only the number of animal species in a region", "B. The variety of all life on Earth including ecosystems and genetic diversity", "C. The total number of trees in a forest", "D. Only endangered species in the wild"],
        correctIndex: 1,
      },
      {
        question: "Why are ecosystems with high biodiversity more stable?",
        options: ["A. They have more space for organisms", "B. They receive more sunlight", "C. When one species is lost, others can fill its role", "D. They have fewer predators"],
        correctIndex: 2,
      },
      {
        question: "What is the main cause of biodiversity loss according to the article?",
        options: ["A. Natural disasters", "B. Climate cycles", "C. Human activities", "D. Asteroid impacts"],
        correctIndex: 2,
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
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 296,
    targetWords: ["a004", "a002", "a005"],
    questions: [
      {
        question: "What was ARPANET originally designed for?",
        options: ["A. Online shopping", "B. Social media networking", "C. Sharing information among researchers at universities", "D. Entertainment purposes"],
        correctIndex: 2,
      },
      {
        question: "Who invented the World Wide Web?",
        options: ["A. Bill Gates", "B. Steve Jobs", "C. Tim Berners-Lee", "D. Mark Zuckerberg"],
        correctIndex: 2,
      },
      {
        question: "What challenge does the article mention about the internet?",
        options: ["A. It is too slow for modern use", "B. It raises questions about privacy and misinformation", "C. It is only available in wealthy countries", "D. It cannot support video content"],
        correctIndex: 1,
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
    domain: "academic" as const,
    difficulty: 1,
    wordCount: 293,
    targetWords: ["a001", "a002", "a004", "a005"],
    questions: [
      {
        question: "What is confirmation bias?",
        options: ["A. The tendency to agree with authority figures", "B. The tendency to seek information that confirms existing beliefs", "C. The tendency to make quick decisions", "D. The tendency to follow the crowd"],
        correctIndex: 1,
      },
      {
        question: "How does the anchoring effect influence decision-making?",
        options: ["A. People always choose the cheapest option", "B. People rely heavily on the first piece of information they encounter", "C. People make decisions based on expert advice only", "D. People avoid making decisions altogether"],
        correctIndex: 1,
      },
      {
        question: "What is the main purpose of this article?",
        options: ["A. To prove that humans cannot think logically", "B. To explain common cognitive biases and why awareness of them matters", "C. To advertise a new method of decision-making", "D. To criticize the field of psychology"],
        correctIndex: 1,
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
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 305,
    targetWords: ["a004", "a013", "a009", "a010", "a007"],
    questions: [
      {
        question: "Why do some AI systems exhibit bias?",
        options: ["A. They are deliberately programmed to be unfair", "B. They learn from training data that reflects existing societal biases", "C. They cannot process information about diverse populations", "D. They are only tested in one country"],
        correctIndex: 1,
      },
      {
        question: "What challenge does AI pose for legal accountability?",
        options: ["A. AI cannot be regulated by any law", "B. Current legal frameworks were not designed for machines making independent decisions", "C. AI companies refuse to follow regulations", "D. There is no way to determine who created an AI system"],
        correctIndex: 1,
      },
      {
        question: "What does the author suggest is key to managing AI development?",
        options: ["A. Stopping all AI research immediately", "B. Allowing companies to self-regulate without oversight", "C. Developing responsible AI with ethical frameworks that prioritize human welfare", "D. Replacing all human workers with AI"],
        correctIndex: 2,
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
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 310,
    targetWords: ["a013", "a006", "a004", "a007", "a015"],
    questions: [
      {
        question: "What percentage of Earth's water is fresh?",
        options: ["A. About seventy percent", "B. About ten percent", "C. About two and a half percent", "D. About fifty percent"],
        correctIndex: 2,
      },
      {
        question: "What is the largest consumer of fresh water globally?",
        options: ["A. Industrial manufacturing", "B. Household use", "C. Agriculture", "D. Energy production"],
        correctIndex: 2,
      },
      {
        question: "How is climate change affecting water scarcity?",
        options: ["A. It is increasing the amount of fresh water available", "B. It is causing glaciers to shrink and changing rainfall patterns", "C. It has no effect on water supplies", "D. It is only affecting coastal areas"],
        correctIndex: 1,
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
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 315,
    targetWords: ["a003", "a002", "a009", "a008", "a004"],
    questions: [
      {
        question: "What makes human language unique compared to animal communication?",
        options: ["A. Humans are louder than other animals", "B. No other species has developed comparable complexity", "C. Animals cannot hear human speech", "D. Humans only communicate through writing"],
        correctIndex: 1,
      },
      {
        question: "Why is the origin of language difficult to study?",
        options: ["A. No one is interested in the topic", "B. Evidence supports multiple perspectives, making it a challenging phenomenon", "C. Language did not exist before the modern era", "D. Scientists refuse to study language origins"],
        correctIndex: 1,
      },
      {
        question: "What happens when a language disappears?",
        options: ["A. Nothing significant changes", "B. The unique cultural knowledge and perspective it carries are lost", "C. A new language automatically replaces it", "D. Only written records are affected"],
        correctIndex: 1,
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
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 302,
    targetWords: ["a014", "a004", "a002", "a007", "a015"],
    questions: [
      {
        question: "What are the most prevalent mental health disorders mentioned in the article?",
        options: ["A. Schizophrenia and bipolar disorder", "B. Depression and anxiety", "C. ADHD and autism", "D. Eating disorders and phobias"],
        correctIndex: 1,
      },
      {
        question: "What factors contribute to mental health conditions?",
        options: ["A. Only genetic factors", "B. Only environmental factors", "C. A complex interaction of biological, psychological, and social factors", "D. Only personal choices"],
        correctIndex: 2,
      },
      {
        question: "What is the author's main argument about mental health investment?",
        options: ["A. It is too expensive for most countries", "B. It benefits individuals and society through higher productivity and lower healthcare costs", "C. Only wealthy countries can afford mental health services", "D. Mental health treatment rarely works"],
        correctIndex: 1,
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
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 312,
    targetWords: ["a002", "a004", "a009", "a007"],
    questions: [
      {
        question: "How do vaccines protect the body?",
        options: ["A. They kill all bacteria in the body", "B. They introduce weakened pathogens to stimulate antibody production", "C. They increase body temperature to fight disease", "D. They block all viruses from entering the body"],
        correctIndex: 1,
      },
      {
        question: "Why is vaccine hesitancy a concern?",
        options: ["A. Vaccines are becoming too expensive", "B. When vaccination rates drop, eliminated diseases can return", "C. Doctors no longer recommend vaccines", "D. New vaccines take too long to develop"],
        correctIndex: 1,
      },
      {
        question: "What is 'herd immunity'?",
        options: ["A. Immunity that only animals can develop", "B. A type of vaccine given to farm animals", "C. Protection for the community when enough people are vaccinated", "D. A natural immunity that all humans are born with"],
        correctIndex: 2,
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
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 303,
    targetWords: ["a013", "a004", "a006", "a007", "a002"],
    questions: [
      {
        question: "What are microplastics?",
        options: ["A. Tiny organisms that live in the ocean", "B. Small particles that plastic breaks down into", "C. Chemicals used to clean ocean water", "D. Microscopic fish found in deep water"],
        correctIndex: 1,
      },
      {
        question: "What causes dead zones in the ocean?",
        options: ["A. Too many fish in one area", "B. Extremely cold water temperatures", "C. Pollutants that reduce oxygen levels to where most marine life cannot survive", "D. Excessive sunlight reaching the ocean floor"],
        correctIndex: 2,
      },
      {
        question: "What is the author's main message about ocean pollution?",
        options: ["A. Technology will eventually solve the problem", "B. It requires action at multiple levels including government, industry, and individuals", "C. Only scientists can address ocean pollution", "D. Ocean pollution is not a serious concern yet"],
        correctIndex: 1,
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
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 304,
    targetWords: ["a009", "a013", "a004", "a007", "a002"],
    questions: [
      {
        question: "What is loss aversion?",
        options: ["A. The tendency to avoid all risks", "B. Feeling the pain of loss about twice as strongly as the pleasure of an equal gain", "C. The desire to win at all costs", "D. The inability to make financial decisions"],
        correctIndex: 1,
      },
      {
        question: "What is a 'nudge' in behavioral economics?",
        options: ["A. A large financial incentive to change behavior", "B. A law that forces people to make certain choices", "C. A small change in how choices are presented that influences decisions", "D. A penalty for making bad decisions"],
        correctIndex: 2,
      },
      {
        question: "What does the article suggest about providing information to change behavior?",
        options: ["A. Information alone is always sufficient", "B. Information is never helpful", "C. Simply providing information is not enough; psychological factors must be considered", "D. Only financial incentives can change behavior"],
        correctIndex: 2,
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
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 305,
    targetWords: ["a004", "a013", "a001", "a002", "a008"],
    questions: [
      {
        question: "Why was the development of writing significant?",
        options: ["A. It allowed people to draw pictures", "B. It made it possible to accumulate and transmit knowledge across generations", "C. It was only used for religious purposes", "D. It replaced spoken language entirely"],
        correctIndex: 1,
      },
      {
        question: "What did the ancient Greeks contribute to modern society?",
        options: ["A. The pyramids and hieroglyphics", "B. Systems of logic, inquiry, and democratic governance", "C. The Roman road system", "D. Cuneiform writing"],
        correctIndex: 1,
      },
      {
        question: "What lesson does the article draw from studying ancient civilizations?",
        options: ["A. Ancient people were more intelligent than modern people", "B. Complex societies can rise and fall, and understanding the patterns helps address current challenges", "C. Modern technology makes studying ancient civilizations unnecessary", "D. Only military strength determines a civilization's success"],
        correctIndex: 1,
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
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 318,
    targetWords: ["a004", "a014", "a006", "a010"],
    questions: [
      {
        question: "What is projected about urbanization by 2050?",
        options: ["A. Fifty percent of people will live in rural areas", "B. Nearly seventy percent of the world's population will live in cities", "C. Megacities will no longer exist", "D. Urbanization will reverse completely"],
        correctIndex: 1,
      },
      {
        question: "What is one major benefit of urbanization?",
        options: ["A. Lower housing costs", "B. Less traffic congestion", "C. Cities generate a disproportionate share of national wealth", "D. Cities have cleaner air than rural areas"],
        correctIndex: 2,
      },
      {
        question: "What challenge of rapid urbanization is discussed in the article?",
        options: ["A. Too many job opportunities", "B. Excess green space in cities", "C. Housing shortages and the development of informal settlements", "D. Declining city populations"],
        correctIndex: 2,
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
    domain: "academic" as const,
    difficulty: 2,
    wordCount: 325,
    targetWords: ["a006", "a010", "a004", "a002", "a001"],
    questions: [
      {
        question: "What does statistical significance tell us in medical research?",
        options: ["A. How expensive a treatment is", "B. Whether the observed effect is likely real or due to chance", "C. How long a treatment takes to work", "D. Whether patients enjoyed the treatment"],
        correctIndex: 1,
      },
      {
        question: "Why is the distinction between correlation and causation important?",
        options: ["A. They always mean the same thing", "B. Correlation proves that one thing causes another", "C. A correlation does not prove that one factor actually causes the other", "D. Causation is less important than correlation"],
        correctIndex: 2,
      },
      {
        question: "What is the main purpose of this article?",
        options: ["A. To teach advanced statistical formulas", "B. To show that statistics is irrelevant to daily life", "C. To demonstrate that statistical literacy is essential for navigating the modern world", "D. To criticize how the media uses statistics"],
        correctIndex: 2,
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
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 359,
    targetWords: ["a016", "a013", "a009", "a011", "a020"],
    questions: [
      {
        question: "What is superposition in quantum computing?",
        options: ["A. A qubit that has stopped working", "B. The ability of a qubit to represent both zero and one simultaneously", "C. A method for cooling quantum computers", "D. A type of encryption used in classical computing"],
        correctIndex: 1,
      },
      {
        question: "Why could quantum computing threaten current encryption methods?",
        options: ["A. Quantum computers are cheaper to build", "B. Quantum computers could potentially break current encryption algorithms", "C. Quantum computers are connected to the internet", "D. Quantum computers use stronger passwords"],
        correctIndex: 1,
      },
      {
        question: "What is the main challenge in building practical quantum computers?",
        options: ["A. There is not enough funding for research", "B. Qubits are fragile and require extreme conditions to function correctly", "C. Classical computers are already fast enough", "D. No one understands quantum mechanics"],
        correctIndex: 1,
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
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 354,
    targetWords: ["a016", "a011", "a013", "a010", "a015"],
    questions: [
      {
        question: "Why was the development of CRISPR considered a paradigm shift?",
        options: ["A. It was the first genetic technology ever invented", "B. It made gene editing precise, efficient, and accessible to laboratories worldwide", "C. It completely eliminated all genetic diseases", "D. It was the cheapest laboratory tool ever created"],
        correctIndex: 1,
      },
      {
        question: "What is human germline editing?",
        options: ["A. Editing genes in adult cells that do not affect offspring", "B. Making genetic changes that can be passed on to future generations", "C. Modifying crops to increase food production", "D. A technique used only in animal research"],
        correctIndex: 1,
      },
      {
        question: "What does the author argue is needed regarding genetic engineering?",
        options: ["A. A complete ban on all genetic research", "B. Unlimited freedom for scientists to experiment", "C. A comprehensive regulatory framework that balances innovation with precaution", "D. Only private companies should conduct genetic research"],
        correctIndex: 2,
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
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 374,
    targetWords: ["a008", "a012", "a015", "a013", "a017"],
    questions: [
      {
        question: "What is the difference between misinformation and disinformation?",
        options: ["A. They mean exactly the same thing", "B. Misinformation is shared without intent to harm; disinformation is deliberately created to deceive", "C. Misinformation comes from social media; disinformation comes from news organizations", "D. Misinformation is more dangerous than disinformation"],
        correctIndex: 1,
      },
      {
        question: "How do social media algorithms contribute to the problem of media literacy?",
        options: ["A. They show users a wide variety of perspectives", "B. They create filter bubbles that limit exposure to diverse viewpoints", "C. They automatically fact-check all content", "D. They block all false information"],
        correctIndex: 1,
      },
      {
        question: "Why does the author consider media literacy a pragmatic necessity?",
        options: ["A. Because social media companies require it", "B. Because it helps people use technology faster", "C. Because widespread media illiteracy threatens democratic governance and social cohesion", "D. Because it increases advertising revenue"],
        correctIndex: 2,
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
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 370,
    targetWords: ["a008", "a015", "a011", "a019", "a004"],
    questions: [
      {
        question: "What is cultural relativism?",
        options: ["A. The belief that all cultures are identical", "B. The idea that a culture should be understood on its own terms rather than judged by another culture's standards", "C. The theory that one's own culture is superior", "D. A method of ranking cultures from best to worst"],
        correctIndex: 1,
      },
      {
        question: "What is ethnography?",
        options: ["A. A statistical analysis of population data", "B. An immersive research method involving living among the people being studied", "C. A type of written language used by ancient civilizations", "D. A survey distributed to random households"],
        correctIndex: 1,
      },
      {
        question: "What critique of anthropology is mentioned in the article?",
        options: ["A. Anthropology is too focused on numbers", "B. Its historical relationship with colonialism raises ethical concerns about power dynamics", "C. Anthropologists only study Western societies", "D. Ethnographic research is too short to be useful"],
        correctIndex: 1,
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
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 381,
    targetWords: ["a004", "a006", "a016", "a008", "a011"],
    questions: [
      {
        question: "What role does the amygdala play in emotional processing?",
        options: ["A. It regulates logical thinking", "B. It detects threats and generates rapid fear responses", "C. It controls language production", "D. It stores long-term memories"],
        correctIndex: 1,
      },
      {
        question: "What does the theory of constructed emotion suggest?",
        options: ["A. Emotions are entirely genetic and cannot be changed", "B. Emotions are constructed by the brain based on experience, culture, and context", "C. Only negative emotions are constructed; positive ones are innate", "D. Emotions do not involve any brain activity"],
        correctIndex: 1,
      },
      {
        question: "What implication does the constructed emotion theory have for mental health treatment?",
        options: ["A. Therapy is ineffective because emotions are hardwired", "B. Only medication can change emotional responses", "C. Therapeutic approaches that help reinterpret experiences may be more effective than previously thought", "D. Emotional problems cannot be treated at all"],
        correctIndex: 2,
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
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 385,
    targetWords: ["a013", "a008", "a012", "a020", "a017"],
    questions: [
      {
        question: "What did Heidegger mean by 'standing reserve'?",
        options: ["A. A military strategy for defending territory", "B. The tendency of technology to make us view nature as a resource to be exploited", "C. A type of renewable energy storage", "D. The reserve power in electronic devices"],
        correctIndex: 1,
      },
      {
        question: "What is the central paradox of digital technology mentioned in the article?",
        options: ["A. Technology is both fast and slow", "B. Technology promises connection but may contribute to loneliness", "C. Technology is expensive but widely available", "D. Technology requires electricity but saves energy"],
        correctIndex: 1,
      },
      {
        question: "What do pragmatic philosophers argue about technology?",
        options: ["A. All technology should be abandoned", "B. Technology always leads to negative outcomes", "C. Technology can serve human liberation when guided by democratic values and ethics", "D. Only scientists should decide how technology is used"],
        correctIndex: 2,
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
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 384,
    targetWords: ["a008", "a015", "a011", "a012", "a010"],
    questions: [
      {
        question: "What is the fundamental difference between clinical medicine and public health?",
        options: ["A. Clinical medicine is more expensive", "B. Clinical medicine focuses on individuals while public health takes a population-level perspective", "C. Public health only deals with infectious diseases", "D. Clinical medicine does not use scientific evidence"],
        correctIndex: 1,
      },
      {
        question: "What limitation of utilitarianism in public health does the article discuss?",
        options: ["A. It is too expensive to implement", "B. It can lead to policies that disproportionately burden vulnerable populations", "C. It only works in wealthy countries", "D. It requires unanimous public agreement"],
        correctIndex: 1,
      },
      {
        question: "Why is public trust important for public health policy?",
        options: ["A. It reduces the cost of healthcare", "B. It makes policymakers more popular", "C. Trust is essential for the success of health interventions", "D. It eliminates the need for enforcement"],
        correctIndex: 2,
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
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 371,
    targetWords: ["a011", "a012", "a010", "a015", "a016"],
    questions: [
      {
        question: "Why does the article argue the traditional education model is inadequate?",
        options: ["A. It was designed for an industrial economy, not the modern knowledge economy", "B. It is too expensive to maintain", "C. Teachers no longer want to teach", "D. Students today are less intelligent than previous generations"],
        correctIndex: 0,
      },
      {
        question: "What does educational neuroscience research show about active learning?",
        options: ["A. It produces the same results as passive learning", "B. It creates stronger neural connections and leads to deeper understanding", "C. It only works for science subjects", "D. It requires expensive technology"],
        correctIndex: 1,
      },
      {
        question: "What concern about educational technology does the article raise?",
        options: ["A. Technology is too difficult for teachers to use", "B. There are significant disparities in technology access between well-resourced and under-resourced schools", "C. Students prefer textbooks to computers", "D. Technology cannot be used for assessment"],
        correctIndex: 1,
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
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 383,
    targetWords: ["a003", "a011", "a001", "a018", "a010"],
    questions: [
      {
        question: "What is falsifiability and why is it important?",
        options: ["A. The ability to prove a hypothesis true; it confirms scientific claims", "B. The possibility of designing an experiment that could prove a hypothesis wrong; it distinguishes science from untestable claims", "C. The tendency of experiments to fail; it shows that science is unreliable", "D. The process of making false claims; it is a problem in science"],
        correctIndex: 1,
      },
      {
        question: "Why is reproducibility important in science?",
        options: ["A. It makes experiments cheaper to conduct", "B. It ensures that scientists publish more papers", "C. It serves as a quality control mechanism to identify errors and validate findings", "D. It allows scientists to patent their discoveries"],
        correctIndex: 2,
      },
      {
        question: "What does the article mean by saying scientific knowledge is 'provisional'?",
        options: ["A. Scientific knowledge is always temporary and unreliable", "B. Theories represent the best explanations supported by current evidence and may be revised with new data", "C. Scientists are not confident in their work", "D. Only provisional funding is available for research"],
        correctIndex: 1,
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
    domain: "academic" as const,
    difficulty: 3,
    wordCount: 392,
    targetWords: ["a013", "a015", "a011", "a017", "a008"],
    questions: [
      {
        question: "What is the primary cause of the current mass extinction?",
        options: ["A. Natural disasters such as volcanic eruptions", "B. Changes in Earth's orbit around the sun", "C. Human activities including habitat destruction and climate change", "D. Competition among animal species"],
        correctIndex: 2,
      },
      {
        question: "Why do conservation scientists argue against protecting species in isolation?",
        options: ["A. Individual species are not important", "B. It is too expensive to protect individual species", "C. Species exist in complex webs of interdependence where losing one can trigger cascading effects", "D. Protected areas are not effective"],
        correctIndex: 2,
      },
      {
        question: "What economic argument for conservation does the article present?",
        options: ["A. Endangered species can be sold for profit", "B. Tourism to see endangered animals generates significant revenue", "C. Ecosystems provide services worth trillions of dollars annually including water purification and crop pollination", "D. Conservation creates manufacturing jobs"],
        correctIndex: 2,
      },
    ],
  },
];
