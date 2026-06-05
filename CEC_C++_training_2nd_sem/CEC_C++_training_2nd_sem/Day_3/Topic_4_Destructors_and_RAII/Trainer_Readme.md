# 👨‍🏫 Trainer's README: Destructors & RAII

*This script uses the "Janitor" analogy to explain Destructors, and the "Rental Car" analogy to explain RAII (Resource Acquisition Is Initialization).*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "Imagine a video game where every time you shoot an enemy, their body just stays on the screen forever. Eventually, you shoot 1,000 enemies, the screen is full, your RAM fills up, and your computer crashes.
> 
> To stop this, C++ uses a **Destructor**. It is the exact opposite of a Constructor. It runs the exact millisecond an object dies or goes out of scope, and its job is to clean up the mess!"

## 2. The Core Analogies 🧹🚗

**Trainer Script:**
> "1. **The Destructor (The Janitor):** 
>    - The Destructor always has a tilde `~` before its name. When an object is about to be destroyed, the Janitor (`~Class()`) steps in, sweeps up all the dynamic memory (`delete`), closes any open files, and turns off the lights.
>
> 2. **RAII (The Rental Car):** 
>    - RAII stands for 'Resource Acquisition Is Initialization'. It is a fancy term for a simple rule: **Tie your resources to the object's lifespan.** 
>    - When you arrive at the airport (Constructor), you rent the car (acquire memory). When you leave the airport (Destructor), you return the keys (delete memory). Because the Destructor runs *automatically*, you can never accidentally steal the car (cause a Memory Leak)!"

## 3. Explaining the Code
Project `RAIIDemo.cpp` onto the board. Show the students how the Destructor is called automatically when the function ends. Emphasize that there is **NO `delete` keyword in the `main()` function**! The class cleans up after itself automatically. This is the magic of RAII.

## 4. "Pop Quiz" to check understanding
*Ask the class:*
1. *"What symbol do we use to define a Destructor?"* (Answer: The tilde `~`).
2. *"Can we overload a Destructor? Can we have 3 different Destructors?"* (Answer: NO! A class can only have exactly ONE destructor, and it takes absolutely zero parameters).
3. *"What happens if we allocate Heap memory (`new`) in our constructor, but forget to write a Destructor?"* (Answer: A Memory Leak! The RAM fills up and the computer crashes).

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
