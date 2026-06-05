# 👨‍🏫 Trainer's README: Compile-Time Polymorphism

*This script uses the "Smart Blender" analogy to explain Function Overloading, and "Teaching Math" to explain Operator Overloading.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "Imagine a high-tech blender in your kitchen. It doesn't have a 'Smoothie' button, a 'Soup' button, and an 'Ice' button. It only has ONE button: 'BLEND'.
> 
> How does it know what to make? It looks at the INGREDIENTS you put inside! This is exactly how Function Overloading works in C++."

## 2. The Core Analogies 🌪️➕

**Trainer Script:**
> **1. Function Overloading (The Smart Blender)**
> - "If I drop fruit into the blender and press `blend()`, it makes a smoothie. If I drop hot tomatoes and press `blend()`, it makes soup. 
> - In C++, we can have three functions all named `add()`. One takes two integers. One takes two decimals. One takes three integers. The compiler looks at the 'ingredients' (parameters) we pass in, and instantly knows which blender to use!"
>
> **2. Operator Overloading (Teaching Math to the Compiler)**
> - "The `+` symbol is smart. It knows `5 + 5 = 10`. 
> - But what if I create a `Player` class, and I type `Player1 + Player2`? The compiler panics! It doesn't know how to add human beings together!
> - Operator Overloading allows us to teach the `+` symbol a new trick. We can tell it: 'Hey, if you ever see two Players with a `+` between them, just add their `score` variables together!'"

## 3. Explaining the Code
Project `OverloadingDemo.cpp` onto the board. 
- **Function Overloading:** Show the `Calculator` class. Point out that all three functions are identically named `add`. Show the `main()` function and ask the students to guess which `add` gets triggered for `calc.add(2.5, 2.5)`.
- **Operator Overloading:** Show the `Vector2D` class. Walk them through the weird syntax: `Vector2D operator+(const Vector2D& other)`. Explain that the word `operator+` is literally just the name of the function, and it gets triggered whenever C++ sees a `+` symbol between two vectors!

## 4. "Pop Quiz" to check understanding
*Ask the class:*
1. *"Can I have two functions named `print()` if they both take exactly one `int` as a parameter?"* (Answer: No! The 'ingredients' must be different in type or quantity for the compiler to tell them apart).
2. *"If I want to use the `<` symbol to compare two `Student` objects, what feature must I use?"* (Answer: Operator Overloading).

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
