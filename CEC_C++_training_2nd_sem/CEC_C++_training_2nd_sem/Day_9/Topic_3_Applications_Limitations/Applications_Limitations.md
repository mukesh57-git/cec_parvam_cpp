# Topic 3: Applications & Limitations of AI

## 1. Where is AI Used Today?
AI is everywhere! Here are a few major applications:
- **Virtual Assistants:** Siri, Alexa, Google Assistant (Speech Recognition).
- **Gaming:** Non-Player Characters (NPCs) that adapt to your strategies. The AI that beat the world champion at the board game Go (AlphaGo).
- **Healthcare:** AI scanning X-Rays to detect diseases faster and more accurately than human doctors.
- **Transportation:** Self-driving cars (Tesla), and GPS route optimization (Google Maps).
- **Finance:** Fraud detection algorithms that block stolen credit cards instantly.

## 2. The Advantages of AI
Why do we use AI instead of humans for these tasks?
- **Speed:** AI can process millions of data points in milliseconds.
- **24/7 Availability:** AI doesn't need sleep, coffee, or weekends off.
- **Accuracy:** In specific tasks (like calculating math or identifying images), AI has achieved superhuman accuracy.

## 3. The Limitations of AI (Why AI won't take over the world... yet)
Despite its power, AI is not perfect. It has severe limitations:
1. **Lack of Common Sense:** AI does not "understand" the world. If you tell a robot to "Clean the house as fast as possible," it might decide to burn the house down because technically, a pile of ash is completely clean. It lacks human context!
2. **Data Dependency:** AI needs massive amounts of high-quality data. If the data is bad, the AI is bad.
3. **The Black Box Problem:** Sometimes, AI (like Neural Networks) gets so complicated that even the programmers don't know exactly *how* it made its decision. 
4. **No True Creativity:** AI can remix existing human art and writing (like Midjourney or ChatGPT), but it cannot truly feel emotion or invent completely novel concepts from thin air.

## 4. How Video Game AI Works (Search Algorithms)
When an enemy in a video game chases you through a complex building, how does it know where to go? It uses **Search Algorithms**. 
- The game level is turned into a giant invisible grid (a 2D Array).
- The AI uses math to explore the grid and find the shortest path to your location. 
- A common algorithm for this is **Breadth-First Search (BFS)**, which explores all nearby tiles before moving further away.

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** We have built an AI Maze Solver. Your job is to act as the "Level Designer". You must edit the 2D array to build a custom maze. 
- Can you build a maze that takes the AI exactly 20 steps to solve? 
- What happens if you build a maze with NO exit? Does the AI crash, or does it realize it's trapped? Try it out!
