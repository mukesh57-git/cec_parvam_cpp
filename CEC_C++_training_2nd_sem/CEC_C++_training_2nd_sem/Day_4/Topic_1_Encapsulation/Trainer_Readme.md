# 👨‍🏫 Trainer's README: Encapsulation & Getters/Setters

*This script uses the "ATM Machine" analogy to explain why Encapsulation is critical for security, and how Getters and Setters act as the security guards for our data.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "If you walk into a bank, is the money just sitting on a table in the lobby for anyone to grab, change, or take? Of course not! That would be a disaster. The money is locked in a vault, and you must talk to a teller to access it.
> 
> In C++, if we make our variables `public`, it's like leaving the money on the lobby table. Any part of the program can accidentally change or break the data. Today, we learn **Encapsulation**: how to lock our data in a vault and force people to use a safe interface to access it!"

## 2. The Core Analogy: The ATM Machine 🏧

**Trainer Script:**
> "1. **The Vault (Private Data):** 
>    - Inside an ATM is a giant pile of cash and a database of account balances. These are our `private` variables. The user cannot directly touch them!
>
> 2. **The Keypad (Public Interface):** 
>    - To interact with the ATM, you use the keypad. These are our `public` functions.
>
> 3. **Getters (Checking Balance):**
>    - A **Getter** is a function that simply *reads* the private data and tells you what it is, without letting you change it. It's like clicking 'Check Balance' on the ATM.
>
> 4. **Setters (Depositing/Withdrawing):**
>    - A **Setter** is a function that allows you to *change* the private data, but ONLY if you pass security checks! If you try to deposit a negative amount of money, the Setter rejects it. It acts like a bouncer protecting the data!"

## 3. Explaining the Code
Project `EncapsulationDemo.cpp` onto the board. Show the students how `employee.salary = -5000;` is impossible because `salary` is `private`. Then, show them how the `setSalary()` function uses an `if` statement to check if the new salary is valid before accepting it. 

## 4. "Pop Quiz" to check understanding
*Ask the class:*
1. *"What is the main goal of Encapsulation?"* (Answer: To hide data and protect it from accidental or malicious changes).
2. *"What do we call a function that safely changes a private variable?"* (Answer: A Setter or Mutator).
3. *"Why is it dangerous to make variables public?"* (Answer: Because any other code can change the value to something invalid, like setting a person's age to -500).

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
