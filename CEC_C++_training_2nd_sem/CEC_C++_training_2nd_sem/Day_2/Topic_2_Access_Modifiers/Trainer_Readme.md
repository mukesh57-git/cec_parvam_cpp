# 👨‍🏫 Trainer's README: Access Modifiers (`public`, `protected`, `private`)

*This script uses the "Bank Building" analogy to explain the three access levels in C++, as well as the difference between a `class` and a `struct`.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "Imagine if you walked into a bank, walked straight past the security guards, opened the vault yourself, and just grabbed your money. That would be a terrible bank! 
>
> In C++, if we leave our data exposed, any hacker or rogue function can change it. Today, we are learning about Access Modifiers—the security guards of C++."

## 2. The Core Analogy: The Bank Building 🏦

**Trainer Script:**
> "Let's break down the three security levels of our bank:
>
> 1. `public:` (The Bank Lobby)
>    - Anyone from the street (the `main` function) can walk in here. We put our 'Deposit Money' methods here so customers can use them.
>
> 2. `protected:` (The Employee Breakroom)
>    - Customers from the street cannot enter. However, if this bank opens a "Child Branch" (which we will learn about in Inheritance), the employees of the child branch ARE allowed in!
>
> 3. `private:` (The Bank Vault)
>    - This is ultra-secure. Nobody from the outside can touch this. If a customer wants to see their `balance` (which is in the vault), they CANNOT grab it themselves. They must ask the `public` bank teller to go check the vault for them!
>
> **Class vs Struct:**
> - If you create a `class`, it acts like a Bank. If you forget to put up signs, the computer assumes everything is **private** (locked).
> - If you create a `struct`, it acts like a Public Park. If you forget to put up signs, the computer assumes everything is **public** (open to everyone)."

## 3. Explaining the Code
Project `BankAccount.cpp` onto the board. Show them the physical structure. Prove that trying to access `myAccount.balance` from the `main()` function causes a massive red error!

## 4. "Pop Quiz" to check understanding
*Ask the class:*
1. *"If I want a variable to be completely hidden from the main function, what access modifier do I use?"* (Answer: `private`)
2. *"If I create a `class` and forget to write `public` or `private`, what does it become by default?"* (Answer: `private`)
3. *"If I create a `struct` and forget to write `public` or `private`, what does it become by default?"* (Answer: `public`)

---

## ▶️ How to Run the Code in this Folder
**Method 1: Using VS Code (Recommended for Students & Trainers)**
1. Open the `.cpp` file you want to run in Visual Studio Code.
2. Click the **"Play" button** (▷) in the top-right corner of the window. *(This was automatically installed by the Code Runner extension during the Topic 0 Setup).*
3. Look at the terminal at the bottom of the screen to see the output!

**Method 2: Using the Terminal (Manual Compilation)**
1. Open your terminal or command prompt.
2. Navigate to the folder containing the `.cpp` file.
3. Compile the code by typing: `g++ FileName.cpp -o program` and press Enter.
4. Run the code by typing: `./program` (Mac) or `program.exe` (Windows) and press Enter.
