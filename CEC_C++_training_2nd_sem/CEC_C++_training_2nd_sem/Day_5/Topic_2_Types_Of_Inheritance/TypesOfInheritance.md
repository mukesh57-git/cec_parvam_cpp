# Topic 2: Types of Inheritance & The Diamond Problem

## 1. The 5 Types of Inheritance

| Type | Description | Example (A → B means B inherits A) |
|---|---|---|
| **Single** | One Base, One Derived. | `Car` inherits from `Vehicle`. |
| **Multilevel** | A chain of inheritance. | `Animal` → `Mammal` → `Dog`. |
| **Hierarchical** | One Base, Multiple Derived. | `Car`, `Truck`, and `Bike` all inherit from `Vehicle`. |
| **Multiple** | One Derived, Multiple Bases. | `SmartPhone` inherits from `Camera` AND `Phone`. |
| **Hybrid** | A mix of the above. Usually creates a Diamond shape. | `Liger` inherits from `Lion` and `Tiger` (which both inherit from `Animal`). |

## 2. The Diamond Problem
C++ allows **Multiple Inheritance** (a child having two parents). This is powerful, but dangerous! It leads to the famous **Diamond Problem**.

Imagine this family tree (shaped like a Diamond):
```text
      Animal (Has 'age')
       /   \
    Lion   Tiger
       \   /
       Liger
```
Because both Lion and Tiger inherited `Animal`, they both carry a copy of it. When `Liger` inherits from both of them, it receives **TWO copies** of the `Animal` class!
If we try to write `myLiger.age = 5;`, the C++ compiler will crash with an **Ambiguity Error** because it doesn't know *which* age to change!

## 3. The Solution: `virtual` Inheritance
To prevent the two-headed monster, we use **Virtual Inheritance**. 
When `Lion` and `Tiger` inherit from `Animal`, we add the word `virtual`. This tells the compiler: "Share the `Animal` class! Don't make duplicate copies!"

```cpp
class Animal {
public: int age;
};

// Add the word 'virtual' here!
class Lion : virtual public Animal { };
class Tiger : virtual public Animal { };

// Now the Liger only gets ONE copy of Animal!
class Liger : public Lion, public Tiger { };
```

## 4. 🙋‍♂️ Interactive Classroom Activity: "The Family Tree"
**Goal:** Physically visualize Multilevel and Multiple inheritance.
**Activity Steps:**
1. **Multilevel:** Trainer selects 3 students. Student A is `Grandpa`. Student B is `Dad`. Student C is `Son`. Grandpa passes a hat to Dad. Dad passes the hat to Son. The Son inherited the hat through Multilevel inheritance!
2. **Multiple:** Trainer selects 3 new students. Student A is `Teacher`. Student B is `Student`. Student C is a `TeachingAssistant` (TA). Teacher hands the TA a Red Pen. Student hands the TA a Backpack. The TA inherited items from TWO different parents!

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** Build a Multilevel Inheritance chain! Build a `Shape` class, then a `Polygon` class that inherits from `Shape`, and finally a `Triangle` class that inherits from `Polygon`.
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
