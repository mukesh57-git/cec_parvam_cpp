# Topic 2: Compile-Time Polymorphism

## 1. Function Overloading (The Smart Blender)
**Function Overloading** allows you to create multiple functions with the **exact same name**, as long as they have different parameters (different "ingredients").
The C++ compiler looks at the data you pass in and instantly knows which function to use.

```cpp
// Blender 1: Takes an integer
void blend(int iceCubes) { cout << "Making a snow cone!" << endl; }

// Blender 2: Takes a string
void blend(string fruit) { cout << "Making a smoothie!" << endl; }

int main() {
    blend(5);       // The compiler picks Blender 1
    blend("Apple"); // The compiler picks Blender 2
}
```

**⚠️ The Rule:** The parameters MUST be different (either different types, like `int` vs `string`, or a different amount, like 2 ints vs 3 ints). You cannot overload based only on the return type!

## 2. Operator Overloading (Teaching Math new tricks)
By default, the `+` symbol only works on built-in types like `int` and `string`. If you create a custom class (like `Vector` or `Score`), the compiler doesn't know how to add them.

**Operator Overloading** lets us define exactly what symbols like `+`, `-`, `==`, and `<` should do when used on our custom objects!

### The Syntax
To overload the `+` symbol, we create a function literally named `operator+`.

```cpp
class Score {
public:
    int points;
    Score(int p) : points(p) {}

    // Teaching the '+' symbol how to add two Scores!
    Score operator+(const Score& otherScore) {
        return Score(this->points + otherScore.points);
    }
};

int main() {
    Score player1(50);
    Score player2(25);
    Score total = player1 + player2; // Magic! This calls the operator+ function!
}
```

## 3. 🙋‍♂️ Interactive Classroom Activity: "The Blender Game"
**Goal:** Practice identifying which overloaded function will be called.
**Activity Steps:**
1. **The Setup:** The Trainer writes 3 function headers on the board:
   - `void attack(int damage)`
   - `void attack(string weapon)`
   - `void attack(int damage, string weapon)`
2. **The Game:** The Trainer shouts out code, and the students must hold up 1, 2, or 3 fingers to indicate which function the compiler will choose.
3. **Round 1:** `attack(50);` (Students hold up 1 finger).
4. **Round 2:** `attack(10, "Sword");` (Students hold up 3 fingers).
5. **Round 3:** `attack("Fireball");` (Students hold up 2 fingers).
6. **Round 4:** `attack("Axe", 100);` (Trick question! The order is wrong. Compiler Error!).

## 4. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** 
  1. Overload a `print()` function three times (for an `int`, a `double`, and a `string`).
  2. Overload the `+` operator for a `Wallet` class so you can add the cash of two wallets together!
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
