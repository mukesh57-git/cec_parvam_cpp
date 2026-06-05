# Topic 2: Procedural vs. Object-Oriented Programming (OOP)

## 1. What is Procedural Programming?
Procedural Programming is the older style of writing code. It is a top-down approach where you write a list of instructions (procedures or functions) for the computer to follow step-by-step. Languages like **C** and **Pascal** use this approach. 
- **The Problem:** Data and functions are kept completely separate. As the program grows, it becomes a tangled mess (often called "Spaghetti Code") where any function can accidentally modify data it shouldn't touch.

## 2. How OOP Fixes This
As we learned in Topic 1, OOP bundles data and functions together into **Objects**. 
- **The Solution:** Instead of focusing on "What are the steps?", OOP focuses on "What are the objects?". By keeping the data locked inside the object, the code becomes incredibly organized and safe from accidental changes.

## 3. Side-by-Side Comparison

| Feature | Procedural Programming (e.g., C) | Object-Oriented Programming (e.g., C++) |
|---------|----------------------------------|-----------------------------------------|
| **Focus** | Focuses on *functions* (the logic/steps). | Focuses on *objects* (data + behavior). |
| **Data Security** | Data is usually global and moves freely. Not secure. | Data is hidden inside objects (Encapsulation). Very secure. |
| **Code Structure** | Spaghetti Code — hard to maintain for large apps. | Modular Code — easy to maintain and scale. |
| **Real World** | Very hard to map to real-world objects. | Directly mimics real-world objects. |

---

## 4. 💡 Fun Facts
- **The Birth of C++:** C++ was created in 1979 by Bjarne Stroustrup. Why? Because he loved the speed of the procedural `C` language, but he desperately needed the OOP features of `Simula` to organize his massive projects. So, C++ is basically "C with Classes"!
- **Space Shuttles:** Older spacecraft (like the Apollo missions) ran on purely procedural code. Modern systems (like SpaceX rockets) heavily utilize Object-Oriented design to manage thousands of complex, independent sensors and engines!

## 5. 🙋‍♂️ Interactive Classroom Activity: "The Robot Walk"
**Goal:** Physically demonstrate why Procedural programming becomes exhausting, and why OOP is better.
**Activity Steps:**
1. **The Procedural Robot:** Ask a student to stand up and act as a robot. Tell them they can only follow *explicit procedural instructions*. 
   - To make them walk to the door, the teacher must say: *"Lift left foot 2 inches. Move left foot forward 10 inches. Put foot down. Shift weight. Lift right foot..."* (It takes forever and is very annoying!)
2. **The OOP Robot:** Tell the student they are now an OOP `Robot` Object with a built-in method called `walkToDoor()`.
   - The teacher simply says: *"Robot, execute WalkToDoor()!"*
   - The student walks normally to the door.
3. **The Realization:** Explain that in OOP, the complex steps are hidden inside the object's method. The programmer (teacher) doesn't have to micromanage every single step!

## 6. 🧠 Quick Quiz / Class Inputs
- *"If I am writing code for a massive multiplayer game with 10,000 players, should I use Procedural or OOP?"* (Answer: OOP! Otherwise, tracking 10,000 players' data in loose variables would be impossible).
- *"Does C++ support Procedural programming?"* (Answer: Yes! Because C++ is an extension of C, you can actually write both styles in C++. But OOP is the modern standard).

## 7. 💻 Student Task (Hands-on Practice)
At the end of the lesson, have the students open the **`Student_Task.cpp`** file. 
- **The Mission:** They will see messy, procedural code for a Bank Account where data is loose. They must rewrite it into a clean OOP `BankAccount` class.
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
