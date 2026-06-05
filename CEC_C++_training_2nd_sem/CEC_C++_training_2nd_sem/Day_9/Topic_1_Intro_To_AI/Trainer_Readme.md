# 👨‍🏫 Trainer's README: Intro to AI & Expert Systems

*This script uses the "Smart Blender" analogy to explain the difference between Automation (Standard Programming) and Artificial Intelligence.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "So far in this course, we have been writing code that does EXACTLY what we tell it to do. If we write an `if` statement, it follows it blindly. 
> 
> But what if we didn't have to write every single rule? What if we could write a program that *learns* the rules by itself, looks at data, and makes its own decisions? Welcome to Day 9: Artificial Intelligence!"

## 2. The Core Analogy 🍓🤖

**Trainer Script:**
> **1. Automation (Regular Code)**
> - "Think of a standard blender. It has a 'Smoothie' button. When you press it, the blender runs for exactly 30 seconds at Speed 5. 
> - It doesn't care what is inside the blender. You could put rocks in there, or nothing at all. It will blindly follow the rule: 30 seconds, Speed 5."
>
> **2. Artificial Intelligence**
> - "Now imagine an **AI Smart Blender**. It has cameras and sensors inside.
> - **Perceive:** It looks inside and says, 'I see 10 large ice cubes and some strawberries.'
> - **Reason:** 'Ice is very hard. If I run at Speed 5 immediately, I might break the blades.'
> - **Adapt:** 'I will pulse the blades slowly to crush the ice first, then blend at Speed 5.'
> - THAT is Intelligence! It isn't blindly following a script; it is perceiving its environment and adapting."

## 3. Explaining the Code (Expert Systems)
Project `ExpertSystemDemo.cpp` onto the board. 
- Explain that in the 1980s, we didn't have ChatGPT. We had **Expert Systems**.
- An Expert System is a giant dictionary of `IF-THEN` rules provided by human experts. 
- Walk through the code. Show how the AI holds a list of "Symptoms" (conditions), and checks the "Patient" (input data) to find a match. 
- Emphasize that while it looks intelligent, it is just matching strings together. This is a very early, very basic form of "AI"!

## 4. "Pop Quiz" to check understanding
*Ask the class:*
1. *"What is the difference between Automation and Intelligence?"* (Answer: Automation blindly follows pre-written rules. Intelligence perceives, reasons, and adapts to new situations).
2. *"What was the Turing Test?"* (Answer: A test from 1950. If you chat with a machine and can't tell if it's a human or a robot, the machine passes as 'intelligent').
3. *"Why did AI fail in the 1970s and 1980s (The AI Winters)?"* (Answer: Computers were too slow, there wasn't enough data, and people overpromised what AI could do).

---

## ▶️ How to Run the Code in this Folder
**Method 1: Using VS Code (Recommended for Students & Trainers)**
1. Open the `.cpp` file you want to run in Visual Studio Code.
2. Click the **"Play" button** (▷) in the top-right corner of the window.
3. Look at the terminal at the bottom of the screen to see the output!

**Method 2: Using the Terminal (Manual Compilation)**
1. Open your terminal or command prompt.
2. Navigate to the folder containing the `.cpp` file.
3. Compile the code by typing: `g++ FileName.cpp -o program` and press Enter.
4. Run the code by typing: `./program` (Mac) or `program.exe` (Windows) and press Enter.
