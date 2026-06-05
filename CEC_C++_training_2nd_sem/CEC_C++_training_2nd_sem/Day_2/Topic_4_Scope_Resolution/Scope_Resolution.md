# Topic 4: Scope Resolution Operator (::)

## 1. What does `::` do?
The Scope Resolution Operator (`::`) is used to specify the context (or "scope") to which a name belongs. It is like giving a variable or function a "Last Name" so the computer doesn't get confused!

We use it in three main ways:

### A. Defining Functions Outside a Class
When we split our code into `.h` and `.cpp` files, we use `::` to tell the computer that a function belongs to a specific class.
```cpp
// "The study function belongs to the Student class!"
void Student::study() { 
    cout << "Studying..." << endl; 
}
```

### B. Accessing Global Variables (Shadowing)
If you create a local variable inside a function with the *exact same name* as a global variable, the local one "shadows" (hides) the global one.
```cpp
int x = 100; // Global

void printX() {
    int x = 5; // Local
    cout << x;   // Prints 5 (Local wins!)
    cout << ::x; // Prints 100 (:: forces it to grab the Global!)
}
```

### C. Accessing Static Class Members
Static variables belong to the Class Blueprint itself, not the individual objects. We use `::` to access them without needing an object!
```cpp
cout << Math::PI;
```

## 2. 💡 Fun Facts
- **The `this` Pointer:** If a function parameter has the exact same name as a class variable, you have a shadowing problem! To fix it, C++ provides a secret pointer called `this->`. Example: `this->name = name;`.
- **Namespaces:** You've been using scope resolution since Day 1! When we type `using namespace std;`, we are telling the computer we don't want to type `std::cout` and `std::endl` every single time.

## 3. 🙋‍♂️ Interactive Classroom Activity: "Which John?"
**Goal:** Physically show how Shadowing causes confusion, and how `::` fixes it.
**Activity Steps:**
1. **The Setup:** Pick two students with the same first name (or just assign two students the name "John"). Have one stand far away (Global) and one stand right next to the Trainer (Local).
2. **The Shadow:** The Trainer yells "Hey John!" The student standing closest (Local) immediately answers. The Global John is completely ignored (shadowed!).
3. **The Scope Resolution:** The Trainer then yells "Hey `::John`!" (Or "Hey Global John!"). This time, the local student must stay quiet, and the far-away student answers.
4. **The Lesson:** The computer always defaults to whatever is closest. You must use `::` to bypass the local scope!

## 4. 🧠 Quick Quiz / Class Inputs
- *"If I type `Car::drive()`, what does the `Car` part mean?"* (Answer: It means the `drive` function lives inside the `Car` class).
- *"If a parameter is named `age` and my class variable is named `age`, how do I assign them?"* (Answer: `this->age = age;`).

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** A programmer created a massive shadowing bug! There is a Global `power`, a Class `power`, and a Local `power`... all mixed up! You must use `::` and `this->` to fix the print statements so they output the correct numbers!
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
