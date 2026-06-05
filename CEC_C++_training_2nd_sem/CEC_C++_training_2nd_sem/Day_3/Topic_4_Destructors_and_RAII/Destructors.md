# Topic 4: Destructors & RAII

## 1. What is a Destructor?
A **Destructor** is a special member function that is automatically called right before an object is destroyed (when it goes out of scope or is `delete`d). Its main job is to free up Heap memory to prevent memory leaks.

**The Rules of Destructors:**
1. It has the exact same name as the class, prefixed with a tilde `~`.
2. It has **NO return type** and **NO parameters**.
3. You can only have **ONE** destructor per class (No overloading!).

```cpp
class Player {
public:
    Player() { cout << "Born!"; }    // Constructor
    ~Player() { cout << "Died!"; }   // Destructor
};
```

## 2. What is RAII?
**RAII** stands for **Resource Acquisition Is Initialization**. It is the most important concept in modern C++ memory management.

Instead of manually trying to remember to `delete` pointers all over your code, RAII says:
1. **Acquire** memory inside the Constructor.
2. **Release** memory inside the Destructor.
Because the Destructor runs automatically, it is mathematically impossible to forget to delete the memory! The object perfectly cleans up after itself.

## 3. 💡 Fun Facts
- **Reverse Order:** When you create multiple objects on the Stack, they are destroyed in the *exact reverse order* they were created. (Last In, First Out). If you make `obj1` then `obj2`, `obj2`'s destructor runs first!
- **Garbage Collection:** Languages like Java and Python have a "Garbage Collector" that randomly pauses your game to clean up memory. C++ doesn't do this! In C++, Destructors make memory cleanup instant and perfectly predictable, which is why C++ is used for high-performance games.

## 4. 🙋‍♂️ Interactive Classroom Activity: "The Messy Room"
**Goal:** Physically demonstrate RAII vs Manual Cleanup.
**Activity Steps:**
1. **Manual Cleanup (No RAII):** The Trainer hands out markers (Heap Memory) to 3 students. The Trainer tells them "When class is over, you MUST bring the markers back." Class ends. 2 students bring them back, 1 forgets and takes it home. *Result: Memory Leak!*
2. **RAII Cleanup:** The Trainer builds a "Backpack Class" for the students. The Backpack's rule (Destructor) is: "When I leave the room, I automatically dump the marker on the desk." Class ends. The students walk out, and the backpacks *automatically* dump the markers on the desk. *Result: 100% safety, no leaks!*

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** You are managing a `NetworkConnection`. When the object is created, it connects to a server. You must write the Destructor to safely close the connection and delete the memory before the object is destroyed!
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
