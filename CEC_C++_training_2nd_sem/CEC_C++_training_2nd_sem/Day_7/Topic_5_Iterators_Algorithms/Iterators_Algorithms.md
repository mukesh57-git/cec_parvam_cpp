# Topic 5: Iterators and STL Algorithms

## 1. What is an Iterator?
An **Iterator** is an object that points to an element inside an STL container (like a vector or list). Think of it like your index finger pointing at words while you read a book.
- `begin()`: Points to the first element.
- `end()`: Points to the space *just after* the last element.

```cpp
vector<int> nums = {10, 20, 30};
auto finger = nums.begin();
cout << *finger; // Prints 10 (Notice we dereference it like a pointer!)
```

## 2. The Range-Based For Loop
Instead of writing clunky loops with `i`, modern C++ uses Iterators behind the scenes to give us the **Range-Based For Loop**. It is beautiful and easy to read:

```cpp
vector<string> names = {"Arjun", "Priya", "Rahul"};

// Reads as: "For every string 'n' inside 'names'..."
for (string n : names) {
    cout << n << endl;
}
```

## 3. The STL Spellbook (`#include <algorithm>`)
Instead of writing complex logic by hand, we use the STL Algorithms library. Most algorithms take two iterators (`begin` and `end`) so C++ knows what section of data to process.

- **`sort()`**: Sorts data in ascending order.
- **`reverse()`**: Flips the data backwards.
- **`count()`**: Counts how many times a specific value appears.
- **`find()`**: Searches for a value.

```cpp
vector<int> grades = {50, 90, 10, 90};

// Sort them lowest to highest!
sort(grades.begin(), grades.end());

// Count how many people got a 90!
int totalA = count(grades.begin(), grades.end(), 90);
```

## 4. 🙋‍♂️ Interactive Classroom Activity: "The Human Sort"
**Goal:** Understand how `begin()`, `end()`, and `sort()` work.
**Activity Steps:**
1. The Trainer asks 5 students to come up to the front. The Trainer gives each student a random piece of paper with a number on it (e.g., 99, 12, 45, 7, 82).
2. The Trainer points to the first student and yells: "`BEGIN()`!"
3. The Trainer points to the empty space *past* the 5th student and yells: "`END()`!"
4. The Trainer yells: "`SORT(BEGIN, END)!`"
5. The 5 students must quickly shuffle themselves into ascending numerical order! 

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** You are a data analyst! You are given a vector of random test scores. You must use algorithms to: Sort them, Reverse them (highest to lowest), and Count how many perfect 100s there are!
- **The Solution:** A separate file named **`Task_Solution.cpp`** is provided.
