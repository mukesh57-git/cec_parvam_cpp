# Topic 1: Encapsulation & Getters/Setters

## 1. What is Encapsulation?
**Encapsulation** is the concept of bundling data (variables) and behavior (functions) together inside a class, while **restricting direct access** to the data.
The Golden Rule: Keep your data `private`, and expose only what is necessary through `public` functions.

## 2. Getters and Setters
If a variable is `private`, how do we look at it or change it? We build special public functions!

*   **Getter (Accessor):** A function that returns the value of a private variable. It gives Read-Only access.
*   **Setter (Mutator):** A function that changes the value of a private variable. It usually contains `if/else` statements to validate the data and prevent bad inputs!

```cpp
class Player {
private:
    int health; // Locked in the vault!

public:
    // Getter: Let the game see the health
    int getHealth() const { 
        return health; 
    }
    
    // Setter: Let the game change health, but with safety checks!
    void setHealth(int h) {
        if (h >= 0 && h <= 100) {
            health = h; // Valid! Accept it.
        } else {
            cout << "Invalid health value!" << endl; // Reject it!
        }
    }
};
```

## 3. 💡 Fun Facts
- **Read-Only Data:** If you write a Getter for a variable, but you intentionally DO NOT write a Setter, that variable becomes "Read-Only". No one can ever change it once the object is created! This is great for things like a permanent User ID.
- **The `const` Keyword:** Notice the word `const` at the end of the getter `int getHealth() const`. This is a promise to the C++ compiler: "I swear this Getter function will not accidentally modify the object." It's a great habit for professional programmers!

## 4. 🙋‍♂️ Interactive Classroom Activity: "The Bouncer"
**Goal:** Physically demonstrate the job of a Setter function.
**Activity Steps:**
1. **The Setup:** The Trainer is a `public` Setter function acting as a Bouncer. The whiteboard is the `private` data (e.g., "Age"). 
2. **The Hackers:** The Trainer asks a student to try and change the age. 
3. **Invalid Input:** Student says "Set age to -50!" The Trainer (Setter) crosses their arms and yells "REJECTED! Age cannot be negative!"
4. **Invalid Input:** Student says "Set age to 1000!" The Trainer yells "REJECTED! Nobody lives that long!"
5. **Valid Input:** Student says "Set age to 25!" The Trainer says "ACCEPTED!" and writes 25 on the board.
6. **The Lesson:** This proves why Setters are powerful. They are the security guards that keep our object's data mathematically safe!

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** You are building a `SmartThermostat` class. You need to write Setters that prevent the user from setting the temperature too high (fire hazard!) or too low (freezing!). 
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
