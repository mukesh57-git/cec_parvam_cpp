# 👨‍🏫 Trainer's README: Types of Inheritance & The Diamond Problem

*This script uses the "Family Tree" analogy to explain the different shapes of inheritance, and the "Two-Headed Monster" analogy to explain the dreaded Diamond Problem.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "So we know how a Zombie inherits from an Enemy. But what if a Zombie inherits from an Enemy, and then a BossZombie inherits from the Zombie? What if a FlyingZombie inherits from a Zombie AND a Bird? 
> 
> Inheritance can take many shapes, just like a family tree! Today, we look at the 5 types of inheritance, and a terrifying C++ bug called the Diamond Problem."

## 2. The Core Analogies 🌳💎

**Trainer Script:**
> **1. The Family Tree (Types of Inheritance)**
> - **Single:** Normal parent to child. (Vehicle -> Car).
> - **Multilevel:** Grandparent -> Parent -> Child. (Animal -> Mammal -> Dog).
> - **Hierarchical:** One parent, many kids. (Vehicle -> Car, Truck, Bike).
> - **Multiple:** One child, TWO parents! (TeachingAssistant inherits from Student AND Teacher).
> 
> **2. The Diamond Problem (The Two-Headed Monster)**
> - "Imagine we have a base class called `Animal`. It has an `age` variable. 
> - A `Lion` inherits from `Animal`. A `Tiger` inherits from `Animal`. 
> - Now, we create a hybrid `Liger` that uses Multiple Inheritance to inherit from BOTH `Lion` and `Tiger`. 
> - What happens? The `Liger` gets the Lion's copy of `Animal`, AND the Tiger's copy of `Animal`! The Liger is born with TWO heads and two `age` variables! If we say `liger.age = 5;`, the compiler panics: 'Which age?! The Lion's age or the Tiger's age?!'
>
> **3. The Solution (`virtual` inheritance)**
> - "We fix this by using the word `virtual` when the Lion and Tiger inherit from Animal. This tells the compiler: 'Hey, if we ever make a hybrid later on, only spawn ONE shared Animal body for them!'"

## 3. Explaining the Code
Project `DiamondProblemDemo.cpp` onto the board. 
- Show them the code *without* the `virtual` keyword first. Show them the compiler error!
- Then, add the word `virtual` to `class LandAnimal : virtual public Animal` and `class WaterAnimal : virtual public Animal`. Show them how the compiler error instantly vanishes because there is now only one shared `Animal`.

## 4. "Pop Quiz" to check understanding
*Ask the class:*
1. *"What is Multilevel Inheritance?"* (Answer: Like a grandparent, parent, and child. Class A -> Class B -> Class C).
2. *"What causes the Diamond Problem?"* (Answer: When two classes inherit from the same Base class, and then a fourth class inherits from both of them, resulting in two duplicate copies of the Base class).
3. *"What magic keyword fixes the Diamond Problem?"* (Answer: `virtual`).

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
