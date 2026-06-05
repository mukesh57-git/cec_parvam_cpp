# Topic 1: Branches of AI

## 1. The 5 Main Branches of AI
Artificial Intelligence is a massive field. It is broken down into several sub-branches:
1. **Machine Learning (ML):** Teaching computers to learn from data using math.
2. **Computer Vision:** Teaching computers to "see" (e.g., self-driving cars, facial recognition).
3. **Robotics:** Giving AI a physical body to interact with the real world.
4. **Expert Systems:** Massive `IF-THEN` rule databases (like the medical AI from Day 9).
5. **Natural Language Processing (NLP):** Teaching computers to understand human language.

## 2. Deep Dive: Natural Language Processing (NLP)
Humans speak in messy, unstructured ways. We use slang, sarcasm, and typos. Computers prefer neat, structured data (like SQL databases). NLP bridges this gap!

**What can NLP do?**
- **Sentiment Analysis:** Reading a tweet and knowing if the user is angry or happy.
- **Machine Translation:** Translating English to Hindi (Google Translate).
- **Text Summarization:** Reading a 10-page document and generating a 1-paragraph summary.
- **Chatbots:** Having a conversation with a human (ChatGPT).
- **Spam Filtering:** Scanning incoming emails to see if they are junk.

## 3. How does a Spam Filter work? (Naive Bayes)
In the old days, programmers tried to block spam by writing `if` statements:
`if (email.contains("free money")) { block(); }`

But spammers just changed their emails to say `"Fr33 m0ney"`. The `if` statement failed!

Today, we use Machine Learning. We feed the AI 10,000 spam emails and 10,000 good emails ("Ham"). The AI counts the words and builds a **probability matrix**. 
- It learns that the word "urgent" has a 90% chance of being Spam. 
- It learns that the word "meeting" has a 95% chance of being Ham.
When a new email arrives, the AI calculates the total probability of all the words combined!

## 4. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** We have provided a working Spam Classifier AI. Your job is to act as a "Hacker". You must write a spam email that tricks the AI into thinking it is "HAM" (Good). 
- Then, you will put your "Cybersecurity" hat back on, and add new training data to the AI so it catches your sneaky email!
