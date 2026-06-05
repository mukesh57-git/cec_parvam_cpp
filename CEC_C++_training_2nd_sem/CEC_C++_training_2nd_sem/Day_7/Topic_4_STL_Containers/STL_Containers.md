# Topic 4: STL Containers (Vectors, Stacks, Queues)

## 1. What is the STL?
The **Standard Template Library (STL)** is a massive collection of pre-written, highly optimized code provided by C++. It gives us "Containers" (data structures) and "Algorithms" (sorting/searching) so we don't have to write them from scratch!

## 2. Vectors (`#include <vector>`)
A vector is a **Dynamic Array**. It grows and shrinks automatically. It is the most commonly used container in C++.
- `push_back(value)`: Adds to the end (Fast!)
- `pop_back()`: Removes from the end (Fast!)
- `insert(...)`: Adds to the middle (Slow, shifts everything)
- `size()`: Returns how many items are inside

```cpp
vector<int> scores;
scores.push_back(100);
scores.push_back(95);
cout << scores[0]; // Prints 100
```

## 3. Stacks (`#include <stack>`)
A stack is a **LIFO (Last In, First Out)** structure. Think of a stack of plates or a Pringles can.
- `push(value)`: Adds to the top
- `pop()`: Removes from the top (Does NOT return the value!)
- `top()`: Looks at the top value

```cpp
stack<string> history;
history.push("Typed 'Hello'");
history.push("Deleted 'o'");
// To undo:
cout << history.top(); // Looks at "Deleted 'o'"
history.pop();         // Removes it
```

## 4. Queues (`#include <queue>`)
A queue is a **FIFO (First In, First Out)** structure. Think of a line at a grocery store.
- `push(value)`: Adds to the back of the line
- `pop()`: Removes from the front of the line
- `front()`: Looks at the front person

## 5. 🙋‍♂️ Interactive Classroom Activity: "The Buffet Line"
**Goal:** Physically demonstrate Stacks and Queues.
**Activity Steps:**
1. The Trainer asks 3 students to come to the front.
2. **The Queue:** The trainer tells them to form a "Queue" (a line). Student A is first, B is second, C is third. The Trainer says `pop()`. Who leaves? (Student A!). 
3. **The Stack:** The trainer tells them to form a "Stack" by placing their hands on top of each other. A's hand goes down first. B's hand goes on top of A. C's hand goes on top of B. The Trainer says `pop()`. Whose hand must leave first? (Student C!).

## 6. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** You are building an Operating System. You need a `vector` to hold open app names, a `stack` to manage the "Undo" history of a text document, and a `queue` to manage print jobs!
- **The Solution:** A separate file named **`Task_Solution.cpp`** is provided.
