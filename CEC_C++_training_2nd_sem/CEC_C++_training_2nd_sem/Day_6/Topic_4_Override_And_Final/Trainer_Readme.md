# 👨‍🏫 Trainer's README: Override and Final

*This script uses the "Spell Checker" analogy for `override` and the "End of the Line" analogy for `final`.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "Polymorphism is incredibly powerful, but it has a dark side. A tiny typo can completely break your entire program, and the compiler won't even warn you! 
> 
> To save us from these silent bugs, C++11 introduced two superhero keywords: `override` and `final`."

## 2. The Core Analogies 📝🛑

**Trainer Script:**
> **1. The `override` Keyword (The Spell Checker)**
> - "Imagine you are trying to override `virtual void attack(int damage)` in the Base class. But in the Child class, you accidentally type `void attack(double damage)`. 
> - Normally, the compiler doesn't care. It just assumes you wanted to create a brand new function! Your polymorphic remote control breaks silently.
> - But if you type `void attack(double damage) override`, you are turning on the **Spell Checker**. You are telling the compiler: 'I am explicitly trying to override a Base function. Check my spelling and parameters!'. The compiler will immediately throw an error and save you hours of debugging!"
>
> **2. The `final` Keyword (The End of the Line)**
> - "Sometimes, you want to stop the inheritance train. 
> - Imagine you create the ultimate `SecuritySystem`. You do NOT want some junior developer inheriting from it and overriding your `disableAlarm()` function!
> - By adding the keyword `final` (`void disableAlarm() final`), you put up a giant stop sign. The compiler will absolutely ban any further children from changing that function!"

## 3. Explaining the Code
Project `KeywordsDemo.cpp` onto the board. 
- **The Typo Bug:** Show them how easy it is to accidentally create a new function instead of overriding one (e.g. adding `const` when the base didn't have it). Show how `override` catches it instantly.
- **The Final Stop:** Show the `final` keyword attached to the `SecretAgent` class. Show them the commented-out code where `Hacker` tries to inherit from it, and explain why the compiler violently rejects it!

## 4. "Pop Quiz" to check understanding
*Ask the class:*
1. *"Does the `override` keyword change how the code runs?"* (Answer: No, it only acts as a safety check during Compile-Time to catch human errors).
2. *"If I declare a class as `final`, can another class inherit from it?"* (Answer: No. It stops inheritance completely).

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
