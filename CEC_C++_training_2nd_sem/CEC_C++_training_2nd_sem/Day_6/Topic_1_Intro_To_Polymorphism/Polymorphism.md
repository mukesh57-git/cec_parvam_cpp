# Topic 1: Introduction to Polymorphism

## 1. What is Polymorphism?
Polymorphism comes from Greek:
- **Poly** = Many
- **Morph** = Form

In C++, **Polymorphism** means that a single function name, operator, or object can take on **Many Forms** and behave differently depending on the context.

## 2. The "Play" Analogy
Think about the English word "Play". The word is always the same, but the action changes depending on what you are playing!
- Play(Guitar) -> Strum strings
- Play(VideoGame) -> Use a controller
- Play(Movie) -> Press a button

In C++, we can do the same thing:
- `add(5, 10)` -> Adds two numbers (Math)
- `add("Hello", "World")` -> Combines two words (String Concatenation)
Same function name (`add`), totally different behaviors!

## 3. The Two Types of Polymorphism
C++ makes decisions about which "form" to use in two different ways:

### A. Compile-Time (Static Binding)
- **When:** Decided by the compiler *before* the program ever runs.
- **Speed:** Very fast! The compiler pre-calculates the decision.
- **Examples:** Function Overloading (having multiple functions with the same name but different parameters), Operator Overloading.

### B. Runtime (Dynamic Binding)
- **When:** Decided *while* the program is actively running.
- **Speed:** Slightly slower, because the computer has to pause and figure out what object it is looking at.
- **Flexibility:** Extremely flexible! 
- **Examples:** Virtual Functions and Method Overriding.

## 4. 🙋‍♂️ Interactive Classroom Activity: "Static or Dynamic?"
**Goal:** Learn to distinguish between Compile-Time and Runtime.
**Activity Steps:**
1. **The Game:** The Trainer gives a scenario. The class must yell **"COMPILE-TIME!"** (if it can be planned in advance) or **"RUNTIME!"** (if you have to wait and see what happens).
2. **Round 1:** You are packing a lunchbox for school. You know exactly what you are taking. (Students: COMPILE-TIME!)
3. **Round 2:** You are ordering food at a restaurant, but you haven't seen the menu yet. You have to wait until you are sitting down to decide. (Students: RUNTIME!)
4. **Round 3:** The compiler sees `add(5, 2)`. It immediately knows both are integers. (Students: COMPILE-TIME!)
5. **Round 4:** A generic `Animal` variable is waiting for user input. If the user types '1', it becomes a Dog. If they type '2', it becomes a Cat. (Students: RUNTIME!)

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** A simple conceptual task. You will be given a few `cout` statements. You must fill in the blanks with either "Compile-Time" or "Runtime" based on the scenario!
- **The Solution:** A separate file named **`Task_Solution.cpp`** is provided.
