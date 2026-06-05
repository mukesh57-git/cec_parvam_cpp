# Topic 3: Templates (Generic Programming)

## 1. What is a Template?
A **Template** is a blueprint or formula for creating a generic class or a function. 
Instead of writing the same function 5 times for 5 different data types, you write it once using a "Placeholder Type" (usually named `T`). The compiler will automatically generate the correct version for you!

## 2. Function Templates (The Cookie Cutter)
Let's say we want to find the maximum of two values. 

**The Old Way (Function Overloading - Lots of copy/pasting):**
```cpp
int getMax(int a, int b) { return (a > b) ? a : b; }
double getMax(double a, double b) { return (a > b) ? a : b; }
```

**The New Way (Templates - Write it once!):**
```cpp
template <typename T>
T getMax(T a, T b) {
    return (a > b) ? a : b;
}
```
When you call `getMax(5, 10)`, the compiler sees you passed in integers. It silently creates an `int` version of the function for you!

## 3. Class Templates (The Universal Box)
We can also make entire classes generic! Imagine a `Pair` class that just holds two items. Sometimes we want it to hold two ints, sometimes two strings.

```cpp
template <typename T>
class Pair {
public:
    T first;
    T second;
    Pair(T a, T b) : first(a), second(b) {}
};

int main() {
    // We MUST specify the type in angle brackets < > for Classes!
    Pair<int> numbers(10, 20);
    Pair<string> words("Hello", "World");
}
```

## 4. 🙋‍♂️ Interactive Classroom Activity: "The Universal Box"
**Goal:** Understand how the `<T>` syntax works.
**Activity Steps:**
1. The Trainer grabs a physical cardboard box and writes `Box<T>` on it.
2. The Trainer says: "This is a generic template box. Right now, it holds nothing. But I can instantiate it!"
3. The Trainer writes `Box<Pens>` on the board, and drops pens into the box. 
4. The Trainer asks a student: "If I write `Box<Candy>`, what am I allowed to put in this box?" (Answer: ONLY Candy!)
5. The Trainer asks: "If I write `Box<Candy>`, can I put a Pen in it?" (Answer: No! Once the template is instantiated, it is strictly typed!)

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** Write a template function called `swapValues()` that takes two variables and swaps their contents. Then, test it by swapping integers, decimals, and strings!
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
