# 👨‍🏫 Trainer's README: Defining and Declaring Classes (The .h and .cpp split)

*This script uses the "Restaurant Menu vs The Kitchen" analogy to easily explain why we split C++ classes into Header files (.h) and Source files (.cpp).*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "Yesterday, we wrote all of our class code inside one giant file. That works fine for tiny programs. But imagine a video game with 10,000 lines of code. If you put that all in one file, your computer would freeze trying to scroll through it!
>
> Professional programmers split their classes into two separate files: A Header file (`.h`) and a Source file (`.cpp`). Today, we learn how to do exactly that!"

## 2. The Core Analogy: The Restaurant Menu 🍔

**Trainer Script:**
> "Let's imagine you go to a fancy restaurant. 
>
> 1. **The Header File (`.h`) is the Menu.** 
>    - When you sit down, the waiter hands you a menu. It just says: 'Burger, Fries, Pizza'. It does NOT tell you *how* to cook the burger. It just tells you what the restaurant is capable of doing. This is your **Declaration**.
>
> 2. **The Source File (`.cpp`) is the Kitchen.**
>    - Back in the kitchen, the chef has the actual recipe: 'Take meat, grill for 10 minutes, add cheese'. This is where the heavy lifting happens. This is your **Definition**.
>
> 3. **The `main.cpp` File is the Customer.**
>    - The customer only needs to `#include "Menu.h"`. The customer doesn't need to know how the food is cooked, they just need to see the menu to place an order!

## 3. Explaining the Include Guards (`#ifndef`)

**Trainer Script:**
> "What happens if a clumsy waiter accidentally hands you 5 identical menus? You'd be confused. In C++, if you accidentally include a menu twice, the compiler crashes and screams 'REDEFINITION ERROR!'
> 
> To fix this, we use **Include Guards**. They act like a Bouncer at the restaurant door. The bouncer checks: 'Has this customer already seen the menu? Yes? Then don't give them another one!'"

## 4. "Pop Quiz" to check understanding
*Ask the class:*
1. *"Which file acts like the restaurant menu, just listing the names of the functions?"* (Answer: The `.h` Header file)
2. *"Which file acts like the kitchen, containing the actual cooking instructions?"* (Answer: The `.cpp` Source file)
3. *"Why do we use `#ifndef` (Include Guards) at the top of our header files?"* (Answer: To prevent the computer from reading the same file twice and crashing).

---

## ▶️ How to Run the Code in this Folder
**Because there are multiple `.cpp` files that depend on each other, you MUST use the terminal to compile them together.**
1. Open Visual Studio Code terminal.
2. Navigate to this folder.
3. Compile the Example by typing: `g++ main_example.cpp Student.cpp -o example`
4. Run the Example by typing: `./example` (Mac) or `example.exe` (Windows).
