# Topic 3: Runtime Polymorphism

## 1. Virtual Functions (The Universal Remote)
A **Virtual Function** is a function in a Base class that tells the compiler: *"If one of my children has a function with the exact same name, run THEIR function instead of mine!"*

We use the `virtual` keyword. This allows a **Base Class Pointer** to trigger the correct child function while the program is running (Dynamic Binding / Runtime Polymorphism).

```cpp
class Animal {
public:
    // The magic 'virtual' keyword!
    virtual void speak() { cout << "Animal makes a sound" << endl; }
};

class Dog : public Animal {
public:
    // Overriding the base function
    void speak() override { cout << "Woof!" << endl; }
};

int main() {
    Animal* myPet = new Dog(); // A Base pointer pointing to a Child object!
    myPet->speak(); // Because of 'virtual', this prints "Woof!" instead of "Animal makes a sound".
}
```

## 2. Pure Virtual Functions (`= 0`)
What if the Base class function shouldn't have *any* code in it at all? 
We can create a **Pure Virtual Function** by putting `= 0` at the end of it.

```cpp
virtual void speak() = 0; 
```
This translates to: *"I am not going to write any code for this. My children MUST write the code for this, or the compiler will throw an error."* It acts as a strict contract!

## 3. Abstract Classes (The Blueprint)
If a class has even ONE pure virtual function inside it, it instantly becomes an **Abstract Class**.
- You **CANNOT** spawn an object from an abstract class! (`Animal a;` will crash the compiler).
- It is simply a "Blueprint" that forces its children to follow a specific structure.

## 4. 🙋‍♂️ Interactive Classroom Activity: "The Contract"
**Goal:** Understand how Abstract Classes force children to implement functions.
**Activity Steps:**
1. **The Abstract Class:** The Trainer declares they are an Abstract Class called `Employee`. They write on the board: `virtual void doWork() = 0;`.
2. **The Child Class:** The Trainer points to a student and says, "You are a `Programmer` inheriting from me. Can you exist?"
3. **The Rule:** The student must reply: "Only if I sign the contract and write my own `doWork()` function!"
4. **Implementation:** The student then acts out typing on a keyboard (their version of `doWork()`). 
5. Repeat with another student who is a `Janitor` (they act out sweeping). They both fulfilled the contract, but in different ways!

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** Build an Abstract Base Class called `Appliance` with a pure virtual function `turnOn() = 0`. Then, build two derived classes (`WashingMachine` and `Microwave`) that sign the contract and implement `turnOn()` in their own unique way!
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
