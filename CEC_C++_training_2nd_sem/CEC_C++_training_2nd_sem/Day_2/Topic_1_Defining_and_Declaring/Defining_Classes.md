# Topic 1: Defining and Declaring Classes

## 1. Why split into multiple files?
When programs get massive, putting everything in `main.cpp` makes the code impossible to read. We fix this by separating the **Declaration** (what the class does) from the **Implementation** (how the class does it).

### The Three Files You Need:
1. **The Header File (`.h`)**: The "Menu". It declares the class variables and function names.
2. **The Source File (`.cpp`)**: The "Kitchen". It contains the actual logic for the functions.
3. **The Main File (`main.cpp`)**: The "Customer". It includes the header file and uses the class.

## 2. Include Guards (The Bouncer)
If you accidentally `#include` the same header file twice in a large project, C++ will crash with a "Redefinition Error". We use Include Guards to prevent this.

```cpp
#ifndef STUDENT_H   // "If STUDENT_H is not defined..."
#define STUDENT_H   // "...then define it now."

class Student {
    // Class code goes here
};

#endif              // End of the guard
```

## 3. 💡 Fun Facts
- **Faster Compiling:** If you change the code in a `.cpp` file, only that specific file needs to be recompiled. This is why huge games like *Call of Duty* don't take 5 hours to compile every time a programmer changes one line of code!
- **Double Colons:** When writing the `.cpp` file, you have to use the Scope Resolution Operator `::` to tell the computer which class the function belongs to. Example: `void Student::displayInfo() { ... }`.

## 4. 🙋‍♂️ Interactive Classroom Activity: "The Secret Recipe"
**Goal:** Physically show how separating files protects the code.
**Activity Steps:**
1. **The Setup:** Divide the class into two sides. Left side is the "Main Function (Customers)". Right side is the "Source File (Chefs)".
2. **The Menu:** Write just the function name `void bakeCake();` on the whiteboard. This is the `.h` file.
3. **The Test:** The Customers are allowed to read the whiteboard and ask the Chefs to "bakeCake". The Chefs secretly write down the recipe on paper and hand over a finished cake (a drawing).
4. **The Lesson:** The Customers never needed to see the messy, complicated recipe. They only needed the simple menu on the whiteboard to interact with the object!

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task`** files. 
- **The Mission:** You are given `Student_Task_Book.h`. Your job is to go into `Student_Task_Book.cpp` and write the actual code (the kitchen recipes) for the functions!
- **The Solution:** The `Task_Solution` files are provided for the trainer.

---

## ▶️ How to Run the Code in this Folder
**Method 1: Using VS Code (Recommended for Students & Trainers)**
1. Open the `.cpp` file you want to run in Visual Studio Code.
2. Click the **"Play" button** (▷) in the top-right corner of the window. *(This was automatically installed by the Code Runner extension during the Topic 0 Setup).*
3. Look at the terminal at the bottom of the screen to see the output!

**Method 2: Using the Terminal (Manual Compilation - REQUIRED FOR MULTI-FILE PROJECTS)**
Because this topic uses multiple files, the standard "Play" button might fail. You must link the files together in the terminal!
1. Open your terminal or command prompt.
2. Compile the files together: `g++ main_example.cpp Student.cpp -o program`
3. Run the code: `./program` (Mac) or `program.exe` (Windows).
