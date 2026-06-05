# Topic 2: Abstraction & Interfaces

## 1. What is Abstraction?
**Abstraction** means hiding the complex, ugly implementation details and showing only the essential, simple features. 
When you use `cout`, you are using abstraction! You don't know how the pixels are drawn on your computer screen; you just know that typing `cout` makes text appear.

## 2. Abstract Classes & Pure Virtual Functions
In C++, we implement abstraction using **Abstract Classes**. An Abstract Class acts like a legal contract for other classes to follow.

*   **Pure Virtual Function:** A function that has no body `{}`. Instead, it ends with `= 0`. 
*   **The Rule:** Any class that has at least one Pure Virtual Function becomes an Abstract Class.
*   **The Consequence:** You **CANNOT** create an object of an Abstract Class! (e.g., `Shape s;` will cause an error). You can only use it as a blueprint for child classes.

```cpp
// This is an Abstract Class (an Interface)
class RemoteControl {
public:
    // Pure Virtual Function (= 0)
    // "I don't know how to do this, but my children MUST figure it out!"
    virtual void pressPowerButton() = 0; 
};

class Television : public RemoteControl {
public:
    // The child class signs the contract and writes the actual code
    void pressPowerButton() override {
        cout << "TV is turning on..." << endl;
    }
};
```

## 3. 💡 Fun Facts
- **Interfaces in C++:** Languages like Java have a specific keyword called `interface`. C++ does not! In C++, if an Abstract Class has *only* pure virtual functions and zero variables, we call it an Interface.
- **The Architect:** Abstract classes are usually written by Senior Programmers/Architects. They write the "Contract" (the interfaces) and force the Junior Programmers to write the actual child classes that follow the rules!

## 4. 🙋‍♂️ Interactive Classroom Activity: "The Universal Remote"
**Goal:** Physically demonstrate how Pure Virtual Functions act as a contract.
**Activity Steps:**
1. **The Abstract Class:** The Trainer stands at the front and declares: "I am an Abstract Remote Control. I have a pure virtual function called `makeNoise() = 0`."
2. **The Illegal Spawn:** A student asks, "Can I build a Remote Control object?" The Trainer yells "NO! I am abstract! I am just a ghost!"
3. **The Child Classes:** The Trainer points to Student A and says "You are a Dog. Inherit me!" Student A must yell "Woof!" (They implemented the `makeNoise` contract).
4. **The Broken Contract:** The Trainer points to Student B and says "You are a Cat. Inherit me, but stay silent!" Student B stays quiet. The Trainer yells "COMPILER ERROR! You refused to sign the contract and implement `makeNoise`! You cannot exist!"

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** You must build an Abstract Class called `Animal` with a pure virtual function `makeSound() = 0`. Then, build a `Lion` and a `Cow` that inherit from `Animal` and fulfill the contract!
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
