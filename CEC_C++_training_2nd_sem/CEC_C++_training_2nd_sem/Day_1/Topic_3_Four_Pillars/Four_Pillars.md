# Topic 3: The Four Pillars of OOP

## 1. What are the Four Pillars?
Object-Oriented Programming is built on four core concepts. These concepts are what make OOP so powerful for building large, professional applications (like video games, banking software, and operating systems).

1. **Encapsulation (Protection):** Bundling data (variables) and methods (functions) inside a class, and hiding sensitive data from the outside world using the `private` keyword.
2. **Abstraction (Simplicity):** Hiding the complex, messy implementation details of how something works, and only showing a simple interface (like a TV remote control).
3. **Inheritance (Reusability):** Creating a new "child" class that automatically gets all the features of a "parent" class, saving you from writing the same code twice.
4. **Polymorphism (Flexibility):** Meaning "many forms." It allows a single action/function name to behave differently depending on the object performing it.

## 2. 💡 Fun Facts
- **Greek Origins:** The word "Polymorphism" comes from ancient Greek! *Poly* means "many", and *morph* means "form". So it literally translates to "many forms"!
- **Real-World Inheritance:** In the popular game *The Sims*, every single character (adult, child, alien, vampire) inherits their core walking and talking code from a single master `Sim` parent class!

## 3. 🙋‍♂️ Interactive Classroom Activity: "The Animal Kingdom"
**Goal:** Physically demonstrate Polymorphism.
**Activity Steps:**
1. **The Parent Class:** The teacher says, "I am the `Animal` class. I have a method called `speak()`."
2. **The Child Classes:** Pick 3 students. 
   - Assign Student A to be the `Dog` object.
   - Assign Student B to be the `Cat` object.
   - Assign Student C to be the `Cow` object.
3. **The Polymorphism Test:** 
   - The teacher points to the Dog and says, "Execute `speak()`!" The student must bark.
   - The teacher points to the Cat and says, "Execute `speak()`!" The student must meow.
   - The teacher points to the Cow and says, "Execute `speak()`!" The student must moo.
4. **The Lesson:** Notice how the teacher used the *exact same command* (`speak()`), but every object responded in a completely different way based on its form. That is Polymorphism in action!

## 4. 🧠 Quick Quiz / Class Inputs
- *"If you drive a car, you use the steering wheel but you don't need to understand the complex combustion engine underneath. Which pillar is this?"* (Answer: Abstraction).
- *"A 'Gaming Laptop' has a screen and keyboard just like a standard 'Laptop', but it adds a powerful graphics card. Which pillar explains how the Gaming Laptop got the screen and keyboard?"* (Answer: Inheritance).

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, have the students open the **`Student_Task.cpp`** file. 
- **The Mission:** Today's task focuses on the first pillar: **Encapsulation**. They will create a `SmartPhone` class that hides a `private` battery level to prevent hackers from changing it!
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
