# 👨‍🏫 Trainer's README: AI Decision Making & Ethics

*This script uses the "Crystal Ball" analogy to explain the Minimax algorithm, and transitions into a discussion on AI Ethics.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "We've taught AI to understand language, and we've taught it to learn logic gates. Now, we are going to teach it to play a game perfectly. We are going to build an AI that you *cannot beat* at Tic-Tac-Toe!"

## 2. The Core Analogy 🔮

**Trainer Script:**
> **The Crystal Ball (Minimax Algorithm)**
> - "How does a human play Tic-Tac-Toe? We look at the board, try to block the other person, and try to get 3 in a row. Sometimes we make mistakes.
> - The AI doesn't guess. It uses an algorithm called **Minimax**. 
> - Imagine the AI has a Crystal Ball. Before it places an 'O', it looks into the future. It simulates every possible move you could make, and every possible move it could make, until the game ends. 
> - It assigns a score: +10 if it wins, -10 if it loses. It literally maps out the entire future of the game in a split second, and chooses the path that guarantees it won't lose!"

## 3. Explaining the Code (Tic-Tac-Toe Minimax)
Project `TicTacToeAI.cpp` onto the board. 
- You don't need to explain every line of the math, but point out the `minimax()` function.
- Show how it uses Recursion (calling itself) to play out the game over and over again in its head (`board[i] = 'O'`, simulate, `board[i] = ' '` undo).

## 4. Transition to AI Ethics ⚖️
**Trainer Script:**
> "The AI is perfect at Tic-Tac-Toe. But what happens when we put AI in charge of driving cars, diagnosing patients, or deciding who gets a loan?
> 
> - **Bias:** If we train an AI to hire people, but we only give it data from men, the AI will learn that men are 'better' and automatically reject women. This happened to Amazon! The AI isn't evil, the *training data* was biased.
> - **Automation vs Intelligence:** A traffic light is automated (runs on a timer). A self-driving car uses intelligence (reacts to its environment). 
> - **Jobs:** Will AI take your job? AI won't replace humans. But a human *using AI* will replace a human who *doesn't use AI*."

## 5. "Pop Quiz" to check understanding
*Ask the class:*
1. *"How does the Minimax algorithm work?"* (Answer: It simulates all possible future moves before deciding).
2. *"Is an AI capable of being biased or racist?"* (Answer: Yes, if the data humans use to train it is biased).
3. *"What is the difference between Automation and AI?"* (Answer: Automation follows strict rules, AI learns and adapts).

---

## ▶️ How to Run the Code in this Folder
**Method 1: Using VS Code (Recommended)**
1. Open the `.cpp` file you want to run.
2. Click the **"Play" button** (▷) in the top-right corner.
3. Look at the terminal at the bottom! **(Note: Students will type their moves directly into the terminal for this one!)**
