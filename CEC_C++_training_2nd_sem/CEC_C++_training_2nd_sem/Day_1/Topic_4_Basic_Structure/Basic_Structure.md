# Topic 4: Basic Structure of a C++ Program

## 1. The C++ Skeleton
Every single C++ program, whether it is a tiny calculator or a massive 3D video game, shares the exact same basic skeleton. 

Here is what it looks like:
```cpp
#include <iostream>
using namespace std;

int main() {
    // Your code goes here!
    return 0;
}
```

## 2. 💡 Fun Facts
- **Why `#include`?** In the early days of programming, computers had very little memory. They couldn't load every command at once! So, C++ requires you to explicitly tell it *which* specific toolboxes (libraries) you want to "include" to save memory.
- **Why `return 0`?** Back in the 1970s, operating systems used numbers to track crashes. `0` meant "Success". `1` meant "Error". `404` (like on the internet) meant "Not Found". We still use `0` for success today!

## 3. 🙋‍♂️ Interactive Classroom Activity: "Be the Compiler!"
**Goal:** Physically show how a computer reads code strictly from top to bottom.
**Activity Steps:**
1. **The Setup:** Write the C++ skeleton on the whiteboard. 
2. **The Compiler:** Pick one student to be the "Compiler" (the computer). Give them a marker.
3. **The Execution:** 
   - Ask the student where they should start reading. (Guide them to put their marker exactly at the `{` after `main()`).
   - Give the student commands to write on the board inside `main()`: `cout << "Step 1";`, `cout << "Step 2";`.
   - Tell the student to stop the moment they hit `return 0;`.
4. **The Trap:** Ask the teacher to write a command *below* the `return 0;`. Ask the student: "Do you read this?" (Answer: No! The program is already dead/finished).

## 4. 🧠 Quick Quiz / Class Inputs
- *"What character is required at the end of almost every line of code inside `main()`?"* (Answer: A semicolon `;`. It acts like a period at the end of an English sentence).
- *"If I forget `using namespace std;`, what will happen?"* (Answer: The computer will throw an error when it sees `cout` because it doesn't know which dictionary to use!).

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, have the students open the **`Student_Task.cpp`** file. 
- **The Mission:** The file is completely blank! They must write the C++ skeleton entirely from memory, and make it print "I am a C++ Master!"
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
