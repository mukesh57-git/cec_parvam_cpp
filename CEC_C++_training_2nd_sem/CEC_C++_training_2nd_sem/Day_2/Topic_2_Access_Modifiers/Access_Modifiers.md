# Topic 2: Access Modifiers (public, protected, private)

## 1. The Three Levels of Security
In C++, we use Access Modifiers to control who is allowed to view or change the data inside our objects. This is a core part of **Encapsulation**!

| Modifier | Access Level | Analogy |
|---|---|---|
| `public:` | **Accessible from anywhere.** The `main()` function can read and change this data directly. | **The Bank Lobby** (Open to the public) |
| `protected:` | **Limited Access.** Accessible only within the class and any "child" classes (Inheritance). | **The Breakroom** (Employees only) |
| `private:` | **Ultra Secure.** Accessible ONLY from inside the class itself. The `main()` function is blocked! | **The Vault** (No customers allowed) |

## 2. 💡 Fun Facts
- **Getter and Setter Functions:** Because `private` data cannot be touched by the `main()` function, programmers use `public` functions called "Getters" (to view the data) and "Setters" (to safely change the data). They act like the Bank Teller!
- **Structs vs Classes:** In the C language, they only had `structs`. C++ introduced `classes`. The ONLY difference between them in C++ is their default security:
  - `class`: Everything is `private` by default.
  - `struct`: Everything is `public` by default.

## 3. 🙋‍♂️ Interactive Classroom Activity: "The Bribe"
**Goal:** Prove why data should be private instead of public.
**Activity Steps:**
1. **The Setup:** Have a student stand up. They are the "Bank Account Object". Give them a whiteboard. Tell them to write "Balance: $100" on it.
2. **The Public Test:** Tell the student their balance is currently `public`. The Trainer walks over, grabs the whiteboard, erases $100, and writes "$99,000,000". The Trainer just robbed/hacked the bank because there was no security!
3. **The Private Test:** Tell the student their balance is now `private`. The Trainer reaches for the whiteboard. The student must block them and yell "ACCESS DENIED!"
4. **The Safe Way:** The Trainer must ask the student (using a public `deposit()` method): *"Please deposit $50."* The student then safely updates their own whiteboard to $150.

## 4. 🧠 Quick Quiz / Class Inputs
- *"If I have a password variable, should it be public or private?"* (Answer: `private`).
- *"If I have a function that checks the password, should that function be public or private?"* (Answer: `public`, so the main program can use it to log in).

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** You are given a program with major security flaws. The `main()` function is directly hacking into the private data! You must fix the code by adding Getters and Setters.
- **The Solution:** A separate file named **`Task_Solution.cpp`** is provided.

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
