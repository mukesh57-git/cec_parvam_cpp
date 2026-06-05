# Topic 1: File Handling (`<fstream>`)

## 1. Curing Amnesia
To permanently save data to your hard drive, you must include the `<fstream>` (File Stream) library. This library provides two main tools:
- **`ofstream` (Output File Stream):** Used to write data to a file.
- **`ifstream` (Input File Stream):** Used to read data from a file.

## 2. Writing to a File (`ofstream`)
Writing to a file is exactly like writing to the terminal. Instead of using `cout`, you use your `ofstream` object!

```cpp
#include <fstream>

int main() {
    // 1. Create the pen and open the file
    ofstream outFile("my_data.txt");
    
    // 2. Check if the file successfully opened
    if (outFile.is_open()) {
        outFile << "Saving this text forever!" << endl; // Write to file!
        outFile.close(); // 3. Close the file!
    }
}
```
*Note: If "my_data.txt" does not exist, `ofstream` will automatically create it for you!*

## 3. Reading from a File (`ifstream`)
To read a file, we use `ifstream` combined with a `while` loop and the `getline()` function.

```cpp
#include <fstream>
#include <string>

int main() {
    // 1. Open the file with your eyes
    ifstream inFile("my_data.txt");
    string currentLine;
    
    if (inFile.is_open()) {
        // 2. Read line by line until the file is empty
        while (getline(inFile, currentLine)) {
            cout << currentLine << endl; // Print the line to the terminal
        }
        inFile.close(); // 3. Close the file!
    }
}
```

## 4. The `ios::app` Mode (Appending)
By default, `ofstream` destroys the old file and writes over it completely! If you want to **add** to an existing file instead of destroying it, you must open it in "Append" mode:
```cpp
ofstream outFile("log.txt", ios::app); // Opens file and jumps to the very bottom!
```

## 5. 🙋‍♂️ Interactive Classroom Activity: "The Invisible Ink"
**Goal:** Understand how `getline()` works.
**Activity Steps:**
1. The Trainer writes a secret message on the whiteboard, but covers it with sticky notes so it is hidden.
2. The Trainer calls a student up to be the `ifstream`.
3. The student points to the first sticky note. The class yells `getline()`! The student rips off the note, revealing the first line of text, and reads it aloud.
4. The class yells `getline()` again! The student rips off the second note and reads it.
5. The activity continues until there are no sticky notes left (End of File).

## 6. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** You are a Secret Agent. Your program must create a text file called `top_secret.txt`, write three lines of highly classified spy code into it, and then close it. Next, your program must immediately open that same file, read the secret message back, and print it to the screen!
- **The Solution:** A separate file named **`Task_Solution.cpp`** is provided.
