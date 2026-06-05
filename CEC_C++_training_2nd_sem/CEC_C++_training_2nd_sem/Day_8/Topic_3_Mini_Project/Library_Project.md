# Topic 3: Mini Project - Library Management System

## 1. The Capstone Project
It is time to put everything you've learned together! You are going to finish building a **Library Management System**.

This system uses:
- **OOP:** `Book` and `Library` classes.
- **Vectors:** `vector<Book>` to store the inventory.
- **File Handling:** `<fstream>` to save the library database to a `.txt` file.
- **Exception Handling:** `try`, `catch`, and `throw` to stop the program from crashing if a user types something wrong.

## 2. The Data Format (Serialization)
When we save a `Book` object to a text file, we can't just throw the object into the file. We have to convert it into text first! This is called **Serialization**.

We will save our books in the text file separated by the `|` (pipe) character:
`ID | Title | Author | Year | Is_Issued`

**Example `books.txt`:**
```text
101|Harry Potter|J.K. Rowling|1997|0
102|1984|George Orwell|1949|1
```

## 3. 💻 Student Task (Your Mission)
Open the **`Student_Task.cpp`** file. You will see a lot of code has already been written for you (like the Menu and the `Book` class). 

Your job is to fix the missing pieces! Look for the `🛑 TODO` comments in the code.
1. **Fix the Amnesia:** Implement the `saveToFile()` method using `ofstream` so the library remembers its books!
2. **Read the Database:** Implement the `loadFromFile()` method using `ifstream` and `getline()`.
3. **Add Safety Nets:** In the `issueBook()` function, use `throw` if a user tries to issue a book that is already checked out!
4. **Catch the Flares:** In the `main()` menu, wrap the switch statement in a `try/catch` block to catch any errors.

*Stuck? Check the **`Task_Solution.cpp`** file!*
