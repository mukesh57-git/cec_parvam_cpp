# 👨‍🏫 Trainer's README: Scope Resolution Operator (`::`)

*This script uses the "Which John?" (Last Name / Address) analogy to explain how `::` helps the computer find exactly which variable or function you are talking about.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "If you stand in the middle of a school and yell 'Hey John!', three different people named John might turn around. The computer has the exact same problem! 
> 
> If you have a Global variable named `score`, and a Local variable named `score`, and you tell the computer to `print(score)`, the computer gets confused. Today, we learn how to give our code a 'Last Name' using the Scope Resolution Operator `::`."

## 2. The Core Analogy: The Address Label 📍

**Trainer Script:**
> "The double colon `::` acts like a GPS address or a last name. It tells the computer exactly where to look.
>
> 1. **Defining Functions Outside a Class:** `void Student::study() { ... }`
>    - We use this in our `.cpp` files! We are telling the computer: 'Hey, this `study()` function isn't just floating around randomly. It specifically belongs to the `Student` family!'
>
> 2. **Accessing Global Variables:** `::score`
>    - If we have a local variable shadowing (hiding) a global variable, we can use `::` with nothing in front of it. This tells the computer: 'Ignore the local stuff. Go straight to the Global universe and grab `score`!'
>
> 3. **Static Variables:** `Math::pi`
>    - If a variable belongs to the entire class itself (not a specific object), we use `::` to access it directly from the blueprint."

## 3. Explaining the Code
Project `ScopeDemo.cpp` onto the board. Show the students the `printAll()` function. It has a local `value`, a class `this->value`, and a global `::value`. Show them how the output prints three completely different numbers!

## 4. "Pop Quiz" to check understanding
*Ask the class:*
1. *"If I have a local variable and a global variable with the exact same name, which one does the computer pick by default?"* (Answer: The local one—it shadows the global one!)
2. *"How do I force the computer to grab the global variable instead?"* (Answer: Put `::` in front of the name)
3. *"When we put `ClassName::FunctionName()`, what are we telling the computer?"* (Answer: We are telling it that the function belongs inside that specific class).

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
