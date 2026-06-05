# Topic 5: Class and Object Syntax

## 1. The Grammar of OOP
Just like English has nouns and verbs, C++ has its own grammar (syntax) for building Classes and Objects.

Here is the exact syntax you must memorize:
```cpp
class ClassName {
private:
    // Hidden data goes here
public:
    // Visible data and methods go here
}; // NEVER FORGET THIS SEMICOLON!

int main() {
    ClassName objectName; // Creating the object
    objectName.methodName(); // Using the object
}
```

## 2. 💡 Fun Facts
- **The Missing Semicolon:** Forgetting the semicolon `};` at the end of a class is the #1 most common error made by C++ beginners. It will often cause the compiler to throw 50+ completely confusing error messages on the next line!
- **Default Privacy:** In C++, if you forget to write `public:` or `private:`, the compiler automatically makes EVERYTHING `private`. It assumes you want maximum security by default!

## 3. 🙋‍♂️ Interactive Classroom Activity: "The Bouncer"
**Goal:** Physically show how `private` and `public` work in memory.
**Activity Steps:**
1. **The Setup:** Have one student stand at the front. They are the `Object`. Give them a piece of paper with a "Secret Number" written on it.
2. **The Bouncer:** The student crosses their arms. They act as the "Private Bouncer."
3. **The `private` Test:** The Teacher (acting as the `main` function) tries to look at the paper. The student must say: *"ACCESS DENIED! That is private!"*
4. **The `public` Test:** The Teacher asks the student: *"Please execute your public `tellMeNumber()` method."* The student is then allowed to read the number out loud.
5. **The Lesson:** The main program cannot directly grab private data. It MUST ask the object to share it using a public method!

## 4. 🧠 Quick Quiz / Class Inputs
- *"What keyword do we use to start creating a blueprint?"* (Answer: `class`).
- *"What is the symbol we use to 'press a button' on an object, like `myCar.drive()`?"* (Answer: The dot operator `.`).

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, have the students open the **`Student_Task.cpp`** file. 
- **The Mission:** They must use correct syntax to build a `Student` class from scratch, including `private` grades and `public` studying methods.
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
