# 👨‍🏫 Trainer's README: Abstraction & Interfaces

*This script uses the "Coffee Machine" analogy to explain Abstraction, and the "Universal Remote Contract" to explain Interfaces and Pure Virtual Functions.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "Do you know exactly how the fuel injection system and spark plugs work in your car? Probably not. But can you drive a car? Yes! Because the car gives you a steering wheel and pedals, and hides all the exploding engine parts under the hood. 
> 
> This is called **Abstraction**. In programming, we want to hide the ugly, complex code and give the user a simple 'steering wheel' to use!"

## 2. The Core Analogy: The Coffee Machine & The Contract ☕

**Trainer Script:**
> "1. **Abstraction (The Coffee Machine):** 
>    - You press a button that says 'Make Coffee'. You don't care how the gears turn or the water boils. You just want coffee. We hide the complex implementation and only show the essential features.
>
> 2. **Abstract Classes & Interfaces (The Universal Contract):** 
>    - In C++, we can build something called an **Interface** (or Abstract Class). Think of it like a legal contract for a Universal Remote.
>    - The remote says: 'Any device that wants to connect to me MUST have a `PowerButton()`'. The remote doesn't know *how* to turn on the TV or the Radio. It just forces them to write the code for it!
>    - We write this in C++ using a **Pure Virtual Function**: `virtual void powerButton() = 0;` The `= 0` literally means 'I have no code, but anyone who inherits me MUST write the code!'"

## 3. Explaining the Code
Project `AbstractionDemo.cpp` onto the board. Point out the `virtual void draw() = 0;` syntax. Explain that because `Shape` has a pure virtual function, it becomes a "Ghost Class" (Abstract Class). You **cannot** spawn an object of type `Shape`! You can only spawn a `Circle` or a `Rectangle` that signs the Shape contract!

## 4. "Pop Quiz" to check understanding
*Ask the class:*
1. *"What does the `= 0` mean at the end of a virtual function?"* (Answer: It makes it a Pure Virtual Function. It means the base class has no code for it, and the child class is forced to write it).
2. *"Can I create an object of an Abstract Class? Like `Shape s;`?"* (Answer: NO! It's illegal. Abstract classes are just blueprints/contracts. You can only create the child objects).
3. *"What is the main goal of Abstraction?"* (Answer: To hide the complex background code and only show the simple, necessary buttons to the user).

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
