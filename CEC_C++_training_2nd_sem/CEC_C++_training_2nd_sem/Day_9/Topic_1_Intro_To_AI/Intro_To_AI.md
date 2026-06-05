# Topic 1: What is Artificial Intelligence?

## 1. Intelligence vs Automation
For decades, programmers wrote code using **Automation**: writing strict `if-this-then-that` rules. 
**Artificial Intelligence** is different. It is the simulation of human intelligence. AI systems aim to:
1. **Perceive** their environment (e.g., a self-driving car seeing a stop sign).
2. **Reason** about the data (e.g., "The stop sign means I must halt").
3. **Act** (e.g., applying the brakes).
4. **Learn** (e.g., "Next time, I will brake a little earlier in the rain").

## 2. A Brief History of AI
AI is not new! The concept has been around since the 1950s.
- **1950 (The Turing Test):** Alan Turing proposed a test. If a human talks to a machine through a chat window and thinks they are talking to a human, the machine is "intelligent".
- **1956:** The term "Artificial Intelligence" is coined at the Dartmouth Conference.
- **1970s & 1980s (The AI Winters):** AI research crashed. Computers were too slow and funding was cut.
- **1980s:** **Expert Systems** became popular. These were massive databases of rules written by human experts (like a digital doctor).
- **2012-Present:** The Deep Learning revolution. Thanks to huge amounts of Data and cheap Compute power (GPUs), modern AI like ChatGPT was born!

## 3. The 1980s Expert System
Before neural networks, AI looked like a giant wall of `IF-THEN` statements. For example, a Medical Expert System would have thousands of rules:
- `IF` (Fever AND Cough) `THEN` (Diagnosis = Common Cold)
- `IF` (Fever AND Rash) `THEN` (Diagnosis = Measles)

It felt like magic back then, but under the hood, it was just string matching!

## 4. 🙋‍♂️ Interactive Classroom Activity: "The Turing Test"
**Goal:** Prove how hard it is to pass the Turing Test!
**Activity Steps:**
1. The Trainer asks two students to stand behind a whiteboard or door (where the class cannot see them).
2. One student is the "Human". The other student plays the role of the "AI Robot".
3. The class asks a question out loud: *"What is your favorite food and why?"*
4. Both hidden students must write their answer on a piece of paper and hand it to the Trainer. The "Robot" student must *try* to sound as human as possible.
5. The Trainer reads both answers aloud. The class must vote on which one is the Robot and which one is the Human!

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** We have built a 1980s-style Medical Expert System. But the rules are boring. Your job is to add fun, crazy new diseases to the AI's database! Create rules to diagnose the "Zombie Virus", "Vampirism", or "Ninja Syndrome"! 
- **The Solution:** A separate file named **`Task_Solution.cpp`** is provided.
