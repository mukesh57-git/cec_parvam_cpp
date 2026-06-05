# 👨‍🏫 Trainer's README: Object Instantiation (Stack vs Heap)

*This script uses the "Backpack vs Storage Unit" analogy to easily explain manual memory management, pointers, and the confusing Arrow (`->`) operator.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "So far, whenever we've created an object, the computer automatically threw it away when the program finished. But what if we are building a massive game like Minecraft with millions of blocks? We need complete manual control over our computer's memory!
> 
> Today, we learn about the Stack and the Heap, and how to manually create and destroy objects using the `new` and `delete` keywords!"

## 2. The Core Analogy: Backpack vs Storage Unit 🎒 📦

**Trainer Script:**
> "Your computer has two places it can store objects:
>
> 1. **The Stack (The Backpack):** `Student s1;`
>    - Your backpack is small and fast. At the end of the school day (when the function ends), you empty your backpack automatically. You don't have to think about it!
>    - Because the backpack is right on your back, you can just reach in and touch the object directly using the **Dot Operator** (`s1.name`).
>
> 2. **The Heap (The Storage Unit):** `Student* s2 = new Student();`
>    - The storage unit is massive. But it requires manual work! You have to manually rent it using the `new` keyword. 
>    - **CRITICAL:** If you forget to cancel your rental using the `delete` keyword, you will get charged forever! This is called a **Memory Leak**!
>    - Because the storage unit is miles away across town, you can't touch it directly. You need a map (a Pointer `*`) to find it. And to use it, you have to point at it from far away using the **Arrow Operator** (`s2->name`)."

## 3. Explaining the Code
Project `StackHeapDemo.cpp` onto the board. Show the students the `new` and `delete` keywords. Emphasize that every `new` MUST have a matching `delete`. Show the physical difference between the `.` and `->` operators.

## 4. "Pop Quiz" to check understanding
*Ask the class:*
1. *"Which memory automatically deletes itself: The Stack or The Heap?"* (Answer: The Stack)
2. *"If I use the `new` keyword to put an object on the Heap, what keyword MUST I use when I'm done?"* (Answer: `delete`)
3. *"If I am using a Pointer to access a Heap object, do I use the Dot (`.`) or the Arrow (`->`) operator?"* (Answer: The Arrow `->`)

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
