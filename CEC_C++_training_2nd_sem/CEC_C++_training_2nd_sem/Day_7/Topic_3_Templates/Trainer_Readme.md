# 👨‍🏫 Trainer's README: Introduction to Templates

*This script uses the "Cookie Cutter" analogy to explain generic programming and templates.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "Yesterday, we learned about Function Overloading. If we want a function to add integers, and another to add decimals, we just write the function twice! 
> 
> But what if we need to add floats, longs, short ints, and custom objects? Are we going to copy-paste the exact same logic 20 times? Absolutely not! Programmers are lazy. We use **Templates**."

## 2. The Core Analogy 🍪⭐

**Trainer Script:**
> **The Cookie Cutter**
> - "Imagine you have a star-shaped cookie cutter.
> - You can press it into chocolate dough. You can press it into sugar dough. You can press it into gingerbread dough.
> - The shape (the logic of the code) stays the exact same. But the material (the data type) changes!
> - In C++, a **Template** is a cookie cutter. We write the logic once, using a magic placeholder called `T` (for Type). 
> - When we call the function and pass in integers, the Compiler acts like the baker. It grabs our template, stamps out an integer version of the function, and runs it for us automatically!"

## 3. Explaining the Code
Project `TemplatesDemo.cpp` onto the board. 
- **Function Templates:** Show them `template <typename T>`. Explain that `T` is just a blank variable for a *Type*. Show how `getMax(10, 20)` automatically replaces `T` with `int`, while `getMax(3.5, 2.1)` replaces `T` with `double`.
- **Class Templates:** Show the `Pair<T>` class. Point out that when creating an object of a template class, we MUST explicitly tell it what type to use using angle brackets: `Pair<int> myPair;`. 

## 4. "Pop Quiz" to check understanding
*Ask the class:*
1. *"What does the `T` stand for in `template <typename T>`?"* (Answer: Type. It's a placeholder for `int`, `double`, `string`, etc.).
2. *"If I call a template function with two strings, who creates the string version of the function?"* (Answer: The Compiler automatically generates it!).
3. *"Why are templates better than Function Overloading?"* (Answer: Templates prevent code duplication when the internal logic is exactly the same).

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
