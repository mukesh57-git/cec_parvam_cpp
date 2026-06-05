# 👨‍🏫 Trainer's README: Introduction to Inheritance

*This script uses the "Video Game Enemy" analogy to explain how Inheritance saves us from rewriting code, and introduces the crucial "IS-A" rule.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "Imagine you are programming a video game like Minecraft. You have 50 different types of enemies: Zombies, Skeletons, Creepers, Spiders, etc. 
> 
> EVERY enemy needs a `health` variable, a `speed` variable, and a `takeDamage()` function. Are you really going to type those exact same three things 50 times in 50 different classes? No! Programmers are lazy. We use **Inheritance**!"

## 2. The Core Analogy: Video Game Enemies 🧟‍♂️

**Trainer Script:**
> "1. **The Base Class (The Parent):** 
>    - We create one master class called `Enemy`. We put the `health`, `speed`, and `takeDamage()` inside it.
>
> 2. **The Derived Class (The Child):** 
>    - We create a `Zombie` class, and we tell C++: 'The Zombie INHERITS from the Enemy.' 
>    - Instantly, by magic, the Zombie gets all the health and damage functions for free! We don't have to type them again. We just add the stuff that makes a Zombie special, like a `bite()` function!
>
> 3. **The IS-A Rule:**
>    - How do we know if we are allowed to use inheritance? We use the 'IS-A' test. 
>    - Can we say 'A Zombie IS AN Enemy?' Yes! Therefore, Zombie inherits from Enemy.
>    - Can we say 'A Zombie IS A Car?' No! That makes no sense. Do not use inheritance here!"

## 3. Explaining the Code
Project `InheritanceDemo.cpp` onto the board. 
- Point to the syntax: `class Dog : public Animal`. Explain that the `:` means "inherits from".
- Show them the `protected` keyword in the Animal class. Remind them that `private` means "Nobody gets in, not even my children!" but `protected` means "Locked to strangers, but my children have the key!"

## 4. "Pop Quiz" to check understanding
*Ask the class:*
1. *"What is the main benefit of inheritance?"* (Answer: Code reuse! We don't have to rewrite the same variables and functions over and over).
2. *"What symbol do we use in C++ to inherit from a class?"* (Answer: The colon `:` ).
3. *"If a Base class variable is `private`, can the Derived (child) class access it?"* (Answer: No! If you want the child to have access, but keep it hidden from `main()`, you must use `protected`).

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
