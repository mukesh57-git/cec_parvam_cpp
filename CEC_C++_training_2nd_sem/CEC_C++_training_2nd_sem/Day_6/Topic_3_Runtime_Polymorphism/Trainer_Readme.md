# 👨‍🏫 Trainer's README: Runtime Polymorphism & Abstract Classes

*This script uses the "Universal Remote" analogy to explain Virtual Functions, and the "Blueprint" analogy to explain Abstract Classes.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "Compile-time polymorphism is like packing a lunchbox—you know exactly what you're doing in advance. But what if you are building an RPG game? The player could choose to be a Mage, a Knight, or an Archer. You won't know until the game is actually running! 
> 
> To handle this, we need **Runtime Polymorphism**. We need the computer to make decisions on the fly. We do this using a magic word: `virtual`."

## 2. The Core Analogies 🎮🏗️

**Trainer Script:**
> **1. Virtual Functions (The Universal Remote)**
> - "Imagine a Universal Remote with a single `power()` button. If you point it at a TV, it turns on the screen. If you point it at a Speaker, it turns on the music. 
> - The remote doesn't know what it's pointing at! At RUNTIME, it sends a signal that says: 'Hey device, run YOUR specific version of the power function!'
> - In C++, if we put the word `virtual` in front of a Base class function, it acts like that remote. It tells the compiler: 'Don't run my function. Wait until runtime, and run the Child's version instead!'"
>
> **2. Pure Virtual Functions & Abstract Classes (The Blueprint)**
> - "Can you drive a 'Vehicle'? No. You can drive a Car, or a Truck, or a Bike. But 'Vehicle' is just a concept. It's a blueprint.
> - In C++, we can force a Base class to act only as a blueprint by making it an **Abstract Class**. We do this by adding `= 0` to a virtual function. Example: `virtual void drive() = 0;`
> - This is called a **Pure Virtual Function**. It means: 'I refuse to write code for this. My children MUST write the code for this, otherwise they cannot exist!'"

## 3. Explaining the Code
Project `VirtualFunctionsDemo.cpp` onto the board. 
- Point out the `Payment` class. Show them the `= 0` syntax. Explain that this makes `Payment` an Abstract Class, meaning we can NEVER type `Payment p;` in our code.
- Show the `vector<Payment*>`. This is the true power of Runtime Polymorphism! We can store Credit Cards, PayPal, and Crypto all in the exact same array, because they all share the `Payment` base class! 
- When we loop through the array and call `process()`, the `virtual` keyword ensures the correct child function runs!

## 4. "Pop Quiz" to check understanding
*Ask the class:*
1. *"If I add `= 0` to a virtual function, what is it called?"* (Answer: A Pure Virtual Function).
2. *"If a class contains a pure virtual function, can I spawn an object from it?"* (Answer: No! It becomes an Abstract Class, which is just a blueprint).
3. *"Why do we use pointers or references with virtual functions?"* (Answer: Because the Base pointer needs to be able to point to ANY of its children dynamically at runtime).

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
