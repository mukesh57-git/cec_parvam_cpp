# 👨‍🏫 Trainer's README: Applications & Limitations of AI

*This script uses the "Magic Trick vs Math Trick" analogy to explain what AI can and cannot do.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "AI is everywhere right now. It is in our phones, our cars, and even our video games. But is it magic? No. Today, we are going to look at the real-world applications of AI, and more importantly, its biggest weaknesses. 
> 
> We are going to see that AI is not a magic trick, it is a math trick!"

## 2. The Core Analogy 🎩🔢

**Trainer Script:**
> **1. The Magic Trick (What people think AI is)**
> - "When you talk to ChatGPT or play a video game, the AI feels like magic. It feels like there is a tiny human brain inside the computer that understands exactly what you want."
>
> **2. The Math Trick (What AI actually is)**
> - "But under the hood, it is just incredibly fast Math. An AI doesn't 'understand' what a maze is. It doesn't have eyes. It just looks at a 2D array of `1`s and `0`s and uses math to check every single coordinate until it finds the exit.
> - **The Limitation:** Because it is just math, it lacks **Common Sense**. If an AI trained to play chess is suddenly asked to play checkers, it will crash. It only knows the math it was programmed to know!"

## 3. Explaining the Code (The Maze Solver)
Project `MazeSolverDemo.cpp` onto the board. 
- Explain that Search Algorithms are a huge part of AI (especially in video games and GPS systems). 
- In this code, we use **Breadth-First Search (BFS)**. The AI starts at the beginning, and branches out in all four directions simultaneously, exploring every possible path until it finds the shortest route to the exit.
- Show the 2D array (`0` is a path, `1` is a wall).
- Run the code and watch the AI instantly find the 13-step path!

## 4. "Pop Quiz" to check understanding
*Ask the class:*
1. *"What is one major advantage of AI?"* (Answer: It is incredibly fast, can work 24/7, and doesn't make calculation errors).
2. *"What is one major limitation of AI?"* (Answer: It lacks common sense, it is bad at handling unexpected situations, and it requires massive amounts of data).
3. *"How does a GPS use AI?"* (Answer: It uses Search Algorithms—just like our Maze Solver—to find the shortest path from point A to point B).

---

## ▶️ How to Run the Code in this Folder
**Method 1: Using VS Code (Recommended)**
1. Open the `.cpp` file you want to run.
2. Click the **"Play" button** (▷) in the top-right corner.
3. Look at the terminal at the bottom!
