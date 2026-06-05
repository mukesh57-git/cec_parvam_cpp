# 👨‍🏫 Trainer's README: Exception Handling

*This script uses the "Tightrope Walker and the Safety Net" analogy to explain `try`, `catch`, and `throw`.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "Have you ever played a game or used an app, and suddenly the screen froze and the app completely crashed to your home screen? That is what happens when a program encounters a Fatal Error.
> 
> As programmers, our users will make mistakes. They will try to divide by zero, or they will enter '-5' for their age. Today, we are going to learn how to gracefully *catch* those mistakes so our programs NEVER crash!"

## 2. The Core Analogy 🎪🥅🎇

**Trainer Script:**
> **1. The Tightrope (`try`)**
> - "Some code is dangerous. It's like walking a tightrope. So, we wrap our dangerous code inside a `try { }` block.
> - This tells C++: 'I am about to *try* something risky. Set up the safety net!'"
>
> **2. The Flare Gun (`throw`)**
> - "While walking the tightrope, if our program realizes a mistake happened (like the user entering a negative age), it fires a flare gun using the `throw` keyword.
> - Example: `throw runtime_error('Age cannot be negative!');`
> - The moment you `throw`, the program immediately jumps off the tightrope. It skips all the code below it!"
>
> **3. The Rescue Worker (`catch`)**
> - "At the bottom of the safety net is a rescue worker called `catch`. 
> - The `catch` block waits for the flare to be fired. When it sees the flare, it catches the error, prints it out, and the program safely continues walking instead of crashing!"

## 3. Explaining the Code
Project `ExceptionDemo.cpp` onto the board. 
- Run the code normally (enter a valid age like 20). Show that the `catch` block is completely ignored!
- Run the code again and enter `-5`. Show how the code inside `try` immediately STOPS running at the `throw` line, and teleports straight down into the `catch` block.
- Point out the syntax: `catch (const exception& e)`. Explain that `e` is the flare we caught, and `e.what()` is how we read the message written on the flare!

## 4. "Pop Quiz" to check understanding
*Ask the class:*
1. *"What happens to the remaining code inside the `try` block after a `throw` happens?"* (Answer: It is skipped! The program immediately jumps to the `catch` block).
2. *"If a user enters totally valid data and no `throw` happens, does the `catch` block run?"* (Answer: No, the `catch` block is ignored).
3. *"Why is `throw` better than just using `cout << 'Error'`?"* (Answer: `cout` just prints a message, but `throw` actually changes the flow of the program and stops the dangerous code from continuing!).

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
