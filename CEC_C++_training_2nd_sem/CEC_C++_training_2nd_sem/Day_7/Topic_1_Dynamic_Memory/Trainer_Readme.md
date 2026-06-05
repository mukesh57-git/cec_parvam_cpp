# 👨‍🏫 Trainer's README: Dynamic Memory

*This script uses the "Backpack vs Warehouse" analogy to explain Stack vs Heap memory, and the danger of Memory Leaks.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "Up until now, whenever we created a variable like `int x = 5;`, C++ automatically destroyed it when the function ended. 
> But what if we are building a video game, and we want to spawn a monster that stays alive even after the spawning function ends? We need manual control over memory!"

## 2. The Core Analogy 🎒🏗️

**Trainer Script:**
> **1. The Stack (The Backpack)**
> - "Standard variables live on the **Stack**. Think of the Stack like your school backpack. It's very fast to grab things from it, but it's small.
> - More importantly, the backpack automatically empties itself when you leave the classroom (when the function ends). You don't have to clean it!"
>
> **2. The Heap (The Rented Warehouse)**
> - "Dynamic memory lives on the **Heap**. Think of the Heap like a giant rented warehouse. It is MASSIVE. 
> - To put something in the warehouse, you must manually request a key. In C++, we do this with the word `new`. Example: `int* key = new int;`
> - **The Danger:** The warehouse does NOT empty itself! You must manually give the key back and clean out the room by typing `delete key;`."
>
> **3. Memory Leaks (Losing the Key)**
> - "What happens if you rent a warehouse, put stuff in it, and then throw the key in the ocean? You can never get your stuff back, and the warehouse owner can never rent that room to anyone else!
> - In C++, if you use `new` but forget to use `delete`, that memory is locked forever until the program crashes. This is called a **Memory Leak**."

## 3. Explaining the Code
Project `MemoryDemo.cpp` onto the board. 
- Show them the syntax: `int* p = new int;` and `delete p;`. 
- Emphasize that we must use `delete[]` (with brackets) if we allocated an array using `new int[size]`. Mismatching them is a catastrophic bug!
- Show them the good practice of setting pointers to `nullptr` after deleting them, so we don't accidentally try to open a warehouse we no longer own (a Dangling Pointer).

## 4. "Pop Quiz" to check understanding
*Ask the class:*
1. *"Which memory is automatically cleaned up when a function ends?"* (Answer: The Stack).
2. *"What keyword do we use to request memory on the Heap?"* (Answer: `new`).
3. *"What happens if you use `new` but forget to use `delete`?"* (Answer: A memory leak).

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
