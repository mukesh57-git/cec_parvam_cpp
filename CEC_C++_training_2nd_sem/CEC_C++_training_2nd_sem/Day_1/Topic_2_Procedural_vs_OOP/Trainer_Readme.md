# 👨‍🏫 Trainer's README: Teaching Procedural vs OOP

*This script uses the "Restaurant Analogy" to perfectly illustrate the difference between micromanaging procedural code and utilizing smart OOP objects.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script (Say out loud):**
> "Yesterday we learned that OOP uses Classes and Objects. But *why* did programmers invent this? What were they doing before? Before OOP, they used something called **Procedural Programming**. Today, we are going to see why Procedural Programming can become a nightmare, and why OOP is the superhero that saved the coding world."

## 2. The Core Analogy: The Restaurant 🍝

**Trainer Script (Explaining Procedural):**
> "Imagine you go to a restaurant to eat pasta. 
> In **Procedural Programming**, you are forced to walk into the kitchen and tell the chef exactly how to cook it. You say: 'Turn on the stove. Put 2 cups of water in a pot. Boil the water. Put the pasta in. Wait 10 minutes. Drain the water. Add tomato sauce.'
> 
> You have to micromanage EVERY SINGLE STEP. If you forget one step, the kitchen catches on fire! The data (ingredients) and the actions (cooking) are completely separated. This is how old programming languages like C worked."

**Trainer Script (Explaining OOP):**
> "Now, imagine the **Object-Oriented Programming (OOP)** restaurant.
> You sit at your table. You look at the menu. You tell the waiter: 'I want Pasta.'
> 
> THAT'S IT! The `Chef` is an **Object**. The Chef already has the `cookPasta()` **Method** built inside them. You don't need to know *how* they cook it. You just press the button (call the method), and the Chef handles all the messy details behind closed doors. This is so much easier for you, the programmer!"

## 3. Explaining the Code
Open the two code files for the students on the projector:
1. **`Procedural_Restaurant.cpp`**: Show them how the data (variables like `isStoveOn`) and the actions (functions) are completely disconnected. The `main` function has to micromanage everything.
2. **`OOP_Restaurant.cpp`**: Show them the `Chef` class. Show how the data and methods are perfectly bundled together. Notice how clean and short the `main` function is!

## 4. "Pop Quiz" to check understanding
*Ask these out loud:*
1. *"If I have to tell a robot exactly how to move its gears to lift a box, is that Procedural or OOP?"*
   - **Answer:** Procedural.
2. *"If I just press a button that says 'LiftBox()' and the robot does it automatically, is that Procedural or OOP?"*
   - **Answer:** OOP!


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
