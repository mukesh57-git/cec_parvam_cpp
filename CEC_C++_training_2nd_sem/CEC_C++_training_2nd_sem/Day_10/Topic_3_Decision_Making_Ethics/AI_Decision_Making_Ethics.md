# Topic 3: AI Decision Making & Ethics

## 1. How AI Makes Decisions
AI systems use different algorithms depending on the task:
- **Search Algorithms:** Used for pathfinding (like the Maze Solver from Day 9) or game playing (Minimax). 
- **The Minimax Algorithm:** Used in turn-based games like Chess or Tic-Tac-Toe. The AI assumes you will play perfectly, and calculates the best possible move to minimize its losses and maximize its gains. It maps out the "Game Tree" into the future.
- **Probabilistic Reasoning:** Used when the AI is uncertain (like the Spam Filter or Self-Driving cars). It calculates percentages to make the safest choice.

## 2. Automation vs Intelligence
People often confuse Automation with AI.
- **Automation (Non-AI):** A dishwasher. It follows a strict set of rules (`wash -> rinse -> dry`). It does not learn or adapt. If you put a brick in it, it will wash the brick.
- **Intelligence (AI):** A robotic vacuum (Roomba). It maps your house, learns where the stairs are, and adapts if you move the sofa. 

## 3. The Ethics of AI
As AI becomes more powerful, we face massive ethical challenges:

**A. Bias and Fairness**
AI learns from human data. If the historical data is biased, the AI becomes biased.
- *Example:* In 2018, Amazon built an AI to scan resumes and hire the best engineers. But because the tech industry historically hired more men, the AI learned that "Male = Good" and started throwing out resumes from women. Amazon had to shut it down.

**B. Privacy & Surveillance**
Facial recognition and data tracking mean AI knows more about you than you do. Who owns this data? 

**C. The Black Box Problem**
Deep Learning Neural Networks are so complex that even the programmers who build them don't know exactly *why* the AI made a specific choice. If an AI denies you a bank loan, it can't explain why.

**D. Job Displacement**
AI will automate many repetitive tasks (data entry, basic coding, basic writing). The workforce will shift to roles requiring empathy, creativity, and advanced problem-solving.

## 4. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** 
  1. Play the AI! Run the code and type a number (1-9) in the terminal to play Tic-Tac-Toe against the Minimax algorithm. Can you beat it?
  2. **Sabotage the AI.** Let's see what happens when AI goes wrong! Go into the code and comment out the `minimax()` call, replacing it with a random number generator. Turn the smartest AI into the dumbest AI!
