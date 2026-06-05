# Topic 3: Friend Functions & Friend Classes

## 1. What is a Friend?
A **friend** is an external function (or an entire external class) that is granted special permission to access the `private` and `protected` members of another class. 
It acts like a VIP All-Access Pass, allowing the function to completely bypass normal Encapsulation rules!

## 2. How to Declare a Friend
You must write the `friend` keyword **inside** the class that is giving out the VIP pass. 

```cpp
class BankAccount {
private:
    double balance = 100000;

    // We are giving the 'governmentAudit' function a VIP Pass!
    friend void governmentAudit(BankAccount& account); 
};

// Notice this function is OUTSIDE the class! It's a normal function.
void governmentAudit(BankAccount& account) {
    // It can touch the private 'balance' variable directly!
    cout << "The bank has $" << account.balance << endl; 
}
```

## 3. 💡 Fun Facts
- **Friendship is not mutual:** Just because Class A declares Class B as a friend (meaning B can see A's secrets), it doesn't mean A can see B's secrets! Friendship is a one-way street in C++.
- **Friendship is not inherited:** If your father gives his best friend a key to his house, that friend does not automatically get a key to *your* house. In C++, child classes do not inherit their parent's friends.

## 4. 🙋‍♂️ Interactive Classroom Activity: "The VIP Club"
**Goal:** Physically demonstrate how the `friend` keyword bypasses security.
**Activity Steps:**
1. **The Vault:** The Trainer holds a piece of paper with a secret number written on it (Private Data). The Trainer acts as the Class.
2. **The Stranger:** A student walks up and asks to see the paper. The Trainer yells "ACCESS DENIED! You are an external function!"
3. **The VIP:** The Trainer writes another student's name on the board under the title `friend`. 
4. **The Access:** That student walks up and asks to see the paper. The Trainer smiles, bypasses security, and hands them the paper. 
5. **The Lesson:** Only the exact function specified by the `friend` keyword is allowed past the `private` security guard!

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** You have two `RaceCar` objects, but their `topSpeed` is strictly `private`. You must create an external `friend` function called `compareSpeed()` that takes two cars, looks at their private speeds, and announces the winner!
- **The Solution:** A separate file named **`Task_Solution.cpp`** is provided.

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
