# Topic 3: Object Instantiation (Stack vs Heap)

## 1. Where do Objects Live?
When you create an object, the computer has to put it in memory. It has two choices:

| Feature | The Stack (Automatic) | The Heap (Dynamic) |
|---|---|---|
| **Syntax** | `Student s;` | `Student* ptr = new Student();` |
| **Creation** | Automatic | Manual (`new`) |
| **Destruction** | Automatic (when function ends) | Manual (`delete`) |
| **Operator to Use**| Dot operator (`s.name`) | Arrow operator (`ptr->name`) |
| **Size** | Small (Fast) | Huge (A bit slower) |
| **Analogy** | A Backpack | A Rented Storage Unit |

## 2. 💡 Fun Facts
- **Memory Leaks:** The #1 cause of game crashes (like when a game slows down over 5 hours and eventually dies) is a **Memory Leak**. This happens when a programmer uses `new` to create an object, but forgets to use `delete`. The computer eventually runs out of RAM!
- **Garbage Collection:** Modern languages like Java and Python have an automatic "Garbage Collector" that does `delete` for you. C++ does NOT! C++ gives you the raw power to do it yourself, which makes C++ much faster, but also much more dangerous.

## 3. 🙋‍♂️ Interactive Classroom Activity: "The Balloon Pop"
**Goal:** Physically show how Stack vs Heap memory is destroyed.
**Activity Steps:**
1. **The Setup:** The Trainer hands a student two inflated balloons. Write "STACK" on one balloon, and "HEAP" on the other. 
2. **The Stack Balloon:** The Trainer acts as the "End of the Program". When the Trainer yells "PROGRAM FINISHED!", the Trainer takes a pin and pops the "STACK" balloon immediately. It was cleaned up automatically!
3. **The Heap Balloon:** The Trainer refuses to pop the "HEAP" balloon. The student is forced to hold it forever. 
4. **The Lesson:** Tell the class: *"If you don't use the `delete` keyword, that balloon stays in your computer's memory forever until it crashes. Student, say the magic word `delete`!"* Once the student says "delete", the Trainer pops the balloon!

## 4. 🧠 Quick Quiz / Class Inputs
- *"What symbol do we use to point to an object on the heap?"* (Answer: The arrow operator `->`).
- *"If you forget to `delete` an object on the heap, what is the terrible bug called?"* (Answer: A Memory Leak).

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** You are a game developer creating a Boss Monster. You must spawn the Boss on the HEAP (using a pointer and `new`), make him attack using the `->` operator, and then prevent a memory leak by using `delete`!
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
