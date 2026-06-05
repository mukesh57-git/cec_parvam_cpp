# 👨‍🏫 Trainer's README: Constructor & Destructor Execution Order

*This script uses the "Building a House" analogy to explain the execution order of inheritance, and how to pass arguments up to the parent class.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "When a Zombie spawns in our game, two things actually get created: The Enemy base, and the Zombie shell around it. But which one is built first? Does the Zombie create the Enemy, or does the Enemy create the Zombie? 
> 
> Today, we learn the strict rules of how C++ builds objects, and how it destroys them!"

## 2. The Core Analogy: Building a Two-Story House 🏠

**Trainer Script:**
> "1. **Constructors (Building the House):** 
>    - Imagine the Base Class is the 1st Floor, and the Derived Class is the 2nd Floor. 
>    - Can you build the 2nd floor before the 1st floor exists? No! It would float in the air. 
>    - Therefore, when you create a Child object, C++ ALWAYS runs the **Parent Constructor FIRST**, and the **Child Constructor SECOND**. (Top-down).
>
> 2. **Destructors (Demolishing the House):** 
>    - When the program ends, we have to destroy the house. Can we destroy the 1st floor first? No! The 2nd floor would crash down on us!
>    - We must destroy the 2nd floor first, and the 1st floor last. 
>    - Therefore, **Destructors run in REVERSE**. Child first, Parent last. (Bottom-up).
>
> 3. **Passing the Blueprints (Arguments):**
>    - What if the 1st floor requires a specific color of paint? The person building the 2nd floor has to hand the paint down to the 1st floor builders.
>    - We do this using the colon `:` syntax. Example: `Child(int x) : Parent(x) {}`"

## 3. Explaining the Code
Project `OrderDemo.cpp` onto the board. 
- Run the code and let the students see the `cout` statements. They will physically see `A constructor` print before `B constructor`.
- Then, point out how the destructors print in the exact reverse order: `B destructor` then `A destructor`. It looks like a mirror!
- Finally, show them the `Car` and `Vehicle` example to explain how we pass parameters to the Base class.

## 4. "Pop Quiz" to check understanding
*Ask the class:*
1. *"When I spawn a Dog object, does the Animal constructor run first, or the Dog constructor?"* (Answer: Animal runs first! Parent always runs first).
2. *"When the program ends, does the Animal destructor run first, or the Dog destructor?"* (Answer: Dog runs first! Destructors run in reverse).
3. *"If the Parent class constructor requires an integer, how do we pass it from the Child?"* (Answer: Using an initialization list: `Child(int x) : Parent(x) {}`).

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
