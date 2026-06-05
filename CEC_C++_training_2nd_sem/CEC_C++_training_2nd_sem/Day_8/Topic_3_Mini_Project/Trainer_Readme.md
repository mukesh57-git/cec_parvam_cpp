# 👨‍🏫 Trainer's README: Mini Project (Library System)

*This is the Capstone Project for Day 8! It brings together Object-Oriented Programming, Vectors, File Handling, and Exception Handling.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "Congratulations! You have learned Classes, Vectors, File Handling, and Exceptions. You now possess all the skills needed to build a real-world software application. 
> 
> Today, we are building a Library Management System. It will store books, let users check them out, and most importantly... it will SAVE the data to the hard drive so the library never loses its records!"

## 2. Project Architecture
Explain the architecture of the project to the students.
1. **The `Book` Class:** Represents a single book. It knows how to format itself into a string so it can be written to a text file (e.g., `101|The Great Gatsby|F. Scott Fitzgerald|1925|0`).
2. **The `Library` Class:** Contains a `vector<Book>`. It is responsible for adding books, searching, and handling the `ifstream` (loading) and `ofstream` (saving).
3. **The `main()` Menu:** An infinite `do-while` loop that asks the user what they want to do until they press Exit.

## 3. Teaching Strategy for the Project
Since the project is quite large, it has been combined into a **single file** (`Student_Task.cpp`) to make it easy for students to compile and run using the VS Code "Play" button.

**Step 1:** Open `Student_Task.cpp` together as a class.
**Step 2:** Show them the `main()` menu. Let them run the code. They will notice that adding books works, but if they close the program and run it again, the books disappear! (Amnesia!)
**Step 3:** Point them to the `TODO` comments inside the `Library` class. Their job is to write the `loadFromFile()` and `saveToFile()` methods.
**Step 4:** Point them to the `issueBook()` method. Their job is to add `throw` statements if a book doesn't exist, and `try/catch` blocks in `main()` to prevent crashes.

## ▶️ How to Run the Code
**Method 1: Using VS Code (Recommended)**
1. Open `Task_Solution.cpp` or `Student_Task.cpp`.
2. Click the **"Play" button** (▷) in the top-right corner.
3. The program will automatically create `books.txt` in your folder as you add books!

**Method 2: Using the Terminal**
1. Open terminal and type: `g++ Task_Solution.cpp -o library`
2. Run it: `./library` (Mac) or `library.exe` (Windows).
