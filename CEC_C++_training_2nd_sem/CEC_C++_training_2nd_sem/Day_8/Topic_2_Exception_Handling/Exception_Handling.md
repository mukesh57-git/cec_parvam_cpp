# Topic 2: Exception Handling (`try`, `throw`, `catch`)

## 1. What is an Exception?
An **Exception** is a runtime error. It is something unexpected that happens while the program is running (like a user entering letters when asked for a number, or trying to divide by zero). If you don't handle exceptions, your program will CRASH!

## 2. The Three Keywords
To stop crashes, we use three special keywords:
1. **`try`**: Wraps around the "dangerous" code that might fail. (The Safety Net)
2. **`throw`**: Fires an error signal if something actually goes wrong. (The Flare Gun)
3. **`catch`**: Waits at the bottom to catch the error signal and deal with it safely. (The Rescue Worker)

## 3. How it Looks in C++

```cpp
#include <iostream>
#include <stdexcept> // Gives us standard exception types!

using namespace std;

int main() {
    int age;
    cout << "Enter your age: ";
    cin >> age;

    try {
        // 1. The Dangerous Code
        if (age < 0) {
            // 2. Fire the flare!
            throw invalid_argument("Age cannot be negative!"); 
        }
        if (age > 150) {
            throw out_of_range("You are not a vampire!");
        }
        
        // This line is SKIPPED if a throw happens above it!
        cout << "Wow, you are " << age << " years old!" << endl; 
        
    } 
    catch (const exception& e) { // 3. Catch the flare
        // e.what() prints out the message we wrote inside the throw!
        cout << "ERROR CAUGHT: " << e.what() << endl; 
    }

    cout << "The program continues running safely..." << endl;
}
```

## 4. 🙋‍♂️ Interactive Classroom Activity: "The Hot Potato"
**Goal:** Understand how the program flow jumps from `throw` to `catch`.
**Activity Steps:**
1. The Trainer designates one side of the room as the `try` block, and the other side as the `catch` block.
2. The Trainer hands a red ball (The Flare) to a student in the `try` block.
3. The student reads a line of code: *"User tries to divide by zero!"*
4. The student yells *"THROW!"* and tosses the red ball across the room.
5. A student in the `catch` block catches the ball, yells *"CAUGHT IT!"*, and reads the error message. 

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** You are programming an ATM for a bank! A user has $500 in their account. Write a `try/catch` block. If they try to withdraw more than $500, `throw` a `runtime_error`! If they try to withdraw a negative amount, `throw` an `invalid_argument`! Catch the errors safely without crashing.
- **The Solution:** A separate file named **`Task_Solution.cpp`** is provided.
