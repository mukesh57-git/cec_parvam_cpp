# Topic 1: Dynamic Memory (Stack vs Heap)

## 1. Stack vs Heap Memory
In C++, memory is divided into two main areas:
- **The Stack:** Where normal variables (like `int x = 5;`) live. It is fast, small, and automatically deletes variables when the function ends.
- **The Heap:** Where **Dynamic Memory** lives. It is huge, but you have to manually allocate (create) and manually deallocate (destroy) the memory.

## 2. `new` and `delete`
To use the Heap, you must request memory using the `new` keyword. `new` returns a **pointer** (a key) to the memory it just reserved for you.
When you are done with it, you MUST free the memory using the `delete` keyword.

```cpp
// 1. Allocate memory on the Heap
int* myPointer = new int; 

// 2. Put a value inside the rented memory
*myPointer = 42;          

// 3. Clean up the memory!
delete myPointer;         

// 4. Good practice: Nullify the key so we don't accidentally use it again
myPointer = nullptr;      
```

## 3. Dynamic Arrays
The best part about Dynamic Memory is that you can decide the size of an array *while the program is running* (Runtime)! Normal arrays force you to know the size before you hit play.

```cpp
int size;
cin >> size;

// Create an array on the Heap
int* arr = new int[size]; 

// VERY IMPORTANT: Use delete[] with brackets for arrays!
delete[] arr; 
```

## 4. The Horror of Memory Leaks
If you use `new` but forget to use `delete`, your program will slowly eat up all your computer's RAM until it crashes. This is called a **Memory Leak**. Google Chrome was famous for this!

## 5. 🙋‍♂️ Interactive Classroom Activity: "The Hotel Manager"
**Goal:** Understand allocation and leaks.
**Activity Steps:**
1. The Trainer acts as the "Operating System" (Hotel Manager). The students are the "Programmers".
2. A student says: `new int;`
3. The Trainer hands the student a physical sticky note (the Pointer Key) with "Room 101" written on it.
4. The student says: `delete Room101;` and hands the sticky note back. The Trainer throws the note away (Memory freed).
5. **The Leak:** Another student says `new int;` gets "Room 102", but then rips up the sticky note (losing the pointer) without saying `delete`. The Trainer announces: "Room 102 is now locked forever. You caused a Memory Leak!"

## 6. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** Build a program that asks the user how many enemies they want to spawn. Dynamically allocate an array of that size, fill it with enemy health points, and most importantly... clean it up so your game doesn't crash!
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
